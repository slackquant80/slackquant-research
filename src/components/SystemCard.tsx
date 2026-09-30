import Link from "next/link";
import type { SystemItem } from "@/data/systems";

function evidenceLinkLabel(item: SystemItem) {
  if (item.evidenceLabel === "Public Working Paper") return "Working Paper ↗";
  if (item.evidenceLabel === "Technical White Paper") return "Technical White Paper ↗";
  return "SSRN ↗";
}

export function SystemCard({ item }: { item: SystemItem }) {
  const dashboardHref = item.links.publicDashboard ?? item.links.liveDashboard;
  const dashboardIsFirstPartyApp = Boolean(item.links.publicDashboard);

  return (
    <article className={`system-card ${item.prominence === "flagship" ? "system-card-flagship" : ""} ${item.systemGroup === "equity-alpha" ? "system-card-equity-alpha" : ""}`}>
      <div className="card-kicker-row">
        <div className="kicker">SlackQuant Systems</div>
        <span className="track-chip">{item.category}</span>
      </div>
      <h2>{item.title}</h2>
      <p className="card-subtitle">{item.subtitle}</p>
      <p>{item.shortSummary}</p>
      <div className="card-meta">
        <span>{item.status}</span>
        <span>{item.dateLabel}</span>
      </div>
      <div className="card-action-row">
        <Link className="section-link strong-link" href={`/systems/${item.slug}/`}>
          View System →
        </Link>
        <div className="card-artifact-links" aria-label={`${item.title} public artifacts`}>
          {dashboardHref ? (
            <a
              className="strong-link"
              href={dashboardHref}
              target="_blank"
              rel="noopener noreferrer"
              data-sq-dashboard-app={dashboardIsFirstPartyApp ? "true" : undefined}
            >
              Open Dashboard ↗
            </a>
          ) : null}
          {item.links.ssrn ? (
            <a href={item.links.ssrn} target="_blank" rel="noopener noreferrer">
              {evidenceLinkLabel(item)}
            </a>
          ) : null}
          {item.links.whitePaper && !item.links.ssrn ? <a href={item.links.whitePaper} target="_blank" rel="noopener noreferrer">White Paper PDF ↗</a> : null}
        </div>
      </div>
    </article>
  );
}
