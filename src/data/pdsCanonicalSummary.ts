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
  adaptiveState: string | null;
  adaptiveRiskBudget: number | null;
  previewAvailable: boolean;
  previewSignal: string | null;
  previewHolding: string | null;
  previewThrough: string | null;
  adaptivePreviewAvailable: boolean;
  adaptivePreviewState: string | null;
  adaptivePreviewRiskBudget: number | null;
  officialFxHedge: number;
  officialFxZscore: number;
  previewFxAvailable: boolean;
  previewFxHedge: number | null;
  previewFxZscore: number | null;
  recentMonthlyReturns: PdsCanonicalMonthlyReturnRow[];
  performance: PdsCanonicalPerformanceRow[];
};

// Generated from the current PDS public dashboard.
// PREVIEW_UNAVAILABLE_IS_VALID_AT_MONTH_END: empty Preview arrays bind as explicit null state.
// MONTH_END_UNAVAILABLE_IS_VALID: current Adaptive/Preview states bind as explicit nulls until their execution clocks open.
// Do not hand-edit numerical values; refresh through the PDS publication workflow.
export const pdsCanonicalSummary: PdsCanonicalSummary = {
  "contract": "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
  "generatedAt": "2026-10-02T15:58:26.641617+09:00",
  "systemAsOfKst": "2026-10-02T15:55:01.483458+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "2026-10-01",
  "markThrough": "2026-10-01",
  "completedThrough": "2026-09-30",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "DEFENSIVE",
  "adaptiveRiskBudget": 0.7122377157211304,
  "previewAvailable": false,
  "previewSignal": null,
  "previewHolding": null,
  "previewThrough": null,
  "adaptivePreviewAvailable": false,
  "adaptivePreviewState": null,
  "adaptivePreviewRiskBudget": null,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.11451948526415265,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.11298281122774687,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374577266396715,
      "adaptiveDynamicFx": 0.050561888101678054
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334713455739221,
      "adaptiveDynamicFx": 0.011664371177630528
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897591439347432,
      "adaptiveDynamicFx": 0.011720317440173211
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918540344098,
      "adaptiveDynamicFx": 0.07131809905893838
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830127831289378,
      "adaptiveDynamicFx": 0.05355639055700023
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207573637724656,
      "adaptiveDynamicFx": -0.05253882977889668
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961879343345,
      "adaptiveDynamicFx": 0.08283401296304316
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417501864826,
      "adaptiveDynamicFx": 0.0755231576043982
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.0046462907183428825,
      "adaptiveDynamicFx": 0.009813899360789469
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625833207484264,
      "adaptiveDynamicFx": -0.034479524584348
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129898267316488,
      "adaptiveDynamicFx": 0.029984255326396925
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810631844592076,
      "adaptiveDynamicFx": -0.008144831435128341
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.6103106512522074,
      "cagr": 0.14608230036380965,
      "annVol": 0.11164405382310516,
      "sharpe": 1.2799637627498537,
      "mdd": -0.12331720012632597,
      "calmar": 1.1846060420943967
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.0873039349351976,
      "cagr": 0.12719056632077508,
      "annVol": 0.10964337663606126,
      "sharpe": 1.1493359513534813,
      "mdd": -0.13555291364215027,
      "calmar": 0.9383093502257637
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341264682136024,
      "cagr": 0.1601927988071723,
      "annVol": 0.11694983017756704,
      "sharpe": 1.3324604289457802,
      "mdd": -0.11040268493474947,
      "calmar": 1.450986440246901
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183841086482225,
      "cagr": 0.12797296954749182,
      "annVol": 0.11668644525845448,
      "sharpe": 1.0931232286945582,
      "mdd": -0.1195326333411022,
      "calmar": 1.0706111458475445
    }
  ]
} as PdsCanonicalSummary;
