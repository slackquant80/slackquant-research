import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About SlackQuant Research, its researcher, research streams, operational systems, Quantitative Methods library, and separation between research evidence and live operation.",
  alternates: { canonical: "/about/" },
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
              remain connected, while research evidence and live operation stay as
              separate records.
            </p>

            <div className="person-card">
              <div className="person-kicker">Researcher</div>
              <div className="person-name">
                {site.researcher.name} <span>({site.researcher.nameKo})</span>
              </div>
              <div className="person-role">{site.researcher.headline}</div>

              <p className="body-copy">{site.researcher.bio}</p>

              <div className="card-meta">
                <span>{site.researcher.affiliation}</span>
              </div>

              <div className="actions">
                <a
                  className="btn soft"
                  href={`mailto:${site.researcher.email}`}
                >
                  Email
                </a>
                <a
                  className="btn soft ext"
                  href={site.researcher.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn soft ext"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
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
            <Link
              className="section-link strong-link"
              href="/research/#investment-research-heading"
            >
              Explore Investment Research &#8594;
            </Link>
          </div>
          <div>
            <div className="section-title">&nbsp;</div>
            <h3>Academic Research</h3>
            <p>
              Forecasting, financial data science, AI/ML, empirical methods,
              and related technical research.
            </p>
            <Link
              className="section-link strong-link"
              href="/research/#academic-research-heading"
            >
              Explore Academic Research &#8594;
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-columns">
          <div>
            <div className="section-title">Systems</div>
            <h3>Operational &amp; Decision-Support Systems</h3>
          </div>
          <div>
            <p>
              Public systems are presented as operational tools with clearly
              defined roles and interpretation limits. Supporting research and white
              papers remain separately versioned, so operational releases do not rewrite the
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
            <p>
              General research inquiries:{" "}
              <a className="strong-link" href={`mailto:${site.researcher.email}`}>
                {site.researcher.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
