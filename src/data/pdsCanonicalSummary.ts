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
  "generatedAt": "2026-09-27T10:39:22.499982+09:00",
  "systemAsOfKst": "2026-09-27T10:39:17.842244+09:00",
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
  "adaptivePreviewRiskBudget": 0.6890736222267151,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.24941947094137737,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.23136701546963973,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.07111902299004935,
      "adaptiveDynamicFx": 0.07355896509435955
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374588033332946,
      "adaptiveDynamicFx": 0.050561905052348255
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334684907840288,
      "adaptiveDynamicFx": 0.011664358745563819
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897599072413167,
      "adaptiveDynamicFx": 0.011720315714017104
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233921421960976,
      "adaptiveDynamicFx": 0.0713181189899541
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301239724311005,
      "adaptiveDynamicFx": 0.05355636267900121
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756333672527,
      "adaptiveDynamicFx": -0.0525388214884267
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961995335295,
      "adaptiveDynamicFx": 0.0828340153719278
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262416433683305,
      "adaptiveDynamicFx": 0.07552314451504549
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646285493852487,
      "adaptiveDynamicFx": 0.009813918080257666
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583562908274,
      "adaptiveDynamicFx": -0.03447953067794707
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129890581951255,
      "adaptiveDynamicFx": 0.029984254073246897
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.6424026881302485,
      "cagr": 0.14854683600686358,
      "annVol": 0.11178823867858566,
      "sharpe": 1.2979032936110366,
      "mdd": -0.12331731312731187,
      "calmar": 1.2045902739828993
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.10271094585926,
      "cagr": 0.12898083536031857,
      "annVol": 0.10978444934361763,
      "sharpe": 1.1626537711033278,
      "mdd": -0.13555309650266223,
      "calmar": 0.95151522678632
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.2524728729458134,
      "cagr": 0.1646398009431982,
      "annVol": 0.11706152850379058,
      "sharpe": 1.3644231397131472,
      "mdd": -0.11040271592646644,
      "calmar": 1.4912658584672525
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.926663766499092,
      "cagr": 0.13098278593830304,
      "annVol": 0.11676875123600046,
      "sharpe": 1.1156000311545846,
      "mdd": -0.11953266468201407,
      "calmar": 1.0957907303978296
    }
  ]
} as PdsCanonicalSummary;
