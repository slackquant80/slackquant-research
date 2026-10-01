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
  "generatedAt": "2026-10-01T16:46:16.737992+09:00",
  "systemAsOfKst": "2026-10-01T16:46:11.679157+09:00",
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
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.07111908980838089,
      "adaptiveDynamicFx": 0.0735590337095029
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137455570073035,
      "adaptiveDynamicFx": 0.05056187015502411
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.01233470622528765,
      "adaptiveDynamicFx": 0.01166436256467307
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897617418462957,
      "adaptiveDynamicFx": 0.011720344412313732
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919967734503,
      "adaptiveDynamicFx": 0.07131811091715212
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830124719889662,
      "adaptiveDynamicFx": 0.05355636869623148
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756233427126,
      "adaptiveDynamicFx": -0.0525388235801989
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408962987286616,
      "adaptiveDynamicFx": 0.08283402650962701
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262416223090673,
      "adaptiveDynamicFx": 0.07552314281774075
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646297465385807,
      "adaptiveDynamicFx": 0.00981394907043387
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625826852445324,
      "adaptiveDynamicFx": -0.03447956214812198
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129885727720016,
      "adaptiveDynamicFx": 0.02998425186868303
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.601925234251618,
      "cagr": 0.14579928816193766,
      "annVol": 0.11164896965674229,
      "sharpe": 1.2776946690946507,
      "mdd": -0.12331710011102215,
      "calmar": 1.1823120072615625
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087303801093492,
      "cagr": 0.12719056113077354,
      "annVol": 0.10964336038208217,
      "sharpe": 1.1493360631413014,
      "mdd": -0.1355528926956563,
      "calmar": 0.9383094569316357
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.2524725365507057,
      "cagr": 0.16463976829726068,
      "annVol": 0.11706149996508915,
      "sharpe": 1.3644232039164332,
      "mdd": -0.1104027050555707,
      "calmar": 1.4912657096072963
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.9266634787618804,
      "cagr": 0.13098275423580308,
      "annVol": 0.11676871354601777,
      "sharpe": 1.1156001129516666,
      "mdd": -0.11953269543722167,
      "calmar": 1.09579018323564
    }
  ]
} as PdsCanonicalSummary;
