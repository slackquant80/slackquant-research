import Link from "next/link";
import type { ResearchItem } from "@/data/types";
import { getRelatedSystem } from "@/data/systems";

export function ResearchCard({ item }: { item: ResearchItem }) {
  const related = getRelatedSystem(item.slug);
  return (
    <article className="research-card">
      <div className="card-kicker-row">
        <div className="kicker">{item.streamLabel}</div>
        {item.investmentTrackLabel ? (
          <span className="track-chip">{item.investmentTrackLabel}</span>
        ) : null}
      </div>
      <h2>{item.title}</h2>
      {item.subtitle ? <p className="card-subtitle">{item.subtitle}</p> : null}
      <p>{item.shortSummary}</p>
      <div className="card-meta">
        <span>{item.status}</span>
        <span>
          {item.ssrnId
            ? `SSRN ${item.ssrnId}`
            : item.publicVersion ?? "Public release"}
        </span>
        <span>{item.dateLabel}</span>
      </div>
      <div className="card-action-row">
        <Link className="section-link strong-link" href={`/research/${item.slug}/`}>
          View Research →
        </Link>
        <div className="card-artifact-links" aria-label={`${item.title} public artifacts`}>
          {item.links.ssrn ? (
            <a href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
              Working Paper (SSRN) ↗
            </a>
          ) : null}
          {item.links.github ? (
            <a href={item.links.github} target="_blank" rel="noopener noreferrer">
              Replication Repository ↗
            </a>
          ) : null}
          {related ? (
            <Link href={`/systems/${related.slug}/`}>View System →</Link>
          ) : null}
          {item.links.archivalRelease ? (
            <a href={item.links.archivalRelease} target="_blank" rel="noopener noreferrer">
              Archival DOI ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
