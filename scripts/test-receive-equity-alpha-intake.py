#!/usr/bin/env python3
"""Offline synthetic stress tests; never invoke hosted release actions."""
import importlib.util
import io
import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest
from zipfile import ZipFile

SOURCE = Path(__file__).resolve().with_name("receive-equity-alpha-intake.py")
spec = importlib.util.spec_from_file_location("equity_receive", SOURCE)
r = importlib.util.module_from_spec(spec)
spec.loader.exec_module(r)

def fixture(root):
    h = {"meta": {"latestSignalMonth": "2026-09",
                  "performanceThroughCompletedDate": "2026-09-30", "benchmark": "ACWI"}}
    m = {"signalMonth": "2026-09", "holdingMonth": "2026-10",
         "executionDate": "2026-10-01", "completedCloseCutoff": "2026-09-30",
         "marketDataThrough": "2026-10-05", "productionAuthority": "v1.5.0.93"}
    live = {"meta": m,
            "preview": {"meta": {"officialSignalMonth": "2026-09",
                                 "officialHoldingMonth": "2026-10",
                                 "previewAsOf": "2026-10-05",
                                 "prospectiveSignalMonth": "2026-10"}},
            "currentCost": {"accounting": "UNIFIED_FINAL_PORTFOLIO", "costBpsPerSide": 10}}
    blobs = {}
    for rel in r.FILES:
        path = r.PREFIX + rel
        if rel == "data/dashboard_data.js":
            data = ("window.EA_HISTORY_DATA = " + json.dumps(h) + ";\n").encode()
        elif rel == "data/live_overlay.js":
            data = ("window.EA_LIVE_OVERLAY = " + json.dumps(live) + ";\n").encode()
        else:
            data = b"SYNTHETIC_PUBLIC_DATA_ONLY"
        blobs[path] = data
        file = root / path
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_bytes(data)
    c = {"official_signal_month": "2026-09", "official_holding_month": "2026-10",
         "execution_date": "2026-10-01", "completed_close_cutoff": "2026-09-30",
         "market_data_through": "2026-10-05", "preview_as_of": "2026-10-05",
         "preview_signal_month": "2026-10", "benchmark": "ACWI",
         "accounting": "UNIFIED_FINAL_PORTFOLIO", "cost_bps_per_side": 10,
         "production_authority": "v1.5.0.93"}
    manifest = {"schema": r.SCHEMA, "candidate_kind": "REVIEW_ONLY_NEVER_AUTODEPLOY",
                "source_repository": "slackquant80/research-equity-alpha",
                "source_commit": "a"*40, "public_artifact_root": r.PREFIX,
                "rights_evidence_sha256": "b"*64,
                "compute_receipt_sha256": "c"*64,
                "clock_and_accounting": c,
                "files": [{"path": k, "size": len(v), "sha256": r.digest(v)}
                          for k, v in sorted(blobs.items())]}
    blobs[r.MANIFEST] = json.dumps(manifest).encode()
    out = root / "candidate.zip"
    with ZipFile(out, "w") as z:
        for k, v in sorted(blobs.items()):
            z.writestr(k, v)
    return out, r.digest(out.read_bytes())

class ReadOnlyReceiver(unittest.TestCase):
    def test_identical_candidate_is_no_delta(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            result=r.preflight(p,root,sha,"a"*40,"b"*64)
            self.assertEqual(result["status"], "PASS_NO_MATERIAL_DELTA")
            self.assertFalse(result["deployed"])
    def test_changed_data_never_written(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            file=root/r.PREFIX/"index.html"
            file.write_bytes(b"OLDER_HOST")
            result=r.preflight(p,root,sha,"a"*40,"b"*64)
            self.assertEqual(result["status"],"PASS_REVIEW_READY_NOT_STAGED")
            self.assertEqual(file.read_bytes(),b"OLDER_HOST")
    def test_wrong_zip_sha_fails(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            with self.assertRaisesRegex(r.Hold,"BUNDLE_SHA_MISMATCH"):
                r.preflight(p,root,"d"*64,"a"*40,"b"*64)
    def test_rights_sha_mismatch_fails(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            with self.assertRaisesRegex(r.Hold,"WRONG_RIGHTS_EVIDENCE_SHA"):
                r.preflight(p,root,sha,"a"*40,"d"*64)
    def test_public_data_clock_regression_fails(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            file=root/r.PREFIX/"data/live_overlay.js"
            file.write_bytes(file.read_bytes().replace(b"2026-10-05",b"2026-10-10"))
            with self.assertRaisesRegex(r.Hold,"PUBLIC_CLOCK_REGRESSION"):
                r.preflight(p,root,sha,"a"*40,"b"*64)
    def test_extra_zip_member_fails(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,_=fixture(root)
            with ZipFile(p,"a") as z:
                z.writestr("../bad.txt",b"bad")
            with self.assertRaisesRegex(r.Hold,"BUNDLE_PATH_ALLOWLIST"):
                r.preflight(p,root,r.digest(p.read_bytes()),"a"*40,"b"*64)

    def test_text_only_crlf_is_no_material_delta(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            file=root/r.PREFIX/"data/live_overlay.js"
            file.write_bytes(file.read_bytes().replace(b"\n", b"\r\n"))
            result=r.preflight(p,root,sha,"a"*40,"b"*64)
            path=r.PREFIX+"data/live_overlay.js"
            self.assertEqual(result["status"],"PASS_NO_MATERIAL_DELTA")
            self.assertEqual(result["changed_paths"],[])
            self.assertEqual(result["eol_only_equivalent_paths"],[path])
            self.assertEqual(
                result["proposed_text_lf_or_binary_exact_sha256"][path],
                r.digest(file.read_bytes().replace(b"\r\n",b"\n")))
            self.assertEqual(file.read_bytes()[-2:],b"\r\n")

    def test_bare_cr_rejected_not_ignored(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            file=root/r.PREFIX/"assets/app.js"
            file.write_bytes(b"unrecognized\rbreak")
            with self.assertRaisesRegex(r.Hold,"BARE_CR_IN_PUBLIC_TEXT"):
                r.preflight(p,root,sha,"a"*40,"b"*64)

    def test_xlsx_must_match_raw_bytes(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            path=r.PREFIX+"exports/Global_Equity_Alpha_Full_History.xlsx"
            file=root/path
            file.write_bytes(file.read_bytes()+b"\r\n")
            result=r.preflight(p,root,sha,"a"*40,"b"*64)
            self.assertEqual(result["changed_paths"],[path])
            self.assertEqual(result["eol_only_equivalent_paths"],[])

    def test_completed_clock_regression_even_same_market_date(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            file=root/r.PREFIX/"data/live_overlay.js"
            file.write_bytes(file.read_bytes().replace(b"2026-09-30",b"2026-10-01"))
            with self.assertRaisesRegex(r.Hold,"PUBLIC_CLOCK_REGRESSION_completedCloseCutoff"):
                r.preflight(p,root,sha,"a"*40,"b"*64)

    def test_signal_month_regression_rejected(self):
        with TemporaryDirectory() as td:
            root=Path(td); p,sha=fixture(root)
            file=root/r.PREFIX/"data/live_overlay.js"
            file.write_bytes(file.read_bytes().replace(b'"signalMonth": "2026-09"',b'"signalMonth": "2026-10"'))
            with self.assertRaisesRegex(r.Hold,"PUBLIC_SIGNAL_MONTH_REGRESSION"):
                r.preflight(p,root,sha,"a"*40,"b"*64)

if __name__=="__main__":
    unittest.main(verbosity=2)
