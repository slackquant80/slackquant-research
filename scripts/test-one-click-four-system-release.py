#!/usr/bin/env python3
"""Offline negative fixtures for the one-Pages release coordinator."""
import importlib.util
from pathlib import Path
from types import SimpleNamespace
import unittest
from unittest.mock import patch

SOURCE=Path(__file__).with_name("one-click-four-system-release.py")
spec=importlib.util.spec_from_file_location("oneclick_release",SOURCE)
mod=importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

class ReleaseSafety(unittest.TestCase):
    def test_unmerged_f2r_cannot_stage(self):
        args=SimpleNamespace(pds_adaa_pr=75,f2r_pr=15)
        def api(path,method="GET",data=None):
            if path=="repos/slackquant80/slackquant-research/git/ref/heads/main":
                return {"object":{"sha":"a"*40}}
            raise AssertionError("unexpected request "+path)
        def pull(repo,num):
            if repo==mod.HOST:
                return {"state":"open","base":{"sha":"a"*40,"ref":"main"},
                        "head":{"sha":"b"*40},"number":75}
            return {"state":"open","merged":False}
        with patch.object(mod,"gh",side_effect=api),\
             patch.object(mod,"pull",side_effect=pull),\
             patch.object(mod,"files",return_value=[
                "public/assets/systems/adaa/snapshot.js",
                "public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"]),\
             patch.object(mod,"tree",return_value={}):
            with self.assertRaisesRegex(mod.Hold,"F2R_SOURCE_REVIEW_NOT_APPROVED"):
                mod.source_inputs(args)

    def test_absent_equity_never_stages(self):
        args=SimpleNamespace(pds_adaa_pr=75,f2r_pr=15,stage=True)
        with patch.object(mod,"source_inputs",side_effect=mod.Hold("EQUITY_MISSING")),\
             patch.object(mod,"gh",side_effect=AssertionError("no mutations")):
            with self.assertRaisesRegex(mod.Hold,"EQUITY_MISSING"):
                mod.stage(args)

    def test_publish_requires_exact_approved_head(self):
        args=SimpleNamespace(approved_head="c"*40,wait_seconds=60)
        candidate={"head":{"sha":"d"*40},"number":99,"state":"open","draft":True}
        with patch.object(mod,"gh",side_effect=AssertionError("no github requests")):
            with self.assertRaisesRegex(mod.Hold,"NO_EXACT_HEAD"):
                mod.publish(args,candidate)

    def test_allowlist_exact(self):
        self.assertEqual(len(mod.EQUITY_PATHS),7)
        self.assertIn("public/dashboards/equity-alpha/data/live_overlay.js",mod.EQUITY_PATHS)
        self.assertNotIn("private/rights.json",mod.EQUITY_PATHS)

    def test_no_commands_triggered_by_import(self):
        self.assertEqual(mod.MARKER,"SLACKQUANT_ONE_PAGES_FOUR_SYSTEM_V1")

if __name__=="__main__":
    unittest.main()
