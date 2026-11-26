import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { LivePerformanceChart } from "@/components/LivePerformanceChart";
import { LiveMonthlyReturnsChart } from "@/components/LiveMonthlyReturnsChart";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getRamaEvidence } from "@/lib/ramaEvidence";

export const metadata: Metadata = {
  title: "Risk-Aware Momentum Allocation (RAMA) — Portfolio Strategy",
  description: "Monthly multi-asset model combining canary momentum, cross-asset selection and constrained minimum-variance allocation.",
  alternates: { canonical: "/systems/rama/" },
};

const universe = [
  ["US equities", "SPY, QQQ, IWM", "Large-cap, Nasdaq-100 and small-cap"],
  ["International equities", "EFA, EEM", "Developed ex-US and Canada; emerging markets"],
  ["Real estate", "VNQ", "US listed real estate"],
  ["Real assets", "GLD, DBC", "Gold and diversified commodity futures"],
  ["Fixed income", "IEF, TLT", "Intermediate and long US Treasuries"],
  ["Canary", "TIP", "Inflation-protected US Treasuries; signal only"],
  ["Defense", "IEF, BIL", "Intermediate Treasuries or Treasury bills"],
];
function pct(x: number) { return (x * 100).toFixed(2) + "%"; }
function num(x: number) { return x.toFixed(2); }

