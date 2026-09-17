import type { Metadata } from "next";
import { SystemCard } from "@/components/SystemCard";
import { systemGroupDefinitions, systemItems, systemLayerDefinitions } from "@/data/systems";
import { pdsPublicSnapshot } from "@/data/pdsPublicSnapshot";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Operational investment systems from SlackQuant, organized into portfolio operating, investment strategy, and risk & analytics layers.",
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
          <h1>Investment systems, organized by operating role.</h1>
          <p className="hero-copy">
            SlackQuant separates portfolio operating infrastructure, investment strategy engines, and risk & analytics systems.
            Strategy engines are further grouped by opportunity domain—multi-asset and equity alpha—while related research remains
            independently versioned under Research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="research-stream-head systems-stream-head">
            <div className="kicker">Three-layer system architecture</div>
            <h2>Clear authority. Distinct strategy domains.</h2>
            <p>
              The hierarchy distinguishes where a system sits in the investment process from the market domain in which a strategy operates.
              Portfolio Operations governs integration and authority; Investment Strategies generates positions; Risk & Analytics supports diagnosis
              and stress interpretation.
            </p>
          </div>

          <div className="systems-layer-stack">
            {systemLayerDefinitions.map((layer) => {
              const families = systemGroupDefinitions.filter((group) => layer.groupKeys.includes(group.key));
              const layerItems = systemItems.filter((item) => layer.groupKeys.includes(item.systemGroup));
              if (!layerItems.length) return null;

              return (
                <section className={`systems-layer systems-layer-${layer.key}`} key={layer.key}>
                  <div className="systems-layer-head">
                    <div className="kicker">{layer.kicker}</div>
                    <h2>{layer.title}</h2>
                    <p>{layer.description}</p>
                  </div>

                  <div className="systems-family-stack">
                    {families.map((family) => {
                      const items = systemItems.filter((item) => item.systemGroup === family.key);
                      if (!items.length) return null;
                      const showFamilyHeading = families.length > 1;

                      return (
                        <section className={`systems-family systems-family-${family.key}`} key={family.key}>
                          {showFamilyHeading ? (
                            <div className="systems-family-head">
                              <div className="kicker">{family.kicker}</div>
                              <h3>{family.title}</h3>
                              <p>{family.description}</p>
                            </div>
                          ) : null}
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
                </section>
              );
            })}
          </div>

          <p className="systems-rollout-note">
            The three layers describe operating authority, not performance ranking. Multi-Asset Strategies and Equity Alpha Strategies are peer families
            inside the Investment Strategy Layer; PDS remains the portfolio operating layer, while the Stress Lab remains a risk & analytics system.
          </p>
        </div>
      </section>
    </main>
  );
}
