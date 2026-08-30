export type PdsPublicStrategyWeight = {
  signalPeriod: string;
  holdingMonth: string;
  f2rWeight: number;
  adaaWeight: number;
  weightBasis: string;
};

export type PdsPublicAssetTarget = {
  signalPeriod: string;
  holdingMonth: string;
  ticker: string;
  targetWeight: number;
};

export type PdsPublicMonthlyReturn = {
  period: string;
  seriesId: string;
  displayName: string;
  netReturn: number;
  seriesRole: string;
};


export type PdsPublicPerformancePoint = {
  signalPeriod: string;
  holdingMonth: string;
  seriesId: string;
  displayName: string;
  netReturn: number;
  cumulativeWealth: number;
  drawdown: number;
  seriesRole: string;
};

export type PdsPublicPerformanceSummary = {
  seriesId: string;
  displayName: string;
  months: number;
  startHoldingMonth: string;
  endHoldingMonth: string;
  cagr: number | null;
  annVol: number | null;
  sharpeRf0: number | null;
  maxDrawdown: number | null;
  calmar: number | null;
  cumulativeReturn: number | null;
  terminalWealth: number | null;
  seriesRole: string;
};

export type PdsPublicCalendarReturn = {
  year: string;
  seriesId: string;
  displayName: string;
  annualReturn: number;
  monthsObserved: number;
  seriesRole: string;
};

export type PdsPublicFxPerformancePoint = {
  signalPeriod: string;
  holdingMonth: string;
  seriesId: string;
  displayName: string;
  netReturn: number;
  cumulativeWealth: number;
  drawdown: number;
  layerStatus: string;
};

export type PdsPublicFxPerformanceSummary = {
  seriesId: string;
  displayName: string;
  months: number;
  startHoldingMonth: string;
  endHoldingMonth: string;
  cagr: number | null;
  annVol: number | null;
  sharpeRf0: number | null;
  maxDrawdown: number | null;
  calmar: number | null;
  cumulativeReturn: number | null;
  terminalWealth: number | null;
  layerStatus: string;
};

export type PdsPublicFxHedgePoint = {
  signalPeriod: string;
  holdingMonth: string;
  dynamicHedgeRatio: number;
  zscoreSignal: number | null;
  layerStatus: string;
};


export type PdsPublicFxCalendarReturn = {
  year: string;
  seriesId: string;
  displayName: string;
  annualReturn: number;
  monthsObserved: number;
  layerStatus: string;
};

export type PdsPublicSnapshot = {
  exportStatus: "BOUND_PUBLIC_SAFE_EXPORT";
  publicAsOfDate: string;
  completedHoldingMonthCutoff: string;
  latestEligibleSignalPeriod: string;
  latestReleasedSignalPeriod: string;
  sourceProgramVersion: string;
  sourceRs03Version: string;
  publicComponentIdentity: "ADAA + F2R";
  latestStrategyWeights: PdsPublicStrategyWeight | null;
  latestAssetTargets: PdsPublicAssetTarget[];
  recentMonthlyReturns: PdsPublicMonthlyReturn[];
  corePerformance: PdsPublicPerformancePoint[];
  corePerformanceSummary: PdsPublicPerformanceSummary[];
  coreCalendarReturns: PdsPublicCalendarReturn[];
  fxPerformance: PdsPublicFxPerformancePoint[];
  fxPerformanceSummary: PdsPublicFxPerformanceSummary[];
  fxHedgeHistory: PdsPublicFxHedgePoint[];
  fxCalendarReturns: PdsPublicFxCalendarReturn[];
  rawDataBaseHref: "/data/systems/pds";
};

