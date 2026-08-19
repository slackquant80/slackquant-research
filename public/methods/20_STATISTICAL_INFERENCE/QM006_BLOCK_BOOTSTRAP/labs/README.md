# QM006 Hands-on Lab — Block Bootstrap

This 10–15 minute exercise uses a synthetic AR(1) series with positive serial dependence. The goal is to see why resampling individual observations can erase the dependence that matters for uncertainty, while a moving-block bootstrap preserves local order within sampled blocks.

## Run the baseline

Python:

```bash
python labs/python/qm006_hands_on.py
```

R:

```bash
Rscript labs/r/qm006_hands_on.R 16
```

The baseline uses block length 16. Then try 4, 8, or 32. Do not expect one block length to be universally best; the exercise is about the trade-off between preserving dependence and using many distinct blocks.

## What to look for

- The original synthetic series has strong positive lag-1 autocorrelation.
- IID resampling largely removes that serial structure.
- Moving-block resampling preserves much more of it within blocks.
- In this particular positive-dependence example, the IID bootstrap gives a much smaller standard error for the sample mean than the block bootstrap.

The numerical size of the gap is specific to this synthetic draw and should not be treated as a general empirical rule.
