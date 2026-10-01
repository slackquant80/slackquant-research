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


def optional_bound_summary(section: Any, *, label: str) -> dict[str, Any] | None:
    if not isinstance(section, dict):
        raise RuntimeError(f"{label} section must be an object")
    rows = section.get("summary") or []
    if not isinstance(rows, list):
        raise RuntimeError(f"{label} summary must be a list")
    available = section.get("available") is True
    if available:
        if len(rows) != 1:
            raise RuntimeError(f"{label} marked available but expected exactly one summary row; found {len(rows)}")
        if not isinstance(rows[0], dict):
            raise RuntimeError(f"{label} summary row must be an object")
        return rows[0]
    if rows:
        raise RuntimeError(f"{label} marked unavailable but contains {len(rows)} summary row(s)")
    return None


def optional_one(rows: list[dict[str, Any]], key: str, value: str) -> dict[str, Any] | None:
    found = [r for r in rows if str(r.get(key)) == value]
    if len(found) > 1:
        raise RuntimeError(f"expected at most one row where {key}={value!r}; found {len(found)}")
    return found[0] if found else None


def num(v: Any) -> float:
    return float(v)


def optional_num(v: Any, *, label: str) -> float | None:
    if v is None or str(v).strip() == "":
        return None
    try:
        return float(v)
    except (TypeError, ValueError) as exc:
        raise RuntimeError(f"{label} must be numeric when available: {v!r}") from exc


def adaptive_current_binding(row: Any) -> tuple[bool, str | None, float | None]:
    if not isinstance(row, dict):
        raise RuntimeError("PDS Adaptive operational summary row must be an object")
    state = str(row.get("state") or "").strip()
    risk_budget = optional_num(row.get("risk_budget"), label="PDS Adaptive current risk budget")
    # At month-end before the next execution/current-MTD clock opens, the Adaptive
    # engine deliberately writes state=UNAVAILABLE and an empty risk_budget.  This
    # is a valid non-blocking current-state boundary, not a zero-risk decision.
    unavailable = state in {"", "UNAVAILABLE"} and risk_budget is None
    if unavailable:
        return False, None, None
    if state not in {"NORMAL", "DEFENSIVE"}:
        raise RuntimeError(f"PDS Adaptive current state is invalid: {state!r}")
    if risk_budget is None:
        raise RuntimeError(f"PDS Adaptive current state {state!r} is missing risk_budget")
    return True, state, risk_budget


def perf(row: dict[str, Any], *, label: str) -> dict[str, Any]:
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
    }


def recent_monthly_returns(data: dict[str, Any], limit: int = 12) -> list[dict[str, Any]]:
    core_monthly = data["core_daily_performance"]["monthly"]
    fx_monthly = data["fx_operational_sensitivity"]["monthly"]

    # The platform chart is a like-for-like historical comparison.  At a month-end
    # rollover the Core/Dynamic-FX series can already have the newly completed month
    # while the certified prior-parent Adaptive/Dynamic-FX comparison has no value for
    # that month.  A blank Adaptive value is therefore not zero and must not be coerced.
    # Bind the latest 12 *common completed* months instead, while still failing on
    # malformed numbers or gaps inside the selected common window.
    core_periods = sorted({
        str(r.get("calendar_month", ""))
        for r in core_monthly
        if str(r.get("series_id")) == "PDS_CORE_FIXED_CURRENT_POLICY"
        and re_match_month(str(r.get("calendar_month", "")))
        and optional_num(r.get("net_return"), label=f"PDS Core monthly return {r.get('calendar_month', '')}") is not None
    })
    if len(core_periods) < limit:
        raise RuntimeError(f"expected at least {limit} completed PDS Core months for platform chart; found {len(core_periods)}")

    core_period_set = set(core_periods)
    fx_by_month: dict[str, dict[str, Any]] = {}
    for row in fx_monthly:
        month = str(row.get("holding_month", ""))
        if month not in core_period_set:
            continue
        if month in fx_by_month:
            raise RuntimeError(f"duplicate FX monthly row for {month}")
        # Dynamic FX is the current-definition Core comparison and must exist for a
        # completed Core month whenever an FX monthly row is present.
        if optional_num(row.get("dynamic_costed_return"), label=f"PDS Core Dynamic-FX return {month}") is None:
            raise RuntimeError(f"missing Core Dynamic-FX return for completed month {month}")
        # Adaptive may be blank only as an unavailable historical observation.  A
        # nonblank malformed value still fails through optional_num().
        optional_num(row.get("adaptive_dynamic_costed_return"), label=f"PDS Adaptive Dynamic-FX return {month}")
        fx_by_month[month] = row

    common_periods = [
        month for month in core_periods
        if month in fx_by_month
        and optional_num(fx_by_month[month].get("adaptive_dynamic_costed_return"), label=f"PDS Adaptive Dynamic-FX return {month}") is not None
    ]
    if len(common_periods) < limit:
        raise RuntimeError(f"expected at least {limit} common completed Core/Adaptive Dynamic-FX months for platform chart; found {len(common_periods)}")
    periods = common_periods[-limit:]

    # Do not silently bridge an internal historical gap.  The selected comparison
    # window must be consecutive in the completed Core monthly lineage; only trailing
    # Core months after the latest Adaptive observation may be excluded.
    start = core_periods.index(periods[0])
    expected = core_periods[start:start + limit]
    if periods != expected:
        raise RuntimeError(f"PDS common completed monthly comparison contains an internal gap: {periods}")

    out: list[dict[str, Any]] = []
    for month in periods:
        row = fx_by_month[month]
        core_fx = optional_num(row.get("dynamic_costed_return"), label=f"PDS Core Dynamic-FX return {month}")
        adaptive_fx = optional_num(row.get("adaptive_dynamic_costed_return"), label=f"PDS Adaptive Dynamic-FX return {month}")
        if core_fx is None or adaptive_fx is None:
            raise RuntimeError(f"common completed FX comparison unexpectedly unavailable for {month}")
        out.append({
            "holdingMonth": month,
            "coreDynamicFx": core_fx,
            "adaptiveDynamicFx": adaptive_fx,
        })
    return out


