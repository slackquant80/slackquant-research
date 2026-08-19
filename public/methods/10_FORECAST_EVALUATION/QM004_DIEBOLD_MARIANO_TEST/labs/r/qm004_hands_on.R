args <- commandArgs(trailingOnly=TRUE)
loss <- if (length(args)>=1) args[1] else "squared"
lag <- if (length(args)>=2) as.integer(args[2]) else 3
script_arg <- grep("^--file=", commandArgs(FALSE), value=TRUE)
script_path <- if (length(script_arg)) sub("^--file=", "", script_arg[1]) else "labs/r/qm004_hands_on.R"
root <- normalizePath(file.path(dirname(script_path), "../.."), mustWork=TRUE)
d <- read.csv(file.path(root,"figures/source_data/qm004_forecast_errors.csv"))
if (loss == "squared") diff <- d$error_a^2 - d$error_b^2 else if (loss == "absolute") diff <- abs(d$error_a)-abs(d$error_b) else stop("loss must be squared or absolute")
n <- length(diff); x <- diff-mean(diff); lrv <- sum(x*x)/n
if (lag > 0) for (k in 1:lag) lrv <- lrv + 2*sum(x[1:(n-k)]*x[(k+1):n])/n
if (lrv <= 0) stop("Estimated long-run variance is non-positive")
stat <- mean(diff)/sqrt(lrv/n); p <- 2*pnorm(-abs(stat))
cat(sprintf("Loss: %s; autocovariance truncation lag: %d\n",loss,lag))
cat(sprintf("mean_loss_diff: %.6f\nlong_run_variance: %.6f\ndm_stat: %.6f\ntwo_sided_p: %.6f\n",mean(diff),lrv,stat,p))
cat(sprintf("QM004_LAB_METRIC dm_stat=%.12f\n",stat))
cat(sprintf("QM004_LAB_METRIC two_sided_p=%.12f\n",p))
