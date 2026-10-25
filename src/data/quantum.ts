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
    question: "How can one qubit yield 0 with 70% probability and 1 with 30%?",
    intuition: "The state stores probability amplitudes, not the outcome of a measurement. Squaring their magnitudes gives measurement probabilities in a chosen basis.",
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
    codeNote: "The circuit starts in |0⟩. The Ry gate is chosen to prepare a real, nonnegative pair of amplitudes; general qubit states may have complex phases.",
  },
  {
    id: "QL-002",
    slug: "gates-and-interference",
    title: "When a Phase Becomes Observable",
    subtitle: "Hadamard gates, relative phase and interference",
    question: "Why does a phase gate leave Z-basis probabilities unchanged until another gate is applied?",
    intuition: "A phase gate changes the relative phase between amplitudes. The final Hadamard recombines them, converting a phase difference into observable probability differences.",
    equation: "H P(φ) H |0⟩ = [(1 + e^{iφ})|0⟩ + (1 − e^{iφ})|1⟩] / 2",
    derivation: "P(0) = cos²(φ/2);  P(1) = sin²(φ/2)",
    results: [
      { label: "φ = 90° · final P(0)", prediction: "50%", observation: "50% · Qiskit" },
      { label: "φ = 180° · final P(0)", prediction: "0%", observation: "≈0% · Qiskit" },
      { label: "Before the final H", prediction: "P(0) = P(1) = 50%", observation: "50% / 50% · NumPy" },
    ],
    insight: "Relative phase may be invisible in one measurement basis yet influence measurement after a change of basis. This is interference, not a change in norm.",
    distinction: "A global phase changes no measurement probabilities. A relative phase can affect probabilities after amplitudes are mixed. The reported finite-shot figures, when shown, are NumPy draws rather than hardware measurements.",
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
    intuition: "A joint two-qubit state needs one amplitude for each of four computational-basis outcomes. A separable preparation can be written as a tensor product, but not every two-qubit state can.",
    equation: "|1⟩ ⊗ |+⟩ = (|10⟩ + |11⟩) / √2",
    derivation: "Joint statevector = [0, 0, 1/√2, 1/√2]ᵀ in the |00⟩, |01⟩, |10⟩, |11⟩ basis",
    results: [
      { label: "P(00) and P(01)", prediction: "0% / 0%", observation: "0% / 0% · Qiskit" },
      { label: "P(10) and P(11)", prediction: "50% / 50%", observation: "50% / 50% · Qiskit" },
      { label: "|++⟩ · four outcomes", prediction: "25% each", observation: "25% each · Qiskit" },
    ],
    insight: "Two qubits require four complex amplitudes. For this specific product state, q₁ is always 1 while q₀ has equal chances of 0 and 1.",
    distinction: "Qiskit displays basis labels in |q₁q₀⟩ order: the rightmost bit is qubit 0. A state with several nonzero amplitudes is not necessarily entangled.",
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
    question: "If two bits always agree in one basis, does that prove their qubits are entangled?",
    intuition: "No. The Bell state and a classically correlated mixture have identical Z-basis outcome probabilities. Their X-basis distributions differ because the Bell state preserves quantum coherence.",
    equation: "|Φ⁺⟩ = (|00⟩ + |11⟩) / √2",
    derivation: "ρmix = ½|00⟩⟨00| + ½|11⟩⟨11|",
    results: [
      { label: "Bell · same outcome in Z", prediction: "100%", observation: "100% · Qiskit" },
      { label: "Bell · same outcome in X", prediction: "100%", observation: "100% · Qiskit" },
      { label: "Classical mixture · same in X", prediction: "50%", observation: "50% · NumPy density matrix" },
    ],
    insight: "A known pure Bell state has Schmidt rank two and cannot be factored into two one-qubit pure states. Equal Z-basis outcomes alone cannot establish that fact.",
    distinction: "The coherent Bell state and the separable mixture are compared under two measurement bases. This ideal calculation is not an entanglement certification experiment on noisy physical hardware.",
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
      "x_circuit.h(0); x_circuit.h(1)",
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
      "assert np.allclose(p_x, [0.5, 0, 0, 0.5])",
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
