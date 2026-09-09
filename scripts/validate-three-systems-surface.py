#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import socket
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass, asdict
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parents[1]
CANONICAL = "https://research.slackquant.com"
SYSTEM_METHODS = {
    "adaa": ["QM007", "QM009", "QM010", "QM011", "QM014"],
    "f2r": ["QM001", "QM002", "QM003", "QM007", "QM009", "QM013"],
    "pds": ["QM007", "QM008", "QM009", "QM011", "QM013", "QM014"],
    "scenario-stress-lab": ["QM001", "QM003", "QM006", "QM015", "QM016", "QM017", "QM018"],
}
SYSTEM_ROUTES = {k: f"{CANONICAL}/systems/{k}/" for k in SYSTEM_METHODS}
SYSTEM_PAGE_FILES = {k: ROOT / f"src/app/systems/{k}/page.tsx" for k in SYSTEM_METHODS}

@dataclass
class Check:
    name: str
    status: str
    detail: str

class HeadParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical: list[str] = []
        self.title = ""
        self.description = ""
        self._in_title = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "link" and a.get("rel") == "canonical" and a.get("href"):
            self.canonical.append(a["href"])
        elif tag == "meta" and a.get("name") == "description":
            self.description = a.get("content", "")
        elif tag == "title":
            self._in_title = True
    def handle_endtag(self, tag):
        if tag == "title": self._in_title = False
    def handle_data(self, data):
        if self._in_title: self.title += data


def text(path: Path) -> str:
    if not path.is_file():
        raise FileNotFoundError(path)
    return path.read_text(encoding="utf-8-sig", errors="replace")


def add(checks: list[Check], name: str, ok: bool, detail: str, fail_detail: str | None = None):
    checks.append(Check(name, "PASS" if ok else "FAIL", detail if ok else (fail_detail or detail)))


def parse_methods(ts: str):
    by_id: dict[str, str] = {}
    for m in re.finditer(r'id:\s*"(QM\d{3})"[\s\S]{0,650}?href:\s*"([^"]+)"', ts):
        by_id[m.group(1)] = m.group(2)
    return by_id


def expected_out_file(route: str) -> Path:
    if route == "/": return ROOT / "out/index.html"
    if route.endswith(".html"):
        return ROOT / "out" / route.lstrip("/")
    return ROOT / "out" / route.lstrip("/") / "index.html"


