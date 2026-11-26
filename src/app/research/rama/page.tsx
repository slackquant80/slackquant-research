import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { CitationBox } from "@/components/CitationBox";
import { ArtifactLink } from "@/components/ArtifactLink";
import { getResearch } from "@/data/research";

export const metadata: Metadata = {
  title: "Risk-Aware Momentum Allocation (RAMA)",
  description: "Historical evidence on canary momentum and constrained minimum-variance allocation.",
  alternates: { canonical: "/research/rama/" },
};
const rows = [
  ["RAMA", "9.44%", "8.84%", "−12.58%", "1.07", "0.75"],
  ["Matched equal weight", "9.52%", "9.75%", "−16.40%", "0.98", "0.58"],
] as const;
export default function RamaResearchPage() {
  const item = getResearch("rama");
  if (!item) notFound();
  return (
    <main>
      <ResearchPaperHero item={item} />
      <div className="shell detail-layout">
        <aside className="toc"><strong>On this page</strong><a href="#question">Research Question</a><a href="#design">Research Design</a><a href="#findings">Key Findings</a><a href="#evidence">Historical Evidence</a><a href="#interpretation">Interpretation</a><a href="#citation">Citation</a></aside>
        <article>
          <section className="prose-section" id="question"><h2>Research Question</h2><div className="question">{item.researchQuestion}</div><p className="body-copy">Momentum helps determine what to own, but not how much to own. RAMA combines a market exposure signal with a separate selection and risk-based sizing rule, building on HAA, AAA and KDA.</p></section>
          <section className="prose-section" id="design"><h2>Research Design</h2><p className="body-copy">Positive TIP momentum activates the offensive portfolio. Six of ten ETFs are ranked by equally weighted one-, three-, six- and twelve-month momentum. Long-only weights minimize estimated portfolio variance using 36 monthly returns, 50% diagonal covariance shrinkage and a 25% position limit. Otherwise the strategy holds the stronger of IEF and BIL.</p><p className="body-copy">The primary control holds signals, universe, selection and execution fixed and replaces risk-based weights with equal weights. Additional controls assess diagonal covariance, forecast-risk matching and asset-group-budget matching.</p></section>
          <section className="prose-section" id="findings"><h2>Key Findings</h2><div className="finding-list">{item.findings.map(f => <div className="finding" key={f}><div>{f}</div></div>)}</div></section>
          <section className="prose-section" id="evidence"><h2>Historical Evidence</h2><div className="metrics">{([["215","Holding months"],["9.44%","Net CAGR"],["−12.58%","Daily maximum drawdown"],["0.75","Calmar ratio"]] as const).map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div><div className="selected-table-block"><div className="selected-exhibits-head"><div className="section-title">Matched historical comparison</div><p>August 2008–June 2026 holding months; 25 bp per dollar bought or sold.</p></div><div className="evidence-table-wrap" role="region" aria-label="RAMA matched historical comparison" tabIndex={0}><table className="evidence-table"><thead><tr>{["Strategy","CAGR","Volatility","Daily MDD","Sharpe (0%)","Calmar"].map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((v,i) => i===0 ? <th scope="row" key={i}>{v}</th> : <td key={i}>{v}</td>)}</tr>)}</tbody></table></div><div className="evidence-table-source">Source: RAMA working paper v0.20, Table 3.</div></div></section>
          <section className="prose-section" id="interpretation"><h2>Interpretation</h2><p className="body-copy">Historical evidence favors variance-based sizing for drawdown control rather than consistently higher returns. In the mature sample, equal weighting earns more and diagonal covariance produces similar risk-adjusted results. Turnover matters, and peer comparisons cannot isolate the effect of a single rule. The universe and parameters were developed using this history; no independent out-of-sample test is reported.</p><p className="body-copy">The paper specifies the rules and execution assumptions. Executable replication code and vendor price histories are not distributed with the paper. The separate system page describes the model implementation; its cost convention is not the frozen paper experiment.</p>{item.links.operationalDashboard ? <div className="actions"><ArtifactLink href={item.links.operationalDashboard} dashboardApp>Open Dashboard ↗</ArtifactLink></div> : null}</section>
          <section className="prose-section" id="citation"><h2>Citation</h2><CitationBox item={item} /></section>
        </article>
      </div>
    </main>
  );
}
