args_all <- commandArgs(trailingOnly = FALSE)
file_arg <- sub("^--file=", "", args_all[grepl("^--file=", args_all)])
script_path <- normalizePath(file_arg[1L])
root <- normalizePath(file.path(dirname(script_path), "..", ".."))
data_path <- file.path(root, "figures", "source_data", "qm003_series.csv")

trail <- commandArgs(trailingOnly = TRUE)
mode <- if (length(trail) == 0L) "all" else trail[1L]
if (!(mode %in% c("all", "clean", "centered", "future"))) stop("mode must be all, clean, centered, or future")

d <- read.csv(data_path)
x <- d$x
y <- d$y
n <- nrow(d)
origins <- 1:(n - 2L)
target <- y[origins + 2L]
features <- list(
  clean = x[origins + 1L],
  centered = (x[origins] + x[origins + 1L] + x[origins + 2L]) / 3,
  future = x[origins + 2L]
)
train <- origins < 220L
test <- !train

fit_eval <- function(z) {
  X <- cbind(1, z[train])
  beta <- solve(crossprod(X), crossprod(X, target[train]))
  forecast <- beta[1] + beta[2] * z
  rmse <- function(a, f) sqrt(mean((a - f)^2))
  c(development_rmse = rmse(target[train], forecast[train]), held_out_rmse = rmse(target[test], forecast[test]))
}

names_to_run <- if (mode == "all") c("clean", "centered", "future") else mode
for (name in names_to_run) {
  r <- fit_eval(features[[name]])
  cat(sprintf("QM003_R_LAB_METRIC %s_development_rmse=%.12g\n", name, r["development_rmse"]))
  cat(sprintf("QM003_R_LAB_METRIC %s_held_out_rmse=%.12g\n", name, r["held_out_rmse"]))
}
