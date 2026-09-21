#!/usr/bin/env python3
from __future__ import annotations
import csv,json,re,hashlib,zipfile
from pathlib import Path

APP=Path(__file__).resolve().parents[1]
SYSTEMS=APP/'src/data/systems.ts';SYSTEM_CARD=APP/'src/components/SystemCard.tsx';SYSTEMS_PAGE=APP/'src/app/systems/page.tsx';METHODS=APP/'src/data/methods.ts';METHODS_USED=APP/'src/components/MethodsUsed.tsx';SITEMAP=APP/'src/app/sitemap.ts';PDS_PAGE=APP/'src/app/systems/pds/page.tsx';PDS_DASHBOARD=APP/'src/app/systems/pds/dashboard/page.tsx';F2R_PAGE=APP/'src/app/systems/f2r/page.tsx';SNAPSHOT=APP/'src/data/pdsPublicSnapshot.ts';BINDER=APP/'scripts/bind-pds-public-export.py';DATA=APP/'public/data/systems/pds';PUBLIC_DASHBOARD=APP/'public/assets/systems/pds/Portfolio_Decision_System_Public.html';PUBLIC_DASHBOARD_RECEIPT=APP/'public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json';PDS_DOCUMENTATION=APP/'public/resources/systems/pds/PDS_System_Documentation_v1.2.pdf';LEGACY_PDS_DOCUMENTATIONS=[APP/'public/resources/systems/pds/PDS_System_Documentation_v1.0.pdf',APP/'public/resources/systems/pds/PDS_System_Documentation_v1.1.pdf'];PDS_DOCUMENTATION_SHA256='7d8d823fb20e51fb8cc6b36355e5ca8fa02ea27c0655659b4440d7d74c2ecf48';F2R_DOCUMENTATION=APP/'public/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf';LEGACY_F2R_DOCUMENTATION=APP/'public/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf';F2R_DOCUMENTATION_SHA256='971337d86361071ba88ce328dbf615e8a862ea199df5cca6b87c710666849cea'
PDS_METHOD_ARTICLES=[
    APP/'public/methods/40_PORTFOLIO_METHODS/QM007_PORTFOLIO_BACKTESTING_REBALANCING/article.html',
    APP/'public/methods/40_PORTFOLIO_METHODS/QM008_DRAWDOWN_UNDERWATER_DURATION_RECOVERY/article.html',
    APP/'public/methods/40_PORTFOLIO_METHODS/QM009_TURNOVER_COSTS/article.html',
    APP/'public/methods/40_PORTFOLIO_METHODS/QM011_DECISION_DIVERSIFICATION/article.html',
    APP/'public/methods/40_PORTFOLIO_METHODS/QM013_BENCHMARK_RELATIVE/article.html',
    APP/'public/methods/80_DATA_RESEARCH_DESIGN/QM014_MACRO_INFORMATION_TIMING/article.html',
]

def need(path:Path)->str:
    if not path.is_file():raise RuntimeError(f'missing required PDS platform artifact: {path.relative_to(APP)}')
    return path.read_text(encoding='utf-8',errors='replace')
def require(text:str,token:str,label:str,casefold=False)->None:
    ok=token.casefold() in text.casefold() if casefold else token in text
    if not ok:raise RuntimeError(f'{label} missing required token: {token}')
def rows(path:Path):
    with path.open('r',encoding='utf-8-sig',newline='') as f:return list(csv.DictReader(f))

def xlsx_text(path:Path)->str:
    with zipfile.ZipFile(path) as z:
        return '\n'.join(z.read(n).decode('utf-8',errors='replace') for n in sorted(z.namelist()) if n.endswith('.xml') or n.endswith('.rels'))

def recent_expected_from_public_data():
    core_rows=rows(DATA/'public_core_monthly_returns.csv');fx_rows=rows(DATA/'public_fx_performance_path.csv')
    core={(r.get('period',''),r.get('series_id','')):r for r in core_rows}
    dyn={r.get('holding_month',''):r for r in fx_rows if r.get('series_id')=='DYNAMIC_COSTED'}
    periods=sorted(p for p in dyn if all((p,sid) in core for sid in ('PDS_ACTIVE_CORE','F2R','ADAA')))[-12:]
    out=[]
    for period in reversed(periods):
        out.append({'holding_month':period,'dynamic_fx_5bp':float(dyn[period]['net_return']),'pds_core':float(core[(period,'PDS_ACTIVE_CORE')]['net_return']),'f2r':float(core[(period,'F2R')]['net_return']),'adaa':float(core[(period,'ADAA')]['net_return']),'dynamic_fx_layer_status':dyn[period].get('layer_status','')})
    return out

