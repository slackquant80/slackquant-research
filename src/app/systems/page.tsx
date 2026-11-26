import type { Metadata } from "next";
import { SystemCard } from "@/components/SystemCard";
import { systemGroupDefinitions, systemItems, systemLayerDefinitions } from "@/data/systems";
import { pdsCanonicalSummary } from "@/data/pdsCanonicalSummary";
import { getLiveSystemEvidence } from "@/lib/liveSystemEvidence";
import { getEquityAlphaEvidence } from "@/lib/equityAlphaEvidence";
import { getRamaEvidence } from "@/lib/ramaEvidence";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Operational investment systems from SlackQuant, organized into portfolio operations, portfolio architecture, investment strategies, and risk & scenario analysis.",
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
  // Only a published-data cutoff is release-bound; descriptions and layouts remain static.
  // Every system owns its own clock: a refresh never re-dates another system.
  const publishedThrough: Record<string, string> = {
    adaa: getLiveSystemEvidence("adaa").completedThrough,
    f2r: getLiveSystemEvidence("f2r").completedThrough,
    rama: getRamaEvidence().completedThrough,
    "equity-alpha": getEquityAlphaEvidence().supportEnd,
  };
  return (
    <main>
      <section className="index-hero systems-index-hero">
        <div className="shell">
          <div className="eyebrow">Systems</div>
          <h1>Investment systems, organized by operating role.</h1>
          <p className="hero-copy">
            SlackQuant distinguishes portfolio operations, portfolio architecture, independent investment strategies, and risk & analytics systems.
            Strategy engines are further grouped by opportunity domain—multi-asset and equity alpha—while related research remains
            independently versioned under Research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="research-stream-head systems-stream-head">
            <div className="kicker">System architecture</div>
            <h2>Clear roles. Distinct strategy domains.</h2>
            <p>
              The hierarchy distinguishes where a system sits in the investment process from the market domain in which a strategy operates.
              Portfolio Operations integrates providers and applies portfolio-level controls; Portfolio Architecture selects and combines allocation rules; Investment Strategies generate positions; Risk & Analytics supports diagnosis and stress interpretation.
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
                                  item.slug === "pds" && pdsCanonicalSummary.markThrough
                                    ? {
                                        ...item,
                                        dateLabel: `Operational data through ${formatPdsPublicDate(pdsCanonicalSummary.markThrough)}`,
                                      }
                                    : publishedThrough[item.slug]
                                    ? { ...item, dateLabel: `Completed through ${publishedThrough[item.slug]}` }
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
            These roles are not performance rankings or a claim that every strategy is currently used in ADAA or PDS. Multi-Asset Strategies and Equity Alpha Strategies are peer investment domains; the Stress Lab supports analysis across portfolios.
          </p>
        </div>
      </section>
    </main>
  );
}
