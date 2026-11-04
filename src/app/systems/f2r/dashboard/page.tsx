import type { Metadata } from "next";
import { F2RStaticDashboard } from "@/components/F2RStaticDashboard";

export const metadata: Metadata = {
  title: "F2R Public Dashboard — SlackQuant",
  description: "Forecast-to-Rank Allocation official target, preview, completed model-portfolio performance and allocation history.",
  alternates: { canonical: "/systems/f2r/dashboard/" },
};

export default function F2rDashboardPage() {
  return <F2RStaticDashboard />;
}
