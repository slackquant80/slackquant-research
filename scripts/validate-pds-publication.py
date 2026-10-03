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
PDS_SYSTEM_DOCUMENTATION = APP / "public/resources/systems/pds/PDS_System_Documentation_v1.5.pdf"
PDS_SYSTEM_DOCUMENTATION_SHA256 = "635c0b34badba7078cc01c3c72568aeb034665675eae2c730eef31b8fc29f2e0"


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


def optional_bound_summary(section: Any, *, label: str) -> dict[str, Any] | None:
    if not isinstance(section, dict):
        raise RuntimeError(f"PDS dashboard {label} section must be an object")
    rows = section.get("summary") or []
    if not isinstance(rows, list):
        raise RuntimeError(f"PDS dashboard {label} summary must be a list")
    available = section.get("available") is True
    if available:
        if len(rows) != 1:
            raise RuntimeError(f"PDS dashboard {label} marked available but expected one summary row; found {len(rows)}")
        return rows[0]
    if rows:
        raise RuntimeError(f"PDS dashboard {label} marked unavailable but contains {len(rows)} summary row(s)")
    return None


def optional_one(rows: list[dict[str, Any]], key: str, value: str) -> dict[str, Any] | None:
    found = [r for r in rows if str(r.get(key)) == value]
    if len(found) > 1:
        raise RuntimeError(f"PDS dashboard expected at most one {key}={value!r}; found {len(found)}")
    return found[0] if found else None


def close(a: Any, b: Any, tol: float = 1e-12) -> bool:
    return abs(float(a) - float(b)) <= tol


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
    unavailable = state in {"", "UNAVAILABLE"} and risk_budget is None
    if unavailable:
        return False, None, None
    if state not in {"NORMAL", "DEFENSIVE"}:
        raise RuntimeError(f"PDS Adaptive current state is invalid: {state!r}")
    if risk_budget is None:
        raise RuntimeError(f"PDS Adaptive current state {state!r} is missing risk_budget")
    return True, state, risk_budget


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

    signals = {x for x in [
        str(mark.get("decision_period") or "").strip(),
        str(core_manifest.get("current_core_period") or "").strip(),
        str(meta.get("latest_signal_period") or "").strip(),
    ] if x}
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


def expected_recent_common_months(data: dict[str, Any], limit: int = 12) -> list[str]:
    core_monthly = data["core_daily_performance"]["monthly"]
    fx_monthly = data["fx_operational_sensitivity"]["monthly"]
    core_periods = sorted({
        str(r.get("calendar_month", ""))
        for r in core_monthly
        if str(r.get("series_id")) == "PDS_CORE_FIXED_CURRENT_POLICY"
        and re_match_month(str(r.get("calendar_month", "")))
        and optional_num(r.get("net_return"), label=f"PDS Core monthly return {r.get('calendar_month', '')}") is not None
    })
    if len(core_periods) < limit:
        raise RuntimeError(f"PDS dashboard has fewer than {limit} completed Core months")

    core_period_set = set(core_periods)
    fx_by_month: dict[str, dict[str, Any]] = {}
    for row in fx_monthly:
        month = str(row.get("holding_month", ""))
        if month not in core_period_set:
            continue
        if month in fx_by_month:
            raise RuntimeError(f"PDS dashboard duplicate FX monthly row for {month}")
        if optional_num(row.get("dynamic_costed_return"), label=f"PDS Core Dynamic-FX return {month}") is None:
            raise RuntimeError(f"PDS dashboard missing Core Dynamic-FX return for completed month {month}")
        optional_num(row.get("adaptive_dynamic_costed_return"), label=f"PDS Adaptive Dynamic-FX return {month}")
        fx_by_month[month] = row

    # Anchor the platform to the latest completed Core months. Adaptive is a continuous
    # frozen-policy forward monitor, so a missing completed Adaptive month is a release
    # failure rather than permission to truncate the reader-facing window backward.
    periods = core_periods[-limit:]
    for month in periods:
        row = fx_by_month.get(month)
        if row is None:
            raise RuntimeError(f"PDS dashboard missing Dynamic-FX monthly row for completed month {month}")
        if optional_num(row.get("adaptive_dynamic_costed_return"), label=f"PDS Adaptive Dynamic-FX return {month}") is None:
            raise RuntimeError(
                f"PDS dashboard missing Adaptive forward-monitor return for completed month {month}; "
                "do not silently truncate the completed-month window"
            )
    return periods


