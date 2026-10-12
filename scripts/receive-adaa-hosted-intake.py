#!/usr/bin/env python3
"""Strict ADAA Thin candidate verifier. This command NEVER changes or publishes files."""
from __future__ import annotations
import argparse
from datetime import date
import hashlib
import io
import json
from pathlib import Path
import re
import sys
import zipfile

CONTRACT = "ADAA_HOSTED_INTAKE_PROPOSAL_V1"
META = "ADAA_HOSTED_INTAKE_PROPOSAL.json"
FILES = frozenset(("app.R", "bundle_manifest.json", "www/index.html",
    "www/adaa-theme.css", "www/dashboard.js", "www/snapshot.js",
    "www/ADAA_Portfolio_Target_History.xlsx"))
FORBIDDEN = tuple(s.encode() for s in (
    "_local_private_data", "_local_runtime", "_local_cache",
    "c:\\sk_main", "c:/sk_main", "fred_api_key", "fred_key.r",
    "adaa_final.rmd", "quantmod::getsymbols(", "fredr_set_key",
    "rsconnect::deployapp(", "gh_token=", "github_token="))

def need(value, msg):
    if not value: raise ValueError(msg)

def sha(b): return hashlib.sha256(b).hexdigest()

def obj(b):
    j = json.loads(b.decode("utf-8-sig"))
    need(isinstance(j, dict), "JSON object required")
    return j

def day(d):
    need(isinstance(d, str) and bool(re.fullmatch(r"20\d\d-\d\d-\d\d", d)), "bad date format")
    date.fromisoformat(d)
    return d

def unpack(path):
    need(path.is_file() and not path.is_symlink() and path.stat().st_size <= 32*1024*1024,
         "archive unavailable, linked or oversize")
    files = {}
    with zipfile.ZipFile(path, allowZip64=False) as z:
        infos = z.infolist()
        names = [x.filename for x in infos]
        need(len(names)==8 and len(set(names))==8 and set(names)==FILES|{META},
             "non-exact or duplicated transport inventory")
        total = 0
        for x in infos:
            n = x.filename
            need(not n.startswith("/") and "\\" not in n and
                 all(p not in ("", ".", "..") for p in n.split("/")),
                 "unsafe transport path")
            need(((x.external_attr>>16)&0o170000) in (0,0o100000) and not x.is_dir(),
                 "symlink or directory member")
            need(0 < x.file_size <= 24*1024*1024, "oversize/empty member")
            total += x.file_size
            need(total <= 48*1024*1024, "expanded-size cap")
            files[n] = z.read(x)
    return {k:v for k,v in files.items() if k!=META},obj(files[META])

