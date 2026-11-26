import { ArtifactLink } from "@/components/ArtifactLink";
import type { ResearchItem } from "@/data/types";
import { getRelatedSystem } from "@/data/systems";

type RelatedSystem = {
  href: string;
  label: string;
};

type ResearchPaperHeroProps = {
  item: ResearchItem;
  relatedSystem?: RelatedSystem;
};

export function ResearchPaperHero({
  item,
  relatedSystem,
}: ResearchPaperHeroProps) {
  const paperHref = item.links.ssrn ?? item.links.paper;
  const paperLabel = item.links.ssrn ? "Working Paper (SSRN)" : "Open Paper";
  const primarySystem = getRelatedSystem(item.slug);
  const systemLink = primarySystem ? { href: `/systems/${primarySystem.slug}/`, label: "View System" } : relatedSystem;

  return (
    <section className="paper-hero">
      <div className="shell">
        <div className="paper-track-row">
          <div className="eyebrow">{item.streamLabel}</div>
          {item.investmentTrackLabel ? (
            <span className="track-chip">{item.investmentTrackLabel}</span>
          ) : null}
        </div>

        <h1 className="paper-title">{item.title}</h1>
        {item.subtitle ? (
          <div className="paper-subtitle">{item.subtitle}</div>
        ) : null}

        <div className="paper-meta">
          <span>{item.authorLine}</span>
          {item.affiliation ? <span>{item.affiliation}</span> : null}
          <span>{item.status}</span>
          {item.ssrnId ? <span>SSRN {item.ssrnId}</span> : null}
          <span>{item.dateLabel}</span>
        </div>

        <div
          className="actions paper-hero-actions"
          aria-label={`${item.title} public links`}
        >
          <ArtifactLink href={paperHref} primary external>
            {paperLabel}
          </ArtifactLink>

          {item.links.github ? (
            <ArtifactLink href={item.links.github} external>
              Replication Repository
            </ArtifactLink>
          ) : null}

          {item.links.researchDashboard ? (
            <ArtifactLink href={item.links.researchDashboard} external>
              Research Dashboard
            </ArtifactLink>
          ) : null}

          {systemLink ? (
            <ArtifactLink href={systemLink.href}>
              {systemLink.label}
            </ArtifactLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
