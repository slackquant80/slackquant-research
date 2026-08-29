import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { MethodsUsed } from "@/components/MethodsUsed";

const item = getSystem("scenario-stress-lab");

export const metadata: Metadata = {
  title: "Multi-Asset Scenario Stress Lab",
  description:
    "Multi-asset scenario analysis for portfolio stress testing, interpretation, and human decision support.",
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
            <span>20-day joint scenario horizon</span>
            <span>Research anchor · SSRN {item.ssrnId}</span>
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
          <a href="#evidence-position">What the Evidence Supports</a>
          <a href="#contract">How the System Works</a>
          <a href="#evidence">Selected Evidence</a>
          <a href="#operation">Operating Model</a>
          <a href="#boundaries">Interpretation Boundaries</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#documentation">Documentation</a>
          <a href="#citation">Citation</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              The Multi-Asset Scenario Stress Lab is a human-in-the-loop system for exploring how portfolios behave
              under plausible joint market stress. It generates conditional multi-asset return paths, organizes
              adverse scenarios into interpretable stress archetypes, and revalues portfolios on a common scenario
              set. A transparent historical resampling benchmark remains visible throughout the analysis.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">8</div><div className="label">ETFs in validated v1</div></div>
              <div className="metric"><div className="value">20d</div><div className="label">Joint scenario horizon</div></div>
              <div className="metric"><div className="value">5,000</div><div className="label">Scenarios per issued run</div></div>
              <div className="metric"><div className="value">B1 ↔ B0</div><div className="label">Conditional core vs historical comparator</div></div>
            </div>
            <div className="evidence-note">
              The dashboard is designed for stress analysis. It is not a crash-prediction engine, trading
              signal, automatic allocation rule, or calibrated crisis-probability estimator.
            </div>
          </section>

          <section className="prose-section" id="current-scope">
            <h2>Current Scope</h2>
            <p className="body-copy">
              The current public baseline is <strong>Stress Lab Universe v1</strong>. Its eight ETFs are
              {universe.join(" · ")}. The dashboard provides four views: Stress Lab, Portfolio What-if,
              Stress Dependence, and Scenario Distribution.
            </p>
            <div className="system-role-grid">
              <div className="system-role-card">
                <div className="kicker">Current public baseline</div>
                <h3>v1 · validated 8-ETF universe</h3>
                <p>Eight-ETF baseline tied to the existing Stage-D evidence, Technical White Paper, and current public dashboard.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Portfolio what-if</div>
                <h3>Same-scenario comparison</h3>
                <p>Baseline and candidate portfolios are revalued on the same scenario cloud so allocation effects can be interpreted separately from scenario-generation effects.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Use case</div>
                <h3>Stress exploration</h3>
                <p>The system asks how a portfolio can break under plausible joint stress structures, rather than predicting which event will happen next.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="evidence-position">
            <h2>What the Evidence Supports</h2>
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
              Stages A–E are retrospective because they reuse the 2019–2025 interval already examined
              in the primary out-of-sample evaluation. Stage D supports one limited use case; it is not
              a new independent out-of-sample test of a trading strategy.
            </div>
          </section>

          <section className="prose-section" id="contract">
            <h2>How the System Works</h2>
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
                <div className="kicker">Research comparator</div>
                <h3>Flow F1</h3>
                <p>Kept as a research comparator only. Public warnings, model switching, blending, and confidence signals do not depend on Flow.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <h2>Selected Evidence</h2>
            <p className="body-copy">
              Stage D tests whether the adverse scenario set contains a stable and externally relevant
              representation of the joint stress pattern that subsequently occurred. Across 56 fixed
              large-drawdown origins, B1 placed more tail mass on the realized archetype and produced
              closer representative stress geometry than B0.
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
              <figcaption>Stress Lab interface. Scenario shares are generated frequencies within the modeled tail, not calibrated event probabilities.</figcaption>
            </figure>
          </section>

          <section className="prose-section" id="operation">
            <h2>Operating Model</h2>
            <div className="system-operating-list">
              <div><strong>On-demand refresh.</strong><span> The operator refreshes when a current stress review is needed; this is not a mandatory daily forecasting service.</span></div>
              <div><strong>QA-gated publication.</strong><span> A run is not published if data, scenario generation, QA, or release checks fail.</span></div>
              <div><strong>Same-scenario portfolio what-if.</strong><span> Baseline and candidate portfolios are revalued on the same 5,000 B1 paths so weight effects are separated from scenario-generation effects.</span></div>
              <div><strong>Reviewed public snapshot.</strong><span> Streamlit presents the latest reviewed snapshot. Research and deployment code are maintained separately.</span></div>
            </div>
          </section>

          <section className="prose-section" id="boundaries">
            <h2>Interpretation Boundaries</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <div className="kicker">Supported</div>
                <ul>
                  <li>Stress-family shares within the modeled B1 tail</li>
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
                  <small>Current public interface for scenario and stress analysis</small><span className="artifact-action">Open Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.dashboardGuide ? (
                <Link className="artifact" href={item.links.dashboardGuide}>
                  <span className="artifact-kicker">GUIDE · v2.0</span><strong>Dashboard Guide</strong>
                  <small>Short Korean, screen-centered guide to the four practitioner views</small><span className="artifact-action">Open Guide →</span>
                </Link>
              ) : null}
              {item.links.fullManual ? (
                <a className="artifact" href={item.links.fullManual} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">MANUAL · v1.1</span><strong>Full Manual</strong>
                  <small>Comprehensive Korean manual covering concepts, operation, interpretation, and workflow</small><span className="artifact-action">Open PDF →</span>
                </a>
              ) : null}
              <a className="artifact" href={item.links.whitePaper} target="_blank" rel="noopener noreferrer">
                <span className="artifact-kicker">PDF</span><strong>Technical White Paper</strong>
                <small>System architecture, validation results, and interpretation limits</small><span className="artifact-action">Open PDF →</span>
              </a>
              <a className="artifact" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
                <span className="artifact-kicker">SSRN</span><strong>SSRN Record</strong>
                <small>Abstract ID {item.ssrnId} · August 2026</small><span className="artifact-action">Open SSRN ↗</span>
              </a>
            </div>
            <p className="body-copy documentation-note">
              The Korean Full Manual v1.1 is the comprehensive guide to concepts, operation, interpretation, and workflow.
              Dashboard Guide v2.0 is intentionally shorter: it explains what to look at and how to read the public screens without duplicating the full manual.
              {item.links.dashboardGuidePdf ? <> A printable <a className="ext" href={item.links.dashboardGuidePdf} target="_blank" rel="noopener noreferrer">Dashboard Guide PDF</a> is also available.</> : null}
            </p>
            {item.links.deploymentRepository ? (
              <p className="body-copy documentation-note">
                Public deployment source: <a href={item.links.deploymentRepository} target="_blank" rel="noopener noreferrer">GitHub deployment repository ↗</a>.
              </p>
            ) : null}
            <p className="body-copy documentation-note">
              Deployment code is maintained separately from the research project. The public dashboard
              does not expose licensed data, locally saved portfolios, research checkpoints, or internal
              audit records.
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