// This file is intentionally source-controlled as an empty binding point.
// `scripts/sync-pds-public.ps1` replaces the value below only after the
// source-owned PDS public exporter has produced and validated a governed
// delayed snapshot. No private/operator PDS state is copied into this module.
// PDS_PUBLIC_BINDING_START
export const pdsPublicSnapshot: PdsPublicSnapshot | null = {
  "exportStatus": "BOUND_PUBLIC_SAFE_EXPORT",
  "publicAsOfDate": "2026-08-31",
  "completedHoldingMonthCutoff": "2026-07",
  "latestEligibleSignalPeriod": "2026-06",
  "latestReleasedSignalPeriod": "2026-06",
  "sourceProgramVersion": "v0.3.125",
  "sourceRs03Version": "v0.20.82",
  "publicComponentIdentity": "ADAA + F2R",
  "latestStrategyWeights": {
    "signalPeriod": "2026-06",
    "holdingMonth": "2026-07",
    "f2rWeight": 0.5,
    "adaaWeight": 0.5,
    "weightBasis": "FIXED_50_50"
  },
  "latestAssetTargets": [
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "EEM",
      "targetWeight": 0.2562500000000001
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "QQQ",
      "targetWeight": 0.2062500000000001
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "EWY",
      "targetWeight": 0.1781250000000001
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "GLD",
      "targetWeight": 0.15625
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "SPY",
      "targetWeight": 0.0718750000000001
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "IEF",
      "targetWeight": 0.03125
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "EFA",
      "targetWeight": 0.020833333333333374
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "IWM",
      "targetWeight": 0.020833333333333374
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "DBC",
      "targetWeight": 0.014583333333333361
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "HYG",
      "targetWeight": 0.014583333333333361
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "VGK",
      "targetWeight": 0.014583333333333361
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "ticker": "VNQ",
      "targetWeight": 0.014583333333333361
    }
  ],
  "recentMonthlyReturns": [
    {
      "period": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03598038620767857,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "period": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.050347914749639816,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02161285766571732,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.060552171219791506,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "period": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07021404712062568,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.05089029531895734,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08630510071257433,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "period": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09586742288693793,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07674277853821072,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.09872338031836955,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "period": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13044945286438747,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06699730777235165,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0637830953591469,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "period": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.06988774127853778,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.05767844943975602,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.035913027484913124,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "period": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008098278636757814,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06372777633306843,
      "seriesRole": "CORE_STRATEGY"
    }
  ],
  "corePerformance": [
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.018164413309285275,
      "cumulativeWealth": 1.0181644133092853,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04115893166377081,
      "cumulativeWealth": 1.0600709728191655,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.017978985785744698,
      "cumulativeWealth": 1.041011971866969,
      "drawdown": -0.01797898578574486,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.028487931582331642,
      "cumulativeWealth": 1.0706682496979034,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0038642104374657137,
      "cumulativeWealth": 1.0748055371234493,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0032647532814997263,
      "cumulativeWealth": 1.078314512027747,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04208976531629861,
      "cumulativeWealth": 1.123700516776154,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.011758146530190349,
      "cumulativeWealth": 1.1369131521084586,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.021327775957178052,
      "cumulativeWealth": 1.1611609810993968,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01911923990515852,
      "cumulativeWealth": 1.1833614964655454,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04450874646325083,
      "cumulativeWealth": 1.1306915596449874,
      "drawdown": -0.04450874646325087,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01623692267653879,
      "cumulativeWealth": 1.1123326082200167,
      "drawdown": -0.060022984065036145,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.018356195534396144,
      "cumulativeWealth": 1.132750803075788,
      "drawdown": -0.042768582162695856,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01499458635894885,
      "cumulativeWealth": 1.1497359328156767,
      "drawdown": -0.028415293002435282,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.023160827846909503,
      "cumulativeWealth": 1.1231070968063268,
      "drawdown": -0.05091799913989592,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01894783074315313,
      "cumulativeWealth": 1.1443875399830472,
      "drawdown": -0.032934954026225594,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03370860866130019,
      "cumulativeWealth": 1.1829632517252036,
      "drawdown": -0.0003365368414735004,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0009818302997063309,
      "cumulativeWealth": 1.1818017825612206,
      "drawdown": -0.0013180367191119036,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08517032538759788,
      "cumulativeWealth": 1.0811473401968383,
      "drawdown": -0.08637610449047017,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.018355470020222427,
      "cumulativeWealth": 1.1009923077872645,
      "drawdown": -0.06960610846668625,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.09399385060250105,
      "cumulativeWealth": 0.9975058012946055,
      "drawdown": -0.15705741290894815,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0678437973647556,
      "cumulativeWealth": 1.065180382747805,
      "drawdown": -0.09986898684021983,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.023604947724728154,
      "cumulativeWealth": 1.0903239099999729,
      "drawdown": -0.0786214413291767,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.011322885989867174,
      "cumulativeWealth": 1.1026695233249286,
      "drawdown": -0.06818877695583891,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.017292395798067232,
      "cumulativeWealth": 1.1217373211567294,
      "drawdown": -0.05207552847787811,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03850026449679764,
      "cumulativeWealth": 1.078550137596266,
      "drawdown": -0.08857087135446706,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07986904775196979,
      "cumulativeWealth": 1.164692910038836,
      "drawdown": -0.015775894756140607,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01221076775361091,
      "cumulativeWealth": 1.1504711154100744,
      "drawdown": -0.027794026722778975,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0005621971828656468,
      "cumulativeWealth": 1.151117907030126,
      "drawdown": -0.027247455263437526,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0009615577812047442,
      "cumulativeWealth": 1.1500110406495372,
      "drawdown": -0.028182813042015642,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.048113806476452546,
      "cumulativeWealth": 1.2053424493051328,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.004615841467739347,
      "cumulativeWealth": 1.210906118965462,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.049518795069718485,
      "cumulativeWealth": 1.2708687309191808,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.017615332859434205,
      "cumulativeWealth": 1.293255506634969,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.012760842575692578,
      "cumulativeWealth": 1.2767524767046525,
      "drawdown": -0.012760842575692544,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08989570008822173,
      "cumulativeWealth": 1.1619779189719168,
      "drawdown": -0.10150939778685675,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.12695031328386436,
      "cumulativeWealth": 1.3094913798143344,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07538425965989437,
      "cumulativeWealth": 1.4082064180126515,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03268321719945337,
      "cumulativeWealth": 1.4542311342342231,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04745595864603582,
      "cumulativeWealth": 1.5232430668022203,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06354175389700775,
      "cumulativeWealth": 1.6200326028782903,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03019282345427512,
      "cumulativeWealth": 1.5711192445094164,
      "drawdown": -0.030192823454275097,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.020633415225935193,
      "cumulativeWealth": 1.538701688767996,
      "drawdown": -0.05020325761703481,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09776386437772765,
      "cumulativeWealth": 1.689131111986491,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03147122864033515,
      "cumulativeWealth": 1.7422901434153213,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05186958066791346,
      "cumulativeWealth": 1.832662002556113,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.024161120937011685,
      "cumulativeWealth": 1.876941170836537,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.023103932898522462,
      "cumulativeWealth": 1.9203058937020188,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.031176912164440542,
      "cumulativeWealth": 1.980175101878824,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.023145212757767424,
      "cumulativeWealth": 2.0260066759094433,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01646182981597502,
      "cumulativeWealth": 2.059358453014294,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.022182181498238147,
      "cumulativeWealth": 2.105039515988988,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01398340612766534,
      "cumulativeWealth": 2.134475138455846,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031488183160258816,
      "cumulativeWealth": 2.0672643943451297,
      "drawdown": -0.03148818316025881,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.059357284469824426,
      "cumulativeWealth": 2.189971595074613,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.053076814402194805,
      "cumulativeWealth": 2.0737348791767594,
      "drawdown": -0.053076814402194805,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.027518902087590006,
      "cumulativeWealth": 2.1308017862724453,
      "drawdown": -0.027018527973259765,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03061941661373551,
      "cumulativeWealth": 2.0655578786572777,
      "drawdown": -0.05681065302269206,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01322841252951012,
      "cumulativeWealth": 2.0382338269348192,
      "drawdown": -0.06928755079794724,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06196228620707862,
      "cumulativeWealth": 2.1645274546763034,
      "drawdown": -0.011618479643998647,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04247655620254803,
      "cumulativeWealth": 2.0725857825957874,
      "drawdown": -0.05360152284296005,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.007929238920092526,
      "cumulativeWealth": 2.0561517547431984,
      "drawdown": -0.06110574248195,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.06461041621379598,
      "cumulativeWealth": 1.9233029340705134,
      "drawdown": -0.12176809124093413,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07352651474141314,
      "cumulativeWealth": 2.0647166956046523,
      "drawdown": -0.0571947598551813,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04718687294207673,
      "cumulativeWealth": 1.9672891712277711,
      "drawdown": -0.10168279093101895,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08360216814116739,
      "cumulativeWealth": 1.8028195311524893,
      "drawdown": -0.17678405728770807,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0388872328183952,
      "cumulativeWealth": 1.872926193989966,
      "drawdown": -0.14477146726364054,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.032726184151217315,
      "cumulativeWealth": 1.9342199215161204,
      "drawdown": -0.11678310080993493,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04975014416629823,
      "cumulativeWealth": 1.8379922015713674,
      "drawdown": -0.16072326887475152,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.12768301794975073,
      "cumulativeWealth": 2.0726725928361063,
      "drawdown": -0.05356188294967834,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.047472064167810024,
      "cumulativeWealth": 1.9742785465101294,
      "drawdown": -0.0984912539731525,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01263283978434338,
      "cumulativeWealth": 1.9992192910778581,
      "drawdown": -0.0871026384204111,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.000625687852370858,
      "cumulativeWealth": 1.9979684038532053,
      "drawdown": -0.08767382721001282,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03507156632193239,
      "cumulativeWealth": 2.068040285238068,
      "drawdown": -0.05567711933377406,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04894401935446348,
      "cumulativeWealth": 2.1692584889845703,
      "drawdown": -0.00945816198558369,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03979097651004021,
      "cumulativeWealth": 2.2555754025639607,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031178298047892527,
      "cumulativeWealth": 2.1852504003933264,
      "drawdown": -0.031178298047892516,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.06260838209157223,
      "cumulativeWealth": 2.04843540835974,
      "drawdown": -0.09183465734231733,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0274806988614873,
      "cumulativeWealth": 1.992142971765398,
      "drawdown": -0.11679167564033255,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.11898404295318885,
      "cumulativeWealth": 2.2291761966868253,
      "drawdown": -0.011703978438107998,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03573981886943731,
      "cumulativeWealth": 2.3088465501844735,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.004962078829418261,
      "cumulativeWealth": 2.320303228771519,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04338495990157487,
      "cumulativeWealth": 2.420969491311266,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.025666602785053484,
      "cumulativeWealth": 2.483107553599485,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.057111749873616204,
      "cumulativeWealth": 2.341292936089024,
      "drawdown": -0.057111749873616335,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04325820058061189,
      "cumulativeWealth": 2.4425730555363327,
      "drawdown": -0.01632410082454694,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01980630456826909,
      "cumulativeWealth": 2.490951401404533,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01832196635083259,
      "cumulativeWealth": 2.536590529162626,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.002763833485597152,
      "cumulativeWealth": 2.5295798153188778,
      "drawdown": -0.002763833485597167,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03441138483618987,
      "cumulativeWealth": 2.6166261598176734,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01224472144382334,
      "cumulativeWealth": 2.648666018267262,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0640183328702156,
      "cumulativeWealth": 2.818229201086724,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.02796001901907834,
      "cumulativeWealth": 2.739431459024217,
      "drawdown": -0.027960019019078297,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.027293341977714256,
      "cumulativeWealth": 2.8141996986598734,
      "drawdown": -0.001429799402155263,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.026294425939505026,
      "cumulativeWealth": 2.740201933104484,
      "drawdown": -0.02768662958717205,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01198972709979453,
      "cumulativeWealth": 2.7073476597282315,
      "drawdown": -0.039344401553903285,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.007707498511539724,
      "cumulativeWealth": 2.6864807816706557,
      "drawdown": -0.046748653149028874,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06086423944855715,
      "cumulativeWealth": 2.8499913912402057,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03531576029812018,
      "cumulativeWealth": 2.950641004064951,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0025093923486794374,
      "cumulativeWealth": 2.9580453200242514,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0303307214408876,
      "cumulativeWealth": 3.0477649686354282,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.08957535143571298,
      "cumulativeWealth": 3.3207695867944014,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.028546550748968468,
      "cumulativeWealth": 3.4155661043294585,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.012997317450770327,
      "cumulativeWealth": 3.3711729073973973,
      "drawdown": -0.012997317450770374,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05130117753338765,
      "cumulativeWealth": 3.5441180472155374,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04083882840365285,
      "cumulativeWealth": 3.688855675988062,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008098278636757814,
      "cumulativeWealth": 3.718729057102999,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.06988774127853778,
      "cumulativeWealth": 3.458835482875204,
      "drawdown": -0.0698877412785377,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13044945286438747,
      "cumulativeWealth": 3.9100386791642032,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09586742288693793,
      "cumulativeWealth": 4.284884010723922,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07021404712062568,
      "cumulativeWealth": 3.984024962888537,
      "drawdown": -0.07021404712062562,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.050347914749639816,
      "cumulativeWealth": 3.783437613696588,
      "drawdown": -0.11702683101160904,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-05",
      "holdingMonth": "2008-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0013105679138338848,
      "cumulativeWealth": 1.0013105679138339,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-06",
      "holdingMonth": "2008-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.025987786821025503,
      "cumulativeWealth": 0.9752887223332491,
      "drawdown": -0.025987786821025538,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-07",
      "holdingMonth": "2008-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.023231696786600104,
      "cumulativeWealth": 0.9526311104566125,
      "drawdown": -0.048615743224044716,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-08",
      "holdingMonth": "2008-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02521412850464174,
      "cumulativeWealth": 0.9286113472200399,
      "drawdown": -0.07260406813168674,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-09",
      "holdingMonth": "2008-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04318103282565525,
      "cumulativeWealth": 0.8885129501534554,
      "drawdown": -0.11264998230807155,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-10",
      "holdingMonth": "2008-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05006017335795373,
      "cumulativeWealth": 0.9329920624689243,
      "drawdown": -0.06822908659323035,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-11",
      "holdingMonth": "2008-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03951212486233538,
      "cumulativeWealth": 0.9698565613367642,
      "drawdown": -0.03141283791960969,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2008-12",
      "holdingMonth": "2009-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03516666300203007,
      "cumulativeWealth": 0.9357499424839265,
      "drawdown": -0.06547481623658358,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-01",
      "holdingMonth": "2009-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.014082880809250247,
      "cumulativeWealth": 0.9225718875766626,
      "drawdown": -0.07863562301276639,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-02",
      "holdingMonth": "2009-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027340567817139554,
      "cumulativeWealth": 0.9477955268351388,
      "drawdown": -0.05344499777945044,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-03",
      "holdingMonth": "2009-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0023606673777137217,
      "cumulativeWealth": 0.9500329568160815,
      "drawdown": -0.0512104962644967,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-04",
      "holdingMonth": "2009-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04915064966637535,
      "cumulativeWealth": 0.9967276938480594,
      "drawdown": -0.004576875759258803,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-05",
      "holdingMonth": "2009-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021100812284583242,
      "cumulativeWealth": 0.9756959298813259,
      "drawdown": -0.02558111224759607,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-06",
      "holdingMonth": "2009-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0843385699691536,
      "cumulativeWealth": 1.0579847293322406,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-07",
      "holdingMonth": "2009-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.022640468579409535,
      "cumulativeWealth": 1.034031459310299,
      "drawdown": -0.02264046857940938,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-08",
      "holdingMonth": "2009-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06057173304726134,
      "cumulativeWealth": 1.0966645368261125,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-09",
      "holdingMonth": "2009-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.00106132227809082,
      "cumulativeWealth": 1.0978284513306382,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-10",
      "holdingMonth": "2009-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0754541294658821,
      "cumulativeWealth": 1.1806641414286692,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-11",
      "holdingMonth": "2009-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.021169062736872878,
      "cumulativeWealth": 1.2056576947097488,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2009-12",
      "holdingMonth": "2010-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.043012793786315305,
      "cumulativeWealth": 1.1537989889103142,
      "drawdown": -0.043012793786315284,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-01",
      "holdingMonth": "2010-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018088698908338675,
      "cumulativeWealth": 1.1746697114214584,
      "drawdown": -0.02570214035398377,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-02",
      "holdingMonth": "2010-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05831755866355776,
      "cumulativeWealth": 1.2431735812275837,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-03",
      "holdingMonth": "2010-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0306730823432493,
      "cumulativeWealth": 1.2813055468515295,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-04",
      "holdingMonth": "2010-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.08359253755540441,
      "cumulativeWealth": 1.1741979648063952,
      "drawdown": -0.0835925375554043,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-05",
      "holdingMonth": "2010-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0016947748993237492,
      "cumulativeWealth": 1.1722079635688043,
      "drawdown": -0.08514564192030838,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-06",
      "holdingMonth": "2010-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03045936407232026,
      "cumulativeWealth": 1.2079126726996197,
      "drawdown": -0.05727975995441015,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-07",
      "holdingMonth": "2010-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005643097672266795,
      "cumulativeWealth": 1.2147290418912324,
      "drawdown": -0.05195989756221009,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-08",
      "holdingMonth": "2010-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.034759911508009826,
      "cumulativeWealth": 1.256952915893581,
      "drawdown": -0.019006107495428082,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-09",
      "holdingMonth": "2010-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02815293263293637,
      "cumulativeWealth": 1.292339826657506,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-10",
      "holdingMonth": "2010-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006965695408555619,
      "cumulativeWealth": 1.3013418722543475,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-11",
      "holdingMonth": "2010-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04005723882315978,
      "cumulativeWealth": 1.3534700344218176,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2010-12",
      "holdingMonth": "2011-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011216698065948492,
      "cumulativeWealth": 1.368651499139236,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-01",
      "holdingMonth": "2011-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006108864158640036,
      "cumulativeWealth": 1.3770124052279966,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-02",
      "holdingMonth": "2011-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018297884355289076,
      "cumulativeWealth": 1.4022088189746569,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-03",
      "holdingMonth": "2011-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03752272214399753,
      "cumulativeWealth": 1.4548235108769059,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-04",
      "holdingMonth": "2011-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.028512664101681198,
      "cumulativeWealth": 1.4133426167840442,
      "drawdown": -0.028512664101681184,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-05",
      "holdingMonth": "2011-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.003640942598583532,
      "cumulativeWealth": 1.4184885161238867,
      "drawdown": -0.024975534476424532,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-06",
      "holdingMonth": "2011-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.003640919683306729,
      "cumulativeWealth": 1.4133239133649866,
      "drawdown": -0.028525520244655045,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-07",
      "holdingMonth": "2011-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008775789674234622,
      "cumulativeWealth": 1.425726946770244,
      "drawdown": -0.020000064536435547,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-08",
      "holdingMonth": "2011-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03378149188750749,
      "cumulativeWealth": 1.3775637634841242,
      "drawdown": -0.05310592440605577,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-09",
      "holdingMonth": "2011-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03030881912259659,
      "cumulativeWealth": 1.419316094421408,
      "drawdown": -0.024406683140620555,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-10",
      "holdingMonth": "2011-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001638092298199717,
      "cumulativeWealth": 1.4169911236584256,
      "drawdown": -0.02600479503914288,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-11",
      "holdingMonth": "2011-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0002569190691627656,
      "cumulativeWealth": 1.4166270716179232,
      "drawdown": -0.026255032980570525,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2011-12",
      "holdingMonth": "2012-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03786761388026497,
      "cumulativeWealth": 1.4702713585782812,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-01",
      "holdingMonth": "2012-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014454691181051998,
      "cumulativeWealth": 1.4915236770188758,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-02",
      "holdingMonth": "2012-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019340428326851775,
      "cumulativeWealth": 1.5203703837920617,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-03",
      "holdingMonth": "2012-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008205344794538666,
      "cumulativeWealth": 1.5078952205776426,
      "drawdown": -0.008205344794538716,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-04",
      "holdingMonth": "2012-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.025141702074782755,
      "cumulativeWealth": 1.4699841681818908,
      "drawdown": -0.03314075053507626,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-05",
      "holdingMonth": "2012-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02604310958977814,
      "cumulativeWealth": 1.5082671269690908,
      "drawdown": -0.007960729143370537,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-06",
      "holdingMonth": "2012-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006626437216350276,
      "cumulativeWealth": 1.5182615643914366,
      "drawdown": -0.0013870431988851628,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-07",
      "holdingMonth": "2012-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016109349807146994,
      "cumulativeWealth": 1.5427197710309644,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-08",
      "holdingMonth": "2012-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008841164222046824,
      "cumulativeWealth": 1.5563592098752475,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-09",
      "holdingMonth": "2012-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021285869982716026,
      "cumulativeWealth": 1.5232307500874405,
      "drawdown": -0.021285869982715866,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-10",
      "holdingMonth": "2012-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005277984178419622,
      "cumulativeWealth": 1.5312703378864843,
      "drawdown": -0.016120232289288938,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-11",
      "holdingMonth": "2012-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04140844179635559,
      "cumulativeWealth": 1.5946778565473425,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2012-12",
      "holdingMonth": "2013-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0047320481262777755,
      "cumulativeWealth": 1.6022239489104342,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-01",
      "holdingMonth": "2013-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010160052020442867,
      "cumulativeWealth": 1.5859452702411048,
      "drawdown": -0.0101600520204429,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-02",
      "holdingMonth": "2013-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005234978027702966,
      "cumulativeWealth": 1.5942476588839565,
      "drawdown": -0.004978261641827242,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-03",
      "holdingMonth": "2013-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01611885640248498,
      "cumulativeWealth": 1.619945107967505,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-04",
      "holdingMonth": "2013-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.006970876877134407,
      "cumulativeWealth": 1.6086526700721473,
      "drawdown": -0.00697087687713438,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-05",
      "holdingMonth": "2013-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018976789429697983,
      "cumulativeWealth": 1.5781256070866667,
      "drawdown": -0.025815381444194596,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-06",
      "holdingMonth": "2013-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01908513481023565,
      "cumulativeWealth": 1.6082443470454006,
      "drawdown": -0.0072229366689990915,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-07",
      "holdingMonth": "2013-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.004322567266639118,
      "cumulativeWealth": 1.6012926026741048,
      "drawdown": -0.011514282306023804,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-08",
      "holdingMonth": "2013-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010266538316861466,
      "cumulativeWealth": 1.6177323345359653,
      "drawdown": -0.0013659558096482671,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-09",
      "holdingMonth": "2013-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02155089979453377,
      "cumulativeWealth": 1.652595921971927,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-10",
      "holdingMonth": "2013-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0038839368814357574,
      "cumulativeWealth": 1.6590145002233843,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-11",
      "holdingMonth": "2013-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005622935522614058,
      "cumulativeWealth": 1.668343031789222,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2013-12",
      "holdingMonth": "2014-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016471695196538447,
      "cumulativeWealth": 1.640862593886321,
      "drawdown": -0.01647169519653846,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-01",
      "holdingMonth": "2014-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.025035825814035743,
      "cumulativeWealth": 1.6819429439716258,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-02",
      "holdingMonth": "2014-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.003824970967415132,
      "cumulativeWealth": 1.6755095610420856,
      "drawdown": -0.0038249709674151866,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-03",
      "holdingMonth": "2014-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0014598504552504293,
      "cumulativeWealth": 1.677955554437549,
      "drawdown": -0.0023707043977729825,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-04",
      "holdingMonth": "2014-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013774001731986162,
      "cumulativeWealth": 1.7010677171505675,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-05",
      "holdingMonth": "2014-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.025307328019019117,
      "cumulativeWealth": 1.7441171958510608,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-06",
      "holdingMonth": "2014-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00885758308337035,
      "cumulativeWealth": 1.728668532881675,
      "drawdown": -0.008857583083370368,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-07",
      "holdingMonth": "2014-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019343071407452433,
      "cumulativeWealth": 1.7621062917530215,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-08",
      "holdingMonth": "2014-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.039517007803694965,
      "cumulativeWealth": 1.6924731236708774,
      "drawdown": -0.03951700780369494,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-09",
      "holdingMonth": "2014-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010946962718044831,
      "cumulativeWealth": 1.7110005638569952,
      "drawdown": -0.029002636296805995,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-10",
      "holdingMonth": "2014-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0145922621814428,
      "cumulativeWealth": 1.7359679326773927,
      "drawdown": -0.014833588188159275,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-11",
      "holdingMonth": "2014-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011133294553337671,
      "cumulativeWealth": 1.755294975007039,
      "drawdown": -0.0038654403414031258,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2014-12",
      "holdingMonth": "2015-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02640648038906929,
      "cumulativeWealth": 1.8016461373415944,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-01",
      "holdingMonth": "2015-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011173707616339052,
      "cumulativeWealth": 1.7815150701748328,
      "drawdown": -0.011173707616339068,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-02",
      "holdingMonth": "2015-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008102871877893525,
      "cumulativeWealth": 1.7670796818126697,
      "drawdown": -0.0191860403730163,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-03",
      "holdingMonth": "2015-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01048947357909786,
      "cumulativeWealth": 1.748543946178135,
      "drawdown": -0.02947426248853402,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-04",
      "holdingMonth": "2015-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008623404299708634,
      "cumulativeWealth": 1.733465544794433,
      "drawdown": -0.03784349830636824,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-05",
      "holdingMonth": "2015-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02029375946849955,
      "cumulativeWealth": 1.6982870119814433,
      "drawdown": -0.05736927092279176,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-06",
      "holdingMonth": "2015-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0017559138103272753,
      "cumulativeWealth": 1.6953049663632056,
      "drawdown": -0.05902444923801731,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-07",
      "holdingMonth": "2015-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.024521124252381527,
      "cumulativeWealth": 1.653734182637334,
      "drawdown": -0.08209822763670493,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-08",
      "holdingMonth": "2015-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005639734125748267,
      "cumulativeWealth": 1.6630608037420702,
      "drawdown": -0.07692150568702283,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-09",
      "holdingMonth": "2015-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010931781810994953,
      "cumulativeWealth": 1.6812410215869962,
      "drawdown": -0.06683061299277182,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-10",
      "holdingMonth": "2015-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.004543140271764147,
      "cumulativeWealth": 1.6736029077952823,
      "drawdown": -0.07107013241526183,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-11",
      "holdingMonth": "2015-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.015010216114715,
      "cumulativeWealth": 1.6484817664590596,
      "drawdown": -0.0850135704831223,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2015-12",
      "holdingMonth": "2016-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0026653820510146495,
      "cumulativeWealth": 1.6528756001708047,
      "drawdown": -0.082574782076966,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-01",
      "holdingMonth": "2016-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01597423786919456,
      "cumulativeWealth": 1.6792790281761207,
      "drawdown": -0.06791961341866581,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-02",
      "holdingMonth": "2016-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02171473087448468,
      "cumulativeWealth": 1.7157441203361314,
      "drawdown": -0.04767973867066655,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-03",
      "holdingMonth": "2016-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004448336027511324,
      "cumulativeWealth": 1.7233763267206135,
      "drawdown": -0.043443498142466175,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-04",
      "holdingMonth": "2016-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.004298094012353371,
      "cumulativeWealth": 1.715969093249704,
      "drawdown": -0.047554867915577725,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-05",
      "holdingMonth": "2016-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0434078375368564,
      "cumulativeWealth": 1.7904556008677541,
      "drawdown": -0.006211284359287306,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-06",
      "holdingMonth": "2016-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0017607743525141506,
      "cumulativeWealth": 1.7936081891690774,
      "drawdown": -0.0044614466769691274,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-07",
      "holdingMonth": "2016-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.002280081797200893,
      "cumulativeWealth": 1.7895186157856426,
      "drawdown": -0.00673135601081265,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-08",
      "holdingMonth": "2016-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006798631203926004,
      "cumulativeWealth": 1.8016848928869296,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-09",
      "holdingMonth": "2016-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.025774904124413352,
      "cumulativeWealth": 1.755246637510365,
      "drawdown": -0.0257749041244133,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-10",
      "holdingMonth": "2016-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007327825830826318,
      "cumulativeWealth": 1.7423844958605454,
      "drawdown": -0.032913855947009796,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-11",
      "holdingMonth": "2016-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01880402578158342,
      "cumulativeWealth": 1.7751483388421383,
      "drawdown": -0.0147287431612253,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2016-12",
      "holdingMonth": "2017-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.022364480146080754,
      "cumulativeWealth": 1.8148486086225215,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-01",
      "holdingMonth": "2017-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.023845287759100574,
      "cumulativeWealth": 1.858124195934329,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-02",
      "holdingMonth": "2017-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005512543000908621,
      "cumulativeWealth": 1.8683671854654458,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014689158804660296,
      "cumulativeWealth": 1.8958119277581638,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03082332072985551,
      "cumulativeWealth": 1.9542471468509395,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.013605998202052855,
      "cumulativeWealth": 1.9276576636845186,
      "drawdown": -0.013605998202052882,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027275396567120518,
      "cumulativeWealth": 1.9802352909071628,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.009700159571626668,
      "cumulativeWealth": 1.9994438892183286,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0002911765820245814,
      "cumulativeWealth": 2.000026080455941,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.021307557194864553,
      "cumulativeWealth": 2.042641750556477,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0026571891446393048,
      "cumulativeWealth": 2.0480694360424425,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02734894907148965,
      "cumulativeWealth": 2.1040819827436414,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03649733721038036,
      "cumulativeWealth": 2.180875372386122,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03728778745618194,
      "cumulativeWealth": 2.0995553550321664,
      "drawdown": -0.037287787456182,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.006850859666892471,
      "cumulativeWealth": 2.0851715959319685,
      "drawdown": -0.04388319372392313,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015507109249147536,
      "cumulativeWealth": 2.1175065796733046,
      "drawdown": -0.029056585954054137,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010854423146026429,
      "cumulativeWealth": 2.1404908921035735,
      "drawdown": -0.018517555287152043,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007501762326037392,
      "cumulativeWealth": 2.1244334381699645,
      "drawdown": -0.02588040331456609,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008633123507802166,
      "cumulativeWealth": 2.1427739344257906,
      "drawdown": -0.017470708525010314,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0216006634705284,
      "cumulativeWealth": 2.189059273076742,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0020484919958321194,
      "cumulativeWealth": 2.193543543476042,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02550865852972248,
      "cumulativeWealth": 2.1375891902554343,
      "drawdown": -0.025508658529722394,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0026051138128554857,
      "cumulativeWealth": 2.1431578533811795,
      "drawdown": -0.02296999767555008,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.015000748493712537,
      "cumulativeWealth": 2.1110088814402834,
      "drawdown": -0.037626179011230554,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012962951941181262,
      "cumulativeWealth": 2.138373788117801,
      "drawdown": -0.025150973420302036,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0003002082681031181,
      "cumulativeWealth": 2.139015745609289,
      "drawdown": -0.024858315682370402,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0220180598458651,
      "cumulativeWealth": 2.186112722307362,
      "drawdown": -0.0033875877188672687,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013475532791029367,
      "cumulativeWealth": 2.2155717559817014,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03617749003359964,
      "cumulativeWealth": 2.1354179308609487,
      "drawdown": -0.0361774900335996,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.034443566447189274,
      "cumulativeWealth": 2.208969340255077,
      "drawdown": -0.0029800053682751404,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.009833645368737666,
      "cumulativeWealth": 2.23069156137756,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03166886336760237,
      "cumulativeWealth": 2.3013350276500897,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010032905024922397,
      "cumulativeWealth": 2.278245951887149,
      "drawdown": -0.010032905024922378,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01870506292761746,
      "cumulativeWealth": 2.3208606857817884,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0032271568469912338,
      "cumulativeWealth": 2.313370904328755,
      "drawdown": -0.0032271568469912637,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.045700746313702564,
      "cumulativeWealth": 2.419093681156984,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0002616562168424867,
      "cumulativeWealth": 2.419726652057783,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0015458905673877016,
      "cumulativeWealth": 2.423467284664856,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04795701818948952,
      "cumulativeWealth": 2.3072450200125507,
      "drawdown": -0.04795701818948961,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.051761798264790396,
      "cumulativeWealth": 2.4266721712858828,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.026955624451050764,
      "cumulativeWealth": 2.492084635000881,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024804440589162518,
      "cumulativeWealth": 2.553899400272925,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06354880394517051,
      "cumulativeWealth": 2.7161966525565577,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.047633754239770926,
      "cumulativeWealth": 2.845579296371325,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.031140276397373993,
      "cumulativeWealth": 2.7569671705716767,
      "drawdown": -0.031140276397374156,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01791058191241463,
      "cumulativeWealth": 2.7075882842333145,
      "drawdown": -0.04849311783859844,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07176957380074042,
      "cumulativeWealth": 2.901910741420618,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.041544684805079966,
      "cumulativeWealth": 3.0224697085054135,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.025616192329729077,
      "cumulativeWealth": 3.0998938738692683,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008345333494742634,
      "cumulativeWealth": 3.1257635220450166,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007758285953820679,
      "cumulativeWealth": 3.1500140892730637,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.029539684670979924,
      "cumulativeWealth": 3.243064512179334,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02014879418430702,
      "cumulativeWealth": 3.3084083515616656,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005027484104337735,
      "cumulativeWealth": 3.3250413219598003,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008028328679340986,
      "cumulativeWealth": 3.351735846564884,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015105028896838877,
      "cumulativeWealth": 3.402363913381817,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.035116405152793975,
      "cumulativeWealth": 3.2828851237222554,
      "drawdown": -0.03511640515279402,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03931402324221515,
      "cumulativeWealth": 3.4119485457777943,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.028202936245004032,
      "cumulativeWealth": 3.3157215784699887,
      "drawdown": -0.02820293624500414,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.028063760422327687,
      "cumulativeWealth": 3.408773194475313,
      "drawdown": -0.0009306562686623998,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02739014274101809,
      "cumulativeWealth": 3.3154064101068776,
      "drawdown": -0.028295308201638947,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007357508066435957,
      "cumulativeWealth": 3.339799539512752,
      "drawdown": -0.02114598309353899,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012531436411311872,
      "cumulativeWealth": 3.3816520250686843,
      "drawdown": -0.008879536224718598,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021646928452503753,
      "cumulativeWealth": 3.308449645630758,
      "drawdown": -0.030334249991874507,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0003943614758720426,
      "cumulativeWealth": 3.307144920545659,
      "drawdown": -0.03071664880815017,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.017906773655027845,
      "cumulativeWealth": 3.2479246250090728,
      "drawdown": -0.04807338638552949,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006745710032998591,
      "cumulativeWealth": 3.26983418273842,
      "drawdown": -0.04165196547739192,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01656881837673602,
      "cumulativeWealth": 3.2156568940425836,
      "drawdown": -0.05753066000309914,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.013394124870181465,
      "cumulativeWealth": 3.1725859840641175,
      "drawdown": -0.07015421202933503,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0006085933808057238,
      "cumulativeWealth": 3.174516798894056,
      "drawdown": -0.06958831403760601,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019888797226599333,
      "cumulativeWealth": 3.237654119799693,
      "drawdown": -0.05108354467824161,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.017094998422113518,
      "cumulativeWealth": 3.182306427730368,
      "drawdown": -0.06730526998468456,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04267100975542931,
      "cumulativeWealth": 3.3180986563528156,
      "drawdown": -0.027506244061363594,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03249061332650374,
      "cumulativeWealth": 3.2102915959300646,
      "drawdown": -0.05910316264800519,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.025814380731584676,
      "cumulativeWealth": 3.29316328544681,
      "drawdown": -0.03481449345945686,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004973791339207925,
      "cumulativeWealth": 3.3095427924745624,
      "drawdown": -0.030013862146296644,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018420856954449283,
      "cumulativeWealth": 3.370507406839365,
      "drawdown": -0.012145886253094873,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011745192260622291,
      "cumulativeWealth": 3.410094664348544,
      "drawdown": -0.0005433497616909033,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014349026376785668,
      "cumulativeWealth": 3.4590262026346172,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008858568262907474,
      "cumulativeWealth": 3.428384182895393,
      "drawdown": -0.00885856826290743,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02381639004345509,
      "cumulativeWealth": 3.3467324479767444,
      "drawdown": -0.03246397918938648,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005738462518831678,
      "cumulativeWealth": 3.365937546690017,
      "drawdown": -0.026911809998345193,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.026761072037526652,
      "cumulativeWealth": 3.4560136438508042,
      "drawdown": -0.000870926846844533,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.025760991174109047,
      "cumulativeWealth": 3.545043980827645,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012172969352462149,
      "cumulativeWealth": 3.5881976925593904,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016158359864794018,
      "cumulativeWealth": 3.6461770821417887,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015912835515426552,
      "cumulativeWealth": 3.704198098310029,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.030034093546066853,
      "cumulativeWealth": 3.592945866112222,
      "drawdown": -0.030034093546066898,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.023324688866582868,
      "cumulativeWealth": 3.676750210553765,
      "drawdown": -0.007409940566835971,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024887487900722996,
      "cumulativeWealth": 3.7682552869329027,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011298855200519172,
      "cumulativeWealth": 3.7256783160872566,
      "drawdown": -0.01129885520051932,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014979741248900691,
      "cumulativeWealth": 3.781488013238884,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04072627574484887,
      "cumulativeWealth": 3.9354939367918913,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005108575315104925,
      "cumulativeWealth": 3.9153891696136514,
      "drawdown": -0.005108575315104891,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.020211723668849834,
      "cumulativeWealth": 3.9945259335658903,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.019916357408467315,
      "cumulativeWealth": 3.9149695273956002,
      "drawdown": -0.01991635740846731,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01479671778309037,
      "cumulativeWealth": 3.9728982266218713,
      "drawdown": -0.005414336345217374,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00820030615167675,
      "cumulativeWealth": 3.9403192448541184,
      "drawdown": -0.013570243281255112,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00512515145979351,
      "cumulativeWealth": 3.920124511924302,
      "drawdown": -0.01862584518888588,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.004613708171246541,
      "cumulativeWealth": 3.902038201431333,
      "drawdown": -0.023153619145988125,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.022762761260432165,
      "cumulativeWealth": 3.9908593654396007,
      "drawdown": -0.0009178981904910399,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.032798400394873854,
      "cumulativeWealth": 4.12175316882692,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0037877659725048837,
      "cumulativeWealth": 4.106140932426974,
      "drawdown": -0.003787765972504853,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027784791283899945,
      "cumulativeWealth": 4.2202292012167355,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07221668387457549,
      "cumulativeWealth": 4.525000159319257,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04928656983196353,
      "cumulativeWealth": 4.748021895661192,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010081412696951971,
      "cumulativeWealth": 4.700155127436867,
      "drawdown": -0.010081412696952063,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.035379895726918124,
      "cumulativeWealth": 4.866446125745922,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05504289440810843,
      "cumulativeWealth": 5.134309405988104,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06372777633306843,
      "cumulativeWealth": 5.461507527437683,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.05767844943975602,
      "cumulativeWealth": 5.146496241651522,
      "drawdown": -0.057678449439755974,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06699730777235165,
      "cumulativeWealth": 5.4912976343027,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07674277853821072,
      "cumulativeWealth": 5.912715072539392,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.05089029531895734,
      "cumulativeWealth": 5.6118152563610115,
      "drawdown": -0.05089029531895739,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02161285766571732,
      "cumulativeWealth": 5.49052789197898,
      "drawdown": -0.0714032682753798,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.016426786056972786,
      "cumulativeWealth": 1.016426786056973,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.03599112619681316,
      "cumulativeWealth": 1.0530091307837706,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.015792491993898775,
      "cumulativeWealth": 1.0363794925163656,
      "drawdown": -0.01579249199389876,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.02788166407472608,
      "cumulativeWealth": 1.065275477380642,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.006782185004546191,
      "cumulativeWealth": 1.0725003727490439,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.001777964931762154,
      "cumulativeWealth": 1.0744072408010936,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.03169866125558158,
      "cumulativeWealth": 1.1084645119777916,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.007207667837414827,
      "cumulativeWealth": 1.1164539559896898,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.02433836251433385,
      "cumulativeWealth": 1.143626617101129,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.02780828855776944,
      "cumulativeWealth": 1.175428916071823,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.040898266959716385,
      "cumulativeWealth": 1.1273559104701474,
      "drawdown": -0.040898266959716434,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.011543891171715632,
      "cumulativeWealth": 1.1143418365278897,
      "drawdown": -0.05197003298853731,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.01693165239177184,
      "cumulativeWealth": 1.1332094851495884,
      "drawdown": -0.03591831913011645,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.01292450475248764,
      "cumulativeWealth": 1.1478556565259685,
      "drawdown": -0.02345804086392711,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.015331295086473448,
      "cumulativeWealth": 1.1302575427390913,
      "drawdown": -0.03842969380376515,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.013790477125477648,
      "cumulativeWealth": 1.1458443335281332,
      "drawdown": -0.02516918049162753,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.027654636065914295,
      "cumulativeWealth": 1.1775322415600438,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.0005333308480628943,
      "cumulativeWealth": 1.1781602558290563,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.05533949195866018,
      "cumulativeWealth": 1.1129614658255913,
      "drawdown": -0.05533949195866006,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.010480291916538957,
      "cumulativeWealth": 1.1246256268793027,
      "drawdown": -0.045439174072360755,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.054497299548106795,
      "cumulativeWealth": 1.063336567211784,
      "drawdown": -0.09746016133982749,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04040337465296843,
      "cumulativeWealth": 1.106298952919043,
      "drawdown": -0.060994506099210866,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.011952577996415636,
      "cumulativeWealth": 1.1195220774411607,
      "drawdown": -0.04977096969429906,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.016670472917866136,
      "cumulativeWealth": 1.138185039914097,
      "drawdown": -0.0339302023788175,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.015383964294548299,
      "cumulativeWealth": 1.1556948379287244,
      "drawdown": -0.019068219106171735,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03733887726519863,
      "cumulativeWealth": 1.1125424902192802,
      "drawdown": -0.055695110478499066,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05715630709957953,
      "cumulativeWealth": 1.1761313104515843,
      "drawdown": -0.001722130217373774,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0011885611924366225,
      "cumulativeWealth": 1.174733406418772,
      "drawdown": -0.0029086445526655957,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.01611553027523401,
      "cumulativeWealth": 1.1936648581952425,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.00549723140306357,
      "cumulativeWealth": 1.1871030062520382,
      "drawdown": -0.005497231403063463,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.033409434702035,
      "cumulativeWealth": 1.2267634466240052,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.0006943423103740567,
      "cumulativeWealth": 1.2276152403898164,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.047609770691710525,
      "cumulativeWealth": 1.2860617204824245,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.008938494538138346,
      "cumulativeWealth": 1.2975571761466655,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.005607476004152438,
      "cumulativeWealth": 1.2902811554174074,
      "drawdown": -0.005607476004152345,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.06892635913885563,
      "cumulativeWealth": 1.2013467731090097,
      "drawdown": -0.07414733223808323,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08935605577432737,
      "cumulativeWealth": 1.3086943823712467,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05116994205547257,
      "cumulativeWealth": 1.3756601980855059,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.028743828894307946,
      "cumulativeWealth": 1.4152019394359856,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05550238129560317,
      "cumulativeWealth": 1.493749017088839,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05558775406838934,
      "cumulativeWealth": 1.5767831700906716,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.030666549925824557,
      "cumulativeWealth": 1.5284286702828862,
      "drawdown": -0.030666549925824516,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.01927199856917491,
      "cumulativeWealth": 1.4989727951361085,
      "drawdown": -0.049347542788707344,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08476671908923403,
      "cumulativeWealth": 1.626035800983815,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.036507956722707555,
      "cumulativeWealth": 1.6853990456357053,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.038742886498821266,
      "cumulativeWealth": 1.7506962695659911,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.01625322721587716,
      "cumulativeWealth": 1.7791507338212356,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.01543110942617157,
      "cumulativeWealth": 1.8066050034804846,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.030358298417710233,
      "cumulativeWealth": 1.8614504572990735,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.02164700347103722,
      "cumulativeWealth": 1.9017452818093903,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.010744656960156378,
      "cumulativeWealth": 1.9221788824880282,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.015105255088789567,
      "cumulativeWealth": 1.9512138848342944,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.014544217512252109,
      "cumulativeWealth": 1.9795927639882507,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0333022941565264,
      "cumulativeWealth": 1.9136677834517828,
      "drawdown": -0.03330229415652641,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04933565385601979,
      "cumulativeWealth": 2.0080798348115763,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.04063987532359942,
      "cumulativeWealth": 1.9264717206849995,
      "drawdown": -0.04063987532359947,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.027791331254958848,
      "cumulativeWealth": 1.980010934427867,
      "drawdown": -0.013977980305919013,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.029004779677376802,
      "cumulativeWealth": 1.9225811535159896,
      "drawdown": -0.042577331744187985,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0029354522315370815,
      "cumulativeWealth": 1.9169375083785898,
      "drawdown": -0.04538780025224376,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.037246861309195245,
      "cumulativeWealth": 1.9883374138915613,
      "drawdown": -0.009831492044173329,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03206174232752589,
      "cumulativeWealth": 1.9245878520671909,
      "drawdown": -0.04157801960708385,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0041618001979822844,
      "cumulativeWealth": 1.9165781019634234,
      "drawdown": -0.04556678039483364,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.04125859493441192,
      "cumulativeWealth": 1.8375027823943504,
      "drawdown": -0.0849453539944699,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.040136112387205866,
      "cumulativeWealth": 1.9112530005803336,
      "drawdown": -0.048218617881956916,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03187784565940637,
      "cumulativeWealth": 1.8503263724117565,
      "drawdown": -0.07855935788261237,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.048498146505674425,
      "cumulativeWealth": 1.7605889729192181,
      "drawdown": -0.12324752114030413,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.019747913099600462,
      "cumulativeWealth": 1.795356930960542,
      "drawdown": -0.10593348937792346,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.026307490688908322,
      "cumulativeWealth": 1.8425882667050533,
      "drawdown": -0.08241284297446849,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03342257129420587,
      "cumulativeWealth": 1.7810042289952364,
      "drawdown": -0.11308096514880195,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08517701385259002,
      "cumulativeWealth": 1.932704850879885,
      "drawdown": -0.03753585023115569,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03998133874715688,
      "cumulativeWealth": 1.8554327235385828,
      "drawdown": -0.0760164554350583,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.019223610257964027,
      "cumulativeWealth": 1.891100839075761,
      "drawdown": -0.058254155889569836,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.0021740517434185335,
      "cumulativeWealth": 1.895212190151934,
      "drawdown": -0.0562067516953243,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.026746211638190836,
      "cumulativeWealth": 1.945901936489017,
      "drawdown": -0.030963857733471767,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.030344605807542883,
      "cumulativeWealth": 2.004949563691911,
      "drawdown": -0.0015588379831318333,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.027070001443412938,
      "cumulativeWealth": 2.059223551275021,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0200184331554,
      "cumulativeWealth": 2.0180011222617966,
      "drawdown": -0.020018433155399973,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.04321238606751366,
      "cumulativeWealth": 1.930798478681944,
      "drawdown": -0.06236577496093576,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.01087111817132781,
      "cumulativeWealth": 1.9098085402551728,
      "drawdown": -0.07255890742281679,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.07287255749535775,
      "cumulativeWealth": 2.048981172910043,
      "drawdown": -0.0049739030804285544,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.030750405021773182,
      "cumulativeWealth": 2.111988173859015,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.008567524090940205,
      "cumulativeWealth": 2.130082683418333,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.029771659883184445,
      "cumulativeWealth": 2.1934987805921247,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.02078971915024002,
      "cumulativeWealth": 2.2391010041970287,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.043572921709841526,
      "cumulativeWealth": 2.141536831440724,
      "drawdown": -0.043572921709841506,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.03329144472359738,
      "cumulativeWealth": 2.212831686488181,
      "drawdown": -0.01173208250079294,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.022346896234496042,
      "cumulativeWealth": 2.2622816065705376,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.003511555575156709,
      "cumulativeWealth": 2.270225734158665,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.00610795388165177,
      "cumulativeWealth": 2.284092168243845,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.03756883029051937,
      "cumulativeWealth": 2.369902839280502,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.003568073064359207,
      "cumulativeWealth": 2.3783588257664876,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04211502826953272,
      "cumulativeWealth": 2.4785234749487355,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.023938188213772825,
      "cumulativeWealth": 2.4191921135131587,
      "drawdown": -0.023938188213772693,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.021045029880402313,
      "cumulativeWealth": 2.4701040838284767,
      "drawdown": -0.0033969382196119557,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.01724736604559089,
      "cumulativeWealth": 2.427501294523978,
      "drawdown": -0.020585716028294954,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.008557439279794021,
      "cumulativeWealth": 2.4067280995944675,
      "drawdown": -0.028966994293145865,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.006160603341393132,
      "cumulativeWealth": 2.391901202422281,
      "drawdown": -0.0349491434727065,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04181350035449466,
      "cumulativeWealth": 2.491914964197681,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.034057080346497015,
      "cumulativeWealth": 2.5767823123499998,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0006391868119127232,
      "cumulativeWealth": 2.5751352670787755,
      "drawdown": -0.000639186811912773,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.029057756362393772,
      "cumulativeWealth": 2.649962920269758,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08089601765514423,
      "cumulativeWealth": 2.8643343674533783,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.038916560290466,
      "cumulativeWealth": 2.9758044085564315,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.01153936507386115,
      "cumulativeWealth": 2.9414655150976934,
      "drawdown": -0.011539365073861108,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04334053663015289,
      "cumulativeWealth": 3.0689502090011165,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.047940861405880636,
      "cumulativeWealth": 3.2160783256323877,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.035913027484913124,
      "cumulativeWealth": 3.331577434934457,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0637830953591469,
      "cumulativeWealth": 3.1190791137056504,
      "drawdown": -0.06378309535914695,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.09872338031836955,
      "cumulativeWealth": 3.4270051472910965,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08630510071257433,
      "cumulativeWealth": 3.7227731716705654,
      "drawdown": 0.0,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.060552171219791506,
      "cumulativeWealth": 3.497351173167123,
      "drawdown": -0.060552171219791506,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.03598038620767857,
      "cumulativeWealth": 3.371515127252692,
      "drawdown": -0.09435386692126857,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00863968698226085,
      "cumulativeWealth": 1.008639686982261,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01536660726962064,
      "cumulativeWealth": 1.0241390569286704,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0005299129334483705,
      "cumulativeWealth": 1.0235963523967542,
      "drawdown": -0.0005299129334483954,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015813666463634437,
      "cumulativeWealth": 1.0397831637069492,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003006557000385006,
      "cumulativeWealth": 1.0429093310566748,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.012738631803686954,
      "cumulativeWealth": 1.0561945690296355,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.012609934361974627,
      "cumulativeWealth": 1.0695131132185731,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016608451101712527,
      "cumulativeWealth": 1.0872760694621042,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013058281005457664,
      "cumulativeWealth": 1.1014740259076499,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023430358248542858,
      "cumulativeWealth": 1.127281956936131,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.032026084957181074,
      "cumulativeWealth": 1.0911795292125972,
      "drawdown": -0.032026084957180956,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.018704770376918256,
      "cumulativeWealth": 1.0707692666786817,
      "drawdown": -0.050131814768903604,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013786567853044796,
      "cumulativeWealth": 1.0855314998287025,
      "drawdown": -0.0370363925817665,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022002443116019097,
      "cumulativeWealth": 1.1094158449043303,
      "drawdown": -0.01584884058675029,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.000621482321358622,
      "cumulativeWealth": 1.108726362569687,
      "drawdown": -0.016460473133870335,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019714002937271782,
      "cumulativeWealth": 1.1305837973380164,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02135122457450776,
      "cumulativeWealth": 1.1547231458952802,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.004560674533506003,
      "cumulativeWealth": 1.1599894623400149,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03894270548470443,
      "cumulativeWealth": 1.114816334342747,
      "drawdown": -0.038942705484704354,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015414089797205875,
      "cumulativeWealth": 1.132000213427698,
      "drawdown": -0.02412888204678587,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.05185617235238496,
      "cumulativeWealth": 1.0732990152572548,
      "drawdown": -0.0747338229330824,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.050152846661234984,
      "cumulativeWealth": 1.1271280161911066,
      "drawdown": -0.02832909023381802,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022725830346268423,
      "cumulativeWealth": 1.1527429362655919,
      "drawdown": -0.006247061986067393,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02154034043643961,
      "cumulativeWealth": 1.1775734115484537,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01384484975857787,
      "cumulativeWealth": 1.193876738511038,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.027109986934076458,
      "cumulativeWealth": 1.161510755729106,
      "drawdown": -0.027109986934076402,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.052949409706994154,
      "cumulativeWealth": 1.223012064613287,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0018882028086057245,
      "cumulativeWealth": 1.2253213594286485,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0005082176483248025,
      "cumulativeWealth": 1.2246986294889175,
      "drawdown": -0.0005082176483248713,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.006313746235462689,
      "cumulativeWealth": 1.2324310658504296,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.026606452333233256,
      "cumulativeWealth": 1.2652216842579749,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.010081268595799242,
      "cumulativeWealth": 1.2779767238902089,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02990028794332777,
      "cumulativeWealth": 1.3161885959193966,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.005465833457969263,
      "cumulativeWealth": 1.3233826635839705,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02150105077874117,
      "cumulativeWealth": 1.2949285457345459,
      "drawdown": -0.021501050778741093,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.12270197386700565,
      "cumulativeWealth": 1.136038257156186,
      "drawdown": -0.14156480327498056,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.09754300303361593,
      "cumulativeWealth": 1.2468508403202756,
      "drawdown": -0.05783045627666927,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05070542779163605,
      "cumulativeWealth": 1.3100729455710762,
      "drawdown": -0.010057346509927068,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015503656777748996,
      "cumulativeWealth": 1.3303838668730248,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04057506322621881,
      "cumulativeWealth": 1.3843642763865391,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.040811243505604076,
      "cumulativeWealth": 1.4408619039706096,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.024868070704364087,
      "cumulativeWealth": 1.405030448267444,
      "drawdown": -0.02486807070436392,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.014245311188003732,
      "cumulativeWealth": 1.3850153523032538,
      "drawdown": -0.03875912848653884,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0679004807353158,
      "cumulativeWealth": 1.4790585605504376,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.008198671098311164,
      "cumulativeWealth": 1.4911848752235322,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.010008805654779797,
      "cumulativeWealth": 1.5061098548349916,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014630108750610247,
      "cumulativeWealth": 1.5281444058015934,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015946331252464207,
      "cumulativeWealth": 1.5525127026981056,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.028170544734984586,
      "cumulativeWealth": 1.5962478312410942,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0024737713703947804,
      "cumulativeWealth": 1.6001965834260732,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.020670538103562442,
      "cumulativeWealth": 1.633273507876972,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015526536465783,
      "cumulativeWealth": 1.6586325885556212,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017963083121792744,
      "cumulativeWealth": 1.6884267436123601,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.024067069963663486,
      "cumulativeWealth": 1.647791259045321,
      "drawdown": -0.02406706996366348,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03414519898665988,
      "cumulativeWealth": 1.7040554194739024,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01105116988798669,
      "cumulativeWealth": 1.6852236135347518,
      "drawdown": -0.011051169887986712,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03423318299108629,
      "cumulativeWealth": 1.7429141818777865,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03654931640136217,
      "cumulativeWealth": 1.6792118599839139,
      "drawdown": -0.036549316401362164,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03265207902568309,
      "cumulativeWealth": 1.6243821016308548,
      "drawdown": -0.06800798425957333,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019848971048777315,
      "cumulativeWealth": 1.6566244149382776,
      "drawdown": -0.04950890172145006,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.06758144097083238,
      "cumulativeWealth": 1.5446673498292867,
      "drawdown": -0.11374445977306347,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0035052963320152536,
      "cumulativeWealth": 1.5392528330337463,
      "drawdown": -0.11685104806744928,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04041485452597337,
      "cumulativeWealth": 1.477044153707995,
      "drawdown": -0.15254338448456917,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.054630762974522275,
      "cumulativeWealth": 1.5577362027721202,
      "drawdown": -0.10624618299115485,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03615867937983929,
      "cumulativeWealth": 1.5014105188577147,
      "drawdown": -0.1385631407048853,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.05462103891814075,
      "cumulativeWealth": 1.4194019164750815,
      "drawdown": -0.18561571692196477,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021732671432277265,
      "cumulativeWealth": 1.450249311956179,
      "drawdown": -0.16791697087821922,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05356691614489988,
      "cumulativeWealth": 1.5279346952389345,
      "drawdown": -0.12334484903165832,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04098923222613596,
      "cumulativeWealth": 1.4653058251894155,
      "drawdown": -0.159278270596938,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.061026212635552274,
      "cumulativeWealth": 1.5547278900535382,
      "drawdown": -0.10797220757105752,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03906992863675924,
      "cumulativeWealth": 1.493984782339567,
      "drawdown": -0.14282366976326222,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04174775635469183,
      "cumulativeWealth": 1.5563552950302966,
      "drawdown": -0.10703848117553005,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003115326826453071,
      "cumulativeWealth": 1.5612038504323966,
      "drawdown": -0.10425661420094601,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009831468039196713,
      "cumulativeWealth": 1.5765527761905935,
      "drawdown": -0.09545014173214084,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.030447056644165808,
      "cumulativeWealth": 1.6245541678697855,
      "drawdown": -0.06790926095998706,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014900493655566328,
      "cumulativeWealth": 1.648760826941253,
      "drawdown": -0.054020648816509254,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.008909344093448384,
      "cumulativeWealth": 1.634071449406235,
      "drawdown": -0.06244870436149996,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04081043230213417,
      "cumulativeWealth": 1.5673842871433914,
      "drawdown": -0.10071057804193329,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.005675531306452596,
      "cumulativeWealth": 1.558488548552467,
      "drawdown": -0.105814523309818,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06916400104359723,
      "cumulativeWealth": 1.6662798521509843,
      "drawdown": -0.04396907806684869,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02943153174295904,
      "cumulativeWealth": 1.715321020512219,
      "drawdown": -0.01583162364072288,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02458911624438918,
      "cumulativeWealth": 1.7574992484820382,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022750570074489378,
      "cumulativeWealth": 1.7974833582904914,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011535889308150969,
      "cumulativeWealth": 1.818218927344974,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.030736261328116198,
      "cumulativeWealth": 1.7623336752423717,
      "drawdown": -0.030736261328116243,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04060954264399242,
      "cumulativeWealth": 1.833901239780071,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02089558327189967,
      "cumulativeWealth": 1.8722216758483357,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011038847721352534,
      "cumulativeWealth": 1.8928888458286408,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015871877480432377,
      "cumulativeWealth": 1.9229325456737099,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.024564884060084925,
      "cumulativeWealth": 1.9701691607135485,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.010100755723538333,
      "cumulativeWealth": 1.9502689632871324,
      "drawdown": -0.010100755723538302,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04034153178207659,
      "cumulativeWealth": 2.0289458006531778,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02371026999866596,
      "cumulativeWealth": 1.9808389479070314,
      "drawdown": -0.02371026999866599,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.015875518754796064,
      "cumulativeWealth": 2.01228579377476,
      "drawdown": -0.008211164079914957,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.004610038722030971,
      "cumulativeWealth": 2.0030090783456656,
      "drawdown": -0.0127833490175846,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02120181196430866,
      "cumulativeWealth": 1.9605416565037774,
      "drawdown": -0.03371413081974839,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0035314050300014363,
      "cumulativeWealth": 1.9536181898364726,
      "drawdown": -0.03712647759859078,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03439671110915623,
      "cumulativeWealth": 2.0208162303298707,
      "drawdown": -0.004006795213893799,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03359607370871101,
      "cumulativeWealth": 2.0887077213557927,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.006711749166972812,
      "cumulativeWealth": 2.102726603664652,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.018128430978918017,
      "cumulativeWealth": 2.1408457377667216,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.034755501387509505,
      "cumulativeWealth": 2.215251904776117,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014302820990187528,
      "cumulativeWealth": 2.2469362562183015,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0015229546108314635,
      "cumulativeWealth": 2.243514274286649,
      "drawdown": -0.0015229546108316283,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0048303609630793295,
      "cumulativeWealth": 2.2543512580572744,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011408021348836828,
      "cumulativeWealth": 2.2800689453369687,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0025597440471045894,
      "cumulativeWealth": 2.2742325524271543,
      "drawdown": -0.002559744047104573,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03099794945291951,
      "cumulativeWealth": 2.203736006722833,
      "drawdown": -0.03347834668343963,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0608193858927241,
      "cumulativeWealth": 2.3377658773214,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03197272555720589,
      "cumulativeWealth": 2.412510624133998,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.007991086711735583,
      "cumulativeWealth": 2.39323204254356,
      "drawdown": -0.00799108671173554,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.005918623167610851,
      "cumulativeWealth": 2.407396681156027,
      "drawdown": -0.0021197597750711727,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005906018759622711,
      "cumulativeWealth": 1.0005906018759623,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005909812087110389,
      "cumulativeWealth": 1.0011819321192839,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007663771810415554,
      "cumulativeWealth": 1.001949215106131,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00048144884948686517,
      "cumulativeWealth": 1.0024316024029882,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0009405325193192482,
      "cumulativeWealth": 1.0033744219234415,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0006999921704580192,
      "cumulativeWealth": 1.0040767761628258,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007659293564628022,
      "cumulativeWealth": 1.0048458280418313,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005026350544354852,
      "cumulativeWealth": 1.0053508987793085,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007883493618272563,
      "cumulativeWealth": 1.0061434665187736,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011589958898925445,
      "cumulativeWealth": 1.0073095826611111,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0009737847678452649,
      "cumulativeWealth": 1.0082904853892112,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011480658161107105,
      "cumulativeWealth": 1.0094480692281962,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011700450329727996,
      "cumulativeWealth": 1.0106291689276405,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014872300528165905,
      "cumulativeWealth": 1.0121322069999228,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001279616643425907,
      "cumulativeWealth": 1.0134273482173473,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001585489475469215,
      "cumulativeWealth": 1.0150341266120986,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001619166170939046,
      "cumulativeWealth": 1.0166776355322575,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013774693945725058,
      "cumulativeWealth": 1.0180780778593497,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018591055545760238,
      "cumulativeWealth": 1.01997079246889,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016072487889524645,
      "cumulativeWealth": 1.0216101392898527,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017509283760193117,
      "cumulativeWealth": 1.0233989054719643,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001958026970098059,
      "cumulativeWealth": 1.0254027481300472,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001858509910378503,
      "cumulativeWealth": 1.0273084692995762,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001815763096547185,
      "cumulativeWealth": 1.0291738181069008,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017938691390508854,
      "cumulativeWealth": 1.031020021257922,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002033878668081357,
      "cumulativeWealth": 1.0331169908855231,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018042449611519462,
      "cumulativeWealth": 1.0349809870106088,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002133466898287306,
      "cumulativeWealth": 1.0371890846867526,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016181875857623762,
      "cumulativeWealth": 1.038867451187681,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013886117808445952,
      "cumulativeWealth": 1.040310034769136,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016291362537228515,
      "cumulativeWealth": 1.04200484156189,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011698360252376805,
      "cumulativeWealth": 1.0432238163640213,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001367752187600546,
      "cumulativeWealth": 1.0446506880210102,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000962184745048944,
      "cumulativeWealth": 1.045655834976929,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013893488429854717,
      "cumulativeWealth": 1.0471086157014151,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016617852201976646,
      "cumulativeWealth": 1.0488486853229293,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002842262750673008,
      "cumulativeWealth": 1.0485505749679906,
      "drawdown": -0.0002842262750674118,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010965421510800155,
      "cumulativeWealth": 1.0486655529582898,
      "drawdown": -0.0001746032265684816,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010964219237952211,
      "cumulativeWealth": 1.0485505749679906,
      "drawdown": -0.0002842262750674118,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0485505749679906,
      "drawdown": -0.0002842262750674118,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010965421510800155,
      "cumulativeWealth": 1.0486655529582898,
      "drawdown": -0.0001746032265684816,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021898671364839473,
      "cumulativeWealth": 1.0484359091351312,
      "drawdown": -0.00039355170443011733,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010936847151099549,
      "cumulativeWealth": 1.0485505749679904,
      "drawdown": -0.00028422627506763387,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00018527096796983056,
      "cumulativeWealth": 1.0483563089880008,
      "drawdown": -0.00046944458416031676,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010888051083512984,
      "cumulativeWealth": 1.0484704545584607,
      "drawdown": -0.0003606151866912821,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0484704545584607,
      "drawdown": -0.0003606151866912821,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021823352515526473,
      "cumulativeWealth": 1.0482416431551411,
      "drawdown": -0.0005787700135232443,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0001093887402854321,
      "cumulativeWealth": 1.0483563089880006,
      "drawdown": -0.0004694445841605388,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010937677569766713,
      "cumulativeWealth": 1.0482416431551411,
      "drawdown": -0.0005787700135232443,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021907527205977662,
      "cumulativeWealth": 1.0480119993319825,
      "drawdown": -0.00079771849138488,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0480119993319825,
      "drawdown": -0.00079771849138488,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021813042074447786,
      "cumulativeWealth": 1.047783396033623,
      "drawdown": -0.001015674905459174,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010913865962436375,
      "cumulativeWealth": 1.0476690423582031,
      "drawdown": -0.0011247027156857659,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010915057217153468,
      "cumulativeWealth": 1.047783396033623,
      "drawdown": -0.001015674905459174,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010913865962436375,
      "cumulativeWealth": 1.0476690423582031,
      "drawdown": -0.0011247027156857659,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0001097464806637527,
      "cumulativeWealth": 1.047554064367904,
      "drawdown": -0.001234325764184696,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002186230917039511,
      "cumulativeWealth": 1.0473250448596247,
      "drawdown": -0.0014526790037739934,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0473250448596247,
      "drawdown": -0.0014526790037739934,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00013154033131868026,
      "cumulativeWealth": 1.047462810343024,
      "drawdown": -0.0013213297583327677,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00021804611213349645,
      "cumulativeWealth": 1.0476912055364236,
      "drawdown": -0.0011035717570159198,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0476912055364236,
      "drawdown": -0.0011035717570159198,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00023011512807835643,
      "cumulativeWealth": 1.0479322951323722,
      "drawdown": -0.000873710577493858,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0006889950442798831,
      "cumulativeWealth": 1.0486543152904593,
      "drawdown": -0.00018531751547190556,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005143811911914042,
      "cumulativeWealth": 1.0491937233463065,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0020682686335333766,
      "cumulativeWealth": 1.0513637378148037,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0015857812340411837,
      "cumulativeWealth": 1.0530309707003818,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019472952634984608,
      "cumulativeWealth": 1.0550815329219438,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032833663612790165,
      "cumulativeWealth": 1.0585457521355464,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035153178584772515,
      "cumulativeWealth": 1.0622668769220436,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002799405580572234,
      "cumulativeWealth": 1.065240592745356,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003446338433911622,
      "cumulativeWealth": 1.0689117723414971,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004177628447278314,
      "cumulativeWealth": 1.0733772885692616,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003422055443482952,
      "cumulativeWealth": 1.0770504451625211,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004278800826700291,
      "cumulativeWealth": 1.0816589294976804,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004298472360786176,
      "cumulativeWealth": 1.0863084105099237,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0038711667283684026,
      "cumulativeWealth": 1.0905136914854365,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004867743849960249,
      "cumulativeWealth": 1.0958220328004622,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003980273915162202,
      "cumulativeWealth": 1.1001837046532779,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0044633897626051855,
      "cumulativeWealth": 1.1050942533376122,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004583379744941496,
      "cumulativeWealth": 1.1101593199546111,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004176123382907404,
      "cumulativeWealth": 1.1147954822494262,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004662966323466966,
      "cumulativeWealth": 1.1199937360407084,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004212198010375312,
      "cumulativeWealth": 1.1247113714272918,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004102014991473002,
      "cumulativeWealth": 1.1293249543339667,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004244930421451576,
      "cumulativeWealth": 1.1341188601883234,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004540304595931133,
      "cumulativeWealth": 1.1392681052615687,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004179751604168169,
      "cumulativeWealth": 1.1440299629521133,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004398103092933425,
      "cumulativeWealth": 1.1490615246705815,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004770944669864274,
      "cumulativeWealth": 1.1545436336270547,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004057397666969331,
      "cumulativeWealth": 1.1592280762725473,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004145482524507749,
      "cumulativeWealth": 1.164033636004654,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035537722135345895,
      "cumulativeWealth": 1.168170346395907,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003976309422626834,
      "cumulativeWealth": 1.1728153531515142,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003565755861547837,
      "cumulativeWealth": 1.1769973263715274,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003160833319925338,
      "cumulativeWealth": 1.1807176187381856,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032924050490124035,
      "cumulativeWealth": 1.184605019387577,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034130930948657046,
      "cumulativeWealth": 1.188648186599392,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003566318511460276,
      "cumulativeWealth": 1.1928872846308751,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003347003323800779,
      "cumulativeWealth": 1.1968798823374542,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0038182485853701653,
      "cumulativeWealth": 1.2014498672550473,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035210438142008194,
      "cumulativeWealth": 1.2056802248782181,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003291554013935327,
      "cumulativeWealth": 1.2096487864619385,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034226861729671487,
      "cumulativeWealth": 1.2137890346375082,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028537109043149655,
      "cumulativeWealth": 1.2172528376411913,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036704004658394407,
      "cumulativeWealth": 1.221720643023514,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0026696160053976126,
      "cumulativeWealth": 1.224982168006254,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002659280333693115,
      "cumulativeWealth": 1.228239738994758,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002998888262079058,
      "cumulativeWealth": 1.2319230927310483,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0029550384139789276,
      "cumulativeWealth": 1.2355634727931362,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0029433843791690784,
      "cumulativeWealth": 1.2392002110184275,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00293306694380413,
      "cumulativeWealth": 1.2428348681941208,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032060459258085316,
      "cumulativeWealth": 1.2468194538597475,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    }
  ],
  "corePerformanceSummary": [
    {
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "months": 218,
      "startHoldingMonth": "2008-06",
      "endHoldingMonth": "2026-07",
      "cagr": 0.0982790588126996,
      "annVol": 0.09136738994396455,
      "sharpeRf0": 1.0751355288608375,
      "maxDrawdown": -0.11264998230807155,
      "calmar": 0.8724285330460967,
      "cumulativeReturn": 4.49052789197898,
      "terminalWealth": 5.49052789197898,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.023916798632510394,
      "annVol": 0.005552439701339734,
      "sharpeRf0": 4.26367667615372,
      "maxDrawdown": -0.0014526790037739934,
      "calmar": 16.463925320305208,
      "cumulativeReturn": 0.24681945385974746,
      "terminalWealth": 1.2468194538597475,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "seriesId": "F2R",
      "displayName": "F2R",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.1532312943193599,
      "annVol": 0.16119133395128477,
      "sharpeRf0": 0.9687158583724038,
      "maxDrawdown": -0.17678405728770807,
      "calmar": 0.8667710011315267,
      "cumulativeReturn": 2.783437613696588,
      "terminalWealth": 3.783437613696588,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.13907597151209217,
      "annVol": 0.12224385635563431,
      "sharpeRf0": 1.1310626484956456,
      "maxDrawdown": -0.12324752114030413,
      "calmar": 1.128428143830731,
      "cumulativeReturn": 2.371515127252692,
      "terminalWealth": 3.371515127252692,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.09870248340984489,
      "annVol": 0.10794794904592542,
      "sharpeRf0": 0.9293163354497993,
      "maxDrawdown": -0.18561571692196477,
      "calmar": 0.5317571434499843,
      "cumulativeReturn": 1.407396681156027,
      "terminalWealth": 2.407396681156027,
      "seriesRole": "REFERENCE"
    }
  ],
  "coreCalendarReturns": [
    {
      "year": "2008",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.030143438663235766,
      "monthsObserved": 7,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2009",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.24312990474382823,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2010",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12259892700942232,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2011",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.04666304800984045,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2012",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12568641987482865,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2013",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.04619439276680781,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2014",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.05211874390398319,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2015",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.0608519992758203,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2016",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.07683832175781902,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.18529924328242586,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.0061434665187736215,
      "monthsObserved": 9,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2017",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.1611609810993968,
      "monthsObserved": 9,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.1436266171011289,
      "monthsObserved": 9,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2017",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.10147402590764987,
      "monthsObserved": 9,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2018",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.0032921239540339986,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.017150078023061344,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2018",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": -0.1409409913600791,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": -0.07020652430499152,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2018",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.02557936908877889,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2019",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.14594197230781059,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.02076588360161047,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2019",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.2740464559401996,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.2094587547709914,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2019",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.2263018760004405,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2020",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.2494223485631415,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.0036565012412776987,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2020",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.3709442218750445,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.31051178865931983,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2020",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.1329568420868248,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2021",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12781054012975512,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": -0.0010924577739465091,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.22298906087796833,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.17480245378983184,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2021",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.16881160132241813,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2022",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.06643644320836162,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.014266661659390945,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2022",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": -0.13741756112064696,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": -0.10050788203860828,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2022",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.1592782705969379,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2023",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1139857400080686,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.049449537087691287,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2023",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.25617864331010476,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.1858411897486092,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2023",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.17062321805107472,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2024",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.10435005843893363,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.052045305014168264,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2024",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.18649351504340572,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.14545722530861593,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2024",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.1547919743416455,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2025",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.2430355055619764,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04169905325726231,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2025",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.2937421871025565,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.26858474441055336,
      "monthsObserved": 12,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2025",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.13807902476838874,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2026",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12824179084842946,
      "monthsObserved": 7,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.020543821518901995,
      "monthsObserved": 7,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2026",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.06752584515887494,
      "monthsObserved": 7,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "annualReturn": 0.09858906063844386,
      "monthsObserved": 7,
      "seriesRole": "BLENDING_BASELINE"
    },
    {
      "year": "2026",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.06788889821484267,
      "monthsObserved": 7,
      "seriesRole": "REFERENCE"
    }
  ],
  "fxPerformance": [
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.016426786056972786,
      "cumulativeWealth": 1.016426786056973,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.035990271424351364,
      "cumulativeWealth": 1.0530082619701444,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.015794986129869768,
      "cumulativeWealth": 1.0363760110776878,
      "drawdown": -0.015794986129869626,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02788055328570341,
      "cumulativeWealth": 1.0652707476785641,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0067818900934057385,
      "cumulativeWealth": 1.0724952968090404,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.001776515772941834,
      "cumulativeWealth": 1.0744006016202277,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.031697919180789666,
      "cumulativeWealth": 1.1084568650581774,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.007202631917309982,
      "cumulativeWealth": 1.1164406718534068,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.024336103556803,
      "cumulativeWealth": 1.1436104876586581,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.027806819030381163,
      "cumulativeWealth": 1.1754106575302283,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0409024939389835,
      "cumulativeWealth": 1.1273334302347815,
      "drawdown": -0.0409024939389836,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.011545773390973067,
      "cumulativeWealth": 1.1143174939132223,
      "drawdown": -0.051976016403811554,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.016929278471744986,
      "cumulativeWealth": 1.1331820850736163,
      "drawdown": -0.03592665438761855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.012923804340056149,
      "cumulativeWealth": 1.1478271086227645,
      "drawdown": -0.023467159099460955,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.015332316920576952,
      "cumulativeWealth": 1.1302282596233308,
      "drawdown": -0.038439670099499224,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.013786501406171568,
      "cumulativeWealth": 1.1458101531139226,
      "drawdown": -0.0251831172592073,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.027652092466554246,
      "cumulativeWealth": 1.1774942014169454,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0005303853192913987,
      "cumulativeWealth": 1.1781187270549278,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.055340249135408345,
      "cumulativeWealth": 1.112921343188618,
      "drawdown": -0.05534024913540825,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.010464502734512713,
      "cumulativeWealth": 1.124567511627713,
      "drawdown": -0.04545485458930165,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.05450119629808138,
      "cumulativeWealth": 1.0632772369260461,
      "drawdown": -0.09747870693471061,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.04038248811767058,
      "cumulativeWealth": 1.1062150173120018,
      "drawdown": -0.061032651541556904,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.01193939060036315,
      "cumulativeWealth": 1.1194225504916773,
      "drawdown": -0.04982195360732433,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.016664715548409464,
      "cumulativeWealth": 1.1380774088740961,
      "drawdown": -0.033987506743846874,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.015381334343610189,
      "cumulativeWealth": 1.1555825580088983,
      "drawdown": -0.01912894560496936,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.03733981702373857,
      "cumulativeWealth": 1.1124333167370224,
      "drawdown": -0.05575449129996124,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.057155703882515826,
      "cumulativeWealth": 1.1760152259774888,
      "drawdown": -0.0017854746123061593,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0011993035682328305,
      "cumulativeWealth": 1.174604826720678,
      "drawdown": -0.002982636854465426,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.016110012613875256,
      "cumulativeWealth": 1.1935277252954668,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.005504884732153106,
      "cumulativeWealth": 1.1869574927430864,
      "drawdown": -0.005504884732153048,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0334071543294885,
      "cumulativeWealth": 1.2266103648856974,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.000687227815731061,
      "cumulativeWealth": 1.2274533256475109,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.04760781130261859,
      "cumulativeWealth": 1.2858896919577092,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.008937583404798713,
      "cumulativeWealth": 1.297382438328952,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.005611775987931562,
      "cumulativeWealth": 1.2901018187143736,
      "drawdown": -0.0056117759879315,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.06892995599140576,
      "cumulativeWealth": 1.2011751571259592,
      "drawdown": -0.07415491250745554,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0893447949352116,
      "cumulativeWealth": 1.3084939052206486,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.051152686789248884,
      "cumulativeWealth": 1.3754268841200414,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02873231110035492,
      "cumulativeWealth": 1.4149460772503704,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.05550046663609587,
      "cumulativeWealth": 1.4934762448026793,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.05558394241301454,
      "cumulativeWealth": 1.5764895423889964,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.03067031749502852,
      "cumulativeWealth": 1.5281381075963338,
      "drawdown": -0.030670317495028465,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.019272242925991192,
      "cumulativeWealth": 1.498687458762273,
      "drawdown": -0.049351474611638024,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.08476602500450575,
      "cumulativeWealth": 1.6257252373656548,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.036501965966787515,
      "cumulativeWealth": 1.6850674046513234,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.03874045683677685,
      "cumulativeWealth": 1.7503476857082776,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.016246908667591674,
      "cumulativeWealth": 1.7787854246945103,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.015427218715908932,
      "cumulativeWealth": 1.8062271364899436,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.030354520306422758,
      "cumulativeWealth": 1.8610542947825395,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02164660622391067,
      "cumulativeWealth": 1.901339804263015,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.010743923727796454,
      "cumulativeWealth": 1.92176765410064,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.015102426890383349,
      "cumulativeWealth": 1.9507910095969987,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.01454073170308406,
      "cumulativeWealth": 1.9791569382763372,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0333025705424024,
      "cumulativeWealth": 1.9132459247249043,
      "drawdown": -0.03330257054240238,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.049334715552874296,
      "cumulativeWealth": 2.0076353682039034,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.04064465054999003,
      "cumulativeWealth": 1.9260357302314552,
      "drawdown": -0.04064465054999,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.027784849362101988,
      "cumulativeWealth": 1.9795503428619623,
      "drawdown": -0.013989106680794783,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.02900491220873754,
      "cumulativeWealth": 1.9221336589544746,
      "drawdown": -0.04258826607837729,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0029362836655660884,
      "cumulativeWealth": 1.9164897292886518,
      "drawdown": -0.04539949851391267,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.03724169967732246,
      "cumulativeWealth": 1.9878630642214927,
      "drawdown": -0.009848553325746412,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.032073656282544605,
      "cumulativeWealth": 1.9241050275628868,
      "drawdown": -0.04160633049404061,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.004167180093751704,
      "cumulativeWealth": 1.916086935393739,
      "drawdown": -0.045600129515583565,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.041260486526200055,
      "cumulativeWealth": 1.8370282562128977,
      "drawdown": -0.08497913251231293,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.04012393401399907,
      "cumulativeWealth": 1.9107370567470359,
      "drawdown": -0.04826489560380476,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.031893896636752773,
      "cumulativeWealth": 1.8497962065591327,
      "drawdown": -0.07861943664898619,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.04850605306334074,
      "cumulativeWealth": 1.7600698936074088,
      "drawdown": -0.12331197114642123,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0197294664610014,
      "cumulativeWealth": 1.7947951335423546,
      "drawdown": -0.10601538408439315,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.026298106350155122,
      "cumulativeWealth": 1.8419948468409924,
      "drawdown": -0.08250528157964188,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.03342569837528077,
      "cumulativeWealth": 1.7804248826816638,
      "drawdown": -0.11317318329847392,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.08516856777657625,
      "cumulativeWealth": 1.93206111997344,
      "drawdown": -0.03764341345414457,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.04000092357228428,
      "cumulativeWealth": 1.8547768907764006,
      "drawdown": -0.07613856572184974,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.019219708914311563,
      "cumulativeWealth": 1.890425162718115,
      "drawdown": -0.05838221787786524,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.00217081851255178,
      "cumulativeWealth": 1.894528932657937,
      "drawdown": -0.05633813656468656,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02674481480518018,
      "cumulativeWealth": 1.9451977581049291,
      "drawdown": -0.031100074788397936,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.030340551565808473,
      "cumulativeWealth": 2.0042161309904065,
      "drawdown": -0.0017031166454075652,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.027060975621643172,
      "cumulativeWealth": 2.058452174851642,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.020024626002551973,
      "cumulativeWealth": 2.017232439906098,
      "drawdown": -0.02002462600255195,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.043218079983231086,
      "cumulativeWealth": 1.930051526973468,
      "drawdown": -0.06237728009757049,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.01088125417002889,
      "cumulativeWealth": 1.909050145747217,
      "drawdown": -0.07257979122842273,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.07286416143039831,
      "cumulativeWealth": 2.048151483745668,
      "drawdown": -0.005004095422676769,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.03072891529070695,
      "cumulativeWealth": 2.1110889571922242,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.008565103808676257,
      "cumulativeWealth": 2.129170653259926,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02976987247422302,
      "cumulativeWealth": 2.192555792083332,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.020783109286835966,
      "cumulativeWealth": 2.238123918727685,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.04357531048959867,
      "cumulativeWealth": 2.1405969740549287,
      "drawdown": -0.04357531048959873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0332843669084293,
      "cumulativeWealth": 2.2118453891424465,
      "drawdown": -0.011741320203653927,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02234207341518988,
      "cumulativeWealth": 2.261262601209716,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.003510313045993866,
      "cumulativeWealth": 2.2692003408191606,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.006100574589059974,
      "cumulativeWealth": 2.283043766755848,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.03756442132658413,
      "cumulativeWealth": 2.3688049847172965,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.0035665515048432734,
      "cumulativeWealth": 2.3772534497002202,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.04211070536976521,
      "cumulativeWealth": 2.477361269309804,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.02394869727659531,
      "cumulativeWealth": 2.4180316942263413,
      "drawdown": -0.023948697276595432,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.02104296964673845,
      "cumulativeWealth": 2.468914261772798,
      "drawdown": -0.003409679339727245,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.017250425808830735,
      "cumulativeWealth": 2.4263244394717223,
      "drawdown": -0.02060128672807604,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.008562042197955385,
      "cumulativeWealth": 2.4055501472350347,
      "drawdown": -0.02898693983973355,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.006162334297857976,
      "cumulativeWealth": 2.390726343057511,
      "drawdown": -0.03497064692402707,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.04181272211246916,
      "cumulativeWealth": 2.4906891192867344,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.034047937280541556,
      "cumulativeWealth": 2.5754919462055366,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0006397954243266536,
      "cumulativeWealth": 2.573844158242964,
      "drawdown": -0.0006397954243267945,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.029056181065904733,
      "cumulativeWealth": 2.6486302401402924,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.08089539914511862,
      "cumulativeWealth": 2.862892240604273,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.03891254541131074,
      "cumulativeWealth": 2.9742946649244764,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.011544355854611915,
      "cumulativeWealth": 2.9399583488961145,
      "drawdown": -0.011544355854611887,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.04333979914384064,
      "cumulativeWealth": 3.0673755532285294,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.047937046428591944,
      "cumulativeWealth": 3.2144164775375734,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.035909638919172544,
      "cumulativeWealth": 3.3298450125817864,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0637965205927863,
      "cumulativeWealth": 3.1174124866658257,
      "drawdown": -0.06379652059278629,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.09872012004508826,
      "cumulativeWealth": 3.4251638215795333,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": 0.08629066301464493,
      "cumulativeWealth": 3.720723478677406,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.06055657252572669,
      "cumulativeWealth": 3.495409217492704,
      "drawdown": -0.06055657252572666,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "netReturn": -0.0359855285240504,
      "cumulativeWealth": 3.369625069393391,
      "drawdown": -0.09436294078183383,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03336995758697059,
      "cumulativeWealth": 1.0333699575869706,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.020828641831846406,
      "cumulativeWealth": 1.05489365031334,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.00805770167248987,
      "cumulativeWealth": 1.0633936686437686,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.003298704001923447,
      "cumulativeWealth": 1.0669014895941438,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.011110619963008883,
      "cumulativeWealth": 1.0787554265829924,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.021748831260959722,
      "cumulativeWealth": 1.1022170963275906,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.011450020238784608,
      "cumulativeWealth": 1.1148375043880758,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.031159661809347483,
      "cumulativeWealth": 1.0800995447789665,
      "drawdown": -0.031159661809347372,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.013748241574671916,
      "cumulativeWealth": 1.094949014245281,
      "drawdown": -0.01783981079261554,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03073799277912803,
      "cumulativeWealth": 1.1286055491386657,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.034777040098776135,
      "cumulativeWealth": 1.089355988700569,
      "drawdown": -0.034777040098776135,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.027470724749393383,
      "cumulativeWealth": 1.0594305901808725,
      "drawdown": -0.06129241435201738,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.024063057633575857,
      "cumulativeWealth": 1.084923729531168,
      "drawdown": -0.03870423961749525,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.022868823210659972,
      "cumulativeWealth": 1.109734658498866,
      "drawdown": -0.016720536820150844,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.021676572015324247,
      "cumulativeWealth": 1.1337899017417181,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0062409713676996326,
      "cumulativeWealth": 1.140865852055475,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0306550320881549,
      "cumulativeWealth": 1.175839131358516,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.005246079191608022,
      "cumulativeWealth": 1.1696705861588175,
      "drawdown": -0.005246079191608133,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.030902027061222137,
      "cumulativeWealth": 1.1335253940526222,
      "drawdown": -0.03598599177168582,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.00790267467487693,
      "cumulativeWealth": 1.1245675116277127,
      "drawdown": -0.0436042808607382,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.0551106137002787,
      "cumulativeWealth": 1.0625919059145141,
      "drawdown": -0.09631183588282233,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03357890249464912,
      "cumulativeWealth": 1.098272575914821,
      "drawdown": -0.06596697913436311,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.017505491210922708,
      "cumulativeWealth": 1.1174983768396953,
      "drawdown": -0.04961627229688814,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03635795697583455,
      "cumulativeWealth": 1.158128334745398,
      "drawdown": -0.015062261614525174,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03910666987068856,
      "cumulativeWealth": 1.2034188772001764,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.01655167087166154,
      "cumulativeWealth": 1.1835002840240145,
      "drawdown": -0.01655167087166154,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.027995338677579085,
      "cumulativeWealth": 1.216632775300278,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.025343836743039416,
      "cumulativeWealth": 1.2474669177337192,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03396863970900399,
      "cumulativeWealth": 1.2898416720111177,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.013051199213626186,
      "cumulativeWealth": 1.2730076913956638,
      "drawdown": -0.013051199213626186,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0038195784923973353,
      "cumulativeWealth": 1.277870044194375,
      "drawdown": -0.009281470801045244,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.012132794710214334,
      "cumulativeWealth": 1.293374179106918,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02921917143648045,
      "cumulativeWealth": 1.33116550097776,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03578501696957814,
      "cumulativeWealth": 1.3788012810195662,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.014650972814327146,
      "cumulativeWealth": 1.3990020611041434,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.0648177124176782,
      "cumulativeWealth": 1.308321947835756,
      "drawdown": -0.0648177124176782,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.08603190931883331,
      "cumulativeWealth": 1.4208793830118012,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.06632688412764809,
      "cumulativeWealth": 1.515121885208189,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0019119187966905038,
      "cumulativeWealth": 1.5180186752197955,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.047723346815189194,
      "cumulativeWealth": 1.590463606929244,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.05334774413741061,
      "cumulativeWealth": 1.6753112524915685,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.0496643001234347,
      "cumulativeWealth": 1.59210809164766,
      "drawdown": -0.0496643001234347,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.048143457149417146,
      "cumulativeWealth": 1.5154585039601807,
      "drawdown": -0.09541674616800344,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.06057404561982693,
      "cumulativeWealth": 1.6072559565140194,
      "drawdown": -0.040622478883452495,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.019692081375791037,
      "cumulativeWealth": 1.6389061716014184,
      "drawdown": -0.02173033866752072,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0634750985585979,
      "cumulativeWealth": 1.7429359023721127,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02249626259163051,
      "cumulativeWealth": 1.7821454461122563,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.022749373496619762,
      "cumulativeWealth": 1.8226881384911642,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.011551878309001173,
      "cumulativeWealth": 1.843743610062274,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02196970551460109,
      "cumulativeWealth": 1.8842501142197696,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.031397434200287844,
      "cumulativeWealth": 1.9434107331978696,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02635340288681487,
      "cumulativeWealth": 1.9946262192243933,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.029011109789972345,
      "cumulativeWealth": 2.0524925394602698,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.012181335526281423,
      "cumulativeWealth": 2.0274904391719146,
      "drawdown": -0.012181335526281534,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03484091853551452,
      "cumulativeWealth": 2.098130068394638,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.021438974606568406,
      "cumulativeWealth": 2.0531483111370474,
      "drawdown": -0.021438974606568406,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.027051194629146957,
      "cumulativeWealth": 2.1086884257041203,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.014463164569569309,
      "cumulativeWealth": 2.0781901179772158,
      "drawdown": -0.014463164569569198,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.011291170407575324,
      "cumulativeWealth": 2.054724919215796,
      "drawdown": -0.025591028921356673,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.051887607788389634,
      "cumulativeWealth": 2.161339679937096,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.01398356991181915,
      "cumulativeWealth": 2.191562924454685,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.028078977198759736,
      "cumulativeWealth": 2.1300260790692747,
      "drawdown": -0.028078977198759736,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.005767365830296356,
      "cumulativeWealth": 2.1177414394432104,
      "drawdown": -0.03368440129541039,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.05189263758896634,
      "cumulativeWealth": 2.2276366284673728,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.0021730514779448873,
      "cumulativeWealth": 2.2227958593995574,
      "drawdown": -0.0021730514779449983,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.013811131974134305,
      "cumulativeWealth": 2.253495186365284,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.013654583961804745,
      "cumulativeWealth": 2.2842657255950316,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.043207053182653166,
      "cumulativeWealth": 2.185569334905935,
      "drawdown": -0.04320705318265328,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.08090952466668377,
      "cumulativeWealth": 2.0087359588926157,
      "drawdown": -0.1206207157140804,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.060404266469889834,
      "cumulativeWealth": 2.130072181021215,
      "drawdown": -0.06750245509797259,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.027701793723915236,
      "cumulativeWealth": 2.189079001196915,
      "drawdown": -0.04167060046103932,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0023274373863462205,
      "cumulativeWealth": 2.194173945505966,
      "drawdown": -0.039440148788117635,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03360801961522464,
      "cumulativeWealth": 2.2679157865057453,
      "drawdown": -0.007157634466991469,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.014896861950114193,
      "cumulativeWealth": 2.301700614891806,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03137729681454826,
      "cumulativeWealth": 2.373921758263495,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.007979818888714685,
      "cumulativeWealth": 2.354978292576573,
      "drawdown": -0.007979818888714574,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.015794714270579213,
      "cumulativeWealth": 2.392174501821237,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.026453622663716092,
      "cumulativeWealth": 2.328892820204295,
      "drawdown": -0.026453622663716092,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.010719828826010414,
      "cumulativeWealth": 2.3039274878175804,
      "drawdown": -0.036889873182943456,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02534386966319624,
      "cumulativeWealth": 2.362317925782284,
      "drawdown": -0.012480935657587677,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02231256547887739,
      "cumulativeWealth": 2.4150272991832273,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.047065883740074366,
      "cumulativeWealth": 2.528692693275691,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03501723375318311,
      "cumulativeWealth": 2.617240516406092,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02991628758290643,
      "cumulativeWealth": 2.695538636368531,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.015031438660427998,
      "cumulativeWealth": 2.655020812699144,
      "drawdown": -0.015031438660427998,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02594566125131159,
      "cumulativeWealth": 2.723907083320618,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.025812786567759316,
      "cumulativeWealth": 2.794218715492781,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.005483026992058937,
      "cumulativeWealth": 2.778897938854018,
      "drawdown": -0.005483026992058937,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.019671255855595704,
      "cumulativeWealth": 2.724233526502233,
      "drawdown": -0.02504642482083075,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.023902796731797293,
      "cumulativeWealth": 2.7893503267361632,
      "drawdown": -0.0017423076903838597,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0518172118236242,
      "cumulativeWealth": 2.9338866834669464,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.05324572074455447,
      "cumulativeWealth": 3.0901035945109943,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.027953696409869888,
      "cumulativeWealth": 3.1764834122670025,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0031394706420384555,
      "cumulativeWealth": 3.186455888684737,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.011660690135028906,
      "cumulativeWealth": 3.149299613937846,
      "drawdown": -0.011660690135028906,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0065502823601184534,
      "cumulativeWealth": 3.169928415645751,
      "drawdown": -0.005186788587808855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.03871272718436036,
      "cumulativeWealth": 3.047211841696905,
      "drawdown": -0.04369872104060646,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.0027818143065720946,
      "cumulativeWealth": 3.0556886191932935,
      "drawdown": -0.04103846846140391,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.01751564031526609,
      "cumulativeWealth": 3.1092109619625354,
      "drawdown": -0.02424164319879718,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.031234503543546177,
      "cumulativeWealth": 3.206325622771587,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02708161731403913,
      "cumulativeWealth": 3.2931581062716853,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.09203251852254479,
      "cumulativeWealth": 3.5962357406848025,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.054364991245798855,
      "cumulativeWealth": 3.7917450652449607,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.014402243419154415,
      "cumulativeWealth": 3.8463547006579963,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.02656955055783161,
      "cumulativeWealth": 3.948550616340482,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.041268583637947165,
      "cumulativeWealth": 4.111501707699597,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.03849073898731792,
      "cumulativeWealth": 4.269756446776574,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.017382436653260114,
      "cumulativeWealth": 4.195537675815631,
      "drawdown": -0.017382436653260225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.07729141453922761,
      "cumulativeWealth": 4.519816717532044,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": 0.11048512200278893,
      "cumulativeWealth": 5.019189218998817,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.03451494156012991,
      "cumulativeWealth": 4.845952196425839,
      "drawdown": -0.03451494156012991,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "netReturn": -0.11567215270646225,
      "cumulativeWealth": 4.285410473952653,
      "drawdown": -0.14619467667579422,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.024648371821971687,
      "cumulativeWealth": 1.0246483718219717,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.028159456628098885,
      "cumulativeWealth": 1.0535019132073447,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.004118642228689949,
      "cumulativeWealth": 1.0491629157396032,
      "drawdown": -0.0041186422286899615,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.015339628643813429,
      "cumulativeWealth": 1.0652566852539092,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.008696255028207311,
      "cumulativeWealth": 1.07452042905938,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.011512673516950778,
      "cumulativeWealth": 1.0868910319464344,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.021323969709787137,
      "cumulativeWealth": 1.1100678633894994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.01222851494601875,
      "cumulativeWealth": 1.0964933819309457,
      "drawdown": -0.012228514946018842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.01879217256573746,
      "cumulativeWealth": 1.117098874781381,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0290224059047546,
      "cumulativeWealth": 1.1495197717610308,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.03808976701887982,
      "cumulativeWealth": 1.1057348314710573,
      "drawdown": -0.03808976701887978,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.019758249070183226,
      "cumulativeWealth": 1.083887447265275,
      "drawdown": -0.05709542898527875,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02024616805266042,
      "cumulativeWealth": 1.105832014672777,
      "drawdown": -0.038005224582893016,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.01764631377535806,
      "cumulativeWealth": 1.125345873386529,
      "drawdown": -0.021029562925627743,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0029221275473736473,
      "cumulativeWealth": 1.128634277563475,
      "drawdown": -0.01816888644338832,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0097637363869356,
      "cumulativeWealth": 1.1396539651268642,
      "drawdown": -0.008582546274130132,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02890356227735457,
      "cumulativeWealth": 1.1725940244825426,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.002607846936158312,
      "cumulativeWealth": 1.1695360787484381,
      "drawdown": -0.0026078469361584533,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.04337113809831524,
      "cumulativeWealth": 1.1188119679660775,
      "drawdown": -0.04586587974486622,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0010309140298178914,
      "cumulativeWealth": 1.119965366920582,
      "drawdown": -0.04488224949396724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.05505590499918004,
      "cumulativeWealth": 1.0583046600770307,
      "drawdown": -0.09746712162885784,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.036730695306159855,
      "cumulativeWealth": 1.0971769260874094,
      "drawdown": -0.06431646146961578,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.014472440905642928,
      "cumulativeWealth": 1.1130557543132444,
      "drawdown": -0.050774836751851904,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.026261336262122008,
      "cumulativeWealth": 1.1422860857557544,
      "drawdown": -0.02584691555132468,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.026994002107149376,
      "cumulativeWealth": 1.1731209587616125,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.027195743947700055,
      "cumulativeWealth": 1.1412170615474513,
      "drawdown": -0.02719574394770008,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.042325521280047455,
      "cumulativeWealth": 1.1895196685711313,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.011822266587403292,
      "cumulativeWealth": 1.203582487203939,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.024789326161439623,
      "cumulativeWealth": 1.2334184860414341,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.009528041972889647,
      "cumulativeWealth": 1.2216664229362932,
      "drawdown": -0.0095280419728897,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.018363366410942918,
      "cumulativeWealth": 1.2441003310926182,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.006160011262972697,
      "cumulativeWealth": 1.2517640031444168,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.038163491369549524,
      "cumulativeWealth": 1.2995356878751314,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02211130018718843,
      "cumulativeWealth": 1.3282701115737028,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.004269598413197791,
      "cumulativeWealth": 1.3339412915343758,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.06712383420454199,
      "cumulativeWealth": 1.2444020374428297,
      "drawdown": -0.06712383420454204,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.08743835212702245,
      "cumulativeWealth": 1.35321050098034,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.05848978545844849,
      "cumulativeWealth": 1.4323594928627996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.015072114948522711,
      "cumulativeWealth": 1.4539481797868354,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.05136190672564253,
      "cumulativeWealth": 1.5286257305809647,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.054215843275212575,
      "cumulativeWealth": 1.6115014636165998,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.04041730880923161,
      "cumulativeWealth": 1.546368911315079,
      "drawdown": -0.04041730880923167,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.03395785003770417,
      "cumulativeWealth": 1.4938575477216738,
      "drawdown": -0.07300267393546422,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.07242003531216634,
      "cumulativeWealth": 1.6020427640790234,
      "drawdown": -0.00586949484758692,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.027847023671289276,
      "cumulativeWealth": 1.6466548868527497,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.05085777769768737,
      "cumulativeWealth": 1.7304000950331173,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.019121585629611092,
      "cumulativeWealth": 1.7634880886237805,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.01883829610626435,
      "cumulativeWealth": 1.7967091994171454,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.020703199307711966,
      "cumulativeWealth": 1.8339068280706783,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.021558155869255878,
      "cumulativeWealth": 1.8734424773199188,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.020820678964042147,
      "cumulativeWealth": 1.9124488216977966,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02047791488859911,
      "cumulativeWealth": 1.9516117858973259,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0215259207465282,
      "cumulativeWealth": 1.993622026528542,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.02299195303434191,
      "cumulativeWealth": 1.9477847625263682,
      "drawdown": -0.022991953034341872,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.04183781704419441,
      "cumulativeWealth": 2.0292758250624163,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.03129181257827922,
      "cumulativeWealth": 1.9657761062749304,
      "drawdown": -0.03129181257827918,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.027168021995624472,
      "cumulativeWealth": 2.019182354768681,
      "drawdown": -0.0049739272350642905,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.021984038389153422,
      "cumulativeWealth": 1.974792572366745,
      "drawdown": -0.026848618616937214,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.007363727036570706,
      "cumulativeWealth": 1.960250738909989,
      "drawdown": -0.03401463975470376,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.04431465373285605,
      "cumulativeWealth": 2.0471185716343605,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.009295043185362728,
      "cumulativeWealth": 2.028090516105461,
      "drawdown": -0.009295043185362672,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.016373078646255722,
      "cumulativeWealth": 1.9948844305835411,
      "drawdown": -0.02551593335852409,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.023763926178248206,
      "cumulativeWealth": 1.9474781442410172,
      "drawdown": -0.048673500780071266,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.04575828580148271,
      "cumulativeWealth": 2.036591405757339,
      "drawdown": -0.005142430938241627,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.01728347405734883,
      "cumulativeWealth": 2.0013920310305124,
      "drawdown": -0.02233702592387765,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.01759746054460322,
      "cumulativeWealth": 1.9661726137301698,
      "drawdown": -0.03954141153610158,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.016442025211403075,
      "cumulativeWealth": 1.9985004734150915,
      "drawdown": -0.02374952721006962,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.008704473416249022,
      "cumulativeWealth": 1.9811045791718889,
      "drawdown": -0.032247273498069995,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.05741761152098227,
      "cumulativeWealth": 1.8673542860625583,
      "drawdown": -0.08781332359672922,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.07253641712323304,
      "cumulativeWealth": 2.002805475473249,
      "drawdown": -0.021646570342885973,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.006399564924184524,
      "cumulativeWealth": 1.989988391802446,
      "drawdown": -0.027907606634775206,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.010523573150328891,
      "cumulativeWealth": 2.010930180211884,
      "drawdown": -0.017677721224317988,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.017639419063888207,
      "cumulativeWealth": 2.0464018203688616,
      "drawdown": -0.00035012689320024215,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.020570838377647185,
      "cumulativeWealth": 2.0884980214713926,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.03060892419017837,
      "cumulativeWealth": 2.152424699081948,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.009290578366464243,
      "cumulativeWealth": 2.172421969426682,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.00236495586598638,
      "cumulativeWealth": 2.1672842873466887,
      "drawdown": -0.0023649558659863956,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.03508585132347359,
      "cumulativeWealth": 2.091243273065142,
      "drawdown": -0.03736783069955951,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.011050541498019652,
      "cumulativeWealth": 2.068133902493681,
      "drawdown": -0.04800543743374275,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.048854015546797275,
      "cumulativeWealth": 2.169170548318966,
      "drawdown": -0.0014966802736643414,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02627074038479217,
      "cumulativeWealth": 2.226156264644191,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02756549377437531,
      "cumulativeWealth": 2.287521361298027,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.032143553113703066,
      "cumulativeWealth": 2.3610504256736404,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.025099698434871198,
      "cumulativeWealth": 2.4203120793475734,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.029553374575013336,
      "cumulativeWealth": 2.348783689878185,
      "drawdown": -0.029553374575013502,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.029365014079870445,
      "cumulativeWealth": 2.4177557560020277,
      "drawdown": -0.0010561957556459722,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.023827429991474598,
      "cumulativeWealth": 2.475364662014651,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.0012363569730325355,
      "cumulativeWealth": 2.472304227653971,
      "drawdown": -0.001236356973032482,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.007035340633267865,
      "cumulativeWealth": 2.4549107252633573,
      "drawdown": -0.008262999413850669,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.03048360902919071,
      "cumulativeWealth": 2.5297452640138522,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.027441881664233735,
      "cumulativeWealth": 2.599166234189576,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.04742821305715984,
      "cumulativeWealth": 2.7224400441156953,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0017524995666372888,
      "cumulativeWealth": 2.7272111191132042,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.011841220144388452,
      "cumulativeWealth": 2.7595046263548477,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.01470555797192982,
      "cumulativeWealth": 2.718924571098178,
      "drawdown": -0.01470555797192985,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.001255879918918466,
      "cumulativeWealth": 2.7155099283282818,
      "drawdown": -0.015942969475894908,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.02268753074110917,
      "cumulativeWealth": 2.6539017133515466,
      "drawdown": -0.03826879360691515,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02204726820952063,
      "cumulativeWealth": 2.7124129962275143,
      "drawdown": -0.01706524775410101,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.025531788797903823,
      "cumulativeWealth": 2.781665751979885,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.015047354059609762,
      "cumulativeWealth": 2.8235224614254166,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.02781889918997193,
      "cumulativeWealth": 2.902069748140432,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0862139588338317,
      "cumulativeWealth": 3.1522686699395197,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0463887683285548,
      "cumulativeWealth": 3.298498530978706,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.0011789437822712497,
      "cumulativeWealth": 3.3023872753126344,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.03470467485083613,
      "cumulativeWealth": 3.416995551933898,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.04435281503326956,
      "cumulativeWealth": 3.568548923618327,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.03695018895324523,
      "cumulativeWealth": 3.7004074806349245,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.04083947862302321,
      "cumulativeWealth": 3.5492847684330595,
      "drawdown": -0.04083947862302317,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.08775576729215794,
      "cumulativeWealth": 3.8607549766252713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": 0.09813789250871693,
      "cumulativeWealth": 4.2396413335238154,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.0477857570429283,
      "cumulativeWealth": 4.0370468628108895,
      "drawdown": -0.04778575704292842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "netReturn": -0.07607884061525633,
      "cumulativeWealth": 3.729913017978779,
      "drawdown": -0.12022911266443648,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.024648371821971687,
      "cumulativeWealth": 1.0246483718219717,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.028159456628098885,
      "cumulativeWealth": 1.0535019132073447,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.004118642228689949,
      "cumulativeWealth": 1.0491629157396032,
      "drawdown": -0.0041186422286899615,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.015339628643813429,
      "cumulativeWealth": 1.0652566852539092,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.008696255028207311,
      "cumulativeWealth": 1.07452042905938,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.011512673516950778,
      "cumulativeWealth": 1.0868910319464344,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.021323969709787137,
      "cumulativeWealth": 1.1100678633894994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.01222851494601875,
      "cumulativeWealth": 1.0964933819309457,
      "drawdown": -0.012228514946018842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.014757027772885026,
      "cumulativeWealth": 1.1126743652208853,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.030394875404253344,
      "cumulativeWealth": 1.1464939639172806,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.035439585482796875,
      "cumulativeWealth": 1.1058626930775235,
      "drawdown": -0.03543958548279691,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.025928229613551353,
      "cumulativeWealth": 1.0771896312503493,
      "drawdown": -0.06044892938654112,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.023299679717392767,
      "cumulativeWealth": 1.1022878046533788,
      "drawdown": -0.03855769036311407,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02182432132359959,
      "cumulativeWealth": 1.1263444878932194,
      "drawdown": -0.017574864463494877,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.017925683121734128,
      "cumulativeWealth": 1.146534982269105,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0097637363869356,
      "cumulativeWealth": 1.1577294475943805,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02890356227735457,
      "cumulativeWealth": 1.191191952783252,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.002607846936158312,
      "cumulativeWealth": 1.1880855064988096,
      "drawdown": -0.0026078469361584533,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.04337113809831524,
      "cumulativeWealth": 1.1365568859238429,
      "drawdown": -0.045865879744866334,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0010309140298178914,
      "cumulativeWealth": 1.1377285783632278,
      "drawdown": -0.04488224949396735,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.05505590499918004,
      "cumulativeWealth": 1.0750899018380098,
      "drawdown": -0.09746712162885807,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.036730695306159855,
      "cumulativeWealth": 1.114578701449151,
      "drawdown": -0.06431646146961623,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.014472440905642928,
      "cumulativeWealth": 1.1307093758405622,
      "drawdown": -0.05077483675185235,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.026261336262122008,
      "cumulativeWealth": 1.1604033149742452,
      "drawdown": -0.025846915551325123,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.026994002107149376,
      "cumulativeWealth": 1.191727244503803,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.027195743947700055,
      "cumulativeWealth": 1.1593173355067794,
      "drawdown": -0.02719574394770008,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.042325521280047455,
      "cumulativeWealth": 1.2083860460610996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.011822266587403292,
      "cumulativeWealth": 1.222671908038132,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.024789326161439623,
      "cumulativeWealth": 1.252981120754919,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.009528041972889647,
      "cumulativeWealth": 1.2410426640451278,
      "drawdown": -0.009528041972889811,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.018363366410942918,
      "cumulativeWealth": 1.2638323852166011,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.006160011262972697,
      "cumulativeWealth": 1.271617606944045,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.038163491369549524,
      "cumulativeWealth": 1.3201469745120211,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02211130018718843,
      "cumulativeWealth": 1.349337140556665,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.004269598413197791,
      "cumulativeWealth": 1.3550982682708546,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.06712383420454199,
      "cumulativeWealth": 1.26413887678058,
      "drawdown": -0.06712383420454193,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.08743835212702245,
      "cumulativeWealth": 1.3746730970259788,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.05848978545844849,
      "cumulativeWealth": 1.4550774315465294,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.025600271869988478,
      "cumulativeWealth": 1.4923278093860053,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.05136190672564253,
      "cumulativeWealth": 1.5689766111357717,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.054215843275212575,
      "cumulativeWealth": 1.654040001187583,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.04041730880923161,
      "cumulativeWealth": 1.5871881556767626,
      "drawdown": -0.04041730880923167,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.03395785003770417,
      "cumulativeWealth": 1.533290658304671,
      "drawdown": -0.07300267393546422,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.07242003531216634,
      "cumulativeWealth": 1.6443316219229098,
      "drawdown": -0.00586949484758692,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.021323069834890684,
      "cumulativeWealth": 1.6793938199288911,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.06095163438641579,
      "cumulativeWealth": 1.781755618032003,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.021821327199226626,
      "cumulativeWealth": 1.8206358903621398,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02196715801854868,
      "cumulativeWealth": 1.860630086659966,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.020703199307711966,
      "cumulativeWealth": 1.8991510821820128,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.021887395585532047,
      "cumulativeWealth": 1.9407185531944218,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.029282083153038704,
      "cumulativeWealth": 1.9975468352457058,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02047791488859911,
      "cumulativeWealth": 2.038452429323858,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0215259207465282,
      "cumulativeWealth": 2.0823319947630514,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.02299195303434191,
      "cumulativeWealth": 2.034455115337552,
      "drawdown": -0.022991953034341872,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.04183781704419441,
      "cumulativeWealth": 2.11957227623767,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.03129181257827922,
      "cumulativeWealth": 2.0532470178235243,
      "drawdown": -0.031291812578279066,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.027168021995624472,
      "cumulativeWealth": 2.109029677966204,
      "drawdown": -0.0049739272350642905,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.021984038389153422,
      "cumulativeWealth": 2.0626646885619313,
      "drawdown": -0.026848618616937103,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.007363727036570706,
      "cumulativeWealth": 2.0474757888273882,
      "drawdown": -0.034014639754703646,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.04431465373285605,
      "cumulativeWealth": 2.1382089694356803,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.009295043185362728,
      "cumulativeWealth": 2.1183342247254457,
      "drawdown": -0.009295043185362672,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.007008359804252506,
      "cumulativeWealth": 2.1034881762929074,
      "drawdown": -0.01623825998257622,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.023763926178248206,
      "cumulativeWealth": 2.053501038554665,
      "drawdown": -0.03961630134933514,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0408508043714958,
      "cumulativeWealth": 2.137388207757325,
      "drawdown": -0.00038385475418323267,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.029371812120871987,
      "cumulativeWealth": 2.07460924288971,
      "drawdown": -0.02974439236533355,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.04272433455959324,
      "cumulativeWealth": 1.9859729435160653,
      "drawdown": -0.07119791755423854,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.018671978211081738,
      "cumulativeWealth": 2.0230549870451955,
      "drawdown": -0.05385534530840386,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.018897590396874296,
      "cumulativeWealth": 2.0612858515407293,
      "drawdown": -0.03597549116785004,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.03862408100442107,
      "cumulativeWealth": 1.9816705798375531,
      "drawdown": -0.07321005188723018,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.07253641712323304,
      "cumulativeWealth": 2.125413863617489,
      "drawdown": -0.005984029625302756,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.006399564924184524,
      "cumulativeWealth": 2.1118121396065073,
      "drawdown": -0.012345299363391793,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.010523573150328891,
      "cumulativeWealth": 2.1340359491374086,
      "drawdown": -0.0019516428739764224,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.017639419063888207,
      "cumulativeWealth": 2.1716791035416456,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.020570838377647185,
      "cumulativeWealth": 2.2163523633887148,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.03060892419017837,
      "cumulativeWealth": 2.2841925248584025,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.009290578366464243,
      "cumulativeWealth": 2.3054139945146916,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.00236495586598638,
      "cumulativeWealth": 2.299961792164837,
      "drawdown": -0.0023649558659863956,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.03508585132347359,
      "cumulativeWealth": 2.2192656746752717,
      "drawdown": -0.0373678306995594,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.011050541498019652,
      "cumulativeWealth": 2.194741587242142,
      "drawdown": -0.048005437433742526,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.048854015546797275,
      "cumulativeWealth": 2.3019635268664724,
      "drawdown": -0.0014966802736641194,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02627074038479217,
      "cumulativeWealth": 2.362437813056042,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02756549377437531,
      "cumulativeWealth": 2.4275595778841867,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.032143553113703066,
      "cumulativeWealth": 2.5055899681125857,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.025099698434871198,
      "cumulativeWealth": 2.5684795207136504,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.029553374575013336,
      "cumulativeWealth": 2.492572283349749,
      "drawdown": -0.02955337457501339,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.029365014079870445,
      "cumulativeWealth": 2.5657667035454095,
      "drawdown": -0.0010561957556457502,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.023827429991474598,
      "cumulativeWealth": 2.6269023300485945,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.0012363569730325355,
      "cumulativeWealth": 2.6236545410353638,
      "drawdown": -0.001236356973032482,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.007035340633267865,
      "cumulativeWealth": 2.60519623763516,
      "drawdown": -0.00826299941385078,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.03048360902919071,
      "cumulativeWealth": 2.6846120211875486,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.027441881664233735,
      "cumulativeWealth": 2.7582828265873567,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.04742821305715984,
      "cumulativeWealth": 2.8891032521586473,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0017524995666372888,
      "cumulativeWealth": 2.894166404356026,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.018802619746268453,
      "cumulativeWealth": 2.9485843147395574,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.01470555797192982,
      "cumulativeWealth": 2.905223737164032,
      "drawdown": -0.01470555797192985,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.001255879918918466,
      "cumulativeWealth": 2.9015751250125623,
      "drawdown": -0.015942969475894797,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.009867373586508216,
      "cumulativeWealth": 2.872944199264744,
      "drawdown": -0.025653027826506025,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02204726820952063,
      "cumulativeWealth": 2.93628477057692,
      "drawdown": -0.004171338801862823,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.025531788797903823,
      "cumulativeWealth": 3.0112533731897915,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.015047354059609762,
      "cumulativeWealth": 3.056564768859372,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.02781889918997193,
      "cumulativeWealth": 3.141595036031891,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0862139588338317,
      "cumulativeWealth": 3.4124443811409146,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0463887683285548,
      "cumulativeWealth": 3.5707434729717393,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.0011789437822712497,
      "cumulativeWealth": 3.5749531787872852,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.03470467485083613,
      "cumulativeWealth": 3.699020766464061,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.04435281503326956,
      "cumulativeWealth": 3.8630827503232643,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.03695018895324523,
      "cumulativeWealth": 4.0058243878897315,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.04083947862302321,
      "cumulativeWealth": 3.842228608432924,
      "drawdown": -0.04083947862302317,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.08775576729215794,
      "cumulativeWealth": 4.179406328077835,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": 0.09813789250871693,
      "cumulativeWealth": 4.5895644570529885,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.0477857570429283,
      "cumulativeWealth": 4.370248644975395,
      "drawdown": -0.04778575704292831,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "netReturn": -0.04440419094229158,
      "cumulativeWealth": 4.176191289678616,
      "drawdown": -0.09006806010516377,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxPerformanceSummary": [
    {
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.13900753708834435,
      "annVol": 0.12224341019722659,
      "sharpeRf0": 1.130569876871927,
      "maxDrawdown": -0.12331197114642123,
      "calmar": 1.1272833918394356,
      "cumulativeReturn": 2.369625069393391,
      "terminalWealth": 3.369625069393391,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.16549974789891975,
      "annVol": 0.11069408504369162,
      "sharpeRf0": 1.4466579803593134,
      "maxDrawdown": -0.09746712162885807,
      "calmar": 1.6980059032534165,
      "cumulativeReturn": 3.1761912896786164,
      "terminalWealth": 4.176191289678616,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.1514721345973038,
      "annVol": 0.11279976802380745,
      "sharpeRf0": 1.3131803924522976,
      "maxDrawdown": -0.12022911266443648,
      "calmar": 1.259862368111022,
      "cumulativeReturn": 2.729913017978779,
      "terminalWealth": 3.729913017978779,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "months": 112,
      "startHoldingMonth": "2017-04",
      "endHoldingMonth": "2026-07",
      "cagr": 0.16872806847293464,
      "annVol": 0.11977289605244117,
      "sharpeRf0": 1.3696602109141092,
      "maxDrawdown": -0.14619467667579422,
      "calmar": 1.1541327790416827,
      "cumulativeReturn": 3.285410473952653,
      "terminalWealth": 4.285410473952653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxHedgeHistory": [
    {
      "signalPeriod": "2017-03",
      "holdingMonth": "2017-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.0997204062681507,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.476305859385555,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.1509188218449,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.718893742929044,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.159093980407724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.256679904280635,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.712678474337588,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.241552193384075,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.641556303212832,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.876514721631613,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.819109093251003,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.675941073048541,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -1.02090209726723,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.846099839557579,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.619768339373999,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.215755340902562,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.0478058267224198,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.112329937386762,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": -0.0297624392965204,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.535144122494375,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.0885629817133601,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.0522241528134603,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": -0.123269432558227,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": -0.0103938398296614,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.430565428999243,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.983175822889666,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.50504567048351,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.743400675161289,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.44728273952617,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.91179870150229,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.67450646270708,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.764980332905196,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.08303357888509,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.516128580430243,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.29028625655783,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.86899652390359,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.90149272363274,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.72331490033954,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.06103580361436,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.22938638206425,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.984250655722152,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.917628439038969,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.371660057329101,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": -0.439927021462613,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -1.01936974242918,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -1.39593008502773,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.755050958610939,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.567269248009988,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": -0.354008820962102,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.837169453382657,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "dynamicHedgeRatio": 0.1,
      "zscoreSignal": -0.811927830250974,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": -0.248614813398633,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.0538500076182584,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.427812394746968,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.01627586773114,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.594297685782188,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.14137351677656,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.119635833589,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.53764949729802,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.26093914149015,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.58072555075062,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.78628058149812,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.93986178440274,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.69987276844258,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.74261748162694,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 3.17727144194402,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 4.12369597081831,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 3.49450341290676,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.00838340774884,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.1005748191753,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.69705366706986,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.79569182670921,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.45029897217081,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.91820394317968,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.6480299090754,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.62600206848889,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.00556997142869,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.54327342652034,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.77701097630107,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.70292842613058,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.924589139626385,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.760911136746663,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.31667115444953,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.35508574856464,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.45557750192528,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.87240661798892,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.68710856590458,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.67125723795276,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.4567189313643,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.01861497882392,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.790403362999279,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.45355718129618,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.55662170415921,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.26162732986983,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.88066444687393,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.88372559192218,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.01124742135843,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.4663648330347,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.915346932592754,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.678106830551672,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.05763223031908,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.999642110028502,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.10224273955588,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.26065677155324,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.57504123551004,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.30211890619322,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.17679762993639,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.18182078517746,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.84867855368736,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.51065220273164,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 1.81733187960533,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "dynamicHedgeRatio": 0.9,
      "zscoreSignal": 2.2034184529352,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.14361048765865814,
      "monthsObserved": 9,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.11267436522088525,
      "monthsObserved": 9,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.11709887478138103,
      "monthsObserved": 9,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.0949490142452809,
      "monthsObserved": 9,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": -0.0702452903322709,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": -0.03377849311322445,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": -0.05263116455636596,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": -0.029551246596691505,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.20936445105816315,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.2279410049848427,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.2279410049848427,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.2527532852154559,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.31042920336804647,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.27212640134229127,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.26711017036030227,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.23118137481599232,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.17476033148452808,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.25582793799699965,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.2262328742290025,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.2866437763448446,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": -0.10059125846348016,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": -0.060387532455905224,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": -0.07519284642496638,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": -0.04740030134045459,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.18572200249892967,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.19214456584893247,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.19214456584893247,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.20226219304332704,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.14539545384309882,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.22507622776835845,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.22507622776835845,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.315299174192069,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.2685423274445329,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.27809539938569006,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.25292667222806986,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.2430572126055801,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_USD",
      "displayName": "PDS Active Core · USD",
      "annualReturn": 0.09853684719066558,
      "monthsObserved": 7,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "PDS Active Core · Dynamic Hedge",
      "annualReturn": 0.12899914689332448,
      "monthsObserved": 7,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "FIXED50_COSTED",
      "displayName": "PDS Active Core · Fixed 50% Hedge",
      "annualReturn": 0.09157678471889752,
      "monthsObserved": 7,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "PDS Active Core · KRW Unhedged",
      "annualReturn": 0.08531228046517314,
      "monthsObserved": 7,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
