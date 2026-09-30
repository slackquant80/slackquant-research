// PDS_CANONICAL_PLATFORM_PAGE_V1
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { pdsCanonicalSummary } from "@/data/pdsCanonicalSummary";
import { getSystem } from "@/data/systems";

const item = getSystem("pds");

export const metadata: Metadata = {
  title: "Portfolio Decision System — Multi-Strategy Portfolio Operating System",
  description:
    "SlackQuant's multi-strategy portfolio operating system, combining independently maintained strategy providers with bounded hybrid adaptive risk control and a Dynamic FX implementation layer.",
  alternates: { canonical: "/systems/pds/" },
};

const architectureStages = [
  ["01", "Strategy / Forecast Providers", "Independent strategy systems enter through defined interfaces and keep their own research and operating records."],
  ["02", "Common Representation", "Provider outputs are translated into a consistent portfolio representation before cross-strategy comparison."],
  ["03", "Research Review", "Data timing, research quality, implementation assumptions, and operational readiness are reviewed before portfolio use."],
  ["04", "Portfolio Admission", "A sound research result does not automatically enter the portfolio; incremental portfolio usefulness is assessed separately."],
  ["05", "Portfolio Integration", "Approved providers are combined under a defined strategic allocation policy while each provider's identity and contribution remain traceable."],
  ["06", "Adaptive Risk Control", "A bounded hybrid Adaptive layer can selectively reduce Core risk without replacing the underlying strategy engines."],
  ["07", "Monitoring / Refresh", "Core, Adaptive, Preview, Dynamic FX, and provider states are refreshed and monitored under a common operating clock."],
] as const;

function pct(value: number, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}

function num(value: number, digits = 2) {
  return value.toFixed(digits);
}

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function compactMonth(period: string) {
  const [year, month] = period.split("-");
  const index = Number(month) - 1;
  if (!year || index < 0 || index >= MONTH_LABELS.length) return period;
  return `${MONTH_LABELS[index]} '${year.slice(-2)}`;
}

