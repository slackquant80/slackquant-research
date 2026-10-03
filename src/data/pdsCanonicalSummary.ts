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
  "generatedAt": "2026-10-03T23:20:25.487476+09:00",
  "systemAsOfKst": "2026-10-03T23:18:12.672298+09:00",
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
      "coreDynamicFx": 0.05137456949676311,
      "adaptiveDynamicFx": 0.05056187742579876
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334697999394795,
      "adaptiveDynamicFx": 0.011664373653155424
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897624240306047,
      "adaptiveDynamicFx": 0.011720340480802394
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918998135747,
      "adaptiveDynamicFx": 0.0713180987456854
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830126117661005,
      "adaptiveDynamicFx": 0.05355638437720267
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755290302881,
      "adaptiveDynamicFx": -0.05253881228955981
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.0740896033778089,
      "adaptiveDynamicFx": 0.08283399558571247
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417047143144,
      "adaptiveDynamicFx": 0.07552315377152397
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646288261653142,
      "adaptiveDynamicFx": 0.009813938363848473
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835646062936,
      "adaptiveDynamicFx": -0.03447952332636839
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129898267317154,
      "adaptiveDynamicFx": 0.02998425532639737
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810631844592742,
      "adaptiveDynamicFx": -0.008144831435128341
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.610310845939234,
      "cagr": 0.14608230692777524,
      "annVol": 0.11164411194010028,
      "sharpe": 1.2799632061475026,
      "mdd": -0.1233172286752019,
      "calmar": 1.1846058210773853
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.0873041014189844,
      "cagr": 0.12719057277654344,
      "annVol": 0.10964344861881717,
      "sharpe": 1.1493353211943684,
      "mdd": -0.1355528470344396,
      "calmar": 0.9383098589159727
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341272108520167,
      "cagr": 0.16019287009297556,
      "annVol": 0.1169498436725727,
      "sharpe": 1.3324608155345794,
      "mdd": -0.11040266418877709,
      "calmar": 1.4509873585936512
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183847463317882,
      "cagr": 0.12797303885361,
      "annVol": 0.11668645824760308,
      "sharpe": 1.09312364788534,
      "mdd": -0.11953263017980298,
      "calmar": 1.0706117539713702
    }
  ]
} as PdsCanonicalSummary;
