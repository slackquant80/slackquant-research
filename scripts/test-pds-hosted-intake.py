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
from datetime import date, timedelta

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
        "publication_pipeline": "PENDING_SLACKQUANT_HOSTED_INTAKE",
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
            "compatibility_completed_through": disclosure["completed_holding_month_cutoff"],
            "source_program_version": json.loads(source).get("source_program_version") or "",
            "source_rs03_version": json.loads(source).get("source_rs03_version") or "",
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

    def test_imported_public_binder_does_not_write_python_bytecode(self):
        # The previous first private-source E2E passed model/UX validation but
        # stopped at exact-scope gate due to untracked scripts/__pycache__.
        # This regression runs the importer with default CPython settings.
        isolated = Path(self.temp.name) / "isolated_receiver"
        (isolated / "scripts").mkdir(parents=True)
        shutil.copy2(ROOT / "scripts/bind-pds-public-export.py",
                     isolated / "scripts/bind-pds-public-export.py")
        names = receiver.public_expected(isolated)
        self.assertEqual(len(names), 16)
        self.assertFalse((isolated / "scripts/__pycache__").exists(),
                         "receiver import modified an otherwise read-only checkout")

    def test_exact_existing_source_snapshot_has_no_material_delta(self):
        self.assertEqual(receiver.material_changes(self.files, ROOT), [])

    def test_windows_crlf_receipt_is_not_a_new_pds_release(self):
        records = dict(self.files)
        name = receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        records[name] = records[name].replace(b"\n", b"\r\n")
        self.assertNotEqual(records[name], self.files[name])
        self.assertEqual(receiver.material_changes(records, ROOT), [])

    def test_changed_receipt_clock_cannot_be_suppressed_as_noop(self):
        records = dict(self.files)
        name = receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        receipt = json.loads(records[name])
        receipt["official_mark_through"] = (date.fromisoformat(receipt["official_mark_through"]) + timedelta(days=1)).isoformat()
        records[name] = json.dumps(receipt, sort_keys=True).encode()
        self.assertEqual(receiver.material_changes(records, ROOT), [name])

    def test_changed_financial_data_requires_review(self):
        records = dict(self.files)
        name = receiver.EXPORT_PREFIX + "public_fx_calendar_returns.csv"
        records[name] = records[name] + b"\n"
        self.assertEqual(receiver.material_changes(records, ROOT), [name])

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

    def test_transport_clock_mismatch_rejected(self):
        meta = sealed_index(self.files)
        meta["clock"]["canonical_holding_month"] = "2026-12"
        self.assert_rejected(meta=meta)

    def test_future_rollback_clock_rejected(self):
        # A forged older release must never replace a newer public Official
        # or market-through date, even when its individual hashes are valid.
        root = Path(self.temp.name) / "old_release_guard"
        location = root / receiver.MIRROR_PREFIX / "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        location.parent.mkdir(parents=True)
        receipt = json.loads(self.files[receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"])
        clock = receiver.receipt_clock(self.files)
        receipt["official_signal_period"] = receiver.holding_after(clock["official_signal"])
        location.write_text(json.dumps(receipt))
        with self.assertRaisesRegex(ValueError, "would regress"):
            receiver.nonregression(root, self.files, clock)
        receipt["official_signal_period"] = clock["official_signal"]
        receipt["official_mark_through"] = (date.fromisoformat(clock["mark_through"]) + timedelta(days=1)).isoformat()
        location.write_text(json.dumps(receipt))
        with self.assertRaisesRegex(ValueError, "would regress"):
            receiver.nonregression(root, self.files, clock)

    def test_same_clock_html_revision_requires_review(self):
        root = Path(self.temp.name) / "fixed_clock_guard"
        location = root / receiver.MIRROR_PREFIX / "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        location.parent.mkdir(parents=True)
        receipt = json.loads(self.files[receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"])
        receipt["html_sha256"] = "0" * 64
        location.write_text(json.dumps(receipt))
        with self.assertRaisesRegex(ValueError, "explicit review"):
            receiver.nonregression(root, self.files, receiver.receipt_clock(self.files))

    def test_scoped_same_clock_review_stages_only_bounded_private_draft(self):
        # A changed html hash is a hard HOLD by default, even for tiny returns.
        # Explicit intake review requires identical published decisions and
        # independently bounded FX-return revisions; NEVER grants deployment.
        app = Path(self.temp.name) / "same_clock_bounded_candidate"
        for source in (
            "PDS_PUBLIC_DASHBOARD_RECEIPT.json",
        ):
            rel = receiver.MIRROR_PREFIX + source
            target = app / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(self.files[rel])
        for filename in ("public_active_core_asset_targets.csv",
                         "public_fx_hedge_history.csv",
                         "public_fx_performance_path.csv"):
            rel = receiver.EXPORT_PREFIX + filename
            target = app / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(self.files[rel])

        candidate = dict(self.files)
        html_rel = receiver.MIRROR_PREFIX + "Portfolio_Decision_System_Public.html"
        receipt_rel = receiver.MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        candidate[html_rel] += b"<!-- synthetic same-clock provenance change -->"
        receipt = json.loads(candidate[receipt_rel])
        receipt["html_sha256"] = receiver.digest(candidate[html_rel])
        candidate[receipt_rel] = json.dumps(receipt).encode()
        clock = receiver.receipt_clock(candidate)
        with self.assertRaisesRegex(ValueError, "explicit review"):
            receiver.nonregression(app, candidate, clock)

        fx_rel = receiver.EXPORT_PREFIX + "public_fx_performance_path.csv"
        baseline = candidate[fx_rel].decode("utf-8").splitlines()
        field = baseline[0].split(",").index("net_return")
        row = baseline[1].split(",")
        row[field] = str(float(row[field]) + 1e-8)
        baseline[1] = ",".join(row)
        candidate[fx_rel] = ("\n".join(baseline) + "\n").encode()
        # This is a method-level staging gate; the independent ZIP/source
        # manifest verification is deliberately NOT faked by these fixtures.
        receiver.nonregression(app, candidate, clock, review_same_clock_html=True)

        # No unchanged-weights/hedge exemption if even one decision differs.
        weights_rel = receiver.EXPORT_PREFIX + "public_active_core_asset_targets.csv"
        weighted = dict(candidate)
        lines = weighted[weights_rel].decode().splitlines()
        field = lines[0].split(",").index("aggregate_weight")
        row = lines[1].split(",")
        row[field] = str(float(row[field]) + 0.01)
        lines[1] = ",".join(row)
        weighted[weights_rel] = ("\n".join(lines) + "\n").encode()
        with self.assertRaisesRegex(ValueError, "released decision changed"):
            receiver.nonregression(app, weighted, clock, review_same_clock_html=True)

        # FX correction cannot be waved through with an arbitrary bp drift.
        large = dict(candidate)
        lines = large[fx_rel].decode().splitlines()
        row = lines[1].split(",")
        row[field if False else lines[0].split(",").index("net_return")] = str(
            float(row[lines[0].split(",").index("net_return")]) + 0.0001)
        lines[1] = ",".join(row)
        large[fx_rel] = ("\n".join(lines) + "\n").encode()
        with self.assertRaisesRegex(ValueError, "outside bounded"):
            receiver.nonregression(app, large, clock, review_same_clock_html=True)

        # A clock regression cannot be approved using the new opt-in switch.
        bad_clock = dict(clock)
        bad_clock["mark_through"] = "2026-01-01"
        with self.assertRaisesRegex(ValueError, "would regress"):
            receiver.nonregression(app, candidate, bad_clock, review_same_clock_html=True)

    def test_compatibility_rollback_clock_rejected(self):
        root = Path(self.temp.name) / "compatibility_guard"
        location = root / receiver.EXPORT_PREFIX / "public_disclosure_state.json"
        location.parent.mkdir(parents=True)
        disclosure = json.loads(self.files[receiver.EXPORT_PREFIX + "public_disclosure_state.json"])
        disclosure["latest_released_signal_period"] = receiver.holding_after(receiver.receipt_clock(self.files)["compatibility_released"])
        location.write_text(json.dumps(disclosure))
        with self.assertRaisesRegex(ValueError, "would regress"):
            receiver.nonregression(root, self.files, receiver.receipt_clock(self.files))

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



class CurrentMtdClockContractTests(unittest.TestCase):
    """Check the actual platform release clock with bounded synthetic dates.

    No live source data, trade calendar, SDK, network or additional CI job.
    """

    @classmethod
    def setUpClass(cls):
        path = ROOT / "scripts/validate-pds-publication.py"
        spec = importlib.util.spec_from_file_location("pds_publication_validator", path)
        cls.validator = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(cls.validator)

    @staticmethod
    def record(*, signal="2026-09", completed="2026-09-30",
               execution="2026-10-01", through="2026-10-08", available=True):
        holding = receiver.holding_after(signal)
        return {
            "meta": {"latest_signal_period": signal},
            "core": {"manifest": {"current_core_period": signal}},
            "core_daily_performance": {"summary": [
                {"series_id": "PDS_CORE_FIXED_CURRENT_POLICY", "end_date": completed}
            ]},
            "current_mark": {
                "available": available,
                "manifest": {
                    "decision_period": signal,
                    "holding_month": holding,
                    "completed_performance_cutoff": completed,
                    "latest_price_date": through,
                    "execution_date": execution,
                    "status": "PASS_PROVISIONAL_MARK" if available else "NOT_READY",
                },
            },
        }

    def test_valid_executed_current_mtd_date_order(self):
        clock = self.validator.canonical_clock(self.record())
        self.assertEqual((clock["officialSignal"], clock["holdingMonth"],
                          clock["executionClose"], clock["markThrough"]),
                         ("2026-09", "2026-10", "2026-10-01", "2026-10-08"))

    def test_valid_december_january_rollover(self):
        clock = self.validator.canonical_clock(self.record(
            signal="2026-12", completed="2026-12-31",
            execution="2027-01-04", through="2027-01-08"))
        self.assertEqual(clock["holdingMonth"], "2027-01")

    def test_unavailable_month_end_mtd_remains_valid(self):
        clock = self.validator.canonical_clock(self.record(
            available=False, execution="", through="2026-09-30"))
        self.assertEqual(clock["executionClose"], "")
        self.assertEqual(clock["holdingMonth"], "2026-10")

    def test_invalid_current_mtd_execution_month_is_rejected(self):
        with self.assertRaisesRegex(RuntimeError, "outside Official holding month"):
            self.validator.canonical_clock(self.record(execution="2026-11-02"))

    def test_execution_preceding_completed_cutoff_is_rejected(self):
        with self.assertRaisesRegex(RuntimeError, "execution cannot precede"):
            self.validator.canonical_clock(self.record(
                completed="2026-10-02", execution="2026-10-01"))

    def test_mtd_mark_earlier_than_execution_is_rejected(self):
        with self.assertRaisesRegex(RuntimeError, "market-through precedes rebalance"):
            self.validator.canonical_clock(self.record(
                execution="2026-10-05", through="2026-10-02"))

    def test_invalid_calendar_date_is_rejected(self):
        with self.assertRaisesRegex(RuntimeError, "not a real calendar date"):
            self.validator.canonical_clock(self.record(through="2026-10-32"))

    def test_current_mtd_mark_cannot_belong_to_next_month(self):
        with self.assertRaisesRegex(RuntimeError, "outside Official holding month"):
            self.validator.canonical_clock(self.record(through="2026-11-02"))



if __name__ == "__main__":
    unittest.main(verbosity=2)
