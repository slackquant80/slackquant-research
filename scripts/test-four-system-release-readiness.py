#!/usr/bin/env python3
"""Synthetic no-network acceptance for the four-system full-snapshot release gate."""
import importlib.util
import json
from types import SimpleNamespace
from unittest.mock import patch
from pathlib import Path
import unittest

source = Path(__file__).with_name("four-system-release-readiness.py")
spec = importlib.util.spec_from_file_location("four_readiness", source)
gate = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gate)

class FullSnapshotNoChangeTests(unittest.TestCase):
    def setUp(self):
        self.pr = {"number": 100, "state": "open", "draft": False,
                   "mergeable": True, "head": {"sha": "a"*40},
                   "base": {"ref": "main"}}
        self.tree = set(gate.REQUIRED.values())
        self.changed = {gate.REQUIRED["PDS"], gate.REQUIRED["ADAA"]}
        self.clocks = {"PDS": "2026-11-10", "F2R": "2026-11-10",
                       "EquityAlpha": "2026-11-10"}
        self.ci = [{"name": "build", "status": "completed",
                    "conclusion": "success"}]

    def assess(self):
        return gate.assess(self.pr, self.changed, self.tree,
                           self.clocks, self.ci, self.pr["head"]["sha"])

    def test_zero_delta_f2r_equity_are_legitimately_reused(self):
        report = self.assess()
        self.assertEqual(report["readiness"],
            "GATE_PASSED_REQUIRES_EXPLICIT_OWNER_AUTHORIZATION")
        self.assertEqual(report["unchanged_artifacts_reused"], ["EquityAlpha","F2R"])
        self.assertFalse(report["publication_performed"])

    def test_old_f2r_public_mtd_must_hold(self):
        self.clocks["F2R"] = "2026-11-09"
        self.assertIn("F2R_STALE_BELOW_PDS_CLOCK",
                      self.assess()["hold_reasons"])

    def test_old_equity_public_mtd_must_hold(self):
        self.clocks["EquityAlpha"] = "2026-11-06"
        self.assertIn("EQUITYALPHA_STALE_BELOW_PDS_CLOCK",
                      self.assess()["hold_reasons"])

    def test_missing_file_in_full_tree_holds(self):
        self.tree.remove(gate.REQUIRED["F2R"])
        self.assertIn("F2R_RELEASE_ARTIFACT_ABSENT", self.assess()["hold_reasons"])

    def test_candidate_clocks_read_market_receipt_not_kst_publication_date(self):
        mark="public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        paths={gate.REQUIRED["PDS"]:"a"*40,
               gate.REQUIRED["F2R"]:"b"*40,
               gate.REQUIRED["EquityAlpha"]:"c"*40,
               mark:"d"*40}
        raw={
            "a"*40:json.dumps({"status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS",
                                "public_as_of_date":"2026-11-11"}).encode(),
            "d"*40:json.dumps({"status":"PASS","official_mark_through":"2026-11-10"}).encode(),
            "b"*40:json.dumps({"schema_version":"2.0",
                 "live_state":{"official":{"holdings":[
                     {"asset":x,"target_weight":.25} for x in ("EWY","QQQ","SPY","DBC")]},
                     "current_mtd":{"available":True,"as_of_date":"2026-11-10"},
                     "preview":{"available":True,"market_cutoff_date":"2026-11-10"}}}).encode(),
            "c"*40:b'window.EA_LIVE_OVERLAY = {"meta":{"benchmark":"ACWI","marketDataThrough":"2026-11-10"}};',
        }
        with patch.object(gate,"published_blob",side_effect=lambda sha:raw[sha]):
            clocks=gate.candidate_clocks(paths)
        self.assertEqual(clocks["PDS"],"2026-11-10")
        self.assertEqual(clocks["PDS_PUBLIC_AS_OF"],"2026-11-11")
        self.assertEqual(clocks["F2R"],"2026-11-10")
        self.assertEqual(clocks["EquityAlpha"],"2026-11-10")

    def test_readonly_gh_json_uses_utf8_bytes_under_windows_cp949(self):
        payload=json.dumps({"title":"금융 리서치","number":123},ensure_ascii=False).encode("utf-8")
        with patch.object(gate.subprocess,"run",return_value=SimpleNamespace(
             stdout=payload,stderr=b"",returncode=0)) as run:
            got=gate.gh_json("repos/sample/pulls/123")
        self.assertEqual(got["title"],"금융 리서치")
        self.assertFalse(run.call_args.kwargs["text"])

    def test_skipped_draft_ci_never_counts_as_success(self):
        self.pr["draft"] = True
        self.ci = [{"name": "build", "status": "completed",
                    "conclusion": "skipped"}]
        reasons = self.assess()["hold_reasons"]
        self.assertIn("COMBINED_PAGES_RELEASE_VALIDATION_NOT_PASS", reasons)
        self.assertIn("DRAFT_REVIEW_PENDING", reasons)

if __name__ == "__main__":
    unittest.main()
