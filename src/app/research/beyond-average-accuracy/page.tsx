import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtifactLink } from "@/components/ArtifactLink";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { getResearch } from "@/data/research";

const metrics = [
  ["0.821", "XGBoost mean relative RMSE across 16 target-horizon combinations"],
  ["0 / 176", "Holm-adjusted squared-error DM rejections in favor of alternatives"],
  ["25 / 32", "MCS panels retaining all 12 approaches"],
  ["29.1%", "Mean switch rate of the 12-month rolling RMSE winner set"],
] as const;

export const metadata: Metadata = {
  title: "Beyond Average Accuracy",
};

export default function BeyondAverageAccuracyPage() {
  const item = getResearch("beyond-average-accuracy");
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
            <ArtifactLink href={item.links.researchDashboard} external>
              Interactive Dashboard
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
          <a href="#design">Forecasting Design</a>
          <a href="#inference">Inference &amp; Uncertainty</a>
          <a href="#temporal">Temporal Durability</a>
          <a href="#scope">Scope &amp; Limitations</a>
          <a href="#repro">Reproducibility</a>
          <a href="#dashboard">Research Dashboard</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              A model can post the lowest average forecast error without
              establishing a statistically distinguishable or persistent
              advantage. The analysis evaluates those properties separately in a
              common data-rich macroeconomic forecasting experiment.
            </p>
            <p className="body-copy">
              The analysis uses the June 2026 FRED-MD vintage and evaluates
              twelve forecasting approaches across CPI inflation, PCE
              inflation, industrial production growth, and the monthly change
              in the unemployment rate at 1-, 3-, 6-, and 12-month horizons.
              The central question is not only which model ranks first on
              average, but how much confidence can be placed in that ranking.
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
              Four headline statistics summarize the gap between numerical
              ranking, formal inference, and temporal stability in the reported
              pseudo-out-of-sample exercise.
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
              Under the squared-loss concentration diagnostic, the twelve most
              favorable monthly loss reductions account for 85.6% of gross
              improvement on average, while the twelve most unfavorable monthly
              loss increases account for 89.1% of gross deterioration relative
              to the persistence benchmark.
            </div>

            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Three paper-aligned exhibits summarize average-accuracy
                    ranking, the gap between numerical rank and MCS survival,
                    and the temporal concentration of measured gains and losses.
                    Click any figure to inspect the full-resolution image.
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
            <h2>Forecasting Design</h2>
            <div className="method-grid">
              <div className="method-card">
                <div className="num">01 · DATA</div>
                <h3>Common FRED-MD information set</h3>
                <p>
                  Four U.S. monthly targets are evaluated with the June 2026
                  FRED-MD vintage under common predictor screening, lagging, and
                  missing-data rules.
                </p>
              </div>
              <div className="method-card">
                <div className="num">02 · WINDOWS</div>
                <h3>Fixed-length rolling estimation</h3>
                <p>
                  Direct forecasts use 360-month rolling estimation windows and
                  up to 90 target months from December 2018 through May 2026,
                  before target-specific exclusions.
                </p>
              </div>
              <div className="method-card">
                <div className="num">03 · MODELS</div>
                <h3>Twelve forecasting approaches</h3>
                <p>
                  Nine individual models span persistence, autoregression,
                  regularized linear models, PCA factors, and tree learners;
                  mean, median, and inverse-RMSE combinations are added.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="inference">
            <h2>Inference &amp; Model Uncertainty</h2>
            <p className="lede">
              Numerical leadership is much stronger than the evidence of
              statistical separation.
            </p>
            <div className="tradeoff-grid">
              <div className="tradeoff-card">
                <div className="kicker">Average accuracy</div>
                <div className="tradeoff-value">17.9%</div>
                <p>
                  XGBoost&apos;s average relative RMSE of 0.821 corresponds to a
                  17.9% average reduction relative to the persistence benchmark
                  across the sixteen target-horizon combinations.
                </p>
              </div>
              <div className="tradeoff-card">
                <div className="kicker">Formal separation</div>
                <div className="tradeoff-value">0</div>
                <p>
                  None of the 176 squared-error Diebold-Mariano comparisons is
                  significant in favor of an alternative after Holm adjustment.
                  Five absolute-error comparisons reject, all at one-month
                  industrial production.
                </p>
              </div>
            </div>
            <p className="body-copy">
              The 90% Model Confidence Set points in the same direction from a
              multi-model perspective: all twelve approaches survive in 25 of
              32 panels, and no panel retains fewer than ten. Survival does not
              prove equal accuracy; it indicates that the available loss data
              provide limited evidence for eliminating most candidates.
            </p>
          </section>

          <section className="prose-section" id="temporal">
            <h2>Temporal Durability</h2>
            <p className="lede">
              The identity of the leading approach changes over time, and a
              small number of difficult months account for much of the measured
              advantage and deterioration.
            </p>
            <div className="robustness-grid">
              <article className="robustness-card">
                <div className="kicker">Rolling rankings</div>
                <h3>Winner sets are unstable</h3>
                <p>
                  In 12-month rolling evaluations, winner-set switch rates range
                  from 17.9% to 38.5% across target-horizon combinations, with a
                  mean switch rate of 29.1%.
                </p>
              </article>
              <article className="robustness-card">
                <div className="kicker">Benchmark-error sensitivity</div>
                <h3>Average gains depend on influential dates</h3>
                <p>
                  Removing only the largest persistence-benchmark squared-error
                  date within each target-horizon combination raises the best
                  average relative RMSE from 0.821 to 0.916. After twelve such
                  exclusions, the persistence benchmark leads on average.
                </p>
              </article>
            </div>
          </section>

          <section className="prose-section" id="scope">
            <h2>Scope &amp; Limitations</h2>
            <div className="scope-grid">
              <div className="scope-item">
                <strong>Current-vintage pseudo-out-of-sample design</strong>
                <p>
                  Historical values come from one revised June 2026 FRED-MD
                  vintage. The exercise does not reconstruct real-time data
                  vintages, release lags, or historical revisions.
                </p>
              </div>
              <div className="scope-item">
                <strong>Short, shock-heavy evaluation period</strong>
                <p>
                  The primary evaluation contains at most 90 target months and
                  includes the COVID-19 collapse and reopening, limiting power
                  and the number of distinct macroeconomic environments.
                </p>
              </div>
              <div className="scope-item">
                <strong>Fixed comparison universe</strong>
                <p>
                  The conclusions apply to the stated linear, factor,
                  tree-based, and combination methods. Neural networks and
                  time-series foundation models are outside this model set.
                </p>
              </div>
              <div className="scope-item">
                <strong>Diagnostic, not universal, instability claims</strong>
                <p>
                  Rolling winner-set turnover and loss concentration are
                  descriptive diagnostics. They complement formal inference but
                  do not by themselves establish a general instability regime.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p>
              The public replication repository contains forecasting and
              statistical-analysis code, frozen outputs, paper table and figure
              data exports, the locked R environment, data-acquisition guidance,
              and release validation tools. The source FRED-MD CSV is not
              redistributed.
            </p>

            <div className="repro-links">
              <div className="artifact">
                <div className="type">Public code</div>
                <h3>Replication Repository</h3>
                <p>
                  Research code, reproducibility documentation, frozen outputs,
                  and paper exports.
                </p>
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open GitHub &#8599;
                </a>
              </div>

              <div className="artifact">
                <div className="type">Replication release</div>
                <h3>Version 1.0.0</h3>
                <p>
                  Frozen public software and replication snapshot for the
                  reported research design and outputs.
                </p>
                <a
                  href={item.links.replication}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open release &#8599;
                </a>
              </div>

              <div className="artifact">
                <div className="type">Archival record</div>
                <h3>Zenodo Version DOI</h3>
                <p>
                  Persistent archival record for the versioned replication
                  release.
                </p>
                <a
                  href={item.links.archivalRelease}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open DOI &#8599;
                </a>
              </div>
            </div>
          </section>

          <section className="prose-section" id="dashboard">
            <h2>Research Dashboard</h2>
            <p>
              The interactive forecasting dashboard provides a reader-facing
              interface to explore model performance and related forecasting
              evidence. It is a research companion to the versioned paper and
              replication materials, not a substitute for the paper&apos;s fixed
              empirical record.
            </p>
            <div className="actions">
              <ArtifactLink href={item.links.researchDashboard} primary external>
                Open Interactive Dashboard
              </ArtifactLink>
            </div>
          </section>

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <div className="citation-box">
              Lee, S. (2026). {item.title}: {item.subtitle}. SSRN Working Paper
              {" "}{item.ssrnId}. DOI: 10.2139/ssrn.7164118.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
