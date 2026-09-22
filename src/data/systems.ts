export type SystemGroupKey =
  | "portfolio-decision"
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
    dashboardGuide?: string;
    dashboardGuidePdf?: string;
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
    subtitle: "Multi-Strategy Portfolio System with Reinforcement-Learning Adaptive Risk Control",
    category: "Portfolio Operating System",
    systemGroup: "portfolio-decision",
    prominence: "flagship",
    status: "Public operational dashboard",
    dateLabel: "Updated with latest validated operational release",
    shortSummary:
      "SlackQuant's multi-strategy portfolio operating system. PDS Core combines independently maintained strategy providers, PDS Adaptive adds RL-assisted risk control as a separate defensive layer, and Dynamic FX applies a separately managed investor-level currency overlay. The validated dashboard shows the current operating state while machine-specific infrastructure remains internal.",
    role: "Provider Qualification, Portfolio Integration, Decision Governance, and Monitoring",
    methodsKey: "pds-system",
    links: {
      publicDashboard: "/systems/pds/dashboard/",
    },
  },
  {
    slug: "adaa",
    title: "ADAA",
    subtitle: "Autonomous Dynamic Asset Allocation",
    category: "Multi-Asset Strategy",
    systemGroup: "portfolio-strategy",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Live release series",
    shortSummary:
      "A live multi-asset strategy built around Decision Diversification: combining complementary decision horizons, cross-asset opportunity views, defensive responses, and persistence so the portfolio does not depend on a single allocation rule. Official decisions, current drift, and provisional preview states are shown separately.",
    role: "Decision-Diversified Multi-Asset Portfolio Strategy",
    ssrnId: "7251518",
    evidenceLabel: "Public Working Paper",
    methodsKey: "adaa-system",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251518",
      liveDashboard: "https://slackquant.shinyapps.io/adaa_strategy_main/",
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
    dateLabel: "Live release series",
    shortSummary:
      "Forecast-to-Rank Allocation (F2R) is a live cross-asset strategy combining conventional supervised machine learning with Chronos-2. Forecasts from different models are converted into a common rank-based ordering before the monthly portfolio is formed. The public site explains the model families and decision architecture, while low-level construction parameters remain private.",
    role: "Forecast-Ranked Multi-Asset Portfolio Strategy",
    methodsKey: "f2r-system",
    links: {
      liveDashboard: "https://f2r-forecast-to-rank-allocation.streamlit.app",
      deploymentRepository: "https://github.com/slackquant80/f2r-forecast-to-rank-allocation",
      relatedResearch: "/research/second-opinion-portfolio/",
    },
  },

  {
    slug: "equity-alpha",
    title: "Equity Alpha",
    subtitle: "Machine-Learning Equity ETF Selection & Active Portfolio Construction",
    category: "Equity Alpha Strategy",
    systemGroup: "equity-alpha",
    prominence: "standard",
    status: "Public live · research-use operating view",
    dateLabel: "Official signal 2026-08 · holding 2026-09",
    shortSummary:
      "A benchmark-aware global equity ETF strategy combining REX2 regularized cross-sectional machine learning, Chronos-2, and complementary multi-signal evidence. Forecasts are converted into ranked ETF selections and an ACWI-relative active portfolio, with Official holdings, current performance, and Preview kept on separate clocks.",
    role: "Machine-Learning Equity ETF Selection and ACWI-Relative Active Portfolio Construction",
    methodsKey: "equity-alpha-system",
    links: {
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
    status: "Public live · validated baseline v1",
    dateLabel: "On-demand release series",
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
      dashboardGuide: "/systems/scenario-stress-lab/guide/",
      dashboardGuidePdf: "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Dashboard_Guide_v2.0.pdf",
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
      "Portfolio-level governance, provider qualification, strategy integration, decision authority, and ongoing monitoring.",
  },
  {
    key: "portfolio-strategy",
    kicker: "Multi-asset family",
    title: "Multi-Asset Strategies",
    description:
      "Cross-asset strategy engines that generate portfolio allocations under their own decision rules, timing conventions, and evidence standards.",
  },
  {
    key: "equity-alpha",
    kicker: "Equity alpha family",
    title: "Equity Alpha Strategies",
    description:
      "Benchmark-aware equity selection and active-portfolio systems that operate within the equity opportunity set rather than across asset classes.",
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
  key: "portfolio-operating" | "investment-strategy" | "risk-analytics";
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
      "The portfolio-level operating layer determines which strategy providers are admitted, how approved decisions are combined, and how portfolio authority and monitoring are tracked over time.",
    groupKeys: ["portfolio-decision"],
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
      "Analytical systems support portfolio diagnosis, scenario analysis, and stress interpretation without carrying standalone allocation authority.",
    groupKeys: ["risk-scenario"],
  },
];

export function getSystem(slug: string) {
  return systemItems.find((item) => item.slug === slug);
}
