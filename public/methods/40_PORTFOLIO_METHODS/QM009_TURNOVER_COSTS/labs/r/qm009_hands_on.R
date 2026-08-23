args <- commandArgs(trailingOnly = TRUE)
cost_bps <- if (length(args) >= 1) as.numeric(args[1]) else 10

all_args <- commandArgs(trailingOnly = FALSE)
file_arg <- grep("^--file=", all_args, value = TRUE)
this_file <- normalizePath(sub("^--file=", "", file_arg[1]), winslash = "/", mustWork = TRUE)
root <- normalizePath(file.path(dirname(this_file), ".."), winslash = "/", mustWork = TRUE)
rows <- read.csv(file.path(root, "data", "qm009_three_asset_case.csv"), stringsAsFactors = FALSE)

weights <- c(0.50, 0.30, 0.20)
wealth <- 100.0
cumulative_full_l1 <- 0.0
cumulative_one_way <- 0.0

for (j in seq_len(nrow(rows))) {
  row <- rows[j, ]
  returns <- c(row$r_A, row$r_B, row$r_C)
  gross_factor <- sum(weights * (1 + returns))
  pre_cost_wealth <- wealth * gross_factor
  drifted <- weights * (1 + returns) / gross_factor

  if (row$rebalance == 1) {
    target <- c(row$target_A, row$target_B, row$target_C)
    full_l1 <- sum(abs(target - drifted))
    one_way <- 0.5 * full_l1
    kappa <- (cost_bps / 10000) * full_l1
    wealth <- pre_cost_wealth * (1 - kappa)
    weights <- target
    cumulative_full_l1 <- cumulative_full_l1 + full_l1
    cumulative_one_way <- cumulative_one_way + one_way
  } else {
    wealth <- pre_cost_wealth
    weights <- drifted
  }
}

cat(sprintf("cost_bps=%g\n", cost_bps))
cat(sprintf("terminal_net_wealth=%.6f\n", wealth))
cat(sprintf("cumulative_full_l1=%.6f\n", cumulative_full_l1))
cat(sprintf("cumulative_one_way=%.6f\n", cumulative_one_way))
