import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtifactLink } from "@/components/ArtifactLink";
import { CitationBox } from "@/components/CitationBox";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { MethodsUsed } from "@/components/MethodsUsed";
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
          <div className="paper-track-row">
            <div className="eyebrow">{item.streamLabel}</div>
            {item.investmentTrackLabel ? (
              <span className="track-chip">{item.investmentTrackLabel}</span>
            ) : null}
          </div>
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
          <a href="#timing">Timing Asymmetry</a>
          <a href="#design">Evaluation Design</a>
          <a href="#portfolio">Portfolio Design</a>
          <a href="#robustness">Robustness</a>
          <a href="#scope">Scope &amp; Interpretation</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#repro">Reproducibility</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              A defensive strategy can meet its downside objective and still
              spend years lagging equity. The analysis evaluates those two
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
              Four statistics summarize the central 20-year results in the
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
                    Four selected working-paper figures capture the core
                    protection, path-burden, representative-path, and
                    persistent-equity results. Click any figure to inspect the
                    full-resolution public image.
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

          <section className="prose-section" id="timing">
            <h2>Timing Asymmetry</h2>
            <p className="lede">
              Protection can arrive in concentrated stress episodes while
              benchmark-relative opportunity cost accumulates across much
              longer intervals.
            </p>
            <div className="tradeoff-grid">
              <div className="tradeoff-card">
                <div className="kicker">Illustrative 20-year path</div>
                <div className="tradeoff-value">27.1 pp</div>
                <p>
                  June 2005–May 2025: the trend rule reduces maximum drawdown
                  by 27.1 percentage points, yet ends at 70.4% of equity&apos;s
                  terminal wealth and spends 195 months below a prior
                  benchmark-relative high-water mark.
                </p>
              </div>
              <div className="tradeoff-card">
                <div className="kicker">Concentrated defensive gains</div>
                <div className="tradeoff-value">36.2%</div>
                <p>
                  The 20 largest months of qualifying defensive outperformance
                  account for 36.2% of total positive monthly active log
                  returns after the signal becomes available; the fixed 50/50
                  allocation accounts for 19.6%.
                </p>
              </div>
            </div>
            <p className="body-copy">
              The trend rule records 112 qualifying months under the paper&apos;s
              fixed criterion, with a median gap of two months. These counts
              are descriptive because adjacent crisis months can belong to the
              same market episode.
            </p>
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
                  The analysis characterizes historical trade-offs rather than
                  estimating an optimal tactical allocation.
                </p>
              </div>
            </div>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p>
              The public replication repository reproduces the long-history
              analysis, fixed blends, trading-cost sensitivity, independent
              reconstruction, and all five working-paper figures. Raw
              third-party source files are not redistributed.
            </p>

            <div className="repro-links">
              {item.links.github ? (
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
                    Open GitHub &#8599;
                  </a>
                </div>
              ) : null}

              {item.links.replication ? (
                <div className="artifact">
                  <div className="type">Replication</div>
                  <h3>Replication Package</h3>
                  <p>
                    Latest tagged public package: v1.1.1. The repository is
                    synchronized to the final public SSRN paper.
                  </p>
                  <a
                    href={item.links.replication}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open release &#8599;
                  </a>
                </div>
              ) : null}

              {item.links.archivalRelease ? (
                <div className="artifact">
                  <div className="type">Archival record</div>
                  <h3>Release / DOI</h3>
                  <p>Archived public replication release with persistent DOI.</p>
                  <a
                    href={item.links.archivalRelease}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open DOI &#8599;
                  </a>
                </div>
              ) : null}
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
