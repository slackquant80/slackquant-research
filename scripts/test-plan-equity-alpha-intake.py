#!/usr/bin/env python3
"""Synthetic, offline, read-only tests of candidate review planning."""
import importlib.util
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

folder = Path(__file__).resolve().parent
src = folder / "plan-equity-alpha-intake.py"
spec = importlib.util.spec_from_file_location("ea_plan", src)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
r = m.receiver

fixture_src = folder / "test-receive-equity-alpha-intake.py"
fixture_spec = importlib.util.spec_from_file_location("ea_fixture", fixture_src)
f = importlib.util.module_from_spec(fixture_spec)
fixture_spec.loader.exec_module(f)


class PlanTests(unittest.TestCase):
    def test_existing_no_change(self):
        with TemporaryDirectory() as td:
            root = Path(td)
            bundle, sha = f.fixture(root)
            report = m.plan(bundle, root, sha, "a"*40, "b"*64)
            self.assertEqual(report["status"], "NO_CHANGE_NO_PR")
            self.assertEqual(report["files_written"], 0)
            self.assertEqual(len(report["file_records"]), 7)

    def test_changes_are_report_only(self):
        with TemporaryDirectory() as td:
            root = Path(td)
            bundle, sha = f.fixture(root)
            file = root / r.PREFIX / "assets/app.js"
            file.write_bytes(b"older hosted app")
            report = m.plan(bundle, root, sha, "a"*40, "b"*64)
            self.assertEqual(report["planned_changed_files"], [r.PREFIX+"assets/app.js"])
            self.assertEqual(file.read_bytes(), b"older hosted app")
            self.assertEqual(report["status"], "REVIEW_PLAN_ONLY_NOT_STAGED")

    def test_original_binary_and_eol_only_kept(self):
        with TemporaryDirectory() as td:
            root = Path(td)
            bundle, sha = f.fixture(root)
            text = root / r.PREFIX / "data/live_overlay.js"
            text.write_bytes(text.read_bytes().replace(b"\n",b"\r\n"))
            report = m.plan(bundle, root, sha, "a"*40, "b"*64)
            self.assertEqual(report["planned_changed_files"], [])
            binary = [x for x in report["file_records"] if x["binary_exact_only"]]
            self.assertEqual(len(binary), 1)
            self.assertEqual(binary[0]["transport_original_sha256"],
                             binary[0]["proposed_effective_sha256"])

    def test_wrong_bundle_pin_refused(self):
        with TemporaryDirectory() as td:
            root = Path(td)
            bundle, _ = f.fixture(root)
            with self.assertRaisesRegex(r.Hold, "BUNDLE_SHA_MISMATCH"):
                m.plan(bundle, root, "d"*64, "a"*40, "b"*64)


if __name__ == "__main__":
    unittest.main(verbosity=2)
