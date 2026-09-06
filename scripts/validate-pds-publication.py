#!/usr/bin/env python3
from __future__ import annotations
import csv
import json
import re
from pathlib import Path

APP = Path(__file__).resolve().parents[1]
SYSTEMS = APP / 'src/data/systems.ts'
PDS_PAGE = APP / 'src/app/systems/pds/page.tsx'
PDS_DASHBOARD = APP / 'src/app/systems/pds/dashboard/page.tsx'
F2R_PAGE = APP / 'src/app/systems/f2r/page.tsx'
SNAPSHOT = APP / 'src/data/pdsPublicSnapshot.ts'
BINDER = APP / 'scripts/bind-pds-public-export.py'
DATA = APP / 'public/data/systems/pds'
PUBLIC_DASHBOARD = APP / 'public/assets/systems/pds/Portfolio_Decision_System_Public.html'
PUBLIC_DASHBOARD_RECEIPT = APP / 'public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json'


def need(path: Path) -> str:
    if not path.is_file():
        raise RuntimeError(f'missing required PDS platform artifact: {path.relative_to(APP)}')
    return path.read_text(encoding='utf-8', errors='replace')


def require(text: str, token: str, label: str) -> None:
    if token not in text:
        raise RuntimeError(f'{label} missing required token: {token}')


def require_ci(text: str, token: str, label: str) -> None:
    if token.casefold() not in text.casefold():
        raise RuntimeError(f'{label} missing required semantic token: {token}')


def rows(path: Path) -> list[dict[str, str]]:
    with path.open('r', encoding='utf-8-sig', newline='') as f:
        return list(csv.DictReader(f))


