#!/usr/bin/env python3
"""Fast synthetic positive/negative intake tests; no models or private files."""
import hashlib,importlib.util,json,tempfile
from pathlib import Path
from zipfile import ZipFile
module=Path(__file__).with_name("receive-equity-alpha-hosted-intake.py")
spec=importlib.util.spec_from_file_location("receiver",module)
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
with tempfile.TemporaryDirectory() as temp:
    root=Path(temp);platform=root/"site";platform.mkdir()
    data={m.PREFIX+x:b"public fixture" for x in m.NAMES}
    for name in data:
        p=platform/name;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(b"old")
    meta={"schema":"EQUITY_ALPHA_HOSTED_INTAKE_PROPOSAL_V1","candidate_kind":"REVIEW_ONLY_NEVER_AUTODEPLOY","source_repository":"slackquant80/research-equity-alpha","source_commit":"a"*40,"public_artifact_root":m.PREFIX,"clock_and_accounting":{"market_data_through":"2026-11-03"},"compute_receipt_sha256":"b"*64,"rights_evidence_sha256":"c"*64,"files":[{"path":k,"size":len(v),"sha256":m.sha(v)} for k,v in data.items()]}
    z=root/"candidate.zip"
    with ZipFile(z,"w") as f:
        for k,v in data.items():f.writestr(k,v)
        f.writestr(m.MANIFEST,json.dumps(meta))
    digest=m.sha(z.read_bytes())
    assert len(m.stage(z,digest,platform)["changed"])==len(m.NAMES)
    assert not m.stage(z,digest,platform)["changed"]
    for bad in ("0"*64,"bad"):
        try:m.validate(z,bad)
        except ValueError:pass
        else:raise AssertionError("incorrect hash accepted")
    meta["files"][0]["sha256"]="0"*64
    with ZipFile(root/"tampered.zip","w") as f:
        for k,v in data.items():f.writestr(k,v)
        f.writestr(m.MANIFEST,json.dumps(meta))
    t=root/"tampered.zip"
    try:m.validate(t,m.sha(t.read_bytes()))
    except ValueError:pass
    else:raise AssertionError("tampered manifest accepted")
    with ZipFile(root/"traversal.zip","w") as f:f.writestr("../secret",b"leak")
    t=root/"traversal.zip"
    try:m.validate(t,m.sha(t.read_bytes()))
    except ValueError:pass
    else:raise AssertionError("path traversal accepted")
print("EQUITY_HOSTED_RECEIVER_TESTS_PASS")