export default function RamaSystemPage() {
  const item = getSystem("rama");
  if (!item) notFound();
  const evidence = getRamaEvidence();
  const main = evidence.rows[0];
  const dashboardHref = item.links.publicDashboard;
  return (
    <main>
      <section className="paper-hero system-hero">
        <div className="shell">
          <div className="paper-track-row"><div className="eyebrow">SlackQuant Systems</div><span className="track-chip">{item.category}</span></div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta"><span>{item.status}</span><span>Completed through {evidence.completedThrough}</span><span>Global10 · USD</span></div>
          <div className="actions">
            {dashboardHref ? <a className="btn primary" href={dashboardHref} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">Open Dashboard ↗</a> : null}
            {item.links.relatedResearch ? <Link className="btn soft" href={item.links.relatedResearch}>View Related Research</Link> : null}
            {item.links.ssrn ? <a className="btn soft" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">Working Paper (SSRN) ↗</a> : null}
          </div>
        </div>
      </section>
      <div className="shell detail-layout system-detail-layout rama-detail-layout">
        <aside className="toc"><strong>On this page</strong>
          <a href="#overview">System Role</a><a href="#process">Strategy Architecture</a>
          <a href="#universe">Investment Universe</a><a href="#empirical-evidence">Empirical Evidence</a>
          <a href="#operation">Operating States</a><a href="#evidence">Research &amp; Public Artifacts</a><a href="#methods">Quantitative Methods</a>
        </aside>
        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">System role</div><h2>Separate exposure, selection and position sizing</h2>
            <p className="lede">RAMA is an independent monthly multi-asset strategy. Momentum determines when to take market risk and which assets to own; estimated portfolio variance determines how much to allocate to each selected asset.</p>
            <p className="body-copy">Strong momentum can cluster among assets that share the same economic exposures. Equal capital weights do not necessarily distribute risk evenly. RAMA retains the relative momentum ranking but introduces a separate, constrained risk-based allocation step. The allocation step seeks to reduce estimated risk without forecasting expected returns.</p>
            <div className="metrics system-metrics">{[["10","Offensive ETFs"],["6","Ranked selections"],["25%","Offensive position limit"],["Monthly","Decision cycle"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
            <div className="system-operating-list"><div><strong>Relationship to ADAA and PDS.</strong> RAMA operates independently. It is not currently included in <Link href="/systems/adaa/">ADAA</Link> or used by <Link href="/systems/pds/">PDS Core</Link>. Its potential role in a multi-strategy portfolio depends on how its decisions and returns complement other strategies.</div></div>
          </section>
          <section className="prose-section" id="process">
            <div className="kicker">Strategy architecture</div><h2>Three decisions, one monthly allocation</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card"><div className="kicker">01 · Exposure</div><h3>TIP canary</h3><p>Calculate the average of 1-, 3-, 6- and 12-month returns. Positive TIP momentum permits offensive investment; otherwise hold the stronger of IEF and BIL, with ties to BIL.</p></div>
              <div className="system-role-card"><div className="kicker">02 · Selection</div><h3>Relative momentum</h3><p>Rank the ten eligible ETFs using the same horizons and retain the six highest scores, regardless of sign. Exact ties are resolved alphabetically by ticker.</p></div>
              <div className="system-role-card"><div className="kicker">03 · Sizing</div><h3>Minimum variance</h3><p>Use 36 monthly returns and 50% diagonal covariance shrinkage. Minimize estimated variance with weights summing to one, no shorting, and a 25% offensive cap. Before sufficient covariance history is available, offensive positions are equally weighted.</p></div>
            </div>
            <p className="body-copy">Shrinkage halves the estimated off-diagonal covariances while retaining the individual variances. This limits sensitivity to noisy correlation estimates. The cap requires at least four nonzero offensive holdings, but does not cap aggregate equity exposure. The defensive branch holds one ETF.</p>
            <div className="evidence-note"><strong>Risk considerations.</strong> TIP momentum determines market exposure rather than forecasting inflation. Minimum variance reduces estimated risk within the selected assets but does not guarantee smaller future drawdowns.</div>
          </section>
          <section className="prose-section" id="universe">
            <div className="kicker">Investable assets</div><h2>Global10 and the defensive instruments</h2>
            <p className="body-copy">The offensive universe spans US and international equities, listed real estate, real assets and Treasury maturities. It is not a global market-cap portfolio; SPY and QQQ overlap, while IEF can appear in either branch.</p>
            <div className="evidence-table-wrap" role="region" aria-label="RAMA investment universe" tabIndex={0}><table className="evidence-table rama-universe-table"><thead><tr><th>Asset group</th><th>ETF</th><th>Exposure</th></tr></thead><tbody>{universe.map(([group,tickers,exposure]) => <tr key={group}><th scope="row">{group}</th><td>{tickers}</td><td>{exposure}</td></tr>)}</tbody></table></div>
          </section>
          <section className="prose-section" id="empirical-evidence">
            <div className="kicker">Model portfolio evidence</div><h2>Completed Model Performance</h2>
            <p className="body-copy">The model portfolio has {evidence.periods} completed holding periods through {evidence.completedThrough}. Market data are available through {evidence.through}; the current, unfinished holding period is excluded from the charts and statistics below.</p>
            <LivePerformanceChart points={evidence.points} primaryLabel="RAMA" benchmarkLabel="Matched equal weight" subtitle={evidence.start + " → " + evidence.completedThrough + " · month-end observations and execution endpoints · net 10 bp per traded dollar"} />
            <LiveMonthlyReturnsChart rows={evidence.recentMonthly} primaryLabel="RAMA" benchmarkLabel="Matched equal weight" title="Recent 12 Completed Holding Months" subtitle="Execution-close to next execution-close returns · not calendar-month returns" />
            <div className="metrics system-metrics">{[[pct(main.cagr),"RAMA CAGR"],[num(main.sharpe),"Sharpe (Rf=0)"],[pct(main.mdd),"Daily maximum drawdown"],[pct(main.annVol),"Annualized daily volatility"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
            <div className="evidence-table-wrap" role="region" aria-label="RAMA completed model performance" tabIndex={0}><table className="evidence-table">
              <thead><tr><th>Series</th><th>Cumulative</th><th>CAGR</th><th>Volatility</th><th>Sharpe</th><th>Daily MDD</th><th>Calmar</th></tr></thead>
              <tbody>{evidence.rows.map(r => <tr key={r.label}><th scope="row">{r.label}</th><td>{pct(r.cumulativeReturn)}</td><td>{pct(r.cagr)}</td><td>{pct(r.annVol)}</td><td>{num(r.sharpe)}</td><td>{pct(r.mdd)}</td><td>{num(r.calmar)}</td></tr>)}</tbody>
            </table></div>
            <div className="evidence-note"><strong>Performance basis.</strong> Historical model portfolio returns are not actual investor returns or an independent forward test. Risk statistics use completed daily net returns; CAGR uses elapsed time. The 60/40 reference (SPY and IEF) is shown in the table and full dashboard.</div>
            {dashboardHref ? <div className="actions"><a className="btn primary" href={dashboardHref} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">Open Full RAMA Dashboard ↗</a></div> : null}
            <div className="research-snapshot-block">
              <div className="kicker">Working paper evidence</div><h3>Historical sizing comparison at 25 bp</h3>
              <p className="body-copy">The working paper uses 215 holding intervals, from 1 August 2008 to 1 July 2026, with monthly-return volatility and Sharpe and daily maximum drawdown. The paper applies 25 bp per dollar bought or sold to its main comparison, rather than the dashboard’s 10 bp.</p>
              <div className="metrics system-metrics research-snapshot-metrics">{[["9.44%","Net CAGR"],["8.84%","Annualized monthly volatility"],["−12.58%","Daily maximum drawdown"],["1.07","Sharpe (Rf=0)"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
              <div className="evidence-note">Source: RAMA working paper v0.20, Table 3. The matched equal-weight rule returned 9.52% with 9.75% volatility and −16.40% daily maximum drawdown.</div>
            </div>
          </section>
          <section className="prose-section" id="operation">
            <div className="kicker">Decision timing</div><h2>Model Accounting and Operating States</h2>
            <p className="body-copy">Signals use completed common month-end adjusted USD closes; new targets take effect at the next common trading close. The previous portfolio remains effective through that close; the new target earns returns from the following close-to-close interval. A proportional cost of 10 bp per dollar bought or sold is deducted from portfolio value at execution. Weights drift with market prices between rebalances.</p>
            <div className="system-role-grid adaa-state-grid">
              <div className="system-role-card adaa-state-card official"><div className="kicker">01 · Official</div><h3>Effective target</h3><p>Last completed signal: {evidence.signal}. Effective execution close: {evidence.completedThrough}.</p></div>
              <div className="system-role-card adaa-state-card current"><div className="kicker">02 · Mark</div><h3>Current MTD and drift</h3><p>Model valuations and marked weights through {evidence.through}. Drift does not create a new target.</p></div>
              <div className="system-role-card adaa-state-card preview"><div className="kicker">03 · Next decision</div><h3>Preview or Target Ready</h3><p>Intramonth estimates are provisional. A completed signal awaiting its next execution close is Target Ready, not yet effective.</p></div>
            </div>
            <div className="boundary-note"><strong>Model portfolio.</strong> The dashboard reports model allocations and performance, not executed account trades. Calendar-month and year-to-date returns are distinct from execution-to-execution holding-period returns.</div>
          </section>
          <section className="prose-section" id="evidence">
            <div className="kicker">Related Research &amp; Dashboard</div><h2>Strategy research and model implementation</h2>
            <p className="body-copy">The working paper compares variance-based sizing with equal weighting and alternative sizing rules. It also examines transaction costs, changes to the investment universe and comparisons with HAA, AAA and KDA. The research page presents those historical results, while the dashboard tracks the current model portfolio.</p>
            <div className="repro-links documentation-artifacts">
              {item.links.relatedResearch ? <Link className="artifact" href={item.links.relatedResearch}><span className="artifact-kicker">STRATEGY RESEARCH</span><strong>Risk-Aware Momentum Allocation (RAMA)</strong><small>Working paper, historical comparisons and robustness analysis.</small><span className="artifact-action">View Research →</span></Link> : null}
              {dashboardHref ? <a className="artifact artifact-primary" href={dashboardHref} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true"><span className="artifact-kicker">MODEL PORTFOLIO</span><strong>RAMA Public Dashboard</strong><small>Official and provisional allocations, portfolio history, performance and data exports.</small><span className="artifact-action">Open Dashboard ↗</span></a> : null}
            </div>
          </section>
          <MethodsUsed researchSlug="rama-system" context="system" />
        </article>
      </div>
    </main>
  );
}
