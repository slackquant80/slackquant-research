import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";

const item = getSystem("f2r");

export const metadata: Metadata = {
  title: "Forecast-to-Rank Allocation (F2R) — Portfolio Strategy System",
  description:
    "Forecast-to-Rank Allocation (F2R), a live cross-asset Portfolio Strategy System that combines conventional supervised machine learning with Chronos-2 pretrained time-series intelligence before translating forecasts into ranked portfolio decisions.",
  alternates: { canonical: "/systems/f2r/" },
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
            <span>Heterogeneous forecasting · conventional ML + Chronos-2</span>
            <span>Independent strategy system · current PDS Active Core provider</span>
          </div>
          <div className="actions">
            {item.links.liveDashboard ? (
              <a className="btn primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                Open Dashboard ↗
              </a>
            ) : null}
            <a
              className="btn soft"
              href="/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              System Documentation ↗
            </a>
            {item.links.relatedResearch ? (
              <Link className="btn soft" href={item.links.relatedResearch}>View Related Research</Link>
            ) : null}
            {item.links.deploymentRepository ? (
              <a className="btn soft ext" href={item.links.deploymentRepository} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#process">Forecast-to-Rank Process</a>
          <a href="#live">Live System</a>
          <a href="#relationship">Relationship to PDS</a>
          <a href="#evidence">Evidence Boundary</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#boundary">Operating Boundary</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              F2R is a live cross-asset Portfolio Strategy System built around a clean separation between prediction and
              portfolio choice. A heterogeneous forecasting layer combines conventional supervised machine learning with
              Chronos-2 pretrained time-series intelligence; those views meet in a common cross-sectional ranking space
              before any portfolio is formed.
            </p>
            <p className="body-copy">
              That separation is deliberate. F2R does not treat raw forecast magnitudes as portfolio weights. Forecasts first
              become comparable relative-opportunity ranks, then a governed allocation rule converts the final ordering into
              a disciplined monthly multi-asset decision. The result is a modern forecasting stack wrapped in an interpretable
              portfolio operating contract.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">Heterogeneous</div><div className="label">Forecast architecture</div></div>
              <div className="metric"><div className="value">Chronos-2</div><div className="label">Pretrained sequence expert</div></div>
              <div className="metric"><div className="value">Rank</div><div className="label">Portfolio translation</div></div>
              <div className="metric"><div className="value">Monthly</div><div className="label">Decision cycle</div></div>
            </div>
          </section>

          <section className="prose-section" id="process">
            <div className="kicker">Strategy architecture</div>
            <h2>Heterogeneous forecasts, one common decision space</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card">
                <div className="kicker">01 · Forecast</div>
                <h3>Combine distinct forecasting views</h3>
                <p>Conventional supervised models and Chronos-2 process price history through different representations before their views enter a common decision layer.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">02 · Rank</div>
                <h3>Normalize forecasts through rank consensus</h3>
                <p>Heterogeneous outputs are translated into a comparable cross-asset ordering rather than mixed as raw forecast scales or used directly as portfolio weights.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">03 · Allocate</div>
                <h3>Translate rank into a governed portfolio target</h3>
                <p>A separate allocation rule maps the final ordering into the monthly model portfolio under a defined timing, turnover, cost, and accounting contract.</p>
              </div>
            </div>
            <div className="evidence-note">
              <strong>Public disclosure names the forecasting technologies and the decision architecture.</strong> Exact feature horizons,
              sequence/runtime parameters, model-contribution settings, and low-level integration mechanics remain protected implementation details.
            </div>
          </section>

          <section className="prose-section" id="live">
            <div className="kicker">Live operation</div>
            <h2>The public dashboard separates the actionable decision from the provisional next state</h2>
            <p className="body-copy">
              The standalone F2R dashboard publishes the current official monthly target alongside a separately labeled
              intramonth preview. The preview is indicative only: it may change before month-end and carries no execution or
              performance authority. Historical research evidence and forward-live tracking are also kept distinct.
            </p>
            <div className="repro-links documentation-artifacts">
              {item.links.liveDashboard ? (
                <a className="artifact artifact-primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">LIVE SYSTEM</span>
                  <strong>F2R Public Dashboard</strong>
                  <small>Official decision, intramonth preview, historical evidence, and certified target history.</small>
                  <span className="artifact-action">Open Dashboard ↗</span>
                </a>
              ) : null}
              {item.links.deploymentRepository ? (
                <a className="artifact" href={item.links.deploymentRepository} target="_blank" rel="noopener noreferrer">
                  <span className="artifact-kicker">PUBLIC DEPLOYMENT</span>
                  <strong>GitHub Repository</strong>
                  <small>Public-safe deployment artifact for the standalone Streamlit interface.</small>
                  <span className="artifact-action">View Repository ↗</span>
                </a>
              ) : null}
            </div>
          </section>

          <section className="prose-section" id="relationship">
            <div className="kicker">System relationship</div>
            <h2>F2R is a strategy system; PDS is the portfolio operating layer</h2>
            <p className="body-copy">
              F2R produces a strategy-level portfolio decision. PDS governs how independent providers are qualified,
              admitted, integrated, and monitored at the portfolio level. F2R and ADAA are the current Active Core providers;
              that configuration is a current operating state, not the definition of PDS.
            </p>
            <div className="dual f2r-relationship-dual">
              <div className="dual-card">
                <div className="kicker">Strategy layer</div>
                <h3>F2R</h3>
                <p>Forecast-ranked multi-asset portfolio strategy with its own operating contract, evidence lineage, and public deployment.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Operating layer</div>
                <h3>Portfolio Decision System</h3>
                <p>Portfolio-level framework for provider qualification, admission, integration, decision governance, refresh, and monitoring.</p>
                <Link className="btn inverse" href="/systems/pds/">Open PDS</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <div className="kicker">Related evidence</div>
            <h2>Two public research papers document distinct stages of the F2R research lineage</h2>
            <p className="body-copy">
              The earlier information-set study tests whether historical-vintage macro
              information adds decision value beyond price information under matched
              forecasting, ranking, portfolio, and timing rules. The newer model-adoption
              study keeps the portfolio-side price-data domain and portfolio interface
              fixed while asking how Chronos-2 changes rankings, Top-4 decisions, and
              historical portfolio outcomes.
            </p>
            <p className="body-copy">
              Both papers are frozen historical research artifacts. They document the
              evidence path that informed the F2R design family, while the live system
              remains separately governed. Historical model-combination settings reported
              in the paper are research configurations, not disclosures of the current
              protected production recipe.
            </p>
            <div className="repro-links documentation-artifacts">
              {item.links.relatedResearch ? (
                <Link className="artifact artifact-primary" href={item.links.relatedResearch}>
                  <span className="artifact-kicker">MODEL-ADOPTION RESEARCH</span>
                  <strong>A Second Opinion for the Portfolio</strong>
                  <small>Chronos-2 model adoption, forecast integration, changed decisions, and portfolio consequences.</small>
                  <span className="artifact-action">View Research →</span>
                </Link>
              ) : null}
              <Link className="artifact" href="/research/price-macro-decision/">
                <span className="artifact-kicker">INFORMATION-SET RESEARCH</span>
                <strong>The Decision Value of Price and Macro Information</strong>
                <small>Matched price-versus-macro evidence with explicit information-timing controls.</small>
                <span className="artifact-action">View Prior Research →</span>
              </Link>
            </div>
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="boundary">
            <div className="kicker">Operating boundary</div>
            <h2>One operational source, governed public deployment surfaces</h2>
            <p className="body-copy">
              The GitHub repository carries the public-safe deployment artifact, while Streamlit serves the public application.
              Neither is a second operational source. F2R's operational state, validation, and release decisions remain
              source-owned; only validated public-safe artifacts cross the deployment boundary.
            </p>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public surface</h3>
                <ul>
                  <li>Formal F2R system identity, decision architecture, and named use of conventional supervised ML plus Chronos-2</li>
                  <li>Validated official and provisional public states</li>
                  <li>Approved historical evidence and target-history views</li>
                  <li>Public deployment repository and related research</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Source-owned / non-public</h3>
                <ul>
                  <li>Exact feature horizons, Chronos-2 sequence/runtime parameters, model-contribution settings, and low-level conflict-resolution rules</li>
                  <li>Local operating paths, credentials, and environment state</li>
                  <li>Research branches not promoted to the live specification</li>
                  <li>Internal validation and release-engineering artifacts</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
