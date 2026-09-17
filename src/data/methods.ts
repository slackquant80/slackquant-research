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
    QM001: "Defines the out-of-sample information boundary shared by F2R's heterogeneous forecasting layer before conventional ML and Chronos-2 views are converted into relative ranks.",
    QM002: "Explains the time-ordered estimation design used by F2R's conventional supervised models; the pretrained Chronos-2 sequence expert enters through a separate governed inference path rather than sharing the same fitting window.",
    QM003: "Defines leakage controls for F2R's point-in-time inputs, supervised-model training, pretrained-model evaluation, current-model reconstruction, and rank-based portfolio validation.",
    QM007: "Explains how F2R's rank-based monthly target becomes a continuous holding-period wealth path under explicit execution timing and between-rebalance weight drift.",
    QM009: "Explains the drift-aware turnover and transaction-cost conventions used to translate F2R's monthly model-portfolio changes into net performance.",
    QM013: "Defines benchmark-relative measures used to judge the portfolio value of F2R's heterogeneous Forecast-to-Rank decision process beyond same-universe and external comparators.",
    QM019: "Defines the regularized linear-model family that anchors F2R's conventional supervised forecasting lane, including scaling and tuning controls for correlated predictors.",
    QM020: "Defines chronological model-selection and hyperparameter-tuning discipline used when F2R compares conventional supervised candidates without leaking future information.",
    QM027: "Explains the rank-to-portfolio translation used after heterogeneous forecasts enter a common decision space, including Top-K selection, persistence, and the distinction between ranks and portfolio weights.",
    QM024: "Explains how heterogeneous predictive views can be combined or aggregated without confusing forecast weights, forecast scales, rank aggregation, and downstream portfolio weights.",
    QM025: "Defines the evaluation boundary for Chronos-2 and other pretrained time-series foundation models, separating inference-time information from pretraining knowledge and historical-evaluation claims.",
  },
  "pds-system": {
    QM007: "Defines portfolio accounting and rebalance timing used to maintain a continuous PDS Core performance path across provider decisions.",
    QM008: "Defines drawdown, underwater duration, and recovery measures used to interpret path-dependent PDS Core downside behavior.",
    QM009: "Defines turnover and transaction-cost conventions used when implementation effects are evaluated across governed portfolio decisions.",
    QM011: "Provides strategy-similarity and decision-diversification concepts used when PDS evaluates how independently owned providers complement one another.",
    QM013: "Defines benchmark-relative portfolio measures used to separate absolute PDS Core performance from relative performance evidence.",
    QM014: "Defines information-timing and data-availability discipline used when PDS governs provider inputs that depend on macroeconomic information.",
  },
  "equity-alpha-system": {
    QM001: "Defines the genuinely out-of-sample evidence boundary used to distinguish historical model evaluation from current forward operation in Equity Alpha.",
    QM003: "Explains the look-ahead, survivorship, and data-leakage controls required when Equity Alpha reconstructs point-in-time ETF opportunity sets and model inputs.",
    QM007: "Defines the monthly signal, execution, holding-period, and weight-drift accounting needed to interpret Equity Alpha portfolio paths.",
    QM009: "Explains turnover and transaction-cost accounting used when ranked selections, entry rules, and hold buffers are translated into net portfolio performance.",
    QM013: "Defines active return, tracking error, information ratio, and relative-wealth measures used to evaluate Equity Alpha against ACWI.",
    QM019: "Defines the Ridge and Elastic Net model family used inside the REX2 regularized cross-sectional forecasting lane.",
    QM020: "Explains chronological model-selection discipline used when cross-sectional forecasting candidates and tuning choices are evaluated on time-ordered data.",
    QM026: "Defines point-in-time dynamic-universe construction, including listing history, liquidity/history gates, survivorship control, exposure deduplication, and governed expansion of the model-ready candidate pool.",
    QM027: "Explains how cross-sectional forecasts become ranks, how Top-K entry and hold buffers create path-dependent selections, and why rank diagnostics are not expected returns or probabilities.",
    QM024: "Explains how heterogeneous predictive views can be combined in a common decision space without confusing raw forecast scales, normalized rank strength, and downstream portfolio weights.",
    QM025: "Defines the evaluation boundary for Chronos-2 and other pretrained time-series foundation models, separating inference-time information from pretrained knowledge and historical-evaluation claims.",
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
  {
    id: "QM019",
    title: "Regularized Linear Models: Ridge, Lasso, and Elastic Net",
    category: "Machine Learning",
    level: "Intermediate",
    href: "/methods/60_MACHINE_LEARNING/QM019_REGULARIZED_LINEAR_MODELS/article.html",
    researchContext:
      "Explains Ridge, Lasso, and Elastic Net with explicit scaling, penalty, correlated-predictor, and leakage-aware tuning conventions for predictive modeling.",
  },
  {
    id: "QM020",
    title: "Time-Series Model Selection and Hyperparameter Tuning",
    category: "Machine Learning",
    level: "Advanced",
    href: "/methods/60_MACHINE_LEARNING/QM020_TIME_SERIES_MODEL_SELECTION/article.html",
    researchContext:
      "Explains chronological model selection and hyperparameter tuning for time-ordered data, including nested evaluation, gap design, target maturity, and leakage control.",
  },
  {
    id: "QM026",
    title: "Point-in-Time Dynamic Universe Construction",
    category: "Data & Research Design",
    level: "Advanced",
    href: "/methods/80_DATA_RESEARCH_DESIGN/QM026_POINT_IN_TIME_DYNAMIC_UNIVERSE/article.html",
    researchContext:
      "Explains how an investable universe can evolve through time without survivorship bias, including listing history, eligibility gates, exposure deduplication, representative selection, and governed candidate-pool expansion.",
  },
  {
    id: "QM027",
    title: "Cross-Sectional Ranking, Top-K Selection, and Hold Buffers",
    category: "Portfolio Methods",
    level: "Intermediate",
    href: "/methods/40_PORTFOLIO_METHODS/QM027_CROSS_SECTIONAL_RANKING_TOPK/article.html",
    researchContext:
      "Explains the translation from cross-sectional scores to ranks and portfolio selections, including normalized rank strength, Top-K entry, incumbent hold buffers, turnover trade-offs, and path dependence.",
  },
  {
    id: "QM024",
    title: "Forecast Combination and Model Averaging",
    category: "Machine Learning",
    level: "Intermediate",
    href: "/methods/60_MACHINE_LEARNING/QM024_FORECAST_COMBINATION_MODEL_AVERAGING/article.html",
    researchContext:
      "Explains forecast combination and model averaging, including weighting uncertainty, scale compatibility, rank aggregation, and leakage-aware ensemble evaluation.",
  },
  {
    id: "QM025",
    title: "Pretrained Time-Series Foundation Models",
    category: "AI Foundation Models",
    level: "Advanced",
    href: "/methods/70_AI_FOUNDATION_MODELS/QM025_PRETRAINED_TIME_SERIES_FOUNDATION_MODELS/article.html",
    researchContext:
      "Explains pretrained time-series forecasting models by separating inference-time data, pretraining knowledge, zero-shot use, covariate timing, and fair historical evaluation claims.",
  },
];

const artifactMethodIds: Record<string, string[]> = {
  "beyond-average-accuracy": ["QM001", "QM002", "QM003", "QM004", "QM005"],
  "adaa": ["QM007", "QM010", "QM011"],
  "adaa-system": ["QM007", "QM009", "QM010", "QM011", "QM014"],
  "f2r-system": ["QM001", "QM002", "QM003", "QM007", "QM009", "QM013", "QM019", "QM020", "QM027", "QM024", "QM025"],
  "equity-alpha-system": ["QM001", "QM003", "QM007", "QM009", "QM013", "QM019", "QM020", "QM026", "QM027", "QM024", "QM025"],
  "pds-system": ["QM007", "QM008", "QM009", "QM011", "QM013", "QM014"],
  "protection-patience": ["QM007", "QM008", "QM009", "QM010", "QM012", "QM013"],
  "price-macro-decision": ["QM001", "QM002", "QM003", "QM006", "QM007", "QM009", "QM013", "QM014", "QM019", "QM020"],
  "second-opinion-portfolio": ["QM001", "QM003", "QM007", "QM009", "QM011", "QM019", "QM020", "QM027", "QM024", "QM025"],
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