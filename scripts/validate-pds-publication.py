#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
import re
import zipfile
from pathlib import Path
from typing import Any

APP = Path(__file__).resolve().parents[1]
SYSTEMS = APP / "src/data/systems.ts"
SYSTEMS_PAGE = APP / "src/app/systems/page.tsx"
PDS_PAGE = APP / "src/app/systems/pds/page.tsx"
PDS_DASHBOARD = APP / "src/app/systems/pds/dashboard/page.tsx"
SUMMARY = APP / "src/data/pdsCanonicalSummary.ts"
SUMMARY_BINDER = APP / "scripts/bind-pds-canonical-summary.py"
PUBLIC_DASHBOARD = APP / "public/assets/systems/pds/Portfolio_Decision_System_Public.html"
PUBLIC_DASHBOARD_RECEIPT = APP / "public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"
PUBLIC_PORTFOLIO_HISTORY_XLSX = APP / "public/assets/systems/pds/PDS_Portfolio_History_Current_Definition.xlsx"


def need(path: Path) -> str:
    if not path.is_file():
        raise RuntimeError(f"missing required PDS platform artifact: {path.relative_to(APP)}")
    return path.read_text(encoding="utf-8-sig", errors="replace")


def require(text: str, token: str, label: str, *, casefold: bool = False) -> None:
    ok = token.casefold() in text.casefold() if casefold else token in text
    if not ok:
        raise RuntimeError(f"{label} missing required token: {token}")


def dashboard_payload(html: str) -> dict[str, Any]:
    marker = "window.PDL_DATA="
    start = html.find(marker)
    if start < 0:
        raise RuntimeError("PDS public dashboard payload marker missing")
    start += len(marker)
    end = html.find(";</script>", start)
    if end < 0:
        raise RuntimeError("PDS public dashboard payload terminator missing")
    obj = json.loads(html[start:end])
    if not isinstance(obj, dict):
        raise RuntimeError("PDS public dashboard payload must be an object")
    return obj


def summary_obj(text: str) -> dict[str, Any]:
    m = re.search(
        r"export const pdsCanonicalSummary: PdsCanonicalSummary = (.*?) as PdsCanonicalSummary;",
        text,
        re.S,
    )
    if not m:
        raise RuntimeError("PDS canonical platform summary binding is not parseable")
    return json.loads(m.group(1))


def one(rows: list[dict[str, Any]], key: str, value: str) -> dict[str, Any]:
    found = [r for r in rows if str(r.get(key)) == value]
    if len(found) != 1:
        raise RuntimeError(f"PDS dashboard expected one {key}={value!r}; found {len(found)}")
    return found[0]


def close(a: Any, b: Any, tol: float = 1e-12) -> bool:
    return abs(float(a) - float(b)) <= tol


