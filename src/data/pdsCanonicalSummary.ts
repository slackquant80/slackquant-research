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
  "generatedAt": "2026-09-26T21:06:47.438117+09:00",
  "systemAsOfKst": "2026-09-26T21:06:42.324462+09:00",
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
      "coreDynamicFx": 0.0711190385970919,
      "adaptiveDynamicFx": 0.07355898211459255
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374572376644334,
      "adaptiveDynamicFx": 0.05056188799480443
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334711969639534,
      "adaptiveDynamicFx": 0.01166437079776883
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897606694139528,
      "adaptiveDynamicFx": 0.011720329947939367
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919770176533,
      "adaptiveDynamicFx": 0.07131810510074987
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.0583012731950483,
      "adaptiveDynamicFx": 0.05355639448018712
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207570919700406,
      "adaptiveDynamicFx": -0.05253883115105651
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.074089632512361,
      "adaptiveDynamicFx": 0.08283402436992948
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262416620008483,
      "adaptiveDynamicFx": 0.07552315028513923
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646289807469506,
      "adaptiveDynamicFx": 0.009813991421048218
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583829351886,
      "adaptiveDynamicFx": -0.034479601843583674
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712989058195192,
      "adaptiveDynamicFx": 0.02998425407324712
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.6424022340723554,
      "cagr": 0.1485468206665148,
      "annVol": 0.11178819590499696,
      "sharpe": 1.2979036269416717,
      "mdd": -0.1233171079492652,
      "calmar": 1.204592153812345
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 2.1027105590787447,
      "cagr": 0.12898082028129942,
      "annVol": 0.1097844118823622,
      "sharpe": 1.162654007748548,
      "mdd": -0.135552895434782,
      "calmar": 0.9515165269439444
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 1.2524726139951463,
      "cagr": 0.16463977581296607,
      "annVol": 0.11706148847267941,
      "sharpe": 1.3644233816121483,
      "mdd": -0.11040265960738926,
      "calmar": 1.4912663915747435
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-08-31",
      "cumulativeReturn": 0.926663545004361,
      "cagr": 0.1309827615343111,
      "annVol": 0.11676871449175642,
      "sharpe": 1.1156001603872563,
      "mdd": -0.11953267421768321,
      "calmar": 1.095790438819899
    }
  ]
} as PdsCanonicalSummary;
