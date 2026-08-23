# QM009 Hands-on Lab

This self-contained lab illustrates drift-aware turnover and a symmetric proportional transaction-cost haircut using a four-period synthetic three-asset path.

Run the Python version with a basis-point assumption, for example:

```bash
python python/qm009_hands_on.py 10
```

Or, with base R:

```bash
Rscript r/qm009_hands_on.R 10
```

The cost rate is quoted per dollar of modeled pre-cost absolute trade notional. The lab is educational and does not estimate realized execution costs.
