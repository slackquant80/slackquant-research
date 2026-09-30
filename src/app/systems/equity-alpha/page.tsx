import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getSystem } from "@/data/systems";

const item = getSystem("equity-alpha");

export const metadata: Metadata = {
  title: "Equity Alpha — Benchmark-Aware Global Equity ETF Portfolio",
  description:
    "SlackQuant Equity Alpha combines ML-based ETF selection, regional momentum allocation, and a selective Theme / Sector / Style layer in one ACWI-benchmarked global equity portfolio.",
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
          <div className="paper-subtitle">Benchmark-Aware Global Equity ETF Portfolio</div>
          <div className="paper-meta">
            <span>{item.status}</span>
            <span>ACWI benchmark</span>
            <span>Daily-first accounting</span>
            <span>Official + Preview</span>
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
          <a href="#architecture">Portfolio Architecture</a>
          <a href="#clocks">Operating Clocks</a>
          <a href="#risk">Benchmark & Risk</a>
          <a href="#public">Dashboard</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#boundary">Public Scope</a>
        </aside>

        <article>
          <section className="prose-section" id="overview">
            <div className="kicker">Global equity alpha</div>
            <h2>Three independent decision layers, one unified portfolio</h2>
            <p className="lede">
              Equity Alpha is a benchmark-aware global equity ETF strategy built from three decision layers: ML ETF Selection, Regional Momentum Allocation, and Selective Alpha. Their ETF-level targets are merged into one final portfolio before turnover, transaction costs, and performance are calculated.
            </p>
            <p className="body-copy">
              ACWI is the primary benchmark. The operating view keeps absolute performance and benchmark-relative evidence together, including active return, tracking error, information ratio, relative drawdown, current holdings, and the next non-executed Preview.
            </p>
            <div className="metrics system-metrics equity-alpha-metrics">
              <div className="metric"><div className="value">ACWI</div><div className="label">Primary benchmark</div></div>
              <div className="metric"><div className="value">3</div><div className="label">Decision layers</div></div>
              <div className="metric"><div className="value">ETF-level</div><div className="label">Unified portfolio</div></div>
              <div className="metric"><div className="value">Daily</div><div className="label">Performance accounting</div></div>
            </div>
          </section>

          <section className="prose-section" id="architecture">
            <div className="kicker">Portfolio architecture</div>
            <h2>Different decision paths are combined before implementation</h2>
            <div className="f2r-process-grid equity-alpha-process-grid">
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">01 · ML ETF Selection</div>
                <h3>Primary alpha engine</h3>
                <p>A point-in-time equity ETF universe is ranked using regularized cross-sectional forecasts and Chronos-2. The combined rank signal is translated into holdings through explicit entry and hold rules.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">02 · Regional Momentum Allocation</div>
                <h3>Independent geographic allocation</h3>
                <p>A separate regional process adds a distinct geographic allocation view rather than relying on the ML selection engine for every portfolio decision.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">03 · Selective Alpha</div>
                <h3>Targeted Theme / Sector / Style sleeve</h3>
                <p>A smaller independent path adds selected Theme, Sector, and Style exposures without replacing the primary ML engine.</p>
              </div>
              <div className="system-role-card equity-alpha-role-card">
                <div className="kicker">04 · Unified Final Portfolio</div>
                <h3>One ETF, one final target weight</h3>
                <p>Overlapping ETF selections are merged first. Turnover, transaction costs, and realized performance are then calculated from the unified portfolio rather than from three separately traded sleeves.</p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="clocks">
            <div className="kicker">Operating clocks</div>
            <h2>Completed history, current performance, Official, and Preview are kept distinct</h2>
            <p className="body-copy">
              Completed performance uses closed daily history. Current MTD/YTD uses the latest admitted market closes. Official is the portfolio for the current holding month. Preview is the synchronized next-period candidate portfolio and is never presented as executed.
            </p>
            <div className="equity-alpha-clock-grid">
              <div><span>Completed performance</span><strong>Closed daily history</strong><small>Realized daily path used for performance statistics.</small></div>
              <div><span>Official portfolio</span><strong>Current holding month</strong><small>Signal and holding month are shown explicitly.</small></div>
              <div><span>Current MTD / YTD</span><strong>Latest admitted closes</strong><small>Open-period performance is kept separate from completed history.</small></div>
              <div><span>Preview</span><strong>Not executed</strong><small>Synchronized candidate holdings for the next holding month.</small></div>
            </div>
          </section>

          <section className="prose-section" id="risk">
            <div className="kicker">Benchmark & risk</div>
            <h2>ACWI anchors the active-risk view</h2>
            <p className="body-copy">
              The strategy is evaluated against ACWI using active return, tracking error, information ratio, relative wealth, and relative drawdown alongside absolute return and drawdown. The dashboard can also combine Global Alpha with an ACWI core; that control changes the investor-level risk profile and investable weights, not the underlying model selections.
            </p>
          </section>

          <section className="prose-section" id="public">
            <div className="kicker">Dashboard</div>
            <h2>From portfolio decisions to investable exposure</h2>
            <p className="body-copy">
              The live dashboard shows Official and Preview portfolios, ETF target weights, investment-exposure groupings, current MTD/YTD, completed daily performance, ACWI-relative risk, portfolio history, and ML-layer diagnostics. A full-history workbook provides the completed daily and monthly record together with the unified target-weight history.
            </p>
            {item.links.publicDashboard ? (
              <div className="repro-links documentation-artifacts">
                <a className="artifact artifact-primary" href={item.links.publicDashboard} target="_blank" rel="noopener noreferrer" data-sq-dashboard-app="true">
                  <span className="artifact-kicker">LIVE</span>
                  <strong>Equity Alpha Dashboard</strong>
                  <small>Official / Preview holdings, investment exposures, daily-first performance, ACWI-relative risk, and full portfolio history.</small>
                  <span className="artifact-action">Open Dashboard ↗</span>
                </a>
              </div>
            ) : null}
          </section>

          <MethodsUsed researchSlug={item.methodsKey ?? item.slug} context="system" />

          <section className="prose-section" id="boundary">
            <div className="kicker">Public scope</div>
            <h2>Portfolio logic is visible; private implementation state stays private</h2>
            <div className="system-boundary-grid">
              <div className="system-boundary-card allowed">
                <h3>Shown publicly</h3>
                <ul>
                  <li>Decision-layer roles, ACWI benchmark frame, and unified final holdings</li>
                  <li>Official and Preview portfolios with separate operating clocks</li>
                  <li>Daily-first performance and benchmark-relative risk measures</li>
                  <li>Investor ACWI-core / Global-Alpha risk-profile translation</li>
                </ul>
              </div>
              <div className="system-boundary-card prohibited">
                <h3>Not published</h3>
                <ul>
                  <li>Private feature recipes, tuning detail, and source lineage</li>
                  <li>Credentials, local runtime data, and machine-specific infrastructure</li>
                  <li>Release-engineering state that is not needed to interpret the portfolio</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
