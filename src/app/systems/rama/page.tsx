import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
export const metadata: Metadata = {
  title: "Risk-Aware Momentum Allocation (RAMA) — Portfolio Strategy",
  description: "Independent monthly multi-asset strategy using canary momentum and constrained minimum-variance sizing.",
  alternates: { canonical: "/systems/rama/" },
};
export default function RamaSystemPage() {
  const item = getSystem("rama");
  if (!item) notFound();
  return (
    <main>
      <section className="paper-hero system-hero"><div className="shell"><div className="paper-track-row"><div className="eyebrow">SlackQuant Systems</div><span className="track-chip">{item.category}</span></div><h1 className="paper-title">{item.title}</h1><div className="paper-subtitle">{item.subtitle}</div><div className="paper-meta"><span>{item.status}</span><span>Monthly decision cycle</span><span>Global10 · USD</span></div><div className="actions">{item.links.publicDashboard ? <a className="btn primary" href={item.links.publicDashboard} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">Open Dashboard ↗</a> : null}{item.links.relatedResearch ? <Link className="btn soft" href={item.links.relatedResearch}>View Research</Link> : null}{item.links.ssrn ? <a className="btn soft" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">Working Paper (SSRN) ↗</a> : null}</div></div></section>
      <div className="shell detail-layout system-detail-layout"><aside className="toc"><strong>On this page</strong><a href="#overview">System Role</a><a href="#process">Allocation Rules</a><a href="#universe">Investment Universe</a><a href="#operation">Model Accounting</a></aside><article>
        <section className="prose-section" id="overview"><h2>System Role</h2><p className="lede">RAMA separates three portfolio decisions: when to take market risk, which assets to own, and how to size positions.</p><p className="body-copy">It is an independent allocation rule. Its value within a broader portfolio depends on complementarity with other allocation decisions.</p></section>
        <section className="prose-section" id="process"><h2>Allocation Rules</h2><div className="f2r-process-grid"><div className="system-role-card"><div className="kicker">01 · Exposure</div><h3>TIP canary</h3><p>Positive equally weighted 1/3/6/12-month momentum activates offense. Otherwise choose the stronger of IEF and BIL, with ties to BIL.</p></div><div className="system-role-card"><div className="kicker">02 · Selection</div><h3>Relative momentum</h3><p>Rank Global10 using the same horizons and retain the top six; exact ties are resolved alphabetically by ticker.</p></div><div className="system-role-card"><div className="kicker">03 · Sizing</div><h3>Minimum variance</h3><p>Use 36 monthly returns and 50% diagonal shrinkage. Weights sum to 100%, with no shorting and a 25% offensive position limit. Equal weights are used during historical warm-up.</p></div></div></section>
        <section className="prose-section" id="universe"><h2>Investment Universe</h2><p className="body-copy">SPY, QQQ, IWM, EFA, EEM, VNQ, GLD, DBC, IEF and TLT form the offensive universe. TIP is the canary; IEF and BIL are the defensive instruments.</p></section>
        <section className="prose-section" id="operation"><h2>Model Accounting</h2><p className="body-copy">Signals use completed common month-end adjusted closes; targets take effect at the next common trading close. The model tracks holdings after price drift separately from ready and provisional targets. Operating performance uses daily net marks and 10 bp per traded dollar; the paper's 25 bp historical simulation is separately versioned.</p><p className="body-copy">The monitoring workspace represents model portfolios, not actual account holdings or executed client trades.</p>{!item.links.publicDashboard ? <p className="body-copy">The dashboard is not yet released.</p> : null}</section>
      </article></div>
    </main>
  );
}
