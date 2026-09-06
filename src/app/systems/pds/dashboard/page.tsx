import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDS Public Dashboard — Portfolio Decision System",
  description: "Delayed public operating dashboard for SlackQuant's Portfolio Decision System.",
};

export default function PdsDashboardPage() {
  return (
    <iframe
      src="/assets/systems/pds/Portfolio_Decision_System_Public.html"
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
