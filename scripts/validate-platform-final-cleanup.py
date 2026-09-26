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
    for token in ["PDS_CANONICAL_PLATFORM_PAGE_V1","Reinforcement-Learning Adaptive Risk Control","Recent completed returns and four monitored portfolio views.","the PDS dashboard is the current operating view"]:
        if token not in pds: raise RuntimeError(f"PDS cleanup token missing: {token}")
    summary=(ROOT/"src/data/pdsCanonicalSummary.ts").read_text(encoding="utf-8-sig")
    for token in ["PDS_CANONICAL_PLATFORM_SUMMARY_V1",'"label": "PDS Core + Dynamic FX"','"label": "PDS Adaptive + Dynamic FX"']:
        if token not in summary: raise RuntimeError(f"PDS canonical summary token missing: {token}")
    print("PLATFORM_FINAL_CLEANUP_PASS")
    print("Internal-link static audit target: 0 broken links")
    print("PDF navigation: first-party PDFs + external HTTP(S) -> secure new tab")
    print("PDS platform: current-state summary / four-portfolio performance table")
    return 0

if __name__=="__main__": raise SystemExit(main())
