#!/usr/bin/env python3
from __future__ import annotations
import json
import re
from pathlib import Path

APP = Path(__file__).resolve().parents[1]
SYSTEMS = APP / 'src/data/systems.ts'
PDS_PAGE = APP / 'src/app/systems/pds/page.tsx'
F2R_PAGE = APP / 'src/app/systems/f2r/page.tsx'
SNAPSHOT = APP / 'src/data/pdsPublicSnapshot.ts'
BINDER = APP / 'scripts/bind-pds-public-export.py'
DATA = APP / 'public/data/systems/pds'


def need(path: Path) -> str:
    if not path.is_file():
        raise RuntimeError(f'missing required PDS platform artifact: {path.relative_to(APP)}')
    return path.read_text(encoding='utf-8', errors='replace')


def require(text: str, token: str, label: str) -> None:
    if token not in text:
        raise RuntimeError(f'{label} missing required token: {token}')


def main() -> int:
    systems = need(SYSTEMS)
    pds = need(PDS_PAGE)
    f2r = need(F2R_PAGE)
    snapshot = need(SNAPSHOT)
    binder = need(BINDER)

    for token in [
        'slug: "pds"', 'systemGroup: "portfolio-decision"', 'prominence: "flagship"',
        'Portfolio Decision & Operating System',
        'slug: "f2r"', 'Forecast-to-Rank Allocation', 'systemGroup: "portfolio-strategy"',
    ]:
        require(systems, token, 'systems registry')

    for token in [
        'Protected until release gate', 'holding month', '/systems/adaa/', '/systems/f2r/',
        'pdsPublicSnapshot', 'Public / delayed / private',
        'PDS is provider-agnostic and is not defined by any particular pair of strategies',
        'Current provider configuration within a broader operating architecture',
        'Historical operating state',
        'not the definition of PDS',
        'They should not be interpreted',
        'Portfolio Integration & Allocation',
    ]:
        require(pds, token, 'PDS page')

    for forbidden in [
        'Active Core architecture',
        'Latest released strategy mix',
        'Two independent Portfolio Strategy Systems',
    ]:
        if forbidden in pds:
            raise RuntimeError(f'PDS public narrative regressed to fixed-blend framing: {forbidden}')

    require(binder, '"PDS Active Core" if r["series_id"] == "PDS_ACTIVE_CORE"', 'PDS binder')

    for token in [
        'Forecast-to-Rank Allocation (F2R)', 'Machine-Learning Cross-Asset Portfolio Strategy',
        'Independent strategy system', 'current PDS Active Core provider',
        'current operating state, not the definition of PDS', '/systems/pds/',
    ]:
        require(f2r, token, 'F2R page')

    if re.search(r'(?i)\bMFA\b|macro\s+forecast\s+allocation', pds + '\n' + f2r):
        raise RuntimeError('legacy MFA product identity leaked onto PDS/F2R public page source')

    if 'export const pdsPublicSnapshot: PdsPublicSnapshot | null = null;' in snapshot:
        raise RuntimeError('PDS governed delayed snapshot is not bound; run scripts/sync-pds-public.ps1 before deployment')

    required = {
        'public_active_core_asset_targets.csv', 'public_active_core_strategy_weights.csv',
        'public_core_monthly_returns.csv', 'public_core_strategy_roster.csv',
        'public_system_identity.json', 'public_disclosure_state.json',
        'public_export_manifest.json', 'PDS_PUBLIC_BINDING_RECEIPT.json',
    }
    missing = [name for name in sorted(required) if not (DATA / name).is_file()]
    if missing:
        raise RuntimeError('PDS public data binding incomplete: ' + ', '.join(missing))

    disclosure = json.loads((DATA / 'public_disclosure_state.json').read_text(encoding='utf-8'))
    manifest = json.loads((DATA / 'public_export_manifest.json').read_text(encoding='utf-8'))
    receipt = json.loads((DATA / 'PDS_PUBLIC_BINDING_RECEIPT.json').read_text(encoding='utf-8'))
    if disclosure.get('current_decision_state') != 'WITHHELD_BY_POLICY':
        raise RuntimeError('current decision disclosure boundary is not protected')
    if disclosure.get('public_component_identity') != 'ADAA + F2R':
        raise RuntimeError('public component identity mismatch')
    if manifest.get('no_private_leakage_scan') != 'PASS':
        raise RuntimeError('source exporter leakage scan not PASS')
    if receipt.get('status') != 'PDS_SLACKQUANT_PUBLIC_BINDING_PASS':
        raise RuntimeError('platform binding receipt not PASS')

    for path in sorted(DATA.iterdir()):
        if not path.is_file():
            continue
        text = path.read_text(encoding='utf-8', errors='replace')
        if re.search(r'(?i)\bMFA\b|macro\s+forecast\s+allocation|_LOCAL_PRIVATE_DATA|\b[A-Z]:\\', text):
            raise RuntimeError(f'public PDS data leakage/naming blocker: {path.name}')

    print('PDS_PUBLICATION_GATE_PASS')
    print('Hierarchy : PDS flagship operating layer > ADAA / F2R strategy layer')
    print(f"Delayed   : signal {disclosure.get('latest_released_signal_period')} / holding {disclosure.get('completed_holding_month_cutoff')}")
    print('Protected : current target / preview / shadow / current mark / current overlay')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
