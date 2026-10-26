/**
 * Static, independently authored MathML for the four Quantum Foundations articles.
 *
 * React 19's JSX types in this site's configuration do not expose MathML tag
 * names as JSX.IntrinsicElements.  Rendering a CLOSED, constant-only set of
 * MathML fragments avoids custom global JSX declarations and extra packages.
 *
 * SECURITY: Never interpolate user text, route parameters or network content
 * into the markup strings below. The slug only selects a trusted constant.
 */
const FOUNDATION_MATHML: Readonly<Record<string, string>> = {
  "quantum-states": [
    '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">',
    '<mrow><mtext>|ψ⟩</mtext><mo>=</mo>',
    '<msqrt><mn>0.7</mn></msqrt><mtext>|0⟩</mtext>',
    '<mo>+</mo><msqrt><mn>0.3</mn></msqrt><mtext>|1⟩</mtext></mrow>',
    '</math>',
  ].join(""),
  "gates-and-interference": [
    '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">',
    '<mrow><mi>H</mi><mi>P</mi><mo>(</mo><mi>φ</mi><mo>)</mo><mi>H</mi><mtext>|0⟩</mtext><mo>=</mo>',
    '<mfrac><mrow>',
    '<mo>(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><mo>)</mo><mtext>|0⟩</mtext>',
    '<mo>+</mo>',
    '<mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><mo>)</mo><mtext>|1⟩</mtext>',
    '</mrow><mn>2</mn></mfrac></mrow>',
    '</math>',
  ].join(""),
  "tensor-products": [
    '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">',
    '<mrow><mtext>|1⟩</mtext><mo>⊗</mo><mtext>|+⟩</mtext><mo>=</mo>',
    '<mfrac><mrow><mtext>|10⟩</mtext><mo>+</mo><mtext>|11⟩</mtext></mrow>',
    '<msqrt><mn>2</mn></msqrt></mfrac></mrow>',
    '</math>',
  ].join(""),
  entanglement: [
    '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">',
    '<mrow><mtext>|Φ⁺⟩</mtext><mo>=</mo>',
    '<mfrac><mrow><mtext>|00⟩</mtext><mo>+</mo><mtext>|11⟩</mtext></mrow>',
    '<msqrt><mn>2</mn></msqrt></mfrac></mrow>',
    '</math>',
  ].join(""),
};

export function QuantumEquation({ slug, ariaLabel }: { slug: string; ariaLabel: string }) {
  const fixedMarkup = FOUNDATION_MATHML[slug];
  if (!fixedMarkup) return null;
  return (
    <div
      className="q-native-math"
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: fixedMarkup }}
    />
  );
}
