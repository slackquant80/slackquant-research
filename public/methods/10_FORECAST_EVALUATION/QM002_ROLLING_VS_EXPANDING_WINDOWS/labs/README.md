# QM002 Hands-on Lab

This short lab compares an expanding estimation window with a fixed-length rolling window on the same synthetic series used in the article.

## Python

```bash
python labs/python/qm002_hands_on.py
python labs/python/qm002_hands_on.py --window 30
python labs/python/qm002_hands_on.py --window 120
```

## R

```bash
Rscript labs/r/qm002_hands_on.R 60
Rscript labs/r/qm002_hands_on.R 30
Rscript labs/r/qm002_hands_on.R 120
```

The baseline uses a 60-observation rolling window. Changing the window alters how quickly older observations leave the estimation sample and how much data remain for estimation. The synthetic result is an illustration, not a claim that one window length is generally optimal.
