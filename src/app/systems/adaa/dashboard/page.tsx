import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ADAA Public Dashboard — SlackQuant",
  alternates: { canonical: "/systems/adaa/dashboard/" }
};
export default function AdaaDashboardPage() {
  return <iframe
    src="/assets/systems/adaa/index.html"
    title="ADAA Public Dashboard"
    loading="eager"
    referrerPolicy="no-referrer"
    style={{position:"fixed",inset:0,width:"100vw",height:"100dvh",
            border:0,zIndex:2147483000,background:"#f3f6fa"}}
  />;
}
