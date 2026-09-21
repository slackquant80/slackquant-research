#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


def extract_payload(html: str) -> dict[str, Any]:
    marker = "window.PDL_DATA="
    start = html.find(marker)
    if start < 0:
        raise RuntimeError("PDS canonical dashboard PDL_DATA marker missing")
    start += len(marker)
    end = html.find(";</script>", start)
    if end < 0:
        raise RuntimeError("PDS canonical dashboard PDL_DATA terminator missing")
    data = json.loads(html[start:end])
    if not isinstance(data, dict):
        raise RuntimeError("PDS canonical dashboard payload must be an object")
    return data


def one(rows: list[dict[str, Any]], key: str, value: str) -> dict[str, Any]:
    found = [r for r in rows if str(r.get(key)) == value]
    if len(found) != 1:
        raise RuntimeError(f"expected exactly one row where {key}={value!r}; found {len(found)}")
    return found[0]


def num(v: Any) -> float:
    return float(v)


def perf(row: dict[str, Any], *, label: str, evidence: str) -> dict[str, Any]:
    terminal = num(row["terminal_wealth"])
    return {
        "label": label,
        "supportStart": str(row["start_date"]),
        "supportEnd": str(row["end_date"]),
        "cumulativeReturn": terminal - 1.0,
        "cagr": num(row["cagr"]),
        "annVol": num(row["ann_vol"]),
        "sharpe": num(row.get("sharpe_ratio_rf0", row.get("sharpe_style"))),
        "mdd": num(row["mdd"]),
        "calmar": num(row["calmar"]),
        "evidenceClass": evidence,
    }


def recent_monthly_returns(data: dict[str, Any], limit: int = 12) -> list[dict[str, Any]]:
    core_monthly = data["core_daily_performance"]["monthly"]
    fx_monthly = data["fx_operational_sensitivity"]["monthly"]
    periods = sorted({
        str(r.get("calendar_month", ""))
        for r in core_monthly
        if str(r.get("series_id")) == "PDS_CORE_FIXED_CURRENT_POLICY"
        and re_match_month(str(r.get("calendar_month", "")))
        and r.get("net_return") is not None
    })[-limit:]
    if len(periods) != limit:
        raise RuntimeError(f"expected {limit} completed PDS Core months for platform chart; found {len(periods)}")

    fx_by_month: dict[str, dict[str, Any]] = {}
    for row in fx_monthly:
        month = str(row.get("holding_month", ""))
        if month not in periods:
            continue
        if month in fx_by_month:
            raise RuntimeError(f"duplicate FX monthly row for {month}")
        fx_by_month[month] = row

    out: list[dict[str, Any]] = []
    for month in periods:
        row = fx_by_month.get(month)
        if row is None:
            raise RuntimeError(f"missing FX monthly row for recent completed month {month}")
        if row.get("dynamic_costed_return") is None or row.get("adaptive_dynamic_costed_return") is None:
            raise RuntimeError(f"missing Core/Adaptive Dynamic-FX return for recent completed month {month}")
        out.append({
            "holdingMonth": month,
            "coreDynamicFx": num(row["dynamic_costed_return"]),
            "adaptiveDynamicFx": num(row["adaptive_dynamic_costed_return"]),
        })
    return out


def re_match_month(value: str) -> bool:
    return len(value) == 7 and value[:4].isdigit() and value[4] == "-" and value[5:].isdigit() and 1 <= int(value[5:]) <= 12


