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
  "generatedAt": "2026-09-29T17:05:56.618981+09:00",
  "systemAsOfKst": "2026-09-29T17:05:49.553639+09:00",
  "officialSignal": "2026-08",
  "holdingMonth": "2026-09",
  "executionClose": "2026-09-01",
  "markThrough": "2026-09-28",
  "completedThrough": "2026-08-31",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "NORMAL",
  "adaptiveRiskBudget": 1.0,
  "previewSignal": "2026-09",
  "previewHolding": "2026-10",
  "previewThrough": "2026-09-28",
  "adaptivePreviewState": "DEFENSIVE",
  "adaptivePreviewRiskBudget": 0.7104738354682922,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.24941947094137737,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.09100232665823078,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.07111900991168452,
      "adaptiveDynamicFx": 0.07355896290349384
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374599318520175,
      "adaptiveDynamicFx": 0.050561906201297635
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334687773660535,
      "adaptiveDynamicFx": 0.011664361368965537
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897615243727454,
      "adaptiveDynamicFx": 0.011720332889043839
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723392042660751,
      "adaptiveDynamicFx": 0.07131811438180513
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830125104439787,
      "adaptiveDynamicFx": 0.05355637225179599
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207572911813436,
      "adaptiveDynamicFx": -0.05253883248675317
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960506504769,
      "adaptiveDynamicFx": 0.08283400155599652
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418352192013,
      "adaptiveDynamicFx": 0.07552316465626907
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646289828245553,
      "adaptiveDynamicFx": 0.009813918776214292
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835638686836,
      "adaptiveDynamicFx": -0.03447952945722066
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712989058195192,
      "adaptiveDynamicFx": 0.029984254073246452
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.642403573652861,
      "cagr": 0.14854686592424526,
      "annVol": 0.1117882206088244,
      "sharpe": 1.2979037185175464,
      "mdd": -0.12331727414806237,
      "calmar": 1.2045908973457415
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.10271170017477,
      "cagr": 0.12898086476804593,
      "annVol": 0.1097844424981051,
      "sharpe": 1.162654074093738,
      "mdd": -0.13555297352083684,
      "calmar": 0.9515163070046512
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.2524727559845026,
      "cagr": 0.16463978959252334,
      "annVol": 0.11706153278894728,
      "sharpe": 1.3644230107622606,
      "mdd": -0.11040267057976161,
      "calmar": 1.4912663681770046
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.9266636664556698,
      "cagr": 0.13098277491565358,
      "annVol": 0.11676876206086433,
      "sharpe": 1.1155998550179282,
      "mdd": -0.11953263370035772,
      "calmar": 1.095790922201203
    }
  ]
} as PdsCanonicalSummary;
