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

// Generated from the current PDS public dashboard.
// Do not hand-edit numerical values; refresh through the PDS publication workflow.
export const pdsCanonicalSummary: PdsCanonicalSummary = {
  "contract": "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
  "generatedAt": "2026-09-27T13:18:40.429703+09:00",
  "systemAsOfKst": "2026-09-27T13:18:35.241444+09:00",
  "officialSignal": "2026-08",
  "holdingMonth": "2026-09",
  "executionClose": "2026-09-01",
  "markThrough": "2026-09-25",
  "completedThrough": "2026-08-31",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "NORMAL",
  "adaptiveRiskBudget": 1.0,
  "previewSignal": "2026-09",
  "previewHolding": "2026-10",
  "previewThrough": "2026-09-25",
  "adaptivePreviewState": "DEFENSIVE",
  "adaptivePreviewRiskBudget": 0.6890734434127808,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.24941947094137737,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.23136701546963973,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.07111903905848416,
      "adaptiveDynamicFx": 0.0735589784384747
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137459786067322,
      "adaptiveDynamicFx": 0.050561917118757016
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334675655709004,
      "adaptiveDynamicFx": 0.01166433810137013
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897625372338515,
      "adaptiveDynamicFx": 0.011720341460997208
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919066819405,
      "adaptiveDynamicFx": 0.0713181031596235
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830124380383883,
      "adaptiveDynamicFx": 0.05355636596805713
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755442328095,
      "adaptiveDynamicFx": -0.05253881703969043
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960562991429,
      "adaptiveDynamicFx": 0.08283400344699143
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262415211783169,
      "adaptiveDynamicFx": 0.07552313431948288
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.00464629186732346,
      "adaptiveDynamicFx": 0.00981390876522159
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583375965835,
      "adaptiveDynamicFx": -0.03447953119448455
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129885727720016,
      "adaptiveDynamicFx": 0.02998425186868281
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.6424031771292604,
      "cagr": 0.14854685252769606,
      "annVol": 0.11178822209489264,
      "sharpe": 1.2979035985716292,
      "mdd": -0.12331726133934529,
      "calmar": 1.204590913829361
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.1027113624036975,
      "cagr": 0.1289808515997113,
      "annVol": 0.10978444036242739,
      "sharpe": 1.162653988449201,
      "mdd": -0.1355528564989752,
      "calmar": 0.9515170312968388
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.2524730249401697,
      "cagr": 0.16463981569370345,
      "annVol": 0.11706153726770091,
      "sharpe": 1.364423155376611,
      "mdd": -0.1104026896682142,
      "calmar": 1.491266346757352
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.926663896508203,
      "cagr": 0.13098280026253128,
      "annVol": 0.11676876054576259,
      "sharpe": 1.1156000606207606,
      "mdd": -0.11953263107420253,
      "calmar": 1.095791158325803
    }
  ]
} as PdsCanonicalSummary;
