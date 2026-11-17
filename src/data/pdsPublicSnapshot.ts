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
  "publicAsOfDate": "2026-11-17",
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
      "netReturn": -0.02285937823297357,
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
      "netReturn": -0.01873980138739928,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.004965609021640893,
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
      "netReturn": -0.005403617709678343,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04959273668799269,
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
      "netReturn": 0.04437253052416823,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.04612361312376512,
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
      "netReturn": -0.043270515110386265,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.02181116412294093,
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
      "netReturn": -0.020697806417255937,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.06520331647040067,
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
      "netReturn": 0.06328152391313835,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08482850499868966,
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
      "netReturn": 0.07894707582742577,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.07289478624810508,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649239610713244,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137570920204028,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05724476900374453,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882601805748597,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06040569398965645,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.0760403091233377,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06981911926774331,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672064735913375,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.0193112214690474,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02426736911178007,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757386925932318,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0005255875526347653,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492400434754296,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.422026968757379e-05,
      "seriesRole": "CORE_STRATEGY"
    }
  ],
  "corePerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02966889139696205,
      "cumulativeWealth": 1.029668891396962,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0047763887492888735,
      "cumulativeWealth": 1.0247507924886008,
      "drawdown": -0.0047763887492889845,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020667422356349885,
      "cumulativeWealth": 1.0459297499269669,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010098741882213824,
      "cumulativeWealth": 1.0564923244984077,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002336958695947411,
      "cumulativeWealth": 1.058961303423346,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019897227947955454,
      "cumulativeWealth": 1.0800316978656244,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008995788206141553,
      "cumulativeWealth": 1.0897474342755429,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012487200768714457,
      "cumulativeWealth": 1.103355329274533,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05378701099279737,
      "cumulativeWealth": 1.162701514499184,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03821234844584653,
      "cumulativeWealth": 1.1182719590886276,
      "drawdown": -0.03821234844584653,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.006031923410924067,
      "cumulativeWealth": 1.111526628278821,
      "drawdown": -0.04401377789759375,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006470777190120458,
      "cumulativeWealth": 1.1187190694312992,
      "drawdown": -0.037827804057543934,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009902163786411622,
      "cumulativeWealth": 1.1297968088877899,
      "drawdown": -0.028300217382590476,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0026960984596120507,
      "cumulativeWealth": 1.1267507654516729,
      "drawdown": -0.030920015669710588,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00862269084659717,
      "cumulativeWealth": 1.1364663889633293,
      "drawdown": -0.022563938559205354,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02455891531649068,
      "cumulativeWealth": 1.1643767707699177,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.003183589568718781,
      "cumulativeWealth": 1.1606698730284362,
      "drawdown": -0.003183589568718781,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03632640460505265,
      "cumulativeWealth": 1.11850690960791,
      "drawdown": -0.03939434581100176,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.003674913159109172,
      "cumulativeWealth": 1.1226173253685827,
      "drawdown": -0.03586420345170793,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.014610059679024179,
      "cumulativeWealth": 1.1062158192482412,
      "drawdown": -0.049950284977962056,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019987741066549214,
      "cumulativeWealth": 1.1283265746070956,
      "drawdown": -0.03096093727375271,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0026675744813797753,
      "cumulativeWealth": 1.1313364697841801,
      "drawdown": -0.028375953398564024,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.017334412325051174,
      "cumulativeWealth": 1.150947522629787,
      "drawdown": -0.01153342154983994,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.017079492502174887,
      "cumulativeWealth": 1.1706051222129392,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03647294843881277,
      "cumulativeWealth": 1.1279097019482565,
      "drawdown": -0.03647294843881288,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03418074919643699,
      "cumulativeWealth": 1.166462500586778,
      "drawdown": -0.0035388719454174655,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005419852027708005,
      "cumulativeWealth": 1.1727845547358284,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.030780874563866023,
      "cumulativeWealth": 1.2088838890055915,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0067059233858794975,
      "cumulativeWealth": 1.200777206263496,
      "drawdown": -0.0067059233858793865,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016188983523931944,
      "cumulativeWealth": 1.2202165686716089,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00905714659373058,
      "cumulativeWealth": 1.2312682490101665,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.027245426934573214,
      "cumulativeWealth": 1.2648146781254328,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0021390734650852394,
      "cumulativeWealth": 1.2675202096416613,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010709684260580166,
      "cumulativeWealth": 1.2539454684024949,
      "drawdown": -0.010709684260580055,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022270989823264364,
      "cumulativeWealth": 1.2260188616367744,
      "drawdown": -0.03274215881466669,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06062911464811016,
      "cumulativeWealth": 1.300351299759696,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021642703906907812,
      "cumulativeWealth": 1.3284944179153577,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025264983314499112,
      "cumulativeWealth": 1.3620588072173945,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.058765565381972085,
      "cumulativeWealth": 1.4421009631070192,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04375053186588418,
      "cumulativeWealth": 1.5051936472472551,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031136450166394214,
      "cumulativeWealth": 1.4583272602589679,
      "drawdown": -0.031136450166394214,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017226166791428854,
      "cumulativeWealth": 1.4332058716372593,
      "drawdown": -0.04782625527396378,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07480579507319463,
      "cumulativeWealth": 1.5404179763686554,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.053056215837068654,
      "cumulativeWealth": 1.6221467250021713,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005008220402663577,
      "cumulativeWealth": 1.630270793326441,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.013774183190991884,
      "cumulativeWealth": 1.6527264418846432,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01210723709922612,
      "cumulativeWealth": 1.672736392776701,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03875499779032898,
      "cumulativeWealth": 1.7375632879825649,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01661522266863713,
      "cumulativeWealth": 1.7664332889132444,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009826546057086327,
      "cumulativeWealth": 1.7837912269835208,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01055203605624766,
      "cumulativeWealth": 1.8026138563274692,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.011417168193899263,
      "cumulativeWealth": 1.8231946019138132,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.039950581109369776,
      "cumulativeWealth": 1.7503569180918903,
      "drawdown": -0.039950581109369776,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04422262167866209,
      "cumulativeWealth": 1.8277622898832968,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.016192535044465828,
      "cumulativeWealth": 1.7981661849514083,
      "drawdown": -0.016192535044465828,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026092680223768205,
      "cumulativeWealth": 1.8450851602045386,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.035269261405766916,
      "cumulativeWealth": 1.7800103693733833,
      "drawdown": -0.03526926140576703,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.003398482304351358,
      "cumulativeWealth": 1.7860597031152607,
      "drawdown": -0.03199064106219063,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020738654172970605,
      "cumulativeWealth": 1.8231001776304467,
      "drawdown": -0.011915429730980365,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022489204355233605,
      "cumulativeWealth": 1.7821001051756529,
      "drawdown": -0.034136665552013556,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0012606453669534723,
      "cumulativeWealth": 1.779853508934616,
      "drawdown": -0.03535427668969571,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.025658704951186273,
      "cumulativeWealth": 1.734184772892529,
      "drawdown": -0.06010583668653846,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016153800644183036,
      "cumulativeWealth": 1.7621984479940127,
      "drawdown": -0.04492297374574161,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01838273267404411,
      "cumulativeWealth": 1.7298044250059232,
      "drawdown": -0.062479899402494654,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03155862832196277,
      "cumulativeWealth": 1.6752141700874748,
      "drawdown": -0.0920667478016205,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012670459939834844,
      "cumulativeWealth": 1.6964399041202118,
      "drawdown": -0.08056281590159697,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020772717135513652,
      "cumulativeWealth": 1.731679570385899,
      "drawdown": -0.0614636073524476,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.020632756089329463,
      "cumulativeWealth": 1.6959502481852518,
      "drawdown": -0.08082819982290379,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04439212516850466,
      "cumulativeWealth": 1.771237083882248,
      "drawdown": -0.040024210218082334,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031118854235594018,
      "cumulativeWealth": 1.7161182152522376,
      "drawdown": -0.0698975568900051,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025601110678951766,
      "cumulativeWealth": 1.7600527476190753,
      "drawdown": -0.04608590130118273,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00872730148080425,
      "cumulativeWealth": 1.7754132585696647,
      "drawdown": -0.037760805375048556,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0069737004714387485,
      "cumulativeWealth": 1.7877944588479506,
      "drawdown": -0.031050437449855695,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.022073690373663357,
      "cumulativeWealth": 1.8272576801843112,
      "drawdown": -0.00966214481842731,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021027210345847536,
      "cumulativeWealth": 1.8656798117816122,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01707943201458184,
      "cumulativeWealth": 1.8338150602753103,
      "drawdown": -0.01707943201458184,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02357994083077075,
      "cumulativeWealth": 1.7905738096594421,
      "drawdown": -0.04025664084902558,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0056127429927044226,
      "cumulativeWealth": 1.780523779056356,
      "drawdown": -0.04564343366289492,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.036203480302966495,
      "cumulativeWealth": 1.844984936620386,
      "drawdown": -0.01109240451150284,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04452232024737923,
      "cumulativeWealth": 1.9271279468201896,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01137156897586411,
      "cumulativeWealth": 1.9052134784476085,
      "drawdown": -0.01137156897586411,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.023203200438501437,
      "cumulativeWealth": 1.9494205286661628,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02721707174766541,
      "cumulativeWealth": 2.0024780470612416,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03366153371686065,
      "cumulativeWealth": 1.9350715647628163,
      "drawdown": -0.03366153371686065,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021886113695465337,
      "cumulativeWealth": 1.9774227610380772,
      "drawdown": -0.012512140175486297,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025374465687530767,
      "cumulativeWealth": 2.0275988070377804,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00844444500121777,
      "cumulativeWealth": 2.044720753648346,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016564138056138322,
      "cumulativeWealth": 2.0785897904980284,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026273999520741498,
      "cumulativeWealth": 2.133202657657392,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010298688565018366,
      "cumulativeWealth": 2.111233467840109,
      "drawdown": -0.010298688565018477,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025891567031869123,
      "cumulativeWealth": 2.1658966106926165,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022147747068916424,
      "cumulativeWealth": 2.117926880381573,
      "drawdown": -0.022147747068916424,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.018995381296187164,
      "cumulativeWealth": 2.1581577090318653,
      "drawdown": -0.003573070673154821,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0029412196271750846,
      "cumulativeWealth": 2.1518100932195217,
      "drawdown": -0.006503781114736706,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017649305221656753,
      "cumulativeWealth": 2.1138321401052487,
      "drawdown": -0.024038299118404605,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0028328114473163968,
      "cumulativeWealth": 2.119820227989444,
      "drawdown": -0.021273583640004867,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016573658447027073,
      "cumulativeWealth": 2.15495340441724,
      "drawdown": -0.005052506302171578,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03893799943344756,
      "cumulativeWealth": 2.2388629788575445,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002159570244593567,
      "cumulativeWealth": 2.2436979607284075,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02367799145547389,
      "cumulativeWealth": 2.296824221871199,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06420614476630004,
      "cumulativeWealth": 2.444294450363406,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.043871995609640724,
      "cumulativeWealth": 2.551530525758418,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0005255875526347653,
      "cumulativeWealth": 2.550189473073912,
      "drawdown": -0.0005255875526347653,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0193112214690474,
      "cumulativeWealth": 2.5994367467764756,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0760403091233377,
      "cumulativeWealth": 2.7970987205479223,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05724476900374453,
      "cumulativeWealth": 2.9572179906863574,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.07289478624810508,
      "cumulativeWealth": 2.7416522173662248,
      "drawdown": -0.07289478624810497,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.08482850499868966,
      "cumulativeWealth": 2.974222476191744,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06520331647040067,
      "cumulativeWealth": 3.168151645560253,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02181116412294093,
      "cumulativeWealth": 3.0990505700525732,
      "drawdown": -0.02181116412294093,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.04612361312376512,
      "cumulativeWealth": 2.9561111605084847,
      "drawdown": -0.06692876755092048,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04959273668799269,
      "cumulativeWealth": 3.1027128029120186,
      "drawdown": -0.020655211608932467,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004965609021640893,
      "cumulativeWealth": 3.0873059442263178,
      "drawdown": -0.025518254925464223,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.02285937823297357,
      "cumulativeWealth": 3.0167320499263406,
      "drawdown": -0.047794301717251186,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.028507666576826463,
      "cumulativeWealth": 1.0285076665768265,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005398128563556925,
      "cumulativeWealth": 1.0229556499640409,
      "drawdown": -0.005398128563556925,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.020989806053304028,
      "cumulativeWealth": 1.0444272906579177,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01017413506997622,
      "cumulativeWealth": 1.0550534349838407,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002539088683903623,
      "cumulativeWealth": 1.0577323092215218,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018014735471080012,
      "cumulativeWealth": 1.0767870769713621,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007366588251889183,
      "cumulativeWealth": 1.0847193240023654,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012748418532586125,
      "cumulativeWealth": 1.0985477799351315,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05383306044200653,
      "cumulativeWealth": 1.1576859689708117,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03767789169633029,
      "cumulativeWealth": 1.1140668024135683,
      "drawdown": -0.03767789169633029,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.006811209467439294,
      "cumulativeWealth": 1.1064786600616092,
      "drawdown": -0.044232469151134324,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007648917579808678,
      "cumulativeWealth": 1.1149420241362376,
      "drawdown": -0.03692188208221414,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008570632583983162,
      "cumulativeWealth": 1.1244977825775517,
      "drawdown": -0.028667693383866766,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0019606898905010217,
      "cumulativeWealth": 1.122292991143361,
      "drawdown": -0.030572174817766196,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007472611957235253,
      "cumulativeWealth": 1.1306794511685,
      "drawdown": -0.023328016859632927,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02358262988817761,
      "cumulativeWealth": 1.1573438461875747,
      "drawdown": -0.00029552295908119586,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0033717589785224877,
      "cumulativeWealth": 1.153441561682954,
      "drawdown": -0.003666285505412925,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02890685731874887,
      "cumulativeWealth": 1.12009919103387,
      "drawdown": -0.03246716203216704,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0021727325245652906,
      "cumulativeWealth": 1.1225328669769685,
      "drawdown": -0.03036497196652943,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007706999445933893,
      "cumulativeWealth": 1.1138815067931345,
      "drawdown": -0.0378379485903414,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014906785655308008,
      "cumulativeWealth": 1.1304858996603113,
      "drawdown": -0.02349520512430614,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0003512514089223373,
      "cumulativeWealth": 1.1300888148952888,
      "drawdown": -0.023838203809325664,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019272382111055864,
      "cumulativeWealth": 1.151868318355381,
      "drawdown": -0.005025240670924358,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015182537880154223,
      "cumulativeWealth": 1.1693566027317612,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03578578667781229,
      "cumulativeWealth": 1.127510256796111,
      "drawdown": -0.0357857866778124,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.031660156267279804,
      "cumulativeWealth": 1.1632074077192367,
      "drawdown": -0.005258614008899598,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004663402514553994,
      "cumulativeWealth": 1.1686319120693425,
      "drawdown": -0.0006197345281377942,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03357687848132129,
      "cumulativeWealth": 1.207870923770289,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008137482419980246,
      "cumulativeWealth": 1.198041895362503,
      "drawdown": -0.008137482419980246,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014834525503958806,
      "cumulativeWealth": 1.215814278414069,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006858760485219495,
      "cumulativeWealth": 1.224153257344221,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02740937084843309,
      "cumulativeWealth": 1.257706527950086,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.000967908782141258,
      "cumulativeWealth": 1.2589238731438455,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01012936474836057,
      "cumulativeWealth": 1.2461717740423526,
      "drawdown": -0.01012936474836057,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018788143597132767,
      "cumulativeWealth": 1.222758519804951,
      "drawdown": -0.028727196386053477,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04827776651048765,
      "cumulativeWealth": 1.281790570122804,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019100729079202683,
      "cumulativeWealth": 1.3062737045389965,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024175884963944405,
      "cumulativeWealth": 1.3378540273513568,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.059786068494206646,
      "cumulativeWealth": 1.4178390598658352,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04199955956880652,
      "cumulativeWealth": 1.477387675919651,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.029833619405400524,
      "cumulativeWealth": 1.433311854282035,
      "drawdown": -0.029833619405400524,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016915931225489178,
      "cumulativeWealth": 1.4090660495303216,
      "drawdown": -0.046244887176820515,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07296655012756781,
      "cumulativeWealth": 1.5118807380664296,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05259882503968494,
      "cumulativeWealth": 1.5914038884888555,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.003628308089008714,
      "cumulativeWealth": 1.5971779920903395,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013298381815382898,
      "cumulativeWealth": 1.6184178748562834,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01059595183058959,
      "cumulativeWealth": 1.6355665527000258,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03840565810448826,
      "cumulativeWealth": 1.6983815625301595,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0156709530547241,
      "cumulativeWealth": 1.7249968202655785,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010081762624223334,
      "cumulativeWealth": 1.742387828735036,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.011008377913056089,
      "cumulativeWealth": 1.7615686924248606,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010534882159411563,
      "cumulativeWealth": 1.7801266110152651,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03831076371691766,
      "cumulativeWealth": 1.7119286010344619,
      "drawdown": -0.03831076371691766,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.042705768731505334,
      "cumulativeWealth": 1.7850378279550891,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016567156779535686,
      "cumulativeWealth": 1.7554648264019552,
      "drawdown": -0.016567156779535797,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024027862854580917,
      "cumulativeWealth": 1.797644894496782,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.034926706130873564,
      "cumulativeWealth": 1.7348590795390277,
      "drawdown": -0.034926706130873564,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005220478482862223,
      "cumulativeWealth": 1.7439158740345595,
      "drawdown": -0.029888561765844757,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016282770280676928,
      "cumulativeWealth": 1.7723116556002902,
      "drawdown": -0.014092460070420865,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021285393890488113,
      "cumulativeWealth": 1.7345873039141348,
      "drawdown": -0.03507789039742415,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0004907616741373078,
      "cumulativeWealth": 1.7337360349449287,
      "drawdown": -0.03555143718734477,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.019917250642473627,
      "cumulativeWealth": 1.6992047797890422,
      "drawdown": -0.054760600944657845,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01023639911846308,
      "cumulativeWealth": 1.716598518098963,
      "drawdown": -0.04508475319343119,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.015039499180982241,
      "cumulativeWealth": 1.6907817360919382,
      "drawdown": -0.05944620026568603,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0233487218157451,
      "cumulativeWealth": 1.6513041436847848,
      "drawdown": -0.08140692928842463,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006876254650552527,
      "cumulativeWealth": 1.662658931482274,
      "drawdown": -0.07509044941397891,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01831946078591229,
      "cumulativeWealth": 1.6931179465779103,
      "drawdown": -0.0581466051715025,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.017180244911828457,
      "cumulativeWealth": 1.6640297655910896,
      "drawdown": -0.07432787716569322,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.037460655980873225,
      "cumulativeWealth": 1.7263654121818306,
      "drawdown": -0.039651592221112586,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03075911855119573,
      "cumulativeWealth": 1.6732639338058457,
      "drawdown": -0.0691910627464355,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02663992193054132,
      "cumulativeWealth": 1.7178395543716238,
      "drawdown": -0.04439438532575046,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008954247215252176,
      "cumulativeWealth": 1.733221514417606,
      "drawdown": -0.035837656411674246,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006772873186183581,
      "cumulativeWealth": 1.7449604039383215,
      "drawdown": -0.02930750712765695,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018560515040825454,
      "cumulativeWealth": 1.7773477677612637,
      "drawdown": -0.011290954513683338,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017882385185951533,
      "cumulativeWealth": 1.8091309851537618,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.014599720297474361,
      "cumulativeWealth": 1.7827181787890227,
      "drawdown": -0.014599720297474361,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020274663613467858,
      "cumulativeWealth": 1.7465741673964612,
      "drawdown": -0.034578379493060196,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012442703248163323,
      "cumulativeWealth": 1.744400956989879,
      "drawdown": -0.035779624966392976,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027281249604287794,
      "cumulativeWealth": 1.7919903949074785,
      "drawdown": -0.009474488241561163,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0407377354881131,
      "cumulativeWealth": 1.8649920256124586,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011140102361907211,
      "cumulativeWealth": 1.844215823542995,
      "drawdown": -0.011140102361907211,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01957656367226801,
      "cumulativeWealth": 1.8803192320379887,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027496462422964107,
      "cumulativeWealth": 1.932021359144898,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03117575936670447,
      "cumulativeWealth": 1.8717891261608635,
      "drawdown": -0.03117575936670447,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019647860343154022,
      "cumulativeWealth": 1.9085657775035063,
      "drawdown": -0.012140435989679288,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02496659694130865,
      "cumulativeWealth": 1.9562161700064118,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0054977723629414665,
      "cumulativeWealth": 1.9669710012018122,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017381722240048303,
      "cumulativeWealth": 2.0011603447989317,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027705879577576198,
      "cumulativeWealth": 2.0566042523273516,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011188841477083877,
      "cumulativeWealth": 2.033593233366964,
      "drawdown": -0.011188841477083877,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02124270848041454,
      "cumulativeWealth": 2.0767922615911223,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021122230804668685,
      "cumulativeWealth": 2.0329257761084447,
      "drawdown": -0.021122230804668685,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017191943483598093,
      "cumulativeWealth": 2.067875721157651,
      "drawdown": -0.004293419519312058,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012005279795731516,
      "cumulativeWealth": 2.0653931784961213,
      "drawdown": -0.005488793128624048,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016609759075431718,
      "cumulativeWealth": 2.0310874954052607,
      "drawdown": -0.02200738467257446,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0021565655473183565,
      "cumulativeWealth": 2.0354676687214406,
      "drawdown": -0.01989827949282763,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012765227404321289,
      "cumulativeWealth": 2.0614508763868136,
      "drawdown": -0.007387058151187009,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03839022670102654,
      "cumulativeWealth": 2.140590442864333,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0008001280068008487,
      "cumulativeWealth": 2.1423031892287594,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024133889526821495,
      "cumulativeWealth": 2.1940052977305635,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06259110655565103,
      "cumulativeWealth": 2.33133051710448,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04441027825591748,
      "cumulativeWealth": 2.434865554075602,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.422026968757379e-05,
      "cumulativeWealth": 2.4346604890419847,
      "drawdown": -8.422026968768481e-05,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757386925932318,
      "cumulativeWealth": 2.480328357868225,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672064735913375,
      "cumulativeWealth": 2.6706207551470924,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06040569398965645,
      "cumulativeWealth": 2.831941455244933,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137570920204028,
      "cumulativeWealth": 2.6298096254581678,
      "drawdown": -0.07137570920204028,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894707582742577,
      "cumulativeWealth": 2.837425405370908,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328152391313835,
      "cumulativeWealth": 3.0169820090126334,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020697806417255937,
      "cumulativeWealth": 2.954537099425746,
      "drawdown": -0.020697806417255937,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.043270515110386265,
      "cumulativeWealth": 2.8266927572208473,
      "drawdown": -0.06307271678231252,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04437253052416823,
      "cumulativeWealth": 2.9521202678730747,
      "drawdown": -0.021498882308809586,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005403617709678343,
      "cumulativeWealth": 2.9361681385124956,
      "drawdown": -0.02678632827730576,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01873980138739928,
      "cumulativeWealth": 2.8811449307567614,
      "drawdown": -0.04502415919289071,
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
      "netReturn": 0.06782264773958713,
      "cumulativeWealth": 3.054080320159801,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031277294598206384,
      "cumulativeWealth": 2.9585569502595783,
      "drawdown": -0.031277294598206384,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03528988856496573,
      "cumulativeWealth": 3.062964095347344,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.018494130901231087,
      "cumulativeWealth": 3.0063172364222193,
      "drawdown": -0.018494130901231087,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0270047921868779,
      "cumulativeWealth": 2.9251322642048083,
      "drawdown": -0.04499949292644423,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008926574078125249,
      "cumulativeWealth": 2.9512436740495467,
      "drawdown": -0.036474610155404985,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.05099639378223508,
      "cumulativeWealth": 3.101746458598708,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04376040683383242,
      "cumulativeWealth": 3.2374801455223863,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.014430620322652965,
      "cumulativeWealth": 3.284198992304547,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.019628271750193882,
      "cumulativeWealth": 3.3486621426072136,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07878105760791043,
      "cumulativeWealth": 3.612473287773381,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03904012063590501,
      "cumulativeWealth": 3.7535046807220382,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492400434754296,
      "cumulativeWealth": 3.7366424346625102,
      "drawdown": -0.004492400434754296,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02426736911178007,
      "cumulativeWealth": 3.827320915863206,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.06981911926774331,
      "cumulativeWealth": 4.094541091363788,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882601805748597,
      "cumulativeWealth": 4.212570406800559,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649239610713244,
      "cumulativeWealth": 3.848215098546381,
      "drawdown": -0.08649239610713244,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.13799853813506524,
      "cumulativeWealth": 4.3792631565750675,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0824134747624814,
      "cumulativeWealth": 4.740173450207731,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03191396420405801,
      "cumulativeWealth": 4.588895724396775,
      "drawdown": -0.03191396420405801,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173190922506778,
      "cumulativeWealth": 4.259725472851044,
      "drawdown": -0.10135662384582822,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694349643809308,
      "cumulativeWealth": 4.6726781540556335,
      "drawdown": -0.01423899291051045,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0007589648480446076,
      "cumulativeWealth": 4.669131755590479,
      "drawdown": -0.01498715086346436,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.060099634942407776,
      "cumulativeWealth": 4.388518641581488,
      "drawdown": -0.07418606351015122,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011216187420482138,
      "cumulativeWealth": 1.0112161874204821,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0037518483959269044,
      "cumulativeWealth": 1.015010117251191,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013668699633808234,
      "cumulativeWealth": 1.028883985669174,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.005516008417211227,
      "cumulativeWealth": 1.034559318394459,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009803474520907685,
      "cumulativeWealth": 1.0447015943127067,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014529559053664487,
      "cumulativeWealth": 1.0598806478207305,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017746152905282697,
      "cumulativeWealth": 1.0786894518583072,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009177409865261277,
      "cumulativeWealth": 1.0885890270753449,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.029315392171784804,
      "cumulativeWealth": 1.1205014413179604,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.025851022181926586,
      "cumulativeWealth": 1.0915353337035691,
      "drawdown": -0.025851022181926475,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.013761724361162964,
      "cumulativeWealth": 1.0765139253106706,
      "drawdown": -0.039256991901367555,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006632326818660772,
      "cumulativeWealth": 1.0757999460929206,
      "drawdown": -0.039894188063212876,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01723282296240658,
      "cumulativeWealth": 1.0943390161069064,
      "drawdown": -0.023348854580928613,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003861169279726795,
      "cumulativeWealth": 1.0985644442975049,
      "drawdown": -0.019577839181226464,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0221107377978933,
      "cumulativeWealth": 1.1228545146794553,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02142385676962233,
      "cumulativeWealth": 1.1469103889750718,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010885977542867131,
      "cumulativeWealth": 1.148158913048878,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04403877504159459,
      "cumulativeWealth": 1.0975954009651168,
      "drawdown": -0.04403877504159459,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014215627281449983,
      "cumulativeWealth": 1.1131984080910704,
      "drawdown": -0.030449186572067632,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04490424842029461,
      "cumulativeWealth": 1.0632110702330724,
      "drawdown": -0.07398613715433433,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.051682942181892955,
      "cumulativeWealth": 1.1181609465030768,
      "drawdown": -0.026127016221250354,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01899414601231242,
      "cumulativeWealth": 1.1393994587862217,
      "drawdown": -0.007629130569910436,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01935062314999092,
      "cumulativeWealth": 1.1614475483304976,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02370997180342793,
      "cumulativeWealth": 1.188985436952574,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03061916440563328,
      "cumulativeWealth": 1.1525796963826196,
      "drawdown": -0.03061916440563317,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04614633300175619,
      "cumulativeWealth": 1.205767022862955,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009798944715571078,
      "cumulativeWealth": 1.2175822672598478,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010849098509435606,
      "cumulativeWealth": 1.218903234255932,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009226399751265157,
      "cumulativeWealth": 1.2301493227532874,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0140951840087713,
      "cumulativeWealth": 1.2474885038157604,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02158093361482849,
      "cumulativeWealth": 1.27441047040187,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017246154583579365,
      "cumulativeWealth": 1.2963891503773526,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.007873632894977112,
      "cumulativeWealth": 1.3065964426364551,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04116059519649806,
      "cumulativeWealth": 1.2528161553759116,
      "drawdown": -0.04116059519649806,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07703005080929437,
      "cumulativeWealth": 1.1563116632726003,
      "drawdown": -0.11502004326646542,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.08306620283367061,
      "cumulativeWealth": 1.2523620824329411,
      "drawdown": -0.041508118676704564,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03127768910159889,
      "cumulativeWealth": 1.2915330742899096,
      "drawdown": -0.011528707606267896,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013277049821419418,
      "cumulativeWealth": 1.3086808232632676,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04066789252506142,
      "cumulativeWealth": 1.3619021143333472,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.038583759486899405,
      "cumulativeWealth": 1.414449417957485,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022855205243403454,
      "cumulativeWealth": 1.382121886203654,
      "drawdown": -0.022855205243403565,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.017193527332904024,
      "cumulativeWealth": 1.3583583357758067,
      "drawdown": -0.039655770980255856,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07009317560168227,
      "cumulativeWealth": 1.4535699851353492,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022571833177040812,
      "cumulativeWealth": 1.486379724350978,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.00909276593615893,
      "cumulativeWealth": 1.472864421425202,
      "drawdown": -0.009092765936159042,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.010610841312321817,
      "cumulativeWealth": 1.4884927520755096,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022654293756467325,
      "cumulativeWealth": 1.5222135041354006,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.034674430070337214,
      "cumulativeWealth": 1.5749953898366664,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.004755019550574113,
      "cumulativeWealth": 1.582484523707404,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016768022539042526,
      "cumulativeWealth": 1.6090196598686157,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019113791442548544,
      "cumulativeWealth": 1.6397741260743048,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017054655858847356,
      "cumulativeWealth": 1.6677399094807444,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03163211854340431,
      "cumulativeWealth": 1.614985762964483,
      "drawdown": -0.03163211854340431,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04206318622990479,
      "cumulativeWealth": 1.682917209870703,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.003737624546761076,
      "cumulativeWealth": 1.6766270971969237,
      "drawdown": -0.003737624546761076,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.026313658027771192,
      "cumulativeWealth": 1.7207452892726582,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03963910428810846,
      "cumulativeWealth": 1.652536487297908,
      "drawdown": -0.03963910428810846,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022293017533090653,
      "cumulativeWealth": 1.6156964624125036,
      "drawdown": -0.0610484465743083,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011305663091193408,
      "cumulativeWealth": 1.6339629822741724,
      "drawdown": -0.050432976652324824,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.06788497943832206,
      "cumulativeWealth": 1.5230414388195108,
      "drawdown": -0.11489431450759036,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00439661418011883,
      "cumulativeWealth": 1.5297376644063332,
      "drawdown": -0.11100284629985069,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.05568832206711727,
      "cumulativeWealth": 1.4445491406726736,
      "drawdown": -0.16050960611185516,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0654050492825562,
      "cumulativeWealth": 1.539029948409444,
      "drawdown": -0.10560269552736845,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03665023448355886,
      "cumulativeWealth": 1.4826241399230184,
      "drawdown": -0.1383825664577535,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07204773258446251,
      "cumulativeWealth": 1.3758044323665761,
      "drawdown": -0.20046014889971608,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0436513986309619,
      "cumulativeWealth": 1.4358602200820538,
      "drawdown": -0.16555911613799768,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04858872197301034,
      "cumulativeWealth": 1.5056268331077263,
      "drawdown": -0.12501470002911375,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03897065920531262,
      "cumulativeWealth": 1.446951562904311,
      "drawdown": -0.1591134539639374,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05105359507164531,
      "cumulativeWealth": 1.520823642085112,
      "drawdown": -0.11618317274141787,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.025748380860948994,
      "cumulativeWealth": 1.481664895726369,
      "drawdown": -0.13894002502098735,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.032811850201931,
      "cumulativeWealth": 1.5302810623344023,
      "drawdown": -0.11068705410709756,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011886853317891743,
      "cumulativeWealth": 1.548471288857519,
      "drawdown": -0.10011592156556637,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0018075745939686305,
      "cumulativeWealth": 1.5456723114962903,
      "drawdown": -0.10174252916326132,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.037407104903703026,
      "cumulativeWealth": 1.6034914377991811,
      "drawdown": -0.06814131772113652,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01957836201766394,
      "cumulativeWealth": 1.634885173660638,
      "drawdown": -0.04989705109017761,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012276379937477655,
      "cumulativeWealth": 1.6148147021146309,
      "drawdown": -0.06156087587071246,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0388188526565274,
      "cumulativeWealth": 1.552129448125649,
      "drawdown": -0.09799000595740792,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.019307812669136504,
      "cumulativeWealth": 1.5221612235029887,
      "drawdown": -0.11540584594807113,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07317791927932626,
      "cumulativeWealth": 1.633549814646611,
      "drawdown": -0.050673086347895135,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04099509319016126,
      "cumulativeWealth": 1.7005173415288195,
      "drawdown": -0.011755341054798918,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.008951269644606352,
      "cumulativeWealth": 1.715739130788173,
      "drawdown": -0.0029092966377384233,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02541375125680223,
      "cumulativeWealth": 1.7593424982795858,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023231359852671885,
      "cumulativeWealth": 1.8002144169612175,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.034104808153321065,
      "cumulativeWealth": 1.7388184496359125,
      "drawdown": -0.034104808153321065,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.037025962630824694,
      "cumulativeWealth": 1.8031998765739203,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02471012845561149,
      "cumulativeWealth": 1.8477571771552046,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016942253695503284,
      "cumulativeWealth": 1.8790623480182551,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01986499122358043,
      "cumulativeWealth": 1.9163899050701982,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01793408646509076,
      "cumulativeWealth": 1.9507586073285543,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01542907228127266,
      "cumulativeWealth": 1.9206602117727674,
      "drawdown": -0.01542907228127266,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0402240140246799,
      "cumulativeWealth": 1.9979168750677598,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022446462415335544,
      "cumulativeWealth": 1.9530707090225867,
      "drawdown": -0.022446462415335544,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.018177757267578087,
      "cumulativeWealth": 1.988573154297616,
      "drawdown": -0.00467673149305925,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0013327409933643342,
      "cumulativeWealth": 1.991223407258652,
      "drawdown": -0.0033502233714707286,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.033536656610057336,
      "cumulativeWealth": 1.9244444316155103,
      "drawdown": -0.03677452469075204,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0034778491422050584,
      "cumulativeWealth": 1.917751504199795,
      "drawdown": -0.04012447758380633,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.035279246351418436,
      "cumulativeWealth": 1.9854083319572629,
      "drawdown": -0.006260792561789019,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03665322738813748,
      "cumulativeWealth": 2.058179955006795,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.012763049894510825,
      "cumulativeWealth": 2.0844486084644287,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01707308866113988,
      "cumulativeWealth": 2.1200365843663316,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.025879338390575324,
      "cumulativeWealth": 2.1749017285335475,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016764340132301214,
      "cumulativeWealth": 2.2113625208650136,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0035928087276546616,
      "cumulativeWealth": 2.2193075234299857,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006374211449171607,
      "cumulativeWealth": 2.217892889887478,
      "drawdown": -0.0006374211449170497,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009843921905660302,
      "cumulativeWealth": 2.2397256542906496,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0012072313785640443,
      "cumulativeWealth": 2.242429521379884,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03680593129688381,
      "cumulativeWealth": 2.1598948144778722,
      "drawdown": -0.0368059312968837,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06370683808320132,
      "cumulativeWealth": 2.29749488370056,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.032749898574912395,
      "cumulativeWealth": 2.3727376081181335,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.005158623064307255,
      "cumulativeWealth": 2.360497549167346,
      "drawdown": -0.005158623064307366,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.004977121594286538,
      "cumulativeWealth": 2.348749065842125,
      "drawdown": -0.010110069564343682,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017637872457596515,
      "cumulativeWealth": 2.3901760023003473,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012413549017491254,
      "cumulativeWealth": 2.3605054353353605,
      "drawdown": -0.012413549017491365,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0037094358526845728,
      "cumulativeWealth": 2.36926157882765,
      "drawdown": -0.008750160428591336,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00015302517547421957,
      "cumulativeWealth": 1.0001530251754742,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010291414838137225,
      "cumulativeWealth": 1.001182324143844,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0003273890674695412,
      "cumulativeWealth": 1.0015101002913125,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011383081023395025,
      "cumulativeWealth": 1.002650127353049,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007218603731942164,
      "cumulativeWealth": 1.0033739007481632,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0006995823217386121,
      "cumulativeWealth": 1.0040758433912205,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0005476300132600809,
      "cumulativeWealth": 1.004625705458651,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007438426388359787,
      "cumulativeWealth": 1.0053729888944418,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013124492576865876,
      "cumulativeWealth": 1.0066924899274146,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0008312473955109922,
      "cumulativeWealth": 1.0075293004377472,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001301202489858877,
      "cumulativeWealth": 1.0088403000720827,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010389018060930066,
      "cumulativeWealth": 1.009888386081887,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001498431884485285,
      "cumulativeWealth": 1.0114016350393635,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001487680611908404,
      "cumulativeWealth": 1.012906277642664,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00138848405828651,
      "cumulativeWealth": 1.0143126818617092,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001585747334004628,
      "cumulativeWealth": 1.0159211254928184,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001399550267791927,
      "cumulativeWealth": 1.0173429581760574,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017062679219261856,
      "cumulativeWealth": 1.0190788178311907,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018587743459477224,
      "cumulativeWealth": 1.020973055394274,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 7.739379145199621e-05,
      "cumulativeWealth": 1.0210520723700012,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001749225305698321,
      "cumulativeWealth": 1.0228381224934264,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018474768358609506,
      "cumulativeWealth": 1.0247277922315685,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017504145987847775,
      "cumulativeWealth": 1.026521490718871,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019252556222613126,
      "cumulativeWealth": 1.0284978069902497,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002121932582443087,
      "cumulativeWealth": 1.0306802099978736,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018149191149288146,
      "cumulativeWealth": 1.0325508112123776,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018047312451170416,
      "cumulativeWealth": 1.0344142879235434,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001694825469844341,
      "cumulativeWealth": 1.036167439605087,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016184472653739679,
      "cumulativeWealth": 1.0378444219641854,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016069483809979523,
      "cumulativeWealth": 1.0395121843777884,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00108298518895511,
      "cumulativeWealth": 1.0406379606772078,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011151388965102704,
      "cumulativeWealth": 1.0417984165443441,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0012037044207193759,
      "cumulativeWealth": 1.043052433903837,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011811632635017055,
      "cumulativeWealth": 1.0442844491206702,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0020445061847369495,
      "cumulativeWealth": 1.0464194951355221,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0001958432961273182,
      "cumulativeWealth": 1.046214560892463,
      "drawdown": -0.0001958432961273182,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0001754522828378846,
      "cumulativeWealth": 1.046031000159416,
      "drawdown": -0.00037126121781194676,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0460310001594153,
      "drawdown": -0.0003712612178126129,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010957675826750446,
      "cumulativeWealth": 1.04614562084546,
      "drawdown": -0.0002617251411458632,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0461456208454594,
      "drawdown": -0.0002617251411464183,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021852860145821218,
      "cumulativeWealth": 1.0459170081060143,
      "drawdown": -0.0004801965481756598,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0001089876658619815,
      "cumulativeWealth": 1.046031000159413,
      "drawdown": -0.0003712612178147223,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010897578884505599,
      "cumulativeWealth": 1.0459170081060143,
      "drawdown": -0.0004801965481756598,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 3.2956748225343446e-05,
      "cumulativeWealth": 1.045951478129515,
      "drawdown": -0.0004472556256671645,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.045951478129515,
      "drawdown": -0.0004472556256671645,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010898407410120381,
      "cumulativeWealth": 1.0458374860761162,
      "drawdown": -0.000556190956028213,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010969721364950669,
      "cumulativeWealth": 1.0457227606179633,
      "drawdown": -0.0006658271570796348,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -4.440892098500626e-16,
      "cumulativeWealth": 1.0457227606179629,
      "drawdown": -0.0006658271570800789,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010940867516628927,
      "cumulativeWealth": 1.0456083494761323,
      "drawdown": -0.0007751629849792607,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021854068729576515,
      "cumulativeWealth": 1.0453798415087956,
      "drawdown": -0.000993534267623608,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010934434086418143,
      "cumulativeWealth": 1.0452655351390732,
      "drawdown": -0.0011027699711381178,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010965700311793558,
      "cumulativeWealth": 1.0451509144530273,
      "drawdown": -0.0012123060478058667,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010966902909537168,
      "cumulativeWealth": 1.0452655351390736,
      "drawdown": -0.0011027699711376737,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010965700311837967,
      "cumulativeWealth": 1.0451509144530273,
      "drawdown": -0.0012123060478058667,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002186363367976396,
      "cumulativeWealth": 1.0449224064856906,
      "drawdown": -0.001430677330450214,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0449224064856906,
      "drawdown": -0.001430677330450214,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0449224064856906,
      "drawdown": -0.001430677330450214,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021818280992169647,
      "cumulativeWealth": 1.0446944223788934,
      "drawdown": -0.001648547991171867,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0004591263241255916,
      "cumulativeWealth": 1.0451740690888747,
      "drawdown": -0.0011901785588256386,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010886464996384682,
      "cumulativeWealth": 1.045060286579692,
      "drawdown": -0.001298913640417232,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00032773230897098493,
      "cumulativeWealth": 1.0454027866004267,
      "drawdown": -0.0009716070274127242,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000776518201825338,
      "cumulativeWealth": 1.046214560892461,
      "drawdown": -0.0001958432961292056,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00036131954136897626,
      "cumulativeWealth": 1.046592578657776,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019368862201476489,
      "cumulativeWealth": 1.048619709401487,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002067526682364207,
      "cumulativeWealth": 1.0507877586303276,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001585758484914379,
      "cumulativeWealth": 1.0524540542344198,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00315206088017983,
      "cumulativeWealth": 1.0557714534869589,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003625145469754454,
      "cumulativeWealth": 1.0595987785886631,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028429701008574337,
      "cumulativeWealth": 1.0626111862350958,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034572656857991824,
      "cumulativeWealth": 1.0662849154266127,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003991183021863298,
      "cumulativeWealth": 1.0705406536775324,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036306242771200203,
      "cumulativeWealth": 1.0744273845644179,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037519628423445806,
      "cumulativeWealth": 1.078458596188101,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004605777988269333,
      "cumulativeWealth": 1.083425737051684,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0038603455985546375,
      "cumulativeWealth": 1.0876081348270723,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0049666193127770875,
      "cumulativeWealth": 1.093009870394238,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0039910815106216635,
      "cumulativeWealth": 1.0973721618788954,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004309475671709029,
      "cumulativeWealth": 1.1021012605133234,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0046818942387576445,
      "cumulativeWealth": 1.1072611820554483,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.000338780490609647,
      "cumulativeWealth": 1.1068860635689586,
      "drawdown": -0.000338780490609647,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004267503590957844,
      "cumulativeWealth": 1.1116097038200203,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004443388244672164,
      "cumulativeWealth": 1.1165490173106378,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004101392857673636,
      "cumulativeWealth": 1.1211284234754781,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004322127875189707,
      "cumulativeWealth": 1.125974083886249,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004573429962250408,
      "cumulativeWealth": 1.1311236474982118,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003992395630078471,
      "cumulativeWealth": 1.1356395406055622,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004508424425369473,
      "cumulativeWealth": 1.1407594856488437,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004617095054306741,
      "cumulativeWealth": 1.1460264806281864,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004222312132227568,
      "cumulativeWealth": 1.1508653621411968,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003947743776169466,
      "cumulativeWealth": 1.1554086837117987,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037075555966352702,
      "cumulativeWealth": 1.1596924256434953,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004030916734765633,
      "cumulativeWealth": 1.1643670492492026,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003500162029610454,
      "cumulativeWealth": 1.1684425225835142,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003237589997022061,
      "cumulativeWealth": 1.172225460406726,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032701134530794818,
      "cumulativeWealth": 1.1760587706548442,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00340240386998647,
      "cumulativeWealth": 1.1800601975674518,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036319605101178265,
      "cumulativeWealth": 1.1843461296045787,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033469831493762037,
      "cumulativeWealth": 1.1883101161433942,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035659351779318005,
      "cumulativeWealth": 1.192547552988842,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707617345135805,
      "cumulativeWealth": 1.1969690629812029,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033026252930474786,
      "cumulativeWealth": 1.2009222032836,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003510335698972966,
      "cumulativeWealth": 1.2051378433654756,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028757585093242,
      "cumulativeWealth": 1.2086035287734425,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033520321489957094,
      "cumulativeWealth": 1.2126548066572806,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002954684601867097,
      "cumulativeWealth": 1.216237819141891,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0026702125442881197,
      "cumulativeWealth": 1.2194854326234013,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002878270519971027,
      "cumulativeWealth": 1.2229954415936553,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028891114183087208,
      "cumulativeWealth": 1.226528811688503,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031739690998870973,
      "cumulativeWealth": 1.2304217762369234,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002724445513928808,
      "cumulativeWealth": 1.2337739933254324,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033708814942170484,
      "cumulativeWealth": 1.2379328992475793,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002767813831453303,
      "cumulativeWealth": 1.2413592670485278,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028451956805051193,
      "cumulativeWealth": 1.2448911770730893,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003534801551311917,
      "cumulativeWealth": 1.2492916203370217,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01661522266863713,
      "cumulativeWealth": 1.0166152226686371,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.009826546057086327,
      "cumulativeWealth": 1.0266050389765256,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01055203605624766,
      "cumulativeWealth": 1.0374378123633314,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.011417168193899263,
      "cumulativeWealth": 1.0492824143577946,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.039950581109369776,
      "cumulativeWealth": 1.0073629721563582,
      "drawdown": -0.039950581109369776,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04422262167866209,
      "cumulativeWealth": 1.0519112037671214,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.016192535044465828,
      "cumulativeWealth": 1.0348780947364562,
      "drawdown": -0.016192535044465717,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.026092680223768205,
      "cumulativeWealth": 1.0618808379329971,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.035269261405766916,
      "cumulativeWealth": 1.0244290850781634,
      "drawdown": -0.035269261405766916,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.003398482304351358,
      "cumulativeWealth": 1.0279105891958644,
      "drawdown": -0.03199064106219063,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.020738654172970605,
      "cumulativeWealth": 1.0492280714259319,
      "drawdown": -0.011915429730980476,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022489204355233605,
      "cumulativeWealth": 1.0256317669123864,
      "drawdown": -0.03413666555201367,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0012606453669534723,
      "cumulativeWealth": 1.024338808977228,
      "drawdown": -0.03535427668969571,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.025658704951186273,
      "cumulativeWealth": 0.9980556017076319,
      "drawdown": -0.06010583668653846,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016153800644183036,
      "cumulativeWealth": 1.014177992929427,
      "drawdown": -0.04492297374574161,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01838273267404411,
      "cumulativeWealth": 0.9955346300015068,
      "drawdown": -0.062479899402494654,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03155862832196277,
      "cumulativeWealth": 0.9641169226316465,
      "drawdown": -0.0920667478016205,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.012670459939834844,
      "cumulativeWealth": 0.9763327274771676,
      "drawdown": -0.08056281590159697,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.020772717135513652,
      "cumulativeWealth": 0.9966138110551953,
      "drawdown": -0.0614636073524476,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.020632756089329463,
      "cumulativeWealth": 0.9760509213764363,
      "drawdown": -0.08082819982290379,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04439212516850466,
      "cumulativeWealth": 1.0193798960490135,
      "drawdown": -0.040024210218082334,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.031118854235594018,
      "cumulativeWealth": 0.9876579616531692,
      "drawdown": -0.0698975568900051,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025601110678951766,
      "cumulativeWealth": 1.0129431024423998,
      "drawdown": -0.04608590130118273,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.00872730148080425,
      "cumulativeWealth": 1.0217833622803159,
      "drawdown": -0.037760805375048445,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0069737004714387485,
      "cumulativeWealth": 1.0289089733955583,
      "drawdown": -0.031050437449855695,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.022073690373663357,
      "cumulativeWealth": 1.0516207914969757,
      "drawdown": -0.009662144818427199,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.021027210345847536,
      "cumulativeWealth": 1.0737334430838492,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01707943201458184,
      "cumulativeWealth": 1.0553946857409158,
      "drawdown": -0.01707943201458184,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.02357994083077075,
      "cumulativeWealth": 1.030508541498035,
      "drawdown": -0.04025664084902558,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0056127429927044226,
      "cumulativeWealth": 1.0247245619028198,
      "drawdown": -0.04564343366289492,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.036203480302966495,
      "cumulativeWealth": 1.0618231573956345,
      "drawdown": -0.01109240451150284,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04452232024737923,
      "cumulativeWealth": 1.1090979880552863,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01137156897586411,
      "cumulativeWealth": 1.0964858037831235,
      "drawdown": -0.011371568975864,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.023203200438501437,
      "cumulativeWealth": 1.1219277836662747,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02721707174766541,
      "cumulativeWealth": 1.1524633726500189,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03366153371686065,
      "cumulativeWealth": 1.1136696879741133,
      "drawdown": -0.03366153371686065,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.021886113695465337,
      "cumulativeWealth": 1.1380435893843082,
      "drawdown": -0.012512140175486297,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025374465687530767,
      "cumulativeWealth": 1.1669208373940547,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.00844444500121777,
      "cumulativeWealth": 1.1767748362262038,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016564138056138322,
      "cumulativeWealth": 1.1962670970744442,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.026273999520741498,
      "cumulativeWealth": 1.227697818209657,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.010298688565018366,
      "cumulativeWealth": 1.2150541407279631,
      "drawdown": -0.010298688565018366,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025891567031869123,
      "cumulativeWealth": 1.2465137964599713,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022147747068916424,
      "cumulativeWealth": 1.218906324178061,
      "drawdown": -0.022147747068916424,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.018995381296187164,
      "cumulativeWealth": 1.2420599145701572,
      "drawdown": -0.003573070673154932,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0029412196271750846,
      "cumulativeWealth": 1.238406743571296,
      "drawdown": -0.006503781114736817,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.017649305221656753,
      "cumulativeWealth": 1.2165497249654482,
      "drawdown": -0.024038299118404716,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0028328114473163968,
      "cumulativeWealth": 1.21999598095256,
      "drawdown": -0.021273583640004978,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016573658447027073,
      "cumulativeWealth": 1.2402157776476135,
      "drawdown": -0.005052506302171578,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.03893799943344756,
      "cumulativeWealth": 1.288507298895009,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.002159570244593567,
      "cumulativeWealth": 1.2912899209176443,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02367799145547389,
      "cumulativeWealth": 1.3218650726316719,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06420614476630004,
      "cumulativeWealth": 1.4067369328465766,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.043871995609640724,
      "cumulativeWealth": 1.468453289388341,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0005255875526347653,
      "cumulativeWealth": 1.467681488617813,
      "drawdown": -0.0005255875526348763,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0193112214690474,
      "cumulativeWealth": 1.4960242108905326,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0760403091233377,
      "cumulativeWealth": 1.6097823543426462,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.05724476900374453,
      "cumulativeWealth": 1.701933973363295,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.07289478624810508,
      "cumulativeWealth": 1.5778718601665895,
      "drawdown": -0.07289478624810497,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.08482850499868966,
      "cumulativeWealth": 1.7117203711440228,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06520331647040067,
      "cumulativeWealth": 1.8233302162125582,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.02181116412294093,
      "cumulativeWealth": 1.7835612616164287,
      "drawdown": -0.02181116412294093,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.04612361312376512,
      "cumulativeWealth": 1.7012969720030982,
      "drawdown": -0.06692876755092059,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04959273668799269,
      "cumulativeWealth": 1.785668944763727,
      "drawdown": -0.020655211608932578,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.004965609021640893,
      "cumulativeWealth": 1.7768020109419442,
      "drawdown": -0.025518254925464334,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.02285937823297357,
      "cumulativeWealth": 1.7361854217287143,
      "drawdown": -0.047794301717251186,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01661522266863691,
      "cumulativeWealth": 1.016615222668637,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.00982654605708655,
      "cumulativeWealth": 1.0266050389765256,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01055203605624766,
      "cumulativeWealth": 1.0374378123633314,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.011417168193899041,
      "cumulativeWealth": 1.0492824143577943,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.039950581109369665,
      "cumulativeWealth": 1.007362972156358,
      "drawdown": -0.039950581109369776,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.044222621678661866,
      "cumulativeWealth": 1.051911203767121,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01619253504446483,
      "cumulativeWealth": 1.0348780947364566,
      "drawdown": -0.01619253504446494,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.026092680223768205,
      "cumulativeWealth": 1.0618808379329976,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.035269261405766916,
      "cumulativeWealth": 1.0244290850781639,
      "drawdown": -0.035269261405766916,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.003398482304351136,
      "cumulativeWealth": 1.0279105891958646,
      "drawdown": -0.03199064106219085,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02073865417297105,
      "cumulativeWealth": 1.0492280714259326,
      "drawdown": -0.011915429730980254,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.02248920435523405,
      "cumulativeWealth": 1.0256317669123867,
      "drawdown": -0.03413666555201378,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0012606453669536943,
      "cumulativeWealth": 1.024338808977228,
      "drawdown": -0.03535427668969604,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.025658704951185385,
      "cumulativeWealth": 0.9980556017076327,
      "drawdown": -0.06010583668653802,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016153800644182592,
      "cumulativeWealth": 1.0141779929294275,
      "drawdown": -0.04492297374574161,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.018382732674043556,
      "cumulativeWealth": 0.9955346300015078,
      "drawdown": -0.0624798994024941,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.031558628321962545,
      "cumulativeWealth": 0.9641169226316477,
      "drawdown": -0.09206674780161972,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.012670459939834844,
      "cumulativeWealth": 0.9763327274771688,
      "drawdown": -0.0805628159015962,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.020772717135514096,
      "cumulativeWealth": 0.996613811055197,
      "drawdown": -0.06146360735244649,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.020632756089329796,
      "cumulativeWealth": 0.9760509213764377,
      "drawdown": -0.0808281998229029,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.044392125168504215,
      "cumulativeWealth": 1.0193798960490144,
      "drawdown": -0.04002421021808189,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.031118854235593574,
      "cumulativeWealth": 0.9876579616531705,
      "drawdown": -0.06989755689000421,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.025601110678951544,
      "cumulativeWealth": 1.0129431024424012,
      "drawdown": -0.04608590130118184,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.00872730148080425,
      "cumulativeWealth": 1.0217833622803172,
      "drawdown": -0.03776080537504767,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0069737004714385264,
      "cumulativeWealth": 1.0289089733955594,
      "drawdown": -0.03105043744985503,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0220736903736638,
      "cumulativeWealth": 1.0516207914969773,
      "drawdown": -0.009662144818426088,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.021027210345847758,
      "cumulativeWealth": 1.0737334430838512,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01707943201458184,
      "cumulativeWealth": 1.0553946857409178,
      "drawdown": -0.01707943201458173,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.02357994083077053,
      "cumulativeWealth": 1.0305085414980373,
      "drawdown": -0.04025664084902525,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.005612742992704534,
      "cumulativeWealth": 1.024724561902822,
      "drawdown": -0.045643433662894584,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.036203480302966495,
      "cumulativeWealth": 1.0618231573956367,
      "drawdown": -0.011092404511502618,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.044522320247379676,
      "cumulativeWealth": 1.1090979880552891,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01137156897586411,
      "cumulativeWealth": 1.0964858037831262,
      "drawdown": -0.011371568975864221,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.023203200438501215,
      "cumulativeWealth": 1.121927783666277,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02721707174766541,
      "cumulativeWealth": 1.1524633726500213,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03366153371686054,
      "cumulativeWealth": 1.1136696879741157,
      "drawdown": -0.03366153371686065,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02188611369546556,
      "cumulativeWealth": 1.1380435893843108,
      "drawdown": -0.012512140175486075,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02537446568753099,
      "cumulativeWealth": 1.1669208373940576,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.00844444500121777,
      "cumulativeWealth": 1.1767748362262067,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016564138056138544,
      "cumulativeWealth": 1.1962670970744473,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02627399952074172,
      "cumulativeWealth": 1.2276978182096605,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.007582307648633102,
      "cumulativeWealth": 1.2183890356524392,
      "drawdown": -0.007582307648633102,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02486289147007592,
      "cumulativeWealth": 1.2486817100141963,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.02214774706891498,
      "cumulativeWealth": 1.2210262233312217,
      "drawdown": -0.02214774706891487,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.018995381296187608,
      "cumulativeWealth": 1.244220082016042,
      "drawdown": -0.003573070673152934,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0029412196271751956,
      "cumulativeWealth": 1.240560557490291,
      "drawdown": -0.006503781114735041,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.017649305221656864,
      "cumulativeWealth": 1.218665525565196,
      "drawdown": -0.02403829911840316,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.002832811447316841,
      "cumulativeWealth": 1.2221177752164674,
      "drawdown": -0.02127358364000298,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01657365844702685,
      "cumulativeWealth": 1.2423727378049454,
      "drawdown": -0.005052506302169801,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.038937999433447334,
      "cumulativeWealth": 1.2907482467657247,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0021595702445940113,
      "cumulativeWealth": 1.293535708272702,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.023677991455473002,
      "cumulativeWealth": 1.3241640357205322,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0642061447662996,
      "cumulativeWealth": 1.4091835034923321,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.043871995609640724,
      "cumulativeWealth": 1.4710071959707258,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0005255875526346543,
      "cumulativeWealth": 1.4702340528986877,
      "drawdown": -0.0005255875526345433,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01931122146904718,
      "cumulativeWealth": 1.498626068305549,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.07604030912333726,
      "cumulativeWealth": 1.6125820577997945,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.05724476900374431,
      "cumulativeWealth": 1.7048939451981264,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.07289478624810464,
      "cumulativeWealth": 1.5806160654872212,
      "drawdown": -0.07289478624810464,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.08482850499868966,
      "cumulativeWealth": 1.7146973632994131,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0652033164704009,
      "cumulativeWealth": 1.8265013181295868,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.006918882086592193,
      "cumulativeWealth": 1.813863970878443,
      "drawdown": -0.006918882086592193,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.024452941326455147,
      "cumulativeWealth": 1.7695096616243815,
      "drawdown": -0.031202636395339267,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04505229975642444,
      "cumulativeWealth": 1.8492301413217722,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.004965609021641115,
      "cumulativeWealth": 1.8400475874489342,
      "drawdown": -0.004965609021641115,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01502239756532009,
      "cumulativeWealth": 1.812405661051168,
      "drawdown": -0.01991341123408419,
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
      "cagr": 0.12328583791756631,
      "annVol": 0.10945797636978807,
      "sharpeRf0": 1.1187180845465385,
      "maxDrawdown": -0.1355530699089279,
      "calmar": 0.9095023668618984,
      "cumulativeReturn": 2.0167320499263277,
      "terminalWealth": 3.0167320499263277,
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
      "cagr": 0.11786015419592877,
      "annVol": 0.10480115740880142,
      "sharpeRf0": 1.1173752749642885,
      "maxDrawdown": -0.13041371735434237,
      "calmar": 0.903740469844098,
      "cumulativeReturn": 1.8811449307567685,
      "terminalWealth": 2.8811449307567685,
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
      "cagr": 0.1685020258739347,
      "annVol": 0.17695047596294444,
      "sharpeRf0": 0.9700386534693002,
      "maxDrawdown": -0.2197163487735896,
      "calmar": 0.7669070909583084,
      "cumulativeReturn": 3.3885186415814896,
      "terminalWealth": 4.38851864158149,
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
      "cagr": 0.0950725556146006,
      "annVol": 0.11419769901885958,
      "sharpeRf0": 0.8537777160155132,
      "maxDrawdown": -0.21630709557905903,
      "calmar": 0.4395258295160831,
      "cumulativeReturn": 1.3692615788276519,
      "terminalWealth": 2.369261578827652,
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
      "cagr": 0.02371179270473278,
      "annVol": 0.002958346113439613,
      "sharpeRf0": 7.934773639805701,
      "maxDrawdown": -0.004474473916887156,
      "calmar": 5.299347620564257,
      "cumulativeReturn": 0.24929162033702545,
      "terminalWealth": 1.2492916203370255,
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
      "cagr": 0.10566958383810943,
      "annVol": 0.11449756629709172,
      "sharpeRf0": 0.9360902737919263,
      "maxDrawdown": -0.11135951243922237,
      "calmar": 0.9489048714700651,
      "cumulativeReturn": 0.7361854217287109,
      "terminalWealth": 1.736185421728711,
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
      "cagr": 0.11435310055581538,
      "annVol": 0.10724479908997464,
      "sharpeRf0": 1.0649244628638865,
      "maxDrawdown": -0.11135951243922226,
      "calmar": 1.0268821948931122,
      "cumulativeReturn": 0.812405661051163,
      "terminalWealth": 1.812405661051163,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    }
  ],
  "coreCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.10335532927453306,
      "monthsObserved": 8,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2018",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.002592537415474938,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2019",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.14337062995986805,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2020",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.2825173150317455,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.13743419862470785,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": -0.08082819982290368,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.13631160400035913,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.09900688424772564,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.2273496176167098,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.16053297071657813,
      "monthsObserved": 10,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2017",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09854777993513153,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.013958179278199978,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1291205754650011,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.26532211857296883,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12959689711690148,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.07432787716569289,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12076842865246684,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09004529144881301,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.22007816862661156,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1615981898594374,
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
      "annualReturn": 0.18028847452390528,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.29364449635738943,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.1466293885606169,
      "monthsObserved": 10,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.08858902707534488,
      "monthsObserved": 8,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2018",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.023312706826058904,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2019",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.21931494758906567,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2020",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14655365938408482,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2021",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.15767543184431876,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2022",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.1591134539639375,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2023",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.17524137305298093,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2024",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14851560835405175,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2025",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.13559272567116687,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2026",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.06824887244570799,
      "monthsObserved": 10,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2017",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.005372988894441821,
      "monthsObserved": 8,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2018",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.015595290154752028,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2019",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.020318595628710856,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2020",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.003986434917944148,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": -0.0009838617424821061,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2022",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.014045418120884667,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2023",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04462753821147247,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2024",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.05193035450722627,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2025",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04147125035805033,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2026",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.03021207146387539,
      "monthsObserved": 10,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.06188083793299759,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": -0.08082819982290401,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.1363116040003598,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.09900688424772652,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.22734961761670625,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.16053297071657724,
      "monthsObserved": 10,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.061880837932997146,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": -0.08082819982290335,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.1363116040003618,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.10091825653041786,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.22734961761670847,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.20937817603853626,
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
      "netReturn": 0.02966889139696205,
      "cumulativeWealth": 1.029668891396962,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0047763887492888735,
      "cumulativeWealth": 1.0247507924886008,
      "drawdown": -0.0047763887492889845,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020667422356349885,
      "cumulativeWealth": 1.0459297499269669,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010098741882213824,
      "cumulativeWealth": 1.0564923244984077,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002336958695947411,
      "cumulativeWealth": 1.058961303423346,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019897227947955454,
      "cumulativeWealth": 1.0800316978656244,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008995788206141553,
      "cumulativeWealth": 1.0897474342755429,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012487200768714457,
      "cumulativeWealth": 1.103355329274533,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05378701099279737,
      "cumulativeWealth": 1.162701514499184,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03821234844584653,
      "cumulativeWealth": 1.1182719590886276,
      "drawdown": -0.03821234844584653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.006031923410924067,
      "cumulativeWealth": 1.111526628278821,
      "drawdown": -0.04401377789759375,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006470777190120458,
      "cumulativeWealth": 1.1187190694312992,
      "drawdown": -0.037827804057543934,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009902163786411622,
      "cumulativeWealth": 1.1297968088877899,
      "drawdown": -0.028300217382590476,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0026960984596120507,
      "cumulativeWealth": 1.1267507654516729,
      "drawdown": -0.030920015669710588,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00862269084659717,
      "cumulativeWealth": 1.1364663889633293,
      "drawdown": -0.022563938559205354,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02455891531649068,
      "cumulativeWealth": 1.1643767707699177,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.003183589568718781,
      "cumulativeWealth": 1.1606698730284362,
      "drawdown": -0.003183589568718781,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03632640460505265,
      "cumulativeWealth": 1.11850690960791,
      "drawdown": -0.03939434581100176,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.003674913159109172,
      "cumulativeWealth": 1.1226173253685827,
      "drawdown": -0.03586420345170793,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.014610059679024179,
      "cumulativeWealth": 1.1062158192482412,
      "drawdown": -0.049950284977962056,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019987741066549214,
      "cumulativeWealth": 1.1283265746070956,
      "drawdown": -0.03096093727375271,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0026675744813797753,
      "cumulativeWealth": 1.1313364697841801,
      "drawdown": -0.028375953398564024,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.017334412325051174,
      "cumulativeWealth": 1.150947522629787,
      "drawdown": -0.01153342154983994,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.017079492502174887,
      "cumulativeWealth": 1.1706051222129392,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03647294843881277,
      "cumulativeWealth": 1.1279097019482565,
      "drawdown": -0.03647294843881288,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03418074919643699,
      "cumulativeWealth": 1.166462500586778,
      "drawdown": -0.0035388719454174655,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005419852027708005,
      "cumulativeWealth": 1.1727845547358284,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.030780874563866023,
      "cumulativeWealth": 1.2088838890055915,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0067059233858794975,
      "cumulativeWealth": 1.200777206263496,
      "drawdown": -0.0067059233858793865,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016188983523931944,
      "cumulativeWealth": 1.2202165686716089,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00905714659373058,
      "cumulativeWealth": 1.2312682490101665,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.027245426934573214,
      "cumulativeWealth": 1.2648146781254328,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0021390734650852394,
      "cumulativeWealth": 1.2675202096416613,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010709684260580166,
      "cumulativeWealth": 1.2539454684024949,
      "drawdown": -0.010709684260580055,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022270989823264364,
      "cumulativeWealth": 1.2260188616367744,
      "drawdown": -0.03274215881466669,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06062911464811016,
      "cumulativeWealth": 1.300351299759696,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021642703906907812,
      "cumulativeWealth": 1.3284944179153577,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025264983314499112,
      "cumulativeWealth": 1.3620588072173945,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.058765565381972085,
      "cumulativeWealth": 1.4421009631070192,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04375053186588418,
      "cumulativeWealth": 1.5051936472472551,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031136450166394214,
      "cumulativeWealth": 1.4583272602589679,
      "drawdown": -0.031136450166394214,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017226166791428854,
      "cumulativeWealth": 1.4332058716372593,
      "drawdown": -0.04782625527396378,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07480579507319463,
      "cumulativeWealth": 1.5404179763686554,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.053056215837068654,
      "cumulativeWealth": 1.6221467250021713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005008220402663577,
      "cumulativeWealth": 1.630270793326441,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.013774183190991884,
      "cumulativeWealth": 1.6527264418846432,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01210723709922612,
      "cumulativeWealth": 1.672736392776701,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03875499779032898,
      "cumulativeWealth": 1.7375632879825649,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01661522266863713,
      "cumulativeWealth": 1.7664332889132444,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009826546057086327,
      "cumulativeWealth": 1.7837912269835208,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01055203605624766,
      "cumulativeWealth": 1.8026138563274692,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.011417168193899263,
      "cumulativeWealth": 1.8231946019138132,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.039950581109369776,
      "cumulativeWealth": 1.7503569180918903,
      "drawdown": -0.039950581109369776,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04422262167866209,
      "cumulativeWealth": 1.8277622898832968,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.016192535044465828,
      "cumulativeWealth": 1.7981661849514083,
      "drawdown": -0.016192535044465828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026092680223768205,
      "cumulativeWealth": 1.8450851602045386,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.035269261405766916,
      "cumulativeWealth": 1.7800103693733833,
      "drawdown": -0.03526926140576703,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.003398482304351358,
      "cumulativeWealth": 1.7860597031152607,
      "drawdown": -0.03199064106219063,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020738654172970605,
      "cumulativeWealth": 1.8231001776304467,
      "drawdown": -0.011915429730980365,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022489204355233605,
      "cumulativeWealth": 1.7821001051756529,
      "drawdown": -0.034136665552013556,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0012606453669534723,
      "cumulativeWealth": 1.779853508934616,
      "drawdown": -0.03535427668969571,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.025658704951186273,
      "cumulativeWealth": 1.734184772892529,
      "drawdown": -0.06010583668653846,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016153800644183036,
      "cumulativeWealth": 1.7621984479940127,
      "drawdown": -0.04492297374574161,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01838273267404411,
      "cumulativeWealth": 1.7298044250059232,
      "drawdown": -0.062479899402494654,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03155862832196277,
      "cumulativeWealth": 1.6752141700874748,
      "drawdown": -0.0920667478016205,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012670459939834844,
      "cumulativeWealth": 1.6964399041202118,
      "drawdown": -0.08056281590159697,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020772717135513652,
      "cumulativeWealth": 1.731679570385899,
      "drawdown": -0.0614636073524476,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.020632756089329463,
      "cumulativeWealth": 1.6959502481852518,
      "drawdown": -0.08082819982290379,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04439212516850466,
      "cumulativeWealth": 1.771237083882248,
      "drawdown": -0.040024210218082334,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031118854235594018,
      "cumulativeWealth": 1.7161182152522376,
      "drawdown": -0.0698975568900051,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025601110678951766,
      "cumulativeWealth": 1.7600527476190753,
      "drawdown": -0.04608590130118273,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00872730148080425,
      "cumulativeWealth": 1.7754132585696647,
      "drawdown": -0.037760805375048556,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0069737004714387485,
      "cumulativeWealth": 1.7877944588479506,
      "drawdown": -0.031050437449855695,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.022073690373663357,
      "cumulativeWealth": 1.8272576801843112,
      "drawdown": -0.00966214481842731,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021027210345847536,
      "cumulativeWealth": 1.8656798117816122,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01707943201458184,
      "cumulativeWealth": 1.8338150602753103,
      "drawdown": -0.01707943201458184,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02357994083077075,
      "cumulativeWealth": 1.7905738096594421,
      "drawdown": -0.04025664084902558,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0056127429927044226,
      "cumulativeWealth": 1.780523779056356,
      "drawdown": -0.04564343366289492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.036203480302966495,
      "cumulativeWealth": 1.844984936620386,
      "drawdown": -0.01109240451150284,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04452232024737923,
      "cumulativeWealth": 1.9271279468201896,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01137156897586411,
      "cumulativeWealth": 1.9052134784476085,
      "drawdown": -0.01137156897586411,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.023203200438501437,
      "cumulativeWealth": 1.9494205286661628,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02721707174766541,
      "cumulativeWealth": 2.0024780470612416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03366153371686065,
      "cumulativeWealth": 1.9350715647628163,
      "drawdown": -0.03366153371686065,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021886113695465337,
      "cumulativeWealth": 1.9774227610380772,
      "drawdown": -0.012512140175486297,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025374465687530767,
      "cumulativeWealth": 2.0275988070377804,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00844444500121777,
      "cumulativeWealth": 2.044720753648346,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016564138056138322,
      "cumulativeWealth": 2.0785897904980284,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026273999520741498,
      "cumulativeWealth": 2.133202657657392,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010298688565018366,
      "cumulativeWealth": 2.111233467840109,
      "drawdown": -0.010298688565018477,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025891567031869123,
      "cumulativeWealth": 2.1658966106926165,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022147747068916424,
      "cumulativeWealth": 2.117926880381573,
      "drawdown": -0.022147747068916424,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.018995381296187164,
      "cumulativeWealth": 2.1581577090318653,
      "drawdown": -0.003573070673154821,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0029412196271750846,
      "cumulativeWealth": 2.1518100932195217,
      "drawdown": -0.006503781114736706,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017649305221656753,
      "cumulativeWealth": 2.1138321401052487,
      "drawdown": -0.024038299118404605,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0028328114473163968,
      "cumulativeWealth": 2.119820227989444,
      "drawdown": -0.021273583640004867,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016573658447027073,
      "cumulativeWealth": 2.15495340441724,
      "drawdown": -0.005052506302171578,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03893799943344756,
      "cumulativeWealth": 2.2388629788575445,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002159570244593567,
      "cumulativeWealth": 2.2436979607284075,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02367799145547389,
      "cumulativeWealth": 2.296824221871199,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06420614476630004,
      "cumulativeWealth": 2.444294450363406,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.043871995609640724,
      "cumulativeWealth": 2.551530525758418,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0005255875526347653,
      "cumulativeWealth": 2.550189473073912,
      "drawdown": -0.0005255875526347653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0193112214690474,
      "cumulativeWealth": 2.5994367467764756,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0760403091233377,
      "cumulativeWealth": 2.7970987205479223,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05724476900374453,
      "cumulativeWealth": 2.9572179906863574,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.07289478624810508,
      "cumulativeWealth": 2.7416522173662248,
      "drawdown": -0.07289478624810497,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.08482850499868966,
      "cumulativeWealth": 2.974222476191744,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06520331647040067,
      "cumulativeWealth": 3.168151645560253,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02181116412294093,
      "cumulativeWealth": 3.0990505700525732,
      "drawdown": -0.02181116412294093,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.04612361312376512,
      "cumulativeWealth": 2.9561111605084847,
      "drawdown": -0.06692876755092048,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04959273668799269,
      "cumulativeWealth": 3.1027128029120186,
      "drawdown": -0.020655211608932467,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004965609021640893,
      "cumulativeWealth": 3.0873059442263178,
      "drawdown": -0.025518254925464223,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.02285937823297357,
      "cumulativeWealth": 3.0167320499263406,
      "drawdown": -0.047794301717251186,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014046162901941717,
      "cumulativeWealth": 1.0140461629019417,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01934334012646244,
      "cumulativeWealth": 1.0336612027348882,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.003741924298791499,
      "cumulativeWealth": 1.0297933207636565,
      "drawdown": -0.003741924298791499,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01444173279043226,
      "cumulativeWealth": 1.044665320731497,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022320447676950073,
      "cumulativeWealth": 1.0679827183628088,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00011907296608926199,
      "cumulativeWealth": 1.0678555504928013,
      "drawdown": -0.00011907296608915097,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.029434803185824143,
      "cumulativeWealth": 1.0364234325331558,
      "drawdown": -0.029550371262591746,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0020218127938227415,
      "cumulativeWealth": 1.038518886688869,
      "drawdown": -0.02758830378744992,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.056792276930127006,
      "cumulativeWealth": 1.0974987388988704,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03206971349325016,
      "cumulativeWealth": 1.0623022687831802,
      "drawdown": -0.03206971349325016,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.022045708212884985,
      "cumulativeWealth": 1.0388830629317005,
      "drawdown": -0.0534084221599922,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013531189756966988,
      "cumulativeWealth": 1.0529403867915283,
      "drawdown": -0.04059991189789225,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019817515793430163,
      "cumulativeWealth": 1.07380704953631,
      "drawdown": -0.021586985499710498,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03478772472428249,
      "cumulativeWealth": 1.111162353582573,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011155946279097773,
      "cumulativeWealth": 1.1124019603349653,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02755281625244166,
      "cumulativeWealth": 1.1430517671469305,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005989539262457266,
      "cumulativeWealth": 1.1362054137085829,
      "drawdown": -0.005989539262457155,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01432932844951429,
      "cumulativeWealth": 1.1199243531494363,
      "drawdown": -0.020233041636618432,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014568850121504995,
      "cumulativeWealth": 1.1036083431009787,
      "drawdown": -0.03450711960701747,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.015245188750827032,
      "cumulativeWealth": 1.0867836256034167,
      "drawdown": -0.049226240806188204,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013317526976988958,
      "cumulativeWealth": 1.10125689585554,
      "drawdown": -0.036564285619111514,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008182676127141963,
      "cumulativeWealth": 1.1102681243671075,
      "drawdown": -0.028680803199011007,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03486928635272557,
      "cumulativeWealth": 1.1489823815239677,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04302838387979335,
      "cumulativeWealth": 1.1984212365073001,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01566608271033798,
      "cumulativeWealth": 1.1796466702943513,
      "drawdown": -0.01566608271033798,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.005575828180679476,
      "cumulativeWealth": 1.1862241774418232,
      "drawdown": -0.01017760591511574,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03221925685632154,
      "cumulativeWealth": 1.224443438904,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04889734918483213,
      "cumulativeWealth": 1.2843154772931655,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01424312428273633,
      "cumulativeWealth": 1.266022812331837,
      "drawdown": -0.01424312428273633,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012905617271951608,
      "cumulativeWealth": 1.2496840064583226,
      "drawdown": -0.02696492524393812,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02059844616332196,
      "cumulativeWealth": 1.2754255551865188,
      "drawdown": -0.006921914641551452,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009214207611625946,
      "cumulativeWealth": 1.2871775910451806,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028805601345560206,
      "cumulativeWealth": 1.3242555155937665,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009449183952334739,
      "cumulativeWealth": 1.336768649560506,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.017952668269669902,
      "cumulativeWealth": 1.3127700854416515,
      "drawdown": -0.017952668269670014,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05740355837376243,
      "cumulativeWealth": 1.3881277596726305,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04271637593970401,
      "cumulativeWealth": 1.4474235469071457,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.007522465825681723,
      "cumulativeWealth": 1.4365353527402496,
      "drawdown": -0.007522465825681834,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.050964387718384296,
      "cumulativeWealth": 1.5097474974284697,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04153940203931228,
      "cumulativeWealth": 1.5724615057019964,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.05012129894072981,
      "cumulativeWealth": 1.4936476925019164,
      "drawdown": -0.05012129894072992,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.046157614552630566,
      "cumulativeWealth": 1.4247044780339868,
      "drawdown": -0.09396543389597711,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.050835944397945365,
      "cumulativeWealth": 1.4971306756628264,
      "drawdown": -0.04790631107089638,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03597785608736337,
      "cumulativeWealth": 1.5509942276558006,
      "drawdown": -0.013652021348918186,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028939625110675937,
      "cumulativeWealth": 1.595879419152982,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020008331227040932,
      "cumulativeWealth": 1.6278103031698126,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01940545178968689,
      "cumulativeWealth": 1.65939869753073,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019799057905983908,
      "cumulativeWealth": 1.6922532284322551,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026417350799524453,
      "cumulativeWealth": 1.7369580756093779,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02094333833471307,
      "cumulativeWealth": 1.7733357762600772,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.021752577400280027,
      "cumulativeWealth": 1.8119103999898603,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.025842994944854425,
      "cumulativeWealth": 1.8587355912973273,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.018974597533153337,
      "cumulativeWealth": 1.8234668315319127,
      "drawdown": -0.018974597533153337,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02979943478203473,
      "cumulativeWealth": 1.8778051124553514,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0035026564958631212,
      "cumulativeWealth": 1.884382418730458,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02536023339721094,
      "cumulativeWealth": 1.9321707966790633,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02082132946792825,
      "cumulativeWealth": 1.8919404319330992,
      "drawdown": -0.02082132946792825,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00500948655402722,
      "cumulativeWealth": 1.88246278177831,
      "drawdown": -0.025726511851948852,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.035151538401482885,
      "cumulativeWealth": 1.9486342445413525,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.024024082647094103,
      "cumulativeWealth": 1.9954483946811716,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02524223377354673,
      "cumulativeWealth": 1.945078819819581,
      "drawdown": -0.02524223377354673,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.010412003200670261,
      "cumulativeWealth": 1.9653309867170985,
      "drawdown": -0.015093052791718686,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022024881095588755,
      "cumulativeWealth": 2.0086171680130187,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01732276415091727,
      "cumulativeWealth": 2.0434119694839916,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.031868512072473765,
      "cumulativeWealth": 2.1085324685025295,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.006637630393491856,
      "cumulativeWealth": 2.122528127701126,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0483582401489695,
      "cumulativeWealth": 2.0198864027788126,
      "drawdown": -0.04835824014896939,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.06874504710221996,
      "cumulativeWealth": 1.8810292168786495,
      "drawdown": -0.113778897754368,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020558370636716505,
      "cumulativeWealth": 1.9197001126977333,
      "drawdown": -0.09555963586832295,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03721025973542913,
      "cumulativeWealth": 1.9911326525053485,
      "drawdown": -0.061905175003777124,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00860307552573758,
      "cumulativeWealth": 2.008262517096614,
      "drawdown": -0.053834674374031,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.042097396919903884,
      "cumulativeWealth": 2.0928051413981956,
      "drawdown": -0.014003577109304555,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.006295855224257241,
      "cumulativeWealth": 2.0796291432153713,
      "drawdown": -0.020211267839459923,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.023102117373591247,
      "cumulativeWealth": 2.1276729797754736,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.013807726932880127,
      "cumulativeWealth": 2.0982946522682666,
      "drawdown": -0.013807726932880127,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01884755882653688,
      "cumulativeWealth": 2.1378423841623007,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.006471389691370177,
      "cumulativeWealth": 2.1240075729956587,
      "drawdown": -0.006471389691370066,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005450457821462251,
      "cumulativeWealth": 2.1124307593065796,
      "drawdown": -0.011886575476273142,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.009693002667008899,
      "cumulativeWealth": 2.0919549623227494,
      "drawdown": -0.02146436153548892,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03599334128593501,
      "cumulativeWealth": 2.1672514112364376,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026368152052603788,
      "cumulativeWealth": 2.22439782598414,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02841710016309218,
      "cumulativeWealth": 2.2876087618076957,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03986684105401683,
      "cumulativeWealth": 2.3788084967084595,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.008132163788708957,
      "cumulativeWealth": 2.359463636391254,
      "drawdown": -0.008132163788708957,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014628361963535896,
      "cumulativeWealth": 2.3939787245041857,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03381971050592347,
      "cumulativeWealth": 2.474942391924257,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005392106357616222,
      "cumulativeWealth": 2.4615972393180283,
      "drawdown": -0.005392106357616222,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.009475722434748035,
      "cumulativeWealth": 2.4382718271321084,
      "drawdown": -0.014816734689180988,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01276103606068757,
      "cumulativeWealth": 2.4693867018439,
      "drawdown": -0.0022447755141635772,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03728534233307235,
      "cumulativeWealth": 2.561458630374886,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03685327994097154,
      "cumulativeWealth": 2.655856782337309,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02985041374211872,
      "cumulativeWealth": 2.73513520612989,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011277857716407436,
      "cumulativeWealth": 2.7382198526988772,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.002729904716085363,
      "cumulativeWealth": 2.7456949319884383,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0026754963085369177,
      "cumulativeWealth": 2.7383488353335346,
      "drawdown": -0.0026754963085369177,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.030012192458854114,
      "cumulativeWealth": 2.6561649830680256,
      "drawdown": -0.03260739125725631,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02151168251549651,
      "cumulativeWealth": 2.599026405243487,
      "drawdown": -0.05341763392436816,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02232752044509745,
      "cumulativeWealth": 2.657056220443909,
      "drawdown": -0.032282796792845736,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.034123154154812596,
      "cumulativeWealth": 2.7477233594521207,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01845482475442206,
      "cumulativeWealth": 2.7984321125244414,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.07861171267457778,
      "cumulativeWealth": 3.0184216536935247,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05939820668635232,
      "cumulativeWealth": 3.197710486946174,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02571025036053176,
      "cumulativeWealth": 3.279924424146058,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0029271991356052407,
      "cumulativeWealth": 3.289525416085269,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06919301348942253,
      "cumulativeWealth": 3.5171375925742554,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05987902825069091,
      "cumulativeWealth": 3.727740373841576,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.026931766286780068,
      "cumulativeWealth": 3.6273457413154806,
      "drawdown": -0.026931766286780068,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0636707323012784,
      "cumulativeWealth": 3.8583015009749606,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0805814737633952,
      "cumulativeWealth": 4.169209122147043,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013069678273510243,
      "cumulativeWealth": 4.223699344028489,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.12497221073984044,
      "cumulativeWealth": 3.695854299504835,
      "drawdown": -0.12497221073984044,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009710295184225393,
      "cumulativeWealth": 3.7317421357109155,
      "drawdown": -0.1164754326117241,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012086436705957104,
      "cumulativeWealth": 3.6866386705846925,
      "drawdown": -0.12715409637362063,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03644156793638387,
      "cumulativeWealth": 3.5522917770136804,
      "drawdown": -0.15896196966861575,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02160206276766452,
      "cumulativeWealth": 1.0216020627676645,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007014659424718683,
      "cumulativeWealth": 1.0287682533055698,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008247905681572076,
      "cumulativeWealth": 1.0372534368270296,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012006041353110675,
      "cumulativeWealth": 1.049706744483231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012075621010651849,
      "cumulativeWealth": 1.0623826053019358,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009607392600538889,
      "cumulativeWealth": 1.0725893320830548,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010488526353468308,
      "cumulativeWealth": 1.0613394506070528,
      "drawdown": -0.010488526353468308,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0069763345604541005,
      "cumulativeWealth": 1.068743709696696,
      "drawdown": -0.0035853632619021747,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05505040648342541,
      "cumulativeWealth": 1.1275784853421031,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.035380021779037873,
      "cumulativeWealth": 1.087684733973125,
      "drawdown": -0.035380021779037873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014242695242275505,
      "cumulativeWealth": 1.0721931717874704,
      "drawdown": -0.04911881015344932,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009796162732003566,
      "cumulativeWealth": 1.0826965505784436,
      "drawdown": -0.0398038232789113,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014610197324347762,
      "cumulativeWealth": 1.0985149608247853,
      "drawdown": -0.025775167666931886,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01579180167905192,
      "cumulativeWealth": 1.1158624912276018,
      "drawdown": -0.010390402323920411,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.004595460893501047,
      "cumulativeWealth": 1.120990393668563,
      "drawdown": -0.005842690117966676,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025795623900928044,
      "cumulativeWealth": 1.1499070402601905,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004828611739026489,
      "cumulativeWealth": 1.144354585626801,
      "drawdown": -0.004828611739026489,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.025571131101850608,
      "cumulativeWealth": 1.115092144490734,
      "drawdown": -0.03027626977705855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.005664331707210479,
      "cumulativeWealth": 1.1087758927002338,
      "drawdown": -0.03576910664939481,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015174478334885833,
      "cumulativeWealth": 1.0919507969382105,
      "drawdown": -0.05040080745037112,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016396443979979747,
      "cumulativeWealth": 1.1098549070091022,
      "drawdown": -0.03483075748629705,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.005169435972668834,
      "cumulativeWealth": 1.115592230889838,
      "drawdown": -0.029841376884333193,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0258333016464789,
      "cumulativeWealth": 1.1444116615048836,
      "drawdown": -0.0047789765284534935,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02980305891009971,
      "cumulativeWealth": 1.1785186296701187,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.026311083066286156,
      "cumulativeWealth": 1.1475105281097024,
      "drawdown": -0.026311083066286156,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019537494540937006,
      "cumulativeWealth": 1.1699300087883135,
      "drawdown": -0.0072876411671227714,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018525478124435057,
      "cumulativeWealth": 1.1916035215732415,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03960183006980089,
      "cumulativeWealth": 1.2387932017451613,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010707846835353863,
      "cumulativeWealth": 1.2255283938801964,
      "drawdown": -0.010707846835353863,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0014080248888976854,
      "cumulativeWealth": 1.2272539683608306,
      "drawdown": -0.009314898861306875,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014532593393128401,
      "cumulativeWealth": 1.2450891512731217,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018002888029991615,
      "cumulativeWealth": 1.267504351850849,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015244516483756465,
      "cumulativeWealth": 1.2868268428358725,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008562729971668404,
      "cumulativeWealth": 1.2857249677583227,
      "drawdown": -0.0008562729971668404,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.02035671118505411,
      "cumulativeWealth": 1.2595518359262534,
      "drawdown": -0.021195553280122126,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05887448048255739,
      "cumulativeWealth": 1.333707295907263,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03192149503832509,
      "cumulativeWealth": 1.3762812267361446,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008493917131770612,
      "cumulativeWealth": 1.387971245426053,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05459567658769826,
      "cumulativeWealth": 1.4637484746543588,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.042381728395425755,
      "cumulativeWealth": 1.5257846649463784,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.04087473219560522,
      "cumulativeWealth": 1.463418625378534,
      "drawdown": -0.04087473219560522,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.031937837247501766,
      "cumulativeWealth": 1.4166801994962315,
      "drawdown": -0.07150711889870864,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.06255459113534934,
      "cumulativeWealth": 1.5053000501452634,
      "drawdown": -0.013425626349334752,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04424821226362852,
      "cumulativeWealth": 1.5719068862845416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016737572477351303,
      "cumulativeWealth": 1.5982167917213768,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016664651611415726,
      "cumulativeWealth": 1.6248505177549282,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015500597254248794,
      "cumulativeWealth": 1.6500366712290049,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029024139907013025,
      "cumulativeWealth": 1.6979275664264575,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.021209099914319962,
      "cumulativeWealth": 1.7339390818300744,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015183567282843313,
      "cumulativeWealth": 1.7602664625433928,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015905513699477014,
      "cumulativeWealth": 1.7882644048781067,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018376860476443824,
      "cumulativeWealth": 1.8211270903415424,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029694296489408467,
      "cumulativeWealth": 1.767050002576047,
      "drawdown": -0.029694296489408467,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03675177547329067,
      "cumulativeWealth": 1.8319922275207996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.006634602331695771,
      "cumulativeWealth": 1.8198376876164415,
      "drawdown": -0.006634602331695771,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025456562760844514,
      "cumulativeWealth": 1.8661644999257996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.02828366470463828,
      "cumulativeWealth": 1.8133825289261993,
      "drawdown": -0.02828366470463828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.001067582346453655,
      "cumulativeWealth": 1.8114465937509503,
      "drawdown": -0.02932105190996015,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02767558495611988,
      "cumulativeWealth": 1.8615794378497788,
      "drawdown": -0.002456944216977175,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005172472861436628,
      "cumulativeWealth": 1.8625423347619474,
      "drawdown": -0.0019409677785620083,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013569607105843873,
      "cumulativeWealth": 1.8372683670612266,
      "drawdown": -0.015484236714245592,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.007925550955637295,
      "cumulativeWealth": 1.8227070029989023,
      "drawdown": -0.02328706656279511,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018834568534668472,
      "cumulativeWealth": 1.8570369029655054,
      "drawdown": -0.0048910998792749405,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008267332641173075,
      "cumulativeWealth": 1.8555016287851305,
      "drawdown": -0.005713789508423828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0001595713075416283,
      "cumulativeWealth": 1.8552055439640796,
      "drawdown": -0.005872449059102669,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009436324248621508,
      "cumulativeWealth": 1.872711865024765,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.01400582121153826,
      "cumulativeWealth": 1.8464829974625017,
      "drawdown": -0.01400582121153826,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.044453071507119524,
      "cumulativeWealth": 1.7644011567396207,
      "drawdown": -0.0578362909468253,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03224818910607441,
      "cumulativeWealth": 1.8212998989011364,
      "drawdown": -0.02745321748839813,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0027819166841114296,
      "cumulativeWealth": 1.82636660347666,
      "drawdown": -0.02474767336805017,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016902127861798233,
      "cumulativeWealth": 1.8572360853311405,
      "drawdown": -0.008263833845800872,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025058600867599035,
      "cumulativeWealth": 1.9037758231103556,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00011386085804221402,
      "cumulativeWealth": 1.903992588659095,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.022372885567838674,
      "cumulativeWealth": 1.9465903969671778,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.003263136273470968,
      "cumulativeWealth": 1.9529423867011118,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005275696308264521,
      "cumulativeWealth": 1.953972699795089,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015271908844754711,
      "cumulativeWealth": 1.9241318068386792,
      "drawdown": -0.015271908844754711,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.005754674283108607,
      "cumulativeWealth": 1.9130590550125535,
      "drawdown": -0.02093869826678041,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.013018527278653824,
      "cumulativeWealth": 1.93796426650591,
      "drawdown": -0.008192762002692144,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.039943962837240665,
      "cumulativeWealth": 2.0153742391471225,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0071238251326395385,
      "cumulativeWealth": 2.029731412803633,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02558973403087128,
      "cumulativeWealth": 2.0816716998113827,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.033279599036934115,
      "cumulativeWealth": 2.1509488993076387,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.02115298931210019,
      "cumulativeWealth": 2.1054499002297105,
      "drawdown": -0.02115298931210019,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01796142223426589,
      "cumulativeWealth": 2.1432667748808294,
      "drawdown": -0.0035715048503858204,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02934988862151955,
      "cumulativeWealth": 2.206171416009785,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0012611246456277758,
      "cumulativeWealth": 2.2089536731549946,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0032962945712249336,
      "cumulativeWealth": 2.216235035155903,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.019251401568731952,
      "cumulativeWealth": 2.258900665788382,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.013132956014851871,
      "cumulativeWealth": 2.2885667088741,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0310881374462173,
      "cumulativeWealth": 2.3597139852744156,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.003562216150165609,
      "cumulativeWealth": 2.3681197965425316,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009881647052158327,
      "cumulativeWealth": 2.391520720549194,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0004002083754214292,
      "cumulativeWealth": 2.3905636139268363,
      "drawdown": -0.0004002083754214292,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010431930260217048,
      "cumulativeWealth": 2.365625421023739,
      "drawdown": -0.010827963689776565,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013849714376008793,
      "cumulativeWealth": 2.3328621846219346,
      "drawdown": -0.024527713861408174,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0026903377465613554,
      "cumulativeWealth": 2.3265859974291208,
      "drawdown": -0.0271520637735313,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.030347626352523527,
      "cumulativeWealth": 2.397192359956113,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01782492622643428,
      "cumulativeWealth": 2.4399221369229025,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.020811141502921515,
      "cumulativeWealth": 2.4906997017705157,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07111905071130553,
      "cumulativeWealth": 2.6678359001673666,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05137458006210882,
      "cumulativeWealth": 2.804894849213083,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012334716262847989,
      "cumulativeWealth": 2.83949243132525,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.010897610001881608,
      "cumulativeWealth": 2.870436112445127,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07233920307342445,
      "cumulativeWealth": 3.078081173292586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0583012359925521,
      "cumulativeWealth": 3.257537110180949,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.05020755213697781,
      "cumulativeWealth": 3.093984145883399,
      "drawdown": -0.05020755213697781,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0740896038152501,
      "cumulativeWealth": 3.323216205462565,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07262417201811888,
      "cumulativeWealth": 3.5645620308214787,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004646293504119381,
      "cumulativeWealth": 3.548000029412642,
      "drawdown": -0.004646293504119381,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.085723354222631,
      "cumulativeWealth": 3.2438535661093972,
      "drawdown": -0.08997135186287442,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029331292570568213,
      "cumulativeWealth": 3.338999984113033,
      "drawdown": -0.06327903533676571,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00881062606577665,
      "cumulativeWealth": 3.309581303819379,
      "drawdown": -0.07153213348438703,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029889700590710055,
      "cumulativeWealth": 3.210658909567606,
      "drawdown": -0.09928376002263395,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02160206276766452,
      "cumulativeWealth": 1.0216020627676645,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007014659424718683,
      "cumulativeWealth": 1.0287682533055698,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.008247905681572076,
      "cumulativeWealth": 1.0372534368270296,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012006041353110675,
      "cumulativeWealth": 1.049706744483231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012075621010651849,
      "cumulativeWealth": 1.0623826053019358,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.009607392600538889,
      "cumulativeWealth": 1.0725893320830548,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010488526353468308,
      "cumulativeWealth": 1.0613394506070528,
      "drawdown": -0.010488526353468308,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005501885764975789,
      "cumulativeWealth": 1.061923387448563,
      "drawdown": -0.009944108444354671,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.056447836732773204,
      "cumulativeWealth": 1.1218666654459728,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03273154420130708,
      "cumulativeWealth": 1.085146237097955,
      "drawdown": -0.03273154420130708,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020478023554193703,
      "cumulativeWealth": 1.0629245868949184,
      "drawdown": -0.05253929042238126,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012791825955152492,
      "cumulativeWealth": 1.0765213332139305,
      "drawdown": -0.040419537926119076,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01877649838683415,
      "cumulativeWealth": 1.0967346342904145,
      "drawdown": -0.022401976927951206,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.030987790438772533,
      "cumulativeWealth": 1.1307200173047498,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0037572958704708004,
      "cumulativeWealth": 1.1349684669564275,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025795623900928044,
      "cumulativeWealth": 1.1642456866694484,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004828611739026489,
      "cumulativeWealth": 1.1586239962796854,
      "drawdown": -0.004828611739026489,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025571131101850608,
      "cumulativeWealth": 1.1289966701730674,
      "drawdown": -0.03027626977705855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005664331707210479,
      "cumulativeWealth": 1.122601658536871,
      "drawdown": -0.03576910664939481,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015174478334885833,
      "cumulativeWealth": 1.1055667639906963,
      "drawdown": -0.05040080745037123,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016396443979979747,
      "cumulativeWealth": 1.1236941275025973,
      "drawdown": -0.03483075748629716,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.005169435972668834,
      "cumulativeWealth": 1.1295029923475859,
      "drawdown": -0.029841376884333415,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0258333016464789,
      "cumulativeWealth": 1.1586817838595016,
      "drawdown": -0.004778976528453716,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02980305891009971,
      "cumulativeWealth": 1.1932140453219258,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.026311083066286156,
      "cumulativeWealth": 1.1618192914596013,
      "drawdown": -0.026311083066286156,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019537494540937006,
      "cumulativeWealth": 1.1845183295240485,
      "drawdown": -0.0072876411671228825,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018525478124435057,
      "cumulativeWealth": 1.2064620979256386,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03960183006980089,
      "cumulativeWealth": 1.2542402049133452,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010707846835353863,
      "cumulativeWealth": 1.2408099929043903,
      "drawdown": -0.010707846835353863,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0014080248888976854,
      "cumulativeWealth": 1.2425570842567926,
      "drawdown": -0.009314898861306875,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.014532593393128401,
      "cumulativeWealth": 1.2606146611300477,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018002888029991615,
      "cumulativeWealth": 1.2833093657233379,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.015244516483756465,
      "cumulativeWealth": 1.3028727965028664,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0008562729971668404,
      "cumulativeWealth": 1.3017571817084777,
      "drawdown": -0.0008562729971668404,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02035671118505411,
      "cumulativeWealth": 1.2752576867273682,
      "drawdown": -0.021195553280122126,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05887448048255739,
      "cumulativeWealth": 1.35033782051483,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03192149503832509,
      "cumulativeWealth": 1.3934426225524568,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016487151817435652,
      "cumulativeWealth": 1.4164165226193648,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0537899765104235,
      "cumulativeWealth": 1.4926055341000362,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.042381728395425755,
      "cumulativeWealth": 1.5558647364477733,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.04087473219560522,
      "cumulativeWealth": 1.4922691820128846,
      "drawdown": -0.040874732195605334,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.031937837247501766,
      "cumulativeWealth": 1.4446093317482944,
      "drawdown": -0.07150711889870864,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.06255459113534934,
      "cumulativeWealth": 1.5349762778461191,
      "drawdown": -0.013425626349334863,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03604790877652997,
      "cumulativeWealth": 1.5903089626840536,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.026501652450850788,
      "cumulativeWealth": 1.6324547781025796,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01934379256187202,
      "cumulativeWealth": 1.6640326446968328,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01862404588706923,
      "cumulativeWealth": 1.6950236650292478,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029337670000989524,
      "cumulativeWealth": 1.7447517099577436,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020281388883061302,
      "cumulativeWealth": 1.7801376978917829,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019799581941293276,
      "cumulativeWealth": 1.8153836801079763,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016907014570515466,
      "cumulativeWealth": 1.846076398438638,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018376860476443824,
      "cumulativeWealth": 1.8800014868416006,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029694296489408467,
      "cumulativeWealth": 1.8241761652907973,
      "drawdown": -0.029694296489408467,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03675177547329067,
      "cumulativeWealth": 1.891217878141293,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.006634602331695771,
      "cumulativeWealth": 1.878670399597232,
      "drawdown": -0.006634602331695771,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025456562760844514,
      "cumulativeWealth": 1.9264948905315198,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02828366470463828,
      "cumulativeWealth": 1.8720065549925275,
      "drawdown": -0.02828366470463828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.001067582346453655,
      "cumulativeWealth": 1.870008033841972,
      "drawdown": -0.02932105190996015,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02767558495611988,
      "cumulativeWealth": 1.9217616000511921,
      "drawdown": -0.002456944216977286,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005172472861436628,
      "cumulativeWealth": 1.9227556260234338,
      "drawdown": -0.0019409677785620083,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005900632987101639,
      "cumulativeWealth": 1.9114101507503847,
      "drawdown": -0.007830147827162515,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.009573764870908552,
      "cumulativeWealth": 1.8931107593952325,
      "drawdown": -0.017328948703869473,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01628337528041346,
      "cumulativeWealth": 1.9239369923378535,
      "drawdown": -0.0013277471984161071,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015272430447275998,
      "cumulativeWealth": 1.8945537984374323,
      "drawdown": -0.016579899718952795,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025678024839599356,
      "cumulativeWealth": 1.8459053989411986,
      "drawdown": -0.04183218548173073,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01162450876537835,
      "cumulativeWealth": 1.8673631424312498,
      "drawdown": -0.03069395532315977,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013415399964904262,
      "cumulativeWealth": 1.8924145658666855,
      "drawdown": -0.017690327045420506,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025716489301790824,
      "cumulativeWealth": 1.8437483069290217,
      "drawdown": -0.04295188324100274,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029056591411261934,
      "cumulativeWealth": 1.8973213481486642,
      "drawdown": -0.015143327151418862,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0027819166841114296,
      "cumulativeWealth": 1.9025995380621996,
      "drawdown": -0.012403537941762965,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016902127861798233,
      "cumulativeWealth": 1.934757518724325,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025058600867599035,
      "cumulativeWealth": 1.9832398351616243,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.00011386085804221402,
      "cumulativeWealth": 1.9834656485509592,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.022372885567838674,
      "cumulativeWealth": 2.0278414985337285,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003263136273470968,
      "cumulativeWealth": 2.034458621684444,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005275696308264521,
      "cumulativeWealth": 2.0355319402684176,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015271908844754711,
      "cumulativeWealth": 2.0044454820260516,
      "drawdown": -0.015271908844754711,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005754674283108607,
      "cumulativeWealth": 1.992910551158743,
      "drawdown": -0.02093869826678041,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013018527278653824,
      "cumulativeWealth": 2.01885531153292,
      "drawdown": -0.008192762002692144,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.039943962837240665,
      "cumulativeWealth": 2.0994963930705572,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0071238251326395385,
      "cumulativeWealth": 2.1144528382413994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02558973403087128,
      "cumulativeWealth": 2.1685611239928178,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.033279599036934115,
      "cumulativeWealth": 2.2407299686863817,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.02115298931210019,
      "cumulativeWealth": 2.193331831607456,
      "drawdown": -0.0211529893121003,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01796142223426589,
      "cumulativeWealth": 2.2327271907348134,
      "drawdown": -0.0035715048503858204,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02934988862151955,
      "cumulativeWealth": 2.2982574851051183,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0012611246456277758,
      "cumulativeWealth": 2.3011558742615827,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0032962945712249336,
      "cumulativeWealth": 2.3087411618774536,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019251401568731952,
      "cumulativeWealth": 2.3531876651030172,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013132956014851871,
      "cumulativeWealth": 2.384091975203507,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0310881374462173,
      "cumulativeWealth": 2.4582089542130574,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003562216150165609,
      "cumulativeWealth": 2.466965625850237,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018507446234922176,
      "cumulativeWealth": 2.5126228595340616,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004535400927634492,
      "cumulativeWealth": 2.501227107486135,
      "drawdown": -0.004535400927634492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010431930260217048,
      "cumulativeWealth": 2.4751344807358753,
      "drawdown": -0.014920018201672436,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0014484784785877558,
      "cumulativeWealth": 2.4715493017089187,
      "drawdown": -0.016346885354994956,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005817324505487442,
      "cumulativeWealth": 2.457171497389567,
      "drawdown": -0.02206911472371842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.030347626352523527,
      "cumulativeWealth": 2.531740819876416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01782492622643428,
      "cumulativeWealth": 2.5768689132151654,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020811141502921515,
      "cumulativeWealth": 2.6304964968025657,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07111905071130553,
      "cumulativeWealth": 2.817574910554579,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05137458006210882,
      "cumulativeWealth": 2.962326638377854,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012334716262847989,
      "cumulativeWealth": 2.9988660969401213,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.010897610001881608,
      "cumulativeWealth": 3.0315465701124396,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07233920307342445,
      "cumulativeWealth": 3.2508462330743466,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0583012359925521,
      "cumulativeWealth": 3.440374586484313,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05020755213697781,
      "cumulativeWealth": 3.2676418000626684,
      "drawdown": -0.05020755213697781,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0740896038152501,
      "cumulativeWealth": 3.509740086439462,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07262417201811888,
      "cumulativeWealth": 3.764632054215929,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004646293504119381,
      "cumulativeWealth": 3.7471404687570256,
      "drawdown": -0.004646293504119492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05362583238980345,
      "cumulativeWealth": 3.546196942038412,
      "drawdown": -0.0580229645372371,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.027129888084765463,
      "cumulativeWealth": 3.6424048682024517,
      "drawdown": -0.03246723298671317,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00881062606577665,
      "cumulativeWealth": 3.6103130009285556,
      "drawdown": -0.0409918024032534,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029889700590710055,
      "cumulativeWealth": 3.5024018262920533,
      "drawdown": -0.06965627029345656,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020281388883061302,
      "cumulativeWealth": 1.0202813888830613,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.019799581941293276,
      "cumulativeWealth": 1.040482533845428,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016907014570515466,
      "cumulativeWealth": 1.0580739872055196,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.018376860476443824,
      "cumulativeWealth": 1.07751806524215,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029694296489408467,
      "cumulativeWealth": 1.045521924340156,
      "drawdown": -0.029694296489408467,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03675177547329067,
      "cumulativeWealth": 1.083946711355908,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.006634602331695771,
      "cumulativeWealth": 1.076755155977312,
      "drawdown": -0.006634602331695882,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025456562760844514,
      "cumulativeWealth": 1.1041656411835115,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.02828366470463828,
      "cumulativeWealth": 1.072935790409895,
      "drawdown": -0.02828366470463828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.001067582346453655,
      "cumulativeWealth": 1.0717903431011753,
      "drawdown": -0.02932105190996015,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02767558495611988,
      "cumulativeWealth": 1.1014527677968207,
      "drawdown": -0.002456944216977286,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005172472861436628,
      "cumulativeWealth": 1.102022491251779,
      "drawdown": -0.0019409677785618973,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005900632987101639,
      "cumulativeWealth": 1.0955198609873709,
      "drawdown": -0.007830147827162515,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.009573764870908552,
      "cumulativeWealth": 1.0850316114268674,
      "drawdown": -0.01732894870386925,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01628337528041346,
      "cumulativeWealth": 1.102699588346843,
      "drawdown": -0.001327747198415996,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015272430447275998,
      "cumulativeWealth": 1.0858586855795758,
      "drawdown": -0.016579899718952684,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025678024839599356,
      "cumulativeWealth": 1.0579759792789687,
      "drawdown": -0.04183218548173073,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01162450876537835,
      "cumulativeWealth": 1.0702744303236569,
      "drawdown": -0.03069395532315966,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013415399964904262,
      "cumulativeWealth": 1.0846325898786588,
      "drawdown": -0.017690327045420395,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025716489301790824,
      "cumulativeWealth": 1.0567396474846706,
      "drawdown": -0.04295188324100252,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.029056591411261934,
      "cumulativeWealth": 1.0874448996497137,
      "drawdown": -0.015143327151418529,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0027819166841114296,
      "cumulativeWealth": 1.090470080759101,
      "drawdown": -0.012403537941762743,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016902127861798233,
      "cumulativeWealth": 1.1089013454935568,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025058600867599035,
      "cumulativeWealth": 1.1366888617118234,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.00011386085804221402,
      "cumulativeWealth": 1.1368182860809448,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.022372885567838674,
      "cumulativeWealth": 1.1622521915068602,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.003263136273470968,
      "cumulativeWealth": 1.1660447787918873,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005275696308264521,
      "cumulativeWealth": 1.1666599486053617,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015271908844754711,
      "cumulativeWealth": 1.1488428242174344,
      "drawdown": -0.015271908844754711,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005754674283108607,
      "cumulativeWealth": 1.1422316079615764,
      "drawdown": -0.02093869826678052,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013018527278653824,
      "cumulativeWealth": 1.1571017813083648,
      "drawdown": -0.008192762002692255,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.039943962837240665,
      "cumulativeWealth": 1.2033210118598512,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0071238251326395385,
      "cumulativeWealth": 1.2118932603267716,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02558973403087128,
      "cumulativeWealth": 1.2429052865323391,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.033279599036934115,
      "cumulativeWealth": 1.2842686761090212,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.02115298931210019,
      "cumulativeWealth": 1.257102554529422,
      "drawdown": -0.02115298931210008,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01796142223426589,
      "cumulativeWealth": 1.2796819043030994,
      "drawdown": -0.0035715048503857094,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02934988862151955,
      "cumulativeWealth": 1.3172404256653694,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0012611246456277758,
      "cumulativeWealth": 1.3189016300303933,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0032962945712249336,
      "cumulativeWealth": 1.3232491183134423,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.019251401568731952,
      "cumulativeWealth": 1.3487235184655648,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013132956014851871,
      "cumulativeWealth": 1.3664362451097694,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0310881374462173,
      "cumulativeWealth": 1.408916202909235,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.003562216150165609,
      "cumulativeWealth": 1.4139350669614683,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.018507446234922176,
      "cumulativeWealth": 1.4401033941929289,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004535400927634492,
      "cumulativeWealth": 1.4335719479230167,
      "drawdown": -0.004535400927634492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.010431930260217048,
      "cumulativeWealth": 1.4186170253392802,
      "drawdown": -0.014920018201672325,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0014484784785877558,
      "cumulativeWealth": 1.4165621891087181,
      "drawdown": -0.016346885354994845,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005817324505487442,
      "cumulativeWealth": 1.408321587172469,
      "drawdown": -0.02206911472371831,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.030347626352523527,
      "cumulativeWealth": 1.451060804484172,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01782492622643428,
      "cumulativeWealth": 1.4769258562741727,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020811141502921515,
      "cumulativeWealth": 1.5076623692584181,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07111905071130553,
      "cumulativeWealth": 1.6148858857532347,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.05137458006210882,
      "cumulativeWealth": 1.6978499699820337,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.012334716262847989,
      "cumulativeWealth": 1.718792467618647,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.010897610001881608,
      "cumulativeWealth": 1.7375231976049268,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07233920307342445,
      "cumulativeWealth": 1.8632142410412553,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0583012359925521,
      "cumulativeWealth": 1.9718419342128854,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.05020755213697781,
      "cumulativeWealth": 1.8728405774950128,
      "drawdown": -0.05020755213697781,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0740896038152501,
      "cumulativeWealth": 2.0115985938907426,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07262417201811888,
      "cumulativeWealth": 2.15768927620487,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004646293504119381,
      "cumulativeWealth": 2.1476640185369313,
      "drawdown": -0.004646293504119381,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.05362583238980345,
      "cumulativeWealth": 2.032493747849258,
      "drawdown": -0.0580229645372371,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.027129888084765463,
      "cumulativeWealth": 2.087635075761394,
      "drawdown": -0.03246723298671306,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.00881062606577665,
      "cumulativeWealth": 2.0692417037470614,
      "drawdown": -0.040991802403253286,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029889700590710055,
      "cumulativeWealth": 2.007392688772251,
      "drawdown": -0.06965627029345656,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.020281388883061524,
      "cumulativeWealth": 1.0202813888830615,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.019799581941293054,
      "cumulativeWealth": 1.040482533845428,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016907014570515466,
      "cumulativeWealth": 1.0580739872055196,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01837686047644338,
      "cumulativeWealth": 1.0775180652421497,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.029694296489408578,
      "cumulativeWealth": 1.0455219243401555,
      "drawdown": -0.029694296489408467,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03675177547329045,
      "cumulativeWealth": 1.0839467113559074,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.006634602331695327,
      "cumulativeWealth": 1.076755155977312,
      "drawdown": -0.006634602331695216,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025456562760844292,
      "cumulativeWealth": 1.1041656411835112,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02828366470463828,
      "cumulativeWealth": 1.0729357904098948,
      "drawdown": -0.02828366470463828,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.001067582346453766,
      "cumulativeWealth": 1.0717903431011748,
      "drawdown": -0.02932105190996037,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.027675584956120547,
      "cumulativeWealth": 1.1014527677968209,
      "drawdown": -0.002456944216976842,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005172472861429966,
      "cumulativeWealth": 1.1020224912517784,
      "drawdown": -0.0019409677785623414,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005900632987101639,
      "cumulativeWealth": 1.0955198609873702,
      "drawdown": -0.007830147827162959,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.009573764870907775,
      "cumulativeWealth": 1.0850316114268674,
      "drawdown": -0.01732894870386914,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01628337528041346,
      "cumulativeWealth": 1.102699588346843,
      "drawdown": -0.001327747198415774,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.015272430447275442,
      "cumulativeWealth": 1.0858586855795764,
      "drawdown": -0.016579899718951907,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.025678024839599245,
      "cumulativeWealth": 1.0579759792789696,
      "drawdown": -0.04183218548172973,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.011624508765378572,
      "cumulativeWealth": 1.070274430323658,
      "drawdown": -0.03069395532315844,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013415399964904484,
      "cumulativeWealth": 1.0846325898786602,
      "drawdown": -0.017690327045418952,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.025716489301791157,
      "cumulativeWealth": 1.0567396474846715,
      "drawdown": -0.04295188324100152,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.029056591411261712,
      "cumulativeWealth": 1.0874448996497144,
      "drawdown": -0.015143327151417751,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00278191668411254,
      "cumulativeWealth": 1.090470080759103,
      "drawdown": -0.012403537941760745,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01690212786179801,
      "cumulativeWealth": 1.1089013454935586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02505860086759859,
      "cumulativeWealth": 1.1366888617118247,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00011386085804243606,
      "cumulativeWealth": 1.1368182860809466,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02237288556783934,
      "cumulativeWealth": 1.1622521915068629,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00326313627347119,
      "cumulativeWealth": 1.1660447787918904,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005275696308268962,
      "cumulativeWealth": 1.1666599486053653,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.015271908844754378,
      "cumulativeWealth": 1.1488428242174382,
      "drawdown": -0.01527190884475449,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005754674283108607,
      "cumulativeWealth": 1.1422316079615802,
      "drawdown": -0.020938698266780187,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013018527278654046,
      "cumulativeWealth": 1.1571017813083688,
      "drawdown": -0.008192762002691811,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03994396283724089,
      "cumulativeWealth": 1.2033210118598556,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00712382513263865,
      "cumulativeWealth": 1.2118932603267751,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025589734030871503,
      "cumulativeWealth": 1.2429052865323431,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03327959903693367,
      "cumulativeWealth": 1.2842686761090247,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.021152989312099968,
      "cumulativeWealth": 1.2571025545294257,
      "drawdown": -0.02115298931210008,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017961422234266555,
      "cumulativeWealth": 1.2796819043031038,
      "drawdown": -0.0035715048503850433,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02934988862151977,
      "cumulativeWealth": 1.3172404256653742,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0012611246456275538,
      "cumulativeWealth": 1.3189016300303977,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0032962945712253777,
      "cumulativeWealth": 1.3232491183134472,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01925140156873173,
      "cumulativeWealth": 1.3487235184655695,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01591364852852495,
      "cumulativeWealth": 1.370186630500586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03005425121191041,
      "cumulativeWealth": 1.4113665637008517,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0035622161501667193,
      "cumulativeWealth": 1.4163941564678721,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.018507446234922398,
      "cumulativeWealth": 1.4426079951661595,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.004535400927635269,
      "cumulativeWealth": 1.4360651895266687,
      "drawdown": -0.004535400927635269,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.01043193026021716,
      "cumulativeWealth": 1.421084257620401,
      "drawdown": -0.014920018201673213,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0014484784785869786,
      "cumulativeWealth": 1.419025847656979,
      "drawdown": -0.016346885354995067,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005817324505487553,
      "cumulativeWealth": 1.410770913819484,
      "drawdown": -0.02206911472371853,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.030347626352523527,
      "cumulativeWealth": 1.4535844623810859,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0178249262264345,
      "cumulativeWealth": 1.4794944981869202,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.020811141502921515,
      "cumulativeWealth": 1.5102844675414822,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07111905071130509,
      "cumulativeWealth": 1.6176944651770613,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0513745800621086,
      "cumulativeWealth": 1.7008028389943302,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.012334716262848211,
      "cumulativeWealth": 1.7217817594323719,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01089761000188183,
      "cumulativeWealth": 1.7405450655550199,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07233920307342467,
      "cumulativeWealth": 1.8664547085106518,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05830123599255188,
      "cumulativeWealth": 1.9752713249409408,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.05020755213697725,
      "cumulativeWealth": 1.8760977869092923,
      "drawdown": -0.05020755213697725,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07408960381525054,
      "cumulativeWealth": 2.01509712866007,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07262417201811933,
      "cumulativeWealth": 2.1614418891650975,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01050731240446856,
      "cumulativeWealth": 2.18415283433866,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.032125600005506016,
      "cumulativeWealth": 2.113985614031804,
      "drawdown": -0.032125600005506016,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02268662326941029,
      "cumulativeWealth": 2.1619448092542966,
      "drawdown": -0.010167798120724436,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.008810626065776872,
      "cumulativeWealth": 2.14289672196511,
      "drawdown": -0.018888839519347167,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.022109105359480075,
      "cumulativeWealth": 2.0955191925646988,
      "drawdown": -0.04058032953577562,
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
      "cagr": 0.12328583791756631,
      "annVol": 0.10945797636978807,
      "sharpeRf0": 1.1187180845465385,
      "maxDrawdown": -0.1355530699089279,
      "calmar": 0.9095023668618984,
      "cumulativeReturn": 2.0167320499263277,
      "terminalWealth": 3.0167320499263277,
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
      "cagr": 0.1427806902433013,
      "annVol": 0.128237834852394,
      "sharpeRf0": 1.1067656134447261,
      "maxDrawdown": -0.1800008715865099,
      "calmar": 0.793222216008436,
      "cumulativeReturn": 2.552291777013687,
      "terminalWealth": 3.552291777013687,
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
      "cagr": 0.130678548358796,
      "annVol": 0.11044639631067375,
      "sharpeRf0": 1.1692090202603744,
      "maxDrawdown": -0.13078952887338213,
      "calmar": 0.9991514571881853,
      "cumulativeReturn": 2.210658909567608,
      "terminalWealth": 3.210658909567608,
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
      "cagr": 0.14108010802689197,
      "annVol": 0.11149364390372857,
      "sharpeRf0": 1.2415420805471344,
      "maxDrawdown": -0.12331732507033188,
      "calmar": 1.1440412605968333,
      "cumulativeReturn": 2.502401826292041,
      "terminalWealth": 3.502401826292041,
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
      "cagr": 0.13527982989609733,
      "annVol": 0.11533008296709056,
      "sharpeRf0": 1.1597545621131835,
      "maxDrawdown": -0.10553048493256356,
      "calmar": 1.2819028547300269,
      "cumulativeReturn": 1.007392688772239,
      "terminalWealth": 2.007392688772239,
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
      "cagr": 0.14419589444764047,
      "annVol": 0.10819058265298051,
      "sharpeRf0": 1.301299755300415,
      "maxDrawdown": -0.10212252135346411,
      "calmar": 1.4119891727756404,
      "cumulativeReturn": 1.0955191925646925,
      "terminalWealth": 2.0955191925646925,
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
      "annualReturn": 0.10335532927453306,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.002592537415474938,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.14337062995986805,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.2825173150317455,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.13743419862470785,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": -0.08082819982290368,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.13631160400035913,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.09900688424772564,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.2273496176167098,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.16053297071657813,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.03851888668886905,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.04647458946888405,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.18439177838228793,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20495744988568587,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2457627257577737,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": -0.02646845707859502,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.15216254579646593,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2620294959547267,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2026920675485797,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.07987971749466505,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.06874370969669608,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.02171436147970396,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.16077057263466843,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2401589659153398,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1871978653498898,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": -0.05453074645360867,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.14224264218419935,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.17502732273916832,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2121160916926501,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.1185265178512076,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.06192338744856296,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.04109842297286015,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.16077057263466843,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.2392249329433327,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.21139661269346455,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": -0.04295188324100252,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.13871095375676012,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.17502732273916832,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.22885642926930627,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.1553184967770922,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.10416564118351057,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": -0.04295188324100352,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.13871095375675835,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.17502732273916743,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.22885642926930472,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.15531849677709286,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.10416564118351124,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": -0.04295188324100163,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.13871095375676212,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.17707090835112305,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.22885642926930516,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.2039442322031939,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