def re_match_month(value: str) -> bool:
    return len(value) == 7 and value[:4].isdigit() and value[4] == "-" and value[5:].isdigit() and 1 <= int(value[5:]) <= 12



def shift_month(period: str, delta: int = 1) -> str:
    if not re_match_month(period):
        return ""
    y, m = map(int, period.split("-"))
    n = y * 12 + m - 1 + delta
    return f"{n // 12:04d}-{n % 12 + 1:02d}"


def canonical_clock(data: dict[str, Any]) -> dict[str, str]:
    meta = data.get("meta") if isinstance(data.get("meta"), dict) else {}
    current_mark = data.get("current_mark") if isinstance(data.get("current_mark"), dict) else {}
    mark = current_mark.get("manifest") if isinstance(current_mark.get("manifest"), dict) else {}
    core = data.get("core") if isinstance(data.get("core"), dict) else {}
    core_manifest = core.get("manifest") if isinstance(core.get("manifest"), dict) else {}
    core_summary = data.get("core_daily_performance", {}).get("summary", [])
    core_row = one(core_summary, "series_id", "PDS_CORE_FIXED_CURRENT_POLICY")

    signal_candidates = [
        str(mark.get("decision_period") or "").strip(),
        str(core_manifest.get("current_core_period") or "").strip(),
        str(meta.get("latest_signal_period") or "").strip(),
    ]
    signals = {x for x in signal_candidates if x}
    if not signals:
        fallback = str(meta.get("latest_sealed_signal_period") or "").strip()
        if fallback:
            signals = {fallback}
    if len(signals) != 1:
        raise RuntimeError(f"PDS canonical Official signal clock is ambiguous: {sorted(signals)}")
    official_signal = next(iter(signals))
    if not re_match_month(official_signal):
        raise RuntimeError(f"PDS canonical Official signal month is invalid: {official_signal!r}")

    expected_holding = shift_month(official_signal, 1)
    mark_holding = str(mark.get("holding_month") or "").strip()
    if mark_holding and mark_holding != expected_holding:
        raise RuntimeError(f"PDS canonical holding clock mismatch: Official {official_signal} implies {expected_holding}, mark has {mark_holding}")

    completed = str(mark.get("completed_performance_cutoff") or core_row.get("end_date") or "").strip()
    if not completed:
        raise RuntimeError("PDS canonical completed-performance cutoff is unavailable")
    mark_through = str(mark.get("latest_price_date") or mark.get("data_through_ny_close") or completed).strip()
    mark_available = current_mark.get("available") is True and str(mark.get("status") or "") == "PASS_PROVISIONAL_MARK"
    execution = str(mark.get("execution_date") or "").strip()
    if mark_available and not execution:
        raise RuntimeError("PDS Current MTD is marked available but execution_date is missing")

    return {
        "systemAsOfKst": str(mark.get("system_as_of_kst") or meta.get("dashboard_generated_at") or ""),
        "officialSignal": official_signal,
        "holdingMonth": expected_holding,
        "executionClose": execution,
        "markThrough": mark_through,
        "completedThrough": completed,
    }

