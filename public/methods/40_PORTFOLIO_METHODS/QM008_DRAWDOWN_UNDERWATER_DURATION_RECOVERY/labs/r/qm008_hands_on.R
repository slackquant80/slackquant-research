args <- commandArgs(trailingOnly = FALSE)
file_arg <- grep("^--file=", args, value = TRUE)
script_path <- if (length(file_arg)) sub("^--file=", "", file_arg[1]) else normalizePath("qm008_hands_on.R")
root <- normalizePath(file.path(dirname(script_path), ".."), mustWork = TRUE)
df <- read.csv(file.path(root, "data", "qm008_wealth_path.csv"))

tol <- 1e-12
high <- -Inf
last_high <- df$t[1]
out <- data.frame()
for (k in seq_len(nrow(df))) {
  t <- df$t[k]
  w <- df$wealth[k]
  if (w >= high - tol) {
    if (w > high + tol) high <- w
    last_high <- t
    dd <- 0
    age <- 0
  } else {
    dd <- 1 - w/high
    age <- t - last_high
  }
  out <- rbind(out, data.frame(t=t, wealth=w, hwm=high, drawdown=dd, underwater=-dd, age=age))
}
print(out, row.names=FALSE)
cat(sprintf("maximum drawdown=%.6f\n", max(out$drawdown)))
cat(sprintf("terminal censored=%s\n", tolower(as.character(tail(out$drawdown,1) > tol))))
