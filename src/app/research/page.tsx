import type { Metadata } from "next";
import { ResearchCard } from "@/components/ResearchCard";
import { researchItems } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <main>
      <section className="index-hero">
        <div className="shell">
          <div className="eyebrow">Research</div>
          <h1>A public research portfolio spanning investment research and academic work.</h1>
          <p className="hero-copy">
            Browse public working papers and research releases, with links to
            supporting code, evidence, and research tools where available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell research-list">
          {researchItems.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
