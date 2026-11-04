#!/usr/bin/env python3
from pathlib import Path
import re
import json
import math
ROOT=Path(__file__).resolve().parents[1]

def need(cond,msg):
    if not cond: raise SystemExit(f'SYSTEM_PUBLICATION_BOUNDARY_FAIL: {msg}')
def txt(rel):
    p=ROOT/rel
    need(p.is_file(),f'missing {rel}')
    return p.read_text(encoding='utf-8-sig')

pds=txt('scripts/publish-pds-public.ps1')
need('PDS_SOURCE_OWNED_RELEASE_DELEGATE_V1' in pds,'PDS compatibility publisher is not delegated')
need('PDS_RELEASE.ps1' in pds and '-Action refresh-publish' in pds,'PDS compatibility publisher does not call canonical source controller')
for forbidden in ['sync-pds-public.ps1','npm.cmd run typecheck','npm.cmd run build','validate-adaa-system.ps1','git push origin main']:
    need(forbidden not in pds,f'PDS compatibility publisher contains duplicate release logic: {forbidden}')

release=txt('scripts/validate-release.mjs')
need('validate-system-publication-boundaries.py' in release,'canonical release gate does not include publication-boundary audit')
doc=txt('docs/SYSTEM_PUBLICATION_BOUNDARIES.md')
for token in ['PDS','Equity Alpha','F2R','ADAA','Scenario Stress Lab','npm run validate:release']:
    need(token in doc,f'boundary document missing {token}')

systems=txt('src/data/systems.ts')
for slug in ['pds','adaa','f2r','equity-alpha','scenario-stress-lab']:
    need(f'slug: "{slug}"' in systems,f'system registry missing {slug}')

need((ROOT/'src/app/systems/pds/page.tsx').is_file(),'PDS page missing')
need((ROOT/'src/app/systems/equity-alpha/page.tsx').is_file(),'Equity Alpha page missing')
need((ROOT/'src/app/systems/scenario-stress-lab/page.tsx').is_file(),'Stress Lab page missing')

# Fast publication consistency checks. These read local public data only;
# never rerun a model, vendor price feed, or download live market data.
def js_payload(rel, prefix):
    raw = txt(rel).strip()
    need(raw.startswith(prefix), f'{rel}: public assignment missing')
    return json.loads(raw[len(prefix):].strip().removesuffix(';').strip())

def completed(system):
    obj = json.loads(txt(f'public/data/systems/{system}/live_evidence.json'))
    rows = obj.get('path') or []
    need(obj.get('schema') == 'SLACKQUANT_LIVE_EVIDENCE_V1' and obj.get('system') == system.upper(),
         f'{system}: invalid public evidence identity')
    need(len(rows) > 12 and all(re.fullmatch(r'\d{4}-\d{2}-\d{2}', str(r.get('date'))) for r in rows),
         f'{system}: missing or invalid completed dates')
    dates = [r['date'] for r in rows]
    need(dates == sorted(set(dates)), f'{system}: duplicate or nonmonotonic dates')
    end = dates[-1]
    need(end == obj.get('completedThrough') == obj.get('supportEnd'),
         f'{system}: platform completed cutoff does not match path')
    recent = obj.get('recentMonthly') or []
    need(bool(recent) and recent[-1].get('month') == end[:7],
         f'{system}: latest monthly return not aligned with completed month')
    need(all(math.isfinite(float(r['primary'])) for r in rows),
         f'{system}: non-finite public wealth')
    return end

adaa_end, f2r_end = completed('adaa'), completed('f2r')
adaa = js_payload('public/assets/systems/adaa/snapshot.js', 'window.ADAA_SNAPSHOT =')
a_meta = adaa.get('snapshot_meta') or {}
a_clock = adaa.get('decision_clock') or {}
need(a_meta.get('validation_status') == 'PASS_RAW_PARITY',
     'ADAA: snapshot parity status not PASS')
need(a_clock.get('canonical_performance_support_end') == adaa_end,
     'ADAA: dashboard and platform completed cutoffs differ')
need(a_meta.get('market_data_through', '') >= adaa_end,
     'ADAA: market clock predates completed evidence')
adaa_html = txt('public/assets/systems/adaa/index.html')
need('snapshot.js' in adaa_html and 'dashboard.js' in adaa_html,
     'ADAA: dashboard asset references missing')

