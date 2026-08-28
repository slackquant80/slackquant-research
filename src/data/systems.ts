export type SystemItem = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
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
    status: "Operational baseline v1",
    dateLabel: "Updated August 27, 2026",
    shortSummary:
      "A human-in-the-loop multi-asset stress system centered on B1 EWMA-t conditional scenarios, with B0 historical block resampling kept visible as the transparent comparator. The validated v1 public universe contains eight ETFs. The retained public use is scenario-archetype stress representation and same-cloud portfolio what-if analysis, not market timing or automated allocation.",
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
    status: "PUBLIC_LIVE",
    dateLabel: "System page added August 28, 2026",
    shortSummary:
      "An open operational multi-asset strategy system that combines complementary dynamic-allocation sleeves, exposes current portfolio monitoring and a clearly separated intramonth preview, and links the live implementation back to the frozen public research evidence without treating the live system as the paper itself.",
    role: "Rule-Governed Multi-Asset Portfolio Strategy",
    ssrnId: "7251518",
    evidenceLabel: "Related Research",
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

export function getSystem(slug: string) {
  return systemItems.find((item) => item.slug === slug);
}
