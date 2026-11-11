#!/usr/bin/env python3
"""Read-only four-system Pages release readiness gate.

This is a release *preflight*, not a publication command. Never refresh
models, manufacture rights, merge PRs, trigger Actions or change hosted bytes.
A successful PR gate does not supersede explicit owner release authorization.
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from typing import Any

REPO = "slackquant80/slackquant-research"
REQUIRED = {
    "PDS": "public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json",
    "ADAA": "public/assets/systems/adaa/snapshot.js",
    "F2R": "public/data/systems/f2r/public_state.json",
    "EquityAlpha": "public/dashboards/equity-alpha/data/live_overlay.js",
}
SHA = re.compile(r"^[a-f0-9]{40}$")


def gh_json(path: str) -> Any:
    proc = subprocess.run(
        ["gh", "api", path], capture_output=True, text=True, check=False,
        timeout=30,
    )
    if proc.returncode:
        raise RuntimeError("GITHUB_READ_ONLY_QUERY_FAILED: " + path)
    return json.loads(proc.stdout)


def assess(pr: dict, paths: set[str], checks: list[dict],
           expected_head: str = "") -> dict:
    head = (pr.get("head") or {}).get("sha", "")
    findings: list[str] = []
    if not SHA.fullmatch(head):
        findings.append("INVALID_PR_HEAD")
    if expected_head and head != expected_head:
        findings.append("PR_HEAD_CHANGED")
    if pr.get("state") != "open":
        findings.append("PR_NOT_OPEN")
    if pr.get("draft"):
        findings.append("DRAFT_REVIEW_PENDING")
    if pr.get("mergeable") is not True:
        findings.append("MERGEABILITY_NOT_CONFIRMED")
    if (pr.get("base") or {}).get("ref") != "main":
        findings.append("BASE_NOT_MAIN")
    for system, file in REQUIRED.items():
        if file not in paths:
            findings.append(system.upper() + "_RELEASE_ARTIFACT_ABSENT")
    if any(path.startswith(".github/workflows/") for path in paths):
        findings.append("WORKFLOW_CHANGE_IN_DATA_RELEASE_REVIEW")
    # The existing Pages workflow skips Draft PR builds. A skipped check
    # is not success; never reinterpret a prior independent source PR CI.
    release_build = [
        c for c in checks
        if c.get("name") in ("build", "Canonical release validation")
    ]
    if not any(c.get("status") == "completed"
               and c.get("conclusion") == "success" for c in release_build):
        findings.append("COMBINED_PAGES_RELEASE_VALIDATION_NOT_PASS")
    if any(c.get("conclusion") in ("failure", "timed_out", "cancelled",
                                   "action_required") for c in checks):
        findings.append("CHECKS_BLOCKED_OR_FAILED")
    return {
        "schema": "SLACKQUANT_FOUR_SYSTEM_RELEASE_READINESS_V1",
        "pr": pr.get("number"),
        "head": head,
        "file_count": len(paths),
        "required_artifacts_present": {
            name: path in paths for name, path in REQUIRED.items()
        },
        "readiness": "GATE_PASSED_REQUIRES_EXPLICIT_OWNER_AUTHORIZATION"
                     if not findings else "HOLD",
        "hold_reasons": sorted(set(findings)),
        "publication_performed": False,
        "model_refresh_performed": False,
        "actions_dispatched": False,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pr", type=int, required=True)
    parser.add_argument("--expected-head", default="")
    args = parser.parse_args()
    if args.pr <= 0 or (args.expected_head
                         and not SHA.fullmatch(args.expected_head)):
        parser.error("invalid PR or expected head")
    try:
        pr = gh_json(f"repos/{REPO}/pulls/{args.pr}")
        paths: set[str] = set()
        for page in range(1, 11):
            files = gh_json(
                f"repos/{REPO}/pulls/{args.pr}/files?per_page=100&page={page}"
            )
            paths.update(f["filename"] for f in files)
            if len(files) < 100:
                break
        else:
            raise RuntimeError("PR_FILE_CENSUS_PAGINATION_HOLD")
        head = (pr.get("head") or {}).get("sha", "")
        checks = (
            gh_json(f"repos/{REPO}/commits/{head}/check-runs?per_page=100")
            .get("check_runs", [])
            if SHA.fullmatch(head) else []
        )
        if len(checks) >= 100:
            raise RuntimeError("CHECK_RUN_CENSUS_PAGINATION_HOLD")
        report = assess(pr, paths, checks, args.expected_head)
    except (OSError, ValueError, KeyError, RuntimeError,
            subprocess.TimeoutExpired) as exc:
        print(json.dumps({"readiness": "HOLD",
                          "reason": str(exc),
                          "publication_performed": False}, sort_keys=True))
        return 2
    print(json.dumps(report, sort_keys=True))
    return 0 if report["readiness"].startswith("GATE_PASSED") else 3


if __name__ == "__main__":
    sys.exit(main())
