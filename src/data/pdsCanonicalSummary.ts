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
  "generatedAt": "2026-10-02T11:52:42.773018+09:00",
  "systemAsOfKst": "2026-10-02T11:52:38.155355+09:00",
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
      "coreDynamicFx": 0.0513745874931304,
      "adaptiveDynamicFx": 0.0505619004084481
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.01233469903074047,
      "adaptiveDynamicFx": 0.011664354241726071
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897614377004983,
      "adaptiveDynamicFx": 0.011720337887890064
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918983286469,
      "adaptiveDynamicFx": 0.0713181028065133
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830126324772866,
      "adaptiveDynamicFx": 0.05355637786870271
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755458311721,
      "adaptiveDynamicFx": -0.05253881005645977
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408959663445258,
      "adaptiveDynamicFx": 0.08283398708009848
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418815945182,
      "adaptiveDynamicFx": 0.07552316846482787
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646289778039714,
      "adaptiveDynamicFx": 0.009813973233837592
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583550962319,
      "adaptiveDynamicFx": -0.03447952144327604
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988849967446,
      "adaptiveDynamicFx": 0.02998420936220003
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810622629181863,
      "adaptiveDynamicFx": -0.008144823797140655
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.610311535899809,
      "cagr": 0.1460823301901204,
      "annVol": 0.1116440736576887,
      "sharpe": 1.2799637888543132,
      "mdd": -0.12331727919395996,
      "calmar": 1.1846055244241511
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087304691428559,
      "cagr": 0.12719059565543667,
      "annVol": 0.10964341519273414,
      "sharpe": 1.149335823725623,
      "mdd": -0.13555297904515207,
      "calmar": 0.9383091139079287
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.234126666560961,
      "cagr": 0.1601928178465215,
      "annVol": 0.11694984236424465,
      "sharpe": 1.3324604430366565,
      "mdd": -0.11040269934459046,
      "calmar": 1.4509864233167473
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.91838427896375,
      "cagr": 0.12797298805809798,
      "annVol": 0.11668645325630275,
      "sharpe": 1.093123302836722,
      "mdd": -0.11953261242189639,
      "calmar": 1.0706114880716475
    }
  ]
} as PdsCanonicalSummary;
