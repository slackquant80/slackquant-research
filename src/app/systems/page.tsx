import type { Metadata } from "next";
import { SystemCard } from "@/components/SystemCard";
import { systemItems } from "@/data/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Operational investment and decision systems published by SlackQuant.",
};

export default function SystemsPage() {
  return (
    <main>
      <section className="index-hero systems-index-hero">
        <div className="shell">
          <div className="eyebrow">Systems</div>
          <h1>Operational investment and decision systems.</h1>
          <p className="hero-copy">
            Operational tools that translate validated research into bounded portfolio
            decision support. Research remains separate from the systems it supports,
            with each public system carrying its own evidence and operating boundaries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="research-stream-head systems-stream-head">
            <div className="kicker">Public systems</div>
            <h2>Operational systems with explicit evidence boundaries</h2>
            <p>
              Each system is published as a distinct operational artifact with its own
              role, authority, evidence lineage, and public interface. Related research
              remains separately versioned under Research.
            </p>
          </div>
          <div className="research-list">
            {systemItems.map((item) => (
              <SystemCard key={item.slug} item={item} />
            ))}
          </div>
          <p className="systems-rollout-note">
            Systems are listed as peer public artifacts for navigation; that listing does
            not imply identical internal roles or force them into a common document stack.
          </p>
        </div>
      </section>
    </main>
  );
}
