import type { Metadata } from "next";
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
            A public research platform focused on systematic investing, asset
            allocation, forecasting, financial data science, and AI/ML.
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
              Clear ownership.
            </h2>
          </div>
          <div className="identity-copy">
            <p>
              SlackQuant Research brings practitioner-oriented investment
              research and academic research into one coherent public research
              platform. Papers, evidence, code, and research tools remain
              connected while keeping their roles distinct.
            </p>
            <div className="person-card">
              <div className="person-kicker">Researcher</div>
              <div className="person-name">
                {site.researcher.name} <span>({site.researcher.nameKo})</span>
              </div>
              <div className="person-role">Research by · SlackQuant Research</div>
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
              Systematic investing, asset allocation, decision architecture,
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
