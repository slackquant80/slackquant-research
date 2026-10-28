#!/usr/bin/env python3
"""Equity Alpha received-public-artifact plan; reads only, never stages or deploys."""
from __future__ import annotations
import argparse
import importlib.util
import json
from pathlib import Path
import sys

HERE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("ea_receiver", HERE / "receive-equity-alpha-intake.py")
receiver = importlib.util.module_from_spec(spec)
spec.loader.exec_module(receiver)


def plan(bundle: Path, workspace: Path, bundle_sha: str, source_sha: str, rights_sha: str):
    manifest, files = receiver.receive(bundle, bundle_sha, source_sha, rights_sha)
    report = receiver.preflight(bundle, workspace, bundle_sha, source_sha, rights_sha)
    allowed = receiver.PATHS
    changed = set(report["changed_paths"])
    if not changed.issubset(allowed) or len(changed) != len(report["changed_paths"]):
        raise receiver.Hold("PLAN_CHANGED_SCOPE_HOLD")
    if set(files) != allowed:
        raise receiver.Hold("PLAN_ALL_SEVEN_FILES_REQUIRED")
    entries = []
    for rel in receiver.FILES:
        path = receiver.PREFIX + rel
        source = files[path]
        effective = receiver.canonical_text(source, path)
        if receiver.digest(effective) != report["proposed_text_lf_or_binary_exact_sha256"][path]:
            raise receiver.Hold("PLAN_EFFECTIVE_BYTES_DRIFT")
        target = workspace / path
        if not target.is_file() or target.is_symlink():
            raise receiver.Hold("PLAN_EXISTING_HOST_PATH_REQUIRED")
        if path not in changed and receiver.canonical_text(target.read_bytes(), path) != effective:
            raise receiver.Hold("PLAN_UNREPORTED_CHANGE")
        entries.append({
            "path": path,
            "action": "REVIEW_CHANGE" if path in changed else "KEEP",
            "transport_original_sha256": receiver.digest(source),
            "proposed_effective_sha256": receiver.digest(effective),
            "binary_exact_only": path not in receiver.TEXT_PATHS,
        })
    return {
        "status": "NO_CHANGE_NO_PR" if not changed else "REVIEW_PLAN_ONLY_NOT_STAGED",
        "source_commit": manifest["source_commit"],
        "bundle_sha256": bundle_sha,
        "planned_changed_files": sorted(changed),
        "file_records": entries,
        "files_written": 0,
        "git_actions_started": False,
        "public_deployment": False,
    }


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--bundle", type=Path, required=True)
    p.add_argument("--workspace", type=Path, default=HERE.parent)
    p.add_argument("--bundle-sha256", required=True)
    p.add_argument("--source-commit", required=True)
    p.add_argument("--rights-sha256", required=True)
    a = p.parse_args()
    print(json.dumps(plan(a.bundle, a.workspace, a.bundle_sha256,
                          a.source_commit, a.rights_sha256), sort_keys=True))


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, KeyError, receiver.Hold) as exc:
        print("EQUITY_ALPHA_PUBLIC_PLAN_HOLD: " + str(exc), file=sys.stderr)
        sys.exit(2)
