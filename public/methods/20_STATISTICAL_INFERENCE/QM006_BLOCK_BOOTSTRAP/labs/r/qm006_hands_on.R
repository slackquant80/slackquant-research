# QM006 hands-on lab: compare IID and moving-block bootstrap uncertainty.
args0 <- commandArgs(trailingOnly=FALSE); f <- grep("^--file=", args0, value=TRUE)
script <- normalizePath(sub("^--file=", "", f[1])); q <- normalizePath(file.path(dirname(script), "..", ".."))
args <- commandArgs(trailingOnly=TRUE); l <- if (length(args)>=1) as.integer(args[1]) else 16
if (!(l %in% c(4,8,16,32))) stop("block length must be one of 4, 8, 16, 32")
x <- read.csv(file.path(q,"figures","source_data","qm006_ar1_series.csv"))$x; n <- length(x)
iid <- as.matrix(read.csv(file.path(q,"figures","source_data","qm006_iid_indices.csv"),check.names=FALSE))
iid_means <- apply(iid,1,function(idx) mean(x[idx])); iid_se <- sd(iid_means)
starts <- as.matrix(read.csv(file.path(q,"figures","source_data",paste0("qm006_mbb_starts_l",l,".csv")),check.names=FALSE))
mbb_means <- apply(starts,1,function(row){ idx <- unlist(lapply(row,function(s) s:(s+l-1))); mean(x[idx[1:n]]) })
mbb_se <- sd(mbb_means)
cat(sprintf("IID bootstrap SE of mean: %.3f\n",iid_se)); cat(sprintf("MBB SE of mean (l=%d): %.3f\n",l,mbb_se))
cat(sprintf("QM006_R_LAB_IID_SE=%.12f\n",iid_se)); cat(sprintf("QM006_R_LAB_MBB_SE=%.12f\n",mbb_se))
