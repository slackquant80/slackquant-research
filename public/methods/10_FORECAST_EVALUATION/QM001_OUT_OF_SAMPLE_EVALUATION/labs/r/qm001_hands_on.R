# QM001 hands-on lab: development fit versus held-out forecast performance.
#
# The script reads the versioned synthetic data distributed with QM001 and keeps
# model selection entirely inside the development sample.

cli_args <- commandArgs(trailingOnly = TRUE)
N_SEARCH <- if (length(cli_args) >= 1) as.integer(cli_args[[1]]) else 80L

args <- commandArgs(trailingOnly = FALSE)
file_arg <- sub("^--file=", "", args[grep("^--file=", args)])
script_path <- normalizePath(file_arg, winslash = "/", mustWork = TRUE)
qm_root <- normalizePath(file.path(dirname(script_path), "..", ".."), winslash = "/", mustWork = TRUE)
data_file <- file.path(qm_root, "figures", "source_data", "qm001_simulation.csv")

data <- read.csv(data_file, check.names = FALSE)
train <- data$sample == "training"
test <- data$sample == "test"

noise_cols <- grep("^noise_[0-9]+_lag$", names(data), value = TRUE)
if (N_SEARCH < 1 || N_SEARCH > length(noise_cols)) {
  stop(sprintf("N_SEARCH must be between 1 and %d", length(noise_cols)))
}
search_cols <- noise_cols[seq_len(N_SEARCH)]

# Step 1: fit the AR(1) benchmark on development data only.
model_a <- lm(actual ~ lag_y, data = data[train, ])
resid_a <- residuals(model_a)

# Step 2: search candidate predictors using development residuals only.
cors <- sapply(search_cols, function(nm) cor(data[train, nm], resid_a))
selected_idx <- which.max(abs(cors))
selected_name <- search_cols[selected_idx]

# Step 3: fit Model B on the same development observations.
formula_b <- as.formula(paste("actual ~ lag_y +", selected_name))
model_b <- lm(formula_b, data = data[train, ])

# Step 4: apply both fixed models to the held-out targets.
pred_a_train <- predict(model_a, newdata = data[train, ])
pred_b_train <- predict(model_b, newdata = data[train, ])
pred_a_test <- predict(model_a, newdata = data[test, ])
pred_b_test <- predict(model_b, newdata = data[test, ])

rmse <- function(actual, forecast) sqrt(mean((actual - forecast)^2))
train_a <- rmse(data$actual[train], pred_a_train)
train_b <- rmse(data$actual[train], pred_b_train)
test_a <- rmse(data$actual[test], pred_a_test)
test_b <- rmse(data$actual[test], pred_b_test)
train_change <- 100 * (train_b / train_a - 1)
test_change <- 100 * (test_b / test_a - 1)

cat("QM001 hands-on lab\n")
cat(sprintf("Candidate predictors searched: %d\n", N_SEARCH))
cat(sprintf("Selected predictor: %s\n", selected_name))
cat(sprintf("Development residual correlation: %.4f\n\n", cors[selected_idx]))

summary <- data.frame(
  Sample = c("Development", "Held-out"),
  Model_A_RMSE = c(train_a, test_a),
  Model_B_RMSE = c(train_b, test_b),
  Model_B_vs_A_pct = c(train_change, test_change),
  check.names = FALSE
)
print(summary, row.names = FALSE, digits = 4)
cat("\n")

if (N_SEARCH == 80) {
  cat("Baseline interpretation: Model B fits the development sample better but performs worse on the held-out targets.\n")
  values <- c(
    selected_noise_predictor = as.integer(sub("noise_([0-9]+)_lag", "\\1", selected_name)),
    train_rmse_model_a = train_a,
    train_rmse_model_b = train_b,
    test_rmse_model_a = test_a,
    test_rmse_model_b = test_b,
    train_rmse_change_b_vs_a_pct = train_change,
    test_rmse_change_b_vs_a_pct = test_change
  )
  for (nm in names(values)) {
    cat(sprintf("QM001_LAB_R_METRIC %s=%.15g\n", nm, values[[nm]]))
  }
} else {
  cat("Exploration run: compare this result with the 80-predictor baseline rather than treating one draw as a general rule.\n")
}
