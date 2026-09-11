#!/usr/bin/env python3
from __future__ import annotations

import csv
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
        "adaa", "protection-patience", "price-macro-decision", "beyond-average-accuracy"
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

    expected_system_slugs = {"pds", "adaa", "f2r", "scenario-stress-lab"}
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
    )
    ids = set(re.findall(r'id:\s*"(QM\d{3})"', methods))
    if ids != {f"QM{i:03d}" for i in range(1, 19)}:
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

    # PDS released-evidence contract.
    # PDS_SYSTEM_DOCUMENTATION_GATE_V1_1
    pds = need(
        "src/app/systems/pds/page.tsx",
        "Recent 12-Month Released Returns",
        "/resources/systems/pds/PDS_System_Documentation_v1.1.pdf",
        "System Documentation ↗",
        "PDS + Dynamic FX (5bp)",
        "historical comparison series only",
        "public_recent_12m_returns.xlsx",
        "public_recent_12m_returns.csv",
    )
    if "Recent released PDS Core and provider monthly returns" in pds:
        raise RuntimeError("stale PDS recent-table wording remains")

    pds_documentation = ROOT / "public/resources/systems/pds/PDS_System_Documentation_v1.1.pdf"
    if not pds_documentation.is_file() or pds_documentation.read_bytes()[:5] != b"%PDF-":
        raise RuntimeError("PDS System Documentation PDF missing or invalid")

    recent = ROOT / "public/data/systems/pds/public_recent_12m_returns.csv"
    with recent.open("r", encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))
    if len(rows) != 12:
        raise RuntimeError(f"PDS recent return CSV must have 12 rows; found {len(rows)}")

    weights = ROOT / "public/data/systems/pds/public_active_core_strategy_weights.csv"
    with weights.open("r", encoding="utf-8-sig", newline="") as f:
        wr = list(csv.DictReader(f))
    if not wr:
        raise RuntimeError("PDS strategy-weight history empty")
    for r in wr:
        if abs(float(r["f2r_weight"]) - 0.25) > 1e-12 or abs(float(r["adaa_weight"]) - 0.75) > 1e-12:
            raise RuntimeError(f"PDS fixed Core regression at {r.get('signal_period')}")

    disclosure = json.loads(need("public/data/systems/pds/public_disclosure_state.json"))
    if disclosure.get("current_decision_state") != "WITHHELD_BY_POLICY":
        raise RuntimeError("PDS current decision disclosure boundary regression")

    # Methods mirror.
    mi = need("public/methods/index.html", "application-driven rather than encyclopedic", "Future additions")
    if "paper-driven rather than encyclopedic" in mi:
        raise RuntimeError("stale Methods principle remains")
    articles = sorted((ROOT / "public/methods").rglob("article.html"))
    if len(articles) != 18:
        raise RuntimeError(f"expected 18 Method articles; found {len(articles)}")

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
    if nav_pages < 37:
        raise RuntimeError(f"Methods platform navigation coverage too small: {nav_pages}")

    if require_build:
        required_out = [
            "out/index.html",
            "out/research/index.html",
            "out/systems/index.html",
            "out/systems/pds/index.html",
            "out/systems/pds/dashboard/index.html",
            "out/systems/adaa/index.html",
            "out/systems/f2r/index.html",
            "out/systems/scenario-stress-lab/index.html",
            "out/systems/scenario-stress-lab/guide/index.html",
            "out/about/index.html",
            "out/sitemap.xml",
            "out/robots.txt",
        ]
        for rel in required_out:
            if not (ROOT / rel).is_file():
                raise RuntimeError(f"built route/artifact missing: {rel}")
        built_doc = ROOT / "out/resources/systems/pds/PDS_System_Documentation_v1.1.pdf"
        if not built_doc.is_file() or built_doc.read_bytes()[:5] != b"%PDF-":
            raise RuntimeError("built PDS System Documentation PDF missing or invalid")

    print("PLATFORM_FULL_REAUDIT_PASS")
    print("Research=4 Systems=4 Methods=18 / exact registry sets=PASS")
    print("External/new-tab policy=PASS; duplicate-arrow scan=PASS")
    print("Methods whole-host first-party navigation=PASS")
    print("PDS 12-month released table / fixed 25-75 Core / protected current state=PASS")
    if require_build:
        print("Built routes / sitemap / robots=PASS")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
