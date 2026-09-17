import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem } from "@/data/systems";

const item = getSystem("equity-alpha");

export const metadata: Metadata = {
  title: "Equity Alpha — Benchmark-Aware Equity ETF Alpha System",
  description:
    "SlackQuant Equity Alpha, a benchmark-aware global equity ETF selection and active-portfolio system with explicit Official, current-performance, and Preview clocks.",
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
            <span className="track-chip equity-alpha-track-chip">Equity Alpha</span>
          </div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta">
            <span>{item.status}</span>
            <span>Global equity ETF opportunity set · ACWI benchmark</span>
            <span>Official / current performance / Preview clocks separated</span>
            <span>Architecture-visible · implementation details protected</span>
          </div>
          <div className="actions">
            {item.links.publicDashboard ? (
              <Link className="btn primary" href={item.links.publicDashboard} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">
                Open Equity Alpha Dashboard ↗
              </Link>
            ) : null}
            <Link className="btn soft" href="/systems/">Explore All Systems</Link>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#architecture">Architecture</a>
          <a href="#clocks">Operating Clocks</a>
          <a href="#benchmark">Benchmark-Aware Portfolio</a>
          <a href="#public">Public Dashboard</a>
          <a href="#boundary">Operating Boundary</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">Equity alpha family</div>
            <h2>Cross-sectional equity ETF selection, separated from multi-asset allocation</h2>
            <p className="lede">
              Equity Alpha is SlackQuant&apos;s benchmark-aware equity selection system. It operates across a U.S.-listed global equity ETF opportunity set and is evaluated relative to ACWI, so the central problem is active equity selection and portfolio construction rather than cross-asset allocation.
            </p>
            <p className="body-copy">
              The system combines a broad point-in-time selection engine with an independent static sleeve, then merges their selected positions into one investable alpha portfolio. Machine-learning ranking is complemented by traditional multi-signal evidence, while persistence rules reduce unnecessary month-to-month turnover.
            </p>
            <div className="metrics system-metrics equity-alpha-metrics">
              <div className="metric"><div className="value">ACWI</div><div className="label">Benchmark</div></div>
              <div className="metric"><div className="value">PIT</div><div className="label">Broad opportunity set</div></div>
              <div className="metric"><div className="value">ML + signals</div><div className="label">Decision evidence</div></div>
              <div className="metric"><div className="value">Monthly</div><div className="label">Portfolio cycle</div></div>
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">System architecture</div>
            <h2>Two selection sleeves, one benchmark-aware portfolio</h2>
            <div className="f2r-process-grid equity-alpha-process-grid">
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">01 · Broad</div>
                <h3>Dynamic point-in-time selection</h3>
                <p>A broad U.S.-listed global equity ETF universe is constructed on a point-in-time basis and ranked using a diversified forecasting stack.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">02 · Static</div>
                <h3>Independent static reference sleeve</h3>
                <p>A separately governed Static-v1 sleeve provides a distinct selection path rather than being folded into the broad rank as if both engines were one model.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">03 · Merge</div>
                <h3>Portfolio formation and overlap merge</h3>
                <p>Selected holdings are combined into the alpha sleeve, with overlap handled explicitly before the investor risk-budget translation is applied.</p>
              </div>
            </div>
            <div className="evidence-note">
              <strong>Public surfaces show the system architecture and decision provenance.</strong> Low-level feature engineering, exact model parameters, and source-owned implementation details remain protected.
            </div>
          </section>

          <section className="prose-section" id="clocks">
            <div className="kicker">Operating discipline</div>
            <h2>Completed performance, current performance, Official holdings, and Preview do not share one clock</h2>
            <p className="body-copy">
              The dashboard explicitly separates completed month-end performance from current MTD/YTD, the current Official portfolio from the next candidate holding state, and the provisional Preview from anything that has execution authority. This prevents partial-session or forward-looking information from being presented as realized evidence.
            </p>
            <div className="equity-alpha-clock-grid">
              <div><span>Completed performance</span><strong>Closed historical periods</strong><small>Realized return evidence only</small></div>
              <div><span>Official portfolio</span><strong>Current governed holding</strong><small>Signal and holding month shown explicitly</small></div>
              <div><span>Current MTD / YTD</span><strong>Completed market closes</strong><small>Current open-session partial bars excluded</small></div>
              <div><span>Preview</span><strong>NOT EXECUTED</strong><small>Candidate next state, clearly provisional</small></div>
            </div>
          </section>

          <section className="prose-section" id="benchmark">
            <div className="kicker">Portfolio translation</div>
            <h2>Alpha is evaluated and sized relative to ACWI</h2>
            <p className="body-copy">
              ACWI is the benchmark rather than an alpha candidate. The public interface reports active return, tracking error, information ratio, and a transparent ACWI-core / alpha-sleeve risk translation so users can distinguish the selection engine from the risk budget applied around it.
            </p>
            <div className="dual equity-alpha-dual">
              <div className="dual-card">
                <div className="kicker">Opportunity domain</div>
                <h3>Equity Alpha</h3>
                <p>Cross-sectional ETF selection and active portfolio construction within the global equity domain.</p>
              </div>
              <div className="dual-card operational">
                <div className="kicker">Multi-asset family</div>
                <h3>ADAA / F2R</h3>
                <p>Separate SlackQuant strategy systems focused on multi-asset allocation rather than benchmark-relative equity selection.</p>
                <Link className="btn inverse" href="/systems/">Compare System Families</Link>
              </div>
            </div>
          </section>

          <section className="prose-section" id="public">
            <div className="kicker">Public operating view</div>
            <h2>A dedicated dashboard exposes decisions without turning the platform into a second model source</h2>
            <p className="body-copy">
              The SlackQuant platform hosts a validated public-safe dashboard snapshot. The source project remains authoritative for refresh, scoring, portfolio formation, validation, and release decisions; the website is the presentation and navigation layer.
            </p>
            {item.links.publicDashboard ? (
              <div className="repro-links documentation-artifacts">
                <Link className="artifact artifact-primary" href={item.links.publicDashboard} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">
                  <span className="artifact-kicker">PUBLIC DASHBOARD</span>
                  <strong>Equity Alpha Operating View</strong>
                  <small>Official portfolio, current performance, Preview, universe, portfolio history, active risk, and architecture.</small>
                  <span className="artifact-action">Open Dashboard ↗</span>
                </Link>
              </div>
            ) : null}
          </section>

          <section className="prose-section" id="boundary">
            <div className="kicker">Operating boundary</div>
            <h2>Public interpretation is broad; operational authority remains source-owned</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public surface</h3>
                <ul>
                  <li>System identity, benchmark, high-level architecture, and decision provenance</li>
                  <li>Validated Official portfolio and completed/current performance states</li>
                  <li>Clearly labeled provisional Preview and universe/history views</li>
                  <li>Benchmark-relative risk and performance interpretation</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Source-owned / non-public</h3>
                <ul>
                  <li>Exact feature recipes, model hyperparameters, and protected implementation details</li>
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
