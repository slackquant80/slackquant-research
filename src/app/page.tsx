import Link from "next/link";
import { researchItems } from "@/data/research";
import { site } from "@/data/site";

export default function HomePage() {
  const investmentFeatured =
    researchItems.find(
      (item) => item.stream === "investment" && item.featured,
    ) ?? researchItems[0];
  const academicFeatured =
    researchItems.find((item) => item.stream === "academic") ?? researchItems[0];

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Research platform</div>
          <h1>Systematic investing, forecasting, and financial data science.</h1>
          <p className="hero-copy">
            Investment and academic research across systematic investing, asset
            allocation, forecasting, financial data science, and AI/ML &#8212; with direct paths to papers, evidence, code, and tools.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/research/">
              Explore Research
            </Link>
            <a className="btn soft ext" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Featured Research</div>
            <Link className="section-link" href="/research/">
              View all research &#8594;
            </Link>
          </div>

          <div className="featured-stack">
            <article className="feature-card">
              <div className="feature-copy">
                <div className="kicker">{investmentFeatured.streamLabel}</div>
                <h2 className="feature-title">{investmentFeatured.title}</h2>
                <p className="feature-text">{investmentFeatured.shortSummary}</p>
                <div className="actions">
                  <Link
                    className="btn primary"
                    href={`/research/${investmentFeatured.slug}/`}
                  >
                    View Research
                  </Link>
                </div>
              </div>
              <aside className="feature-side">
                <div>
                  <div className="side-label">{investmentFeatured.status}</div>
                  <div className="side-number">{investmentFeatured.publicVersion}</div>
                  <div className="side-note">
                    Latest public version · {investmentFeatured.dateLabel}
                  </div>
                </div>
                <div>
                  <div className="side-label">Research focus</div>
                  <div className="side-note">
                    Decision diversification in dynamic asset allocation.
                  </div>
                </div>
              </aside>
            </article>

            <article className="feature-card">
              <div className="feature-copy">
                <div className="kicker">{academicFeatured.streamLabel}</div>
                <h2 className="feature-title">{academicFeatured.title}</h2>
                <p className="feature-text">{academicFeatured.shortSummary}</p>
                <div className="actions">
                  <Link
                    className="btn primary"
                    href={`/research/${academicFeatured.slug}/`}
                  >
                    View Research
                  </Link>
                </div>
              </div>
              <aside className="feature-side">
                <div>
                  <div className="side-label">{academicFeatured.status}</div>
                  <div className="side-number">{academicFeatured.publicVersion}</div>
                  <div className="side-note">
                    Latest public version · {academicFeatured.dateLabel}
                  </div>
                </div>
                <div>
                  <div className="side-label">Research focus</div>
                  <div className="side-note">
                    Forecast accuracy, model uncertainty, and temporal durability.
                  </div>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Research Streams</div>
          </div>
          <div className="grid-2">
            <article className="stream">
              <div className="kicker">01</div>
              <h3>Investment Research Series</h3>
              <p>
                Practitioner-oriented research on systematic investing, asset
                allocation, decision architecture, robustness, and
                implementation.
              </p>
              <Link className="section-link" href="/research/#investment-research-heading">
                Explore Investment Research &#8594;              </Link>
            </article>
            <article className="stream">
              <div className="kicker">02</div>
              <h3>Academic Research</h3>
              <p>
                Academic and technical research across forecasting, financial
                data science, AI/ML, and empirical methodology.
              </p>
              <Link className="section-link" href="/research/#academic-research-heading">
                Explore Academic Research &#8594;              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Latest Public Research</div>
          </div>
          <div className="release-list">
            {[...researchItems].reverse().map((item) => (
              <Link
                className="release release-link"
                href={`/research/${item.slug}/`}
                key={item.slug}
              >
                <div className="date">{item.dateLabel}</div>
                <div>
                  <strong>{item.title}</strong>
                  <br />
                  <span className="meta">
                    {item.status}
                    {item.ssrnId ? ` · SSRN ${item.ssrnId}` : ""}
                  </span>
                </div>
                <div className="meta">{item.streamLabel}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-grid">
          <div>
            <div className="section-title identity-label">About</div>
            <h2>
              One research identity.
              <br />
              Distinct research purposes.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              SlackQuant Research brings practitioner-oriented investment
              research and academic research into one coherent public research
              platform.
            </p>
            <div className="researcher-line">
              <span className="researcher-prefix">Research by</span>
              <strong>{site.researcher.displayName}</strong>
            </div>
            <Link className="section-link about-link" href="/about/">
              About SlackQuant Research &#8594;            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
