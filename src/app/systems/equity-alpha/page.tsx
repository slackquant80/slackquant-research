import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";

const item = getSystem("equity-alpha");

export const metadata: Metadata = {
  title: "Equity Alpha — Machine-Learning Equity ETF Strategy",
  description:
    "SlackQuant Equity Alpha combines REX2 regularized cross-sectional machine learning, Chronos-2 pretrained time-series intelligence, and benchmark-aware active portfolio construction relative to ACWI.",
  alternates: { canonical: "/systems/equity-alpha/" },
};

export default function EquityAlphaSystemPage() {
  if (!item) notFound();

  return (
    <main>
      <section className="paper-hero system-hero equity-alpha-system-hero">
        <div className="shell">
          <div className="paper-track-row">
            <div className="eyebrow">SlackQuant Systems</div>
            <span className="track-chip equity-alpha-track-chip">{item.category}</span>
          </div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta">
            <span>{item.status}</span>
            <span>Global equity ETF alpha · ACWI benchmark</span>
            <span>REX2 (Ridge + ElasticNet) · Chronos-2</span>
            <span>Broad PIT engine + independent Static-v1 sleeve</span>
          </div>
          <div className="actions">
            {item.links.publicDashboard ? (
              <a
                className="btn primary"
                href={item.links.publicDashboard}
                target="_blank"
                rel="noopener noreferrer"
                data-sq-dashboard-app="true"
              >
                Open Dashboard ↗
              </a>
            ) : null}
            <Link className="btn soft" href="/systems/">Explore All Systems</Link>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#models">Model Stack</a>
          <a href="#architecture">Portfolio Architecture</a>
          <a href="#universe">Universe Evolution</a>
          <a href="#clocks">Operating Clocks</a>
          <a href="#benchmark">Benchmark-Aware Risk</a>
          <a href="#public">Public Dashboard</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#boundary">Operating Boundary</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">Equity alpha strategy</div>
            <h2>Machine-learning selection, translated into benchmark-aware active risk</h2>
            <p className="lede">
              Equity Alpha is SlackQuant&apos;s global equity ETF alpha strategy. It treats forecasting as an input to portfolio decisions rather than a standalone objective: cross-sectional evidence is converted into ranked ETF selections, combined across independent decision sleeves, and evaluated relative to ACWI through active return, tracking error, and information ratio.
            </p>
            <p className="body-copy">
              The system is deliberately separate from SlackQuant&apos;s multi-asset allocation family. Its opportunity set is equity-only, its benchmark is explicit, and its portfolio problem is active selection: identify differentiated equity exposures while keeping benchmark-relative risk visible at every stage of portfolio translation.
            </p>
            <div className="metrics system-metrics equity-alpha-metrics">
              <div className="metric"><div className="value">ACWI</div><div className="label">Global equity benchmark</div></div>
              <div className="metric"><div className="value">REX2 + C2</div><div className="label">Forecasting stack</div></div>
              <div className="metric"><div className="value">PIT + Static</div><div className="label">Independent sleeves</div></div>
              <div className="metric"><div className="value">IR / TE</div><div className="label">Active-risk lens</div></div>
            </div>
          </section>

          <section className="prose-section" id="models">
            <div className="kicker">Model stack</div>
            <h2>Two forecasting paradigms, one rank-based decision space</h2>
            <p className="body-copy">
              Equity Alpha combines regularized cross-sectional machine learning with pretrained time-series forecasting. The objective is not to crown one model family, but to translate heterogeneous forecasts into a common portfolio decision language and preserve useful model disagreement when it improves selection quality.
            </p>
            <div className="system-role-grid equity-alpha-model-grid">
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">REX2</div>
                <h3>Ridge + ElasticNet rank ensemble</h3>
                <p>Regularized linear models generate cross-sectional return-ranking evidence under point-in-time data rules. Ridge and ElasticNet forecasts are combined in rank space rather than treated as unrelated standalone portfolios.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">Chronos-2</div>
                <h3>Pretrained time-series intelligence</h3>
                <p>Chronos-2 contributes an independently trained time-series view, adding a pretrained forecasting paradigm that is structurally different from the fitted cross-sectional models.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">Multi-signal</div>
                <h3>Complementary non-ML evidence</h3>
                <p>Traditional signal evidence remains a separate input in the Static-v1 path, providing decision diversification rather than forcing every portfolio choice through a single forecasting family.</p>
              </div>
            </div>
            <div className="evidence-note">
              <strong>Architecture-visible, recipe-protected.</strong> Public disclosure identifies the model families, portfolio roles, and decision flow. Exact feature transformations, hyperparameters, blend coefficients, and source-owned implementation details remain protected.
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Portfolio architecture</div>
            <h2>A primary point-in-time engine with an independent Static-v1 sleeve</h2>
            <div className="f2r-process-grid equity-alpha-process-grid">
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">01 · Broad PIT</div>
                <h3>Dynamic opportunity set</h3>
                <p>A broad U.S.-listed global equity ETF universe is formed point in time and ranked with the REX2 / Chronos-2 forecasting stack. The universe, model evidence, and ranking provenance remain observable rather than being collapsed into an opaque score.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">02 · Static-v1</div>
                <h3>Independent decision sleeve</h3>
                <p>A separately governed static universe combines machine-learning and multi-signal evidence through its own selection path. Its ranks remain distinct from Broad ranks so the two engines preserve their own decision meaning.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">03 · Portfolio</div>
                <h3>Selection, persistence, and overlap merge</h3>
                <p>Ranked candidates are translated into investable holdings with entry/hold persistence and explicit overlap handling before the investor&apos;s ACWI-core / alpha-sleeve risk budget is applied.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="universe">
            <div className="kicker">Universe evolution</div>
            <h2>Monthly point-in-time change is automatic; candidate-pool expansion is governed</h2>
            <p className="body-copy">
              The Broad engine is dynamic every month inside its governed model-ready candidate pool. At each completed signal month, market eligibility and exposure representation are rebuilt from information available at that time, so eligible ETFs can enter or leave the monthly opportunity set and the representative wrapper for an exposure can change as liquidity and history evolve.
            </p>
            <p className="body-copy">
              The outer candidate pool is intentionally more conservative. A newly listed ETF or a wrapper that has never accumulated enough model-ready history is not promoted automatically merely because it becomes tradable. SlackQuant therefore separates <strong>monthly PIT maintenance</strong> from a lower-frequency <strong>Universe Expansion Audit</strong>. The latter reviews newly available wrappers, classification and exposure identity, listing history, liquidity, duplicate exposure, and model-readiness before any canonical pool revision. This keeps the live system adaptive without silently rewriting its historical information set.
            </p>
            <div className="dual equity-alpha-dual">
              <div className="dual-card">
                <div className="kicker">Monthly</div>
                <h3>Dynamic PIT maintenance</h3>
                <p>Re-evaluate eligibility and exposure representatives on the completed signal-month clock using the existing governed candidate pool.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Periodic governance</div>
                <h3>Universe Expansion Audit</h3>
                <p>Review new listings and previously non-model-ready wrappers before expanding the canonical candidate pool. Promotion is explicit and versioned rather than automatic.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="clocks">
            <div className="kicker">Operating discipline</div>
            <h2>Historical evidence, current performance, Official holdings, and Preview stay on separate clocks</h2>
            <p className="body-copy">
              The operating view separates completed month-end performance from current MTD/YTD, the current Official portfolio from the next candidate holding state, and the provisional Preview from anything with execution authority. Current performance uses completed market closes rather than an open U.S. session&apos;s partial bar.
            </p>
            <div className="equity-alpha-clock-grid">
              <div><span>Completed performance</span><strong>Closed historical periods</strong><small>Realized return evidence only</small></div>
              <div><span>Official portfolio</span><strong>Current governed holding</strong><small>Signal and holding month shown explicitly</small></div>
              <div><span>Current MTD / YTD</span><strong>Completed market closes</strong><small>Open-session partial bars excluded</small></div>
              <div><span>Preview</span><strong>NOT EXECUTED</strong><small>Candidate next state, clearly provisional</small></div>
            </div>
          </section>

          <section className="prose-section" id="benchmark">
            <div className="kicker">Benchmark-aware portfolio construction</div>
            <h2>ACWI defines the active-risk frame; it is not an alpha candidate</h2>
            <p className="body-copy">
              ACWI is the benchmark against which the strategy&apos;s active return, tracking error, and information ratio are evaluated. The public interface also translates the alpha engine into an investor-selectable ACWI-core / alpha-sleeve profile, making a clear distinction between the selection model and the amount of active risk an investor chooses to carry.
            </p>
            <div className="dual equity-alpha-dual">
              <div className="dual-card">
                <div className="kicker">Equity alpha family</div>
                <h3>Selection within equities</h3>
                <p>Cross-sectional ETF ranking and benchmark-relative active portfolio construction within the global equity opportunity set.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Multi-asset family</div>
                <h3>ADAA / F2R</h3>
                <p>Peer strategy engines in the Investment Strategy Layer, but focused on cross-asset allocation rather than ACWI-relative equity selection.</p>
                <Link className="btn inverse" href="/systems/">Compare Strategy Families</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="public">
            <div className="kicker">Public operating view</div>
            <h2>Decision provenance is visible without turning the website into a second model source</h2>
            <p className="body-copy">
              SlackQuant publishes a validated public-safe dashboard that exposes the current Official portfolio, current performance, Preview, Broad and Static universe views, portfolio history, active-risk metrics, and architecture. The canonical ETF Alpha project remains authoritative for refresh, scoring, portfolio formation, validation, and release decisions.
            </p>
            {item.links.publicDashboard ? (
              <div className="repro-links documentation-artifacts">
                <a
                  className="artifact artifact-primary"
                  href={item.links.publicDashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-sq-dashboard-app="true"
                >
                  <span className="artifact-kicker">LIVE</span>
                  <strong>Operational Dashboard</strong>
                  <small>Official portfolio, current performance, Preview, Broad / Static universe intelligence, portfolio history, and active risk.</small>
                  <span className="artifact-action">Open Dashboard ↗</span>
                </a>
              </div>
            ) : null}
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="boundary">
            <div className="kicker">Operating boundary</div>
            <h2>Public architecture is interpretable; operational authority remains source-owned</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public surface</h3>
                <ul>
                  <li>Benchmark, opportunity domain, model families, and portfolio architecture</li>
                  <li>Validated Official portfolio and completed/current performance states</li>
                  <li>Clearly labeled provisional Preview plus Broad / Static rank provenance</li>
                  <li>Benchmark-relative performance and active-risk interpretation</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Source-owned / non-public</h3>
                <ul>
                  <li>Exact feature recipes, hyperparameters, blend coefficients, and protected implementation details</li>
                  <li>Private runtime data, credentials, local paths, and release-engineering state</li>
                  <li>Unvalidated research branches or candidate experiments</li>
                  <li>Any Preview interpretation as an executed or Official decision</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
