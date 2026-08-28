import { getMethodsForArtifact } from "@/data/methods";
import { methodsRootHref } from "@/lib/methodsHref";

type MethodsUsedProps = {
  researchSlug: string;
  context?: "research" | "system";
};

export function MethodsUsed({
  researchSlug,
  context = "research",
}: MethodsUsedProps) {
  const methods = getMethodsForArtifact(researchSlug);
  if (!methods.length) return null;

  const isSystem = context === "system";

  return (
    <section className="prose-section" id="methods">
      <div className="methods-used-head">
        <div className="kicker">Quantitative Methods</div>
        <h2>
          {isSystem ? "Methods used in this system" : "Methods used in this research"}
        </h2>
        <p>
          {isSystem
            ? "These companion articles explain methods used directly in the system or needed to interpret its validation and outputs."
            : "These companion articles explain methods used directly in the study or needed to interpret its design and evidence."}
        </p>
      </div>

      <div className="methods-used-list">
        {methods.map((method) => (
          <a className="method-used-row" href={method.href} key={method.id}>
            <div className="method-used-meta">
              {method.id} &middot; {method.category} &middot; {method.level}
            </div>
            <div className="method-used-copy">
              <h3>{method.title}</h3>
              <p>{method.researchContext}</p>
            </div>
            <span className="method-used-arrow" aria-hidden="true">
              &#8594;
            </span>
          </a>
        ))}
      </div>

      <a className="section-link methods-library-link" href={methodsRootHref}>
        Browse the Quantitative Methods library &#8594;
      </a>
    </section>
  );
}
