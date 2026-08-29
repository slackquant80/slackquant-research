import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";

const item = getSystem("f2r");

export const metadata: Metadata = {
  title: "Forecast-to-Rank Allocation (F2R) — Portfolio Strategy System",
  description:
    "Forecast-to-Rank Allocation (F2R), a machine-learning cross-asset Portfolio Strategy System used as an independent strategy provider within PDS.",
};

export default function F2rSystemPage() {
  if (!item) notFound();

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
            <span>{item.role}</span>
            <span>Independent strategy system · current PDS Active Core provider</span>
          </div>
          <div className="actions">
            <Link className="btn primary" href="/systems/pds/">View PDS</Link>
            {item.links.relatedResearch ? (
              <Link className="btn soft" href={item.links.relatedResearch}>View Related Research</Link>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#process">Forecast-to-Rank Process</a>
          <a href="#relationship">Relationship to PDS</a>
          <a href="#evidence">Evidence Boundary</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#disclosure">Public Disclosure</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              Forecast-to-Rank Allocation (F2R) is a machine-learning cross-asset Portfolio Strategy System. It converts
              asset-level forecasts into a relative ranking and then maps that ranking into a disciplined multi-asset
              portfolio decision.
            </p>
            <p className="body-copy">
              F2R is intentionally presented as a strategy system rather than as a generic AI product. Machine learning
              is used for the forecasting stage; the portfolio decision remains governed by an explicit ranking and
              allocation process. F2R retains its own strategy identity even when it is consumed by the higher-level PDS.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">ML</div><div className="label">Forecasting layer</div></div>
              <div className="metric"><div className="value">Cross-Asset</div><div className="label">Decision universe</div></div>
              <div className="metric"><div className="value">Rank</div><div className="label">Portfolio translation</div></div>
              <div className="metric"><div className="value">Independent</div><div className="label">Strategy ownership</div></div>
            </div>
          </section>

          <section className="prose-section" id="process">
            <div className="kicker">Strategy architecture</div>
            <h2>Forecast first, rank second, allocate under a fixed decision rule</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card">
                <div className="kicker">01 · Forecast</div>
                <h3>Estimate relative opportunity</h3>
                <p>Machine-learning forecasts summarize the forward-looking signal used by the strategy for each eligible asset.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">02 · Rank</div>
                <h3>Convert forecasts into cross-asset ordering</h3>
                <p>The strategy compares assets on a common decision date and ranks them by the forecast signal rather than treating forecast levels as portfolio weights.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">03 · Allocate</div>
                <h3>Translate ranking into a portfolio</h3>
                <p>A predefined portfolio rule converts the ranking into target positions, keeping the allocation step separate from model estimation.</p>
              </div>
            </div>
            <div className="evidence-note">
              This public System profile describes the strategy architecture. Internal scientific identifiers, experiment
              IDs, runtime paths, and provider implementation details remain unchanged and are not rebranded as public product names.
            </div>
          </section>

          <section className="prose-section" id="relationship">
            <div className="kicker">System relationship</div>
            <h2>F2R is a strategy system; PDS is the portfolio operating layer</h2>
            <p className="body-copy">
              The distinction is structural. F2R produces a strategy-level portfolio decision. PDS evaluates whether and
              how independently owned providers enter the portfolio, governs their portfolio-level integration, and monitors
              the resulting decision state. F2R and ADAA are the current Active Core providers; that configuration is a
              current operating state, not the definition of PDS.
            </p>
            <div className="dual f2r-relationship-dual">
              <div className="dual-card">
                <div className="kicker">Strategy layer</div>
                <h3>F2R</h3>
                <p>Forecast-ranked multi-asset portfolio strategy with its own source, model, and qualification lineage.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Operating layer</div>
                <h3>Portfolio Decision System</h3>
                <p>Portfolio-level framework for qualification, admission, portfolio integration, decision governance, refresh, and monitoring across independently owned providers.</p>
                <Link className="btn inverse" href="/systems/pds/">Open PDS</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Related evidence</div>
            <h2>Research evidence is linked without collapsing the paper and the live strategy identity</h2>
            <p className="body-copy">
              The related Investment Research study evaluates a matched forecasting, ranking, and multi-asset allocation
              process and documents evidence on price-based forecasting and the incremental contribution of macro
              information. It is relevant evidence for the design family, but the public F2R System profile should not be
              read as a claim that every current runtime detail is identical to the frozen paper artifact.
            </p>
            {item.links.relatedResearch ? (
              <div className="repro-links documentation-artifacts">
                <Link className="artifact artifact-primary" href={item.links.relatedResearch}>
                  <span className="artifact-kicker">RELATED RESEARCH</span>
                  <strong>The Decision Value of Price and Macro Information</strong>
                  <small>Matched multi-asset forecasting, ranking, portfolio, and information-timing evidence.</small>
                  <span className="artifact-action">View Research →</span>
                </Link>
              </div>
            ) : null}
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="disclosure">
            <div className="kicker">Public disclosure</div>
            <h2>Public identity is F2R; internal scientific and runtime identifiers remain unchanged</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public</h3>
                <ul>
                  <li>Forecast-to-Rank Allocation (F2R) as the formal public identity</li>
                  <li>Machine-Learning Cross-Asset Portfolio Strategy as the public subtitle</li>
                  <li>Forecast-Ranked Multi-Asset Portfolio Strategy as the public role</li>
                  <li>Its independent Portfolio Strategy System relationship to PDS</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Not renamed or exposed as product identity</h3>
                <ul>
                  <li>Internal scientific and runtime IDs</li>
                  <li>Experiment IDs and source paths</li>
                  <li>Replay and qualification artifact identifiers</li>
                  <li>Historical audit records</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
