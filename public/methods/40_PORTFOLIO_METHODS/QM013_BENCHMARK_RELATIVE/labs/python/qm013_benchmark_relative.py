from __future__ import annotations
import numpy as np

def active_metrics(p,b,periods=12):
    p=np.asarray(p,float); b=np.asarray(b,float)
    if len(p)!=len(b) or len(p)<2: raise ValueError('aligned series required')
    a=p-b
    te=np.std(a,ddof=1)*np.sqrt(periods)
    ann=np.mean(a)*periods
    ir=np.nan if te==0 else ann/te
    return a,ann,te,ir

def relative_wealth(p,b):
    p=np.asarray(p,float); b=np.asarray(b,float)
    return np.cumprod(1+p)/np.cumprod(1+b)

def drawdown(wealth):
    q=np.asarray(wealth,float)
    peak=np.maximum.accumulate(np.r_[1.0,q])
    path=np.r_[1.0,q]
    return path/peak-1.0

if __name__=='__main__':
    p=[.02,.01,-.01,.03]; b=[.01,.015,-.005,.02]
    a,ann,te,ir=active_metrics(p,b)
    q=relative_wealth(p,b); d=drawdown(q)
    print('active',a.tolist())
    print('ann_active',ann,'te',te,'ir',ir)
    print('relative_wealth',q.tolist())
    print('relative_mdd',float(d.min()))
