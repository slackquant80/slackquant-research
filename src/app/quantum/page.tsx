import type { Metadata } from "next";
import Link from "next/link";
import { quantumLabs } from "@/data/quantum";

export const metadata: Metadata = {
  title: "Quantum Lab",
  description: "Four reproducible foundations experiments: qubit states, interference, tensor products and entanglement. Ideal Qiskit simulations with precise evidence boundaries.",
  alternates: { canonical: "/quantum/" },
};

export default function QuantumLandingPage() {
  return (
    <main className="q-root">
      <section className="q-hero">
        <div className="shell q-hero-grid">
          <div>
            <div className="q-overline">SlackQuant / Methods &amp; Experiments</div>
            <h1>Quantum Lab<span className="q-period">.</span></h1>
            <p className="q-tagline">From amplitudes to entanglement.</p>
            <p className="q-lede">
              A sequence of small, reproducible experiments that make the mathematics
              of quantum computing tangible. Each lesson connects a simple question
              to an analytic prediction, an ideal Qiskit circuit, and a bounded interpretation.
            </p>
            <div className="q-actions">
              <Link className="q-button q-button-dark" href="/quantum/quantum-states/">Start with QL-001 <span aria-hidden="true">↗</span></Link>
              <a className="q-text-link" href="#experiments">Explore the sequence ↓</a>
            </div>
          </div>
          <aside className="q-hero-diagram" aria-label="Four foundations experiments">
            <div className="q-diagram-eyebrow">FOUNDATIONS / SERIES 01</div>
            <div className="q-diagram-node"><b>01</b><span>State</span><strong>|ψ⟩</strong></div>
            <div className="q-diagram-join" aria-hidden="true">↓</div>
            <div className="q-diagram-node"><b>02</b><span>Transform</span><strong>H · P(φ)</strong></div>
            <div className="q-diagram-join" aria-hidden="true">↓</div>
            <div className="q-diagram-node"><b>03</b><span>Compose</span><strong>⊗</strong></div>
            <div className="q-diagram-join" aria-hidden="true">↓</div>
            <div className="q-diagram-node q-diagram-last"><b>04</b><span>Entangle</span><strong>|Φ⁺⟩</strong></div>
            <div className="q-diagram-foot">Ideal simulation · No QPU required</div>
          </aside>
        </div>
      </section>

      <section className="q-section" id="experiments">
        <div className="shell">
          <div className="q-section-heading">
            <div>
              <span className="q-overline">01 — 04 / Completed foundations</span>
              <h2>One concept. One experiment. One verified result.</h2>
            </div>
            <p>Read in order, or choose the concept you want to revisit.</p>
          </div>
          <div className="q-lab-list">
            {quantumLabs.map((lab) => (
              <Link className="q-lab-row" href={"/quantum/" + lab.slug + "/"} key={lab.id}>
                <div className="q-lab-number">{lab.id}</div>
                <div className="q-lab-body">
                  <h3>{lab.title}</h3>
                  <p>{lab.subtitle}</p>
                </div>
                <div className="q-lab-status">Analytic + Qiskit verified</div>
                <span className="q-lab-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="q-section q-section-tinted">
        <div className="shell q-two-column">
          <div>
            <span className="q-overline">What verification means</span>
            <h2>What the experiments establish—and what they do not.</h2>
          </div>
          <div>
            <p className="q-body">For each experiment, analytic NumPy calculations were compared with independently constructed Qiskit ideal-statevector circuits in the local Python environment. The reported agreement concerns amplitudes or probabilities for the specified circuits.</p>
            <p className="q-body">The experiments did <strong>not</strong> run on quantum hardware, model device noise, demonstrate a speed advantage, or evaluate a financial prediction strategy. Any finite-shot counts identified as NumPy are classical draws from theoretical probabilities.</p>
            <div className="q-small-meta">SOURCE: independently written educational examples · VERIFIED: 2026-10-25 · SCOPE: ideal simulation</div>
          </div>
        </div>
      </section>

      <section className="q-section">
        <div className="shell q-two-column">
          <div>
            <span className="q-overline">Where this goes next</span>
            <h2>Foundations first. Applications only when justified.</h2>
          </div>
          <div>
            <p className="q-body">The longer research path is quantum representation → quantum learning algorithms → financially meaningful tasks → matched classical benchmarks. Moving to the next stage requires a testable research question and reproducible evidence, not simply a working quantum circuit.</p>
            <div className="q-next-block">
              <strong>Next learning topic · not yet published</strong>
              <span>Density matrices and partial trace</span>
              <small>Future experiments are not counted as validated results.</small>
            </div>
            <Link className="q-text-link" href="/research/">Explore existing SlackQuant research ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
