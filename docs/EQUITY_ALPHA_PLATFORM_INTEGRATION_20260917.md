# Equity Alpha platform integration — 2026-09-17

- Added `/systems/equity-alpha/` as a first-class SlackQuant System.
- Added a distinct `Equity Alpha Systems` family, separate from `Multi-Asset Portfolio Strategy Systems`.
- Bound the validated public-safe dashboard at `/dashboards/equity-alpha/`.
- Preserved PDS, ADAA, F2R, and Scenario Stress Lab routes and content.
- Platform is presentation/navigation only; ETF_ALPHA remains the source of operating authority.


## Taxonomy / editorial refinement

- Reframed the Systems index as three operating layers: Portfolio Operations, Investment Strategies, and Risk & Analytics.
- Nested Multi-Asset Strategies and Equity Alpha Strategies as peer families inside the Investment Strategy Layer.
- Expanded Equity Alpha public model disclosure to name REX2 (Ridge + ElasticNet), Chronos-2, and complementary multi-signal evidence while keeping exact recipes protected.
- Standardized dashboard CTAs on explicit new-tab anchors.


## Methods / universe-governance closeout

- Added a first-party Quantitative Methods bridge for Equity Alpha.
- Added QM026 `Point-in-Time Dynamic Universe Construction` from the canonical Methods project.
- Added QM027 `Cross-Sectional Ranking, Top-K Selection, and Hold Buffers` from the canonical Methods project.
- Clarified the two-clock universe contract: monthly PIT maintenance inside the governed model-ready pool versus lower-frequency governed candidate-pool expansion.
- Standardized the top Equity Alpha dashboard CTA to `Open Dashboard ↗`, matching peer system pages.


## Canonical Methods correction

- The canonical Quantitative Methods roadmap already reserves QM021–QM023.
- Equity Alpha additions therefore use QM026 (Point-in-Time Dynamic Universe Construction) and QM027 (Cross-Sectional Ranking, Top-K Selection, and Hold Buffers).
- `public/methods` must be replaced from the canonical Methods render; stale temporary QM021/QM022 paths are prohibited.
