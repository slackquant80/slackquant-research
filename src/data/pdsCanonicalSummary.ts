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
  "generatedAt": "2026-10-02T01:42:57.459422+09:00",
  "systemAsOfKst": "2026-10-02T01:42:52.816806+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "",
  "markThrough": "2026-09-30",
  "completedThrough": "2026-09-30",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": null,
  "adaptiveRiskBudget": null,
  "previewAvailable": false,
  "previewSignal": null,
  "previewHolding": null,
  "previewThrough": null,
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "DEFENSIVE",
  "adaptivePreviewRiskBudget": 0.730446457862854,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.045859756660078715,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.045859756660078715,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137457876963425,
      "adaptiveDynamicFx": 0.05056188879367318
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.01233469707596857,
      "adaptiveDynamicFx": 0.011664359433236626
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897627673792654,
      "adaptiveDynamicFx": 0.011720346272194426
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233917828300229,
      "adaptiveDynamicFx": 0.0713180931717694
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.0583012563057006,
      "adaptiveDynamicFx": 0.05355637228990173
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207564799286786,
      "adaptiveDynamicFx": -0.05253882241492791
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961035902806,
      "adaptiveDynamicFx": 0.08283400305675803
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.0726241578818414,
      "adaptiveDynamicFx": 0.07552314329427023
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646289079214161,
      "adaptiveDynamicFx": 0.009813988468351909
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.0536258380537219,
      "adaptiveDynamicFx": -0.0344795992004161
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129890581951477,
      "adaptiveDynamicFx": 0.02998425407324712
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.011112744833781996,
      "adaptiveDynamicFx": -0.010448492626603745
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.601927197689693,
      "cagr": 0.14579935449789572,
      "annVol": 0.11164902129412421,
      "sharpe": 1.2776946501981157,
      "mdd": -0.12331722603852058,
      "calmar": 1.18231133785277
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.0873054840073286,
      "cagr": 0.12719062638938072,
      "annVol": 0.10964340354998169,
      "sharpe": 1.1493361836770293,
      "mdd": -0.13555302034741756,
      "calmar": 0.9383090547403199
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2289382800464899,
      "cagr": 0.1596943129320345,
      "annVol": 0.1169609166116322,
      "sharpe": 1.3286596895590024,
      "mdd": -0.11040269305716677,
      "calmar": 1.446471173029669
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183847671379359,
      "cagr": 0.12797304111490893,
      "annVol": 0.11668645120550875,
      "sharpe": 1.0931237241252059,
      "mdd": -0.11953265141161329,
      "calmar": 1.0706115827233764
    }
  ]
} as PdsCanonicalSummary;
