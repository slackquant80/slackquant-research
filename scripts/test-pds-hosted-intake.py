#!/usr/bin/env python3
"""Synthetic attack tests plus live-platform-fixture parity for the intake receiver.

Reads ONLY public, already checked-in platform files. No source model/data
refresh, secrets, network, publish, Git write, or GitHub deployment.
"""
from __future__ import annotations

import importlib.util
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
import warnings
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
S = ROOT / "scripts/receive-pds-hosted-intake.py"
spec = importlib.util.spec_from_file_location("pds_intake_receiver", S)
receiver = importlib.util.module_from_spec(spec)
spec.loader.exec_module(receiver)


def records_from_public_repo() -> dict[str, bytes]:
    return {name: (ROOT / name).read_bytes() for name in receiver.expected_paths(ROOT)}


def sealed_index(files: dict[str, bytes], **updates) -> dict:
    receipt = json.loads(files[receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"])
    disclosure = json.loads(files[receiver.EXPORT_PREFIX + "public_disclosure_state.json"])
    source = files[receiver.EXPORT_PREFIX + "public_export_manifest.json"]
    mirror_receipt = files[receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"]
    result = {
        "contract": receiver.CONTRACT,
        "release_authorized": False,
        "public_deployment_authorized": False,
        "stage": "INTAKE_REVIEW_ONLY",
        "derived_platform_bindings": "NOT_INCLUDED_REBUILD_AND_VALIDATE_IN_DEPLOYMENT_REPO",
        "adaa_f2r_live_evidence": "NOT_INCLUDED_REVIEW_REQUIRED",
        "live_site_verified": False,
        "files": {n: {"sha256": receiver.digest(data), "bytes": len(data)} for n, data in files.items()},
        "clock": {
            "canonical_official_signal": receipt["official_signal_period"],
            "canonical_holding_month": receiver.holding_after(receipt["official_signal_period"]),
            "canonical_mark_through": receipt["official_mark_through"],
            "compatibility_released_signal": disclosure["latest_released_signal_period"],
            "compatibility_eligible_signal": disclosure["latest_eligible_signal_period"],
            "source_export_manifest_sha256": receiver.digest(source),
            "canonical_mirror_receipt_sha256": receiver.digest(mirror_receipt),
        },
    }
    result.update(updates)
    return result


def write_bundle(path: Path, files: dict[str, bytes], *, meta=None, additional=None) -> None:
    if meta is None:
        meta = sealed_index(files)
    with zipfile.ZipFile(path, "w", compression=zipfile.ZIP_DEFLATED) as z:
        for name, content in sorted(files.items()):
            z.writestr(name, content)
        if additional:
            for name, content in additional.items():
                z.writestr(name, content)
        z.writestr(receiver.META, json.dumps(meta, sort_keys=True).encode())


class IntakeSafetyTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.files = records_from_public_repo()

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="pds_platform_contract_test_")
        self.addCleanup(self.temp.cleanup)
        self.bundle = Path(self.temp.name) / "candidate.zip"

    def assert_rejected(self, files=None, *, meta=None, extra=None):
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", UserWarning)
            write_bundle(self.bundle, files or self.files, meta=meta, additional=extra)
        with self.assertRaises((ValueError, zipfile.BadZipFile)):
            receiver.verify_archive(self.bundle, ROOT)

    def test_platform_fixture_accepted_read_only(self):
        write_bundle(self.bundle, self.files)
        content, clock = receiver.verify_archive(self.bundle, ROOT)
        self.assertEqual(len(content), 19)
        receiver.nonregression(ROOT, content, clock)
        result = subprocess.run(
            [sys.executable, str(S), "--bundle", str(self.bundle)],
            capture_output=True, text=True, check=False)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("READ_ONLY_RECEIVER_PASS; NO_WRITE_NO_DEPLOY_NO_GIT", result.stdout)

    def test_archive_missing_member(self):
        records = dict(self.files)
        records.pop(sorted(records)[0])
        self.assert_rejected(records, meta=sealed_index(self.files))

    def test_archive_extra_member(self):
        self.assert_rejected(extra={"public/data/systems/pds/unexpected.csv": b"nope"})

    def test_archive_duplicate_and_traversal(self):
        self.assert_rejected(extra={sorted(self.files)[0]: b"repeat"})
        self.bundle.unlink()
        self.assert_rejected(extra={"../escape": b"bad"})

    def test_transport_hash_tampering(self):
        records = dict(self.files)
        first = sorted(records)[0]
        contract = sealed_index(records)
        records[first] += b"tamper"
        self.assert_rejected(records, meta=contract)

    def test_transport_publication_authority_rejected(self):
        self.assert_rejected(meta=sealed_index(self.files, release_authorized=True))
        self.bundle.unlink()
        self.assert_rejected(meta=sealed_index(self.files, public_deployment_authorized=True))

    def test_calendar_forgery_rejected(self):
        records = dict(self.files)
        receipt_path = receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        receipt = json.loads(records[receipt_path])
        receipt["official_mark_through"] = "2026-02-30"
        records[receipt_path] = json.dumps(receipt).encode()
        self.assert_rejected(records)

    def test_private_marker_even_when_rehashed(self):
        records = dict(self.files)
        html_path = receiver.MIRROR_PREFIX + "Portfolio_Decision_System_Public.html"
        receipt_path = receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        receipt = json.loads(records[receipt_path])
        records[html_path] += b" _LOCAL_PRIVATE_DATA "
        receipt["html_sha256"] = receiver.digest(records[html_path])
        records[receipt_path] = json.dumps(receipt).encode()
        self.assert_rejected(records)

    def test_source_export_checksum_forgery_rejected(self):
        records = dict(self.files)
        name = receiver.EXPORT_PREFIX + "public_core_monthly_returns.csv"
        records[name] += b"\n"
        self.assert_rejected(records)

    def test_signal_month_rollover(self):
        self.assertEqual(receiver.holding_after("2026-12"), "2027-01")
        with self.assertRaises(ValueError):
            receiver.holding_after("2026-13")

    def test_apply_only_inside_disposable_review_workspace(self):
        # Exercise existing platform binders and full PDS publication validator,
        # but NEVER mutate the checked-out repository in CI.
        write_bundle(self.bundle, self.files)
        scratch = Path(self.temp.name) / "review_workspace"
        shutil.copytree(ROOT, scratch, ignore=shutil.ignore_patterns(
            ".git", "node_modules", ".next", "out", "__pycache__", ".pytest_cache"))
        result = subprocess.run(
            [sys.executable, str(scratch / "scripts/receive-pds-hosted-intake.py"),
             "--bundle", str(self.bundle), "--app-root", str(scratch), "--apply-reviewed"],
            cwd=scratch, capture_output=True, text=True, check=False)
        self.assertEqual(result.returncode, 0, result.stdout[-3000:] + result.stderr[-3000:])
        self.assertIn("PDS_HOSTED_REVIEW_WORKSPACE_BOUND_PASS", result.stdout)
        self.assertIn("PDS_PUBLICATION_VALIDATION_PASS", result.stdout)
        self.assertEqual((scratch / receiver.MIRROR_PREFIX /
                          "Portfolio_Decision_System_Public.html").read_bytes(),
                         self.files[receiver.MIRROR_PREFIX + "Portfolio_Decision_System_Public.html"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
