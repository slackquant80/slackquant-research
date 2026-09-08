export type QuantitativeMethod = {
  id: string;
  title: string;
  category: string;
  level: string;
  href: string;
  researchContext: string;
};

const systemMethodContext: Record<string, Record<string, string>> = {
  "adaa-system": {
    QM007: "Defines the monthly rebalance, drift, and execution-clock accounting needed to interpret ADAA's official decisions and realized portfolio path.",
    QM009: "Explains drift-aware turnover and transaction-cost accounting used when ADAA target changes are translated into net implementation results.",
    QM010: "Provides the momentum and trend concepts used by parts of ADAA's decision-diversified allocation architecture.",
    QM011: "Provides the decision-diversification framework used to distinguish complementary allocation perspectives from redundant strategy behavior.",
    QM014: "Defines release-date, vintage, and availability discipline for ADAA components that use macroeconomic information.",
  },
  "f2r-system": {
    QM001: "Defines the out-of-sample information boundary for F2R's forecasting layer before forecasts are converted into relative ranks.",
    QM002: "Explains rolling estimation-window design for the forecast models that feed F2R's cross-asset ranking step.",
    QM003: "Defines leakage controls for forecasting inputs, model development, and the historical ranking exercise used to validate F2R.",
    QM007: "Explains how monthly F2R targets become holding-period portfolio returns under explicit rebalance timing and weight drift.",
    QM009: "Explains the turnover and transaction-cost conventions required to interpret F2R performance net of modeled trading costs.",
    QM013: "Defines benchmark-relative measures used to judge whether F2R's ranked portfolio adds value beyond same-universe and external comparators.",
  },
  "pds-system": {
    QM007: "Defines portfolio accounting and rebalance timing used to maintain a continuous PDS Core performance path across provider decisions.",
    QM008: "Defines drawdown, underwater duration, and recovery measures used to interpret path-dependent PDS Core downside behavior.",
    QM009: "Defines turnover and transaction-cost conventions used when implementation effects are evaluated across governed portfolio decisions.",
    QM011: "Provides strategy-similarity and decision-diversification concepts used when PDS evaluates how independently owned providers complement one another.",
    QM013: "Defines benchmark-relative portfolio measures used to separate absolute PDS Core performance from relative performance evidence.",
    QM014: "Defines information-timing and data-availability discipline used when PDS governs provider inputs that depend on macroeconomic information.",
  },
  "scenario-stress-lab": {
    QM001: "Defines the out-of-sample information boundary used when the Stress Lab evaluates scenario-generation methods without leaking future market information.",
    QM003: "Defines leakage controls for dated market inputs, scenario construction, retrospective evaluation, and public evidence used by the Stress Lab.",
    QM006: "Explains dependence-aware block resampling used by the Stress Lab's transparent historical comparator.",
    QM015: "Provides multivariate probabilistic evaluation concepts used to assess joint scenario quality beyond a single marginal accuracy score.",
    QM016: "Defines the EWMA-t conditional scenario engine used as the Stress Lab's reference model for heavy-tailed joint return simulation.",
    QM017: "Defines same-scenario portfolio stress testing, tail-loss measurement, and what-if comparison without turning the exercise into portfolio optimization.",
    QM018: "Defines stress-archetype construction and representative-scenario geometry used to summarize adverse scenario structure in interpretable form.",
  },
};

