# Beyond Average Accuracy — public-platform figure provenance

Date: 2026-08-17
Paper: `Beyond Average Accuracy`, public working paper v1.0.7, SSRN 7164118.

## Figure 1
`Figure_1_Average_Relative_RMSE_v1.0.7.svg`

- Paper alignment: Figure 1, “Average RMSE relative to the RW persistence benchmark.”
- Source: public replication export `results/paper_exports/table_model_summary.csv`.
- Values: exact v1.0.7 mean relative RMSE values across 16 target-horizon combinations.
- Purpose: reader-facing same-origin reproduction of the paper’s average-accuracy ranking.

## Figure 2
`Figure_2_RMSE_Rank_vs_MCS_Survival_v1.0.7.svg`

- Paper alignment: Figure 2, “Numerical RMSE ranking versus MCS survival under squared-error loss.”
- Source: public replication export `results/paper_exports/table_model_summary.csv`.
- Values: exact v1.0.7 mean RMSE ranks and squared-error MCS survival rates.
- Purpose: reader-facing same-origin reproduction of the ranking-versus-inferential-survival contrast.

## Figure 4 diagnostic summary
`Figure_4_Temporal_Concentration_Summary_v1.0.7.svg`

- Paper alignment: Figure 4, “Temporal concentration of gross squared-loss reductions and increases relative to RW.”
- Source: public replication export `results/paper_exports/table_loss_concentration.csv` and the v1.0.7 reported cross-cell averages.
- Headline values: 85.6% favorable / 89.1% unfavorable for the twelve largest monthly contributions.
- Boundary: this is a simplified reader-facing summary of the published diagnostic, **not a pixel-identical export of the manuscript Figure 4**.

No new empirical result is created by these platform figures.
