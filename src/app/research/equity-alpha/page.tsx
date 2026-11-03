import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CitationBox } from "@/components/CitationBox";
import { MethodsUsed } from "@/components/MethodsUsed";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { getResearch } from "@/data/research";

const paperMetrics = [
  ["18.9%", "Global Equity Alpha CAGR"],
  ["13.8%", "ACWI CAGR"],
  ["0.819", "Information ratio vs. ACWI"],
  ["6.15%", "Tracking error vs. ACWI"],
] as const;

export const metadata: Metadata = {
  title: "What Do Additional Models Add to a Global Equity Portfolio?",
  description:
    "Published Equity Alpha research on ETF selection, regional allocation, selective tilts, and ACWI-relative portfolio outcomes. SSRN 7622538.",
  alternates: { canonical: "/research/equity-alpha/" },
};

export default function EquityAlphaResearchPage() {
  const item = getResearch("equity-alpha");
  if (!item) notFound();

  return (
    <main>
      <ResearchPaperHero
        item={item}
        relatedSystem={{ href: "/systems/equity-alpha/", label: "Equity Alpha System" }}
      />

      <div className="shell detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#question">Research Question</a>
          <a href="#findings">Key Findings</a>
          <a href="#evidence">Published Evidence</a>
          <a href="#architecture">Portfolio Architecture</a>
          <a href="#connection">Research &amp; System</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              More models do not automatically produce a better equity portfolio.
              This research asks what regional and selective allocations contribute
              after their positions are combined with a machine-learning ETF selection
              engine and evaluated against ACWI.
            </p>
            <p className="body-copy">
              The study examines one investable global equity ETF portfolio, not three
              separate model accounts. Overlapping ETF targets are consolidated before
              turnover, transaction costs, and benchmark-relative performance are
              measured. It tests the value of additional decision layers through their
              effect on the portfolio an investor would actually hold.
            </p>
          </section>

          <section className="prose-section" id="question">
            <h2>Research Question</h2>
            <div className="question">{item.researchQuestion}</div>
          </section>

          <section className="prose-section" id="findings">
            <h2>Key Findings</h2>
            <div className="finding-list">
              {item.findings.map((finding) => (
                <div className="finding" key={finding}>
                  <div>{finding}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <h2>Published Evidence</h2>
            <p className="body-copy">
              The common daily reconstructed evaluation runs from
              31 January 2019 to 31 August 2026. It uses one ACWI benchmark
              and applies portfolio-level transaction costs after all three
              components&apos; ETF targets are combined.
            </p>
            <div className="metrics">
              {paperMetrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              <strong>Research history versus current operation.</strong>{" "}
              Figures above describe the published study through August 2026.
              The separate operating dashboard shows subsequently completed periods,
              current MTD/YTD, Official holdings, and proposed Preview weights.
              Its operating clock is independent of this paper&apos;s historical sample.
            </div>
            <div className="selected-table-block">
              <div className="selected-exhibits-head">
                <div className="section-title">What Each Additional Layer Changes</div>
                <p>
                  Selected published, common-accounting comparisons. The full
                  window ends in August 2026; the later diagnostic covers
                  November 2024 through August 2026.
                </p>
              </div>
              <div
                className="evidence-table-wrap"
                role="region"
                aria-label="Published Equity Alpha component contribution comparison"
                tabIndex={0}
              >
                <table className="evidence-table">
                  <thead>
                    <tr>
                      <th>Configuration</th>
                      <th>Window</th>
                      <th>CAGR</th>
                      <th>TE</th>
                      <th>IR</th>
                      <th>Relative DD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Primary only</th>
                      <td>Full</td><td>19.6%</td><td>7.0%</td><td>0.816</td><td>−11.6%</td>
                    </tr>
                    <tr>
                      <th scope="row">+ Regional</th>
                      <td>Full</td><td>18.9%</td><td>6.1%</td><td>0.821</td><td>−9.9%</td>
                    </tr>
                    <tr>
                      <th scope="row">+ Selective</th>
                      <td>Full</td><td>18.9%</td><td>6.2%</td><td>0.819</td><td>−8.1%</td>
                    </tr>
                    <tr>
                      <th scope="row">Primary only</th>
                      <td>Later</td><td>26.3%</td><td>7.2%</td><td>0.690</td><td>−8.4%</td>
                    </tr>
                    <tr>
                      <th scope="row">+ Regional</th>
                      <td>Later</td><td>25.5%</td><td>6.2%</td><td>0.682</td><td>−7.2%</td>
                    </tr>
                    <tr>
                      <th scope="row">+ Selective</th>
                      <td>Later</td><td>24.7%</td><td>6.2%</td><td>0.582</td><td>−7.1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="evidence-table-source">
                Source: Published working paper, Section 6; fixed historical
                configurations and original reported rounding
              </div>
            </div>
            <p className="body-copy">
              Primary selection alone compounds faster, while Regional allocation
              reduces tracking error and relative drawdown at the cost of some
              active return. Adding Selective Alpha further improves full-period
              relative drawdown, but the later-period information ratio declines.
              The paper therefore evaluates incremental contribution as a
              return–risk trade-off, not a presumption that every layer adds alpha.
            </p>
          </section>

          <section className="prose-section" id="architecture">
            <h2>Portfolio Architecture</h2>
            <div className="method-grid">
              <div className="method-card">
                <div className="num">01 · PRIMARY</div>
                <h3>ML ETF Selection</h3>
                <p>
                  The main return-seeking engine ranks historically eligible
                  global equity ETFs, with a separate static-universe anchor.
                </p>
              </div>
              <div className="method-card">
                <div className="num">02 · REGIONAL</div>
                <h3>Regional Allocation</h3>
                <p>
                  A smaller, benchmark-aware allocation layer adjusts the
                  geographic and U.S.-growth exposure of the unified portfolio.
                </p>
              </div>
              <div className="method-card">
                <div className="num">03 · SELECTIVE</div>
                <h3>Selective Alpha</h3>
                <p>
                  A limited allocation to theme, sector, style, and factor ETFs
                  combines longer-horizon momentum and separate ranking signals.
                </p>
              </div>
            </div>
            <p className="body-copy">
              The published configuration assigns 75% to Primary selection,
              20% to Regional allocation, and 5% to Selective Alpha. These are
              capital allocations to the three components; their internal
              ranking and portfolio weights are different quantities. ETF
              positions are merged by ticker before the final portfolio is
              traded and evaluated.
            </p>
          </section>

          <section className="prose-section" id="connection">
            <h2>Research and Operational System</h2>
            <p className="body-copy">
              This page describes the published research record. The Equity
              Alpha System page explains the operating portfolio architecture
              and presents current completed-history evidence. Its live
              dashboard separately identifies Official holdings, current
              open-month performance, and next-period Preview positions.
            </p>
            <div className="repro-links documentation-artifacts">
              <Link className="artifact artifact-primary" href="/systems/equity-alpha/">
                <span className="artifact-kicker">RELATED SYSTEM</span>
                <strong>Equity Alpha System</strong>
                <small>Portfolio structure, benchmark-relative risk, and live-system context.</small>
                <span className="artifact-action">View System →</span>
              </Link>
              <Link className="artifact" href="/dashboards/equity-alpha/">
                <span className="artifact-kicker">PUBLIC DASHBOARD</span>
                <strong>Global Equity Alpha Dashboard</strong>
                <small>Completed performance, current month, Official portfolio, and Preview.</small>
                <span className="artifact-action">View Dashboard →</span>
              </Link>
            </div>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <CitationBox item={item} />
          </section>
        </div>
      </div>
    </main>
  );
}