def audit_static(require_build: bool) -> list[Check]:
    c: list[Check] = []
    systems = text(ROOT / "src/data/systems.ts")
    card = text(ROOT / "src/components/SystemCard.tsx")
    policy = text(ROOT / "src/components/ExternalLinkPolicy.tsx")
    methods = text(ROOT / "src/data/methods.ts")
    methods_used = text(ROOT / "src/components/MethodsUsed.tsx")
    sitemap_src = text(ROOT / "src/app/sitemap.ts")
    robots_src = text(ROOT / "src/app/robots.ts")
    layout = text(ROOT / "src/app/layout.tsx")

    identities = {
        "PDS registry identity": ['slug: "pds"', 'systemGroup: "portfolio-decision"', 'prominence: "flagship"', 'status: "Public architecture · protected current decision state"'],
        "ADAA registry identity": ['slug: "adaa"', 'title: "ADAA"', 'systemGroup: "portfolio-strategy"', 'status: "Public live"'],
        "F2R formal identity": ['slug: "f2r"', 'title: "Forecast-to-Rank Allocation (F2R)"', 'subtitle: "Machine-Learning Cross-Asset Portfolio Strategy"', 'systemGroup: "portfolio-strategy"'],
    }
    for name, toks in identities.items(): add(c, name, all(t in systems for t in toks), "; ".join(toks))
    add(c, "Stable live release labels", 'dateLabel: "Live release series"' in systems and "Updated August 2026" not in systems and "Updated August 30, 2026" not in systems, "ADAA/F2R use stable release labels")
    add(c, "ADAA repository semantics", "replicationRepository:" in systems and not re.search(r'slug:\s*"adaa"[\s\S]{0,1500}?deploymentRepository:', systems), "ADAA replication repo separated from deployment semantics")

    for slug, p in SYSTEM_PAGE_FILES.items(): add(c, f"{slug.upper()} system route source", p.is_file(), str(p.relative_to(ROOT)))
    add(c, "PDS dashboard route source", (ROOT / "src/app/systems/pds/dashboard/page.tsx").is_file(), "src/app/systems/pds/dashboard/page.tsx")

    add(c, "Three-system card CTA wording", "Open Dashboard ↗" in card and "Open Live Dashboard" not in card and "Public Dashboard →" not in card, "SystemCard uses Open Dashboard ↗")
    for slug in ("pds", "adaa", "f2r", "scenario-stress-lab"):
        s = text(SYSTEM_PAGE_FILES[slug])
        add(c, f"{slug.upper()} page CTA wording", "Open Dashboard ↗" in s, "Open Dashboard ↗")
    pds = text(SYSTEM_PAGE_FILES["pds"])
    add(c, "PDS approved same-origin new-tab marker", 'href="/systems/pds/dashboard/"' in pds and 'target="_blank"' in pds and 'rel="noopener noreferrer"' in pds and 'data-sq-dashboard-app="true"' in pds, "PDS dashboard opens securely in new tab")
    add(c, "ExternalLinkPolicy approved first-party exceptions", all(x in policy for x in ["FIRST_PARTY_NEW_TAB_APP_PATHS", "isFirstPartyPdf", ".pdf", "/systems/pds/dashboard/", "anchor.dataset.sqDashboardApp", "noopener", "noreferrer", "normalizeFirstPartyAnchor"]), "PDF documents plus the marked dashboard application route are eligible")

    unauthorized = []
    for p in (ROOT / "src").rglob("*.tsx"):
        s = text(p)
        for m in re.finditer(r'<(?:a|Link)\b[^>]{0,900}>', s, re.S):
            tag = m.group(0)
            if 'target="_blank"' not in tag: continue
            href_m = re.search(r'href="(/[^"]+)"', tag)
            if not href_m: continue
            href = href_m.group(1)
            if href == "/systems/pds/dashboard/" and 'data-sq-dashboard-app="true"' in tag: continue
            if href.lower().endswith(".pdf"): continue
            unauthorized.append(f"{p.relative_to(ROOT)} -> {href}")
    add(c, "No unauthorized same-origin new-tab", not unauthorized, "none", "; ".join(unauthorized[:8]))

    expected_map_literals = {
        "adaa-system": '["QM007", "QM009", "QM010", "QM011", "QM014"]',
        "f2r-system": '["QM001", "QM002", "QM003", "QM007", "QM009", "QM013"]',
        "pds-system": '["QM007", "QM008", "QM009", "QM011", "QM013", "QM014"]',
    }
    for key, arr in expected_map_literals.items(): add(c, f"Method mapping {key}", f'"{key}": {arr}' in methods, arr)
    add(c, "Explicit system method context", "systemMethodContext" in methods and "getMethodContextForArtifact" in methods and 'replace("this research"' not in methods_used, "artifact-specific context function used")
    sys_context_block = methods.split("export const quantitativeMethods",1)[0]
    add(c, "No paper-only wording in system contexts", not re.search(r"(?i)\bpaper\b|this research|used in the paper", sys_context_block), "systemMethodContext is system-native")

    hrefs = parse_methods(methods)
    add(c, "Method registry completeness", len(hrefs) == 18 and set(hrefs) == {f"QM{i:03d}" for i in range(1,19)}, f"{len(hrefs)} method hrefs")
    missing_dest = []
    reverse_missing = []
    canonical_missing = []
    meta_missing = []
    for mid, href in hrefs.items():
        dest = ROOT / "public" / href.lstrip("/")
        if not dest.is_file():
            missing_dest.append(f"{mid}:{href}")
            continue
        hp = HeadParser(); hp.feed(text(dest))
        if not hp.canonical: canonical_missing.append(mid)
        if not hp.title.strip() or not hp.description.strip(): meta_missing.append(mid)
    add(c, "Method physical destinations", not missing_dest, f"{len(hrefs)} article destinations exist", "; ".join(missing_dest))
    add(c, "Rendered Method canonical tags", not canonical_missing, "all Method articles carry canonical", ", ".join(canonical_missing))
    add(c, "Rendered Method title/description", not meta_missing, "all Method articles have title + description", ", ".join(meta_missing))
    for slug, mids in SYSTEM_METHODS.items():
        route = SYSTEM_ROUTES[slug]
        for mid in mids:
            href = hrefs.get(mid)
            if not href: reverse_missing.append(f"{mid}->{slug}:no registry href"); continue
            dest = ROOT / "public" / href.lstrip("/")
            if not dest.is_file() or route not in text(dest): reverse_missing.append(f"{mid}->{slug}")
    add(c, "Method reverse system usage", not reverse_missing, "all mapped Methods backlink to Systems", ", ".join(reverse_missing))

    add(c, "Sitemap automatic Method discovery", all(x in sitemap_src for x in ["collectMethodArticleRoutes", 'entry.name === "article.html"', "...collectMethodArticleRoutes()"]), "future rendered QM articles auto-discovered")
    add(c, "Canonical sitemap fallback", 'https://research.slackquant.com' in sitemap_src and 'http://localhost:3000' not in sitemap_src, "production canonical fallback")
    add(c, "Robots sitemap contract", 'https://research.slackquant.com' in robots_src and 'sitemap: `${siteUrl}/sitemap.xml`' in robots_src, "robots always points to root sitemap")
    add(c, "Metadata base canonical fallback", 'https://research.slackquant.com' in layout and "metadataBase" in layout, "layout metadataBase uses production fallback")

    page_sources = list((ROOT / "src/app").rglob("page.tsx"))
    missing_source_canon = []
    for p in page_sources:
        s = text(p)
        if "export const metadata" in s and "alternates" not in s:
            missing_source_canon.append(str(p.relative_to(ROOT)))
    add(c, "Next page canonical metadata", not missing_source_canon, "metadata-bearing pages define alternates.canonical", "; ".join(missing_source_canon))

    globals_css = text(ROOT / "src/app/globals.css")
    responsive_grid = re.search(r"\.detail-layout\s*>\s*\*\s*\{[^}]*min-width\s*:\s*0", globals_css, re.S)
    add(c, "Research detail mobile min-width containment", responsive_grid is not None, "detail-layout children may shrink below intrinsic content width")

    method_css_files = list((ROOT / "public/methods/site_libs/bootstrap").glob("bootstrap-*.min.css"))
    method_css = "\n".join(text(x) for x in method_css_files)
    table_mobile = "table.table{display:block;width:100%;max-width:100%;overflow-x:auto" in method_css
    math_mobile = ".math.display{display:block;max-width:100%;overflow-x:auto" in method_css
    add(c, "Rendered Methods mobile overflow containment", bool(method_css_files) and table_mobile and math_mobile, "wide tables and display math use local horizontal scroll on small viewports")

    adaa = text(SYSTEM_PAGE_FILES["adaa"])
    adaa_required = ["refreshes source data before deployment", "canonical 19-ETF", "public-safe bundled snapshot", "Public Shiny sessions auto-run", "not the authority that refreshes source data"]
    add(c, "ADAA v3.93 public runtime parity", all(x in adaa for x in adaa_required), "pre-deploy refresh → validated bundle → public consumer")
    adaa_forbidden = ["live implementation refreshes current data", "public session refreshes source data", "public Shiny refreshes source data"]
    add(c, "No stale ADAA runtime authority wording", not any(x.lower() in adaa.lower() for x in adaa_forbidden), "none")

    f2r = text(SYSTEM_PAGE_FILES["f2r"])
    add(c, "F2R identity on page", "Forecast-to-Rank Allocation (F2R)" in systems and "item.title" in f2r, "registry-driven formal identity")
    pds_disclosure = ROOT / "public/data/systems/pds/public_disclosure_state.json"
    if pds_disclosure.is_file():
        d = json.loads(text(pds_disclosure))
        ok = d.get("current_decision_state") == "WITHHELD_BY_POLICY" and all(d.get(k) == "PRIVATE_NOT_EXPORTED" for k in ["intramonth_preview","shadow_monitor_state","current_fx_overlay","account_holdings"])
        add(c, "PDS disclosure boundary", ok, "current decision/preview/shadow/current FX/account holdings protected")
    else: add(c, "PDS disclosure boundary", False, "public disclosure receipt missing")

    public_system_text = "\n".join(text(p) for p in SYSTEM_PAGE_FILES.values())
    leak = re.search(r'(?i)\bMFA\b|macro\s+forecast\s+allocation|_LOCAL_PRIVATE_DATA|[A-Z]:\\', public_system_text)
    add(c, "No private/internal identifier leakage", leak is None, "none", leak.group(0) if leak else "")

    contradictions = []
    for p in (ROOT / "scripts").glob("validate-*"):
        s = text(p)
        if p.name in {"validate-three-systems-surface.py"}: continue
        if "Open Live Dashboard" in s and ("f2r" in p.name.lower() or "systems-positioning" in p.name.lower()): contradictions.append(f"{p.name}:Open Live Dashboard")
        if 'method.researchContext.replace("this research", "this system")' in s: contradictions.append(f"{p.name}:legacy Methods replace requirement")
    add(c, "Existing validator contradiction scan", not contradictions, "none", "; ".join(contradictions))

    out = ROOT / "out"
    if out.is_dir():
        sitemap_file = out / "sitemap.xml"; robots_file = out / "robots.txt"
        add(c, "Built root sitemap exists", sitemap_file.is_file(), "out/sitemap.xml")
        add(c, "Built robots exists", robots_file.is_file(), "out/robots.txt")
        if sitemap_file.is_file():
            sx = text(sitemap_file)
            exp_urls = [f"{CANONICAL}{href}" for href in hrefs.values()]
            miss = [u for u in exp_urls if u not in sx]
            bad = [x for x in ["localhost", "/private/", "/internal/"] if x in sx.lower()]
            add(c, "Built sitemap Method inclusion", not miss, "all Method articles in root sitemap", ", ".join(miss[:8]))
            add(c, "Built sitemap public-only canonical host", not bad and CANONICAL in sx, "canonical host / no private/internal/localhost", ", ".join(bad))
            try:
                urls=[e.text or "" for e in ET.parse(sitemap_file).iter() if e.tag.endswith("loc")]
                missing_routes=[]
                for u in urls:
                    if not u.startswith(CANONICAL): continue
                    r=u[len(CANONICAL):] or "/"
                    if not expected_out_file(r).is_file(): missing_routes.append(r)
                add(c, "Sitemap URL ↔ built route parity", not missing_routes, f"{len(urls)} sitemap routes resolve in out", ", ".join(missing_routes[:12]))
            except Exception as e: add(c, "Sitemap URL ↔ built route parity", False, str(e))
        if robots_file.is_file(): add(c, "Built robots → sitemap", f"Sitemap: {CANONICAL}/sitemap.xml" in text(robots_file), "root sitemap declared")
        built_routes = ["/", "/systems/", "/systems/pds/", "/systems/adaa/", "/systems/f2r/", "/systems/scenario-stress-lab/", "/systems/scenario-stress-lab/guide/", "/systems/pds/dashboard/"] + list(hrefs.values())
        bad_head=[]
        for r in built_routes:
            f=expected_out_file(r)
            if not f.is_file(): bad_head.append(f"{r}:missing"); continue
            hp=HeadParser(); hp.feed(text(f))
            if not hp.canonical: bad_head.append(f"{r}:canonical")
        add(c, "Built representative canonical audit", not bad_head, "Next + Method routes have canonical", ", ".join(bad_head[:12]))
    else:
        status_ok = not require_build
        c.append(Check("Production build artifact audit", "SKIP" if status_ok else "FAIL", "out/ not available; run after npm run build"))
    return c


