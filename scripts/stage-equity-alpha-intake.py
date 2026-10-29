#!/usr/bin/env python3
"""Review-only Equity Alpha seven-file staging. NEVER commits, pushes or deploys.

The source Release and exact rights/compute receipt bindings are independently
rechecked before touching an EXISTING clean, pinned hosted review worktree.
No writes to main, no new checkout, no GitHub Actions invocation.
"""
from __future__ import annotations

import argparse
import importlib.util
import json
from pathlib import Path
import re
import subprocess
import sys

HERE = Path(__file__).resolve().parent


def load(name: str, path: str):
    spec = importlib.util.spec_from_file_location(name, HERE / path)
    if spec is None or spec.loader is None:
        raise RuntimeError("REVIEW_DEPENDENCY_MISSING")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


receiver = load("equity_review_receiver", "receive-equity-alpha-intake.py")
verifier = load("equity_review_attestor", "verify_equity_intake_release.py")


class Hold(RuntimeError):
    pass


def git(workspace: Path, *args: str) -> str:
    try:
        p = subprocess.run(["git", "-C", str(workspace), *args],
                           capture_output=True, text=True, timeout=20, check=False)
    except (OSError, subprocess.TimeoutExpired) as exc:
        raise Hold("REVIEW_GIT_QUERY_FAILED") from exc
    if p.returncode != 0:
        raise Hold("REVIEW_GIT_QUERY_FAILED")
    return p.stdout.rstrip("\r\n")


def assert_review_worktree(workspace: Path, expected_hosted_main: str) -> dict:
    root = workspace.resolve(strict=True)
    if not re.fullmatch(r"[a-f0-9]{40}", expected_hosted_main):
        raise Hold("UNPINNED_HOSTED_BASE_COMMIT")
    if Path(git(root, "rev-parse", "--show-toplevel")).resolve() != root:
        raise Hold("REVIEW_WORKTREE_ROOT_REQUIRED")
    branch = git(root, "symbolic-ref", "--short", "HEAD")
    if not re.fullmatch(r"review/equity-hosted-intake-[A-Za-z0-9._-]+", branch):
        raise Hold("NOT_ISOLATED_EQUITY_REVIEW_BRANCH")
    head = git(root, "rev-parse", "HEAD")
    remote = git(root, "rev-parse", "--verify", "refs/remotes/origin/main")
    if head != expected_hosted_main or remote != expected_hosted_main:
        raise Hold("REVIEW_BASE_HEAD_OR_ORIGIN_MAIN_DRIFT")
    if git(root, "status", "--porcelain=v1", "--untracked-files=all"):
        raise Hold("REVIEW_WORKTREE_NOT_CLEAN")
    if git(root, "diff", "--cached", "--name-only"):
        raise Hold("REVIEW_INDEX_NOT_CLEAN")
    return {"branch": branch, "hosted_base_commit": head}


def assert_regular_target(workspace: Path, relative: str) -> Path:
    if relative not in receiver.PATHS:
        raise Hold("REVIEW_NONALLOWLIST_TARGET")
    current = workspace
    for component in Path(relative).parts:
        current = current / component
        if current.is_symlink():
            raise Hold("REVIEW_SYMLINK_TARGET_OR_PARENT")
    if not current.is_file():
        raise Hold("REVIEW_TARGET_MISSING")
    if git(workspace, "ls-files", "--error-unmatch", "--", relative) != relative:
        raise Hold("REVIEW_TARGET_NOT_GIT_TRACKED")
    return current


