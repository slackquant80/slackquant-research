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
    dashboardGuide?: string;
    dashboardGuidePdf?: string;
    fullManual?: string;
    deploymentRepository?: string;
    relatedResearch?: string;
    researchDashboard?: string;
    replication?: string;
    archivalRelease?: string;
  };
};

export const systemItems: SystemItem[] = [
  {
    slug: "scenario-stress-lab",
    title: "Multi-Asset Scenario Stress Lab",
    subtitle:
      "Evidence-Constrained Scenario Analysis for Portfolio Stress Decision Support",
    category: "Risk & Scenario System",
    systemGroup: "risk-scenario",
    prominence: "standard",
    status: "Operational baseline v1",
    dateLabel: "Updated August 27, 2026",
    shortSummary:
      "A human-in-the-loop multi-asset system for exploring portfolio behavior under plausible joint market stress. It organizes conditional scenarios into interpretable stress archetypes and revalues portfolios on a common scenario set, with a transparent historical comparator retained for context. Designed for portfolio stress decision support, not market timing or automated allocation.",
    role: "Scenario-Based Portfolio Stress Decision Support",
    ssrnId: "7354238",
    evidenceLabel: "Technical White Paper",
    links: {
      ssrn: "https://papers.ssrn.com/abstract=7354238",
      whitePaper:
        "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Technical_White_Paper.pdf",
      liveDashboard: "https://multi-asset-scenario-stress-lab.streamlit.app",
      dashboardGuide: "/systems/scenario-stress-lab/guide/",
      dashboardGuidePdf: "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Dashboard_Guide_v2.0.pdf",
      fullManual: "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Full_Manual.pdf",
      deploymentRepository: "https://github.com/slackquant80/multi-asset-scenario-stress-lab",
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
    dateLabel: "Updated August 2026",
    shortSummary:
      "A live rules-based multi-asset Portfolio Strategy System built around Decision Diversification. ADAA combines complementary allocation perspectives while keeping the official monthly decision, current mark-to-market state, and provisional intramonth preview clearly separated; detailed construction remains in the linked research record.",
    role: "Decision-Diversified Multi-Asset Portfolio Strategy",
    ssrnId: "7251518",
    evidenceLabel: "Research anchor",
    methodsKey: "adaa-system",
    links: {
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251518",
      liveDashboard: "https://slackquant.shinyapps.io/adaa_strategy_main/",
      relatedResearch: "/research/adaa/",
      researchDashboard: "https://slackquant80.github.io/adaa-slackquant/",
      deploymentRepository: "https://github.com/slackquant80/adaa-decision-diversification",
      replication: "https://github.com/slackquant80/adaa-decision-diversification/releases/tag/v1.1.4",
      archivalRelease: "https://doi.org/10.5281/zenodo.22006841",
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
      "Systems that qualify, combine, monitor, and govern multiple strategy or forecasting inputs at the portfolio-management level.",
  },
  {
    key: "portfolio-strategy",
    kicker: "Strategy layer",
    title: "Portfolio Strategy Systems",
    description:
      "Standalone portfolio strategies that generate implementable allocation decisions under a defined operating contract.",
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
