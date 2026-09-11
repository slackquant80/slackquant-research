export type SystemGroupKey = "portfolio-decision" | "portfolio-strategy" | "risk-scenario";

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
    subtitle: "A Governed Multi-Strategy Portfolio Operating System",
    category: "Portfolio Decision & Operating System",
    systemGroup: "portfolio-decision",
    prominence: "flagship",
    status: "Public architecture · protected current decision state",
    dateLabel: "Updated with latest public release",
    shortSummary:
      "SlackQuant's governed portfolio operating layer for qualifying independent strategy providers, deciding portfolio admission, integrating approved sources, forming traceable portfolio targets, and monitoring whether each role remains justified. ADAA and F2R are the current Active Core providers; the architecture is broader than any current provider configuration, and exact integration parameters remain protected.",
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
    category: "Portfolio Strategy System",
    systemGroup: "portfolio-strategy",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Live release series",
    shortSummary:
      "A live multi-asset Portfolio Strategy System built around Decision Diversification: deliberately combining complementary decision horizons, cross-asset opportunity views, defensive responses, and persistence so the portfolio is not dependent on one allocation path. Official decisions, current drift, and provisional preview states remain explicitly separated.",
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
    category: "Portfolio Strategy System",
    systemGroup: "portfolio-strategy",
    prominence: "standard",
    status: "Public live",
    dateLabel: "Live release series",
    shortSummary:
      "Forecast-to-Rank Allocation (F2R) is a live cross-asset Portfolio Strategy System that combines conventional supervised machine learning with Chronos-2 pretrained time-series intelligence, translates heterogeneous forecasts into a common rank-based decision space, and converts that ordering into a disciplined monthly portfolio. Technology and architecture are public; low-level construction parameters remain protected.",
    role: "Forecast-Ranked Multi-Asset Portfolio Strategy",
    methodsKey: "f2r-system",
    links: {
      liveDashboard: "https://f2r-forecast-to-rank-allocation.streamlit.app",
      deploymentRepository: "https://github.com/slackquant80/f2r-forecast-to-rank-allocation",
      relatedResearch: "/research/price-macro-decision/",
    },
  },
  {
    slug: "scenario-stress-lab",
    title: "Multi-Asset Scenario Stress Lab",
    subtitle:
      "Evidence-Constrained Scenario Analysis for Portfolio Stress Decision Support",
    category: "Risk & Scenario System",
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
    kicker: "Operating layer",
    title: "Portfolio Decision & Operating Systems",
    description:
      "Portfolio-level systems that qualify providers, govern portfolio admission and integration, form portfolio decisions, and monitor those decisions over time.",
  },
  {
    key: "portfolio-strategy",
    kicker: "Strategy layer",
    title: "Portfolio Strategy Systems",
    description:
      "Independent portfolio strategies that generate allocation decisions under their own defined decision rules and evidence standards.",
  },
  {
    key: "risk-scenario",
    kicker: "Risk & analytics layer",
    title: "Risk & Scenario Systems",
    description:
      "Decision-support systems that diagnose portfolio risk, stress structure, and scenario behavior without becoming a portfolio strategy by themselves.",
  },
];

export function getSystem(slug: string) {
  return systemItems.find((item) => item.slug === slug);
}
