import type { Metadata } from "next";
import { SystemCard } from "@/components/SystemCard";
import { systemItems } from "@/data/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Operational investment, portfolio, and decision-support systems published by SlackQuant Research.",
};

export default function SystemsPage() {
  return (
    <main>
      <section className="index-hero systems-index-hero">
        <div className="shell">
          <div className="eyebrow">Systems</div>
          <h1>Operational systems for portfolio analysis and decision support.</h1>
          <p className="hero-copy">
            Public tools that apply research in live or on-demand workflows.
            Each system states what it does, what evidence supports it, and how its
            outputs should be interpreted; related research remains separately versioned.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="research-stream-head systems-stream-head">
            <div className="kicker">Public systems</div>
            <h2>Public systems with clear roles and evidence</h2>
            <p>
              Each system has a defined purpose, operating model, and public
              interface. Supporting papers and validation material are linked without
              treating live system updates as new research results.
            </p>
          </div>
          <div className="research-list">
            {systemItems.map((item) => (
              <SystemCard key={item.slug} item={item} />
            ))}
          </div>
          <p className="systems-rollout-note">
            Systems are listed together for navigation, but they may serve different
            portfolio roles and use different operating and documentation structures.
          </p>
        </div>
      </section>
    </main>
  );
}
