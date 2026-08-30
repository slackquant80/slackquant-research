#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import shutil
from datetime import datetime
from pathlib import Path

EXPECTED = {
    "public_active_core_asset_targets.csv",
    "public_active_core_strategy_weights.csv",
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


def as_float(value: str) -> float:
    try:
        return float(value)
    except Exception as exc:
        raise RuntimeError(f"numeric public field is invalid: {value!r}") from exc


def as_optional_float(value: str):
    if value is None or str(value).strip() == "":
        return None
    return as_float(value)


def as_int(value: str) -> int:
    try:
        return int(value)
    except Exception as exc:
        raise RuntimeError(f"integer public field is invalid: {value!r}") from exc


def scan_source(root: Path) -> None:
    for name in EXPECTED:
        p = root / name
        if not p.is_file():
            raise RuntimeError(f"missing governed public-export file: {name}")
        text = p.read_text(encoding="utf-8", errors="replace")
        for pat in PROHIBITED:
            if pat.search(text):
                raise RuntimeError(f"public-export leakage/naming blocker in {name}: {pat.pattern}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--export-root", required=True, type=Path)
    ap.add_argument("--app-root", required=True, type=Path)
    args = ap.parse_args()

    export_root = args.export_root.resolve()
    app_root = args.app_root.resolve()
    data_root = app_root / "public" / "data" / "systems" / "pds"
    snapshot_ts = app_root / "src" / "data" / "pdsPublicSnapshot.ts"

    scan_source(export_root)

    manifest = json.loads((export_root / "public_export_manifest.json").read_text(encoding="utf-8"))
    disclosure = json.loads((export_root / "public_disclosure_state.json").read_text(encoding="utf-8"))
    identity = json.loads((export_root / "public_system_identity.json").read_text(encoding="utf-8"))

    if not str(manifest.get("status", "")).startswith("PASS_PUBLIC_SAFE_EXPORT"):
        raise RuntimeError(f"PDS exporter status is not PASS: {manifest.get('status')}")
    if manifest.get("no_private_leakage_scan") != "PASS":
        raise RuntimeError("PDS exporter leakage scan is not PASS")
    if manifest.get("public_naming_lock") != "F2R_PUBLIC_NAMING_LOCK_V1_PASS":
        raise RuntimeError("F2R public naming lock missing from PDS export")
    if disclosure.get("current_decision_state") != "WITHHELD_BY_POLICY":
        raise RuntimeError("current PDS decision is not withheld by public disclosure policy")
    if disclosure.get("public_component_identity") != "ADAA + F2R":
        raise RuntimeError("unexpected public Active Core identity")
    if ((identity.get("active_core") or {}).get("compact_label")) != "ADAA + F2R":
        raise RuntimeError("PDS public identity does not bind ADAA + F2R")

    strategy_rows = read_csv(export_root / "public_active_core_strategy_weights.csv")
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
    latest_strategy_candidates = [r for r in strategy_rows if r.get("signal_period") == latest_signal]
    if len(latest_strategy_candidates) != 1:
        raise RuntimeError(f"expected one latest public strategy-weight row for {latest_signal}; found {len(latest_strategy_candidates)}")
    sw = latest_strategy_candidates[0]
    latest_strategy = {
        "signalPeriod": sw["signal_period"],
        "holdingMonth": sw["holding_month"],
        "f2rWeight": as_float(sw["f2r_weight"]),
        "adaaWeight": as_float(sw["adaa_weight"]),
        "weightBasis": sw.get("weight_basis", ""),
    }

    latest_assets = [r for r in asset_rows if r.get("signal_period") == latest_signal]
    if not latest_assets:
        raise RuntimeError(f"no public asset targets for latest released signal {latest_signal}")
    asset_snapshot = sorted(
        [
            {
                "signalPeriod": r["signal_period"],
                "holdingMonth": r["holding_month"],
                "ticker": r["asset_id"],
                "targetWeight": as_float(r["aggregate_weight"]),
            }
            for r in latest_assets
        ],
        key=lambda x: (-x["targetWeight"], x["ticker"]),
    )

    allowed_series = {"PDS_ACTIVE_CORE", "ADAA", "F2R"}
    filtered_returns = [r for r in return_rows if r.get("series_id") in allowed_series]
    periods = sorted({r.get("period", "") for r in filtered_returns if r.get("period")})[-6:]
    recent = [r for r in filtered_returns if r.get("period") in periods]
    recent.sort(key=lambda r: (r.get("period", ""), r.get("series_id", "")), reverse=True)
    return_snapshot = [
        {
            "period": r["period"],
            "seriesId": r["series_id"],
            "displayName": "PDS Active Core" if r["series_id"] == "PDS_ACTIVE_CORE" else r["display_name"],
            "netReturn": as_float(r["net_return"]),
            "seriesRole": r.get("series_role", ""),
        }
        for r in recent
    ]

    core_performance_snapshot = [
        {"signalPeriod": r["signal_period"], "holdingMonth": r["holding_month"], "seriesId": r["series_id"],
         "displayName": r["display_name"], "netReturn": as_float(r["net_return"]),
         "cumulativeWealth": as_float(r["cumulative_wealth"]), "drawdown": as_float(r["drawdown"]),
         "seriesRole": r.get("series_role", "")}
        for r in core_performance_rows
    ]
    core_summary_snapshot = [
        {"seriesId": r["series_id"], "displayName": r["display_name"], "months": as_int(r["months"]),
         "startHoldingMonth": r["start_holding_month"], "endHoldingMonth": r["end_holding_month"],
         "cagr": as_optional_float(r["cagr"]), "annVol": as_optional_float(r["ann_vol"]),
         "sharpeRf0": as_optional_float(r["sharpe_rf0"]), "maxDrawdown": as_optional_float(r["max_drawdown"]),
         "calmar": as_optional_float(r["calmar"]), "cumulativeReturn": as_optional_float(r["cumulative_return"]),
         "terminalWealth": as_optional_float(r["terminal_wealth"]), "seriesRole": r.get("series_role", "")}
        for r in core_summary_rows
    ]
    core_calendar_snapshot = [
        {"year": r["year"], "seriesId": r["series_id"], "displayName": r["display_name"],
         "annualReturn": as_float(r["annual_return"]), "monthsObserved": as_int(r["months_observed"]),
         "seriesRole": r.get("series_role", "")}
        for r in core_calendar_rows
    ]
    fx_performance_snapshot = [
        {"signalPeriod": r["signal_period"], "holdingMonth": r["holding_month"], "seriesId": r["series_id"],
         "displayName": r["display_name"], "netReturn": as_float(r["net_return"]),
         "cumulativeWealth": as_float(r["cumulative_wealth"]), "drawdown": as_float(r["drawdown"]),
         "layerStatus": r.get("layer_status", "")}
        for r in fx_performance_rows
    ]
    fx_summary_snapshot = [
        {"seriesId": r["series_id"], "displayName": r["display_name"], "months": as_int(r["months"]),
         "startHoldingMonth": r["start_holding_month"], "endHoldingMonth": r["end_holding_month"],
         "cagr": as_optional_float(r["cagr"]), "annVol": as_optional_float(r["ann_vol"]),
         "sharpeRf0": as_optional_float(r["sharpe_rf0"]), "maxDrawdown": as_optional_float(r["max_drawdown"]),
         "calmar": as_optional_float(r["calmar"]), "cumulativeReturn": as_optional_float(r["cumulative_return"]),
         "terminalWealth": as_optional_float(r["terminal_wealth"]), "layerStatus": r.get("layer_status", "")}
        for r in fx_summary_rows
    ]
    fx_hedge_snapshot = [
        {"signalPeriod": r["signal_period"], "holdingMonth": r["holding_month"],
         "dynamicHedgeRatio": as_float(r["dynamic_hedge_ratio"]),
         "zscoreSignal": as_optional_float(r.get("zscore_signal", "")),
         "layerStatus": r.get("layer_status", "")}
        for r in fx_hedge_rows
    ]

    fx_calendar_snapshot = [
        {
            "year": r["year"], "seriesId": r["series_id"], "displayName": r["display_name"],
            "annualReturn": as_float(r["annual_return"]), "monthsObserved": as_int(r["months_observed"]),
            "layerStatus": r.get("layer_status", ""),
        }
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
        "latestStrategyWeights": latest_strategy,
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

    if data_root.exists():
        shutil.rmtree(data_root)
    data_root.mkdir(parents=True, exist_ok=True)
    for name in sorted(EXPECTED):
        shutil.copy2(export_root / name, data_root / name)

    receipt = {
        "status": "PDS_SLACKQUANT_PUBLIC_BINDING_PASS",
        "bound_at": datetime.now().astimezone().isoformat(),
        "source_export_manifest_sha256": sha256(export_root / "public_export_manifest.json"),
        "public_as_of_date": snapshot["publicAsOfDate"],
        "latest_released_signal_period": latest_signal,
        "completed_holding_month_cutoff": snapshot["completedHoldingMonthCutoff"],
        "active_core_public_identity": "ADAA + F2R",
        "bound_files_sha256": {name: sha256(data_root / name) for name in sorted(EXPECTED)},
        "authority": "PUBLIC_RESEARCH_NO_PORTFOLIO_AUTHORITY",
    }
    (data_root / "PDS_PUBLIC_BINDING_RECEIPT.json").write_text(
        json.dumps(receipt, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8"
    )

    source = snapshot_ts.read_text(encoding="utf-8")
    replacement = (
        "// PDS_PUBLIC_BINDING_START\n"
        "export const pdsPublicSnapshot: PdsPublicSnapshot | null = "
        + json.dumps(snapshot, ensure_ascii=False, indent=2)
        + " as PdsPublicSnapshot;\n"
        "// PDS_PUBLIC_BINDING_END"
    )
    updated, count = re.subn(
        r"// PDS_PUBLIC_BINDING_START.*?// PDS_PUBLIC_BINDING_END",
        replacement,
        source,
        flags=re.S,
    )
    if count != 1:
        raise RuntimeError("PDS snapshot binding markers missing or duplicated")
    snapshot_ts.write_text(updated, encoding="utf-8")

    print("PDS SLACKQUANT PUBLIC BINDING: PASS")
    print(json.dumps(receipt, ensure_ascii=False, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
