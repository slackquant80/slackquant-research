# Reader-facing QM005 lab. Usage: Rscript qm005_hands_on.R 240 0.10
args <- commandArgs(trailingOnly=TRUE); n <- ifelse(length(args)>=1,as.integer(args[1]),240); alpha <- ifelse(length(args)>=2,as.numeric(args[2]),0.10)
if (!(n %in% c(80,240))) stop("This lab includes fixed bootstrap indices for sample sizes 80 or 240.")
full <- commandArgs(trailingOnly=FALSE); f <- grep("^--file=",full,value=TRUE); script <- normalizePath(sub("^--file=","",f[1]),winslash="/")
root <- normalizePath(file.path(dirname(script),"..",".."),winslash="/",mustWork=TRUE)
d <- read.csv(file.path(root,"figures","source_data","qm005_losses.csv"),check.names=FALSE)[seq_len(n),]
idx <- read.csv(file.path(root,"figures","source_data",sprintf("qm005_bootstrap_indices_n%d.csv",n)),check.names=FALSE)
models <- c("A","B","C","D","E")
active <- seq_along(models); step <- 1; rows <- list()
repeat {
  if (length(active)<=1) break
  X <- as.matrix(d[,models[active],drop=FALSE]); means <- colMeans(X); rel <- means-mean(means)
  bm <- matrix(NA_real_,nrow=nrow(idx),ncol=length(active))
  for (b in seq_len(nrow(idx))) bm[b,] <- colMeans(X[as.integer(idx[b,]),,drop=FALSE])
  br <- bm-rowMeans(bm); se <- apply(br,2,sd); tt <- rel/se; stat <- max(tt)
  centered <- sweep(sweep(br,2,rel,"-"),2,se,"/"); bs <- apply(centered,1,max); p <- (1+sum(bs>=stat))/(nrow(idx)+1)
  j <- which.max(tt); elim <- active[j]; rows[[step]] <- c(n_models=length(active),tmax=stat,p=p,eliminate=elim)
  if (p>alpha) break
  active <- active[-j]; step <- step+1
}
cat(sprintf("Sample: %d observations | confidence level: %.1f%%\n",n,100*(1-alpha)))
cat(sprintf("Final MCS: {%s}\n",paste(models[active],collapse=", ")))
cat(sprintf("QM005_R_LAB_FINAL_SET=%s\n",paste(models[active],collapse=",")))
