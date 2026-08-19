# Reader-facing QM002 lab: compare expanding and rolling estimation windows.
args <- commandArgs(trailingOnly = TRUE)
window <- 60L
if (length(args) >= 1L) window <- as.integer(args[1L])
if (is.na(window) || window < 20L) stop("window must be at least 20")

script_arg <- commandArgs(trailingOnly = FALSE)
file_arg <- sub("^--file=", "", script_arg[grepl("^--file=", script_arg)])
script_path <- normalizePath(file_arg[1L])
root <- normalizePath(file.path(dirname(script_path), "..", ".."))
data_path <- file.path(root, "figures", "source_data", "qm002_series.csv")

fit_ar1 <- function(y, start0, end0) {
  # start0 and end0 use Python-style zero-based boundaries; targets are start0+1 ... end0-1.
  idx_target <- (start0 + 2L):end0
  idx_lag <- (start0 + 1L):(end0 - 1L)
  X <- cbind(1, y[idx_lag])
  solve(crossprod(X), crossprod(X, y[idx_target]))
}

rmse <- function(actual, forecast) sqrt(mean((actual - forecast)^2))

d <- read.csv(data_path)
y <- d$actual
n <- length(y)
break_t <- 220L
min_train <- 80L

out <- data.frame()
for (t0 in min_train:(n - 1L)) {
  be <- fit_ar1(y, 0L, t0)
  start0 <- max(0L, t0 - window - 1L)
  br <- fit_ar1(y, start0, t0)
  lag <- y[t0]
  row <- data.frame(
    t=t0,
    actual=y[t0 + 1L],
    expanding=be[1] + be[2]*lag,
    rolling=br[1] + br[2]*lag
  )
  out <- rbind(out, row)
}

post <- out$t >= break_t
exp_rmse <- rmse(out$actual[post], out$expanding[post])
roll_rmse <- rmse(out$actual[post], out$rolling[post])
pct <- 100*(roll_rmse/exp_rmse - 1)

cat(sprintf("Rolling window: %d\n", window))
cat(sprintf("Post-break RMSE — expanding: %.3f\n", exp_rmse))
cat(sprintf("Post-break RMSE — rolling:   %.3f\n", roll_rmse))
cat(sprintf("Rolling vs expanding:        %+.1f%%\n", pct))
cat(sprintf("QM002_LAB_METRIC window=%d\n", window))
cat(sprintf("QM002_LAB_METRIC post_rmse_expanding=%.12g\n", exp_rmse))
cat(sprintf("QM002_LAB_METRIC post_rmse_rolling=%.12g\n", roll_rmse))
cat(sprintf("QM002_LAB_METRIC post_rolling_vs_expanding_pct=%.12g\n", pct))
