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
  "generatedAt": "2026-10-02T10:37:29.418024+09:00",
  "systemAsOfKst": "2026-10-02T10:37:24.398802+09:00",
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
      "coreDynamicFx": 0.05137460635265256,
      "adaptiveDynamicFx": 0.050561911869745124
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334704656470796,
      "adaptiveDynamicFx": 0.01166436862334419
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.01089758936166807,
      "adaptiveDynamicFx": 0.011720314046480551
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920536141492,
      "adaptiveDynamicFx": 0.07131811945314714
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830123494959061,
      "adaptiveDynamicFx": 0.05355635060381436
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207561498268216,
      "adaptiveDynamicFx": -0.05253881931805848
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960730631597,
      "adaptiveDynamicFx": 0.08283400340000613
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262419700908485,
      "adaptiveDynamicFx": 0.07552317581863655
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646291136779834,
      "adaptiveDynamicFx": 0.009813932677403159
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.0536258336120935,
      "adaptiveDynamicFx": -0.03447952338652516
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988572771957,
      "adaptiveDynamicFx": 0.0299842469320446
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810621195476043,
      "adaptiveDynamicFx": -0.008144822613116998
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.6103098470752397,
      "cagr": 0.14608227325059864,
      "annVol": 0.11164403249642177,
      "sharpe": 1.2799637736662604,
      "mdd": -0.12331731853879413,
      "calmar": 1.1846046847397427
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087303247255134,
      "cagr": 0.1271905396544919,
      "annVol": 0.1096433701409563,
      "sharpe": 1.149335796924739,
      "mdd": -0.13555287132194405,
      "calmar": 0.9383094464477167
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.234126836025791,
      "cagr": 0.16019283411343777,
      "annVol": 0.11694979099517926,
      "sharpe": 1.332461097100855,
      "mdd": -0.11040271651786404,
      "calmar": 1.4509863449557174
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183844244786168,
      "cagr": 0.12797300387326294,
      "annVol": 0.11668642329670899,
      "sharpe": 1.0931236740428436,
      "mdd": -0.11953265191696705,
      "calmar": 1.0706112666366587
    }
  ]
} as PdsCanonicalSummary;