def recent_from_snapshot(snapshot_text:str):
    m=re.search(r'// PDS_PUBLIC_BINDING_START\s*export const pdsPublicSnapshot: PdsPublicSnapshot \| null = (.*?) as PdsPublicSnapshot;\s*// PDS_PUBLIC_BINDING_END',snapshot_text,re.S)
    if not m:raise RuntimeError('PDS snapshot JSON binding block is not parseable')
    obj=json.loads(m.group(1))
    core={(r['holdingMonth'],r['seriesId']):r for r in obj.get('corePerformance',[])}
    dyn={r['holdingMonth']:r for r in obj.get('fxPerformance',[]) if r.get('seriesId')=='DYNAMIC_COSTED'}
    periods=sorted(period for period in dyn if all((period,sid) in core for sid in ('PDS_ACTIVE_CORE','F2R','ADAA')))[-12:]
    return [{'holding_month':period,'dynamic_fx_5bp':float(dyn[period]['netReturn']),'pds_core':float(core[(period,'PDS_ACTIVE_CORE')]['netReturn']),'f2r':float(core[(period,'F2R')]['netReturn']),'adaa':float(core[(period,'ADAA')]['netReturn']),'dynamic_fx_layer_status':dyn[period].get('layerStatus','')} for period in reversed(periods)]

def assert_recent_parity(snapshot_text:str):
    csv_path=DATA/'public_recent_12m_returns.csv';xlsx_path=DATA/'public_recent_12m_returns.xlsx'
    recent=rows(csv_path);expected=recent_expected_from_public_data();snap=recent_from_snapshot(snapshot_text)
    if len(recent)!=12 or len(expected)!=12 or len(snap)!=12:raise RuntimeError('PDS recent-12M artifacts must resolve to exactly 12 common months')
    for label,other in [('governed public data',expected),('pdsPublicSnapshot',snap)]:
        for a,b in zip(recent,other):
            if a.get('holding_month')!=b['holding_month']:raise RuntimeError(f'recent-12M period mismatch versus {label}')
            for k in ('dynamic_fx_5bp','pds_core','f2r','adaa'):
                if abs(float(a[k])-float(b[k]))>1e-12:raise RuntimeError(f'recent-12M value mismatch versus {label}: {a.get("holding_month")} {k}')
            if a.get('dynamic_fx_layer_status')!=b['dynamic_fx_layer_status']:raise RuntimeError(f'recent-12M authority mismatch versus {label}: {a.get("holding_month")}')
    xt=xlsx_text(xlsx_path);csv_sha=hashlib.sha256(csv_path.read_bytes()).hexdigest()
    if csv_sha not in xt:raise RuntimeError('recent-12M XLSX checksum does not bind to current CSV')
    if 'Governed strategic allocation; exact provider composition private' not in xt:raise RuntimeError('recent-12M XLSX recipe-protected policy metadata missing')
    if re.search(r'(?i)F2R\s*25%|ADAA\s*75%|25/75|FIXED_25_75|f2r_weight|adaa_weight|provider-weight history',xt):raise RuntimeError('recent-12M XLSX leaks exact provider recipe')

