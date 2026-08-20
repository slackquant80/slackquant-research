import Link from "next/link";
import { researchItems } from "@/data/research";
import { quantitativeMethods } from "@/data/methods";
import { site } from "@/data/site";

export default function HomePage() {
  const investmentFeatured =
    researchItems.find(
      (item) => item.stream === "investment" && item.featured,
    ) ?? researchItems[0];
  const academicFeatured =
    researchItems.find((item) => item.stream === "academic") ?? researchItems[0];
  const reproducibleRepositoryCount = new Set(
    researchItems.map((item) => item.links.github).filter(Boolean),
  ).size;
  const versionedReleaseCount = new Set(
    researchItems.map((item) => item.links.replication).filter(Boolean),
  ).size;

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Research platform</div>
          <h1>Systematic investing, forecasting, and financial data science.</h1>
          <p className="hero-copy">
            Investment and academic research across systematic investing, asset
            allocation, forecasting, financial data science, and AI/ML &#8212;
            with direct paths to papers, evidence, code, tools, and the
            quantitative methods behind them.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/research/">
              Explore Research
            </Link>
            <a className="btn soft" href="/methods/">
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
                allocation, decision architecture, robustness, and implementation.
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
            <a className="section-link" href="/methods/">
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
              <a className="section-link strong-link" href="/methods/">
                Explore Quantitative Methods &#8594;
              </a>
            </article>
            <article className="stream">
              <div className="kicker">Purpose</div>
              <h3>A shared methods resource across the research portfolio.</h3>
              <p>
                Quantitative Methods supports Investment Research and Academic
                Research with reusable explanations, implementation guidance,
                reproducible examples, and failure-mode checks.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-title">Research Output</div>
          </div>
          <div className="output-metrics" aria-label="Current public research output">
            <div className="output-metric">
              <div className="output-value">{researchItems.length}</div>
              <div className="output-label">Research Papers</div>
            </div>
            <div className="output-metric">
              <div className="output-value">{quantitativeMethods.length}</div>
              <div className="output-label">Methods Articles</div>
            </div>
            <div className="output-metric">
              <div className="output-value">{reproducibleRepositoryCount}</div>
              <div className="output-label">Reproducible Repositories</div>
            </div>
            <div className="output-metric">
              <div className="output-value">{versionedReleaseCount}</div>
              <div className="output-label">Versioned Releases</div>
            </div>
          </div>
          <p className="output-note">
            Counts reflect the current public research catalog. Companion Quantitative
            Methods labs are excluded from the Methods Articles count.
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
              One research identity.
              <br />
              Distinct research purposes.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              SlackQuant Research brings practitioner-oriented investment
              research and academic research into one coherent public platform,
              with a shared Quantitative Methods library that explains the tools
              used across the research.
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