def main() -> int:
    systems = need(SYSTEMS)
    systems_page = need(SYSTEMS_PAGE)
    pds = need(PDS_PAGE)
    route = need(PDS_DASHBOARD)
    summary_text = need(SUMMARY)
    binder = need(SUMMARY_BINDER)
    public_html = need(PUBLIC_DASHBOARD)

    if not PDS_SYSTEM_DOCUMENTATION.is_file():
        raise RuntimeError("PDS System Documentation v1.5 PDF is missing")
    if PDS_SYSTEM_DOCUMENTATION.read_bytes()[:5] != b"%PDF-":
        raise RuntimeError("PDS System Documentation v1.5 does not have a PDF signature")
    if hashlib.sha256(PDS_SYSTEM_DOCUMENTATION.read_bytes()).hexdigest() != PDS_SYSTEM_DOCUMENTATION_SHA256:
        raise RuntimeError("PDS System Documentation v1.5 PDF hash mismatch")
    retired_doc = APP / "public/resources/systems/pds/PDS_System_Documentation_v1.4.pdf"
    if retired_doc.exists():
        raise RuntimeError("retired PDS System Documentation v1.4 remains publicly addressable")

    # Platform identity: current operational surface, not a delayed/reduced product.
    for tok in [
        'status: "Public live"',
        'subtitle: "Multi-Strategy Portfolio Integration, Adaptive Risk Control, and Dynamic FX"',
        'publicDashboard: "/systems/pds/dashboard/"',
    ]:
        require(systems, tok, "PDS systems registry")

    for tok in [
        "PDS_CANONICAL_PLATFORM_PAGE_V1",
        "canonicalWording.pds.fxImplementationKicker",
        "canonicalWording.pds.adaptiveRiskMeta",
        "Current Active Core",
        "ADAA + F2R",
        "Dynamic FX Overlay",
        "Recent Completed Monthly Returns",
        "Recent completed returns with their evidence boundaries",
        "Core rows begin in May 2017",
        "Historical prior-parent results are therefore not a current-Core Adaptive track record",
        "longer current-definition Core / Dynamic FX reconstruction beginning in December 2005",
        "the PDS dashboard shows the current decision",
        "/systems/pds/dashboard/",
        "/resources/systems/pds/PDS_System_Documentation_v1.5.pdf",
        "System Documentation ↗",
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
        r"PDS_System_Documentation_v1\.0\.pdf",
        r"PDS_System_Documentation_v1\.1\.pdf",
        r"PDS_System_Documentation_v1\.2\.pdf",
        r"PDS_System_Documentation_v1\.3\.pdf",
        r"PDS_System_Documentation_v1\.4\.pdf",
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
    require(binder, "PREVIEW_UNAVAILABLE_IS_VALID_AT_MONTH_END", "PDS canonical summary binder")
    require(binder, "previewAvailable", "PDS canonical summary binder")
    require(binder, "adaptive_current_binding", "PDS canonical summary binder")
    require(binder, "adaptiveState: string | null;", "PDS canonical summary binder")
    require(binder, "adaptiveRiskBudget: number | null;", "PDS canonical summary binder")

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
        "Public Operating View",
    ]
    for tok in required_dashboard:
        require(public_html, tok, "PDS canonical public dashboard")
    for tok in [
        "const integrityStrip=isPublicSurface?'':`<section class=\"panel section integrity-strip\">",
        "${isPublicSurface?'':`<details class=\"audit-disclosure section\"><summary><span><b>Technical Preview audit</b>",
        "${isPublicSurface?'':`<details class=\"audit-disclosure section\"><summary><span><b>FX technical audit</b>",
        "isPublicSurface?'Public Operating View':'Research dashboard '",
    ]:
        require(public_html, tok, "PDS public reader-surface guard")
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
        "Public Validated Snapshot",
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

    expected_scalar = canonical_clock(data)
    for key, value in expected_scalar.items():
        if str(summary.get(key)) != value:
            raise RuntimeError(f"PDS canonical platform summary stale: {key}={summary.get(key)!r} != {value!r}")

    adaptive_op = data["adaptive"]["operational_summary"][0]
    adaptive_available, adaptive_state, adaptive_risk_budget = adaptive_current_binding(adaptive_op)
    if not adaptive_available:
        if summary.get("adaptiveState") is not None or summary.get("adaptiveRiskBudget") is not None:
            raise RuntimeError("PDS canonical platform summary unavailable Adaptive current state must bind null state/risk budget")
    else:
        if summary.get("adaptiveState") != adaptive_state or not close(summary.get("adaptiveRiskBudget"), adaptive_risk_budget):
            raise RuntimeError("PDS canonical platform summary Adaptive state/risk budget mismatch")

    preview = optional_bound_summary(data.get("pds_forward_preview", {}), label="Forward Preview")
    if preview is None:
        if summary.get("previewAvailable") is not False:
            raise RuntimeError("PDS canonical platform summary must mark unavailable Preview explicitly")
        for key in ("previewSignal", "previewHolding", "previewThrough"):
            if summary.get(key) is not None:
                raise RuntimeError(f"PDS canonical platform summary unavailable Preview must bind {key}=null")
    else:
        if summary.get("previewAvailable") is not True:
            raise RuntimeError("PDS canonical platform summary available Preview is not marked available")
        for key, source_key in [
            ("previewSignal", "preview_signal_month"),
            ("previewHolding", "preview_holding_month"),
            ("previewThrough", "market_data_through_ny_date"),
        ]:
            if str(summary.get(key)) != str(preview[source_key]):
                raise RuntimeError(f"PDS canonical platform summary Preview mismatch: {key}")

    adaptive_preview = optional_bound_summary(data.get("adaptive_preview", {}), label="Adaptive Preview")
    if adaptive_preview is None:
        if summary.get("adaptivePreviewAvailable") is not False:
            raise RuntimeError("PDS canonical platform summary must mark unavailable Adaptive Preview explicitly")
        if summary.get("adaptivePreviewState") is not None or summary.get("adaptivePreviewRiskBudget") is not None:
            raise RuntimeError("PDS canonical platform summary unavailable Adaptive Preview must bind null state/risk budget")
    else:
        if summary.get("adaptivePreviewAvailable") is not True:
            raise RuntimeError("PDS canonical platform summary available Adaptive Preview is not marked available")
        if summary.get("adaptivePreviewState") != str(adaptive_preview["adaptive_state"]) or not close(summary.get("adaptivePreviewRiskBudget"), adaptive_preview["risk_budget"]):
            raise RuntimeError("PDS canonical platform summary Adaptive Preview mismatch")

    fx_state = data["fx_operational_sensitivity"]["state"]
    off_fx = one(fx_state, "state_type", "OFFICIAL_DECISION_SENSITIVITY")
    prev_fx = optional_one(fx_state, "state_type", "INTRAMONTH_PREVIEW")
    for key, value in [
        ("officialFxHedge", off_fx["hedge_ratio"]),
        ("officialFxZscore", off_fx["zscore"]),
    ]:
        if not close(summary.get(key), value):
            raise RuntimeError(f"PDS canonical platform summary FX mismatch: {key}")
    if prev_fx is None:
        if summary.get("previewFxAvailable") is not False:
            raise RuntimeError("PDS canonical platform summary must mark unavailable FX Preview explicitly")
        if summary.get("previewFxHedge") is not None or summary.get("previewFxZscore") is not None:
            raise RuntimeError("PDS canonical platform summary unavailable FX Preview must bind null hedge/z-score")
    else:
        if summary.get("previewFxAvailable") is not True:
            raise RuntimeError("PDS canonical platform summary available FX Preview is not marked available")
        for key, value in [("previewFxHedge", prev_fx["hedge_ratio"]), ("previewFxZscore", prev_fx["zscore"])]:
            if not close(summary.get(key), value):
                raise RuntimeError(f"PDS canonical platform summary FX mismatch: {key}")

    recent = summary.get("recentMonthlyReturns", [])
    if len(recent) != 12:
        raise RuntimeError(f"PDS canonical platform summary recent monthly return row count mismatch: {len(recent)}")
    fx_monthly = {str(r.get("holding_month")): r for r in data["fx_operational_sensitivity"]["monthly"]}
    common_periods = expected_recent_common_months(data, 12)
    if [str(r.get("holdingMonth")) for r in recent] != common_periods:
        raise RuntimeError("PDS canonical platform summary recent completed-month lineage mismatch")
    for row in recent:
        month = str(row["holdingMonth"])
        source = fx_monthly.get(month)
        if source is None:
            raise RuntimeError(f"PDS canonical platform summary FX monthly source missing: {month}")
        source_core = optional_num(source.get("dynamic_costed_return"), label=f"PDS Core Dynamic-FX return {month}")
        source_adaptive = optional_num(source.get("adaptive_dynamic_costed_return"), label=f"PDS Adaptive Dynamic-FX return {month}")
        if source_core is None or source_adaptive is None or not close(row["coreDynamicFx"], source_core) or not close(row["adaptiveDynamicFx"], source_adaptive):
            raise RuntimeError(f"PDS canonical platform summary recent monthly return mismatch: {month}")

    core_rows = data["core_daily_performance"]["summary"]
    fx_rows = data["fx_operational_sensitivity"]["summary"]
    adaptive_rows = data["adaptive"].get("monitoring_summary") or data["adaptive"].get("historical_summary") or []
    if len(adaptive_rows) != 1:
        raise RuntimeError(f"PDS Adaptive monitoring summary row count mismatch: {len(adaptive_rows)}")
    adaptive_row = adaptive_rows[0]
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
    dashboard_bytes = PUBLIC_DASHBOARD.read_bytes().replace(b"\r\n", b"\n")
    dashboard_sha = hashlib.sha256(dashboard_bytes).hexdigest()
    require(route, dashboard_sha[:16], "PDS dashboard route cache key")
    require(route, "/assets/systems/pds/Portfolio_Decision_System_Public.html", "PDS dashboard route")

    print("PDS_PUBLICATION_VALIDATION_PASS")
    print(f"Canonical current clock : {summary['officialSignal']} -> {summary['holdingMonth']} / through {summary['markThrough']}")
    if summary.get("adaptiveState") is not None and summary.get("adaptiveRiskBudget") is not None:
        print(f"Adaptive state          : {summary['adaptiveState']} / risk budget {summary['adaptiveRiskBudget']:.0%}")
    else:
        print("Adaptive state          : unavailable until current execution/MTD clock opens")
    print("Four-portfolio summary  : exact parity with current public dashboard")
    print("Platform provider mix   : roles visible / exact ratio not foregrounded")
    print("Legacy delayed binding  : not used by platform pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
