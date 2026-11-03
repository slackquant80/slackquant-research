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
              The published paper reports a common daily reconstructed evaluation
              from 31 January 2019 through 31 August 2026. Its headline results are
              tied to that fixed research window and the paper&apos;s portfolio
              construction and cost conventions.
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
              These are the paper&apos;s historical results through August 2026.
              The separately maintained Equity Alpha dashboard may show a later
              completed month, current MTD/YTD, Official holdings, and an
              unexecuted Preview. Do not combine those live operating states
              with the paper&apos;s frozen research sample.
            </div>
            <p className="body-copy">
              The results are not uniformly favorable. The portfolio trailed
              ACWI during 2022, some rolling active-return periods were negative,
              and Primary selection alone showed a better recent active-return
              versus tracking-error trade-off than the full portfolio. These
              observations make the incremental contribution of each layer the
              paper&apos;s central investment question.
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
                <span className="artifact-action">Open Dashboard →</span>
              </Link>
            </div>
          </section>

          <MethodsUsed researchSlug="equity-alpha-system" />

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <CitationBox item={item} />
          </section>
        </div>
      </div>
    </main>
  );
}
