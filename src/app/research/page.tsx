import type { Metadata } from "next";
import Link from "next/link";
import { ResearchCard } from "@/components/ResearchCard";
import { researchItems } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  const investmentResearch = researchItems.filter((item) => item.stream === "investment");
  const academicResearch = researchItems.filter((item) => item.stream === "academic");

  return (
    <main>
      <section className="index-hero">
        <div className="shell">
          <div className="eyebrow">Research</div>
          <h1>A public research portfolio spanning investment research and academic research.</h1>
          <p className="hero-copy">
            Browse public working papers and research releases, with links to
            supporting code, evidence, research tools, and companion quantitative
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
                Practitioner-oriented research on systematic investing, asset
                allocation, robustness, and portfolio decision design.
              </p>
            </div>
            <div className="research-list">
              {investmentResearch.map((item) => (
                <ResearchCard key={item.slug} item={item} />
              ))}
            </div>
          </section>

          <section className="research-stream-group" aria-labelledby="academic-research-heading">
            <div className="research-stream-head">
              <div className="kicker">Research stream 02</div>
              <h2 id="academic-research-heading">Academic Research</h2>
              <p>
                Academic and technical research across macroeconomic forecasting,
                financial data science, AI/ML, and empirical methodology.
              </p>
            </div>
            <div className="research-list">
              {academicResearch.map((item) => (
                <ResearchCard key={item.slug} item={item} />
              ))}
            </div>
          </section>

          <article className="stream" aria-labelledby="quantitative-methods-heading">
            <div className="kicker">Methods library</div>
            <h3 id="quantitative-methods-heading">Quantitative Methods</h3>
            <p>
              Practical explanations of statistical, econometric, portfolio, and
              machine-learning methods used across SlackQuant Research. Each article
              focuses on how a method works, how to implement it, and where it can
              fail, with hands-on examples where useful.
            </p>
            <a className="section-link strong-link" href="/methods/">
              Explore Quantitative Methods &#8594;
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

