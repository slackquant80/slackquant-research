from __future__ import annotations

import sys
import zipfile
from pathlib import Path


def need_text(root: Path, rel: str, token: str) -> None:
    p = root / rel
    if not p.is_file():
        raise RuntimeError(f"Missing file: {rel}")
    text = p.read_text(encoding="utf-8-sig", errors="ignore")
    if token not in text:
        raise RuntimeError(f"Missing token in {rel}: {token}")


def main() -> int:
    if len(sys.argv) != 2:
        raise SystemExit('Usage: validate-platform-final-gap.py "<slackquant-research root>"')
    root = Path(sys.argv[1]).resolve()

    need_text(root, "src/data/methods.ts", '"scenario-stress-lab": {')
    need_text(root, "src/data/methods.ts", "Missing system-specific method context")
    need_text(root, "src/data/systems.ts", 'dateLabel: "On-demand release series"')
    need_text(root, "src/app/systems/scenario-stress-lab/page.tsx", "Open Dashboard ↗")
    need_text(root, "src/app/systems/scenario-stress-lab/guide/page.tsx", "Open Dashboard ↗")
    need_text(root, "src/app/research/adaa/page.tsx", "canonical 19-ETF snapshot is validated")
    need_text(root, "src/data/research.ts", "papers.cfm?abstract_id=7340100")
    need_text(root, "src/app/systems/pds/page.tsx", "public_recent_12m_returns.xlsx")
    need_text(root, "src/app/systems/pds/page.tsx", "12-month table Excel (.xlsx)")
    need_text(root, "src/app/systems/pds/page.tsx", "PDS + Dynamic FX (5bp)")
    need_text(root, "src/app/systems/pds/page.tsx", "historical comparison series only")
    need_text(root, "public/methods/index.html", "application-driven rather than encyclopedic")

    xlsx = root / "public/data/systems/pds/public_recent_12m_returns.xlsx"
    if not xlsx.is_file():
        raise RuntimeError("PDS 12-month XLSX missing")
    with zipfile.ZipFile(xlsx) as z:
        required = {
            "[Content_Types].xml",
            "xl/workbook.xml",
            "xl/worksheets/sheet1.xml",
            "xl/worksheets/sheet2.xml",
        }
        if not required.issubset(set(z.namelist())):
            raise RuntimeError("PDS 12-month XLSX structure invalid")

    print("PLATFORM_FINAL_GAP_VALIDATION_PASS")
    print("Stress Lab system context/date/CTA: PASS")
    print("ADAA v3.93 research/runtime wording: PASS")
    print("Methods application-driven principle: PASS")
    print("PDS real 12-month XLSX: PASS")
    print("Price-Macro canonical SSRN URL: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
