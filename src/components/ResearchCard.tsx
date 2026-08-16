import Link from "next/link";
import type { ResearchItem } from "@/data/types";

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="research-card">
      <div className="kicker">{item.streamLabel}</div>
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
      <Link className="section-link strong-link" href={`/research/${item.slug}/`}>
        View Research →
      </Link>
    </article>
  );
}
