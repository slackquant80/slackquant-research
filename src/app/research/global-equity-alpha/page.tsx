import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CitationBox } from "@/components/CitationBox";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { MethodsUsed } from "@/components/MethodsUsed";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { getResearch } from "@/data/research";

// Prepared for a public-paper release. This branch must not be merged/deployed
// until the SSRN record confirms that moderation is complete.
export const metadata: Metadata = {
  title: "What Do Additional Models Add to a Global Equity Portfolio?",
  description:
    "Investment Research on combining machine-learning ETF selection, regional allocation, and selective equity tilts against ACWI after overlap, costs, and active risk.",
  alternates: { canonical: "/research/global-equity-alpha/" },
};

const headlineMetrics = [
  ["18.9%", "Research CAGR"],
  ["13.8%", "ACWI CAGR"],
  ["6.15%", "Tracking error"],
  ["0.819", "Information ratio"],
  ["−8.10%", "Relative maximum drawdown"],
] as const;

const roles = [
  {
    num: "75%",
    title: "Primary ETF selection",
    detail:
      "Regularized cross-sectional forecasts and Chronos-2 contribute ranked ETF opportunities. This is the return-seeking core and the primary reference for incremental comparison.",
  },
  {
    num: "20%",
    title: "Regional allocation",
    detail:
      "Geographic exposures adapt to regional return trends. Their value is judged mainly through ACWI-relative risk and the behavior of the combined holdings.",
  },
  {
    num: "5%",
    title: "Selective Alpha",
    detail:
      "A limited theme, sector, and style allocation provides a distinct decision route, with mixed evidence and explicitly bounded size.",
  },
] as const;

export default function GlobalEquityAlphaResearchPage() {
  const item = getResearch("global-equity-alpha");
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
          <a href="#evidence">Historical Evidence</a>
          <a href="#construction">Portfolio Construction</a>
          <a href="#limitations">Interpretation Boundary</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#system">Research &amp; System</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              More forecasts and investment signals do not necessarily make a better
              portfolio. Their value has to survive the move from rankings to
              overlapping ETF positions, benchmark-relative exposure, turnover,
              and implementation costs.
            </p>
            <p className="body-copy">
              This paper studies a global equity ETF portfolio built from three
              decision roles: primary machine-learning selection, benchmark-aware
              regional allocation, and a small selective allocation across themes,
              sectors, and styles. Each component is judged as part of one
              investable ACWI-benchmarked portfolio, rather than through
              stand-alone model performance alone.
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
            <h2>Historical Evidence</h2>
            <p>
              The fixed paper evaluates the integrated portfolio against the
              iShares MSCI ACWI ETF using reconstructed daily returns from
              31 January 2019 through 31 August 2026, net of the modeled
              transaction costs.
            </p>
            <div className="metrics">
              {headlineMetrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              Paper-frozen research results, not a live investment record.
              The common historical window is the 2019–2026 integrated test;
              longer individual-component histories must not be interpreted
              as a longer backtest of this combined strategy.
            </div>

            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Two visual summaries from the same frozen paper data highlight
                    the long-run advantage and its variation through time. The
                    paper contains the full research evidence and limitations.
                  </p>
                </div>
                <div className="evidence-figure-list">
                  {item.selectedEvidence.map((figure) => (
                    <EvidenceFigure key={figure.id} figure={figure} />
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <section className="prose-section" id="construction">
            <h2>Portfolio Construction</h2>
            <p>
              The paper documents a 75% / 20% / 5% integrated research mix.
              The components produce ETF targets that are netted by ticker
              before the portfolio&apos;s turnover and transaction costs are
              computed. Holdings chosen by several models are one position,
              not duplicate trades.
            </p>
            <div className="method-grid">
              {roles.map((role) => (
                <div className="method-card" key={role.title}>
                  <div className="num">{role.num}</div>
                  <h3>{role.title}</h3>
                  <p>{role.detail}</p>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              The 75/20/5 mix is the paper&apos;s documented configuration,
              not evidence of a uniquely optimal weight set. The live
              Equity Alpha system is maintained and updated separately.
            </div>
          </section>

          <section className="prose-section" id="limitations">
            <h2>Interpretation Boundary</h2>
            <p className="body-copy">
              Primary selection alone had a better recent balance of active return
              and tracking error than the full blend. The integrated strategy
              underperformed ACWI in 2022, and rolling active returns were
              negative in some periods. Selective Alpha weakened over its
              later evaluation window. These findings argue for evaluating
              complementary decision roles, not for declaring that adding
              models must improve future performance.
            </p>
            <p className="body-copy">
              The architecture and mix were selected during research.
              Chronos-2 is a retrospective pretrained-model component, not
              proof of independent historical real-time availability. The
              reconstructed returns are not live trading results, and other
              benchmarks, implementation costs, or market regimes could alter
              the reported trade-offs.
            </p>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="system">
            <h2>Research and the Operating System</h2>
            <p>
              This versioned Investment Research paper answers what additional
              decision layers contribute in a fixed historical analysis.
              The separate <Link href="/systems/equity-alpha/">Equity Alpha System</Link>
              {" "}page documents the evolving public model and links to the
              operating dashboard. Research-period performance figures
              should not be substituted for the system&apos;s later observations.
            </p>
            <div className="repro-links">
              <Link className="artifact artifact-primary" href="/systems/equity-alpha/">
                <span className="artifact-kicker">RELATED SYSTEM</span>
                <h3>Global Equity Alpha</h3>
                <p>Current system design, operating evidence, and dashboard access.</p>
                <span className="artifact-action">Explore Equity Alpha System →</span>
              </Link>
              <a
                className="artifact"
                href={item.links.ssrn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="artifact-kicker">VERSIONED RESEARCH PAPER</span>
                <h3>SSRN Record</h3>
                <p>Paper v0.8.2, 13 pages, SSRN Abstract ID 7622538.</p>
                <span className="artifact-action">Open SSRN record ↗</span>
              </a>
            </div>
            <div className="boundary-note">
              <b>Publication and reproducibility:</b> the paper and selected
              derived evidence are made available through the cited SSRN record
              and this research page. Private research inputs, model
              implementations, and proprietary runtime material are not
              presented as a public replication package. No standalone
              replication repository or Zenodo release is claimed.
            </div>
          </section>

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <CitationBox item={item} />
          </section>
        </div>
      </div>
    </main>
  );
}
