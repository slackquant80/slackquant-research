#!/usr/bin/env python3
"""Synthetic no-network acceptance for the four-system full-snapshot release gate."""
import importlib.util
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

    def test_skipped_draft_ci_never_counts_as_success(self):
        self.pr["draft"] = True
        self.ci = [{"name": "build", "status": "completed",
                    "conclusion": "skipped"}]
        reasons = self.assess()["hold_reasons"]
        self.assertIn("COMBINED_PAGES_RELEASE_VALIDATION_NOT_PASS", reasons)
        self.assertIn("DRAFT_REVIEW_PENDING", reasons)

if __name__ == "__main__":
    unittest.main()
