# Quantum Lab — Editorial and Publication Contract

**Status (2026-10-26):** Release authorized by project owner; `main` promotion and live Pages deployment must be verified independently.  
**Initial scope:** QL-001 through QL-004 (Foundations I).  
**Source of publication:** `slackquant-research` (this repository).  
**Source of scientific experiment provenance:** private `research-quantum-machine-learning` LAB-001/002/003/004, independently validated and merged into its `main` on 2026-10-25.

## Final release decision and evidence reconciliation — 2026-10-26

**Owner authorization:** Following the successful final-QA result, the owner instructed the Quantum Lab to proceed to formal publication. Preserve the 10-file content scope from tested branch commit `aae22bd897cd589610eb23c5d08f8c5211f5e1c6`. Direct single-commit promotion to `main` avoids triggering the same Actions validation twice (via PR and main push).

**Verified before promotion:**
- Canonical release validation completed with `QUANTUM_LATEST_CANONICAL_RELEASE_GATE_PASS` on commit `aae22bd897cd589610eb23c5d08f8c5211f5e1c6` (TypeScript, static build, and existing site audit).
- The five static Quantum Lab routes and ten desktop/mobile full-page screenshots were examined for the earlier pinned source, including true 390px mobile layout without page-wide horizontal overflow.
- After the two scoped usability fixes, final QL-002 desktop/mobile screenshots and `QUANTUM_LATEST_TWO_SCREEN_VISUAL_QA_PASS` were examined on `aae22bd897cd589610eb23c5d08f8c5211f5e1c6`. The MathML phase parentheses and mobile results-table scroll guidance were both visible and correct.
- No new QPU run, physics claim, financial strategy result, existing service workflow change, additional dependency, or unreviewed feature is part of this publication.
- These notes are documentation-only release reconciliation. Previous sections describing pending gates are dated historical records, not current blockers after this final audit.
- **Post-promotion gate remains:** verify that the existing GitHub Pages `main` workflow succeeds and that the public `/quantum/` and four articles resolve. A GitHub source merge alone does not certify live deployment. No additional runner or billing setting is authorized.

## Information architecture

- `/quantum/`: editorial entry point, complete Foundations I sequence, evidence boundary and research outlook.
- `/quantum/{slug}/`: four statically rendered, individually indexable experiment articles, populated by `src/data/quantum.ts`.
- Main navigation remains unchanged. The existing home-page Quantitative Methods section contains a dedicated Quantum Lab card alongside the Methods library; the global header navigation is unchanged.
- Each article presents: question → intuition → mathematical relation → conceptual circuit → predicted vs observed → minimal executable public code → limitation and API references.
- `src/app/sitemap.ts` includes the overview and all four article routes. Next.js static export must use `generateStaticParams` and `dynamicParams=false`.
- The CSS is route-scoped under `.q-root`; no global restyling, new design system, client-side persistence or API.

## Technical accuracy and evidence provenance

- QL-001: Born probabilities `[0.7,0.3]`; separate NumPy seed-42 classical draws 713/311 of 1024; Qiskit Ry statevector cross-check passed.
- QL-002: H–P(φ)–H phase interference; P(0) at 90°=0.5 and 180°≈0; Qiskit Statevector cross-check passed.
- QL-003: Qiskit basis `|q1 q0>`; product `|1+>` gives P(10)=P(11)=0.5; Qiskit cross-check passed.
- QL-004: `|Φ+>` pure Bell versus separable mixture `0.5|00><00|+0.5|11><11|`; Z-basis outcomes agree but X-basis probabilities differ. Bell state Qiskit checks passed; mixture density calculation is NumPy.
- Public teaching snippets are **newly authored minimal examples**, not a dump or public link to the private research repository.
- No teacher lecture files, course recordings, personal notes, financial data or credentials are distributed.
- These results demonstrate ideal statevector simulation and deterministic/classical sampling only. They do **not** establish QPU execution, noise behavior, an entanglement witness on hardware, quantum speedup or financial predictive gains.
- Future QML/finance articles require their own empirical evaluation gate and same-information classical baseline. Do not relabel learning experiments as published scientific performance evidence.

## Pre-release gate — mandatory, not yet completed

1. Review wording and equations on all four pages, including source code and whether code exactly reproduces the displayed ideal results.
2. Run the **existing single canonical** `npm run validate:release` gate in an approved full repository environment (includes typecheck, static build and platform validators). Do not introduce a parallel CI or modify the deployed workflow.
3. Visual-review generated `/quantum/` and each article at desktop and mobile widths. Confirm code overflow, long equations, links, ordered lab navigation and canonical URLs.
4. After gate PASS, apply an explicit publication decision for the public `main` and its Pages deployment. Merely staging this source branch is NOT approval to deploy.
5. If GitHub Actions monthly budget is constrained, keep the review branch unmerged. Do not open a PR automatically when that triggers a chargeable `pull_request` workflow.

## Growth rule

Add new experiments to `quantumLabs` only when (a) the experiment has a defined question and exact source evidence, (b) mathematical expectations and implementation have been checked, (c) its Qiskit/classical/hardware evidence boundaries are distinguished, and (d) the public snippet is rights-safe. The four foundations articles remain independent of future progress.

**No separate QML deployment, database, Vercel project, new GitHub Actions workflow, or permanent local Git clone required.**

## Bounded 2026-10-25 pre-release QA evidence

Completed in the current editorial branch without invoking GitHub Actions:

