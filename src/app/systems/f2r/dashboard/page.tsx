import type { Metadata } from "next";
import { F2RStaticDashboard } from "@/components/F2RStaticDashboard";

export const metadata: Metadata = {
  title: "F2R Public Dashboard — SlackQuant",
  description: "Forecast-to-Rank Allocation official target, preview, completed model-portfolio performance and allocation history.",
  alternates: { canonical: "/systems/f2r/dashboard/" },
};

export default function F2rDashboardPage() {
  // Standalone full-viewport dashboard, matching the ADAA/PDS dashboard shell.
  // The platform's global header/footer remain mounted but are fully occluded.
  // Keep native vertical scrolling inside this viewport instead of clipping content.
  return (
    <div
      data-f2r-standalone-dashboard="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        overflowY: "auto",
        overflowX: "hidden",
        overscrollBehavior: "contain",
        zIndex: 2147483000,
        background: "#0a1219",
      }}
    >
      <F2RStaticDashboard />
    </div>
  );
}
