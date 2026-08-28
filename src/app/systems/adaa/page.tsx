import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";
import { MethodsUsed } from "@/components/MethodsUsed";

const item = getSystem("adaa");

export const metadata: Metadata = {
  title: "ADAA — Portfolio Strategy System",
  description:
    "Open operational Autonomous Dynamic Asset Allocation system with live portfolio monitoring, decision-state separation, public research evidence, and quantitative-method links.",
};

const sleeves = [
  ["HAA", "Canary / regime momentum", "A practitioner HAA variant that preserves the canary-regime clock while broadening the investable expression."],
  ["BAA", "Aggressive regime allocation", "A near-parent BAA Aggressive expression with implementable asset substitutions and a largely preserved decision role."],
  ["ADM", "Accelerating dual-momentum variant", "A practitioner redesign of accelerating dual momentum into a broader multi-asset Top-6 sleeve."],
  ["FAA", "Flexible asset-allocation variant", "A broadened FAA implementation using momentum with volatility- and correlation-aware ranking inputs."],
  ["LAA", "Persistent allocation anchor", "A role-preserving persistent allocation component whose equity expression differs while its transition clock remains comparatively stable."],
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
            <span>Open operational dashboard</span>
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
          <a href="#evidence">Evidence & Version Boundary</a>
          <a href="#boundaries">Public Boundary</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#access">Access & Evidence</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              ADAA is the open operational implementation of Autonomous Dynamic Asset Allocation: a rule-governed
              multi-asset strategy architecture designed to reduce dependence on choosing one dynamic-allocation rule
              or one precisely estimated top-level weight vector.
            </p>
            <p className="body-copy">
              The system combines five complementary allocation sleeves and exposes the current decision state through
              a live Shiny dashboard. The public system page is the canonical operational landing page; the existing
              Investment Research paper remains a distinct, frozen research artifact that documents the evidence for
              decision diversification and the historical implementation examined in that version.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">5</div><div className="label">Current top-level sleeves</div></div>
              <div className="metric"><div className="value">18</div><div className="label">Native ETF opportunity set</div></div>
              <div className="metric"><div className="value">Monthly</div><div className="label">Official decision cycle</div></div>
              <div className="metric"><div className="value">PUBLIC</div><div className="label">Current dashboard outputs</div></div>
            </div>
          </section>

          <section className="prose-section" id="operating-state">
            <div className="kicker">Operational contract</div>
            <h2>Three states, deliberately separated</h2>
            <p className="body-copy">
              The live dashboard distinguishes an official completed-month decision from current price drift and from
              a provisional estimate of the next month-end target. That separation prevents a partial-month estimate
              from being mistaken for an executable portfolio decision.
            </p>
            <div className="system-role-grid adaa-state-grid">
              <div className="system-role-card adaa-state-card official">
                <div className="kicker">01 · Official</div>
                <h3>Official Decision</h3>
                <p>The latest completed month-end target. Its monitoring execution clock is the first subsequent common adjusted close across the 18 native assets.</p>
              </div>
              <div className="system-role-card adaa-state-card current">
                <div className="kicker">02 · Mark</div>
                <h3>Current MTD</h3>
                <p>A gross mark of the official ADAA_H allocation from its executable common close to the latest common close. It is not a new target.</p>
              </div>
              <div className="system-role-card adaa-state-card preview">
                <div className="kicker">03 · Provisional</div>
                <h3>Intramonth Preview</h3>
                <p>An estimate of the next target if the current month ended at the latest available common close. It may change before month-end and has no execution authority.</p>
              </div>
            </div>
            <div className="boundary-note">
              <b>Authority boundary:</b> the public dashboard is a strategy-monitoring and decision-support surface. It does not place trades, authorize execution, or convert the intramonth preview into an official decision.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Portfolio architecture</div>
            <h2>Decision diversification across complementary sleeves</h2>
            <p className="body-copy">
              The current implementation uses five top-level sleeves with source-owned weights of HAA 25%, BAA 15%,
              ADM 17.5%, FAA 17.5%, and LAA 25%. The enduring design principle is broader than the current five-sleeve
              recipe: candidate rules are evaluated not only by historical performance and risk, but also by whether
              they add a genuinely different portfolio decision role.
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
              Sleeve labels are shorthand for the current practitioner implementation, not a claim that five is a permanently fixed or uniquely optimal number of components.
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Evidence lineage</div>
            <h2>Live system and frozen research remain distinct</h2>
            <div className="dual adaa-evidence-dual">
              <div className="dual-card operational">
                <div className="kicker">Current operational artifact</div>
                <h3>ADAA Live System</h3>
                <p>
                  Continuously refreshed implementation and monitoring surface. Current data, decision state,
                  portfolio drift, FX diagnostics, preview state, and operational reference views may change over time.
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
                  implementation analysis, and Decision Diversification framework. It is not silently updated when
                  the live system changes.
                </p>
                {item.links.relatedResearch ? (
                  <Link className="btn soft" href={item.links.relatedResearch}>Open Research Page</Link>
                ) : null}
              </div>
            </div>
            <div className="system-operating-list adaa-evidence-list">
              <div><strong>Validated / evidenced use:</strong> transparent rule-governed multi-asset allocation, historical strategy evaluation, decision-diversification analysis, and operational monitoring under the documented decision clock.</div>
              <div><strong>Not established by this system page:</strong> guaranteed future outperformance, a uniquely optimal weight vector, predictive validity of the intramonth preview, or superiority of every live implementation view over alternative portfolios.</div>
              <div><strong>Version lineage:</strong> the public research anchor is SSRN v1.34 with public replication v1.1.4. Current operational code and data can evolve independently under change control.</div>
            </div>
          </section>

          <section className="prose-section" id="boundaries">
            <div className="kicker">Publication boundary</div>
            <h2>Open strategy system, bounded claims</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public</h3>
                <ul>
                  <li>Current live dashboard and its approved strategy-monitoring outputs.</li>
                  <li>Official decision, current drift, intramonth preview, allocation history, and derived performance diagnostics exposed by the dashboard.</li>
                  <li>Existing research dashboard, SSRN paper, replication repository, tagged release, and archival DOI.</li>
                  <li>Reusable Quantitative Methods articles that explain load-bearing methodology.</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Outside the public authority</h3>
                <ul>
                  <li>Credentials, local runtime files, internal provider caches, and non-public operational controls.</li>
                  <li>Automatic trade execution or user-specific portfolio authority.</li>
                  <li>Re-labeling provisional preview output as an official target before the month-end decision state is complete.</li>
                  <li>Treating ADAA-AI experiments or downstream PDS evidence as if they were validation of the current public ADAA system.</li>
                </ul>
              </div>
            </div>
            <p className="body-copy adaa-rights-note">
              <strong>Data / rights boundary.</strong> The SlackQuant system page publishes derived descriptions and links rather than redistributing bulk raw market or macroeconomic datasets. The live source-owned dashboard identifies Yahoo Finance for market/FX data and FRED for U.S. macroeconomic data; source availability and provider terms remain external constraints on the live service.
            </p>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="access">
            <div className="kicker">Public artifacts</div>
            <h2>Access & evidence</h2>
            <p className="body-copy">
              ADAA does not require a new Technical White Paper to function as a public system. The live system,
              existing research record, replication materials, and method articles already serve distinct purposes.
            </p>
            <div className="repro-links documentation-artifacts adaa-artifact-grid">
              {item.links.liveDashboard ? (
                <a className="artifact artifact-primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">LIVE</span><strong>Operational Dashboard</strong>
                  <small>Current approved ADAA decision-monitoring and implementation interface.</small><span className="artifact-action">Open Dashboard ↗</span>
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
                  <small>Citable public research anchor for Decision Diversification and the documented historical implementation.</small><span className="artifact-action">Open SSRN ↗</span>
                </a>
              ) : null}
              {item.links.researchDashboard ? (
                <a className="artifact" href={item.links.researchDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">EVIDENCE</span><strong>Research Dashboard</strong>
                  <small>Versioned visual research evidence aligned to the public paper.</small><span className="artifact-action">Open Research Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.replication ? (
                <a className="artifact" href={item.links.replication} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">REPLICATION</span><strong>Public Release v1.1.4</strong>
                  <small>Tagged reproducibility package synchronized to the current public research record.</small><span className="artifact-action">Open Release ↗</span>
                </a>
              ) : null}
              {item.links.archivalRelease ? (
                <a className="artifact" href={item.links.archivalRelease} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">ARCHIVE</span><strong>Persistent DOI</strong>
                  <small>Archived public replication record with persistent identifier.</small><span className="artifact-action">Open DOI ↗</span>
                </a>
              ) : null}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
