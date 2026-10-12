#!/usr/bin/env python3
"""Synthetic ADAA hostile/positive fixtures: no network, private data or publication."""
from __future__ import annotations
import copy
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
import zipfile

PATH=Path(__file__).with_name("receive-adaa-hosted-intake.py")
spec=importlib.util.spec_from_file_location("adaa_intake",PATH)
v=importlib.util.module_from_spec(spec); spec.loader.exec_module(v)
MD5="0123456789abcdef0123456789abcdef"
COMMIT="a"*40
CLOCK="2026-10-09"

def asbytes(x): return json.dumps(x,sort_keys=True).encode()

def workbook():
    f=io.BytesIO()
    with zipfile.ZipFile(f,"w") as z:
        z.writestr("[Content_Types].xml","<Types/>")
        z.writestr("xl/workbook.xml","<workbook/>")
    return f.getvalue()

def fixture():
    snap={"snapshot_meta":{
        "contract_id":"ADAA_VIEW_SNAPSHOT_V1_0",
        "snapshot_class":"PUBLIC_SAFE",
        "validation_status":"PASS_RAW_PARITY",
        "canonical_calculation_source":"CANONICAL_ADAA_CALCULATION_AUTHORITY",
        "source_market_series_count":19, "final_decision_asset_count":18,
        "source_snapshot_md5":MD5,
        "source_snapshot_id":"ADAA_LOCAL_SOURCE_SNAPSHOT_MD5_"+MD5,
        "official_signal_month":"2026-09",
        "market_data_through":CLOCK,
        "generated_at":"2026-10-11 22:31:10 KST"},
        "decision_clock":{"market_data_through":CLOCK,"official_signal_month":"2026-09"},
        "decision_monitor":{"market_data_through":CLOCK},"performance":{}}
    bundle={"bundle_id":"ADAA_THIN_SHINY_PARALLEL_CANDIDATE_V1_0",
        "status":"PARALLEL_NOT_PRODUCTION","production_cutover_authorized":False,
        "public_snapshot_validation":"PASS_RAW_PARITY",
        "source_snapshot_md5":MD5,
        "files":sorted(v.FILES-{"bundle_manifest.json"})}
    docs={
        "app.R":b"# source acquisition none\n# Intentionally empty\nshiny::shinyApp(ui=ui,server=server)\n",
        "bundle_manifest.json":asbytes(bundle),
        "www/index.html":b"<html>ADAA<script src='snapshot.js'></script><script src='dashboard.js'></script><link href='adaa-theme.css'></html>",
        "www/adaa-theme.css":b"body{color:#111;}",
        "www/dashboard.js":b"const S=window.ADAA_SNAPSHOT; const x='ADAA_Portfolio_Target_History.xlsx';",
        "www/snapshot.js":b"window.ADAA_SNAPSHOT = "+asbytes(snap)+b";\n",
        "www/ADAA_Portfolio_Target_History.xlsx":workbook()}
    proposal={"contract":v.CONTRACT,"source_owner":"slackquant80/research-multiasset",
        "source_commit":COMMIT,"stage":"INTAKE_REVIEW_ONLY",
        "release_authorized":False,"public_deployment_authorized":False,
        "source_snapshot_md5":MD5,"market_data_through":CLOCK,
        "files":{name:{"sha256":v.sha(data),"bytes":len(data)} for name,data in docs.items()}}
    return docs,proposal

def zip_file(path,docs,proposal,extra=None):
    with zipfile.ZipFile(path,"w") as z:
        for name,b in docs.items(): z.writestr(name,b)
        z.writestr(v.META,asbytes(proposal))
        if extra: z.writestr(extra,b"unexpected")

