import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { MethodsUsed } from "@/components/MethodsUsed";

const item = getSystem("adaa");

export const metadata: Metadata = {
  title: "ADAA — Portfolio Strategy System",
  description:
    "Live multi-asset Portfolio Strategy System built around Decision Diversification, with distinct official, mark-to-market, and intramonth preview states.",
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
              ADAA is a live multi-asset Portfolio Strategy System built around Decision Diversification. Rather than
              depending on a single allocation rule, it combines complementary decision perspectives so portfolio
              behavior is not tied to a single decision path.
            </p>
            <p className="body-copy">
              The public interface is designed around operating clarity: the latest official monthly decision, current
              mark-to-market drift, and a provisional intramonth preview are shown as distinct states. Detailed
              historical implementation, robustness tests, and replication remain in the linked research record.
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
            <h2>Three operating states, one decision authority</h2>
            <p className="body-copy">
              The official month-end decision is the portfolio target. Current MTD shows how that portfolio has drifted
              since execution, while Intramonth Preview estimates a possible next target from partial-month data. Keeping
              these states separate makes the live interface useful for monitoring without blurring what is actionable.
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
              <b>Decision authority:</b> only the Official Decision carries portfolio-target authority. Current MTD and Intramonth Preview are monitoring states; the dashboard itself does not place trades.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Portfolio architecture</div>
            <h2>Diversify decision logic, not just asset exposure</h2>
            <p className="body-copy">
              ADAA is designed as an ensemble of complementary allocation perspectives. They differ in market
              sensitivity, information horizon, cross-asset selection, defensive behavior, and persistence. The aim is
              not to average similar signals, but to reduce dependence on any single decision path while preserving a
              portfolio that remains interpretable and implementable.
            </p>
            <div className="system-role-grid adaa-architecture-grid">
              <div className="system-role-card">
                <div className="kicker">State adaptation</div>
                <h3>Different responses to changing regimes</h3>
                <p>Complementary decision rules react at different speeds and with different risk responses as market conditions change.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Opportunity selection</div>
                <h3>Multiple views of cross-asset leadership</h3>
                <p>Selection is informed by distinct momentum and relative-strength perspectives rather than one ranking rule alone.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">Persistence & risk control</div>
                <h3>Moderate synchronized portfolio transitions</h3>
                <p>More persistent decision components and risk-aware inputs help avoid having the entire portfolio transition on the same signal or at the same time.</p>
              </div>
            </div>
            <div className="evidence-note">
              This System page focuses on operating architecture and decision roles. Detailed construction, historical
              tests, and reproducibility materials are maintained in the related research record.
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Evidence & versioning</div>
            <h2>Live operation evolves; published evidence stays versioned</h2>
            <div className="dual adaa-evidence-dual">
              <div className="dual-card operational">
                <div className="kicker">Live operation</div>
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
                <div className="kicker">Published research record</div>
                <h3>Diversify the Decisions, Not Just the Assets</h3>
                <p>
                  Public Working Paper v1.34 documents the research question, historical evidence, robustness,
                  implementation analysis, and Decision Diversification framework. That version remains citable as
                  published while the live system continues to refresh.
                </p>
                {item.links.relatedResearch ? (
                  <Link className="btn soft" href={item.links.relatedResearch}>Open Research Page</Link>
                ) : null}
              </div>
            </div>
            <div className="system-operating-list adaa-evidence-list">
              <div><strong>Published evidence.</strong><span> SSRN v1.34 and public replication v1.1.4 remain the citable record for the published study.</span></div>
              <div><strong>Live operation.</strong><span> Current data, monitoring, and implementation views can update under change control without rewriting published findings.</span></div>
              <div><strong>Interpretation.</strong><span> The dashboard reports current strategy state and research-linked evidence; it is not a claim of guaranteed future performance.</span></div>
            </div>

          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="access">
            <div className="kicker">Public artifacts</div>
            <h2>Access & documentation</h2>
            <p className="body-copy">
              Use the live dashboard for current operation, the Investment Research and SSRN record for published
              evidence, the replication release and DOI for reproducibility, and Quantitative Methods for reusable
              methodology.
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
