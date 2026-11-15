import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationBox } from "@/components/CitationBox";
import { MethodsUsed } from "@/components/MethodsUsed";
import { ResearchPaperHero } from "@/components/ResearchPaperHero";
import { getResearch } from "@/data/research";

const evidence = [
  ["1,197 months", "U.S. stock-momentum factor, January 1927–September 2026"],
  ["+0.618%", "Gross monthly average of the U.S. Mom research factor"],
  ["1,191 months", "Independently constructed U.S. industry-ranking history"],
  ["49 months", "Severe U.S. equity-market months in the AQR factor reanalysis"],
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
          <a href="#evidence">Evidence &amp; Provenance</a>
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
              research, independent factor reanalysis, and an author-constructed
              U.S. industry-ranking exercise.
            </p>
            <div className="evidence-note">
              <strong>Research status.</strong>{" "}
              SSRN 7707479 is the paper&apos;s official preprint record.
              The study is presented as a public working paper, not
              as a peer-reviewed journal publication.
            </div>
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
            <h2>Evidence and Provenance</h2>
            <div className="metrics">
              {evidence.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
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
                  stock-momentum factor. Figure 6 constructs monthly top-three
                  minus bottom-three industry ranks from twelve official
                  industry portfolio returns, with a stated illustrative
                  trading-cost assumption.
                </p>
              </div>
              <div className="method-card">
                <div className="num">03 · SOURCE-FACTOR REANALYSIS</div>
                <h3>Multi-Asset Trend Factors</h3>
                <p>
                  Table 3 analyzes the monthly AQR-constructed time-series
                  momentum factors. Conditional stress means and HAC statistics
                  are author calculations; the underlying futures-factor
                  return streams were not independently reconstructed.
                </p>
              </div>
            </div>
            <p className="body-copy">
              Table 4 then organizes investment uses and their relevant tests:
              relative active return, absolute-return growth and drawdowns,
              and incremental improvement to the funded portfolio. The
              full source notes, periods, cost limitations, and sample
              definitions appear in the working paper.
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
              Such a rule also needs a systematic way back into the market.
              Sudden crashes can occur before signals respond; sideways markets
              can produce false exits and transaction costs; recoveries can be
              missed. The practical case rests on the full path an investor can
              sustain, rather than a guarantee of downside protection.
            </p>
          </section>

          <section className="prose-section" id="boundary">
            <h2>Scope and Interpretation</h2>
            <div className="evidence-note">
              Historic research factors are not fully financed, cost-complete
              investment returns. Overlapping rolling windows are not independent
              forward success probabilities. AQR factor reanalysis is distinct
              from constructing raw futures returns, and improved investor
              adherence is a plausible implication rather than an outcome
              directly measured in this study.
            </div>
          </section>

          <MethodsUsed researchSlug={item.slug} />

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p className="body-copy">
              The public replication repository contains author calculations,
              source-vintage manifests, selected figures, and checks. Original
              third-party Kenneth French and AQR data files are not
              redistributed; their identified historical vintages are needed
              to reproduce the frozen calculations.
            </p>
            <div className="repro-links documentation-artifacts">
              <a className="artifact artifact-primary" href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
                <span className="artifact-kicker">SUBMITTED PREPRINT</span>
                <strong>SSRN Submission 7707479</strong>
                <small>Official record; SSRN screening status may change.</small>
                <span className="artifact-action">Open SSRN Record ↗</span>
              </a>
              <a className="artifact" href={item.links.github} target="_blank" rel="noopener noreferrer">
                <span className="artifact-kicker">PUBLIC REPLICATION</span>
                <strong>Research Code and Verification Records</strong>
                <small>Author-created scripts and source-vintage documentation.</small>
                <span className="artifact-action">View GitHub ↗</span>
              </a>
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
