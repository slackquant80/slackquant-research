#!/usr/bin/env python3
from pathlib import Path
import re
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
print('SYSTEM_PUBLICATION_BOUNDARY_PASS')
