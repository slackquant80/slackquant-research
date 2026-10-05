import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { LivePerformanceChart } from "@/components/LivePerformanceChart";
import { getLiveSystemEvidence } from "@/lib/liveSystemEvidence";
import { getSystem } from "@/data/systems";
import { f2rPublishedEvidence } from "@/data/systemEvidence";

const item = getSystem("f2r");

export const metadata: Metadata = {
  title: "Forecast-to-Rank Allocation (F2R) — Portfolio Strategy System",
  description:
    "Forecast-to-Rank Allocation (F2R), a live cross-asset strategy combining conventional supervised machine learning with Chronos-2 before converting forecasts into ranked portfolio decisions.",
  alternates: { canonical: "/systems/f2r/" },
};

function pct(value: number, digits = 2) { return `${(value * 100).toFixed(digits)}%`; }
function num(value: number, digits = 2) { return value.toFixed(digits); }

export default function F2rSystemPage() {
  if (!item) notFound();
  const liveEvidence = getLiveSystemEvidence("f2r");

  return (
    <main>
      <section className="paper-hero system-hero f2r-system-hero">
        <div className="shell">
          <div className="paper-track-row">
            <div className="eyebrow">SlackQuant Systems</div>
            <span className="track-chip">{item.category}</span>
          </div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta">
            <span>{item.status}</span>
            <span>Monthly decision cycle</span>
            <span>Conventional ML + Chronos-2 · rank-based portfolio formation</span>
          </div>
          <div className="actions">
            {item.links.liveDashboard ? (
              <a className="btn primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                Open Dashboard ↗
              </a>
            ) : null}
            <a
              className="btn soft"
              href="/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              System Documentation ↗
            </a>
            {item.links.relatedResearch ? (
              <Link className="btn soft" href={item.links.relatedResearch}>View Related Research</Link>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">System Role</a>
          <a href="#process">Forecast-to-Rank Process</a>
          <a href="#empirical-evidence">Empirical Evidence</a>
          <a href="#live">Live Operation</a>
          <a href="#evidence">Research Context</a>
          <a href="#methods">Quantitative Methods</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">System role</div>
            <h2>Forecast first, rank second, allocate last</h2>
            <p className="lede">
              F2R is a live cross-asset Portfolio Strategy System that separates forecasting from portfolio choice.
              Conventional supervised models and Chronos-2 produce distinct forecasts, which are brought into a common
              cross-sectional ranking process before the portfolio is formed.
            </p>
            <p className="body-copy">
              F2R does not treat raw forecast magnitudes as portfolio weights. Forecasts are first converted into comparable
              relative-opportunity ranks; a separate allocation rule then turns the final ordering into the monthly multi-asset
              portfolio. This keeps the forecasting logic separate from the rules that determine the portfolio.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">Heterogeneous</div><div className="label">Forecast architecture</div></div>
              <div className="metric"><div className="value">Chronos-2</div><div className="label">Pretrained time-series model</div></div>
              <div className="metric"><div className="value">Rank</div><div className="label">Portfolio translation</div></div>
              <div className="metric"><div className="value">Monthly</div><div className="label">Decision cycle</div></div>
            </div>
            <div className="system-operating-list f2r-pds-relationship">
              <div><strong>Relationship to PDS.</strong><span> F2R remains an independent Portfolio Strategy System and currently serves as an admitted Active Core provider within </span><Link href="/systems/pds/">PDS</Link><span>. PDS governs provider admission and portfolio integration; it does not redefine the F2R strategy.</span></div>
            </div>
          </section>

          <section className="prose-section" id="process">
            <div className="kicker">Strategy architecture</div>
            <h2>Heterogeneous forecasts, one common ranking process</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card">
                <div className="kicker">01 · Forecast</div>
                <h3>Combine distinct forecasting views</h3>
                <p>Conventional supervised models and Chronos-2 process price history through different representations before their forecasts enter the common ranking process.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">02 · Rank</div>
                <h3>Normalize forecasts through rank consensus</h3>
                <p>Heterogeneous outputs are translated into a comparable cross-asset ordering rather than mixed as raw forecast scales or used directly as portfolio weights.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">03 · Allocate</div>
                <h3>Translate ranks into the portfolio target</h3>
                <p>A separate allocation rule maps the final ordering into the monthly model portfolio under a defined timing, turnover, cost, and accounting process.</p>
              </div>
            </div>
            <div className="evidence-note">
              <strong>Public disclosure names the forecasting technologies and the decision architecture.</strong> Exact feature horizons,
              detailed lookback and sequence settings, model-combination settings, and low-level integration mechanics remain protected implementation details.
            </div>
          </section>

          <section className="prose-section" id="empirical-evidence">
            <div className="kicker">Live operational evidence</div>
            <h2>Current-model performance updates with the governed F2R release</h2>
            <p className="body-copy">
              This block is generated from the source-owned F2R current-model performance state and follows the current canonical model definition.
              It advances only through completed performance; current MTD and Preview remain separate operating states and are excluded here.
            </p>
            <LivePerformanceChart
              points={liveEvidence.path}
              primaryLabel={liveEvidence.primaryLabel}
              subtitle={`${liveEvidence.supportStart} → ${liveEvidence.supportEnd} · completed history through ${liveEvidence.completedThrough}`}
            />
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">{pct(liveEvidence.metrics.primary.cagr)}</div><div className="label">Current-model CAGR</div></div>
              <div className="metric"><div className="value">{num(liveEvidence.metrics.primary.sharpe)}</div><div className="label">Sharpe (Rf=0)</div></div>
              <div className="metric"><div className="value">{pct(liveEvidence.metrics.primary.mdd)}</div><div className="label">Maximum drawdown</div></div>
              <div className="metric"><div className="value">{pct(liveEvidence.metrics.primary.annVol)}</div><div className="label">Annualized volatility</div></div>
            </div>
            <div className="evidence-table-wrap" role="region" aria-label="F2R live completed performance summary" tabIndex={0}>
              <table className="evidence-table">
                <thead><tr><th>Series</th><th>Cumulative</th><th>CAGR</th><th>Vol</th><th>Sharpe</th><th>MDD</th><th>Calmar</th></tr></thead>
                <tbody>
                  <tr><th scope="row">{liveEvidence.primaryLabel}</th><td>{pct(liveEvidence.metrics.primary.cumulativeReturn)}</td><td>{pct(liveEvidence.metrics.primary.cagr)}</td><td>{pct(liveEvidence.metrics.primary.annVol)}</td><td>{num(liveEvidence.metrics.primary.sharpe)}</td><td>{pct(liveEvidence.metrics.primary.mdd)}</td><td>{num(liveEvidence.metrics.primary.calmar)}</td></tr>
                  {liveEvidence.metrics.benchmark ? <tr><th scope="row">{liveEvidence.benchmarkLabel}</th><td>{pct(liveEvidence.metrics.benchmark.cumulativeReturn)}</td><td>{pct(liveEvidence.metrics.benchmark.cagr)}</td><td>{pct(liveEvidence.metrics.benchmark.annVol)}</td><td>{num(liveEvidence.metrics.benchmark.sharpe)}</td><td>{pct(liveEvidence.metrics.benchmark.mdd)}</td><td>{num(liveEvidence.metrics.benchmark.calmar)}</td></tr> : null}
                </tbody>
              </table>
            </div>
            <div className="selected-table-block live-recent-block">
              <div className="selected-exhibits-head"><div className="section-title">Recent 12 completed months</div><p>Current MTD and Preview excluded</p></div>
              <div className="evidence-table-wrap" role="region" aria-label="F2R recent 12 completed monthly returns" tabIndex={0}>
                <table className="evidence-table compact-monthly-table">
                  <thead><tr><th>Month</th><th>F2R current model</th></tr></thead>
                  <tbody>{[...liveEvidence.recentMonthly].reverse().map((row) => <tr key={row.month}><th scope="row">{row.month}</th><td>{pct(row.primary)}</td></tr>)}</tbody>
                </table>
              </div>
            </div>
            <div className="evidence-note"><b>Live evidence boundary:</b> {liveEvidence.boundary}</div>

            <div className="research-snapshot-block">
              <div className="kicker">Frozen research snapshot</div>
              <h3>The model-adoption study remains a separate retrospective record</h3>
              <p className="body-copy">Chronos-2 adoption evidence remains citable as a frozen research counterfactual. It is preserved for research provenance and no longer serves as the primary performance evidence for the live F2R System page.</p>
              <div className="metrics system-metrics research-snapshot-metrics">
                {f2rPublishedEvidence.metrics.map(([value, label]) => <div className="metric" key={label}><div className="value">{value}</div><div className="label">{label}</div></div>)}
              </div>
              <div className="evidence-note">{f2rPublishedEvidence.sourceLabel}. {f2rPublishedEvidence.boundary}</div>
            </div>
          </section>

          <section className="prose-section" id="live">
            <div className="kicker">Live operation</div>
            <h2>Official and Preview are shown as different operating states</h2>
            <p className="body-copy">
              The standalone F2R dashboard publishes the current official monthly target alongside a separately labeled
              intramonth preview. The preview is indicative only: it may change before month-end, is not executed, and is kept
              outside completed performance. Historical research results and current operation are also shown separately.
            </p>
            <div className="repro-links documentation-artifacts">
              {item.links.liveDashboard ? (
                <a className="artifact artifact-primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">LIVE SYSTEM</span>
                  <strong>F2R Public Dashboard</strong>
                  <small>Official decision, intramonth preview, historical performance, and portfolio target history.</small>
                  <span className="artifact-action">Open Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.deploymentRepository ? (
                <a className="artifact" href={item.links.deploymentRepository} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">PUBLIC DEPLOYMENT</span>
                  <strong>GitHub Repository</strong>
                  <small>Public deployment package for the standalone Streamlit interface.</small>
                  <span className="artifact-action">View Repository ↗</span>
                </a>
              ) : null}
            </div>
            <div className="evidence-note">
              The public surface shows formal system identity, Official and Preview states, portfolio history, related research, and the deployment package. Exact feature horizons, sequence settings, model-combination settings, local operating paths, and unpromoted research branches remain internal.
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Related research</div>
            <h2>Research papers document distinct stages of the F2R research record</h2>
            <p className="body-copy">
              The earlier information-set study tests whether historical-vintage macro
              information adds decision value beyond price information under matched
              forecasting, ranking, portfolio, and timing rules. The newer model-adoption
              study keeps the portfolio-side price-data domain and portfolio interface
              fixed while asking how Chronos-2 changes rankings, Top-4 decisions, and
              historical portfolio outcomes.
            </p>
            <p className="body-copy">
              Both papers document earlier stages of the F2R research program. They show the
              research path that informed the F2R design family, while the live system is
              maintained separately. Model-combination settings reported in a paper describe
              that research configuration and should not be read as the current production recipe.
            </p>
            <div className="repro-links documentation-artifacts">
              {item.links.relatedResearch ? (
                <Link className="artifact artifact-primary" href={item.links.relatedResearch}>
                  <span className="artifact-kicker">MODEL-ADOPTION RESEARCH</span>
                  <strong>A Second Opinion for the Portfolio</strong>
                  <small>Chronos-2 model adoption, forecast integration, changed decisions, and portfolio consequences.</small>
                  <span className="artifact-action">View Research →</span>
                </Link>
              ) : null}
              <Link className="artifact" href="/research/price-macro-decision/">
                <span className="artifact-kicker">INFORMATION-SET RESEARCH</span>
                <strong>The Decision Value of Price and Macro Information</strong>
                <small>Matched price-versus-macro comparison with explicit information-timing controls.</small>
                <span className="artifact-action">View Prior Research →</span>
              </Link>
            </div>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

       </article>
      </div>
    </main>
  );
}
