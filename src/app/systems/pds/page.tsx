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
    "SlackQuant's governed multi-strategy portfolio operating system, combining source-owned strategy providers with reinforcement-learning adaptive risk control and a dynamic FX implementation layer.",
  alternates: { canonical: "/systems/pds/" },
};

const architectureStages = [
  ["01", "Strategy / Forecast Providers", "Independent strategy systems enter through explicit source boundaries and retain their own evidence lineage."],
  ["02", "Common Representation", "Provider outputs are translated into a consistent portfolio representation before cross-strategy comparison."],
  ["03", "Evidence Qualification", "Research evidence, data integrity, implementation assumptions, and operational readiness are checked before portfolio use."],
  ["04", "Adoption / Rejection", "Passing research evidence does not guarantee portfolio admission; incremental portfolio usefulness is assessed separately."],
  ["05", "Portfolio Integration", "Approved providers are combined under a governed strategic allocation policy while provider identity and contribution remain traceable."],
  ["06", "Adaptive Risk Control", "A reinforcement-learning adaptive layer can selectively reduce risk without replacing the Core strategy engines."],
  ["07", "Monitoring / Refresh", "Core, Adaptive, Preview, Dynamic FX, and provider states are refreshed and monitored under a common operating clock."],
] as const;

function pct(value: number, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}

