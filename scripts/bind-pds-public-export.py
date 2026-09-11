#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
import re
import shutil
from datetime import datetime
from pathlib import Path

EXPECTED = {
    "public_active_core_asset_targets.csv",
    "public_core_monthly_returns.csv",
    "public_core_strategy_roster.csv",
    "public_system_identity.json",
    "public_disclosure_state.json",
    "public_export_manifest.json",
    "public_core_performance_path.csv",
    "public_core_performance_summary.csv",
    "public_core_calendar_returns.csv",
    "public_fx_performance_path.csv",
    "public_fx_performance_summary.csv",
    "public_fx_hedge_history.csv",
    "public_fx_calendar_returns.csv",
}
PROHIBITED = [
    re.compile(r"(?i)\bMFA\b"),
    re.compile(r"(?i)macro\s+forecast\s+allocation"),
    re.compile(r"(?i)_LOCAL_PRIVATE_DATA"),
    re.compile(r"(?i)\b[A-Z]:\\"),
    re.compile(r"(?i)F2R\s*25%"),
    re.compile(r"(?i)ADAA\s*75%"),
    re.compile(r"(?i)25/75"),
    re.compile(r"FIXED_25_75"),
    re.compile(r"(?i)f2r_weight"),
    re.compile(r"(?i)adaa_weight"),
]


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def fnum(value: str | None, *, optional: bool = False):
    if value is None or str(value).strip() == "":
        if optional:
            return None
        raise RuntimeError("required numeric public field is blank")
    try:
        v = float(value)
    except Exception as exc:
        raise RuntimeError(f"numeric public field is invalid: {value!r}") from exc
    if not math.isfinite(v):
        if optional:
            return None
        raise RuntimeError(f"numeric public field is non-finite: {value!r}")
    return v


def inum(value: str | None) -> int:
    try:
        return int(str(value))
    except Exception as exc:
        raise RuntimeError(f"integer public field is invalid: {value!r}") from exc


def scan_source(root: Path) -> None:
    missing = sorted(name for name in EXPECTED if not (root / name).is_file())
    if missing:
        raise RuntimeError("missing governed public-export file(s): " + ", ".join(missing))
    for name in sorted(EXPECTED):
        text = (root / name).read_text(encoding="utf-8", errors="replace")
        for pat in PROHIBITED:
            if pat.search(text):
                raise RuntimeError(f"public-export leakage/naming blocker in {name}: {pat.pattern}")


