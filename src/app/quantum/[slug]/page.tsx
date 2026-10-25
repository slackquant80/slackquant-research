import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findQuantumLab, quantumLabs, quantumReferences } from "@/data/quantum";
import { QuantumEquation } from "../QuantumEquation";
import { QuantumCircuit } from "../QuantumCircuit";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return quantumLabs.map((lab) => ({ slug: lab.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lab = findQuantumLab(slug);
  if (!lab) return { title: "Quantum Lab" };
  return {
    title: lab.title,
    description: lab.subtitle + ". " + lab.question,
    alternates: { canonical: "/quantum/" + lab.slug + "/" },
  };
}

export default async function QuantumArticle({ params }: Props) {
  const { slug } = await params;
  const lab = findQuantumLab(slug);
  if (!lab) notFound();
  const index = quantumLabs.findIndex((item) => item.slug === lab.slug);
  const prev = index > 0 ? quantumLabs[index - 1] : null;
  const next = index < quantumLabs.length - 1 ? quantumLabs[index + 1] : null;

  return (
    <main className="q-root">
      <section className="q-article-hero">
        <div className="shell">
          <div className="q-article-breadcrumb">
            <Link href="/quantum/">Quantum Lab</Link>
            <span aria-hidden="true">/</span>
            <span>{lab.id}</span>
          </div>
          <div className="q-overline">FOUNDATIONS / VERIFIED IDEAL SIMULATION</div>
          <h1>{lab.title}</h1>
          <p className="q-article-subtitle">{lab.subtitle}</p>
          <div className="q-hero-tagrow">
            <span>NumPy mathematics</span>
            <span>Qiskit Statevector</span>
            <span>No hardware claim</span>
          </div>
        </div>
      </section>

      <div className="shell q-article-layout">
        <aside className="q-article-toc" aria-label="On this page">
          <strong>In this experiment</strong>
          <a href="#question">The question</a>
          <a href="#math">Mathematics</a>
          <a href="#results">Evidence</a>
          <a href="#code">Reproduce it</a>
          <a href="#interpretation">Interpretation</a>
          <Link href="/quantum/">← All experiments</Link>
        </aside>

        <article className="q-article">
          <section className="q-article-section" id="question">
            <span className="q-overline">01 / The question</span>
            <h2>{lab.question}</h2>
            <p className="q-body q-intuition">{lab.intuition}</p>
          </section>

          <section className="q-article-section" id="math">
            <span className="q-overline">02 / Mathematical prediction</span>
            <h2>State and transformation</h2>
            <div className="q-equation-panel">
              <div className="q-equation-label">Core relation</div>
              <div className="q-equation">
                <QuantumEquation slug={lab.slug} ariaLabel={lab.equation} />
              </div>
              {lab.slug === "gates-and-interference" ? <p className="q-math-scroll-hint">On narrow screens, scroll the equation horizontally to view every term.</p> : null}
              <div className="q-equation-derive">{lab.derivation}</div>
            </div>
            <h3 className="q-subheading">Quantum circuit</h3>
            <div className="q-circuit">
              <QuantumCircuit slug={lab.slug} />
            </div>
            <p className="q-figure-caption">Circuit wire labels follow the Qiskit indexing convention; Statevector results are computed with an ideal simulator, not hardware.</p>
          </section>

          <section className="q-article-section" id="results">
            <span className="q-overline">03 / Prediction and simulation</span>
            <h2>Analytic predictions and simulator results</h2>
            <div className="q-result-table-scroll">
              <table className="q-result-table">
                <thead><tr><th scope="col">Quantity</th><th scope="col">Analytic prediction</th><th scope="col">Computed value or classical sample</th></tr></thead>
                <tbody>
                  {lab.results.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th><td>{row.prediction}</td><td>{row.observation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="q-figure-caption">Values are reported from the previously completed local experiments: exact ideal statevector probabilities (Qiskit), classical NumPy sampling where stated, and the specified NumPy density-matrix calculation. These are not observations from physical quantum hardware. Rounded values are shown for readability.</p>
          </section>

          <section className="q-article-section" id="code">
            <span className="q-overline">04 / Reproduce the principle</span>
            <h2>Minimal Qiskit example</h2>
            <p className="q-body">This independently written teaching snippet illustrates the verified circuit principle without disclosing the private lab source. Run it with NumPy and Qiskit installed; this abbreviated public snippet has undergone source and syntax review, but not a separate Qiskit-enabled execution test.</p>
            <div className="q-code-head">
              <span>Python · NumPy + Qiskit</span>
              <span>Ideal statevector</span>
            </div>
            <pre className="q-code"><code>{lab.code}</code></pre>
            <p className="q-code-note">{lab.codeNote}</p>
            <p className="q-figure-caption">Computations are local ideal statevector calculations. Nothing here sends jobs to an IBM Quantum device or cloud backend.</p>
          </section>

          <section className="q-article-section" id="interpretation">
            <span className="q-overline">05 / Interpretation and boundaries</span>
            <h2>What we can conclude</h2>
            <p className="q-body q-conclusion">{lab.insight}</p>
            <div className="q-limit">
              <strong>What this does not establish</strong>
              <p>{lab.distinction}</p>
            </div>
            <div className="q-source-list">
              <strong>Primary API references</strong>
              {quantumReferences.map((ref) => (
                <a key={ref.href} href={ref.href} target="_blank" rel="noopener noreferrer">{ref.label} ↗</a>
              ))}
            </div>
          </section>

          <nav className="q-article-pagination" aria-label="Quantum Lab sequence">
            {prev ? <Link href={"/quantum/" + prev.slug + "/"}>← Previous <strong>{prev.title}</strong></Link> : <Link href="/quantum/">← All experiments <strong>Quantum Lab</strong></Link>}
            {next ? <Link href={"/quantum/" + next.slug + "/"}>Next → <strong>{next.title}</strong></Link> : <Link href="/quantum/">Series overview → <strong>Back to Quantum Lab</strong></Link>}
          </nav>
        </article>
      </div>
    </main>
  );
}
