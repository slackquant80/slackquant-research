#!/usr/bin/env python3
"""Review-only receiver for source-owned Equity Alpha ZIP. Never publishes."""
import argparse,hashlib,json,re,sys
from pathlib import Path
from zipfile import ZipFile
PREFIX="public/dashboards/equity-alpha/"
NAMES=("index.html","assets/app.js","assets/holdings-view.js","assets/styles.css","data/dashboard_data.js","data/live_overlay.js","exports/Global_Equity_Alpha_Full_History.xlsx")
MANIFEST="EQUITY_ALPHA_HOSTED_INTAKE_MANIFEST.json"
ALLOWED={PREFIX+x for x in NAMES}|{MANIFEST}
def sha(b):return hashlib.sha256(b).hexdigest()
def hold(why):raise ValueError(why)
def validate(zip_path,expected):
    if not re.fullmatch("[a-f0-9]{64}",expected) or sha(zip_path.read_bytes())!=expected:hold("ZIP_SHA256_MISMATCH")
    with ZipFile(zip_path) as z:
        info=z.infolist()
        if len(info)!=len(ALLOWED) or {x.filename for x in info}!=ALLOWED:hold("UNEXPECTED_ZIP_FILES")
        if any(x.is_dir() or x.file_size>20000000 or x.compress_size>20000000 or ((x.external_attr>>16)&0o170000) not in (0,0o100000) for x in info):hold("INVALID_ZIP_MEMBER")
        if sum(x.file_size for x in info)>30050000:hold("OVERSIZED_ZIP_CONTENT")
        data={x.filename:z.read(x) for x in info}
    meta=json.loads(data[MANIFEST])
    if meta.get("schema")!="EQUITY_ALPHA_HOSTED_INTAKE_PROPOSAL_V1" or meta.get("candidate_kind")!="REVIEW_ONLY_NEVER_AUTODEPLOY" or meta.get("source_repository")!="slackquant80/research-equity-alpha" or meta.get("public_artifact_root")!=PREFIX or not re.fullmatch("[a-f0-9]{40}",str(meta.get("source_commit",""))):hold("SOURCE_PROVENANCE_FAIL")
    rows=meta.get("files")
    if not isinstance(rows,list) or len(rows)!=len(NAMES) or {x.get("path") for x in rows}!=ALLOWED-{MANIFEST}:hold("MANIFEST_SCOPE_FAIL")
    if any(type(x.get("size")) is not int or x["size"]!=len(data[x["path"]]) or x.get("sha256")!=sha(data[x["path"]]) for x in rows):hold("MANIFEST_SHA_FAIL")
    clock=meta.get("clock_and_accounting",{})
    if not re.fullmatch("[0-9]{4}-[0-9]{2}-[0-9]{2}",str(clock.get("market_data_through",""))):hold("NO_MARKET_CLOCK")
    if any(not re.fullmatch("[a-f0-9]{64}",str(meta.get(x,""))) for x in ("compute_receipt_sha256","rights_evidence_sha256")):hold("COMPUTE_OR_RIGHTS_RECEIPT_MISSING")
    return meta,data
def stage(zip_path,expected,root):
    meta,data=validate(zip_path,expected)
    root=root.resolve(strict=True)
    paths=[root/PREFIX/x for x in NAMES]
    if any(not p.is_file() or p.is_symlink() for p in paths):hold("EXPECTED_PLATFORM_FILES_MISSING")
    changed=[PREFIX+n for n,p in zip(NAMES,paths) if p.read_bytes()!=data[PREFIX+n]]
    for n,p in zip(NAMES,paths):
        if PREFIX+n in changed:p.write_bytes(data[PREFIX+n])
    return {"status":"REVIEW_ONLY_STAGE","changed":changed,"source_commit":meta["source_commit"],"market_data_through":meta["clock_and_accounting"]["market_data_through"]}
def main():
    p=argparse.ArgumentParser()
    p.add_argument("--candidate",type=Path,required=True)
    p.add_argument("--sha256",required=True)
    p.add_argument("--platform-root",type=Path,required=True)
    a=p.parse_args()
    print(json.dumps(stage(a.candidate,a.sha256,a.platform_root),sort_keys=True))
if __name__=="__main__":
    try:main()
    except (ValueError,OSError,KeyError) as e:
        print("EQUITY_ALPHA_HOSTED_INTAKE_HOLD: "+str(e),file=sys.stderr)
        sys.exit(2)
