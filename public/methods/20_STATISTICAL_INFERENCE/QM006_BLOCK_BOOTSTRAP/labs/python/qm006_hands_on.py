"""QM006 hands-on lab: compare IID and moving-block bootstrap uncertainty."""
from pathlib import Path
import argparse, numpy as np, pandas as pd
HERE=Path(__file__).resolve(); Q=HERE.parents[2]
DATA=Q/'figures/source_data/qm006_ar1_series.csv'; IID=Q/'figures/source_data/qm006_iid_indices.csv'

def mbb_indices(starts,l,n):
    base=np.arange(l); rows=[]
    for row in starts:
        idx=np.concatenate([s+base for s in row])[:n]; rows.append(idx)
    return np.asarray(rows,dtype=int)

def lag1(a): return float(np.corrcoef(a[:-1],a[1:])[0,1])

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--block-length',type=int,choices=[4,8,16,32],default=16); a=ap.parse_args()
    x=pd.read_csv(DATA).x.to_numpy(float); n=len(x)
    iid=pd.read_csv(IID).to_numpy(int)-1
    l=a.block_length; starts=pd.read_csv(Q/f'figures/source_data/qm006_mbb_starts_l{l}.csv').to_numpy(int)-1
    mbb=mbb_indices(starts,l,n)
    iid_se=x[iid].mean(axis=1).std(ddof=1); mbb_se=x[mbb].mean(axis=1).std(ddof=1)
    iid_acf=np.mean([lag1(x[r]) for r in iid[:500]]); mbb_acf=np.mean([lag1(x[r]) for r in mbb[:500]])
    print(f'Sample lag-1 autocorrelation: {lag1(x):.3f}')
    print(f'IID bootstrap SE of mean:      {iid_se:.3f}')
    print(f'MBB SE of mean (l={l}):       {mbb_se:.3f}')
    print(f'Average resample lag-1 ACF, IID: {iid_acf:.3f}')
    print(f'Average resample lag-1 ACF, MBB: {mbb_acf:.3f}')
    print(f'QM006_LAB_IID_SE={iid_se:.12f}')
    print(f'QM006_LAB_MBB_SE={mbb_se:.12f}')
if __name__=='__main__': main()
