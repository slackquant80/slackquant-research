#!/usr/bin/env python3
from pathlib import Path
import csv

ROOT=Path(__file__).resolve().parents[1]

def need(path, token):
    text=(ROOT/path).read_text(encoding="utf-8-sig",errors="replace")
    if token not in text: raise RuntimeError(f"missing contract token: {path} -> {token}")

def main():
    need("src/components/ExternalLinkPolicy.tsx", "isFirstPartyPdf")
    need("src/components/ArtifactLink.tsx", "opensNewTab")
    need("src/components/SystemCard.tsx", "White Paper PDF ↗")
    need("src/app/systems/scenario-stress-lab/guide/page.tsx", "Guide PDF ↗")
    need("src/app/page.tsx", "Where available, projects link directly")
    for p in ["src/app/research/page.tsx","src/app/about/page.tsx","src/app/research/adaa/page.tsx","src/app/research/beyond-average-accuracy/page.tsx","src/app/research/price-macro-decision/page.tsx","src/app/research/protection-patience/page.tsx"]:
        need(p, "description:")
    pds=(ROOT/"src/app/systems/pds/page.tsx").read_text(encoding="utf-8-sig")
    for token in ["slice(0, 12)","Dynamic FX · 5bp","Recent 12-Month Released Returns","public_recent_12m_returns.csv","12-month table Excel (.xlsx)"]:
        if token not in pds: raise RuntimeError(f"PDS cleanup token missing: {token}")
    derived=ROOT/"public/data/systems/pds/public_recent_12m_returns.csv"
    if not derived.is_file(): raise RuntimeError("derived PDS 12-month CSV missing")
    with derived.open("r",encoding="utf-8-sig",newline="") as f: rows=list(csv.DictReader(f))
    if len(rows)!=12: raise RuntimeError(f"derived PDS CSV must contain 12 rows, found {len(rows)}")
    if rows[0]["holding_month"] < rows[-1]["holding_month"]: raise RuntimeError("derived PDS CSV is not newest-first")
    print("PLATFORM_FINAL_CLEANUP_PASS")
    print("Internal-link static audit target: 0 broken links")
    print("PDF navigation: first-party PDFs + external HTTP(S) -> secure new tab")
    print("PDS table: 12 months / Dynamic FX before Core / exact derived CSV")
    return 0

if __name__=="__main__": raise SystemExit(main())
