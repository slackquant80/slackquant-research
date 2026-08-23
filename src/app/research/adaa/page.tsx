import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtifactLink } from "@/components/ArtifactLink";
import { EvidenceFigure } from "@/components/EvidenceFigure";
import { getResearch } from "@/data/research";

const metrics = [
  ["10.80%", "ADAA practitioner gross CAGR"],
  ["8.97%", "Annualized volatility"],
  ["1.05", "BIL-excess Sharpe"],
  ["−10.34%", "Maximum drawdown"],
] as const;

export const metadata: Metadata = {
  title: "ADAA",
};

export default function AdaaPage() {
  const item = getResearch("adaa");
  if (!item) notFound();

  return (
    <main>
      <section className="paper-hero">
        <div className="shell">
          <div className="paper-track-row">
            <div className="eyebrow">{item.streamLabel}</div>
            {item.investmentTrackLabel ? (
              <span className="track-chip">{item.investmentTrackLabel}</span>
            ) : null}
          </div>
          <h1 className="paper-title">{item.title}</h1>
          <div className="paper-subtitle">{item.subtitle}</div>
          <div className="paper-meta">
            <span>{item.authorLine}</span>
            {item.affiliation ? <span>{item.affiliation}</span> : null}
            <span>{item.status}</span>
            {item.ssrnId ? <span>SSRN {item.ssrnId}</span> : null}
            <span>{item.dateLabel}</span>
          </div>
          <div className="actions">
            <ArtifactLink href={item.links.ssrn} primary external>
              Open SSRN Record
            </ArtifactLink>
            {item.links.github ? (
              <ArtifactLink href={item.links.github} external>
                Replication GitHub
              </ArtifactLink>
            ) : null}
            {item.links.researchDashboard ? (
              <ArtifactLink href={item.links.researchDashboard} external>
                Research Dashboard
              </ArtifactLink>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell detail-layout">
        <aside className="toc">
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#question">Research Question</a>
          <a href="#findings">Key Findings</a>
          <a href="#evidence">Selected Evidence</a>
          <a href="#method">Methodology</a>
          <a href="#repro">Reproducibility</a>
          <a href="#dashboards">Research &amp; Implementation</a>
          <a href="#citation">Citation</a>
        </aside>

        <div>
          <section className="prose-section" id="overview">
            <h2>Overview</h2>
            <p className="lede">
              ADAA treats strategy selection as a source of uncertainty rather
              than assuming that one allocation rule can be identified as best
              in advance. Historical performance and risk still matter; decision
              diversification asks an additional question: do the strategies
              worth holding actually make different portfolio decisions?
            </p>
            <p className="body-copy">
              The framework compares several dynamic allocation sleeves by what
              they choose, when they change, and how strongly they move toward
              defensive exposure. The goal is to identify genuine differences
              in decision behavior and to evaluate whether combining those
              differences can reduce dependence on a single rule.
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
                <div className="finding" key={finding}>
                  <div>{finding}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="prose-section" id="evidence">
            <h2>Selected Evidence</h2>
            <p>
              Selected summary statistics from the historical simulation
              reported in Public Working Paper {item.publicVersion}. SSRN {item.ssrnId}.
            </p>
            <div className="metrics">
              {metrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <div className="value">{value}</div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            <div className="evidence-note">
              These statistics and figures correspond to the cited public research version. Live
              implementation views are separate and may change over time.
            </div>

            {item.selectedEvidence?.length ? (
              <div className="selected-exhibits">
                <div className="selected-exhibits-head">
                  <div className="section-title">Selected Exhibits</div>
                  <p>
                    Three paper-aligned figures summarize the central evidence.
                    Click any figure to inspect the full-resolution public
                    research image.
                  </p>
                </div>

                <div className="evidence-figure-list">
                  {item.selectedEvidence.map((figure) => (
                    <EvidenceFigure key={figure.id} figure={figure} />
                  ))}
                </div>

                {item.links.researchDashboard ? (
                  <a
                    className="section-link strong-link evidence-dashboard-link"
                    href={item.links.researchDashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore the full ADAA Research Dashboard &#8599;
                  </a>
                ) : null}
              </div>
            ) : null}
          </section>

          <section className="prose-section" id="method">
            <h2>Methodology</h2>
            <div className="method-grid">
              <div className="method-card">
                <div className="num">01 · WHAT</div>
                <h3>Portfolio decisions</h3>
                <p>
                  Compare which exposures the rules choose and how far their
                  target weights differ.
                </p>
              </div>
              <div className="method-card">
                <div className="num">02 · WHEN</div>
                <h3>Decision clocks</h3>
                <p>
                  Measure whether different rules actually change their targets
                  at the same times.
                </p>
              </div>
              <div className="method-card">
                <div className="num">03 · HOW MUCH</div>
                <h3>Risk response</h3>
                <p>
                  Track the amount of defensive exposure and the scale of
                  allocation changes.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="repro">
            <h2>Reproducibility</h2>
            <p>
              Public code and reproducibility materials are maintained in the
              project repository. Additional replication or archival links
              appear here when they are part of the public research release.
            </p>
            <div className="repro-links">
              {item.links.github ? (
                <div className="artifact">
                  <div className="type">Public code</div>
                  <h3>Replication Repository</h3>
                  <p>Research code and public reproducibility material.</p>
                  <a
                    href={item.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open GitHub &#8599;
                  </a>
                </div>
              ) : null}

              {item.links.replication ? (
                <div className="artifact">
                  <div className="type">Replication</div>
                  <h3>Replication Package</h3>
                  <p>
                    Latest tagged public package: v1.1.4. The repository is
                    synchronized to the current v1.34 paper.
                  </p>
                  <a
                    href={item.links.replication}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open release &#8599;
                  </a>
                </div>
              ) : null}

              {item.links.archivalRelease ? (
                <div className="artifact">
                  <div className="type">Archival record</div>
                  <h3>Release / DOI</h3>
                  <p>Archived public replication release with persistent DOI.</p>
                  <a
                    href={item.links.archivalRelease}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open DOI &#8599;
                  </a>
                </div>
              ) : null}
            </div>
          </section>

          <section className="prose-section" id="dashboards">
            <h2>Research and Implementation</h2>
            <p>
              ADAA can be viewed through two interfaces with distinct purposes:
              one documents versioned research evidence, while the other
              supports live implementation and monitoring.
            </p>

            <div className="dual">
              <div className="dual-card">
                <div className="kicker">Public research evidence</div>
                <h3>ADAA Research Dashboard</h3>
                <p>
                  Paper-aligned, versioned research evidence, selected figures,
                  and links to the corresponding public research materials.
                </p>
                {item.links.researchDashboard ? (
                  <ArtifactLink
                    href={item.links.researchDashboard}
                    primary
                    external
                  >
                    Open Research Dashboard
                  </ArtifactLink>
                ) : null}
              </div>

              <div className="dual-card operational">
                <div className="kicker">Implementation</div>
                <h3>ADAA Live / Operational Dashboard</h3>
                <p>
                  Current implementation and monitoring context. This interface
                  can change with live conditions and is not the versioned
                  research record.
                </p>
                {item.links.operationalDashboard ? (
                  <ArtifactLink
                    href={item.links.operationalDashboard}
                    external
                    variant="inverse"
                  >
                    Open Live / Operational Dashboard
                  </ArtifactLink>
                ) : null}
              </div>
            </div>

            <div className="boundary-note">
              <b>Version boundary:</b> research results on this page correspond
              to the cited public paper version; live operational views may
              change independently.
            </div>
          </section>

          <section className="prose-section" id="citation">
            <h2>Citation</h2>
            <div className="citation-box">
              Lee, S. (2026). {item.title}: {item.subtitle}. Public Working
              Paper {item.publicVersion}. SSRN {item.ssrnId}.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