def build_summary(data: dict[str, Any]) -> dict[str, Any]:
    meta = data["meta"]
    mark = data["current_mark"]["manifest"]
    adaptive = data["adaptive"]
    adaptive_op = adaptive["operational_summary"][0]
    adaptive_hist = adaptive["historical_summary"][0]
    preview = data["pds_forward_preview"]["summary"][0]
    adaptive_preview = data["adaptive_preview"]["summary"][0]
    fx = data["fx_operational_sensitivity"]
    fx_state = fx["state"]
    fx_summary = fx["summary"]
    core_summary = data["core_daily_performance"]["summary"]

    official_fx = one(fx_state, "state_type", "OFFICIAL_DECISION_SENSITIVITY")
    preview_fx = one(fx_state, "state_type", "INTRAMONTH_PREVIEW")
    core = one(core_summary, "series_id", "PDS_CORE_FIXED_CURRENT_POLICY")
    core_fx = one(fx_summary, "series_id", "DYNAMIC_COSTED")
    adaptive_fx = one(fx_summary, "series_id", "ADAPTIVE_DYNAMIC_COSTED")

    return {
        "contract": "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
        "generatedAt": str(meta.get("dashboard_generated_at", "")),
        "systemAsOfKst": str(mark.get("system_as_of_kst", "")),
        "officialSignal": str(mark["decision_period"]),
        "holdingMonth": str(mark["holding_month"]),
        "executionClose": str(mark["execution_date"]),
        "markThrough": str(mark["latest_price_date"]),
        "completedThrough": str(mark["completed_performance_cutoff"]),
        "coreProviders": ["ADAA", "F2R"],
        "adaptiveState": str(adaptive_op["state"]),
        "adaptiveRiskBudget": num(adaptive_op["risk_budget"]),
        "previewSignal": str(preview["preview_signal_month"]),
        "previewHolding": str(preview["preview_holding_month"]),
        "previewThrough": str(preview["market_data_through_ny_date"]),
        "adaptivePreviewState": str(adaptive_preview["adaptive_state"]),
        "adaptivePreviewRiskBudget": num(adaptive_preview["risk_budget"]),
        "officialFxHedge": num(official_fx["hedge_ratio"]),
        "officialFxZscore": num(official_fx["zscore"]),
        "previewFxHedge": num(preview_fx["hedge_ratio"]),
        "previewFxZscore": num(preview_fx["zscore"]),
        "recentMonthlyReturns": recent_monthly_returns(data, 12),
        "performance": [
            perf(core_fx, label="PDS Core + Dynamic FX", evidence="Operational full support"),
            perf(core, label="PDS Core", evidence="Operational full support"),
            perf(adaptive_fx, label="PDS Adaptive + Dynamic FX", evidence="Frozen-policy evidence"),
            perf(adaptive_hist, label="PDS Adaptive", evidence="Frozen-policy evidence"),
        ],
    }


def render_ts(summary: dict[str, Any]) -> str:
    payload = json.dumps(summary, ensure_ascii=False, indent=2)
    return f'''export type PdsCanonicalMonthlyReturnRow = {{\n  holdingMonth: string;\n  coreDynamicFx: number;\n  adaptiveDynamicFx: number;\n}};\n\nexport type PdsCanonicalPerformanceRow = {{\n  label: string;\n  supportStart: string;\n  supportEnd: string;\n  cumulativeReturn: number;\n  cagr: number;\n  annVol: number;\n  sharpe: number;\n  mdd: number;\n  calmar: number;\n  evidenceClass: string;\n}};\n\nexport type PdsCanonicalSummary = {{\n  contract: "PDS_CANONICAL_PLATFORM_SUMMARY_V1";\n  generatedAt: string;\n  systemAsOfKst: string;\n  officialSignal: string;\n  holdingMonth: string;\n  executionClose: string;\n  markThrough: string;\n  completedThrough: string;\n  coreProviders: string[];\n  adaptiveState: string;\n  adaptiveRiskBudget: number;\n  previewSignal: string;\n  previewHolding: string;\n  previewThrough: string;\n  adaptivePreviewState: string;\n  adaptivePreviewRiskBudget: number;\n  officialFxHedge: number;\n  officialFxZscore: number;\n  previewFxHedge: number;\n  previewFxZscore: number;\n  recentMonthlyReturns: PdsCanonicalMonthlyReturnRow[];\n  performance: PdsCanonicalPerformanceRow[];\n}};\n\n// Generated from the validated canonical PDS public dashboard.\n// Do not hand-edit numerical values; refresh through the governed PDS publication pipeline.\nexport const pdsCanonicalSummary: PdsCanonicalSummary = {payload} as PdsCanonicalSummary;\n'''


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--html", type=Path, required=True)
    ap.add_argument("--output", type=Path, required=True)
    args = ap.parse_args()
    html = args.html.resolve()
    if not html.is_file():
        raise SystemExit(f"canonical PDS public dashboard not found: {html}")
    data = extract_payload(html.read_text(encoding="utf-8-sig"))
    summary = build_summary(data)
    out = args.output.resolve()
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render_ts(summary), encoding="utf-8", newline="\n")
    print("PDS_CANONICAL_PLATFORM_SUMMARY_BIND_PASS")
    print(json.dumps(summary, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
