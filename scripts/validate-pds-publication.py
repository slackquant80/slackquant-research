#!/usr/bin/env python3
from __future__ import annotations
import csv,json,re
from pathlib import Path

APP=Path(__file__).resolve().parents[1]
SYSTEMS=APP/'src/data/systems.ts';SYSTEM_CARD=APP/'src/components/SystemCard.tsx';SYSTEMS_PAGE=APP/'src/app/systems/page.tsx';METHODS=APP/'src/data/methods.ts';METHODS_USED=APP/'src/components/MethodsUsed.tsx';SITEMAP=APP/'src/app/sitemap.ts';PDS_PAGE=APP/'src/app/systems/pds/page.tsx';PDS_DASHBOARD=APP/'src/app/systems/pds/dashboard/page.tsx';F2R_PAGE=APP/'src/app/systems/f2r/page.tsx';SNAPSHOT=APP/'src/data/pdsPublicSnapshot.ts';BINDER=APP/'scripts/bind-pds-public-export.py';DATA=APP/'public/data/systems/pds';PUBLIC_DASHBOARD=APP/'public/assets/systems/pds/Portfolio_Decision_System_Public.html';PUBLIC_DASHBOARD_RECEIPT=APP/'public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json'
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

def main()->int:
    systems=need(SYSTEMS);system_card=need(SYSTEM_CARD);systems_page=need(SYSTEMS_PAGE);methods=need(METHODS);methods_used=need(METHODS_USED);sitemap=need(SITEMAP);pds=need(PDS_PAGE);route=need(PDS_DASHBOARD);f2r=need(F2R_PAGE);snapshot=need(SNAPSHOT);binder=need(BINDER);public_html=need(PUBLIC_DASHBOARD)
    for tok in ['slug: "pds"','systemGroup: "portfolio-decision"','prominence: "flagship"','Portfolio Decision & Operating System','dateLabel: "Updated with latest public release"','publicDashboard: "/systems/pds/dashboard/"','slug: "f2r"','Forecast-to-Rank Allocation','Machine-Learning Cross-Asset Portfolio Strategy','systemGroup: "portfolio-strategy"']:require(systems,tok,'systems registry')
    for tok in ['item.links.publicDashboard','Open Dashboard ↗','data-sq-dashboard-app="true"']:require(system_card,tok,'Systems card PDS dashboard link')
    for tok in ['pdsPublicSnapshot','function formatPdsPublicDate','formatPdsPublicDate(pdsPublicSnapshot.publicAsOfDate)']:require(systems_page,tok,'Systems index PDS release-date binding')
    require(methods,'"pds-system": ["QM007", "QM008", "QM009", "QM011", "QM013", "QM014"]','PDS methods bundle')
    require(methods_used,'getMethodContextForArtifact(method, researchSlug, context)','explicit artifact-specific methods context')
    if 'replace("this research"' in methods_used:
        raise RuntimeError('legacy research-to-system string replacement remains in MethodsUsed')
    require(sitemap,'"/systems/pds/dashboard/",','PDS dashboard sitemap')
    for article in PDS_METHOD_ARTICLES: need(article)
    for tok in [
        'fixed 25% F2R / 75% ADAA',
        'current asset-level target',
        'the Core is not reset to 25/75 each day',
        'Current asset-level target and live allocation state beyond the disclosed fixed Core policy',
        '/systems/pds/dashboard/',
        '/systems/adaa/',
        '/systems/f2r/',
        'pdsPublicSnapshot',
        'Public / delayed / private',
        'PDS is provider-agnostic and is not defined by any particular pair of strategies',
        'Portfolio Integration & Allocation',
        'const recentReturnRows =',
        'Recent 12-Month Released Returns',
        'PDS + Dynamic FX (5bp)',
        '<th>PDS + Dynamic FX (5bp)</th><th>PDS Core</th><th>F2R</th><th>ADAA</th>',
        'public_recent_12m_returns.csv',
        '12-month table Excel (.xlsx)','12-month table CSV',
    ]:
        require(pds, tok, 'PDS page')
    for stale in ['current provider weights and asset targets are protected','exact current provider weights remain','not a permanent product recipe','should not be interpreted as a fixed ADAA–F2R blend','Currently active portfolio target and strategy weights']:
        if stale in pds:raise RuntimeError(f'PDS public narrative contains superseded allocation-policy wording: {stale}')
    for tok in ['pdsPublicSnapshot','sourceProgramVersion','publicAsOfDate','encodeURIComponent(dashboardVersion)','/assets/systems/pds/Portfolio_Decision_System_Public.html?v=${encodeURIComponent(dashboardVersion)}','Portfolio Decision System Public Dashboard','position: "fixed"']:require(route,tok,'PDS public-dashboard route')
    for tok in ['PDS_PUBLIC_DATA','Public dashboard','Overview','Core Performance','Portfolio History','Investor / FX','System & Disclosure','KRW Investor View','F2R 25% · ADAA 75%','Current asset targets','Monthly execution only · daily weights drift','<div class="brand-name">SlackQuant</div><div class="brand-sub">Systems</div>','pds-product-kicker','href="/systems/pds/"','href="/systems/adaa/"','href="/systems/f2r/"','Recent monthly returns · Core / providers','PDS Core and source-owned providers · latest six released holding months','core-provider-monthly-table']:require(public_html,tok,'PDS standalone public dashboard',casefold=True)
    for stale in ['Forward Shadow is not published live','Forward Preview is not published live','<div class="nav-section">PM workspace</div>']:
        if stale.casefold() in public_html.casefold():raise RuntimeError(f'public dashboard regressed to sparse private-page clone: {stale}')
    require(binder,'"PDS Active Core" if r["series_id"] == "PDS_ACTIVE_CORE"','PDS binder')
    require(binder,'[-12:]','PDS binder 12-month window')
    require(binder,'public_recent_12m_returns.csv','PDS binder derived table export')
    require(binder,'public_recent_12m_returns.xlsx','PDS binder Excel export')
    for tok in ['Forecast-to-Rank Allocation (F2R)','live machine-learning cross-asset Portfolio Strategy System','Independent strategy system','current PDS Active Core provider','current operating state, not the definition of PDS','/systems/pds/']:require(f2r,tok,'F2R page')
    leak=re.compile(r'(?i)\bMFA\b|macro\s+forecast\s+allocation|_LOCAL_PRIVATE_DATA|\b[A-Z]:\\')
    if leak.search(pds+'\n'+f2r+'\n'+public_html):raise RuntimeError('private/internal PDS or F2R identity leaked onto a public surface')
    if 'export const pdsPublicSnapshot: PdsPublicSnapshot | null = null;' in snapshot:raise RuntimeError('PDS governed delayed snapshot is not bound')
    required={'public_active_core_asset_targets.csv','public_active_core_strategy_weights.csv','public_core_monthly_returns.csv','public_core_strategy_roster.csv','public_system_identity.json','public_disclosure_state.json','public_export_manifest.json','PDS_PUBLIC_BINDING_RECEIPT.json','public_core_performance_path.csv','public_core_performance_summary.csv','public_core_calendar_returns.csv','public_fx_performance_path.csv','public_fx_performance_summary.csv','public_fx_hedge_history.csv','public_fx_calendar_returns.csv','public_recent_12m_returns.csv','public_recent_12m_returns.xlsx'}
    missing=[x for x in sorted(required) if not (DATA/x).is_file()]
    if missing:raise RuntimeError('PDS public data binding incomplete: '+', '.join(missing))
    disclosure=json.loads((DATA/'public_disclosure_state.json').read_text(encoding='utf-8'));manifest=json.loads((DATA/'public_export_manifest.json').read_text(encoding='utf-8'));receipt=json.loads((DATA/'PDS_PUBLIC_BINDING_RECEIPT.json').read_text(encoding='utf-8'));dash=json.loads(PUBLIC_DASHBOARD_RECEIPT.read_text(encoding='utf-8'))
    if disclosure.get('current_decision_state')!='WITHHELD_BY_POLICY':raise RuntimeError('current decision disclosure boundary is not protected')
    if disclosure.get('public_component_identity')!='ADAA + F2R':raise RuntimeError('public component identity mismatch')
    if disclosure.get('historical_fx_spot_sensitivity')!='DELAYED_PUBLIC_NON_CANONICAL':raise RuntimeError('historical FX public layer is not explicitly delayed/non-canonical')
    for k in ['intramonth_preview','shadow_monitor_state','current_fx_overlay','account_holdings']:
        if disclosure.get(k)!='PRIVATE_NOT_EXPORTED':raise RuntimeError(f'protected public boundary mismatch: {k}')
    if manifest.get('no_private_leakage_scan')!='PASS':raise RuntimeError('source exporter leakage scan not PASS')
    if manifest.get('active_core_policy')!='F2R_25_ADAA_75_FIXED_ALL_HISTORY':raise RuntimeError('public Core policy is not canonical fixed 25/75')
    if receipt.get('status')!='PDS_SLACKQUANT_PUBLIC_BINDING_PASS':raise RuntimeError('platform binding receipt not PASS')
    if dash.get('status')!='PASS' or dash.get('private_current_values_embedded') is not False:raise RuntimeError('public-dashboard receipt is not safe PASS')
    if dash.get('artifact')!='PDS_PUBLIC_DASHBOARD_PRODUCT_V3':raise RuntimeError('public dashboard is not product v3')
    if dash.get('presentation_contract')!='RS03_PUBLIC_PRODUCT_V3__LOCAL_VISUAL_FAMILY':raise RuntimeError('public presentation contract mismatch')
    if dash.get('page_contract')!=['overview','performance','portfolio','investor','system']:raise RuntimeError('public page contract mismatch')
    if dash.get('investor_view_authority')!='DELAYED_PUBLIC_NON_CANONICAL_SPOT_SENSITIVITY':raise RuntimeError('investor-view authority was silently promoted')
    w=rows(DATA/'public_active_core_strategy_weights.csv')
    if not w:raise RuntimeError('public strategy-weight history is empty')
    for i,r in enumerate(w,start=2):
        if abs(float(r['f2r_weight'])-.25)>1e-12 or abs(float(r['adaa_weight'])-.75)>1e-12:raise RuntimeError(f'public fixed-Core history drift at row {i}')
        if r.get('weight_basis')!='FIXED_25_75_CANONICAL_ALL_HISTORY':raise RuntimeError(f'public fixed-Core weight basis drift at row {i}')
    for path in sorted(DATA.iterdir()):
        if path.is_file() and leak.search(path.read_text(encoding='utf-8',errors='replace')):raise RuntimeError(f'public PDS data leakage/naming blocker: {path.name}')
    print('PDS_PUBLICATION_GATE_PASS')
    print('Presentation: PDS public product v3 / canonical local visual family')
    print('Pages       : Overview / Core Performance / Portfolio History / Investor-FX / System-Disclosure')
    print('Core        : F2R 25% + ADAA 75% fixed over displayed history')
    print('Investor    : delayed historical Dynamic-FX non-canonical spot sensitivity only')
    print(f"Delayed     : signal {disclosure.get('latest_released_signal_period')} / holding {disclosure.get('completed_holding_month_cutoff')}")
    print('Methods     : QM007 / QM008 / QM009 / QM011 / QM013 / QM014')
    print('Links       : Systems card -> dashboard -> PDS page + ADAA/F2R + public CSVs')
    print('Rebalance   : monthly execution only / daily weights drift')
    print('Protected   : current asset targets / Preview / Shadow / current mark / current FX')
    return 0
if __name__=='__main__':raise SystemExit(main())