eq = js_payload('public/dashboards/equity-alpha/data/dashboard_data.js',
                'window.EA_HISTORY_DATA =')
live = js_payload('public/dashboards/equity-alpha/data/live_overlay.js',
                  'window.EA_LIVE_OVERLAY =')
history = eq.get('globalFinalDaily') or []
e_meta = eq.get('meta') or {}
l_meta = live.get('meta') or {}
need(len(history) > 12 and e_meta.get('performanceThroughCompletedDate') == history[-1].get('date'),
     'Equity Alpha: completed daily cutoff mismatch')
need(l_meta.get('completedCloseCutoff') == history[-1].get('date'),
     'Equity Alpha: history/current completed boundaries differ')
need(l_meta.get('marketDataThrough','') >= history[-1]['date'],
     'Equity Alpha: market clock predates completed history')
need(l_meta.get('signalMonth') == e_meta.get('latestSignalMonth') and
     l_meta.get('holdingMonth','') > l_meta.get('signalMonth',''),
     'Equity Alpha: signal/holding month mismatch')
holdings = live.get('currentHoldings') or []
need(bool(holdings) and abs(sum(float(x.get('targetWeight',0)) for x in holdings)-1) < 1e-8,
     'Equity Alpha: official target weights do not sum to 100%')
rank = live.get('currentUniverseRanks') or []
need(bool(rank) and len(rank) == len(set(str(x.get('ticker')) for x in rank)),
     'Equity Alpha: current universe empty or contains duplicates')
eq_app = txt('public/dashboards/equity-alpha/assets/app.js')
need('Current universe (' in eq_app and 'latest.length' in eq_app,
     'Equity Alpha: current universe displayed count is not live-bound')
need('Completed YTD' in eq_app and 'Current YTD' in eq_app,
     'Equity Alpha: current/completed YTD labels missing')
eq_html = txt('public/dashboards/equity-alpha/index.html')
need(all(t in eq_html for t in ('data/dashboard_data.js','data/live_overlay.js','assets/app.js')),
     'Equity Alpha: dashboard asset references missing')
need('f2r-forecast-to-rank-allocation.streamlit.app' in systems and
     '"/systems/adaa/dashboard/"' in systems and
     '"/dashboards/equity-alpha/"' in systems,
     'SlackQuant: canonical dashboard links missing')
index = txt('src/app/systems/page.tsx')
need('getLiveSystemEvidence("adaa").completedThrough' in index and
     'getLiveSystemEvidence("f2r").completedThrough' in index and
     'getEquityAlphaEvidence().supportEnd' in index and
     'pdsCanonicalSummary.markThrough' in index,
     'SlackQuant systems index: independently published clocks not bound')
# F2R candidate static viewer remains additive until accepted; validates only the
# source-owned public snapshot and platform-completed history (no vendor re-pricing).
static_state = json.loads(txt('public/data/systems/f2r/public_state.json'))
need(static_state.get('schema_version') == '2.0' and static_state.get('system',{}).get('short_name') == 'F2R',
     'F2R static: invalid source-owned snapshot schema/system')
p = static_state.get('completed_performance') or {}
need(p.get('as_of_date') == p.get('support_end') == f2r_end,
     'F2R static: completed cutoff disagrees with the existing platform evidence')
official = (static_state.get('live_state') or {}).get('official') or {}
selection = official.get('holdings') or []
need(len(selection) == 4 and len({h.get('asset') for h in selection}) == 4 and
     abs(sum(float(h.get('target_weight', 0)) for h in selection)-1) < 1e-8,
     'F2R static: current official selection/weight invalid')
need(official.get('signal_period','') < official.get('holding_month',''),
     'F2R static: official signal/holding clock invalid')
need(len(p.get('growth_series') or []) > 100 and len(p.get('drawdown_series') or []) > 100,
     'F2R static: completed performance series missing')
need((ROOT/'src/app/systems/f2r/dashboard/page.tsx').is_file() and
     (ROOT/'src/components/F2RStaticDashboard.tsx').is_file(),
     'F2R static: viewer source missing')

print('SYSTEM_PLATFORM_DATA_PARITY_PASS ADAA=' + adaa_end +
      ' F2R=' + f2r_end + ' EquityAlpha=' + history[-1]['date'])

print('SYSTEM_PUBLICATION_BOUNDARY_PASS')
