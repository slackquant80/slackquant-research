import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CitationBox } from "@/components/CitationBox";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { MethodsUsed } from "@/components/MethodsUsed";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { getResearch } from "@/data/research";

const designFacts = [
  ["112", "Monthly historical signal dates"],
  ["11", "U.S.-listed ETFs in the cross-asset universe"],
  ["Top-4", "Equal-target portfolio decision rule"],
  ["v1.1", "Public replication release"],
] as const;

const evidenceMetrics = [
  ["17.13%", "Selected hybrid CAGR"],
  ["0.987", "Selected hybrid Sharpe ratio"],
  ["58 / 112", "Months with a changed Top-4 vs. incumbent"],
  ["+2.53pp", "Rank vs. standardized integration CAGR difference"],
] as const;

const portfolioRows = [
  ["Incumbent four-model ensemble", "14.92%", "0.891", "Conventional reference"],
  ["Chronos-2 standalone", "15.49%", "0.962", "Higher point-forecast RMSE than the conventional models"],
  ["Three-model + Chronos-2 hybrid", "17.13%", "0.987", "20% historical model-combination contribution"],
] as const;

export const metadata: Metadata = {
  title: "A Second Opinion for the Portfolio",
  description:
    "Historical evidence on how Chronos-2 changes cross-asset Forecast-to-Rank portfolio decisions, forecast integration, and realized portfolio outcomes.",
  alternates: { canonical: "/research/second-opinion-portfolio/" },
};

