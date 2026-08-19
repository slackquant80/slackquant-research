# QM004 Hands-on Lab

## Goal

Reproduce the baseline Diebold–Mariano comparison, then see how the loss function and long-run variance adjustment change the statistical question.

## Python

```bash
pip install -r labs/python/requirements.txt
python labs/python/qm004_hands_on.py --loss squared --lag 3
python labs/python/qm004_hands_on.py --loss squared --lag 0
python labs/python/qm004_hands_on.py --loss absolute --lag 3
```

## R

```bash
Rscript labs/r/qm004_hands_on.R squared 3
Rscript labs/r/qm004_hands_on.R squared 0
Rscript labs/r/qm004_hands_on.R absolute 3
```

Do not choose a lag or loss function because it produces the p-value you prefer. The exercise is about how the test definition maps to the forecasting question.
