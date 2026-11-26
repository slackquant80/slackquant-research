import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { CitationBox } from "@/components/CitationBox";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getResearch } from "@/data/research";

export const metadata: Metadata = {
  title: "Risk-Aware Momentum Allocation (RAMA)",
  description: "Historical evidence on canary momentum, momentum selection and constrained minimum-variance allocation.",
  alternates: { canonical: "/research/rama/" },
};

// Fixed working paper v0.20 evidence, not the evolving model dashboard.
// All numeric values below are transcribed from Tables 2, 3, 4 and 6.
const full = [
  ["RAMA", "9.44%", "8.84%", "−12.58%", "1.07", "0.75", "6.98", "0"],
  ["Matched equal weight", "9.52%", "9.75%", "−16.40%", "0.98", "0.58", "6.26", "5"],
  ["60/40", "8.97%", "10.50%", "−28.30%", "0.87", "0.32", "0.25", "0"],
];
const peers = [
  { name: "RAMA", cagr: 9.75, dd: 12.58, vol: 8.78, sharpe: 1.11, calmar: 0.78 },
  { name: "Matched equal weight", cagr: 9.74, dd: 16.40, vol: 9.73, sharpe: 1.01, calmar: 0.59 },
  { name: "HAA Balanced", cagr: 8.22, dd: 15.61, vol: 9.46, sharpe: 0.88, calmar: 0.53 },
  { name: "AAA (120/60)", cagr: 4.13, dd: 23.23, vol: 9.86, sharpe: 0.46, calmar: 0.18 },
  { name: "KDA (unlevered)", cagr: 4.56, dd: 23.15, vol: 8.46, sharpe: 0.57, calmar: 0.20 },
  { name: "60/40", cagr: 9.06, dd: 28.30, vol: 10.52, sharpe: 0.88, calmar: 0.32 },
];
const mature = [
  ["RAMA", "8.18%", "7.04%", "−12.58%", "1.15", "0.65", "7.23"],
  ["Matched equal weight", "8.52%", "8.40%", "−16.40%", "1.02", "0.52", "6.52"],
  ["Diagonal covariance", "8.40%", "7.36%", "−12.94%", "1.14", "0.65", "6.88"],
  ["Forecast-risk match", "7.48%", "7.44%", "−14.29%", "1.01", "0.52", "6.38"],
  ["Family-budget match", "7.80%", "7.47%", "−12.82%", "1.05", "0.61", "6.95"],
  ["60/40", "9.80%", "9.28%", "−21.24%", "1.06", "0.46", "0.22"],
];
const example = [["DBC",25],["SPY",25],["EFA",25],["EEM",13.80],["QQQ",9.46],["IWM",1.74]] as const;
function Table({ title, headers, rows, note, source }: { title: string; headers: string[]; rows: string[][]; note: string; source: string }) {
  return <div className="selected-table-block">
    <div className="selected-exhibits-head"><div className="section-title">{title}</div><p>{note}</p></div>
    <div className="evidence-table-wrap" role="region" aria-label={title} tabIndex={0}><table className="evidence-table">
      <thead><tr>{headers.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map(row => <tr key={row[0]}>{row.map((v,i) => i === 0 ? <th scope="row" key={i}>{v}</th> : <td key={i}>{v}</td>)}</tr>)}</tbody>
    </table></div><div className="evidence-table-source">{source}</div>
  </div>;
}
function PeerRiskFigure() {
  const x = (v: number) => 68 + (v - 10) / 20 * 580;
  const y = (v: number) => 268 - (v - 3) / 8 * 222;
  const labels = [{dx:10,dy:-9},{dx:10,dy:-8},{dx:10,dy:16},{dx:10,dy:15},{dx:10,dy:-10},{dx:-10,dy:-11}];
  return <figure className="live-performance-figure">
    <figcaption className="live-performance-head"><div><h3>Return and drawdown across allocation rules</h3><p>214 common holding intervals · net 25 bp per traded dollar. Farther left means a smaller daily maximum drawdown.</p></div></figcaption>
    <div className="live-performance-scroll" role="region" aria-label="Peer comparison scatter chart" tabIndex={0}>
      <svg className="live-performance-svg" viewBox="0 0 700 330" role="img" aria-label="Annualized return against absolute daily maximum drawdown for six strategies">
        {[4,6,8,10].map(v => <g key={v}><line className="live-chart-grid" x1={68} x2={648} y1={y(v)} y2={y(v)}/><text className="live-chart-axis" x={56} y={y(v)+4} textAnchor="end">{v}%</text></g>)}
        {[10,15,20,25,30].map(v => <g key={v}><line className="live-chart-grid" x1={x(v)} x2={x(v)} y1={46} y2={268}/><text className="live-chart-date" x={x(v)} y={287} textAnchor="middle">{v}%</text></g>)}
        <text className="live-chart-axis" x={68} y={23}>CAGR</text>
        <text className="live-chart-axis" x={358} y={314} textAnchor="middle">Absolute daily maximum drawdown</text>
        {peers.map((p,i) => <g key={p.name}><circle cx={x(p.dd)} cy={y(p.cagr)} r={i===0?6:4.5} fill={i===0?"#167c80":"#64748b"}><title>{`${p.name}: ${p.cagr.toFixed(2)}% CAGR; ${p.dd.toFixed(2)}% drawdown`}</title></circle><text className="live-chart-axis" x={x(p.dd)+labels[i].dx} y={y(p.cagr)+labels[i].dy} textAnchor={i===5?"end":"start"}>{p.name}</text></g>)}
      </svg>
    </div><div className="evidence-table-source">Source: RAMA working paper v0.20, Table 4. Replotted from the reported statistics.</div>
  </figure>;
}
export default function RamaResearchPage() {
  const item = getResearch("rama");
  if (!item) notFound();
  return (
    <main>
      <ResearchPaperHero item={item} />
      <div className="shell detail-layout">
        <aside className="toc"><strong>On this page</strong>
          <a href="#overview">Overview</a><a href="#question">Research Question</a><a href="#findings">Key Findings</a>
          <a href="#design">Research Design</a><a href="#evidence">Selected Evidence</a>
          <a href="#interpretation">Robustness &amp; Limitations</a><a href="#implementation">Research &amp; Implementation</a>
          <a href="#methods">Quantitative Methods</a><a href="#citation">Citation</a>
        </aside>
        <article>
          <section className="prose-section" id="overview"><h2>Overview</h2>
            <p className="lede">RAMA combines a canary-based market exposure decision with relative momentum selection and constrained minimum-variance portfolio construction. It asks whether risk-based sizing can reduce realized portfolio risk while preserving much of the return earned by momentum selection.</p>
            <p className="body-copy">The historical study compares RAMA with an otherwise identical equal-weight rule, other matched sizing controls and established tactical allocation strategies. The primary evidence concerns drawdown control rather than consistent return superiority.</p>
            <div className="metrics">{[["215","Holding months"],["9.44%","Net CAGR"],["−12.58%","Daily maximum drawdown"],["0.75","Calmar ratio"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
          </section>
          <section className="prose-section" id="question"><h2>Research Question</h2><div className="question">{item.researchQuestion}</div>
            <p className="body-copy">Momentum helps determine what to own, but not how much to own. RAMA builds on AAA's combination of momentum and minimum variance, HAA's TIP canary, and KDA's integration of canary exposure control and variance-based sizing. KDA is the closest architectural precedent. RAMA differs in the single-canary decision, offensive selection rule, covariance window, fixed shrinkage and position limits.</p>
          </section>
          <section className="prose-section" id="findings"><h2>Key Findings</h2><div className="finding-list">{item.findings.map(f => <div className="finding" key={f}><div>{f}</div></div>)}</div>
            <p className="body-copy">The return difference from equal weight is small in the full sample, while daily maximum drawdown is 3.82 percentage points smaller. The advantage is not universal: the mature-period return is lower, and a simpler diagonal-covariance rule achieves comparable risk-adjusted results.</p>
          </section>
          <section className="prose-section" id="design"><h2>Research Design</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card"><div className="kicker">01 · Exposure</div><h3>Canary momentum</h3><p>Positive TIP momentum activates offense; otherwise choose the stronger of IEF and BIL. All momentum scores average 1-, 3-, 6- and 12-month returns.</p></div>
              <div className="system-role-card"><div className="kicker">02 · Selection</div><h3>Rank Global10</h3><p>Select the six strongest offensive ETFs with no additional positive-momentum requirement. Exact ties are broken alphabetically.</p></div>
              <div className="system-role-card"><div className="kicker">03 · Position sizing</div><h3>Constrained minimum variance</h3><p>Use 36 monthly returns, 50% diagonal shrinkage and a 25% offensive position cap. Long-only weights sum to one.</p></div>
            </div>
            <p className="body-copy">Signals use adjusted USD prices at completed common month-end closes and execute at the next common trading close. The primary comparator holds the signal, selected assets, execution and cost assumptions fixed, changing only position sizing. The initial covariance warm-up uses equal weights.</p>
            <Table title="Worked portfolio example" headers={["ETF","RAMA weight","Matched equal weight"]} rows={example.map(([ticker,w]) => [ticker,w.toFixed(2)+"%","16.67%"])} note="Signal: 29 May 2026 · execution: 1 June 2026. Exact equal weights are 1/6." source="Source: RAMA working paper v0.20, Table 2." />
          </section>
          <section className="prose-section" id="evidence"><h2>Selected Evidence</h2>
            <Table title="Matched historical comparison" headers={["Strategy","CAGR","Volatility","Daily MDD","Sharpe (0%)","Calmar","Ann. L1","36m losses"]} rows={full} note="215 holding intervals, 1 August 2008–1 July 2026; net 25 bp per purchase or sale. Volatility and Sharpe use monthly returns; MDD uses daily marks. Ann. L1 is annualized bilateral turnover; losses count negative cumulative returns in 180 overlapping 36-month windows." source="Source: RAMA working paper v0.20, Table 3." />
            <p className="body-copy">The 60/40 reference holds SPY and IEF. It also recorded no negative three-year windows and had the highest minimum three-year return of the three portfolios. The rolling windows overlap and are not independent trials.</p>
            <PeerRiskFigure />
            <Table title="Common-period strategy comparison" headers={["Strategy","CAGR","Volatility","Daily MDD","Sharpe (0%)","Calmar"]} rows={peers.map(p => [p.name,p.cagr.toFixed(2)+"%",p.vol.toFixed(2)+"%","−"+p.dd.toFixed(2)+"%",p.sharpe.toFixed(2),p.calmar.toFixed(2)])} note="214 common intervals, 1 August 2008–1 June 2026; net 25 bp. AAA is a 120/60 implementation variant; KDA is unlevered with zero-return cash." source="Source: RAMA working paper v0.20, Table 4." />
            <p className="body-copy">RAMA has the smallest daily maximum drawdown in this common-period comparison. Differences in universe, exposure rules and sizing all contribute to peer results; they do not isolate the incremental effect of covariance estimation.</p>
          </section>
          <section className="prose-section" id="interpretation"><h2>Robustness and Limitations</h2>
            <Table title="Mature-period matched sizing controls" headers={["Strategy","CAGR","Volatility","Daily MDD","Sharpe (0%)","Calmar","Ann. L1"]} rows={mature} note="178 holding intervals, September 2011–June 2026; net 25 bp, excluding initialization. Forecast-risk matching and family-budget matching separate estimated risk and exposure budgets from within-portfolio sizing." source="Source: RAMA working paper v0.20, Table 6." />
            <p className="body-copy">Diagonal covariance earns more with less turnover and nearly the same Sharpe and Calmar ratios. The incremental contribution of off-diagonal covariance is therefore modest in this sample.</p>
            <div className="system-role-grid">
              <div className="system-role-card"><div className="kicker">Trading costs</div><h3>Turnover matters</h3><p>Full-sample CAGR is 10.59% at 10 bp, 9.44% at 25 bp and 7.55% at 50 bp per traded dollar. Matched equal weight overtakes RAMA at about 15.3 bp in the full sample and earns more even before costs in the mature sample.</p></div>
              <div className="system-role-card"><div className="kicker">Universe</div><h3>Selection is consequential</h3><p>Adding EWY raises historical CAGR to 10.48% but increases daily maximum drawdown to 14.81%. Removing QQQ and IWM reduces return. The individual-ETF cap does not impose an asset-class cap.</p></div>
            </div>
            <div className="evidence-note"><b>Evidence boundary:</b> the universe and parameters were developed using this history; no independent out-of-sample test is reported. Results are historical simulations using adjusted-price proxies and simplified transaction costs, not actual investor performance.</div>
          </section>
          <section className="prose-section" id="implementation"><h2>Research and Implementation</h2>
            <p className="body-copy">The working paper documents the rules, comparators, data source and evaluation assumptions. Executable replication code and vendor price histories are not distributed. The model dashboard uses a separate operating cost convention of 10 bp per traded dollar and reports the current-model reconstruction; its values must not replace the frozen paper evidence.</p>
            <div className="repro-links">
              <Link className="artifact" href="/systems/rama/"><span className="artifact-kicker">PORTFOLIO STRATEGY</span><strong>RAMA System</strong><small>Strategy architecture, completed model performance and operating states.</small><span className="artifact-action">View System</span></Link>
              {item.links.operationalDashboard ? <a href={item.links.operationalDashboard} className="artifact artifact-primary" target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true"><span className="artifact-kicker">MODEL PORTFOLIO</span><strong>RAMA Dashboard</strong><small>Current model target, performance, history and monitoring.</small><span className="artifact-action">Open Dashboard ↗</span></a> : null}
            </div>
          </section>
          <MethodsUsed researchSlug={item.slug} />
          <section className="prose-section" id="citation"><h2>Citation</h2><CitationBox item={item} /></section>
        </article>
      </div>
    </main>
  );
}
