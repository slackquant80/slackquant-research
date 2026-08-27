import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { MethodsUsed } from "@/components/MethodsUsed";

const item = getSystem("scenario-stress-lab");

export const metadata: Metadata = {
  title: "Multi-Asset Scenario Stress Lab",
  description:
    "Evidence-constrained scenario analysis for multi-asset portfolio stress decision support.",
};

const stageD = [
  { method: "B0 block bootstrap", d1: "0.3661", d2: "0.9821", d3: "2.9171", tvd: "0.0537", status: "Comparator" },
  { method: "B1 EWMA-t", d1: "0.6106", d2: "0.9821", d3: "1.8847", tvd: "0.0468", status: "PASS" },
  { method: "Flow F1", d1: "0.3420", d2: "0.9821", d3: "1.9148", tvd: "0.0498", status: "Does not qualify" },
];

const useCases = [
  ["A", "Predictive downside signal", "FAIL"],
  ["B-P", "Downside-control policy", "FAIL"],
  ["C", "Tail-driver attribution", "FAIL"],
  ["D", "Scenario-archetype Stress Lab", "PASS"],
  ["E", "Model-disagreement warning", "FAIL"],
];

const universe = ["SPY", "EFA", "EEM", "IEF", "LQD", "GLD", "DBC", "VNQ"];

