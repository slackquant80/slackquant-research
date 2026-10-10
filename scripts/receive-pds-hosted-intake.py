#!/usr/bin/env python3
"""Fail-closed, non-publishing receiver for the 19-file PDS review-only package.

Default mode is read-only verification. --apply-reviewed is ONLY for an
isolated, review branch/worktree; it never commits, pushes, approves or deploys.
Source-owned model computation and provider live-evidence refresh are excluded.
"""
from __future__ import annotations

import argparse
import hashlib
import importlib.util
import json
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTRACT = "PDS_HOSTED_ARTIFACT_INTAKE_PROPOSAL_V1"
META = "PDS_HOSTED_INTAKE_PROPOSAL.json"
EXPORT_PREFIX = "public/data/systems/pds/"
MIRROR_PREFIX = "public/assets/systems/pds/"
MIRROR = frozenset({
    "Portfolio_Decision_System_Public.html",
    "PDS_PUBLIC_DASHBOARD_RECEIPT.json",
    "PDS_Portfolio_History_Current_Definition.xlsx",
})
SHA = re.compile(r"[a-f0-9]{64}\Z")
YM = re.compile(r"20[0-9]{2}-(?:0[1-9]|1[0-2])\Z")
MAX_MEMBER = 150 * 1024 * 1024
MAX_TOTAL = 300 * 1024 * 1024
MAX_MEMBERS = 20


def require(ok: bool, message: str) -> None:
    if not ok:
        raise ValueError(message)


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def json_obj(raw: bytes, what: str) -> dict:
    try:
        obj = json.loads(raw.decode("utf-8-sig"))
    except (UnicodeDecodeError, ValueError) as exc:
        raise ValueError(f"{what}: invalid JSON") from exc
    require(isinstance(obj, dict), f"{what}: must be an object")
    return obj


def holding_after(month: str) -> str:
    require(bool(YM.fullmatch(month)), "invalid official signal month")
    y, m = map(int, month.split("-"))
    return f"{y + (m == 12):04d}-{m % 12 + 1:02d}"


def real_day(value: str) -> str:
    require(bool(re.fullmatch(r"20[0-9]{2}-[0-9]{2}-[0-9]{2}", value)), "invalid market-through format")
    try:
        date.fromisoformat(value)
    except ValueError as exc:
        raise ValueError("invalid market-through calendar date") from exc
    return value


def public_expected(app: Path) -> set[str]:
    # Do not maintain a drifting second 16-file list.
    binder = app / "scripts/bind-pds-public-export.py"
    require(binder.is_file(), "platform PDS public binder missing")
    spec = importlib.util.spec_from_file_location("pds_existing_public_binder", binder)
    require(spec is not None and spec.loader is not None, "platform binder import unavailable")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    require(len(module.EXPECTED) == 16, "platform public binder inventory changed; review required")
    return set(module.EXPECTED)


def expected_paths(app: Path) -> set[str]:
    return {EXPORT_PREFIX + n for n in public_expected(app)} | {MIRROR_PREFIX + n for n in MIRROR}


