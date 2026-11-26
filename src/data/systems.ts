export type SystemGroupKey =
  | "portfolio-decision"
  | "portfolio-architecture"
  | "portfolio-strategy"
  | "equity-alpha"
  | "risk-scenario";

export type SystemItem = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  systemGroup: SystemGroupKey;
  prominence?: "flagship" | "standard";
  status: string;
  dateLabel: string;
  shortSummary: string;
  role: string;
  ssrnId?: string;
  evidenceLabel?: string;
  methodsKey?: string;
  links: {
    ssrn?: string;
    whitePaper?: string;
    liveDashboard?: string;
    publicDashboard?: string;
    fullManual?: string;
    deploymentRepository?: string;
    replicationRepository?: string;
    relatedResearch?: string;
    researchDashboard?: string;
    replication?: string;
    archivalRelease?: string;
  };
};

export const systemItems: SystemItem[] = [
  {
    slug: "pds",
    title: "Portfolio Decision System",
    subtitle: "Multi-Strategy Portfolio Integration, Adaptive Risk Control, and Dynamic FX",
    category: "Portfolio Operating System",
    systemGroup: "portfolio-decision",
    prominence: "flagship",
    status: "Public live",
    dateLabel: "Operational dashboard",
    shortSummary:
      "SlackQuant's multi-strategy portfolio operating system. PDS Core combines independently maintained strategy providers, PDS Adaptive adds a bounded hybrid risk-control layer that combines an RL signal with independent volatility confirmation, and Dynamic FX applies a separately managed investor-level currency overlay. The public dashboard shows the current operating state while machine-specific infrastructure remains internal.",
    role: "Portfolio Integration, Risk Control, and Monitoring",
    methodsKey: "pds-system",
    links: {
      publicDashboard: "/systems/pds/dashboard/",
    },
  },
  {
    slug: "adaa",
    title: "ADAA",
    subtitle: "Autonomous Dynamic Asset Allocation",
    category: "Portfolio Architecture",
    systemGroup: "portfolio-architecture",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Monthly decision cycle",
    shortSummary:
      "ADAA selects and combines complementary allocation rules under strategy uncertainty. Its current multi-asset implementation diversifies decision horizons, opportunity views, defensive responses, and persistence. The strategy pool can evolve when evidence supports a change. Official decisions, current drift, and provisional preview states are shown separately.",
    role: "Decision-Diversified Portfolio Architecture",
    ssrnId: "7251518",
    evidenceLabel: "Public Working Paper",
    methodsKey: "adaa-system",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251518",
      publicDashboard: "/systems/adaa/dashboard/",
      relatedResearch: "/research/adaa/",
      researchDashboard: "https://slackquant80.github.io/adaa-slackquant/",
      replicationRepository: "https://github.com/slackquant80/adaa-decision-diversification",
      replication: "https://github.com/slackquant80/adaa-decision-diversification/releases/tag/v1.1.4",
      archivalRelease: "https://doi.org/10.5281/zenodo.22006841",
    },
  },
  {
    slug: "f2r",
    title: "Forecast-to-Rank Allocation (F2R)",
    subtitle: "Machine-Learning Cross-Asset Portfolio Strategy",
    category: "Multi-Asset Strategy",
    systemGroup: "portfolio-strategy",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Monthly decision cycle",
    shortSummary:
      "Forecast-to-Rank Allocation (F2R) is a live cross-asset strategy combining conventional supervised machine learning with Chronos-2. Forecasts from different models are converted into a common rank-based ordering before the monthly portfolio is formed. The public site explains the model families and decision architecture, while low-level construction parameters remain private.",
    role: "Forecast-Ranked Multi-Asset Portfolio Strategy",
    methodsKey: "f2r-system",
    ssrnId: "7460378",
    evidenceLabel: "Public Working Paper",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7460378",
      publicDashboard: "/systems/f2r/dashboard/",
      deploymentRepository: "https://github.com/slackquant80/f2r-forecast-to-rank-allocation",
      relatedResearch: "/research/second-opinion-portfolio/",
    },
  },

  {
    slug: "rama",
    title: "Risk-Aware Momentum Allocation (RAMA)",
    subtitle: "Momentum Selection and Constrained Minimum-Variance Allocation",
    category: "Multi-Asset Strategy",
    systemGroup: "portfolio-strategy",
    prominence: "standard",
    status: "Model portfolio",
    dateLabel: "Monthly decision cycle",
    shortSummary: "An independent multi-asset strategy using TIP momentum for market exposure, relative momentum for ETF selection, and a shrunk covariance estimate for position sizing.",
    role: "Risk-Aware Multi-Asset Portfolio Strategy",
    ssrnId: "7757240",
    evidenceLabel: "Working Paper",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7757240",
      relatedResearch: "/research/rama/",
      publicDashboard: "/systems/rama/dashboard/",
    },
  },
  {
    slug: "equity-alpha",
    title: "Equity Alpha",
    subtitle: "Benchmark-Aware Global Equity ETF Portfolio",
    category: "Equity Alpha Strategy",
    systemGroup: "equity-alpha",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Monthly decision cycle",
    shortSummary:
      "A three-layer global equity strategy combining ML-based ETF selection, independent regional momentum allocation, and a selective Theme / Sector / Style path. ETF-level decisions are merged into one final portfolio and evaluated against ACWI with daily-first performance and explicit active-risk measures.",
    role: "Benchmark-Aware Global Equity ETF Portfolio",
    methodsKey: "equity-alpha-system",
    ssrnId: "7622538",
    evidenceLabel: "Public Working Paper",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7622538",
      relatedResearch: "/research/equity-alpha/",
      publicDashboard: "/dashboards/equity-alpha/",
    },
  },
  {
    slug: "scenario-stress-lab",
    title: "Multi-Asset Scenario Stress Lab",
    subtitle:
      "Evidence-Constrained Scenario Analysis for Portfolio Stress Decision Support",
    category: "Risk & Analytics System",
    systemGroup: "risk-scenario",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Validated baseline v1 · On-demand analysis",
    shortSummary:
      "A human-in-the-loop multi-asset system for exploring portfolio behavior under plausible joint market stress. It organizes conditional scenarios into interpretable stress archetypes and revalues portfolios on a common scenario set, with a transparent historical comparator retained for context. Designed for portfolio stress decision support, not market timing or automated allocation.",
    role: "Scenario-Based Portfolio Stress Decision Support",
    ssrnId: "7354238",
    evidenceLabel: "Technical White Paper",
    methodsKey: "scenario-stress-lab",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7354238",
      whitePaper:
        "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Technical_White_Paper.pdf",
      liveDashboard: "https://multi-asset-scenario-stress-lab.streamlit.app",
      fullManual: "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Full_Manual.pdf",
    },
  },
];