function num(value: number, digits = 2) {
  return value.toFixed(digits);
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
            <span>Reinforcement-Learning Adaptive Risk Control</span>
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
              href="/resources/systems/pds/PDS_System_Documentation_v1.2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              System Documentation ↗
            </a>
            <Link className="btn soft" href="/systems/adaa/">Explore ADAA</Link>
            <Link className="btn soft" href="/systems/f2r/">Explore F2R</Link>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#decision-state">System Role & Current State</a>
          <a href="#variants">Core / RL Adaptive / Dynamic FX</a>
          <a href="#architecture">Decision Architecture</a>
          <a href="#adoption">Evidence-Gated Adoption</a>
          <a href="#providers">Strategy Provider Layer</a>
          <a href="#performance">Four-Portfolio Performance</a>
          <a href="#monitoring">Monitoring & Governance</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#boundary">Disclosure Boundary</a>
        </aside>

        <article>
          <section className="prose-section" id="decision-state">
            <div className="kicker">Portfolio operating layer</div>
            <h2>Turn independent strategy systems into one governed portfolio decision process.</h2>
            <p className="lede">
              PDS sits above individual strategy engines. It qualifies source-owned providers, separates research credibility
              from portfolio usefulness, governs integration, forms portfolio-level decisions, and monitors whether each role
              remains justified. The current Core combines ADAA and Forecast-to-Rank Allocation (F2R) as complementary providers;
              the platform emphasizes their roles and system architecture rather than reducing the design to a single allocation ratio.
            </p>

            <div className="pds-state-band">
              <div>
                <span className="pds-state-label">Current Active Core</span>
                <strong>ADAA + F2R</strong>
                <small>Independent provider systems integrated through a governed strategic blend. Detailed current target construction is carried by the validated dashboard.</small>
              </div>
              <div>
                <span className="pds-state-label">Adaptive Risk Control</span>
                <strong>{state.adaptiveState} · {pct(state.adaptiveRiskBudget, 0)} risk budget</strong>
                <small>Reinforcement-learning-based adaptive defense applied selectively on top of PDS Core rather than used as a standalone alpha engine.</small>
              </div>
              <div>
                <span className="pds-state-label">Dynamic FX Overlay</span>
                <strong>{pct(state.officialFxHedge, 0)} official hedge</strong>
                <small>Monthly USD/KRW implementation overlay; next Preview hedge is {pct(state.previewFxHedge, 0)} under the current monitoring state.</small>
              </div>
            </div>

            <div className="metrics system-metrics pds-release-metrics">
              <div className="metric"><div className="value">{state.officialSignal}</div><div className="label">Official signal</div></div>
              <div className="metric"><div className="value">{state.holdingMonth}</div><div className="label">Current holding</div></div>
              <div className="metric"><div className="value">{state.markThrough}</div><div className="label">Market through</div></div>
              <div className="metric"><div className="value">{state.previewSignal} → {state.previewHolding}</div><div className="label">Preview signal → holding</div></div>
            </div>

            <div className="boundary-note">
              <b>Operational surface:</b> the PDS dashboard is now the validated public operating view. It publishes the current
              decision, Adaptive state, Preview, performance, portfolio detail, and Dynamic FX monitoring while suppressing only
              environment-specific infrastructure such as local paths, runtimes, caches, credentials, and debug controls.
            </div>
          </section>

          <section className="prose-section" id="variants">
            <div className="kicker">Three operating layers</div>
            <h2>Multi-strategy Core, reinforcement-learning adaptive defense, and Dynamic FX.</h2>
            <p className="body-copy">
              PDS deliberately separates the source of portfolio opportunity from the controls applied around it. PDS Core is the
              canonical multi-strategy portfolio. PDS Adaptive adds a reinforcement-learning risk-control layer that can selectively
              reduce exposure under governed defensive conditions. Dynamic FX is an implementation overlay that manages USD/KRW
              hedge exposure on its own monthly decision clock.
            </p>
            <div className="system-role-grid pds-role-grid">
              <div className="system-role-card">
                <div className="kicker">Canonical portfolio</div>
                <h3>PDS Core</h3>
                <p>Integrates admitted strategy providers under a governed portfolio policy while preserving provider ownership, timing, and evidence lineage.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Reinforcement Learning</div>
                <h3>PDS Adaptive</h3>
                <p><strong>Reinforcement-Learning Adaptive Risk Control.</strong> The controller is used selectively as a state-dependent defense layer, not as the alpha engine or portfolio-selection model.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Investor implementation</div>
                <h3>Dynamic FX Overlay</h3>
                <p>Applies a governed monthly USD/KRW hedge decision and cost schedule while keeping the underlying USD portfolio decision separate.</p>
              </div>
            </div>
            <div className="evidence-note">
              Current Adaptive state and risk budget are visible in the public dashboard. Low-level controller configuration,
              training artifacts, model seeds, and implementation internals remain governed implementation details.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Decision architecture</div>
            <h2>From heterogeneous providers to one portfolio decision</h2>
            <div className="pds-architecture-flow" aria-label="PDS decision architecture">
              {architectureStages.map(([stage, title, copy]) => (
                <div className="pds-architecture-stage" key={title}>
                  <span>{stage}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="prose-section" id="adoption">
            <div className="kicker">Evidence-gated adoption</div>
            <h2>Research validity and portfolio usefulness are related, but they are not the same gate.</h2>
            <p className="body-copy">
              PDS keeps research validation separate from portfolio admission. A strategy can be scientifically well specified
              yet add little incremental portfolio value, while a practical portfolio role does not rewrite a failed or
              inconclusive research result. This separation allows provider admission to be governed by both evidence quality
              and incremental portfolio function.
            </p>
            <div className="dual pds-gate-dual">
              <div className="dual-card">
                <div className="kicker">Research evidence</div>
                <h3>Is the strategy result credible?</h3>
                <p>Data timing, reproducibility, model specification, robustness, and evidence quality are assessed on their own terms.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Portfolio admission</div>
                <h3>Does it improve the portfolio&apos;s decision set?</h3>
                <p>Incremental diversification, role fit, operating burden, and interaction with existing providers determine whether it belongs in the portfolio decision set.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="providers">
            <div className="kicker">Current Active Core providers</div>
            <h2>Complementary strategy systems inside a broader operating architecture</h2>
            <p className="body-copy">
              ADAA and F2R are the strategy systems currently admitted to the Active Core. They remain independently owned
              Portfolio Strategy Systems: their models, evidence, and operating histories remain source-owned, while PDS governs
              the portfolio-level admission, integration, current decision, and monitoring process.
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
                <p>A heterogeneous cross-asset forecasting system combining conventional supervised machine learning with Chronos-2 pretrained time-series intelligence before rank-based portfolio formation.</p>
                <Link className="btn soft" href="/systems/f2r/">View F2R</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="performance">
            <div className="kicker">Integrated performance evidence</div>
            <h2>Four monitored portfolio views, shown with their governed support.</h2>
            <p className="body-copy">
              The table below summarizes the same four portfolio views used in the operational dashboard. Core variants retain
              their full operational support; Adaptive variants use the approved frozen-policy evidence window. The current
              incomplete month is excluded from cumulative and full-period risk statistics.
            </p>
            <div className="evidence-table-wrap" role="region" aria-label="PDS four-portfolio cumulative performance summary" tabIndex={0}>
              <table className="evidence-table pds-public-table">
                <thead>
                  <tr>
                    <th>Portfolio</th>
                    <th>Support</th>
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
                      <th scope="row">
                        {row.label}
                        <small style={{ display: "block", fontWeight: 400 }}>{row.evidenceClass}</small>
                      </th>
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
              <b>Support matters:</b> Adaptive history begins later than Core history, so the four rows should not be read as
              identical-window comparisons. For common-support comparisons, monthly returns, current MTD, target detail, and
              full diagnostics, use the operational dashboard.
            </div>
            <div className="actions">
              <Link className="btn primary" href="/systems/pds/dashboard/" target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">
                Open Full PDS Dashboard ↗
              </Link>
            </div>
          </section>

          <section className="prose-section" id="monitoring">
            <div className="kicker">Monitoring & governance</div>
            <h2>One current operating surface, with environment-only suppression.</h2>
            <p className="body-copy">
              The validated public dashboard mirrors the canonical reader-facing operating information from the local system.
              Publication suppresses machine-specific infrastructure rather than creating a separate reduced investment view.
              Current decision state, Adaptive state, Preview, portfolio weights, Dynamic FX monitoring, and performance remain
              visible under the same governed data and clock conventions.
            </p>
            <div className="system-operating-list">
              <div><strong>On-demand refresh.</strong><span> The release workflow refreshes provider state, validates cross-system reconciliation, and rebuilds the public dashboard from the governed source state.</span></div>
              <div><strong>Provider boundaries.</strong><span> ADAA and F2R remain source-owned systems consumed through governed interfaces rather than copied into PDS.</span></div>
              <div><strong>Fail-closed publication.</strong><span> Public deployment is blocked when data, clock, identity, responsive-layout, or private-environment checks fail.</span></div>
            </div>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="boundary">
            <div className="kicker">Public operating surface / internal implementation</div>
            <h2>Operational transparency without exposing machine-specific infrastructure.</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public</h3>
                <ul>
                  <li>System architecture, provider relationships, and governance</li>
                  <li>Current PDS Core, Adaptive, Preview, Portfolio, Performance, and Dynamic FX operating views</li>
                  <li>Current operational clock and detailed portfolio targets through the validated dashboard</li>
                  <li>Four-portfolio historical performance evidence with explicit support windows</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Internal implementation</h3>
                <ul>
                  <li>Local filesystem paths, runtimes, caches, repository controls, credentials, and debug tooling</li>
                  <li>Low-level controller training artifacts, seeds, and implementation-specific internal identifiers</li>
                  <li>Brokerage-account holdings, realized account P&amp;L, and order-routing infrastructure</li>
                  <li>Unpromoted research branches and non-canonical experimental artifacts</li>
                </ul>
              </div>
            </div>
            <div className="evidence-note">
              The platform page intentionally summarizes the operating architecture rather than repeating every portfolio parameter.
              The validated PDS dashboard is the authoritative public surface for current detailed targets, Preview, Dynamic FX,
              and performance diagnostics; it is a research and monitoring surface, not a brokerage execution interface.
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