def build_summary(data: dict[str, Any]) -> dict[str, Any]:
    clock = canonical_clock(data)
    adaptive = data["adaptive"]
    adaptive_op = adaptive["operational_summary"][0]
    adaptive_current_available, adaptive_state, adaptive_risk_budget = adaptive_current_binding(adaptive_op)
    adaptive_hist = adaptive["historical_summary"][0]
    preview = optional_bound_summary(data.get("pds_forward_preview", {}), label="PDS Forward Preview")
    adaptive_preview = optional_bound_summary(data.get("adaptive_preview", {}), label="Adaptive Preview")
    fx = data["fx_operational_sensitivity"]
    fx_state = fx["state"]
    fx_summary = fx["summary"]
    core_summary = data["core_daily_performance"]["summary"]

    official_fx = one(fx_state, "state_type", "OFFICIAL_DECISION_SENSITIVITY")
    preview_fx = optional_one(fx_state, "state_type", "INTRAMONTH_PREVIEW")
    core = one(core_summary, "series_id", "PDS_CORE_FIXED_CURRENT_POLICY")
    core_fx = one(fx_summary, "series_id", "DYNAMIC_COSTED")
    adaptive_fx = one(fx_summary, "series_id", "ADAPTIVE_DYNAMIC_COSTED")

    return {
        "contract": "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
        "generatedAt": str(data.get("meta", {}).get("dashboard_generated_at", "")),
        "systemAsOfKst": clock["systemAsOfKst"],
        "officialSignal": clock["officialSignal"],
        "holdingMonth": clock["holdingMonth"],
        "executionClose": clock["executionClose"],
        "markThrough": clock["markThrough"],
        "completedThrough": clock["completedThrough"],
        "coreProviders": ["ADAA", "F2R"],
        "adaptiveState": adaptive_state,
        "adaptiveRiskBudget": adaptive_risk_budget,
        "previewAvailable": preview is not None,
        "previewSignal": str(preview["preview_signal_month"]) if preview is not None else None,
        "previewHolding": str(preview["preview_holding_month"]) if preview is not None else None,
        "previewThrough": str(preview["market_data_through_ny_date"]) if preview is not None else None,
        "adaptivePreviewAvailable": adaptive_preview is not None,
        "adaptivePreviewState": str(adaptive_preview["adaptive_state"]) if adaptive_preview is not None else None,
        "adaptivePreviewRiskBudget": num(adaptive_preview["risk_budget"]) if adaptive_preview is not None else None,
        "officialFxHedge": num(official_fx["hedge_ratio"]),
        "officialFxZscore": num(official_fx["zscore"]),
        "previewFxAvailable": preview_fx is not None,
        "previewFxHedge": num(preview_fx["hedge_ratio"]) if preview_fx is not None else None,
        "previewFxZscore": num(preview_fx["zscore"]) if preview_fx is not None else None,
        "recentMonthlyReturns": recent_monthly_returns(data, 12),
        "performance": [
            perf(core_fx, label="PDS Core + Dynamic FX"),
            perf(core, label="PDS Core"),
            perf(adaptive_fx, label="PDS Adaptive + Dynamic FX"),
            perf(adaptive_hist, label="PDS Adaptive"),
        ],
    }


def render_ts(summary: dict[str, Any]) -> str:
    payload = json.dumps(summary, ensure_ascii=False, indent=2)
    return f'''export type PdsCanonicalMonthlyReturnRow = {{\n  holdingMonth: string;\n  coreDynamicFx: number;\n  adaptiveDynamicFx: number;\n}};\n\nexport type PdsCanonicalPerformanceRow = {{\n  label: string;\n  supportStart: string;\n  supportEnd: string;\n  cumulativeReturn: number;\n  cagr: number;\n  annVol: number;\n  sharpe: number;\n  mdd: number;\n  calmar: number;\n}};\n\nexport type PdsCanonicalSummary = {{\n  contract: "PDS_CANONICAL_PLATFORM_SUMMARY_V1";\n  generatedAt: string;\n  systemAsOfKst: string;\n  officialSignal: string;\n  holdingMonth: string;\n  executionClose: string;\n  markThrough: string;\n  completedThrough: string;\n  coreProviders: string[];\n  adaptiveState: string | null;\n  adaptiveRiskBudget: number | null;\n  previewAvailable: boolean;\n  previewSignal: string | null;\n  previewHolding: string | null;\n  previewThrough: string | null;\n  adaptivePreviewAvailable: boolean;\n  adaptivePreviewState: string | null;\n  adaptivePreviewRiskBudget: number | null;\n  officialFxHedge: number;\n  officialFxZscore: number;\n  previewFxAvailable: boolean;\n  previewFxHedge: number | null;\n  previewFxZscore: number | null;\n  recentMonthlyReturns: PdsCanonicalMonthlyReturnRow[];\n  performance: PdsCanonicalPerformanceRow[];\n}};\n\n// Generated from the current PDS public dashboard.\n// PREVIEW_UNAVAILABLE_IS_VALID_AT_MONTH_END: empty Preview arrays bind as explicit null state.
// MONTH_END_UNAVAILABLE_IS_VALID: current Adaptive/Preview states bind as explicit nulls until their execution clocks open.\n// Do not hand-edit numerical values; refresh through the PDS publication workflow.\nexport const pdsCanonicalSummary: PdsCanonicalSummary = {payload} as PdsCanonicalSummary;\n'''


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
