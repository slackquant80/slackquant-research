# QM005 Hands-on Lab — Model Confidence Set

This lab reproduces the transparent `Tmax` Model Confidence Set used in the article. It starts from a synthetic squared-loss panel for five forecasting models and uses fixed moving-block bootstrap indices so the Python and R examples refer to the same resamples.

## What you will do

1. Rank five models by mean squared loss.
2. Test equal predictive ability for the current set.
3. If the test rejects, eliminate the model with the largest standardized excess loss.
4. Repeat until the remaining set is not rejected.
5. Compare the 240-observation baseline with an 80-observation version of the same synthetic sequence.

The shorter sample is included to illustrate a central MCS idea: when the data contain less information for separating models, the surviving set can be larger. This is an illustration, not a general law about sample size.

## Python

```bash
python labs/python/qm005_hands_on.py
python labs/python/qm005_hands_on.py --sample 80
```

## R

```bash
Rscript labs/r/qm005_hands_on.R 240 0.10
Rscript labs/r/qm005_hands_on.R 80 0.10
```

The implementation is deliberately transparent. Production applications should document the loss function, candidate set, bootstrap design, test statistic, elimination rule, and confidence level, and should use an implementation whose statistical details are appropriate for the application.
