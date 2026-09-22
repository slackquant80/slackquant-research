#!/usr/bin/env python3
from __future__ import annotations

import csv
import hashlib
import json
import re
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def need(rel: str, *tokens: str) -> str:
    p = ROOT / rel
    if not p.is_file():
        raise RuntimeError(f"missing required file: {rel}")
    s = p.read_text(encoding="utf-8-sig", errors="replace")
    for token in tokens:
        if token not in s:
            raise RuntimeError(f"{rel}: missing contract token: {token}")
    return s

def main() -> int:
    require_build = "--require-build" in sys.argv[1:]

    expected_research_slugs = {
        "adaa", "protection-patience", "price-macro-decision", "beyond-average-accuracy",
        "second-opinion-portfolio"
    }
    research = need(
        "src/data/research.ts",
        *[f'slug: "{slug}"' for slug in sorted(expected_research_slugs)],
    )
    research_slugs = re.findall(
        r'(?m)^\s*slug:\s*"([^"]+)"\s*,?\s*$',
        research,
    )
    if len(research_slugs) != len(expected_research_slugs) or set(research_slugs) != expected_research_slugs:
        raise RuntimeError(
            "Research registry mismatch: "
            f"expected={sorted(expected_research_slugs)} found={research_slugs}"
        )

    expected_system_slugs = {"pds", "adaa", "f2r", "equity-alpha", "scenario-stress-lab"}
    systems = need(
        "src/data/systems.ts",
        *[f'slug: "{slug}"' for slug in sorted(expected_system_slugs)],
    )
    system_slugs = re.findall(
        r'(?m)^\s*slug:\s*"([^"]+)"\s*,?\s*$',
        systems,
    )
    if len(system_slugs) != len(expected_system_slugs) or set(system_slugs) != expected_system_slugs:
        raise RuntimeError(
            "Systems registry mismatch: "
            f"expected={sorted(expected_system_slugs)} found={system_slugs}"
        )

    methods = need(
        "src/data/methods.ts",
        '"adaa-system"',
        '"f2r-system"',
        '"pds-system"',
        '"scenario-stress-lab"',
        '"equity-alpha-system"',
        'QM026',
        'QM027',
        'QM028',
        'QM029',
    )
    ids = set(re.findall(r'id:\s*"(QM\d{3})"', methods))
    expected_method_ids = {f"QM{i:03d}" for i in range(1, 21)} | {"QM024", "QM025", "QM026", "QM027", "QM028", "QM029"}
    if ids != expected_method_ids:
        raise RuntimeError(f"Methods registry mismatch: {sorted(ids)}")

    # Core UI/link/source contracts.
    home = need(
        "src/app/page.tsx",
        'href="/systems/pds/dashboard/"',
        'target="_blank"',
        'data-sq-dashboard-app="true"',
        "Open PDS Dashboard ↗",
    )
    stress = need(
        "src/app/systems/scenario-stress-lab/page.tsx",
        "Open Dashboard ↗",
        "Open PDF ↗",
    )
    if "Open Live Dashboard" in stress:
        raise RuntimeError("Stress Lab stale primary CTA")
    guide = need(
        "src/app/systems/scenario-stress-lab/guide/page.tsx",
        '<main lang="ko">',
        "Open Dashboard ↗",
        "Guide PDF ↗",
    )
    if 'className="btn primary ext"' in guide:
        raise RuntimeError("Stress Lab guide duplicate-arrow regression")

    need(
        "src/app/systems/adaa/page.tsx",
        "Open Dashboard ↗",
    )
    need(
        "src/app/systems/f2r/page.tsx",
        "Open Dashboard ↗",
        "GitHub Repository",
    )
    equity_alpha = need(
        "src/app/systems/equity-alpha/page.tsx",
        "Open Dashboard ↗",
        "REX2",
        "Ridge + ElasticNet",
        "Chronos-2",
        "ACWI defines the active-risk frame",
        "Preview",
        'target="_blank"',
        'rel="noopener noreferrer"',
    )
    if '<Link\n                className="btn primary"' in equity_alpha:
        raise RuntimeError("Equity Alpha dashboard CTA must use an explicit external anchor")
    for token in (
        "Open Dashboard ↗",
        "Universe Expansion Audit",
        "MethodsUsed",
        'researchSlug={item.methodsKey ?? item.slug}',
    ):
        if token not in equity_alpha:
            raise RuntimeError(f"Equity Alpha editorial/method contract missing: {token}")
    if "Open Equity Alpha Dashboard" in equity_alpha:
        raise RuntimeError("Equity Alpha top dashboard CTA wording must match peer systems")
    need(
        "src/data/systems.ts",
        'slug: "equity-alpha"',
        'systemGroup: "equity-alpha"',
        'methodsKey: "equity-alpha-system"',
        'publicDashboard: "/dashboards/equity-alpha/"',
        'title: "Equity Alpha Strategies"',
        'kicker: "Portfolio operating layer"',
        'kicker: "Investment strategy layer"',
        'kicker: "Risk & analytics layer"',
    )
    need(
        "src/app/systems/page.tsx",
        "Three-layer system architecture",
        "Clear authority. Distinct strategy domains.",
        "Multi-Asset Strategies",
        "Equity Alpha Strategies",
    )
    need(
        "src/components/SystemCard.tsx",
        'target="_blank"',
        'rel="noopener noreferrer"',
        "data-sq-dashboard-app",
    )
    need(
        "src/components/ExternalLinkPolicy.tsx",
        '"/systems/pds/dashboard/"',
        '"/dashboards/equity-alpha/"',
        'anchor.dataset.sqDashboardApp === "true"',
        'secureNewTabAnchor(anchor)',
    )
    need(
        "public/dashboards/equity-alpha/index.html",
        "Equity Alpha",
        "assets/styles.css",
        "data/dashboard_data.js",
        "data/live_overlay.js",
    )

    # RESEARCH_DETAIL_HERO_CONSISTENCY_GATE_V1
    need(
        "src/app/about/page.tsx",
        "Explore Investment Research",
        "Explore Academic Research",
        "/research/#investment-research-heading",
        "/research/#academic-research-heading",
    )
    need(
        "src/components/ResearchPaperHero.tsx",
        "Open SSRN Record",
        "Replication Repository",
        "Research Dashboard",
        "paper-hero-actions",
    )
    research_detail_pages = [
        "src/app/research/adaa/page.tsx",
        "src/app/research/protection-patience/page.tsx",
        "src/app/research/price-macro-decision/page.tsx",
        "src/app/research/beyond-average-accuracy/page.tsx",
        "src/app/research/second-opinion-portfolio/page.tsx",
    ]
    for rel in research_detail_pages:
        detail = need(rel, "ResearchPaperHero")
        if '<section className="paper-hero">' in detail:
            raise RuntimeError(f"bespoke research-detail hero remains: {rel}")
    need(
        "src/app/research/adaa/page.tsx",
        'label: "ADAA System"',
    )
    need(
        "src/app/research/price-macro-decision/page.tsx",
        'label: "F2R System"',
    )
    need(
        "src/app/research/second-opinion-portfolio/page.tsx",
        'label: "F2R System"',
        "10.5281/zenodo.22750810",
    )
    need(
        "src/data/research.ts",
        'ssrnId: "7460378"',
        'https://doi.org/10.5281/zenodo.22750810',
    )
    # F2R_MODEL_ADOPTION_SELECTED_EXHIBITS_GATE_V1
    need(
        "src/app/research/second-opinion-portfolio/page.tsx",
        "EvidenceFigure",
        "Selected Exhibits",
        "full-resolution publication-aligned image",
    )
    need(
        "src/data/research.ts",
        'id: "forecast-error-vs-portfolio-sharpe"',
        'id: "ablation-cagr"',
        'id: "boundary-decision-attribution"',
        "/assets/f2r-model-adoption/Figure_1_Forecast_Error_vs_Portfolio_Sharpe.png",
        "/assets/f2r-model-adoption/Figure_2_Ablation_Delta_CAGR.png",
        "/assets/f2r-model-adoption/Figure_4_Boundary_Decision_Attribution.png",
    )
    for rel in (
        "public/assets/f2r-model-adoption/Figure_1_Forecast_Error_vs_Portfolio_Sharpe.png",
        "public/assets/f2r-model-adoption/Figure_2_Ablation_Delta_CAGR.png",
        "public/assets/f2r-model-adoption/Figure_4_Boundary_Decision_Attribution.png",
    ):
        figure_asset = ROOT / rel
        if not figure_asset.is_file() or figure_asset.stat().st_size < 10000:
            raise RuntimeError(f"F2R model-adoption selected exhibit missing/invalid: {rel}")


    # PDS canonical operational-platform contract.
    # PDS_CANONICAL_PLATFORM_GATE_V1
    pds = need(
        "src/app/systems/pds/page.tsx",
        "PDS_CANONICAL_PLATFORM_PAGE_V1",
        "Reinforcement-Learning Adaptive Risk Control",
        "Current Active Core",
        "ADAA + F2R",
        "Dynamic FX Overlay",
        "Recent Completed Monthly Returns",
        "Recent completed returns and four monitored portfolio views.",
        "validated public operating view",
        "/resources/systems/pds/PDS_System_Documentation_v1.2.pdf",
        "System Documentation ↗",
    )
    for forbidden in ("25/75", "F2R 25%", "ADAA 75%", "latestStrategyWeights", "public_active_core_strategy_weights.csv", "DELAYED PUBLIC", "protected current decision state"):
        if forbidden in pds:
            raise RuntimeError(f"PDS platform landing regression: {forbidden}")
    for required in (
        "the platform emphasizes their roles and system architecture rather than reducing the design to a single allocation ratio.",
        "the PDS dashboard is the validated public operating view.",
    ):
        if required not in pds:
            raise RuntimeError(f"PDS current-platform disclosure missing: {required}")

    pds_summary = need(
        "src/data/pdsCanonicalSummary.ts",
        "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
        '"recentMonthlyReturns": [',
        '"label": "PDS Core + Dynamic FX"',
        '"label": "PDS Core"',
        '"label": "PDS Adaptive + Dynamic FX"',
        '"label": "PDS Adaptive"',
        '"officialSignal":',
        '"markThrough":',
        '"adaptiveState":',
    )
    need(
        "scripts/bind-pds-canonical-summary.py",
        "PDS_CANONICAL_PLATFORM_SUMMARY_BIND_PASS",
        "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
        "ADAPTIVE_DYNAMIC_COSTED",
    )
    systems_index = need(
        "src/app/systems/page.tsx",
        'import { pdsCanonicalSummary } from "@/data/pdsCanonicalSummary";',
        "pdsCanonicalSummary.markThrough",
        "Operational data through",
    )
    if "pdsPublicSnapshot" in systems_index or "pdsPublicSnapshot" in pds:
        raise RuntimeError("PDS platform still depends on legacy delayed snapshot binding")

    pds_documentation = ROOT / "public/resources/systems/pds/PDS_System_Documentation_v1.2.pdf"
    if not pds_documentation.is_file() or pds_documentation.read_bytes()[:5] != b"%PDF-":
        raise RuntimeError("PDS System Documentation PDF missing or invalid")

    public_dashboard = need(
        "public/assets/systems/pds/Portfolio_Decision_System_Public.html",
        "window.PDS_PUBLIC_SURFACE=true",
        "PM Cockpit",
        "<h2>Adaptive</h2>",
        "<h2>Preview</h2>",
        "<h2>FX</h2>",
        "<h2>Performance</h2>",
        "<h2>Portfolio</h2>",
        "Latest admissible FX observation",
    )
    for forbidden in ("DELAYED PUBLIC", "_LOCAL_PRIVATE_DATA", "_LOCAL_RUNTIME", "_LOCAL_CACHE", "MACRO_FORECAST_ALLOCATION", "MFA_PRICE_ONLY", "Latest raw FX observation"):
        if forbidden.casefold() in public_dashboard.casefold():
            raise RuntimeError(f"PDS canonical public dashboard stale/private leakage: {forbidden}")
    receipt = json.loads(need("public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"))
    if receipt.get("status") != "PASS" or receipt.get("public_policy") != "CANONICAL_LOCAL_INFORMATION__ENVIRONMENT_ONLY_SUPPRESSED" or not receipt.get("canonical_current_values_embedded"):
        raise RuntimeError("PDS canonical public dashboard receipt is not current-policy PASS")

    # F2R_CURRENT_ARCHITECTURE_GATE_V2_1
    f2r = need(
        "src/app/systems/f2r/page.tsx",
        "Chronos-2 pretrained time-series intelligence",
        "Heterogeneous forecasts, one common decision space",
        "Public disclosure names the forecasting technologies and the decision architecture.",
        "/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf",
        "System Documentation ↗",
    )
    for forbidden in ("252-session", "C3_REX_SCORE_CHRONOS20", "C3_REX", "exact contribution weight"):
        if forbidden in f2r:
            raise RuntimeError(f"F2R public recipe-protection regression: {forbidden}")
    f2r_documentation = ROOT / "public/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf"
    if not f2r_documentation.is_file() or f2r_documentation.read_bytes()[:5] != b"%PDF-":
        raise RuntimeError("F2R System Documentation v2.1 PDF missing or invalid")
    legacy_f2r_doc = ROOT / "public/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf"
    if legacy_f2r_doc.exists():
        raise RuntimeError("legacy F2R System Documentation v1.0 remains on the primary public resource surface")
    need(
        "src/app/systems/adaa/page.tsx",
        "Decision Diversification: diversify the",
        "Diversify the decision process before diversifying the portfolio",
        "not the exact construction",
        "19-source-series market snapshot",
        "18 final decision assets plus the EWJ history bridge",
        "public Thin-Shiny",
        "public sessions do not acquire Yahoo/FRED/FX data",
    )
    need(
        "src/app/systems/pds/page.tsx",
        "Multi-strategy Core, RL-assisted adaptive risk control, and Dynamic FX.",
        "Chronos-2 pretrained time-series intelligence",
        "ADAA and F2R are the strategy systems currently admitted to the Active Core.",
    )

    # Methods mirror.
    mi = need(
        "public/methods/index.html",
        "application-driven rather than encyclopedic",
        "Future additions",
        "QM026",
        "QM027",
        "QM028",
        "QM029",
    )
    need(
        "public/methods/80_DATA_RESEARCH_DESIGN/QM026_POINT_IN_TIME_DYNAMIC_UNIVERSE/article.html",
        "Point-in-Time Dynamic Universe Construction",
        "Separate monthly variation from candidate-pool expansion",
        "Equity Alpha",
    )
    need(
        "public/methods/40_PORTFOLIO_METHODS/QM027_CROSS_SECTIONAL_RANKING_TOPK/article.html",
        "Cross-Sectional Ranking, Top-K Selection, and Hold Buffers",
        "Add an incumbent hold buffer",
        "Equity Alpha",
    )
    need(
        "public/methods/60_MACHINE_LEARNING/QM028_RL_ADAPTIVE_RISK_CONTROL/article.html",
        "Reinforcement Learning for Adaptive Portfolio Risk Control",
        "https://research.slackquant.com/systems/pds/",
    )
    need(
        "public/methods/40_PORTFOLIO_METHODS/QM029_DYNAMIC_CURRENCY_HEDGING/article.html",
        "Dynamic Currency Hedging and FX Overlay Accounting",
        "https://research.slackquant.com/systems/pds/",
        "https://research.slackquant.com/systems/adaa/",
    )
    if "paper-driven rather than encyclopedic" in mi:
        raise RuntimeError("stale Methods principle remains")
    articles = sorted((ROOT / "public/methods").rglob("article.html"))
    if len(articles) != 26:
        raise RuntimeError(f"expected 26 Method articles; found {len(articles)}")

    old_filter = 'var filterRegex = new RegExp("https:\\/\\/research\\.slackquant\\.com\\/methods\\/");'
    new_filter = 'var filterRegex = new RegExp("https:\\/\\/research\\.slackquant\\.com\\/");'
    nav_pages = 0
    for p in (ROOT / "public/methods").rglob("*.html"):
        s = p.read_text(encoding="utf-8-sig", errors="replace")
        if 'class="sq-platform-nav-links"' not in s:
            continue
        nav_pages += 1
        if old_filter in s or new_filter not in s:
            raise RuntimeError(f"Methods first-party navigation filter regression: {p.relative_to(ROOT)}")
    if nav_pages < 45:
        raise RuntimeError(f"Methods platform navigation coverage too small: {nav_pages}")

    if require_build:
        required_out = [
            "out/index.html",
            "out/research/index.html",
            "out/research/second-opinion-portfolio/index.html",
            "out/systems/index.html",
            "out/systems/pds/index.html",
            "out/systems/pds/dashboard/index.html",
            "out/systems/adaa/index.html",
            "out/systems/f2r/index.html",
            "out/systems/equity-alpha/index.html",
            "out/dashboards/equity-alpha/index.html",
            "out/dashboards/equity-alpha/assets/app.js",
            "out/dashboards/equity-alpha/assets/styles.css",
            "out/dashboards/equity-alpha/data/dashboard_data.js",
            "out/dashboards/equity-alpha/data/live_overlay.js",
            "out/systems/scenario-stress-lab/index.html",
            "out/systems/scenario-stress-lab/guide/index.html",
            "out/about/index.html",
            "out/sitemap.xml",
            "out/robots.txt",
        ]
        for rel in required_out:
            if not (ROOT / rel).is_file():
                raise RuntimeError(f"built route/artifact missing: {rel}")
        built_doc = ROOT / "out/resources/systems/pds/PDS_System_Documentation_v1.2.pdf"
        if not built_doc.is_file() or built_doc.read_bytes()[:5] != b"%PDF-":
            raise RuntimeError("built PDS System Documentation PDF missing or invalid")
        built_f2r_doc = ROOT / "out/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf"
        if not built_f2r_doc.is_file() or built_f2r_doc.read_bytes()[:5] != b"%PDF-":
            raise RuntimeError("built F2R System Documentation v2.1 PDF missing or invalid")

        built_pds = (ROOT / "out/systems/pds/index.html").read_text(encoding="utf-8-sig", errors="replace")
        for token in ["Recent Completed Monthly Returns", "Core + Dynamic FX", "Adaptive + Dynamic FX"]:
            if token not in built_pds:
                raise RuntimeError(f"built PDS recent-month chart missing token: {token}")

    print("PLATFORM_FULL_REAUDIT_PASS")
    print("Research=5 Systems=5 Methods=26 / exact registry sets=PASS")
    print("External/new-tab policy=PASS; duplicate-arrow scan=PASS")

    for stale in [
        "public/methods/80_DATA_RESEARCH_DESIGN/QM021_POINT_IN_TIME_DYNAMIC_UNIVERSE",
        "public/methods/40_PORTFOLIO_METHODS/QM022_CROSS_SECTIONAL_RANKING_TOPK",
    ]:
        if (ROOT / stale).exists():
            raise RuntimeError(f"Stale pre-canonical Equity Alpha Method path must not exist: {stale}")

    print("Methods whole-host first-party navigation=PASS")
    print("PDS canonical operational platform / four-portfolio summary / current dashboard=PASS")
    print("F2R v2.1 / Chronos-2 architecture-visible / recipe-protected=PASS")
    print("PDS / ADAA / F2R / Equity Alpha system-page editorial positioning + three-layer taxonomy=PASS")
    print("About research links / shared research-detail hero=PASS")
    if require_build:
        print("Built routes / sitemap / robots=PASS")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
