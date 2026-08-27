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
  links: {
    ssrn?: string;
    whitePaper?: string;
    liveDashboard?: string;
    dashboardGuide?: string;
    dashboardGuidePdf?: string;
    fullManual?: string;
    deploymentRepository?: string;
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
];

export function getSystem(slug: string) {
  return systemItems.find((item) => item.slug === slug);
}
