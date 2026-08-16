import type { ResearchItem } from "./types";

export const researchItems: ResearchItem[] = [
  {
    slug: "adaa",
    title: "Diversify the Decisions, Not Just the Assets",
    subtitle:
      "A Practical Architecture for Dynamic Asset Allocation When Strategy Choice Is Uncertain",
    stream: "investment",
    streamLabel: "Investment Research Series",
    status: "Public Working Paper",
    publicVersion: "v1.25",
    ssrnId: "7251518",
    dateLabel: "August 2026",
    authorLine: "Sungkyu Lee",
    affiliation: "Graduate School of Computing, Yonsei University",
    featured: true,
    shortSummary:
      "The framework evaluates whether combining distinct allocation rules can reduce dependence on any single strategy when strategy choice itself is uncertain.",
    researchQuestion:
      "Can a dynamic asset-allocation portfolio reduce dependence on choosing the single best rule in advance by diversifying across genuinely different decision processes?",
    findings: [
      "Decision diversity is not guaranteed by strategy count. Several strategies can share the same underlying timing or momentum logic even when their names and holdings differ.",
      "The historical ADAA sleeves disagree in economically meaningful ways, but unevenly. The analysis makes redundancy visible instead of assuming diversification from labels.",
      "The practitioner weights sit inside a broad near-optimal region rather than at a unique optimum. The evidence favors robustness to weight uncertainty over precise weight estimates that are not supported by the sample.",
      "ADAA is not a return-maximizing claim. The case for ADAA rests on decision diversification, implementation, and risk-return trade-offs."
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
          "The robustness exercise emphasizes a broad high-performing region rather than a single ex-post peak, supporting moderate practitioner weights instead of precision optimization.",
        imageUrl:
          "https://slackquant80.github.io/adaa-slackquant/assets/img/Figure_5_Broad_Plateau_Unstable_Optimum_v0.36.1.png",
        alt:
          "ADAA robustness figure showing a broad high-performing weight region and instability of the exact ex-post optimum.",
        sourceLabel: "Public ADAA research · Figure 5"
      }
    ],
    links: {
      paper:
        "https://slackquant80.github.io/adaa-slackquant/downloads/ADAA_SSRN_Working_Paper_v1.25_FINAL_FREEZE.pdf",
      ssrn:
        "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251518",
      github:
        "https://github.com/slackquant80/adaa-decision-diversification",
      replication:
        "https://github.com/slackquant80/adaa-decision-diversification/releases/tag/v1.1.2",
      archivalRelease:
        "https://doi.org/10.5281/zenodo.21953502",
      doi:
        "https://doi.org/10.5281/zenodo.21953502",
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
    status: "Public Working Paper",
    ssrnId: "7291898",
    dateLabel: "August 2026",
    authorLine: "Sungkyu Lee",
    affiliation: "Graduate School of Computing, Yonsei University",
    shortSummary:
      "A defensive strategy can reduce its own drawdown and still trail equity for years. The paper separates realized downside protection from the benchmark-relative path over long rolling holding periods.",
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
          "https://raw.githubusercontent.com/slackquant80/protection-patience-replication/main/figures/Figure_1_Protection_and_Benchmark_Outcomes_v1.0.png",
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
          "https://raw.githubusercontent.com/slackquant80/protection-patience-replication/main/figures/Figure_2_Protected_Path_Burden_v1.0.png",
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
          "https://raw.githubusercontent.com/slackquant80/protection-patience-replication/main/figures/Figure_3_Representative_Protected_But_Lagging_Path_v1.0.png",
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
          "https://raw.githubusercontent.com/slackquant80/protection-patience-replication/main/figures/Figure_4_Persistent_Equity_Depth_vs_Duration_v1.0.png",
        alt:
          "Twenty-year benchmark-relative drawdown depth across fixed tactical shares with labels for median longest underwater duration.",
        sourceLabel: "Public working paper · Figure 4"
      }
    ],
    links: {
      ssrn:
        "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7291898",
      github:
        "https://github.com/slackquant80/protection-patience-replication"
    }
  }
];

export function getResearch(slug: string) {
  return researchItems.find((item) => item.slug === slug);
}