def live_urls() -> list[tuple[str,str]]:
    systems = text(ROOT / "src/data/systems.ts")
    urls = [
        ("SlackQuant systems", f"{CANONICAL}/systems/"),
        ("PDS system", f"{CANONICAL}/systems/pds/"),
        ("PDS dashboard", f"{CANONICAL}/systems/pds/dashboard/"),
        ("ADAA system", f"{CANONICAL}/systems/adaa/"),
        ("F2R system", f"{CANONICAL}/systems/f2r/"),
        ("Methods root", f"{CANONICAL}/methods/"),
    ]
    for label,key in [("ADAA live", "liveDashboard"),("F2R live", "liveDashboard"),("ADAA SSRN", "ssrn"),("ADAA research dashboard","researchDashboard"),("ADAA replication repository","replicationRepository"),("ADAA DOI","archivalRelease"),("F2R deployment repository","deploymentRepository")]:
        # scope sequentially by slug where duplicate keys exist
        slug = "f2r" if label.startswith("F2R") else "adaa"
        blockm=re.search(rf'slug:\s*"{slug}"([\s\S]*?)(?=\n\s*\{{\n\s*slug:|\n\];)',systems)
        if blockm:
            m=re.search(rf'{key}:\s*"([^"]+)"',blockm.group(1))
            if m: urls.append((label,m.group(1)))
    return urls


