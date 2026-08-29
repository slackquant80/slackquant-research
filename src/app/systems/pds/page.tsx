import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";
import { pdsPublicSnapshot } from "@/data/pdsPublicSnapshot";

const item = getSystem("pds");

export const metadata: Metadata = {
  title: "Portfolio Decision System — Portfolio Decision & Operating System",
  description:
    "SlackQuant's governed multi-strategy Portfolio Decision & Operating System, with open architecture and a protected current decision state.",
};

const architectureStages = [
  ["01", "Strategy / Forecast Providers", "Independent strategy systems and forecast-based providers enter through explicit source boundaries."],
  ["02", "Common Representation", "Provider outputs are translated into a consistent portfolio representation before cross-strategy comparison."],
  ["03", "Evidence Qualification", "Research evidence, data integrity, implementation assumptions, and operational readiness are checked before portfolio use."],
  ["04", "Adoption / Rejection", "Passing research evidence does not guarantee portfolio admission; incremental portfolio usefulness is assessed separately."],
  ["05", "Portfolio Integration & Allocation", "Approved providers are combined under an explicit portfolio-level allocation policy while provider identity and contribution remain traceable."],
  ["06", "Portfolio Decision", "The system produces a portfolio-level target while keeping provider ownership and decision provenance traceable."],
  ["07", "Monitoring / Refresh / Replacement", "The portfolio and its providers are refreshed, monitored, and reconsidered as evidence or operating conditions change."],
] as const;

