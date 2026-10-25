// Independently authored public teaching examples. Do not import private QML source.
export type QuantumLab = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  question: string;
  intuition: string;
  equation: string;
  derivation: string;
  results: { label: string; prediction: string; observation: string }[];
  insight: string;
  distinction: string;
  code: string;
  codeNote: string;
};

export const quantumLabs: QuantumLab[] = [
  {
    id: "QL-001",
    slug: "quantum-states",
    title: "A Qubit Is a State, Not a Probability",
    subtitle: "Statevectors, normalization and the Born rule",
    question: "How can one qubit have a 70% chance of outcome 0 and a 30% chance of outcome 1?"
    intuition: "A pure qubit state is specified by two complex amplitudes. Their squared magnitudes—not the amplitudes themselves—give probabilities when measured in the chosen basis.",
    equation: "|ψ⟩ = √0.7 |0⟩ + √0.3 |1⟩",
    derivation: "|√0.7|² + |√0.3|² = 1;  P(0) = 0.70, P(1) = 0.30",
    results: [
      { label: "Exact Z-basis P(0)", prediction: "70.00%", observation: "70.00% · Qiskit" },
      { label: "Exact Z-basis P(1)", prediction: "30.00%", observation: "30.00% · Qiskit" },
      { label: "NumPy draws: outcome 0", prediction: "70% in expectation", observation: "713 / 1,024 (69.63%)" },
    ],
    insight: "A gate can prepare the requested amplitudes; the resulting statevector agrees with the analytic prediction. Finite sampling need not equal the exact probability.",
    distinction: "Statevector.from_instruction computes an ideal quantum state on a classical computer. The 1,024 draws reported here came from NumPy—not a physical QPU or a shot-based Qiskit backend.",
    code: [
      "import numpy as np",
      "from qiskit import QuantumCircuit",
      "from qiskit.quantum_info import Statevector",
      "",
      "p0 = 0.70",
      "theta = 2 * np.arccos(np.sqrt(p0))",
      "circuit = QuantumCircuit(1)",
      "circuit.ry(theta, 0)",
      "",
      "state = Statevector.from_instruction(circuit)",
      "print(np.round(state.data, 6))",
      "print(np.round(state.probabilities(), 6))",
      "assert np.allclose(state.probabilities(), [0.7, 0.3])",
    ].join("\n"),
    codeNote: "The circuit starts in |0⟩. This Ry preparation produces real, nonnegative amplitudes; general pure qubit states also carry relative complex phase.",
  },
  {
    id: "QL-002",
    slug: "gates-and-interference",
    title: "When a Phase Becomes Observable",
    subtitle: "Hadamard gates, relative phase and interference",
    question: "Why can a phase change the final Z-basis measurement probabilities without changing them immediately?",
    intuition: "A phase gate changes the relative phase between amplitudes. The final Hadamard recombines them, converting a phase difference into observable probability differences.",
    equation: "H P(φ) H |0⟩ = [(1 + e^{iφ})|0⟩ + (1 − e^{iφ})|1⟩] / 2",
    derivation: "P(0) = cos²(φ/2);  P(1) = sin²(φ/2)",
    results: [
      { label: "φ = 90° · final P(0)", prediction: "50%", observation: "50% · Qiskit" },
      { label: "φ = 180° · final P(0)", prediction: "0%", observation: "≈0% · Qiskit" },
      { label: "Before the final H", prediction: "P(0) = P(1) = 50%", observation: "50% / 50% · NumPy" },
    ],
    insight: "Relative phase leaves the intermediate Z-basis probabilities unchanged, but the final Hadamard mixes the amplitudes so the relative phase changes the output probabilities. The state remains normalized.",
    distinction: "A common global phase has no observable consequence. The relative phase here becomes relevant only after a second Hadamard. The historical finite-shot counts are classical NumPy draws, not quantum-device measurements.",
    code: [
      "import numpy as np",
      "from qiskit import QuantumCircuit",
      "from qiskit.quantum_info import Statevector",
      "",
      "def final_probabilities(degrees):",
      "    circuit = QuantumCircuit(1)",
      "    circuit.h(0)",
      "    circuit.p(np.deg2rad(degrees), 0)",
      "    circuit.h(0)",
      "    return Statevector.from_instruction(circuit).probabilities()",
      "",
      "for angle in (0, 90, 180):",
      "    print(angle, np.round(final_probabilities(angle), 6))",
      "",
      "assert np.allclose(final_probabilities(180), [0, 1])",
    ].join("\n"),
    codeNote: "This example uses the ideal P(φ) = diag(1, e^{iφ}) gate. The middle phase operation preserves 50:50 Z-basis probabilities after the first H; the final H changes the relevant measurement basis.",
  },
  {
    id: "QL-003",
    slug: "tensor-products",
    title: "Two Qubits, Four Amplitudes",
    subtitle: "Tensor products and basis-state ordering",
    question: "Why does adding one qubit double the size of a statevector?",
    intuition: "A pure two-qubit state has four complex amplitudes, one for each computational-basis vector. The product states prepared here factor into two single-qubit states; a general two-qubit pure state need not.",
    equation: "|1⟩ ⊗ |+⟩ = (|10⟩ + |11⟩) / √2",
    derivation: "Joint statevector = [0, 0, 1/√2, 1/√2]ᵀ in the |00⟩, |01⟩, |10⟩, |11⟩ basis",
    results: [
      { label: "P(00) and P(01)", prediction: "0% / 0%", observation: "0% / 0% · Qiskit" },
      { label: "P(10) and P(11)", prediction: "50% / 50%", observation: "50% / 50% · Qiskit" },
      { label: "|++⟩ · four outcomes", prediction: "25% each", observation: "25% each · Qiskit" },
    ],
    insight: "Two qubits require four complex amplitudes. For this specific product state, q₁ is always 1 while q₀ has equal chances of 0 and 1.",
    distinction: "For this two-qubit example, Qiskit orders basis vectors as |q₁q₀⟩, with q₀ as the rightmost bit. Superposition of multiple basis vectors is not, by itself, a test of entanglement.",
    code: [
      "import numpy as np",
      "from qiskit import QuantumCircuit",
      "from qiskit.quantum_info import Statevector",
      "",
      "circuit = QuantumCircuit(2)",
      "circuit.x(1)  # leftmost q1 = |1>",
      "circuit.h(0)  # rightmost q0 = |+>",
      "state = Statevector.from_instruction(circuit)",
      "",
      "print(np.round(state.data, 6))",
      "print(np.round(state.probabilities(), 6))",
      "assert np.allclose(state.probabilities(), [0, 0, 0.5, 0.5])",
    ].join("\n"),
    codeNote: "The computational basis is ordered |q₁q₀⟩. For an n-qubit pure state, the statevector length is 2ⁿ; simulation cost therefore grows exponentially with n.",
  },
  {
    id: "QL-004",
    slug: "entanglement",
    title: "Correlation Is Not Entanglement",
    subtitle: "Bell states, coherence and a classical control",
    question: "If the two qubits always give matching Z-basis outcomes, does that prove entanglement?",
    intuition: "No. An entangled Bell state and a separable classical mixture can produce the same Z-basis outcomes. In this specific comparison, their X-basis distributions differ because the Bell state has coherence between |00⟩ and |11⟩.",
    equation: "|Φ⁺⟩ = (|00⟩ + |11⟩) / √2",
    derivation: "ρmix = ½|00⟩⟨00| + ½|11⟩⟨11|",
    results: [
      { label: "Bell · same outcome in Z", prediction: "100%", observation: "100% · Qiskit" },
      { label: "Bell · same outcome in X", prediction: "100%", observation: "100% · Qiskit" },
      { label: "Classical mixture · same in X", prediction: "50%", observation: "50% · NumPy density matrix" },
    ],
    insight: "The constructed pure Bell state has Schmidt rank two, so it cannot factor into two one-qubit pure states. Matching Z-basis outcomes alone do not prove this for an unknown experimental state.",
    distinction: "The X-basis contrast distinguishes these two specified states; it is not a general entanglement witness for unknown noisy states. No physical QPU or device-noise simulation was used.",
    code: [
      "import numpy as np",
      "from qiskit import QuantumCircuit",
      "from qiskit.quantum_info import Statevector",
      "",
      "circuit = QuantumCircuit(2)",
      "circuit.h(0)",
      "circuit.cx(0, 1)",
      "bell = Statevector.from_instruction(circuit)",
      "",
      "x_circuit = circuit.copy()",
      "x_circuit.h(0)",
      "x_circuit.h(1)",
      "p_z = bell.probabilities()",
      "p_x = Statevector.from_instruction(x_circuit).probabilities()",
      "",
      "H = np.array([[1, 1], [1, -1]]) / np.sqrt(2)",
      "U = np.kron(H, H)",
      "rho_mix = np.diag([0.5, 0, 0, 0.5])",
      "p_mix_x = np.diag(U @ rho_mix @ U.conj().T).real",
      "",
      "print('Bell Z:', np.round(p_z, 6))",
      "print('Bell X:', np.round(p_x, 6))",
      "print('Mixture X:', np.round(p_mix_x, 6))",
      "assert np.allclose(p_z, [0.5, 0, 0, 0.5])",
      "assert np.allclose(p_x, [0.5, 0, 0, 0.5])",
      "assert np.allclose(np.diag(rho_mix), [0.5, 0, 0, 0.5])",
      "assert np.allclose(p_mix_x, [0.25] * 4)",
    ].join("\n"),
    codeNote: "The Bell pure state comes from H followed by CX. The comparison mixture is separable: it discards the off-diagonal coherence while retaining the same Z-basis frequencies. Its X-basis calculation uses a density matrix.",
  },
];

export const quantumReferences = [
  { label: "IBM Quantum · Statevector", href: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.quantum_info.Statevector" },
  { label: "IBM Quantum · QuantumCircuit", href: "https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.QuantumCircuit" },
];

export function findQuantumLab(slug: string): QuantumLab | undefined {
  return quantumLabs.find((lab) => lab.slug === slug);
}
