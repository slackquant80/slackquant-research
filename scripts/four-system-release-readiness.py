#!/usr/bin/env python3
"""Read-only four-system Pages release readiness gate.

This is a release *preflight*, not a publication command. Never refresh
models, manufacture rights, merge PRs, trigger Actions or change hosted bytes.
A successful PR gate does not supersede explicit owner release authorization.
"""
from __future__ import annotations

import argparse
import base64
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
    # GitHub JSON is UTF-8. Windows implicit CP949 can crash reader threads
    # and return None stdout before the preflight has a chance to HOLD.
    proc = subprocess.run(
        ["gh", "api", path], capture_output=True, text=False, check=False,
        timeout=30,
    )
    if proc.returncode or not isinstance(proc.stdout, bytes):
        raise RuntimeError("GITHUB_READ_ONLY_QUERY_FAILED: " + path)
    try:
        return json.loads(proc.stdout.decode("utf-8-sig", errors="strict"))
    except (ValueError, UnicodeError) as exc:
        raise RuntimeError("GITHUB_READ_ONLY_UTF8_JSON_HOLD: " + path) from exc


def assess(pr: dict, changed: set[str], tree_paths: set[str],
           clocks: dict[str, str], checks: list[dict],
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
        if file not in tree_paths:
            findings.append(system.upper() + "_RELEASE_ARTIFACT_ABSENT")
    floor = clocks.get("PDS", "")
    if not re.fullmatch(r"20\d{2}-\d{2}-\d{2}", floor):
        findings.append("PDS_RELEASE_CLOCK_UNVERIFIED")
    else:
        for name in ("F2R", "EquityAlpha"):
            clock = clocks.get(name, "")
            if not re.fullmatch(r"20\d{2}-\d{2}-\d{2}", clock):
                findings.append(name.upper() + "_CLOCK_UNVERIFIED")
            elif clock < floor:
                findings.append(name.upper() + "_STALE_BELOW_PDS_CLOCK")
    if any(path.startswith(".github/workflows/") for path in changed):
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
        "changed_file_count": len(changed),
        "required_artifacts_present": {
            name: path in tree_paths for name, path in REQUIRED.items()
        },
        "unchanged_artifacts_reused": sorted(
            name for name, path in REQUIRED.items()
            if path in tree_paths and path not in changed),
        "candidate_clocks": clocks,
        "readiness": "GATE_PASSED_REQUIRES_EXPLICIT_OWNER_AUTHORIZATION"
                     if not findings else "HOLD",
        "hold_reasons": sorted(set(findings)),
        "publication_performed": False,
        "model_refresh_performed": False,
        "actions_dispatched": False,
    }


def candidate_tree(head: str) -> dict[str, str]:
    # Compare complete candidate snapshot, not only changed paths.
    commit = gh_json(f"repos/{REPO}/git/commits/{head}")
    tree_sha = (commit.get("tree") or {}).get("sha", "")
    if not SHA.fullmatch(tree_sha):
        raise RuntimeError("CANDIDATE_COMMIT_TREE_UNVERIFIED")
    data = gh_json(f"repos/{REPO}/git/trees/{tree_sha}?recursive=1")
    if data.get("truncated"):
        raise RuntimeError("FULL_CANDIDATE_TREE_TRUNCATED")
    return {entry["path"]: entry["sha"] for entry in data["tree"]
            if entry["type"] == "blob"}


def published_blob(blob_sha: str) -> bytes:
    if not SHA.fullmatch(blob_sha):
        raise RuntimeError("BAD_CANDIDATE_BLOB_SHA")
    blob = gh_json(f"repos/{REPO}/git/blobs/{blob_sha}")
    if blob.get("sha") != blob_sha or blob.get("encoding") != "base64":
        raise RuntimeError("CANDIDATE_BLOB_IDENTITY_HOLD")
    return base64.b64decode(blob["content"])


def candidate_clocks(tree: dict[str, str]) -> dict[str, str]:
    # These are small public artifacts, never private compute or rights receipts.
    pds_mark_path = "public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"
    keys = [REQUIRED[x] for x in ("PDS", "F2R", "EquityAlpha")] + [pds_mark_path]
    if not all(key in tree for key in keys):
        return {}
    pds = json.loads(published_blob(tree[REQUIRED["PDS"]]))
    pds_mark = json.loads(published_blob(tree[pds_mark_path]))
    f2r = json.loads(published_blob(tree[REQUIRED["F2R"]]))
    raw = published_blob(tree[REQUIRED["EquityAlpha"]]).decode("utf-8-sig").strip()
    match = re.fullmatch(r"window\.EA_LIVE_OVERLAY\s*=\s*(\{.*\})\s*;", raw, re.S)
    if not match:
        raise RuntimeError("EQUITY_PUBLIC_DATA_BINDING_UNREADABLE")
    equity = json.loads(match.group(1))
    if (pds.get("status") != "PDS_SLACKQUANT_PUBLIC_BINDING_PASS"
        or pds_mark.get("status") != "PASS"):
        raise RuntimeError("PDS_PUBLIC_RECEIPTS_STATUS_HOLD")
    official = (f2r.get("live_state") or {}).get("official") or {}
    holdings = official.get("holdings") or []
    if f2r.get("schema_version") != "2.0" or len(holdings) != 4 or len({
            x.get("asset") for x in holdings}) != 4 or abs(sum(
            float(x.get("target_weight", 0)) for x in holdings) - 1.0) > 1e-8:
        raise RuntimeError("F2R_SOURCE_OWNED_PUBLIC_CONTRACT_HOLD")
    if equity.get("meta", {}).get("benchmark") != "ACWI":
        raise RuntimeError("EQUITY_BENCHMARK_IDENTITY_HOLD")
    # F2R: both Preview and MTD must be current; completed support may stay Oct.
    live = f2r.get("live_state") or {}
    mtd, preview = live.get("current_mtd") or {}, live.get("preview") or {}
    if not (mtd.get("available") and preview.get("available")):
        raise RuntimeError("F2R_MTD_OR_PREVIEW_UNAVAILABLE")
    dates = [mtd.get("as_of_date") or "", preview.get("market_cutoff_date") or ""]
    # public_as_of_date tracks public KST issuance, not the US market close.
    market_close = pds_mark.get("official_mark_through") or ""
    publication_date = pds.get("public_as_of_date") or ""
    if publication_date < market_close:
        raise RuntimeError("PDS_PUBLICATION_PRECEDES_MARK_HOLD")
    return {"PDS": market_close,
            "PDS_PUBLIC_AS_OF": publication_date,
            "F2R": min(dates),
            "EquityAlpha": equity.get("meta", {}).get("marketDataThrough") or ""}


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
        snapshot = candidate_tree(head)
        dates = candidate_clocks(snapshot)
        report = assess(pr, paths, set(snapshot), dates, checks, args.expected_head)
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
