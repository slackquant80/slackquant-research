# QM003 Hands-on Lab — Move the Feature Across the Boundary

This 10–15 minute exercise uses the same synthetic series as the QM003 article.

## Goal

Compare three features for forecasting the next-period target:

1. `clean`: the predictor observed at the forecast origin;
2. `centered`: a three-point smoother that also uses the next predictor value; and
3. `future`: the next predictor value itself.

The purpose is not to find the best model. It is to see how historical performance changes when a feature is allowed to cross the information boundary.

## Python

From the `QM003_HANDS_ON_LAB` folder:

```bash
python labs/python/qm003_hands_on.py
```

To run one feature only:

```bash
python labs/python/qm003_hands_on.py --feature clean
python labs/python/qm003_hands_on.py --feature centered
python labs/python/qm003_hands_on.py --feature future
```

## R

```bash
Rscript labs/r/qm003_hands_on.R all
Rscript labs/r/qm003_hands_on.R centered
```

## What to notice

The centered and future-aware features can look better because they use information that is not available at the historical forecast origin. That apparent gain is not a valid forecasting advantage.
