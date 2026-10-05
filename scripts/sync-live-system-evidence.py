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
from collections import OrderedDict

SCHEMA = "SLACKQUANT_LIVE_EVIDENCE_V1"


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
    base = research_root / "05_ADAA" / "09_RUNTIME" / "LIVE_DASHBOARD" / "PUBLIC_VIEW_SNAPSHOT" / "performance"
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


def build_f2r(research_root: Path):
    source = research_root / "12_MACRO_FORECAST_ALLOCATION" / "10_PUBLIC_SYSTEM" / "dashboard" / "public_data" / "f2r_public_state.json"
    data = json.loads(source.read_text(encoding="utf-8-sig"))
    completed = data["completed_performance"]
    comparison = data["benchmark_comparison"]

    by_month = OrderedDict()
    for row in completed["growth_series"]:
        by_month[row["date"][:7]] = row
    path = [{"date": row["date"], "primary": float(row["growth"])} for row in by_month.values()]
    recent = [{"month": row["month"], "primary": float(row["return"])} for row in completed["monthly_returns"][-12:]]

    primary = next(row for row in comparison["summary"] if str(row["series"]).startswith("F2R"))
    benchmark = next(row for row in comparison["summary"] if str(row["series"]).startswith("SPY / AGG"))
    def metrics(row):
        return {
            "cumulativeReturn": float(row["cumulative_return"]),
            "cagr": float(row["cagr"]),
            "annVol": float(row["ann_vol"]),
            "sharpe": float(row["sharpe_rf0"]),
            "mdd": float(row["max_drawdown"]),
            "calmar": float(row["calmar"]),
        }

    return {
        "schema": SCHEMA,
        "system": "F2R",
        "sourceAuthority": "F2R governed public state",
        "completedThrough": completed["as_of_date"],
        "supportStart": completed["support_start"],
        "supportEnd": completed["support_end"],
        "primaryLabel": "F2R · current canonical model",
        "benchmarkLabel": "SPY / AGG 60 / 40 · practitioner",
        "path": path,
        "recentMonthly": recent,
        "metrics": {"primary": metrics(primary), "benchmark": metrics(benchmark)},
        "boundary": completed["performance_note"],
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
