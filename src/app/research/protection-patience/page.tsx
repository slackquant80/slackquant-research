import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtifactLink } from "@/components/ArtifactLink";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { getResearch } from "@/data/research";

const metrics = [
  ["98.2%", "20-year periods in which the trend rule reduces maximum drawdown vs. equity"],
  ["60.3%", "Protected 20-year periods ending below equity"],
  ["44.4%", "Median benchmark-relative drawdown depth among protected 20-year periods"],
  ["195 mo", "Median longest benchmark-relative underwater spell among protected 20-year periods"],
] as const;

export const metadata: Metadata = {
  title: "When Protection Works but the Portfolio Still Lags",
};

export default function ProtectionPatiencePage() {
  const item = getResearch("protection-patience");
  if (!item) notFound();

  return (
    <main>
      <section className="paper-hero">
        <div className="shell">
          <div className="eyebrow">{item.streamLabel}</div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta">
            <span>{item.authorLine}</span>
            {item.affiliation ? <span>{item.affiliation}</span> : null}
            <span>{item.status}</span>
            {item.ssrnId ? <span>SSRN {item.ssrnId}</span> : null}
            <span>{item.dateLabel}</span>
          </div>
          <div className="actions">
            <ArtifactLink href={item.links.ssrn} primary external>
              Open SSRN Record
            </ArtifactLink>
            <ArtifactLink href={item.links.github} external>
              Replication GitHub
            </ArtifactLink>
          </div>
        </div>
      </section>

      <div className="shell detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#question">Research Question</a>
          <a href="#findings">Key Findings</a>
          <a href="#evidence">Selected Evidence</a>
          <a href="#design">Evaluation Design</a>
          <a href="#portfolio">Portfolio Design</a>
          <a href="#robustness">Robustness</a>
          <a href="#scope">Scope &amp; Interpretation</a>
          <a href="#repro">Reproducibility</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              A defensive strategy can meet its downside objective and still
              spend years lagging equity. This paper evaluates those two
              outcomes separately rather than treating benchmark
              outperformance as evidence that downside protection succeeded.
            </p>
            <p className="body-copy">
              The long-history analysis compares equity buy-and-hold, a
              monthly rebalanced 50/50 equity-cash allocation, and a fixed
              12-month defensive trend rule. Rolling 5-, 10-, 15-, and
              20-year holding periods are used to study both drawdown
              protection in the strategy&apos;s own wealth path and the
              benchmark-relative path experienced while obtaining it.
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
            <h2>Selected Evidence</h2>
            <p>
              Four statistics summarize the central 20-year result in the
              July 1927–June 2026 Kenneth R. French Data Library sample.
            </p>

            <div className="metrics">
              {metrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>

            <div className="evidence-note">
              Drawdown protection and benchmark-relative performance answer
              different questions. Relative drawdown depth is not a portfolio
              loss; it is a decline from a prior high-water mark in the
              strategy-to-equity wealth ratio.
            </div>

            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Three working-paper figures capture the core protection,
                    path-burden, and persistent-equity results. Click any
                    figure to inspect the full-resolution public image.
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

          <section className="prose-section" id="design">
            <h2>Evaluation Design</h2>
            <div className="method-grid">
              <div className="method-card">
                <div className="num">01 · PROTECTION</div>
                <h3>Own-path drawdown</h3>
                <p>
                  Measure whether the defensive allocation reduces maximum
                  drawdown relative to equity within the same holding period.
                </p>
              </div>
              <div className="method-card">
                <div className="num">02 · ENDPOINT</div>
                <h3>Terminal benchmark outcome</h3>
                <p>
                  Record whether terminal wealth finishes above or below
                  equity buy-and-hold.
                </p>
              </div>
              <div className="method-card">
                <div className="num">03 · PATH</div>
                <h3>Relative depth and duration</h3>
                <p>
                  Measure benchmark-relative drawdown depth and the longest
                  spell below a prior relative high-water mark separately.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="portfolio">
            <h2>Portfolio Design</h2>
            <p className="lede">
              Persistent equity exposure changes the severity of the
              benchmark-relative shortfall more than its duration.
            </p>
            <div className="tradeoff-grid">
              <div className="tradeoff-card">
                <div className="kicker">Pure tactical</div>
                <div className="tradeoff-value">44.4%</div>
                <p>
                  Median benchmark-relative drawdown depth across all 20-year
                  periods. The corresponding median longest underwater spell
                  is 196 months.
                </p>
              </div>
              <div className="tradeoff-card">
                <div className="kicker">25% tactical / 75% equity</div>
                <div className="tradeoff-value">12.9%</div>
                <p>
                  Median relative drawdown depth across all 20-year periods,
                  while the median longest underwater duration remains about
                  190 months.
                </p>
              </div>
            </div>
            <p className="body-copy">
              The fixed blends are descriptive portfolio-design comparisons,
              not estimated optimal allocations. Their role is to show how
              benchmark-relative depth and duration move as persistent equity
              exposure increases.
            </p>
          </section>

          <section className="prose-section" id="robustness">
            <h2>Robustness</h2>
            <div className="robustness-grid">
              <article className="robustness-card">
                <div className="kicker">Independent reconstruction</div>
                <h3>Shiller / FRED</h3>
                <p>
                  The qualitative depth-versus-duration pattern remains visible
                  in an independently reconstructed historical series over the
                  matched February 1935–June 2023 sample, although the
                  magnitudes differ from the Kenneth R. French Data Library results.
                </p>
              </article>
              <article className="robustness-card">
                <div className="kicker">Trading costs</div>
                <h3>0–50 bps one-way</h3>
                <p>
                  Fixed turnover costs worsen benchmark-relative performance
                  but do not remove the coexistence of realized downside
                  protection and prolonged relative shortfall.
                </p>
              </article>
            </div>
          </section>


          <section className="prose-section" id="scope">
            <h2>Scope &amp; Interpretation</h2>
            <div className="scope-grid">
              <div className="scope-item">
                <strong>U.S. historical evidence</strong>
                <p>
                  The long-history results describe U.S. return paths and do
                  not establish that the same magnitudes hold across other
                  markets, asset classes, or future regimes.
                </p>
              </div>
              <div className="scope-item">
                <strong>Overlapping holding periods</strong>
                <p>
                  Rolling periods overlap and are strongly dependent. Reported
                  frequencies summarize the historical sample; they are not
                  probabilities estimated from independent trials.
                </p>
              </div>
              <div className="scope-item">
                <strong>Investor tolerance is not estimated</strong>
                <p>
                  Return histories do not identify an investor&apos;s actual
                  abandonment threshold. Benchmark-relative tolerance remains
                  an implementation constraint rather than an estimated
                  behavioral parameter.
                </p>
              </div>
              <div className="scope-item">
                <strong>Empirical, not optimization, evidence</strong>
                <p>
                  The timing rule and blend weights are fixed design choices.
                  The study characterizes historical trade-offs rather than
                  estimating an optimal tactical allocation.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p>
              The public replication repository reproduces the long-history
              analysis, fixed blends, trading-cost sensitivity, independent
              reconstruction, and all four working-paper figures. Raw
              third-party source files are not redistributed.
            </p>

            <div className="repro-links">
              <div className="artifact">
                <div className="type">Public code</div>
                <h3>Replication Repository</h3>
                <p>
                  Python pipeline, tests, reference hashes, generated results,
                  and manuscript figures.
                </p>
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open GitHub ↗
                </a>
              </div>
              <div className="artifact">
                <div className="type">Replication state</div>
                <h3>Version 1.0.0</h3>
                <p>
                  Public citation metadata records the replication-material
                  release as version 1.0.0, released in August 2026.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <div className="citation-box">
              Lee, S. (2026). {item.title}: {item.subtitle}. Public Working
              Paper. SSRN {item.ssrnId}.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
