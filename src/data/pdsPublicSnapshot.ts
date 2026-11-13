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
  startDate: string;
  endDate: string;
  days: number;
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
  startDate: string;
  endDate: string;
  days: number;
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
// PDS_LEGACY_COMPATIBILITY_BINDING_V1
// Compatibility-only delayed binding; reader-facing src/app and src/components must not import this module.
export const pdsPublicSnapshot: PdsPublicSnapshot | null = {
  "exportStatus": "BOUND_PUBLIC_SAFE_EXPORT",
  "publicAsOfDate": "2026-11-13",
  "completedHoldingMonthCutoff": "2026-10",
  "latestEligibleSignalPeriod": "2026-09",
  "latestReleasedSignalPeriod": "2026-09",
  "sourceProgramVersion": "0.3.294",
  "sourceRs03Version": "0.21.167",
  "publicComponentIdentity": "ADAA + F2R",
  "latestAssetTargets": [
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "BIL",
      "targetWeight": 0.30624999999999974
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "QQQ",
      "targetWeight": 0.15312499999999973
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "EWY",
      "targetWeight": 0.11093749999999997
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "GLD",
      "targetWeight": 0.109375
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "DBC",
      "targetWeight": 0.08124999999999975
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "VNQ",
      "targetWeight": 0.0625
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "SPY",
      "targetWeight": 0.05468750000000003
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "IEF",
      "targetWeight": 0.046875
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "VGK",
      "targetWeight": 0.043749999999999976
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "ticker": "EEM",
      "targetWeight": 0.03125000000000003
    }
  ],
  "recentMonthlyReturns": [
    {
      "period": "2026-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.022859378232973793,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.060099634942407776,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018739801387399613,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.004965611800678116,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0007589648480446076,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00540362081008372,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04959273465865088,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694349643809308,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04437252830562932,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.046123606250874305,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173190922506778,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04327050746568173,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.02181116208209133,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03191396420405801,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697804156097233,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.06520330188141243,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0824134747624814,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328150764661777,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08482851420591597,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13799853813506524,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894708610729007,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.07289479687702294,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649239614649928,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137572098366218,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.057244780306957566,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882601865798806,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.060405706452558716,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.07604029901459608,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0698191196903164,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672063608778479,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.019311238943990228,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02426733034858275,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757410630855453,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0005256096719166159,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492362041793929,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.424911469240293e-05,
      "seriesRole": "CORE_STRATEGY"
    }
  ],
  "corePerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.029668886406853057,
      "cumulativeWealth": 1.029668886406853,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004776272594373632,
      "cumulativeWealth": 1.0247509071234289,
      "drawdown": -0.004776272594373521,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02066710767470714,
      "cumulativeWealth": 1.0459295444607026,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010099003519420613,
      "cumulativeWealth": 1.0564923906112773,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00233685710352205,
      "cumulativeWealth": 1.0589612623590943,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01989723586889025,
      "cumulativeWealth": 1.080031664372271,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00899571125339449,
      "cumulativeWealth": 1.089747317369487,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012487112707429082,
      "cumulativeWealth": 1.103355114944098,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05378716277075357,
      "cumulativeWealth": 1.1627014561055398,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.038212366650977936,
      "cumulativeWealth": 1.118271881759209,
      "drawdown": -0.038212366650977936,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.006032187150653456,
      "cumulativeWealth": 1.111526256483124,
      "drawdown": -0.04401404965452327,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006471063362878615,
      "cumulativeWealth": 1.1187190133183296,
      "drawdown": -0.03782780399581598,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009901871503134707,
      "cumulativeWealth": 1.1297964252363213,
      "drawdown": -0.0283004985470936,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.002696160261229763,
      "cumulativeWealth": 1.1267503130113197,
      "drawdown": -0.030920356128767756,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008622483700776895,
      "cumulativeWealth": 1.136465699220105,
      "drawdown": -0.022564482694733434,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.024559084532145725,
      "cumulativeWealth": 1.1643762563951356,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0031834882589054647,
      "cumulativeWealth": 1.1606694782539535,
      "drawdown": -0.0031834882589053537,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03632626496130209,
      "cumulativeWealth": 1.1185066912544042,
      "drawdown": -0.039394108982213294,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.003674778412383839,
      "cumulativeWealth": 1.1226169554975327,
      "drawdown": -0.03586409519109235,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.014609820520429584,
      "cumulativeWealth": 1.1062157232645227,
      "drawdown": -0.04994994771765249,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019987451669076117,
      "cumulativeWealth": 1.1283261565688445,
      "drawdown": -0.03096086821445576,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0026674085711855255,
      "cumulativeWealth": 1.131335863429969,
      "drawdown": -0.028376044928516864,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.017334368981152704,
      "cumulativeWealth": 1.150946856728275,
      "drawdown": -0.011533556780380927,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01707949193573377,
      "cumulativeWealth": 1.1706044442862238,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03647278894850303,
      "cumulativeWealth": 1.1279092354475926,
      "drawdown": -0.03647278894850314,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03418060977698656,
      "cumulativeWealth": 1.166461860888286,
      "drawdown": -0.003538841338043719,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005419945719926433,
      "cumulativeWealth": 1.1727840208586648,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.030780903353694322,
      "cumulativeWealth": 1.2088833724594725,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.006705928364099667,
      "cumulativeWealth": 1.2007766871632082,
      "drawdown": -0.006705928364099556,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01618893922859299,
      "cumulativeWealth": 1.2202159879788046,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009057258304629334,
      "cumulativeWealth": 1.231267799369367,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.027245315661697633,
      "cumulativeWealth": 1.2648140792272693,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002139065943580931,
      "cumulativeWealth": 1.267519599949106,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010709658751650197,
      "cumulativeWealth": 1.2539448975726228,
      "drawdown": -0.010709658751650308,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022270800932907675,
      "cumulativeWealth": 1.2260185403779476,
      "drawdown": -0.03274194700644062,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06062886824269742,
      "cumulativeWealth": 1.3003506569256262,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021642866398515315,
      "cumulativeWealth": 1.3284939724646891,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0252650782676771,
      "cumulativeWealth": 1.3620584766571469,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05876536183720815,
      "cumulativeWealth": 1.4421003358813407,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04375046001620375,
      "cumulativeWealth": 1.5051928889656714,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0311363821134647,
      "cumulativeWealth": 1.4583266280203664,
      "drawdown": -0.0311363821134647,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017226221509256567,
      "cumulativeWealth": 1.4332051704932403,
      "drawdown": -0.047826241407437964,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07480594728082268,
      "cumulativeWealth": 1.54041744091976,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.053055975393232035,
      "cumulativeWealth": 1.6221457907605041,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005008258511363106,
      "cumulativeWealth": 1.6302699162237522,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.013774248914838916,
      "cumulativeWealth": 1.6527256598481916,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01210727728375205,
      "cumulativeWealth": 1.6727356676859457,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03875496500248321,
      "cumulativeWealth": 1.73756247994552,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016615186812571237,
      "cumulativeWealth": 1.7664324051483293,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009826478132568317,
      "cumulativeWealth": 1.7837902145501794,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010552095520918181,
      "cumulativeWealth": 1.802612939283392,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.011417203278140553,
      "cumulativeWealth": 1.823193737642997,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.039950572387782435,
      "cumulativeWealth": 1.7503561042503388,
      "drawdown": -0.039950572387782435,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.044222504180960964,
      "cumulativeWealth": 1.82776123438872,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.016192482567457422,
      "cumulativeWealth": 1.7981652424634063,
      "drawdown": -0.01619248256745731,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026092661021627883,
      "cumulativeWealth": 1.8450841585958773,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.035269282125712786,
      "cumulativeWealth": 1.7800093648606758,
      "drawdown": -0.035269282125712786,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.003398241843070249,
      "cumulativeWealth": 1.7860582671654024,
      "drawdown": -0.031990893832937184,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020738833486452668,
      "cumulativeWealth": 1.8230990321652478,
      "drawdown": -0.011915514166768615,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022489333047718274,
      "cumulativeWealth": 1.7820987508519106,
      "drawdown": -0.03413687524795561,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.001260786179339557,
      "cumulativeWealth": 1.7798519053766182,
      "drawdown": -0.03535462212677676,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.025658452829300904,
      "cumulativeWealth": 1.734183659219371,
      "drawdown": -0.06010593005193998,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016153553483511107,
      "cumulativeWealth": 1.762196887708802,
      "drawdown": -0.04492330092419916,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01838287674163952,
      "cumulativeWealth": 1.7298026395275503,
      "drawdown": -0.062480358162121497,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031558475856797275,
      "cumulativeWealth": 1.675212704690996,
      "drawdown": -0.09206704914433539,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012670456292873222,
      "cumulativeWealth": 1.6964384140470492,
      "drawdown": -0.0805631243736592,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020772815718894444,
      "cumulativeWealth": 1.731678216600502,
      "drawdown": -0.061463831591117235,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.020632836327827198,
      "cumulativeWealth": 1.6959487833849203,
      "drawdown": -0.08082849474164366,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.044392189275872296,
      "cumulativeWealth": 1.771235662779129,
      "drawdown": -0.04002445930322629,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03111876412885728,
      "cumulativeWealth": 1.716116997972485,
      "drawdown": -0.06989771172364145,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025600984602276,
      "cumulativeWealth": 1.7600512828132828,
      "drawdown": -0.04608617736293674,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00872742932923809,
      "cumulativeWealth": 1.7754120059998706,
      "drawdown": -0.03776096188968836,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006973631556429494,
      "cumulativeWealth": 1.787793075190575,
      "drawdown": -0.031050661368693944,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.022073739763960543,
      "cumulativeWealth": 1.8272563542841425,
      "drawdown": -0.009662325823284856,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02102719376059814,
      "cumulativeWealth": 1.8656784276959593,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01707957147553696,
      "cumulativeWealth": 1.8338134396397587,
      "drawdown": -0.01707957147553696,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.023579752455250347,
      "cumulativeWealth": 1.790572572683942,
      "drawdown": -0.0402565918633524,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.005612684820820446,
      "cumulativeWealth": 1.7805226531846616,
      "drawdown": -0.045643329122083354,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.036203349403023166,
      "cumulativeWealth": 1.8449835369179037,
      "drawdown": -0.011092421111184136,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04452234982926617,
      "cumulativeWealth": 1.9271265393777994,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.011371597625679186,
      "cumulativeWealth": 1.9052120317982275,
      "drawdown": -0.011371597625679186,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.023203127763824938,
      "cumulativeWealth": 1.9494189099892183,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.027217122230449586,
      "cumulativeWealth": 2.002476482740745,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0336614647327258,
      "cumulativeWealth": 1.9350701912388544,
      "drawdown": -0.0336614647327258,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02188606008204408,
      "cumulativeWealth": 1.9774212537072804,
      "drawdown": -0.01251212149027181,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02537452654253025,
      "cumulativeWealth": 2.027597381795239,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008444404028436159,
      "cumulativeWealth": 2.0447192332941175,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0165642098804073,
      "cumulativeWealth": 2.0785883918209067,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026273959601714747,
      "cumulativeWealth": 2.1332011392562023,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010298690608042005,
      "cumulativeWealth": 2.1112319607182797,
      "drawdown": -0.010298690608042116,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025891597721699577,
      "cumulativeWealth": 2.1658951293423923,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022147748115994625,
      "cumulativeWealth": 2.1179254295720575,
      "drawdown": -0.022147748115994514,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.018995371328935695,
      "cumulativeWealth": 2.1581562095537743,
      "drawdown": -0.003573081486621943,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.002941279089633375,
      "cumulativeWealth": 2.1518084698224516,
      "drawdown": -0.006503851146393069,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017649297702123645,
      "cumulativeWealth": 2.113830561540604,
      "drawdown": -0.02403836044342378,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002832854803237028,
      "cumulativeWealth": 2.1198187366000933,
      "drawdown": -0.02127360282503088,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016573648063796353,
      "cumulativeWealth": 2.1549518662995446,
      "drawdown": -0.005052535967505656,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03893795954036383,
      "cumulativeWealth": 2.2388612948809476,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0021595660039908093,
      "cumulativeWealth": 2.2436962636210236,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.023678023875491228,
      "cumulativeWealth": 2.2968225573203926,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06420612494045752,
      "cumulativeWealth": 2.444292633401767,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.043871991083790585,
      "cumulativeWealth": 2.5515286180205443,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0005256096719166159,
      "cumulativeWealth": 2.5501875099007405,
      "drawdown": -0.0005256096719167269,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019311238943990228,
      "cumulativeWealth": 2.599434790256413,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07604029901459608,
      "cumulativeWealth": 2.7970965889764545,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.057244780306957566,
      "cumulativeWealth": 2.957215768709752,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.07289479687702294,
      "cumulativeWealth": 2.741650125928125,
      "drawdown": -0.07289479687702305,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.08482851420591597,
      "cumulativeWealth": 2.9742202325830704,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06520330188141243,
      "cumulativeWealth": 3.1681492122699892,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02181116208209133,
      "cumulativeWealth": 3.0990481963009184,
      "drawdown": -0.02181116208209133,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.046123606250874305,
      "cumulativeWealth": 2.956108917542253,
      "drawdown": -0.06692875888121719,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04959273465865088,
      "cumulativeWealth": 3.1027104427119974,
      "drawdown": -0.020655204402795446,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004965611800678116,
      "cumulativeWealth": 3.0873035871235794,
      "drawdown": -0.025518250476745608,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022859378232973793,
      "cumulativeWealth": 3.0167297467055048,
      "drawdown": -0.04779429737022767,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.028507661110714677,
      "cumulativeWealth": 1.0285076611107147,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005397999499237804,
      "cumulativeWealth": 1.022955777271077,
      "drawdown": -0.005397999499237693,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.020989456664903372,
      "cumulativeWealth": 1.0444270632282207,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01017442558746029,
      "cumulativeWealth": 1.0550535086645658,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0025389757818479186,
      "cumulativeWealth": 1.057732263971619,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01801474422200222,
      "cumulativeWealth": 1.0767870401624269,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007366502692967902,
      "cumulativeWealth": 1.0847191947935364,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012748320715886052,
      "cumulativeWealth": 1.098547542975442,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05383322908797483,
      "cumulativeWealth": 1.157685904520471,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03767791193043346,
      "cumulativeWealth": 1.1140667169668446,
      "drawdown": -0.03767791193043346,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.006811502429240446,
      "cumulativeWealth": 1.106478248817889,
      "drawdown": -0.04423277117103097,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0076492360700399775,
      "cumulativeWealth": 1.1149419621494614,
      "drawdown": -0.03692188200971036,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008570307930916954,
      "cumulativeWealth": 1.1244973580901831,
      "drawdown": -0.028668005977005473,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001960758840802046,
      "cumulativeWealth": 1.1222924899538493,
      "drawdown": -0.03057255377163992,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0074723820163722365,
      "cumulativeWealth": 1.13067868817289,
      "drawdown": -0.023328621556265472,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.023582817898875286,
      "cumulativeWealth": 1.1573432777782104,
      "drawdown": -0.0002959582913835135,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.003371646375177617,
      "cumulativeWealth": 1.1534411255108534,
      "drawdown": -0.003666606799860639,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02890670384924543,
      "cumulativeWealth": 1.1200989444881708,
      "drawdown": -0.03246732113221096,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002172584689528856,
      "cumulativeWealth": 1.1225324543057233,
      "drawdown": -0.030365274447483825,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007706733594863846,
      "cumulativeWealth": 1.1138813957288005,
      "drawdown": -0.03783799096164597,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014906468329306755,
      "cumulativeWealth": 1.130485433476836,
      "drawdown": -0.023495553446253536,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00035143610481236376,
      "cumulativeWealth": 1.1300881400795477,
      "drawdown": -0.023838732365282334,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019272334700726867,
      "cumulativeWealth": 1.1518675769564826,
      "drawdown": -0.0050258256935403756,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01518253680903281,
      "cumulativeWealth": 1.1693558488427558,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.035785609297097065,
      "cumulativeWealth": 1.1275097373067937,
      "drawdown": -0.035785609297096954,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0316600015501356,
      "cumulativeWealth": 1.1632066973377198,
      "drawdown": -0.005258580192780027,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004663506191936451,
      "cumulativeWealth": 1.1686313189732562,
      "drawdown": -0.0006195974221333556,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03357691031147181,
      "cumulativeWealth": 1.2078703479575983,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008137487159644796,
      "cumulativeWealth": 1.1980413185105776,
      "drawdown": -0.008137487159644796,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014834476041113875,
      "cumulativeWealth": 1.2158136337462873,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006858884590396963,
      "cumulativeWealth": 1.2241527591435841,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02740924715576698,
      "cumulativeWealth": 1.2577058646753647,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0009679004818738957,
      "cumulativeWealth": 1.2589231987878395,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010129336046833082,
      "cumulativeWealth": 1.2461711426501634,
      "drawdown": -0.010129336046833193,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0187879338396848,
      "cumulativeWealth": 1.2227581616691277,
      "drawdown": -0.028726960591030193,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.048277496704187906,
      "cumulativeWealth": 1.281789864789128,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019100910767298362,
      "cumulativeWealth": 1.3062732186188926,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02417599054638675,
      "cumulativeWealth": 1.337853667603221,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.059785842315464466,
      "cumulativeWealth": 1.4178383760157132,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04199947948739635,
      "cumulativeWealth": 1.4773868498056284,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.029833543613101088,
      "cumulativeWealth": 1.4333111647885302,
      "drawdown": -0.029833543613101088,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016915992080601794,
      "cumulativeWealth": 1.4090652844759293,
      "drawdown": -0.04624487170620739,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07296671895803297,
      "cumulativeWealth": 1.5118801550818053,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05259855782724987,
      "cumulativeWealth": 1.5914028708467471,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0036283498907505596,
      "cumulativeWealth": 1.5971770372793241,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013298454694039341,
      "cumulativeWealth": 1.6184170237479432,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010595996602895008,
      "cumulativeWealth": 1.635565765033644,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03840562168136774,
      "cumulativeWealth": 1.6983806850405228,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0156709132706081,
      "cumulativeWealth": 1.7249958614562688,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01008168709428392,
      "cumulativeWealth": 1.7423867299704057,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011008444060673028,
      "cumulativeWealth": 1.7615676968193439,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010534921311373013,
      "cumulativeWealth": 1.7801256738899922,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0383107541941482,
      "cumulativeWealth": 1.7119277167629003,
      "drawdown": -0.0383107541941482,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04270563835737495,
      "cumulativeWealth": 1.7850366827289434,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016567098452198725,
      "cumulativeWealth": 1.7554638042653867,
      "drawdown": -0.016567098452198725,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024027841706364628,
      "cumulativeWealth": 1.7976438106755281,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03492672941082742,
      "cumulativeWealth": 1.7348579917230154,
      "drawdown": -0.03492672941082742,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005220211312366718,
      "cumulativeWealth": 1.7439143170367577,
      "drawdown": -0.029888843006435017,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016282968944053566,
      "cumulativeWealth": 1.7723104197021575,
      "drawdown": -0.014092553164828936,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021285536425312612,
      "cumulativeWealth": 1.7345858417066262,
      "drawdown": -0.03507812203642591,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.000490918462519363,
      "cumulativeWealth": 1.7337343014921078,
      "drawdown": -0.035551820001207046,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01991696847576474,
      "cumulativeWealth": 1.6992035700639376,
      "drawdown": -0.05476070399875166,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010236125410878927,
      "cumulativeWealth": 1.7165968309057253,
      "drawdown": -0.04508511602159193,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01503966040077298,
      "cumulativeWealth": 1.69077979752386,
      "drawdown": -0.05944671158827075,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.023348550769632714,
      "cumulativeWealth": 1.651302539581105,
      "drawdown": -0.08140726779429697,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.00687624865512193,
      "cumulativeWealth": 1.662657306448099,
      "drawdown": -0.07509079575486277,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01831957044327348,
      "cumulativeWealth": 1.6931164740965983,
      "drawdown": -0.05814685643406192,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0171803343071687,
      "cumulativeWealth": 1.664028167050644,
      "drawdown": -0.0743282083087824,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.037460727889509604,
      "cumulativeWealth": 1.7263638734170077,
      "drawdown": -0.039651869205242884,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03075901634546374,
      "cumulativeWealth": 1.673262618816356,
      "drawdown": -0.06919123305769437,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02663978181856619,
      "cumulativeWealth": 1.7178379699067863,
      "drawdown": -0.04439469059154266,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008954389155262144,
      "cumulativeWealth": 1.7332201595950172,
      "drawdown": -0.03583782877226471,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006772796642342094,
      "cumulativeWealth": 1.744958907272362,
      "drawdown": -0.029307754456300183,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01856056985425747,
      "cumulativeWealth": 1.7773463389635993,
      "drawdown": -0.011291153225900352,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01788236678722388,
      "cumulativeWealth": 1.809129498104876,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.014599875877350788,
      "cumulativeWealth": 1.782716431986491,
      "drawdown": -0.014599875877350676,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02027445384785964,
      "cumulativeWealth": 1.74657282996236,
      "drawdown": -0.03457832521555049,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012442056669296209,
      "cumulativeWealth": 1.7443997341496156,
      "drawdown": -0.035779508334293886,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027281104478726448,
      "cumulativeWealth": 1.7919888855496138,
      "drawdown": -0.009474508360632905,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04073776863046219,
      "cumulativeWealth": 1.8649905141574938,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011140134726324802,
      "cumulativeWealth": 1.8442142685664615,
      "drawdown": -0.011140134726324802,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01957648279630253,
      "cumulativeWealth": 1.8803174974677486,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0274965191070764,
      "cumulativeWealth": 1.9320196834642407,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.031175682548244432,
      "cumulativeWealth": 1.8717876511355998,
      "drawdown": -0.031175682548244432,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019647801038720658,
      "cumulativeWealth": 1.9085641624918463,
      "drawdown": -0.012140415117477987,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024966664628663926,
      "cumulativeWealth": 1.956214643859067,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005497727066616331,
      "cumulativeWealth": 1.9669693780547224,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017381802446904793,
      "cumulativeWealth": 2.0011588512031806,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027705835213687635,
      "cumulativeWealth": 2.0566026285710284,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011188843730993492,
      "cumulativeWealth": 2.0335916231431965,
      "drawdown": -0.011188843730993603,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.021242744034775995,
      "cumulativeWealth": 2.076790689464892,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021122237640015085,
      "cumulativeWealth": 2.032924222993444,
      "drawdown": -0.021122237640014974,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017191929558610264,
      "cumulativeWealth": 2.06787411303314,
      "drawdown": -0.00429344010303212,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012005795583081014,
      "cumulativeWealth": 2.0653914656438777,
      "drawdown": -0.005488865044917746,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01660975458414715,
      "cumulativeWealth": 2.031085820279341,
      "drawdown": -0.02200745092772327,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002156612970682481,
      "cumulativeWealth": 2.0354660863039244,
      "drawdown": -0.019898299511163287,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01276521316724466,
      "cumulativeWealth": 2.0614492447902912,
      "drawdown": -0.007387092378844384,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03839018220516999,
      "cumulativeWealth": 2.1405886569045007,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0008001177400291937,
      "cumulativeWealth": 2.142301379862995,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02413393095616101,
      "cumulativeWealth": 2.1940035334518972,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06259108222690046,
      "cumulativeWealth": 2.3313285890202953,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04441027590421043,
      "cumulativeWealth": 2.43486353488206,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.424911469240293e-05,
      "cumulativeWealth": 2.4346583997848494,
      "drawdown": -8.424911469240293e-05,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757410630855453,
      "cumulativeWealth": 2.480326287135475,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672063608778479,
      "cumulativeWealth": 2.6706184975897624,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.060405706452558716,
      "cumulativeWealth": 2.831939094601943,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137572098366218,
      "cumulativeWealth": 2.62980739994291,
      "drawdown": -0.07137572098366207,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894708610729007,
      "cumulativeWealth": 2.8374230311917916,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328150764661777,
      "cumulativeWealth": 3.0169794384368442,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697804156097233,
      "cumulativeWealth": 2.9545345888771064,
      "drawdown": -0.02069780415609712,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04327050746568173,
      "cumulativeWealth": 2.8266903778914845,
      "drawdown": -0.06307270713251933,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04437252830562932,
      "cumulativeWealth": 2.9521177766957245,
      "drawdown": -0.02149887430944042,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00540362081008372,
      "cumulativeWealth": 2.9361656516437535,
      "drawdown": -0.026786323354912156,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018739801387399613,
      "cumulativeWealth": 2.881142490491445,
      "drawdown": -0.0450241543627421,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04011387846959402,
      "cumulativeWealth": 1.040113878469594,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0008434684224514211,
      "cumulativeWealth": 1.0409911816818367,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.017751244313004566,
      "cumulativeWealth": 1.0594700704755542,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.009432587697914663,
      "cumulativeWealth": 1.0694636148286307,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0005200698141658577,
      "cumulativeWealth": 1.0700198105720518,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03685867271304244,
      "cumulativeWealth": 1.1094593205663987,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.023679324126062218,
      "cumulativeWealth": 1.1357305674227713,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.010164647262712156,
      "cumulativeWealth": 1.1472748680261038,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.053373144912103765,
      "cumulativeWealth": 1.2085085358112757,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04302616602250764,
      "cumulativeWealth": 1.156511046909842,
      "drawdown": -0.04302616602250764,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0010033309291177517,
      "cumulativeWealth": 1.1576714102130732,
      "drawdown": -0.04206600457652154,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004079639637309951,
      "cumulativeWealth": 1.1529485280409875,
      "drawdown": -0.045974030074177885,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0219127030731594,
      "cumulativeWealth": 1.1782127467945858,
      "drawdown": -0.025068742271110445,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.009550513635394275,
      "cumulativeWealth": 1.1669602098909286,
      "drawdown": -0.034379836541622355,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01906027608768124,
      "cumulativeWealth": 1.1892027936747882,
      "drawdown": -0.015974849630273846,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.033363645910790884,
      "cumulativeWealth": 1.2288789345990772,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.001475926743039313,
      "cumulativeWealth": 1.2270651993155448,
      "drawdown": -0.001475926743039202,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.10289387118940718,
      "cumulativeWealth": 1.100807710756167,
      "drawdown": -0.10421793411626312,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.018228431093243902,
      "cumulativeWealth": 1.1208737082585973,
      "drawdown": -0.0878892324537377,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07769773855178774,
      "cumulativeWealth": 1.033784355924748,
      "drawdown": -0.15875817640081769,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06599213104884716,
      "cumulativeWealth": 1.102005988617182,
      "drawdown": -0.10324283573408921,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.029892902200229,
      "cumulativeWealth": 1.134948145858982,
      "drawdown": -0.07643616152533372,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.00046801889586078893,
      "cumulativeWealth": 1.1344169686808978,
      "drawdown": -0.07686840685327367,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03461711177568172,
      "cumulativeWealth": 1.1736872076859546,
      "drawdown": -0.044912257309650205,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0426325974040932,
      "cumulativeWealth": 1.123649873482345,
      "drawdown": -0.08563012852935203,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05689674736531414,
      "cumulativeWealth": 1.1875818964609373,
      "drawdown": -0.03360545695383177,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.012110297917157897,
      "cumulativeWealth": 1.2019638670281025,
      "drawdown": -0.021902131132026992,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.005729957119906981,
      "cumulativeWealth": 1.208851068445851,
      "drawdown": -0.01629767228434109,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.005897683278973442,
      "cumulativeWealth": 1.2159804891789934,
      "drawdown": -0.010496107514685216,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.028410168146320025,
      "cumulativeWealth": 1.250526699339213,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.028854831953172067,
      "cumulativeWealth": 1.286610437101601,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02582899495729607,
      "cumulativeWealth": 1.3198422915935026,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.012613988262696774,
      "cumulativeWealth": 1.336490766768274,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.015925538743339684,
      "cumulativeWealth": 1.31520643128199,
      "drawdown": -0.015925538743339684,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.05372586898142795,
      "cumulativeWealth": 1.2445458228714024,
      "drawdown": -0.0687957943167844,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.17033481025017672,
      "cumulativeWealth": 1.4565352994578527,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04653146033041344,
      "cumulativeWealth": 1.5243100139644226,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03478529790661922,
      "cumulativeWealth": 1.577333591902218,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04949988667207461,
      "cumulativeWealth": 1.6554114259454342,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.059544795957567676,
      "cumulativeWealth": 1.7539825615291813,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04279286065811949,
      "cumulativeWealth": 1.6789246301768916,
      "drawdown": -0.04279286065811949,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01999247777325741,
      "cumulativeWealth": 1.6453587668251057,
      "drawdown": -0.06192980311581531,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0913948873652819,
      "cumulativeWealth": 1.7957361459945653,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05711375055749479,
      "cumulativeWealth": 1.898297372303976,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.017266652728001652,
      "cumulativeWealth": 1.9310746138060269,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.018056746790253708,
      "cumulativeWealth": 1.9659435391406093,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02571972180122528,
      "cumulativeWealth": 2.016507060044222,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.041905435300912064,
      "cumulativeWealth": 2.1010096661827373,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.025119331653784993,
      "cumulativeWealth": 2.1537856247953897,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.007565484088962515,
      "cumulativeWealth": 2.1700800556708155,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.006436485302832695,
      "cumulativeWealth": 2.184047744055111,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01933062863445123,
      "cumulativeWealth": 2.2262667599153514,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.054645598792803174,
      "cumulativeWealth": 2.1046110797472632,
      "drawdown": -0.054645598792803174,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05791129352570645,
      "cumulativeWealth": 2.226491829743961,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.012866216481929982,
      "cumulativeWealth": 2.1978453038672265,
      "drawdown": -0.012866216481930093,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0444201580565029,
      "cumulativeWealth": 2.2954739396487516,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0385492275926993,
      "cumulativeWealth": 2.2069851923161217,
      "drawdown": -0.0385492275926993,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.012977484144455542,
      "cumulativeWealth": 2.178344076975791,
      "drawdown": -0.0510264397472896,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0607756279085081,
      "cumulativeWealth": 2.3107343060547745,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03359444351244323,
      "cumulativeWealth": 2.2331064729377528,
      "drawdown": -0.03359444351244323,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.00818703458228276,
      "cumulativeWealth": 2.2148239530178917,
      "drawdown": -0.04150643922391706,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07726968765521902,
      "cumulativeWealth": 2.0436851979569015,
      "drawdown": -0.11556893728462381,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07027798968348087,
      "cumulativeWealth": 2.1873112852151992,
      "drawdown": -0.05341290018336253,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.04836877611326418,
      "cumulativeWealth": 2.081513715370609,
      "drawdown": -0.09919815968609758,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.10551783684555582,
      "cumulativeWealth": 1.8618768907603465,
      "drawdown": -0.1942488213025163,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0669606282467674,
      "cumulativeWealth": 1.9865493370837972,
      "drawdown": -0.14029521616635954,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.042969115065920827,
      "cumulativeWealth": 2.07190960413308,
      "drawdown": -0.10335446238708912,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0514727958149066,
      "cumulativeWealth": 1.965262624132594,
      "drawdown": -0.14950731506298565,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.10665059660462606,
      "cumulativeWealth": 2.174859055481108,
      "drawdown": -0.05880176280658289,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.035116233880503334,
      "cumulativeWealth": 2.0984861962317027,
      "drawdown": -0.09185310023178428,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.01628642009015513,
      "cumulativeWealth": 2.132663023976924,
      "drawdown": -0.07706263831858717,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.00671251549183971,
      "cumulativeWealth": 2.1469785575642426,
      "drawdown": -0.07086740698030303,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008786311096753208,
      "cumulativeWealth": 2.1658425790890603,
      "drawdown": -0.06270375896789915,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.053805541078764785,
      "cumulativeWealth": 2.2823769109483747,
      "drawdown": -0.01227202756807455,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.049366442842053715,
      "cumulativeWealth": 2.395049740266731,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03941704719104733,
      "cumulativeWealth": 2.3006439516297315,
      "drawdown": -0.03941704719104733,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.05334441540833701,
      "cumulativeWealth": 2.177917444967317,
      "drawdown": -0.0906587832598551,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.044854285744075906,
      "cumulativeWealth": 2.0802285135637453,
      "drawdown": -0.13144663403438317,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.11765331425350656,
      "cumulativeWealth": 2.3249742925891654,
      "drawdown": -0.029258451922489548,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07813615957519437,
      "cumulativeWealth": 2.5066388549231373,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.013548421493611018,
      "cumulativeWealth": 2.472677855184376,
      "drawdown": -0.013548421493611018,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.055885834602747764,
      "cumulativeWealth": 2.6108655208250875,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02468551495055893,
      "cumulativeWealth": 2.675316080673314,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.05595425724913694,
      "cumulativeWealth": 2.5256207564725663,
      "drawdown": -0.05595425724913694,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04205298281472891,
      "cumulativeWealth": 2.6318306427410296,
      "drawdown": -0.016254317852916977,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0290856588012407,
      "cumulativeWealth": 2.708379170838445,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0348151086573083,
      "cumulativeWealth": 2.8026716859563763,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.009384144568499897,
      "cumulativeWealth": 2.828972362235432,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.013425606366035403,
      "cumulativeWealth": 2.866953031591198,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0023901036283592303,
      "cumulativeWealth": 2.8601007167480565,
      "drawdown": -0.0023901036283592303,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06782263179092096,
      "cumulativeWealth": 3.0540802745450093,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03127724260283771,
      "cumulativeWealth": 2.958557064869524,
      "drawdown": -0.03127724260283771,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.035289912427174164,
      "cumulativeWealth": 3.0629642845995666,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.018494260528856388,
      "cumulativeWealth": 3.0063170251296,
      "drawdown": -0.018494260528856388,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.02700475732531138,
      "cumulativeWealth": 2.925132163423023,
      "drawdown": -0.04499958483667488,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.00892658146231673,
      "cumulativeWealth": 2.9512435939678614,
      "drawdown": -0.036474695834173176,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05099641872482863,
      "cumulativeWealth": 3.1017464480448145,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.043760407275099666,
      "cumulativeWealth": 3.2374801358753493,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.014430670785023025,
      "cumulativeWealth": 3.284199145889218,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.019628223634781783,
      "cumulativeWealth": 3.348662141185891,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07878107897292108,
      "cumulativeWealth": 3.6124733577842876,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.039040097350664604,
      "cumulativeWealth": 3.7535046693488683,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492362041793929,
      "cumulativeWealth": 3.7366425674485892,
      "drawdown": -0.004492362041793929,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02426733034858275,
      "cumulativeWealth": 3.8273209070274405,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0698191196903164,
      "cumulativeWealth": 4.09454108352844,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882601865798806,
      "cumulativeWealth": 4.212570401198129,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649239614649928,
      "cumulativeWealth": 3.848215093262683,
      "drawdown": -0.08649239614649928,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13799853813506524,
      "cumulativeWealth": 4.3792631505622275,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0824134747624814,
      "cumulativeWealth": 4.740173443699352,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03191396420405801,
      "cumulativeWealth": 4.588895718096105,
      "drawdown": -0.0319139642040579,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173190922506778,
      "cumulativeWealth": 4.259725467002333,
      "drawdown": -0.10135662384582811,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694349643809308,
      "cumulativeWealth": 4.672678147639928,
      "drawdown": -0.014238992910510229,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0007589648480446076,
      "cumulativeWealth": 4.669131749179643,
      "drawdown": -0.01498715086346436,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.060099634942407776,
      "cumulativeWealth": 4.388518635555941,
      "drawdown": -0.07418606351015111,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011216496532785891,
      "cumulativeWealth": 1.011216496532786,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0037517450009185715,
      "cumulativeWealth": 1.0150103229684992,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013668197932058979,
      "cumulativeWealth": 1.0288836849659158,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.005515802313163176,
      "cumulativeWealth": 1.0345588039754265,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009803663269879914,
      "cumulativeWealth": 1.0447012701224914,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014529508405740188,
      "cumulativeWealth": 1.0598802660082236,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017746535926143725,
      "cumulativeWealth": 1.0786894692263493,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009177430782125073,
      "cumulativeWealth": 1.0885890671655813,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02931520778032848,
      "cumulativeWealth": 1.1205012818569344,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02585116900081208,
      "cumulativeWealth": 1.0915350138540243,
      "drawdown": -0.02585116900081208,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01376172143969101,
      "cumulativeWealth": 1.076513613051696,
      "drawdown": -0.03925713385382357,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006631582685565629,
      "cumulativeWealth": 1.075799714147987,
      "drawdown": -0.039894258429465146,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01723292893998596,
      "cumulativeWealth": 1.0943388941755563,
      "drawdown": -0.02334882441010766,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0038608295460744735,
      "cumulativeWealth": 1.0985639501116078,
      "drawdown": -0.019578140695181823,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022111346676931154,
      "cumulativeWealth": 1.1228546784593045,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021423703839179575,
      "cumulativeWealth": 1.146910384545054,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010882011744794973,
      "cumulativeWealth": 1.1481584537725384,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.044038758643632825,
      "cumulativeWealth": 1.097594980742203,
      "drawdown": -0.044038758643632825,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01421604218194128,
      "cumulativeWealth": 1.113198437287121,
      "drawdown": -0.030448773312209854,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.044904354513634726,
      "cumulativeWealth": 1.0632109800151561,
      "drawdown": -0.07398584531452768,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05168280751924237,
      "cumulativeWealth": 1.1181607084476244,
      "drawdown": -0.02612683399782456,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.018994304985496813,
      "cumulativeWealth": 1.1393993939666778,
      "drawdown": -0.00762879006558792,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0193504391374566,
      "cumulativeWealth": 1.1614472725928848,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02371014662256732,
      "cumulativeWealth": 1.188985357720443,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.030619405498489405,
      "cumulativeWealth": 1.1525793329206342,
      "drawdown": -0.030619405498489516,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04614648254141884,
      "cumulativeWealth": 1.2057668149848564,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009798736771124306,
      "cumulativeWealth": 1.21758180661225,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010852876323284022,
      "cumulativeWealth": 1.2189032330883143,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009226130656205145,
      "cumulativeWealth": 1.230148993574058,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014095416114231707,
      "cumulativeWealth": 1.2474884555209875,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021580636634514816,
      "cumulativeWealth": 1.274410050585338,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01724628736317202,
      "cumulativeWealth": 1.2963888925362472,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.007873737508068857,
      "cumulativeWealth": 1.3065963183844538,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04116080073746575,
      "cumulativeWealth": 1.252815767679125,
      "drawdown": -0.04116080073746575,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07703005520081418,
      "cumulativeWealth": 1.1563112999383516,
      "drawdown": -0.11502023718536325,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.08306675674831454,
      "cumulativeWealth": 1.252362329415658,
      "drawdown": -0.04150783850045858,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.031277222889620315,
      "cumulativeWealth": 1.2915327451313556,
      "drawdown": -0.011528865527283605,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013276925572420328,
      "cumulativeWealth": 1.3086803292628084,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04066818692970875,
      "cumulativeWealth": 1.3619019855245011,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03858360723823551,
      "cumulativeWealth": 1.4144490768309517,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022855495369924594,
      "cumulativeWealth": 1.3821211425044477,
      "drawdown": -0.022855495369924594,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.017193336842792784,
      "cumulativeWealth": 1.358357868143823,
      "drawdown": -0.039655869982113456,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0700932519155264,
      "cumulativeWealth": 1.4535695883870654,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022571864267814545,
      "cumulativeWealth": 1.4863793638399614,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.009092695334043555,
      "cumulativeWealth": 1.4728641691337552,
      "drawdown": -0.009092695334043555,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0106108305587993,
      "cumulativeWealth": 1.4884924812685603,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022654392606338725,
      "cumulativeWealth": 1.5222133743308015,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.034674419412400015,
      "cumulativeWealth": 1.5749952393075124,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.004754830303253632,
      "cumulativeWealth": 1.582484074398852,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016768054233068375,
      "cumulativeWealth": 1.609019253181339,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01911396363901452,
      "cumulativeWealth": 1.6397739886811213,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017054322148535084,
      "cumulativeWealth": 1.6677392225348775,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03163213390266428,
      "cumulativeWealth": 1.614985072132929,
      "drawdown": -0.03163213390266428,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04206330125872215,
      "cumulativeWealth": 1.6829166757503955,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.003737624633240344,
      "cumulativeWealth": 1.67662656492742,
      "drawdown": -0.003737624633240344,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.026313980376457824,
      "cumulativeWealth": 1.7207452834555679,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.039639151283214824,
      "cumulativeWealth": 1.6525364008447943,
      "drawdown": -0.039639151283214824,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022292983440178382,
      "cumulativeWealth": 1.6156964342264692,
      "drawdown": -0.06104845978025375,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011305474530142634,
      "cumulativeWealth": 1.633962649112059,
      "drawdown": -0.0504331670572612,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.06788480365273641,
      "cumulativeWealth": 1.5230414155011818,
      "drawdown": -0.11489432506672981,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.004396521182416624,
      "cumulativeWealth": 1.5297374993461306,
      "drawdown": -0.11100293921820847,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.055688198613676576,
      "cumulativeWealth": 1.4445491736557543,
      "drawdown": -0.16050958410599958,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0654047073416808,
      "cumulativeWealth": 1.5390294895993757,
      "drawdown": -0.10560295913830664,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03665014535590516,
      "cumulativeWealth": 1.4826238350985341,
      "drawdown": -0.13838274069177914,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07204761442061858,
      "cumulativeWealth": 1.3758043246965361,
      "drawdown": -0.20046020876856796,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.043651392180424686,
      "cumulativeWealth": 1.435860098837389,
      "drawdown": -0.16555918377766976,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0485886665528219,
      "cumulativeWealth": 1.505626626396301,
      "drawdown": -0.12501481720017837,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03897072306124294,
      "cumulativeWealth": 1.4469512681053773,
      "drawdown": -0.1591136224417612,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05105327676046012,
      "cumulativeWealth": 1.52082287165486,
      "drawdown": -0.1161836174841796,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0257481722981574,
      "cumulativeWealth": 1.4816644623205122,
      "drawdown": -0.13894027398113107,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03281160522399795,
      "cumulativeWealth": 1.5302802517326,
      "drawdown": -0.11068752217671618,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01188696111399068,
      "cumulativeWealth": 1.5484706335784533,
      "drawdown": -0.10011629933464405,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.001807447495928538,
      "cumulativeWealth": 1.545671854209273,
      "drawdown": -0.10174279187603852,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03740717273098393,
      "cumulativeWealth": 1.6034910682450996,
      "drawdown": -0.06814152933489415,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0195783326857355,
      "cumulativeWealth": 1.6348847498378076,
      "drawdown": -0.04989729418019195,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012276366054966181,
      "cumulativeWealth": 1.6148143061911169,
      "drawdown": -0.061561102786649724,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03881907955582842,
      "cumulativeWealth": 1.552128701171194,
      "drawdown": -0.09799043699585874,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01930782178010193,
      "cumulativeWealth": 1.5221604768291994,
      "drawdown": -0.11540627688229033,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07317784178191733,
      "cumulativeWealth": 1.6335488953692945,
      "drawdown": -0.050673617370705415,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.040995212106819556,
      "cumulativeWealth": 1.7005165788218195,
      "drawdown": -0.011755780956217654,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00895122986055541,
      "cumulativeWealth": 1.715738293600539,
      "drawdown": -0.0029097797931916247,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025413753300455477,
      "cumulativeWealth": 1.7593416433222475,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023231219184702168,
      "cumulativeWealth": 1.8002132946590408,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03410463489524729,
      "cumulativeWealth": 1.738817677511124,
      "drawdown": -0.03410463489524729,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.037025876516324496,
      "cumulativeWealth": 1.803198926123053,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.024710101498141457,
      "cumulativeWealth": 1.8477561546088934,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016942118094128045,
      "cumulativeWealth": 1.8790610575894293,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019865234329067505,
      "cumulativeWealth": 1.9163890458170687,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01793398573230065,
      "cumulativeWealth": 1.9507575396222894,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01542897520288411,
      "cumulativeWealth": 1.9206593499166178,
      "drawdown": -0.01542897520288411,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0402239464197236,
      "cumulativeWealth": 1.997915848698205,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022446430710827747,
      "cumulativeWealth": 1.9530697690343362,
      "drawdown": -0.022446430710827747,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01817788622855554,
      "cumulativeWealth": 1.9885724490922736,
      "drawdown": -0.004676573145970697,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.001332645275789579,
      "cumulativeWealth": 1.9912225107721218,
      "drawdown": -0.0033501600832910317,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03353674933018591,
      "cumulativeWealth": 1.9244433805677337,
      "drawdown": -0.03677455593454759,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0034778492388992666,
      "cumulativeWealth": 1.9177504566213215,
      "drawdown": -0.04012450881207896,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03527941139156421,
      "cumulativeWealth": 1.9854075639268252,
      "drawdown": -0.006260666473780652,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03665302883738364,
      "cumulativeWealth": 2.0581787646213945,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01276326738918998,
      "cumulativeWealth": 2.0844478505290103,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01707309320968764,
      "cumulativeWealth": 2.120035822971825,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025879310696565128,
      "cumulativeWealth": 2.174900888722361,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01676427593184715,
      "cumulativeWealth": 2.211361527345322,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0035928087276537735,
      "cumulativeWealth": 2.219306526340766,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006374211449173828,
      "cumulativeWealth": 2.217891893433823,
      "drawdown": -0.0006374211449174938,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009843912816071443,
      "cumulativeWealth": 2.239724627868257,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0012072425650013763,
      "cumulativeWealth": 2.242428518772902,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03680595406699316,
      "cumulativeWealth": 2.159893797712431,
      "drawdown": -0.03680595406699305,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06370683737496563,
      "cumulativeWealth": 2.2974938006304937,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03274989866753297,
      "cumulativeWealth": 2.3727364897904275,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.005158591531741363,
      "cumulativeWealth": 2.360496511427141,
      "drawdown": -0.005158591531741363,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.00497709022144488,
      "cumulativeWealth": 2.348748107322362,
      "drawdown": -0.010110006977717134,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017637840548838213,
      "cumulativeWealth": 2.3901749519286994,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012413549017490588,
      "cumulativeWealth": 2.360504398002554,
      "drawdown": -0.0124135490174907,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0037094358526845728,
      "cumulativeWealth": 2.3692605376469245,
      "drawdown": -0.00875016042859067,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0001533400420912212,
      "cumulativeWealth": 1.0001533400420912,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001028616462584342,
      "cumulativeWealth": 1.0011821142327673,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00032759879934163294,
      "cumulativeWealth": 1.0015101002913123,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011384128996234644,
      "cumulativeWealth": 1.002650232308587,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007217556195140418,
      "cumulativeWealth": 1.0033739007481628,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007003145400783506,
      "cumulativeWealth": 1.0040765780799918,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005465843183922736,
      "cumulativeWealth": 1.0046253905920353,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007444697058502925,
      "cumulativeWealth": 1.005373303761059,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013124488466489392,
      "cumulativeWealth": 1.0066928047940318,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0008311428777558749,
      "cumulativeWealth": 1.0075295103488244,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001301306389943413,
      "cumulativeWealth": 1.008840614938698,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010392135892396404,
      "cumulativeWealth": 1.009889015815119,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014983270223172251,
      "cumulativeWealth": 1.0114021598170562,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014867458892160457,
      "cumulativeWealth": 1.0129058578205083,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013887954885443143,
      "cumulativeWealth": 1.0143125769061696,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0015860579217428228,
      "cumulativeWealth": 1.015921335403895,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013990334251421377,
      "cumulativeWealth": 1.0173426433094401,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001706371616375435,
      "cumulativeWealth": 1.0190786079201117,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018595986537892628,
      "cumulativeWealth": 1.0209736851275053,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 7.60582266607912e-05,
      "cumulativeWealth": 1.0210513385754634,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017497389039029532,
      "cumulativeWealth": 1.0228379118254511,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001847988620954144,
      "cumulativeWealth": 1.0247281046475851,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017496976396107478,
      "cumulativeWealth": 1.0265210689935298,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019251535570732337,
      "cumulativeWealth": 1.0284972796809133,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0021219327986017333,
      "cumulativeWealth": 1.0306796817919408,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018153259129083388,
      "cumulativeWealth": 1.0325507013262059,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018045277573996987,
      "cumulativeWealth": 1.0344139677276716,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016946227253868962,
      "cumulativeWealth": 1.0361669091448404,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001618548544069176,
      "cumulativeWealth": 1.0378439955870495,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016075540909044062,
      "cumulativeWealth": 1.039512385947876,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001082077427397854,
      "cumulativeWealth": 1.0406372188362107,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011161460401487577,
      "cumulativeWealth": 1.0417987219472462,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0012029995943065863,
      "cumulativeWealth": 1.043052005387098,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011812637110955038,
      "cumulativeWealth": 1.0442841248698471,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00204480696685172,
      "cumulativeWealth": 1.0464194843237535,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00019674433679195413,
      "cumulativeWealth": 1.0462136072163042,
      "drawdown": -0.0001967443367918431,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00017435078617078492,
      "cumulativeWealth": 1.0460311990513835,
      "drawdown": -0.0003710608204328114,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0460311990513835,
      "drawdown": -0.0003710608204328114,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010907588486430697,
      "cumulativeWealth": 1.0461452958300157,
      "drawdown": -0.0002620254093558261,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0461452958300157,
      "drawdown": -0.0002620254093558261,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021842842898578407,
      "cumulativeWealth": 1.0459167879565567,
      "drawdown": -0.0004803966045430208,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010938833389451119,
      "cumulativeWealth": 1.0460311990513835,
      "drawdown": -0.0003710608204328114,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010937636939567508,
      "cumulativeWealth": 1.0459167879565567,
      "drawdown": -0.0004803966045430208,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 3.285656915452684e-05,
      "cumulativeWealth": 1.0459511531938301,
      "drawdown": -0.0004475558195727869,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0459511531938301,
      "drawdown": -0.0004475558195727869,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010898406318426979,
      "cumulativeWealth": 1.0458371611872628,
      "drawdown": -0.0005564911063052902,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010979738275496143,
      "cumulativeWealth": 1.0457223310041766,
      "drawdown": -0.0006662273877932057,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0457223310041766,
      "drawdown": -0.0006662273877932057,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010950886626082124,
      "cumulativeWealth": 1.0456078151372847,
      "drawdown": -0.0007756632962481191,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021854070919413715,
      "cumulativeWealth": 1.0453793072638258,
      "drawdown": -0.0009940344914353139,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010924412785318083,
      "cumulativeWealth": 1.045265105713128,
      "drawdown": -0.0011031700268574474,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010925606343648031,
      "cumulativeWealth": 1.0451509041624303,
      "drawdown": -0.0012123055622794698,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010926800162747163,
      "cumulativeWealth": 1.0452651057131273,
      "drawdown": -0.0011031700268581135,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010925606343648031,
      "cumulativeWealth": 1.0451509041624296,
      "drawdown": -0.001212305562280025,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002186362491285454,
      "cumulativeWealth": 1.0449223962889702,
      "drawdown": -0.0014306767574676638,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -7.771561172376096e-16,
      "cumulativeWealth": 1.0449223962889693,
      "drawdown": -0.001430676757468552,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0449223962889693,
      "drawdown": -0.001430676757468552,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021868406139069485,
      "cumulativeWealth": 1.0446938884155108,
      "drawdown": -0.0016490479526553026,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0004595275290788514,
      "cumulativeWealth": 1.0451739540166982,
      "drawdown": -0.0011902782065074113,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010946607919848361,
      "cumulativeWealth": 1.0450595429218716,
      "drawdown": -0.0012996139906175097,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00032823368072532055,
      "cumulativeWealth": 1.045402566662222,
      "drawdown": -0.0009718068869758456,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007763176026964747,
      "cumulativeWealth": 1.046214131076626,
      "drawdown": -0.00019624371507209748,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00036131954136897626,
      "cumulativeWealth": 1.0465921486866403,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019367861123216201,
      "cumulativeWealth": 1.0486191738254815,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002067926546194254,
      "cumulativeWealth": 1.0507876412518835,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0015852594699534706,
      "cumulativeWealth": 1.052453412311088,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003151862407134942,
      "cumulativeWealth": 1.0557706006566123,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036261392840393203,
      "cumulativeWealth": 1.059598971906587,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028423751403214847,
      "cumulativeWealth": 1.0626107496830446,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034575614819740697,
      "cumulativeWealth": 1.0662847916814804,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003991083586367239,
      "cumulativeWealth": 1.0705404234119533,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003630329961311185,
      "cumulativeWealth": 1.0744268383858604,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037514756363252744,
      "cumulativeWealth": 1.078457524493079,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004606363572509764,
      "cumulativeWealth": 1.0834252919484029,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0038603455985546375,
      "cumulativeWealth": 1.0876076880055388,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00496671564536566,
      "cumulativeWealth": 1.093009526125576,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003990985271553171,
      "cumulativeWealth": 1.0973717110460104,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004309284720794837,
      "cumulativeWealth": 1.1021005981934535,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004682275392096535,
      "cumulativeWealth": 1.1072609367039896,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0003391583762386574,
      "cumulativeWealth": 1.1068853998826247,
      "drawdown": -0.0003391583762385464,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004267315151083917,
      "cumulativeWealth": 1.1116088287200574,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004443295258846236,
      "cumulativeWealth": 1.116548034958401,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004101954434269306,
      "cumulativeWealth": 1.1211280641214731,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004321940623060794,
      "cumulativeWealth": 1.1259735130454533,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004572966425301139,
      "cumulativeWealth": 1.1311225521163886,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0039930425097489675,
      "cumulativeWealth": 1.135639172550725,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004507964011592147,
      "cumulativeWealth": 1.140758593070738,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004617370165147738,
      "cumulativeWealth": 1.1460258977640188,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00422176573586408,
      "cumulativeWealth": 1.1508641506316117,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0039484705204517745,
      "cumulativeWealth": 1.1554083038034255,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707013014396132,
      "cumulativeWealth": 1.159691417422566,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0040312775409632184,
      "cumulativeWealth": 1.1643664553880695,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035000721475069163,
      "cumulativeWealth": 1.1684418219880646,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032375899970225053,
      "cumulativeWealth": 1.1722247575430358,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032702913893862817,
      "cumulativeWealth": 1.1760582740740542,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034023145883985695,
      "cumulativeWealth": 1.1800595942967431,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036319601891348086,
      "cumulativeWealth": 1.1843455237640355,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003346982854648628,
      "cumulativeWealth": 1.1883095079260535,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003565934864971032,
      "cumulativeWealth": 1.1925469422307435,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707704472944773,
      "cumulativeWealth": 1.196968553862649,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033024504595406956,
      "cumulativeWealth": 1.2009214832134085,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035104225411803913,
      "cumulativeWealth": 1.2051372250582686,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028757582604599374,
      "cumulativeWealth": 1.2086029083882177,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033516866986658123,
      "cumulativeWealth": 1.2126537666802313,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002954857368231867,
      "cumulativeWealth": 1.2162369855978206,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0026702985218995945,
      "cumulativeWealth": 1.2194847014227421,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002878184999691058,
      "cumulativeWealth": 1.2229946039977297,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00288911166467698,
      "cumulativeWealth": 1.2265279719739766,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031739693697667715,
      "cumulativeWealth": 1.2304209341881842,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002724445744853421,
      "cumulativeWealth": 1.2337731492667119,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033709663090177866,
      "cumulativeWealth": 1.2379321569858608,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002767898077324249,
      "cumulativeWealth": 1.24135862702304,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002845111428140701,
      "cumulativeWealth": 1.2448904306392041,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003534801551311917,
      "cumulativeWealth": 1.249290871264641,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016615186812571237,
      "cumulativeWealth": 1.0166151868125712,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.009826478132568317,
      "cumulativeWealth": 1.0266049337150218,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.010552095520918181,
      "cumulativeWealth": 1.0374377670378285,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.011417203278140553,
      "cumulativeWealth": 1.0492824049125196,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.039950572387782435,
      "cumulativeWealth": 1.0073629722398356,
      "drawdown": -0.039950572387782324,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.044222504180960964,
      "cumulativeWealth": 1.051911085491457,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.016192482567457422,
      "cumulativeWealth": 1.0348780335771215,
      "drawdown": -0.01619248256745731,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.026092661021627883,
      "cumulativeWealth": 1.0618807553059781,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.035269282125712786,
      "cumulativeWealth": 1.0244289833632265,
      "drawdown": -0.0352692821257129,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.003398241843070249,
      "cumulativeWealth": 1.0279102407997454,
      "drawdown": -0.031990893832937295,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.020738833486452668,
      "cumulativeWealth": 1.0492279001227107,
      "drawdown": -0.011915514166768726,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022489333047718274,
      "cumulativeWealth": 1.025631464433893,
      "drawdown": -0.03413687524795561,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.001260786179339557,
      "cumulativeWealth": 1.024338362458439,
      "drawdown": -0.03535462212677676,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.025658452829300904,
      "cumulativeWealth": 0.9980554249040559,
      "drawdown": -0.06010593005193998,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016153553483511107,
      "cumulativeWealth": 1.0141775665897519,
      "drawdown": -0.04492330092419905,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01838287674163952,
      "cumulativeWealth": 0.9955340653889966,
      "drawdown": -0.062480358162121497,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.031558475856797275,
      "cumulativeWealth": 0.9641165276217987,
      "drawdown": -0.09206704914433539,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.012670456292873222,
      "cumulativeWealth": 0.9763323239462673,
      "drawdown": -0.08056312437365931,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.020772815718894444,
      "cumulativeWealth": 0.9966134953920031,
      "drawdown": -0.061463831591117346,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.020632836327827198,
      "cumulativeWealth": 0.9760505322594761,
      "drawdown": -0.08082849474164377,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.044392189275872296,
      "cumulativeWealth": 1.0193795522303546,
      "drawdown": -0.04002445930322651,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03111876412885728,
      "cumulativeWealth": 0.9876577203867181,
      "drawdown": -0.06989771172364156,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025600984602276,
      "cumulativeWealth": 1.0129427304786573,
      "drawdown": -0.046086177362936964,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.00872742932923809,
      "cumulativeWealth": 1.0217831165734752,
      "drawdown": -0.03776096188968869,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.006973631556429494,
      "cumulativeWealth": 1.0289086555590388,
      "drawdown": -0.031050661368694388,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.022073739763960543,
      "cumulativeWealth": 1.0516205174627355,
      "drawdown": -0.00966232582328519,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02102719376059814,
      "cumulativeWealth": 1.073733145846045,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01707957147553696,
      "cumulativeWealth": 1.0553942438359143,
      "drawdown": -0.01707957147553707,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.023579752455250347,
      "cumulativeWealth": 1.0305083088235674,
      "drawdown": -0.0402565918633524,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.005612684820820446,
      "cumulativeWealth": 1.024724390480904,
      "drawdown": -0.045643329122083465,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.036203349403023166,
      "cumulativeWealth": 1.0618228456312842,
      "drawdown": -0.011092421111184247,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04452234982926617,
      "cumulativeWealth": 1.1090976938211872,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.011371597625679186,
      "cumulativeWealth": 1.096485481119484,
      "drawdown": -0.011371597625679075,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.023203127763824938,
      "cumulativeWealth": 1.1219273738290785,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.027217122230449586,
      "cumulativeWealth": 1.152463008296272,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0336614647327258,
      "cumulativeWealth": 1.113669415386736,
      "drawdown": -0.0336614647327258,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02188606008204408,
      "cumulativeWealth": 1.1380432511234249,
      "drawdown": -0.01251212149027181,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02537452654253025,
      "cumulativeWealth": 1.1669205598056036,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.008444404028436159,
      "cumulativeWealth": 1.176774508481691,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0165642098804073,
      "cumulativeWealth": 1.1962668484220949,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.026273959601714747,
      "cumulativeWealth": 1.2276975152704075,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.010298690608042005,
      "cumulativeWealth": 1.2150538384003757,
      "drawdown": -0.010298690608041894,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025891597721699577,
      "cumulativeWealth": 1.2465135235944451,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022147748115994625,
      "cumulativeWealth": 1.2189060560506944,
      "drawdown": -0.022147748115994736,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.018995371328935695,
      "cumulativeWealth": 1.2420596292004658,
      "drawdown": -0.003573081486622054,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.002941279089633375,
      "cumulativeWealth": 1.2384063851850207,
      "drawdown": -0.006503851146393291,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.017649297702123645,
      "cumulativeWealth": 1.2165493822166795,
      "drawdown": -0.02403836044342389,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.002832854803237028,
      "cumulativeWealth": 1.219995689977467,
      "drawdown": -0.02127360282503088,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016573648063796353,
      "cumulativeWealth": 1.240215469182502,
      "drawdown": -0.005052535967505656,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.03893795954036383,
      "cumulativeWealth": 1.2885069289428637,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0021595660039908093,
      "cumulativeWealth": 1.2912895447025152,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.023678023875491228,
      "cumulativeWealth": 1.3218647293721535,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06420612494045752,
      "cumulativeWealth": 1.406736541340606,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.043871991083790585,
      "cumulativeWealth": 1.4684528743395435,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0005256096719166159,
      "cumulativeWealth": 1.4676810413060368,
      "drawdown": -0.0005256096719166159,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.019311238943990228,
      "cumulativeWealth": 1.4960237805882621,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.07604029901459608,
      "cumulativeWealth": 1.60978187619714,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.057244780306957566,
      "cumulativeWealth": 1.7019334860421673,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.07289479687702294,
      "cumulativeWealth": 1.5778713902789199,
      "drawdown": -0.07289479687702305,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.08482851420591597,
      "cumulativeWealth": 1.7117198759243035,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06520330188141243,
      "cumulativeWealth": 1.8233296637306098,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.02181116208209133,
      "cumulativeWealth": 1.7835607249058965,
      "drawdown": -0.02181116208209133,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.046123606250874305,
      "cumulativeWealth": 1.701296472305813,
      "drawdown": -0.06692875888121719,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04959273465865088,
      "cumulativeWealth": 1.785668416832574,
      "drawdown": -0.020655204402795335,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.004965611800678116,
      "cumulativeWealth": 1.776801480669852,
      "drawdown": -0.025518250476745497,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022859378232973793,
      "cumulativeWealth": 1.736184903578312,
      "drawdown": -0.04779429737022767,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016615186812571237,
      "cumulativeWealth": 1.0166151868125712,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.009826478132567651,
      "cumulativeWealth": 1.0266049337150212,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.010552095520917737,
      "cumulativeWealth": 1.0374377670378274,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.011417203278140997,
      "cumulativeWealth": 1.049282404912519,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.039950572387782324,
      "cumulativeWealth": 1.007362972239835,
      "drawdown": -0.039950572387782324,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04422250418096052,
      "cumulativeWealth": 1.051911085491456,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.016192482567457422,
      "cumulativeWealth": 1.0348780335771204,
      "drawdown": -0.016192482567457422,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.026092661021627883,
      "cumulativeWealth": 1.061880755305977,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03526928212571323,
      "cumulativeWealth": 1.024428983363225,
      "drawdown": -0.03526928212571334,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.003398241843070693,
      "cumulativeWealth": 1.0279102407997442,
      "drawdown": -0.031990893832937295,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.020738833486452668,
      "cumulativeWealth": 1.0492279001227096,
      "drawdown": -0.011915514166768726,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.022489333047718496,
      "cumulativeWealth": 1.0256314644338917,
      "drawdown": -0.034136875247955834,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0012607861793391129,
      "cumulativeWealth": 1.0243383624584381,
      "drawdown": -0.035354622126776536,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.02565845282930146,
      "cumulativeWealth": 0.9980554249040544,
      "drawdown": -0.060105930051940315,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01615355348351155,
      "cumulativeWealth": 1.014177566589751,
      "drawdown": -0.04492330092419894,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01838287674163952,
      "cumulativeWealth": 0.9955340653889957,
      "drawdown": -0.062480358162121274,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.031558475856797386,
      "cumulativeWealth": 0.9641165276217977,
      "drawdown": -0.09206704914433539,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.012670456292873222,
      "cumulativeWealth": 0.9763323239462663,
      "drawdown": -0.08056312437365931,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.020772815718894888,
      "cumulativeWealth": 0.9966134953920025,
      "drawdown": -0.0614638315911169,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.02063283632782731,
      "cumulativeWealth": 0.9760505322594755,
      "drawdown": -0.08082849474164344,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.044392189275872296,
      "cumulativeWealth": 1.019379552230354,
      "drawdown": -0.04002445930322618,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0311187641288575,
      "cumulativeWealth": 0.9876577203867172,
      "drawdown": -0.06989771172364145,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.025600984602276444,
      "cumulativeWealth": 1.012942730478657,
      "drawdown": -0.04608617736293641,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.008727429329237868,
      "cumulativeWealth": 1.0217831165734745,
      "drawdown": -0.03776096188968836,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.006973631556429494,
      "cumulativeWealth": 1.028908655559038,
      "drawdown": -0.031050661368694055,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.022073739763960543,
      "cumulativeWealth": 1.0516205174627349,
      "drawdown": -0.009662325823284856,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02102719376059836,
      "cumulativeWealth": 1.0737331458460446,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.017079571475537292,
      "cumulativeWealth": 1.0553942438359136,
      "drawdown": -0.017079571475537292,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.023579752455250014,
      "cumulativeWealth": 1.030508308823567,
      "drawdown": -0.0402565918633524,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.005612684820820113,
      "cumulativeWealth": 1.0247243904809038,
      "drawdown": -0.04564332912208324,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.036203349403023166,
      "cumulativeWealth": 1.061822845631284,
      "drawdown": -0.011092421111184025,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04452234982926617,
      "cumulativeWealth": 1.109097693821187,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01137159762567963,
      "cumulativeWealth": 1.096485481119483,
      "drawdown": -0.011371597625679741,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.023203127763824938,
      "cumulativeWealth": 1.1219273738290776,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02721712223044981,
      "cumulativeWealth": 1.1524630082962712,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03366146473272569,
      "cumulativeWealth": 1.1136694153867353,
      "drawdown": -0.0336614647327258,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02188606008204408,
      "cumulativeWealth": 1.1380432511234242,
      "drawdown": -0.01251212149027181,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.025374526542530695,
      "cumulativeWealth": 1.1669205598056034,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.00844440402843638,
      "cumulativeWealth": 1.176774508481691,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016564209880407077,
      "cumulativeWealth": 1.1962668484220946,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.026273959601715635,
      "cumulativeWealth": 1.2276975152704084,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.007582272445641691,
      "cumulativeWealth": 1.2183887782287908,
      "drawdown": -0.007582272445641691,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.024862722627183587,
      "cumulativeWealth": 1.2486812404739662,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.02214774811599385,
      "cumulativeWealth": 1.221025762882782,
      "drawdown": -0.02214774811599385,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01899537132893614,
      "cumulativeWealth": 1.244219600650938,
      "drawdown": -0.0035730814866207217,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0029412790896341523,
      "cumulativeWealth": 1.2405600035566304,
      "drawdown": -0.006503851146392847,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.017649297702123312,
      "cumulativeWealth": 1.2186649907365124,
      "drawdown": -0.024038360443423112,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.002832854803237028,
      "cumulativeWealth": 1.222117291709057,
      "drawdown": -0.021273602825030213,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016573648063796798,
      "cumulativeWealth": 1.2423722335945235,
      "drawdown": -0.0050525359675043235,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.03893795954036405,
      "cumulativeWealth": 1.2907476733602987,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0021595660039912534,
      "cumulativeWealth": 1.2935351281554184,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.023678023875491228,
      "cumulativeWealth": 1.3241634838036689,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.06420612494045774,
      "cumulativeWealth": 1.409182889886359,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04387199108379081,
      "cumulativeWealth": 1.4710065490668838,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0005256096719166159,
      "cumulativeWealth": 1.4702333737972415,
      "drawdown": -0.0005256096719166159,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.019311238943990228,
      "cumulativeWealth": 1.498625401782069,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.07604029901459586,
      "cumulativeWealth": 1.6125813254444463,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.05724478030695779,
      "cumulativeWealth": 1.7048931891466164,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0728947968770225,
      "cumulativeWealth": 1.5806153464267547,
      "drawdown": -0.0728947968770225,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.08482851420591597,
      "cumulativeWealth": 1.7146965977952056,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.06520330188141221,
      "cumulativeWealth": 1.8265004776962768,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.006918878491212976,
      "cumulativeWealth": 1.8138631428269538,
      "drawdown": -0.006918878491212976,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.024452899824660035,
      "cumulativeWealth": 1.7695089290997632,
      "drawdown": -0.031202591673228364,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04505229998437166,
      "cumulativeWealth": 1.84922937619859,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.004965611800678338,
      "cumulativeWealth": 1.8400468209859773,
      "drawdown": -0.004965611800678338,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0150223975653202,
      "cumulativeWealth": 1.8124049061023224,
      "drawdown": -0.019913413971373695,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    }
  ],
  "corePerformanceSummary": [
    {
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.12328574762017497,
      "annVol": 0.10945797045607261,
      "sharpeRf0": 1.1187174026850546,
      "maxDrawdown": -0.13555293636582466,
      "calmar": 0.9095025967379746,
      "cumulativeReturn": 2.0167297467054666,
      "terminalWealth": 3.0167297467054666,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.1178600545073254,
      "annVol": 0.10480115783194752,
      "sharpeRf0": 1.1173744176409506,
      "maxDrawdown": -0.1304137926468979,
      "calmar": 0.9037391836800391,
      "cumulativeReturn": 1.8811424904914307,
      "terminalWealth": 2.8811424904914307,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "seriesId": "F2R",
      "displayName": "F2R",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.16850202570500983,
      "annVol": 0.17695047392251617,
      "sharpeRf0": 0.9700386617235397,
      "maxDrawdown": -0.2197163487735896,
      "calmar": 0.7669070901894769,
      "cumulativeReturn": 3.388518635555947,
      "terminalWealth": 4.388518635555947,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.09507250494563779,
      "annVol": 0.1141976933888145,
      "sharpeRf0": 0.853777346657368,
      "maxDrawdown": -0.21630722806389036,
      "calmar": 0.4395253260679591,
      "cumulativeReturn": 1.3692605376469213,
      "terminalWealth": 2.3692605376469213,
      "seriesRole": "REFERENCE"
    },
    {
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.023711728076287297,
      "annVol": 0.002958546233237751,
      "sharpeRf0": 7.9342157506987645,
      "maxDrawdown": -0.004474473916887045,
      "calmar": 5.299333176755645,
      "cumulativeReturn": 0.2492908712646349,
      "terminalWealth": 1.249290871264635,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "months": 66,
      "startHoldingMonth": "2021-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2021-05-03",
      "endDate": "2026-10-30",
      "days": 1382,
      "cagr": 0.1056695237561005,
      "annVol": 0.11449756451341729,
      "sharpeRf0": 0.9360898110101249,
      "maxDrawdown": -0.11135947916489053,
      "calmar": 0.9489046154718012,
      "cumulativeReturn": 0.7361849035783101,
      "terminalWealth": 1.7361849035783101,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "months": 66,
      "startHoldingMonth": "2021-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2021-05-03",
      "endDate": "2026-10-30",
      "days": 1382,
      "cagr": 0.11435301603876957,
      "annVol": 0.10724478890762833,
      "sharpeRf0": 1.0649238450457543,
      "maxDrawdown": -0.11135947916489042,
      "calmar": 1.0268817427697072,
      "cumulativeReturn": 0.8124049061023211,
      "terminalWealth": 1.812404906102321,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    }
  ],
  "coreCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.1033551149440981,
      "monthsObserved": 8,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2018",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.0025926451798516936,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2019",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.14337018777378363,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2020",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.2825171836729905,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.1374342362475658,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": -0.08082849474164366,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.1363117555540061,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.09900693405211514,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.22734953457811224,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.16053295816969837,
      "monthsObserved": 10,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2017",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.0985475429754421,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.013958296890661526,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1291200925862146,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.2653219767385877,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1295969384038156,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.0743282083087825,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12076859700220033,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09004534208680126,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.22007808214476365,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.16159817578632785,
      "monthsObserved": 10,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.1472748680261038,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": -0.09892181487128471,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.27670948397440975,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.43827590947406203,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.20922779177780781,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": -0.1438532190727837,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.2754727150166456,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.18028852024646547,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.29364444325708217,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.14662938963337813,
      "monthsObserved": 10,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.08858906716558135,
      "monthsObserved": 8,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2018",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.023312825671218285,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2019",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.21931480854135632,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2020",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14655360933555817,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2021",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.15767570871687653,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2022",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.1591136224417613,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2023",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.17524108538116678,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2024",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14851557071410304,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2025",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.13559276201915904,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2026",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.06824888294205644,
      "monthsObserved": 10,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2017",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.005373303761059045,
      "monthsObserved": 8,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2018",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.015594242214064913,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2019",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.02031962800296494,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2020",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.003985828700981964,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": -0.0009835611364065189,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2022",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.014045613023264902,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2023",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04462672126885203,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2024",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.05193044872715813,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2025",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04147088836913371,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2026",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.030212337264829525,
      "monthsObserved": 10,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.06188075530597725,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": -0.08082849474164333,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.13631175555400654,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.09900693405211469,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.22734953457811247,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.16053295816969748,
      "monthsObserved": 10,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.0618807553059757,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": -0.08082849474164377,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.1363117555540072,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.10091813343869394,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.2273495345781127,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.2093782101565389,
      "monthsObserved": 10,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    }
  ],
  "fxPerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.029668886406853057,
      "cumulativeWealth": 1.029668886406853,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004776272594373632,
      "cumulativeWealth": 1.0247509071234289,
      "drawdown": -0.004776272594373521,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02066710767470714,
      "cumulativeWealth": 1.0459295444607026,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010099003519420613,
      "cumulativeWealth": 1.0564923906112773,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00233685710352205,
      "cumulativeWealth": 1.0589612623590943,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01989723586889025,
      "cumulativeWealth": 1.080031664372271,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00899571125339449,
      "cumulativeWealth": 1.089747317369487,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012487112707429082,
      "cumulativeWealth": 1.103355114944098,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05378716277075357,
      "cumulativeWealth": 1.1627014561055398,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.038212366650977936,
      "cumulativeWealth": 1.118271881759209,
      "drawdown": -0.038212366650977936,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.006032187150653456,
      "cumulativeWealth": 1.111526256483124,
      "drawdown": -0.04401404965452327,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006471063362878615,
      "cumulativeWealth": 1.1187190133183296,
      "drawdown": -0.03782780399581598,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009901871503134707,
      "cumulativeWealth": 1.1297964252363213,
      "drawdown": -0.0283004985470936,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.002696160261229763,
      "cumulativeWealth": 1.1267503130113197,
      "drawdown": -0.030920356128767756,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008622483700776895,
      "cumulativeWealth": 1.136465699220105,
      "drawdown": -0.022564482694733434,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.024559084532145725,
      "cumulativeWealth": 1.1643762563951356,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0031834882589054647,
      "cumulativeWealth": 1.1606694782539535,
      "drawdown": -0.0031834882589053537,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03632626496130209,
      "cumulativeWealth": 1.1185066912544042,
      "drawdown": -0.039394108982213294,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.003674778412383839,
      "cumulativeWealth": 1.1226169554975327,
      "drawdown": -0.03586409519109235,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.014609820520429584,
      "cumulativeWealth": 1.1062157232645227,
      "drawdown": -0.04994994771765249,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019987451669076117,
      "cumulativeWealth": 1.1283261565688445,
      "drawdown": -0.03096086821445576,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0026674085711855255,
      "cumulativeWealth": 1.131335863429969,
      "drawdown": -0.028376044928516864,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.017334368981152704,
      "cumulativeWealth": 1.150946856728275,
      "drawdown": -0.011533556780380927,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01707949193573377,
      "cumulativeWealth": 1.1706044442862238,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03647278894850303,
      "cumulativeWealth": 1.1279092354475926,
      "drawdown": -0.03647278894850314,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03418060977698656,
      "cumulativeWealth": 1.166461860888286,
      "drawdown": -0.003538841338043719,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005419945719926433,
      "cumulativeWealth": 1.1727840208586648,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.030780903353694322,
      "cumulativeWealth": 1.2088833724594725,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.006705928364099667,
      "cumulativeWealth": 1.2007766871632082,
      "drawdown": -0.006705928364099556,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01618893922859299,
      "cumulativeWealth": 1.2202159879788046,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009057258304629334,
      "cumulativeWealth": 1.231267799369367,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.027245315661697633,
      "cumulativeWealth": 1.2648140792272693,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002139065943580931,
      "cumulativeWealth": 1.267519599949106,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010709658751650197,
      "cumulativeWealth": 1.2539448975726228,
      "drawdown": -0.010709658751650308,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022270800932907675,
      "cumulativeWealth": 1.2260185403779476,
      "drawdown": -0.03274194700644062,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06062886824269742,
      "cumulativeWealth": 1.3003506569256262,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021642866398515315,
      "cumulativeWealth": 1.3284939724646891,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0252650782676771,
      "cumulativeWealth": 1.3620584766571469,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05876536183720815,
      "cumulativeWealth": 1.4421003358813407,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04375046001620375,
      "cumulativeWealth": 1.5051928889656714,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0311363821134647,
      "cumulativeWealth": 1.4583266280203664,
      "drawdown": -0.0311363821134647,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017226221509256567,
      "cumulativeWealth": 1.4332051704932403,
      "drawdown": -0.047826241407437964,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07480594728082268,
      "cumulativeWealth": 1.54041744091976,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.053055975393232035,
      "cumulativeWealth": 1.6221457907605041,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005008258511363106,
      "cumulativeWealth": 1.6302699162237522,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.013774248914838916,
      "cumulativeWealth": 1.6527256598481916,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01210727728375205,
      "cumulativeWealth": 1.6727356676859457,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03875496500248321,
      "cumulativeWealth": 1.73756247994552,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016615186812571237,
      "cumulativeWealth": 1.7664324051483293,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009826478132568317,
      "cumulativeWealth": 1.7837902145501794,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010552095520918181,
      "cumulativeWealth": 1.802612939283392,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.011417203278140553,
      "cumulativeWealth": 1.823193737642997,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.039950572387782435,
      "cumulativeWealth": 1.7503561042503388,
      "drawdown": -0.039950572387782435,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.044222504180960964,
      "cumulativeWealth": 1.82776123438872,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.016192482567457422,
      "cumulativeWealth": 1.7981652424634063,
      "drawdown": -0.01619248256745731,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026092661021627883,
      "cumulativeWealth": 1.8450841585958773,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.035269282125712786,
      "cumulativeWealth": 1.7800093648606758,
      "drawdown": -0.035269282125712786,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.003398241843070249,
      "cumulativeWealth": 1.7860582671654024,
      "drawdown": -0.031990893832937184,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020738833486452668,
      "cumulativeWealth": 1.8230990321652478,
      "drawdown": -0.011915514166768615,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022489333047718274,
      "cumulativeWealth": 1.7820987508519106,
      "drawdown": -0.03413687524795561,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.001260786179339557,
      "cumulativeWealth": 1.7798519053766182,
      "drawdown": -0.03535462212677676,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.025658452829300904,
      "cumulativeWealth": 1.734183659219371,
      "drawdown": -0.06010593005193998,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016153553483511107,
      "cumulativeWealth": 1.762196887708802,
      "drawdown": -0.04492330092419916,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01838287674163952,
      "cumulativeWealth": 1.7298026395275503,
      "drawdown": -0.062480358162121497,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031558475856797275,
      "cumulativeWealth": 1.675212704690996,
      "drawdown": -0.09206704914433539,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012670456292873222,
      "cumulativeWealth": 1.6964384140470492,
      "drawdown": -0.0805631243736592,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020772815718894444,
      "cumulativeWealth": 1.731678216600502,
      "drawdown": -0.061463831591117235,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.020632836327827198,
      "cumulativeWealth": 1.6959487833849203,
      "drawdown": -0.08082849474164366,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.044392189275872296,
      "cumulativeWealth": 1.771235662779129,
      "drawdown": -0.04002445930322629,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03111876412885728,
      "cumulativeWealth": 1.716116997972485,
      "drawdown": -0.06989771172364145,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025600984602276,
      "cumulativeWealth": 1.7600512828132828,
      "drawdown": -0.04608617736293674,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00872742932923809,
      "cumulativeWealth": 1.7754120059998706,
      "drawdown": -0.03776096188968836,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006973631556429494,
      "cumulativeWealth": 1.787793075190575,
      "drawdown": -0.031050661368693944,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.022073739763960543,
      "cumulativeWealth": 1.8272563542841425,
      "drawdown": -0.009662325823284856,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02102719376059814,
      "cumulativeWealth": 1.8656784276959593,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01707957147553696,
      "cumulativeWealth": 1.8338134396397587,
      "drawdown": -0.01707957147553696,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.023579752455250347,
      "cumulativeWealth": 1.790572572683942,
      "drawdown": -0.0402565918633524,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.005612684820820446,
      "cumulativeWealth": 1.7805226531846616,
      "drawdown": -0.045643329122083354,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.036203349403023166,
      "cumulativeWealth": 1.8449835369179037,
      "drawdown": -0.011092421111184136,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04452234982926617,
      "cumulativeWealth": 1.9271265393777994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.011371597625679186,
      "cumulativeWealth": 1.9052120317982275,
      "drawdown": -0.011371597625679186,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.023203127763824938,
      "cumulativeWealth": 1.9494189099892183,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.027217122230449586,
      "cumulativeWealth": 2.002476482740745,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0336614647327258,
      "cumulativeWealth": 1.9350701912388544,
      "drawdown": -0.0336614647327258,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02188606008204408,
      "cumulativeWealth": 1.9774212537072804,
      "drawdown": -0.01251212149027181,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02537452654253025,
      "cumulativeWealth": 2.027597381795239,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008444404028436159,
      "cumulativeWealth": 2.0447192332941175,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0165642098804073,
      "cumulativeWealth": 2.0785883918209067,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026273959601714747,
      "cumulativeWealth": 2.1332011392562023,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010298690608042005,
      "cumulativeWealth": 2.1112319607182797,
      "drawdown": -0.010298690608042116,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025891597721699577,
      "cumulativeWealth": 2.1658951293423923,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022147748115994625,
      "cumulativeWealth": 2.1179254295720575,
      "drawdown": -0.022147748115994514,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.018995371328935695,
      "cumulativeWealth": 2.1581562095537743,
      "drawdown": -0.003573081486621943,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.002941279089633375,
      "cumulativeWealth": 2.1518084698224516,
      "drawdown": -0.006503851146393069,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017649297702123645,
      "cumulativeWealth": 2.113830561540604,
      "drawdown": -0.02403836044342378,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002832854803237028,
      "cumulativeWealth": 2.1198187366000933,
      "drawdown": -0.02127360282503088,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016573648063796353,
      "cumulativeWealth": 2.1549518662995446,
      "drawdown": -0.005052535967505656,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03893795954036383,
      "cumulativeWealth": 2.2388612948809476,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0021595660039908093,
      "cumulativeWealth": 2.2436962636210236,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.023678023875491228,
      "cumulativeWealth": 2.2968225573203926,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06420612494045752,
      "cumulativeWealth": 2.444292633401767,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.043871991083790585,
      "cumulativeWealth": 2.5515286180205443,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0005256096719166159,
      "cumulativeWealth": 2.5501875099007405,
      "drawdown": -0.0005256096719167269,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019311238943990228,
      "cumulativeWealth": 2.599434790256413,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07604029901459608,
      "cumulativeWealth": 2.7970965889764545,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.057244780306957566,
      "cumulativeWealth": 2.957215768709752,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.07289479687702294,
      "cumulativeWealth": 2.741650125928125,
      "drawdown": -0.07289479687702305,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.08482851420591597,
      "cumulativeWealth": 2.9742202325830704,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06520330188141243,
      "cumulativeWealth": 3.1681492122699892,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02181116208209133,
      "cumulativeWealth": 3.0990481963009184,
      "drawdown": -0.02181116208209133,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.046123606250874305,
      "cumulativeWealth": 2.956108917542253,
      "drawdown": -0.06692875888121719,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04959273465865088,
      "cumulativeWealth": 3.1027104427119974,
      "drawdown": -0.020655204402795446,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004965611800678116,
      "cumulativeWealth": 3.0873035871235794,
      "drawdown": -0.025518250476745608,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022859378232973793,
      "cumulativeWealth": 3.0167297467055048,
      "drawdown": -0.04779429737022767,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014046157987544605,
      "cumulativeWealth": 1.0140461579875446,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019343459096449855,
      "cumulativeWealth": 1.033661318366489,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00374223145479613,
      "cumulativeWealth": 1.0297931184672917,
      "drawdown": -0.003742231454796241,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01444199555256609,
      "cumulativeWealth": 1.0446653861042594,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02232034405908645,
      "cumulativeWealth": 1.0679826769487248,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00011906520060900316,
      "cumulativeWealth": 1.067855517377047,
      "drawdown": -0.00011906520060900316,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.029434877207597188,
      "cumulativeWealth": 1.0364233213475984,
      "drawdown": -0.02955043773864663,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.002021725642766814,
      "cumulativeWealth": 1.0385186849531285,
      "drawdown": -0.027588454973610954,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.056792429140934075,
      "cumulativeWealth": 1.097498683779865,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03206973181465167,
      "cumulativeWealth": 1.0623021953241116,
      "drawdown": -0.03206973181465156,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.022045967703513636,
      "cumulativeWealth": 1.0388827154346247,
      "drawdown": -0.05340869124631897,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01353147793723175,
      "cumulativeWealth": 1.0529403339778998,
      "drawdown": -0.04059991183634326,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019817220640477418,
      "cumulativeWealth": 1.0738066848975978,
      "drawdown": -0.021587268606710563,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03478766059984206,
      "cumulativeWealth": 1.111161907401657,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011153890238577713,
      "cumulativeWealth": 1.1124012851969016,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.027552985962568943,
      "cumulativeWealth": 1.1430512621926756,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0059894382378227196,
      "cumulativeWealth": 1.1362050272551072,
      "drawdown": -0.005989438237822831,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0143291856182175,
      "cumulativeWealth": 1.1199241345192168,
      "drawdown": -0.02023280008378181,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014568982418943666,
      "cumulativeWealth": 1.1036079794928557,
      "drawdown": -0.03450701119401878,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.015244949746381131,
      "cumulativeWealth": 1.0867835313057819,
      "drawdown": -0.04922590328884924,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013317239472032227,
      "cumulativeWealth": 1.1012564878464417,
      "drawdown": -0.036564216959141804,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008182509304370589,
      "cumulativeWealth": 1.1102675293047437,
      "drawdown": -0.028680894700246484,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.034869242261749145,
      "cumulativeWealth": 1.1489817167594245,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04302838329890024,
      "cumulativeWealth": 1.1984205424715775,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01566591977591736,
      "cumulativeWealth": 1.1796461823954063,
      "drawdown": -0.01566591977591747,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.005575692617501016,
      "cumulativeWealth": 1.1862235269058516,
      "drawdown": -0.010177575511657322,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.032219353045900734,
      "cumulativeWealth": 1.2244428815105848,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.048897378480655895,
      "cumulativeWealth": 1.2843149285157527,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014243129223181161,
      "cumulativeWealth": 1.266022265025642,
      "drawdown": -0.014243129223181161,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012905660299066146,
      "cumulativeWealth": 1.249683411742167,
      "drawdown": -0.02696497253489727,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02059855915193798,
      "cumulativeWealth": 1.2754250894201336,
      "drawdown": -0.006921852964749786,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009214098291920436,
      "cumulativeWealth": 1.287176981558032,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028805593623911108,
      "cumulativeWealth": 1.3242548786108452,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009449209981062134,
      "cumulativeWealth": 1.336768041027285,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.017952478545044226,
      "cumulativeWealth": 1.312769741451042,
      "drawdown": -0.017952478545044226,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.057403312717710486,
      "cumulativeWealth": 1.3881270734459041,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04271654178306572,
      "cumulativeWealth": 1.447423061578961,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.007522373909058189,
      "cumulativeWealth": 1.4365350041051703,
      "drawdown": -0.007522373909058189,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05096418567337557,
      "cumulativeWealth": 1.5097468407806895,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04153933034184254,
      "cumulativeWealth": 1.5724607135324318,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.05012123222129505,
      "cumulativeWealth": 1.4936470449506094,
      "drawdown": -0.05012123222129505,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0461576676596438,
      "cumulativeWealth": 1.4247037810489702,
      "drawdown": -0.09396542070137648,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05083609321110516,
      "cumulativeWealth": 1.4971301552605896,
      "drawdown": -0.04790616237566725,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03597761954302081,
      "cumulativeWealth": 1.5509933343929387,
      "drawdown": -0.013652092516364345,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02893966412682536,
      "cumulativeWealth": 1.5958785605532153,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020008397355053553,
      "cumulativeWealth": 1.627809532923175,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01940549226397814,
      "cumulativeWealth": 1.6593979782215456,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019799025716475294,
      "cumulativeWealth": 1.692252441466221,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026417314597736885,
      "cumulativeWealth": 1.7369572065912224,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02094326966244009,
      "cumulativeWealth": 1.7733347697609811,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.021752637524032004,
      "cumulativeWealth": 1.8119094782163545,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.025843030529501432,
      "cumulativeWealth": 1.8587347101785927,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01897458862100876,
      "cumulativeWealth": 1.823465983697364,
      "drawdown": -0.01897458862100876,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02979931890725429,
      "cumulativeWealth": 1.8778040280620918,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.003502710023426836,
      "cumulativeWealth": 1.884381431053216,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.025360214208776766,
      "cumulativeWealth": 1.932169747795767,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.020821350498179347,
      "cumulativeWealth": 1.8919393642549325,
      "drawdown": -0.020821350498179347,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005009725000364229,
      "cumulativeWealth": 1.8824612683226514,
      "drawdown": -0.025726766258411415,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03515172024688118,
      "cumulativeWealth": 1.9486330202023183,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.024023947830983827,
      "cumulativeWealth": 1.9954468782213912,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.025242371204765246,
      "cumulativeWealth": 1.9450770674019369,
      "drawdown": -0.025242371204765246,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.010412264656261438,
      "cumulativeWealth": 1.9653297246045507,
      "drawdown": -0.015092936798039469,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022024632506884023,
      "cumulativeWealth": 2.0086153895438215,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.017322614842984363,
      "cumulativeWealth": 2.04340986030458,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03186867452319975,
      "cumulativeWealth": 2.1085306240601236,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.006637626768257077,
      "cumulativeWealth": 2.122526263372075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.048358148242063415,
      "cumulativeWealth": 2.0198848236802553,
      "drawdown": -0.048358148242063304,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.06874512339892946,
      "cumulativeWealth": 1.8810275922247313,
      "drawdown": -0.11377888477274845,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02055843328110951,
      "cumulativeWealth": 1.9196985724794096,
      "drawdown": -0.09555956710303848,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.037210356196829775,
      "cumulativeWealth": 1.9911312401519141,
      "drawdown": -0.06190501643612767,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008602951538623449,
      "cumulativeWealth": 2.00826084571798,
      "drawdown": -0.053834630753901935,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.042097528997740774,
      "cumulativeWealth": 2.0928036649056203,
      "drawdown": -0.014003406685406117,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.006295923231128375,
      "cumulativeWealth": 2.0796275336935506,
      "drawdown": -0.0202111655430689,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.023102166813585567,
      "cumulativeWealth": 2.1276714358870645,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.013807742952281377,
      "cumulativeWealth": 2.0982930956134247,
      "drawdown": -0.013807742952281266,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.018847414268108098,
      "cumulativeWealth": 2.137840494842362,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00647119801518814,
      "cumulativeWealth": 2.1240061056753494,
      "drawdown": -0.006471198015188029,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005450399640083647,
      "cumulativeWealth": 2.112429423561441,
      "drawdown": -0.011886327039938749,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.009693127769010657,
      "cumulativeWealth": 2.0919533752558426,
      "drawdown": -0.021464239122247042,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03599337062627339,
      "cumulativeWealth": 2.1672498284243096,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026368122309115893,
      "cumulativeWealth": 2.224396136974612,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028417027118089466,
      "cumulativeWealth": 2.287606862320393,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03986689215847572,
      "cumulativeWealth": 2.3788066384015094,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.008132092982106376,
      "cumulativeWealth": 2.3594619616315766,
      "drawdown": -0.008132092982106265,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01462830873089449,
      "cumulativeWealth": 2.3939768996451254,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03381977186214069,
      "cumulativeWealth": 2.474940652234358,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005392146768223971,
      "cumulativeWealth": 2.4615954089948664,
      "drawdown": -0.005392146768224082,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.009475652450298244,
      "cumulativeWealth": 2.4382701864259815,
      "drawdown": -0.0148167051097855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.012760996667274593,
      "cumulativeWealth": 2.4693849441488784,
      "drawdown": -0.0022447843670369005,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03728534019182228,
      "cumulativeWealth": 2.5614568018560333,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03685331095872413,
      "cumulativeWealth": 2.6558549658821726,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.029850412639360835,
      "cumulativeWealth": 2.735133332524051,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011277759791590292,
      "cumulativeWealth": 2.738217950196269,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.002729844915412505,
      "cumulativeWealth": 2.7456928605449034,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0026754886743846074,
      "cumulativeWealth": 2.7383467903931766,
      "drawdown": -0.0026754886743847184,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.030012150522935932,
      "cumulativeWealth": 2.656163114335898,
      "drawdown": -0.032607342028502684,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.021511692509724845,
      "cumulativeWealth": 2.5990245501646307,
      "drawdown": -0.05341759542295099,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022327481189822418,
      "cumulativeWealth": 2.657054221920318,
      "drawdown": -0.03228279459014005,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03412314977895625,
      "cumulativeWealth": 2.7477212811057132,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01845485700902172,
      "cumulativeWealth": 2.798430084449165,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.07861169258036482,
      "cumulativeWealth": 3.0184194099555275,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.059398202093184915,
      "cumulativeWealth": 3.1977080960700577,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.025710227660626916,
      "cumulativeWealth": 3.2799218992122485,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.002927216329663196,
      "cumulativeWealth": 3.2895229401556425,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06919300344500656,
      "cumulativeWealth": 3.51713491228626,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05987903958206653,
      "cumulativeWealth": 3.727737572914517,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0269317774426463,
      "cumulativeWealth": 3.6273429742361927,
      "drawdown": -0.0269317774426463,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06367074132893347,
      "cumulativeWealth": 3.8582985904601093,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.08058145896378743,
      "cumulativeWealth": 4.169205919997309,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01306968038713463,
      "cumulativeWealth": 4.223696108839824,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.12497220443507062,
      "cumulativeWealth": 3.695851495254281,
      "drawdown": -0.12497220443507062,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009710293231994349,
      "cumulativeWealth": 3.7317392970151047,
      "drawdown": -0.11647542795398957,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012086439465106902,
      "cumulativeWealth": 3.686635855902171,
      "drawdown": -0.12715409420995827,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03644156793638409,
      "cumulativeWealth": 3.5522890649026024,
      "drawdown": -0.15896196758380077,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.021602057816649145,
      "cumulativeWealth": 1.0216020578166491,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007014776955795998,
      "cumulativeWealth": 1.0287683683898152,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008247594828987292,
      "cumulativeWealth": 1.0372532330651727,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012006303484347836,
      "cumulativeWealth": 1.0497068101714742,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012075518431158727,
      "cumulativeWealth": 1.0623825641050126,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009607400441558056,
      "cumulativeWealth": 1.0725892988204988,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010488601820210941,
      "cumulativeWealth": 1.0613393367485513,
      "drawdown": -0.010488601820210941,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.006976246978476208,
      "cumulativeWealth": 1.0687435020896814,
      "drawdown": -0.0035855259184913724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05505055844334983,
      "cumulativeWealth": 1.1275784287124198,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.035380040037780724,
      "cumulativeWealth": 1.0876846587588365,
      "drawdown": -0.035380040037780724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014242956803357187,
      "cumulativeWealth": 1.0721928131484602,
      "drawdown": -0.04911908045917868,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009796449850277611,
      "cumulativeWealth": 1.0826964962722971,
      "drawdown": -0.03980382321731113,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014609903678483471,
      "cumulativeWealth": 1.0985145877958669,
      "drawdown": -0.02577544956206801,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01579173873176387,
      "cumulativeWealth": 1.1158620431593704,
      "drawdown": -0.010390749995482174,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.004595254574771834,
      "cumulativeWealth": 1.1209897133180127,
      "drawdown": -0.005843243562162481,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025795793320837923,
      "cumulativeWealth": 1.1499065322775495,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004828510596403435,
      "cumulativeWealth": 1.1443541964015738,
      "drawdown": -0.004828510596403435,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.025570989899577956,
      "cumulativeWealth": 1.1150919268038495,
      "drawdown": -0.030276030700290724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00566446520011088,
      "cumulativeWealth": 1.1087755273895445,
      "drawdown": -0.035768998378102324,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015174239313278437,
      "cumulativeWealth": 1.091950702192229,
      "drawdown": -0.050400470349995175,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0163961556014518,
      "cumulativeWealth": 1.1098544958144874,
      "drawdown": -0.03483068870278827,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.005169269648494623,
      "cumulativeWealth": 1.1155916329739466,
      "drawdown": -0.029841468276241123,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025833257940481857,
      "cumulativeWealth": 1.144410999384806,
      "drawdown": -0.004779112683062081,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02980305833657182,
      "cumulativeWealth": 1.1785179471604859,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.026310921893906714,
      "cumulativeWealth": 1.147510053502179,
      "drawdown": -0.026310921893906825,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019537357095565255,
      "cumulativeWealth": 1.1699293671882023,
      "drawdown": -0.00728761067489625,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018525573037930343,
      "cumulativeWealth": 1.191602979129267,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03960185910599967,
      "cumulativeWealth": 1.2387926724190337,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010707851793517742,
      "cumulativeWealth": 1.2255278640798748,
      "drawdown": -0.010707851793517853,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0014079812378553491,
      "cumulativeWealth": 1.2272533843189681,
      "drawdown": -0.009314947010085506,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01453270571020493,
      "cumulativeWealth": 1.2450886965851287,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018002777758282296,
      "cumulativeWealth": 1.2675037516791001,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015244508863889061,
      "cumulativeWealth": 1.2868262238565848,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008562472341656635,
      "cumulativeWealth": 1.2857243824615558,
      "drawdown": -0.0008562472341656635,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.020356521924871585,
      "cumulativeWealth": 1.2595515058806352,
      "drawdown": -0.021195338943441833,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05887423448478102,
      "cumulativeWealth": 1.3337066365835109,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03192165916476819,
      "cumulativeWealth": 1.376280765262319,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008494010531724605,
      "cumulativeWealth": 1.387970908577067,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05459547384458352,
      "cumulativeWealth": 1.463747838013329,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.042381656639971066,
      "cumulativeWealth": 1.52578389629151,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.04087466482669133,
      "cumulativeWealth": 1.4634179909326315,
      "drawdown": -0.04087466482669122,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0319378911462288,
      "cumulativeWealth": 1.4166795064367923,
      "drawdown": -0.07150710537704652,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.06255474160803476,
      "cumulativeWealth": 1.505299526903344,
      "drawdown": -0.013425472269011474,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04424797383091894,
      "cumulativeWealth": 1.5719059809774578,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016737611030813282,
      "cumulativeWealth": 1.5982159318640674,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01666471752265508,
      "cumulativeWealth": 1.624849748908789,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015500637573503617,
      "cumulativeWealth": 1.6500359559780224,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029024107426318446,
      "cumulativeWealth": 1.6979267768216166,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02120906389622723,
      "cumulativeWealth": 1.7339382143223414,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015183498997993317,
      "cumulativeWealth": 1.760265463462087,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015905573479165325,
      "cumulativeWealth": 1.7882634951340202,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01837689580210422,
      "cumulativeWealth": 1.8211262270508048,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029694287674647546,
      "cumulativeWealth": 1.7670491809729127,
      "drawdown": -0.029694287674647546,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03675165881622178,
      "cumulativeWealth": 1.8319911695835134,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.006634549344860519,
      "cumulativeWealth": 1.819836733769563,
      "drawdown": -0.006634549344860519,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02545654357060756,
      "cumulativeWealth": 1.86616348687416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.028283685574617023,
      "cumulativeWealth": 1.8133815055805802,
      "drawdown": -0.028283685574617023,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0010678217374561205,
      "cumulativeWealth": 1.8114451373906204,
      "drawdown": -0.0293213053778012,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.027675765488215154,
      "cumulativeWealth": 1.8615782682078108,
      "drawdown": -0.0024570294610304355,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005171155647845094,
      "cumulativeWealth": 1.8625409193053657,
      "drawdown": -0.0019411844644233733,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013569746182787723,
      "cumulativeWealth": 1.8372667117753358,
      "drawdown": -0.015484589266734794,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.007925294245096803,
      "cumulativeWealth": 1.822705832477795,
      "drawdown": -0.023287163585628212,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018834320721949016,
      "cumulativeWealth": 1.8570352587084489,
      "drawdown": -0.004891440771355393,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008268799083307465,
      "cumulativeWealth": 1.855499713563961,
      "drawdown": -0.005714276045589495,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.000159413899111005,
      "cumulativeWealth": 1.8552039211198224,
      "drawdown": -0.005872779009675533,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00943632061330768,
      "cumulativeWealth": 1.8727102201225745,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014005725986971251,
      "cumulativeWealth": 1.8464815539265371,
      "drawdown": -0.014005725986971251,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0444531497940448,
      "cumulativeWealth": 1.7643996328179001,
      "drawdown": -0.05783627714574291,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03224825246801788,
      "cumulativeWealth": 1.8212984376314898,
      "drawdown": -0.027453143544931224,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0027820099436492995,
      "cumulativeWealth": 1.8263653079953335,
      "drawdown": -0.024747508519608385,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016902002854485065,
      "cumulativeWealth": 1.857234539644403,
      "drawdown": -0.008263788124763138,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02505873078589982,
      "cumulativeWealth": 1.9037744799796266,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00011379241250497607,
      "cumulativeWealth": 1.9039911150705688,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.022372934972593406,
      "cumulativeWealth": 1.9465889844764384,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0032631199767765295,
      "cumulativeWealth": 1.9529409378782565,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005274276717153192,
      "cumulativeWealth": 1.9539709729701191,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015271718866409989,
      "cumulativeWealth": 1.9241304775977939,
      "drawdown": -0.015271718866409989,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0057546161195266565,
      "cumulativeWealth": 1.913057845335337,
      "drawdown": -0.020938452106375127,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.013018399307585193,
      "cumulativeWealth": 1.937962796264421,
      "drawdown": -0.008192637929193447,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03994399228946399,
      "cumulativeWealth": 2.015372767255675,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0071237959468393175,
      "cumulativeWealth": 2.0297298716064214,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02558966118668704,
      "cumulativeWealth": 2.0816699713213276,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.033279649817661516,
      "cumulativeWealth": 2.150947219002843,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.021152919435016404,
      "cumulativeWealth": 2.105448405770303,
      "drawdown": -0.021152919435016404,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01796136882675503,
      "cumulativeWealth": 2.143265141132047,
      "drawdown": -0.0035714859959963263,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029349949712457413,
      "cumulativeWealth": 2.2061698652447355,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0012610839647018146,
      "cumulativeWealth": 2.208952030685204,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0032963654580675517,
      "cumulativeWealth": 2.2162335438576832,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019251361922863586,
      "cumulativeWealth": 2.258899057916078,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01313295392345859,
      "cumulativeWealth": 2.288565075161434,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.031088168291504292,
      "cumulativeWealth": 2.359712371364112,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.003562215075556985,
      "cumulativeWealth": 2.3681181743473636,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009881637174050883,
      "cumulativeWealth": 2.39151905893154,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00040026798941994457,
      "cumulativeWealth": 2.3905618104061617,
      "drawdown": -0.0004002679894200556,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010431922685437467,
      "cumulativeWealth": 2.3656236544252454,
      "drawdown": -0.010828015110138312,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013849671741330893,
      "cumulativeWealth": 2.332860543347928,
      "drawdown": -0.02452772239658363,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.002690347933029691,
      "cumulativeWealth": 2.3265843368070853,
      "drawdown": -0.027152082222361762,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.030347586789293945,
      "cumulativeWealth": 2.3971905568909504,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01782492191954388,
      "cumulativeWealth": 2.4399202913937996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.020811173832144814,
      "cumulativeWealth": 2.490697896714573,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07111903075667803,
      "cumulativeWealth": 2.66783391703661,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05137457550372915,
      "cumulativeWealth": 2.8048927520388167,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012334693858955914,
      "cumulativeWealth": 2.83949024544242,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.010897627332583149,
      "cumulativeWealth": 2.8704339519517563,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07233919299945213,
      "cumulativeWealth": 3.0780788275941746,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0583012473070601,
      "cumulativeWealth": 3.2575346625523682,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.050207563025996826,
      "cumulativeWealth": 3.093981785672901,
      "drawdown": -0.050207563025996826,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0740896129313331,
      "cumulativeWealth": 3.323213698590001,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0726241573274935,
      "cumulativeWealth": 3.5645592930692827,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004646291427456761,
      "cumulativeWealth": 3.5479973117832335,
      "drawdown": -0.004646291427456761,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.08572334763506428,
      "cumulativeWealth": 3.243851104816966,
      "drawdown": -0.08997134340727131,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029331290580401737,
      "cumulativeWealth": 3.3389974441719095,
      "drawdown": -0.06327902844425737,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.008810628834075573,
      "cumulativeWealth": 3.309578777013384,
      "drawdown": -0.0715321292457296,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029889700590709944,
      "cumulativeWealth": 3.210656458287086,
      "drawdown": -0.09928375591066885,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.021602057816649145,
      "cumulativeWealth": 1.0216020578166491,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007014776955795998,
      "cumulativeWealth": 1.0287683683898152,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.008247594828987292,
      "cumulativeWealth": 1.0372532330651727,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012006303484347836,
      "cumulativeWealth": 1.0497068101714742,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012075518431158727,
      "cumulativeWealth": 1.0623825641050126,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.009607400441558056,
      "cumulativeWealth": 1.0725892988204988,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010488601820210941,
      "cumulativeWealth": 1.0613393367485513,
      "drawdown": -0.010488601820210941,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005501015534363773,
      "cumulativeWealth": 1.0619231811664198,
      "drawdown": -0.009944270062929306,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05644798889397129,
      "cumulativeWealth": 1.1218666091031526,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.032731562510181056,
      "cumulativeWealth": 1.085146162059208,
      "drawdown": -0.032731562510180945,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020478283460792057,
      "cumulativeWealth": 1.0629242313561689,
      "drawdown": -0.052539559755774956,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012792113925191861,
      "cumulativeWealth": 1.076521279217524,
      "drawdown": -0.04041953786455832,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01877620353517062,
      "cumulativeWealth": 1.0967342618660545,
      "drawdown": -0.022402259799130242,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03098772654980886,
      "cumulativeWealth": 1.1307195632705662,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0037570897238798917,
      "cumulativeWealth": 1.13496777812232,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025795793320837923,
      "cumulativeWealth": 1.164245172352574,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004828510596403435,
      "cumulativeWealth": 1.158623602201058,
      "drawdown": -0.004828510596403324,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025570989899577956,
      "cumulativeWealth": 1.1289964497717622,
      "drawdown": -0.030276030700290724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00566446520011088,
      "cumulativeWealth": 1.1226012886709813,
      "drawdown": -0.035768998378102324,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015174239313278437,
      "cumulativeWealth": 1.105566668063293,
      "drawdown": -0.050400470349995286,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0163961556014518,
      "cumulativeWealth": 1.1236937111806373,
      "drawdown": -0.03483068870278827,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.005169269648494623,
      "cumulativeWealth": 1.1295023869760477,
      "drawdown": -0.029841468276241234,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025833257940481857,
      "cumulativeWealth": 1.1586811134831898,
      "drawdown": -0.004779112683062192,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02980305833657182,
      "cumulativeWealth": 1.1932133543018133,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.026310921893906714,
      "cumulativeWealth": 1.161818810934012,
      "drawdown": -0.026310921893906603,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019537357095565255,
      "cumulativeWealth": 1.1845176799235748,
      "drawdown": -0.007287610674896139,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018525573037930343,
      "cumulativeWealth": 1.2064615487177188,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03960185910599967,
      "cumulativeWealth": 1.254239668986844,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010707851793517742,
      "cumulativeWealth": 1.240809456497782,
      "drawdown": -0.010707851793517853,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0014079812378553491,
      "cumulativeWealth": 1.2425564929322845,
      "drawdown": -0.009314947010085395,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01453270571020493,
      "cumulativeWealth": 1.2606142007723737,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018002777758282296,
      "cumulativeWealth": 1.2833087580678135,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.015244508863889061,
      "cumulativeWealth": 1.3028721698052848,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0008562472341656635,
      "cumulativeWealth": 1.3017565891134175,
      "drawdown": -0.0008562472341656635,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020356521924871585,
      "cumulativeWealth": 1.2752573525662843,
      "drawdown": -0.021195338943441833,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05887423448478102,
      "cumulativeWealth": 1.3503371529697128,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03192165916476819,
      "cumulativeWealth": 1.3934421553243355,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016487245957668595,
      "cumulativeWealth": 1.4164161788669516,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05378977392220241,
      "cumulativeWealth": 1.4926048849079547,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.042381656639971066,
      "cumulativeWealth": 1.5558639526392672,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.04087466482669133,
      "cumulativeWealth": 1.492268535059206,
      "drawdown": -0.04087466482669133,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0319378911462288,
      "cumulativeWealth": 1.4446086250255428,
      "drawdown": -0.07150710537704674,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.06255474160803476,
      "cumulativeWealth": 1.534975744288754,
      "drawdown": -0.013425472269011585,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03604767221619132,
      "cumulativeWealth": 1.5903080467786792,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.026501691374554825,
      "cumulativeWealth": 1.6324538998248788,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01934385864680177,
      "cumulativeWealth": 1.6640318573105115,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018624086330335743,
      "cumulativeWealth": 1.6950229302774915,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02933763751039864,
      "cumulativeWealth": 1.7447508985777862,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020281352897689064,
      "cumulativeWealth": 1.7801368072704025,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01979951334595209,
      "cumulativeWealth": 1.8153826497435734,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016907074409136413,
      "cumulativeWealth": 1.8460754592838433,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01837689580210422,
      "cumulativeWealth": 1.8800005956419241,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029694287674647546,
      "cumulativeWealth": 1.8241753171264241,
      "drawdown": -0.029694287674647546,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03675165881622178,
      "cumulativeWealth": 1.8912167860024276,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.006634549344860519,
      "cumulativeWealth": 1.878669414913866,
      "drawdown": -0.006634549344860519,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02545654357060756,
      "cumulativeWealth": 1.9264938447293887,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.028283685574617023,
      "cumulativeWealth": 1.8720054985636276,
      "drawdown": -0.028283685574617023,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0010678217374561205,
      "cumulativeWealth": 1.870006530399624,
      "drawdown": -0.029321305377801088,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.027675765488215154,
      "cumulativeWealth": 1.9217603925963949,
      "drawdown": -0.0024570294610304355,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005171155647845094,
      "cumulativeWealth": 1.9227541648071929,
      "drawdown": -0.0019411844644232623,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005900773145294802,
      "cumulativeWealth": 1.9114084286664947,
      "drawdown": -0.00783050312056044,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.009573508586862789,
      "cumulativeWealth": 1.893109543661654,
      "drawdown": -0.017329046318559138,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016283128088224297,
      "cumulativeWealth": 1.9239352888461367,
      "drawdown": -0.0013280893111866643,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015272574971357478,
      "cumulativeWealth": 1.894551842907194,
      "drawdown": -0.016580380938970296,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02567787144862932,
      "cumulativeWealth": 1.8459037842322592,
      "drawdown": -0.041832503497279405,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.011624505122184159,
      "cumulativeWealth": 1.8673615022271262,
      "drawdown": -0.03069428052627321,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013415497837736767,
      "cumulativeWealth": 1.892413086422527,
      "drawdown": -0.017690561742567557,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025716569123784283,
      "cumulativeWealth": 1.843746714474788,
      "drawdown": -0.04295219031246056,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02905665457729678,
      "cumulativeWealth": 1.897319825885308,
      "drawdown": -0.015143582692411228,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0027820099436492995,
      "cumulativeWealth": 1.9025981885072039,
      "drawdown": -0.012403702346394652,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016902002854485065,
      "cumulativeWealth": 1.9347559085202908,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02505873078589982,
      "cumulativeWealth": 1.9832384359683297,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.00011379241250497607,
      "cumulativeWealth": 1.9834641134545312,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.022372934972593406,
      "cumulativeWealth": 2.0278400270853223,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0032631199767765295,
      "cumulativeWealth": 2.0344571123874116,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005274276717153192,
      "cumulativeWealth": 2.0355301413654026,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015271718866409989,
      "cumulativeWealth": 2.0044440973023665,
      "drawdown": -0.015271718866409878,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0057546161195266565,
      "cumulativeWealth": 1.9929092909893402,
      "drawdown": -0.020938452106375016,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013018399307585193,
      "cumulativeWealth": 2.018853779923236,
      "drawdown": -0.008192637929193447,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03994399228946399,
      "cumulativeWealth": 2.0994948597420446,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0071237959468393175,
      "cumulativeWealth": 2.114451232714285,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02558966118668704,
      "cumulativeWealth": 2.1685593233552165,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.033279649817661516,
      "cumulativeWealth": 2.240728218245303,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.021152919435016404,
      "cumulativeWealth": 2.1933302747689924,
      "drawdown": -0.021152919435016293,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01796136882675503,
      "cumulativeWealth": 2.2327254887930064,
      "drawdown": -0.0035714859959962153,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029349949712457413,
      "cumulativeWealth": 2.298255869610803,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0012610839647018146,
      "cumulativeWealth": 2.301154163234751,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0032963654580675517,
      "cumulativeWealth": 2.3087396083321265,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019251361922863586,
      "cumulativeWealth": 2.3531859901177787,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01313295392345859,
      "cumulativeWealth": 2.3840902732993237,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.031088168291504292,
      "cumulativeWealth": 2.4582072729377913,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003562215075556985,
      "cumulativeWealth": 2.4669639359442943,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01850743627244178,
      "cumulativeWealth": 2.5126211137751953,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004535460295019944,
      "cumulativeWealth": 2.501225220477239,
      "drawdown": -0.004535460295019944,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010431922685437467,
      "cumulativeWealth": 2.475132632358354,
      "drawdown": -0.014920069409317005,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0014484353077615086,
      "cumulativeWealth": 2.4715475628622534,
      "drawdown": -0.01634689396175182,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005817334660017215,
      "cumulativeWealth": 2.4571697435609337,
      "drawdown": -0.022069133268941776,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.030347586789293945,
      "cumulativeWealth": 2.5317389156096763,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01782492191954388,
      "cumulativeWealth": 2.5768669641010895,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020811173832144814,
      "cumulativeWealth": 2.6304945904333086,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07111903075667803,
      "cumulativeWealth": 2.8175728161156104,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05137457550372915,
      "cumulativeWealth": 2.9623244234943966,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012334693858955914,
      "cumulativeWealth": 2.9988637883691083,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.010897627332583149,
      "cumulativeWealth": 3.031544288355933,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07233919299945213,
      "cumulativeWealth": 3.2508437557176997,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0583012473070601,
      "cumulativeWealth": 3.440372001476409,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.050207563025996826,
      "cumulativeWealth": 3.2676393073794077,
      "drawdown": -0.050207563025996826,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0740896129313331,
      "cumulativeWealth": 3.5097374388623575,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0726241573274935,
      "cumulativeWealth": 3.7646291628004915,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004646291427456761,
      "cumulativeWealth": 3.747137598593818,
      "drawdown": -0.004646291427456761,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05362582557096773,
      "cumulativeWealth": 3.546194251341211,
      "drawdown": -0.05802295578478389,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.027129886098854028,
      "cumulativeWealth": 3.6424020974645086,
      "drawdown": -0.032467225867489846,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.008810628834075573,
      "cumulativeWealth": 3.6103102445192903,
      "drawdown": -0.04099179802517494,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029889700590709944,
      "cumulativeWealth": 3.502399152271036,
      "drawdown": -0.06965626604623754,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020281352897689064,
      "cumulativeWealth": 1.020281352897689,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01979951334595209,
      "cumulativeWealth": 1.040482427161013,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016907074409136413,
      "cumulativeWealth": 1.058073940978423,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01837689580210422,
      "cumulativeWealth": 1.0775180555427053,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029694287674647546,
      "cumulativeWealth": 1.0455219244267933,
      "drawdown": -0.029694287674647657,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03675165881622178,
      "cumulativeWealth": 1.0839465894782063,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.006634549344860519,
      "cumulativeWealth": 1.07675509234312,
      "drawdown": -0.006634549344860519,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02545654357060756,
      "cumulativeWealth": 1.1041655552662262,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.028283685574617023,
      "cumulativeWealth": 1.0729356838787538,
      "drawdown": -0.028283685574617023,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0010678217374561205,
      "cumulativeWealth": 1.0717899798326158,
      "drawdown": -0.029321305377801088,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.027675765488215154,
      "cumulativeWealth": 1.1014525879670822,
      "drawdown": -0.0024570294610302135,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005171155647845094,
      "cumulativeWealth": 1.1020221662441922,
      "drawdown": -0.0019411844644231513,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005900773145294802,
      "cumulativeWealth": 1.095519383440099,
      "drawdown": -0.007830503120560217,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.009573508586862789,
      "cumulativeWealth": 1.0850314192156605,
      "drawdown": -0.017329046318558805,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016283128088224297,
      "cumulativeWealth": 1.1026991247944968,
      "drawdown": -0.0013280893111864422,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015272574971357478,
      "cumulativeWealth": 1.0858580697402227,
      "drawdown": -0.016580380938970074,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.02567787144862932,
      "cumulativeWealth": 1.0579755458139766,
      "drawdown": -0.04183250349727918,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.011624505122184159,
      "cumulativeWealth": 1.0702739879654368,
      "drawdown": -0.030694280526272877,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013415497837736767,
      "cumulativeWealth": 1.084632246336773,
      "drawdown": -0.017690561742567223,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025716569123784283,
      "cumulativeWealth": 1.056739226199968,
      "drawdown": -0.042952190312460226,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02905665457729678,
      "cumulativeWealth": 1.0874445328739404,
      "drawdown": -0.015143582692410784,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0027820099436492995,
      "cumulativeWealth": 1.0904698143775629,
      "drawdown": -0.012403702346394208,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016902002854485065,
      "cumulativeWealth": 1.1089009382929023,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02505873078589982,
      "cumulativeWealth": 1.1366885883738158,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.00011379241250497607,
      "cumulativeWealth": 1.1368179349105538,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.022372934972593406,
      "cumulativeWealth": 1.1622518886439857,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0032631199767765295,
      "cumulativeWealth": 1.1660444559998662,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005274276717153192,
      "cumulativeWealth": 1.1666594601124107,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015271718866409989,
      "cumulativeWealth": 1.1488425648247362,
      "drawdown": -0.0152717188664101,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0057546161195266565,
      "cumulativeWealth": 1.1422314168823975,
      "drawdown": -0.020938452106375238,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013018399307585193,
      "cumulativeWealth": 1.1571014415690413,
      "drawdown": -0.008192637929193558,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03994399228946399,
      "cumulativeWealth": 1.2033206926292028,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0071237959468393175,
      "cumulativeWealth": 1.2118929037021027,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02558966118668704,
      "cumulativeWealth": 1.24290483250239,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.033279649817661516,
      "cumulativeWealth": 1.2842682700847488,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.021152919435016404,
      "cumulativeWealth": 1.2571022468346982,
      "drawdown": -0.021152919435016404,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01796136882675503,
      "cumulativeWealth": 1.2796815239430386,
      "drawdown": -0.0035714859959963263,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.029349949712457413,
      "cumulativeWealth": 1.3172401123187276,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0012610839647018146,
      "cumulativeWealth": 1.318901262702035,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0032963654580675517,
      "cumulativeWealth": 1.3232488432670075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.019251361922863586,
      "cumulativeWealth": 1.3487231856627513,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01313295392345859,
      "cumulativeWealth": 1.3664359051155606,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.031088168291504292,
      "cumulativeWealth": 1.408915894493347,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.003562215075556985,
      "cumulativeWealth": 1.4139347559329032,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01850743627244178,
      "cumulativeWealth": 1.440103063321722,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004535460295019944,
      "cumulativeWealth": 1.4335715330572898,
      "drawdown": -0.004535460295019944,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.010431922685437467,
      "cumulativeWealth": 1.418616625660392,
      "drawdown": -0.014920069409316894,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0014484353077615086,
      "cumulativeWealth": 1.416561851251608,
      "drawdown": -0.016346893961751707,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005817334660017215,
      "cumulativeWealth": 1.4083212368962639,
      "drawdown": -0.022069133268941554,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.030347586789293945,
      "cumulativeWealth": 1.451060387860179,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01782492191954388,
      "cumulativeWealth": 1.4769254259743299,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020811173832144814,
      "cumulativeWealth": 1.5076619777513962,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07111903075667803,
      "cumulativeWealth": 1.6148854363177718,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.05137457550372915,
      "cumulativeWealth": 1.6978494900957517,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.012334693858955914,
      "cumulativeWealth": 1.7187919437746673,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.010897627332583149,
      "cumulativeWealth": 1.7375226978401699,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07233919299945213,
      "cumulativeWealth": 1.8632136876201586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0583012473070601,
      "cumulativeWealth": 1.9718413696080008,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.050207563025996826,
      "cumulativeWealth": 1.8728400197661392,
      "drawdown": -0.050207563025996826,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0740896129313331,
      "cumulativeWealth": 2.011598011912923,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0726241573274935,
      "cumulativeWealth": 2.15768862240976,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004646291427456761,
      "cumulativeWealth": 2.1476633722603364,
      "drawdown": -0.004646291427456761,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.05362582557096773,
      "cumulativeWealth": 2.0324931508743473,
      "drawdown": -0.05802295578478389,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.027129886098854028,
      "cumulativeWealth": 2.087634458554269,
      "drawdown": -0.032467225867489846,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.008810628834075573,
      "cumulativeWealth": 2.0692410861987214,
      "drawdown": -0.04099179802517483,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029889700590709944,
      "cumulativeWealth": 2.0073920896822464,
      "drawdown": -0.06965626604623731,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02028135289768951,
      "cumulativeWealth": 1.0202813528976895,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01979951334595187,
      "cumulativeWealth": 1.0404824271610131,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016907074409136413,
      "cumulativeWealth": 1.0580739409784232,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.018376895802104443,
      "cumulativeWealth": 1.0775180555427057,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.029694287674647546,
      "cumulativeWealth": 1.0455219244267937,
      "drawdown": -0.029694287674647657,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03675165881622111,
      "cumulativeWealth": 1.083946589478206,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0066345493448600745,
      "cumulativeWealth": 1.0767550923431202,
      "drawdown": -0.0066345493448600745,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025456543570607337,
      "cumulativeWealth": 1.1041655552662262,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02828368557461769,
      "cumulativeWealth": 1.0729356838787532,
      "drawdown": -0.02828368557461758,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0010678217374557875,
      "cumulativeWealth": 1.0717899798326154,
      "drawdown": -0.029321305377801532,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.027675765488215376,
      "cumulativeWealth": 1.101452587967082,
      "drawdown": -0.0024570294610304355,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005171155647842873,
      "cumulativeWealth": 1.1020221662441918,
      "drawdown": -0.0019411844644234844,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005900773145294469,
      "cumulativeWealth": 1.095519383440099,
      "drawdown": -0.007830503120560217,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.009573508586863677,
      "cumulativeWealth": 1.0850314192156596,
      "drawdown": -0.017329046318559693,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01628312808822452,
      "cumulativeWealth": 1.1026991247944962,
      "drawdown": -0.0013280893111871084,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.01527257497135781,
      "cumulativeWealth": 1.0858580697402216,
      "drawdown": -0.016580380938971073,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02567787144862943,
      "cumulativeWealth": 1.0579755458139752,
      "drawdown": -0.041832503497280404,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.011624505122184381,
      "cumulativeWealth": 1.0702739879654357,
      "drawdown": -0.030694280526273876,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013415497837737211,
      "cumulativeWealth": 1.0846322463367724,
      "drawdown": -0.01769056174256778,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.025716569123784283,
      "cumulativeWealth": 1.0567392261999673,
      "drawdown": -0.04295219031246078,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02905665457729678,
      "cumulativeWealth": 1.0874445328739397,
      "drawdown": -0.01514358269241145,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0027820099436488555,
      "cumulativeWealth": 1.0904698143775615,
      "drawdown": -0.012403702346395429,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016902002854485287,
      "cumulativeWealth": 1.1089009382929012,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025058730785899375,
      "cumulativeWealth": 1.1366885883738143,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00011379241250475403,
      "cumulativeWealth": 1.1368179349105518,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.022372934972593628,
      "cumulativeWealth": 1.1622518886439839,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0032631199767767516,
      "cumulativeWealth": 1.1660444559998646,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005274276717150972,
      "cumulativeWealth": 1.166659460112409,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0152717188664101,
      "cumulativeWealth": 1.1488425648247345,
      "drawdown": -0.0152717188664101,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0057546161195267675,
      "cumulativeWealth": 1.1422314168823955,
      "drawdown": -0.02093845210637546,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013018399307584971,
      "cumulativeWealth": 1.157101441569039,
      "drawdown": -0.008192637929194002,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.039943992289464214,
      "cumulativeWealth": 1.2033206926292006,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.007123795946838873,
      "cumulativeWealth": 1.2118929037020998,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02558966118668704,
      "cumulativeWealth": 1.2429048325023868,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03327964981766263,
      "cumulativeWealth": 1.284268270084747,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.021152919435016626,
      "cumulativeWealth": 1.2571022468346962,
      "drawdown": -0.021152919435016626,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017961368826754587,
      "cumulativeWealth": 1.2796815239430361,
      "drawdown": -0.0035714859959968814,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02934994971245808,
      "cumulativeWealth": 1.317240112318726,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0012610839647024807,
      "cumulativeWealth": 1.318901262702034,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0032963654580679957,
      "cumulativeWealth": 1.3232488432670073,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.019251361922863808,
      "cumulativeWealth": 1.3487231856627513,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.015913684564963892,
      "cumulativeWealth": 1.3701863410048416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03005408151375799,
      "cumulativeWealth": 1.4113660329864388,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.003562215075557873,
      "cumulativeWealth": 1.4163936223462734,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.018507436272442224,
      "cumulativeWealth": 1.4426074370485407,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.004535460295021609,
      "cumulativeWealth": 1.4360645482965042,
      "drawdown": -0.004535460295021498,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.010431922685436912,
      "cumulativeWealth": 1.4210836339573782,
      "drawdown": -0.014920069409317893,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0014484353077618417,
      "cumulativeWealth": 1.419025286246672,
      "drawdown": -0.01634689396175304,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005817334660017326,
      "cumulativeWealth": 1.4107703412655481,
      "drawdown": -0.022069133268942998,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.030347586789293945,
      "cumulativeWealth": 1.4535838166368662,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017824921919544323,
      "cumulativeWealth": 1.4794938346719315,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02081117383214459,
      "cumulativeWealth": 1.5102838380488752,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07111903075667825,
      "cumulativeWealth": 1.6176937607783872,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05137457550372915,
      "cumulativeWealth": 1.700802091033408,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.012334693858956136,
      "cumulativeWealth": 1.7217809641409776,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.010897627332582926,
      "cumulativeWealth": 1.7405442914365212,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07233919299945213,
      "cumulativeWealth": 1.8664538608588424,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05830124730706032,
      "cumulativeWealth": 1.9752704489879913,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.05020756302599694,
      "cumulativeWealth": 1.8760969334270374,
      "drawdown": -0.05020756302599694,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0740896129313331,
      "cumulativeWealth": 2.0150962290463075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0726241573274935,
      "cumulativeWealth": 2.1614408946146053,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.010507316062938532,
      "cumulativeWealth": 2.1841518372456816,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.03212555883012147,
      "cumulativeWealth": 2.113984738904328,
      "drawdown": -0.03212555883012136,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.022686623492479185,
      "cumulativeWealth": 2.1619439147446973,
      "drawdown": -0.010167755795306599,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.008810628834075351,
      "cumulativeWealth": 2.1428958293517937,
      "drawdown": -0.018888800306994136,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.022109105359480075,
      "cumulativeWealth": 2.0955183196862643,
      "drawdown": -0.04058029119037265,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxPerformanceSummary": [
    {
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.12328574762017497,
      "annVol": 0.10945797045607261,
      "sharpeRf0": 1.1187174026850546,
      "maxDrawdown": -0.13555293636582466,
      "calmar": 0.9095025967379746,
      "cumulativeReturn": 2.0167297467054666,
      "terminalWealth": 3.0167297467054666,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.14278059837878043,
      "annVol": 0.12823780937631815,
      "sharpeRf0": 1.1067651794365145,
      "maxDrawdown": -0.18000086572986818,
      "calmar": 0.7932217314613079,
      "cumulativeReturn": 2.552289064902573,
      "terminalWealth": 3.552289064902573,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.13067845746712847,
      "annVol": 0.11044637818479558,
      "sharpeRf0": 1.1692084643017973,
      "maxDrawdown": -0.13078953672932625,
      "calmar": 0.9991507022275975,
      "cumulativeReturn": 2.2106564582870822,
      "terminalWealth": 3.2106564582870822,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "months": 114,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2017-05-01",
      "endDate": "2026-10-30",
      "days": 2390,
      "cagr": 0.14108001629907574,
      "annVol": 0.11149362016156197,
      "sharpeRf0": 1.2415415982605449,
      "maxDrawdown": -0.1233171633681458,
      "calmar": 1.144042016908072,
      "cumulativeReturn": 2.5023991522710163,
      "terminalWealth": 3.5023991522710163,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "months": 66,
      "startHoldingMonth": "2021-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2021-05-03",
      "endDate": "2026-10-30",
      "days": 1382,
      "cagr": 0.13527976820507104,
      "annVol": 0.11533006673453244,
      "sharpeRf0": 1.1597542368486244,
      "maxDrawdown": -0.10553049301679929,
      "calmar": 1.2819021719488792,
      "cumulativeReturn": 1.0073920896822508,
      "terminalWealth": 2.007392089682251,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "months": 66,
      "startHoldingMonth": "2021-05",
      "endHoldingMonth": "2026-10",
      "startDate": "2021-05-03",
      "endDate": "2026-10-30",
      "days": 1382,
      "cagr": 0.14419580766719542,
      "annVol": 0.10819055664530197,
      "sharpeRf0": 1.3012993394138237,
      "maxDrawdown": -0.10212253806506066,
      "calmar": 1.4119880919462708,
      "cumulativeReturn": 1.0955183196862648,
      "terminalWealth": 2.095518319686265,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxHedgeHistory": [
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
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.799558059819671,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.776658328278855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "dynamicHedgeRatio": 0.5,
      "zscoreSignal": 0.11451948526415265,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.1033551149440981,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.0025926451798516936,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.14337018777378363,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.2825171836729905,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.1374342362475658,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": -0.08082849474164366,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.1363117555540061,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.09900693405211514,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.22734953457811224,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.16053295816969837,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.03851868495312849,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.04647470194995229,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.18439132033172734,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20495732647081444,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.24576276696380583,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": -0.026468769438802497,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.15216269946420957,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.262029553146911,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20269198617823414,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.07987970581975246,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.06874350208968139,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.02171447129940063,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.16077012371934574,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.24015883889503864,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1871979046187764,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": -0.05453104980995793,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.14224279452889532,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1750273759886214,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2121160096847059,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.11852650575847434,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.061923181166419816,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.041098534876068404,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.16077012371934574,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.23922480601869545,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.21139665276276864,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": -0.04295219031246067,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.13871110563042222,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.1750273759886214,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.2288563461287616,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.15531848428658712,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.10416555526622462,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": -0.04295219031245967,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.13871110563042266,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.17502737598862117,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.22885634612876227,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.15531848428658757,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.1041655552662244,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": -0.04295219031245978,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.13871110563042177,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.1770707767449078,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.2288563461287605,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.2039442661678974,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