def verify(files, proposal, previous=None):
    need(set(files)==FILES, "unexpected candidate files")
    need(proposal.get("contract")==CONTRACT and
         proposal.get("source_owner")=="slackquant80/research-multiasset" and
         proposal.get("stage")=="INTAKE_REVIEW_ONLY" and
         proposal.get("release_authorized") is False and
         proposal.get("public_deployment_authorized") is False,
         "unapproved source/publication boundary")
    need(re.fullmatch(r"[a-f0-9]{40}", str(proposal.get("source_commit",""))),
         "missing exact source commit")
    indexed = proposal.get("files")
    need(isinstance(indexed,dict) and set(indexed)==FILES, "indexed inventory mismatch")
    for name, data in files.items():
        f = indexed[name]
        need(isinstance(f,dict) and f.get("sha256")==sha(data) and
             f.get("bytes")==len(data), "file checksum/length mismatch: "+name)
        if name.endswith((".R",".json",".js",".html",".css")):
            need(not any(v in data.lower() for v in FORBIDDEN),
                 "private/unsafe marker: "+name)

    bundle = obj(files["bundle_manifest.json"])
    need(bundle.get("bundle_id")=="ADAA_THIN_SHINY_PARALLEL_CANDIDATE_V1_0" and
         bundle.get("status")=="PARALLEL_NOT_PRODUCTION" and
         bundle.get("production_cutover_authorized") is False and
         bundle.get("public_snapshot_validation")=="PASS_RAW_PARITY" and
         set(bundle.get("files") or [])==FILES-{"bundle_manifest.json"},
         "Thin validated non-production bundle contract mismatch")
    smd5 = bundle.get("source_snapshot_md5")
    need(isinstance(smd5,str) and re.fullmatch(r"[a-f0-9]{32}",smd5),
         "missing source MD5")

    js = files["www/snapshot.js"].decode("utf-8-sig")
    m = re.fullmatch(r"\s*window\.ADAA_SNAPSHOT\s*=\s*(\{.*\})\s*;\s*",js,re.S)
    need(m, "snapshot.js not pure JSON assignment")
    snap = obj(m.group(1).encode("utf-8"))
    meta = snap.get("snapshot_meta"); clock = snap.get("decision_clock")
    monitor = snap.get("decision_monitor")
    need(isinstance(meta,dict) and isinstance(clock,dict) and
         isinstance(monitor,dict) and isinstance(snap.get("performance"),dict),
         "incomplete snapshot")
    need(meta.get("contract_id")=="ADAA_VIEW_SNAPSHOT_V1_0" and
         meta.get("snapshot_class")=="PUBLIC_SAFE" and
         meta.get("validation_status")=="PASS_RAW_PARITY" and
         meta.get("canonical_calculation_source")=="CANONICAL_ADAA_CALCULATION_AUTHORITY" and
         meta.get("source_market_series_count")==19 and
         meta.get("final_decision_asset_count")==18, "snapshot schema/asset mismatch")
    need(meta.get("source_snapshot_md5")==smd5 and
         meta.get("source_snapshot_id")=="ADAA_LOCAL_SOURCE_SNAPSHOT_MD5_"+smd5 and
         proposal.get("source_snapshot_md5")==smd5, "source ID mismatch")
    through = day(meta.get("market_data_through"))
    need(clock.get("market_data_through")==through and
         monitor.get("market_data_through")==through and
         proposal.get("market_data_through")==through, "market clock mismatch")
    official=meta.get("official_signal_month")
    need(isinstance(official,str) and re.fullmatch(r"20\d\d-(0[1-9]|1[0-2])",official)
         and official <= through[:7] and clock.get("official_signal_month")==official,
         "official clock mismatch")
    if previous is not None:
        need(through>=day(previous["snapshot_meta"]["market_data_through"]),
             "public clock regression")

    html=files["www/index.html"].decode("utf-8-sig")
    dash=files["www/dashboard.js"].decode("utf-8-sig")
    app=files["app.R"].decode("utf-8-sig")
    need(all(x in html for x in ("snapshot.js","dashboard.js","adaa-theme.css"))
         and "ADAA" in html and "window.ADAA_SNAPSHOT" in dash
         and "ADAA_Portfolio_Target_History.xlsx" in dash,
         "ADAA browser renderer contract mismatch")
    need("shiny::shinyApp" in app and "Intentionally empty" in app
         and "source acquisition" in app.lower(),
         "Shiny wrapper must be noncomputing")
    book=files["www/ADAA_Portfolio_Target_History.xlsx"]
    need(book.startswith(b"PK\x03\x04"),"XLSX header missing")
    with zipfile.ZipFile(io.BytesIO(book)) as x:
        names=x.namelist()
        need(len(names)==len(set(names)) and
             "[Content_Types].xml" in names and "xl/workbook.xml" in names
             and all("vbaproject" not in n.lower() and not n.lower().endswith(".exe") for n in names),
             "XLSX inventory invalid")
    return {"market_data_through":through,"official_signal_month":official,
            "source_snapshot_md5":smd5,"source_commit":proposal["source_commit"],
            "files":len(files),"publication_authorized":False}

def verify_archive(path, previous=None):
    return verify(*unpack(path), previous=previous)

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("archive",type=Path)
    a=p.parse_args()
    try: result=verify_archive(a.archive)
    except (OSError,ValueError,UnicodeError,zipfile.BadZipFile) as e:
        print("ADAA_HOSTED_INTAKE_REVIEW_HOLD",str(e),file=sys.stderr); return 2
    print("ADAA_HOSTED_INTAKE_READONLY_PASS",json.dumps(result,sort_keys=True))
    print("NO_GIT_WRITE_NO_PUBLICATION=TRUE")
    return 0

if __name__=="__main__":
    raise SystemExit(main())
