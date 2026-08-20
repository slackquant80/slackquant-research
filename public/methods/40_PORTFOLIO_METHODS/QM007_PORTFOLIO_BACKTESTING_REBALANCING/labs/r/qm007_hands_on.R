simulate_path <- function(df, rebalance_every) {
  target <- c(0.5, 0.5)
  w <- target
  wealth <- 1.0
  total_turnover <- 0.0
  for (k in seq_len(nrow(df))) {
    r <- c(df$asset_a_return[k], df$asset_b_return[k])
    rp <- sum(w * r)
    gross <- 1 + rp
    wealth <- wealth * gross
    drift <- w * (1 + r) / gross
    if (rebalance_every > 0 && df$period[k] %% rebalance_every == 0) {
      total_turnover <- total_turnover + 0.5 * sum(abs(target - drift))
      w <- target
    } else {
      w <- drift
    }
  }
  c(wealth = wealth, turnover = total_turnover)
}

args <- commandArgs(trailingOnly = FALSE)
file_arg <- grep("^--file=", args, value = TRUE)
script_path <- if (length(file_arg)) sub("^--file=", "", file_arg[1]) else normalizePath("qm007_hands_on.R")
root <- normalizePath(file.path(dirname(script_path), ".."), mustWork = TRUE)
df <- read.csv(file.path(root, "data", "qm007_two_asset_returns.csv"))

for (freq in c(1, 2, 0)) {
  label <- if (freq == 1) "every period" else if (freq == 2) "every 2 periods" else "buy-and-hold"
  ans <- simulate_path(df, freq)
  cat(sprintf("%s: terminal wealth=%.6f, cumulative one-way turnover=%.6f\n", label, ans["wealth"], ans["turnover"]))
}