def main() -> int:
    systems = need(SYSTEMS)
    pds = need(PDS_PAGE)
    dashboard_route = need(PDS_DASHBOARD)
    f2r = need(F2R_PAGE)
    snapshot = need(SNAPSHOT)
    binder = need(BINDER)
    public_html = need(PUBLIC_DASHBOARD)

    for token in [
        'slug: "pds"', 'systemGroup: "portfolio-decision"', 'prominence: "flagship"',
        'Portfolio Decision & Operating System',
        'slug: "f2r"', 'Forecast-to-Rank Allocation',
        'Machine-Learning Cross-Asset Portfolio Strategy',
        'systemGroup: "portfolio-strategy"',
    ]:
        require(systems, token, 'systems registry')

    for token in [
        'fixed 25% F2R / 75% ADAA', 'current asset-level target', '/systems/adaa/', '/systems/f2r/',
        'pdsPublicSnapshot', 'Public / delayed / private',
        'PDS is provider-agnostic and is not defined by any particular pair of strategies',
        'Portfolio Integration & Allocation',
    ]:
        require(pds, token, 'PDS page')

    for stale in [
        'current provider weights and asset targets are protected',
        'exact current provider weights remain',
        'not a permanent product recipe',
        'should not be interpreted as a fixed ADAA–F2R blend',
    ]:
        if stale in pds:
            raise RuntimeError(f'PDS public narrative contains superseded allocation-policy wording: {stale}')

    for token in [
        '/assets/systems/pds/Portfolio_Decision_System_Public.html',
        'Portfolio Decision System Public Dashboard',
        'position: "fixed"',
    ]:
        require(dashboard_route, token, 'PDS public-dashboard route')

    for token in [
        'PDS_PUBLIC_DATA', 'PM Cockpit', 'Core Performance', 'Portfolio Weights',
        'Forward Shadow', 'Forward Preview', 'FX Overlay', 'FX Performance',
        'DELAYED PUBLIC', 'F2R 25% · ADAA 75%',
        '<div class=\"brand-name\">SlackQuant</div><div class=\"brand-sub\">Systems</div>',
        '<div class=\"nav-section\">PM workspace</div>', 'pds-product-kicker', 'cockpit-hero',
    ]:
        require(public_html, token, 'PDS standalone public dashboard')

    for token in [
        'current asset targets', 'current mark', 'current FX state', 'not exported',
    ]:
        require_ci(public_html, token, 'PDS standalone public disclosure boundary')

    require(binder, '"PDS Active Core" if r["series_id"] == "PDS_ACTIVE_CORE"', 'PDS binder')

    for token in [
        'Forecast-to-Rank Allocation (F2R)',
        'live machine-learning cross-asset Portfolio Strategy System',
        'Independent strategy system',
        'current PDS Active Core provider',
        'current operating state, not the definition of PDS',
        '/systems/pds/',
    ]:
        require(f2r, token, 'F2R page')

    leak_re = re.compile(r'(?i)\bMFA\b|macro\s+forecast\s+allocation|_LOCAL_PRIVATE_DATA|\b[A-Z]:\\')
    if leak_re.search(pds + '\n' + f2r + '\n' + public_html):
        raise RuntimeError('private/internal PDS or F2R identity leaked onto a public surface')

    if 'export const pdsPublicSnapshot: PdsPublicSnapshot | null = null;' in snapshot:
        raise RuntimeError('PDS governed delayed snapshot is not bound')

    required = {
        'public_active_core_asset_targets.csv', 'public_active_core_strategy_weights.csv',
        'public_core_monthly_returns.csv', 'public_core_strategy_roster.csv',
        'public_system_identity.json', 'public_disclosure_state.json',
        'public_export_manifest.json', 'PDS_PUBLIC_BINDING_RECEIPT.json',
        'public_core_performance_path.csv', 'public_core_performance_summary.csv',
        'public_core_calendar_returns.csv', 'public_fx_performance_path.csv',
        'public_fx_performance_summary.csv', 'public_fx_hedge_history.csv',
        'public_fx_calendar_returns.csv',
    }
    missing = [name for name in sorted(required) if not (DATA / name).is_file()]
    if missing:
        raise RuntimeError('PDS public data binding incomplete: ' + ', '.join(missing))

    disclosure = json.loads((DATA / 'public_disclosure_state.json').read_text(encoding='utf-8'))
    manifest = json.loads((DATA / 'public_export_manifest.json').read_text(encoding='utf-8'))
    receipt = json.loads((DATA / 'PDS_PUBLIC_BINDING_RECEIPT.json').read_text(encoding='utf-8'))
    dash_receipt = json.loads(PUBLIC_DASHBOARD_RECEIPT.read_text(encoding='utf-8'))

    if disclosure.get('current_decision_state') != 'WITHHELD_BY_POLICY':
        raise RuntimeError('current decision disclosure boundary is not protected')
    if disclosure.get('public_component_identity') != 'ADAA + F2R':
        raise RuntimeError('public component identity mismatch')
    if disclosure.get('historical_fx_spot_sensitivity') != 'DELAYED_PUBLIC_NON_CANONICAL':
        raise RuntimeError('historical FX public layer is not explicitly delayed/non-canonical')
    for k in ['intramonth_preview','shadow_monitor_state','current_fx_overlay','account_holdings']:
        if disclosure.get(k) != 'PRIVATE_NOT_EXPORTED':
            raise RuntimeError(f'protected public boundary mismatch: {k}')
    if manifest.get('no_private_leakage_scan') != 'PASS':
        raise RuntimeError('source exporter leakage scan not PASS')
    if manifest.get('active_core_policy') != 'F2R_25_ADAA_75_FIXED_ALL_HISTORY':
        raise RuntimeError('public Core policy is not the canonical fixed 25/75 definition')
    if receipt.get('status') != 'PDS_SLACKQUANT_PUBLIC_BINDING_PASS':
        raise RuntimeError('platform binding receipt not PASS')
    if dash_receipt.get('status') != 'PASS' or dash_receipt.get('private_current_values_embedded') is not False:
        raise RuntimeError('standalone public-dashboard receipt is not safe PASS')
    if dash_receipt.get('artifact') != 'PDS_PUBLIC_DASHBOARD_CANONICAL_PRESENTATION_V2':
        raise RuntimeError('standalone public dashboard is not using the canonical PDS presentation v2')
    if dash_receipt.get('presentation_contract') != 'RS03_CANONICAL_LOCAL_PRESENTATION_FAMILY':
        raise RuntimeError('public dashboard presentation contract is not bound to the canonical local family')
    for stale in ['<div class=\"brand-name\">PDS</div>', '<span class=\"crumb\">Public Dashboard</span>']:
        if stale in public_html:
            raise RuntimeError(f'legacy PDS public-dashboard presentation still present: {stale}')

    w = rows(DATA / 'public_active_core_strategy_weights.csv')
    if not w:
        raise RuntimeError('public strategy-weight history is empty')
    for i, r in enumerate(w, start=2):
        if abs(float(r['f2r_weight']) - 0.25) > 1e-12 or abs(float(r['adaa_weight']) - 0.75) > 1e-12:
            raise RuntimeError(f'public fixed-Core history drift at row {i}')
        if r.get('weight_basis') != 'FIXED_25_75_CANONICAL_ALL_HISTORY':
            raise RuntimeError(f'public fixed-Core weight basis drift at row {i}')

    for path in sorted(DATA.iterdir()):
        if path.is_file() and leak_re.search(path.read_text(encoding='utf-8', errors='replace')):
            raise RuntimeError(f'public PDS data leakage/naming blocker: {path.name}')

    print('PDS_PUBLICATION_GATE_PASS')
    print('Presentation: canonical RS-03 local-family public profile')
    print('Core        : F2R 25% + ADAA 75% fixed over displayed history')
    print(f"Delayed     : signal {disclosure.get('latest_released_signal_period')} / holding {disclosure.get('completed_holding_month_cutoff')}")
    print('Protected   : current asset targets / Preview / Shadow / current mark / current FX')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
