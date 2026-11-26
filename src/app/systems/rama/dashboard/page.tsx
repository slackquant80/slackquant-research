import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "RAMA Public Dashboard — SlackQuant",
  alternates: { canonical: "/systems/rama/dashboard/" }
};
export default function RamaDashboardPage() {
  return <iframe src="/assets/systems/rama/index.html" title="RAMA Public Dashboard" loading="eager" referrerPolicy="no-referrer" style={{position:"fixed",inset:0,width:"100vw",height:"100dvh",border:0,zIndex:2147483000,background:"#0b131d"}} />;
}
