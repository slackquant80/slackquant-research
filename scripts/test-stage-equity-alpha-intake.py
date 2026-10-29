#!/usr/bin/env python3
"""Offline disposable-Git fixtures for Equity Alpha review-only staging."""
from contextlib import ExitStack
import importlib.util
from pathlib import Path
import shutil
import subprocess
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch

HERE = Path(__file__).resolve().parent


def module(name, path):
    spec = importlib.util.spec_from_file_location(name, HERE / path)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


stage = module("equity_stage_test", "stage-equity-alpha-intake.py")
fixture = module("equity_fixture_test", "test-receive-equity-alpha-intake.py")


def git(root, *args):
    result = subprocess.run(["git", "-C", str(root), *args], capture_output=True,
                            text=True, check=True, timeout=20)
    return result.stdout.rstrip("\r\n")


class EquityStageTests(unittest.TestCase):
    def setUp(self):
        self.temp = TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        root = Path(self.temp.name)
        source = root / "source"
        source.mkdir()
        self.bundle, self.sha = fixture.fixture(source)
        self.repo = root / "hosted"
        self.repo.mkdir()
        shutil.copytree(source / "public", self.repo / "public")
        git(self.repo, "init", "-q", "-b", "main")
        git(self.repo, "config", "user.name", "Offline Synthetic")
        git(self.repo, "config", "user.email", "offline@example.invalid")
        self.rights = source / "rights.json"
        self.rights.write_text("{}")
        self.compute = source / "compute.json"
        self.compute.write_text("{}")
        self.base = None
        self.mocks = ExitStack()
        self.addCleanup(self.mocks.close)
        self.mocks.enter_context(patch.object(stage.verifier, "verified_release_commit", return_value="a" * 40))
        self.mocks.enter_context(patch.object(stage.verifier, "sha", return_value="b" * 64))
        self.mocks.enter_context(patch.object(stage.verifier, "verify_evidence", return_value={"evidence": "SYNTHETIC_INTEGRITY_ONLY"}))

    def fix_git(self):
        git(self.repo, "add", "--", "public/dashboards/equity-alpha")
        git(self.repo, "commit", "-qm", "synthetic baseline")
        self.base = git(self.repo, "rev-parse", "HEAD")
        git(self.repo, "update-ref", "refs/remotes/origin/main", self.base)
        git(self.repo, "checkout", "-qb", "review/equity-hosted-intake-fixture")

    def run_stage(self, base=None):
        return stage.stage_review(self.bundle, self.repo, self.sha, "equity-intake-test",
                                  self.rights, self.compute, base or self.base)

    def test_clean_review_change_only_seven_file_path(self):
        rel = stage.receiver.PREFIX + "assets/app.js"
        (self.repo / rel).write_bytes(b"OLDER_HOSTED_SYNTHETIC")
        self.fix_git()
        result = self.run_stage()
        self.assertEqual(result["status"], "REVIEW_WORKTREE_ONLY_NOT_COMMITTED")
        self.assertEqual(result["changed"], [rel])
        self.assertEqual(result["files_written"], 1)
        self.assertFalse(result["published"])
        self.assertEqual((self.repo / rel).read_bytes(), b"SYNTHETIC_PUBLIC_DATA_ONLY")
        self.assertEqual(git(self.repo, "status", "--porcelain=v1"), " M " + rel)

    def test_no_material_delta_does_not_write(self):
        self.fix_git()
        result = self.run_stage()
        self.assertEqual(result["status"], "NO_MATERIAL_DELTA_NO_PR")
        self.assertEqual(result["files_written"], 0)
        self.assertEqual(git(self.repo, "status", "--porcelain=v1"), "")

    def test_main_branch_rejected_before_write(self):
        self.fix_git()
        git(self.repo, "checkout", "-q", "main")
        with self.assertRaisesRegex(stage.Hold, "NOT_ISOLATED_EQUITY_REVIEW_BRANCH"):
            self.run_stage()

    def test_stale_hosted_commit_rejected(self):
        self.fix_git()
        with self.assertRaisesRegex(stage.Hold, "REVIEW_BASE_HEAD_OR_ORIGIN_MAIN_DRIFT"):
            self.run_stage("f" * 40)

    def test_dirty_workspace_rejected(self):
        self.fix_git()
        (self.repo / stage.receiver.PREFIX / "index.html").write_bytes(b"dirty")
        with self.assertRaisesRegex(stage.Hold, "REVIEW_WORKTREE_NOT_CLEAN"):
            self.run_stage()

    def test_rollback_after_diff_check_rejection(self):
        rel = stage.receiver.PREFIX + "assets/app.js"
        (self.repo / rel).write_bytes(b"OLDER_HOSTED_SYNTHETIC")
        self.fix_git()
        original = (self.repo / rel).read_bytes()
        actual_git = stage.git
        def fail_diff(workspace, *args):
            if args == ("diff", "--check"):
                raise stage.Hold("SYNTHETIC_REVIEW_DIFF_FAILED")
            return actual_git(workspace, *args)
        with patch.object(stage, "git", side_effect=fail_diff):
            with self.assertRaisesRegex(stage.Hold, "SYNTHETIC_REVIEW_DIFF_FAILED"):
                self.run_stage()
        self.assertEqual((self.repo / rel).read_bytes(), original)
        self.assertEqual(git(self.repo, "status", "--porcelain=v1"), "")


if __name__ == "__main__":
    unittest.main(verbosity=2)