class ReadOnlyHostileTests(unittest.TestCase):
    def test_happy_and_archive_roundtrip(self):
        files,proposal=fixture()
        self.assertEqual(v.verify(files,proposal)["market_data_through"],CLOCK)
        with tempfile.TemporaryDirectory() as d:
            p=Path(d)/"proposal.zip"
            zip_file(p,files,proposal)
            self.assertFalse(v.verify_archive(p)["publication_authorized"])

    def test_modified_public_payload(self):
        files,proposal=fixture()
        files["www/dashboard.js"]=b"tampered"
        with self.assertRaisesRegex(ValueError,"checksum"):v.verify(files,proposal)

    def test_private_marker_after_rehash(self):
        files,proposal=fixture()
        files["www/dashboard.js"]+=b"\n// _LOCAL_PRIVATE_DATA\n"
        proposal["files"]["www/dashboard.js"]={"sha256":v.sha(files["www/dashboard.js"]),"bytes":len(files["www/dashboard.js"])}
        with self.assertRaisesRegex(ValueError,"private/unsafe"):v.verify(files,proposal)

    def test_direct_publish_claim(self):
        files,proposal=fixture()
        proposal["public_deployment_authorized"]=True
        with self.assertRaisesRegex(ValueError,"publication boundary"):v.verify(files,proposal)

    def test_manifest_production_switch(self):
        files,proposal=fixture()
        bundle=json.loads(files["bundle_manifest.json"])
        bundle["production_cutover_authorized"]=True
        files["bundle_manifest.json"]=asbytes(bundle)
        proposal["files"]["bundle_manifest.json"]={"sha256":v.sha(files["bundle_manifest.json"]),"bytes":len(files["bundle_manifest.json"])}
        with self.assertRaisesRegex(ValueError,"non-production"):v.verify(files,proposal)

    def test_clock_tampering(self):
        files,proposal=fixture()
        proposal["market_data_through"]="2026-10-08"
        with self.assertRaisesRegex(ValueError,"clock"):v.verify(files,proposal)

    def test_public_clock_regression(self):
        files,proposal=fixture()
        with self.assertRaisesRegex(ValueError,"regression"):
            v.verify(files,proposal,{"snapshot_meta":{"market_data_through":"2026-10-12"}})

    def test_reject_archive_extra_and_duplicate(self):
        files,proposal=fixture()
        with tempfile.TemporaryDirectory() as d:
            p=Path(d)/"bad.zip"
            zip_file(p,files,proposal,"malicious.py")
            with self.assertRaisesRegex(ValueError,"count|inventory"):v.verify_archive(p)
            with zipfile.ZipFile(p,"w") as z:
                for name,b in files.items(): z.writestr(name,b)
                z.writestr(v.META,asbytes(proposal))
                z.writestr("www/snapshot.js",files["www/snapshot.js"])
            with self.assertRaisesRegex(ValueError,"duplicated|inventory"):v.verify_archive(p)

    def test_flat_github_release_assets_no_zip(self):
        files,proposal=fixture()
        with tempfile.TemporaryDirectory() as d:
            root=Path(d)
            for name,data in files.items():
                (root/Path(name).name).write_bytes(data)
            (root/v.META).write_bytes(asbytes(proposal))
            self.assertEqual(v.verify_assets_directory(root)["market_data_through"], CLOCK)
            (root/"extra.txt").write_text("unexpected")
            with self.assertRaisesRegex(ValueError,"count/names"):
                v.verify_assets_directory(root)

    def test_symlink_zip_forbidden(self):
        files,proposal=fixture()
        with tempfile.TemporaryDirectory() as d:
            p=Path(d)/"link.zip"
            with zipfile.ZipFile(p,"w") as z:
                for name,b in files.items():
                    i=zipfile.ZipInfo(name)
                    i.create_system=3
                    i.external_attr=((0o120777 if name=="www/dashboard.js" else 0o100644)<<16)
                    z.writestr(i,b)
                z.writestr(v.META,asbytes(proposal))
            with self.assertRaisesRegex(ValueError,"symlink"):v.verify_archive(p)

if __name__=="__main__":
    unittest.main(verbosity=2)
