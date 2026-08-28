import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="shell">
          <div className="eyebrow">About</div>
          <h1>SlackQuant Research</h1>
          <p className="hero-copy">
            A public platform for systematic investing, asset allocation,
            forecasting, financial data science, AI/ML, quantitative methods, and
            operational portfolio systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell identity-grid">
          <div>
            <div className="section-title">Research identity</div>
            <h2 className="about-title">
              Research first.
              <br />
              Clear roles.
            </h2>
          </div>
          <div className="identity-copy">
            <p>
              SlackQuant Research brings practitioner-oriented investment
              research and academic research into one public platform. Quantitative
              Methods provides reusable explanations of recurring methods, while
              Systems presents operational tools separately from the versioned research
              that supports them. Papers, evidence, code, dashboards, and documentation
              stay connected without collapsing research and live operation into the
              same record.
            </p>
            <div className="person-card">
              <div className="person-kicker">Researcher</div>
              <div className="person-name">
                {site.researcher.name} <span>({site.researcher.nameKo})</span>
              </div>
              <div className="person-role">SlackQuant Research</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-columns">
          <div>
            <div className="section-title">Research scope</div>
            <h3>Investment Research</h3>
            <p>
              Systematic investing, asset allocation, portfolio decision design,
              robustness, and implementation-oriented research.
            </p>
          </div>
          <div>
            <div className="section-title">&nbsp;</div>
            <h3>Academic Research</h3>
            <p>
              Forecasting, financial data science, AI/ML, empirical methods,
              and related technical research.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-columns">
          <div>
            <div className="section-title">Systems</div>
            <h3>Operational Decision Systems</h3>
          </div>
          <div>
            <p>
              Public systems are presented as operational tools with clearly
              defined roles and interpretation limits. Supporting research and white
              papers remain separately versioned, so live updates do not rewrite the
              underlying evidence.
            </p>
            <Link className="section-link strong-link" href="/systems/">
              Explore Systems &#8594;
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-columns">
          <div>
            <div className="section-title">Methods library</div>
            <h3>Quantitative Methods</h3>
          </div>
          <div>
            <p>
              Practical explanations of the quantitative methods that appear
              across the research portfolio, with intuition, formal definitions,
              implementation, reproducible examples, and common failure modes.
            </p>
            <Link className="section-link strong-link" href="/methods/">
              Explore Quantitative Methods &#8594;
            </Link>
          </div>
        </div>
      </section>

      <section className="section boundary-section">
        <div className="shell">
          <div className="section-title">Identity and affiliation</div>
          <div className="boundary-copy">
            <p>
              <strong>SlackQuant Research</strong> is used here as a public
              research identity under the SlackQuant name.
            </p>
            <p>
              Academic and employer affiliations are project-specific and
              follow the corresponding public paper or publication record.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
