/** Conceptual circuits drawn with actual Qiskit qubit indexing, not decorative pills. */
export function QuantumCircuit({ slug }: { slug: string }) {
  const oneWire = slug === "quantum-states" || slug === "gates-and-interference";
  if (oneWire) {
    const gates = slug === "quantum-states"
      ? [{ x: 180, text: "Ry(θ)", width: 76 }]
      : [{ x: 124, text: "H", width: 47 }, { x: 222, text: "P(φ)", width: 66 }, { x: 318, text: "H", width: 47 }];
    const label = slug === "quantum-states"
      ? "Single qubit initially zero. Apply Y rotation by theta and calculate the resulting statevector."
      : "Single qubit initially zero. Apply Hadamard, phase gate and Hadamard sequentially.";
    return (
      <svg className="q-circuit-svg" viewBox="0 0 460 100" role="img" aria-label={label}>
        <line x1="76" y1="49" x2="432" y2="49" stroke="currentColor" strokeWidth="1.6" />
        <text x="13" y="54" className="q-svg-wire-label">q₀: |0⟩</text>
        {gates.map((g, i) => (
          <g key={i}>
            <rect x={g.x - g.width / 2} y="29" width={g.width} height="40" rx="2" className="q-svg-gate" />
            <text x={g.x} y="55" textAnchor="middle" className="q-svg-gate-text">{g.text}</text>
          </g>
        ))}
        <text x="432" y="23" textAnchor="end" className="q-svg-caption">final state</text>
      </svg>
    );
  }
  const bell = slug === "entanglement";
  const label = bell
    ? "Two qubits with q1 at top and q0 at bottom. Apply Hadamard to q0 then controlled NOT from q0 to q1."
    : "Two qubits with q1 at top and q0 at bottom. Apply X to q1 and Hadamard to q0.";
  return (
    <svg className="q-circuit-svg" viewBox="0 0 460 146" role="img" aria-label={label}>
      <line x1="75" y1="45" x2="432" y2="45" stroke="currentColor" strokeWidth="1.6" />
      <line x1="75" y1="102" x2="432" y2="102" stroke="currentColor" strokeWidth="1.6" />
      <text x="13" y="50" className="q-svg-wire-label">q₁: |0⟩</text>
      <text x="13" y="107" className="q-svg-wire-label">q₀: |0⟩</text>
      {bell ? (
        <>
          <rect x="118" y="82" width="45" height="40" rx="2" className="q-svg-gate" />
          <text x="140.5" y="108" textAnchor="middle" className="q-svg-gate-text">H</text>
          <line x1="274" y1="45" x2="274" y2="102" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="274" cy="102" r="5.3" className="q-svg-control" />
          <circle cx="274" cy="45" r="16" className="q-svg-target" />
          <path d="M274 29V61M258 45H290" stroke="currentColor" strokeWidth="1.7" />
          <text x="320" y="26" className="q-svg-caption">CX(q₀→q₁)</text>
        </>
      ) : (
        <>
          <rect x="131" y="25" width="44" height="40" rx="2" className="q-svg-gate" />
          <text x="153" y="51" textAnchor="middle" className="q-svg-gate-text">X</text>
          <rect x="131" y="82" width="44" height="40" rx="2" className="q-svg-gate" />
          <text x="153" y="108" textAnchor="middle" className="q-svg-gate-text">H</text>
          <text x="270" y="26" className="q-svg-caption">q₁ = |1⟩, q₀ = |+⟩</text>
        </>
      )}
    </svg>
  );
}
