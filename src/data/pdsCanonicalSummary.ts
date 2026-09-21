export type PdsCanonicalMonthlyReturnRow = {
  holdingMonth: string;
  coreDynamicFx: number;
  adaptiveDynamicFx: number;
};

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
  recentMonthlyReturns: PdsCanonicalMonthlyReturnRow[];
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
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.07355900764141787,
      "adaptiveDynamicFx": 0.07355900764141787
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.050561895952934144,
      "adaptiveDynamicFx": 0.05056189595293392
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.011664379167662942,
      "adaptiveDynamicFx": 0.011664379167663164
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.011720319641570942,
      "adaptiveDynamicFx": 0.011720319641570942
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07131811504061591,
      "adaptiveDynamicFx": 0.07131811504061658
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.053556369184104335,
      "adaptiveDynamicFx": 0.05355636918410478
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05253881997978804,
      "adaptiveDynamicFx": -0.019368238284913963
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.08283401362029075,
      "adaptiveDynamicFx": 0.07703105142590161
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07552314898626977,
      "adaptiveDynamicFx": 0.07552314898627022
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.00634916502585936,
      "adaptiveDynamicFx": 0.011009022881295794
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05786895063313491,
      "adaptiveDynamicFx": -0.03386550445454273
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.034807315340836587,
      "adaptiveDynamicFx": 0.029984256749902016
    }
  ],
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