export const quantitativeMethods: QuantitativeMethod[] = [
  {
    id: "QM001",
    title: "Out-of-Sample Forecast Evaluation",
    category: "Forecast Evaluation",
    level: "Foundation",
    href: "/methods/10_FORECAST_EVALUATION/QM001_OUT_OF_SAMPLE_EVALUATION/article.html",
    researchContext:
      "Explains the information boundary behind the paper's repeated pseudo-out-of-sample evaluation.",
  },
  {
    id: "QM002",
    title: "Rolling vs Expanding Windows",
    category: "Forecast Evaluation",
    level: "Foundation",
    href: "/methods/10_FORECAST_EVALUATION/QM002_ROLLING_VS_EXPANDING_WINDOWS/article.html",
    researchContext:
      "Clarifies the fixed-length rolling estimation window used in the paper and the trade-off that window choice creates.",
  },
  {
    id: "QM003",
    title: "Look-Ahead Bias and Data Leakage",
    category: "Data & Research Design",
    level: "Foundation",
    href: "/methods/80_DATA_RESEARCH_DESIGN/QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE/article.html",
    researchContext:
      "Explains how timing, data construction, and model-development choices can let future information enter a historical forecasting exercise.",
  },
  {
    id: "QM004",
    title: "Diebold–Mariano Test",
    category: "Forecast Evaluation",
    level: "Intermediate",
    href: "/methods/10_FORECAST_EVALUATION/QM004_DIEBOLD_MARIANO_TEST/article.html",
    researchContext:
      "Explains the pairwise loss-differential test used to assess whether forecast-accuracy differences are statistically distinguishable.",
  },
  {
    id: "QM005",
    title: "Model Confidence Set",
    category: "Forecast Evaluation",
    level: "Advanced",
    href: "/methods/10_FORECAST_EVALUATION/QM005_MODEL_CONFIDENCE_SET/article.html",
    researchContext:
      "Explains the set-valued comparison used when the available loss data do not sharply separate many forecasting approaches.",
  },
  {
    id: "QM006",
    title: "Block Bootstrap",
    category: "Statistical Inference",
    level: "Intermediate",
    href: "/methods/20_STATISTICAL_INFERENCE/QM006_BLOCK_BOOTSTRAP/article.html",
    researchContext:
      "Explains dependence-aware resampling for time-series inference when IID resampling would break serial structure.",
  },
  {
    id: "QM007",
    title: "Portfolio Backtesting and Rebalancing",
    category: "Portfolio Methods",
    level: "Foundation",
    href: "/methods/40_PORTFOLIO_METHODS/QM007_PORTFOLIO_BACKTESTING_REBALANCING/article.html",
    researchContext:
      "Explains the portfolio accounting, weight drift, monthly rebalancing, turnover conventions, and next-period timing needed to interpret the portfolio paths used in this research.",
  },
  {
    id: "QM008",
    title: "Drawdown, Underwater Duration, and Recovery",
    category: "Portfolio Methods",
    level: "Foundation",
    href: "/methods/40_PORTFOLIO_METHODS/QM008_DRAWDOWN_UNDERWATER_DURATION_RECOVERY/article.html",
    researchContext:
      "Explains drawdown, high-water-mark, underwater-duration, recovery, and censoring conventions used to interpret path-dependent downside and recovery in this research.",
  },
  {
    id: "QM009",
    title: "Turnover, Transaction Costs, and Net Performance",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM009_TURNOVER_COSTS/article.html",
    researchContext:
      "Explains drift-aware turnover, transaction-cost conventions, and the mapping from before-cost portfolio performance to performance net of modeled transaction costs.",
  },
  {
    id: "QM010",
    title: "Momentum and Trend Signals",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM010_MOMENTUM_TREND/article.html",
    researchContext:
      "Explains how momentum and trend signals are defined, timed, and stress-tested across lookback choices before they are translated into portfolio decisions.",
  },
  {
    id: "QM011",
    title: "Strategy Similarity and Decision Diversification",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM011_DECISION_DIVERSIFICATION/article.html",
    researchContext:
      "Explains how return similarity differs from similarity in what strategies hold, when they change, and how strongly they change risk exposure.",
  },
  {
    id: "QM012",
    title: "Rolling Holding-Period Analysis",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM012_ROLLING_HOLDING_PERIODS/article.html",
    researchContext:
      "Explains rolling long-horizon outcome analysis, overlapping-window dependence, and the distinction between endpoint outcomes and the path experienced while reaching them.",
  },
  {
    id: "QM013",
    title: "Benchmark-Relative Portfolio Evaluation",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM013_BENCHMARK_RELATIVE/article.html",
    researchContext:
      "Explains active return, tracking error, information ratio, relative wealth, and benchmark-relative drawdown as distinct portfolio-evaluation quantities.",
  },
  {
    id: "QM014",
    title: "Information Timing, Data Vintages, and Real-Time Macro Data",
    category: "Data & Research Design",
    level: "Intermediate",
    href: "/methods/80_DATA_RESEARCH_DESIGN/QM014_MACRO_INFORMATION_TIMING/article.html",
    researchContext:
      "Explains why reference periods, release dates, vintage labels, actual availability, revisions, and forecast cutoffs must be kept distinct in macroeconomic research.",
  },
  {
    id: "QM015",
    title: "Multivariate Probabilistic Forecast Evaluation",
    category: "Forecast Evaluation",
    level: "Advanced",
    href: "/methods/10_FORECAST_EVALUATION/QM015_MULTIVARIATE_PROBABILISTIC_EVALUATION/article.html",
    researchContext:
      "Explains how multivariate probabilistic forecasts are evaluated with complementary proper scores, calibration, tail, dependence, and inference diagnostics rather than a single winner metric.",
  },
  {
    id: "QM016",
    title: "EWMA-t Scenario Simulation",
    category: "Time-Series Methods",
    level: "Intermediate",
    href: "/methods/30_TIME_SERIES/QM016_EWMA_T_SCENARIO_SIMULATION/article.html",
    researchContext:
      "Explains exponentially weighted covariance estimation, multivariate Student-t innovations, heavy-tailed joint path simulation, and the limits of a fixed conditional state over the scenario horizon.",
  },
  {
    id: "QM017",
    title: "Scenario-Based Portfolio Stress Testing",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM017_SCENARIO_STRESS_TESTING/article.html",
    researchContext:
      "Explains portfolio revaluation on a common forward scenario cloud, path-dependent stress measures, VaR and Expected Shortfall, and same-cloud what-if comparisons without turning the exercise into optimization.",
  },
  {
    id: "QM018",
    title: "Stress Archetypes and Representative Scenario Geometry",
    category: "Data & Research Design",
    level: "Advanced",
    href: "/methods/80_DATA_RESEARCH_DESIGN/QM018_STRESS_ARCHETYPES_GEOMETRY/article.html",
    researchContext:
      "Explains how adverse scenario tails can be organized into interpretable stress archetypes, represented by feasible scenarios, and assessed for stability, taxonomy adequacy, and external relevance.",
  },
];

