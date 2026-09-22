from __future__ import annotations
from pathlib import Path
from html.parser import HTMLParser
import argparse, re, sys

EXPECTED_IDS = {
    'QM001','QM002','QM003','QM004','QM005','QM006','QM007','QM008','QM009','QM010','QM011','QM012','QM013','QM014','QM015','QM016','QM017','QM018','QM019','QM020','QM024','QM025','QM026','QM027','QM028','QM029'
}
EXPECTED_CATEGORIES = {
    'Forecast Evaluation','Statistical Inference','Portfolio Methods','Time-Series Methods','Machine Learning','AI & Foundation Models','Data & Research Design'
}

class IndexParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.div_depth=0; self.catalog_depth=None; self.global_rows=0; self.catalog_rows=0
        self.in_meta=False; self.meta=[]; self.metas=[]
        self.result_count_depth=None; self.result_count_attrs={}; self.result_count_buf=[]; self.result_count_text=None
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='div':
            self.div_depth+=1
            cls=set((a.get('class') or '').split())
            if a.get('id')=='sq-method-catalog': self.catalog_depth=self.div_depth
            if a.get('id')=='sq-method-result-count':
                self.result_count_depth=self.div_depth; self.result_count_attrs=a.copy(); self.result_count_buf=[]
            if 'sq-method-row' in cls:
                self.global_rows+=1
                if self.catalog_depth is not None and self.div_depth>self.catalog_depth: self.catalog_rows+=1
            if 'sq-meta' in cls and self.catalog_depth is not None and self.div_depth>self.catalog_depth:
                self.in_meta=True; self.meta=[]
    def handle_endtag(self,tag):
        if tag=='div':
            if self.in_meta:
                text=' '.join(''.join(self.meta).split())
                if text:self.metas.append(text)
                self.in_meta=False; self.meta=[]
            if self.result_count_depth==self.div_depth:
                self.result_count_text=' '.join(''.join(self.result_count_buf).split()); self.result_count_depth=None
            if self.catalog_depth==self.div_depth:self.catalog_depth=None
            self.div_depth-=1
    def handle_data(self,data):
        if self.in_meta:self.meta.append(data)
        if self.result_count_depth is not None:self.result_count_buf.append(data)

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids=set(); self.in_toc=False; self.toc_targets=[]; self.kicker_depth=0; self.kickers=[]; self.kbuf=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='nav' and a.get('id')=='TOC': self.in_toc=True
        if self.in_toc and tag=='a':
            x=a.get('data-scroll-target') or a.get('href') or ''
            if x.startswith('#'): self.toc_targets.append(x[1:])
        if tag=='div' and 'method-kicker' in set((a.get('class') or '').split()):
            self.kicker_depth=1; self.kbuf=[]
        elif self.kicker_depth and tag=='div': self.kicker_depth+=1
    def handle_endtag(self,tag):
        if self.in_toc and tag=='nav': self.in_toc=False
        if self.kicker_depth and tag=='div':
            self.kicker_depth-=1
            if self.kicker_depth==0:
                self.kickers.append(' '.join(''.join(self.kbuf).split())); self.kbuf=[]
    def handle_data(self,data):
        if self.kicker_depth:self.kbuf.append(data)

def fail(msg):
    print('METHODS_UI_INTEGRITY_FAIL '+msg)
    raise SystemExit(1)

def check(root:Path,label:str):
    if not root.exists(): fail(f'{label}_root_missing={root}')
    idx=root/'index.html'
    if not idx.exists(): fail(f'{label}_index_missing')
    html=idx.read_text(encoding='utf-8',errors='replace')
    ip=IndexParser(); ip.feed(html)
    if ip.result_count_attrs.get('data-canonical-count')!='26': fail(f"{label}_canonical_count={ip.result_count_attrs.get('data-canonical-count')!r}")
    if ip.result_count_text!='26 methods': fail(f"{label}_static_count_text={ip.result_count_text!r}")
    if ip.global_rows!=26: fail(f'{label}_global_rows={ip.global_rows}')
    if ip.catalog_rows!=26: fail(f'{label}_catalog_rows={ip.catalog_rows}')
    ids=[]; cats=[]
    for m in ip.metas:
        parts=[x.strip() for x in m.split('·')]
        if len(parts)>=3:
            ids.append(parts[0]); cats.append(parts[1])
    if set(ids)!=EXPECTED_IDS or len(ids)!=26: fail(f'{label}_catalog_ids count={len(ids)}')
    if set(cats)!=EXPECTED_CATEGORIES: fail(f'{label}_categories={sorted(set(cats))}')
    articles=sorted(root.rglob('article.html'))
    if len(articles)!=26: fail(f'{label}_articles={len(articles)}')
    for p in articles:
        pp=PageParser(); pp.feed(p.read_text(encoding='utf-8',errors='replace'))
        if len(pp.kickers)!=1: fail(f'{label}_kicker_count={p.relative_to(root)}:{len(pp.kickers)}')
        bad=[x for x in pp.toc_targets if x not in pp.ids]
        if bad: fail(f'{label}_toc_missing={p.relative_to(root)}:{bad[:4]}')
    for p in root.rglob('labs/index.html'):
        pp=PageParser(); pp.feed(p.read_text(encoding='utf-8',errors='replace'))
        bad=[x for x in pp.toc_targets if x not in pp.ids]
        if bad: fail(f'{label}_lab_toc_missing={p.relative_to(root)}:{bad[:4]}')
    print(f'METHODS_UI_INTEGRITY_{label.upper()}_PASS catalog_rows=26 articles=26 categories=7 toc_targets=valid')

ap=argparse.ArgumentParser(); ap.add_argument('--require-build',action='store_true'); args=ap.parse_args()
repo=Path(__file__).resolve().parents[1]
check(repo/'public/methods','source')
if args.require_build: check(repo/'out/methods','built')
print('METHODS_UI_INTEGRITY_PASS')
