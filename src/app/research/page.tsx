import type { Metadata } from "next";
import Link from "next/link";
import { ResearchCard } from "@/components/ResearchCard";
import { researchItems } from "@/data/research";
import { methodsRootHref } from "@/lib/methodsHref";

export const metadata: Metadata = {
  title: "Research",
  description: "Public investment and academic research in systematic investing, economics, forecasting, financial data science, artificial intelligence, and computational methods, with evidence and reproducibility links where available.",
  alternates: { canonical: "/research/" },
};

export default function ResearchPage() {
  const investmentResearch = researchItems.filter((item) => item.stream === "investment").reverse();
  const academicResearch = researchItems.filter((item) => item.stream === "academic");

  return (
    <main>
      <section className="index-hero">
        <div className="shell">
          <div className="eyebrow">Research</div>
          <h1>A public portfolio of investment and academic research.</h1>
          <p className="hero-copy">
            Browse working papers and research releases with direct links to
            supporting evidence, code, research tools, and companion quantitative
            methods where available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <section className="research-stream-group" aria-labelledby="investment-research-heading">
            <div className="research-stream-head">
              <div className="kicker">Research stream 01</div>
              <h2 id="investment-research-heading">Investment Research Series</h2>
              <p>
                Practitioner-oriented research on systematic investing, asset allocation, robustness, and portfolio decision design. Foundation Research develops principles, Empirical Research evaluates investment questions, and Strategy Research develops and tests independent investment strategies.
              </p>
            </div>
            {([
              ["foundation", "Foundation Research", "Principles and persistent properties of investment strategies."],
              ["empirical", "Empirical Research", "Evidence on investment decisions, robustness, and economic trade-offs."],
              ["strategy", "Strategy Research", "Independent investment strategies, their rules, and historical evaluation."],
            ] as const).map(([track, title, description]) => {
              const items = investmentResearch.filter((item) => item.investmentTrack === track);
              if (!items.length) return null;
              return (
                <section className="research-stream-group" key={track} aria-labelledby={`investment-${track}-heading`}>
                  <div className="research-stream-head">
                    <h3 id={`investment-${track}-heading`}>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="research-list">
                    {items.map((item) => <ResearchCard key={item.slug} item={item} />)}
                  </div>
                </section>
              );
            })}
          </section>

          <section className="research-stream-group" aria-labelledby="academic-research-heading">
            <div className="research-stream-head">
              <div className="kicker">Research stream 02</div>
              <h2 id="academic-research-heading">Academic Research</h2>
              <p>
                Academic and technical research across economics, macroeconomic forecasting,
                financial data science, artificial intelligence, and empirical and computational methodology.
              </p>
            </div>
            <div className="research-list">
              {academicResearch.map((item) => (
                <ResearchCard key={item.slug} item={item} />
              ))}
            </div>
          </section>

          <article className="stream quantitative-methods-card" aria-labelledby="quantitative-methods-heading">
            <div className="kicker">Methods library</div>
            <h3 id="quantitative-methods-heading">Quantitative Methods</h3>
            <p>
              Practical explanations of statistical, econometric, portfolio, and
              machine-learning methods used across SlackQuant Research. Each article
              focuses on how a method works, how to implement it, and where it can
              fail, with hands-on examples where useful.
            </p>
            <a className="section-link strong-link" href={methodsRootHref}>
              Explore Quantitative Methods &#8594;
            </a>
          </article>
          <article className="stream quantitative-methods-card" aria-labelledby="quantum-lab-heading">
            <div className="kicker">Computational experiments</div>
            <h3 id="quantum-lab-heading">Quantum Lab</h3>
            <p>
              Reproducible foundations experiments in quantum computing and quantum information,
              with analytic predictions, ideal circuit simulations, and explicit evidence boundaries.
            </p>
            <Link className="section-link strong-link" href="/quantum/">
              Explore Quantum Lab &#8594;
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

