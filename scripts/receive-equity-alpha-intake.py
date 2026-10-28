#!/usr/bin/env python3
"""Equity Alpha exact seven-file hosted preflight. READ-ONLY: no Git, PR or deploy."""
from __future__ import annotations

import argparse
from datetime import date
from hashlib import sha256
import json
from pathlib import Path
import re
import sys
from zipfile import ZipFile

SCHEMA = "EQUITY_ALPHA_HOSTED_INTAKE_PROPOSAL_V1"
PREFIX = "public/dashboards/equity-alpha/"
FILES = (
    "index.html", "assets/app.js", "assets/holdings-view.js",
    "assets/styles.css", "data/dashboard_data.js", "data/live_overlay.js",
    "exports/Global_Equity_Alpha_Full_History.xlsx",
)
MANIFEST = "EQUITY_ALPHA_HOSTED_INTAKE_MANIFEST.json"
PATHS = {PREFIX + f for f in FILES}
TEXT_PATHS = {PREFIX + f for f in FILES if not f.endswith(".xlsx")}
# SHA256 of the received ZIP and each original member remains strictly byte-exact.
# EOL canonicalization is only for material-delta classification, never for attestation.
MAX_ZIP = 30_000_000
MAX_FILE = 20_000_000
HEX64 = re.compile(r"[a-f0-9]{64}\Z")
HEX40 = re.compile(r"[a-f0-9]{40}\Z")


class Hold(RuntimeError):
    pass


def digest(data: bytes) -> str:
    return sha256(data).hexdigest()


def canonical_text(data: bytes, path: str) -> bytes:
    """Only CRLF-to-LF for the six expected UTF-8 text paths.

    Never touch XLSX, remove BOM/whitespace or rewrite any source payload.
    Fail closed on bare CR to avoid masking unrelated content changes.
    """
    if path not in TEXT_PATHS:
        return data
    try:
        data.decode("utf-8-sig")
    except UnicodeError as exc:
        raise Hold("NON_UTF8_PUBLIC_TEXT_" + path) from exc
    if b"\r" in data.replace(b"\r\n", b""):
        raise Hold("BARE_CR_IN_PUBLIC_TEXT_" + path)
    return data.replace(b"\r\n", b"\n")


def binding(data: bytes, name: str) -> dict:
    try:
        text = data.decode("utf-8-sig").strip()
    except UnicodeError as exc:
        raise Hold("NOT_UTF8_DATA_BINDING") from exc
    m = re.fullmatch(r"window\." + re.escape(name) + r"\s*=\s*(\{.*\});?", text, re.S)
    if not m:
        raise Hold("NOT_EXACT_JS_BINDING_" + name)
    try:
        v = json.loads(m.group(1))
    except ValueError as exc:
        raise Hold("NOT_JSON_BINDING_" + name) from exc
    if not isinstance(v, dict):
        raise Hold("NOT_OBJECT_BINDING")
    return v


