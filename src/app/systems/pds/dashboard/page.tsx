import type { Metadata } from "next";
import { pdsPublicSnapshot } from "@/data/pdsPublicSnapshot";

export const metadata: Metadata = {
  title: "PDS Public Dashboard — Portfolio Decision System",
  description: "Delayed public operating dashboard for SlackQuant's Portfolio Decision System.",
};

export default function PdsDashboardPage() {
  const dashboardVersion = pdsPublicSnapshot
    ? `${pdsPublicSnapshot.sourceProgramVersion}-${pdsPublicSnapshot.publicAsOfDate}`
    : "latest";

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
