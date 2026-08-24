from __future__ import annotations
import numpy as np

def overlap(a,b):
    a=np.asarray(a,float); b=np.asarray(b,float)
    return np.minimum(a,b).sum()

def half_l1(a,b):
    return 0.5*np.abs(np.asarray(a,float)-np.asarray(b,float)).sum()

def action_flags(weights, tau=0.2):
    w=np.asarray(weights,float)
    d=np.abs(np.diff(w,axis=0)).sum(axis=1)
    return d>tau

def timing_disagreement(a,b,tau=0.2):
    fa=action_flags(a,tau); fb=action_flags(b,tau)
    return np.mean(fa!=fb),fa,fb

if __name__=='__main__':
    A=np.array([[.8,.2],[.8,.2],[.3,.7],[.3,.7]])
    B=np.array([[.75,.25],[.4,.6],[.4,.6],[.7,.3]])
    print('overlaps', [round(overlap(a,b),4) for a,b in zip(A,B)])
    d,fa,fb=timing_disagreement(A,B,.2)
    print('flags_A',fa.astype(int).tolist())
    print('flags_B',fb.astype(int).tolist())
    print('timing_disagreement',d)
    print('avg_half_l1',np.mean([half_l1(a,b) for a,b in zip(A,B)]))