def receive(bundle: Path, expected_sha: str, source_sha: str, rights_sha: str):
    for value, pattern, label in (
        (expected_sha, HEX64, "BUNDLE_SHA"),
        (source_sha, HEX40, "PRIVATE_SOURCE_SHA"),
        (rights_sha, HEX64, "RIGHTS_EVIDENCE_SHA"),
    ):
        if not pattern.fullmatch(value):
            raise Hold("UNPINNED_" + label)
    if not bundle.is_file() or bundle.is_symlink() or bundle.stat().st_size > MAX_ZIP:
        raise Hold("BUNDLE_ABSENT_OR_OVERSIZED")
    if digest(bundle.read_bytes()) != expected_sha:
        raise Hold("BUNDLE_SHA_MISMATCH")
    entries = {}
    with ZipFile(bundle, "r") as z:
        infos = z.infolist()
        names = [x.filename for x in infos]
        if len(names) != 8 or len(set(names)) != 8 or set(names) != PATHS | {MANIFEST}:
            raise Hold("BUNDLE_PATH_ALLOWLIST_OR_DUPLICATE_FAILURE")
        if any(
            x.is_dir()
            or x.filename.startswith("/")
            or "\\" in x.filename
            or ".." in x.filename.split("/")
            or ((x.external_attr >> 16) & 0o170000) == 0o120000
            for x in infos
        ):
            raise Hold("TRAVERSAL_SYMLINK_OR_FOLDER_BLOCKED")
        if any(x.file_size > MAX_FILE for x in infos) or sum(x.file_size for x in infos) > MAX_ZIP:
            raise Hold("BUNDLE_UNCOMPRESSED_SIZE_BOUND")
        for info in infos:
            content = z.read(info.filename)
            if len(content) != info.file_size:
                raise Hold("ZIP_FILE_SIZE_DIFFERENCE")
            entries[info.filename] = content
    try:
        manifest = json.loads(entries.pop(MANIFEST).decode("utf-8-sig"))
    except (ValueError, UnicodeError) as exc:
        raise Hold("INVALID_MANIFEST") from exc
    if manifest.get("schema") != SCHEMA or manifest.get("candidate_kind") != "REVIEW_ONLY_NEVER_AUTODEPLOY":
        raise Hold("WRONG_MANIFEST_PROTOCOL")
    if manifest.get("source_repository") != "slackquant80/research-equity-alpha":
        raise Hold("WRONG_PRIVATE_SOURCE_OWNER")
    if manifest.get("source_commit") != source_sha or manifest.get("public_artifact_root") != PREFIX:
        raise Hold("WRONG_SOURCE_COMMIT_OR_TARGET_ROOT")
    if manifest.get("rights_evidence_sha256") != rights_sha:
        raise Hold("WRONG_RIGHTS_EVIDENCE_SHA")
    if not HEX64.fullmatch(str(manifest.get("compute_receipt_sha256", ""))):
        raise Hold("MISSING_COMPUTE_PROVENANCE")
    rows = manifest.get("files")
    if not isinstance(rows, list) or len(rows) != 7 or {
        row.get("path") for row in rows if isinstance(row, dict)
    } != PATHS:
        raise Hold("WRONG_MANIFEST_SEVEN_PATHS")
    for row in rows:
        blob = entries[row["path"]]
        if type(row.get("size")) is not int or row["size"] != len(blob) or row.get("sha256") != digest(blob):
            raise Hold("FILE_SHA_OR_SIZE_MISMATCH_" + row["path"])
    return manifest, entries


def clock(manifest: dict, files: dict[str, bytes]) -> dict:
    hist = binding(files[PREFIX+"data/dashboard_data.js"], "EA_HISTORY_DATA").get("meta", {})
    live = binding(files[PREFIX+"data/live_overlay.js"], "EA_LIVE_OVERLAY")
    lm = live.get("meta", {})
    pm = live.get("preview", {}).get("meta", {})
    cost = live.get("currentCost", {})
    expected = {
        "official_signal_month": lm.get("signalMonth"),
        "official_holding_month": lm.get("holdingMonth"),
        "execution_date": lm.get("executionDate"),
        "completed_close_cutoff": lm.get("completedCloseCutoff"),
        "market_data_through": lm.get("marketDataThrough"),
        "preview_as_of": pm.get("previewAsOf"),
        "preview_signal_month": pm.get("prospectiveSignalMonth"),
        "benchmark": hist.get("benchmark"),
        "accounting": cost.get("accounting"),
        "cost_bps_per_side": cost.get("costBpsPerSide"),
        "production_authority": lm.get("productionAuthority"),
    }
    if manifest.get("clock_and_accounting") != expected:
        raise Hold("EMBEDDED_CLOCK_DIFFERS_FROM_MANIFEST")
    if not all((
        hist.get("latestSignalMonth") == lm.get("signalMonth"),
        hist.get("performanceThroughCompletedDate") == lm.get("completedCloseCutoff"),
        pm.get("officialSignalMonth") == lm.get("signalMonth"),
        pm.get("officialHoldingMonth") == lm.get("holdingMonth"),
        pm.get("previewAsOf") == lm.get("marketDataThrough"),
        expected["benchmark"] == "ACWI",
        expected["accounting"] == "UNIFIED_FINAL_PORTFOLIO",
        expected["production_authority"] == "v1.5.0.93"
    )):
        raise Hold("CLOCK_BENCHMARK_COST_OR_AUTHORITY_DRIFT")
    for key in ("market_data_through", "completed_close_cutoff", "execution_date", "preview_as_of"):
        try:
            date.fromisoformat(str(expected[key]))
        except ValueError as exc:
            raise Hold("INVALID_DATE_" + key) from exc
    return expected


