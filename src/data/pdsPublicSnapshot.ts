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
  "publicAsOfDate": "2026-09-11",
  "completedHoldingMonthCutoff": "2026-08",
  "latestEligibleSignalPeriod": "2026-07",
  "latestReleasedSignalPeriod": "2026-07",
  "sourceProgramVersion": "0.3.204",
  "sourceRs03Version": "0.21.74",
  "publicComponentIdentity": "ADAA + F2R",
  "latestAssetTargets": [
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "DBC",
      "targetWeight": 0.175
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "QQQ",
      "targetWeight": 0.15312499999999998
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "EWY",
      "targetWeight": 0.1421875
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "SPY",
      "targetWeight": 0.1171875
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "BIL",
      "targetWeight": 0.07500000000000001
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "VNQ",
      "targetWeight": 0.075
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "EEM",
      "targetWeight": 0.0625
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "GLD",
      "targetWeight": 0.046875
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "IEF",
      "targetWeight": 0.046875
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "VGK",
      "targetWeight": 0.04375
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "EFA",
      "targetWeight": 0.03125
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "ticker": "IWM",
      "targetWeight": 0.03125
    }
  ],
  "recentMonthlyReturns": [
    {
      "period": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.057438069599496044,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694350871302371,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04437253533451946,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.05040037280729803,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173192787694704,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04327051572324403,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.023484667280046723,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031913977792727644,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697812608238886,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.06808225108441812,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.08241348173635221,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328153206946352,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.09366032387023049,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.1379985504593355,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894707047686933,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.07517037460183285,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649242841708982,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137572261430858,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.052504638235360446,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.028826055783137683,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.060405699328856866,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.07501569354112703,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06981911041443856,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672064779432697,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.020140769930085956,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.024267365731530877,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757361314053256,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0011874067769741536,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492383953884516,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.422169188504469e-05,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04306511312470307,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.039040101829213025,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.044410290250674,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.06663035039518594,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07878097836505482,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06259113492093893,
      "seriesRole": "CORE_STRATEGY"
    }
  ],
  "corePerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.031410469790219775,
      "cumulativeWealth": 1.0314104697902198,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0038427104465332818,
      "cumulativeWealth": 1.027447058003293,
      "drawdown": -0.0038427104465332818,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020183023584950055,
      "cumulativeWealth": 1.0481840462072611,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00998628381717026,
      "cumulativeWealth": 1.0586515095853168,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0020338808802251584,
      "cumulativeWealth": 1.060804680649484,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.022721674426452676,
      "cumulativeWealth": 1.0849079392332586,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.011440525964454329,
      "cumulativeWealth": 1.0973198566810993,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012096484579647404,
      "cumulativeWealth": 1.110593569406383,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05371805666265406,
      "cumulativeWealth": 1.1702524976969344,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.039014220303981606,
      "cumulativeWealth": 1.1245960089405014,
      "drawdown": -0.03901422030398172,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004862167484639968,
      "cumulativeWealth": 1.119128034792475,
      "drawdown": -0.04368669411522108,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.004705940143709064,
      "cumulativeWealth": 1.124394584337355,
      "drawdown": -0.03918634093909479,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.011900359937887073,
      "cumulativeWealth": 1.1377752846031806,
      "drawdown": -0.027752312563031678,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.003809167539866598,
      "cumulativeWealth": 1.1334413079214076,
      "drawdown": -0.031455766894726955,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010351228887823583,
      "cumulativeWealth": 1.1451738183306162,
      "drawdown": -0.02143014384987285,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02602427245077088,
      "cumulativeWealth": 1.1749761337823417,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0029007117694792584,
      "cumulativeWealth": 1.171567866682222,
      "drawdown": -0.0029007117694792584,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.047446966894848175,
      "cumulativeWealth": 1.1159805248966828,
      "drawdown": -0.05021004868902945,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005968988651928742,
      "cumulativeWealth": 1.1226417999855645,
      "drawdown": -0.04454076324793832,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.025004748859590586,
      "cumulativeWealth": 1.0945704237176468,
      "drawdown": -0.06843178150849971,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02761967517864905,
      "cumulativeWealth": 1.1248021032808844,
      "drawdown": -0.0427021699070117,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.007198115572444985,
      "cumulativeWealth": 1.1328985588164293,
      "drawdown": -0.0358114294887516,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.014412210955078164,
      "cumulativeWealth": 1.1492261318367958,
      "drawdown": -0.021915340410068262,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019943938430690977,
      "cumulativeWealth": 1.17214622705309,
      "drawdown": -0.002408480179203254,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.037502627796499155,
      "cumulativeWealth": 1.1281876633768473,
      "drawdown": -0.03982078363998642,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03796279898602495,
      "cumulativeWealth": 1.1710168248601358,
      "drawdown": -0.0033696930587522322,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006549721863105651,
      "cumulativeWealth": 1.1786866593599867,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026591536044173747,
      "cumulativeWealth": 1.2100297481471445,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004569939043895799,
      "cumulativeWealth": 1.2044999859568115,
      "drawdown": -0.004569939043895688,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.018221866502595274,
      "cumulativeWealth": 1.2264482239032943,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012355259919574868,
      "cumulativeWealth": 1.2416013104875205,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02700196925856324,
      "cumulativeWealth": 1.2751269909046965,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0038930639265932765,
      "cumulativeWealth": 1.280091141794813,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.011579736846717092,
      "cumulativeWealth": 1.2652680232330156,
      "drawdown": -0.011579736846717092,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02749985569536062,
      "cumulativeWealth": 1.2304733351781534,
      "drawdown": -0.038761151449802744,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0790968855586196,
      "cumulativeWealth": 1.3277999437536727,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025546996587939352,
      "cumulativeWealth": 1.361721244386214,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026886428100033166,
      "cumulativeWealth": 1.3983330647156915,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0572313543527434,
      "cumulativeWealth": 1.478361559845593,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04637829586206821,
      "cumulativeWealth": 1.5469254496592206,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03308760445171932,
      "cumulativeWealth": 1.4957413922645983,
      "drawdown": -0.03308760445171932,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017690529340965155,
      "cumulativeWealth": 1.4692809352782454,
      "drawdown": -0.05019279655530906,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07756619894803629,
      "cumulativeWealth": 1.5832474726145946,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0537397344027315,
      "cumulativeWealth": 1.6683307712866988,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.007071435646766044,
      "cumulativeWealth": 1.6801282649733722,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01448783011555732,
      "cumulativeWealth": 1.7044696778486526,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.014374620106004432,
      "cumulativeWealth": 1.7289707819499307,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.039279283939650744,
      "cumulativeWealth": 1.796883516217502,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.018031826015660668,
      "cumulativeWealth": 1.8292846071523448,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0094452295056211,
      "cumulativeWealth": 1.8465626200979985,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009867115356349432,
      "cumulativeWealth": 1.8647828664832284,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012739493109405808,
      "cumulativeWealth": 1.8885392549613296,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.04240753062108937,
      "cumulativeWealth": 1.8084509686774277,
      "drawdown": -0.04240753062108937,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.046499333119706776,
      "cumulativeWealth": 1.892542732700616,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01563258645214316,
      "cumulativeWealth": 1.8629573948172982,
      "drawdown": -0.01563258645214316,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.029179265626315898,
      "cumulativeWealth": 1.9173171234911817,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03579145691283003,
      "cumulativeWealth": 1.848693550277516,
      "drawdown": -0.03579145691283003,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0006661855640783809,
      "cumulativeWealth": 1.8499251232331155,
      "drawdown": -0.03514911510066432,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.027419824905760892,
      "cumulativeWealth": 1.9006497462009357,
      "drawdown": -0.008693072776556066,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02430665435942625,
      "cumulativeWealth": 1.8544513097616984,
      "drawdown": -0.03278842762068124,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0024152643390117357,
      "cumulativeWealth": 1.8499723196447972,
      "drawdown": -0.03512449923972849,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03426805281635992,
      "cumulativeWealth": 1.7865773704864054,
      "drawdown": -0.06818890386099319,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02506405710666204,
      "cumulativeWealth": 1.8313562477257468,
      "drawdown": -0.044833937334743834,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.023393164548728085,
      "cumulativeWealth": 1.7885150296753571,
      "drawdown": -0.06717829421003285,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.04387597064504767,
      "cumulativeWealth": 1.7100421967350945,
      "drawdown": -0.10810675199033681,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021444834641100252,
      "cumulativeWealth": 1.7467137688733825,
      "drawdown": -0.0889802487692557,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.024457622129587353,
      "cumulativeWealth": 1.789434234201035,
      "drawdown": -0.06669887194106361,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02580178711093517,
      "cumulativeWealth": 1.7432636330411606,
      "drawdown": -0.09077970895763587,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05478430636351206,
      "cumulativeWealth": 1.8387671219860566,
      "drawdown": -0.040968705981249354,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03169177980871618,
      "cumulativeWealth": 1.7804933192365677,
      "drawdown": -0.07136211458095976,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.024044443159292106,
      "cumulativeWealth": 1.8233042896464506,
      "drawdown": -0.04903353372943653,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00838788660073675,
      "cumulativeWealth": 1.838597959266642,
      "drawdown": -0.041056934849255655,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.007275169523709879,
      "cumulativeWealth": 1.8519740711062538,
      "drawdown": -0.03408046148669808,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.027348112299455885,
      "cumulativeWealth": 1.9026220659785482,
      "drawdown": -0.007664385475197544,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025745884872580227,
      "cumulativeWealth": 1.9516067546452627,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02079978326122256,
      "cumulativeWealth": 1.9110137571375032,
      "drawdown": -0.02079978326122256,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02853849238345385,
      "cumulativeWealth": 1.856476305584759,
      "drawdown": -0.048744681188498507,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.012162247413205707,
      "cumulativeWealth": 1.8338973814394832,
      "drawdown": -0.060314083729011814,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04963290142649246,
      "cumulativeWealth": 1.9249190293987717,
      "drawdown": -0.01367474527487067,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05017944030097188,
      "cumulativeWealth": 2.021510388918692,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.011722766501297444,
      "cumulativeWealth": 1.9978126946494512,
      "drawdown": -0.011722766501297444,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02864485906037828,
      "cumulativeWealth": 2.0550397577167194,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02679724091115343,
      "cumulativeWealth": 2.1101091531862526,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03738683535855469,
      "cumulativeWealth": 2.031218849687499,
      "drawdown": -0.03738683535855469,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025244346858884326,
      "cumulativeWealth": 2.082495642875314,
      "drawdown": -0.013086294739417803,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025988075469340233,
      "cumulativeWealth": 2.13661569680693,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01285821790533248,
      "cumulativeWealth": 2.1640887670164273,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.015345401900862976,
      "cumulativeWealth": 2.197297578895437,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.024515795429245202,
      "cumulativeWealth": 2.2511660768368134,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.008967745823449502,
      "cumulativeWealth": 2.2309781916533686,
      "drawdown": -0.008967745823449613,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03286870037228695,
      "cumulativeWealth": 2.30430754537193,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02368168867607523,
      "cumulativeWealth": 2.249737651468501,
      "drawdown": -0.02368168867607512,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021703174418991722,
      "cumulativeWealth": 2.2985641001152946,
      "drawdown": -0.002492482076956626,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.005547519193577544,
      "cumulativeWealth": 2.2858127716522367,
      "drawdown": -0.008026174178372592,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.019208619322850895,
      "cumulativeWealth": 2.241905464278258,
      "drawdown": -0.027080621776812253,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0038475488289866355,
      "cumulativeWealth": 2.2505313050220406,
      "drawdown": -0.023337266962431213,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.022292447723478936,
      "cumulativeWealth": 2.300701156489297,
      "drawdown": -0.0015650640427211648,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03975497840916509,
      "cumulativeWealth": 2.3921654812914706,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.004200264439401247,
      "cumulativeWealth": 2.4022132088957022,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02299639405460141,
      "cumulativeWealth": 2.4574554504506363,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06663035039518594,
      "cumulativeWealth": 2.621196568194722,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04306511312470307,
      "cumulativeWealth": 2.734078694926111,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0011874067769741536,
      "cumulativeWealth": 2.730832231354975,
      "drawdown": -0.0011874067769741536,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020140769930085956,
      "cumulativeWealth": 2.785833295044359,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07501569354112703,
      "cumulativeWealth": 2.994814511762075,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.052504638235360446,
      "cumulativeWealth": 3.1520561642841503,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.07517037460183285,
      "cumulativeWealth": 2.9151149216488945,
      "drawdown": -0.07517037460183273,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.09366032387023049,
      "cumulativeWealth": 3.1881455293294714,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06808225108441812,
      "cumulativeWealth": 3.4052016537509457,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.023484667280046723,
      "cumulativeWealth": 3.32523162589114,
      "drawdown": -0.023484667280046723,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.05040037280729803,
      "cumulativeWealth": 3.1576387122756087,
      "drawdown": -0.0727014041011751,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.057438069599496044,
      "cumulativeWealth": 3.3390073844013584,
      "drawdown": -0.01943916281042335,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0285076575371479,
      "cumulativeWealth": 1.028507657537148,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005398054016919618,
      "cumulativeWealth": 1.0229557176449469,
      "drawdown": -0.005398054016919618,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02098952697458989,
      "cumulativeWealth": 1.0444270742742665,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010174291192696527,
      "cumulativeWealth": 1.055053379457469,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0025391185475143185,
      "cumulativeWealth": 1.0577322850618671,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018014624270058954,
      "cumulativeWealth": 1.0767869347555676,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007366691176726059,
      "cumulativeWealth": 1.0847192915670454,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01274830436701091,
      "cumulativeWealth": 1.0985476232487106,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.053833188117162534,
      "cumulativeWealth": 1.1576859441067202,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03767793544788478,
      "cumulativeWealth": 1.1140667278357437,
      "drawdown": -0.03767793544788478,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0068113022887673624,
      "cumulativeWealth": 1.1064784825825964,
      "drawdown": -0.044232601928700044,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007649135264877538,
      "cumulativeWealth": 1.114942086163547,
      "drawdown": -0.0369218078190926,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008570346032694465,
      "cumulativeWealth": 1.124497525648383,
      "drawdown": -0.028667894455560505,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001960793115796333,
      "cumulativeWealth": 1.1222926186413615,
      "drawdown": -0.030572475761263984,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007472421977913646,
      "cumulativeWealth": 1.1306788626705475,
      "drawdown": -0.023328504223148028,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02358285922055603,
      "cumulativeWealth": 1.1573435031125654,
      "drawdown": -0.00029579783351263433,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0033717166454695358,
      "cumulativeWealth": 1.1534412687585947,
      "drawdown": -0.003666517132503322,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.028906785757465303,
      "cumulativeWealth": 1.120098989118771,
      "drawdown": -0.03246731566474337,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0021729317719521024,
      "cumulativeWealth": 1.1225328877999585,
      "drawdown": -0.030364933154549134,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007707119896544268,
      "cumulativeWealth": 1.1138813922458701,
      "drawdown": -0.03783802687062077,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01490674872770481,
      "cumulativeWealth": 1.1304857422725454,
      "drawdown": -0.02349532010182842,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0003512927364046625,
      "cumulativeWealth": 1.130088610842676,
      "drawdown": -0.023838359102941853,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019272438027682748,
      "cumulativeWealth": 1.1518681735609315,
      "drawdown": -0.0050253443737522385,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015182594816851802,
      "cumulativeWealth": 1.1693565213225343,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03578575090505509,
      "cumulativeWealth": 1.1275102201312843,
      "drawdown": -0.03578575090505509,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03166000778441802,
      "cumulativeWealth": 1.1632072024776516,
      "drawdown": -0.005258720272862449,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004663641737108204,
      "cumulativeWealth": 1.1686319841360313,
      "drawdown": -0.0006196033231025133,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03357680991878986,
      "cumulativeWealth": 1.207870918132385,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00813724808168359,
      "cumulativeWealth": 1.1980421728208908,
      "drawdown": -0.008137248081683701,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014834387667645998,
      "cumulativeWealth": 1.2158143948547049,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006858815794634987,
      "cumulativeWealth": 1.2241534418294788,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027409330784092578,
      "cumulativeWealth": 1.2577066684470684,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0009678840480826789,
      "cumulativeWealth": 1.2589239826686254,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010129199414731449,
      "cumulativeWealth": 1.246172090600187,
      "drawdown": -0.010129199414731449,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018788243619907052,
      "cumulativeWealth": 1.2227587057696618,
      "drawdown": -0.028727133168359842,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.048277754209986146,
      "cumulativeWealth": 1.2817907500249304,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019100835491337564,
      "cumulativeWealth": 1.3062740242754747,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024175935027977324,
      "cumulativeWealth": 1.337854420215093,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.059785966449586114,
      "cumulativeWealth": 1.417839339696503,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04199936979385788,
      "cumulativeWealth": 1.4773876984326957,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02983339312482347,
      "cumulativeWealth": 1.4333122104275748,
      "drawdown": -0.029833393124823582,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016916034634367083,
      "cumulativeWealth": 1.4090662514341208,
      "drawdown": -0.04624476504783037,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07296661406231886,
      "cumulativeWealth": 1.5118810447907527,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05259871302669583,
      "cumulativeWealth": 1.5914040419962026,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0036283738739828486,
      "cumulativeWealth": 1.5971782508451322,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013298291683563779,
      "cumulativeWealth": 1.618417993095515,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010595952400213049,
      "cumulativeWealth": 1.6355666731140033,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.038405672499003396,
      "cumulativeWealth": 1.6983817111119042,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015670903336915343,
      "cumulativeWealth": 1.7249968867359238,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010081767498824279,
      "cumulativeWealth": 1.742387904284191,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011008303482300086,
      "cumulativeWealth": 1.7615686391184402,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010534917136939992,
      "cumulativeWealth": 1.780126618762585,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03831062066965207,
      "cumulativeWealth": 1.7119288631272214,
      "drawdown": -0.03831062066965207,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04270566320238944,
      "cumulativeWealth": 1.7850379205823819,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0165672628429282,
      "cumulativeWealth": 1.7554647281674995,
      "drawdown": -0.0165672628429282,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024027896158586692,
      "cumulativeWealth": 1.7976448523659698,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.034926701421056916,
      "cumulativeWealth": 1.7348590473462837,
      "drawdown": -0.034926701421056916,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005220181107702171,
      "cumulativeWealth": 1.743915325769767,
      "drawdown": -0.029888844020267258,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016282914813438243,
      "cumulativeWealth": 1.7723113504611256,
      "drawdown": -0.014092606707883149,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02128554867714827,
      "cumulativeWealth": 1.734586730939823,
      "drawdown": -0.03507818651896277,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0004906350427374973,
      "cumulativeWealth": 1.7337356819049565,
      "drawdown": -0.035551610974158376,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01991693394893701,
      "cumulativeWealth": 1.6992049828435403,
      "drawdown": -0.054760465835544725,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010236053918903032,
      "cumulativeWealth": 1.7165981366671954,
      "drawdown": -0.04508494299755861,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01503967940823614,
      "cumulativeWealth": 1.6907810510189452,
      "drawdown": -0.05944655931697296,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.023348435667941647,
      "cumulativeWealth": 1.6513039584206546,
      "drawdown": -0.08140701081902169,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006876114219313223,
      "cumulativeWealth": 1.662658513049559,
      "drawdown": -0.07509066050435298,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018319528693820697,
      "cumulativeWealth": 1.6931176333873956,
      "drawdown": -0.05814675732027974,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.017180512545787674,
      "cumulativeWealth": 1.664029004645489,
      "drawdown": -0.07432827877242953,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.037460904300706366,
      "cumulativeWealth": 1.7263650359421134,
      "drawdown": -0.03965177900965333,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.030759296926930357,
      "cumulativeWealth": 1.673263261197299,
      "drawdown": -0.06919141509234483,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02664007502544674,
      "cumulativeWealth": 1.7178391200129188,
      "drawdown": -0.04439460455607491,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008954058232864659,
      "cumulativeWealth": 1.7332207515282074,
      "drawdown": -0.03583805819763042,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006772890971288303,
      "cumulativeWealth": 1.7449596667074823,
      "drawdown": -0.029307894487137442,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01856044516485822,
      "cumulativeWealth": 1.7773468949162958,
      "drawdown": -0.01129141689080515,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017882335976245223,
      "cumulativeWealth": 1.8091300092375253,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01459967204730983,
      "cumulativeWealth": 1.7827173044117108,
      "drawdown": -0.01459967204730983,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02027464830342751,
      "cumulativeWealth": 1.746573338040329,
      "drawdown": -0.034578317134632774,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012441545770853768,
      "cumulativeWealth": 1.7444003308275908,
      "drawdown": -0.035779450940187196,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02728108297881926,
      "cumulativeWealth": 1.7919894610011782,
      "drawdown": -0.00947447013140379,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.040737829039718454,
      "cumulativeWealth": 1.8649912213044213,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011140156136555057,
      "cumulativeWealth": 1.8442149279057856,
      "drawdown": -0.011140156136555057,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019576483505991282,
      "cumulativeWealth": 1.880318171023436,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02749642644649053,
      "cumulativeWealth": 1.9320202013089816,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03117567963584078,
      "cumulativeWealth": 1.871788158463,
      "drawdown": -0.03117567963584078,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019647800840454144,
      "cumulativeWealth": 1.9085646794160016,
      "drawdown": -0.012140412339937456,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02496673253841153,
      "cumulativeWealth": 1.95621530329924,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005497785930712595,
      "cumulativeWealth": 1.9669701562711632,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017381738986460338,
      "cumulativeWealth": 2.0011595181216255,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027705894479596926,
      "cumulativeWealth": 2.0566034325675444,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011188875250463415,
      "cumulativeWealth": 2.0335923533208713,
      "drawdown": -0.011188875250463415,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02124275951574761,
      "cumulativeWealth": 2.07679146663553,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021122208433843492,
      "cumulativeWealth": 2.0329250444036266,
      "drawdown": -0.021122208433843492,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017191929753301194,
      "cumulativeWealth": 2.0678749489607404,
      "drawdown": -0.0042934102041715105,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012005503162564324,
      "cumulativeWealth": 2.065392361036787,
      "drawdown": -0.005488806065449547,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016609799838602002,
      "cumulativeWealth": 2.031086607331788,
      "drawdown": -0.022007437933951546,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0021566399244556944,
      "cumulativeWealth": 2.035466929799187,
      "drawdown": -0.019898260128779266,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012765209796003152,
      "cumulativeWealth": 2.0614500921909,
      "drawdown": -0.007387055797895448,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.038390146057401875,
      "cumulativeWealth": 2.140589462320153,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0008001476433161514,
      "cumulativeWealth": 2.142302249933736,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024133882919352034,
      "cumulativeWealth": 2.194004321611501,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06259113492093893,
      "cumulativeWealth": 2.3313295421226097,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.044410290250674,
      "cumulativeWealth": 2.4348645637582456,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.422169188504469e-05,
      "cumulativeWealth": 2.434659495345175,
      "drawdown": -8.422169188504469e-05,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757361314053256,
      "cumulativeWealth": 2.480327283176055,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672064779432697,
      "cumulativeWealth": 2.670619599083265,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.060405699328856866,
      "cumulativeWealth": 2.831940243607241,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137572261430858,
      "cumulativeWealth": 2.6298084623192333,
      "drawdown": -0.07137572261430847,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894707047686933,
      "cumulativeWealth": 2.8374241363346173,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328153206946352,
      "cumulativeWealth": 3.016980682812746,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697812608238886,
      "cumulativeWealth": 2.9545357819972113,
      "drawdown": -0.020697812608238886,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04327051572324403,
      "cumulativeWealth": 2.826691494987414,
      "drawdown": -0.06307272330558134,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04437253533451946,
      "cumulativeWealth": 2.9521189632285285,
      "drawdown": -0.021498884614583158,
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
      "netReturn": 0.014971160323649757,
      "cumulativeWealth": 2.871325361021633,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0023900710704179984,
      "cumulativeWealth": 2.864462689342498,
      "drawdown": -0.0023900710704179984,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06782265102154827,
      "cumulativeWealth": 3.05873814268602,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03127734071168442,
      "cumulativeWealth": 2.9630689476494045,
      "drawdown": -0.03127734071168442,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03528998908996828,
      "cumulativeWealth": 3.067635618484776,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01849425723368503,
      "cumulativeWealth": 3.010901976257304,
      "drawdown": -0.01849425723368503,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.027004744965809624,
      "cumulativeWealth": 2.9295933362714233,
      "drawdown": -0.04499956949956696,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008926582948955764,
      "cumulativeWealth": 2.9557445941943583,
      "drawdown": -0.03647467894041634,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05099650554431201,
      "cumulativeWealth": 3.1064772397797613,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04376027457888365,
      "cumulativeWealth": 3.242417536765576,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.014430682495339742,
      "cumulativeWealth": 3.289207834755962,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.019628327100527088,
      "cumulativeWealth": 3.3537694820381683,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07878097836505482,
      "cumulativeWealth": 3.6179827230439985,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.039040101829213025,
      "cumulativeWealth": 3.75922913696797,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492383953884516,
      "cumulativeWealth": 3.7423412363140796,
      "drawdown": -0.004492383953884516,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.024267365731530877,
      "cumulativeWealth": 3.8331579997879026,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06981911041443856,
      "cumulativeWealth": 4.100785681411082,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.028826055783137683,
      "cumulativeWealth": 4.218995158218131,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649242841708982,
      "cumulativeWealth": 3.8540840215039003,
      "drawdown": -0.08649242841708982,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.1379985504593355,
      "cumulativeWealth": 4.385942029819925,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.08241348173635221,
      "cumulativeWealth": 4.747402783191189,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031913977792727644,
      "cumulativeWealth": 4.595894276195292,
      "drawdown": -0.031913977792727755,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173192787694704,
      "cumulativeWealth": 4.266221919445178,
      "drawdown": -0.10135665451638032,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694350871302371,
      "cumulativeWealth": 4.679804441264604,
      "drawdown": -0.014239015523588194,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011216256961387616,
      "cumulativeWealth": 1.0112162569613876,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0037516838097377825,
      "cumulativeWealth": 1.0150100206207733,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013668755531487609,
      "cumulativeWealth": 1.028883944454649,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.005515809669834004,
      "cumulativeWealth": 1.0345590724646088,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009803359773671971,
      "cumulativeWealth": 1.0447012272590956,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014529912186364458,
      "cumulativeWealth": 1.0598806443521576,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017746426589354103,
      "cumulativeWealth": 1.0786897384006304,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009177586185233899,
      "cumulativeWealth": 1.0885895064419295,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.029315103722769464,
      "cumulativeWealth": 1.120501620734793,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.025851108305338433,
      "cumulativeWealth": 1.0915354119808707,
      "drawdown": -0.025851108305338433,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.013761873303250072,
      "cumulativeWealth": 1.076513839935179,
      "drawdown": -0.03925722193134196,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006633106084740215,
      "cumulativeWealth": 1.075799776884981,
      "drawdown": -0.039894492808049575,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017233091710287418,
      "cumulativeWealth": 1.0943391331019465,
      "drawdown": -0.023348906551058812,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0038609045500763717,
      "cumulativeWealth": 1.0985642720402664,
      "drawdown": -0.019578149900524755,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0221112347920549,
      "cumulativeWealth": 1.1228548845935116,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021423760099146483,
      "cumulativeWealth": 1.1469106582671977,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010883666735967967,
      "cumulativeWealth": 1.1481589176052487,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04403872088332961,
      "cumulativeWealth": 1.0975954675031252,
      "drawdown": -0.04403872088332972,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01421556163902915,
      "cumulativeWealth": 1.1131984035261349,
      "drawdown": -0.030449194395521517,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04490432228801855,
      "cumulativeWealth": 1.0632109836436896,
      "drawdown": -0.07398621624499302,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05168288935635523,
      "cumulativeWealth": 1.118160799273808,
      "drawdown": -0.026127148316723137,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01899441226993459,
      "cumulativeWealth": 1.1393996064792944,
      "drawdown": -0.007629005873354022,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019350923146338017,
      "cumulativeWealth": 1.161448040697243,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023709690897891322,
      "cumulativeWealth": 1.1889856147361362,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.030619516963926285,
      "cumulativeWealth": 1.1525794495358588,
      "drawdown": -0.030619516963926285,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04614641944193809,
      "cumulativeWealth": 1.2057668642542987,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009798940682494095,
      "cumulativeWealth": 1.2175821022340434,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010852222670079126,
      "cumulativeWealth": 1.218903449443298,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0092262283905864,
      "cumulativeWealth": 1.2301493310539355,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014095397638159257,
      "cumulativeWealth": 1.2474887750294563,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.021580784327497327,
      "cumulativeWealth": 1.2744105612343408,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01724587289616064,
      "cumulativeWealth": 1.296388883790913,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.007873918012345715,
      "cumulativeWealth": 1.306596543573999,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04116058734438255,
      "cumulativeWealth": 1.2528162624183532,
      "drawdown": -0.04116058734438244,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0770301495368182,
      "cumulativeWealth": 1.1563116383821097,
      "drawdown": -0.11502013068303962,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.08306629011331479,
      "cumulativeWealth": 1.2523621563973604,
      "drawdown": -0.041508136113913685,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03127765207234168,
      "cumulativeWealth": 1.2915331041937246,
      "drawdown": -0.011528761081114336,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013276944555093317,
      "cumulativeWealth": 1.3086807176091722,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.040668128773717394,
      "cumulativeWealth": 1.3619023135565829,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03858343736945691,
      "cumulativeWealth": 1.4144491861750117,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02285535587875198,
      "cumulativeWealth": 1.3821214466525706,
      "drawdown": -0.02285535587875198,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.017193530778472743,
      "cumulativeWealth": 1.3583578990199623,
      "drawdown": -0.03965592239247051,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07009343370332721,
      "cumulativeWealth": 1.4535698683603089,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022571899199178347,
      "cumulativeWealth": 1.4863797009079007,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.009092587630801674,
      "cumulativeWealth": 1.4728646632247508,
      "drawdown": -0.009092587630801674,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.010610829016284962,
      "cumulativeWealth": 1.4884929783303569,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022654247199078492,
      "cumulativeWealth": 1.5222136662155454,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0346744305870359,
      "cumulativeWealth": 1.574995558323374,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0047549038378571495,
      "cumulativeWealth": 1.5824845107482537,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016768267515246738,
      "cumulativeWealth": 1.6090200343632148,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019113789999045894,
      "cumulativeWealth": 1.639774505404291,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01705446355753537,
      "cumulativeWealth": 1.667739979949284,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03163227140018343,
      "cumulativeWealth": 1.6149855762785919,
      "drawdown": -0.03163227140018343,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04206331175862221,
      "cumulativeWealth": 1.6829172180592764,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0037376768734008747,
      "cumulativeWealth": 1.676627017293488,
      "drawdown": -0.0037376768734008747,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02631375152378812,
      "cumulativeWealth": 1.7207453640246189,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.039639268541784234,
      "cumulativeWealth": 1.6525362764480167,
      "drawdown": -0.039639268541784234,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02229263181332608,
      "cumulativeWealth": 1.6156968936789962,
      "drawdown": -0.06104823673615878,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011305482982722381,
      "cumulativeWealth": 1.6339631274157214,
      "drawdown": -0.05043293355498235,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.06788503387826705,
      "cumulativeWealth": 1.5230414851552658,
      "drawdown": -0.11489432603028904,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.004396801273901962,
      "cumulativeWealth": 1.529737995897402,
      "drawdown": -0.11100269227544124,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.05568840026012256,
      "cumulativeWealth": 1.4445493340887499,
      "drawdown": -0.1605095301781777,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06540478959737839,
      "cumulativeWealth": 1.5390297793478576,
      "drawdown": -0.1056028326304771,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03665034804826661,
      "cumulativeWealth": 1.4826238022781115,
      "drawdown": -0.138382800107954,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07204754219195497,
      "cumulativeWealth": 1.3758044013286825,
      "drawdown": -0.20046020167049028,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04365120712159176,
      "cumulativeWealth": 1.4358599242098784,
      "drawdown": -0.1655593243316532,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04858883717856721,
      "cumulativeWealth": 1.505626688278542,
      "drawdown": -0.12501482220643023,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.038970553132829044,
      "cumulativeWealth": 1.4469515834247777,
      "drawdown": -0.15911347856807245,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05105333057001338,
      "cumulativeWealth": 1.5208232809321671,
      "drawdown": -0.11618342101753965,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.025748285326354314,
      "cumulativeWealth": 1.4816646891637635,
      "drawdown": -0.13894018246934225,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03281164526356961,
      "cumulativeWealth": 1.530280545344162,
      "drawdown": -0.11068739318581244,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0118870911245601,
      "cumulativeWealth": 1.5484711296328095,
      "drawdown": -0.10011605319039207,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0018074718003354695,
      "cumulativeWealth": 1.5456723117323645,
      "drawdown": -0.10174256804782511,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.037406921522394665,
      "cumulativeWealth": 1.6034911545966755,
      "drawdown": -0.0681415227838823,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019578483599747676,
      "cumulativeWealth": 1.6348850798692869,
      "drawdown": -0.04989714687042068,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012276325896408258,
      "cumulativeWealth": 1.6148146978256361,
      "drawdown": -0.06156091913054673,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03881913088397593,
      "cumulativeWealth": 1.5521289947173746,
      "drawdown": -0.09799030863745617,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.019307885746518982,
      "cumulativeWealth": 1.5221606654235122,
      "drawdown": -0.11540620870053697,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07317807662604348,
      "cumulativeWealth": 1.6335494552350234,
      "drawdown": -0.05067333645790251,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04099510909792281,
      "cumulativeWealth": 1.7005169933692355,
      "drawdown": -0.011755586316427258,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.008951436263206602,
      "cumulativeWealth": 1.7157390628498799,
      "drawdown": -0.0029093794348687974,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025413614873910362,
      "cumulativeWealth": 1.7593421946172707,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023231191678656726,
      "cumulativeWealth": 1.800213810368773,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03410470248731934,
      "cumulativeWealth": 1.7388180539525826,
      "drawdown": -0.03410470248731934,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03702589595714367,
      "cumulativeWealth": 1.803199350306634,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.024710040686224177,
      "cumulativeWealth": 1.8477564796180839,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0169422008162865,
      "cumulativeWealth": 1.8790615409553681,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019865210039998082,
      "cumulativeWealth": 1.9163894931445289,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017934057423923067,
      "cumulativeWealth": 1.9507581323611858,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.015429126311213293,
      "cumulativeWealth": 1.9206596387343584,
      "drawdown": -0.015429126311213293,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04022416289441644,
      "cumulativeWealth": 1.9979165649075403,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022446350007522153,
      "cumulativeWealth": 1.9530706304057994,
      "drawdown": -0.022446350007522153,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.018177820753773277,
      "cumulativeWealth": 1.988573198244775,
      "drawdown": -0.004676554980762027,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.001332530204868121,
      "cumulativeWealth": 1.9912230320960274,
      "drawdown": -0.003350256426660536,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03353666682325496,
      "cumulativeWealth": 1.9244440486978314,
      "drawdown": -0.03677456681636204,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.003477884606921333,
      "cumulativeWealth": 1.9177510543639837,
      "drawdown": -0.040124553723426604,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03527941071147489,
      "cumulativeWealth": 1.9854081814532547,
      "drawdown": -0.006260713622375125,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.036653162525073224,
      "cumulativeWealth": 2.058179670206671,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.012762968769337135,
      "cumulativeWealth": 2.084448153059203,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017073105852202675,
      "cumulativeWealth": 2.120036157019811,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025879373323751675,
      "cumulativeWealth": 2.174901364187179,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016764397327994507,
      "cumulativeWealth": 2.21136227480561,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003592747420193776,
      "cumulativeWealth": 2.2193071409135317,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006373837347125599,
      "cumulativeWealth": 2.217892590639582,
      "drawdown": -0.0006373837347124489,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00984388845748918,
      "cumulativeWealth": 2.23972527791253,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.001207243469606878,
      "cumulativeWealth": 2.2424291716280034,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.036805959695451196,
      "cumulativeWealth": 2.159894413917159,
      "drawdown": -0.036805959695451085,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06370679814674673,
      "cumulativeWealth": 2.2974943713628657,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03274989947370455,
      "cumulativeWealth": 2.3727370810664015,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.00515855802786469,
      "cumulativeWealth": 2.360497179148854,
      "drawdown": -0.00515855802786469,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0049771503163373865,
      "cumulativeWealth": 2.34874862986694,
      "drawdown": -0.01011003342548178,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01763789645151026,
      "cumulativeWealth": 2.3901756149911595,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00015363804566081996,
      "cumulativeWealth": 1.0001536380456608,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010285806296455036,
      "cumulativeWealth": 1.0011823767044241,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0003276449516371738,
      "cumulativeWealth": 1.0015104090558193,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011379980108192633,
      "cumulativeWealth": 1.0026501259091396,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007215321698179622,
      "cumulativeWealth": 1.003373570230055,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000700117559457869,
      "cumulativeWealth": 1.004076049685269,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000546925024422551,
      "cumulativeWealth": 1.0046252040032653,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007442004947559866,
      "cumulativeWealth": 1.0053728465771288,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013125868802938978,
      "cumulativeWealth": 1.0066924857853496,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0008311546864667729,
      "cumulativeWealth": 1.007529202962741,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013011851872553049,
      "cumulativeWealth": 1.0088401850373632,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001039678154683532,
      "cumulativeWealth": 1.0098890541393135,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014983041184515322,
      "cumulativeWealth": 1.0114021750683095,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014870905177155613,
      "cumulativeWealth": 1.0129062216524505,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013884988755772376,
      "cumulativeWealth": 1.01431264080228,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001585757326377335,
      "cumulativeWealth": 1.0159210945036694,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001399983901622548,
      "cumulativeWealth": 1.0173433676812933,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017053957104493644,
      "cumulativeWealth": 1.019078340696591,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018595997577162127,
      "cumulativeWealth": 1.0209734185320443,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 7.606925446079771e-05,
      "cumulativeWealth": 1.0210510832188162,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001749462419647907,
      "cumulativeWealth": 1.0228373737174483,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018483046484902843,
      "cumulativeWealth": 1.0247278887899398,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001749688114536907,
      "cumulativeWealth": 1.02652084299759,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00192494675409427,
      "cumulativeWealth": 1.0284968409623283,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002122099803683941,
      "cumulativeWealth": 1.030679413906624,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018152496324348455,
      "cumulativeWealth": 1.032550354333876,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018041959353560788,
      "cumulativeWealth": 1.0344132774862158,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016947540331815336,
      "cumulativeWealth": 1.0361663535602121,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001618732723904337,
      "cumulativeWealth": 1.0378436299441287,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016076894608110237,
      "cumulativeWealth": 1.0395121602099597,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010820587783386681,
      "cumulativeWealth": 1.0406369734681047,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011159082816041277,
      "cumulativeWealth": 1.0417982288849412,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0012028141553679372,
      "cumulativeWealth": 1.0430513185416812,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001181105073930766,
      "cumulativeWealth": 1.044283271746381,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002044953277652972,
      "cumulativeWealth": 1.046418782245737,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00019631686477250554,
      "cumulativeWealth": 1.0462133525911674,
      "drawdown": -0.00019631686477250554,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00017475930289789776,
      "cumulativeWealth": 1.0460305170749862,
      "drawdown": -0.00037104185947189894,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0460305170749855,
      "drawdown": -0.00037104185947245405,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010919388633556792,
      "cumulativeWealth": 1.0461447372123704,
      "drawdown": -0.00026188848863961667,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0461447372123698,
      "drawdown": -0.0002618884886402828,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021836392866803056,
      "cumulativeWealth": 1.0459162969375968,
      "drawdown": -0.00048019523030895517,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010920581094286952,
      "cumulativeWealth": 1.0460305170749822,
      "drawdown": -0.0003710418594756737,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0001091938863374553,
      "cumulativeWealth": 1.0459162969375952,
      "drawdown": -0.00048019523031039846,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 3.275178833228587e-05,
      "cumulativeWealth": 1.0459505525667658,
      "drawdown": -0.00044745916923072393,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 1.1102230246251565e-15,
      "cumulativeWealth": 1.045950552566767,
      "drawdown": -0.0004474591692296137,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010920223437427268,
      "cumulativeWealth": 1.0458363324293816,
      "drawdown": -0.0005566125400628952,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010951283216620311,
      "cumulativeWealth": 1.045721799930635,
      "drawdown": -0.0006660644160133566,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.045721799930635,
      "drawdown": -0.0006660644160133566,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010912655444350605,
      "cumulativeWealth": 1.045607683913702,
      "drawdown": -0.0007751182851422067,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021827692869569315,
      "cumulativeWealth": 1.0453794518798367,
      "drawdown": -0.0009932260233992407,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010936149321916222,
      "cumulativeWealth": 1.0452651276219984,
      "drawdown": -0.0011024788959375087,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0001096722890397972,
      "cumulativeWealth": 1.0451504910027987,
      "drawdown": -0.0012120302735930677,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0001096843183694407,
      "cumulativeWealth": 1.0452651276219977,
      "drawdown": -0.0011024788959380638,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010967228904046333,
      "cumulativeWealth": 1.0451504910027973,
      "drawdown": -0.0012120302735944,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021857165713456972,
      "cumulativeWealth": 1.044922050728024,
      "drawdown": -0.0014303370152635164,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.044922050728024,
      "drawdown": -0.0014303370152635164,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -2.220446049250313e-16,
      "cumulativeWealth": 1.0449220507280237,
      "drawdown": -0.0014303370152637385,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021891837383836155,
      "cumulativeWealth": 1.0446932980918904,
      "drawdown": -0.0016489422620487026,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0004593608197014376,
      "cumulativeWealth": 1.0451731892616385,
      "drawdown": -0.0011903389018164123,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010848649288375256,
      "cumulativeWealth": 1.0450598020878794,
      "drawdown": -0.0012986962590072482,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000327885936741934,
      "cumulativeWealth": 1.0454024625000384,
      "drawdown": -0.0009712361465047392,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007760710367932244,
      "cumulativeWealth": 1.046213769072977,
      "drawdown": -0.00019591885795477992,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0003613614898725359,
      "cumulativeWealth": 1.0465918304392943,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019371768532427946,
      "cumulativeWealth": 1.0486192639080143,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0020673775840109876,
      "cumulativeWealth": 1.05078715586838,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0015856070243125409,
      "cumulativeWealth": 1.0524532913637823,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031518486875197205,
      "cumulativeWealth": 1.055770464888843,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036258758103515643,
      "cumulativeWealth": 1.0595985574787672,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028422878584644096,
      "cumulativeWealth": 1.0626102415935355,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034574202794432907,
      "cumulativeWealth": 1.0662841317919651,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00399135971930531,
      "cumulativeWealth": 1.070540055324934,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036304145229801854,
      "cumulativeWealth": 1.0744265594892177,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037516935872039525,
      "cumulativeWealth": 1.078457478722375,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004606196284978381,
      "cumulativeWealth": 1.0834250655543731,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0038601712152717127,
      "cumulativeWealth": 1.0876072718063299,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0049669413069377555,
      "cumulativeWealth": 1.0930093532903906,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00399102761816672,
      "cumulativeWealth": 1.0973715838062872,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004309335891849342,
      "cumulativeWealth": 1.102100526559079,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004682158792638003,
      "cumulativeWealth": 1.1072607362298788,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00033894647988752524,
      "cumulativeWealth": 1.106885434101016,
      "drawdown": -0.00033894647988752524,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004267555715024018,
      "cumulativeWealth": 1.1116091293611905,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004443258895818092,
      "cumulativeWealth": 1.1165482965138973,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004101691274678965,
      "cumulativeWealth": 1.121128032919466,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004321778853420888,
      "cumulativeWealth": 1.1259733003441146,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004573338408172534,
      "cumulativeWealth": 1.1311227572851552,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003992765083280725,
      "cumulativeWealth": 1.1356390647353476,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004508129545592876,
      "cumulativeWealth": 1.1407586727562105,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004617182259590402,
      "cumulativeWealth": 1.1460257634625344,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00422200865238187,
      "cumulativeWealth": 1.1508642941517258,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003948229402556347,
      "cumulativeWealth": 1.1554081703962478,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707102401673046,
      "cumulativeWealth": 1.1596913867996363,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004031230665272556,
      "cumulativeWealth": 1.1643663702803555,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003500024122137013,
      "cumulativeWealth": 1.1684416806633418,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032376795255197877,
      "cumulativeWealth": 1.1722247203695895,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00327020040819348,
      "cumulativeWealth": 1.1760581301286366,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003402306257266341,
      "cumulativeWealth": 1.1800594400636821,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036319450970541123,
      "cumulativeWealth": 1.1843453511612538,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003347258219225324,
      "cumulativeWealth": 1.1883096608723296,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035654750031679505,
      "cumulativeWealth": 1.192546549264193,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00370802561671546,
      "cumulativeWealth": 1.1969685424179901,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033021737961504982,
      "cumulativeWealth": 1.2009211405735793,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003510685415177628,
      "cumulativeWealth": 1.2051371969065694,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028757619083450425,
      "cumulativeWealth": 1.2086028845517631,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003351937869094712,
      "cumulativeWealth": 1.2126540463291893,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002954684804846508,
      "cumulativeWealth": 1.2162370568134138,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0026703086577188895,
      "cumulativeWealth": 1.219484785156061,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028781328112328364,
      "cumulativeWealth": 1.222994624329018,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028891946847566796,
      "cumulativeWealth": 1.2265280938971153,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031740030878126824,
      "cumulativeWealth": 1.2304210978544337,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002724432772742702,
      "cumulativeWealth": 1.2337732974177023,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00337083474845401,
      "cumulativeWealth": 1.2379321433203525,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0027678474251318086,
      "cumulativeWealth": 1.2413585506157296,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    }
  ],
  "corePerformanceSummary": [
    {
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.1378941431989198,
      "annVol": 0.11811115281650654,
      "sharpeRf0": 1.1554804193454413,
      "maxDrawdown": -0.14451090610588646,
      "calmar": 0.9542127090247541,
      "cumulativeReturn": 2.3390073844013197,
      "terminalWealth": 3.3390073844013197,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.12297861083147232,
      "annVol": 0.10522455883590237,
      "sharpeRf0": 1.1575817875182326,
      "maxDrawdown": -0.13041380666478242,
      "calmar": 0.9429876634732269,
      "cumulativeReturn": 1.9521189632285227,
      "terminalWealth": 2.9521189632285227,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "seriesId": "F2R",
      "displayName": "F2R",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.1798046710301886,
      "annVol": 0.17652718270568216,
      "sharpeRf0": 1.0272399048865763,
      "maxDrawdown": -0.2197163487735896,
      "calmar": 0.8183490761330253,
      "cumulativeReturn": 3.679804441264613,
      "terminalWealth": 4.679804441264613,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.09785769746226203,
      "annVol": 0.11483073261937646,
      "sharpeRf0": 0.8724414812614767,
      "maxDrawdown": -0.21630729477660626,
      "calmar": 0.45240128199710344,
      "cumulativeReturn": 1.3901756149911555,
      "terminalWealth": 2.3901756149911555,
      "seriesRole": "REFERENCE"
    },
    {
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.023435361593949544,
      "annVol": 0.002968381727717265,
      "sharpeRf0": 7.822375375208489,
      "maxDrawdown": -0.004474473916887045,
      "calmar": 5.237568042469193,
      "cumulativeReturn": 0.2413585506157323,
      "terminalWealth": 1.2413585506157323,
      "seriesRole": "CASH_COMPARATOR"
    }
  ],
  "coreCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.1105935694063831,
      "monthsObserved": 8,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2018",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": -0.014427551293404672,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2019",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.16495655580917234,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2020",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.30836440855434,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.14924279794494932,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": -0.09077970895763576,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.15961255119635798,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.11289937652602844,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.23829251522990913,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.19856683109539408,
      "monthsObserved": 8,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2017",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09854762324871058,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.013958219628033897,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12912081771220718,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.26532209927865114,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12959676168163203,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.07432827877242942,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12076845782008849,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09004536921184458,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.22007807912252764,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.19021347837949198,
      "monthsObserved": 8,
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
      "annualReturn": 0.18208849345402145,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.29364455148056456,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.22087439169571121,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.08858950644192953,
      "monthsObserved": 8,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2018",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.023313216458598407,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2019",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.2193147961546711,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2020",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14655387707538425,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2021",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.15767550039439104,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2022",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.15911347856807212,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2023",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.1752411157699525,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2024",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14851579726714692,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2025",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.13559261816289747,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2026",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.07767870503679153,
      "monthsObserved": 8,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2017",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.005372846577128776,
      "monthsObserved": 8,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2018",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.015594450054092324,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2019",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.020319400279876998,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2020",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.003985727338266631,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": -0.000983317840616671,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2022",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.01404555176198774,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2023",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.044627162134652565,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2024",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.05193033931829105,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2025",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04147120466662657,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2026",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.02367081062684928,
      "monthsObserved": 8,
      "seriesRole": "CASH_COMPARATOR"
    }
  ],
  "fxPerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.031410469790219775,
      "cumulativeWealth": 1.0314104697902198,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0038427104465332818,
      "cumulativeWealth": 1.027447058003293,
      "drawdown": -0.0038427104465332818,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020183023584950055,
      "cumulativeWealth": 1.0481840462072611,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00998628381717026,
      "cumulativeWealth": 1.0586515095853168,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0020338808802251584,
      "cumulativeWealth": 1.060804680649484,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.022721674426452676,
      "cumulativeWealth": 1.0849079392332586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.011440525964454329,
      "cumulativeWealth": 1.0973198566810993,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012096484579647404,
      "cumulativeWealth": 1.110593569406383,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05371805666265406,
      "cumulativeWealth": 1.1702524976969344,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.039014220303981606,
      "cumulativeWealth": 1.1245960089405014,
      "drawdown": -0.03901422030398172,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004862167484639968,
      "cumulativeWealth": 1.119128034792475,
      "drawdown": -0.04368669411522108,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.004705940143709064,
      "cumulativeWealth": 1.124394584337355,
      "drawdown": -0.03918634093909479,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.011900359937887073,
      "cumulativeWealth": 1.1377752846031806,
      "drawdown": -0.027752312563031678,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.003809167539866598,
      "cumulativeWealth": 1.1334413079214076,
      "drawdown": -0.031455766894726955,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010351228887823583,
      "cumulativeWealth": 1.1451738183306162,
      "drawdown": -0.02143014384987285,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02602427245077088,
      "cumulativeWealth": 1.1749761337823417,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0029007117694792584,
      "cumulativeWealth": 1.171567866682222,
      "drawdown": -0.0029007117694792584,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.047446966894848175,
      "cumulativeWealth": 1.1159805248966828,
      "drawdown": -0.05021004868902945,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005968988651928742,
      "cumulativeWealth": 1.1226417999855645,
      "drawdown": -0.04454076324793832,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.025004748859590586,
      "cumulativeWealth": 1.0945704237176468,
      "drawdown": -0.06843178150849971,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02761967517864905,
      "cumulativeWealth": 1.1248021032808844,
      "drawdown": -0.0427021699070117,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.007198115572444985,
      "cumulativeWealth": 1.1328985588164293,
      "drawdown": -0.0358114294887516,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.014412210955078164,
      "cumulativeWealth": 1.1492261318367958,
      "drawdown": -0.021915340410068262,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019943938430690977,
      "cumulativeWealth": 1.17214622705309,
      "drawdown": -0.002408480179203254,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.037502627796499155,
      "cumulativeWealth": 1.1281876633768473,
      "drawdown": -0.03982078363998642,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03796279898602495,
      "cumulativeWealth": 1.1710168248601358,
      "drawdown": -0.0033696930587522322,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006549721863105651,
      "cumulativeWealth": 1.1786866593599867,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026591536044173747,
      "cumulativeWealth": 1.2100297481471445,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004569939043895799,
      "cumulativeWealth": 1.2044999859568115,
      "drawdown": -0.004569939043895688,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.018221866502595274,
      "cumulativeWealth": 1.2264482239032943,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012355259919574868,
      "cumulativeWealth": 1.2416013104875205,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02700196925856324,
      "cumulativeWealth": 1.2751269909046965,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0038930639265932765,
      "cumulativeWealth": 1.280091141794813,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.011579736846717092,
      "cumulativeWealth": 1.2652680232330156,
      "drawdown": -0.011579736846717092,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02749985569536062,
      "cumulativeWealth": 1.2304733351781534,
      "drawdown": -0.038761151449802744,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0790968855586196,
      "cumulativeWealth": 1.3277999437536727,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025546996587939352,
      "cumulativeWealth": 1.361721244386214,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026886428100033166,
      "cumulativeWealth": 1.3983330647156915,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0572313543527434,
      "cumulativeWealth": 1.478361559845593,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04637829586206821,
      "cumulativeWealth": 1.5469254496592206,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03308760445171932,
      "cumulativeWealth": 1.4957413922645983,
      "drawdown": -0.03308760445171932,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017690529340965155,
      "cumulativeWealth": 1.4692809352782454,
      "drawdown": -0.05019279655530906,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07756619894803629,
      "cumulativeWealth": 1.5832474726145946,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0537397344027315,
      "cumulativeWealth": 1.6683307712866988,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.007071435646766044,
      "cumulativeWealth": 1.6801282649733722,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01448783011555732,
      "cumulativeWealth": 1.7044696778486526,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.014374620106004432,
      "cumulativeWealth": 1.7289707819499307,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.039279283939650744,
      "cumulativeWealth": 1.796883516217502,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.018031826015660668,
      "cumulativeWealth": 1.8292846071523448,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0094452295056211,
      "cumulativeWealth": 1.8465626200979985,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009867115356349432,
      "cumulativeWealth": 1.8647828664832284,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012739493109405808,
      "cumulativeWealth": 1.8885392549613296,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.04240753062108937,
      "cumulativeWealth": 1.8084509686774277,
      "drawdown": -0.04240753062108937,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.046499333119706776,
      "cumulativeWealth": 1.892542732700616,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01563258645214316,
      "cumulativeWealth": 1.8629573948172982,
      "drawdown": -0.01563258645214316,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.029179265626315898,
      "cumulativeWealth": 1.9173171234911817,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03579145691283003,
      "cumulativeWealth": 1.848693550277516,
      "drawdown": -0.03579145691283003,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0006661855640783809,
      "cumulativeWealth": 1.8499251232331155,
      "drawdown": -0.03514911510066432,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.027419824905760892,
      "cumulativeWealth": 1.9006497462009357,
      "drawdown": -0.008693072776556066,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02430665435942625,
      "cumulativeWealth": 1.8544513097616984,
      "drawdown": -0.03278842762068124,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0024152643390117357,
      "cumulativeWealth": 1.8499723196447972,
      "drawdown": -0.03512449923972849,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03426805281635992,
      "cumulativeWealth": 1.7865773704864054,
      "drawdown": -0.06818890386099319,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02506405710666204,
      "cumulativeWealth": 1.8313562477257468,
      "drawdown": -0.044833937334743834,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.023393164548728085,
      "cumulativeWealth": 1.7885150296753571,
      "drawdown": -0.06717829421003285,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.04387597064504767,
      "cumulativeWealth": 1.7100421967350945,
      "drawdown": -0.10810675199033681,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021444834641100252,
      "cumulativeWealth": 1.7467137688733825,
      "drawdown": -0.0889802487692557,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.024457622129587353,
      "cumulativeWealth": 1.789434234201035,
      "drawdown": -0.06669887194106361,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02580178711093517,
      "cumulativeWealth": 1.7432636330411606,
      "drawdown": -0.09077970895763587,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05478430636351206,
      "cumulativeWealth": 1.8387671219860566,
      "drawdown": -0.040968705981249354,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03169177980871618,
      "cumulativeWealth": 1.7804933192365677,
      "drawdown": -0.07136211458095976,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.024044443159292106,
      "cumulativeWealth": 1.8233042896464506,
      "drawdown": -0.04903353372943653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00838788660073675,
      "cumulativeWealth": 1.838597959266642,
      "drawdown": -0.041056934849255655,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.007275169523709879,
      "cumulativeWealth": 1.8519740711062538,
      "drawdown": -0.03408046148669808,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.027348112299455885,
      "cumulativeWealth": 1.9026220659785482,
      "drawdown": -0.007664385475197544,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025745884872580227,
      "cumulativeWealth": 1.9516067546452627,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02079978326122256,
      "cumulativeWealth": 1.9110137571375032,
      "drawdown": -0.02079978326122256,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02853849238345385,
      "cumulativeWealth": 1.856476305584759,
      "drawdown": -0.048744681188498507,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.012162247413205707,
      "cumulativeWealth": 1.8338973814394832,
      "drawdown": -0.060314083729011814,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04963290142649246,
      "cumulativeWealth": 1.9249190293987717,
      "drawdown": -0.01367474527487067,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05017944030097188,
      "cumulativeWealth": 2.021510388918692,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.011722766501297444,
      "cumulativeWealth": 1.9978126946494512,
      "drawdown": -0.011722766501297444,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02864485906037828,
      "cumulativeWealth": 2.0550397577167194,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02679724091115343,
      "cumulativeWealth": 2.1101091531862526,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03738683535855469,
      "cumulativeWealth": 2.031218849687499,
      "drawdown": -0.03738683535855469,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025244346858884326,
      "cumulativeWealth": 2.082495642875314,
      "drawdown": -0.013086294739417803,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025988075469340233,
      "cumulativeWealth": 2.13661569680693,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01285821790533248,
      "cumulativeWealth": 2.1640887670164273,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.015345401900862976,
      "cumulativeWealth": 2.197297578895437,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.024515795429245202,
      "cumulativeWealth": 2.2511660768368134,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.008967745823449502,
      "cumulativeWealth": 2.2309781916533686,
      "drawdown": -0.008967745823449613,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03286870037228695,
      "cumulativeWealth": 2.30430754537193,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02368168867607523,
      "cumulativeWealth": 2.249737651468501,
      "drawdown": -0.02368168867607512,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021703174418991722,
      "cumulativeWealth": 2.2985641001152946,
      "drawdown": -0.002492482076956626,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.005547519193577544,
      "cumulativeWealth": 2.2858127716522367,
      "drawdown": -0.008026174178372592,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.019208619322850895,
      "cumulativeWealth": 2.241905464278258,
      "drawdown": -0.027080621776812253,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0038475488289866355,
      "cumulativeWealth": 2.2505313050220406,
      "drawdown": -0.023337266962431213,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.022292447723478936,
      "cumulativeWealth": 2.300701156489297,
      "drawdown": -0.0015650640427211648,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03975497840916509,
      "cumulativeWealth": 2.3921654812914706,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.004200264439401247,
      "cumulativeWealth": 2.4022132088957022,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02299639405460141,
      "cumulativeWealth": 2.4574554504506363,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06663035039518594,
      "cumulativeWealth": 2.621196568194722,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04306511312470307,
      "cumulativeWealth": 2.734078694926111,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0011874067769741536,
      "cumulativeWealth": 2.730832231354975,
      "drawdown": -0.0011874067769741536,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020140769930085956,
      "cumulativeWealth": 2.785833295044359,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07501569354112703,
      "cumulativeWealth": 2.994814511762075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.052504638235360446,
      "cumulativeWealth": 3.1520561642841503,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.07517037460183285,
      "cumulativeWealth": 2.9151149216488945,
      "drawdown": -0.07517037460183273,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.09366032387023049,
      "cumulativeWealth": 3.1881455293294714,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06808225108441812,
      "cumulativeWealth": 3.4052016537509457,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.023484667280046723,
      "cumulativeWealth": 3.32523162589114,
      "drawdown": -0.023484667280046723,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.05040037280729803,
      "cumulativeWealth": 3.1576387122756087,
      "drawdown": -0.0727014041011751,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.057438069599496044,
      "cumulativeWealth": 3.3390073844013584,
      "drawdown": -0.01943916281042335,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.015761317066383063,
      "cumulativeWealth": 1.015761317066383,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02029964657757155,
      "cumulativeWealth": 1.0363809128099992,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.004214738633115722,
      "cumulativeWealth": 1.0320128381381553,
      "drawdown": -0.004214738633115611,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014328791203992441,
      "cumulativeWealth": 1.0468003346156765,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022011327429949157,
      "cumulativeWealth": 1.0698417995346825,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00264994148545461,
      "cumulativeWealth": 1.0726768177021428,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.027083180501873638,
      "cumulativeWealth": 1.0436253178281403,
      "drawdown": -0.027083180501873638,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.001635135170876545,
      "cumulativeWealth": 1.0453317862905382,
      "drawdown": -0.025492329991974927,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05672312595104323,
      "cumulativeWealth": 1.1046262728649254,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.032876706654507704,
      "cumulativeWealth": 1.068309798929083,
      "drawdown": -0.032876706654507704,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.020894798183279994,
      "cumulativeWealth": 1.0459876812832394,
      "drawdown": -0.05308455268731094,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.011753972343491625,
      "cumulativeWealth": 1.0582821915606755,
      "drawdown": -0.04195453470797261,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02183533049701003,
      "cumulativeWealth": 1.0813901329725029,
      "drawdown": -0.021035295342159532,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.033632820768488614,
      "cumulativeWealth": 1.117760333495579,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.002831267301827145,
      "cumulativeWealth": 1.1209250117790845,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.029022455360194765,
      "cumulativeWealth": 1.1534570078955688,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005707457739108079,
      "cumulativeWealth": 1.1468737007691268,
      "drawdown": -0.005707457739108079,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.025703731725251755,
      "cumulativeWealth": 1.1173947668418105,
      "drawdown": -0.03126448650180058,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012316473957511898,
      "cumulativeWealth": 1.1036324032957432,
      "drawdown": -0.04319589222551812,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02563317807682719,
      "cumulativeWealth": 1.0753427973707066,
      "drawdown": -0.06772182230474122,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02089955202411109,
      "cumulativeWealth": 1.0978169801081088,
      "drawdown": -0.04823762602905568,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.012738137137095373,
      "cumulativeWealth": 1.1118011233521579,
      "drawdown": -0.03611394638748633,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03189671763816615,
      "cumulativeWealth": 1.1472639298535177,
      "drawdown": -0.005369145100041606,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04596591081800905,
      "cumulativeWealth": 1.199998961337883,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.016717997458409406,
      "cumulativeWealth": 1.1799373817521424,
      "drawdown": -0.016717997458409406,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00925326836929341,
      "cumulativeWealth": 1.1908556590044563,
      "drawdown": -0.00761942520619574,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03337924330326425,
      "cumulativeWealth": 1.230605519785435,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04463438100548789,
      "cumulativeWealth": 1.2855328354229947,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012123347973677312,
      "cumulativeWealth": 1.2699478735275738,
      "drawdown": -0.012123347973677201,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.010930937953913866,
      "cumulativeWealth": 1.256066152117339,
      "drawdown": -0.022921766363097063,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02393428234167083,
      "cumulativeWealth": 1.2861291940419315,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008975023343544386,
      "cumulativeWealth": 1.2976722335812718,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.030606264805639327,
      "cumulativeWealth": 1.3373891335931856,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00856140221718693,
      "cumulativeWealth": 1.3488390598867719,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.023204628397906157,
      "cumulativeWealth": 1.3175397507335183,
      "drawdown": -0.023204628397906157,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.07581516560413903,
      "cumulativeWealth": 1.417429245125416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.046701203413541004,
      "cumulativeWealth": 1.48362489662632,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005952874014066412,
      "cumulativeWealth": 1.474793064532571,
      "drawdown": -0.005952874014066412,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04944148103565538,
      "cumulativeWealth": 1.5477090178641744,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04416159925763985,
      "cumulativeWealth": 1.6160583232785275,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.05203422042325356,
      "cumulativeWealth": 1.5319679882682191,
      "drawdown": -0.05203422042325356,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.046608306936773314,
      "cumulativeWealth": 1.4605655540537028,
      "drawdown": -0.0962173004433241,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05353478694795388,
      "cumulativeWealth": 1.538756619813488,
      "drawdown": -0.0478334861753108,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03665028941770454,
      "cumulativeWealth": 1.5951524952730611,
      "drawdown": -0.012936307869789165,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.031051969941984447,
      "cumulativeWealth": 1.6446851226091617,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020726366683734065,
      "cumulativeWealth": 1.6787734695396412,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02168918469236658,
      "cumulativeWealth": 1.7151846973771316,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020313776508820602,
      "cumulativeWealth": 1.7500265759909999,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.027847612930331778,
      "cumulativeWealth": 1.798760638696991,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020557824015907,
      "cumulativeWealth": 1.8357392433540642,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.021060065322261234,
      "cumulativeWealth": 1.8744000317337393,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02718418015929469,
      "cumulativeWealth": 1.925354059886977,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.021485228586250904,
      "cumulativeWealth": 1.883987387800839,
      "drawdown": -0.021485228586250904,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03204469944732202,
      "cumulativeWealth": 1.9443591974054624,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0040738148982057965,
      "cumulativeWealth": 1.9522801568713162,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02844461552930788,
      "cumulativeWealth": 2.0078120153390175,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.021351345442239822,
      "cumulativeWealth": 1.9649425274164345,
      "drawdown": -0.021351345442239822,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00771888803752141,
      "cumulativeWealth": 1.9497753560471427,
      "drawdown": -0.028905424834842153,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.041927047621299174,
      "cumulativeWealth": 2.0315236802509666,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022120152192727227,
      "cumulativeWealth": 2.0764612932412474,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.026369128197827663,
      "cumulativeWealth": 2.021706819201942,
      "drawdown": -0.026369128197827663,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0014839320341237805,
      "cumulativeWealth": 2.024706894714562,
      "drawdown": -0.024924326157748644,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03098661877331299,
      "cumulativeWealth": 2.0874457153887804,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01213008205983157,
      "cumulativeWealth": 2.1127666032118904,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01874445720729878,
      "cumulativeWealth": 2.1523692663948055,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.015359733098049944,
      "cumulativeWealth": 2.1854290838550754,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.044922892187001295,
      "cumulativeWealth": 2.087253288738717,
      "drawdown": -0.044922892187001184,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0736601448558788,
      "cumulativeWealth": 1.9335059091393136,
      "drawdown": -0.11527401029704054,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.030713395030478097,
      "cumulativeWealth": 1.992890439920473,
      "drawdown": -0.08810107148156288,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.036596929312907145,
      "cumulativeWealth": 2.065824110478611,
      "drawdown": -0.054728370854057906,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0070722077921214765,
      "cumulativeWealth": 2.08043404784989,
      "drawdown": -0.04804321347274054,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04174675372577674,
      "cumulativeWealth": 2.1672854156882004,
      "drawdown": -0.008302107948005233,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005998358828251837,
      "cumulativeWealth": 2.1542852600816658,
      "drawdown": -0.014250667753753943,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02838184650762976,
      "cumulativeWealth": 2.2154278536669527,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00925004197578072,
      "cumulativeWealth": 2.1949350530262195,
      "drawdown": -0.00925004197578072,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014991224032988137,
      "cumulativeWealth": 2.227839816143994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.011516823556660172,
      "cumulativeWealth": 2.2021821780689614,
      "drawdown": -0.011516823556660172,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012001031128797357,
      "cumulativeWealth": 2.175753721198673,
      "drawdown": -0.023379640927449152,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0031415901147777703,
      "cumulativeWealth": 2.1825890475813816,
      "drawdown": -0.02031150006149618,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0416042684942588,
      "cumulativeWealth": 2.273394068329586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026003547977025088,
      "cumulativeWealth": 2.3325103800560787,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03388648764896929,
      "cumulativeWealth": 2.411550964240942,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.039441840167886655,
      "cumulativeWealth": 2.506666971929246,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.011955882917674132,
      "cumulativeWealth": 2.476697555099259,
      "drawdown": -0.011955882917674132,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0179627439147394,
      "cumulativeWealth": 2.5211858390357684,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03443837413391759,
      "cumulativeWealth": 2.608011380221617,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0010388934533881455,
      "cumulativeWealth": 2.6053019342723434,
      "drawdown": -0.0010388934533880345,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.010663239979933126,
      "cumulativeWealth": 2.5775209745270136,
      "drawdown": -0.011691055463114108,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01102598226594953,
      "cumulativeWealth": 2.6059406750822616,
      "drawdown": -0.0007939785673709565,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03868027571485522,
      "cumulativeWealth": 2.7067391788909996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.043904964369499755,
      "cumulativeWealth": 2.825578466097738,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028234903429539715,
      "cumulativeWealth": 2.9053584012205946,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0037880990400991355,
      "cumulativeWealth": 2.9163641865914025,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00010878089938892721,
      "cumulativeWealth": 2.9166814313105656,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.004258578776273225,
      "cumulativeWealth": 2.904260513670036,
      "drawdown": -0.004258578776273225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.029030689982228686,
      "cumulativeWealth": 2.819947827070053,
      "drawdown": -0.03316563927828309,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01600714435373407,
      "cumulativeWealth": 2.7748085151321438,
      "drawdown": -0.04864189645650585,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0231314376095062,
      "cumulativeWealth": 2.8389938251782496,
      "drawdown": -0.02663561584009133,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03622893568906904,
      "cumulativeWealth": 2.9418475498922967,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.017776705104245893,
      "cumulativeWealth": 2.9941439062483806,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0810687334295388,
      "cumulativeWealth": 3.2368753604337086,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05857932289490497,
      "cumulativeWealth": 3.4264893273431167,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02503105862351873,
      "cumulativeWealth": 3.5122579825687037,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0037434137490170993,
      "cumulativeWealth": 3.5254058173907463,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06817491796574715,
      "cumulativeWealth": 3.765750069787328,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05512708684613643,
      "cumulativeWealth": 3.9733449009253383,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.029320171299689335,
      "cumulativeWealth": 3.8568457477974603,
      "drawdown": -0.029320171299689335,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.07233030125928197,
      "cumulativeWealth": 4.135812562646231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.08350197106187474,
      "cumulativeWealth": 4.481161063569655,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.011336500340193956,
      "cumulativeWealth": 4.531961747491276,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.12889544819761412,
      "cumulativeWealth": 3.9478125068339454,
      "drawdown": -0.12889544819761412,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.017257521010967336,
      "cumulativeWealth": 4.015941964117991,
      "drawdown": -0.11386234309213528,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.023329996954944754,
      "cumulativeWealth": 1.0233299969549448,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007959399609169138,
      "cumulativeWealth": 1.0314750893327589,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007769401091260564,
      "cumulativeWealth": 1.039489033017429,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.011893370941293613,
      "cumulativeWealth": 1.0518520616765117,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01176959850404824,
      "cumulativeWealth": 1.0642319381280996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012403342983140275,
      "cumulativeWealth": 1.0774319718703145,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.008090997949303458,
      "cumulativeWealth": 1.0687144719953978,
      "drawdown": -0.008090997949303458,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.006587745000386169,
      "cumulativeWealth": 1.075754890415126,
      "drawdown": -0.0015565543802058546,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05498136948326593,
      "cumulativeWealth": 1.1349013675184703,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.03618425503476819,
      "cumulativeWealth": 1.0938358069968748,
      "drawdown": -0.03618425503476819,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013082602200780502,
      "cumulativeWealth": 1.079525588260965,
      "drawdown": -0.048793473020997236,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008025494653305154,
      "cumulativeWealth": 1.0881893150976594,
      "drawdown": -0.0411595701245383,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016617708808370324,
      "cumulativeWealth": 1.1062725282643322,
      "drawdown": -0.025225839067175237,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014658098657657437,
      "cumulativeWealth": 1.122488380125887,
      "drawdown": -0.010937503247286706,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0063170972258541624,
      "cumulativeWealth": 1.1295792483580336,
      "drawdown": -0.004689499292853783,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.027262749815627707,
      "cumulativeWealth": 1.1603746848029435,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004546200766222475,
      "cumulativeWealth": 1.1550993885217873,
      "drawdown": -0.004546200766222364,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.03681580666973927,
      "cumulativeWealth": 1.112573472749635,
      "drawdown": -0.0411946353874707,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0033916027006772875,
      "cumulativeWealth": 1.1088000655547554,
      "drawdown": -0.044446522251514464,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.025563213571479726,
      "cumulativeWealth": 1.0804555726709084,
      "drawdown": -0.06887353988216927,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.024001506648788862,
      "cumulativeWealth": 1.1063881342820903,
      "drawdown": -0.046525101958787785,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009711281694081864,
      "cumulativeWealth": 1.1171325811170933,
      "drawdown": -0.03726563863567356,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02288668798324478,
      "cumulativeWealth": 1.1427000459370371,
      "drawdown": -0.015231837696379813,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0327033387810578,
      "cumulativeWealth": 1.1800701526644464,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.027351621966517303,
      "cumulativeWealth": 1.147793319954798,
      "drawdown": -0.027351621966517303,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.023265993229103055,
      "cumulativeWealth": 1.174497871565276,
      "drawdown": -0.004721991388892288,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019670075788779773,
      "cumulativeWealth": 1.1976003337127257,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.035376641089944094,
      "cumulativeWealth": 1.2399674108876781,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00858046824873282,
      "cumulativeWealth": 1.229327909889093,
      "drawdown": -0.00858046824873282,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00341133860465348,
      "cumulativeWealth": 1.2335215636458756,
      "drawdown": -0.005198400526662206,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.017848603271329866,
      "cumulativeWealth": 1.2555382006620213,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01776162084028976,
      "cumulativeWealth": 1.2778385941326798,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.017021444701766697,
      "cumulativeWealth": 1.2995892531004924,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.001734991377172368,
      "cumulativeWealth": 1.2973344769524973,
      "drawdown": -0.001734991377172368,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.025595814562773933,
      "cumulativeWealth": 1.2641281442545278,
      "drawdown": -0.027286397422388142,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07731169954289174,
      "cumulativeWealth": 1.3618600395268472,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0358650689757396,
      "cumulativeWealth": 1.410703243779781,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01008883866892285,
      "cumulativeWealth": 1.4249356012160015,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05306750796255644,
      "cumulativeWealth": 1.5005533825796618,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04500604626883642,
      "cumulativeWealth": 1.568087357544901,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.04280627495697842,
      "cumulativeWealth": 1.5009633789612722,
      "drawdown": -0.04280627495697842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0323952485041068,
      "cumulativeWealth": 1.452339297304258,
      "drawdown": -0.07381480354631886,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0652835304693633,
      "cumulativeWealth": 1.5471531340716742,
      "drawdown": -0.013350164053361646,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.044926013723330493,
      "cumulativeWealth": 1.616660557005072,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018824867303603332,
      "cumulativeWealth": 1.6470939774656619,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01738033328290256,
      "cumulativeWealth": 1.6757210197422767,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.017775582268866108,
      "cumulativeWealth": 1.7055079365883739,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029543514644096547,
      "cumulativeWealth": 1.7558946352885954,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.022632104603499625,
      "cumulativeWealth": 1.7956342263471707,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014800227888080775,
      "cumulativeWealth": 1.8222100221007465,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01521696457914734,
      "cumulativeWealth": 1.8499385274628208,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019708284480633775,
      "cumulativeWealth": 1.886397642233743,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.032177493788994926,
      "cumulativeWealth": 1.825698093817192,
      "drawdown": -0.032177493788994926,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0390121982794438,
      "cumulativeWealth": 1.896922589851591,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.006069213700383491,
      "cumulativeWealth": 1.8854097612806966,
      "drawdown": -0.006069213700383491,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02854123466092462,
      "cumulativeWealth": 1.9392216837094067,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.028809641419312415,
      "cumulativeWealth": 1.8833534023691834,
      "drawdown": -0.028809641419312415,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.003787717802747892,
      "cumulativeWealth": 1.8762197911581637,
      "drawdown": -0.03248823643036569,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.034402160865578235,
      "cumulativeWealth": 1.9407658062327684,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0013429777705785684,
      "cumulativeWealth": 1.9381594008970988,
      "drawdown": -0.0013429777705785684,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0147099959780429,
      "cumulativeWealth": 1.9096490839050964,
      "drawdown": -0.01603321855101769,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.016691590210440088,
      "cumulativeWealth": 1.8777740039508102,
      "drawdown": -0.03245718884764981,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02776833160550285,
      "cumulativeWealth": 1.9299166551727092,
      "drawdown": -0.005590139225050805,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.005926775562298148,
      "cumulativeWealth": 1.9184784723035593,
      "drawdown": -0.01148378328680022,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.012876269694069298,
      "cumulativeWealth": 1.8937756260919125,
      "drawdown": -0.0242121846901604,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018182676488966765,
      "cumulativeWealth": 1.9282095356438322,
      "drawdown": -0.006469750522505979,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010446463861410793,
      "cumulativeWealth": 1.9080665644125012,
      "drawdown": -0.016848628368891116,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.04949638058927475,
      "cumulativeWealth": 1.8136241755506701,
      "drawdown": -0.06551106283601194,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.042519532561175355,
      "cumulativeWealth": 1.8907386277367317,
      "drawdown": -0.025777030044209615,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0021889446701106596,
      "cumulativeWealth": 1.8948773499784883,
      "drawdown": -0.023644509866625474,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015358663744382772,
      "cumulativeWealth": 1.923980134033655,
      "drawdown": -0.008648994198684923,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02471369085915054,
      "cumulativeWealth": 1.9715287842853098,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0004132762029065429,
      "cumulativeWealth": 1.9723435702152001,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0276488514935469,
      "cumulativeWealth": 2.0268766046823323,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007899714179303796,
      "cumulativeWealth": 2.0428883505360407,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0032594240614537417,
      "cumulativeWealth": 2.03622971109144,
      "drawdown": -0.0032594240614537417,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.020272651055564528,
      "cumulativeWealth": 1.9949499366895103,
      "drawdown": -0.023465997950378292,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.012303243877054504,
      "cumulativeWealth": 1.9704055810959047,
      "drawdown": -0.035480533931830815,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02614746639858523,
      "cumulativeWealth": 2.0219266948191947,
      "drawdown": -0.010260793602032026,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04557628656334889,
      "cumulativeWealth": 2.114078605272359,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0067660573565038185,
      "cumulativeWealth": 2.1283825823717892,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.031044084854153553,
      "cumulativeWealth": 2.1944562718610414,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03285729040291163,
      "cumulativeWealth": 2.2665601588620703,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.02492651225785325,
      "cumulativeWealth": 2.210062719279033,
      "drawdown": -0.02492651225785325,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.021306757650231045,
      "cumulativeWealth": 2.257151990030522,
      "drawdown": -0.004150857763365878,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02996587739605938,
      "cumulativeWealth": 2.324789529828048,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.005643457498776483,
      "cumulativeWealth": 2.337909380733233,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0020934649386683546,
      "cumulativeWealth": 2.342803712051582,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01750522853371672,
      "cumulativeWealth": 2.383815026440685,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014495409452543129,
      "cumulativeWealth": 2.4183694013080674,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.038100612888918084,
      "cumulativeWealth": 2.5105107576897105,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0019879437239260778,
      "cumulativeWealth": 2.5155015117943087,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01256522209962796,
      "cumulativeWealth": 2.547109346981954,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0030131501144364803,
      "cumulativeWealth": 2.539434524161613,
      "drawdown": -0.0030131501144364803,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.012002700712600678,
      "cumulativeWealth": 2.5089544515888558,
      "drawdown": -0.01497968488801149,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.01285185755745999,
      "cumulativeWealth": 2.4767097263588806,
      "drawdown": -0.02763902566903509,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0029200808929594757,
      "cumulativeWealth": 2.483941919108228,
      "drawdown": -0.024799652966831842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03115785020502404,
      "cumulativeWealth": 2.561336209341782,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01989751973344922,
      "cumulativeWealth": 2.612300447111158,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.020131452942028893,
      "cumulativeWealth": 2.6648898506326173,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07355900357636913,
      "cumulativeWealth": 2.8609164926859316,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.050561898299087416,
      "cumulativeWealth": 3.0055698614312996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.011664381366482512,
      "cumulativeWealth": 3.04062797451864,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.011720311193611055,
      "cumulativeWealth": 3.076265080603998,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07131811171878955,
      "cumulativeWealth": 3.295658497299125,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05355636858055712,
      "cumulativeWealth": 3.472161998496122,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.05253882651744346,
      "cumulativeWealth": 3.2897386816166745,
      "drawdown": -0.05253882651744346,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.08283399501532585,
      "cumulativeWealth": 3.562240879171435,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0755231630453781,
      "cumulativeWealth": 3.83127257789601,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00634916263241414,
      "cumulativeWealth": 3.8069472052098394,
      "drawdown": -0.00634916263241414,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.08982256618767526,
      "cumulativeWealth": 3.4649974378968933,
      "drawdown": -0.09560143073930305,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03702517838377162,
      "cumulativeWealth": 3.5932895861343375,
      "drawdown": -0.062115912382398,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.023329996954944754,
      "cumulativeWealth": 1.0233299969549448,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007959399609169138,
      "cumulativeWealth": 1.0314750893327589,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007769401091260564,
      "cumulativeWealth": 1.039489033017429,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.011893370941293613,
      "cumulativeWealth": 1.0518520616765117,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01176959850404824,
      "cumulativeWealth": 1.0642319381280996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012403342983140275,
      "cumulativeWealth": 1.0774319718703145,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.008090997949303458,
      "cumulativeWealth": 1.0687144719953978,
      "drawdown": -0.008090997949303458,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.00016407884952518437,
      "cumulativeWealth": 1.0688898254364338,
      "drawdown": -0.007928246661413119,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05637870829206104,
      "cumulativeWealth": 1.1291524531010666,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03353798557400822,
      "cumulativeWealth": 1.091282954418107,
      "drawdown": -0.03353798557400822,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.01932526858765038,
      "cumulativeWealth": 1.0701936182188525,
      "drawdown": -0.05221512358255209,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.011015905009153393,
      "cumulativeWealth": 1.0819827694585535,
      "drawdown": -0.041774415414825405,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020792253329528165,
      "cumulativeWealth": 1.1044796292993202,
      "drawdown": -0.0218507463132952,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029837127506556316,
      "cumulativeWealth": 1.1374341288271181,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.005477495788453135,
      "cumulativeWealth": 1.1436644194774115,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.027262749815627707,
      "cumulativeWealth": 1.1748438564186592,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004546200766222475,
      "cumulativeWealth": 1.1695027803784168,
      "drawdown": -0.004546200766222586,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03681580666973927,
      "cumulativeWealth": 1.1264465921162825,
      "drawdown": -0.0411946353874707,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0033916027006772875,
      "cumulativeWealth": 1.1226261328122922,
      "drawdown": -0.044446522251514464,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025563213571479726,
      "cumulativeWealth": 1.0939282012182872,
      "drawdown": -0.06887353988216927,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.024001506648788862,
      "cumulativeWealth": 1.1201841262131256,
      "drawdown": -0.046525101958787785,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.009711281694081864,
      "cumulativeWealth": 1.1310625498120201,
      "drawdown": -0.03726563863567367,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02288668798324478,
      "cumulativeWealth": 1.1569488254791012,
      "drawdown": -0.015231837696379813,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0327033387810578,
      "cumulativeWealth": 1.1947849148710912,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.027351621966517303,
      "cumulativeWealth": 1.1621056095482396,
      "drawdown": -0.027351621966517192,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.023265993229103055,
      "cumulativeWealth": 1.1891431507914916,
      "drawdown": -0.004721991388892177,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019670075788779773,
      "cumulativeWealth": 1.2125336866912686,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.035376641089944094,
      "cumulativeWealth": 1.2554290557348122,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00858046824873282,
      "cumulativeWealth": 1.244656886583543,
      "drawdown": -0.00858046824873282,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.00341133860465348,
      "cumulativeWealth": 1.2489028326702933,
      "drawdown": -0.005198400526662206,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.017848603271329866,
      "cumulativeWealth": 1.2711940038550655,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01776162084028976,
      "cumulativeWealth": 1.2937724697659891,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.017021444701766697,
      "cumulativeWealth": 1.3157943463167792,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.001734991377172368,
      "cumulativeWealth": 1.3135114544717874,
      "drawdown": -0.001734991377172368,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025595814562773933,
      "cumulativeWealth": 1.279891058857048,
      "drawdown": -0.027286397422388253,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07731169954289174,
      "cumulativeWealth": 1.3788416118470377,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0358650689757396,
      "cumulativeWealth": 1.4282938613625518,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018094714563358982,
      "cumulativeWealth": 1.4541384310965049,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05226297539014291,
      "cumulativeWealth": 1.5301360321347626,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.04500604626883642,
      "cumulativeWealth": 1.5990014051946335,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.04280627495697842,
      "cumulativeWealth": 1.5305541113872771,
      "drawdown": -0.04280627495697842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0323952485041068,
      "cumulativeWealth": 1.480971430599904,
      "drawdown": -0.07381480354631875,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0652835304693633,
      "cumulativeWealth": 1.5776544741137293,
      "drawdown": -0.013350164053361646,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.036720387576726576,
      "cumulativeWealth": 1.6355865578653421,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02860899228592717,
      "cumulativeWealth": 1.6823790410822779,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020061360216186097,
      "cumulativeWealth": 1.7161298530455913,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020906028237632546,
      "cumulativeWealth": 1.7520073122128066,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029857202984710618,
      "cumulativeWealth": 1.8043173501642416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.021703100852515478,
      "cumulativeWealth": 1.8434766315847995,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01941449951175045,
      "cumulativeWealth": 1.8792668077486259,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0162177866640838,
      "cumulativeWealth": 1.9097443559215868,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019708284480633775,
      "cumulativeWealth": 1.947382140973374,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.032177493788994926,
      "cumulativeWealth": 1.8847202642274037,
      "drawdown": -0.032177493788994926,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0390121982794438,
      "cumulativeWealth": 1.9582473448767288,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.006069213700383491,
      "cumulativeWealth": 1.9463623232624634,
      "drawdown": -0.006069213700383491,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02854123466092462,
      "cumulativeWealth": 2.00191390706588,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.028809641419312415,
      "cumulativeWealth": 1.944239485250977,
      "drawdown": -0.028809641419312415,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.003787717802747892,
      "cumulativeWealth": 1.9368752547398864,
      "drawdown": -0.03248823643036569,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.034402160865578235,
      "cumulativeWealth": 2.0035079488300056,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0013429777705785684,
      "cumulativeWealth": 2.0008172821915493,
      "drawdown": -0.0013429777705786794,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.007049887779094655,
      "cumulativeWealth": 1.9867117448856257,
      "drawdown": -0.008383397707100837,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.018325240392218722,
      "cumulativeWealth": 1.9503047745705524,
      "drawdown": -0.026555010321033357,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02519476793235409,
      "cumulativeWealth": 1.9994422507632197,
      "drawdown": -0.0020292897111590102,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02029873811992733,
      "cumulativeWealth": 1.958856096129059,
      "drawdown": -0.022286835810669925,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03807016095844351,
      "cumulativeWealth": 1.8842821292549976,
      "drawdown": -0.0595085333425468,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020389820728184294,
      "cumulativeWealth": 1.9227023040718283,
      "drawdown": -0.04033208094101426,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.017073745653141348,
      "cumulativeWealth": 1.9555300341782595,
      "drawdown": -0.023946954979521706,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03085868873918285,
      "cumulativeWealth": 1.895184941533429,
      "drawdown": -0.054066672088740275,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03929617700382604,
      "cumulativeWealth": 1.9696584644509123,
      "drawdown": -0.016895108601321263,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0021889446701106596,
      "cumulativeWealth": 1.9739699378486104,
      "drawdown": -0.014743146389134432,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.015358663744382772,
      "cumulativeWealth": 2.0042874783655473,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02471369085915054,
      "cumulativeWealth": 2.05382081949874,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0004132762029065429,
      "cumulativeWealth": 2.0546696147684727,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0276488514935469,
      "cumulativeWealth": 2.1114788698155094,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007899714179303796,
      "cumulativeWealth": 2.128158949382691,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0032594240614537417,
      "cumulativeWealth": 2.121222376896475,
      "drawdown": -0.0032594240614538528,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020272651055564528,
      "cumulativeWealth": 2.0782195758383972,
      "drawdown": -0.023465997950378514,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.012303243877054504,
      "cumulativeWealth": 2.0526507335667885,
      "drawdown": -0.03548053393183115,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02614746639858523,
      "cumulativeWealth": 2.1063223496507573,
      "drawdown": -0.010260793602032359,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.04557628656334889,
      "cumulativeWealth": 2.2023207006532264,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0067660573565038185,
      "cumulativeWealth": 2.217221728831262,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.031044084854153553,
      "cumulativeWealth": 2.286053348321573,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03285729040291163,
      "cumulativeWealth": 2.361166867063923,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02492651225785325,
      "cumulativeWealth": 2.3023112122092173,
      "drawdown": -0.02492651225785325,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.021306757650231045,
      "cumulativeWealth": 2.3513659992431686,
      "drawdown": -0.004150857763365878,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02996587739605938,
      "cumulativeWealth": 2.421826744489752,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.005643457498776483,
      "cumulativeWealth": 2.43549422079168,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0020934649386683546,
      "cumulativeWealth": 2.440592842551237,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01750522853371672,
      "cumulativeWealth": 2.4833159780178495,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.014495409452543129,
      "cumulativeWealth": 2.519312659919261,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.038100612888918084,
      "cumulativeWealth": 2.615300016320995,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0019879437239260778,
      "cumulativeWealth": 2.6204990855746244,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.021213942759893634,
      "cumulativeWealth": 2.676090203178358,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.007137533323442025,
      "cumulativeWealth": 2.656989520176636,
      "drawdown": -0.007137533323442025,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.012002700712600678,
      "cumulativeWealth": 2.6250984701694393,
      "drawdown": -0.019054564359735182,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0004380732097870599,
      "cumulativeWealth": 2.623948484856605,
      "drawdown": -0.019484290275352034,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0002244968965785521,
      "cumulativeWealth": 2.6233594165649725,
      "drawdown": -0.01970441300923187,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03115785020502404,
      "cumulativeWealth": 2.7050976563002433,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01989751973344922,
      "cumulativeWealth": 2.7589223902973847,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020131452942028893,
      "cumulativeWealth": 2.8144635065683663,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07355900357636913,
      "cumulativeWealth": 3.0214926377135893,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.050561898299087416,
      "cumulativeWealth": 3.174265041173105,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.011664381366482512,
      "cumulativeWealth": 3.2112908791716412,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.011720311193611055,
      "cumulativeWealth": 3.2489282076087376,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07131811171878955,
      "cumulativeWealth": 3.480635632485304,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05355636858055712,
      "cumulativeWealth": 3.6670458373133075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05253882651744346,
      "cumulativeWealth": 3.4743835522351905,
      "drawdown": -0.05253882651744346,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.08283399501532585,
      "cumulativeWealth": 3.7621806220823704,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0755231630453781,
      "cumulativeWealth": 4.046312402610059,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00634916263241414,
      "cumulativeWealth": 4.0206217071043335,
      "drawdown": -0.00634916263241414,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05786895544144599,
      "cumulativeWealth": 3.7879525286890026,
      "drawdown": -0.06385069866439441,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.034807319181333396,
      "cumulativeWealth": 3.91980100139882,
      "drawdown": -0.03126585113142377,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "fxPerformanceSummary": [
    {
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.1378941431989198,
      "annVol": 0.11811115281650654,
      "sharpeRf0": 1.1554804193454413,
      "maxDrawdown": -0.14451090610588646,
      "calmar": 0.9542127090247541,
      "cumulativeReturn": 2.3390073844013197,
      "terminalWealth": 3.3390073844013197,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.16062390179485164,
      "annVol": 0.13412016619652645,
      "sharpeRf0": 1.1805276483310254,
      "maxDrawdown": -0.16058056931328446,
      "calmar": 1.000269848847544,
      "cumulativeReturn": 3.0159419641179976,
      "terminalWealth": 4.015941964117998,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.14687747574854582,
      "annVol": 0.11814711642581482,
      "sharpeRf0": 1.2219195640213727,
      "maxDrawdown": -0.13688913125036484,
      "calmar": 1.0729666731532739,
      "cumulativeReturn": 2.5932895861343184,
      "terminalWealth": 3.5932895861343184,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "months": 112,
      "startHoldingMonth": "2017-05",
      "endHoldingMonth": "2026-08",
      "cagr": 0.15761461749237915,
      "annVol": 0.11938498469177071,
      "sharpeRf0": 1.2887224692958088,
      "maxDrawdown": -0.1322492655718971,
      "calmar": 1.1917995673608655,
      "cumulativeReturn": 2.9198010013988323,
      "terminalWealth": 3.9198010013988323,
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
    }
  ],
  "fxCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.1105935694063831,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": -0.014427551293404672,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.16495655580917234,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.30836440855434,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.14924279794494932,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": -0.09077970895763576,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.15961255119635798,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.11289937652602844,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.23829251522990913,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.19856683109539408,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.045331786290538245,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.02870955563942612,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20675215080640053,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.22924144787379253,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.25869596874831524,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": -0.037008497624294256,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.17578852879822437,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.27798274909521226,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.21341512149057307,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.13914317163358692,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.07575489041512595,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.004369659201798992,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.18268499552816997,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2651523943854306,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1995231004471909,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": -0.0647669677035011,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.16566520989965428,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1898807856627618,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2229231690700506,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.16806890563176902,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.06888982543643385,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.023424655362988434,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.18268499552816997,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.26419953746672187,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.22397307402589806,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": -0.05331346425825023,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.16206110147291986,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.1898807856627618,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.23981276142911212,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.20649049499430294,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
