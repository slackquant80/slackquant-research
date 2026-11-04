#!/usr/bin/env python3
"""Synthetic-only no-network test of private Release provenance and receipt pins."""
from __future__ import annotations

import importlib.util
import json
from pathlib import Path
from types import SimpleNamespace
import unittest

src = Path(__file__).with_name("verify_equity_intake_release.py")
spec = importlib.util.spec_from_file_location("equity_release_gate", src)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

SHA = "a" * 40
DATE = "2026-10-05"


def records():
    rights = {"status": "PUBLIC_DASHBOARD_ARTIFACT_APPROVED",
              "scope": m.PREFIX + "**", "source_commit": SHA,
              "market_data_through": DATE}
    compute = {"status": "GLOBAL_EQUITY_ALPHA_PRODUCTION_GATE_PASS",
               "source_commit": SHA, "market_data_through": DATE,
               "production_authority": "v1.5.0.93"}
    a = json.dumps(rights, sort_keys=True).encode()
    b = json.dumps(compute, sort_keys=True).encode()
    manifest = {"source_commit": SHA, "rights_evidence_sha256": m.sha(a),
                "compute_receipt_sha256": m.sha(b),
                "clock_and_accounting": {"market_data_through": DATE,
                                         "production_authority": "v1.5.0.93"}}
    return manifest, a, b


class EvidenceTests(unittest.TestCase):
    def test_authorized_release_and_bound_receipts(self):
        calls = []
        def fake(cmd, **kwargs):
            calls.append(cmd)
            if cmd[1:3] == ["release", "view"]:
                return SimpleNamespace(returncode=0, stdout=json.dumps({
                    "tagName": "equity-intake-20261028", "isPrerelease": True,
                    "isDraft": False}))
            return SimpleNamespace(returncode=0, stdout=SHA)
        found = m.verified_release_commit("equity-intake-20261028", runner=fake,
                                           env={"GH_TOKEN": "synthetic-test-token"})
        self.assertEqual(found, SHA)
        self.assertEqual(len(calls), 2)
        a, b, c = records()
        self.assertEqual(m.verify_evidence(a, found, b, c)["authenticated_source_commit"], SHA)

    def test_no_token_or_invalid_release_tag_fails(self):
        with self.assertRaisesRegex(m.Hold, "SCOPED_SOURCE_TOKEN_REQUIRED"):
            m.verified_release_commit("equity-intake-20261028", env={})
        with self.assertRaisesRegex(m.Hold, "INVALID_PRIVATE_RELEASE_TAG"):
            m.verified_release_commit("../../fake", env={"GH_TOKEN": "fake"})

    def test_draft_or_non_prerelease_rejected(self):
        def fake(cmd, **kwargs):
            return SimpleNamespace(returncode=0, stdout=json.dumps({
                "tagName": "equity-intake-20261028", "isPrerelease": False,
                "isDraft": True}))
        with self.assertRaisesRegex(m.Hold, "SOURCE_RELEASE_NOT_APPROVED"):
            m.verified_release_commit("equity-intake-20261028", runner=fake,
                                       env={"GH_TOKEN": "fake"})

    def test_release_commit_drift(self):
        a, b, c = records()
        with self.assertRaisesRegex(m.Hold, "RELEASE_TAG_SOURCE_COMMIT_MISMATCH"):
            m.verify_evidence(a, "b" * 40, b, c)

    def test_rights_hash_drift(self):
        a, b, c = records()
        with self.assertRaisesRegex(m.Hold, "RIGHTS_RECEIPT_SHA_MISMATCH"):
            m.verify_evidence(a, SHA, b + b"x", c)

    def test_compute_hash_drift(self):
        a, b, c = records()
        with self.assertRaisesRegex(m.Hold, "COMPUTE_RECEIPT_SHA_MISMATCH"):
            m.verify_evidence(a, SHA, b, c + b"x")

    def test_rights_source_and_clock(self):
        a, b, c = records()
        r = json.loads(b)
        r["source_commit"] = "b" * 40
        data = json.dumps(r, sort_keys=True).encode()
        a["rights_evidence_sha256"] = m.sha(data)
        with self.assertRaisesRegex(m.Hold, "RIGHTS_SCOPE_OR_SOURCE_BINDING_HOLD"):
            m.verify_evidence(a, SHA, data, c)
        a, b, c = records()
        r = json.loads(b)
        r["market_data_through"] = "2026-10-04"
        data = json.dumps(r, sort_keys=True).encode()
        a["rights_evidence_sha256"] = m.sha(data)
        with self.assertRaisesRegex(m.Hold, "RIGHTS_MARKET_DATE_BINDING_HOLD"):
            m.verify_evidence(a, SHA, data, c)

    def test_compute_gate_and_clock(self):
        a, b, c = records()
        r = json.loads(c)
        r["status"] = "INCOMPLETE"
        data = json.dumps(r, sort_keys=True).encode()
        a["compute_receipt_sha256"] = m.sha(data)
        with self.assertRaisesRegex(m.Hold, "COMPUTE_GATE_OR_SOURCE_BINDING_HOLD"):
            m.verify_evidence(a, SHA, b, data)
        a, b, c = records()
        r = json.loads(c)
        r["market_data_through"] = "2026-10-04"
        data = json.dumps(r, sort_keys=True).encode()
        a["compute_receipt_sha256"] = m.sha(data)
        with self.assertRaisesRegex(m.Hold, "COMPUTE_MARKET_DATE_BINDING_HOLD"):
            m.verify_evidence(a, SHA, b, data)


if __name__ == "__main__":
    unittest.main(verbosity=2)