def preflight(bundle: Path, workspace: Path, expected_sha: str, source_sha: str, rights_sha: str):
    if not workspace.is_dir():
        raise Hold("PLATFORM_WORKSPACE_MISSING")
    manifest, files = receive(bundle, expected_sha, source_sha, rights_sha)
    candidate_clock = clock(manifest, files)
    baseline = workspace / PREFIX
    old_overlay = baseline / "data" / "live_overlay.js"
    if not baseline.is_dir() or baseline.is_symlink() or not old_overlay.is_file() or old_overlay.is_symlink():
        raise Hold("PUBLIC_MAIN_BASELINE_MISSING")
    old_meta = binding(old_overlay.read_bytes(), "EA_LIVE_OVERLAY").get("meta", {})
    old_clock = old_meta.get("marketDataThrough")
    # A newer market date cannot justify reverting the Official signal or completed
    # origin; preserve each independent historical decision clock.
    comparisons = (
        ("marketDataThrough", "market_data_through"),
        ("completedCloseCutoff", "completed_close_cutoff"),
        ("executionDate", "execution_date"),
    )
    try:
        for old_key, new_key in comparisons:
            previously = date.fromisoformat(str(old_meta.get(old_key)))
            now = date.fromisoformat(str(candidate_clock[new_key]))
            if now < previously:
                raise Hold("PUBLIC_CLOCK_REGRESSION_" + old_key)
        old_signal = str(old_meta.get("signalMonth"))
        new_signal = str(candidate_clock["official_signal_month"])
        if not re.fullmatch(r"\d{4}-\d{2}", old_signal) or not re.fullmatch(r"\d{4}-\d{2}", new_signal):
            raise Hold("INVALID_PUBLIC_OR_SOURCE_SIGNAL_MONTH")
        if new_signal < old_signal:
            raise Hold("PUBLIC_SIGNAL_MONTH_REGRESSION")
    except ValueError as exc:
        raise Hold("INVALID_PUBLIC_OR_SOURCE_DATE") from exc
    changed = []
    eol_only = []
    identical = []
    canonical_sha = {}
    for rel in FILES:
        path = PREFIX + rel
        file = baseline / rel
        if file.is_symlink():
            raise Hold("PUBLIC_TARGET_SYMLINK")
        candidate = files[path]
        canonical = canonical_text(candidate, path)
        canonical_sha[path] = digest(canonical)
        if not file.is_file():
            changed.append(path)
            continue
        baseline_bytes = file.read_bytes()
        if baseline_bytes == candidate:
            identical.append(path)
        elif path in TEXT_PATHS and canonical_text(baseline_bytes, path) == canonical:
            eol_only.append(path)
        else:
            changed.append(path)
    return {
        "status": "PASS_NO_MATERIAL_DELTA" if not changed else "PASS_REVIEW_READY_NOT_STAGED",
        "source_commit": source_sha,
        "candidate_sha256": expected_sha,
        "published_data_through": old_clock,
        "candidate_data_through": candidate_clock["market_data_through"],
        "changed_paths": changed,
        "eol_only_equivalent_paths": eol_only,
        "byte_identical_paths": identical,
        "proposed_text_lf_or_binary_exact_sha256": canonical_sha,
        "publication_staging_authorized": False,
        "files_checked": 7,
        "hosted_changes_written": False,
        "pr_created": False,
        "deployed": False,
        "rights_status": "PINNED_RECEIPT_SHA_ONLY_INDEPENDENT_REVIEW_REQUIRED"
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bundle", type=Path, required=True)
    parser.add_argument("--workspace", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--expected-sha256", required=True)
    parser.add_argument("--source-commit", required=True)
    parser.add_argument("--approved-rights-sha256", required=True)
    a = parser.parse_args()
    print(json.dumps(preflight(a.bundle, a.workspace, a.expected_sha256, a.source_commit,
                               a.approved_rights_sha256), sort_keys=True))


if __name__ == "__main__":
    try:
        main()
    except (Hold, OSError, ValueError, KeyError) as exc:
        print("EQUITY_ALPHA_HOSTED_READONLY_PREFLIGHT_HOLD: " + str(exc), file=sys.stderr)
        sys.exit(2)