def main() -> int:
    systems = need(SYSTEMS)
    systems_page = need(SYSTEMS_PAGE)
    pds = need(PDS_PAGE)
    route = need(PDS_DASHBOARD)
    summary_text = need(SUMMARY)
    binder = need(SUMMARY_BINDER)
    public_html = need(PUBLIC_DASHBOARD)

    # Platform identity: current operational surface, not a delayed/reduced product.
    for tok in [
        'status: "Public operational dashboard"',
        'subtitle: "Multi-Strategy Portfolio System with Reinforcement-Learning Adaptive Risk Control"',
        'publicDashboard: "/systems/pds/dashboard/"',
    ]:
        require(systems, tok, "PDS systems registry")

    for tok in [
        "PDS_CANONICAL_PLATFORM_PAGE_V1",
        "Reinforcement-Learning Adaptive Risk Control",
        "Current Active Core",
        "ADAA + F2R",
        "Dynamic FX Overlay",
        "Recent Completed Monthly Returns",
        "Recent completed returns and four monitored portfolio views.",
        "the PDS dashboard is the current operating view",
        "/systems/pds/dashboard/",
    ]:
        require(pds, tok, "PDS platform page")

    forbidden_platform = [
        r"(?i)DELAYED PUBLIC",
        r"(?i)protected current decision state",
        r"(?i)Recent 12-Month Released Returns",
        r"(?i)F2R\s*25%",
        r"(?i)ADAA\s*75%",
        r"(?i)25/75",
        r"latestStrategyWeights",
        r"public_active_core_strategy_weights\.csv",
        r"PDS_System_Documentation_v1\.3\.pdf",
        r"(?i)Support matters:",
    ]
    for pattern in forbidden_platform:
        if re.search(pattern, pds):
            raise RuntimeError(f"PDS platform page stale/revealing token: {pattern}")

    for tok in [
        'import { pdsCanonicalSummary } from "@/data/pdsCanonicalSummary";',
        "pdsCanonicalSummary.markThrough",
        "Operational data through",
    ]:
        require(systems_page, tok, "Systems index PDS canonical-state binding")
    if "pdsPublicSnapshot" in systems_page or "pdsPublicSnapshot" in pds:
        raise RuntimeError("PDS platform pages still depend on the legacy delayed snapshot binding")

    require(summary_text, 'contract: "PDS_CANONICAL_PLATFORM_SUMMARY_V1"', "PDS canonical summary")
    require(summary_text, '"label": "PDS Core + Dynamic FX"', "PDS canonical summary")
    require(summary_text, '"label": "PDS Adaptive + Dynamic FX"', "PDS canonical summary")
    require(summary_text, '"recentMonthlyReturns": [', "PDS canonical summary")
    require(binder, "PDS_CANONICAL_PLATFORM_SUMMARY_BIND_PASS", "PDS canonical summary binder")
    require(binder, "recent_monthly_returns", "PDS canonical summary binder")

    # Canonical public dashboard safety and identity.
    required_dashboard = [
        "window.PDS_PUBLIC_SURFACE=true",
        "window.PDL_DATA=",
        "PM Cockpit",
        "<h2>Adaptive</h2>",
        "<h2>Preview</h2>",
        "<h2>FX</h2>",
        "<h2>Performance</h2>",
        "<h2>Portfolio</h2>",
        "Latest admissible FX observation",
    ]
    for tok in required_dashboard:
        require(public_html, tok, "PDS canonical public dashboard")
    for forbidden in [
        "PDS_PUBLIC_SAFE_DELAYED_READ_MODEL",
        "Governed delayed public profile",
        "DELAYED PUBLIC",
        "_LOCAL_PRIVATE_DATA",
        "_LOCAL_RUNTIME",
        "_LOCAL_CACHE",
        "_LOCAL_PRIVATE_ARCHIVE",
        "MACRO_FORECAST_ALLOCATION",
        "MFA_PRICE_ONLY",
        "Latest raw FX observation",
    ]:
        if forbidden.casefold() in public_html.casefold():
            raise RuntimeError(f"PDS canonical public dashboard leakage/stale identity: {forbidden}")
    if re.search(r"(?i)\b[a-z]:[\\/]", public_html):
        raise RuntimeError("PDS canonical public dashboard contains a Windows absolute path")

    receipt = json.loads(need(PUBLIC_DASHBOARD_RECEIPT))
    if receipt.get("status") != "PASS" or receipt.get("public_policy") != "CANONICAL_LOCAL_INFORMATION__ENVIRONMENT_ONLY_SUPPRESSED":
        raise RuntimeError("PDS canonical public dashboard receipt is not PASS under current policy")
    if not receipt.get("canonical_current_values_embedded"):
        raise RuntimeError("PDS canonical public dashboard receipt does not certify current values")

    # Portfolio-history download must be a real adjacent XLSX asset, not a dangling relative link.
    if not PUBLIC_PORTFOLIO_HISTORY_XLSX.is_file():
        raise RuntimeError("PDS public portfolio-history XLSX asset is missing")
    try:
        with zipfile.ZipFile(PUBLIC_PORTFOLIO_HISTORY_XLSX) as z:
            names = set(z.namelist())
            if "xl/workbook.xml" not in names or "xl/worksheets/sheet1.xml" not in names:
                raise RuntimeError("PDS public portfolio-history XLSX is structurally incomplete")
            workbook_xml = z.read("xl/workbook.xml").decode("utf-8", errors="replace")
    except zipfile.BadZipFile as exc:
        raise RuntimeError("PDS public portfolio-history XLSX is not a valid XLSX/ZIP file") from exc
    for sheet_name in ("Core Portfolio", "Adaptive Portfolio", "Blend 50-50 Portfolio"):
        if sheet_name not in workbook_xml:
            raise RuntimeError(f"PDS public portfolio-history XLSX required sheet missing: {sheet_name}")
    xlsx_sha = hashlib.sha256(PUBLIC_PORTFOLIO_HISTORY_XLSX.read_bytes()).hexdigest()
    if receipt.get("portfolio_history_xlsx_file") != PUBLIC_PORTFOLIO_HISTORY_XLSX.name or receipt.get("portfolio_history_xlsx_sha256") != xlsx_sha:
        raise RuntimeError("PDS public portfolio-history XLSX does not match the canonical-mirror receipt")
    require(public_html, 'href="PDS_Portfolio_History_Current_Definition.xlsx"', "PDS Portfolio Excel download link")

    # Canonical summary must be derived from the same current dashboard bytes.
    data = dashboard_payload(public_html)
    summary = summary_obj(summary_text)
    if summary.get("contract") != "PDS_CANONICAL_PLATFORM_SUMMARY_V1":
        raise RuntimeError("PDS canonical platform summary contract mismatch")

    mark = data["current_mark"]["manifest"]
    expected_scalar = {
        "officialSignal": str(mark["decision_period"]),
        "holdingMonth": str(mark["holding_month"]),
        "executionClose": str(mark["execution_date"]),
        "markThrough": str(mark["latest_price_date"]),
        "completedThrough": str(mark["completed_performance_cutoff"]),
    }
    for key, value in expected_scalar.items():
        if str(summary.get(key)) != value:
            raise RuntimeError(f"PDS canonical platform summary stale: {key}={summary.get(key)!r} != {value!r}")

    adaptive_op = data["adaptive"]["operational_summary"][0]
    if summary.get("adaptiveState") != str(adaptive_op["state"]) or not close(summary.get("adaptiveRiskBudget"), adaptive_op["risk_budget"]):
        raise RuntimeError("PDS canonical platform summary Adaptive state/risk budget mismatch")

    preview = data["pds_forward_preview"]["summary"][0]
    for key, source_key in [
        ("previewSignal", "preview_signal_month"),
        ("previewHolding", "preview_holding_month"),
        ("previewThrough", "market_data_through_ny_date"),
    ]:
        if str(summary.get(key)) != str(preview[source_key]):
            raise RuntimeError(f"PDS canonical platform summary Preview mismatch: {key}")

    fx_state = data["fx_operational_sensitivity"]["state"]
    off_fx = one(fx_state, "state_type", "OFFICIAL_DECISION_SENSITIVITY")
    prev_fx = one(fx_state, "state_type", "INTRAMONTH_PREVIEW")
    for key, value in [
        ("officialFxHedge", off_fx["hedge_ratio"]),
        ("officialFxZscore", off_fx["zscore"]),
        ("previewFxHedge", prev_fx["hedge_ratio"]),
        ("previewFxZscore", prev_fx["zscore"]),
    ]:
        if not close(summary.get(key), value):
            raise RuntimeError(f"PDS canonical platform summary FX mismatch: {key}")

    recent = summary.get("recentMonthlyReturns", [])
    if len(recent) != 12:
        raise RuntimeError(f"PDS canonical platform summary recent monthly return row count mismatch: {len(recent)}")
    fx_monthly = {str(r.get("holding_month")): r for r in data["fx_operational_sensitivity"]["monthly"]}
    core_periods = sorted({
        str(r.get("calendar_month"))
        for r in data["core_daily_performance"]["monthly"]
        if str(r.get("series_id")) == "PDS_CORE_FIXED_CURRENT_POLICY" and r.get("net_return") is not None
    })[-12:]
    if [str(r.get("holdingMonth")) for r in recent] != core_periods:
        raise RuntimeError("PDS canonical platform summary recent monthly holding-month lineage mismatch")
    for row in recent:
        month = str(row["holdingMonth"])
        source = fx_monthly.get(month)
        if source is None or not close(row["coreDynamicFx"], source["dynamic_costed_return"]) or not close(row["adaptiveDynamicFx"], source["adaptive_dynamic_costed_return"]):
            raise RuntimeError(f"PDS canonical platform summary recent monthly return mismatch: {month}")

    core_rows = data["core_daily_performance"]["summary"]
    fx_rows = data["fx_operational_sensitivity"]["summary"]
    adaptive_row = data["adaptive"]["historical_summary"][0]
    expected_perf = {
        "PDS Core + Dynamic FX": one(fx_rows, "series_id", "DYNAMIC_COSTED"),
        "PDS Core": one(core_rows, "series_id", "PDS_CORE_FIXED_CURRENT_POLICY"),
        "PDS Adaptive + Dynamic FX": one(fx_rows, "series_id", "ADAPTIVE_DYNAMIC_COSTED"),
        "PDS Adaptive": adaptive_row,
    }
    perf = {r["label"]: r for r in summary.get("performance", [])}
    if set(perf) != set(expected_perf):
        raise RuntimeError("PDS canonical platform summary four-portfolio row set mismatch")
    for label, source in expected_perf.items():
        row = perf[label]
        if row["supportStart"] != source["start_date"] or row["supportEnd"] != source["end_date"]:
            raise RuntimeError(f"PDS canonical platform summary support mismatch: {label}")
        expected = {
            "cumulativeReturn": float(source["terminal_wealth"]) - 1.0,
            "cagr": float(source["cagr"]),
            "annVol": float(source["ann_vol"]),
            "sharpe": float(source.get("sharpe_ratio_rf0", source.get("sharpe_style"))),
            "mdd": float(source["mdd"]),
            "calmar": float(source["calmar"]),
        }
        for key, value in expected.items():
            if not close(row[key], value):
                raise RuntimeError(f"PDS canonical platform summary performance mismatch: {label} {key}")

    # The route cache key must be bound to current dashboard bytes.
    dashboard_sha = hashlib.sha256(PUBLIC_DASHBOARD.read_bytes()).hexdigest()
    require(route, dashboard_sha[:16], "PDS dashboard route cache key")
    require(route, "/assets/systems/pds/Portfolio_Decision_System_Public.html", "PDS dashboard route")

    print("PDS_PUBLICATION_VALIDATION_PASS")
    print(f"Canonical current clock : {summary['officialSignal']} -> {summary['holdingMonth']} / through {summary['markThrough']}")
    print(f"Adaptive state          : {summary['adaptiveState']} / risk budget {summary['adaptiveRiskBudget']:.0%}")
    print("Four-portfolio summary  : exact parity with current public dashboard")
    print("Platform provider mix   : roles visible / exact ratio not foregrounded")
    print("Legacy delayed binding  : not used by platform pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