def check_url(url: str, retries: int, timeout: float) -> tuple[str,str,str]:
    headers={"User-Agent":"SlackQuantSurfaceAudit/1.0"}
    last=""
    for i in range(retries+1):
        try:
            req=urllib.request.Request(url,headers=headers,method="HEAD")
            with urllib.request.urlopen(req,timeout=timeout) as r:
                code=getattr(r,"status",200); final=r.geturl()
                return ("PASS" if 200 <= code < 400 else "FAIL", str(code), final)
        except urllib.error.HTTPError as e:
            if e.code in (401,403,405,429):
                try:
                    req=urllib.request.Request(url,headers=headers,method="GET")
                    with urllib.request.urlopen(req,timeout=timeout) as r:
                        code=getattr(r,"status",200); return ("PASS" if 200<=code<400 else "REMOTE_TRANSIENT",str(code),r.geturl())
                except Exception as e2: last=f"{type(e2).__name__}: {e2}"
            elif e.code in (404,410): return ("FAIL",str(e.code),url)
            elif 500 <= e.code < 600: last=f"HTTP {e.code}"
            else: return ("REMOTE_TRANSIENT",str(e.code),url)
        except (urllib.error.URLError, TimeoutError, socket.timeout) as e: last=f"{type(e).__name__}: {e}"
        if i < retries: time.sleep(1.0*(i+1))
    return ("REMOTE_TRANSIENT",last,url)


