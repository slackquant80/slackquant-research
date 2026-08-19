"""Reader-facing QM004 hands-on lab."""
from __future__ import annotations
from pathlib import Path
import argparse, math
import pandas as pd
import numpy as np

HERE=Path(__file__).resolve(); ROOT=HERE.parents[2]
DATA=ROOT/'figures/source_data/qm004_forecast_errors.csv'

def p2(z): return math.erfc(abs(z)/math.sqrt(2.0))

def calc(loss: str, lag: int):
    df=pd.read_csv(DATA)
    ea=df.error_a.to_numpy(float); eb=df.error_b.to_numpy(float)
    if loss=='squared': d=ea**2-eb**2
    else: d=np.abs(ea)-np.abs(eb)
    n=len(d); x=d-d.mean(); lrv=float(np.dot(x,x)/n)
    for k in range(1,lag+1): lrv += 2*float(np.dot(x[:-k],x[k:])/n)
    if lrv <= 0: raise ValueError('Estimated long-run variance is non-positive for this choice.')
    stat=float(d.mean()/math.sqrt(lrv/n))
    return {'mean_loss_diff':float(d.mean()),'long_run_variance':lrv,'dm_stat':stat,'two_sided_p':p2(stat)}

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--loss',choices=['squared','absolute'],default='squared'); ap.add_argument('--lag',type=int,default=3)
    a=ap.parse_args();
    if a.lag < 0: raise SystemExit('--lag must be non-negative')
    r=calc(a.loss,a.lag)
    print(f"Loss: {a.loss}; autocovariance truncation lag: {a.lag}")
    for k,v in r.items(): print(f"{k}: {v:.6f}")
    for k,v in r.items(): print(f"QM004_LAB_METRIC {k}={v:.15g}")

if __name__=='__main__': main()
