import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { MethodsUsed } from "@/components/MethodsUsed";

const item = getSystem("adaa");

export const metadata: Metadata = {
  title: "ADAA — Portfolio Strategy System",
  description:
    "Open operational Autonomous Dynamic Asset Allocation system with live portfolio monitoring, explicit decision-state separation, frozen research evidence, and linked quantitative methods.",
};


export default function AdaaSystemPage() {
  if (!item) notFound();

  return (
    <main>
      <section className="paper-hero system-hero adaa-system-hero">
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
            <span>Monthly official decision cycle</span>
            <span>Research anchor · SSRN {item.ssrnId}</span>
          </div>
          <div className="actions">
            {item.links.liveDashboard ? (
              <a className="btn primary ext" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                Open Live Dashboard
              </a>
            ) : null}
            {item.links.relatedResearch ? (
              <Link className="btn soft" href={item.links.relatedResearch}>
                View Related Research
              </Link>
            ) : null}
            {item.links.ssrn ? (
              <a className="btn soft ext" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
                SSRN Paper
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#operating-state">Operating State</a>
          <a href="#architecture">Strategy Architecture</a>
          <a href="#evidence">Evidence & Versioning</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#access">Access & Documentation</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              ADAA is an open, rules-based multi-asset portfolio strategy that combines several dynamic allocation
              rules into one operational portfolio. The design diversifies portfolio decisions, not only the assets
              those decisions ultimately hold.
            </p>
            <p className="body-copy">
              The implementation combines complementary decision rules within a broad multi-asset opportunity set.
              The live dashboard exposes the official monthly decision, current portfolio drift, and a provisional
              intramonth preview, while the research record remains separately frozen and versioned.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">Monthly</div><div className="label">Official decision cycle</div></div>
              <div className="metric"><div className="value">3</div><div className="label">Separated operating states</div></div>
              <div className="metric"><div className="value">Live</div><div className="label">Public operating interface</div></div>
              <div className="metric"><div className="value">Versioned</div><div className="label">Research evidence</div></div>
            </div>
          </section>

          <section className="prose-section" id="operating-state">
            <div className="kicker">Operational contract</div>
            <h2>Official decision, current drift, and preview are separate states</h2>
            <p className="body-copy">
              The live dashboard deliberately separates the completed month-end decision from mark-to-market drift and
              from a provisional estimate of the next target. A partial-month estimate therefore cannot be mistaken
              for an executable portfolio decision.
            </p>
            <div className="system-role-grid adaa-state-grid">
              <div className="system-role-card adaa-state-card official">
                <div className="kicker">01 · Official</div>
                <h3>Official Decision</h3>
                <p>The latest completed month-end target, effective from the first common trading-day close after month-end.</p>
              </div>
              <div className="system-role-card adaa-state-card current">
                <div className="kicker">02 · Mark</div>
                <h3>Current MTD</h3>
                <p>Mark-to-market drift of the official portfolio since that execution point. It does not create a new target.</p>
              </div>
              <div className="system-role-card adaa-state-card preview">
                <div className="kicker">03 · Provisional</div>
                <h3>Intramonth Preview</h3>
                <p>A provisional next-target estimate using the latest available month-to-date data. It may change before month-end and has no execution authority.</p>
              </div>
            </div>
            <div className="boundary-note">
              <b>Authority boundary:</b> the dashboard is a portfolio-monitoring and decision-support interface. It does not place trades or convert the intramonth preview into an official target.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Portfolio architecture</div>
            <h2>Diversify decision logic, not just asset exposure</h2>
            <p className="body-copy">
              ADAA combines multiple allocation rules that respond to changing markets through different information
              horizons, selection logic, defensive behavior, and persistence. The objective is to reduce dependence on
              one decision path while keeping the combined portfolio operationally interpretable.
            </p>
            <div className="system-role-grid adaa-architecture-grid">
              <div className="system-role-card">
                <div className="kicker">State adaptation</div>
                <h3>Different responses to changing regimes</h3>
                <p>Complementary rules vary in how quickly and how strongly they adjust risk exposure as market conditions change.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Opportunity selection</div>
                <h3>Multiple views of cross-asset leadership</h3>
                <p>Selection is informed by distinct momentum and relative-strength perspectives rather than one ranking rule alone.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Persistence & risk control</div>
                <h3>Reduce synchronized portfolio transitions</h3>
                <p>Risk-aware inputs and more persistent allocation behavior help moderate common reversals and concentrated decision timing.</p>
              </div>
            </div>
            <div className="evidence-note">
              This System page focuses on operating architecture and decision roles. Detailed historical implementation,
              robustness evidence, and reproducibility materials remain available through the related research record.
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Evidence lineage</div>
            <h2>Live operation and frozen research remain distinct</h2>
            <div className="dual adaa-evidence-dual">
              <div className="dual-card operational">
                <div className="kicker">Current operational artifact</div>
                <h3>ADAA Live System</h3>
                <p>
                  The live implementation refreshes current data and monitoring views, including portfolio state,
                  drift, FX diagnostics, allocation history, and the intramonth preview.
                </p>
                {item.links.liveDashboard ? (
                  <a className="btn inverse ext" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                    Open Live Dashboard
                  </a>
                ) : null}
              </div>
              <div className="dual-card">
                <div className="kicker">Frozen public evidence</div>
                <h3>Diversify the Decisions, Not Just the Assets</h3>
                <p>
                  Public Working Paper v1.34 documents the research question, historical evidence, robustness,
                  implementation analysis, and Decision Diversification framework. It is not silently revised when
                  the live system changes.
                </p>
                {item.links.relatedResearch ? (
                  <Link className="btn soft" href={item.links.relatedResearch}>Open Research Page</Link>
                ) : null}
              </div>
            </div>
            <div className="system-operating-list adaa-evidence-list">
              <div><strong>Research anchor.</strong><span> SSRN v1.34 and public replication v1.1.4 remain the citable evidence record for the published study.</span></div>
              <div><strong>Operational updates.</strong><span> Current data and implementation views may evolve under change control without being re-labeled as new research findings.</span></div>
              <div><strong>Claim boundary.</strong><span> Historical validation does not establish guaranteed future outperformance, unique optimality, or predictive validity of the intramonth preview.</span></div>
            </div>
            <div className="boundary-note">
              <b>Scope boundary:</b> later research extensions and downstream portfolio systems remain separate artifacts and are not treated as validation of the public ADAA strategy. The platform links to derived outputs rather than redistributing source market or macroeconomic datasets.
            </div>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="access">
            <div className="kicker">Public artifacts</div>
            <h2>Access & documentation</h2>
            <p className="body-copy">
              Public documentation is intentionally split by purpose: the live dashboard for current operation, the
              Investment Research and SSRN record for frozen evidence, the replication release and DOI for reproducibility,
              and the Quantitative Methods library for reusable methodology.
            </p>
            <div className="repro-links documentation-artifacts adaa-artifact-grid">
              {item.links.liveDashboard ? (
                <a className="artifact artifact-primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">LIVE</span><strong>Operational Dashboard</strong>
                  <small>Current ADAA portfolio monitoring, decision state, and implementation views.</small><span className="artifact-action">Open Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.relatedResearch ? (
                <Link className="artifact" href={item.links.relatedResearch}>
                  <span className="artifact-kicker">RESEARCH</span><strong>Investment Research</strong>
                  <small>Paper-aligned evidence page for the frozen public research version.</small><span className="artifact-action">View Research →</span>
                </Link>
              ) : null}
              {item.links.ssrn ? (
                <a className="artifact" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">SSRN</span><strong>Public Working Paper v1.34</strong>
                  <small>Citable research anchor for Decision Diversification and the documented historical implementation.</small><span className="artifact-action">Open SSRN ↗</span>
                </a>
              ) : null}
              {item.links.researchDashboard ? (
                <a className="artifact" href={item.links.researchDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">EVIDENCE</span><strong>Research Dashboard</strong>
                  <small>Versioned visual evidence aligned to the public paper.</small><span className="artifact-action">Open Research Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.replication ? (
                <a className="artifact" href={item.links.replication} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">REPLICATION</span><strong>Public Release v1.1.4</strong>
                  <small>Tagged reproducibility package synchronized to the public research record.</small><span className="artifact-action">Open Release ↗</span>
                </a>
              ) : null}
              {item.links.archivalRelease ? (
                <a className="artifact" href={item.links.archivalRelease} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">ARCHIVE</span><strong>Persistent DOI</strong>
                  <small>Archived replication record with a persistent identifier.</small><span className="artifact-action">Open DOI ↗</span>
                </a>
              ) : null}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
