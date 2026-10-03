export const adaaPublishedEvidence = {
  sourceLabel: "Public Working Paper v1.34 · historical simulation",
  metrics: [
    ["10.80%", "ADAA practitioner gross CAGR"],
    ["8.97%", "Annualized volatility"],
    ["1.05", "BIL-excess Sharpe"],
    ["−10.34%", "Maximum drawdown"],
  ] as const,
  boundary:
    "These statistics are tied to the historical simulation reported in Public Working Paper v1.34. They are research evidence, not a live track record or a claim that the current implementation will reproduce the same results.",
} as const;

export const f2rPublishedEvidence = {
  sourceLabel: "Public model-adoption study · retrospective historical research evidence",
  signalWindow: "112 historical signal dates · March 2017 → June 2026",
  performancePath: "Research performance path · May 1, 2017 → August 3, 2026",
  metrics: [
    ["17.13%", "Selected hybrid CAGR"],
    ["0.987", "Selected hybrid Sharpe"],
    ["58 / 112", "Changed Top-4 months vs. incumbent"],
    ["+2.53pp", "Rank vs. standardized integration CAGR difference"],
  ] as const,
  comparisonRows: [
    ["Incumbent four-model ensemble", "14.92%", "0.891", "Conventional reference"],
    ["Chronos-2 standalone", "15.49%", "0.962", "Different forecast model, same portfolio interface"],
    ["Three-model + Chronos-2 hybrid", "17.13%", "0.987", "Selected historical research configuration"],
  ] as const,
  boundary:
    "This is a retrospective technology counterfactual, not a live F2R performance period. The dates above belong to the frozen model-adoption study; current Official, Preview, and completed production performance are maintained separately by the live F2R release workflow. The historical hybrid configuration is research evidence and does not disclose the current protected production recipe.",
} as const;
