import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDS Public Dashboard — Portfolio Decision System",
  description: "Validated public operational dashboard for SlackQuant's Portfolio Decision System.",
  alternates: { canonical: "/systems/pds/dashboard/" },
};

export default function PdsDashboardPage() {
  // Replaced with the validated canonical-mirror SHA during the governed PDS publish pipeline.
  const dashboardVersion = "a9ef6e8f6f727992";

  return (
    <iframe
      src={`/assets/systems/pds/Portfolio_Decision_System_Public.html?v=${encodeURIComponent(dashboardVersion)}`}
      title="Portfolio Decision System Public Dashboard"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        border: 0,
        zIndex: 2147483000,
        background: "#f5f7fa",
      }}
    />
  );
}
