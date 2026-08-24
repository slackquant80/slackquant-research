from __future__ import annotations
import numpy as np

def momentum(prices, lookback, skip=0):
    x=np.asarray(prices,dtype=float)
    end=len(x)-1-skip
    start=end-lookback
    if start<0: raise ValueError('not enough history')
    return x[end]/x[start]-1.0

if __name__=='__main__':
    prices=[100,102,101,105,107,106,110]
    print(f'm3_s0={momentum(prices,3,0):.10f}')
    print(f'm3_s1={momentum(prices,3,1):.10f}')
    signals=[]
    for t in range(3,len(prices)-1):
        m=prices[t]/prices[t-3]-1
        signals.append((t,m,int(m>0),t+1))
    print('signal_t,momentum,risk_on,holding_period_start')
    for row in signals: print(*row,sep=',')
