#!/usr/bin/env python3
"""Platform-owned importer for system-owned public-safe completed-performance evidence.

This script reads already-governed ADAA/F2R public artifacts and writes only dedicated
SlackQuant data files. It never edits page.tsx, shared registry/navigation, CSS, or
system methodology wording.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import csv
import math
import statistics
from collections import OrderedDict
from datetime import datetime
from zoneinfo import ZoneInfo

SCHEMA = "SLACKQUANT_LIVE_EVIDENCE_V1"

# Canonical provider projects are nested under 01_Post_IJF_Research.
# Root-level lookalikes are noncanonical deployment residue and must never be
# used as live-evidence authority. This mirrors the PDS provider registry and
# ADAA/F2R source-location contracts.
CANONICAL_PROVIDER_PROJECTS = {
    "ADAA": Path("01_Post_IJF_Research") / "05_ADAA",
    "F2R": Path("01_Post_IJF_Research") / "12_MACRO_FORECAST_ALLOCATION",
}


def provider_project_root(research_root: Path, system: str) -> Path:
    try:
        rel = CANONICAL_PROVIDER_PROJECTS[system]
    except KeyError as exc:
        raise RuntimeError(f"Unknown provider system: {system}") from exc
    root = research_root / rel
    if not root.is_dir():
        raise FileNotFoundError(
            f"{system} canonical provider project missing: {root}. "
            "Expected provider authority under 01_Post_IJF_Research; "
            "root-level compatibility/shadow copies are not accepted."
        )
    return root


def read_csv(path: Path):
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def fnum(value):
    if value is None or str(value).strip() == "":
        return None
    return float(value)


def compound(rows, key):
    wealth = 1.0
    for row in rows:
        wealth *= 1.0 + float(row[key])
    return wealth - 1.0


def build_adaa(research_root: Path):
    base = provider_project_root(research_root, "ADAA") / "09_RUNTIME" / "LIVE_DASHBOARD" / "PUBLIC_VIEW_SNAPSHOT" / "performance"
    path_rows = read_csv(base / "performance_path.csv")
    summary_rows = read_csv(base / "performance_summary.csv")
    if not path_rows or not summary_rows:
        raise RuntimeError("ADAA public-view performance artifacts are empty")

    by_month = OrderedDict()
    for row in path_rows:
        month = row["Date"][:7]
        by_month[month] = row
    path = [
        {"date": row["Date"], "primary": float(row["ADAA_DH_Wealth"]), "benchmark": float(row["60/40_Wealth"])}
        for row in by_month.values()
    ]

    daily_by_month: OrderedDict[str, list[dict[str, str]]] = OrderedDict()
    for row in path_rows:
        daily_by_month.setdefault(row["Date"][:7], []).append(row)
    recent = [
        {
            "month": month,
            "primary": compound(rows, "ADAA_DH"),
            "benchmark": compound(rows, "60/40"),
        }
        for month, rows in list(daily_by_month.items())[-12:]
    ]

    metric_map = {row["Metric"]: row for row in summary_rows}
    def metrics(col):
        return {
            "cumulativeReturn": float(metric_map["Total Return (%)"][col]) / 100.0,
            "cagr": float(metric_map["CAGR (%)"][col]) / 100.0,
            "annVol": float(metric_map["Annualized Volatility (%)"][col]) / 100.0,
            "sharpe": float(metric_map["Sharpe Ratio (Rf=0)"][col]),
            "mdd": float(metric_map["Maximum Drawdown (%)"][col]) / 100.0,
            "calmar": float(metric_map["Calmar Ratio"][col]),
        }

    return {
        "schema": SCHEMA,
        "system": "ADAA",
        "sourceAuthority": "ADAA PUBLIC_VIEW_SNAPSHOT",
        "completedThrough": path_rows[-1]["Date"],
        "supportStart": path_rows[0]["Date"],
        "supportEnd": path_rows[-1]["Date"],
        "primaryLabel": "ADAA Dynamic",
        "benchmarkLabel": "60/40 SPY/IEF",
        "path": path,
        "recentMonthly": recent,
        "metrics": {"primary": metrics("ADAA Dynamic"), "benchmark": metrics("60/40 SPY/IEF")},
        "boundary": "Completed historical performance from the current ADAA public-view snapshot. Current MTD and Preview are excluded.",
    }


F2R_OPERATOR_STATE_REL = Path("10_PUBLIC_SYSTEM") / "operator_dashboard" / "local_data" / "f2r_operator_state.json"
F2R_CURRENT_ARCHITECTURE_ID = "C3_REX_SCORE_CHRONOS20"
F2R_COST_POLICY_ID = "SLACKQUANT_LIVE_BILATERAL_10BP_PER_SIDE_V1"
F2R_EXECUTION_BOUNDARY = "FIRST_NEXT_COMMON_TRADING_DAY_CLOSE"
KST = ZoneInfo("Asia/Seoul")


def _f2r_current_model_performance(data: dict) -> dict:
    ident = data.get("performance_identity") or {}
    perf = data.get("completed_performance") or {}
    if ident.get("identity") != "CURRENT_CANONICAL_MODEL_PORTFOLIO":
        raise RuntimeError(f"F2R performance identity is not current canonical: {ident.get('identity')}")
    if ident.get("architecture_id") != F2R_CURRENT_ARCHITECTURE_ID or perf.get("architecture_id") != F2R_CURRENT_ARCHITECTURE_ID:
        raise RuntimeError("F2R current architecture is not the promoted C3 model")
    if bool(ident.get("version_splice", True)):
        raise RuntimeError("F2R current-model performance is version-spliced")
    if not str(perf.get("status") or "").startswith("PASS"):
        raise RuntimeError(f"F2R current-model performance is not PASS: {perf.get('status')}")
    if str(perf.get("provenance_class") or "") != "CURRENT_CANONICAL_MODEL_RECONSTRUCTION":
        raise RuntimeError(f"F2R current-model provenance mismatch: {perf.get('provenance_class')}")
    if str(perf.get("risk_frequency") or "").upper() != "DAILY":
        raise RuntimeError(f"F2R current-model risk frequency is not DAILY: {perf.get('risk_frequency')}")
    if str(perf.get("transaction_cost_policy_id") or "") != F2R_COST_POLICY_ID:
        raise RuntimeError(f"F2R current-model transaction-cost policy mismatch: {perf.get('transaction_cost_policy_id')}")
    if str(perf.get("execution_boundary") or "") != F2R_EXECUTION_BOUNDARY:
        raise RuntimeError(f"F2R current-model execution boundary mismatch: {perf.get('execution_boundary')}")
    rows = perf.get("daily_series") or []
    if not isinstance(rows, list) or not rows:
        raise RuntimeError("F2R current-model completed_performance.daily_series is unavailable")
    return perf


def _daily_metrics(returns: list[float], first_date: str, last_date: str) -> dict:
    if len(returns) < 2:
        raise RuntimeError("F2R completed daily history is too short for live metrics")
    wealth = 1.0
    peak = 1.0
    mdd = 0.0
    for ret in returns:
        wealth *= 1.0 + ret
        peak = max(peak, wealth)
        mdd = min(mdd, wealth / peak - 1.0)
    start = datetime.fromisoformat(first_date[:10]).date()
    end = datetime.fromisoformat(last_date[:10]).date()
    years = max((end - start).days / 365.25, len(returns) / 252.0)
    cagr = wealth ** (1.0 / years) - 1.0
    vol_d = statistics.stdev(returns)
    ann_vol = vol_d * math.sqrt(252.0)
    sharpe = (statistics.mean(returns) / vol_d) * math.sqrt(252.0) if vol_d > 0 else 0.0
    calmar = cagr / abs(mdd) if mdd < -1e-12 else 0.0
    return {
        "cumulativeReturn": wealth - 1.0,
        "cagr": cagr,
        "annVol": ann_vol,
        "sharpe": sharpe,
        "mdd": mdd,
        "calmar": calmar,
    }


def build_f2r(research_root: Path):
    # F2R's public decision-state artifact intentionally excludes performance.
    # Completed live performance authority is the source-owned current-model
    # operator state that PDS also consumes after strict identity validation.
    source = provider_project_root(research_root, "F2R") / F2R_OPERATOR_STATE_REL
    if not source.is_file():
        raise FileNotFoundError(f"F2R current-model operator state missing: {source}")
    data = json.loads(source.read_text(encoding="utf-8-sig"))
    if not isinstance(data, dict):
        raise RuntimeError("F2R operator state root is not an object")
    perf = _f2r_current_model_performance(data)

    # Platform system pages show completed holding months only. The calendar
    # month containing the KST run date is always treated as open and excluded,
    # even if daily closes already exist. This prevents current MTD leakage.
    open_month = datetime.now(KST).strftime("%Y-%m")
    daily = []
    seen_dates = set()
    for raw in perf.get("daily_series") or []:
        if not isinstance(raw, dict):
            continue
        d = str(raw.get("date") or "")[:10]
        if len(d) != 10:
            raise RuntimeError(f"F2R daily_series row has invalid date: {raw.get('date')}")
        if d in seen_dates:
            raise RuntimeError(f"F2R daily_series has duplicate date: {d}")
        seen_dates.add(d)
        month = d[:7]
        if month >= open_month:
            continue
        ret = float(raw.get("net_return"))
        if not math.isfinite(ret) or ret <= -1.0:
            raise RuntimeError(f"F2R daily_series has invalid net_return on {d}: {raw.get('net_return')}")
        daily.append((d, ret))
    daily.sort(key=lambda x: x[0])
    if len(daily) < 252:
        raise RuntimeError(f"F2R completed current-model daily history is unexpectedly short: {len(daily)}")

    wealth = 1.0
    month_path: OrderedDict[str, dict] = OrderedDict()
    month_returns: OrderedDict[str, float] = OrderedDict()
    for d, ret in daily:
        wealth *= 1.0 + ret
        month = d[:7]
        month_path[month] = {"date": d, "primary": wealth}
        month_returns[month] = (1.0 + month_returns.get(month, 0.0)) * (1.0 + ret) - 1.0

    if len(month_path) < 12:
        raise RuntimeError(f"F2R completed current-model monthly coverage is unexpectedly short: {len(month_path)}")
    path = list(month_path.values())
    recent = [{"month": m, "primary": r} for m, r in list(month_returns.items())[-12:]]
    completed_through = path[-1]["date"]
    metrics = _daily_metrics([ret for _, ret in daily], daily[0][0], completed_through)

    return {
        "schema": SCHEMA,
        "system": "F2R",
        "sourceAuthority": "F2R source-owned current-model operator state · completed history only",
        "completedThrough": completed_through,
        "supportStart": daily[0][0],
        "supportEnd": completed_through,
        "primaryLabel": "F2R · current canonical model",
        "path": path,
        "recentMonthly": recent,
        "metrics": {"primary": metrics},
        "boundary": "Completed current-model history only. Current MTD, Official decision, and Preview states are excluded.",
    }

def render(payload):
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--research-root", type=Path, required=True)
    ap.add_argument("--repo-root", type=Path, default=Path.cwd())
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()
    research = args.research_root.resolve()
    repo = args.repo_root.resolve()
    payloads = {"adaa": build_adaa(research), "f2r": build_f2r(research)}
    changed = []
    for slug, payload in payloads.items():
        target = repo / "public" / "data" / "systems" / slug / "live_evidence.json"
        text = render(payload)
        current = target.read_text(encoding="utf-8") if target.exists() else None
        if current != text:
            changed.append(target.relative_to(repo).as_posix())
            if not args.check:
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text(text, encoding="utf-8", newline="\n")
    if changed:
        print("SLACKQUANT_LIVE_EVIDENCE_DELTA=" + ";".join(changed))
        if args.check:
            return 10
        print("SLACKQUANT_LIVE_EVIDENCE_SYNC_PASS")
    else:
        print("SLACKQUANT_LIVE_EVIDENCE_CURRENT")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