function pct(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

export default function PdsSystemPage() {
  if (!item) notFound();

  const snapshot = pdsPublicSnapshot;
  const latestReturns = snapshot?.recentMonthlyReturns ?? [];
  const latestTargets = snapshot?.latestAssetTargets ?? [];
  const latestWeights = snapshot?.latestStrategyWeights ?? null;

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
            <span>{item.role}</span>
            <span>Current Active Core providers · ADAA + F2R</span>
          </div>
          <div className="actions">
            <a className="btn primary" href="#decision-state">View Public System State</a>
            <Link className="btn soft" href="/systems/adaa/">Explore ADAA</Link>
            <Link className="btn soft" href="/systems/f2r/">Explore F2R</Link>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#decision-state">System Role & Public State</a>
          <a href="#orchestration">What PDS Orchestrates</a>
          <a href="#architecture">Decision Architecture</a>
          <a href="#adoption">Evidence-Gated Adoption</a>
          <a href="#providers">Strategy Provider Layer</a>
          <a href="#portfolio">Portfolio Integration & Decision</a>
          <a href="#monitoring">Monitoring & Governance</a>
          <a href="#evidence">Delayed Public Evidence</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#boundary">Disclosure Boundary</a>
        </aside>

        <article>
          <section className="prose-section" id="decision-state">
            <div className="kicker">Portfolio operating layer</div>
            <h2>Govern strategy admission, portfolio integration, and ongoing portfolio decisions in one operating layer.</h2>
            <p className="lede">
              PDS is provider-agnostic and is not defined by any particular pair of strategies. It evaluates independently
              owned strategy systems, determines whether and how they enter the portfolio, governs their portfolio-level
              integration, produces traceable portfolio targets, and monitors whether those decisions remain justified as
              evidence and operating conditions evolve.
            </p>
            <div className="pds-state-band">
              <div>
                <span className="pds-state-label">Current Active Core</span>
                <strong>ADAA + F2R</strong>
                <small>These are the strategy systems currently admitted to the Active Core. Their presence does not define the PDS architecture; current provider weights and asset targets are protected.</small>
              </div>
              <div>
                <span className="pds-state-label">Public release model</span>
                <strong>Open architecture · protected current decision state</strong>
                <small>Architecture and eligible historical decisions are public; the current decision state remains protected until the disclosure clock permits release.</small>
              </div>
              <div>
                <span className="pds-state-label">Current portfolio target</span>
                <strong>Protected until release gate</strong>
                <small>The public page does not expose the currently active target, provider weights, preview, shadow state, or current overlay state.</small>
              </div>
            </div>
            <div className="boundary-note">
              <b>Why the delay exists:</b> released history makes the portfolio decision process inspectable without
              publishing a live feed of decision-sensitive portfolio instructions.
            </div>
          </section>

          <section className="prose-section" id="orchestration">
            <div className="kicker">What PDS orchestrates</div>
            <h2>Independent providers, one governed portfolio decision process</h2>
            <p className="body-copy">
              PDS can consume rules-based, optimization-based, forecast-based, and other eligible portfolio providers
              without requiring them to share the same internal model. It standardizes only the interfaces needed for
              portfolio-level comparison and decision-making while preserving each provider&apos;s source ownership,
              scientific lineage, and evidence record.
            </p>
            <div className="system-role-grid pds-role-grid">
              <div className="system-role-card">
                <div className="kicker">Provider intake</div>
                <h3>Source-owned strategy systems</h3>
                <p>Providers remain distinct strategy systems or research providers with their own logic and evidence lineage rather than becoming hidden PDS submodules.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Portfolio admission</div>
                <h3>Evidence and role before admission</h3>
                <p>Research quality, reproducibility, operating readiness, and incremental portfolio role are examined before a provider can enter the portfolio decision set.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Ongoing operation</div>
                <h3>Monitor, refresh, reconsider</h3>
                <p>Admission is not permanent. Providers and portfolio roles remain subject to monitoring, refresh, and reconsideration as evidence or operating conditions change.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Decision architecture</div>
            <h2>From heterogeneous providers to one portfolio decision</h2>
            <div className="pds-architecture-flow" aria-label="PDS decision architecture">
              {architectureStages.map(([num, title, copy]) => (
                <div className="pds-architecture-stage" key={title}>
                  <span>{num}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="prose-section" id="adoption">
            <div className="kicker">Evidence-gated adoption</div>
            <h2>Scientific evidence and portfolio usefulness are related, but not the same question.</h2>
            <p className="body-copy">
              PDS keeps research validation separate from portfolio admission. A strategy can be scientifically well
              specified yet add little incremental portfolio value, while a practical portfolio role does not rewrite a
              failed or inconclusive research result. This separation reduces the temptation to promote a strategy simply
              because it looks useful after the fact.
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
            <h2>Current provider configuration within a broader operating architecture</h2>
            <p className="body-copy">
              The current public Active Core identifies ADAA and Forecast-to-Rank Allocation (F2R). This is the present
              provider configuration, not the definition of PDS. The operating architecture is designed to evaluate and
              govern eligible strategy systems and portfolio roles over time; exact current provider weights remain
              decision-sensitive until the applicable holding month has completed.
            </p>
            <div className="dual pds-provider-dual">
              <div className="dual-card">
                <div className="kicker">Portfolio Strategy System</div>
                <h3>ADAA</h3>
                <p>A rules-based multi-asset strategy organized around Decision Diversification and complementary allocation perspectives.</p>
                <Link className="btn soft" href="/systems/adaa/">View ADAA</Link>
              </div>
              <div className="dual-card">
                <div className="kicker">Portfolio Strategy System</div>
                <h3>Forecast-to-Rank Allocation (F2R)</h3>
                <p>A machine-learning cross-asset strategy that converts asset-level forecasts into relative rankings and a disciplined portfolio decision.</p>
                <Link className="btn soft" href="/systems/f2r/">View F2R</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="portfolio">
            <div className="kicker">Portfolio integration & decision</div>
            <h2>Integrate approved providers under a governed portfolio policy</h2>
            <p className="body-copy">
              PDS evaluates approved providers and their portfolio roles at the portfolio level, maintains explicit provider
              weights, maps them into asset-level targets, and keeps source contribution traceable. Provider configuration
              is an operating state produced under governed portfolio policy, not a permanent product recipe. The public
              surface shows the architecture and released historical decisions; it does not publish the currently active mix.
            </p>
            {latestWeights ? (
              <div className="pds-released-allocation">
                <div className="pds-release-head">
                  <div>
                    <div className="kicker">Latest released portfolio configuration</div>
                    <h3>Signal {latestWeights.signalPeriod} · Holding {latestWeights.holdingMonth}</h3>
                  </div>
                  <span className="track-chip">Historical delayed state</span>
                </div>
                <div className="evidence-note pds-config-note">
                  <strong>Historical operating state — not the definition of PDS.</strong> The weights below are one released
                  configuration produced under the portfolio policy applicable at that time. They should not be interpreted
                  as a fixed ADAA–F2R blend.
                </div>
                <div className="metrics pds-weight-metrics">
                  <div className="metric"><div className="value">{pct(latestWeights.adaaWeight)}</div><div className="label">ADAA provider weight</div></div>
                  <div className="metric"><div className="value">{pct(latestWeights.f2rWeight)}</div><div className="label">F2R provider weight</div></div>
                  <div className="metric"><div className="value">{latestWeights.holdingMonth}</div><div className="label">Completed holding month</div></div>
                  <div className="metric"><div className="value">Released</div><div className="label">Historical public state</div></div>
                </div>
              </div>
            ) : (
              <div className="evidence-note">
                The page is wired to the governed PDS public-export contract. A delayed strategy-weight snapshot appears
                here only after the source-owned exporter has produced and passed a release snapshot.
              </div>
            )}
          </section>

          <section className="prose-section" id="monitoring">
            <div className="kicker">Monitoring & governance</div>
            <h2>Private monitoring informs operation; public releases follow a separate disclosure clock</h2>
            <p className="body-copy">
              The private operator system tracks current marks, provisional forward-looking monitoring states, provider
              refresh diagnostics, and portfolio-control information. Those tools support ongoing decisions, while the
              public site is generated from a separate governed read model only after the disclosure clock permits release.
            </p>
            <div className="system-operating-list">
              <div><strong>On-demand refresh.</strong><span> The operator system can reconstruct skipped monthly decision paths before updating the latest state.</span></div>
              <div><strong>Provider boundaries.</strong><span> Strategy systems remain source-owned and are consumed through governed interfaces rather than copied into PDS.</span></div>
              <div><strong>Fail-closed publication.</strong><span> If the public exporter cannot establish the release cutoff or detects prohibited private content, publication is blocked without changing the private portfolio state.</span></div>
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Delayed public evidence</div>
            <h2>Historical decisions are released only after the holding period closes</h2>
            {snapshot ? (
              <>
                <div className="metrics system-metrics pds-release-metrics">
                  <div className="metric"><div className="value">{snapshot.latestReleasedSignalPeriod}</div><div className="label">Latest released signal</div></div>
                  <div className="metric"><div className="value">{snapshot.completedHoldingMonthCutoff}</div><div className="label">Completed holding month</div></div>
                  <div className="metric"><div className="value">{snapshot.publicAsOfDate}</div><div className="label">Public snapshot date</div></div>
                  <div className="metric"><div className="value">PASS</div><div className="label">Public-safe export binding</div></div>
                </div>

                {latestTargets.length ? (
                  <div className="selected-table-block">
                    <div className="selected-exhibits-head">
                      <div className="section-title">Latest Released Asset Targets</div>
                      <p>Delayed portfolio target for the latest completed public holding month. This is historical, not the currently active portfolio target.</p>
                    </div>
                    <div className="evidence-table-wrap" role="region" aria-label="Latest released PDS asset targets" tabIndex={0}>
                      <table className="evidence-table pds-public-table">
                        <thead><tr><th>Asset</th><th>Target weight</th><th>Signal</th><th>Holding month</th></tr></thead>
                        <tbody>
                          {latestTargets.map((row) => (
                            <tr key={`${row.signalPeriod}-${row.ticker}`}>
                              <th scope="row">{row.ticker}</th>
                              <td>{pct(row.targetWeight)}</td>
                              <td>{row.signalPeriod}</td>
                              <td>{row.holdingMonth}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}

                {latestReturns.length ? (
                  <div className="selected-table-block">
                    <div className="selected-exhibits-head">
                      <div className="section-title">Recent Released Monthly Returns</div>
                      <p>Source-exported monthly returns through the conservative public release cutoff; no live or preview return is included.</p>
                    </div>
                    <div className="evidence-table-wrap" role="region" aria-label="Recent released PDS monthly returns" tabIndex={0}>
                      <table className="evidence-table pds-public-table">
                        <thead><tr><th>Month</th><th>Series</th><th>Net return</th></tr></thead>
                        <tbody>
                          {latestReturns.map((row) => (
                            <tr key={`${row.period}-${row.seriesId}`}>
                              <th scope="row">{row.period}</th>
                              <td>{row.displayName}</td>
                              <td>{pct(row.netReturn)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}

                <div className="card-artifact-links pds-data-links" aria-label="PDS delayed public data downloads">
                  <a href={`${snapshot.rawDataBaseHref}/public_active_core_asset_targets.csv`}>Asset targets CSV</a>
                  <a href={`${snapshot.rawDataBaseHref}/public_active_core_strategy_weights.csv`}>Strategy weights CSV</a>
                  <a href={`${snapshot.rawDataBaseHref}/public_core_monthly_returns.csv`}>Monthly returns CSV</a>
                  <a href={`${snapshot.rawDataBaseHref}/PDS_PUBLIC_BINDING_RECEIPT.json`}>Binding receipt</a>
                </div>
              </>
            ) : (
              <div className="pds-snapshot-pending">
                <strong>Governed snapshot binding required before deployment.</strong>
                <p>
                  The public page is implemented, but this source package does not contain private PDS state or a
                  synthetic substitute. The publication runner must first invoke the source-owned PDS public exporter,
                  bind only its approved outputs, and pass the platform leakage checks.
                </p>
              </div>
            )}
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="boundary">
            <div className="kicker">Public / delayed / private</div>
            <h2>Open architecture with a protected current decision state</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public</h3>
                <ul>
                  <li>System architecture, role, governance, and provider relationships</li>
                  <li>ADAA and F2R as independent Portfolio Strategy Systems</li>
                  <li>Released historical portfolio targets and returns after the delay gate</li>
                  <li>Methods and supporting research where separately public</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Protected</h3>
                <ul>
                  <li>Currently active portfolio target and strategy weights</li>
                  <li>Intramonth forward preview and Forward Shadow state</li>
                  <li>Current market mark, FX/overlay state, and operator diagnostics</li>
                  <li>Credentials, provider caches, local paths, and account-specific holdings</li>
                </ul>
              </div>
            </div>
            <div className="evidence-note">
              Public releases are historical presentation and evidence artifacts with no portfolio authority. The private
              source system remains the operating source of truth.
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
