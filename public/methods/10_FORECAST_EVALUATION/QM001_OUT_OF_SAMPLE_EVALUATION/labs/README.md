# QM001 Hands-on Lab

## Goal

Reproduce the worked example in **QM001 — Out-of-Sample Forecast Evaluation** and see why better development-sample fit need not translate into better held-out forecasts.

The lab uses the synthetic data distributed with QM001. The data contain one lagged target and 80 lagged noise predictors. The forecasting target is one step ahead.

## What you will do

1. Read the supplied data and identify the development and held-out observations.
2. Fit Model A, an AR(1) benchmark, using only the development sample.
3. Search the candidate noise predictors using only Model A's development-sample residuals.
4. Fit Model B with the selected predictor.
5. Evaluate both models on the held-out targets.
6. Compare the development and held-out RMSE results.

## Python

From the extracted lab bundle or the QM001 folder:

```bash
python labs/python/qm001_hands_on.py
```

Install the lab dependencies with `python -m pip install -r labs/python/requirements.txt` if needed.

## R

From the extracted lab bundle or the QM001 folder:

```bash
Rscript labs/r/qm001_hands_on.R
```

The R lab uses base R only.

## Baseline result

With all 80 candidate noise predictors searched, the lab should reproduce approximately:

| Sample | Model A RMSE | Model B RMSE | Model B vs. A |
|---|---:|---:|---:|
| Development | 1.046 | 0.951 | -9.1% |
| Held-out | 0.887 | 1.101 | +24.1% |

The numerical example is illustrative. It is not evidence that this reversal occurs with any particular frequency or in any particular market.

## Experiment to try

Run the lab with a smaller search such as `--n-search 20` in Python or a trailing value such as `20` in R. This changes the size of the predictor search while keeping the held-out sample untouched. For example, use `python labs/python/qm001_hands_on.py --n-search 20` or `Rscript labs/r/qm001_hands_on.R 20`.

Do not expect the result to move in one direction as the search size changes. Treat each result as an illustration of the difference between model search on development data and evaluation on held-out data, not as a general law about model complexity.