export default function ScenarioStressLabPage() {
  if (!item) notFound();

  return (
    <main>
      <section className="paper-hero system-hero">
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
            <span>Validated v1 · 8 ETFs</span>
            <span>SSRN {item.ssrnId}</span>
            <span>{item.dateLabel}</span>
          </div>
          <div className="actions">
            {item.links.liveDashboard ? (
              <a className="btn primary ext" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                Open Live Dashboard
              </a>
            ) : null}
            {item.links.dashboardGuide ? (
              <Link className="btn soft" href={item.links.dashboardGuide}>
                Dashboard Guide
              </Link>
            ) : null}
            <a className="btn soft ext" href={item.links.whitePaper} target="_blank" rel="noopener noreferrer">
              White Paper PDF
            </a>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#current-scope">Current Scope</a>
          <a href="#evidence-position">Evidence Position</a>
          <a href="#contract">System Contract</a>
          <a href="#evidence">Selected Evidence</a>
          <a href="#operation">Operating Model</a>
          <a href="#boundaries">Public Boundaries</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#documentation">Documentation</a>
          <a href="#citation">Citation</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              The Multi-Asset Scenario Stress Lab is a human-in-the-loop operational research system for
              20-trading-day multi-asset stress analysis. It generates conditional joint return paths,
              organizes adverse scenarios into transparent stress archetypes, compares those scenarios
              with historical block-bootstrap resampling, and revalues portfolios on a common scenario cloud.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">8</div><div className="label">ETFs in validated v1</div></div>
              <div className="metric"><div className="value">20d</div><div className="label">Joint scenario horizon</div></div>
              <div className="metric"><div className="value">5,000</div><div className="label">Scenarios per issued run</div></div>
              <div className="metric"><div className="value">B1 ↔ B0</div><div className="label">Conditional core vs historical comparator</div></div>
            </div>
            <div className="evidence-note">
              The live dashboard is now released. It is not a crash-prediction engine, trading signal,
              automatic allocation rule, or calibrated crisis-probability estimator.
            </div>
          </section>

          <section className="prose-section" id="current-scope">
            <h2>Current Operational Scope</h2>
            <p className="body-copy">
              The validated and publicly exposed operational baseline remains <strong>Stress Lab Universe v1</strong>.
              Its eight ETFs are {universe.join(" · ")}. The public dashboard exposes four practitioner views:
              Stress Lab, Portfolio What-if, Stress Dependence, and Scenario Distribution.
            </p>
            <div className="system-role-grid">
              <div className="system-role-card">
                <div className="kicker">Current baseline</div>
                <h3>v1 · validated and operational</h3>
                <p>Eight-ETF scientific baseline tied to the existing Stage-D evidence, White Paper, and current public dashboard.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Next research contract</div>
                <h3>v2 · revalidation only</h3>
                <p>The ADAA 18-ETF universe is a future revalidation contract. It is not yet qualified and is not exposed as the current public operational universe.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Product role</div>
                <h3>Stress exploration</h3>
                <p>The system asks how a portfolio can break under plausible joint stress structures, rather than predicting which event will happen next.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="evidence-position">
            <h2>Evidence Position</h2>
            <p className="body-copy">
              The primary out-of-sample evaluation used 348 fixed forecast origins from 2019 through 2025.
              B1 EWMA-t remained the reference model. Flow F1 remained competitive and faster than the
              higher-step Flow reference, but the evidence did not establish predictive superiority for a
              modern generative model over B1.
            </p>
            <div className="system-usecase-grid" aria-label="Retrospective use-case outcomes">
              {useCases.map(([stage, label, status]) => (
                <div className={`system-usecase ${status === "PASS" ? "pass" : "fail"}`} key={stage}>
                  <div className="system-usecase-stage">Stage {stage}</div>
                  <strong>{status}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              The Stage A–E decision-value program is explicitly retrospective because it reuses the
              2019–2025 interval already examined in the primary OOS evaluation. Stage D qualifies one
              bounded product use; it is not a new independent OOS strategy test.
            </div>
          </section>

          <section className="prose-section" id="contract">
            <h2>System Contract</h2>
            <div className="system-role-grid">
              <div className="system-role-card">
                <div className="kicker">Core model</div>
                <h3>B1 EWMA-t</h3>
                <p>Uses eligible history through the forecast origin to estimate a mean and exponentially weighted covariance matrix, then generates heavy-tailed multivariate Student-t innovations.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Historical comparator</div>
                <h3>B0 block bootstrap</h3>
                <p>Resamples contiguous 20-day historical blocks without conditioning on the current state. It remains visible as the transparent reference.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Research challenger</div>
                <h3>Flow F1</h3>
                <p>Retained for research comparison only. No public operational warning, switch, blend, or confidence badge depends on Flow.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <h2>Selected Evidence</h2>
            <p className="body-copy">
              The retained Stage-D use asks whether the adverse scenario cloud contains a stable and externally
              relevant representation of the joint stress pattern that subsequently occurred. On 56 fixed
              large-drawdown origins, B1 placed more tail mass on the realized archetype and produced closer
              representative stress geometry than B0.
            </p>
            <div className="metrics system-evidence-metrics">
              <div className="metric"><div className="value">+24.45pp</div><div className="label">B1 minus B0 realized-family share (D1)</div></div>
              <div className="metric"><div className="value">−35.4%</div><div className="label">B1 representative-geometry distance vs B0 (D3)</div></div>
              <div className="metric"><div className="value">56</div><div className="label">Fixed retrospective stress origins</div></div>
              <div className="metric"><div className="value">D2 = same</div><div className="label">Top-2 realized-family coverage</div></div>
            </div>
            <div className="selected-table-block">
              <div className="section-title">Stage-D stress-archetype evidence</div>
              <div className="evidence-table-wrap">
                <table className="evidence-table system-evidence-table">
                  <thead><tr><th>Method</th><th>D1 share</th><th>D2 top-2</th><th>D3 distance</th><th>Stability TVD</th><th>Status</th></tr></thead>
                  <tbody>
                    {stageD.map((row) => (
                      <tr key={row.method}>
                        <th>{row.method}</th><td>{row.d1}</td><td>{row.d2}</td><td>{row.d3}</td><td>{row.tvd}</td><td>{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="evidence-table-source">Technical White Paper · Table 3. Higher D1/D2 and lower D3/TVD are preferred.</div>
            </div>
            <figure className="system-interface-figure">
              <img src="/assets/systems/scenario-stress-lab/stress_lab_dashboard.png" alt="Multi-Asset Scenario Stress Lab practitioner interface showing current conditional stress structure beside the historical comparator." />
              <figcaption>Practitioner-facing Stress Lab surface. Scenario shares are generated frequencies within the modeled tail, not calibrated event probabilities.</figcaption>
            </figure>
          </section>

          <section className="prose-section" id="operation">
            <h2>Operating Model</h2>
            <div className="system-operating-list">
              <div><strong>On-demand refresh.</strong><span> The operator refreshes when a current stress review is needed; this is not a mandatory daily forecasting service.</span></div>
              <div><strong>Fail-closed issuance.</strong><span> Failed data, scenario-generation, QA, or release-boundary checks cannot become the approved public snapshot.</span></div>
              <div><strong>Same-cloud portfolio what-if.</strong><span> Baseline and candidate portfolios are revalued on the same 5,000 B1 paths so weight effects are separated from scenario-generation effects.</span></div>
              <div><strong>Approved public snapshot.</strong><span> Streamlit presents the latest approved public-safe snapshot. The canonical scientific/operational project remains separate from the deployment artifact.</span></div>
            </div>
          </section>

          <section className="prose-section" id="boundaries">
            <h2>Public Boundaries</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <div className="kicker">Supported</div>
                <ul>
                  <li>Generated stress-family shares within the B1 modeled tail</li>
                  <li>B1 conditional stress structure vs B0 historical resampling</li>
                  <li>Representative joint stress paths and geometry</li>
                  <li>Model-implied tail/path diagnostics and dependence structure</li>
                  <li>Human portfolio what-if comparisons on a fixed scenario cloud</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <div className="kicker">Not supported</div>
                <ul>
                  <li>Calibrated crisis or archetype probabilities</li>
                  <li>Market timing or crash prediction</li>
                  <li>Causal tail-driver attribution from archetype labels</li>
                  <li>Automated BIL de-risking or optimized portfolio weights</li>
                  <li>Model-switching, blending, or predictive confidence traffic lights</li>
                </ul>
              </div>
            </div>
          </section>

          <MethodsUsed researchSlug={item.slug} context="system" />

          <section className="prose-section" id="documentation">
            <h2>Documentation & Access</h2>
            <div className="repro-links documentation-artifacts">
              {item.links.liveDashboard ? (
                <a className="artifact artifact-primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">LIVE</span><strong>Public Dashboard</strong>
                  <small>Current approved public-safe scenario/stress interface</small><span className="artifact-action">Open Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.dashboardGuide ? (
                <Link className="artifact" href={item.links.dashboardGuide}>
                  <span className="artifact-kicker">GUIDE · v2.0</span><strong>Dashboard Guide</strong>
                  <small>Short Korean screen-centered reading guide for the four practitioner views</small><span className="artifact-action">Open Guide →</span>
                </Link>
              ) : null}
              {item.links.fullManual ? (
                <a className="artifact" href={item.links.fullManual} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">MANUAL · v1.1</span><strong>Full Manual</strong>
                  <small>Comprehensive Korean concept, operation, interpretation, and workflow manual</small><span className="artifact-action">Open PDF →</span>
                </a>
              ) : null}
              <a className="artifact" href={item.links.whitePaper} target="_blank" rel="noopener noreferrer">
                <span className="artifact-kicker">PDF</span><strong>Technical White Paper</strong>
                <small>System architecture, validation evidence, and operating boundaries</small><span className="artifact-action">Open PDF →</span>
              </a>
              <a className="artifact" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
                <span className="artifact-kicker">SSRN</span><strong>SSRN Record</strong>
                <small>Abstract ID {item.ssrnId} · August 2026</small><span className="artifact-action">Open SSRN ↗</span>
              </a>
            </div>
            <p className="body-copy documentation-note">
              The Korean Full Manual v1.1 remains the comprehensive concept, operating, interpretation, and workflow document.
              Dashboard Guide v2.0 is intentionally shorter: it explains what to look at and how to read the public screens without duplicating the full manual.
              {item.links.dashboardGuidePdf ? <> A printable <a className="ext" href={item.links.dashboardGuidePdf} target="_blank" rel="noopener noreferrer">Dashboard Guide PDF</a> is also available.</> : null}
            </p>
            {item.links.deploymentRepository ? (
              <p className="body-copy documentation-note">
                Public-safe deployment source: <a href={item.links.deploymentRepository} target="_blank" rel="noopener noreferrer">GitHub deployment repository ↗</a>.
              </p>
            ) : null}
            <p className="body-copy documentation-note">
              Deployment source is maintained separately from the canonical research system. The live
              dashboard is the public presentation layer; it does not expose licensed research data,
              local saved portfolios, research checkpoints, or internal audit material.
            </p>
          </section>

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <div className="citation-box">
              Lee, S. (2026). Multi-Asset Scenario Stress Lab: Evidence-Constrained Scenario Analysis for Portfolio Stress Decision Support. Technical White Paper. SSRN 7354238.
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
