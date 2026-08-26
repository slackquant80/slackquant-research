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
  };
};

export const systemItems: SystemItem[] = [
  {
    slug: "scenario-stress-lab",
    title: "Multi-Asset Scenario Stress Lab",
    subtitle:
      "Evidence-Constrained Scenario Analysis for Portfolio Stress Decision Support",
    category: "Risk & Scenario System",
    status: "Risk & Scenario System",
    dateLabel: "August 2026",
    shortSummary:
      "A human-in-the-loop multi-asset stress system centered on B1 EWMA-t conditional scenarios, with B0 historical block resampling kept visible as the transparent comparator. The retained public use is scenario-archetype stress representation and same-cloud portfolio what-if analysis, not market timing or automated allocation.",
    role: "Scenario-Based Portfolio Stress Decision Support",
    ssrnId: "7354238",
    links: {
      ssrn: "https://papers.ssrn.com/abstract=7354238",
      whitePaper:
        "/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Technical_White_Paper.pdf",
    },
  },
];

export function getSystem(slug: string) {
  return systemItems.find((item) => item.slug === slug);
}
