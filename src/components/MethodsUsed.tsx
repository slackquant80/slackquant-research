import { getMethodsForResearch } from "@/data/methods";

type MethodsUsedProps = {
  researchSlug: string;
};

export function MethodsUsed({ researchSlug }: MethodsUsedProps) {
  const methods = getMethodsForResearch(researchSlug);
  if (!methods.length) return null;

  return (
    <section className="prose-section" id="methods">
      <div className="methods-used-head">
        <div className="kicker">Quantitative Methods</div>
        <h2>Methods used in this research</h2>
        <p>
          These companion articles explain methods that are used directly in,
          or are central to interpreting, the research design and evidence.
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

      <a className="section-link methods-library-link" href="/methods/">
        Browse the Quantitative Methods library &#8594;
      </a>
    </section>
  );
}
