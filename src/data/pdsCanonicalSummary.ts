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
  "generatedAt": "2026-10-03T21:50:50.768823+09:00",
  "systemAsOfKst": "2026-10-03T21:48:36.087896+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "2026-10-01",
  "markThrough": "2026-10-02",
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
  "previewFxZscore": -0.04429125009410503,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374573431834936,
      "adaptiveDynamicFx": 0.050561885052221145
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334677920011972,
      "adaptiveDynamicFx": 0.011664347058441216
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897629021480837,
      "adaptiveDynamicFx": 0.011720347348663784
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919540698319,
      "adaptiveDynamicFx": 0.07131810312671005
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830127298525212,
      "adaptiveDynamicFx": 0.05355639437105175
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207568085534726,
      "adaptiveDynamicFx": -0.05253882878667826
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408959174332752,
      "adaptiveDynamicFx": 0.08283399032318428
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262419593765235,
      "adaptiveDynamicFx": 0.07552317493516125
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.0046462965869710215,
      "adaptiveDynamicFx": 0.009813967112642485
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625831246848055,
      "adaptiveDynamicFx": -0.03447952109551833
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129881113824528,
      "adaptiveDynamicFx": 0.029984205062563163
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810620202306274,
      "adaptiveDynamicFx": -0.008144821786948753
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.610310938144042,
      "cagr": 0.14608231003650385,
      "annVol": 0.11164405687299898,
      "sharpe": 1.2799638071533503,
      "mdd": -0.12331713261566402,
      "calmar": 1.1846067690512303
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.0873041802665218,
      "cagr": 0.12719057583402704,
      "annVol": 0.10964339931705872,
      "sharpe": 1.149335813834754,
      "mdd": -0.13555291365952726,
      "calmar": 0.9383094202865739
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341262173406276,
      "cagr": 0.16019277472589066,
      "annVol": 0.11694981937466735,
      "sharpe": 1.3324603629950702,
      "mdd": -0.1104026931127009,
      "calmar": 1.4509861146445333
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183838932303716,
      "cagr": 0.12797294613497434,
      "annVol": 0.11668644105150602,
      "sharpe": 1.0931230854029017,
      "mdd": -0.11953265157678838,
      "calmar": 1.0706107866499044
    }
  ]
} as PdsCanonicalSummary;
