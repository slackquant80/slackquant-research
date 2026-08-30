import Link from "next/link";
import { researchItems } from "@/data/research";
import { quantitativeMethods } from "@/data/methods";
import { site } from "@/data/site";
import { systemItems } from "@/data/systems";
import { methodsRootHref } from "@/lib/methodsHref";

export default function HomePage() {
  const investmentFeatured =
    researchItems.find(
      (item) => item.stream === "investment" && item.featured,
    ) ?? researchItems[0];
  const academicFeatured =
    researchItems.find((item) => item.stream === "academic") ?? researchItems[0];
  const featuredSystem =
    systemItems.find((item) => item.prominence === "flagship") ?? systemItems[0];
  const supportingSystems = systemItems.filter(
    (item) => item.slug !== featuredSystem?.slug,
  );
  const publicRepositoryCount = new Set(
    [
      ...researchItems.map((item) => item.links.github),
      ...systemItems.map((item) => item.links.deploymentRepository),
    ].filter((href): href is string => Boolean(href)),
  ).size;

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Research platform</div>
          <h1>Systematic investing, forecasting, and financial data science.</h1>
          <p className="hero-copy">
            Investment and academic research, operational systems, and quantitative
            methods across systematic investing, asset allocation, forecasting,
            financial data science, and AI/ML. Each project links directly to its
            papers, evidence, code, tools, and live interfaces.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/research/">
              Explore Research
            </Link>
            <Link className="btn soft" href="/systems/">
              Explore Systems
            </Link>
            <a className="btn soft" href={methodsRootHref}>
              Quantitative Methods
            </a>
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
                  <Link className="btn primary" href={`/research/${investmentFeatured.slug}/`}>
                    View Research
                  </Link>
                </div>
              </div>
              <aside className="feature-side">
                <div>
                  <div className="side-label">{investmentFeatured.status}</div>
                  <div className="side-number">{investmentFeatured.publicVersion}</div>
                  <div className="side-note">
                    Latest public version &middot; {investmentFeatured.dateLabel}
                  </div>
                </div>
                <div>
                  <div className="side-label">Research focus</div>
                  <div className="side-note">
                    Decision diversification as a complement to performance and risk evaluation.
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
                  <Link className="btn primary" href={`/research/${academicFeatured.slug}/`}>
                    View Research
                  </Link>
                </div>
              </div>
              <aside className="feature-side">
                <div>
                  <div className="side-label">{academicFeatured.status}</div>
                  <div className="side-number">{academicFeatured.publicVersion}</div>
                  <div className="side-note">
                    Latest public version &middot; {academicFeatured.dateLabel}
                  </div>
                </div>
                <div>
                  <div className="side-label">Research focus</div>
                  <div className="side-note">
                    Average forecast accuracy, statistical distinguishability, and temporal concentration.
                  </div>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-systems-section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Featured System</div>
            <Link className="section-link" href="/systems/">
              Explore all systems &#8594;
            </Link>
          </div>

          {featuredSystem ? (
            <>
              <article className="home-system-feature">
                <div className="home-system-feature-copy">
                  <div className="kicker">Operating layer · Flagship</div>
                  <h2>{featuredSystem.title}</h2>
                  <div className="home-system-feature-subtitle">{featuredSystem.subtitle}</div>
                  <p>{featuredSystem.shortSummary}</p>
                  <div className="actions">
                    <Link className="btn primary" href="/systems/pds/dashboard/">
                      Open PDS Dashboard
                    </Link>
                    <Link className="btn inverse-soft" href="/systems/pds/">
                      View System Architecture
                    </Link>
                  </div>
                </div>
                <aside className="home-system-feature-meta">
                  <div>
                    <span>System role</span>
                    <strong>{featuredSystem.role}</strong>
                  </div>
                  <div>
                    <span>Public state</span>
                    <strong>{featuredSystem.status}</strong>
                  </div>
                  <div>
                    <span>Architecture</span>
                    <strong>Provider-agnostic portfolio operating layer</strong>
                    <small>Current providers are operating inputs, not the definition of PDS.</small>
                  </div>
                </aside>
              </article>

              {supportingSystems.length ? (
                <div className="home-system-supporting" aria-label="Supporting SlackQuant systems">
                  {supportingSystems.map((system) => (
                    <Link className="home-system-mini" href={`/systems/${system.slug}/`} key={system.slug}>
                      <div className="kicker">{system.category}</div>
                      <h3>{system.title}</h3>
                      <p>{system.role}</p>
                      <span>{system.status.startsWith("Public live") ? "Public live" : system.status} &#8594;</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </>
          ) : null}
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
                allocation, portfolio decision design, robustness, and implementation.
              </p>
              <Link className="section-link" href="/research/#investment-research-heading">
                Explore Investment Research &#8594;
              </Link>
            </article>
            <article className="stream">
              <div className="kicker">02</div>
              <h3>Academic Research</h3>
              <p>
                Academic and technical research across forecasting, financial
                data science, AI/ML, and empirical methodology.
              </p>
              <Link className="section-link" href="/research/#academic-research-heading">
                Explore Academic Research &#8594;
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Quantitative Methods</div>
            <a className="section-link" href={methodsRootHref}>
              Open methods library &#8594;
            </a>
          </div>
          <div className="grid-2">
            <article className="stream">
              <div className="kicker">Methods library</div>
              <h3>Understand the methods behind the research.</h3>
              <p>
                A practical library of statistical, econometric, portfolio, and
                machine-learning methods used across SlackQuant Research. Each
                article connects intuition, formal definitions, implementation,
                common failure modes, and reproducible examples.
              </p>
              <a className="section-link strong-link" href={methodsRootHref}>
                Explore Quantitative Methods &#8594;
              </a>
            </article>
            <article className="stream">
              <div className="kicker">Shared foundation</div>
              <h3>A common language for recurring quantitative work.</h3>
              <p>
                Quantitative Methods provides reusable explanations, implementation
                guidance, reproducible examples, and failure-mode checks for methods
                that recur across Investment Research, Academic Research, and Systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Public Output</div>
          </div>
          <div className="output-metrics" aria-label="Current SlackQuant public output">
            <div className="output-metric">
              <div className="output-value">{researchItems.length}</div>
              <div className="output-label">Research Papers</div>
            </div>
            <div className="output-metric">
              <div className="output-value">{systemItems.length}</div>
              <div className="output-label">Public Systems</div>
            </div>
            <div className="output-metric">
              <div className="output-value">{quantitativeMethods.length}</div>
              <div className="output-label">Methods Articles</div>
            </div>
            <div className="output-metric">
              <div className="output-value">{publicRepositoryCount}</div>
              <div className="output-label">Public Repositories</div>
            </div>
          </div>
          <p className="output-note">
            Counts reflect the current public catalog across Research, Systems, and Quantitative Methods.
            Repository links are deduplicated across research and system deployment records.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Latest Public Research</div>
          </div>
          <div className="release-list">
            {[...researchItems].reverse().map((item) => (
              <Link className="release release-link" href={`/research/${item.slug}/`} key={item.slug}>
                <div className="date">{item.dateLabel}</div>
                <div>
                  <strong>{item.title}</strong>
                  <br />
                  <span className="meta">
                    {item.status}
                    {item.ssrnId ? (
                      <> &middot; SSRN {item.ssrnId}</>
                    ) : null}
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
              One research platform.
              <br />
              Clear roles.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              SlackQuant Research brings investment research, academic research,
              operational systems, and a shared Quantitative Methods library into one
              public platform while keeping the role of each resource clear.
            </p>
            <div className="researcher-line">
              <span className="researcher-prefix">Research by</span>
              <strong>{site.researcher.displayName}</strong>
            </div>
            <Link className="section-link about-link" href="/about/">
              About SlackQuant Research &#8594;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

