import type { ResearchItem } from "./types";

export const researchItems: ResearchItem[] = [
  {
    slug: "adaa",
    title: "Diversify the Decisions, Not Just the Assets",
    subtitle:
      "A Practical Architecture for Dynamic Asset Allocation When Strategy Choice Is Uncertain",
    stream: "investment",
    streamLabel: "Investment Research Series",
    investmentTrack: "empirical",
    investmentTrackLabel: "Empirical Research",
    status: "Public Working Paper",
    publicVersion: "v1.34",
    ssrnId: "7251518",
    dateLabel: "August 2026",
    authorLine: "Sungkyu Lee",
    affiliation: "Graduate School of Computing, Yonsei University",
    featured: true,
    shortSummary:
      "Historical performance and risk still guide strategy choice. ADAA adds a complementary check: whether the selected rules make genuinely different decisions and whether the portfolio depends too heavily on one historically best-performing rule or one precise set of weights.",
    researchQuestion:
      "Among strategies worth considering on their own performance and risk merits, does combining them diversify the decisions that generate portfolio outcomes, and how dependent are the results on the chosen weights?",
    findings: [
      "Decision diversity is not guaranteed by strategy count. Several strategies can share the same underlying timing or momentum logic even when their names and holdings differ.",
      "The historical ADAA sleeves disagree in economically meaningful ways, but unevenly. The analysis makes redundancy visible instead of assuming diversification from labels.",
      "The practitioner weights sit inside a broad near-optimal region rather than at a unique optimum. The evidence favors robustness to weight uncertainty over precise weight estimates that are not supported by the sample.",
      "Decision diversification complements rather than replaces conventional evaluation of historical performance, risk, and implementation. The evidence does not identify a universally superior rule or weight vector."
    ],
    tags: ["Asset Allocation", "Systematic Investing", "Decision Diversification"],
    selectedEvidence: [
      {
        id: "decision-timing",
        title: "Return Correlation vs. Decision Timing",
        description:
          "Return correlation does not fully describe decision diversification. The current sleeves can produce correlated return paths while still changing exposures at materially different times.",
        imageUrl:
          "https://slackquant80.github.io/adaa-slackquant/assets/img/Figure_1_Return_Correlation_vs_Decision_Timing_v0.36.1.png",
        alt:
          "ADAA figure comparing return correlation with disagreement in decision timing across the current strategy sleeves.",
        sourceLabel: "Public ADAA research · Figure 1"
      },
      {
        id: "decision-fingerprints",
        title: "Decision Fingerprints: What, When, and How Much",
        description:
          "The five sleeves are compared across three distinct dimensions: what they hold, when they change, and how strongly they alter risk exposure.",
        imageUrl:
          "https://slackquant80.github.io/adaa-slackquant/assets/img/Figure_2_What_When_HowMuch_Decision_Fingerprints_v0.36.1.png",
        alt:
          "ADAA decision-fingerprint figure comparing what the sleeves hold, when they change, and how much risk they take.",
        sourceLabel: "Public ADAA research · Figure 2"
      },
      {
        id: "robustness-plateau",
        title: "Broad Plateau, Unstable Optimum",
        description:
          "The robustness exercise emphasizes a broad high-performing region rather than a single ex-post peak. The lesson is not to abandon optimization, but to avoid treating one historical optimum as more precise than the sample supports.",
        imageUrl:
          "https://slackquant80.github.io/adaa-slackquant/assets/img/Figure_5_Broad_Plateau_Unstable_Optimum_v0.36.1.png",
        alt:
          "ADAA robustness figure showing a broad high-performing weight region and instability of the exact ex-post optimum.",
        sourceLabel: "Public ADAA research · Figure 5"
      }
    ],
    links: {
      ssrn:
        "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251518",
      github:
        "https://github.com/slackquant80/adaa-decision-diversification",
      replication:
        "https://github.com/slackquant80/adaa-decision-diversification/releases/tag/v1.1.4",
      archivalRelease:
        "https://doi.org/10.5281/zenodo.22006841",
      doi:
        "https://doi.org/10.5281/zenodo.22006841",
      researchDashboard:
        "https://slackquant80.github.io/adaa-slackquant/",
      operationalDashboard:
        "https://slackquant.shinyapps.io/adaa_strategy_main/"
    }
  },
  {
    slug: "protection-patience",
    title: "When Protection Works but the Portfolio Still Lags",
    subtitle:
      "Long-Horizon Evidence on Downside Protection, Benchmark-Relative Drawdowns, and Persistent Equity Exposure",
    stream: "investment",
    streamLabel: "Investment Research Series",
    investmentTrack: "empirical",
    investmentTrackLabel: "Empirical Research",
    status: "Public Working Paper",
    ssrnId: "7291898",
    dateLabel: "August 2026",
    authorLine: "Sungkyu Lee",
    affiliation: "Graduate School of Computing, Yonsei University",
    shortSummary:
      "A defensive strategy can reduce its own drawdown and still trail equity for years. The analysis separates realized downside protection from the benchmark-relative path over long rolling holding periods.",
    researchQuestion:
      "When a defensive strategy actually reduces maximum drawdown, what benchmark-relative path accompanies that protection, and how does persistent equity exposure change that path?",
    findings: [
      "At the 20-year horizon, the 12-month defensive trend rule reduces maximum drawdown in 98.2% of rolling periods. Among those protected periods, 60.3% still finish with less terminal wealth than equity buy-and-hold.",
      "Among protected 20-year periods, the median benchmark-relative drawdown depth is 44.4%, while the median longest benchmark-relative underwater period lasts 195 months.",
      "Greater persistent equity exposure is associated with substantially shallower benchmark-relative drawdowns, while the longest underwater duration changes much less across the fixed blends.",
      "The qualitative pattern remains visible in an independent Shiller/FRED reconstruction and under fixed trading-cost assumptions, although the magnitudes differ."
    ],
    tags: [
      "Defensive Investing",
      "Benchmark-Relative Drawdown",
      "Trend Following",
      "Portfolio Design"
    ],
    selectedEvidence: [
      {
        id: "protection-benchmark-outcomes",
        title: "Protection and Benchmark Outperformance Are Different Events",
        description:
          "The four-state decomposition shows that realized downside protection does not imply benchmark outperformance. At long horizons, protected-but-underperforming periods remain common.",
        imageUrl:
          "/assets/t19/Figure_1_Protection_and_Benchmark_Outcomes_v1.0.png",
        alt:
          "Four-state decomposition of rolling holding periods showing protected and outperforming, protected and underperforming, and unprotected outcomes across 5-, 10-, 15-, and 20-year horizons.",
        sourceLabel: "Public working paper · Figure 1"
      },
      {
        id: "protected-path-burden",
        title: "Benchmark-Relative Shortfall Has Both Depth and Duration",
        description:
          "Protected holding periods can remain below a prior benchmark-relative high-water mark for years. Depth and duration are separate dimensions of the relative performance path.",
        imageUrl:
          "/assets/t19/Figure_2_Protected_Path_Burden_v1.0.png",
        alt:
          "Benchmark-relative drawdown depth by investment horizon with labels for the median longest underwater duration among protected holding periods.",
        sourceLabel: "Public working paper · Figure 2"
      },
      {
        id: "representative-protected-path",
        title: "A Protected Portfolio Can Still Lag for Most of a 20-Year Window",
        description:
          "The June 2005–May 2025 illustrative path combines materially lower maximum drawdown with a 195-month benchmark-relative underwater spell and lower terminal wealth than equity.",
        imageUrl:
          "/assets/t19/Figure_3_Representative_Protected_But_Lagging_Path_v1.0.png",
        alt:
          "Indexed wealth for equity and the 12-month defensive trend rule from June 2005 through May 2025, with shading for months below the prior benchmark-relative high-water mark.",
        sourceLabel: "Public working paper · Figure 3"
      },
      {
        id: "persistent-equity",
        title: "Persistent Equity Exposure Changes Relative Depth More Than Duration",
        description:
          "Across fixed tactical shares, retaining more persistent equity exposure materially reduces benchmark-relative drawdown depth, while the median longest underwater duration changes much less.",
        imageUrl:
          "/assets/t19/Figure_4_Persistent_Equity_Depth_vs_Duration_v1.0.png",
        alt:
          "Twenty-year benchmark-relative drawdown depth across fixed tactical shares with labels for median longest underwater duration.",
        sourceLabel: "Public working paper · Figure 4"
      }
    ],
    links: {
      ssrn:
        "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7291898",
      github:
        "https://github.com/slackquant80/protection-patience-replication",
      replication:
        "https://github.com/slackquant80/protection-patience-replication/releases/tag/v1.1.1",
      archivalRelease:
        "https://doi.org/10.5281/zenodo.21991470",
      doi:
        "https://doi.org/10.5281/zenodo.21991470"
    }
  },
  {
    slug: "price-macro-decision",
    title: "The Decision Value of Price and Macro Information",
    subtitle:
      "Benchmark-Relative Evidence in Multi-Asset Allocation Using Historical-Vintage FRED-MD Data",
    stream: "investment",
    streamLabel: "Investment Research Series",
    investmentTrack: "empirical",
    investmentTrackLabel: "Empirical Research",
    status: "Public Working Paper",
    ssrnId: "7340100",
    dateLabel: "August 2026",
    authorLine: "Sungkyu Lee",
    affiliation: "Graduate School of Computing, Yonsei University",
    shortSummary:
      "Adding historical-vintage macro information to a matched price-based forecasting and ranking process does not produce a robust incremental portfolio benefit in this multi-asset setting. The paper evaluates that question relative to investable benchmarks and under explicit information-timing checks.",
    researchQuestion:
      "Does historical-vintage macro information add decision value beyond price information in benchmark-relative multi-asset allocation when the forecasting, ranking, portfolio, and timing rules are held as comparable as possible?",
    findings: [
      "The primary comparison uses 112 monthly out-of-sample allocation decisions from March 2017 through June 2026 across 11 U.S.-listed ETFs, with price-only and Macro+Price portfolios evaluated under matched ranking and portfolio rules.",
      "Historical-vintage macro information does not deliver a robust incremental improvement over the price-based process in the main benchmark-relative evidence and robustness checks.",
      "A prespecified conservative information-timing check leaves the incremental-macro conclusion unchanged even though the realized Macro+Price Top-4 selection changes in about 52.7% of months.",
      "Later-snapshot comparisons can change both revision state and historical series membership, so they are treated as a broader information-set robustness exercise rather than as a pure numerical-revision test."
    ],
    tags: [
      "Multi-Asset Allocation",
      "Macro Information",
      "Price Signals",
      "Benchmark-Relative Evaluation",
      "FRED-MD"
    ],
    selectedEvidence: [
      {
        id: "price-active-value",
        title: "Price Signals Generate Benchmark-Relative Active Value",
        description:
          "Relative to the same-universe EW11 benchmark, the price-only ML portfolio records an information ratio of 0.71 and 5.0% annualized active return. The exhibit also places that result beside standard momentum variants under the same benchmark-relative lens.",
        imageUrl:
          "https://raw.githubusercontent.com/slackquant80/price-macro-decision-replication/main/reference/figures/Figure_2_Active_Value_vs_EW11_HOUSE_v0.5.svg",
        alt:
          "Cumulative wealth relative to EW11 and benchmark-relative information ratios for the price-only ML portfolio and momentum variants.",
        sourceLabel: "Public replication · Figure 2"
      },
      {
        id: "incremental-macro-value",
        title: "The Incremental Macro Contribution Is Not Robustly Positive",
        description:
          "The matched Macro+Price versus Price-only comparisons do not show a stable positive Sharpe increment across the main robustness checks. The exhibit focuses on the incremental contribution of macro information rather than on standalone portfolio returns.",
        imageUrl:
          "https://raw.githubusercontent.com/slackquant80/price-macro-decision-replication/main/reference/figures/Figure_3_Incremental_Macro_Value_with_RAW_HOUSE_v0.7.svg",
        alt:
          "Incremental Sharpe differences for macro-augmented versus price-only portfolio comparisons across the main robustness specifications.",
        sourceLabel: "Public replication · Figure 3"
      },
      {
        id: "information-timing",
        title: "Timing Changes Portfolio Choices Without Reversing the Result",
        description:
          "Under the conservative prior-month macro information clock, the Macro+Price minus Price-only Sharpe difference is −0.192 with a 95% moving-block bootstrap interval of [−0.659, 0.175]. The Macro+Price Top-4 selection changes in 52.7% of months relative to the primary timing design.",
        imageUrl:
          "https://raw.githubusercontent.com/slackquant80/price-macro-decision-replication/main/reference/figures/Figure_4_Information_Timing_Robustness_HOUSE_v0.1.svg",
        alt:
          "Information-timing robustness exhibit comparing the primary and conservative macro timing specifications and their portfolio implications.",
        sourceLabel: "Public replication · Figure 4"
      }
    ],
    links: {
      ssrn: "https://papers.ssrn.com/abstract=7340100",
      github: "https://github.com/slackquant80/price-macro-decision-replication",
      replication:
        "https://github.com/slackquant80/price-macro-decision-replication/releases/tag/v1.1",
      archivalRelease: "https://doi.org/10.5281/zenodo.22069742",
      doi: "https://doi.org/10.5281/zenodo.22069742"
    }
  },
  {
    slug: "beyond-average-accuracy",
    title: "Beyond Average Accuracy",
    subtitle:
      "Statistical Distinguishability and Temporal Concentration in Data-Rich Macroeconomic Forecasting",
    stream: "academic",
    streamLabel: "Academic Research",
    status: "Academic Working Paper",
    publicVersion: "v1.0.13",
    ssrnId: "7164118",
    dateLabel: "August 2026",
    authorLine: "Sungkyu Lee",
    affiliation:
      "AI Computing Program, Graduate School of Computing, Yonsei University",
    shortSummary:
      "Lower average forecast errors can coexist with limited statistical separation and performance concentrated in a relatively small number of months. The analysis evaluates average accuracy, formal inference, and temporal stability under a common FRED-MD forecasting design.",
    researchQuestion:
      "When machine-learning forecasts beat a simple benchmark on average, is that advantage statistically distinguishable and temporally stable, or concentrated in a relatively small number of dates?",
    findings: [
      "XGBoost records the lowest average relative RMSE, 0.821, across sixteen target-horizon combinations; Random Forest, Boruta RF, and the forecast combinations are also among the leading approaches by average RMSE.",
      "After Holm adjustment, none of the 176 squared-error Diebold-Mariano comparisons rejects equal predictive accuracy in favor of an alternative. Five absolute-error comparisons reject, all at the one-month industrial-production horizon.",
      "A 90% Model Confidence Set retains all twelve approaches in 25 of 32 target-horizon-loss panels and never retains fewer than ten, so the available loss data provide limited evidence for eliminating most candidates at the chosen confidence level.",
      "The set of lowest-RMSE models changes frequently across rolling 12-month windows. For squared loss, the twelve months with the largest reductions relative to RW account, on average, for 85.6% of total loss reduction, while the twelve months with the largest increases account for 89.1% of total loss increase."
    ],
    tags: [
      "Macroeconomic Forecasting",
      "Machine Learning",
      "Forecast Evaluation",
      "FRED-MD"
    ],
    selectedEvidence: [
      {
        id: "average-relative-rmse",
        title: "Average RMSE Produces a Numerical Ranking",
        description:
          "Average relative RMSE varies across the twelve approaches. XGBoost is lowest at 0.821, and the dashed line marks equality with RW. The ranking is numerical and does not by itself establish statistical separation.",
        imageUrl: "/assets/beyond/Figure_1_Average_Relative_RMSE_v1.0.13.svg",
        alt:
          "Horizontal bar chart of mean RMSE relative to the RW persistence benchmark across twelve forecasting approaches, with a dashed equality line at one.",
        sourceLabel: "Public working paper · Figure 1"
      },
      {
        id: "rank-vs-mcs",
        title: "Numerical Rank Does Not Imply Statistical Separation",
        description:
          "Mean RMSE ranks differ, while most approaches survive every squared-error Model Confidence Set panel. MCS survival does not prove equal accuracy; it reflects limited evidence for eliminating candidates.",
        imageUrl: "/assets/beyond/Figure_2_RMSE_Rank_vs_MCS_Survival_v1.0.13.svg",
        alt:
          "Scatter plot comparing mean RMSE rank with squared-error Model Confidence Set survival rates for the twelve forecasting approaches.",
        sourceLabel: "Public working paper · Figure 2"
      },
      {
        id: "temporal-concentration",
        title: "Loss Differences Are Concentrated in a Few Months",
        description:
          "For squared loss, the twelve months with the largest reductions relative to RW account, on average, for 85.6% of total loss reduction, while the twelve months with the largest increases account for 89.1% of total loss increase.",
        imageUrl: "/assets/beyond/Figure_4_Temporal_Concentration_Summary_v1.0.13.svg",
        alt:
          "Two bars showing that the twelve largest monthly loss reductions and increases account for 85.6 percent and 89.1 percent of total loss reduction and increase on average.",
        sourceLabel: "Academic working paper · Figure 4 diagnostic"
      }
    ],
    links: {
      ssrn:
        "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7164118",
      github:
        "https://github.com/slackquant80/ml-econ-forecasting-replication",
      replication:
        "https://github.com/slackquant80/ml-econ-forecasting-replication/releases/tag/v1.0.0",
      archivalRelease:
        "https://doi.org/10.5281/zenodo.21500978",
      doi:
        "https://doi.org/10.2139/ssrn.7164118",
      researchDashboard:
        "https://slackquant.shinyapps.io/ml_econ_forecasting/"
    }
  }

];

export function getResearch(slug: string) {
  return researchItems.find((item) => item.slug === slug);
}