def copy_governed_files(export_root: Path, data_root: Path) -> dict[str, str]:
    data_root.mkdir(parents=True, exist_ok=True)
    # Do not delete the directory: separately governed platform receipts are preserved.
    # Explicitly retire the former provider-weight artifact so stale public data cannot
    # survive a new recipe-protected binding.
    retired = data_root / "public_active_core_strategy_weights.csv"
    if retired.exists():
        retired.unlink()
    for name in sorted(EXPECTED):
        shutil.copy2(export_root / name, data_root / name)
    return {name: sha256(data_root / name) for name in sorted(EXPECTED)}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--export-root", required=True, type=Path)
    ap.add_argument("--app-root", required=True, type=Path)
    args = ap.parse_args()

    export_root = args.export_root.resolve()
    app_root = args.app_root.resolve()
    data_root = app_root / "public" / "data" / "systems" / "pds"
    snapshot_ts = app_root / "src" / "data" / "pdsPublicSnapshot.ts"

    print(f"PDS binder export root : {export_root}")
    print(f"PDS binder app root    : {app_root}")
    scan_source(export_root)
    if not snapshot_ts.is_file():
        raise RuntimeError(f"PDS snapshot binding point missing: {snapshot_ts}")

    manifest = json.loads((export_root / "public_export_manifest.json").read_text(encoding="utf-8"))
    disclosure = json.loads((export_root / "public_disclosure_state.json").read_text(encoding="utf-8"))
    identity = json.loads((export_root / "public_system_identity.json").read_text(encoding="utf-8"))

    if not str(manifest.get("status", "")).startswith("PASS_PUBLIC_SAFE_EXPORT"):
        raise RuntimeError(f"PDS exporter status is not PASS: {manifest.get('status')}")
    if manifest.get("no_private_leakage_scan") != "PASS":
        raise RuntimeError("PDS exporter leakage scan is not PASS")
    if manifest.get("recipe_protection_scan") != "PASS":
        raise RuntimeError("PDS exporter recipe-protection scan is not PASS")
    if manifest.get("public_naming_lock") != "F2R_PUBLIC_NAMING_LOCK_V1_PASS":
        raise RuntimeError("F2R public naming lock missing from PDS export")
    if manifest.get("active_core_policy") != "GOVERNED_STRATEGIC_ALLOCATION__RECIPE_PROTECTED":
        raise RuntimeError(f"unexpected public Core disclosure policy: {manifest.get('active_core_policy')}")
    if disclosure.get("current_decision_state") != "WITHHELD_BY_POLICY":
        raise RuntimeError("current PDS decision is not withheld by public disclosure policy")
    if disclosure.get("public_component_identity") != "ADAA + F2R":
        raise RuntimeError("unexpected public Active Core identity")
    if disclosure.get("core_performance_definition") != "CURRENT_GOVERNED_CORE__DAILY_RISK_METRICS__PROVIDER_COMPOSITION_PRIVATE":
        raise RuntimeError("public Core performance definition does not preserve recipe protection")
    active_core = identity.get("active_core") or {}
    if active_core.get("compact_label") not in {"ADAA + F2R", "F2R + ADAA"}:
        raise RuntimeError("PDS public identity does not bind F2R + ADAA")
    if active_core.get("composition_disclosure") != "RECIPE_PROTECTED":
        raise RuntimeError("PDS public identity does not protect provider composition")

    asset_rows = read_csv(export_root / "public_active_core_asset_targets.csv")
    return_rows = read_csv(export_root / "public_core_monthly_returns.csv")
    core_performance_rows = read_csv(export_root / "public_core_performance_path.csv")
    core_summary_rows = read_csv(export_root / "public_core_performance_summary.csv")
    core_calendar_rows = read_csv(export_root / "public_core_calendar_returns.csv")
    fx_performance_rows = read_csv(export_root / "public_fx_performance_path.csv")
    fx_summary_rows = read_csv(export_root / "public_fx_performance_summary.csv")
    fx_hedge_rows = read_csv(export_root / "public_fx_hedge_history.csv")
    fx_calendar_rows = read_csv(export_root / "public_fx_calendar_returns.csv")

    latest_signal = str(disclosure.get("latest_released_signal_period", ""))

    latest_assets = [r for r in asset_rows if r.get("signal_period") == latest_signal]
    if not latest_assets:
        raise RuntimeError(f"no public asset targets for latest released signal {latest_signal}")
    asset_snapshot = sorted(
        [
            {
                "signalPeriod": r["signal_period"],
                "holdingMonth": r["holding_month"],
                "ticker": r["asset_id"],
                "targetWeight": fnum(r["aggregate_weight"]),
            }
            for r in latest_assets
        ],
        key=lambda x: (-x["targetWeight"], x["ticker"]),
    )
    if abs(sum(x["targetWeight"] for x in asset_snapshot) - 1.0) > 1e-8:
        raise RuntimeError("latest public asset targets do not sum to one")

    allowed_series = {"PDS_ACTIVE_CORE", "ADAA", "F2R"}
    filtered_returns = [r for r in return_rows if r.get("series_id") in allowed_series]
    periods = sorted({r.get("period", "") for r in filtered_returns if r.get("period")})[-12:]
    recent = [r for r in filtered_returns if r.get("period") in periods]
    recent.sort(key=lambda r: (r.get("period", ""), r.get("series_id", "")), reverse=True)
    return_snapshot = [
        {
            "period": r["period"], "seriesId": r["series_id"],
            "displayName": "PDS Active Core" if r["series_id"] == "PDS_ACTIVE_CORE" else r["display_name"],
            "netReturn": fnum(r["net_return"]), "seriesRole": r.get("series_role", ""),
        }
        for r in recent
    ]

    core_performance_snapshot = [
        {"signalPeriod": r["signal_period"], "holdingMonth": r["holding_month"], "seriesId": r["series_id"],
         "displayName": r["display_name"], "netReturn": fnum(r["net_return"]),
         "cumulativeWealth": fnum(r["cumulative_wealth"]), "drawdown": fnum(r["drawdown"]),
         "seriesRole": r.get("series_role", "")}
        for r in core_performance_rows
    ]
    core_summary_snapshot = [
        {"seriesId": r["series_id"], "displayName": r["display_name"], "months": inum(r["months"]),
         "startHoldingMonth": r["start_holding_month"], "endHoldingMonth": r["end_holding_month"],
         "cagr": fnum(r.get("cagr"), optional=True), "annVol": fnum(r.get("ann_vol"), optional=True),
         "sharpeRf0": fnum(r.get("sharpe_rf0"), optional=True), "maxDrawdown": fnum(r.get("max_drawdown"), optional=True),
         "calmar": fnum(r.get("calmar"), optional=True), "cumulativeReturn": fnum(r.get("cumulative_return"), optional=True),
         "terminalWealth": fnum(r.get("terminal_wealth"), optional=True), "seriesRole": r.get("series_role", "")}
        for r in core_summary_rows
    ]
    core_calendar_snapshot = [
        {"year": r["year"], "seriesId": r["series_id"], "displayName": r["display_name"],
         "annualReturn": fnum(r["annual_return"]), "monthsObserved": inum(r["months_observed"]),
         "seriesRole": r.get("series_role", "")}
        for r in core_calendar_rows
    ]
    fx_performance_snapshot = [
        {"signalPeriod": r["signal_period"], "holdingMonth": r["holding_month"], "seriesId": r["series_id"],
         "displayName": r["display_name"], "netReturn": fnum(r["net_return"]),
         "cumulativeWealth": fnum(r["cumulative_wealth"]), "drawdown": fnum(r["drawdown"]),
         "layerStatus": r.get("layer_status", "")}
        for r in fx_performance_rows
    ]
    fx_summary_snapshot = [
        {"seriesId": r["series_id"], "displayName": r["display_name"], "months": inum(r["months"]),
         "startHoldingMonth": r["start_holding_month"], "endHoldingMonth": r["end_holding_month"],
         "cagr": fnum(r.get("cagr"), optional=True), "annVol": fnum(r.get("ann_vol"), optional=True),
         "sharpeRf0": fnum(r.get("sharpe_rf0"), optional=True), "maxDrawdown": fnum(r.get("max_drawdown"), optional=True),
         "calmar": fnum(r.get("calmar"), optional=True), "cumulativeReturn": fnum(r.get("cumulative_return"), optional=True),
         "terminalWealth": fnum(r.get("terminal_wealth"), optional=True), "layerStatus": r.get("layer_status", "")}
        for r in fx_summary_rows
    ]
    fx_hedge_snapshot = [
        {"signalPeriod": r["signal_period"], "holdingMonth": r["holding_month"],
         "dynamicHedgeRatio": fnum(r["dynamic_hedge_ratio"]),
         "zscoreSignal": fnum(r.get("zscore_signal"), optional=True),
         "layerStatus": r.get("layer_status", "")}
        for r in fx_hedge_rows
    ]
    fx_calendar_snapshot = [
        {"year": r["year"], "seriesId": r["series_id"], "displayName": r["display_name"],
         "annualReturn": fnum(r["annual_return"]), "monthsObserved": inum(r["months_observed"]),
         "layerStatus": r.get("layer_status", "")}
        for r in fx_calendar_rows
    ]

    snapshot = {
        "exportStatus": "BOUND_PUBLIC_SAFE_EXPORT",
        "publicAsOfDate": str(disclosure.get("public_as_of_date", "")),
        "completedHoldingMonthCutoff": str(disclosure.get("completed_holding_month_cutoff", "")),
        "latestEligibleSignalPeriod": str(disclosure.get("latest_eligible_signal_period", "")),
        "latestReleasedSignalPeriod": latest_signal,
        "sourceProgramVersion": str(manifest.get("source_program_version", "")),
        "sourceRs03Version": str(manifest.get("source_rs03_version", "")),
        "publicComponentIdentity": "ADAA + F2R",
        "latestAssetTargets": asset_snapshot,
        "recentMonthlyReturns": return_snapshot,
        "corePerformance": core_performance_snapshot,
        "corePerformanceSummary": core_summary_snapshot,
        "coreCalendarReturns": core_calendar_snapshot,
        "fxPerformance": fx_performance_snapshot,
        "fxPerformanceSummary": fx_summary_snapshot,
        "fxHedgeHistory": fx_hedge_snapshot,
        "fxCalendarReturns": fx_calendar_snapshot,
        "rawDataBaseHref": "/data/systems/pds",
    }

    bound_hashes = copy_governed_files(export_root, data_root)
    receipt = {
        "status": "PDS_SLACKQUANT_PUBLIC_BINDING_PASS",
        "bound_at": datetime.now().astimezone().isoformat(),
        "source_export_manifest_sha256": sha256(export_root / "public_export_manifest.json"),
        "public_as_of_date": snapshot["publicAsOfDate"],
        "latest_released_signal_period": latest_signal,
        "completed_holding_month_cutoff": snapshot["completedHoldingMonthCutoff"],
        "active_core_public_identity": "ADAA + F2R",
        "active_core_policy": "GOVERNED_STRATEGIC_ALLOCATION__RECIPE_PROTECTED",
        "bound_files_sha256": bound_hashes,
        "authority": "PUBLIC_RESEARCH_NO_PORTFOLIO_AUTHORITY",
    }
    (data_root / "PDS_PUBLIC_BINDING_RECEIPT.json").write_text(
        json.dumps(receipt, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8"
    )

    source = snapshot_ts.read_text(encoding="utf-8")
    replacement = (
        "// PDS_PUBLIC_BINDING_START\n"
        "export const pdsPublicSnapshot: PdsPublicSnapshot | null = "
        + json.dumps(snapshot, ensure_ascii=False, indent=2, allow_nan=False)
        + " as PdsPublicSnapshot;\n"
        "// PDS_PUBLIC_BINDING_END"
    )
    updated, count = re.subn(
        r"// PDS_PUBLIC_BINDING_START.*?// PDS_PUBLIC_BINDING_END",
        replacement, source, flags=re.S,
    )
    if count != 1:
        raise RuntimeError(f"PDS snapshot binding markers missing or duplicated: count={count}")
    snapshot_ts.write_text(updated, encoding="utf-8")

    print("PDS SLACKQUANT PUBLIC BINDING: PASS · RECIPE-PROTECTED V3")
    print(json.dumps({
        "status": receipt["status"],
        "released_signal": latest_signal,
        "holding_through": snapshot["completedHoldingMonthCutoff"],
        "core_policy": receipt["active_core_policy"],
        "files": len(bound_hashes),
    }, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"PDS PUBLIC BINDER FAIL: {type(exc).__name__}: {exc}", flush=True)
        raise
