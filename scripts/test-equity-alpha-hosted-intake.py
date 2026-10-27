#!/usr/bin/env python3
"""Synthetic stdlib-only tests; no market fetch, Git operation or public release."""
from __future__ import annotations
import copy
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
import zipfile

SCRIPT = Path(__file__).with_name("receive-equity-alpha-hosted-intake.py")
SPEC = importlib.util.spec_from_file_location("ea_intake", SCRIPT)
rx = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(rx)

def pack(obj, var):
    return ("window." + var + " = " + json.dumps(obj, separators=(",", ":")) + ";\n").encode()

def book():
    memory = io.BytesIO()
    with zipfile.ZipFile(memory, "w", compression=zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", "<Types/>")
        z.writestr("xl/workbook.xml", "<workbook/>")
    return memory.getvalue()

def fixture():
    market, cutoff = "2026-10-05", "2026-09-30"
    hist = {
        "meta": {"status": "PUBLIC LIVE", "version": "v1.5.0.93-PRODUCTION",
                 "latestSignalMonth": "2026-09",
                 "performanceThroughCompletedDate": cutoff,
                 "performanceThroughHoldingMonth": "2026-09"},
        "model": {"globalProductArchitecture": {"internalWeights": {
            "A0": .75, "Regional_QRET60": .20, "SelectiveAlpha_MG080_F020": .05}}},
        "globalFinalDaily": [{"date": cutoff}],
    }
    live = {
        "meta": {"status": "PUBLIC_LIVE", "productionAuthority": "v1.5.0.93",
                 "marketDataThrough": market, "completedCloseCutoff": cutoff,
                 "mtdBaselineDate": cutoff, "signalMonth": "2026-09",
                 "holdingMonth": "2026-10", "executionDate": "2026-10-01"},
        "currentHoldings": [{"ticker": "AAA", "targetWeight": .6},
                            {"ticker": "BBB", "targetWeight": .4}],
        "preview": {
            "meta": {"status": "PREVIEW", "previewAsOf": market,
                     "officialSignalMonth": "2026-09",
                     "officialHoldingMonth": "2026-10"},
            "holdings": [{"ticker": "AAA", "targetWeight": .5},
                         {"ticker": "BBB", "targetWeight": .5}]},
        "daily": [{"date": cutoff}, {"date": market}],
        "currentCost": {"accounting": "UNIFIED_FINAL_PORTFOLIO",
                        "costBpsPerSide": 10.0,
                        "finalPortfolioCost": .001,
                        "totalAlphaPeriodCost": .001},
    }
    records = {
        "index.html": b"assets/app.js assets/styles.css assets/holdings-view.js data/dashboard_data.js data/live_overlay.js",
        "assets/app.js": b"safe app",
        "assets/styles.css": b"safe css",
        "assets/holdings-view.js": b"safe holdings",
        "data/dashboard_data.js": pack(hist, "EA_HISTORY_DATA"),
        "data/live_overlay.js": pack(live, "EA_LIVE_OVERLAY"),
        "exports/Global_Equity_Alpha_Full_History.xlsx": book(),
    }
    return records

def manifest(records, **overrides):
    payload = {
        "contract": rx.CONTRACT, "source_owner": "slackquant80/research-equity-alpha",
        "stage": "INTAKE_REVIEW_ONLY", "publication_authorized": False,
        "release_authorized": False, "source_commit": "a" * 40,
        "market_data_through": "2026-10-05", "official_signal_month": "2026-09",
        "holding_month": "2026-10", "completed_close_cutoff": "2026-09-30",
        "execution_date": "2026-10-01", "preview_as_of": "2026-10-05",
        "files": {name: {"sha256": rx.sha256(b), "bytes": len(b)}
                  for name, b in records.items()},
    }
    payload.update(overrides)
    return payload

def read_live(records):
    return rx.js_assignment(records["data/live_overlay.js"], "EA_LIVE_OVERLAY")

def rewrite_live(records, live):
    records["data/live_overlay.js"] = pack(live, "EA_LIVE_OVERLAY")


class EquityHostedIntakeTests(unittest.TestCase):
    def setUp(self):
        self.records = fixture()
        self.prior = copy.deepcopy(self.records)

    def verify(self, records=None, proposal=None, **kwargs):
        records = self.records if records is None else records
        proposal = manifest(records) if proposal is None else proposal
        return rx.validate_candidate(records, proposal, self.prior, **kwargs)

    def test_identical_previous_returns_no_delta(self):
        value = self.verify()
        self.assertEqual(value["status"], "NO_DELTA")
        self.assertIs(value["publication_authorized"], False)

    def test_new_clock_review_only(self):
        live = read_live(self.records)
        live["meta"]["marketDataThrough"] = "2026-10-06"
        live["preview"]["meta"]["previewAsOf"] = "2026-10-06"
        live["daily"][-1]["date"] = "2026-10-06"
        rewrite_live(self.records, live)
        proposal = manifest(self.records, market_data_through="2026-10-06",
                            preview_as_of="2026-10-06")
        self.assertEqual(self.verify(proposal=proposal)["status"], "NEW_CLOCK_REVIEW_ONLY")

    def test_same_clock_changed_asset_requires_explicit_review(self):
        self.records["index.html"] += b" updated"
        with self.assertRaisesRegex(ValueError, "same-clock"):
            self.verify()
        self.assertEqual(self.verify(allow_same_clock=True)["status"],
                         "SAME_CLOCK_REVIEW_ONLY")

    def test_incomplete_or_replaced_asset_hash_rejected(self):
        m = manifest(self.records)
        m["files"]["index.html"]["sha256"] = "0" * 64
        with self.assertRaisesRegex(ValueError, "SHA256"):
            self.verify(proposal=m)

    def test_manifest_cannot_authorize_release(self):
        m = manifest(self.records, publication_authorized=True)
        with self.assertRaisesRegex(ValueError, "cannot grant"):
            self.verify(proposal=m)

    def test_rollback_market_clock_rejected(self):
        prior = read_live(self.prior)
        prior["meta"]["marketDataThrough"] = "2026-10-07"
        rewrite_live(self.prior, prior)
        with self.assertRaisesRegex(ValueError, "regression"):
            self.verify()

    def test_official_weights_and_preview_clock_fail_closed(self):
        live = read_live(self.records)
        live["currentHoldings"][0]["targetWeight"] = .5
        rewrite_live(self.records, live)
        with self.assertRaisesRegex(ValueError, "100%"):
            self.verify()
        live["currentHoldings"][0]["targetWeight"] = .6
        live["preview"]["meta"]["previewAsOf"] = "2026-10-04"
        rewrite_live(self.records, live)
        with self.assertRaisesRegex(ValueError, "Preview clock"):
            self.verify()

    def test_private_marker_and_invalid_excel_rejected(self):
        self.records["assets/app.js"] = b"C:\\SK_Main\\secret"
        with self.assertRaisesRegex(ValueError, "private/credential"):
            self.verify()
        self.records = fixture()
        self.records["exports/Global_Equity_Alpha_Full_History.xlsx"] = b"not a workbook"
        with self.assertRaisesRegex(ValueError, "XLSX"):
            self.verify()

    def test_exact_file_set_and_symlink_safety(self):
        with tempfile.TemporaryDirectory() as base:
            root = Path(base) / "candidate"
            root.mkdir()
            for rel, data in self.records.items():
                path = root / rel
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(data)
            (root / rx.MANIFEST).write_text(json.dumps(manifest(self.records)))
            self.assertEqual(set(rx.files_from_dir(root)) - {rx.MANIFEST}, rx.FILES)
            (root / "unwanted.txt").write_text("bad")
            with self.assertRaisesRegex(ValueError, "undeclared"):
                rx.files_from_dir(root)
            (root / "unwanted.txt").unlink()
            (root / "assets" / "app.js").unlink()
            try:
                (root / "assets" / "app.js").symlink_to(root / "index.html")
            except (OSError, NotImplementedError):
                self.skipTest("symlink privileges unavailable")
            with self.assertRaisesRegex(ValueError, "linked"):
                rx.files_from_dir(root)

    def test_duplicate_json_keys_are_rejected(self):
        with self.assertRaisesRegex(ValueError, "duplicate"):
            rx.parse_json(b'{"a":1,"a":2}')


if __name__ == "__main__":
    unittest.main()
