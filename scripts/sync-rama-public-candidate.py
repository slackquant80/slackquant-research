#!/usr/bin/env python3
"""Import only the exact, separately approved RAMA reader artifact into SlackQuant.
No refresh, model execution, source uploads, Git operations, or deployment.
Approval is supplied by the governed release owner, not manufactured by this script.
"""
import argparse
import hashlib
import json
import math
import os
import re
import tempfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'public/assets/systems/rama/index.html'
SCHEMA = 'RAMA_PUBLIC_WORKSPACE_V1'
COST = 'SLACKQUANT_LIVE_BILATERAL_10BP_PER_SIDE_V1'
POLICIES = {'GMV', 'EW', 'STATIC60_40'}
ASSETS = set('SPY QQQ IWM EFA EEM VNQ DBC IEF TLT GLD TIP BIL'.split())


def require(ok, message):
    if not ok:
        raise ValueError(message)


def sha(data):
    return hashlib.sha256(data).hexdigest()


def strict_json(raw):
    def pairs(items):
        d = {}
        for k, v in items:
            require(k not in d, 'duplicate JSON key')
            d[k] = v
        return d
    def bad(value):
        raise ValueError('non-finite JSON: ' + value)
    return json.loads(raw, object_pairs_hook=pairs, parse_constant=bad)


def fields(obj, names):
    require(isinstance(obj, dict) and set(obj) == set(names.split()), 'unexpected public fields')


def iso(s):
    require(isinstance(s, str) and date.fromisoformat(s).isoformat() == s, 'invalid date')
    return s


def weight(w):
    require(isinstance(w, dict) and set(w) <= ASSETS-{'TIP'} and w, 'weight assets')
    require(all(type(x) in (int,float) and math.isfinite(x) and x >= 0 for x in w.values()) and abs(sum(w.values())-1)<1e-9, 'weight values')


def validate_state(d):
    fields(d, 'schema through signal execution clock readyExecution dailyReady costPolicy accounting official preview ready drift policies paper historyClock')
    require(d['schema']==SCHEMA and d['costPolicy']==COST and d['dailyReady'] is True, 'schema / cost / daily')
    require(d['accounting']=='gross_factor * (1 - 0.001 * full_L1); previous target earns through execution close', 'accounting convention')
    require(iso(d['signal']) < iso(d['execution']) <= iso(d['through']), 'effective clock')
    require(d['clock'] in ('TARGET_READY_AWAITING_CLOSE','REFERENCE_CLOSE_OBSERVED'), 'clock state')
    for x in (d['official'],d['ready'],d['preview']):
        if x is None:continue
        fields(x,'signalClose riskOn selected target momentumScores')
        require(type(x['riskOn']) is bool and set(x['momentumScores'])==ASSETS and set(x['selected'])<=ASSETS-{'TIP'}, 'decision universe')
        iso(x['signalClose']);weight(x['target'])
        require(all(type(v) in (float,int) and math.isfinite(v) for v in x['momentumScores'].values()), 'scores')
    require(d['official']['signalClose']==d['signal'],'official signal')
    pending=d['clock']=='TARGET_READY_AWAITING_CLOSE'
    require(bool(d['ready'])==bool(d['readyExecution'])==pending and not(d['ready'] and d['preview']),'ready/preview')
    if pending:require(d['ready']['signalClose']==d['through']<iso(d['readyExecution']),'ready date')
    if d['preview']:require(d['preview']['signalClose']==d['through'],'preview date')
    weight(d['drift'])
    require(set(d['policies'])==set(d['paper'])==POLICIES,'policy identities')
    support=None
    for k,p in d['policies'].items():
        fields(p,'metrics rows partial wealth daily currentDaily calendarYears calendarMonths dailyMetrics')
        fields(p['metrics'],'calendarMtd calendarYtd');fields(p['dailyMetrics'],'cagrPct volPct sharpe mddPct calmar observations');fields(d['paper'][k],'cagr mdd')
        require(all(type(v) in (int,float) and math.isfinite(v) for x in (p['metrics'],p['dailyMetrics'],d['paper'][k]) for v in x.values()),'metric values')
        for key,pattern in [('calendarYears',r'\d{4}'),('calendarMonths',r'\d{4}-(0[1-9]|1[0-2])')]:
            require(all(re.fullmatch(pattern,t) and type(v) in (int,float) and math.isfinite(v) for t,v in p[key].items()),'calendar return values')
        require(len(p['rows'])>=215,'history length')
        rows=p['rows']+[p['partial']]
        for i,r in enumerate(rows):
            require(isinstance(r,list) and len(r)==7,'row shape')
            require(r[0]==iso(r[1])[:7] and iso(r[2])>=r[1] and (not i or rows[i-1][2]==r[1]),'row date sequence')
            weight(r[4]);require(r[3]>-1 and 0<=r[5]<=1+1e-9,'row arithmetic')
            require(r[6]==('FROZEN' if i<215 else 'CURRENT_VINTAGE_RECONSTRUCTION'),'row source')
        require(rows[0][1]=='2008-08-01' and rows[214][2]=='2026-07-01','frozen clock')
        require(rows[-1][1]==d['execution'] and rows[-1][2]==d['through'],'open interval')
        ds=p['daily'];cur=p['currentDaily'];dates=[iso(x[0]) for x in ds];now=[iso(x[0]) for x in cur]
        require(dates==sorted(set(dates)) and now==sorted(set(now)) and dates[0]==rows[0][1] and dates[-1]==now[0]==d['execution'] and now[-1]==d['through'],'daily clock')
        require(all(len(x)==3 and x[1]>0 and -1<x[2]<=1e-12 for x in ds) and all(len(x)==2 and x[1]>0 for x in cur),'daily values')
        require(abs(ds[0][1]-1)<1e-9 and abs(ds[-1][1]-p['wealth'])<1e-8,'completed wealth')
        require(abs(cur[-1][1]-p['wealth']*(1+rows[-1][3]))<1e-8,'current wealth')
        if support is None:support=(dates,now)
        else:require(support==(dates,now),'common daily dates')
    gm=d['policies']['GMV'];require(gm['partial'][4]==d['official']['target'],'official target parity')
    rows=gm['rows']+[gm['partial']]
    require(set(d['historyClock'])=={r[0] for r in rows},'history clock keys')
    for r in rows:
        x=d['historyClock'][r[0]];fields(x,'signalClose signalMonth holdingMonth executionClose valuedThrough state')
        require(iso(x['signalClose'])<r[1] and x['signalMonth']==x['signalClose'][:7] and x['holdingMonth']==r[0] and x['executionClose']==r[1] and x['valuedThrough']==r[2] and x['state']==('OPEN' if r is rows[-1] else 'CLOSED'),'history clock')
    # Only dates, enumerations, tickers and exact accounting/schema strings are allowed as values.
    allowed=ASSETS|{SCHEMA,COST,d['accounting'],'TARGET_READY_AWAITING_CLOSE','REFERENCE_CLOSE_OBSERVED','FROZEN','CURRENT_VINTAGE_RECONSTRUCTION','OPEN','CLOSED'}
    def scan(obj):
        if isinstance(obj,dict):
            for k,v in obj.items():
                require(re.fullmatch(r'[A-Za-z0-9_-]+',k) is not None,'unexpected key');scan(v)
        elif isinstance(obj,list):
            for v in obj:scan(v)
        elif isinstance(obj,str):require(obj in allowed or re.fullmatch(r'\d{4}(?:-\d{2}(?:-\d{2})?)?',obj),'unexpected text')
        elif type(obj) in (float,int):require(math.isfinite(obj),'nonfinite')
        else:require(obj is None or type(obj) is bool,'invalid scalar')
    scan(d)
    return d


