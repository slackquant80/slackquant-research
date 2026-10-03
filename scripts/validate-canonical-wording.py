#!/usr/bin/env python3
from pathlib import Path
import json, sys
ROOT=Path(__file__).resolve().parents[1]
REG=ROOT/'src/data/canonicalWording.json'
PAGE=ROOT/'src/app/systems/pds/page.tsx'
if not REG.is_file(): raise RuntimeError('canonical wording registry missing')
r=json.loads(REG.read_text(encoding='utf-8'))
if r.get('schema')!='SLACKQUANT_CANONICAL_WORDING_V1': raise RuntimeError('canonical wording registry schema mismatch')
required={
 'adaptiveRiskMeta':'Adaptive Risk Control · bounded hybrid',
 'fxImplementationKicker':'FX implementation',
}
for k,v in required.items():
    if r.get('pds',{}).get(k)!=v: raise RuntimeError(f'canonical wording drift: pds.{k}')
p=PAGE.read_text(encoding='utf-8')
for tok in ['import canonicalWording from "@/data/canonicalWording.json";','canonicalWording.pds.adaptiveRiskMeta','canonicalWording.pds.fxImplementationKicker']:
    if tok not in p: raise RuntimeError(f'PDS page is not registry-bound: {tok}')
retired=list(r.get('retired') or [])
scan_roots=[ROOT/'src/app',ROOT/'src/components',ROOT/'scripts']
for base in scan_roots:
    if not base.exists(): continue
    for f in base.rglob('*'):
        if not f.is_file() or f.suffix.lower() not in {'.ts','.tsx','.js','.jsx','.py','.md'}: continue
        text=f.read_text(encoding='utf-8-sig',errors='replace')
        for tok in retired:
            if tok in text: raise RuntimeError(f'retired wording remains: {tok} :: {f.relative_to(ROOT)}')
built=ROOT/'out/systems/pds/index.html'
if built.is_file():
    bt=built.read_text(encoding='utf-8-sig',errors='replace')
    for v in required.values():
        if v not in bt: raise RuntimeError(f'built PDS page missing canonical wording: {v}')
print('CANONICAL_WORDING_LOCK_PASS')