const artifactMethodIds: Record<string, string[]> = {
  "beyond-average-accuracy": ["QM001", "QM002", "QM003", "QM004", "QM005"],
  "adaa": ["QM007", "QM010", "QM011"],
  "adaa-system": ["QM007", "QM009", "QM010", "QM011", "QM014"],
  "f2r-system": ["QM001", "QM002", "QM003", "QM007", "QM009", "QM013"],
  "pds-system": ["QM007", "QM008", "QM009", "QM011", "QM013", "QM014"],
  "protection-patience": ["QM007", "QM008", "QM009", "QM010", "QM012", "QM013"],
  "price-macro-decision": ["QM001", "QM002", "QM003", "QM006", "QM007", "QM009", "QM013", "QM014"],
  "scenario-stress-lab": ["QM001", "QM003", "QM006", "QM015", "QM016", "QM017", "QM018"],
};

export function getMethodContextForArtifact(
  method: QuantitativeMethod,
  artifactSlug: string,
  context: "research" | "system",
) {
  if (context === "system") {
    const systemContext = systemMethodContext[artifactSlug]?.[method.id];
    if (!systemContext) {
      throw new Error(`Missing system-specific method context: ${artifactSlug} / ${method.id}`);
    }
    return systemContext;
  }
  return method.researchContext;
}

export function getMethodsForArtifact(slug: string) {
  const ids = artifactMethodIds[slug] ?? [];
  const byId = new Map(quantitativeMethods.map((method) => [method.id, method]));
  return ids.flatMap((id) => {
    const method = byId.get(id);
    return method ? [method] : [];
  });
}

export function getMethodsForResearch(slug: string) {
  return getMethodsForArtifact(slug);
}