- All four public Python snippets passed offline Python `ast.parse` syntax checks. This is **not** a claim that these re-authored public snippets were run with Qiskit; the Qiskit results in the articles refer to the separately validated original local LABs.
- Analytic NumPy checks independently confirmed: QL-001 Born probabilities (70/30); QL-002 H–P(φ)–H outcomes at 0°, 90°, and 180°; QL-003 `|1+>` probabilities; QL-004 Bell Z/X distributions versus separable mixture X distribution.
- IBM Quantum official API documentation was reviewed for `QuantumCircuit.ry`, `.cx`, `Statevector.from_instruction`, and `.probabilities()`.
- Replaced unformatted mathematics with **native MathML**, and former generic step pills with semantic SVG diagrams whose qubit order, gates and CNOT control/target match the code.
- Tested a **representative standalone MathML/SVG rendering fixture** in Chromium at desktop (1280px) and mobile (390px). Formula rendering and the q0-controlled CNOT diagram remained visible, with no document-wide horizontal overflow. This fixture check does **not** substitute for a Next.js production-page visual test.
- Bounded GitHub source review: only the QL/Quantum Lab route, styles, data, homepage entry, sitemap and this contract were changed. The other site content, deployed `main`, system calculation and dashboard routes were not changed.

**STILL OPEN — hard publication gate:**

- The full SlackQuant `npm run validate:release` (TypeScript, production Next.js build and existing audits) has not run on this editorial branch.
- Real generated page inspection (four article pages plus the landing page, desktop and mobile) remains incomplete; tests of a representative standalone fixture must not be misrepresented as whole-site QA.
- Accordingly this branch must **not** be merged into `main` nor publicly deployed merely because the mathematics and illustrative components were inspected. Do not trigger the 2026-10 GitHub Actions budget by opening an unneeded PR for this review.

## Three-pass editorial refinement — 2026-10-25

**Pass 1 — scientific and code precision**

- Tightened statements about single-qubit amplitudes versus probabilities, phase interference, two-qubit product states, and the distinction between coherent Bell states and separable mixtures.
- Strengthened the independent public Bell-state example by asserting both Z/X Bell probabilities and the corresponding density-matrix control values. Corrected the Python formatting of the two Hadamard instructions.
- Recalculated the core numerical results independently with NumPy: 70/30 Born probabilities, H–P(φ)–H for 0°, 90°, 180°, 360°, |1+> joint probabilities, Bell/mixture distributions in Z/X, and Bell-state Schmidt rank 2. All matched the advertised analytic targets (within floating-point tolerance).
- **Not claimed:** new execution of the public Qiskit snippets. The previously verified original LAB runs remain the provenance for Qiskit cross-checks.

**Pass 2 — editorial clarity and presentation**

- Updated experiment tables to distinguish analytic predictions, ideal statevector computations, NumPy density-matrix calculations, and classical finite-shot sampling. Removed misleading “observed” framing.
- Improved SVG circuit label sizes, mobile formula legibility and keyboard focus indication. Added a horizontal-scroll hint for the longer QL-002 MathML equation and adjusted the public code typography.
- Ran a refreshed **standalone Chromium MathML + circuit fixture** at viewport widths 390 and 1280: two MathML blocks and one two-wire SVG displayed, and document width equaled viewport width at both sizes (no page-wide horizontal overflow). This still does not substitute for full Next.js page QA.

**Pass 3 — site integration, safety and readiness**

- Gave Quantum Lab its own card in the existing two-column home-page Methods section rather than embedding an auxiliary link under the Methods library card. Global header and all operational system routes remain unchanged.
- Checked the intended five /quantum/ routes (landing + four generated article slugs), metadata and sitemap registrations, semantic section anchors, internal navigational links and external reference link policy.
- Compared working-branch changes to main to confine edits to the quantum article/data/components/styles, the single homepage card, sitemap and this editorial contract. No Actions workflow or release validator changed.
- Cross-checked Qiskit Statevector API and Next.js static-export/generateStaticParams behavior against their official documentation.

**Open release constraints after all three passes:** full `npm run validate:release` in the complete repository, the generated five-route Next.js desktop/mobile visual check, and independent Qiskit execution of each shortened *public* snippet if such a claim is needed. **No PR, main merge, Actions trigger or public deployment is authorized by this review.**

## True full-page visual audit — 2026-10-26

The owner-provided FullPageQA ZIP was directly inspected. It contains ten full-page PNGs, a ten-entry `CDP_VIEWPORT_REPORT.json`, and a postprocess receipt documenting the earlier PowerShell array-count bug.

**Visual evidence applies to pinned source commit `8e51da43babe18287d4cef3413e31c5061a1bdce` (not automatically to newer commits).**

- Captures: overview + four lab articles at desktop **1280px** and real mobile **390px**, all **10/10**. Captured page heights range to 4,528px.
- The CDP report confirms `documentWidth=viewportWidth` for all ten pages, `horizontalOverflow=false` and `brokenImages=0`.
- Manual full-image review: page title, body, MathML formula, quantum circuit, evidence table, code block, interpretation, pagination and footer are present. Prior apparent mobile title truncation was a capture-viewport artifact.
- Two small usability issues observed in the screenshots: the QL-002 MathML phase argument parentheses stretched to the height of the nearby fraction; the horizontally scrollable result table lacked a mobile scrolling cue.
- **Corrective changes after the captured commit:** changed only the QL-002 phase parentheses to MathML `stretchy="false"`, and added a mobile-only table scrolling hint / style. No math model, numerical data, circuit wiring, imported dependencies, other site routes, CI or public deployment was changed.

**Current disposition:** preceding pinned commit passed canonical release validation + original five-page HTML audit, and passed the ten-page CDP/full-page review. The small post-capture UI corrections are source-reviewed but have **not yet received their own full canonical build / 390px rendering attestation**. Preserve that distinction before authorizing merge and production deployment. No need to repeat the scientific LAB experiments.
