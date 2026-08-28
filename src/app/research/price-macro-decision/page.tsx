import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtifactLink } from "@/components/ArtifactLink";
import { CitationBox } from "@/components/CitationBox";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { MethodsUsed } from "@/components/MethodsUsed";
import { getResearch } from "@/data/research";

const designFacts = [
  ["112", "Monthly out-of-sample allocation decisions"],
  ["11", "U.S.-listed ETFs in the multi-asset universe"],
  ["2017–2026", "Primary out-of-sample decision period"],
  ["v1.1", "Public replication release"],
] as const;

const evidenceMetrics = [
  ["0.71", "Price-only information ratio vs. EW11"],
  ["0.69", "Macro+Price information ratio vs. EW11"],
  ["−0.192", "Conservative-timing ΔSharpe: Macro+Price − Price-only"],
  ["52.7%", "Months with a changed Macro+Price Top-4 under conservative timing"],
] as const;

const ew11Rows = [
  ["Price-only ML", "5.0%", "7.1%", "0.71", "0.821", "−17.7%", "3.06"],
  ["12M momentum", "2.4%", "9.1%", "0.27", "0.750", "−18.4%", "2.18"],
  ["12-1M momentum", "3.1%", "8.3%", "0.37", "0.750", "−19.1%", "2.22"],
  ["6M momentum", "1.7%", "7.9%", "0.21", "0.676", "−22.5%", "2.81"],
  ["Macro+Price ML", "5.4%", "7.9%", "0.69", "0.798", "−25.6%", "3.07"],
  ["Macro-only ML", "2.6%", "7.7%", "0.34", "0.680", "−27.1%", "2.71"],
] as const;

export const metadata: Metadata = {
  title: "The Decision Value of Price and Macro Information",
};

export default function PriceMacroDecisionPage() {
  const item = getResearch("price-macro-decision");
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
              Replication Repository
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
          <a href="#design">Research Design</a>
          <a href="#timing">Information Timing</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#repro">Reproducibility</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              This study asks whether macroeconomic information adds portfolio
              decision value beyond information already contained in market
              prices. The comparison is built around a matched multi-asset
              forecasting, ranking, and Top-4 allocation process rather than
              comparing unrelated strategies.
            </p>
            <p className="body-copy">
              Historical-vintage FRED-MD data are used to evaluate macro
              information under a documented information clock. The paper then
              measures the incremental contribution of Macro+Price relative to
              a price-only process, with benchmark-relative evidence and
              robustness checks designed to separate predictive inputs from
              portfolio mechanics.
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
            <p className="lede">
              The central empirical distinction is between value already present
              in price-based decisions and the incremental value obtained after
              macro information is added to the same decision architecture.
            </p>

            <div className="metrics">
              {evidenceMetrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>

            <div className="evidence-note">
              Under the conservative information-timing specification, the
              Macro+Price minus Price-only Sharpe difference is −0.192 with a
              95% 12-month moving-block bootstrap interval of [−0.659, 0.175].
              The realized Macro+Price Top-4 differs from the primary timing
              design in 52.7% of months, so the timing check materially changes
              decisions without reversing the incremental-macro conclusion.
            </div>

            <div className="selected-table-block">
              <div className="selected-exhibits-head">
                <div className="section-title">Benchmark-Relative Results</div>
                <p>
                  Primary one-month-ahead results relative to the same-universe
                  EW11 benchmark.
                </p>
              </div>
              <div className="evidence-table-wrap" role="region" aria-label="Primary results relative to EW11" tabIndex={0}>
                <table className="evidence-table">
                  <thead>
                    <tr>
                      <th>Strategy</th>
                      <th>Active return</th>
                      <th>TE</th>
                      <th>IR</th>
                      <th>Sharpe</th>
                      <th>Max drawdown</th>
                      <th>Turnover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ew11Rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) =>
                          index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>,
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="evidence-table-source">Public replication · Table 2</div>
            </div>

            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Selected figures summarize price-based active value,
                    incremental macro evidence, and timing robustness.
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
            <h2>Research Design</h2>
            <p>
              The public replication package documents the paper-level evidence
              for the matched price and macro comparison. The primary analysis
              covers monthly out-of-sample allocation decisions from March 2017
              through June 2026 across an 11-ETF U.S.-listed multi-asset
              universe.
            </p>
            <div className="metrics">
              {designFacts.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              Dates, portfolio rules, and release labels shown here correspond to
              the public paper and its replication materials.
            </div>
          </section>

          <section className="prose-section" id="timing">
            <h2>Information Timing</h2>
            <p className="body-copy">
              A monthly FRED-MD vintage label is not treated as proof of exact
              within-month availability. The paper therefore includes a
              prespecified conservative timing check using the prior monthly
              vintage and an older macro reference month, while keeping the
              market-price information clock separate. The incremental-macro
              conclusion is unchanged under that convention.
            </p>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p>
              Public code, the tagged replication release, and the archived
              Zenodo record provide the reproducibility trail for the published
              analysis.
            </p>
            <div className="repro-links">
              <div className="artifact">
                <div className="type">Public code</div>
                <h3>Replication Repository</h3>
                <p>Paper-level code, derived evidence, and reproducibility checks.</p>
                <a href={item.links.github} target="_blank" rel="noopener noreferrer">
                  Open GitHub &#8599;
                </a>
              </div>

              <div className="artifact">
                <div className="type">Replication</div>
                <h3>GitHub Release v1.1</h3>
                <p>Versioned public replication release for the paper.</p>
                <a href={item.links.replication} target="_blank" rel="noopener noreferrer">
                  Open release &#8599;
                </a>
              </div>

              <div className="artifact">
                <div className="type">Archival record</div>
                <h3>Zenodo DOI</h3>
                <p>Persistent archive for the public replication release.</p>
                <a href={item.links.archivalRelease} target="_blank" rel="noopener noreferrer">
                  10.5281/zenodo.22069742 &#8599;
                </a>
              </div>
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
