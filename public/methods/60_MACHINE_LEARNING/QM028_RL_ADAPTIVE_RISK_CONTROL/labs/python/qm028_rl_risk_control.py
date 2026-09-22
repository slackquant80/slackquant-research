import math

core = [0.04, -0.08, -0.03, 0.05, 0.02, -0.06, 0.03, 0.04]
state = [0, 1, 1, 0, 0, 1, 0, 0]  # 1 = defensive, synthetic and predetermined
risk_budget = {0: 1.0, 1: 0.5}
turnover_penalty = 0.001

adaptive=[]
prev=1.0
reward=0.0
for r,s in zip(core,state):
    b=risk_budget[s]
    cost=turnover_penalty*abs(b-prev)
    ar=b*r-cost
    adaptive.append(ar)
    reward += ar - 0.5*max(-ar,0.0)**2
    prev=b

def wealth(rs):
    w=1.0
    peak=1.0
    mdd=0.0
    for r in rs:
        w*=1+r
        peak=max(peak,w)
        mdd=min(mdd,w/peak-1)
    return w-1,mdd

print('Core cumulative / MDD:', wealth(core))
print('Adaptive cumulative / MDD:', wealth(adaptive))
print('Illustrative reward:', round(reward,6))
print('QM028_LAB_PASS')
