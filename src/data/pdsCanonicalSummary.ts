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
  "generatedAt": "2026-09-26T16:01:41.968660+09:00",
  "systemAsOfKst": "2026-09-26T16:01:37.045340+09:00",
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
  "adaptivePreviewRiskBudget": 0.6890732645988464,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.24941947094137737,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.23136701546963973,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-09",
      "coreDynamicFx": 0.07111907728435463,
      "adaptiveDynamicFx": 0.07355901868304238
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137457943233836,
      "adaptiveDynamicFx": 0.05056189397074062
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334704872015712,
      "adaptiveDynamicFx": 0.011664367436043044
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897586748688015,
      "adaptiveDynamicFx": 0.011720310626768926
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920733030175,
      "adaptiveDynamicFx": 0.0713181169457009
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301249293727375,
      "adaptiveDynamicFx": 0.05355637053703877
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755892733453,
      "adaptiveDynamicFx": -0.052538820390755525
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960972339385,
      "adaptiveDynamicFx": 0.08283400962900789
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418868335163,
      "adaptiveDynamicFx": 0.07552316472120979
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646294272754314,
      "adaptiveDynamicFx": 0.009813912185427043
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835600260796,
      "adaptiveDynamicFx": -0.0344795297704974
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
      "cumulativeReturn": 2.6424024898462797,
      "cagr": 0.1485468293078387,
      "annVol": 0.11178817897679408,
      "sharpe": 1.297903874552669,
      "mdd": -0.12331717520883856,
      "calmar": 1.204591566878446
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.1027107769548716,
      "cagr": 0.12898082877541484,
      "annVol": 0.1097844186470248,
      "sharpe": 1.1626540116508046,
      "mdd": -0.1355528290771687,
      "calmar": 0.951517055405664
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.252473783369283,
      "cagr": 0.16463988929650752,
      "annVol": 0.11706149323714386,
      "sharpe": 1.3644241659277678,
      "mdd": -0.11040267236150336,
      "calmar": 1.4912672472040296
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.9266645452342794,
      "cagr": 0.13098287173828194,
      "annVol": 0.11676872771090613,
      "sharpe": 1.1156008841723446,
      "mdd": -0.11953261151881245,
      "calmar": 1.0957919355561592
    }
  ]
} as PdsCanonicalSummary;
