# Quantum Lab — Editorial and Publication Contract

**Status:** Staged for review; not released to production.  
**Initial scope:** QL-001 through QL-004 (Foundations I).  
**Source of publication:** `slackquant-research` (this repository).  
**Source of scientific experiment provenance:** private `research-quantum-machine-learning` LAB-001/002/003/004, independently validated and merged into its `main` on 2026-10-25.

## Information architecture

- `/quantum/`: editorial entry point, complete Foundations I sequence, evidence boundary and research outlook.
- `/quantum/{slug}/`: four statically rendered, individually indexable experiment articles, populated by `src/data/quantum.ts`.
- Main navigation remains unchanged. The existing home-page Quantitative Methods section contains the sole new entry link to Quantum Lab.
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
