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
      <div className="shell detail-layout system-detail-layout">
        <aside className="toc"><strong>On this page</strong>
          <a href="#overview">System Role</a><a href="#process">Strategy Architecture</a>
          <a href="#universe">Investment Universe</a><a href="#empirical-evidence">Empirical Evidence</a>
          <a href="#operation">Operating States</a><a href="#evidence">Research &amp; Public Artifacts</a><a href="#methods">Quantitative Methods</a>
        </aside>
        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">System role</div><h2>Separate exposure, selection and position sizing</h2>
            <p className="lede">RAMA is an independent monthly multi-asset strategy. Momentum determines when to take market risk and which assets to own; estimated portfolio variance determines how much to allocate to each selected asset.</p>
            <p className="body-copy">Strong momentum can cluster among assets that share the same economic exposures. Equal capital weights do not necessarily distribute risk evenly. RAMA retains the relative momentum ranking but introduces a separate, constrained risk-based allocation step. Its objective is to control portfolio risk without relying on return forecasts from the covariance model.</p>
            <div className="metrics system-metrics">{[["10","Offensive ETFs"],["6","Ranked selections"],["25%","Offensive position limit"],["Monthly","Decision cycle"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
            <div className="system-operating-list"><div><strong>Relationship to ADAA and PDS.</strong> RAMA is an independent strategy, not a current component of <Link href="/systems/adaa/">ADAA</Link> or an admitted provider of <Link href="/systems/pds/">PDS Core</Link>. Its portfolio role depends on complementary decisions and incremental net portfolio value.</div></div>
          </section>
          <section className="prose-section" id="process">
            <div className="kicker">Strategy architecture</div><h2>Three decisions, one monthly allocation</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card"><div className="kicker">01 · Exposure</div><h3>TIP canary</h3><p>Average 1-, 3-, 6- and 12-month simple returns. Positive TIP momentum permits the offensive allocation. Otherwise hold the stronger of IEF and BIL, with ties to BIL.</p></div>
              <div className="system-role-card"><div className="kicker">02 · Selection</div><h3>Relative momentum</h3><p>Rank Global10 using the same horizons and retain the top six. There is no further positive-momentum screen. Exact ties are resolved alphabetically by ticker.</p></div>
              <div className="system-role-card"><div className="kicker">03 · Sizing</div><h3>Minimum variance</h3><p>Use 36 monthly returns and 50% diagonal covariance shrinkage. Minimize estimated variance with weights summing to one, no shorting, and a 25% offensive cap. Equal weights apply during historical warm-up.</p></div>
            </div>
            <p className="body-copy">Shrinkage halves the estimated off-diagonal covariances while retaining the individual variances. This limits sensitivity to noisy correlation estimates. The cap requires at least four nonzero offensive holdings, but does not cap aggregate equity exposure. The defensive branch holds one ETF.</p>
            <div className="evidence-note"><strong>Risk boundary:</strong> the canary is a market-exposure rule, not a direct inflation forecast. Minimum variance is conditional on the selected assets; it does not guarantee a smaller future drawdown.</div>
          </section>
          <section className="prose-section" id="universe">
            <div className="kicker">Investable assets</div><h2>Global10 and the defensive instruments</h2>
            <p className="body-copy">The offensive universe spans US and international equities, listed real estate, real assets and Treasury maturities. It is not a global market-cap portfolio; SPY and QQQ overlap, while IEF can appear in either branch.</p>
            <div className="evidence-table-wrap" role="region" aria-label="RAMA investment universe" tabIndex={0}><table className="evidence-table"><thead><tr><th>Asset group</th><th>ETF</th><th>Exposure</th></tr></thead><tbody>{universe.map(([group,tickers,exposure]) => <tr key={group}><th scope="row">{group}</th><td>{tickers}</td><td>{exposure}</td></tr>)}</tbody></table></div>
          </section>
          <section className="prose-section" id="empirical-evidence">
            <div className="kicker">Model portfolio evidence</div><h2>Completed Model Performance</h2>
            <p className="body-copy">Updated with each RAMA dashboard release. The current-model reconstruction includes {evidence.periods} completed holding intervals, valued through {evidence.completedThrough}. Current market data extend through {evidence.through}; the open interval is excluded below.</p>
            <LivePerformanceChart points={evidence.points} primaryLabel="RAMA" benchmarkLabel="Matched equal weight" subtitle={evidence.start + " → " + evidence.completedThrough + " · month-end observations and execution endpoints · net 10 bp per traded dollar"} />
            <LiveMonthlyReturnsChart rows={evidence.recentMonthly} primaryLabel="RAMA" benchmarkLabel="Matched equal weight" title="Recent 12 Completed Holding Months" subtitle="Execution-close to next execution-close returns · not calendar-month returns" />
            <div className="metrics system-metrics">{[[pct(main.cagr),"RAMA CAGR"],[num(main.sharpe),"Sharpe (Rf=0)"],[pct(main.mdd),"Daily maximum drawdown"],[pct(main.annVol),"Annualized daily volatility"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
            <div className="evidence-table-wrap" role="region" aria-label="RAMA completed model performance" tabIndex={0}><table className="evidence-table">
              <thead><tr><th>Series</th><th>Cumulative</th><th>CAGR</th><th>Volatility</th><th>Sharpe</th><th>Daily MDD</th><th>Calmar</th></tr></thead>
              <tbody>{evidence.rows.map(r => <tr key={r.label}><th scope="row">{r.label}</th><td>{pct(r.cumulativeReturn)}</td><td>{pct(r.cagr)}</td><td>{pct(r.annVol)}</td><td>{num(r.sharpe)}</td><td>{pct(r.mdd)}</td><td>{num(r.calmar)}</td></tr>)}</tbody>
            </table></div>
            <div className="evidence-note"><b>Performance boundary:</b> model portfolio reconstruction, not actual investor returns or an independent forward test. Daily risk statistics and elapsed-time CAGR come from the same accepted public dashboard; the open holding interval, current MTD and Preview are excluded. The 60/40 reference is included in the table and full dashboard.</div>
            {dashboardHref ? <div className="actions"><a className="btn primary" href={dashboardHref} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">Open Full RAMA Dashboard ↗</a></div> : null}
            <div className="research-snapshot-block">
              <div className="kicker">Frozen research snapshot</div><h3>Historical sizing comparison at 25 bp</h3>
              <p className="body-copy">The working paper uses 215 holding intervals, from 1 August 2008 to 1 July 2026, with monthly-return volatility and Sharpe and daily maximum drawdown. Its cost and statistical conventions differ from the current-model reconstruction.</p>
              <div className="metrics system-metrics research-snapshot-metrics">{[["9.44%","Net CAGR"],["8.84%","Annualized monthly volatility"],["−12.58%","Daily maximum drawdown"],["1.07","Sharpe (Rf=0)"]].map(([v,l]) => <div className="metric" key={l}><div className="value">{v}</div><div className="label">{l}</div></div>)}</div>
              <div className="evidence-note">Source: RAMA working paper v0.20, Table 3. The matched equal-weight rule returned 9.52% with 9.75% volatility and −16.40% daily maximum drawdown.</div>
            </div>
          </section>
          <section className="prose-section" id="operation">
            <div className="kicker">Decision timing</div><h2>Model Accounting and Operating States</h2>
            <p className="body-copy">Signals use completed common month-end adjusted USD closes; new targets take effect at the next common trading close. The previous portfolio earns through that close. The current implementation deducts 10 bp per traded dollar multiplicatively at execution; weights drift between rebalances.</p>
            <div className="system-role-grid adaa-state-grid">
              <div className="system-role-card adaa-state-card official"><div className="kicker">01 · Official</div><h3>Effective target</h3><p>Last completed signal: {evidence.signal}. Effective execution close: {evidence.completedThrough}.</p></div>
              <div className="system-role-card adaa-state-card current"><div className="kicker">02 · Mark</div><h3>Current MTD and drift</h3><p>Model valuations and marked weights through {evidence.through}. Drift does not create a new target.</p></div>
              <div className="system-role-card adaa-state-card preview"><div className="kicker">03 · Next decision</div><h3>Preview or Target Ready</h3><p>Intramonth estimates are provisional. A completed signal awaiting its next execution close is Target Ready, not yet effective.</p></div>
            </div>
            <div className="boundary-note"><b>Operating boundary:</b> the dashboard monitors model decisions and reconstructed performance; it does not place trades or show actual account holdings. Calendar MTD/YTD, holding-period returns and completed daily marks remain distinct.</div>
          </section>
          <section className="prose-section" id="evidence">
            <div className="kicker">Research &amp; public artifacts</div><h2>Strategy research and model implementation</h2>
            <p className="body-copy">The paper examines the role of variance-based sizing against matched equal weights and other sizing controls. Additional evidence documents cost sensitivity, universe sensitivity and the comparison with HAA, AAA and KDA. The research page preserves those fixed results; the dashboard reports the current model.</p>
            <div className="repro-links documentation-artifacts">
              {item.links.relatedResearch ? <Link className="artifact" href={item.links.relatedResearch}><span className="artifact-kicker">STRATEGY RESEARCH</span><strong>Risk-Aware Momentum Allocation</strong><small>Historical experiment, methodology and limitations.</small><span className="artifact-action">View Research</span></Link> : null}
              {dashboardHref ? <a className="artifact artifact-primary" href={dashboardHref} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true"><span className="artifact-kicker">MODEL PORTFOLIO</span><strong>RAMA Dashboard</strong><small>Official and provisional targets, daily and monthly performance, target history and exports.</small><span className="artifact-action">Open Dashboard ↗</span></a> : null}
            </div>
          </section>
          <MethodsUsed researchSlug="rama-system" context="system" />
        </article>
      </div>
    </main>
  );
}
