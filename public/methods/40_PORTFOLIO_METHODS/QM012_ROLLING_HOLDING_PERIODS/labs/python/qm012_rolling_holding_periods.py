from __future__ import annotations
import numpy as np

def rolling_growth(returns,horizon):
    r=np.asarray(returns,float)
    if horizon<=0 or horizon>len(r): raise ValueError('invalid horizon')
    return np.array([np.prod(1+r[s:s+horizon]) for s in range(len(r)-horizon+1)])

def max_drawdown_from_returns(returns):
    w=np.cumprod(1+np.asarray(returns,float))
    peak=np.maximum.accumulate(np.r_[1.0,w])
    path=np.r_[1.0,w]
    return np.min(path/peak-1.0)

if __name__=='__main__':
    t=np.arange(300)
    r=0.004+0.015*np.sin(t/9.0)-0.002*np.cos(t/17.0)
    for h in [60,120,180,240]:
        g=rolling_growth(r,h)
        print(h,len(g),float(np.median(g-1)))
    print('first_60m_mdd',max_drawdown_from_returns(r[:60]))