export const systemGroupDefinitions: Array<{
  key: SystemGroupKey;
  kicker: string;
  title: string;
  description: string;
}> = [
  {
    key: "portfolio-decision",
    kicker: "Portfolio operations",
    title: "Portfolio Operations",
    description:
      "Portfolio-level strategy review, integration, combined decisions, and ongoing monitoring.",
  },
  {
    key: "portfolio-architecture",
    kicker: "Portfolio construction",
    title: "Portfolio Architecture",
    description:
      "Strategy selection, decision diversification, and robust capital allocation across complementary investment rules.",
  },
  {
    key: "portfolio-strategy",
    kicker: "Multi-asset family",
    title: "Multi-Asset Strategies",
    description:
      "Cross-asset strategy engines that generate portfolio allocations under their own decision rules, timing conventions, and research processes.",
  },
  {
    key: "equity-alpha",
    kicker: "Equity alpha family",
    title: "Equity Alpha Strategies",
    description:
      "Benchmark-aware equity strategies that select and allocate within the global equity ETF opportunity set, with explicit benchmark-relative portfolio evaluation.",
  },
  {
    key: "risk-scenario",
    kicker: "Risk analysis",
    title: "Risk & Scenario Analysis",
    description:
      "Decision-support systems for analyzing portfolio risk, stress structure, and scenario behavior without acting as portfolio strategies.",
  },
];

export const systemLayerDefinitions: Array<{
  key: "portfolio-operating" | "portfolio-architecture" | "investment-strategy" | "risk-analytics";
  kicker: string;
  title: string;
  description: string;
  groupKeys: SystemGroupKey[];
}> = [
  {
    key: "portfolio-operating",
    kicker: "Portfolio operating layer",
    title: "Portfolio Operations",
    description:
      "The portfolio operating layer integrates admitted portfolio providers, governs portfolio-level risk and currency controls, and monitors the resulting portfolio. The current PDS Core combines ADAA and F2R.",
    groupKeys: ["portfolio-decision"],
  },
  {
    key: "portfolio-architecture",
    kicker: "Portfolio architecture layer",
    title: "Portfolio Architecture",
    description:
      "ADAA provides the decision-diversified framework for selecting, weighting, and combining complementary allocation rules. Its current portfolio is one implementation of this architecture.",
    groupKeys: ["portfolio-architecture"],
  },
  {
    key: "investment-strategy",
    kicker: "Investment strategy layer",
    title: "Investment Strategies",
    description:
      "Independent strategy engines generate investable decisions. They are grouped by opportunity domain so multi-asset allocation and benchmark-relative equity alpha remain conceptually distinct without being treated as different operating layers.",
    groupKeys: ["portfolio-strategy", "equity-alpha"],
  },
  {
    key: "risk-analytics",
    kicker: "Risk & analytics layer",
    title: "Risk & Scenario Analysis",
    description:
      "Analytical systems support portfolio diagnosis, scenario analysis, and stress interpretation without acting as standalone allocation strategies.",
    groupKeys: ["risk-scenario"],
  },
];

export function getSystem(slug: string) {
  return systemItems.find((item) => item.slug === slug);
}

export function getRelatedSystem(researchSlug: string) {
  return systemItems.find((item) => item.links.relatedResearch === `/research/${researchSlug}/`);
}

export function getFirstPartyDashboardPaths() {
  return systemItems.flatMap((item) => {
    const href = item.links.publicDashboard;
    return href && /^\/(?!\/)[^?#]+\/$/.test(href) ? [href] : [];
  });
}
