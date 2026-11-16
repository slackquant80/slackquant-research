import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationBox } from "@/components/CitationBox";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { MethodsUsed } from "@/components/MethodsUsed";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { getResearch } from "@/data/research";

const evidence = [
  ["1,197 months", "U.S. stock-momentum factor, January 1927–September 2026"],
  ["+0.618%", "Gross monthly average of the U.S. Mom research factor"],
  ["1,191 months", "Independently constructed U.S. industry-ranking history"],
  ["−44.50%", "Historical MDD of the 1927–2026 absolute-momentum long-only market/bills rule, versus −83.65% for buy and hold"],
] as const;

export const metadata: Metadata = {
  title: "Momentum as a Market Regularity",
  description:
    "Foundation research on long-run momentum, cross-sectional versus own-trend signals, crisis limitations, and systematic portfolio risk management.",
  alternates: { canonical: "/research/momentum-market-regularity/" },
};

export default function MomentumMarketRegularityPage() {
  const item = getResearch("momentum-market-regularity");
  if (!item) notFound();

  return (
    <main>
      <ResearchPaperHero item={item} />
      <div className="shell detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#question">Research Question</a>
          <a href="#findings">Key Findings</a>
          <a href="#evidence">Selected Evidence</a>
          <a href="#design">Research Design</a>
          <a href="#risk">Long-Term Risk Discipline</a>
          <a href="#boundary">Interpretation Boundary</a>
          <a href="#methods">Quantitative Methods</a>
          <a href="#repro">Reproducibility</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              The future market path is difficult to know. A positive long-run
              equity premium does not prevent prolonged losses or extended
              stagnation. Momentum offers both a recurring pattern to study and
              a possible discipline for adjusting risk exposure as conditions change.
            </p>
            <p className="body-copy">
              Momentum is not one trade. Relative momentum ranks securities or
              markets against peers; time-series or absolute momentum evaluates a
              market&apos;s own history and can govern directional participation.
              A funded trend allocation can also change the risk of a broader
              portfolio. The paper examines these distinctions using historical
              studies, an analysis of published trend factors, and an
              independently constructed U.S. industry-ranking strategy, and an original 1927–2026 long-only market-to-Treasury-bills experiment.
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
                <div className="finding" key={finding}>{finding}</div>
              ))}
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <h2>Selected Evidence</h2>
            <div className="metrics">
              {evidence.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Four author-generated figures from the latest author-reviewed working paper
                    show stock momentum, rolling persistence, independent industry
                    rankings, and century-scale absolute-momentum wealth and
                    underwater drawdown paths. View the scientific charts at full resolution.
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
            <div className="method-grid">
              <div className="method-card">
                <div className="num">01 · PUBLISHED RECONSTRUCTIONS</div>
                <h3>Historic and Cross-Market Evidence</h3>
                <p>
                  Figures 1–3 and Table 2 replot or summarize findings from
                  Moskowitz, Ooi and Pedersen; Daniel and Moskowitz; and Hurst,
                  Ooi and Pedersen. They are attributed published results,
                  not a new historical-futures backtest.
                </p>
              </div>
              <div className="method-card">
                <div className="num">02 · ORIGINAL DIAGNOSTICS</div>
                <h3>U.S. Equity and Industry Momentum</h3>
                <p>
                  Figures 4–5 recompute statistics from the official French
                  stock-momentum factor. Figure 6 ranks twelve industry portfolios using trailing returns,
                  then compares the subsequent returns of the top three and
                  bottom three. An illustrative trading-cost assumption is
                  reported separately from other financing costs.
                </p>
              </div>
              <div className="method-card">
                <div className="num">03 · MULTI-ASSET FACTOR ANALYSIS</div>
                <h3>Multi-Asset Trend Factors</h3>
                <p>
                  Table 3 analyzes the monthly AQR-constructed time-series
                  momentum factors. Conditional stress means and HAC statistics
                  are author calculations; the underlying futures-factor
                  return streams were not independently reconstructed.
                </p>
              </div>
              <div className="method-card">
                <div className="num">04 · SOURCE-REPLAYED LONG-ONLY TEST</div>
                <h3>Absolute Momentum and Risk-Off</h3>
                <p>
                  Table 5 and Figure 7 directly test a fixed twelve-month
                  market-return sign on the historical U.S. research market,
                  switching to one-month Treasury bills after negative trends.
                  The 1927–2026 results include actual monthly cash rates,
                  an illustrative turnover charge, static exposure controls,
                  and adverse rebound periods. This is not an ETF execution record.
                </p>
              </div>
            </div>
            <p className="body-copy">
              Table 4 organizes investment uses and their relevant tests:
              relative active return, absolute-return growth and drawdowns,
              and incremental improvement to the funded portfolio. Table 5 and Figure 7 additionally test the dynamic risk-off mechanism against
              passive and exposure-matched cash allocations. The full source notes,
              sample clocks, cost limitations, and adverse regimes appear in the paper.
            </p>
          </section>

          <section className="prose-section" id="risk">
            <h2>Long-Term Risk Discipline</h2>
            <p className="lede">
              A precommitted trend rule can reduce risk exposure as an adverse
              move persists, without requiring a forecast of the crisis&apos;s
              beginning or duration.
            </p>
            <p className="body-copy">
              In the source-replayed July 1927–September 2026 market/bills
              simulation, the twelve-month own-trend rule compounded at 10.22%
              annually, close to the market&apos;s 10.26%, while reducing the
              historical maximum drawdown from −83.65% to −44.50%. The longest
              underwater spell fell from 184 to 95 months. The outcome is
              economically substantial, including compared with a static
              portfolio with the same 75.6% average equity weight.
            </p>
            <p className="body-copy">
              This protection is conditional. Since 2010, the exposure-matched
              static mix had a better CAGR and smaller MDD; the timing rule
              lagged the fast 2020 rebound. Signals cannot prevent losses
              before they change, and the historical dataset cannot measure
              investor adherence or prove execution at a real ETF market close.
            </p>
          </section>

          <section className="prose-section" id="boundary">
            <h2>Scope and Interpretation</h2>
            <div className="evidence-note">
              Historical research factors are not funded portfolio returns
              after all trading and financing costs. The new absolute-momentum
              test uses the CRSP-based research market and monthly Treasury-bill
              returns, not actual historical ETF trades. Its 10bp one-way
              turnover cost is illustrative, and a month-end signal does not
              prove executable next-session pricing. Overlapping rolling windows
              are not independent success probabilities. AQR futures-factor
              reanalysis is a different strategy; investor adherence remains
              an interpretation, not a measured outcome.
            </div>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p className="body-copy">
              The public replication repository contains author calculations,
              data-release information, selected figures, and supporting checks. Original
              third-party Kenneth French and AQR data files are not
              redistributed; their identified historical vintages are needed
              to reproduce the reported calculations.
            </p>
            <div className="repro-links">
              <div className="artifact">
                <div className="type">Public code</div>
                <h3>Replication Code v1.0.2</h3>
                <p>Original source-verified century market/bills code and Figure 7, alongside previously released factor analyses and corrected Figure 6.</p>
                <a href="https://github.com/slackquant80/momentum-market-regularity-replication/releases/tag/v1.0.2" target="_blank" rel="noopener noreferrer">
                  Open GitHub Release &#8599;
                </a>
              </div>
              <div className="artifact">
                <div className="type">Archival record</div>
                <h3>Previous Software Archive v1.0.0</h3>
                <p>
                  Zenodo v1.0.0 is preserved under its original DOI. The newly
                  released GitHub versions v1.0.1 and v1.0.2 have separately
                  unverified Zenodo version DOIs; the archival link here remains
                  the preserved v1.0.0 deposit, not a claim about newer software.
                </p>
                <a href={item.links.archivalRelease} target="_blank" rel="noopener noreferrer">
                  Open Zenodo Archive &#8599;
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
