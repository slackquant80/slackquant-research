import Link from "next/link";
import type { SystemItem } from "@/data/systems";

export function SystemCard({ item }: { item: SystemItem }) {
  const dashboardHref = item.links.publicDashboard ?? item.links.liveDashboard;
  const dashboardIsFirstPartyApp = Boolean(item.links.publicDashboard);

  return (
    <article className={`system-card ${item.prominence === "flagship" ? "system-card-flagship" : ""}`}>
      <div className="card-kicker-row">
        <div className="kicker">SlackQuant Systems</div>
        <span className="track-chip">{item.category}</span>
      </div>
      <h2>{item.title}</h2>
      <p className="card-subtitle">{item.subtitle}</p>
      <p>{item.shortSummary}</p>
      <div className="card-meta">
        <span>{item.status}</span>
        {item.ssrnId ? <span>{item.evidenceLabel ?? "SSRN"} · SSRN {item.ssrnId}</span> : null}
        <span>{item.dateLabel}</span>
      </div>
      <div className="card-action-row">
        <Link className="section-link strong-link" href={`/systems/${item.slug}/`}>
          View System →
        </Link>
        <div className="card-artifact-links" aria-label={`${item.title} public artifacts`}>
          {dashboardHref ? (
            dashboardIsFirstPartyApp ? (
              <Link
                className="strong-link"
                href={dashboardHref}
                target="_blank"
                rel="noopener noreferrer"
                data-sq-dashboard-app="true"
              >
                Open Dashboard ↗
              </Link>
            ) : (
              <a className="strong-link" href={dashboardHref} target="_blank" rel="noopener noreferrer">
                Open Dashboard ↗
              </a>
            )
          ) : null}
          {item.links.dashboardGuide ? <Link href={item.links.dashboardGuide}>Dashboard Guide</Link> : null}
          {item.links.whitePaper ? <a href={item.links.whitePaper} target="_blank" rel="noopener noreferrer">White Paper PDF ↗</a> : null}
        </div>
      </div>
    </article>
  );
}
