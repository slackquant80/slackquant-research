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
  "publicAsOfDate": "2026-11-26",
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
      "netReturn": -0.01873980138739917,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.004965604619231567,
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
      "netReturn": -0.005403612790980561,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04959272432094197,
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
      "netReturn": 0.04437251678956411,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.04612361810298138,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173190963320608,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.043270520608618024,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.02181115884288376,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03191398450198579,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697798290466585,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.06520334088828927,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.08241347478317507,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328155105651079,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08482847471674959,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13799854870153738,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0789470412884199,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.07289478683725459,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649242059131212,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137570713993435,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05724479266495486,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882604585066928,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.060405717160286976,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.07604029379500354,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06981909434603817,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672063312234156,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.019311225063592063,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.024267369037248354,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757390910416394,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0005256256979137008,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492424405490025,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.425997797567586e-05,
      "seriesRole": "CORE_STRATEGY"
    }
  ],
  "corePerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02966881241373498,
      "cumulativeWealth": 1.029668812413735,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004776271829869061,
      "cumulativeWealth": 1.0247508342709086,
      "drawdown": -0.00477627182986895,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02066728340076729,
      "cumulativeWealth": 1.0459296501779582,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01009871918991423,
      "cumulativeWealth": 1.0564922000075108,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0023368989764458448,
      "cumulativeWealth": 1.0589611155483314,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019897120017154046,
      "cumulativeWealth": 1.0800313919578959,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008995858911613253,
      "cumulativeWealth": 1.0897472019800625,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012487163817037628,
      "cumulativeWealth": 1.1033550538103458,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.053787166487389904,
      "cumulativeWealth": 1.162701395784346,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03821238326356413,
      "cumulativeWealth": 1.1182718044275535,
      "drawdown": -0.03821238326356424,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.006032171598255087,
      "cumulativeWealth": 1.111526197009756,
      "drawdown": -0.0440140512087952,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006470836491482945,
      "cumulativeWealth": 1.118718701286606,
      "drawdown": -0.037828022446012244,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009902121336594849,
      "cumulativeWealth": 1.1297963896082637,
      "drawdown": -0.028300478777601334,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.002696291884927704,
      "cumulativeWealth": 1.1267501287713424,
      "drawdown": -0.030920464311261275,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008622497585023314,
      "cumulativeWealth": 1.136465529035598,
      "drawdown": -0.022564578355089626,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.024559071079757633,
      "cumulativeWealth": 1.1643760667428777,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.003183458189032984,
      "cumulativeWealth": 1.1606693242180912,
      "drawdown": -0.003183458189032873,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.036326347559359484,
      "cumulativeWealth": 1.1185064469450579,
      "drawdown": -0.039394162339776995,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0036747553951714806,
      "cumulativeWealth": 1.1226166845455032,
      "drawdown": -0.03586417085520188,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.014609924697557175,
      "cumulativeWealth": 1.1062153393200722,
      "drawdown": -0.04995012271722421,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019987681153558423,
      "cumulativeWealth": 1.1283260188095772,
      "drawdown": -0.030960828690118847,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0026671341744177735,
      "cumulativeWealth": 1.131335415694229,
      "drawdown": -0.02837627119996866,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.017334356812669816,
      "cumulativeWealth": 1.1509463874646828,
      "drawdown": -0.011533798797292327,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01707969092085948,
      "cumulativeWealth": 1.1706041960290594,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.036472970508772184,
      "cumulativeWealth": 1.1279087837098465,
      "drawdown": -0.036472970508772296,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.034180705621476015,
      "cumulativeWealth": 1.1664615018137099,
      "drawdown": -0.003538936755397293,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005419983824476393,
      "cumulativeWealth": 1.1727837042854146,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.030780980303144245,
      "cumulativeWealth": 1.2088831363868724,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0067059507559928955,
      "cumulativeWealth": 1.2007764256045117,
      "drawdown": -0.0067059507559930065,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01618890722276145,
      "cumulativeWealth": 1.2202156837539022,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009057112605909579,
      "cumulativeWealth": 1.2312673146051583,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02724551339391401,
      "cumulativeWealth": 1.2648138247167215,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002139019321896196,
      "cumulativeWealth": 1.267519285926392,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010709541528700073,
      "cumulativeWealth": 1.253944735495335,
      "drawdown": -0.010709541528700073,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02227096812687135,
      "cumulativeWealth": 1.2260181722582604,
      "drawdown": -0.032741997797532285,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06062897639550857,
      "cumulativeWealth": 1.300350399084571,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021642833515845172,
      "cumulativeWealth": 1.3284936662842213,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02526496626459629,
      "cumulativeWealth": 1.362058013945622,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.058765578238074045,
      "cumulativeWealth": 1.442100140728939,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04375056018445189,
      "cumulativeWealth": 1.5051928297279071,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031136446550731778,
      "cumulativeWealth": 1.4583264736365393,
      "drawdown": -0.03113644655073189,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01722637441173913,
      "cumulativeWealth": 1.433204795787125,
      "drawdown": -0.04782645287633702,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07480599700094603,
      "cumulativeWealth": 1.540417109442518,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05305608477124357,
      "cumulativeWealth": 1.6221456101841742,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005008247859362713,
      "cumulativeWealth": 1.6302697174639538,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.013774149318035889,
      "cumulativeWealth": 1.6527252959809744,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01210729454708015,
      "cumulativeWealth": 1.6727353279448263,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.038754935221479325,
      "cumulativeWealth": 1.737562077222008,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016615152762243568,
      "cumulativeWealth": 1.766431936568933,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00982657997370806,
      "cumulativeWealth": 1.7837899212617396,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010552084910975479,
      "cumulativeWealth": 1.8026126239742357,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.011417240194742329,
      "cumulativeWealth": 1.8231934852802243,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03995056587686374,
      "cumulativeWealth": 1.7503558738402678,
      "drawdown": -0.03995056587686374,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04422260504024278,
      "cumulativeWealth": 1.827761170328975,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.016192576076234366,
      "cumulativeWealth": 1.7981650085292358,
      "drawdown": -0.016192576076234366,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026092716277953176,
      "cumulativeWealth": 1.8450840179177324,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03526920103619735,
      "cumulativeWealth": 1.780009378761117,
      "drawdown": -0.03526920103619735,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0033981828700238026,
      "cumulativeWealth": 1.7860581761405048,
      "drawdown": -0.03199086936097417,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020738804142486078,
      "cumulativeWealth": 1.8230988868425686,
      "drawdown": -0.011915517592513192,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02248921855861552,
      "cumulativeWealth": 1.7820988175223975,
      "drawdown": -0.034136765471751596,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0012605528306832703,
      "cumulativeWealth": 1.7798523878134123,
      "drawdown": -0.03535428710608912,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.025658674879620036,
      "cumulativeWealth": 1.7341837340607926,
      "drawdown": -0.060105817827253216,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016153612828192054,
      "cumulativeWealth": 1.762197066673759,
      "drawdown": -0.04492313110896451,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.018383048475441477,
      "cumulativeWealth": 1.7298025125738146,
      "drawdown": -0.06248035548756126,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031558318827811904,
      "cumulativeWealth": 1.67521285337286,
      "drawdown": -0.09206689933642165,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01267045497226027,
      "cumulativeWealth": 1.6964385624004725,
      "drawdown": -0.08056297386663913,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020772682835167977,
      "cumulativeWealth": 1.731678142606566,
      "drawdown": -0.061463800135860724,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.020632842555039388,
      "cumulativeWealth": 1.6959487001341615,
      "drawdown": -0.08082846977986258,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.044392195397356504,
      "cumulativeWealth": 1.77123558621441,
      "drawdown": -0.04002442760664304,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03111878268558932,
      "cumulativeWealth": 1.7161168909220215,
      "drawdown": -0.06989769882742614,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02560116713216165,
      "cumulativeWealth": 1.7600514862648418,
      "drawdown": -0.04608599436509886,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00872723839879197,
      "cumulativeWealth": 1.775411875179623,
      "drawdown": -0.03776095942597657,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006973667615607804,
      "cumulativeWealth": 1.7877930074779287,
      "drawdown": -0.031050624190251952,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02207380008583293,
      "cumulativeWealth": 1.8272563929198464,
      "drawdown": -0.009662229375335007,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02102709774494449,
      "cumulativeWealth": 1.8656782916988468,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01707949032544087,
      "cumulativeWealth": 1.8338134573653913,
      "drawdown": -0.01707949032544087,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.023579812412369394,
      "cumulativeWealth": 1.7905724800414369,
      "drawdown": -0.04025657155983742,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.005612758695967002,
      "cumulativeWealth": 1.780522428783325,
      "drawdown": -0.04564337983371225,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.036203469996888726,
      "cumulativeWealth": 1.8449835191125696,
      "drawdown": -0.011092358569189886,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0445224112610878,
      "cumulativeWealth": 1.9271266341204285,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.011371619476388872,
      "cumulativeWealth": 1.9052120833543968,
      "drawdown": -0.011371619476388872,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02320317028144414,
      "cumulativeWealth": 1.9494190437467338,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02721707924825001,
      "cumulativeWealth": 2.0024765363484365,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03366151832439024,
      "cumulativeWealth": 1.935070135725982,
      "drawdown": -0.03366151832439024,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0218860250512547,
      "cumulativeWealth": 1.9774211291924157,
      "drawdown": -0.01251221010644643,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025374434173892402,
      "cumulativeWealth": 2.027597071469173,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008444452723259666,
      "cumulativeWealth": 2.0447190190810143,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016564165890910143,
      "cumulativeWealth": 2.0785880841133713,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0262740411886091,
      "cumulativeWealth": 2.133200993049518,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010298762908239167,
      "cumulativeWealth": 2.111231661786481,
      "drawdown": -0.010298762908239167,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025891534136362138,
      "cumulativeWealth": 2.165894688427394,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022147716854937105,
      "cumulativeWealth": 2.117925066130492,
      "drawdown": -0.022147716854937105,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01899542336131277,
      "cumulativeWealth": 2.158155949409177,
      "drawdown": -0.0035729987517703066,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.002941259963483378,
      "cumulativeWealth": 2.1518082517202264,
      "drawdown": -0.006503749597075448,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017649311768246245,
      "cumulativeWealth": 2.113830317020131,
      "drawdown": -0.024038274661020376,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0028328709554585885,
      "cumulativeWealth": 2.1198185255299853,
      "drawdown": -0.021273501035668274,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016573643918537995,
      "cumulativeWealth": 2.1549516429440394,
      "drawdown": -0.005052436548196204,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.038937956179563304,
      "cumulativeWealth": 2.238861055586072,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0021596342237941712,
      "cumulativeWealth": 2.2436961765440357,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.023677995162876053,
      "cumulativeWealth": 2.296822403759209,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06420611577710855,
      "cumulativeWealth": 2.4442924489344295,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0438720023308008,
      "cumulativeWealth": 2.5515284529512394,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0005256256979137008,
      "cumulativeWealth": 2.55018730402741,
      "drawdown": -0.0005256256979138119,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019311225063592063,
      "cumulativeWealth": 2.5994345450097986,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07604029379500354,
      "cumulativeWealth": 2.7970963115132252,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05724479266495486,
      "cumulativeWealth": 2.9572155099297097,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.07289478683725459,
      "cumulativeWealth": 2.7416499157015606,
      "drawdown": -0.07289478683725448,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.08482847471674959,
      "cumulativeWealth": 2.974219896257829,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06520334088828927,
      "cumulativeWealth": 3.1681489700302605,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02181115884288376,
      "cumulativeWealth": 3.099047969607012,
      "drawdown": -0.02181115884288365,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.04612361810298138,
      "cumulativeWealth": 2.9561086645740384,
      "drawdown": -0.06692876738501241,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04959272432094197,
      "cumulativeWealth": 3.102710146639007,
      "drawdown": -0.0206552229741358,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004965604619231567,
      "cumulativeWealth": 3.0873033148027194,
      "drawdown": -0.025518261922755747,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022859378232973793,
      "cumulativeWealth": 3.0167294806097305,
      "drawdown": -0.047794308554589104,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.028507578731583605,
      "cumulativeWealth": 1.0285075787315836,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005397998552480354,
      "cumulativeWealth": 1.0229556963103754,
      "drawdown": -0.005397998552480354,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.020989651615848093,
      "cumulativeWealth": 1.0444271799943774,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010174109850489721,
      "cumulativeWealth": 1.0550532968544775,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002539022301992766,
      "cumulativeWealth": 1.057732100704982,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018014615280695256,
      "cumulativeWealth": 1.076786737569224,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.00736666679221476,
      "cumulativeWealth": 1.0847190666711723,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012748377505883868,
      "cumulativeWealth": 1.0985474748209265,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05383323320267808,
      "cumulativeWealth": 1.1576858372171746,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.037677930396416426,
      "cumulativeWealth": 1.1140666308215887,
      "drawdown": -0.037677930396416426,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.006811485060759015,
      "cumulativeWealth": 1.1064781826090573,
      "drawdown": -0.04423277279715998,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.00764898388618418,
      "cumulativeWealth": 1.1149416163982484,
      "drawdown": -0.03692212467734246,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008570585514895646,
      "cumulativeWealth": 1.1244973188657055,
      "drawdown": -0.0286679833893857,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001960905839087923,
      "cumulativeWealth": 1.122292285507103,
      "drawdown": -0.030572674012450562,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0074723973361265905,
      "cumulativeWealth": 1.1306784993916816,
      "drawdown": -0.023328727844172947,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.023582802956178206,
      "cumulativeWealth": 1.157343067649623,
      "drawdown": -0.00029608167996209023,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.003371612967590698,
      "cumulativeWealth": 1.1534409547547844,
      "drawdown": -0.003666696374721057,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.028906795721870715,
      "cumulativeWealth": 1.1200986726984483,
      "drawdown": -0.03246749965351359,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002172559247625161,
      "cumulativeWealth": 1.1225321534280719,
      "drawdown": -0.030365477972508104,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007706850563357959,
      "cumulativeWealth": 1.1138809658690374,
      "drawdown": -0.03783830633484686,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014906722957676033,
      "cumulativeWealth": 1.1304852808350758,
      "drawdown": -0.02349562852689202,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0003517414937374008,
      "cumulativeWealth": 1.1300876422537467,
      "drawdown": -0.023839105633155167,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01927232147104818,
      "cumulativeWealth": 1.1518670545857197,
      "drawdown": -0.005026219069451443,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015182757446626338,
      "cumulativeWealth": 1.1693555726862546,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.035785811195404915,
      "cumulativeWealth": 1.1275092349418097,
      "drawdown": -0.035785811195404915,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03166010790348972,
      "cumulativeWealth": 1.1632062989822485,
      "drawdown": -0.005258685935775609,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004663548846348009,
      "cumulativeWealth": 1.168630968375932,
      "drawdown": -0.0006196612281567093,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03357699600854991,
      "cumulativeWealth": 1.2078700857365585,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008137512178741257,
      "cumulativeWealth": 1.19804102820354,
      "drawdown": -0.008137512178741257,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01483444055490346,
      "cumulativeWealth": 1.215813296618761,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006858722742288936,
      "cumulativeWealth": 1.2241522229266573,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02740946710086911,
      "cumulativeWealth": 1.2577055830074213,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0009678485982680396,
      "cumulativeWealth": 1.258922851592969,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010129206057961193,
      "cumulativeWealth": 1.2461709626181077,
      "drawdown": -0.010129206057961193,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018788119918102142,
      "cumulativeWealth": 1.222757753133982,
      "drawdown": -0.02872701723797111,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.048277613696980026,
      "cumulativeWealth": 1.2817895795847716,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019100874751351027,
      "cumulativeWealth": 1.3062728818020073,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02417586551556372,
      "cumulativeWealth": 1.3378531593190806,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05978608306570754,
      "cumulativeWealth": 1.4178381594318503,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04199959130381603,
      "cumulativeWealth": 1.4773867826629428,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.029833615428991656,
      "cumulativeWealth": 1.4333109935491013,
      "drawdown": -0.029833615428991656,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016916161917809536,
      "cumulativeWealth": 1.4090648727036483,
      "drawdown": -0.04624510707761065,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07296677396347317,
      "cumulativeWealth": 1.5118797907700856,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.052598679514398006,
      "cumulativeWealth": 1.5914026713490965,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.003628338503172568,
      "cumulativeWealth": 1.5971768189356041,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013298343960582715,
      "cumulativeWealth": 1.6184166256396793,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010596015664044334,
      "cumulativeWealth": 1.6355653935559071,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0384055886003658,
      "cumulativeWealth": 1.6983802451898107,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01567087538070866,
      "cumulativeWealth": 1.7249953503612376,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010081800372890415,
      "cumulativeWealth": 1.742386409127744,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011008432186929262,
      "cumulativeWealth": 1.761567351756054,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010534962060535502,
      "cumulativeWealth": 1.780125396973882,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03831074686702052,
      "cumulativeWealth": 1.711927463498861,
      "drawdown": -0.03831074686702052,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04270575013994393,
      "cumulativeWealth": 1.7850366100127515,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016567202328079733,
      "cumulativeWealth": 1.7554635473316407,
      "drawdown": -0.016567202328079733,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02402790278070044,
      "cumulativeWealth": 1.797643654781989,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03492663924082984,
      "cumulativeWealth": 1.7348580033678516,
      "drawdown": -0.03492663924082984,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0052201457316760624,
      "cumulativeWealth": 1.7439142149691964,
      "drawdown": -0.029888815655908507,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016282936282027816,
      "cumulativeWealth": 1.7723102590128623,
      "drawdown": -0.014092557054751209,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021285409187145943,
      "cumulativeWealth": 1.7345859099431968,
      "drawdown": -0.035078000398493625,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0004906588884395768,
      "cumulativeWealth": 1.7337348199487213,
      "drawdown": -0.035551447954248916,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.019917218512898405,
      "cumulativeWealth": 1.699203644696382,
      "drawdown": -0.0547605805097926,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010236192500293617,
      "cumulativeWealth": 1.7165970203006948,
      "drawdown": -0.04508492785302498,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.015039851186595787,
      "cumulativeWealth": 1.6907796565680187,
      "drawdown": -0.05944670843395283,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02334837547039237,
      "cumulativeWealth": 1.6513026983087675,
      "drawdown": -0.08140709983535033,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0068762463143738906,
      "cumulativeWealth": 1.6626574624019288,
      "drawdown": -0.07509062879118322,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018319422713752864,
      "cumulativeWealth": 1.6931163872838453,
      "drawdown": -0.058146823048097596,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.017180341721976133,
      "cumulativeWealth": 1.6640280691752312,
      "drawdown": -0.07432818248006012,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03746073447022802,
      "cumulativeWealth": 1.7263637828256106,
      "drawdown": -0.039651836317372235,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.030759038886113088,
      "cumulativeWealth": 1.6732624920981003,
      "drawdown": -0.0691912228282936,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.026639984660297378,
      "cumulativeWealth": 1.7178381792202446,
      "drawdown": -0.04439449128276918,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008954177259548501,
      "cumulativeWealth": 1.7332200067802028,
      "drawdown": -0.03583783016751407,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006772836700105422,
      "cumulativeWealth": 1.7449588228514807,
      "drawdown": -0.02930771723881931,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01856063705655675,
      "cumulativeWealth": 1.7773463702410637,
      "drawdown": -0.011291050084888399,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017882260119732374,
      "cumulativeWealth": 1.8091293403565765,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0145997844367739,
      "cumulativeWealth": 1.7827164419691275,
      "drawdown": -0.0145997844367739,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020274520922774486,
      "cumulativeWealth": 1.7465727201670502,
      "drawdown": -0.034578301724517035,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001244287693511703,
      "cumulativeWealth": 1.744399481225523,
      "drawdown": -0.03577956406273042,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027281236338574155,
      "cumulativeWealth": 1.7919888557417227,
      "drawdown": -0.00947443846744278,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04073783681078069,
      "cumulativeWealth": 1.8649906053136667,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011140158854442417,
      "cumulativeWealth": 1.8442143137084297,
      "drawdown": -0.011140158854442417,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019576530076994114,
      "cumulativeWealth": 1.8803176306891658,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027496470817832463,
      "cumulativeWealth": 1.9320197295496664,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.031175742212957713,
      "cumulativeWealth": 1.8717875805108777,
      "drawdown": -0.031175742212957713,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01964776211591257,
      "cumulativeWealth": 1.9085640176242749,
      "drawdown": -0.012140513663832397,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02496656187937818,
      "cumulativeWealth": 1.9562142992710458,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005497781064029317,
      "cumulativeWealth": 1.9669691372027616,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01738175334951486,
      "cumulativeWealth": 2.001158509591728,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027705925915569418,
      "cumulativeWealth": 2.0566024590037877,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011188924052506377,
      "cumulativeWealth": 2.0335912902837965,
      "drawdown": -0.011188924052506377,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.021242689639121126,
      "cumulativeWealth": 2.0767902389161152,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021122207553918027,
      "cumulativeWealth": 2.0329238444437783,
      "drawdown": -0.021122207553917915,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01719198186452009,
      "cumulativeWealth": 2.067873834309406,
      "drawdown": -0.004293358298603445,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001200554574246504,
      "cumulativeWealth": 2.0653912389186613,
      "drawdown": -0.005488758461905663,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01660977252664353,
      "cumulativeWealth": 2.0310855602616997,
      "drawdown": -0.022007363959043347,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0021566300738340427,
      "cumulativeWealth": 2.03546586046349,
      "drawdown": -0.01989819562816919,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012765205895511222,
      "cumulativeWealth": 2.0614490012655904,
      "drawdown": -0.007386994296800786,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03839017752050422,
      "cumulativeWealth": 2.1405883943736423,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0008001956878509464,
      "cumulativeWealth": 2.142301283976284,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02413389837136326,
      "cumulativeWealth": 2.1940033654446087,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06259107794388719,
      "cumulativeWealth": 2.331328401100303,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04441028254346513,
      "cumulativeWealth": 2.434863354094772,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.425997797567586e-05,
      "cumulativeWealth": 2.4346581925621824,
      "drawdown": -8.425997797567586e-05,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757390910416394,
      "cumulativeWealth": 2.480326028013319,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672063312234156,
      "cumulativeWealth": 2.6706182112323233,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.060405717160286976,
      "cumulativeWealth": 2.8319388195431348,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137570713993435,
      "cumulativeWealth": 2.6298071837212125,
      "drawdown": -0.07137570713993435,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0789470412884199,
      "cumulativeWealth": 2.837422680035034,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328155105651079,
      "cumulativeWealth": 3.016979188230573,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697798290466585,
      "cumulativeWealth": 2.954534361546041,
      "drawdown": -0.020697798290466585,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.043270520608618024,
      "cumulativeWealth": 2.8266901215658926,
      "drawdown": -0.063072714391604,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04437251678956411,
      "cumulativeWealth": 2.9521174764439704,
      "drawdown": -0.02149889268034466,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005403612790980561,
      "cumulativeWealth": 2.9361653766877804,
      "drawdown": -0.02678633377984585,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01873980138739917,
      "cumulativeWealth": 2.8811422206880932,
      "drawdown": -0.045024164592314175,
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
      "netReturn": 0.06782248850641892,
      "cumulativeWealth": 3.0540798647369023,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031277210897670216,
      "cumulativeWealth": 2.958556764709198,
      "drawdown": -0.031277210897670216,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.035289963986549155,
      "cumulativeWealth": 3.062964126387947,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01849429428387339,
      "cumulativeWealth": 3.006316766453581,
      "drawdown": -0.01849429428387339,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.027004735950219794,
      "cumulativeWealth": 2.9251319759927834,
      "drawdown": -0.04499959670037157,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008926589698165621,
      "cumulativeWealth": 2.9512434289554554,
      "drawdown": -0.03647469993853303,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05099644592709396,
      "cumulativeWealth": 3.1017463548978736,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04376041697657218,
      "cumulativeWealth": 3.2374800687437673,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.014430649918307337,
      "cumulativeWealth": 3.2841990102333063,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.019628230127974877,
      "cumulativeWealth": 3.348662024192233,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07878102517300967,
      "cumulativeWealth": 3.612473051416023,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03904014965396918,
      "cumulativeWealth": 3.7535045399642355,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492424405490025,
      "cumulativeWealth": 3.7366422045627825,
      "drawdown": -0.004492424405490025,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.024267369037248354,
      "cumulativeWealth": 3.8273206799010646,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06981909434603817,
      "cumulativeWealth": 4.09454074354362,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882604585066928,
      "cumulativeWealth": 4.212570162754441,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649242059131212,
      "cumulativeWealth": 3.848214772467072,
      "drawdown": -0.08649242059131212,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13799854870153738,
      "cumulativeWealth": 4.379262826159345,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.08241347478317507,
      "cumulativeWealth": 4.740173092651924,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03191398450198579,
      "cumulativeWealth": 4.5888952820363,
      "drawdown": -0.031913984501985904,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173190963320608,
      "cumulativeWealth": 4.259725060349027,
      "drawdown": -0.10135664308285985,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694349643809308,
      "cumulativeWealth": 4.672677701564228,
      "drawdown": -0.014239014012447093,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0007589648480446076,
      "cumulativeWealth": 4.669131303442499,
      "drawdown": -0.014987171949385591,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.060099634942407776,
      "cumulativeWealth": 4.388518216607436,
      "drawdown": -0.07418608332881604,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011216245475191622,
      "cumulativeWealth": 1.0112162454751916,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003752031809876266,
      "cumulativeWealth": 1.0150103609948782,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013668234947333824,
      "cumulativeWealth": 1.0288837610829342,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0055160712176478555,
      "cumulativeWealth": 1.0345591571837491,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009803497979650189,
      "cumulativeWealth": 1.0447014557910286,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014529640229707041,
      "cumulativeWealth": 1.0598805920911234,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017746336928414763,
      "cumulativeWealth": 1.0786895901822602,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009177401021093212,
      "cumulativeWealth": 1.0885891571286415,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0293153496286902,
      "cumulativeWealth": 1.1205015288718687,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02585138610500004,
      "cumulativeWealth": 1.091535011217759,
      "drawdown": -0.02585138610500015,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.013761347426787585,
      "cumulativeWealth": 1.076514018699889,
      "drawdown": -0.039256983626132835,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006635446168136161,
      "cumulativeWealth": 1.0757997036178562,
      "drawdown": -0.039894479482789125,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017232822094439992,
      "cumulativeWealth": 1.094338768519554,
      "drawdown": -0.0233491518558262,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003861135086591805,
      "cumulativeWealth": 1.0985641583353025,
      "drawdown": -0.019578170998707067,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022111267470945384,
      "cumulativeWealth": 1.1228548042742483,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021423595430879683,
      "cumulativeWealth": 1.1469103913286394,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010887038096267787,
      "cumulativeWealth": 1.1481590370409793,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04403879987023662,
      "cumulativeWealth": 1.097595490989528,
      "drawdown": -0.04403879987023662,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014215522712015982,
      "cumulativeWealth": 1.113198384620296,
      "drawdown": -0.030449311717985927,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04490405266064845,
      "cumulativeWealth": 1.0632112657355575,
      "drawdown": -0.07398606688176945,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05168282462333318,
      "cumulativeWealth": 1.1181610271201203,
      "drawdown": -0.0261270511776569,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.018994188496512132,
      "cumulativeWealth": 1.1393995884386936,
      "drawdown": -0.007629124816071142,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019350618961155863,
      "cumulativeWealth": 1.1614476757190686,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023710110143582597,
      "cumulativeWealth": 1.1889857280363758,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03061935082885725,
      "cumulativeWealth": 1.1525797568991258,
      "drawdown": -0.03061935082885714,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.046146594984841416,
      "cumulativeWealth": 1.2057673881284767,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009798592445699139,
      "cumulativeWealth": 1.2175822113490629,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010850421417856193,
      "cumulativeWealth": 1.218903339359465,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009226481150047539,
      "cumulativeWealth": 1.230149528043795,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014095041740880276,
      "cumulativeWealth": 1.2474885369890965,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021580967224514858,
      "cumulativeWealth": 1.2744105462188162,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017246250651321127,
      "cumulativeWealth": 1.296389349931593,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.007873519915766902,
      "cumulativeWealth": 1.3065964972968676,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04116068381261506,
      "cumulativeWealth": 1.2528160920009608,
      "drawdown": -0.04116068381261506,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07702979668953858,
      "cumulativeWealth": 1.1563119231447445,
      "drawdown": -0.11501988139646557,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.08306626626182889,
      "cumulativeWealth": 1.2523624372344133,
      "drawdown": -0.04150788722811949,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03127725008448756,
      "cumulativeWealth": 1.2915328903802124,
      "drawdown": -0.011528889712944523,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01327715584767808,
      "cumulativeWealth": 1.3086807738481925,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04066782478108988,
      "cumulativeWealth": 1.361901974253432,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.038583833823416125,
      "cumulativeWealth": 1.4144493737118087,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02285549007279941,
      "cumulativeWealth": 1.382121440092461,
      "drawdown": -0.02285549007279941,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0171932506186816,
      "cumulativeWealth": 1.3583582797874982,
      "drawdown": -0.03965578052264662,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07009311938239371,
      "cumulativeWealth": 1.4535698488567064,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02257186950495571,
      "cumulativeWealth": 1.4863796378014382,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.009092515051968952,
      "cumulativeWealth": 1.4728647085717885,
      "drawdown": -0.009092515051968952,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01061077926611187,
      "cumulativeWealth": 1.48849295088329,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022654211691189197,
      "cumulativeWealth": 1.5222135852934429,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.034674360307340724,
      "cumulativeWealth": 1.5749953676146367,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00475495619529176,
      "cumulativeWealth": 1.5824844015954318,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016768134563046155,
      "cumulativeWealth": 1.6090197129853057,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019113894819811517,
      "cumulativeWealth": 1.63977434654231,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017054294545165716,
      "cumulativeWealth": 1.667739541235849,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03163196166987936,
      "cumulativeWealth": 1.6149856679921346,
      "drawdown": -0.03163196166987936,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04206312328987849,
      "cumulativeWealth": 1.6829170092562746,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.003737413322341676,
      "cumulativeWealth": 1.6766272528054849,
      "drawdown": -0.003737413322341676,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0263135535305572,
      "cumulativeWealth": 1.7207452737729731,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03963898136444188,
      "cumulativeWealth": 1.6525366839329347,
      "drawdown": -0.03963898136444188,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02229286490193938,
      "cumulativeWealth": 1.6156969068925189,
      "drawdown": -0.061048179809973346,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011305459048892352,
      "cumulativeWealth": 1.6339631021088143,
      "drawdown": -0.050432898457931974,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.06788510009673732,
      "cumulativeWealth": 1.523041353367782,
      "drawdown": -0.11489435619468402,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.004396647804585818,
      "cumulativeWealth": 1.52973762979036,
      "drawdown": -0.1110028584090208,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.05568810299640248,
      "cumulativeWealth": 1.4445494431051218,
      "drawdown": -0.1605094227934467,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0654047937800275,
      "cumulativeWealth": 1.539029901536466,
      "drawdown": -0.10560271471097582,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03665029211466042,
      "cumulativeWealth": 1.4826240060719573,
      "drawdown": -0.1383826364833779,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07204785660324586,
      "cumulativeWealth": 1.375804124285955,
      "drawdown": -0.20046032073689013,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04365143750424627,
      "cumulativeWealth": 1.4358599520353077,
      "drawdown": -0.16555926439537139,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04858893017294452,
      "cumulativeWealth": 1.5056268509828787,
      "drawdown": -0.12501468175961772,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03897078029111567,
      "cumulativeWealth": 1.4469513977728206,
      "drawdown": -0.15911354235471553,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05105351817991477,
      "cumulativeWealth": 1.5208233572644683,
      "drawdown": -0.11618333030207795,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02574829959028313,
      "cumulativeWealth": 1.4816647418377225,
      "drawdown": -0.13894010669634638,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.032811583407050815,
      "cumulativeWealth": 1.5302805080958173,
      "drawdown": -0.11068736818874736,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011887100740721745,
      "cumulativeWealth": 1.548471106657115,
      "drawdown": -0.10011601934441061,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0018075615836294912,
      "cumulativeWealth": 1.5456721497713615,
      "drawdown": -0.10174261505756721,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03740701283199477,
      "cumulativeWealth": 1.6034911277119157,
      "drawdown": -0.06814148953259158,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01957844798317887,
      "cumulativeWealth": 1.6348849953473124,
      "drawdown": -0.04989714615772278,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012276336964260337,
      "cumulativeWealth": 1.6148145962466156,
      "drawdown": -0.061560928942196,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03881923002484511,
      "cumulativeWealth": 1.5521287369874408,
      "drawdown": -0.0979904111058909,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01930770716131447,
      "cumulativeWealth": 1.5221606898570263,
      "drawdown": -0.11540614810495597,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0731779576081677,
      "cumulativeWealth": 1.633549300292203,
      "drawdown": -0.050673376710534734,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04099525847353602,
      "cumulativeWealth": 1.7005170760869457,
      "drawdown": -0.011755486412974081,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.008951120849629346,
      "cumulativeWealth": 1.7157386099418583,
      "drawdown": -0.0029095903428733028,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025413968612457705,
      "cumulativeWealth": 1.7593423371221026,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023231073920822576,
      "cumulativeWealth": 1.800213749007819,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03410467094421743,
      "cumulativeWealth": 1.7388180514686513,
      "drawdown": -0.03410467094421743,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03702592376965175,
      "cumulativeWealth": 1.803199396091624,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.024710130508948103,
      "cumulativeWealth": 1.8477566885027044,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016942186392517433,
      "cumulativeWealth": 1.879061726727338,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019864993311021983,
      "cumulativeWealth": 1.916389275359774,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017934054902469798,
      "cumulativeWealth": 1.9507579058385804,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.015428942847774407,
      "cumulativeWealth": 1.920659773599553,
      "drawdown": -0.015428942847774407,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.040224014024681454,
      "cumulativeWealth": 1.997916419269463,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022446403891432043,
      "cumulativeWealth": 1.9530703803812168,
      "drawdown": -0.022446403891432043,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01817772418692276,
      "cumulativeWealth": 1.988572755073435,
      "drawdown": -0.004676704243436025,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0013325893480395923,
      "cumulativeWealth": 1.9912227059446475,
      "drawdown": -0.0033503470216552644,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0335365708844505,
      "cumulativeWealth": 1.9244439245200073,
      "drawdown": -0.03677455875572655,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0034778161660502516,
      "cumulativeWealth": 1.9177510623286544,
      "drawdown": -0.04012447976683675,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.035279180881465866,
      "cumulativeWealth": 1.9854077489421704,
      "drawdown": -0.006260857664839858,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03665316179869649,
      "cumulativeWealth": 2.0581792204005334,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.012763207397744392,
      "cumulativeWealth": 2.084448188652233,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017073028731272366,
      "cumulativeWealth": 2.1200360324659413,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025879306127221335,
      "cumulativeWealth": 2.1749010939508673,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01676434032866081,
      "cumulativeWealth": 2.2113618760710363,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0035928631908743736,
      "cumulativeWealth": 2.219306996757275,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006374439237639695,
      "cumulativeWealth": 2.217892312997225,
      "drawdown": -0.0006374439237640805,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009843858693696417,
      "cumulativeWealth": 2.239724931524205,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0012072639133082763,
      "cumulativeWealth": 2.2424288706097713,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.036805869791439516,
      "cumulativeWealth": 2.159894325581543,
      "drawdown": -0.03680586979143963,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06370677483345988,
      "cumulativeWealth": 2.297494227045434,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03274989866753253,
      "cumulativeWealth": 2.372736930170413,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.005158591531741252,
      "cumulativeWealth": 2.3604969495353862,
      "drawdown": -0.005158591531741141,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.004977152967128751,
      "cumulativeWealth": 2.3487483951391077,
      "drawdown": -0.010110069399721588,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017637936151300604,
      "cumulativeWealth": 2.390175469368041,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012413579852915468,
      "cumulativeWealth": 2.360504835316561,
      "drawdown": -0.01241357985291558,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0037094358526843507,
      "cumulativeWealth": 2.369260976583119,
      "drawdown": -0.00875019137839772,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0001534450137348209,
      "cumulativeWealth": 1.0001534450137348,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001028301644242946,
      "cumulativeWealth": 1.0011819044457377,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00032864721885816905,
      "cumulativeWealth": 1.001510940094205,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011376784840537724,
      "cumulativeWealth": 1.0026503375422946,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007219649757490565,
      "cumulativeWealth": 1.0033742159689232,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007000005857744629,
      "cumulativeWealth": 1.0040765785078525,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005462707872450068,
      "cumulativeWealth": 1.0046250762108482,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007441565998851374,
      "cumulativeWealth": 1.0053726745917206,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013130761737636387,
      "cumulativeWealth": 1.00669280549648,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0008309344488632853,
      "cumulativeWealth": 1.00752930122799,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013022443375396708,
      "cumulativeWealth": 1.0088413505554195,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010383806546803154,
      "cumulativeWealth": 1.0098889118974779,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001498743045020845,
      "cumulativeWealth": 1.0114024758804279,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001486849352938524,
      "cumulativeWealth": 1.0129062789972512,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00138931314795121,
      "cumulativeWealth": 1.0143135230083045,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001585125338620541,
      "cumulativeWealth": 1.0159213370749305,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013994468124978177,
      "cumulativeWealth": 1.0173430649518485,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017059584229373037,
      "cumulativeWealth": 1.01907860992252,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001859392864047349,
      "cumulativeWealth": 1.0209734774177133,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 7.688010696083047e-05,
      "cumulativeWealth": 1.0210519699678613,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017494308885530607,
      "cumulativeWealth": 1.022838229822941,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018481938650172225,
      "cumulativeWealth": 1.024728633164205,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017493909083006187,
      "cumulativeWealth": 1.0265212841185376,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019249500161113708,
      "cumulativeWealth": 1.0284972862809403,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0021223413559008364,
      "cumulativeWealth": 1.0306801086060462,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018154277508242167,
      "cumulativeWealth": 1.032551233877432,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018045277573999208,
      "cumulativeWealth": 1.0344145012399015,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016945214389878505,
      "cumulativeWealth": 1.0361673387890524,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016186498227848123,
      "cumulativeWealth": 1.0378445308683588,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016077559942062614,
      "cumulativeWealth": 1.0395131316339166,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010815732612432516,
      "cumulativeWealth": 1.0406374412418031,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011161463772715319,
      "cumulativeWealth": 1.0417989449518983,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0012035027995747072,
      "cumulativeWealth": 1.0430527528987419,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011812634737859984,
      "cumulativeWealth": 1.0442848730169731,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002044806556543932,
      "cumulativeWealth": 1.046420233572218,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00019694454604191058,
      "cumulativeWealth": 1.046214146814348,
      "drawdown": -0.00019694454604191058,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00017465121831339303,
      "cumulativeWealth": 1.04603142423899,
      "drawdown": -0.00037156136775040594,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -7.771561172376096e-16,
      "cumulativeWealth": 1.0460314242389892,
      "drawdown": -0.0003715613677512941,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010947656380100312,
      "cumulativeWealth": 1.0461459401649427,
      "drawdown": -0.00026212548121218315,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.046145940164942,
      "drawdown": -0.00026212548121273826,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021862870826339087,
      "cumulativeWealth": 1.0459172226293887,
      "drawdown": -0.0004806968813209078,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010918799989734218,
      "cumulativeWealth": 1.0460314242389859,
      "drawdown": -0.00037156136775451376,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010917607918103922,
      "cumulativeWealth": 1.0459172226293874,
      "drawdown": -0.00048069688132212907,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 3.275639996846991e-05,
      "cumulativeWealth": 1.0459514831122658,
      "drawdown": -0.0004479562272529103,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0459514831122652,
      "drawdown": -0.0004479562272535764,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010918442341012469,
      "cumulativeWealth": 1.0458372815026666,
      "drawdown": -0.0005570917408211917,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010929652608349105,
      "cumulativeWealth": 1.0457229751209498,
      "drawdown": -0.0006663273787127499,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0457229751209491,
      "drawdown": -0.000666327378713305,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010940866420416917,
      "cumulativeWealth": 1.0456085639671135,
      "drawdown": -0.0007756631409290282,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021854066539750416,
      "cumulativeWealth": 1.0453800559757989,
      "drawdown": -0.0009940342923876466,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010904365805519678,
      "cumulativeWealth": 1.0452660639104374,
      "drawdown": -0.001102969557307265,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010975719403327755,
      "cumulativeWealth": 1.0451513384402444,
      "drawdown": -0.0012126056924968154,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010976924199601612,
      "cumulativeWealth": 1.045266063910436,
      "drawdown": -0.0011029695573084863,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010975719403294448,
      "cumulativeWealth": 1.0451513384402433,
      "drawdown": -0.0012126056924978146,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002185360251624191,
      "cumulativeWealth": 1.0449229352210474,
      "drawdown": -0.001430876719632157,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0449229352210474,
      "drawdown": -0.001430876719632157,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 4.440892098500626e-16,
      "cumulativeWealth": 1.0449229352210478,
      "drawdown": -0.001430876719631713,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002187843291860947,
      "cumulativeWealth": 1.0446943224576144,
      "drawdown": -0.0016493479954144963,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00045962786490205687,
      "cumulativeWealth": 1.045174493078521,
      "drawdown": -0.0011904782168100647,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010926559187374174,
      "cumulativeWealth": 1.0450602914689233,
      "drawdown": -0.0012996137303767918,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00032773234182847943,
      "cumulativeWealth": 1.0454027915255983,
      "drawdown": -0.0009723073139997762,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000776718723190406,
      "cumulativeWealth": 1.0462147754470519,
      "drawdown": -0.00019634380010469243,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0003610190732235008,
      "cumulativeWealth": 1.0465924789356764,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00193708682363547,
      "cumulativeWealth": 1.0486198194363388,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002067726510971424,
      "cumulativeWealth": 1.0507880784369172,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0015857581686888889,
      "cumulativeWealth": 1.0524543742158594,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003151562501244598,
      "cumulativeWealth": 1.0557712499559089,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003625841211634784,
      "cumulativeWealth": 1.0595993088640583,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028423757024242935,
      "cumulativeWealth": 1.062611088193879,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034578579600286208,
      "cumulativeWealth": 1.066285446403605,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003990886676249472,
      "cumulativeWealth": 1.0705408707847357,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036304281850019215,
      "cumulativeWealth": 1.074427392535229,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037514756363252744,
      "cumulativeWealth": 1.0784580807213253,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004606557872353978,
      "cumulativeWealth": 1.0834260602830759,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003859958034137634,
      "cumulativeWealth": 1.0876080394088596,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004966812934887432,
      "cumulativeWealth": 1.0930099850870831,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003991177367128618,
      "cumulativeWealth": 1.0973723818016083,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004309475260259488,
      "cumulativeWealth": 1.1021014809322744,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004681893793669456,
      "cumulativeWealth": 1.1072614030158452,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00033915800775263794,
      "cumulativeWealth": 1.1068858664443368,
      "drawdown": -0.00033915800775274896,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004267598212987389,
      "cumulativeWealth": 1.1116096105899558,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004443388244671498,
      "cumulativeWealth": 1.116548923666315,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004101579666730304,
      "cumulativeWealth": 1.1211285380285345,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004322220094062912,
      "cumulativeWealth": 1.1259743023236288,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004572780332876336,
      "cumulativeWealth": 1.1311231354686184,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003992765906638329,
      "cumulativeWealth": 1.1356394453601273,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004508148922277577,
      "cumulativeWealth": 1.1407590771018234,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004617279165059163,
      "cumulativeWealth": 1.1460262802208778,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004222130512391953,
      "cumulativeWealth": 1.1508649527466015,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003948107327115258,
      "cumulativeWealth": 1.1554086910990604,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707194209732423,
      "cumulativeWealth": 1.1596920155085775,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0040313674706380365,
      "cumulativeWealth": 1.1643671601758574,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003499534422463535,
      "cumulativeWealth": 1.168441903133279,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032381269793131384,
      "cumulativeWealth": 1.1722254663835747,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032701131621430957,
      "cumulativeWealth": 1.176058776310195,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00340231489010967,
      "cumulativeWealth": 1.1800600985964793,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036319605101180485,
      "cumulativeWealth": 1.1843460302741478,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003347071207024488,
      "cumulativeWealth": 1.188310120771232,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003565759337178509,
      "cumulativeWealth": 1.192547348679836,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707617669374441,
      "cumulativeWealth": 1.196968858301367,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033026255808024096,
      "cumulativeWealth": 1.2009219982722168,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003510596530462484,
      "cumulativeWealth": 1.2051379508727074,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002875671473183461,
      "cumulativeWealth": 1.2086035316992827,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033518592792074475,
      "cumulativeWealth": 1.212654600661892,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002954684855975387,
      "cumulativeWealth": 1.2162376128459964,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0026702985218993724,
      "cumulativeWealth": 1.2194853303458575,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002878270519971027,
      "cumulativeWealth": 1.2229953390217292,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028890261434735276,
      "cumulativeWealth": 1.2265286045295092,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031741394281346036,
      "cumulativeWealth": 1.2304217773328812,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002724360522861957,
      "cumulativeWealth": 1.2337738898495165,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033708814942174925,
      "cumulativeWealth": 1.237932795422859,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002767898077323583,
      "cumulativeWealth": 1.2413592672271656,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028451114281400347,
      "cumulativeWealth": 1.244891072664781,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003534801551311917,
      "cumulativeWealth": 1.249291515559651,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016615152762243568,
      "cumulativeWealth": 1.0166151527622436,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.00982657997370806,
      "cumulativeWealth": 1.026605002863345,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.010552084910975479,
      "cumulativeWealth": 1.0374378260235912,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.011417240194742329,
      "cumulativeWealth": 1.0492825028704138,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03995056587686374,
      "cumulativeWealth": 1.0073630731160488,
      "drawdown": -0.03995056587686385,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04422260504024278,
      "cumulativeWealth": 1.0519112924305851,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.016192576076234366,
      "cumulativeWealth": 1.0348781388024528,
      "drawdown": -0.016192576076234366,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.026092716277953176,
      "cumulativeWealth": 1.0618809204604815,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03526920103619735,
      "cumulativeWealth": 1.0244292288002586,
      "drawdown": -0.03526920103619735,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0033981828700238026,
      "cumulativeWealth": 1.0279104266571193,
      "drawdown": -0.03199086936097417,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.020738804142486078,
      "cumulativeWealth": 1.0492280596715806,
      "drawdown": -0.011915517592513192,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.02248921855861552,
      "cumulativeWealth": 1.0256317405197943,
      "drawdown": -0.034136765471751596,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0012605528306832703,
      "cumulativeWealth": 1.0243388775260436,
      "drawdown": -0.03535428710608901,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.025658674879620036,
      "cumulativeWealth": 0.9980556993010479,
      "drawdown": -0.060105817827253216,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016153612828192054,
      "cumulativeWealth": 1.0141779046485275,
      "drawdown": -0.0449231311089644,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.018383048475441477,
      "cumulativeWealth": 0.995534223064652,
      "drawdown": -0.062480355487561146,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.031558318827811904,
      "cumulativeWealth": 0.9641168366491797,
      "drawdown": -0.09206689933642165,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01267045497226027,
      "cumulativeWealth": 0.9763326356159411,
      "drawdown": -0.08056297386663913,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.020772682835167977,
      "cumulativeWealth": 0.9966136837972146,
      "drawdown": -0.061463800135860835,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.020632842555039388,
      "cumulativeWealth": 0.9760507105712288,
      "drawdown": -0.08082846977986258,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.044392195397356504,
      "cumulativeWealth": 1.0193797444326356,
      "drawdown": -0.04002442760664304,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03111878268558932,
      "cumulativeWealth": 0.9876578876915448,
      "drawdown": -0.06989769882742602,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02560116713216165,
      "cumulativeWealth": 1.0129430823437338,
      "drawdown": -0.04608599436509886,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.00872723839879197,
      "cumulativeWealth": 1.0217832781077547,
      "drawdown": -0.03776095942597646,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.006973667615607804,
      "cumulativeWealth": 1.0289088550644643,
      "drawdown": -0.031050624190251952,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02207380008583293,
      "cumulativeWealth": 1.0516207834377005,
      "drawdown": -0.009662229375335007,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02102709774494449,
      "cumulativeWealth": 1.07373331644166,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01707949032544087,
      "cumulativeWealth": 1.0553944986513912,
      "drawdown": -0.01707949032544076,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.023579812412369394,
      "cumulativeWealth": 1.0305084943521448,
      "drawdown": -0.04025657155983742,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.005612758695967002,
      "cumulativeWealth": 1.024724498839202,
      "drawdown": -0.04564337983371214,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.036203469996888726,
      "cumulativeWealth": 1.0618230814880039,
      "drawdown": -0.011092358569189775,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0445224112610878,
      "cumulativeWealth": 1.1090980054085282,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.011371619476388872,
      "cumulativeWealth": 1.0964857649290005,
      "drawdown": -0.011371619476388872,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02320317028144414,
      "cumulativeWealth": 1.1219277108438277,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02721707924825001,
      "cumulativeWealth": 1.152463306260672,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03366151832439024,
      "cumulativeWealth": 1.113669641558791,
      "drawdown": -0.03366151832439024,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0218860250512547,
      "cumulativeWealth": 1.1380434432327686,
      "drawdown": -0.01251221010644632,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025374434173892402,
      "cumulativeWealth": 1.1669206516701083,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.008444452723259666,
      "cumulativeWealth": 1.1767746579449319,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016564165890910143,
      "cumulativeWealth": 1.1962669485953508,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0262740411886091,
      "cumulativeWealth": 1.2276977156753168,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.010298762908239167,
      "cumulativeWealth": 1.21505394797859,
      "drawdown": -0.010298762908239056,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025891534136362138,
      "cumulativeWealth": 1.2465135587501992,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022147716854937105,
      "cumulativeWealth": 1.2189061293951597,
      "drawdown": -0.022147716854937105,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01899542336131277,
      "cumulativeWealth": 1.2420597673607199,
      "drawdown": -0.0035729987517704176,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.002941259963483378,
      "cumulativeWealth": 1.2384065466947283,
      "drawdown": -0.00650374959707567,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.017649311768246245,
      "cumulativeWealth": 1.2165495234562758,
      "drawdown": -0.024038274661020487,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0028328709554585885,
      "cumulativeWealth": 1.219995851267152,
      "drawdown": -0.021273501035668496,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016573643918537995,
      "cumulativeWealth": 1.2402156280881476,
      "drawdown": -0.005052436548196204,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.038937956179563304,
      "cumulativeWealth": 1.2885070898678535,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0021596342237941712,
      "cumulativeWealth": 1.2912897938767336,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.023677995162876053,
      "cumulativeWealth": 1.3218649473700181,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06420611577710855,
      "cumulativeWealth": 1.406736761222559,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0438720023308008,
      "cumulativeWealth": 1.4684531196897384,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0005256256979137008,
      "cumulativeWealth": 1.4676812629938478,
      "drawdown": -0.0005256256979137008,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.019311225063592063,
      "cumulativeWealth": 1.496023986185139,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.07604029379500354,
      "cumulativeWealth": 1.6097820896190294,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.05724479266495486,
      "cumulativeWealth": 1.7019337315750285,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.07289478683725459,
      "cumulativeWealth": 1.5778716350007336,
      "drawdown": -0.07289478683725459,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.08482847471674959,
      "cumulativeWealth": 1.7117200790966696,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06520334088828927,
      "cumulativeWealth": 1.8233299469193391,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.02181115884288376,
      "cumulativeWealth": 1.7835610078240947,
      "drawdown": -0.02181115884288376,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.04612361810298138,
      "cumulativeWealth": 1.7012967210358476,
      "drawdown": -0.06692876738501241,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04959272432094197,
      "cumulativeWealth": 1.785668660310301,
      "drawdown": -0.0206552229741358,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.004965604619231567,
      "cumulativeWealth": 1.776801735762247,
      "drawdown": -0.025518261922755858,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022859378232973793,
      "cumulativeWealth": 1.7361851528394534,
      "drawdown": -0.047794308554589215,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016615152762244012,
      "cumulativeWealth": 1.016615152762244,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.009826579973707839,
      "cumulativeWealth": 1.0266050028633453,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.010552084910974813,
      "cumulativeWealth": 1.0374378260235908,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.011417240194742329,
      "cumulativeWealth": 1.0492825028704134,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03995056587686363,
      "cumulativeWealth": 1.0073630731160486,
      "drawdown": -0.03995056587686363,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04422260504024256,
      "cumulativeWealth": 1.0519112924305845,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.016192576076234033,
      "cumulativeWealth": 1.0348781388024526,
      "drawdown": -0.016192576076234033,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.026092716277952954,
      "cumulativeWealth": 1.061880920460481,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03526920103619724,
      "cumulativeWealth": 1.0244292288002583,
      "drawdown": -0.03526920103619713,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0033981828700231365,
      "cumulativeWealth": 1.0279104266571184,
      "drawdown": -0.031990869360974616,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.020738804142486966,
      "cumulativeWealth": 1.0492280596715806,
      "drawdown": -0.011915517592512748,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.022489218558615187,
      "cumulativeWealth": 1.0256317405197948,
      "drawdown": -0.03413676547175082,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0012605528306828262,
      "cumulativeWealth": 1.0243388775260445,
      "drawdown": -0.03535428710608779,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.025658674879620702,
      "cumulativeWealth": 0.9980556993010481,
      "drawdown": -0.06010581782725266,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016153612828191832,
      "cumulativeWealth": 1.0141779046485275,
      "drawdown": -0.044923131108963954,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.018383048475441255,
      "cumulativeWealth": 0.9955342230646522,
      "drawdown": -0.06248035548756059,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03155831882781168,
      "cumulativeWealth": 0.9641168366491801,
      "drawdown": -0.09206689933642076,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.012670454972260492,
      "cumulativeWealth": 0.9763326356159417,
      "drawdown": -0.08056297386663813,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0207726828351682,
      "cumulativeWealth": 0.9966136837972156,
      "drawdown": -0.0614638001358595,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.020632842555038833,
      "cumulativeWealth": 0.9760507105712304,
      "drawdown": -0.0808284697798608,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04439219539735628,
      "cumulativeWealth": 1.019379744432637,
      "drawdown": -0.04002442760664138,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03111878268558943,
      "cumulativeWealth": 0.9876578876915459,
      "drawdown": -0.06989769882742458,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02560116713216165,
      "cumulativeWealth": 1.0129430823437349,
      "drawdown": -0.046085994365097416,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.008727238398791526,
      "cumulativeWealth": 1.0217832781077554,
      "drawdown": -0.03776095942597546,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.006973667615608248,
      "cumulativeWealth": 1.0289088550644654,
      "drawdown": -0.03105062419025051,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02207380008583293,
      "cumulativeWealth": 1.0516207834377016,
      "drawdown": -0.009662229375333564,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02102709774494471,
      "cumulativeWealth": 1.0737333164416616,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.017079490325440316,
      "cumulativeWealth": 1.0553944986513932,
      "drawdown": -0.017079490325440316,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.023579812412369505,
      "cumulativeWealth": 1.0305084943521465,
      "drawdown": -0.040256571559837195,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.005612758695966891,
      "cumulativeWealth": 1.0247244988392037,
      "drawdown": -0.04564337983371192,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.036203469996888726,
      "cumulativeWealth": 1.0618230814880056,
      "drawdown": -0.011092358569189553,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0445224112610878,
      "cumulativeWealth": 1.1090980054085302,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.011371619476388872,
      "cumulativeWealth": 1.0964857649290025,
      "drawdown": -0.011371619476388872,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02320317028144392,
      "cumulativeWealth": 1.1219277108438295,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.027217079248249343,
      "cumulativeWealth": 1.152463306260673,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03366151832439013,
      "cumulativeWealth": 1.1136696415587921,
      "drawdown": -0.03366151832439024,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.021886025051255364,
      "cumulativeWealth": 1.1380434432327704,
      "drawdown": -0.012512210106445765,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.025374434173891958,
      "cumulativeWealth": 1.1669206516701096,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.008444452723259444,
      "cumulativeWealth": 1.176774657944933,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0165641658909097,
      "cumulativeWealth": 1.1962669485953514,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0262740411886091,
      "cumulativeWealth": 1.2276977156753175,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.007582366836595189,
      "cumulativeWealth": 1.2183888612306173,
      "drawdown": -0.007582366836595189,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.024862775996419284,
      "cumulativeWealth": 1.2486813905639265,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.022147716854936772,
      "cumulativeWealth": 1.2210259486836879,
      "drawdown": -0.022147716854936772,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01899542336131299,
      "cumulativeWealth": 1.2442198535140834,
      "drawdown": -0.0035729987517697515,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.002941259963483045,
      "cumulativeWealth": 1.2405602794731716,
      "drawdown": -0.006503749597074782,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.017649311768246356,
      "cumulativeWealth": 1.2186652443334467,
      "drawdown": -0.02403827466101982,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0028328709554592546,
      "cumulativeWealth": 1.2221175657085466,
      "drawdown": -0.021273501035667053,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016573643918537995,
      "cumulativeWealth": 1.2423725070691904,
      "drawdown": -0.005052436548194872,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.038937956179563304,
      "cumulativeWealth": 1.2907479533081447,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0021596342237943933,
      "cumulativeWealth": 1.2935354967624015,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.023677995162876275,
      "cumulativeWealth": 1.3241638239977505,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.06420611577710811,
      "cumulativeWealth": 1.4091832397892081,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.043872002330800575,
      "cumulativeWealth": 1.4710069301697655,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0005256256979138119,
      "cumulativeWealth": 1.470233731125459,
      "drawdown": -0.0005256256979138119,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01931122506359162,
      "cumulativeWealth": 1.4986257456033067,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.07604029379500377,
      "cumulativeWealth": 1.6125816875877388,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.057244792664955524,
      "cumulativeWealth": 1.704893591949003,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.07289478683725459,
      "cumulativeWealth": 1.580615736983679,
      "drawdown": -0.07289478683725459,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.08482847471674937,
      "cumulativeWealth": 1.7146969590652952,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.06520334088828905,
      "cumulativeWealth": 1.8265009294073422,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.006918839071396676,
      "cumulativeWealth": 1.8138636634130163,
      "drawdown": -0.006918839071396676,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.024452942397636512,
      "cumulativeWealth": 1.7695093597344118,
      "drawdown": -0.031202595495761876,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04505228744287226,
      "cumulativeWealth": 1.8492298040420194,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.004965604619231345,
      "cumulativeWealth": 1.8400472599850481,
      "drawdown": -0.004965604619231345,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.015022397565319645,
      "cumulativeWealth": 1.8124053385065757,
      "drawdown": -0.019913406897808628,
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
      "cagr": 0.1232857371879319,
      "annVol": 0.10945801252819744,
      "sharpeRf0": 1.1187169305226634,
      "maxDrawdown": -0.13555290624837346,
      "calmar": 0.9095027218526437,
      "cumulativeReturn": 2.0167294806097353,
      "terminalWealth": 3.0167294806097353,
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
      "cagr": 0.11786004348543755,
      "annVol": 0.10480120326978411,
      "sharpeRf0": 1.1173738851863855,
      "maxDrawdown": -0.13041354468548272,
      "calmar": 0.9037408174870153,
      "cumulativeReturn": 1.8811422206880768,
      "terminalWealth": 2.881142220688077,
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
      "cagr": 0.16850201395987252,
      "annVol": 0.17695046922540442,
      "sharpeRf0": 0.9700386259343138,
      "maxDrawdown": -0.2197163487735896,
      "calmar": 0.7669070367335672,
      "cumulativeReturn": 3.388518216607457,
      "terminalWealth": 4.388518216607457,
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
      "cagr": 0.09507252630642915,
      "annVol": 0.11419776213727156,
      "sharpeRf0": 0.8537770742223546,
      "maxDrawdown": -0.21630713326662188,
      "calmar": 0.4395256174434248,
      "cumulativeReturn": 1.3692609765831163,
      "terminalWealth": 2.3692609765831163,
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
      "cagr": 0.023711783664756236,
      "annVol": 0.0029585821559736957,
      "sharpeRf0": 7.934137831847204,
      "maxDrawdown": -0.004474473916886934,
      "calmar": 5.299345600220517,
      "cumulativeReturn": 0.24929151555965667,
      "terminalWealth": 1.2492915155596567,
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
      "cagr": 0.10566955265912048,
      "annVol": 0.11449758021111908,
      "sharpeRf0": 0.9360899272018925,
      "maxDrawdown": -0.1113595054528026,
      "calmar": 0.948904651017028,
      "cumulativeReturn": 0.7361851528394567,
      "terminalWealth": 1.7361851528394567,
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
      "cagr": 0.11435306444672899,
      "annVol": 0.107244814859456,
      "sharpeRf0": 1.0649240193137355,
      "maxDrawdown": -0.11135950545280282,
      "calmar": 1.0268819350602714,
      "cumulativeReturn": 0.8124053385065764,
      "terminalWealth": 1.8124053385065764,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    }
  ],
  "coreCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.10335505381034582,
      "monthsObserved": 8,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2018",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.00259235275159031,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2019",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.14337035454067282,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2020",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.28251729897677547,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.13743427614259995,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": -0.08082846977986258,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.13631186719738642,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.09900669142956753,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.22734962939885217,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.16053296529471095,
      "monthsObserved": 10,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2017",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09854747482092652,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.013957968498913287,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12912027545616023,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.26532210149194024,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12959698204983727,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.07432818248006023,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12076871770440833,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09004508583133952,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.22007818187205785,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.16159818836228457,
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
      "annualReturn": 0.18028840050032602,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.29364449773444146,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.14662934821570284,
      "monthsObserved": 10,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.08858915712864146,
      "monthsObserved": 8,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2018",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.02331264391795196,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2019",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.2193149110724637,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2020",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14655341613217576,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2021",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.15767548882612115,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2022",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.15911354235471542,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2023",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.17524132372685064,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2024",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.1485155943716958,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2025",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.13559262138024875,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2026",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.0682488787660469,
      "monthsObserved": 10,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2017",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.005372674591720639,
      "monthsObserved": 8,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2018",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.015595505798392084,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2019",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.020319215470188112,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2020",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.00398593047198692,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": -0.0009833609950604671,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2022",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.014045412487674103,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2023",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.044626829391737344,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2024",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.051930642059933474,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2025",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.041470974223235535,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2026",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.03021216006417826,
      "monthsObserved": 10,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.061880920460482436,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": -0.08082846977986158,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.13631186719738397,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.09900669142956753,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.22734962939885128,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.16053296529471095,
      "monthsObserved": 10,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.06188092046048199,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": -0.08082846977986058,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.13631186719738553,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.10091799167372106,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.22734962939885173,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.20937822122957583,
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
      "netReturn": 0.02966881241373498,
      "cumulativeWealth": 1.029668812413735,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004776271829869061,
      "cumulativeWealth": 1.0247508342709086,
      "drawdown": -0.00477627182986895,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02066728340076729,
      "cumulativeWealth": 1.0459296501779582,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01009871918991423,
      "cumulativeWealth": 1.0564922000075108,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0023368989764458448,
      "cumulativeWealth": 1.0589611155483314,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019897120017154046,
      "cumulativeWealth": 1.0800313919578959,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008995858911613253,
      "cumulativeWealth": 1.0897472019800625,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012487163817037628,
      "cumulativeWealth": 1.1033550538103458,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.053787166487389904,
      "cumulativeWealth": 1.162701395784346,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03821238326356413,
      "cumulativeWealth": 1.1182718044275535,
      "drawdown": -0.03821238326356424,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.006032171598255087,
      "cumulativeWealth": 1.111526197009756,
      "drawdown": -0.0440140512087952,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006470836491482945,
      "cumulativeWealth": 1.118718701286606,
      "drawdown": -0.037828022446012244,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009902121336594849,
      "cumulativeWealth": 1.1297963896082637,
      "drawdown": -0.028300478777601334,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.002696291884927704,
      "cumulativeWealth": 1.1267501287713424,
      "drawdown": -0.030920464311261275,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008622497585023314,
      "cumulativeWealth": 1.136465529035598,
      "drawdown": -0.022564578355089626,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.024559071079757633,
      "cumulativeWealth": 1.1643760667428777,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.003183458189032984,
      "cumulativeWealth": 1.1606693242180912,
      "drawdown": -0.003183458189032873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.036326347559359484,
      "cumulativeWealth": 1.1185064469450579,
      "drawdown": -0.039394162339776995,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0036747553951714806,
      "cumulativeWealth": 1.1226166845455032,
      "drawdown": -0.03586417085520188,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.014609924697557175,
      "cumulativeWealth": 1.1062153393200722,
      "drawdown": -0.04995012271722421,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019987681153558423,
      "cumulativeWealth": 1.1283260188095772,
      "drawdown": -0.030960828690118847,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0026671341744177735,
      "cumulativeWealth": 1.131335415694229,
      "drawdown": -0.02837627119996866,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.017334356812669816,
      "cumulativeWealth": 1.1509463874646828,
      "drawdown": -0.011533798797292327,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01707969092085948,
      "cumulativeWealth": 1.1706041960290594,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.036472970508772184,
      "cumulativeWealth": 1.1279087837098465,
      "drawdown": -0.036472970508772296,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.034180705621476015,
      "cumulativeWealth": 1.1664615018137099,
      "drawdown": -0.003538936755397293,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005419983824476393,
      "cumulativeWealth": 1.1727837042854146,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.030780980303144245,
      "cumulativeWealth": 1.2088831363868724,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0067059507559928955,
      "cumulativeWealth": 1.2007764256045117,
      "drawdown": -0.0067059507559930065,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01618890722276145,
      "cumulativeWealth": 1.2202156837539022,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009057112605909579,
      "cumulativeWealth": 1.2312673146051583,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02724551339391401,
      "cumulativeWealth": 1.2648138247167215,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002139019321896196,
      "cumulativeWealth": 1.267519285926392,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010709541528700073,
      "cumulativeWealth": 1.253944735495335,
      "drawdown": -0.010709541528700073,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02227096812687135,
      "cumulativeWealth": 1.2260181722582604,
      "drawdown": -0.032741997797532285,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06062897639550857,
      "cumulativeWealth": 1.300350399084571,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021642833515845172,
      "cumulativeWealth": 1.3284936662842213,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02526496626459629,
      "cumulativeWealth": 1.362058013945622,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.058765578238074045,
      "cumulativeWealth": 1.442100140728939,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04375056018445189,
      "cumulativeWealth": 1.5051928297279071,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031136446550731778,
      "cumulativeWealth": 1.4583264736365393,
      "drawdown": -0.03113644655073189,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01722637441173913,
      "cumulativeWealth": 1.433204795787125,
      "drawdown": -0.04782645287633702,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07480599700094603,
      "cumulativeWealth": 1.540417109442518,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05305608477124357,
      "cumulativeWealth": 1.6221456101841742,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005008247859362713,
      "cumulativeWealth": 1.6302697174639538,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.013774149318035889,
      "cumulativeWealth": 1.6527252959809744,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01210729454708015,
      "cumulativeWealth": 1.6727353279448263,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.038754935221479325,
      "cumulativeWealth": 1.737562077222008,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016615152762243568,
      "cumulativeWealth": 1.766431936568933,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00982657997370806,
      "cumulativeWealth": 1.7837899212617396,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010552084910975479,
      "cumulativeWealth": 1.8026126239742357,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.011417240194742329,
      "cumulativeWealth": 1.8231934852802243,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03995056587686374,
      "cumulativeWealth": 1.7503558738402678,
      "drawdown": -0.03995056587686374,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04422260504024278,
      "cumulativeWealth": 1.827761170328975,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.016192576076234366,
      "cumulativeWealth": 1.7981650085292358,
      "drawdown": -0.016192576076234366,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026092716277953176,
      "cumulativeWealth": 1.8450840179177324,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03526920103619735,
      "cumulativeWealth": 1.780009378761117,
      "drawdown": -0.03526920103619735,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0033981828700238026,
      "cumulativeWealth": 1.7860581761405048,
      "drawdown": -0.03199086936097417,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020738804142486078,
      "cumulativeWealth": 1.8230988868425686,
      "drawdown": -0.011915517592513192,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02248921855861552,
      "cumulativeWealth": 1.7820988175223975,
      "drawdown": -0.034136765471751596,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0012605528306832703,
      "cumulativeWealth": 1.7798523878134123,
      "drawdown": -0.03535428710608912,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.025658674879620036,
      "cumulativeWealth": 1.7341837340607926,
      "drawdown": -0.060105817827253216,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016153612828192054,
      "cumulativeWealth": 1.762197066673759,
      "drawdown": -0.04492313110896451,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.018383048475441477,
      "cumulativeWealth": 1.7298025125738146,
      "drawdown": -0.06248035548756126,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031558318827811904,
      "cumulativeWealth": 1.67521285337286,
      "drawdown": -0.09206689933642165,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01267045497226027,
      "cumulativeWealth": 1.6964385624004725,
      "drawdown": -0.08056297386663913,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020772682835167977,
      "cumulativeWealth": 1.731678142606566,
      "drawdown": -0.061463800135860724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.020632842555039388,
      "cumulativeWealth": 1.6959487001341615,
      "drawdown": -0.08082846977986258,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.044392195397356504,
      "cumulativeWealth": 1.77123558621441,
      "drawdown": -0.04002442760664304,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03111878268558932,
      "cumulativeWealth": 1.7161168909220215,
      "drawdown": -0.06989769882742614,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02560116713216165,
      "cumulativeWealth": 1.7600514862648418,
      "drawdown": -0.04608599436509886,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00872723839879197,
      "cumulativeWealth": 1.775411875179623,
      "drawdown": -0.03776095942597657,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006973667615607804,
      "cumulativeWealth": 1.7877930074779287,
      "drawdown": -0.031050624190251952,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02207380008583293,
      "cumulativeWealth": 1.8272563929198464,
      "drawdown": -0.009662229375335007,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02102709774494449,
      "cumulativeWealth": 1.8656782916988468,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01707949032544087,
      "cumulativeWealth": 1.8338134573653913,
      "drawdown": -0.01707949032544087,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.023579812412369394,
      "cumulativeWealth": 1.7905724800414369,
      "drawdown": -0.04025657155983742,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.005612758695967002,
      "cumulativeWealth": 1.780522428783325,
      "drawdown": -0.04564337983371225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.036203469996888726,
      "cumulativeWealth": 1.8449835191125696,
      "drawdown": -0.011092358569189886,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0445224112610878,
      "cumulativeWealth": 1.9271266341204285,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.011371619476388872,
      "cumulativeWealth": 1.9052120833543968,
      "drawdown": -0.011371619476388872,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02320317028144414,
      "cumulativeWealth": 1.9494190437467338,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02721707924825001,
      "cumulativeWealth": 2.0024765363484365,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03366151832439024,
      "cumulativeWealth": 1.935070135725982,
      "drawdown": -0.03366151832439024,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0218860250512547,
      "cumulativeWealth": 1.9774211291924157,
      "drawdown": -0.01251221010644643,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025374434173892402,
      "cumulativeWealth": 2.027597071469173,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008444452723259666,
      "cumulativeWealth": 2.0447190190810143,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016564165890910143,
      "cumulativeWealth": 2.0785880841133713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0262740411886091,
      "cumulativeWealth": 2.133200993049518,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010298762908239167,
      "cumulativeWealth": 2.111231661786481,
      "drawdown": -0.010298762908239167,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025891534136362138,
      "cumulativeWealth": 2.165894688427394,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022147716854937105,
      "cumulativeWealth": 2.117925066130492,
      "drawdown": -0.022147716854937105,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01899542336131277,
      "cumulativeWealth": 2.158155949409177,
      "drawdown": -0.0035729987517703066,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.002941259963483378,
      "cumulativeWealth": 2.1518082517202264,
      "drawdown": -0.006503749597075448,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017649311768246245,
      "cumulativeWealth": 2.113830317020131,
      "drawdown": -0.024038274661020376,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0028328709554585885,
      "cumulativeWealth": 2.1198185255299853,
      "drawdown": -0.021273501035668274,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016573643918537995,
      "cumulativeWealth": 2.1549516429440394,
      "drawdown": -0.005052436548196204,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.038937956179563304,
      "cumulativeWealth": 2.238861055586072,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0021596342237941712,
      "cumulativeWealth": 2.2436961765440357,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.023677995162876053,
      "cumulativeWealth": 2.296822403759209,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06420611577710855,
      "cumulativeWealth": 2.4442924489344295,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0438720023308008,
      "cumulativeWealth": 2.5515284529512394,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0005256256979137008,
      "cumulativeWealth": 2.55018730402741,
      "drawdown": -0.0005256256979138119,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019311225063592063,
      "cumulativeWealth": 2.5994345450097986,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07604029379500354,
      "cumulativeWealth": 2.7970963115132252,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05724479266495486,
      "cumulativeWealth": 2.9572155099297097,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.07289478683725459,
      "cumulativeWealth": 2.7416499157015606,
      "drawdown": -0.07289478683725448,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.08482847471674959,
      "cumulativeWealth": 2.974219896257829,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06520334088828927,
      "cumulativeWealth": 3.1681489700302605,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02181115884288376,
      "cumulativeWealth": 3.099047969607012,
      "drawdown": -0.02181115884288365,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.04612361810298138,
      "cumulativeWealth": 2.9561086645740384,
      "drawdown": -0.06692876738501241,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04959272432094197,
      "cumulativeWealth": 3.102710146639007,
      "drawdown": -0.0206552229741358,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004965604619231567,
      "cumulativeWealth": 3.0873033148027194,
      "drawdown": -0.025518261922755747,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022859378232973793,
      "cumulativeWealth": 3.0167294806097305,
      "drawdown": -0.047794308554589104,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014046085117092488,
      "cumulativeWealth": 1.0140460851170925,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019343459879481273,
      "cumulativeWealth": 1.0336612448805,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.003742059931240549,
      "cumulativeWealth": 1.0297932225535564,
      "drawdown": -0.00374205993124066,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014441710000565378,
      "cumulativeWealth": 1.0446651976342225,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02232038676682646,
      "cumulativeWealth": 1.0679825288872615,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00011917877866185478,
      "cumulativeWealth": 1.0678552480338366,
      "drawdown": -0.00011917877866185478,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.029434735173379467,
      "cumulativeWealth": 1.0364232116044572,
      "drawdown": -0.029550405956253134,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00202177622409061,
      "cumulativeWealth": 1.0385186274117746,
      "drawdown": -0.027588374040337094,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05679243286817104,
      "cumulativeWealth": 1.0974986268414029,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03206974853333733,
      "cumulativeWealth": 1.062302121862916,
      "drawdown": -0.03206974853333733,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02204595240167828,
      "cumulativeWealth": 1.0388826598481244,
      "drawdown": -0.05340869278531579,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013531249474330043,
      "cumulativeWealth": 1.052940040293085,
      "drawdown": -0.04060012965716164,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01981747292683611,
      "cumulativeWealth": 1.073806651035175,
      "drawdown": -0.021587248700632444,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03478752402904606,
      "cumulativeWealth": 1.1111617257106106,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011154028047661857,
      "cumulativeWealth": 1.112401118616017,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.027552972470870296,
      "cumulativeWealth": 1.1430510760138095,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005989408252593642,
      "cumulativeWealth": 1.1362048764659964,
      "drawdown": -0.005989408252593531,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014329270101680835,
      "cumulativeWealth": 1.1199238899002684,
      "drawdown": -0.020232854505673692,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014569005017772474,
      "cumulativeWealth": 1.103607713128788,
      "drawdown": -0.03450708696462923,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01524505385636199,
      "cumulativeWealth": 1.0867831541058433,
      "drawdown": -0.049226078421789166,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01331746745579987,
      "cumulativeWealth": 1.1012563533921593,
      "drawdown": -0.036564177663348185,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008182233398302374,
      "cumulativeWealth": 1.1102670899069773,
      "drawdown": -0.028681120900704293,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.034869229883528696,
      "cumulativeWealth": 1.14898124829706,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.043028587360762316,
      "cumulativeWealth": 1.198420288315288,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.015666105256886387,
      "cumulativeWealth": 1.1796457099365525,
      "drawdown": -0.015666105256886387,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0055757858109792835,
      "cumulativeWealth": 1.1862231617479992,
      "drawdown": -0.010177670293311847,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03221939216612579,
      "cumulativeWealth": 1.2244425509928998,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0488974567825291,
      "cumulativeWealth": 1.2843146777127648,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014243151445162416,
      "cumulativeWealth": 1.266021989254857,
      "drawdown": -0.014243151445162305,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01290569138853681,
      "cumulativeWealth": 1.2496831001704323,
      "drawdown": -0.0269650251167477,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02059841178676014,
      "cumulativeWealth": 1.275424587270698,
      "drawdown": -0.006922050021182624,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009214292553348047,
      "cumulativeWealth": 1.2871767225475435,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02880554576164185,
      "cumulativeWealth": 1.324254550532207,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009449329592674971,
      "cumulativeWealth": 1.3367678682447854,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.017952646477450873,
      "cumulativeWealth": 1.3127693472837711,
      "drawdown": -0.017952646477450873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.057403420541610295,
      "cumulativeWealth": 1.3881267982000367,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04271650822211681,
      "cumulativeWealth": 1.4474227279886893,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.007522482330337477,
      "cumulativeWealth": 1.4365345160928655,
      "drawdown": -0.007522482330337477,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.050964400479760696,
      "cumulativeWealth": 1.5097466364740215,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04153943029788909,
      "cumulativeWealth": 1.5724606516473065,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.05012129539591581,
      "cumulativeWealth": 1.4936468868276376,
      "drawdown": -0.05012129539591581,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.04615781606089686,
      "cumulativeWealth": 1.4247034085655164,
      "drawdown": -0.09396562192319402,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.050836141822392156,
      "cumulativeWealth": 1.4971298330981984,
      "drawdown": -0.04790632978331877,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03597772714715086,
      "cumulativeWealth": 1.5509931617372648,
      "drawdown": -0.013652163497733572,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02893965322117875,
      "cumulativeWealth": 1.595878365986361,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020008297145784892,
      "cumulativeWealth": 1.6278091745415457,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01940550965179111,
      "cumulativeWealth": 1.6593976411893858,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01979899647893646,
      "cumulativeWealth": 1.69225204924445,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026417280219098283,
      "cumulativeWealth": 1.7369567458306838,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02094337262470991,
      "cumulativeWealth": 1.7733344781916194,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.021752626796494035,
      "cumulativeWealth": 1.8119091612810772,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02584306797264424,
      "cumulativeWealth": 1.8587344528963208,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.018974581967834303,
      "cumulativeWealth": 1.8234657436634019,
      "drawdown": -0.018974581967834303,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02979941837343092,
      "cumulativeWealth": 1.8778039622484468,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.003502614642665325,
      "cumulativeWealth": 1.8843811859026731,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02536026942565961,
      "cumulativeWealth": 1.9321696004778088,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.020821268194256115,
      "cumulativeWealth": 1.8919393790294716,
      "drawdown": -0.020821268194256115,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00500978347924752,
      "cumulativeWealth": 1.882461172384672,
      "drawdown": -0.02572674162808708,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03515169048857625,
      "cumulativeWealth": 1.9486328648731004,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02402406776786692,
      "cumulativeWealth": 1.9954469528735044,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02524214345924347,
      "cumulativeWealth": 1.945077594623761,
      "drawdown": -0.02524214345924347,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01041203438550431,
      "cumulativeWealth": 1.9653298094214577,
      "drawdown": -0.01509293113940069,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02202469219444425,
      "cumulativeWealth": 2.008615593534531,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01732243686251067,
      "cumulativeWealth": 2.0434097103345876,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0318688418366484,
      "cumulativeWealth": 2.108530811200712,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.006637625455511609,
      "cumulativeWealth": 2.1225264489868683,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.048358272126353574,
      "cumulativeWealth": 2.0198847373713784,
      "drawdown": -0.048358272126353574,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.06874512932022403,
      "cumulativeWealth": 1.8810274998888363,
      "drawdown": -0.11377900577554878,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02055843926289702,
      "cumulativeWealth": 1.91969848949714,
      "drawdown": -0.0955596852922812,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.037210336331408245,
      "cumulativeWealth": 1.991131115946225,
      "drawdown": -0.061905156990322174,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008603131043307899,
      "cumulativeWealth": 2.0082610778611185,
      "drawdown": -0.05383460412485852,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04209733175105157,
      "cumulativeWealth": 2.0928035106985625,
      "drawdown": -0.014003565563337594,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.006295887647126075,
      "cumulativeWealth": 2.079627454927693,
      "drawdown": -0.02021128833501784,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.023102227196154734,
      "cumulativeWealth": 2.1276714808747936,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.013807835692116632,
      "cumulativeWealth": 2.098292942660072,
      "drawdown": -0.013807835692116632,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01884749838434252,
      "cumulativeWealth": 2.1378405155067353,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.006471259022858611,
      "cumulativeWealth": 2.1240059957813298,
      "drawdown": -0.0064712590228585,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005450473527287114,
      "cumulativeWealth": 2.1124291573295246,
      "drawdown": -0.011886461124153258,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.009693012516600819,
      "cumulativeWealth": 2.0919533550670972,
      "drawdown": -0.02146425802429952,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03599343155647805,
      "cumulativeWealth": 2.1672499349720495,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026368099624281438,
      "cumulativeWealth": 2.22439619716811,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028417069852364252,
      "cumulativeWealth": 2.2876070192823694,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.039866848646967545,
      "cumulativeWealth": 2.3788067020838404,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.008132147989590499,
      "cumulativeWealth": 2.3594618939438647,
      "drawdown": -0.008132147989590499,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014628273948904313,
      "cumulativeWealth": 2.393976748900476,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03381967873273051,
      "cumulativeWealth": 2.474940273441917,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005392098741526685,
      "cumulativeWealth": 2.461595151108137,
      "drawdown": -0.005392098741526574,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00947569531297976,
      "cumulativeWealth": 2.438269825472328,
      "drawdown": -0.014816700169734243,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.012761077179913372,
      "cumulativeWealth": 2.469384774900634,
      "drawdown": -0.00224470004423849,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03728526441548996,
      "cumulativeWealth": 2.561456439176389,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03685324669397416,
      "cumulativeWealth": 2.6558544252252254,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02985044556275307,
      "cumulativeWealth": 2.735132863168008,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.001127827099173695,
      "cumulativeWealth": 2.7382176201309294,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0027298641503501475,
      "cumulativeWealth": 2.745692582247982,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0026755029549154763,
      "cumulativeWealth": 2.738346473630888,
      "drawdown": -0.0026755029549154763,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.030012134899736087,
      "cumulativeWealth": 2.656162849862061,
      "drawdown": -0.03260734029904411,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02151169649968354,
      "cumulativeWealth": 2.5990242807820936,
      "drawdown": -0.05341759759055276,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022327477882753355,
      "cumulativeWealth": 2.6570539379279947,
      "drawdown": -0.03228279993655225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03412322017460956,
      "cumulativeWealth": 2.747721174467725,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.018454828442909355,
      "cumulativeWealth": 2.7984298973514763,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.07861168329297641,
      "cumulativeWealth": 3.018419182159667,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.059398213507480424,
      "cumulativeWealth": 3.1977078891966615,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.025710211213954004,
      "cumulativeWealth": 3.2799216344284345,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0029272026723734523,
      "cumulativeWealth": 3.289522629801909,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06919299825862879,
      "cumulativeWealth": 3.5171345633975126,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0598790519708563,
      "cumulativeWealth": 3.7277372467076875,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.026931766905137433,
      "cumulativeWealth": 3.627342696095757,
      "drawdown": -0.026931766905137433,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06367070260993724,
      "cumulativeWealth": 3.858298154163198,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.08058149853380048,
      "cumulativeWealth": 4.169205601215865,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01306968374184736,
      "cumulativeWealth": 4.223695799878495,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.12497221530746827,
      "cumulativeWealth": 3.6958511789828306,
      "drawdown": -0.12497221530746827,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009710283287098331,
      "cumulativeWealth": 3.7317389409177104,
      "drawdown": -0.11647544763402162,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012086432335053465,
      "cumulativeWealth": 3.6866355307162246,
      "drawdown": -0.1271541073525514,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03644156793638398,
      "cumulativeWealth": 3.5522887515669423,
      "drawdown": -0.1589619802474571,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02160198440322314,
      "cumulativeWealth": 1.0216019844032231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007014777729357435,
      "cumulativeWealth": 1.0287682952516823,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008247768416805634,
      "cumulativeWealth": 1.03725333790547,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012006018617962022,
      "cumulativeWealth": 1.0497066207919064,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012075560710917754,
      "cumulativeWealth": 1.0623824168199314,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009607285758660211,
      "cumulativeWealth": 1.0725890282832966,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010488457013361097,
      "cumulativeWealth": 1.0613392243671445,
      "drawdown": -0.010488457013361097,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.006976297809900833,
      "cumulativeWealth": 1.0687434428736589,
      "drawdown": -0.003585329803151849,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05505056216444326,
      "cumulativeWealth": 1.1275783702134163,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.035380056699288454,
      "cumulativeWealth": 1.0876845835423743,
      "drawdown": -0.035380056699288565,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014242941379430052,
      "cumulativeWealth": 1.0721927557796704,
      "drawdown": -0.049119082005149695,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0097962222292991,
      "cumulativeWealth": 1.0826961942879327,
      "drawdown": -0.039804041218872266,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014610154676635512,
      "cumulativeWealth": 1.0985145531542841,
      "drawdown": -0.025775429741199507,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01579160466804108,
      "cumulativeWealth": 1.1158618606997863,
      "drawdown": -0.010390860469780439,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.004595268403582375,
      "cumulativeWealth": 1.1209895454510226,
      "drawdown": -0.005843340859000956,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02579577985221193,
      "cumulativeWealth": 1.1499063449821083,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004828480576153926,
      "cumulativeWealth": 1.1443540445309661,
      "drawdown": -0.004828480576153815,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.025571073419487167,
      "cumulativeWealth": 1.1150916832403777,
      "drawdown": -0.030276084564323624,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00566448800314634,
      "cumulativeWealth": 1.1087752597782543,
      "drawdown": -0.03576907404967311,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015174343430734316,
      "cumulativeWealth": 1.0919503231988774,
      "drawdown": -0.05040064526657839,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016396384277937992,
      "cumulativeWealth": 1.1098543603104647,
      "drawdown": -0.03483064933628732,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0051689945670507775,
      "cumulativeWealth": 1.115591191469127,
      "drawdown": -0.029841694206422686,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02583324567034273,
      "cumulativeWealth": 1.1444105327860192,
      "drawdown": -0.004779356353733832,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02980325981098253,
      "cumulativeWealth": 1.178517697225066,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.026311105369007604,
      "cumulativeWealth": 1.147509593914137,
      "drawdown": -0.026311105369007604,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019537451582965604,
      "cumulativeWealth": 1.1699290070462232,
      "drawdown": -0.00728770573328319,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0185256116391721,
      "cumulativeWealth": 1.1916026574761638,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03960193671394796,
      "cumulativeWealth": 1.238792430505707,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.01070787409519458,
      "cumulativeWealth": 1.2255275971297719,
      "drawdown": -0.01070787409519447,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0014079496975636374,
      "cumulativeWealth": 1.2272530783395066,
      "drawdown": -0.009315000545724761,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014532559220880481,
      "cumulativeWealth": 1.2450882063794833,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018002973711423342,
      "cumulativeWealth": 1.2675034966273364,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015244461632512474,
      "cumulativeWealth": 1.2868259050507473,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008561288436669257,
      "cumulativeWealth": 1.2857242162766556,
      "drawdown": -0.0008561288436669257,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.020356689446182186,
      "cumulativeWealth": 1.2595511276924758,
      "drawdown": -0.021195390340852605,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.058874342458671736,
      "cumulativeWealth": 1.3337063721284488,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03192162595126358,
      "cumulativeWealth": 1.37628044806835,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008493900360767137,
      "cumulativeWealth": 1.3879704370627144,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0545956893931665,
      "cumulativeWealth": 1.463747639931488,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04238175667685584,
      "cumulativeWealth": 1.5257838362433862,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.040874728616284606,
      "cumulativeWealth": 1.4634178360098242,
      "drawdown": -0.040874728616284606,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.03193804175983206,
      "cumulativeWealth": 1.4166791360512594,
      "drawdown": -0.07150731158664791,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0625547907614219,
      "cumulativeWealth": 1.505299202983018,
      "drawdown": -0.013425645739440606,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04424808229406807,
      "cumulativeWealth": 1.5719058059938056,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016737600254494778,
      "cumulativeWealth": 1.5982157370122494,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01666461764188143,
      "cumulativeWealth": 1.6248493911787962,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015500654894711863,
      "cumulativeWealth": 1.6500356208473415,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029024077924298508,
      "cumulativeWealth": 1.697926383284683,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.021209029692033088,
      "cumulativeWealth": 1.7339377543626542,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015183601379390232,
      "cumulativeWealth": 1.7602651740415718,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015905562813015806,
      "cumulativeWealth": 1.7882631823348543,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018376932972734128,
      "cumulativeWealth": 1.8211259749742301,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029694281094172492,
      "cumulativeWealth": 1.7670489483654463,
      "drawdown": -0.029694281094172492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03675175895391014,
      "cumulativeWealth": 1.8319911053755336,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.006634643762097658,
      "cumulativeWealth": 1.8198364970160354,
      "drawdown": -0.006634643762097658,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025456598792678253,
      "cumulativeWealth": 1.8661633445888457,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.02828360389793394,
      "cumulativeWealth": 1.8133815197416512,
      "drawdown": -0.02828360389793394,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0010678804480168669,
      "cumulativeWealth": 1.811445045071924,
      "drawdown": -0.02932128083834873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.027675735944826974,
      "cumulativeWealth": 1.8615781198178998,
      "drawdown": -0.002457032919568003,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005172327484752604,
      "cumulativeWealth": 1.8625409889853146,
      "drawdown": -0.001941071028982777,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013569515710036728,
      "cumulativeWealth": 1.837267209774691,
      "drawdown": -0.015484247345197488,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00792552033676408,
      "cumulativeWealth": 1.8227059111395518,
      "drawdown": -0.02328704696472772,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018834380223191394,
      "cumulativeWealth": 1.8570354473050126,
      "drawdown": -0.004891263838345372,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008270547135516004,
      "cumulativeWealth": 1.8554995773850866,
      "drawdown": -0.005714273209084242,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0001592517788913117,
      "cumulativeWealth": 1.855204085776656,
      "drawdown": -0.005872614979801849,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009436319296912021,
      "cumulativeWealth": 1.8727103838909804,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014005854343243751,
      "cumulativeWealth": 1.8464814750271232,
      "drawdown": -0.014005854343243751,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.04445315586979748,
      "cumulativeWealth": 1.764399546207049,
      "drawdown": -0.05783640578683136,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03224825851832169,
      "cumulativeWealth": 1.8212983589027434,
      "drawdown": -0.027453270634093974,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0027819907376234188,
      "cumulativeWealth": 1.8263651940676595,
      "drawdown": -0.024747654641092076,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016902183836182028,
      "cumulativeWealth": 1.8572347543297953,
      "drawdown": -0.008263760213168103,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025058536764288153,
      "cumulativeWealth": 1.9037743397010822,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0001138282260353396,
      "cumulativeWealth": 1.903991042956942,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02237299531212411,
      "cumulativeWealth": 1.946589025635344,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.003263025631626393,
      "cumulativeWealth": 1.9529407955202347,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005275102754491723,
      "cumulativeWealth": 1.9539709918572155,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015271779333684399,
      "cumulativeWealth": 1.9241303780451515,
      "drawdown": -0.015271779333684399,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.005754689984129091,
      "cumulativeWealth": 1.9130576042304566,
      "drawdown": -0.020938584962242213,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.013018517203173374,
      "cumulativeWealth": 1.9379627775617925,
      "drawdown": -0.008192657087609856,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.039944053452017236,
      "cumulativeWealth": 2.0153728663367403,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007123773687343515,
      "cumulativeWealth": 2.029729926532136,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025589703803474917,
      "cumulativeWealth": 2.0816701141531424,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.033279606581785526,
      "cumulativeWealth": 2.1509472765852196,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.021152973720385493,
      "cumulativeWealth": 2.1054483453696777,
      "drawdown": -0.021152973720385493,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.017961333930505363,
      "cumulativeWealth": 2.1432650061742926,
      "drawdown": -0.003571575414495043,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02934985698570136,
      "cumulativeWealth": 2.2061695275879663,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.001261132312663893,
      "cumulativeWealth": 2.208951799266422,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0032963220427064677,
      "cumulativeWealth": 2.2162332157736198,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01925144295147474,
      "cumulativeWealth": 2.258898903094249,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.013132879911520678,
      "cumulativeWealth": 2.288564751120852,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.031088104384081605,
      "cumulativeWealth": 2.3597118909934265,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0035622471585392557,
      "cumulativeWealth": 2.3681177679720893,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00988168874105888,
      "cumulativeWealth": 2.3915187706573606,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00040024881452704886,
      "cumulativeWealth": 2.3905615681044856,
      "drawdown": -0.0004002488145271599,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010431936854904955,
      "cumulativeWealth": 2.365623380778257,
      "drawdown": -0.010828010299072655,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013849655857808951,
      "cumulativeWealth": 2.332860311065292,
      "drawdown": -0.0245277019406146,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.002690351999735774,
      "cumulativeWealth": 2.326584095662313,
      "drawdown": -0.02715206578838547,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.030347583456280303,
      "cumulativeWealth": 2.3971903006734796,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.017824991205731777,
      "cumulativeWealth": 2.43992019670145,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.020811145199942427,
      "cumulativeWealth": 2.4906977301912763,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0711190215338049,
      "cumulativeWealth": 2.6678337156989484,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05137458683157625,
      "cumulativeWealth": 2.804892570578331,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012334677626751889,
      "cumulativeWealth": 2.839490016214086,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.010897613566756892,
      "cumulativeWealth": 2.8704336811374516,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07233918779781323,
      "cumulativeWealth": 3.078078522258422,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.058301259677406625,
      "cumulativeWealth": 3.257534377492058,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.050207552740545225,
      "cumulativeWealth": 3.0939815484299866,
      "drawdown": -0.050207552740545225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07408957383307668,
      "cumulativeWealth": 3.323213322800567,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07262419660611741,
      "cumulativeWealth": 3.564559020519704,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004646288131409881,
      "cumulativeWealth": 3.5479970522489537,
      "drawdown": -0.00464628813140977,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.08572335899513661,
      "cumulativeWealth": 3.24385082722533,
      "drawdown": -0.08997135170106274,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029331280442253416,
      "cumulativeWealth": 3.338997125551512,
      "drawdown": -0.06327904620732183,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.008810621680379827,
      "cumulativeWealth": 3.309578485086402,
      "drawdown": -0.07153214015127374,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029889700590710055,
      "cumulativeWealth": 3.2106561750857137,
      "drawdown": -0.09928376649024939,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02160198440322314,
      "cumulativeWealth": 1.0216019844032231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007014777729357435,
      "cumulativeWealth": 1.0287682952516823,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.008247768416805634,
      "cumulativeWealth": 1.03725333790547,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012006018617962022,
      "cumulativeWealth": 1.0497066207919064,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012075560710917754,
      "cumulativeWealth": 1.0623824168199314,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.009607285758660211,
      "cumulativeWealth": 1.0725890282832966,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010488457013361097,
      "cumulativeWealth": 1.0613392243671445,
      "drawdown": -0.010488457013361097,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005501520604735965,
      "cumulativeWealth": 1.0619231223282914,
      "drawdown": -0.009944075199124658,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.056447992619993004,
      "cumulativeWealth": 1.1218665509004788,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0327315792174353,
      "cumulativeWealth": 1.085146087018289,
      "drawdown": -0.03273157921743519,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020478268134427213,
      "cumulativeWealth": 1.062924174483304,
      "drawdown": -0.052539561296184534,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012791885628952393,
      "cumulativeWealth": 1.076520978955543,
      "drawdown": -0.04041975572632828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01877645556399843,
      "cumulativeWealth": 1.0967342272806138,
      "drawdown": -0.02240223990963308,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.030987590480526572,
      "cumulativeWealth": 1.1307193783815621,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003757103541152107,
      "cumulativeWealth": 1.1349676081621287,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02579577985221193,
      "cumulativeWealth": 1.1642449827216705,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004828480576153926,
      "cumulativeWealth": 1.1586234484367144,
      "drawdown": -0.004828480576153815,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025571073419487167,
      "cumulativeWealth": 1.1289962031711998,
      "drawdown": -0.030276084564323624,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00566448800314634,
      "cumulativeWealth": 1.1226010177227388,
      "drawdown": -0.035769074049673,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015174343430734316,
      "cumulativeWealth": 1.105566284344122,
      "drawdown": -0.05040064526657828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016396384277937992,
      "cumulativeWealth": 1.1236935739869605,
      "drawdown": -0.0348306493362871,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0051689945670507775,
      "cumulativeWealth": 1.129501939965929,
      "drawdown": -0.029841694206422353,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02583324567034273,
      "cumulativeWealth": 1.1586806410661976,
      "drawdown": -0.004779356353733277,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02980325981098253,
      "cumulativeWealth": 1.1932131012498493,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.026311105369007604,
      "cumulativeWealth": 1.161818345615184,
      "drawdown": -0.026311105369007715,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019537451582965604,
      "cumulativeWealth": 1.184517315290842,
      "drawdown": -0.007287705733283301,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0185256116391721,
      "cumulativeWealth": 1.2064612230537948,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03960193671394796,
      "cumulativeWealth": 1.2542394240570034,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.01070787409519458,
      "cumulativeWealth": 1.2408091862189716,
      "drawdown": -0.01070787409519458,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0014079496975636374,
      "cumulativeWealth": 1.2425561831374428,
      "drawdown": -0.009315000545724872,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.014532559220880481,
      "cumulativeWealth": 1.2606137044541588,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018002973711423342,
      "cumulativeWealth": 1.283308499835707,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.015244461632512474,
      "cumulativeWealth": 1.3028718470241296,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0008561288436669257,
      "cumulativeWealth": 1.3017564208562906,
      "drawdown": -0.0008561288436669257,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020356689446182186,
      "cumulativeWealth": 1.2752569696623455,
      "drawdown": -0.021195390340852716,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.058874342458671736,
      "cumulativeWealth": 1.3503368852170543,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03192162595126358,
      "cumulativeWealth": 1.3934418341751476,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016487134913506285,
      "cumulativeWealth": 1.416415697689317,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.053789989306108676,
      "cumulativeWealth": 1.4926046829210298,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.04238175667685584,
      "cumulativeWealth": 1.5558638914073244,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.040874728616284606,
      "cumulativeWealth": 1.4922683770821734,
      "drawdown": -0.04087472861628472,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03193804175983206,
      "cumulativeWealth": 1.4446082473380462,
      "drawdown": -0.07150731158664803,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0625547907614219,
      "cumulativeWealth": 1.534975413982502,
      "drawdown": -0.013425645739440717,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.036047779827598214,
      "cumulativeWealth": 1.5903078697465196,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.026501680494748436,
      "cumulativeWealth": 1.6324537007988258,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019343758502819552,
      "cumulativeWealth": 1.6640314909541123,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018624103704820483,
      "cumulativeWealth": 1.6950225860097288,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029337607999389004,
      "cumulativeWealth": 1.7447504941881928,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020281318724568287,
      "cumulativeWealth": 1.7801363350556716,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01979961619287529,
      "cumulativeWealth": 1.8153823512607656,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016907063732472416,
      "cumulativeWealth": 1.846075136372337,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018376932972734128,
      "cumulativeWealth": 1.8800003354160826,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029694281094172492,
      "cumulativeWealth": 1.8241750769990988,
      "drawdown": -0.029694281094172492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03675175895391014,
      "cumulativeWealth": 1.8912167197187002,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.006634643762097658,
      "cumulativeWealth": 1.8786691705064438,
      "drawdown": -0.006634643762097658,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025456598792678253,
      "cumulativeWealth": 1.9264936978442,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02828360389793394,
      "cumulativeWealth": 1.8720055131825086,
      "drawdown": -0.02828360389793394,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0010678804480168669,
      "cumulativeWealth": 1.8700064350964012,
      "drawdown": -0.02932128083834873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.027675735944826974,
      "cumulativeWealth": 1.9217602394092563,
      "drawdown": -0.002457032919568114,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005172327484752604,
      "cumulativeWealth": 1.9227542367397965,
      "drawdown": -0.001941071028982888,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005900540880739991,
      "cumulativeWealth": 1.9114089467622972,
      "drawdown": -0.007830158540763965,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.009573734302905867,
      "cumulativeWealth": 1.8931096253617978,
      "drawdown": -0.017328928986250935,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016283187440473634,
      "cumulativeWealth": 1.9239354842369287,
      "drawdown": -0.0013279117446031163,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015272747249306162,
      "cumulativeWealth": 1.8945517038622066,
      "drawdown": -0.01658037813346458,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025677713466126795,
      "cumulativeWealth": 1.8459039480636705,
      "drawdown": -0.04183234540072034,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01162450380293456,
      "cumulativeWealth": 1.8673616655277885,
      "drawdown": -0.030694121855982193,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013415365911781718,
      "cumulativeWealth": 1.892413005560478,
      "drawdown": -0.01769052882023925,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025716575318670998,
      "cumulativeWealth": 1.8437466239689493,
      "drawdown": -0.04295216432207749,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029056660608894447,
      "cumulativeWealth": 1.89731974387041,
      "drawdown": -0.01514355017430713,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0027819907376234188,
      "cumulativeWealth": 1.9025980698241673,
      "drawdown": -0.012403688653003342,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016902183836182028,
      "cumulativeWealth": 1.9347561321667006,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025058536764288153,
      "cumulativeWealth": 1.9832382898345318,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0001138282260353396,
      "cumulativeWealth": 1.983464038330869,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02237299531212411,
      "cumulativeWealth": 2.0278400699622123,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003263025631626393,
      "cumulativeWealth": 2.034456964087338,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005275102754491723,
      "cumulativeWealth": 2.035530161040853,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015271779333684399,
      "cumulativeWealth": 2.004443993594378,
      "drawdown": -0.015271779333684399,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005754689984129091,
      "cumulativeWealth": 1.9929090398206928,
      "drawdown": -0.020938584962242213,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013018517203173374,
      "cumulativeWealth": 2.018853760439958,
      "drawdown": -0.008192657087609856,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.039944053452017236,
      "cumulativeWealth": 2.099494962958778,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007123773687343515,
      "cumulativeWealth": 2.114451289932614,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025589703803474917,
      "cumulativeWealth": 2.1685594721488655,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.033279606581785526,
      "cumulativeWealth": 2.240728278231184,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.021152973720385493,
      "cumulativeWealth": 2.1933302118472353,
      "drawdown": -0.021152973720385493,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.017961333930505363,
      "cumulativeWealth": 2.2327253482020897,
      "drawdown": -0.003571575414495154,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02934985698570136,
      "cumulativeWealth": 2.2982555178601713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.001261132312663893,
      "cumulativeWealth": 2.301153922156503,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0032963220427064677,
      "cumulativeWealth": 2.308739266553768,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01925144295147474,
      "cumulativeWealth": 2.3531858288336576,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013132879911520678,
      "cumulativeWealth": 2.3840899357332224,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.031088104384081605,
      "cumulativeWealth": 2.458206772516335,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0035622471585392557,
      "cumulativeWealth": 2.466963512606833,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01850748827990567,
      "cumulativeWealth": 2.512620810903359,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00453544119945104,
      "cumulativeWealth": 2.50122496695899,
      "drawdown": -0.004535441199451151,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010431936854904955,
      "cumulativeWealth": 2.475132346043762,
      "drawdown": -0.014920064618154205,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0014484192244976768,
      "cumulativeWealth": 2.471547316770576,
      "drawdown": -0.01634687333422824,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0058173387139724975,
      "cumulativeWealth": 2.457169488881312,
      "drawdown": -0.02206911674910117,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.030347583456280303,
      "cumulativeWealth": 2.5317386450113633,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.017824991205731777,
      "cumulativeWealth": 2.576866864093902,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020811145199942427,
      "cumulativeWealth": 2.6304944145634805,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0711190215338049,
      "cumulativeWealth": 2.817572603477374,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05137458683157625,
      "cumulativeWealth": 2.9623242318489926,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012334677626751889,
      "cumulativeWealth": 2.9988635462747655,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.010897613566756892,
      "cumulativeWealth": 3.031544002341502,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07233918779781323,
      "cumulativeWealth": 3.250843433244218,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.058301259677406625,
      "cumulativeWealth": 3.440371700416381,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.050207552740545225,
      "cumulativeWealth": 3.2676390568206464,
      "drawdown": -0.050207552740545225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07408957383307668,
      "cumulativeWealth": 3.5097370419808045,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07262419660611741,
      "cumulativeWealth": 3.7646288749533916,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004646288131409881,
      "cumulativeWealth": 3.747137324492533,
      "drawdown": -0.004646288131409881,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05362583732985815,
      "cumulativeWealth": 3.5461939478766564,
      "drawdown": -0.0580229643697453,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02712987598238792,
      "cumulativeWealth": 3.642401749892045,
      "drawdown": -0.03246724421483904,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.008810621680379827,
      "cumulativeWealth": 3.6103099260657925,
      "drawdown": -0.040991809289437464,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029889700590710055,
      "cumulativeWealth": 3.5023988433360174,
      "drawdown": -0.06965627697381482,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020281318724568287,
      "cumulativeWealth": 1.0202813187245683,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01979961619287529,
      "cumulativeWealth": 1.0404824972440754,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016907063732472416,
      "cumulativeWealth": 1.058074001137503,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.018376932972734128,
      "cumulativeWealth": 1.0775181561365994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029694281094172492,
      "cumulativeWealth": 1.0455220291242047,
      "drawdown": -0.029694281094172603,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03675175895391014,
      "cumulativeWealth": 1.0839468027195804,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.006634643762097658,
      "cumulativeWealth": 1.0767552018264712,
      "drawdown": -0.006634643762097658,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025456598792678253,
      "cumulativeWealth": 1.104165726997297,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.02828360389793394,
      "cumulativeWealth": 1.0729359409372312,
      "drawdown": -0.02828360389793405,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0010678804480168669,
      "cumulativeWealth": 1.0717901736239297,
      "drawdown": -0.02932128083834884,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.027675735944826974,
      "cumulativeWealth": 1.1014527554574058,
      "drawdown": -0.002457032919568114,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005172327484752604,
      "cumulativeWealth": 1.1020224628934268,
      "drawdown": -0.001941071028982888,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005900540880739991,
      "cumulativeWealth": 1.0955199342996302,
      "drawdown": -0.007830158540764076,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.009573734302905867,
      "cumulativeWealth": 1.0850317175251087,
      "drawdown": -0.017328928986250935,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016283187440473634,
      "cumulativeWealth": 1.1026994923604292,
      "drawdown": -0.0013279117446031163,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015272747249306162,
      "cumulativeWealth": 1.0858582417216702,
      "drawdown": -0.01658037813346447,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025677713466126795,
      "cumulativeWealth": 1.0579758849259089,
      "drawdown": -0.04183234540072012,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01162450380293456,
      "cumulativeWealth": 1.0702743296236432,
      "drawdown": -0.03069412185598186,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013415365911781718,
      "cumulativeWealth": 1.0846324513815313,
      "drawdown": -0.017690528820238915,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025716575318670998,
      "cumulativeWealth": 1.0567394192525035,
      "drawdown": -0.04295216432207705,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.029056660608894447,
      "cumulativeWealth": 1.0874447379097636,
      "drawdown": -0.015143550174306797,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0027819907376234188,
      "cumulativeWealth": 1.0904699990983058,
      "drawdown": -0.01240368865300312,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016902183836182028,
      "cumulativeWealth": 1.1089013234909066,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025058536764288153,
      "cumulativeWealth": 1.1366887680735713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0001138282260353396,
      "cumulativeWealth": 1.1368181553395955,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02237299531212411,
      "cumulativeWealth": 1.1622521825997458,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.003263025631626393,
      "cumulativeWealth": 1.1660446412619825,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005275102754491723,
      "cumulativeWealth": 1.1666597417918807,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015271779333684399,
      "cumulativeWealth": 1.1488427716577418,
      "drawdown": -0.015271779333684399,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005754689984129091,
      "cumulativeWealth": 1.1422315376663439,
      "drawdown": -0.020938584962242213,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013018517203173374,
      "cumulativeWealth": 1.1571016985894604,
      "drawdown": -0.008192657087609745,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.039944053452017236,
      "cumulativeWealth": 1.2033210306873379,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.007123773687343515,
      "cumulativeWealth": 1.2118932173831753,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025589703803474917,
      "cumulativeWealth": 1.242905205857451,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.033279606581785526,
      "cumulativeWealth": 1.2842686021268401,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.021152973720385493,
      "cumulativeWealth": 1.2571025021361348,
      "drawdown": -0.021152973720385493,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.017961333930505363,
      "cumulativeWealth": 1.2796817399618758,
      "drawdown": -0.003571575414495154,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02934985698570136,
      "cumulativeWealth": 1.3172402160169703,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.001261132312663893,
      "cumulativeWealth": 1.3189014302169297,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0032963220427064677,
      "cumulativeWealth": 1.3232489540735108,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01925144295147474,
      "cumulativeWealth": 1.3487234058234556,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013132879911520678,
      "cumulativeWealth": 1.3664360283459922,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.031088104384081605,
      "cumulativeWealth": 1.4089159342293822,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0035622471585392557,
      "cumulativeWealth": 1.4139348410127115,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01850748827990567,
      "cumulativeWealth": 1.4401032235113045,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.00453544119945104,
      "cumulativeWealth": 1.4335717200199292,
      "drawdown": -0.004535441199450929,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.010431936854904955,
      "cumulativeWealth": 1.4186167903597038,
      "drawdown": -0.014920064618154094,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0014484192244976768,
      "cumulativeWealth": 1.4165620385283515,
      "drawdown": -0.01634687333422813,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0058173387139724975,
      "cumulativeWealth": 1.4083214173408767,
      "drawdown": -0.02206911674910106,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.030347583456280303,
      "cumulativeWealth": 1.4510605690868958,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.017824991205731777,
      "cumulativeWealth": 1.476925710969854,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020811145199942427,
      "cumulativeWealth": 1.5076622263903758,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0711190215338049,
      "cumulativeWealth": 1.6148856887347371,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.05137458683157625,
      "cumulativeWealth": 1.6978497737737097,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.012334677626751889,
      "cumulativeWealth": 1.7187922033918621,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.010897613566756892,
      "cumulativeWealth": 1.7375229366259812,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07233918779781323,
      "cumulativeWealth": 1.863213934641576,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.058301259677406625,
      "cumulativeWealth": 1.971841654079677,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.050207552740545225,
      "cumulativeWealth": 1.8728403102364677,
      "drawdown": -0.050207552740545225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07408957383307668,
      "cumulativeWealth": 2.011598250679295,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07262419660611741,
      "cumulativeWealth": 2.15768895752915,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004646288131409881,
      "cumulativeWealth": 2.147663712934508,
      "drawdown": -0.004646288131409992,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.05362583732985815,
      "cumulativeWealth": 2.032493448025443,
      "drawdown": -0.05802296436974541,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02712987598238792,
      "cumulativeWealth": 2.087634743205389,
      "drawdown": -0.032467244214839264,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.008810621680379827,
      "cumulativeWealth": 2.06924138327619,
      "drawdown": -0.040991809289437575,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029889700590710055,
      "cumulativeWealth": 2.0073923778801577,
      "drawdown": -0.06965627697381482,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.020281318724568065,
      "cumulativeWealth": 1.020281318724568,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01979961619287507,
      "cumulativeWealth": 1.040482497244075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01690706373247175,
      "cumulativeWealth": 1.0580740011375018,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.018376932972733684,
      "cumulativeWealth": 1.0775181561365978,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02969428109417238,
      "cumulativeWealth": 1.0455220291242033,
      "drawdown": -0.02969428109417238,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.036751758953910585,
      "cumulativeWealth": 1.0839468027195795,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.006634643762097436,
      "cumulativeWealth": 1.0767552018264706,
      "drawdown": -0.006634643762097547,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025456598792677587,
      "cumulativeWealth": 1.1041657269972955,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.028283603897933718,
      "cumulativeWealth": 1.07293594093723,
      "drawdown": -0.028283603897933607,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.001067880448017755,
      "cumulativeWealth": 1.0717901736239277,
      "drawdown": -0.029321280838349284,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.027675735944828306,
      "cumulativeWealth": 1.1014527554574052,
      "drawdown": -0.002457032919567337,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005172327484748163,
      "cumulativeWealth": 1.1020224628934256,
      "drawdown": -0.001941071028982555,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0059005408807395465,
      "cumulativeWealth": 1.0955199342996298,
      "drawdown": -0.007830158540763077,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0095737343029062,
      "cumulativeWealth": 1.0850317175251079,
      "drawdown": -0.01732892898625038,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01628318744047319,
      "cumulativeWealth": 1.1026994923604276,
      "drawdown": -0.0013279117446031163,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.015272747249306162,
      "cumulativeWealth": 1.0858582417216687,
      "drawdown": -0.01658037813346447,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02567771346612613,
      "cumulativeWealth": 1.0579758849259082,
      "drawdown": -0.04183234540071945,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.011624503802935005,
      "cumulativeWealth": 1.070274329623643,
      "drawdown": -0.03069412185598075,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013415365911781718,
      "cumulativeWealth": 1.084632451381531,
      "drawdown": -0.017690528820237805,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.025716575318670887,
      "cumulativeWealth": 1.0567394192525033,
      "drawdown": -0.042952164322075936,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02905666060889467,
      "cumulativeWealth": 1.0874447379097636,
      "drawdown": -0.015143550174305354,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0027819907376231967,
      "cumulativeWealth": 1.0904699990983056,
      "drawdown": -0.012403688653001899,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016902183836181806,
      "cumulativeWealth": 1.1089013234909062,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02505853676428904,
      "cumulativeWealth": 1.1366887680735718,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00011382822603622778,
      "cumulativeWealth": 1.1368181553395968,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.022372995312124333,
      "cumulativeWealth": 1.1622521825997474,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.003263025631626615,
      "cumulativeWealth": 1.1660446412619843,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005275102754496164,
      "cumulativeWealth": 1.166659741791883,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.01527177933368451,
      "cumulativeWealth": 1.1488427716577438,
      "drawdown": -0.01527177933368462,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005754689984129202,
      "cumulativeWealth": 1.1422315376663459,
      "drawdown": -0.020938584962242324,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013018517203173152,
      "cumulativeWealth": 1.1571016985894622,
      "drawdown": -0.008192657087610189,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0399440534520179,
      "cumulativeWealth": 1.2033210306873403,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.007123773687343293,
      "cumulativeWealth": 1.2118932173831776,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025589703803474917,
      "cumulativeWealth": 1.2429052058574532,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03327960658178464,
      "cumulativeWealth": 1.2842686021268412,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02115297372038527,
      "cumulativeWealth": 1.2571025021361362,
      "drawdown": -0.021152973720385382,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017961333930505585,
      "cumulativeWealth": 1.2796817399618774,
      "drawdown": -0.003571575414494821,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.029349856985700473,
      "cumulativeWealth": 1.317240216016971,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.001261132312663893,
      "cumulativeWealth": 1.3189014302169304,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0032963220427069118,
      "cumulativeWealth": 1.3232489540735122,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.019251442951474518,
      "cumulativeWealth": 1.3487234058234567,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.015913587939259788,
      "cumulativeWealth": 1.3701864343477663,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03005413515333144,
      "cumulativeWealth": 1.4113662026309155,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.003562247158540144,
      "cumulativeWealth": 1.4163938378758971,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.018507488279905226,
      "cumulativeWealth": 1.4426077302301152,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.004535441199450374,
      "cumulativeWealth": 1.436064867695784,
      "drawdown": -0.004535441199450485,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.010431936854905288,
      "cumulativeWealth": 1.4210839296764335,
      "drawdown": -0.014920064618153983,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0014484192244972327,
      "cumulativeWealth": 1.419025604393066,
      "drawdown": -0.016346873334227574,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0058173387139723864,
      "cumulativeWealth": 1.4107706518085121,
      "drawdown": -0.022069116749100393,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.030347583456280525,
      "cumulativeWealth": 1.4535841319019422,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017824991205732,
      "cumulativeWealth": 1.4794942562698858,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.020811145199942427,
      "cumulativeWealth": 1.5102842260595992,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.071119021533804,
      "cumulativeWealth": 1.6176941624548964,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05137458683157625,
      "cumulativeWealth": 1.7008025316708695,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.012334677626751667,
      "cumulativeWealth": 1.7217813826057928,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.010897613566756226,
      "cumulativeWealth": 1.740544690759866,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07233918779781345,
      "cumulativeWealth": 1.866454280015231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05830125967740707,
      "cumulativeWealth": 1.975270915670407,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.050207552740545336,
      "cumulativeWealth": 1.8760973969950197,
      "drawdown": -0.050207552740545336,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07408957383307646,
      "cumulativeWealth": 2.0150966536077246,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07262419660611741,
      "cumulativeWealth": 2.161441429159661,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.010507356174478621,
      "cumulativeWealth": 2.184152464106116,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.032125601068262455,
      "cumulativeWealth": 2.1139852533719803,
      "drawdown": -0.032125601068262455,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.022686611219387087,
      "cumulativeWealth": 2.161944414938748,
      "drawdown": -0.010167810870500227,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.008810621680379604,
      "cumulativeWealth": 2.142896340604713,
      "drawdown": -0.018888847815982213,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02210910535947974,
      "cumulativeWealth": 2.0955188196358394,
      "drawdown": -0.04058033764897939,
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
      "cagr": 0.1232857371879319,
      "annVol": 0.10945801252819744,
      "sharpeRf0": 1.1187169305226634,
      "maxDrawdown": -0.13555290624837346,
      "calmar": 0.9095027218526437,
      "cumulativeReturn": 2.0167294806097353,
      "terminalWealth": 3.0167294806097353,
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
      "cagr": 0.14278058776548352,
      "annVol": 0.12823788609469644,
      "sharpeRf0": 1.1067645217751898,
      "maxDrawdown": -0.18000088181816443,
      "calmar": 0.7932216016014824,
      "cumulativeReturn": 2.552288751566923,
      "terminalWealth": 3.552288751566923,
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
      "cagr": 0.130678446966227,
      "annVol": 0.11044644371848547,
      "sharpeRf0": 1.1692077524878353,
      "maxDrawdown": -0.1307895369179567,
      "calmar": 0.9991506204980343,
      "cumulativeReturn": 2.2106561750857048,
      "terminalWealth": 3.2106561750857048,
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
      "cagr": 0.14108000570157309,
      "annVol": 0.11149368665412686,
      "sharpeRf0": 1.2415408415926352,
      "maxDrawdown": -0.12331724135510169,
      "calmar": 1.1440412074684847,
      "cumulativeReturn": 2.5023988433360036,
      "terminalWealth": 3.5023988433360036,
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
      "cagr": 0.13527979788212452,
      "annVol": 0.11533010289065936,
      "sharpeRf0": 1.1597541366325244,
      "maxDrawdown": -0.10553049321091101,
      "calmar": 1.2819024508087646,
      "cumulativeReturn": 1.007392377880155,
      "terminalWealth": 2.007392377880155,
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
      "cagr": 0.14419585737153873,
      "annVol": 0.10819060524438427,
      "sharpeRf0": 1.3012992060050306,
      "maxDrawdown": -0.10212252128989407,
      "calmar": 1.4119888105994909,
      "cumulativeReturn": 1.0955188196358328,
      "terminalWealth": 2.0955188196358328,
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
      "annualReturn": 0.10335505381034582,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.00259235275159031,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.14337035454067282,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.28251729897677547,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.13743427614259995,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": -0.08082846977986258,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.13631186719738642,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.09900669142956753,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.22734962939885217,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.16053296529471095,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.038518627411774586,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.04647439672252607,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.18439149308177716,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2049574348016363,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2457628106584231,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": -0.026468743000782946,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.15216281266495435,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.262029274534634,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20269207909401943,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.07987971244960135,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.06874344287365886,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.02171417329384462,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.16077029302411372,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.24015895039062563,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.18719794625925545,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": -0.054531024134019335,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.14224290675499907,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1750271165834032,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2121161033285579,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.11852651262559166,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.06192312232829145,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.041098231216721404,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.16077029302411372,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.23922491743031027,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.2113966952520112,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": -0.04295216432207716,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.13871121750953574,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.1750271165834032,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.22885644106591485,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.15531849137958642,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.10416572699729532,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": -0.042952164322077935,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.1387112175095362,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.1750271165834023,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.2288564410659144,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.15531849137958798,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.10416572699729398,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": -0.04295216432207727,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.13871121750953885,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.17707062517377214,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.2288564410659133,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.20394427719118347,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
