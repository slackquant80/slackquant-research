import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";

const item = getSystem("equity-alpha");

export const metadata: Metadata = {
  title: "Equity Alpha — Benchmark-Aware Global Equity ETF Strategy",
  description:
    "SlackQuant Global Equity Alpha combines machine-learning ETF selection, regional momentum allocation, and a selective alpha layer in one ACWI-relative portfolio.",
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
          <h1 className="paper-title">Equity Alpha</h1>
          <div className="paper-subtitle">Benchmark-aware global equity alpha</div>
          <div className="paper-meta">
            <span>{item.status}</span>
            <span>Global Equity Alpha · ACWI benchmark</span>
            <span>Daily-first performance</span>
            <span>Unified final portfolio</span>
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
          <a href="#architecture">Decision Architecture</a>
          <a href="#clocks">Operating Clocks</a>
          <a href="#risk">Benchmark-Aware Risk</a>
          <a href="#public">Public Dashboard</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#boundary">Operating Boundary</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">Global equity alpha</div>
            <h2>Three decision layers, one global equity portfolio</h2>
            <p className="lede">
              Equity Alpha is SlackQuant&apos;s global equity ETF strategy. A primary machine-learning selection engine is combined with independent regional allocation and a smaller selective-alpha layer, then merged into one ETF-level portfolio and evaluated against ACWI.
            </p>
            <p className="body-copy">
              The design keeps the ML engine as the main source of alpha while adding separate geographic and selection perspectives. Active return, tracking error, information ratio, and relative drawdown remain visible throughout the portfolio process.
            </p>
            <div className="metrics system-metrics equity-alpha-metrics">
              <div className="metric"><div className="value">ACWI</div><div className="label">Primary benchmark</div></div>
              <div className="metric"><div className="value">3</div><div className="label">Decision layers</div></div>
              <div className="metric"><div className="value">Daily</div><div className="label">Performance accounting</div></div>
              <div className="metric"><div className="value">IR / RDD</div><div className="label">Relative-risk lens</div></div>
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Decision architecture</div>
            <h2>Independent inputs are merged before the final portfolio is formed</h2>
            <div className="f2r-process-grid equity-alpha-process-grid">
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">01 · ML ETF Selection</div>
                <h3>Primary alpha engine</h3>
                <p>A point-in-time equity ETF universe is ranked with regularized cross-sectional forecasts and Chronos-2 evidence, then translated into holdings under explicit entry and hold rules.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">02 · Regional Momentum Allocation</div>
                <h3>Geographic diversification</h3>
                <p>An independent regional process adds a separate geographic allocation view and helps diversify benchmark-relative portfolio risk.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">03 · Selective Alpha</div>
                <h3>Additional equity-selection path</h3>
                <p>A smaller Theme / Sector / Style layer broadens the decision set with an independent selection path without becoming the main source of portfolio risk.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">04 · Unified Final Portfolio</div>
                <h3>One ETF, one target weight</h3>
                <p>When more than one layer selects the same ETF, the contributions are merged before turnover, transaction costs, and portfolio performance are calculated.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="clocks">
            <div className="kicker">Operating clocks</div>
            <h2>Completed history, current performance, Official holdings, and Preview stay separate</h2>
            <p className="body-copy">
              Completed performance uses the closed daily history. Current MTD/YTD uses completed market closes. Official holdings belong to the current holding month, while Preview shows the next proposed holding month and is clearly marked as not executed.
            </p>
            <div className="equity-alpha-clock-grid">
              <div><span>Completed performance</span><strong>Closed daily history</strong><small>Daily-first realized performance</small></div>
              <div><span>Official portfolio</span><strong>Current holding month</strong><small>Signal and holding month shown explicitly</small></div>
              <div><span>Current MTD / YTD</span><strong>Completed market closes</strong><small>Shown separately from completed history</small></div>
              <div><span>Preview</span><strong>NOT EXECUTED</strong><small>Synchronized next-period portfolio view</small></div>
            </div>
          </section>

          <section className="prose-section" id="risk">
            <div className="kicker">Benchmark-aware risk</div>
            <h2>ACWI defines the active-risk frame</h2>
            <p className="body-copy">
              Active return, tracking error, information ratio, and relative drawdown are measured against ACWI. The dashboard can also combine the completed Global Alpha model with an ACWI core. This changes the investor-level risk profile and investable weights, not the underlying model selections.
            </p>
          </section>

          <section className="prose-section" id="public">
            <div className="kicker">Public dashboard</div>
            <h2>Portfolio, performance, risk, and history in one operating view</h2>
            <p className="body-copy">
              The dashboard brings together the Official portfolio, synchronized Preview, daily-first performance, full portfolio history, ACWI-relative risk, universe diagnostics, and the investor ACWI-core / Global-Alpha mix. The downloadable history workbook provides the completed daily and monthly record together with the final target-weight history.
            </p>
            {item.links.publicDashboard ? (
              <div className="repro-links documentation-artifacts">
                <a className="artifact artifact-primary" href={item.links.publicDashboard} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">
                  <span className="artifact-kicker">LIVE</span>
                  <strong>Equity Alpha Dashboard</strong>
                  <small>Official portfolio, Preview, daily-first performance, ACWI-relative risk, and full portfolio history.</small>
                  <span className="artifact-action">Open Dashboard ↗</span>
                </a>
              </div>
            ) : null}
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="boundary">
            <div className="kicker">Operating boundary</div>
            <h2>Public architecture and portfolio behavior, protected implementation detail</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Public</h3>
                <ul>
                  <li>Decision-layer roles, ACWI benchmark frame, and unified final holdings</li>
                  <li>Completed/current performance and clearly labeled Preview</li>
                  <li>Active-risk measures including IR, tracking error, and relative drawdown</li>
                  <li>Investor ACWI-core / Global-Alpha risk translation</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Internal</h3>
                <ul>
                  <li>Protected feature recipes, tuning parameters, and private source lineage</li>
                  <li>Private runtime data, credentials, local paths, and release-engineering state</li>
                  <li>Low-level implementation details that are not needed to interpret the public portfolio</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
