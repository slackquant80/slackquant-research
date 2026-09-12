from __future__ import annotations

import argparse
import csv
import hashlib
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape


def _col_letter(n: int) -> str:
    out = ""
    while n:
        n, r = divmod(n - 1, 26)
        out = chr(65 + r) + out
    return out


def _sheet_xml(rows, percent_cols=None) -> str:
    percent_cols = percent_cols or set()
    xml_rows = []
    for r_idx, row in enumerate(rows, 1):
        cells = []
        for c_idx, value in enumerate(row, 1):
            ref = f"{_col_letter(c_idx)}{r_idx}"
            if c_idx in percent_cols and r_idx > 1 and value not in ("", None):
                try:
                    cells.append(f'<c r="{ref}" s="1"><v>{float(value):.16g}</v></c>')
                    continue
                except Exception:
                    pass
            txt = "" if value is None else str(value)
            cells.append(f'<c r="{ref}" t="inlineStr"><is><t>{escape(txt)}</t></is></c>')
        xml_rows.append(f'<row r="{r_idx}">{"".join(cells)}</row>')
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetData>' + "".join(xml_rows) + '</sheetData></worksheet>'


def write_recent_xlsx_from_csv(csv_path: Path, xlsx_path: Path) -> None:
    with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
        records = list(csv.DictReader(f))
    if len(records) != 12:
        raise RuntimeError(f"Expected exactly 12 governed recent-return rows; found {len(records)}")
    rows = [["Month", "PDS + Dynamic FX (5bp)", "PDS Core", "F2R", "ADAA", "Dynamic FX Authority"]]
    for r in records:
        rows.append([r["holding_month"], r["dynamic_fx_5bp"], r["pds_core"], r["f2r"], r["adaa"], r["dynamic_fx_layer_status"]])
    csv_sha = hashlib.sha256(csv_path.read_bytes()).hexdigest()
    metadata = [["Field", "Value"],["Core policy", "Governed strategic allocation; exact provider composition private"],["Dynamic FX authority", "DELAYED_PUBLIC_NON_CANONICAL_SPOT_SENSITIVITY"],["Disclosure", "Historical delayed sensitivity only; not the current FX overlay state."],["Source", "SlackQuant PDS public-safe governed export"],["CSV SHA256", csv_sha]]
    content_types='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>'''
    package_rels='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'''
    workbook='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Recent 12M" sheetId="1" r:id="rId1"/><sheet name="Metadata" sheetId="2" r:id="rId2"/></sheets></workbook>'''
    workbook_rels='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'''
    styles='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="0.0%"/></numFmts><fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts><fills count="1"><fill><patternFill patternType="none"/></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs></styleSheet>'''
    xlsx_path.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(xlsx_path,"w",zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml",content_types);z.writestr("_rels/.rels",package_rels);z.writestr("xl/workbook.xml",workbook);z.writestr("xl/_rels/workbook.xml.rels",workbook_rels);z.writestr("xl/styles.xml",styles);z.writestr("xl/worksheets/sheet1.xml",_sheet_xml(rows,{2,3,4,5}));z.writestr("xl/worksheets/sheet2.xml",_sheet_xml(metadata))


def main() -> int:
    ap=argparse.ArgumentParser();ap.add_argument('--csv',required=True,type=Path);ap.add_argument('--xlsx',required=True,type=Path);args=ap.parse_args();write_recent_xlsx_from_csv(args.csv,args.xlsx);print('PDS_RECENT_12M_XLSX_PASS');return 0

if __name__=='__main__':raise SystemExit(main())