export default function SecondOpinionPortfolioPage() {
  const item = getResearch("second-opinion-portfolio");
  if (!item) notFound();

  return (
    <main>
      <ResearchPaperHero
        item={item}
        relatedSystem={{ href: "/systems/f2r/", label: "F2R System" }}
      />

      <div className="shell detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#question">Research Question</a>
          <a href="#findings">Key Findings</a>
          <a href="#evidence">Decision Evidence</a>
          <a href="#design">Research Design</a>
          <a href="#boundary">Interpretation Boundary</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#repro">Reproducibility</a>
          <a href="#lineage">Research Lineage</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              Forecasting models are usually compared by prediction error. A portfolio,
              however, holds positions rather than forecasts. This study asks whether a
              new model can improve a cross-asset allocation process even when it does
              not win the average point-forecast error contest.
            </p>
            <p className="body-copy">
              Chronos-2 is introduced into a matched Forecast-to-Rank Allocation (F2R)
              research design. The asset universe, Top-4 portfolio rule, execution
              clock, transaction-cost treatment, and portfolio accounting remain fixed
              while model composition and the forecast-integration interface are
              examined. The emphasis is on changed portfolio decisions and their
              consequences, not forecasting accuracy in isolation.
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
            <h2>Decision Evidence</h2>
            <p className="lede">
              The central result is not that Chronos-2 forecasts better on average. It
              does not. The portfolio evidence instead shows that a different model can
              change the cross-sectional ordering at decision boundaries in ways that
              matter for the realized allocation path.
            </p>

            <div className="metrics">
              {evidenceMetrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>

            <div className="selected-table-block">
              <div className="selected-exhibits-head">
                <div className="section-title">Matched Historical Portfolio Results</div>
                <p>
                  Net historical portfolio evidence under the common F2R portfolio,
                  execution, and cost framework.
                </p>
              </div>
              <div
                className="evidence-table-wrap"
                role="region"
                aria-label="F2R model-adoption historical portfolio comparison"
                tabIndex={0}
              >
                <table className="evidence-table">
                  <thead>
                    <tr>
                      <th>Configuration</th>
                      <th>CAGR</th>
                      <th>Sharpe</th>
                      <th>Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) =>
                          index === 0 ? (
                            <th key={cell} scope="row">{cell}</th>
                          ) : (
                            <td key={`${row[0]}-${index}`}>{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="evidence-table-source">
                Public working paper and replication evidence
              </div>
            </div>

            <div className="evidence-note">
              <strong>Historical research configuration, not a live-production disclosure.</strong>{" "}
              The paper&apos;s 20% Chronos-2 contribution refers to a model-combination
              setting examined in the historical research program. It is not a portfolio
              allocation weight and should not be read as the current protected F2R
              production recipe.
            </div>

            <div className="evidence-note">
              The selected hybrid changes the incumbent Top-4 in 58 of 112 signal
              months. Changed-decision months account for 99.4% of the relative
              log-wealth gap as an accounting transmission diagnostic. That identity is
              useful for locating where portfolio divergence enters, but it is not an
              independent causal estimate of the value of Chronos-2.
            </div>

            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Three paper-aligned figures summarize the forecasting-versus-portfolio
                    distinction, the ensemble ablation, and the changed decisions that
                    account for the relative wealth gap. Click any figure to inspect the
                    full-resolution publication-aligned image.
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
            <p className="body-copy">
              The exercise uses 112 monthly historical signal dates from March 2017
              through June 2026 across 11 U.S.-listed ETFs. Forecasts are translated
              into relative ranks, the Top-4 are selected, and each selected asset
              receives a 25% target weight in the historical research portfolio. The
              reported performance path begins May 1, 2017 and extends through August
              3, 2026 to complete the final holding interval.
            </p>

            <div className="metrics">
              {designFacts.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>

            <p className="body-copy">
              For the matched rank-versus-standardized comparison, the frozen
              forecasts, three conventional models, Chronos-2 contribution, 80/20
              model-combination weights, Top-4 rule, execution clock, and transaction
              costs are held fixed. Only the forecast-integration interface changes.
            </p>
          </section>

          <section className="prose-section" id="boundary">
            <h2>Interpretation Boundary</h2>
            <p className="body-copy">
              This is a retrospective technology counterfactual, not a 2017–2026
              real-time track record. Chronos-2 did not exist throughout the evaluation
              period, its pretraining corpus is not audited here for temporal overlap,
              and the main hybrid was developed within the same historical research
              program rather than on an untouched holdout.
            </p>
            <p className="body-copy">
              The conventional models and Chronos-2 use the same F2R-side price-data
              domain available at each historical signal date and the same portfolio
              implementation framework, but they are not informationally identical:
              Chronos-2 brings prior information from pretraining. The empirical
              contrasts should be read as model-adoption evidence under a controlled
              portfolio interface, not as a causal estimate or a claim of historical
              live deployment.
            </p>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p>
              The public replication package starts from frozen derived research
              evidence. It reproduces the paper-level figures and principal numerical
              checks without rerunning Chronos-2 inference, refitting the conventional
              forecasting models from raw market data, or exposing live F2R production
              configuration.
            </p>
            <div className="repro-links">
              <div className="artifact">
                <div className="type">Public code</div>
                <h3>Replication Repository</h3>
                <p>Paper-level code, frozen derived evidence, and validation checks.</p>
                <a href={item.links.github} target="_blank" rel="noopener noreferrer">
                  Open GitHub &#8599;
                </a>
              </div>

              <div className="artifact">
                <div className="type">Replication</div>
                <h3>GitHub Release v1.1</h3>
                <p>Versioned public release bound to the archived replication record.</p>
                <a href={item.links.replication} target="_blank" rel="noopener noreferrer">
                  Open release &#8599;
                </a>
              </div>

              <div className="artifact">
                <div className="type">Archival record</div>
                <h3>Replication DOI</h3>
                <p>Immutable Zenodo archive for the public replication release.</p>
                <a href={item.links.archivalRelease} target="_blank" rel="noopener noreferrer">
                  10.5281/zenodo.22750810 &#8599;
                </a>
              </div>
            </div>
          </section>

          <section className="prose-section" id="lineage">
            <h2>Research Lineage</h2>
            <p className="body-copy">
              This paper follows an earlier F2R study that asks a different question:
              whether historical-vintage macro information adds decision value beyond
              price information. The present study fixes the portfolio-side price
              information domain and moves the research question to model adoption and
              forecast integration.
            </p>
            <div className="repro-links documentation-artifacts">
              <Link className="artifact" href="/research/price-macro-decision/">
                <span className="artifact-kicker">EARLIER F2R RESEARCH</span>
                <strong>The Decision Value of Price and Macro Information</strong>
                <small>Information-set evidence under matched multi-asset allocation rules.</small>
                <span className="artifact-action">View prior research →</span>
              </Link>
              <Link className="artifact artifact-primary" href="/systems/f2r/">
                <span className="artifact-kicker">RELATED SYSTEM</span>
                <strong>Forecast-to-Rank Allocation (F2R)</strong>
                <small>Current public system design and operating boundary.</small>
                <span className="artifact-action">View F2R System →</span>
              </Link>
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
