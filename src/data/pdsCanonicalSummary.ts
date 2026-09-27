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
  "generatedAt": "2026-09-27T12:22:58.296592+09:00",
  "systemAsOfKst": "2026-09-27T12:22:53.572205+09:00",
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
  "adaptivePreviewRiskBudget": 0.6890733242034912,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.24941947094137737,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.23136701546963973,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.0711190652514726,
      "adaptiveDynamicFx": 0.07355901369216111
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374586000505706,
      "adaptiveDynamicFx": 0.050561890548999955
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334671416570187,
      "adaptiveDynamicFx": 0.01166433545630885
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897630339675723,
      "adaptiveDynamicFx": 0.011720352667459633
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919480074058,
      "adaptiveDynamicFx": 0.07131810272040129
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830123931052822,
      "adaptiveDynamicFx": 0.053556365846304965
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755386526954,
      "adaptiveDynamicFx": -0.05253881265113969
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960677899024,
      "adaptiveDynamicFx": 0.08283399995066776
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262416829252172,
      "adaptiveDynamicFx": 0.07552314781873881
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646287235373192,
      "adaptiveDynamicFx": 0.009813990869996791
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583805868504,
      "adaptiveDynamicFx": -0.03447960063277078
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.0271298905819517,
      "adaptiveDynamicFx": 0.029984254073246674
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.6424042136553716,
      "cagr": 0.1485468875467264,
      "annVol": 0.11178818710369039,
      "sharpe": 1.297904242763309,
      "mdd": -0.123317177334902,
      "calmar": 1.2045920183796142
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.102712245348602,
      "cagr": 0.12898088602217683,
      "annVol": 0.10978442012413295,
      "sharpe": 1.162654460371641,
      "mdd": -0.13555291179198703,
      "calmar": 0.9515168971073428
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.252471640209822,
      "cagr": 0.1646396813105766,
      "annVol": 0.11706150102034966,
      "sharpe": 1.3644225523389606,
      "mdd": -0.11040270598484625,
      "calmar": 1.4912649091515462
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.9266627120722899,
      "cagr": 0.13098266976295392,
      "annVol": 0.1167687302471894,
      "sharpe": 1.1155993282300112,
      "mdd": -0.11953268648862703,
      "calmar": 1.0957895585774884
    }
  ]
} as PdsCanonicalSummary;