def main() -> int:
    ap=argparse.ArgumentParser()
    ap.add_argument("--require-build",action="store_true")
    ap.add_argument("--live",action="store_true")
    ap.add_argument("--json-out")
    ap.add_argument("--timeout",type=float,default=12.0)
    ap.add_argument("--retries",type=int,default=1)
    args=ap.parse_args()
    checks=audit_static(args.require_build)
    live=[]
    if args.live:
        for label,url in live_urls():
            status,detail,final=check_url(url,args.retries,args.timeout)
            live.append({"label":label,"url":url,"status":status,"detail":detail,"final_url":final})
    for x in checks: print(f"[{x.status}] {x.name}: {x.detail}")
    if live:
        for x in live: print(f"[{x['status']}] LIVE {x['label']}: {x['detail']} -> {x['final_url']}")
    result={"validator":"three-systems-surface","checks":[asdict(x) for x in checks],"live":live}
    if args.json_out: Path(args.json_out).write_text(json.dumps(result,indent=2,ensure_ascii=False),encoding="utf-8",newline="\n")
    failed=[x for x in checks if x.status=="FAIL"]+[Check("live",x["status"],x["label"]) for x in live if x["status"]=="FAIL"]
    if failed:
        print(f"THREE_SYSTEMS_SURFACE_GATE_FAIL ({len(failed)} hard failures)")
        return 1
    print("THREE_SYSTEMS_SURFACE_GATE_PASS")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
