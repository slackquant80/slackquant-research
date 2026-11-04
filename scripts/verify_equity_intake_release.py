#!/usr/bin/env python3
"""Read-only source Release and receipt boundary for Equity Alpha hosted intake.

This is NOT a publication controller: no checkout modification, staging or deploy.
It is intended to run after a scoped GitHub App has downloaded three assets
from the SAME private, pinned prerelease. GitHub Actions invocation is a later gate.
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
from pathlib import Path
import re
import subprocess
import sys
from hashlib import sha256

SOURCE_REPO = "slackquant80/research-equity-alpha"
RELEASE_TAG = re.compile(r"equity-intake-[A-Za-z0-9._-]{1,80}\Z")
COMMIT = re.compile(r"[a-f0-9]{40}\Z")
PREFIX = "public/dashboards/equity-alpha/"


class Hold(RuntimeError):
    pass


def sha(data: bytes) -> str:
    return sha256(data).hexdigest()


def parse_json_bytes(data: bytes, label: str) -> dict:
    try:
        parsed = json.loads(data.decode("utf-8-sig"))
    except (UnicodeError, ValueError) as exc:
        raise Hold("INVALID_" + label + "_JSON") from exc
    if not isinstance(parsed, dict):
        raise Hold("NONOBJECT_" + label + "_JSON")
    return parsed


def verified_release_commit(tag: str, *, runner=subprocess.run, env: dict | None = None) -> str:
    """Authenticate a prerelease tag against private source via scoped GH_TOKEN.

    The caller MUST supply an authorized GitHub App token, not a personal PAT.
    Checking actual token permissions is an upstream workflow responsibility.
    """
    if not RELEASE_TAG.fullmatch(tag):
        raise Hold("INVALID_PRIVATE_RELEASE_TAG")
    actual_env = os.environ if env is None else env
    if not actual_env.get("GH_TOKEN"):
        raise Hold("SCOPED_SOURCE_TOKEN_REQUIRED")

    def call(args):
        try:
            result = runner(args, capture_output=True, text=True, check=False,
                            timeout=30, env=actual_env)
        except (OSError, subprocess.TimeoutExpired) as exc:
            raise Hold("AUTHENTICATED_GITHUB_QUERY_FAILED") from exc
        if result.returncode != 0:
            raise Hold("AUTHENTICATED_GITHUB_QUERY_FAILED")
        return result.stdout.strip()

    raw = call(["gh", "release", "view", tag, "--repo", SOURCE_REPO,
                "--json", "tagName,isPrerelease,isDraft"])
    state = parse_json_bytes(raw.encode("utf-8"), "SOURCE_RELEASE")
    if state.get("tagName") != tag or state.get("isPrerelease") is not True or \
       state.get("isDraft") is not False:
        raise Hold("SOURCE_RELEASE_NOT_APPROVED_FOR_REVIEW_TRANSPORT")
    resolved = call(["gh", "api", f"repos/{SOURCE_REPO}/commits/{tag}", "--jq", ".sha"])
    if not COMMIT.fullmatch(resolved):
        raise Hold("SOURCE_TAG_DOES_NOT_RESOLVE_TO_COMMIT")
    return resolved


def verify_evidence(manifest: dict, source_commit: str,
                    rights_raw: bytes, compute_raw: bytes) -> dict:
    """Integrity of external receipts + source/date binding, not legal authority."""
    if not COMMIT.fullmatch(source_commit):
        raise Hold("INVALID_AUTHENTICATED_SOURCE_COMMIT")
    if manifest.get("source_commit") != source_commit:
        raise Hold("RELEASE_TAG_SOURCE_COMMIT_MISMATCH")
    if not rights_raw or sha(rights_raw) != manifest.get("rights_evidence_sha256"):
        raise Hold("RIGHTS_RECEIPT_SHA_MISMATCH")
    if not compute_raw or sha(compute_raw) != manifest.get("compute_receipt_sha256"):
        raise Hold("COMPUTE_RECEIPT_SHA_MISMATCH")
    rights = parse_json_bytes(rights_raw, "RIGHTS")
    compute = parse_json_bytes(compute_raw, "COMPUTE")
    clock = manifest.get("clock_and_accounting")
    if not isinstance(clock, dict):
        raise Hold("MANIFEST_CLOCK_NOT_OBJECT")
    if rights.get("status") != "PUBLIC_DASHBOARD_ARTIFACT_APPROVED" or \
       rights.get("scope") != PREFIX + "**" or \
       rights.get("source_commit") != source_commit:
        raise Hold("RIGHTS_SCOPE_OR_SOURCE_BINDING_HOLD")
    if rights.get("market_data_through") != clock.get("market_data_through"):
        raise Hold("RIGHTS_MARKET_DATE_BINDING_HOLD")
    if compute.get("status") != "GLOBAL_EQUITY_ALPHA_PRODUCTION_GATE_PASS" or \
       compute.get("source_commit") != source_commit or \
       compute.get("production_authority") != clock.get("production_authority"):
        raise Hold("COMPUTE_GATE_OR_SOURCE_BINDING_HOLD")
    if compute.get("market_data_through") != clock.get("market_data_through"):
        raise Hold("COMPUTE_MARKET_DATE_BINDING_HOLD")
    return {"rights_receipt_sha256": sha(rights_raw),
            "compute_receipt_sha256": sha(compute_raw),
            "authenticated_source_commit": source_commit,
            "approval_state": "REVIEW_EVIDENCE_INTEGRITY_ONLY_NOT_PUBLIC_RELEASE_APPROVAL"}


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--bundle", type=Path, required=True)
    p.add_argument("--workspace", type=Path, default=Path(__file__).resolve().parents[1])
    p.add_argument("--expected-sha256", required=True)
    p.add_argument("--source-release-tag", required=True)
    p.add_argument("--rights-evidence", type=Path, required=True)
    p.add_argument("--compute-receipt", type=Path, required=True)
    args = p.parse_args()
    source_commit = verified_release_commit(args.source_release_tag)
    script = Path(__file__).with_name("receive-equity-alpha-intake.py")
    if not script.is_file() or script.is_symlink():
        raise Hold("HOSTED_RECEIVER_MISSING")
    spec = importlib.util.spec_from_file_location("equity_readonly_receiver", script)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    rights = args.rights_evidence.read_bytes()
    compute = args.compute_receipt.read_bytes()
    # The receiver verifies the original ZIP and 7 member hashes before any use.
    manifest, _ = module.receive(args.bundle, args.expected_sha256,
                                 source_commit, sha(rights))
    verified = verify_evidence(manifest, source_commit, rights, compute)
    result = module.preflight(args.bundle, args.workspace,
                              args.expected_sha256, source_commit, sha(rights))
    result.update(verified)
    result["transport_status"] = "AUTHENTICATED_PRIVATE_PRERELEASE_READONLY_PREFLIGHT"
    print(json.dumps(result, sort_keys=True))


if __name__ == "__main__":
    try:
        main()
    except (Hold, OSError, ValueError, KeyError) as exc:
        print("EQUITY_ALPHA_SOURCE_RELEASE_ATTESTATION_HOLD: " + str(exc), file=sys.stderr)
        sys.exit(2)
