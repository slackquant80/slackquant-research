import type { Metadata } from "next";
import { SystemCard } from "@/components/SystemCard";
import { systemGroupDefinitions, systemItems } from "@/data/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Operational investment and decision systems published by SlackQuant, organized by their role in the portfolio decision process.",
};

export default function SystemsPage() {
  return (
    <main>
      <section className="index-hero systems-index-hero">
        <div className="shell">
          <div className="eyebrow">Systems</div>
          <h1>Operational systems organized by decision role.</h1>
          <p className="hero-copy">
            SlackQuant Systems is not a flat catalog of models. Each public system occupies a distinct
            layer of the investment process, from portfolio strategy and risk analysis to portfolio-level
            decision orchestration. Related research remains separately versioned under Research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="research-stream-head systems-stream-head">
            <div className="kicker">Public systems</div>
            <h2>Different systems, different operating authority</h2>
            <p>
              Systems are grouped by the job they perform in the investment process. A portfolio strategy,
              a risk-analysis system, and a portfolio operating system are not presented as interchangeable
              models simply because they share the same public library.
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
                      <SystemCard key={item.slug} item={item} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <p className="systems-rollout-note">
            Empty operating layers are not shown before a public system is ready. New systems enter the
            hierarchy only after their role, authority, evidence, and disclosure contract are defined.
          </p>
        </div>
      </section>
    </main>
  );
}
