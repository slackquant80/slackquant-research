/** Native MathML for the four published foundation equations; no client JavaScript or CDN. */
export function QuantumEquation({ slug, ariaLabel }: { slug: string; ariaLabel: string }) {
  if (slug === "quantum-states") {
    return (
      <math display="block" aria-label={ariaLabel}>
        <mrow>
          <mtext>|ψ⟩</mtext><mo>=</mo>
          <msqrt><mn>0.7</mn></msqrt><mtext>|0⟩</mtext>
          <mo>+</mo>
          <msqrt><mn>0.3</mn></msqrt><mtext>|1⟩</mtext>
        </mrow>
      </math>
    );
  }
  if (slug === "gates-and-interference") {
    return (
      <math display="block" aria-label={ariaLabel}>
        <mrow>
          <mi>H</mi><mi>P</mi><mo>(</mo><mi>φ</mi><mo>)</mo><mi>H</mi><mtext>|0⟩</mtext>
          <mo>=</mo>
          <mfrac>
            <mrow>
              <mo>(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><mo>)</mo><mtext>|0⟩</mtext>
              <mo>+</mo><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><mo>)</mo><mtext>|1⟩</mtext>
            </mrow>
            <mn>2</mn>
          </mfrac>
        </mrow>
      </math>
    );
  }
  if (slug === "tensor-products") {
    return (
      <math display="block" aria-label={ariaLabel}>
        <mrow>
          <mtext>|1⟩</mtext><mo>⊗</mo><mtext>|+⟩</mtext><mo>=</mo>
          <mfrac>
            <mrow><mtext>|10⟩</mtext><mo>+</mo><mtext>|11⟩</mtext></mrow>
            <msqrt><mn>2</mn></msqrt>
          </mfrac>
        </mrow>
      </math>
    );
  }
  if (slug === "entanglement") {
    return (
      <math display="block" aria-label={ariaLabel}>
        <mrow>
          <mtext>|Φ⁺⟩</mtext><mo>=</mo>
          <mfrac>
            <mrow><mtext>|00⟩</mtext><mo>+</mo><mtext>|11⟩</mtext></mrow>
            <msqrt><mn>2</mn></msqrt>
          </mfrac>
        </mrow>
      </math>
    );
  }
  return null;
}