def main()->int:
    systems=need(SYSTEMS);system_card=need(SYSTEM_CARD);systems_page=need(SYSTEMS_PAGE);methods=need(METHODS);methods_used=need(METHODS_USED);sitemap=need(SITEMAP);pds=need(PDS_PAGE);route=need(PDS_DASHBOARD);f2r=need(F2R_PAGE);snapshot=need(SNAPSHOT);binder=need(BINDER);public_html=need(PUBLIC_DASHBOARD)
    for tok in ['slug: "pds"','systemGroup: "portfolio-decision"','prominence: "flagship"','title: "Portfolio Decision System"','subtitle: "A Governed Multi-Strategy Portfolio Operating System"','dateLabel: "Updated with latest public release"','publicDashboard: "/systems/pds/dashboard/"','slug: "f2r"','Forecast-to-Rank Allocation','Machine-Learning Cross-Asset Portfolio Strategy','systemGroup: "portfolio-strategy"']:require(systems,tok,'systems registry')
    for tok in ['dashboardHref = item.links.publicDashboard ?? item.links.liveDashboard','dashboardIsFirstPartyApp = Boolean(item.links.publicDashboard)','Open Dashboard ↗','data-sq-dashboard-app={dashboardIsFirstPartyApp ? "true" : undefined}']:require(system_card,tok,'Systems card PDS dashboard link')
    for tok in ['pdsPublicSnapshot','function formatPdsPublicDate','formatPdsPublicDate(pdsPublicSnapshot.publicAsOfDate)']:require(systems_page,tok,'Systems index PDS release-date binding')
    require(methods,'"pds-system": ["QM007", "QM008", "QM009", "QM011", "QM013", "QM014"]','PDS methods bundle')
    require(methods_used,'getMethodContextForArtifact(method, researchSlug, context)','system methods copy')
    require(sitemap,'"/systems/pds/dashboard/",','PDS dashboard sitemap')
    for article in PDS_METHOD_ARTICLES: need(article)
    for tok in ['governed strategic allocation','Exact provider composition weights are not part of the public disclosure layer.','/systems/pds/dashboard/','/systems/adaa/','/systems/f2r/','pdsPublicSnapshot','Public / delayed / private','PDS sits above individual strategies.','A portfolio operating system, not another strategy model','Portfolio Integration & Allocation','const recentReturnRows =','Recent 12-Month Released Returns','PDS + Dynamic FX (5bp)','historical comparison series only','<th>PDS + Dynamic FX (5bp)</th><th>PDS Core</th><th>F2R</th><th>ADAA</th>','/resources/systems/pds/PDS_System_Documentation_v1.2.pdf','System Documentation ↗','Chronos-2','PDS Adaptive','RL-Assisted Adaptive Defense','RL means Reinforcement Learning','selectively as part of the risk-control layer']:require(pds,tok,'PDS page')
    if not PDS_DOCUMENTATION.is_file() or PDS_DOCUMENTATION.read_bytes()[:5] != b'%PDF-':raise RuntimeError('PDS System Documentation PDF missing or invalid')
    if any(x.exists() for x in LEGACY_PDS_DOCUMENTATIONS):raise RuntimeError('superseded PDS System Documentation v1.0/v1.1 remains publicly addressable')
    if hashlib.sha256(PDS_DOCUMENTATION.read_bytes()).hexdigest()!=PDS_DOCUMENTATION_SHA256:raise RuntimeError('PDS System Documentation v1.2 differs from the page-reviewed recipe-protection-approved source artifact')
    protected_mix_patterns=[r'fixed\s+25%\s+F2R\s*/\s*75%\s+ADAA',r'F2R\s+25%',r'ADAA\s+75%',r'25/75',r'provider-weight history']
    for pat in protected_mix_patterns:
        if re.search(pat,pds,re.I):raise RuntimeError(f'PDS public narrative leaks protected provider recipe: {pat}')
    for tok in ['const dashboardVersion = "','encodeURIComponent(dashboardVersion)','/assets/systems/pds/Portfolio_Decision_System_Public.html?v=${encodeURIComponent(dashboardVersion)}','Portfolio Decision System Public Dashboard','position: "fixed"']:
        require(route,tok,'PDS public-dashboard route')
    if 'PDS_PUBLIC_MIRROR_SHA_PENDING' in route:
        raise RuntimeError('PDS public-dashboard route cache key was not bound to the validated mirror SHA')
    for tok in ['window.PDS_PUBLIC_SURFACE=true','window.PDL_DATA=','PM Cockpit','<h2>Adaptive</h2>','<h2>Preview</h2>','<h2>FX</h2>','<h2>Performance</h2>','<h2>Portfolio</h2>','Current PDS Core / Adaptive ETF targets','PDS Adaptive prospective state','Current Official and next Preview hedge decision','Integrated monitored portfolios and provider references','Latest admissible FX observation']:
        require(public_html,tok,'PDS canonical public dashboard',casefold=True)
    if 'Latest raw FX observation'.casefold() in public_html.casefold():
        raise RuntimeError('PDS public dashboard exposes a false raw-FX authority label')
    for forbidden in ['PDS_PUBLIC_SAFE_DELAYED_READ_MODEL','Governed delayed public profile','DELAYED PUBLIC','_LOCAL_PRIVATE_DATA','_LOCAL_RUNTIME','_LOCAL_CACHE','_LOCAL_PRIVATE_ARCHIVE','MACRO_FORECAST_ALLOCATION','MFA_PRICE_ONLY']:
        if forbidden.casefold() in public_html.casefold():
            raise RuntimeError(f'PDS standalone dashboard leakage/legacy blocker: {forbidden}')
    require(binder,'"PDS Active Core" if r["series_id"] == "PDS_ACTIVE_CORE"','PDS binder')
    for tok in ['Forecast-to-Rank Allocation (F2R)','live cross-asset Portfolio Strategy System','Chronos-2 pretrained time-series intelligence','Heterogeneous forecasts, one common decision space','Independent strategy system','current PDS Active Core provider','current operating state, not the definition of PDS','Public disclosure names the forecasting technologies and the decision architecture.','/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf','/systems/pds/']:require(f2r,tok,'F2R page')
    if not F2R_DOCUMENTATION.is_file() or F2R_DOCUMENTATION.read_bytes()[:5] != b'%PDF-':raise RuntimeError('F2R System Documentation v2.1 PDF missing or invalid')
    if LEGACY_F2R_DOCUMENTATION.exists():raise RuntimeError('retired F2R System Documentation v1.0 remains publicly addressable')
    if hashlib.sha256(F2R_DOCUMENTATION.read_bytes()).hexdigest()!=F2R_DOCUMENTATION_SHA256:raise RuntimeError('F2R System Documentation v2.1 differs from the approved canonical source artifact')
    leak=re.compile(r'(?i)\bMFA\b|macro\s+forecast\s+allocation|_LOCAL_PRIVATE_DATA|\b[A-Z]:\\')
    # Scan each public source independently so any future failure names the exact surface
    # and offending token instead of collapsing three sources into one opaque error.
    for surface_label,surface_text in (("PDS platform page",pds),("F2R platform page",f2r),("PDS standalone dashboard HTML",public_html)):
        m=leak.search(surface_text)
        if m:
            context=re.sub(r'\s+',' ',surface_text[max(0,m.start()-80):m.end()+120]).strip()
            raise RuntimeError(f'private/internal PDS or F2R identity leaked onto {surface_label}: token={m.group(0)!r}; context={context!r}')
    if 'export const pdsPublicSnapshot: PdsPublicSnapshot | null = null;' in snapshot:raise RuntimeError('PDS governed delayed snapshot is not bound')
    required={'public_active_core_asset_targets.csv','public_core_monthly_returns.csv','public_core_strategy_roster.csv','public_system_identity.json','public_variants.json','public_disclosure_state.json','public_export_manifest.json','PDS_PUBLIC_BINDING_RECEIPT.json','public_core_performance_path.csv','public_core_performance_summary.csv','public_core_calendar_returns.csv','public_fx_performance_path.csv','public_fx_performance_summary.csv','public_fx_hedge_history.csv','public_fx_calendar_returns.csv','public_recent_12m_returns.csv','public_recent_12m_returns.xlsx'}
    missing=[x for x in sorted(required) if not (DATA/x).is_file()]
    if missing:raise RuntimeError('PDS public data binding incomplete: '+', '.join(missing))
    disclosure=json.loads((DATA/'public_disclosure_state.json').read_text(encoding='utf-8'));manifest=json.loads((DATA/'public_export_manifest.json').read_text(encoding='utf-8'));receipt=json.loads((DATA/'PDS_PUBLIC_BINDING_RECEIPT.json').read_text(encoding='utf-8'));dash=json.loads(PUBLIC_DASHBOARD_RECEIPT.read_text(encoding='utf-8'))
    if disclosure.get('current_decision_state')!='WITHHELD_BY_POLICY':raise RuntimeError('current decision disclosure boundary is not protected')
    if disclosure.get('public_component_identity')!='ADAA + F2R':raise RuntimeError('public component identity mismatch')
    if disclosure.get('historical_fx_spot_sensitivity')!='DELAYED_PUBLIC_NON_CANONICAL':raise RuntimeError('historical FX public layer is not explicitly delayed/non-canonical')
    variants=json.loads((DATA/'public_variants.json').read_text(encoding='utf-8'))
    vids={v.get('variant_id') for v in variants.get('variants',[])}
    if vids!={'PDS_CORE','PDS_ADAPTIVE'}:raise RuntimeError(f'PDS public variant inventory mismatch: {sorted(vids)}')
    if variants.get('current_adaptive_state')!='PRIVATE_NOT_EXPORTED' or variants.get('current_adaptive_risk_budget')!='PRIVATE_NOT_EXPORTED':raise RuntimeError('PDS Adaptive current state/risk budget leaked into public variant metadata')
    for k in ['intramonth_preview','shadow_monitor_state','current_fx_overlay','current_adaptive_state','current_adaptive_risk_budget','account_holdings']:
        if disclosure.get(k)!='PRIVATE_NOT_EXPORTED':raise RuntimeError(f'protected public boundary mismatch: {k}')
    if manifest.get('no_private_leakage_scan')!='PASS':raise RuntimeError('source exporter leakage scan not PASS')
    if manifest.get('active_core_policy')!='GOVERNED_STRATEGIC_ALLOCATION__RECIPE_PROTECTED':raise RuntimeError('public Core disclosure policy is not recipe-protected')
    if receipt.get('status')!='PDS_SLACKQUANT_PUBLIC_BINDING_PASS':raise RuntimeError('platform binding receipt not PASS')
    assert_recent_parity(snapshot)
    for name in ('public_recent_12m_returns.csv','public_recent_12m_returns.xlsx'):
        if name not in (receipt.get('bound_files_sha256') or {}):raise RuntimeError(f'binding receipt missing governed recent-12M artifact hash: {name}')
    if dash.get('status')!='PASS':raise RuntimeError('public canonical-mirror receipt is not PASS')
    if dash.get('artifact')!='PDS_PUBLIC_CANONICAL_MIRROR_V1':raise RuntimeError('public dashboard is not the canonical mirror artifact')
    if dash.get('presentation_contract')!='RS03_CANONICAL_LOCAL_INFORMATION__PUBLIC_SANITIZED_MIRROR':raise RuntimeError('public canonical-mirror presentation contract mismatch')
    if dash.get('public_policy')!='CANONICAL_LOCAL_INFORMATION__ENVIRONMENT_ONLY_SUPPRESSED':raise RuntimeError('public dashboard policy mismatch')
    if dash.get('page_contract')!=['core','adaptive','preview','fxperf','coreperf','weights']:raise RuntimeError('public canonical page contract mismatch')
    if dash.get('canonical_current_values_embedded') is not True or dash.get('environment_specific_values_embedded') is not False:raise RuntimeError('public canonical/current-vs-environment boundary mismatch')
    san=dash.get('sanitization') or {}
    if any(san.get(k)!='PASS' for k in ('absolute_path_scan','local_storage_token_scan','legacy_delayed_dashboard_scan')):raise RuntimeError('public canonical-mirror sanitization receipt mismatch')
    retired=DATA/'public_active_core_strategy_weights.csv'
    if retired.exists():raise RuntimeError('retired provider-weight artifact is still public: public_active_core_strategy_weights.csv')
    for protected_key in ['provider_composition_weights','provider_weight_history','integration_formula']:
        if disclosure.get(protected_key)!='PRIVATE_NOT_EXPORTED':raise RuntimeError(f'public disclosure contract does not protect {protected_key}')
    recipe_leak=re.compile(r'(?i)F2R\s*25%|ADAA\s*75%|25/75|FIXED_25_75|f2r_weight|adaa_weight|provider-weight history|ENS_ENS_Q25|RISK_ONLY_PPO|F55|R80|V85|seed(?:11|23|37|53|71)')
    if recipe_leak.search(pds+'\n'+snapshot):raise RuntimeError('legacy platform compatibility surface leaked protected provider recipe')
    for path in sorted(DATA.iterdir()):
        if not path.is_file():continue
        text=xlsx_text(path) if path.suffix.lower()=='.xlsx' else path.read_text(encoding='utf-8',errors='replace')
        if leak.search(text):raise RuntimeError(f'public PDS data leakage/naming blocker: {path.name}')
    print('PDS_PUBLICATION_GATE_PASS')
    print('Dashboard    : canonical local information / sanitized public mirror')
    print('Pages        : Core / Adaptive / Preview / FX / Performance / Portfolio')
    print('Current data : published on the standalone dashboard under validated-refresh semantics')
    print('Suppressed   : local paths/runtime/cache/repo/credentials/debug infrastructure')
    print(f"Platform data: legacy delayed compatibility layer through {disclosure.get('completed_holding_month_cutoff')} (system-page harmonization follows dashboard QA)")
    print('Methods      : QM007 / QM008 / QM009 / QM011 / QM013 / QM014')
    return 0
if __name__=='__main__':raise SystemExit(main())
