import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";

const item = getSystem("f2r");

export const metadata: Metadata = {
  title: "Forecast-to-Rank Allocation (F2R) — Portfolio Strategy System",
  description:
    "Forecast-to-Rank Allocation (F2R), a live machine-learning cross-asset Portfolio Strategy System with an independently deployed public dashboard and a defined relationship to PDS.",
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
            {item.links.liveDashboard ? (
              <a className="btn primary" href={item.links.liveDashboard} target="_blank" rel="noopener noreferrer">
                Open Live Dashboard
              </a>
            ) : null}
            {item.links.relatedResearch ? (
              <Link className="btn soft" href={item.links.relatedResearch}>View Related Research</Link>
            ) : null}
            {item.links.deploymentRepository ? (
              <a className="btn soft" href={item.links.deploymentRepository} target="_blank" rel="noopener noreferrer">
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
              Forecast-to-Rank Allocation (F2R) is a live machine-learning cross-asset Portfolio Strategy System. It converts
              asset-level forecasts into a relative ranking and then maps that ordering into a disciplined multi-asset
              portfolio decision.
            </p>
            <p className="body-copy">
              Machine learning is used where it is load-bearing: estimating relative opportunity. Portfolio formation is kept
              explicit through a separate ranking and allocation rule, so the system remains interpretable as a portfolio
              strategy rather than a generic AI product.
            </p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">ML</div><div className="label">Forecasting layer</div></div>
              <div className="metric"><div className="value">Cross-Asset</div><div className="label">Decision universe</div></div>
              <div className="metric"><div className="value">Rank</div><div className="label">Portfolio translation</div></div>
              <div className="metric"><div className="value">Monthly</div><div className="label">Decision cycle</div></div>
            </div>
          </section>

          <section className="prose-section" id="process">
            <div className="kicker">Strategy architecture</div>
            <h2>Forecast first, rank second, allocate under a defined decision rule</h2>
            <div className="f2r-process-grid">
              <div className="system-role-card">
                <div className="kicker">01 · Forecast</div>
                <h3>Estimate relative opportunity</h3>
                <p>Asset-level machine-learning forecasts summarize the forward-looking information used by the strategy.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">02 · Rank</div>
                <h3>Order opportunities cross-sectionally</h3>
                <p>Forecasts are translated into a common cross-asset ordering rather than used directly as portfolio weights.</p>
              </div>
              <div className="system-role-card">
                <div className="kicker">03 · Allocate</div>
                <h3>Convert the ranking into a portfolio</h3>
                <p>A predefined allocation rule maps the final ranking into target positions under the system's monthly operating contract.</p>
              </div>
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
                  <span className="artifact-action">Open Live Dashboard ↗</span>
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
              F2R produces a strategy-level portfolio decision. PDS governs how independently owned providers are qualified,
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
            <h2>Research evidence and the live operating system remain separately identified</h2>
            <p className="body-copy">
              The related Investment Research study evaluates a matched forecasting, ranking, and multi-asset allocation
              process and documents evidence on price-based forecasting and the incremental contribution of macro information.
              It supports the design family without implying that every current runtime detail is identical to the frozen paper artifact.
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

          <section className="prose-section" id="boundary">
            <div className="kicker">Operating boundary</div>
            <h2>One operational source, one public-safe deployment surface</h2>
            <p className="body-copy">
              The public GitHub repository and Streamlit application are deployment surfaces, not a second strategy source.
              F2R's operational state, validation, and release decisions remain owned by the source system; only validated
              public-safe artifacts cross the deployment boundary.
            </p>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public surface</h3>
                <ul>
                  <li>Formal F2R system identity and decision architecture</li>
                  <li>Validated official and provisional public states</li>
                  <li>Approved historical evidence and target-history views</li>
                  <li>Public deployment repository and related research</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Source-owned / non-public</h3>
                <ul>
                  <li>Internal scientific and runtime identifiers</li>
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
