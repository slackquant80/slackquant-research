"""Reader-facing QM005 lab: run a transparent Tmax Model Confidence Set."""
from __future__ import annotations
from pathlib import Path
import argparse
import numpy as np
import pandas as pd

HERE=Path(__file__).resolve(); ROOT=HERE.parents[2]
DATA=ROOT/'figures/source_data/qm005_losses.csv'
MODELS=['A','B','C','D','E']

def load_indices(n:int)->np.ndarray:
    path=ROOT/f'figures/source_data/qm005_bootstrap_indices_n{n}.csv'
    if not path.exists(): raise SystemExit('This lab includes fixed bootstrap indices for --sample 80 or 240.')
    return pd.read_csv(path).to_numpy(dtype=int)-1

def mcs_tmax(L:pd.DataFrame,idx:np.ndarray,alpha:float):
    names=list(L.columns); Xall=L.to_numpy(float); active=list(range(len(names))); rows=[]
    while len(active)>1:
        X=Xall[:,active]; means=X.mean(0); rel=means-means.mean()
        bm=X[idx].mean(axis=1); br=bm-bm.mean(axis=1,keepdims=True); se=br.std(axis=0,ddof=1)
        t=rel/se; stat=float(t.max()); bs=((br-rel)/se).max(axis=1)
        p=float((1+np.sum(bs>=stat))/(len(bs)+1)); j=int(np.argmax(t)); elim=active[j]
        rows.append((len(active),names[elim],stat,p,p<=alpha))
        if p>alpha: break
        active.remove(elim)
    return [names[i] for i in active],rows

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--sample',type=int,choices=[80,240],default=240); ap.add_argument('--alpha',type=float,default=0.10)
    a=ap.parse_args(); d=pd.read_csv(DATA).iloc[:a.sample]; idx=load_indices(a.sample)
    final,rows=mcs_tmax(d[MODELS],idx,a.alpha)
    print(f'Sample: {a.sample} observations | confidence level: {100*(1-a.alpha):.1f}%')
    print('\nMean squared loss:')
    for m,v in d[MODELS].mean().items(): print(f'  {m}: {v:.3f}')
    print('\nSequential MCS path:')
    for k,(nm,elim,stat,p,reject) in enumerate(rows,1):
        action=f'eliminate {elim}' if reject else 'stop'
        print(f'  step {k}: {nm} models | Tmax={stat:.3f} | p={p:.3f} | {action}')
    print('Final MCS: {'+', '.join(final)+'}')
    print(f'QM005_LAB_FINAL_SET={",".join(final)}')
    for k,(nm,elim,stat,p,reject) in enumerate(rows,1): print(f'QM005_LAB_STEP{k}_P={p:.12f}')

if __name__=='__main__': main()