def stage_review(bundle: Path, workspace: Path, bundle_sha: str, release_tag: str,
                 rights_path: Path, compute_path: Path, expected_hosted_main: str) -> dict:
    """Source+receipt attestation -> no-delta plan -> isolated review worktree only."""
    source_commit = verifier.verified_release_commit(release_tag)
    rights = rights_path.read_bytes()
    compute = compute_path.read_bytes()
    manifest, files = receiver.receive(bundle, bundle_sha, source_commit,
                                       verifier.sha(rights))
    evidence = verifier.verify_evidence(manifest, source_commit, rights, compute)
    report = receiver.preflight(bundle, workspace, bundle_sha, source_commit,
                                verifier.sha(rights))
    context = assert_review_worktree(workspace, expected_hosted_main)
    changed = tuple(sorted(report["changed_paths"]))
    if len(changed) != len(set(changed)) or not set(changed).issubset(receiver.PATHS):
        raise Hold("REVIEW_UNAUTHORIZED_CHANGED_PATH")
    if report["status"] == "PASS_NO_MATERIAL_DELTA":
        if changed:
            raise Hold("REVIEW_NO_DELTA_STATUS_CONTRADICTION")
        return {"status": "NO_MATERIAL_DELTA_NO_PR", "changed": [],
                "files_written": 0, "published": False, **context, **evidence}
    if report["status"] != "PASS_REVIEW_READY_NOT_STAGED" or not changed:
        raise Hold("REVIEW_PREFLIGHT_NOT_READY")
    # All seven hosted targets must already be tracked, regular, and non-symlink.
    targets = {relative: assert_regular_target(workspace, relative)
               for relative in sorted(receiver.PATHS)}
    original = {relative: targets[relative].read_bytes() for relative in changed}
    effective = {relative: receiver.canonical_text(files[relative], relative)
                 for relative in changed}
    for relative, data in effective.items():
        if receiver.digest(data) != report["proposed_text_lf_or_binary_exact_sha256"][relative]:
            raise Hold("REVIEW_PINNED_EFFECTIVE_BYTES_DRIFT")
    # This step only changes tracked review-branch files. It never stages Git index.
    try:
        for relative, data in effective.items():
            targets[relative].write_bytes(data)
        for relative, data in effective.items():
            if targets[relative].read_bytes() != data:
                raise Hold("REVIEW_POSTWRITE_BYTE_MISMATCH")
        status = git(workspace, "status", "--porcelain=v1", "--untracked-files=all")
        recorded = set()
        for line in status.splitlines():
            if len(line) < 4:
                raise Hold("REVIEW_MALFORMED_GIT_STATUS")
            path = line[3:].strip().strip('"')
            if line[:2] not in {" M", "M "} or path not in changed:
                raise Hold("REVIEW_GIT_SCOPE_DRIFT")
            recorded.add(path)
        if recorded != set(changed):
            raise Hold("REVIEW_GIT_DIFF_NOT_EXACT_SEVEN_SCOPE")
        git(workspace, "diff", "--check")
        if git(workspace, "diff", "--cached", "--name-only"):
            raise Hold("REVIEW_UNEXPECTED_STAGED_CHANGES")
    except Exception:
        # Keep the user's real hosted main untouched; also undo partial review edits.
        for relative, previous in original.items():
            targets[relative].write_bytes(previous)
        raise
    return {"status": "REVIEW_WORKTREE_ONLY_NOT_COMMITTED", "changed": list(changed),
            "files_written": len(changed), "published": False,
            "commit_created": False, "pr_created": False, **context, **evidence}


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--bundle", required=True, type=Path)
    p.add_argument("--workspace", required=True, type=Path)
    p.add_argument("--bundle-sha256", required=True)
    p.add_argument("--source-release-tag", required=True)
    p.add_argument("--rights-evidence", required=True, type=Path)
    p.add_argument("--compute-receipt", required=True, type=Path)
    p.add_argument("--expected-hosted-main", required=True)
    args = p.parse_args()
    result = stage_review(args.bundle, args.workspace, args.bundle_sha256,
                          args.source_release_tag, args.rights_evidence,
                          args.compute_receipt, args.expected_hosted_main)
    print(json.dumps(result, sort_keys=True))


if __name__ == "__main__":
    try:
        main()
    except (Hold, receiver.Hold, verifier.Hold, OSError, ValueError, KeyError) as exc:
        print("EQUITY_REVIEW_STAGING_HOLD: " + str(exc), file=sys.stderr)
        sys.exit(2)
