# QM008 Hands-on Lab

This lab reproduces the deterministic drawdown path used in QM008.

- `data/qm008_wealth_path.csv` — canonical wealth path
- `python/qm008_hands_on.py` — standard-library Python implementation
- `r/qm008_hands_on.R` — base-R implementation
- `index.qmd` — reader-facing lab guide

The convention is fixed: peak-normalized positive drawdown, signed underwater value as its negative, equality recovery, elapsed peak-to-recovery duration, and right-censoring at sample end when recovery has not occurred.