def receipt_clock(records: dict[str, bytes]) -> dict:
    export = json_obj(records[EXPORT_PREFIX + "public_export_manifest.json"], "source manifest")
    disclosure = json_obj(records[EXPORT_PREFIX + "public_disclosure_state.json"], "disclosure")
    receipt = json_obj(records[MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"], "mirror receipt")
    require(str(export.get("status", "")).startswith("PASS_PUBLIC_SAFE_EXPORT"), "source export not PASS")
    for key, value in {
        "no_private_leakage_scan": "PASS",
        "recipe_protection_scan": "PASS",
        "performance_clock": "REALIZED_HOLDING_MONTH",
        "authority": "PUBLIC_RESEARCH_NO_PORTFOLIO_AUTHORITY",
        "platform_deployment_authorized": False,
        "active_core_policy": "GOVERNED_STRATEGIC_ALLOCATION__RECIPE_PROTECTED",
        "public_naming_lock": "F2R_PUBLIC_NAMING_LOCK_V1_PASS",
    }.items():
        require(export.get(key) == value, f"source release gate: {key}")
    require(disclosure.get("public_component_identity") == "ADAA + F2R", "provider identity mismatch")
    require(disclosure.get("intramonth_preview") == "PRIVATE_NOT_EXPORTED", "compatibility preview unexpectedly exported")
    require(receipt.get("artifact") == "PDS_PUBLIC_CANONICAL_MIRROR_V1", "wrong canonical mirror")
    require(receipt.get("status") == "PASS", "canonical mirror not PASS")
    require(receipt.get("presentation_contract") == "RS03_CANONICAL_LOCAL_INFORMATION__PUBLIC_SANITIZED_MIRROR", "mirror presentation changed")
    require(receipt.get("public_policy") == "CANONICAL_LOCAL_INFORMATION__ENVIRONMENT_ONLY_SUPPRESSED", "mirror policy changed")
    require(receipt.get("canonical_current_values_embedded") is True and
            receipt.get("environment_specific_values_embedded") is False, "unapproved mirror disclosure")
    sanit = receipt.get("sanitization") or {}
    require(isinstance(sanit, dict) and all(sanit.get(k) == "PASS" for k in
            ("absolute_path_scan", "local_storage_token_scan", "legacy_delayed_dashboard_scan")), "mirror sanitization missing")
    html = records[MIRROR_PREFIX + "Portfolio_Decision_System_Public.html"]
    xlsx = records[MIRROR_PREFIX + "PDS_Portfolio_History_Current_Definition.xlsx"]
    require(receipt.get("html_sha256") == digest(html), "mirror HTML hash mismatch")
    require(receipt.get("portfolio_history_xlsx_sha256") == digest(xlsx), "mirror XLSX hash mismatch")
    require(b"window.PDS_PUBLIC_SURFACE=true" in html and b"window.PDL_DATA=" in html, "canonical dashboard markers missing")
    for marker in (b"_LOCAL_PRIVATE_DATA", b"_LOCAL_RUNTIME", b"_LOCAL_CACHE"):
        require(marker.lower() not in html.lower(), "private filesystem marker in public HTML")
    official = str(receipt.get("official_signal_period") or "")
    holding = holding_after(official)
    mark = real_day(str(receipt.get("official_mark_through") or ""))
    rel = str(disclosure.get("latest_released_signal_period") or "")
    elig = str(disclosure.get("latest_eligible_signal_period") or "")
    completed = str(disclosure.get("completed_holding_month_cutoff") or "")
    require(bool(YM.fullmatch(rel)) and bool(YM.fullmatch(elig)) and rel <= elig,
            "invalid compatibility signal period")
    require(bool(YM.fullmatch(completed)), "invalid compatibility completed holding clock")
    indexed = export.get("files_sha256")
    require(isinstance(indexed, dict) and set(indexed) ==
            (public_expected(ROOT) - {"public_export_manifest.json"}), "source manifest inventory mismatch")
    for name, checksum in indexed.items():
        require(isinstance(checksum, str) and bool(SHA.fullmatch(checksum)) and
                digest(records[EXPORT_PREFIX + name]) == checksum, f"source manifest checksum mismatch: {name}")
    return {"official_signal": official, "holding_month": holding, "mark_through": mark,
            "compatibility_released": rel, "compatibility_eligible": elig,
            "compatibility_completed": completed,
            "source_program_version": str(export.get("source_program_version") or ""),
            "source_rs03_version": str(export.get("source_rs03_version") or "")}


def verify_archive(path: Path, app: Path) -> tuple[dict[str, bytes], dict]:
    require(path.is_file() and not path.is_symlink(), "intake archive missing or symlink")
    require(path.stat().st_size <= MAX_TOTAL, "intake archive too large")
    expected = expected_paths(app)
    with zipfile.ZipFile(path) as z:
        infos = z.infolist()
        names = [x.filename for x in infos]
        require(len(infos) == MAX_MEMBERS and len(names) == len(set(names)), "duplicate or unexpected archive member count")
        require(set(names) == expected | {META}, "PDS archive file-set mismatch")
        # Bound declared uncompressed sizes BEFORE inflating any archive member.
        # ZipFile.read verifies each member's CRC independently.
        total = 0
        records = {}
        for info in infos:
            name = info.filename
            require(not name.startswith("/") and "\\" not in name and
                    all(x not in ("", ".", "..") for x in name.split("/")), "unsafe archive member path")
            mode = (info.external_attr >> 16) & 0o170000
            require(mode in (0, 0o100000) and not info.is_dir(), "linked or non-regular ZIP member")
            require(0 < info.file_size <= MAX_MEMBER, "invalid archive member size")
            total += info.file_size
            require(total <= MAX_TOTAL, "archive uncompressed size exceeds bound")
            records[name] = z.read(info)
    manifest = json_obj(records.pop(META), "transport manifest")
    require(manifest.get("contract") == CONTRACT, "wrong intake contract")
    require(manifest.get("release_authorized") is False and
            manifest.get("public_deployment_authorized") is False, "transport asserts release authority")
    require(manifest.get("stage") == "INTAKE_REVIEW_ONLY", "transport not in review-only stage")
    require(manifest.get("publication_pipeline") == "PENDING_SLACKQUANT_HOSTED_INTAKE",
            "transport publication pipeline unexpectedly authorized")
    require(manifest.get("derived_platform_bindings") == "NOT_INCLUDED_REBUILD_AND_VALIDATE_IN_DEPLOYMENT_REPO",
            "derived binding claim mismatch")
    require(manifest.get("adaa_f2r_live_evidence") == "NOT_INCLUDED_REVIEW_REQUIRED", "provider evidence claim mismatch")
    require(manifest.get("live_site_verified") is False, "unverified live-site claim")
    index = manifest.get("files")
    require(isinstance(index, dict) and set(index) == expected, "transport indexed inventory mismatch")
    for name in expected:
        field = index[name]
        require(isinstance(field, dict) and isinstance(field.get("sha256"), str) and
                bool(SHA.fullmatch(field["sha256"])) and
                field["sha256"] == digest(records[name]) and
                field.get("bytes") == len(records[name]), "intake tampering/size mismatch: " + name)
    clock = receipt_clock(records)
    supplied = manifest.get("clock")
    require(isinstance(supplied, dict), "transport clock absent")
    for key, source in {
        "canonical_official_signal": "official_signal",
        "canonical_holding_month": "holding_month",
        "canonical_mark_through": "mark_through",
        "compatibility_released_signal": "compatibility_released",
        "compatibility_eligible_signal": "compatibility_eligible",
        "compatibility_completed_through": "compatibility_completed",
        "source_program_version": "source_program_version",
        "source_rs03_version": "source_rs03_version",
    }.items():
        require(supplied.get(key) == clock[source], "transport clock mismatch: " + key)
    require(supplied.get("source_export_manifest_sha256") ==
            digest(records[EXPORT_PREFIX + "public_export_manifest.json"]), "transport/source manifest lineage mismatch")
    require(supplied.get("canonical_mirror_receipt_sha256") ==
            digest(records[MIRROR_PREFIX + "PDS_PUBLIC_DASHBOARD_RECEIPT.json"]), "transport/mirror receipt lineage mismatch")
    return records, clock


def nonregression(app: Path, records: dict[str, bytes], clock: dict) -> None:
    old = app / MIRROR_PREFIX / "PDS_PUBLIC_DASHBOARD_RECEIPT.json"
    if old.is_file():
        prior = json_obj(old.read_bytes(), "current deployed mirror receipt")
        last_signal = str(prior.get("official_signal_period") or "")
        last_mark = real_day(str(prior.get("official_mark_through") or ""))
        require(clock["official_signal"] >= last_signal and clock["mark_through"] >= last_mark,
                "canonical Official/market clock would regress")
        if clock["official_signal"] == last_signal and clock["mark_through"] == last_mark:
            require(digest(records[MIRROR_PREFIX + "Portfolio_Decision_System_Public.html"]) ==
                    str(prior.get("html_sha256") or ""), "same-clock canonical HTML drift requires explicit review")
    previous = app / EXPORT_PREFIX / "public_disclosure_state.json"
    if previous.is_file():
        prior = json_obj(previous.read_bytes(), "deployed disclosure")
        old_released = str(prior.get("latest_released_signal_period") or "")
        require(clock["compatibility_released"] >= old_released, "compatibility released clock would regress")


def apply_to_review_workspace(records: dict[str, bytes], app: Path) -> None:
    export_path = app / EXPORT_PREFIX
    mirror_path = app / MIRROR_PREFIX
    for name in sorted(MIRROR):
        target = mirror_path / name
        require(target.parent.is_dir(), "PDS target mirror directory missing")
        target.write_bytes(records[MIRROR_PREFIX + name])
    with tempfile.TemporaryDirectory(prefix="pds_review_export_") as tmp:
        source = Path(tmp)
        for name in public_expected(app):
            (source / name).write_bytes(records[EXPORT_PREFIX + name])
        subprocess.run([sys.executable, str(app / "scripts/bind-pds-public-export.py"),
                        "--export-root", str(source), "--app-root", str(app)], check=True)
    summary = app / "src/data/pdsCanonicalSummary.ts"
    subprocess.run([sys.executable, str(app / "scripts/bind-pds-canonical-summary.py"),
                    "--html", str(mirror_path / "Portfolio_Decision_System_Public.html"),
                    "--output", str(summary)], check=True)
    route = app / "src/app/systems/pds/dashboard/page.tsx"
    route_text = route.read_text(encoding="utf-8")
    hash16 = digest(records[MIRROR_PREFIX + "Portfolio_Decision_System_Public.html"])[:16]
    updated, n = re.subn(r'const dashboardVersion = "[a-f0-9]{16}";',
                         f'const dashboardVersion = "{hash16}";', route_text)
    require(n == 1, "iframe cache-key declaration changed")
    route.write_text(updated, encoding="utf-8", newline="\n")
    subprocess.run([sys.executable, str(app / "scripts/validate-pds-publication.py")], cwd=app, check=True)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bundle", type=Path, required=True)
    parser.add_argument("--app-root", type=Path, default=ROOT)
    parser.add_argument("--apply-reviewed", action="store_true",
                        help="modify only an isolated review workspace; does not deploy or authorize")
    args = parser.parse_args()
    try:
        app = args.app_root.resolve()
        require((app / "scripts/validate-pds-publication.py").is_file(), "invalid platform workspace")
        records, clock = verify_archive(args.bundle, app)
        nonregression(app, records, clock)
        with tempfile.TemporaryDirectory(prefix="pds_receiver_scan_") as tmp:
            source = Path(tmp)
            for name in public_expected(app):
                (source / name).write_bytes(records[EXPORT_PREFIX + name])
            spec = importlib.util.spec_from_file_location("pds_source_scanner", app / "scripts/bind-pds-public-export.py")
            mod = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(mod)
            mod.scan_source(source)
        print("PDS_HOSTED_RECEIVER_CONTRACT_PASS", json.dumps(clock, sort_keys=True))
        if args.apply_reviewed:
            apply_to_review_workspace(records, app)
            print("PDS_HOSTED_REVIEW_WORKSPACE_BOUND_PASS; NO_PUBLIC_RELEASE_AUTHORITY")
        else:
            print("READ_ONLY_RECEIVER_PASS; NO_WRITE_NO_DEPLOY_NO_GIT")
        return 0
    except (OSError, ValueError, RuntimeError, zipfile.BadZipFile, subprocess.CalledProcessError) as exc:
        print("PDS_HOSTED_RECEIVER_HOLD:", type(exc).__name__, str(exc), file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