def embedded(html):
    s=html.decode('utf-8');marker='<script>const D='
    require(s.count(marker)==1,'dashboard data marker')
    rest=s.split(marker,1)[1]
    _,end=json.JSONDecoder().raw_decode(rest)
    require(rest[end:].startswith(",K=['GMV','EW','STATIC60_40']"),'dashboard state boundary')
    require('Working paper v0.20' in s and not re.search(r'PRIVATE REVIEW|private design and data review|v0\.13|_LOCAL_(?:PRIVATE_DATA|RUNTIME|CACHE)',s,re.I),'stale or private wording')
    return strict_json(rest[:end])


def approved(candidate, approval, expected_approval_hash, *, existing_model_refresh=False):
    receipt=strict_json((candidate/'PRIVATE_REVIEW_RECEIPT.json').read_bytes())
    raw=approval.read_bytes();require(sha(raw)==expected_approval_hash,'approval hash')
    a=strict_json(raw)
    require(receipt['schema']==a['schema']==SCHEMA and receipt['status']=='HOLD_PUBLIC_APPROVAL' and a['status']=='APPROVED_PUBLIC_RELEASE','release authority')
    require(a['rights']=='APPROVED' and a['ssrnId']=='7757240','rights / paper identity')
    if existing_model_refresh:
        require(a['venue']=='NOT_APPLICABLE_TO_EXISTING_MODEL_REFRESH' and a.get('basis')=='OPERATOR_CONFIRMED_THIS_RUN','model refresh consent')
    else:
        require(a['venue']=='VERIFIED','venue verification')
    require(a['scope']=='RAMA_DERIVED_WORKSPACE_ONLY' and a['candidate']==receipt['candidate'] and a['artifacts']==receipt['artifacts'],'exact candidate approval')
    require(set(a['artifacts'])=={'index.html','public_state.json'},'artifact scope')
    html=(candidate/'index.html').read_bytes();state=(candidate/'public_state.json').read_bytes()
    require(sha(html)==a['artifacts']['index.html'] and sha(state)==a['artifacts']['public_state.json'],'artifact hash')
    d=validate_state(strict_json(state));require(embedded(html)==d,'embedded state mismatch')
    require(d['through']==receipt['marketThrough'] and d['execution']==receipt['completedThrough'],'receipt date mismatch')
    return html,d


def sync(candidate,approval,expected_approval_hash,write=False,target=TARGET):
    html,d=approved(candidate,approval,expected_approval_hash)
    if target.exists():
        old=validate_state(embedded(target.read_bytes()));require(old['through']<=d['through'] and old['execution']<=d['execution'],'clock regression')
    changed=not target.exists() or target.read_bytes()!=html
    if write and changed:
        target.parent.mkdir(parents=True,exist_ok=True)
        fd,name=tempfile.mkstemp(prefix='.rama-',dir=target.parent)
        try:
            with os.fdopen(fd,'wb') as f:f.write(html);f.flush();os.fsync(f.fileno())
            os.replace(name,target)
        finally:
            if os.path.exists(name):os.unlink(name)
    return {'status':'RAMA_PUBLIC_ARTIFACT_PASS','mode':'WRITE' if write else 'CHECK','changed':changed,'marketThrough':d['through'],'completedThrough':d['execution'],'sha256':sha(html)}


if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--candidate',type=Path,required=True);p.add_argument('--approval',type=Path,required=True);p.add_argument('--approval-sha256',required=True)
    m=p.add_mutually_exclusive_group(required=True);m.add_argument('--check',action='store_true');m.add_argument('--write',action='store_true');a=p.parse_args()
    print(json.dumps(sync(a.candidate,a.approval,a.approval_sha256,a.write),indent=2))
