import type { Metadata } from "next";
import { SystemCard } from "@/components/SystemCard";
import { systemGroupDefinitions, systemItems } from "@/data/systems";
import { pdsPublicSnapshot } from "@/data/pdsPublicSnapshot";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Operational investment and decision systems published by SlackQuant, organized by their role in the portfolio decision process.",
  alternates: { canonical: "/systems/" },
};

function formatPdsPublicDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export default function SystemsPage() {
  return (
    <main>
      <section className="index-hero systems-index-hero">
        <div className="shell">
          <div className="eyebrow">Systems</div>
          <h1>Operational systems organized by role in the investment process.</h1>
          <p className="hero-copy">
            SlackQuant publishes distinct systems across portfolio strategy, risk analysis, and portfolio-level
            decision governance. Each system has a defined operating role and evidence record; related research
            remains separately versioned under Research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="research-stream-head systems-stream-head">
            <div className="kicker">Role-based system architecture</div>
            <h2>From strategy engines to portfolio operating systems</h2>
            <p>
              Systems are grouped by the function they perform in the investment process. Strategy systems generate
              portfolio decisions, risk systems support diagnosis and stress analysis, and portfolio operating systems
              govern how independent providers are evaluated, admitted, integrated, and monitored at the
              portfolio level.
            </p>
          </div>

          <div className="systems-group-stack">
            {systemGroupDefinitions.map((group) => {
              const items = systemItems.filter((item) => item.systemGroup === group.key);
              if (!items.length) return null;

              return (
                <section className="systems-group" key={group.key}>
                  <div className="systems-group-head">
                    <div className="kicker">{group.kicker}</div>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>
                  <div className="research-list">
                    {items.map((item) => (
                      <SystemCard
                        key={item.slug}
                        item={
                          item.slug === "pds" && pdsPublicSnapshot?.publicAsOfDate
                            ? {
                                ...item,
                                dateLabel: `Updated ${formatPdsPublicDate(pdsPublicSnapshot.publicAsOfDate)}`,
                              }
                            : item
                        }
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <p className="systems-rollout-note">
            Presentation hierarchy reflects operating scope, not performance ranking. PDS occupies the portfolio-level
            operating layer; ADAA, F2R, and the Stress Lab retain independent system identities and operating roles.
          </p>
        </div>
      </section>
    </main>
  );
}
