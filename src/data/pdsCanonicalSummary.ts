export type PdsCanonicalPerformanceRow = {
  label: string;
  supportStart: string;
  supportEnd: string;
  cumulativeReturn: number;
  cagr: number;
  annVol: number;
  sharpe: number;
  mdd: number;
  calmar: number;
  evidenceClass: string;
};

export type PdsCanonicalSummary = {
  contract: "PDS_CANONICAL_PLATFORM_SUMMARY_V1";
  generatedAt: string;
  systemAsOfKst: string;
  officialSignal: string;
  holdingMonth: string;
  executionClose: string;
  markThrough: string;
  completedThrough: string;
  coreProviders: string[];
  adaptiveState: string;
  adaptiveRiskBudget: number;
  previewSignal: string;
  previewHolding: string;
  previewThrough: string;
  adaptivePreviewState: string;
  adaptivePreviewRiskBudget: number;
  officialFxHedge: number;
  officialFxZscore: number;
  previewFxHedge: number;
  previewFxZscore: number;
  performance: PdsCanonicalPerformanceRow[];
};

// Generated from the validated canonical PDS public dashboard.
// Do not hand-edit numerical values; refresh through the governed PDS publication pipeline.
export const pdsCanonicalSummary: PdsCanonicalSummary = {
  "contract": "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
  "generatedAt": "2026-09-21T18:49:12.398598+09:00",
  "systemAsOfKst": "2026-09-21T18:49:06.737233+09:00",
  "officialSignal": "2026-08",
  "holdingMonth": "2026-09",
  "executionClose": "2026-09-01",
  "markThrough": "2026-09-18",
  "completedThrough": "2026-08-31",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "NORMAL",
  "adaptiveRiskBudget": 1.0,
  "previewSignal": "2026-09",
  "previewHolding": "2026-10",
  "previewThrough": "2026-09-18",
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.24941947094137737,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.36876034902500954,
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.9185696743016902,
      "cagr": 0.15757565044006316,
      "annVol": 0.11938971435383752,
      "sharpe": 1.2883934978881237,
      "mdd": -0.13224916898196737,
      "calmar": 1.1915057890575413,
      "evidenceClass": "Operational full support"
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.3379585020043923,
      "cagr": 0.13785583996748474,
      "annVol": 0.11811661034719606,
      "sharpe": 1.1551468383686574,
      "mdd": -0.144510861596728,
      "calmar": 0.9539479485783238,
      "evidenceClass": "Operational full support"
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.3232096486172367,
      "cagr": 0.1714186169392069,
      "annVol": 0.11262857773988753,
      "sharpe": 1.4652734550019137,
      "mdd": -0.11040267619701316,
      "calmar": 1.5526672255055758,
      "evidenceClass": "Frozen-policy evidence"
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.9871688159858187,
      "cagr": 0.13756570041050264,
      "annVol": 0.11267138334135048,
      "sharpe": 1.2036360693128554,
      "mdd": -0.11953262127387032,
      "calmar": 1.1508632450660925,
      "evidenceClass": "Frozen-policy evidence"
    }
  ]
} as PdsCanonicalSummary;
