import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { MethodsUsed } from "@/components/MethodsUsed";

const item = getSystem("adaa");

export const metadata: Metadata = {
  title: "ADAA — Portfolio Strategy System",
  description:
    "Open Autonomous Dynamic Asset Allocation system with live portfolio monitoring, clearly separated decision states, versioned research evidence, and linked quantitative methods.",
};

const sleeves = [
  ["HAA", "Regime-aware momentum", "Uses canary and momentum signals to shift portfolio exposure across risk and defensive assets."],
  ["BAA", "Aggressive balanced allocation", "Adjusts risk exposure across market regimes while preserving a distinct allocation role within the composite."],
  ["ADM", "Accelerating dual momentum", "Adds a broader cross-asset momentum sleeve that emphasizes both relative strength and momentum change."],
  ["FAA", "Flexible asset allocation", "Combines momentum with volatility- and correlation-aware ranking inputs across the investable set."],
  ["LAA", "Persistent allocation anchor", "Provides a comparatively stable allocation component intended to moderate transitions across changing regimes."],
];

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
            <span>Related research · SSRN {item.ssrnId}</span>
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
                Open SSRN Record
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#operating-state">Decision States</a>
          <a href="#architecture">Strategy Architecture</a>
          <a href="#evidence">Research & Live System</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#access">Resources & Documentation</a>
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
              The current implementation blends five complementary sleeves across an 18-ETF opportunity set. The live
              dashboard exposes the official monthly decision, current portfolio drift, and a provisional intramonth
              preview, while the supporting research evidence remains separately versioned.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">5</div><div className="label">Top-level sleeves</div></div>
              <div className="metric"><div className="value">18</div><div className="label">ETF opportunity set</div></div>
              <div className="metric"><div className="value">Monthly</div><div className="label">Official decision cycle</div></div>
              <div className="metric"><div className="value">Open</div><div className="label">Live dashboard access</div></div>
            </div>
          </section>

          <section className="prose-section" id="operating-state">
            <div className="kicker">Decision states</div>
            <h2>Official target, current drift, and preview are shown separately</h2>
            <p className="body-copy">
              The live dashboard separates the completed month-end target from mark-to-market drift and from a
              provisional estimate of the next target. This keeps a partial-month preview from being mistaken for
              an official portfolio decision.
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
                <p>A provisional next-target estimate using the latest available month-to-date data. It may change before month-end and is not an official target.</p>
              </div>
            </div>
            <div className="boundary-note">
              <b>Operational note:</b> the dashboard supports portfolio monitoring and decision review. It does not place trades or convert the intramonth preview into an official target.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Portfolio architecture</div>
            <h2>Five complementary allocation sleeves</h2>
            <p className="body-copy">
              The current top-level weights are HAA 25%, BAA 15%, ADM 17.5%, FAA 17.5%, and LAA 25%.
              The design objective is decision diversification: each sleeve should contribute a meaningfully different
              allocation role rather than duplicate the same market view under a different label.
            </p>
            <div className="adaa-sleeve-list">
              {sleeves.map(([code, title, description]) => (
                <div className="adaa-sleeve-row" key={code}>
                  <div className="adaa-sleeve-code">{code}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              These are the current implementation choices; the system does not claim that five sleeves or these exact weights are uniquely optimal.
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Research and live system</div>
            <h2>Live operation and versioned research remain distinct</h2>
            <div className="dual adaa-evidence-dual">
              <div className="dual-card operational">
                <div className="kicker">Live system</div>
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
                <div className="kicker">Versioned research evidence</div>
                <h3>Diversify the Decisions, Not Just the Assets</h3>
                <p>
                  Public Working Paper v1.34 documents the research question, historical evidence, robustness,
                  implementation analysis, and Decision Diversification framework. The paper remains fixed even as
                  the live system changes.
                </p>
                {item.links.relatedResearch ? (
                  <Link className="btn soft" href={item.links.relatedResearch}>Open Research Page</Link>
                ) : null}
              </div>
            </div>
            <div className="system-operating-list adaa-evidence-list">
              <div><strong>Citable research.</strong><span> SSRN v1.34 and public replication v1.1.4 remain the citable evidence record for the published study.</span></div>
              <div><strong>Live updates.</strong><span> Current data and implementation views may evolve without being presented as new research findings.</span></div>
              <div><strong>Interpretation.</strong><span> Historical validation does not establish guaranteed future outperformance, unique optimality, or predictive validity of the intramonth preview.</span></div>
            </div>
            <div className="boundary-note">
              <b>Scope:</b> later research extensions and downstream portfolio systems are separate projects and do not retroactively validate ADAA. The platform links to derived outputs rather than redistributing source market or macroeconomic datasets.
            </div>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="access">
            <div className="kicker">Public resources</div>
            <h2>Resources & documentation</h2>
            <p className="body-copy">
              Public resources are separated by purpose: the live dashboard for current operation, the Investment
              Research page and SSRN paper for versioned evidence, the replication release and DOI for reproducibility,
              and Quantitative Methods for reusable methodology.
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
                  <small>Research page aligned to the cited public paper.</small><span className="artifact-action">View Research →</span>
                </Link>
              ) : null}
              {item.links.ssrn ? (
                <a className="artifact" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">SSRN</span><strong>Public Working Paper v1.34</strong>
                  <small>Citable study of Decision Diversification and the documented historical implementation.</small><span className="artifact-action">Open SSRN ↗</span>
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
                  <small>Tagged reproducibility package aligned to the public research record.</small><span className="artifact-action">Open Release ↗</span>
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