function RecentMonthlyReturnsChart({ rows }: { rows: typeof pdsCanonicalSummary.recentMonthlyReturns }) {
  if (!rows.length) return null;
  const width = 820;
  const height = 310;
  const left = 52;
  const right = 18;
  const top = 24;
  const bottom = 48;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const zeroY = top + plotHeight / 2;
  const halfHeight = plotHeight / 2;
  const maxObservedPct = Math.max(
    ...rows.flatMap((row) => [Math.abs(row.coreDynamicFx * 100), Math.abs(row.adaptiveDynamicFx * 100)]),
  );
  const axisMaxPct = Math.max(5, Math.ceil(maxObservedPct / 5) * 5);
  const groupWidth = plotWidth / rows.length;
  const barWidth = Math.min(17, groupWidth * 0.28);
  const gap = 3;
  const ticks = [axisMaxPct, axisMaxPct / 2, 0, -axisMaxPct / 2, -axisMaxPct];
  const yForTick = (tick: number) => zeroY - (tick / axisMaxPct) * halfHeight;
  const barGeometry = (value: number) => {
    const pctValue = value * 100;
    const h = Math.max(1, (Math.abs(pctValue) / axisMaxPct) * halfHeight);
    return { pctValue, height: h, y: pctValue >= 0 ? zeroY - h : zeroY };
  };

  return (
    <figure className="pds-monthly-figure">
      <figcaption className="pds-monthly-chart-head">
        <div>
          <h3>Recent Completed Monthly Returns</h3>
          <p>PDS Core + Dynamic FX vs PDS Adaptive + Dynamic FX · historical series · current MTD excluded</p>
        </div>
        <div className="pds-monthly-legend" aria-label="Chart legend">
          <span><i className="pds-legend-swatch core" />Core + Dynamic FX</span>
          <span><i className="pds-legend-swatch adaptive" />Adaptive + Dynamic FX</span>
        </div>
      </figcaption>
      <div className="pds-monthly-chart-scroll" role="region" aria-label="Recent completed monthly returns chart" tabIndex={0}>
        <svg className="pds-monthly-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Twelve completed holding-month returns for PDS Core plus Dynamic FX and PDS Adaptive plus Dynamic FX">
          {ticks.map((tick) => (
            <g key={tick}>
              <line className={tick === 0 ? "pds-chart-zero" : "pds-chart-grid"} x1={left} x2={width - right} y1={yForTick(tick)} y2={yForTick(tick)} />
              <text className="pds-chart-axis-label" x={left - 8} y={yForTick(tick) + 4} textAnchor="end">{tick.toFixed(tick % 1 ? 1 : 0)}%</text>
            </g>
          ))}
          {rows.map((row, index) => {
            const center = left + groupWidth * (index + 0.5);
            const core = barGeometry(row.coreDynamicFx);
            const adaptive = barGeometry(row.adaptiveDynamicFx);
            return (
              <g key={row.holdingMonth}>
                <rect className="pds-chart-bar core" x={center - barWidth - gap / 2} y={core.y} width={barWidth} height={core.height} rx={1.5}>
                  <title>{`${row.holdingMonth} · PDS Core + Dynamic FX: ${core.pctValue.toFixed(2)}%`}</title>
                </rect>
                <rect className="pds-chart-bar adaptive" x={center + gap / 2} y={adaptive.y} width={barWidth} height={adaptive.height} rx={1.5}>
                  <title>{`${row.holdingMonth} · PDS Adaptive + Dynamic FX: ${adaptive.pctValue.toFixed(2)}%`}</title>
                </rect>
                <text className="pds-chart-month-label" x={center} y={height - 18} textAnchor="middle">{compactMonth(row.holdingMonth)}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="pds-monthly-chart-note">Adaptive results are the certified prior-parent historical comparison and are not rebased to the current Core definition. Detailed same-period and provider comparisons remain in the PDS dashboard.</div>
    </figure>
  );
}

export default function PdsSystemPage() {
  if (!item) notFound();

  const state = pdsCanonicalSummary;

  return (
    <main>
      <section className="paper-hero system-hero pds-system-hero">
        <div className="shell">
          <div className="paper-track-row">
            <div className="eyebrow">SlackQuant Systems</div>
            <span className="track-chip">{item.category}</span>
          </div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta">
            <span>{item.status}</span>
            <span>Current Core providers · ADAA + F2R</span>
            <span>Adaptive Risk Control · RL-assisted hybrid</span>
          </div>
          <div className="actions">
            <Link
              className="btn primary"
              href="/systems/pds/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              data-sq-dashboard-app="true"
            >
              Open Dashboard ↗
            </Link>
            <a
              className="btn soft"
              href="/resources/systems/pds/PDS_System_Documentation_v1.5.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              System Documentation ↗
            </a>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#decision-state">System Role & Operating Layers</a>
          <a href="#architecture">Decision Architecture & Admission</a>
          <a href="#providers">Strategy Providers</a>
          <a href="#performance">Performance</a>
          <a href="#monitoring">Operations & Public Boundary</a>
          <a href="#methods">Quantitative Methods</a>
        </aside>

        <article>
          <section className="prose-section" id="decision-state">
            <div className="kicker">Portfolio operating layer</div>
            <h2>Turn independent strategy systems into one portfolio decision process</h2>
            <p className="lede">
              PDS sits above individual strategy engines. It evaluates providers, separates research credibility from portfolio
              usefulness, manages integration, forms portfolio-level decisions, and monitors whether each role remains justified.
              The current Core combines ADAA and Forecast-to-Rank Allocation (F2R) as complementary providers, while PDS handles
              portfolio integration, adaptive risk control, and monitoring at the system level.
            </p>

            <div className="pds-state-band">
              <div>
                <span className="pds-state-label">Current Active Core</span>
                <strong>ADAA + F2R</strong>
                <small>Independent provider systems combined through a defined strategic allocation. Detailed current target construction is available in the PDS dashboard.</small>
              </div>
              <div>
                <span className="pds-state-label">Adaptive Risk Control</span>
                <strong>{state.adaptiveState} · {pct(state.adaptiveRiskBudget, 0)} risk budget</strong>
                <small>Adaptive risk control is a bounded hybrid layer that uses an RL signal alongside independent volatility confirmation; it is not a standalone alpha engine.</small>
              </div>
              <div>
                <span className="pds-state-label">Dynamic FX Overlay</span>
                <strong>{pct(state.officialFxHedge, 0)} official hedge</strong>
                <small>Monthly USD/KRW implementation overlay; the current Preview hedge is {pct(state.previewFxHedge, 0)} under the present monitoring state.</small>
              </div>
            </div>

            <div className="metrics system-metrics pds-release-metrics">
              <div className="metric"><div className="value">{state.officialSignal}</div><div className="label">Official signal</div></div>
              <div className="metric"><div className="value">{state.holdingMonth}</div><div className="label">Current holding</div></div>
              <div className="metric"><div className="value">{state.markThrough}</div><div className="label">Market through</div></div>
              <div className="metric"><div className="value">{state.previewSignal} → {state.previewHolding}</div><div className="label">Preview signal → holding</div></div>
            </div>

            <div className="boundary-note">
              <b>Public dashboard:</b> the PDS dashboard shows the current decision, Adaptive state, Preview, portfolio detail,
              performance, and Dynamic FX monitoring. Local paths, caches, credentials, and debug controls are excluded from the
              public interface.
            </div>
            <div className="kicker pds-inline-kicker">Three operating layers</div>
            <h2>PDS Core, Adaptive Risk Control, and Dynamic FX</h2>
            <p className="body-copy">
              PDS separates the source of portfolio opportunity from the controls applied around it. PDS Core is the main
              multi-strategy portfolio. PDS Adaptive is a bounded hybrid risk-control layer that can reduce total Core exposure
              when its defensive controller is active. Dynamic FX manages USD/KRW hedge exposure on a separate monthly decision clock.
            </p>
            <div className="system-role-grid pds-role-grid">
              <div className="system-role-card">
                <div className="kicker">Core portfolio</div>
                <h3>PDS Core</h3>
                <p>Combines admitted strategy providers under a defined portfolio policy while preserving each provider's timing, identity, and research record.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Adaptive risk control</div>
                <h3>PDS Adaptive</h3>
                <p>PDS Adaptive uses an RL signal inside a bounded hybrid controller with independent point-in-time volatility confirmation. It does not select securities or replace the Core allocation engines.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Investor implementation</div>
                <h3>Dynamic FX Overlay</h3>
                <p>Applies a monthly USD/KRW hedge decision and cost schedule while keeping the underlying USD portfolio decision separate.</p>
              </div>
            </div>
            <div className="evidence-note">
              The frozen controller was trained under the previous Core parent definition and is currently applied to the revised
              Core without automatic retraining. Historical prior-parent results are therefore not a current-Core Adaptive track record.
              Current Adaptive state and risk budget remain visible in the public dashboard; low-level controller settings,
              seeds, and model artifacts remain internal.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Decision architecture</div>
            <h2>From independent providers to one portfolio decision</h2>
            <div className="pds-architecture-flow" aria-label="PDS decision architecture">
              {architectureStages.map(([stage, title, copy]) => (
                <div className="pds-architecture-stage" key={title}>
                  <span>{stage}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </div>
              ))}
            </div>
            <div className="kicker pds-inline-kicker">Research review & portfolio admission</div>
            <h2>Research quality and portfolio usefulness are evaluated separately</h2>
            <p className="body-copy">
              PDS keeps research review separate from portfolio admission. A strategy can be well specified as research yet add
              little incremental portfolio value, while a useful portfolio role does not change the status of a failed or
              inconclusive research result. Admission therefore depends on both research quality and the role the strategy adds to the portfolio.
            </p>
            <div className="dual pds-gate-dual">
              <div className="dual-card">
                <div className="kicker">Research review</div>
                <h3>Is the strategy result credible?</h3>
                <p>Data timing, reproducibility, model specification, robustness, and result quality are assessed on their own terms.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Portfolio admission</div>
                <h3>Does it add a useful portfolio role?</h3>
                <p>Incremental diversification, role fit, operational burden, and interaction with existing providers determine whether the strategy belongs in the portfolio.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="providers">
            <div className="kicker">Current Active Core providers</div>
            <h2>Complementary strategy systems inside the PDS portfolio process</h2>
            <p className="body-copy">
              ADAA and F2R are the strategy systems currently admitted to the Active Core. Each remains an independent Portfolio
              Strategy System with its own models, research record, and operating history; PDS is responsible for portfolio-level
              admission, integration, the current combined decision, and monitoring.
            </p>
            <div className="dual pds-provider-dual">
              <div className="dual-card">
                <div className="kicker">Portfolio Strategy System</div>
                <h3>ADAA</h3>
                <p>A multi-asset strategy built around Decision Diversification, combining complementary decision horizons, opportunity views, defensive responses, and persistence.</p>
                <Link className="btn soft" href="/systems/adaa/">View ADAA</Link>
              </div>
              <div className="dual-card">
                <div className="kicker">Portfolio Strategy System</div>
                <h3>Forecast-to-Rank Allocation (F2R)</h3>
                <p>A cross-asset forecasting system combining conventional supervised machine learning with Chronos-2 pretrained time-series forecasting before rank-based portfolio formation.</p>
                <Link className="btn soft" href="/systems/f2r/">View F2R</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="performance">
            <div className="kicker">Integrated performance</div>
            <h2>Recent completed returns with their evidence boundaries</h2>
            <p className="body-copy">
              The chart shows the most recent 12 completed holding months for the two Dynamic FX historical series; current MTD is
              excluded. The table summarizes the historical series surfaced in this platform summary. Core rows begin in May 2017.
              Adaptive rows begin in May 2021 and belong to the certified frozen-policy comparison under the prior Core parent
              definition; they are research evidence, not a current-Core Adaptive track record. The PDS dashboard separately shows
              the longer current-definition Core / Dynamic FX reconstruction beginning in December 2005.
            </p>
            <RecentMonthlyReturnsChart rows={state.recentMonthlyReturns} />
            <div className="evidence-table-wrap" role="region" aria-label="PDS four-portfolio cumulative performance summary" tabIndex={0}>
              <table className="evidence-table pds-public-table">
                <thead>
                  <tr>
                    <th>Portfolio</th>
                    <th>Completed period</th>
                    <th>Cumulative</th>
                    <th>CAGR</th>
                    <th>Vol.</th>
                    <th>Sharpe</th>
                    <th>MDD</th>
                    <th>Calmar</th>
                  </tr>
                </thead>
                <tbody>
                  {state.performance.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.supportStart} → {row.supportEnd}</td>
                      <td>{pct(row.cumulativeReturn)}</td>
                      <td>{pct(row.cagr)}</td>
                      <td>{pct(row.annVol)}</td>
                      <td>{num(row.sharpe)}</td>
                      <td>{pct(row.mdd)}</td>
                      <td>{num(row.calmar)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="boundary-note">
              <b>Evidence periods differ:</b> Adaptive history begins later than Core history and reflects the prior Core parent
              definition, so the rows are not current-definition like-for-like comparisons. The longer PDS reconstruction is a
              separate current-definition research series; standalone F2R and ADAA histories remain separate. Use the PDS dashboard
              for full portfolio detail.
            </div>
            <div className="actions">
              <Link className="btn primary" href="/systems/pds/dashboard/" target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">
                Open Full PDS Dashboard ↗
              </Link>
            </div>
          </section>

          <section className="prose-section" id="monitoring">
            <div className="kicker">Operations & monitoring</div>
            <h2>One operating clock, with private infrastructure kept out of the public view</h2>
            <p className="body-copy">
              The public dashboard uses the same decision state, clocks, and portfolio data as the operating system. It omits
              machine-specific infrastructure and private controls rather than maintaining a separate investment view. Current
              decision state, Adaptive state, Preview, portfolio weights, Dynamic FX monitoring, and performance follow the same
              data and clock conventions.
            </p>
            <div className="system-operating-list">
              <div><strong>On-demand refresh.</strong><span> The release workflow refreshes provider state, checks cross-system consistency, and rebuilds the public dashboard from the current system state.</span></div>
              <div><strong>Provider separation.</strong><span> ADAA and F2R remain independent systems connected to PDS through defined interfaces rather than copied into PDS.</span></div>
              <div><strong>Release checks.</strong><span> Release checks cover data consistency, clocks, identity, responsive layout, and private-environment boundaries before deployment.</span></div>
            </div>
            <div className="kicker pds-inline-kicker">Public and internal detail</div>
            <h2>Public operating views, private implementation</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public</h3>
                <ul>
                  <li>System architecture, provider relationships, and governance</li>
                  <li>Current PDS Core, Adaptive, Preview, Portfolio, Performance, and Dynamic FX operating views</li>
                  <li>Current decision clock and detailed portfolio targets through the PDS dashboard</li>
                  <li>Historical performance views with support periods and evidence boundaries stated explicitly</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Internal implementation</h3>
                <ul>
                  <li>Local filesystem paths, runtime/cache details, repository controls, credentials, and debug tooling</li>
                  <li>Low-level controller training settings, seeds, and implementation-specific internal identifiers</li>
                  <li>Brokerage-account holdings, realized account P&amp;L, and order-routing infrastructure</li>
                  <li>Unpromoted research branches and internal experimental work</li>
                </ul>
              </div>
            </div>
            <div className="evidence-note">
              The platform page summarizes the operating architecture rather than repeating every portfolio parameter. The PDS
              dashboard is the public operating view for detailed targets, Preview, Dynamic FX, and performance diagnostics; it is
              for research and monitoring, not brokerage execution.
            </div>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />
        </article>
      </div>
    </main>
  );
}
