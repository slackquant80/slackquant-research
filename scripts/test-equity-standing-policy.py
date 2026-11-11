#!/usr/bin/env python3
"""Offline trusted-receiver acceptance of exact standing consent and compute gates."""
import importlib.util
import json
from hashlib import sha256
from pathlib import Path
import unittest

source=Path(__file__).with_name("verify_equity_intake_release.py")
spec=importlib.util.spec_from_file_location("eq_receiver",source)
mod=importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

class StandingPolicyGate(unittest.TestCase):
    def setUp(self):
        raw=source.with_name("equity-standing-publication-policy.json").read_bytes()
        self.policy_sha=sha256(raw).hexdigest()
        self.clock={"market_data_through":"2026-11-10",
                    "benchmark":"ACWI","production_authority":"v1.5.0.93"}
        self.source="a"*40
        self.rights={"status":"PUBLIC_DASHBOARD_ARTIFACT_APPROVED",
                     "scope":"public/dashboards/equity-alpha/**",
                     "source_commit":self.source,
                     "market_data_through":"2026-11-10",
                     "approval_basis":"STANDING_OWNER_POLICY_V1",
                     "standing_policy_sha256":self.policy_sha}
        self.compute={"status":"GLOBAL_EQUITY_ALPHA_PRODUCTION_GATE_PASS",
                      "source_commit":self.source,
                      "market_data_through":"2026-11-10",
                      "production_authority":"v1.5.0.93",
                      "attestation_basis":"CURRENT_SOURCE_FULL_114_124",
                      "candidate_files":7,
                      "standing_policy_sha256":self.policy_sha}

    def verify(self):
        r=json.dumps(self.rights,sort_keys=True).encode()
        c=json.dumps(self.compute,sort_keys=True).encode()
        manifest={"source_commit":self.source,"clock_and_accounting":self.clock,
                  "rights_evidence_sha256":sha256(r).hexdigest(),
                  "compute_receipt_sha256":sha256(c).hexdigest()}
        return mod.verify_evidence(manifest,self.source,r,c)

    def test_verified_standing_pair(self):
        self.assertEqual(self.verify()["authenticated_source_commit"],self.source)

    def test_forged_policy_hash_refused(self):
        self.rights["standing_policy_sha256"]="0"*64
        with self.assertRaisesRegex(mod.Hold,"STANDING_POLICY_HASH"):
            self.verify()

    def test_compute_not_really_attested_refused(self):
        self.compute["attestation_basis"]="UNVERIFIED"
        with self.assertRaisesRegex(mod.Hold,"STANDING_COMPUTE"):
            self.verify()

    def test_strategy_source_authority_change_refused(self):
        self.clock["production_authority"]="vOTHER"
        self.compute["production_authority"]="vOTHER"
        with self.assertRaisesRegex(mod.Hold,"STANDING_POLICY_CONTRACT"):
            self.verify()

    def test_stale_market_clock_refused(self):
        self.clock["market_data_through"]="2026-11-09"
        self.compute["market_data_through"]="2026-11-09"
        self.rights["market_data_through"]="2026-11-09"
        with self.assertRaisesRegex(mod.Hold,"STANDING_POLICY_CONTRACT"):
            self.verify()

    def test_manual_legacy_approval_remains_compatible(self):
        del self.rights["approval_basis"]
        del self.rights["standing_policy_sha256"]
        self.assertEqual(self.verify()["authenticated_source_commit"],self.source)

if __name__=="__main__":
    unittest.main()
