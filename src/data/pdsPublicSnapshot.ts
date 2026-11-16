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
  "publicAsOfDate": "2026-11-16",
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
      "netReturn": -0.022859378232974126,
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
      "netReturn": -0.018739801387399724,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0049656162855369335,
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
      "netReturn": -0.005403625809171531,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.04959273954567833,
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
      "netReturn": 0.044372533705834716,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.04612360690119166,
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
      "netReturn": -0.04327050814941369,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.021811167062850356,
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
      "netReturn": -0.0206978073642059,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.06520331674762958,
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
      "netReturn": 0.06328152417946353,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.08482851238178313,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.1379985660180867,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894708117425298,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.07289480569742868,
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
      "netReturn": -0.07137572806605119,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.05724479183236619,
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
      "netReturn": 0.06040571618002999,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.07604030881308299,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0698190947686097,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672064981681714,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": 0.01931121117339374,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02426735364537924,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757377255186114,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Active Core",
      "netReturn": -0.0005255920027502636,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "period": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492360149838004,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "period": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.422968079679904e-05,
      "seriesRole": "CORE_STRATEGY"
    }
  ],
  "corePerformance": [
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.029668685033847897,
      "cumulativeWealth": 1.029668685033848,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.004776324237978136,
      "cumulativeWealth": 1.0247506535364337,
      "drawdown": -0.004776324237978136,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.020667274823415793,
      "cumulativeWealth": 1.045929456918546,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010099009982537988,
      "cumulativeWealth": 1.056492308944997,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002336715538382217,
      "cumulativeWealth": 1.05896103093949,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01989720036724596,
      "cumulativeWealth": 1.0800313907531982,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008995678000728091,
      "cumulativeWealth": 1.0897470053750926,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012487159877450305,
      "cumulativeWealth": 1.1033548504571842,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05378713881077957,
      "cumulativeWealth": 1.1627011509562717,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03821238565531382,
      "cumulativeWealth": 1.1182715661740534,
      "drawdown": -0.03821238565531382,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.006031947016673422,
      "cumulativeWealth": 1.111526211336639,
      "drawdown": -0.044013837586333704,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00647071400279331,
      "cumulativeWealth": 1.1187185795568069,
      "drawdown": -0.037827924538726965,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00990203176040283,
      "cumulativeWealth": 1.1297961664625311,
      "drawdown": -0.028300466088536758,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.002696456458598173,
      "cumulativeWealth": 1.1267497202925738,
      "drawdown": -0.03092061157256909,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.00862262993861318,
      "cumulativeWealth": 1.1364652661640926,
      "drawdown": -0.022564598625021692,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.024558968353509236,
      "cumulativeWealth": 1.164375680670679,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.003183437103805087,
      "cumulativeWealth": 1.1606689639260637,
      "drawdown": -0.003183437103805198,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03632636924857757,
      "cumulativeWealth": 1.1185060745671216,
      "drawdown": -0.039394163640670166,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.003675110114866431,
      "cumulativeWealth": 1.1226167075553029,
      "drawdown": -0.035863831415066216,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.014609876169559999,
      "cumulativeWealth": 1.1062154164720408,
      "drawdown": -0.049949741448686136,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.019987726297970188,
      "cumulativeWealth": 1.128326147443079,
      "drawdown": -0.030960396911446586,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002667158829636973,
      "cumulativeWealth": 1.131335572489942,
      "drawdown": -0.028375814377801123,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01733446954890505,
      "cumulativeWealth": 1.150946674520862,
      "drawdown": -0.011533224519153396,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.017079460204211472,
      "cumulativeWealth": 1.1706042224455107,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03647290288451244,
      "cumulativeWealth": 1.1279088883240553,
      "drawdown": -0.03647290288451244,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03418077835843558,
      "cumulativeWealth": 1.1664616920443693,
      "drawdown": -0.003538796735661154,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005419925047332574,
      "cumulativeWealth": 1.1727838269858346,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.030780850072831045,
      "cumulativeWealth": 1.2088831101321267,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.006705825870424786,
      "cumulativeWealth": 1.2007765504978831,
      "drawdown": -0.006705825870424786,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016188855171607397,
      "cumulativeWealth": 1.2202157481673557,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009057083018073842,
      "cumulativeWealth": 1.2312673434984684,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.027245556905101775,
      "cumulativeWealth": 1.2648139079711496,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0021390956721525356,
      "cumulativeWealth": 1.267519465927769,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010709670396017779,
      "cumulativeWealth": 1.2539447502271461,
      "drawdown": -0.010709670396017779,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022270897018279667,
      "cumulativeWealth": 1.226018275828225,
      "drawdown": -0.032742053447808006,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06062898751471124,
      "cumulativeWealth": 1.3003505225662222,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021642730717676972,
      "cumulativeWealth": 1.3284936587647134,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02526497215871104,
      "cumulativeWealth": 1.362058014066428,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05876536251945197,
      "cumulativeWealth": 1.4420998470355664,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04375056463799054,
      "cumulativeWealth": 1.5051925296077322,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031136395565333208,
      "cumulativeWealth": 1.4583262596038813,
      "drawdown": -0.031136395565333208,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.017226365816073064,
      "cumulativeWealth": 1.4332045979767594,
      "drawdown": -0.047826394441203846,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07480598928438753,
      "cumulativeWealth": 1.5404168857753437,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05305607256653033,
      "cumulativeWealth": 1.622145355849749,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.005008304732505353,
      "cumulativeWealth": 1.630269554112263,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.013774129070426966,
      "cumulativeWealth": 1.6527250973701926,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012107239945166715,
      "cumulativeWealth": 1.6727350366874525,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03875498149486889,
      "cumulativeWealth": 1.7375618520800935,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016615181145625213,
      "cumulativeWealth": 1.7664317570041324,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.009826535113994783,
      "cumulativeWealth": 1.783789660690809,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.010552071430141918,
      "cumulativeWealth": 1.802612336606767,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.011417187681861174,
      "cumulativeWealth": 1.8231930999714447,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.039950478971838344,
      "cumulativeWealth": 1.7503556623694347,
      "drawdown": -0.039950478971838344,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04422246820562359,
      "cumulativeWealth": 1.8277607099971003,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.016192564251760744,
      "cumulativeWealth": 1.7981645772636283,
      "drawdown": -0.016192564251760744,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02609267585080377,
      "cumulativeWealth": 1.8450835027045658,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03526923861807463,
      "cumulativeWealth": 1.7800088123774056,
      "drawdown": -0.03526923861807463,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0033983475289227627,
      "cumulativeWealth": 1.786057900926409,
      "drawdown": -0.031990748219056564,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02073875664694147,
      "cumulativeWealth": 1.8230985210910688,
      "drawdown": -0.011915439914383708,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022489297403641584,
      "cumulativeWealth": 1.7820983162541126,
      "drawdown": -0.034136767446095506,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0012604469406571894,
      "cumulativeWealth": 1.7798520758834397,
      "drawdown": -0.03535418680266145,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.025658691186017046,
      "cumulativeWealth": 1.7341834011115551,
      "drawdown": -0.06010573582737622,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01615384505867179,
      "cumulativeWealth": 1.7621971310764317,
      "drawdown": -0.044922829512397344,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.018383019532708267,
      "cumulativeWealth": 1.7298026267953712,
      "drawdown": -0.06248003179271466,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.03155854449968254,
      "cumulativeWealth": 1.6752125736219818,
      "drawdown": -0.09206679742872514,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.012670522981347299,
      "cumulativeWealth": 1.6964383930347011,
      "drawdown": -0.08056280892001755,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02077261405846209,
      "cumulativeWealth": 1.7316778530471686,
      "drawdown": -0.06146369499871662,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.020632647206257904,
      "cumulativeWealth": 1.6959487548303562,
      "drawdown": -0.08082818347007303,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.044392132927136396,
      "cumulativeWealth": 1.771235537392397,
      "drawdown": -0.040024186007799,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.031118905452965806,
      "cumulativeWealth": 1.71611662616935,
      "drawdown": -0.06989758260055612,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025601206291982814,
      "cumulativeWealth": 1.7600512819370129,
      "drawdown": -0.04608583874004113,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008727471269528664,
      "cumulativeWealth": 1.7754120789330152,
      "drawdown": -0.037760580304048386,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.006973666911463505,
      "cumulativeWealth": 1.787793211402083,
      "drawdown": -0.03105024310200888,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02207372469254132,
      "cumulativeWealth": 1.8272564665577669,
      "drawdown": -0.009661912927337757,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.021027329719384813,
      "cumulativeWealth": 1.865678790761955,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.01707961817487047,
      "cumulativeWealth": 1.8338137093787867,
      "drawdown": -0.01707961817487047,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.023579968765904513,
      "cumulativeWealth": 1.7905724393891473,
      "drawdown": -0.040256850077677986,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.005612619096079796,
      "cumulativeWealth": 1.7805226383229176,
      "drawdown": -0.04564352280826389,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03620348020108288,
      "cumulativeWealth": 1.8449837544070211,
      "drawdown": -0.011092496981477629,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04452228998775909,
      "cumulativeWealth": 1.927126656143435,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.011371651226742552,
      "cumulativeWealth": 1.9052120439400133,
      "drawdown": -0.011371651226742552,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0232032466940999,
      "cumulativeWealth": 1.9494191490001238,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02721704580382389,
      "cumulativeWealth": 2.0024765792693118,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.033661465523130873,
      "cumulativeWealth": 1.9350702829353608,
      "drawdown": -0.033661465523130873,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02188612241380361,
      "cumulativeWealth": 1.9774214680269977,
      "drawdown": -0.01251206206439448,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.025374505162370165,
      "cumulativeWealth": 2.0275975592756303,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.008444424691723462,
      "cumulativeWealth": 2.0447194541700555,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.016564107123610228,
      "cumulativeWealth": 2.078588406246658,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.026274023425439053,
      "cumulativeWealth": 2.1332012867242285,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.010298699103830744,
      "cumulativeWealth": 2.111232088544351,
      "drawdown": -0.010298699103830744,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02589152899340963,
      "cumulativeWealth": 2.165895115376714,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022147736107459348,
      "cumulativeWealth": 2.1179254419249154,
      "drawdown": -0.022147736107459237,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01899529866246441,
      "cumulativeWealth": 2.158156068239111,
      "drawdown": -0.0035731403070534684,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.002941264569588431,
      "cumulativeWealth": 2.1518083602599574,
      "drawdown": -0.006503895325654541,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0176492746363488,
      "cumulativeWealth": 2.113830503544938,
      "drawdown": -0.02403838092719479,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.002832829283724969,
      "cumulativeWealth": 2.119818624496211,
      "drawdown": -0.021273648272893686,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0165736289304399,
      "cumulativeWealth": 2.154951711778447,
      "drawdown": -0.00505260089492543,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.03893794918620741,
      "cumulativeWealth": 2.2388611120304067,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.0021595847132667156,
      "cumulativeWealth": 2.2436961222630747,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.02367795570172948,
      "cumulativeWealth": 2.296822259654162,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06420617802095663,
      "cumulativeWealth": 2.4442924385400127,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04387201383629713,
      "cumulativeWealth": 2.5515284702235967,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0005255920027502636,
      "cumulativeWealth": 2.5501874072648576,
      "drawdown": -0.0005255920027502636,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.01931121117339374,
      "cumulativeWealth": 2.5994346148182785,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.07604030881308299,
      "cumulativeWealth": 2.797096425668478,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.05724479183236619,
      "cumulativeWealth": 2.9572156282909257,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.07289480569742868,
      "cumulativeWealth": 2.741649969661259,
      "drawdown": -0.07289480569742868,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.08482851238178313,
      "cumulativeWealth": 2.9742200580591844,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.06520331674762958,
      "cumulativeWealth": 3.1681490705819706,
      "drawdown": 0.0,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.021811167062850356,
      "cumulativeWealth": 3.0990480419234934,
      "drawdown": -0.021811167062850245,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.04612360690119166,
      "cumulativeWealth": 2.9561087682699063,
      "drawdown": -0.0669287642683789,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": 0.04959273954567833,
      "cumulativeWealth": 3.1027103004834116,
      "drawdown": -0.020655205497176365,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.0049656162855369335,
      "cumulativeWealth": 3.087303431686028,
      "drawdown": -0.025518255957915348,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "netReturn": -0.022859378232974126,
      "cumulativeWealth": 3.0167295948211583,
      "drawdown": -0.047794302726101634,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.028507437351552145,
      "cumulativeWealth": 1.0285074373515521,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0053980568128927375,
      "cumulativeWealth": 1.0229554957722458,
      "drawdown": -0.0053980568128927375,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.020989642381979756,
      "cumulativeWealth": 1.044426965801186,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010174432777436682,
      "cumulativeWealth": 1.0550534177556723,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002538818525389619,
      "cumulativeWealth": 1.057732006917946,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018014704789741653,
      "cumulativeWealth": 1.0767867367692339,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007366465749340856,
      "cumulativeWealth": 1.0847188493849889,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012748373083490083,
      "cumulativeWealth": 1.0985472499676427,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.053833202486595066,
      "cumulativeWealth": 1.157685566516243,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03767793304132383,
      "cumulativeWealth": 1.114066367258137,
      "drawdown": -0.03767793304132383,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.006811235709999308,
      "cumulativeWealth": 1.1064781986341592,
      "drawdown": -0.04423253546831318,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0076488474652531835,
      "cumulativeWealth": 1.11494148159914,
      "drawdown": -0.03692201591985844,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.00857048594922305,
      "cumulativeWealth": 1.1244970719013914,
      "drawdown": -0.028667969589293518,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.001961088486228446,
      "cumulativeWealth": 1.122291833640888,
      "drawdown": -0.030572837650436835,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.007472543969436751,
      "cumulativeWealth": 1.1306782087143095,
      "drawdown": -0.023328750554613364,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02358268882989134,
      "cumulativeWealth": 1.157342641077158,
      "drawdown": -0.00029621638984167475,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00337158953543204,
      "cumulativeWealth": 1.153440556739593,
      "drawdown": -0.003666807205193412,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02890681969796538,
      "cumulativeWealth": 1.1200982585336006,
      "drawdown": -0.032467631168411226,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.002172953156376556,
      "cumulativeWealth": 1.122532179579933,
      "drawdown": -0.03036522865366209,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.007706792461855905,
      "cumulativeWealth": 1.1138810570401556,
      "drawdown": -0.037838002600227516,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014906772283570957,
      "cumulativeWealth": 1.1304854283084365,
      "drawdown": -0.023495272805083345,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.00035171403986056227,
      "cumulativeWealth": 1.1300878207114426,
      "drawdown": -0.023838723227628034,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01927244638249359,
      "cumulativeWealth": 1.151867377643613,
      "drawdown": -0.005025707360365894,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01518250187395176,
      "cumulativeWealth": 1.169355606263231,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03578573597268331,
      "cumulativeWealth": 1.127509355279318,
      "drawdown": -0.03578573597268331,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.031660188488536134,
      "cumulativeWealth": 1.1632065139900492,
      "drawdown": -0.0052585306302432855,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.004663483427649995,
      "cumulativeWealth": 1.1686311082909762,
      "drawdown": -0.000619570273041381,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.033576851082943726,
      "cumulativeWealth": 1.2078700609849577,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.008137374007406772,
      "cumulativeWealth": 1.1980411705463738,
      "drawdown": -0.008137374007406883,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.014834382770400945,
      "cumulativeWealth": 1.215813371844958,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006858689879277291,
      "cumulativeWealth": 1.224152258713521,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027409515523667993,
      "cumulativeWealth": 1.2577056790520624,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0009679335667998057,
      "cumulativeWealth": 1.2589230545959718,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.010129349278957145,
      "cumulativeWealth": 1.2461709832606376,
      "drawdown": -0.010129349278957145,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018788040957475216,
      "cumulativeWealth": 1.2227578717871195,
      "drawdown": -0.028727079607306805,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.048277628574009634,
      "cumulativeWealth": 1.2817897221572045,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019100758657907724,
      "cumulativeWealth": 1.306272878290316,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02417587255770104,
      "cumulativeWealth": 1.337853164921444,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.059785843015084605,
      "cumulativeWealth": 1.4178378442166715,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.041999595917162624,
      "cumulativeWealth": 1.4773864607498326,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.029833558636683355,
      "cumulativeWealth": 1.4333107651440105,
      "drawdown": -0.029833558636683244,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.016916152352450586,
      "cumulativeWealth": 1.409064661872427,
      "drawdown": -0.04624504196601986,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.072966765496294,
      "cumulativeWealth": 1.5118795526243871,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.05259866554995418,
      "cumulativeWealth": 1.5914023995646915,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0036284017042003125,
      "cumulativeWealth": 1.5971766467433406,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.013298321296292492,
      "cumulativeWealth": 1.6184164149586686,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01059595514198719,
      "cumulativeWealth": 1.6355650826926265,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0384056400021362,
      "cumulativeWealth": 1.6983800064585837,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.015670906915061122,
      "cumulativeWealth": 1.7249951614461971,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010081750487751728,
      "cumulativeWealth": 1.7423861322564766,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01100841727382118,
      "cumulativeWealth": 1.7615670458524753,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010534903810960339,
      "cumulativeWealth": 1.7801249852370886,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.03831065031411962,
      "cumulativeWealth": 1.7119272394122431,
      "drawdown": -0.03831065031411962,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04270559860711498,
      "cumulativeWealth": 1.7850361169431688,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01656718911108135,
      "cumulativeWealth": 1.755463086023661,
      "drawdown": -0.016567189111081237,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024027858059550766,
      "cumulativeWealth": 1.7976431038834186,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.034926680764069684,
      "cumulativeWealth": 1.7348573970663512,
      "drawdown": -0.03492668076406957,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0052203286762337875,
      "cumulativeWealth": 1.743913922885433,
      "drawdown": -0.029888680840994164,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.016282883856357566,
      "cumulativeWealth": 1.7723098707472613,
      "drawdown": -0.014092470903390275,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02128549721433659,
      "cumulativeWealth": 1.7345853739305293,
      "drawdown": -0.03507800286756968,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0004905413007243453,
      "cumulativeWealth": 1.7337344881649839,
      "drawdown": -0.03555133695914059,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.019917235652576415,
      "cumulativeWealth": 1.699203289805203,
      "drawdown": -0.05476048825573765,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.010236447439393448,
      "cumulativeWealth": 1.7165970949701383,
      "drawdown": -0.0450845936761296,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.015039821061665903,
      "cumulativeWealth": 1.690779781826812,
      "drawdown": -0.059446350516268565,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.02334862777296065,
      "cumulativeWealth": 1.65130239405489,
      "drawdown": -0.0814069875785639,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006876322640561927,
      "cumulativeWealth": 1.662657282093544,
      "drawdown": -0.0750904456497884,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018319346242531287,
      "cumulativeWealth": 1.6931160765268816,
      "drawdown": -0.058146707280621546,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01718012294800586,
      "cumulativeWealth": 1.6640281341669045,
      "drawdown": -0.07432786264852453,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.03746066517105073,
      "cumulativeWealth": 1.7263637349361391,
      "drawdown": -0.0396515686530301,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0307591766000328,
      "cumulativeWealth": 1.6732622079373463,
      "drawdown": -0.06919109565039605,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.026640028160804796,
      "cumulativeWealth": 1.7178379602772076,
      "drawdown": -0.04439432022619472,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.008954435799705784,
      "cumulativeWealth": 1.7332202300068074,
      "drawdown": -0.035837410516825985,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.006772835911633246,
      "cumulativeWealth": 1.7449590462233666,
      "drawdown": -0.0293072955061211,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018560553268366142,
      "cumulativeWealth": 1.7773464515519128,
      "drawdown": -0.011290701857147978,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01788251780789918,
      "cumulativeWealth": 1.8091298811225964,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.014599927579343697,
      "cumulativeWealth": 1.7827167158765798,
      "drawdown": -0.014599927579343697,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.020274694634969337,
      "cumulativeWealth": 1.7465726788415268,
      "drawdown": -0.03457861314094923,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012441325725901509,
      "cumulativeWealth": 1.744399710881384,
      "drawdown": -0.03577972533461571,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.02728125013855509,
      "cumulativeWealth": 1.7919891157355623,
      "drawdown": -0.009474590832802998,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04073770175210889,
      "cumulativeWealth": 1.864990633875423,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011140194031859618,
      "cumulativeWealth": 1.84421427634645,
      "drawdown": -0.011140194031859618,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01957661477571504,
      "cumulativeWealth": 1.8803177487983584,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027496433735892056,
      "cumulativeWealth": 1.9320197811806141,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.031175683551878164,
      "cumulativeWealth": 1.8717877438665584,
      "drawdown": -0.031175683551878164,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.019647870340401496,
      "cumulativeWealth": 1.9085643867628013,
      "drawdown": -0.012140348999677308,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024966640729577882,
      "cumulativeWealth": 1.9562148281163751,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.005497749899896043,
      "cumulativeWealth": 1.966969607991827,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.017381688089245007,
      "cumulativeWealth": 2.0011588601989656,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.027705906196582752,
      "cumulativeWealth": 2.0566027798640985,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.011188853137876098,
      "cumulativeWealth": 2.033591753397251,
      "drawdown": -0.011188853137876209,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.021242682240553146,
      "cumulativeWealth": 2.0767906968216785,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.021122231483888365,
      "cumulativeWealth": 2.032924242979825,
      "drawdown": -0.021122231483888365,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.01719185378145549,
      "cumulativeWealth": 2.0678739793139105,
      "drawdown": -0.004293508017641945,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0012005732343965958,
      "cumulativeWealth": 2.065391345162241,
      "drawdown": -0.005488926581230902,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.01660972704538488,
      "cumulativeWealth": 2.0310857586771958,
      "drawdown": -0.022007484054329396,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0021565868418769174,
      "cumulativeWealth": 2.035465971499083,
      "drawdown": -0.019898358262986804,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.012765182058944724,
      "cumulativeWealth": 2.061449065200055,
      "drawdown": -0.00738718236994329,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0383901752003839,
      "cumulativeWealth": 2.140588455979753,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.0008001436395492778,
      "cumulativeWealth": 2.1423012342176975,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.024133851677152096,
      "cumulativeWealth": 2.194003214452087,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06259114690268985,
      "cumulativeWealth": 2.3313283919528316,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.04441030104625732,
      "cumulativeWealth": 2.4348633876771437,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -8.422968079679904e-05,
      "cumulativeWealth": 2.434658299911216,
      "drawdown": -8.422968079668802e-05,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.018757377255186114,
      "cumulativeWealth": 2.480326104130121,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07672064981681714,
      "cumulativeWealth": 2.670618334596598,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06040571618002999,
      "cumulativeWealth": 2.8319389477414245,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.07137572806605119,
      "cumulativeWealth": 2.6298072435077735,
      "drawdown": -0.07137572806605119,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.07894708117425298,
      "cumulativeWealth": 2.83742284943362,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.06328152417946353,
      "cumulativeWealth": 3.016979292087416,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.0206978073642059,
      "cumulativeWealth": 2.9545344358779926,
      "drawdown": -0.0206978073642059,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.04327050814941369,
      "cumulativeWealth": 2.8266902294926104,
      "drawdown": -0.06307271087139177,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": 0.044372533705834716,
      "cumulativeWealth": 2.952117636976725,
      "drawdown": -0.021498873154616183,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.005403625809171531,
      "cumulativeWealth": 2.9361654979218472,
      "drawdown": -0.026786327097941265,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "netReturn": -0.018739801387399724,
      "cumulativeWealth": 2.881142339650256,
      "drawdown": -0.04502415803562776,
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
      "netReturn": 0.06782250453746741,
      "cumulativeWealth": 3.0540799105873155,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.031277187706787224,
      "cumulativeWealth": 2.958556879952348,
      "drawdown": -0.031277187706787224,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03528986863607009,
      "cumulativeWealth": 3.0629639635982078,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.01849417122802366,
      "cumulativeWealth": 3.0063169835901564,
      "drawdown": -0.01849417122802366,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.027004774012413635,
      "cumulativeWealth": 2.925132072838623,
      "drawdown": -0.044999514325877676,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.008926561818764833,
      "cumulativeWealth": 2.951243445114869,
      "drawdown": -0.03647464345355722,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.050996510280336915,
      "cumulativeWealth": 3.1017465618034463,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.04376037005663602,
      "cumulativeWealth": 3.2374801391698638,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.014430623814855048,
      "cumulativeWealth": 3.2841989971662886,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.019628255157873253,
      "cumulativeWealth": 3.3486620930719,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.07878102600230386,
      "cumulativeWealth": 3.6124731284991265,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.03904009792597263,
      "cumulativeWealth": 3.753504433190677,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.004492360149838004,
      "cumulativeWealth": 3.736642339452771,
      "drawdown": -0.004492360149838004,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02426735364537924,
      "cumulativeWealth": 3.8273207605505686,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0698190947686097,
      "cumulativeWealth": 4.094540831441316,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.02882604585066928,
      "cumulativeWealth": 4.212570253185881,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.08649242059131212,
      "cumulativeWealth": 3.8482148550768773,
      "drawdown": -0.08649242059131212,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.1379985660180867,
      "cumulativeWealth": 4.379262986806986,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.0824134747624814,
      "cumulativeWealth": 4.740173266448473,
      "drawdown": 0.0,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.03191398450198579,
      "cumulativeWealth": 4.588895450286309,
      "drawdown": -0.03191398450198579,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.07173190963320608,
      "cumulativeWealth": 4.259725216530141,
      "drawdown": -0.10135664308285985,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": 0.09694349643809308,
      "cumulativeWealth": 4.672677872886086,
      "drawdown": -0.014239014012446982,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.0007589648480446076,
      "cumulativeWealth": 4.66913147463433,
      "drawdown": -0.014987171949385258,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "F2R",
      "displayName": "F2R",
      "netReturn": -0.060099634942407776,
      "cumulativeWealth": 4.388518377510701,
      "drawdown": -0.07418608332881582,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011216162996660506,
      "cumulativeWealth": 1.0112161629966605,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003751907473239724,
      "cumulativeWealth": 1.0150101524756685,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013668175920037884,
      "cumulativeWealth": 1.0288834898003305,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.005515956184826809,
      "cumulativeWealth": 1.034558766049361,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009803445949881251,
      "cumulativeWealth": 1.0447010069943017,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014529967106450936,
      "cumulativeWealth": 1.059880478262005,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0177461223551445,
      "cumulativeWealth": 1.0786892469110716,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009177681116850911,
      "cumulativeWealth": 1.0885891128433975,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02931516410138091,
      "cumulativeWealth": 1.1205012813253783,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.025851276454545546,
      "cumulativeWealth": 1.0915348929341635,
      "drawdown": -0.025851276454545435,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.013761574363183149,
      "cumulativeWealth": 1.0765136543350409,
      "drawdown": -0.039257096554416226,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0006634655562883784,
      "cumulativeWealth": 1.0757994246045155,
      "drawdown": -0.03989451637930075,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01723335452736663,
      "cumulativeWealth": 1.0943390574890621,
      "drawdown": -0.023348678196396522,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003860763549524693,
      "cumulativeWealth": 1.0985640418330371,
      "drawdown": -0.019578058372581975,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022111184046228916,
      "cumulativeWealth": 1.1228545935485765,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02142400194505889,
      "cumulativeWealth": 1.1469106325447795,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010882374283953666,
      "cumulativeWealth": 1.1481587436221394,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.044038784996678126,
      "cumulativeWealth": 1.0975952275697078,
      "drawdown": -0.04403878499667824,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014215659496352284,
      "cumulativeWealth": 1.1131982675896601,
      "drawdown": -0.030449165872471817,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04490429282483632,
      "cumulativeWealth": 1.0632108866097134,
      "drawdown": -0.0739861604366987,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05168270080801274,
      "cumulativeWealth": 1.1181604967581853,
      "drawdown": -0.02612726422246936,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.018994715603434242,
      "cumulativeWealth": 1.1393996373931017,
      "drawdown": -0.007628828572436852,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01935047167162285,
      "cumulativeWealth": 1.1614475577991343,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02371013877718897,
      "cumulativeWealth": 1.188985640576979,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03061947432477008,
      "cumulativeWealth": 1.152579525282812,
      "drawdown": -0.03061947432476997,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.046146184192738415,
      "cumulativeWealth": 1.2057666723532916,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009798947892241117,
      "cumulativeWealth": 1.2175819171458824,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0010851142521031143,
      "cumulativeWealth": 1.2189031326372803,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00922633732104483,
      "cumulativeWealth": 1.2301491441006702,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.014095249256954379,
      "cumulativeWealth": 1.2474884029099982,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0215807648422488,
      "cumulativeWealth": 1.2744101567766313,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01724625469219032,
      "cumulativeWealth": 1.2963889589227153,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.007873611022659821,
      "cumulativeWealth": 1.3065962213193436,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.04116087964446513,
      "cumulativeWealth": 1.2528155715097051,
      "drawdown": -0.04116087964446513,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07702977300445557,
      "cumulativeWealth": 1.1563114724198653,
      "drawdown": -0.11502003943324379,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.08306644188846368,
      "cumulativeWealth": 1.252362152148594,
      "drawdown": -0.041507902966370525,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.031277509741523435,
      "cumulativeWealth": 1.2915329215623368,
      "drawdown": -0.01152865706422801,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.013276901308489908,
      "cumulativeWealth": 1.3086804766985856,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04066804551292713,
      "cumulativeWealth": 1.3619019538868429,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.038583667227677365,
      "cumulativeWealth": 1.4144491256723364,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02285553235849347,
      "cumulativeWealth": 1.3821211379110896,
      "drawdown": -0.022855532358493358,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.01719340797268598,
      "cumulativeWealth": 1.3583577653193113,
      "drawdown": -0.0396559758389069,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07009319422664628,
      "cumulativeWealth": 1.453569399993111,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022572009034814267,
      "cumulativeWealth": 1.486379381622485,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.009092496632042923,
      "cumulativeWealth": 1.4728644821011445,
      "drawdown": -0.009092496632042923,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01061090463032599,
      "cumulativeWealth": 1.4884929066541142,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.022654008657472025,
      "cumulativeWealth": 1.5222132378480422,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03467429641069608,
      "cumulativeWealth": 1.5749949108574706,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0047551320005139175,
      "cumulativeWealth": 1.5824842195587354,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.016768196615321695,
      "cumulativeWealth": 1.6090196260929401,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019113803641131577,
      "cumulativeWealth": 1.6397741112808075,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017054331999971195,
      "cumulativeWealth": 1.667739363379548,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03163219643094717,
      "cumulativeWealth": 1.6149851042415035,
      "drawdown": -0.03163219643094706,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04206339579090357,
      "cumulativeWealth": 1.6829168618776276,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.003737730544707274,
      "cumulativeWealth": 1.6766265721187847,
      "drawdown": -0.003737730544707163,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.026313833672339637,
      "cumulativeWealth": 1.7207450448681434,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.039639088740218154,
      "cumulativeWealth": 1.6525362793353244,
      "drawdown": -0.039639088740218154,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.02229285489626265,
      "cumulativeWealth": 1.6156965278492923,
      "drawdown": -0.061048275182974954,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011305318375244289,
      "cumulativeWealth": 1.6339624914944053,
      "drawdown": -0.05043312699493374,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.06788479085924026,
      "cumulativeWealth": 1.5230412894874645,
      "drawdown": -0.11489427557574539,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0043966242989224025,
      "cumulativeWealth": 1.5297375298290872,
      "drawdown": -0.11100279824062642,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.055688248824274034,
      "cumulativeWealth": 1.4445491256321346,
      "drawdown": -0.1605094956162858,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0654047271171323,
      "cumulativeWealth": 1.5390294670013964,
      "drawdown": -0.10560284825964528,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03665036442740732,
      "cumulativeWealth": 1.4826234761712769,
      "drawdown": -0.13838282981376426,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.07204757239867532,
      "cumulativeWealth": 1.3758040539318512,
      "drawdown": -0.20046025526269884,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.043651478554275425,
      "cumulativeWealth": 1.4358599350869425,
      "drawdown": -0.1655591632420077,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.048588773865327894,
      "cumulativeWealth": 1.5056266087751664,
      "drawdown": -0.12501470612077858,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0389709198149053,
      "cumulativeWealth": 1.4469509549334016,
      "drawdown": -0.15911368784776714,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.05105340310854789,
      "cumulativeWealth": 1.5208227253139148,
      "drawdown": -0.11618357998499895,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.025747961477001535,
      "cumulativeWealth": 1.4816646403691835,
      "drawdown": -0.13894005112028673,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03281131021819039,
      "cumulativeWealth": 1.5302799985236604,
      "drawdown": -0.11068754602113517,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.011887113072608146,
      "cumulativeWealth": 1.5484706098988616,
      "drawdown": -0.10011618832380986,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0018074589725676216,
      "cumulativeWealth": 1.5456718128012428,
      "drawdown": -0.10174269139349235,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03740697236483981,
      "cumulativeWealth": 1.6034907155878106,
      "drawdown": -0.0681416050739333,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01957857693690057,
      "cumulativeWealth": 1.6348847819305523,
      "drawdown": -0.04989714379457666,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012276501192636013,
      "cumulativeWealth": 1.6148141169553594,
      "drawdown": -0.061561082641909515,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03881918218426972,
      "cumulativeWealth": 1.5521283535555386,
      "drawdown": -0.09799051394364211,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.019307883856197194,
      "cumulativeWealth": 1.5221600395751778,
      "drawdown": -0.11540640833760629,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.07317810625033494,
      "cumulativeWealth": 1.633548828681224,
      "drawdown": -0.05067352449857032,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04099522322062321,
      "cumulativeWealth": 1.7005165275547984,
      "drawdown": -0.011755673726141724,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.008951321167961712,
      "cumulativeWealth": 1.7157383971443685,
      "drawdown": -0.0029095813692484596,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02541365852701416,
      "cumulativeWealth": 1.759341586891082,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.023231221828643678,
      "cumulativeWealth": 1.8002132415685068,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03410456746459212,
      "cumulativeWealth": 1.7388177476207816,
      "drawdown": -0.03410456746459212,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03702580920923504,
      "cumulativeWealth": 1.8031988817938205,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02471027426926753,
      "cumulativeWealth": 1.8477564207249824,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01694211566499715,
      "cumulativeWealth": 1.8790613237256462,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.019865164127222057,
      "cumulativeWealth": 1.9163891853265713,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017933985642688333,
      "cumulativeWealth": 1.9507576814620213,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.015429138046227475,
      "cumulativeWealth": 1.9206591719000052,
      "drawdown": -0.015429138046227475,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.04022408396099353,
      "cumulativeWealth": 1.9979159276909633,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.022446437455654777,
      "cumulativeWealth": 1.9530698327783915,
      "drawdown": -0.022446437455654777,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0181777853898355,
      "cumulativeWealth": 1.988572317049999,
      "drawdown": -0.004676678588654615,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.0013326529358390626,
      "cumulativeWealth": 1.991222393786444,
      "drawdown": -0.0033502580422666295,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03353675242135312,
      "cumulativeWealth": 1.9244432613501739,
      "drawdown": -0.036774653689108705,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0034777830250323216,
      "cumulativeWealth": 1.9177504652432125,
      "drawdown": -0.04012454244778951,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03527934612086048,
      "cumulativeWealth": 1.985407447679969,
      "drawdown": -0.006260763947885772,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03665312794271114,
      "cumulativeWealth": 2.0581788408781945,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.012763169963333931,
      "cumulativeWealth": 2.0844477272392603,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017072936542631867,
      "cumulativeWealth": 2.1200353710128494,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.02587934610027065,
      "cumulativeWealth": 2.1749005001241066,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.01676436511779844,
      "cumulativeWealth": 2.2113613262030696,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003592894899591581,
      "cumulativeWealth": 2.219306515033139,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.000637506871454474,
      "cumulativeWealth": 2.2178916918799416,
      "drawdown": -0.000637506871454474,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.009843890378789188,
      "cumulativeWealth": 2.239724374566835,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.00120724210406431,
      "cumulativeWealth": 2.2424282641333115,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.03680590292240893,
      "cumulativeWealth": 2.159893667133155,
      "drawdown": -0.03680590292240893,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.06370683737496696,
      "cumulativeWealth": 2.2974936617324277,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.03274989866753253,
      "cumulativeWealth": 2.372736346343463,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.005158560079137509,
      "cumulativeWealth": 2.360496443348897,
      "drawdown": -0.005158560079137509,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.0049771525603733435,
      "cumulativeWealth": 2.348747892432131,
      "drawdown": -0.010110037699005203,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.017637872457596515,
      "cumulativeWealth": 2.390174808193897,
      "drawdown": 0.0,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": -0.012413549017491143,
      "cumulativeWealth": 2.3605042560520095,
      "drawdown": -0.012413549017491254,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "netReturn": 0.003709435852684795,
      "cumulativeWealth": 2.369260395169824,
      "drawdown": -0.008750160428590892,
      "seriesRole": "REFERENCE"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00015323513480125506,
      "cumulativeWealth": 1.0001532351348013,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010290366523197925,
      "cumulativeWealth": 1.0011824294716911,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00032780846257418617,
      "cumulativeWealth": 1.0015106255446524,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011384126610185508,
      "cumulativeWealth": 1.002650757920917,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007214414341234487,
      "cumulativeWealth": 1.0033741117216364,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007003146133326421,
      "cumulativeWealth": 1.0040767892747147,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000546584375526793,
      "cumulativeWealth": 1.0046256019595614,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0007437384773554268,
      "cumulativeWealth": 1.0053727806750752,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001312658732113725,
      "cumulativeWealth": 1.0066924920346578,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0008313519133300584,
      "cumulativeWealth": 1.0075294077640458,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013017236170749236,
      "cumulativeWealth": 1.0088409325890297,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010390055176421331,
      "cumulativeWealth": 1.009889123884413,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014982234059373045,
      "cumulativeWealth": 1.0114021634072181,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0014870576690924064,
      "cumulativeWealth": 1.0129061767508494,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00138931357982508,
      "cumulativeWealth": 1.014313421057298,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001585643203168896,
      "cumulativeWealth": 1.0159217602392805,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0013992399019746582,
      "cumulativeWealth": 1.0173432785034917,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017065774209137352,
      "cumulativeWealth": 1.019079453571904,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018587737716393438,
      "cumulativeWealth": 1.02097369173142,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 7.646961640772609e-05,
      "cumulativeWealth": 1.0210517651979891,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0017495342185807061,
      "cumulativeWealth": 1.0228381302001452,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018480920001948675,
      "cumulativeWealth": 1.0247284291660623,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00175041406187737,
      "cumulativeWealth": 1.02652212821808,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00192494883729033,
      "cumulativeWealth": 1.0284981307952463,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002121830713379902,
      "cumulativeWealth": 1.0306804297178216,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018151226061653425,
      "cumulativeWealth": 1.0325512410655346,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0018046295927998113,
      "cumulativeWealth": 1.0344146135912438,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016949267562520465,
      "cumulativeWealth": 1.0361678705968778,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016181437566473722,
      "cumulativeWealth": 1.0378445391675226,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0016072515604605986,
      "cumulativeWealth": 1.0395126164226152,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0010827835004474373,
      "cumulativeWealth": 1.0406381835321845,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0011157430927526413,
      "cumulativeWealth": 1.0417992683975152,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00120279869936879,
      "cumulativeWealth": 1.0430523432025471,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.001180862395177229,
      "cumulativeWealth": 1.0442840444908366,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002045611241361156,
      "cumulativeWealth": 1.0464202436714212,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00019644396375906314,
      "cumulativeWealth": 1.0462146807309967,
      "drawdown": -0.00019644396375906314,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00017485145387619028,
      "cumulativeWealth": 1.0460317485730042,
      "drawdown": -0.00037126106912255263,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0460317485730035,
      "drawdown": -0.00037126106912321877,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0001090759067134961,
      "cumulativeWealth": 1.0461458454344301,
      "drawdown": -0.0002622256580475657,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -5.551115123125783e-16,
      "cumulativeWealth": 1.0461458454344295,
      "drawdown": -0.00026222565804823184,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021852862334403866,
      "cumulativeWealth": 1.0459172326230095,
      "drawdown": -0.00048069697758024166,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010948853926362467,
      "cumulativeWealth": 1.046031748573,
      "drawdown": -0.00037126106912666046,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010947655283721769,
      "cumulativeWealth": 1.045917232623008,
      "drawdown": -0.00048069697758179597,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 3.305692402322258e-05,
      "cumulativeWealth": 1.0459518074295013,
      "drawdown": -0.0004476559439220429,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0459518074295013,
      "drawdown": -0.0004476559439220429,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010938475084409927,
      "cumulativeWealth": 1.0458373962516507,
      "drawdown": -0.0005569917280322523,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010939671717558053,
      "cumulativeWealth": 1.0457229850738012,
      "drawdown": -0.0006663275121413514,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 2.220446049250313e-16,
      "cumulativeWealth": 1.0457229850738015,
      "drawdown": -0.0006663275121411294,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010950887723237823,
      "cumulativeWealth": 1.04560846912381,
      "drawdown": -0.0007757634205958208,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021824012486026945,
      "cumulativeWealth": 1.0453802754009534,
      "drawdown": -0.0009938342427503466,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010964500175536518,
      "cumulativeWealth": 1.045265654678822,
      "drawdown": -0.0011033702755485209,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010945655521943376,
      "cumulativeWealth": 1.0451512435009715,
      "drawdown": -0.0012127060596585082,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00010946853726889749,
      "cumulativeWealth": 1.0452656546788224,
      "drawdown": -0.0011033702755480768,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00010945655521998887,
      "cumulativeWealth": 1.0451512435009715,
      "drawdown": -0.0012127060596585082,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0002183355990573732,
      "cumulativeWealth": 1.0449230497781161,
      "drawdown": -0.0014307768818119238,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0,
      "cumulativeWealth": 1.0449230497781161,
      "drawdown": -0.0014307768818119238,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 4.440892098500626e-16,
      "cumulativeWealth": 1.0449230497781166,
      "drawdown": -0.0014307768818114797,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00021868408331748856,
      "cumulativeWealth": 1.0446945417388385,
      "drawdown": -0.0016491480769982303,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0004596278649016128,
      "cumulativeWealth": 1.0451747124605322,
      "drawdown": -0.00119027820650619,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.0001095663228606325,
      "cumulativeWealth": 1.045060196510541,
      "drawdown": -0.0012997141149604374,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0003281334589859686,
      "cumulativeWealth": 1.0454031157276706,
      "drawdown": -0.0009720071356627003,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.000776518201825338,
      "cumulativeWealth": 1.0462148902752781,
      "drawdown": -0.00019624371507043215,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00036151982936316607,
      "cumulativeWealth": 1.0465931177038876,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0019364854011287846,
      "cumulativeWealth": 1.0486198299972431,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0020679267528098677,
      "cumulativeWealth": 1.0507882989972213,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0015856584605540291,
      "cumulativeWealth": 1.0524544903537774,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031512641641386896,
      "cumulativeWealth": 1.0557710524736161,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036261403635868827,
      "cumulativeWealth": 1.0595994265016973,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002842573741492771,
      "cumulativeWealth": 1.0626114160079718,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034577590203541675,
      "cumulativeWealth": 1.0662856702168046,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003990984935227981,
      "cumulativeWealth": 1.0705412002632895,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0036302320929224585,
      "cumulativeWealth": 1.074427513285281,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037516710309226653,
      "cumulativeWealth": 1.0784584118616996,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.00460626597508873,
      "cumulativeWealth": 1.0834260781498064,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0038603455985541935,
      "cumulativeWealth": 1.0876084772419508,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0049665229801874045,
      "cumulativeWealth": 1.0930101097376195,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0039913694627404794,
      "cumulativeWealth": 1.0973727169120928,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004309665799685947,
      "cumulativeWealth": 1.1021020265796773,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0046815121954608685,
      "cumulativeWealth": 1.1072615306577522,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": -0.00033878047923308063,
      "cumulativeWealth": 1.1068864120657596,
      "drawdown": -0.00033878047923319166,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004267409371020436,
      "cumulativeWealth": 1.111609949513264,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004443388661548697,
      "cumulativeWealth": 1.116549264558996,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004101673454374399,
      "cumulativeWealth": 1.121128985037939,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0043219410251003065,
      "cumulativeWealth": 1.1259744383928034,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004572966848860993,
      "cumulativeWealth": 1.1311234821722387,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003992858475820649,
      "cumulativeWealth": 1.1356398981552298,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0045082407566421345,
      "cumulativeWealth": 1.140759636228962,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004617187320726357,
      "cumulativeWealth": 1.1460267371573547,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004222312516465765,
      "cumulativeWealth": 1.1508656201938585,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003947834753324386,
      "cumulativeWealth": 1.155409047485666,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003707284807425326,
      "cumulativeWealth": 1.1596924778937714,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.004031097681613138,
      "cumulativeWealth": 1.1643673115527933,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035001623431147877,
      "cumulativeWealth": 1.1684427861702442,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032376795422013327,
      "cumulativeWealth": 1.1722258294752603,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0032702913893862817,
      "cumulativeWealth": 1.1760593495118095,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0034021372320980348,
      "cumulativeWealth": 1.1800604648119406,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003632049208579735,
      "cumulativeWealth": 1.184346502489237,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003347159264672772,
      "cumulativeWealth": 1.1883106988576266,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003565583496457414,
      "cumulativeWealth": 1.1925477198741372,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0037077928977549135,
      "cumulativeWealth": 1.1969694398401203,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033023639060039134,
      "cumulativeWealth": 1.200922268514838,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0035105971401983016,
      "cumulativeWealth": 1.2051382227962866,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002875845047751957,
      "cumulativeWealth": 1.208604013586172,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003351772988936297,
      "cumulativeWealth": 1.21265497987323,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0029548571141075897,
      "cumulativeWealth": 1.2162382020674665,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0026702125442883418,
      "cumulativeWealth": 1.2194858165714697,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002878270519971471,
      "cumulativeWealth": 1.2229958266468306,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028891114183084987,
      "cumulativeWealth": 1.2265291978541395,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0031740541290627977,
      "cumulativeWealth": 1.2304222679190044,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002724360522861957,
      "cumulativeWealth": 1.2337743817721734,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0033708814942172705,
      "cumulativeWealth": 1.2379332890037285,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.002767898077323583,
      "cumulativeWealth": 1.2413597621742167,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.0028451114281402567,
      "cumulativeWealth": 1.244891569020012,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "netReturn": 0.003534801551311917,
      "cumulativeWealth": 1.249292013669399,
      "drawdown": 0.0,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016615181145625213,
      "cumulativeWealth": 1.0166151811456252,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.009826535113994783,
      "cumulativeWealth": 1.0266049859205728,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.010552071430141918,
      "cumulativeWealth": 1.0374377950625466,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.011417187681861174,
      "cumulativeWealth": 1.0492824170770318,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.039950478971838344,
      "cumulativeWealth": 1.007363081938076,
      "drawdown": -0.039950478971838455,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04422246820562359,
      "cumulativeWealth": 1.0519111638006016,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.016192564251760744,
      "cumulativeWealth": 1.034878024693616,
      "drawdown": -0.016192564251760633,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02609267585080377,
      "cumulativeWealth": 1.0618807615370667,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03526923861807463,
      "cumulativeWealth": 1.0244290355744732,
      "drawdown": -0.03526923861807452,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0033983475289227627,
      "cumulativeWealth": 1.0279104014560745,
      "drawdown": -0.03199074821905645,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02073875664694147,
      "cumulativeWealth": 1.0492279851267319,
      "drawdown": -0.011915439914383597,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022489297403641584,
      "cumulativeWealth": 1.025631584924993,
      "drawdown": -0.034136767446095506,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0012604469406571894,
      "cumulativeWealth": 1.0243388307315329,
      "drawdown": -0.03535418680266145,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.025658691186017046,
      "cumulativeWealth": 0.9980556370039467,
      "drawdown": -0.060105735827376106,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01615384505867179,
      "cumulativeWealth": 1.0141780731240424,
      "drawdown": -0.044922829512397344,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.018383019532708267,
      "cumulativeWealth": 0.9955344177961587,
      "drawdown": -0.06248003179271466,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.03155854449968254,
      "cumulativeWealth": 0.9641168005711731,
      "drawdown": -0.09206679742872526,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.012670522981347299,
      "cumulativeWealth": 0.9763326646495132,
      "drawdown": -0.08056280892001766,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02077261405846209,
      "cumulativeWealth": 0.9966136462849474,
      "drawdown": -0.06146369499871662,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.020632647206257904,
      "cumulativeWealth": 0.9760508685202078,
      "drawdown": -0.08082818347007292,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.044392132927136396,
      "cumulativeWealth": 1.0193798484192038,
      "drawdown": -0.040024186007799,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.031118905452965806,
      "cumulativeWealth": 0.987657863295588,
      "drawdown": -0.06989758260055623,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025601206291982814,
      "cumulativeWealth": 1.0129430959997174,
      "drawdown": -0.04608583874004102,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.008727471269528664,
      "cumulativeWealth": 1.0217835277677223,
      "drawdown": -0.037760580304048275,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.006973666911463505,
      "cumulativeWealth": 1.0289091057459945,
      "drawdown": -0.03105024310200888,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02207372469254132,
      "cumulativeWealth": 1.0516209620798804,
      "drawdown": -0.009661912927337757,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.021027329719384813,
      "cumulativeWealth": 1.0737337427893507,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.01707961817487047,
      "cumulativeWealth": 1.055394780441034,
      "drawdown": -0.01707961817487058,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.023579968765904513,
      "cumulativeWealth": 1.0305086044825358,
      "drawdown": -0.040256850077677986,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.005612619096079796,
      "cumulativeWealth": 1.0247247522103426,
      "drawdown": -0.04564352280826367,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.03620348020108288,
      "cumulativeWealth": 1.0618233544885494,
      "drawdown": -0.011092496981477518,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04452228998775909,
      "cumulativeWealth": 1.1090981617928637,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.011371651226742552,
      "cumulativeWealth": 1.096485884320734,
      "drawdown": -0.011371651226742552,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0232032466940999,
      "cumulativeWealth": 1.1219279167912262,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02721704580382389,
      "cumulativeWealth": 1.1524634802911218,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.033661465523130873,
      "cumulativeWealth": 1.1136698705826347,
      "drawdown": -0.033661465523130985,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02188612241380361,
      "cumulativeWealth": 1.138043785698771,
      "drawdown": -0.012512062064394591,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.025374505162370165,
      "cumulativeWealth": 1.1669210836139878,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.008444424691723462,
      "cumulativeWealth": 1.1767750608257506,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.016564107123610228,
      "cumulativeWealth": 1.1962672889936612,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.026274023425439053,
      "cumulativeWealth": 1.2276980437677671,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.010298699103830744,
      "cumulativeWealth": 1.2150543510246412,
      "drawdown": -0.010298699103830855,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02589152899340963,
      "cumulativeWealth": 1.2465139659827642,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022147736107459348,
      "cumulativeWealth": 1.2189065036099154,
      "drawdown": -0.022147736107459348,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01899529866246441,
      "cumulativeWealth": 1.242059996687606,
      "drawdown": -0.0035731403070535794,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.002941264569588431,
      "cumulativeWealth": 1.2384067696260457,
      "drawdown": -0.006503895325654652,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0176492746363488,
      "cumulativeWealth": 1.2165497884374021,
      "drawdown": -0.02403838092719479,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.002832829283724969,
      "cumulativeWealth": 1.219996066303197,
      "drawdown": -0.021273648272893797,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0165736289304399,
      "cumulativeWealth": 1.2402158284027025,
      "drawdown": -0.005052600894925541,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.03893794918620741,
      "cumulativeWealth": 1.288507289308977,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.0021595847132667156,
      "cumulativeWealth": 1.2912899299539016,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.02367795570172948,
      "cumulativeWealth": 1.3218650357134394,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06420617802095663,
      "cumulativeWealth": 1.4067369375161347,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04387201383629713,
      "cumulativeWealth": 1.4684533199028729,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0005255920027502636,
      "cumulativeWealth": 1.46768151258152,
      "drawdown": -0.0005255920027502636,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.01931121117339374,
      "cumulativeWealth": 1.4960242202062677,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.07604030881308299,
      "cumulativeWealth": 1.6097823639026039,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.05724479183236619,
      "cumulativeWealth": 1.7019340202196227,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.07289480569742868,
      "cumulativeWealth": 1.5778718705058696,
      "drawdown": -0.07289480569742868,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.08482851238178313,
      "cumulativeWealth": 1.7117203940099441,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.06520331674762958,
      "cumulativeWealth": 1.8233302410439518,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.021811167062850356,
      "cumulativeWealth": 1.783561280545795,
      "drawdown": -0.021811167062850356,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.04612360690119166,
      "cumulativeWealth": 1.7012970011577147,
      "drawdown": -0.0669287642683789,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": 0.04959273954567833,
      "cumulativeWealth": 1.7856689802259729,
      "drawdown": -0.020655205497176365,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.0049656162855369335,
      "cumulativeWealth": 1.7768020332571846,
      "drawdown": -0.02551825595791546,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "netReturn": -0.022859378232974126,
      "cumulativeWealth": 1.736185443533841,
      "drawdown": -0.047794302726101745,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01661518114562499,
      "cumulativeWealth": 1.016615181145625,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.009826535113994561,
      "cumulativeWealth": 1.0266049859205724,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01055207143014214,
      "cumulativeWealth": 1.0374377950625464,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.011417187681861174,
      "cumulativeWealth": 1.0492824170770316,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03995047897183823,
      "cumulativeWealth": 1.007363081938076,
      "drawdown": -0.03995047897183823,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04422246820562359,
      "cumulativeWealth": 1.0519111638006016,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.016192564251760966,
      "cumulativeWealth": 1.0348780246936158,
      "drawdown": -0.016192564251760855,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.026092675850802882,
      "cumulativeWealth": 1.0618807615370656,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03526923861807485,
      "cumulativeWealth": 1.0244290355744718,
      "drawdown": -0.03526923861807474,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0033983475289229848,
      "cumulativeWealth": 1.0279104014560734,
      "drawdown": -0.03199074821905645,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.020738756646941248,
      "cumulativeWealth": 1.0492279851267305,
      "drawdown": -0.011915439914383819,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.022489297403641362,
      "cumulativeWealth": 1.0256315849249922,
      "drawdown": -0.034136767446095284,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0012604469406570784,
      "cumulativeWealth": 1.0243388307315322,
      "drawdown": -0.035354186802661,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.025658691186017046,
      "cumulativeWealth": 0.9980556370039461,
      "drawdown": -0.06010573582737577,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016153845058671568,
      "cumulativeWealth": 1.0141780731240415,
      "drawdown": -0.04492282951239712,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.018383019532708045,
      "cumulativeWealth": 0.995534417796158,
      "drawdown": -0.06248003179271433,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.03155854449968298,
      "cumulativeWealth": 0.964116800571172,
      "drawdown": -0.09206679742872526,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.012670522981346855,
      "cumulativeWealth": 0.9763326646495116,
      "drawdown": -0.0805628089200181,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02077261405846187,
      "cumulativeWealth": 0.9966136462849456,
      "drawdown": -0.0614636949987174,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.020632647206257793,
      "cumulativeWealth": 0.9760508685202062,
      "drawdown": -0.08082818347007359,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04439213292713662,
      "cumulativeWealth": 1.0193798484192023,
      "drawdown": -0.040024186007799556,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.031118905452966028,
      "cumulativeWealth": 0.9876578632955862,
      "drawdown": -0.0698975826005569,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.025601206291982814,
      "cumulativeWealth": 1.0129430959997154,
      "drawdown": -0.04608583874004191,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.008727471269528442,
      "cumulativeWealth": 1.02178352776772,
      "drawdown": -0.037760580304049385,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.006973666911462617,
      "cumulativeWealth": 1.0289091057459914,
      "drawdown": -0.031050243102010766,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02207372469254132,
      "cumulativeWealth": 1.0516209620798773,
      "drawdown": -0.009661912927339644,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.021027329719384813,
      "cumulativeWealth": 1.0737337427893476,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.017079618174870026,
      "cumulativeWealth": 1.0553947804410315,
      "drawdown": -0.017079618174870026,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.023579968765904402,
      "cumulativeWealth": 1.0305086044825336,
      "drawdown": -0.04025685007767732,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.005612619096080129,
      "cumulativeWealth": 1.02472475221034,
      "drawdown": -0.04564352280826345,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.03620348020108333,
      "cumulativeWealth": 1.0618233544885471,
      "drawdown": -0.01109249698147663,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.044522289987758645,
      "cumulativeWealth": 1.1090981617928608,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.011371651226742996,
      "cumulativeWealth": 1.0964858843207306,
      "drawdown": -0.011371651226742996,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.023203246694099233,
      "cumulativeWealth": 1.121927916791222,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.027217045803823448,
      "cumulativeWealth": 1.152463480291117,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.033661465523130985,
      "cumulativeWealth": 1.11366987058263,
      "drawdown": -0.033661465523130873,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02188612241380339,
      "cumulativeWealth": 1.138043785698766,
      "drawdown": -0.012512062064394813,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.025374505162370387,
      "cumulativeWealth": 1.166921083613983,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.008444424691723684,
      "cumulativeWealth": 1.176775060825746,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01656410712361045,
      "cumulativeWealth": 1.1962672889936568,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.026274023425439275,
      "cumulativeWealth": 1.227698043767763,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.007582364951755016,
      "cumulativeWealth": 1.2183891891493601,
      "drawdown": -0.007582364951754905,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.024862812510141108,
      "cumulativeWealth": 1.2486817711235636,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.022147736107459792,
      "cumulativeWealth": 1.2210262967745233,
      "drawdown": -0.022147736107459792,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01899529866246419,
      "cumulativeWealth": 1.244220055956478,
      "drawdown": -0.0035731403070543566,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.002941264569587876,
      "cumulativeWealth": 1.2405604755891226,
      "drawdown": -0.006503895325654874,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.01764927463634869,
      "cumulativeWealth": 1.2186654830524508,
      "drawdown": -0.024038380927195013,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.002832829283724303,
      "cumulativeWealth": 1.2221177543199058,
      "drawdown": -0.021273648272894685,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.016573628930439677,
      "cumulativeWealth": 1.242372680489306,
      "drawdown": -0.005052600894926651,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.03893794918620763,
      "cumulativeWealth": 1.2907481247925312,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0021595847132664936,
      "cumulativeWealth": 1.2935356047115105,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.02367795570172948,
      "cumulativeWealth": 1.3241638834584795,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.06420617802095685,
      "cumulativeWealth": 1.4091833854887361,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04387201383629713,
      "cumulativeWealth": 1.471007098474778,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0005255920027500416,
      "cumulativeWealth": 1.470233948907831,
      "drawdown": -0.0005255920027500416,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.01931121117339374,
      "cumulativeWealth": 1.4986259471694827,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.07604030881308299,
      "cumulativeWealth": 1.6125819269875492,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.05724479183236619,
      "cumulativeWealth": 1.7048938437105874,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.07289480569742857,
      "cumulativeWealth": 1.580615938238562,
      "drawdown": -0.07289480569742857,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.08482851238178335,
      "cumulativeWealth": 1.714697236926276,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.0652033167476298,
      "cumulativeWealth": 1.8265011839918657,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.006918840021576944,
      "cumulativeWealth": 1.813863914500605,
      "drawdown": -0.006918840021576944,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.024452938035761318,
      "cumulativeWealth": 1.7695096125940182,
      "drawdown": -0.031202592091011394,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": 0.04505230266137983,
      "cumulativeWealth": 1.8492300952228249,
      "drawdown": 0.0,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0049656162855371555,
      "cumulativeWealth": 1.840047528146281,
      "drawdown": -0.0049656162855371555,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "netReturn": -0.0150223975653202,
      "cumulativeWealth": 1.8124056026393829,
      "drawdown": -0.019913418388859183,
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
      "cagr": 0.12328574166557349,
      "annVol": 0.10945797232794088,
      "sharpeRf0": 1.1187173370629384,
      "maxDrawdown": -0.13555286535830968,
      "calmar": 0.9095030292402138,
      "cumulativeReturn": 2.0167295948211543,
      "terminalWealth": 3.0167295948211543,
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
      "cagr": 0.11786004834522834,
      "annVol": 0.10480115114994072,
      "sharpeRf0": 1.117374429743909,
      "maxDrawdown": -0.13041358005727854,
      "calmar": 0.9037406096317837,
      "cumulativeReturn": 1.8811423396502613,
      "terminalWealth": 2.8811423396502613,
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
      "cagr": 0.16850201847076285,
      "annVol": 0.1769504686110418,
      "sharpeRf0": 0.970038650394853,
      "maxDrawdown": -0.2197163487735896,
      "calmar": 0.7669070572640846,
      "cumulativeReturn": 3.388518377510696,
      "terminalWealth": 4.388518377510696,
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
      "cagr": 0.09507249801200124,
      "annVol": 0.11419773345273877,
      "sharpeRf0": 0.8537770321781154,
      "maxDrawdown": -0.2163072143624516,
      "calmar": 0.4395253218540117,
      "cumulativeReturn": 1.3692603951698192,
      "terminalWealth": 2.3692603951698192,
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
      "cagr": 0.023711826640638867,
      "annVol": 0.002958481479791467,
      "sharpeRf0": 7.934421938758958,
      "maxDrawdown": -0.004474473916887045,
      "calmar": 5.299355204898707,
      "cumulativeReturn": 0.24929201366941212,
      "terminalWealth": 1.2492920136694121,
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
      "cagr": 0.10566958636651713,
      "annVol": 0.11449757463933248,
      "sharpeRf0": 0.9360902336195797,
      "maxDrawdown": -0.11135949956924562,
      "calmar": 0.9489050038412719,
      "cumulativeReturn": 0.7361854435338353,
      "terminalWealth": 1.7361854435338353,
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
      "cagr": 0.11435309401657667,
      "annVol": 0.10724480647429102,
      "sharpeRf0": 1.0649243417009628,
      "maxDrawdown": -0.11135949956924551,
      "calmar": 1.0268822548494814,
      "cumulativeReturn": 0.8124056026393789,
      "terminalWealth": 1.8124056026393789,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    }
  ],
  "coreCalendarReturns": [
    {
      "year": "2017",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.10335485045718418,
      "monthsObserved": 8,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2018",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.002592607458671514,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2019",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.14337035005795973,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2020",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.2825170134725863,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.13743413686748962,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": -0.08082818347007292,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.1363118435357462,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.0990068738726837,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.22734944458466644,
      "monthsObserved": 12,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ACTIVE_CORE",
      "displayName": "PDS Core",
      "annualReturn": 0.1605329780653293,
      "monthsObserved": 10,
      "seriesRole": "ACTIVE_CORE"
    },
    {
      "year": "2017",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09854724996764275,
      "monthsObserved": 8,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2018",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.013958259030701248,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2019",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1291202692629343,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2020",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.265321788770277,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2021",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.12959682879398793,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2022",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": -0.07432786264852476,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2023",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1207686910949557,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2024",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.09004528283095903,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.2200779801290096,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "ADAA",
      "displayName": "ADAA",
      "annualReturn": 0.1615982006772072,
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
      "annualReturn": 0.18028844647549724,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2025",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.29364447460351495,
      "monthsObserved": 12,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2026",
      "seriesId": "F2R",
      "displayName": "F2R",
      "annualReturn": 0.1466293660945741,
      "monthsObserved": 10,
      "seriesRole": "CORE_STRATEGY"
    },
    {
      "year": "2017",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.08858911284339754,
      "monthsObserved": 8,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2018",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.02331295245769649,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2019",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.21931497810048062,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2020",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14655356433893818,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2021",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.15767553435101656,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2022",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": -0.15911368784776725,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2023",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.17524130431433194,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2024",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.14851564282456176,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2025",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.13559262175731868,
      "monthsObserved": 12,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2026",
      "seriesId": "SPY_AGG_60_40",
      "displayName": "60/40",
      "annualReturn": 0.06824891578072445,
      "monthsObserved": 10,
      "seriesRole": "REFERENCE"
    },
    {
      "year": "2017",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.005372780675075184,
      "monthsObserved": 8,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2018",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.015595194960804859,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2019",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.020319736870052507,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2020",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.003985930071129795,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": -0.000983561234922714,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2022",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.014045413895978243,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2023",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.04462722834815236,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2024",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.051930260287285535,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2025",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.041471164503957825,
      "monthsObserved": 12,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2026",
      "seriesId": "BIL_CASH",
      "displayName": "BIL Cash",
      "annualReturn": 0.030212248664495567,
      "monthsObserved": 10,
      "seriesRole": "CASH_COMPARATOR"
    },
    {
      "year": "2021",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.06188076153706468,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": -0.08082818347007281,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.13631184353574732,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.09900687387268392,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.22734944458466644,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_CORE_COMMON_ADAPTIVE",
      "displayName": "PDS Core · common support",
      "annualReturn": 0.16053297806532973,
      "monthsObserved": 10,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2021",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.06188076153706357,
      "monthsObserved": 8,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2022",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": -0.08082818347007348,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2023",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.13631184353574688,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2024",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.10091815029314444,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2025",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.22734944458466644,
      "monthsObserved": 12,
      "seriesRole": "VARIANT_COMMON_SUPPORT"
    },
    {
      "year": "2026",
      "seriesId": "PDS_ADAPTIVE",
      "displayName": "PDS Adaptive · USD",
      "annualReturn": 0.20937823481739892,
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
      "netReturn": 0.029668685033847897,
      "cumulativeWealth": 1.029668685033848,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.004776324237978136,
      "cumulativeWealth": 1.0247506535364337,
      "drawdown": -0.004776324237978136,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.020667274823415793,
      "cumulativeWealth": 1.045929456918546,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010099009982537988,
      "cumulativeWealth": 1.056492308944997,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002336715538382217,
      "cumulativeWealth": 1.05896103093949,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01989720036724596,
      "cumulativeWealth": 1.0800313907531982,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008995678000728091,
      "cumulativeWealth": 1.0897470053750926,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012487159877450305,
      "cumulativeWealth": 1.1033548504571842,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05378713881077957,
      "cumulativeWealth": 1.1627011509562717,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03821238565531382,
      "cumulativeWealth": 1.1182715661740534,
      "drawdown": -0.03821238565531382,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.006031947016673422,
      "cumulativeWealth": 1.111526211336639,
      "drawdown": -0.044013837586333704,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00647071400279331,
      "cumulativeWealth": 1.1187185795568069,
      "drawdown": -0.037827924538726965,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00990203176040283,
      "cumulativeWealth": 1.1297961664625311,
      "drawdown": -0.028300466088536758,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.002696456458598173,
      "cumulativeWealth": 1.1267497202925738,
      "drawdown": -0.03092061157256909,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.00862262993861318,
      "cumulativeWealth": 1.1364652661640926,
      "drawdown": -0.022564598625021692,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.024558968353509236,
      "cumulativeWealth": 1.164375680670679,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.003183437103805087,
      "cumulativeWealth": 1.1606689639260637,
      "drawdown": -0.003183437103805198,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03632636924857757,
      "cumulativeWealth": 1.1185060745671216,
      "drawdown": -0.039394163640670166,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.003675110114866431,
      "cumulativeWealth": 1.1226167075553029,
      "drawdown": -0.035863831415066216,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.014609876169559999,
      "cumulativeWealth": 1.1062154164720408,
      "drawdown": -0.049949741448686136,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.019987726297970188,
      "cumulativeWealth": 1.128326147443079,
      "drawdown": -0.030960396911446586,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002667158829636973,
      "cumulativeWealth": 1.131335572489942,
      "drawdown": -0.028375814377801123,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01733446954890505,
      "cumulativeWealth": 1.150946674520862,
      "drawdown": -0.011533224519153396,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.017079460204211472,
      "cumulativeWealth": 1.1706042224455107,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03647290288451244,
      "cumulativeWealth": 1.1279088883240553,
      "drawdown": -0.03647290288451244,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03418077835843558,
      "cumulativeWealth": 1.1664616920443693,
      "drawdown": -0.003538796735661154,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005419925047332574,
      "cumulativeWealth": 1.1727838269858346,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.030780850072831045,
      "cumulativeWealth": 1.2088831101321267,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.006705825870424786,
      "cumulativeWealth": 1.2007765504978831,
      "drawdown": -0.006705825870424786,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016188855171607397,
      "cumulativeWealth": 1.2202157481673557,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009057083018073842,
      "cumulativeWealth": 1.2312673434984684,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.027245556905101775,
      "cumulativeWealth": 1.2648139079711496,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0021390956721525356,
      "cumulativeWealth": 1.267519465927769,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010709670396017779,
      "cumulativeWealth": 1.2539447502271461,
      "drawdown": -0.010709670396017779,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022270897018279667,
      "cumulativeWealth": 1.226018275828225,
      "drawdown": -0.032742053447808006,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06062898751471124,
      "cumulativeWealth": 1.3003505225662222,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021642730717676972,
      "cumulativeWealth": 1.3284936587647134,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02526497215871104,
      "cumulativeWealth": 1.362058014066428,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05876536251945197,
      "cumulativeWealth": 1.4420998470355664,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04375056463799054,
      "cumulativeWealth": 1.5051925296077322,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031136395565333208,
      "cumulativeWealth": 1.4583262596038813,
      "drawdown": -0.031136395565333208,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.017226365816073064,
      "cumulativeWealth": 1.4332045979767594,
      "drawdown": -0.047826394441203846,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07480598928438753,
      "cumulativeWealth": 1.5404168857753437,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05305607256653033,
      "cumulativeWealth": 1.622145355849749,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.005008304732505353,
      "cumulativeWealth": 1.630269554112263,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.013774129070426966,
      "cumulativeWealth": 1.6527250973701926,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012107239945166715,
      "cumulativeWealth": 1.6727350366874525,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03875498149486889,
      "cumulativeWealth": 1.7375618520800935,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016615181145625213,
      "cumulativeWealth": 1.7664317570041324,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.009826535113994783,
      "cumulativeWealth": 1.783789660690809,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.010552071430141918,
      "cumulativeWealth": 1.802612336606767,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.011417187681861174,
      "cumulativeWealth": 1.8231930999714447,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.039950478971838344,
      "cumulativeWealth": 1.7503556623694347,
      "drawdown": -0.039950478971838344,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04422246820562359,
      "cumulativeWealth": 1.8277607099971003,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.016192564251760744,
      "cumulativeWealth": 1.7981645772636283,
      "drawdown": -0.016192564251760744,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02609267585080377,
      "cumulativeWealth": 1.8450835027045658,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03526923861807463,
      "cumulativeWealth": 1.7800088123774056,
      "drawdown": -0.03526923861807463,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0033983475289227627,
      "cumulativeWealth": 1.786057900926409,
      "drawdown": -0.031990748219056564,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02073875664694147,
      "cumulativeWealth": 1.8230985210910688,
      "drawdown": -0.011915439914383708,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022489297403641584,
      "cumulativeWealth": 1.7820983162541126,
      "drawdown": -0.034136767446095506,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0012604469406571894,
      "cumulativeWealth": 1.7798520758834397,
      "drawdown": -0.03535418680266145,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.025658691186017046,
      "cumulativeWealth": 1.7341834011115551,
      "drawdown": -0.06010573582737622,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01615384505867179,
      "cumulativeWealth": 1.7621971310764317,
      "drawdown": -0.044922829512397344,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.018383019532708267,
      "cumulativeWealth": 1.7298026267953712,
      "drawdown": -0.06248003179271466,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.03155854449968254,
      "cumulativeWealth": 1.6752125736219818,
      "drawdown": -0.09206679742872514,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.012670522981347299,
      "cumulativeWealth": 1.6964383930347011,
      "drawdown": -0.08056280892001755,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02077261405846209,
      "cumulativeWealth": 1.7316778530471686,
      "drawdown": -0.06146369499871662,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.020632647206257904,
      "cumulativeWealth": 1.6959487548303562,
      "drawdown": -0.08082818347007303,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.044392132927136396,
      "cumulativeWealth": 1.771235537392397,
      "drawdown": -0.040024186007799,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.031118905452965806,
      "cumulativeWealth": 1.71611662616935,
      "drawdown": -0.06989758260055612,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025601206291982814,
      "cumulativeWealth": 1.7600512819370129,
      "drawdown": -0.04608583874004113,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008727471269528664,
      "cumulativeWealth": 1.7754120789330152,
      "drawdown": -0.037760580304048386,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.006973666911463505,
      "cumulativeWealth": 1.787793211402083,
      "drawdown": -0.03105024310200888,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02207372469254132,
      "cumulativeWealth": 1.8272564665577669,
      "drawdown": -0.009661912927337757,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.021027329719384813,
      "cumulativeWealth": 1.865678790761955,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.01707961817487047,
      "cumulativeWealth": 1.8338137093787867,
      "drawdown": -0.01707961817487047,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.023579968765904513,
      "cumulativeWealth": 1.7905724393891473,
      "drawdown": -0.040256850077677986,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.005612619096079796,
      "cumulativeWealth": 1.7805226383229176,
      "drawdown": -0.04564352280826389,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03620348020108288,
      "cumulativeWealth": 1.8449837544070211,
      "drawdown": -0.011092496981477629,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04452228998775909,
      "cumulativeWealth": 1.927126656143435,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.011371651226742552,
      "cumulativeWealth": 1.9052120439400133,
      "drawdown": -0.011371651226742552,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0232032466940999,
      "cumulativeWealth": 1.9494191490001238,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02721704580382389,
      "cumulativeWealth": 2.0024765792693118,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.033661465523130873,
      "cumulativeWealth": 1.9350702829353608,
      "drawdown": -0.033661465523130873,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02188612241380361,
      "cumulativeWealth": 1.9774214680269977,
      "drawdown": -0.01251206206439448,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.025374505162370165,
      "cumulativeWealth": 2.0275975592756303,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.008444424691723462,
      "cumulativeWealth": 2.0447194541700555,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.016564107123610228,
      "cumulativeWealth": 2.078588406246658,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.026274023425439053,
      "cumulativeWealth": 2.1332012867242285,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.010298699103830744,
      "cumulativeWealth": 2.111232088544351,
      "drawdown": -0.010298699103830744,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02589152899340963,
      "cumulativeWealth": 2.165895115376714,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022147736107459348,
      "cumulativeWealth": 2.1179254419249154,
      "drawdown": -0.022147736107459237,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01899529866246441,
      "cumulativeWealth": 2.158156068239111,
      "drawdown": -0.0035731403070534684,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.002941264569588431,
      "cumulativeWealth": 2.1518083602599574,
      "drawdown": -0.006503895325654541,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0176492746363488,
      "cumulativeWealth": 2.113830503544938,
      "drawdown": -0.02403838092719479,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.002832829283724969,
      "cumulativeWealth": 2.119818624496211,
      "drawdown": -0.021273648272893686,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0165736289304399,
      "cumulativeWealth": 2.154951711778447,
      "drawdown": -0.00505260089492543,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.03893794918620741,
      "cumulativeWealth": 2.2388611120304067,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.0021595847132667156,
      "cumulativeWealth": 2.2436961222630747,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.02367795570172948,
      "cumulativeWealth": 2.296822259654162,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06420617802095663,
      "cumulativeWealth": 2.4442924385400127,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04387201383629713,
      "cumulativeWealth": 2.5515284702235967,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0005255920027502636,
      "cumulativeWealth": 2.5501874072648576,
      "drawdown": -0.0005255920027502636,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.01931121117339374,
      "cumulativeWealth": 2.5994346148182785,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.07604030881308299,
      "cumulativeWealth": 2.797096425668478,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.05724479183236619,
      "cumulativeWealth": 2.9572156282909257,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.07289480569742868,
      "cumulativeWealth": 2.741649969661259,
      "drawdown": -0.07289480569742868,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.08482851238178313,
      "cumulativeWealth": 2.9742200580591844,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.06520331674762958,
      "cumulativeWealth": 3.1681490705819706,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.021811167062850356,
      "cumulativeWealth": 3.0990480419234934,
      "drawdown": -0.021811167062850245,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.04612360690119166,
      "cumulativeWealth": 2.9561087682699063,
      "drawdown": -0.0669287642683789,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": 0.04959273954567833,
      "cumulativeWealth": 3.1027103004834116,
      "drawdown": -0.020655205497176365,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.0049656162855369335,
      "cumulativeWealth": 3.087303431686028,
      "drawdown": -0.025518255957915348,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "netReturn": -0.022859378232974126,
      "cumulativeWealth": 3.0167295948211583,
      "drawdown": -0.047794302726101634,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014045959669886088,
      "cumulativeWealth": 1.014045959669886,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019343406201236535,
      "cumulativeWealth": 1.0336610625745035,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.003742068303463908,
      "cumulativeWealth": 1.0297930322757187,
      "drawdown": -0.003742068303463797,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.014442002043472124,
      "cumulativeWealth": 1.044665305352198,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02232019967157739,
      "cumulativeWealth": 1.0679824435576284,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00011910000550574562,
      "cumulativeWealth": 1.0678552468427207,
      "drawdown": -0.0001191000055056346,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02943490919373848,
      "cumulativeWealth": 1.036423024619848,
      "drawdown": -0.029550503501397096,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.002021772325223603,
      "cumulativeWealth": 1.038518436008249,
      "drawdown": -0.027588475566349135,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05679240511263117,
      "cumulativeWealth": 1.0974983957429656,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.03206975094036224,
      "cumulativeWealth": 1.0623018955340415,
      "drawdown": -0.03206975094036224,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.022045731438322447,
      "cumulativeWealth": 1.0388826732386771,
      "drawdown": -0.05340848126215969,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013531126126379744,
      "cumulativeWealth": 1.05293992572078,
      "drawdown": -0.04060003203195672,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01981738247117182,
      "cumulativeWealth": 1.073806438947956,
      "drawdown": -0.02158723592390399,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03478735326984883,
      "cumulativeWealth": 1.111161322883077,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011155341732587143,
      "cumulativeWealth": 1.1124008613107566,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02755286944444202,
      "cumulativeWealth": 1.1430506970123366,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005989387226719045,
      "cumulativeWealth": 1.1362045237681586,
      "drawdown": -0.005989387226719045,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014329292285982564,
      "cumulativeWealth": 1.1199235170504291,
      "drawdown": -0.020232855832515995,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014568656745805542,
      "cumulativeWealth": 1.1036077357489662,
      "drawdown": -0.034506747046710196,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.015245005359643238,
      "cumulativeWealth": 1.0867832299025295,
      "drawdown": -0.04922569686268241,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013317512304990231,
      "cumulativeWealth": 1.1012564789396135,
      "drawdown": -0.036563748381382655,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.008182258189135982,
      "cumulativeWealth": 1.1102672437827563,
      "drawdown": -0.02868066422186566,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03486934456289714,
      "cumulativeWealth": 1.1489815348631154,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.043028350757806866,
      "cumulativeWealth": 1.1984203153594488,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01566603617231621,
      "cumulativeWealth": 1.179645819349389,
      "drawdown": -0.01566603617231621,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.005575856536072843,
      "cumulativeWealth": 1.1862233552014594,
      "drawdown": -0.010177531206429169,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03221933182228098,
      "cumulativeWealth": 1.2244426790980347,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04889732426335569,
      "cumulativeWealth": 1.2843146498197833,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.014243027507237382,
      "cumulativeWealth": 1.2660221209344522,
      "drawdown": -0.014243027507237382,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012905741949408966,
      "cumulativeWealth": 1.2496831661394288,
      "drawdown": -0.026964952619059512,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020598381860506665,
      "cumulativeWealth": 1.2754246172002157,
      "drawdown": -0.006922005149450738,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009214335300784304,
      "cumulativeWealth": 1.2871768072739729,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028805624143548814,
      "cumulativeWealth": 1.3242547385906,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.009449198099416023,
      "cumulativeWealth": 1.336767883949633,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.01795257505479453,
      "cumulativeWealth": 1.3127694581821885,
      "drawdown": -0.01795257505479453,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05740343162699735,
      "cumulativeWealth": 1.38812693001696,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.042716403303505235,
      "cumulativeWealth": 1.4474227197960212,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.007522476624713725,
      "cumulativeWealth": 1.436534516220276,
      "drawdown": -0.007522476624713725,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0509641863505923,
      "cumulativeWealth": 1.509746329003984,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04153943474199373,
      "cumulativeWealth": 1.5724603381146096,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.050121245409574855,
      "cumulativeWealth": 1.4936466676111442,
      "drawdown": -0.050121245409574855,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.04615780771827516,
      "cumulativeWealth": 1.4247032119285066,
      "drawdown": -0.09396556631963437,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.050836134277925105,
      "cumulativeWealth": 1.4971296157162952,
      "drawdown": -0.047906278188635576,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03597771514037218,
      "cumulativeWealth": 1.550992918558751,
      "drawdown": -0.013652121478369472,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028939711448592975,
      "cumulativeWealth": 1.5958782060806522,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.020008276773665123,
      "cumulativeWealth": 1.6278089789249741,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01940545465614818,
      "cumulativeWealth": 1.6593973522543735,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.019799041907895498,
      "cumulativeWealth": 1.6922518299735085,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026417308876151013,
      "cumulativeWealth": 1.7369565692621505,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02094332727115278,
      "cumulativeWealth": 1.7733342191479864,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02175261316624444,
      "cumulativeWealth": 1.8119088724315766,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02584301471077155,
      "cumulativeWealth": 1.8587340600764033,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.018974493164033768,
      "cumulativeWealth": 1.8234655233597268,
      "drawdown": -0.018974493164033768,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.029799283428821655,
      "cumulativeWealth": 1.877803489313008,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.003502626703857592,
      "cumulativeWealth": 1.8843807339592726,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02536022902736801,
      "cumulativeWealth": 1.9321690609472397,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02082130633896495,
      "cumulativeWealth": 1.891938777030587,
      "drawdown": -0.02082130633896495,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005009620200106091,
      "cumulativeWealth": 1.8824608823158107,
      "drawdown": -0.02572661970224277,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.035151642322391874,
      "cumulativeWealth": 1.9486324739368703,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02402398517112614,
      "cumulativeWealth": 1.9954463915947045,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.025242040111833286,
      "cumulativeWealth": 1.945077253737058,
      "drawdown": -0.025242040111833286,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.010412017475435409,
      "cumulativeWealth": 1.9653294320940402,
      "drawdown": -0.015092843199157935,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.022024925766692904,
      "cumulativeWealth": 2.008615666943008,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.017322466858011865,
      "cumulativeWealth": 2.043409845264112,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03186860138461389,
      "cumulativeWealth": 2.1085304590882297,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.006637693059444061,
      "cumulativeWealth": 2.122526237082146,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.04835833624521635,
      "cumulativeWealth": 2.0198843996200337,
      "drawdown": -0.04835833624521635,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.06874494356812633,
      "cumulativeWealth": 1.8810275605540159,
      "drawdown": -0.11377888871711683,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02055837821829143,
      "cumulativeWealth": 1.9196984365829155,
      "drawdown": -0.09555961992632866,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03721020490601834,
      "cumulativeWealth": 1.9911308087659287,
      "drawdown": -0.0619052080585103,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00860316955410445,
      "cumulativeWealth": 2.0082608447181434,
      "drawdown": -0.0538346195056153,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.04209757232547395,
      "cumulativeWealth": 2.0928037508770827,
      "drawdown": -0.014003353968393362,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.006295888341991018,
      "cumulativeWealth": 2.0796276921398604,
      "drawdown": -0.020211078757386147,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.02310215172700203,
      "cumulativeWealth": 2.1276715666193504,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.013807611632075,
      "cumulativeWealth": 2.098293503946862,
      "drawdown": -0.01380761163207489,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.018847365861854648,
      "cumulativeWealth": 2.1378408093013013,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.0064714181159755135,
      "cumulativeWealth": 2.124005947558917,
      "drawdown": -0.0064714181159755135,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005450333904616911,
      "cumulativeWealth": 2.1124294059293285,
      "drawdown": -0.011886480631024043,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.009693002764379344,
      "cumulativeWealth": 2.0919536218580994,
      "drawdown": -0.02146426770578813,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.035993311273398554,
      "cumulativeWealth": 2.1672499597391517,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.026368066661895728,
      "cumulativeWealth": 2.2243961511505446,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.028417146654393877,
      "cumulativeWealth": 2.2876071427952587,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03986681479068732,
      "cumulativeWealth": 2.3788067530709305,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.008132093793391637,
      "cumulativeWealth": 2.3594620734386043,
      "drawdown": -0.008132093793391637,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.01462837061995459,
      "cumulativeWealth": 2.3939771591125907,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03381975030588791,
      "cumulativeWealth": 2.4749408688717773,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.005392126388451768,
      "cumulativeWealth": 2.4615956749028762,
      "drawdown": -0.005392126388451657,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.00947575257492228,
      "cumulativeWealth": 2.4382702033479977,
      "drawdown": -0.014816784507864278,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.012761059650631346,
      "cumulativeWealth": 2.4693851148572787,
      "drawdown": -0.0022448027281682936,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03728533128756273,
      "cumulativeWealth": 2.5614569569413086,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.03685324149606872,
      "cumulativeWealth": 2.655854948757252,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.029850425286460647,
      "cumulativeWealth": 2.7351333484768072,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0011277045868598456,
      "cumulativeWealth": 2.7382177708995576,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0027298595180456076,
      "cumulativeWealth": 2.7456927207439294,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.002675465257022114,
      "cumulativeWealth": 2.7383467152631207,
      "drawdown": -0.002675465257022114,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.030012175206627356,
      "cumulativeWealth": 2.6561629738681516,
      "drawdown": -0.032607343931596366,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.021511710926261585,
      "cumulativeWealth": 2.5990243638012607,
      "drawdown": -0.05341761510112819,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0223274710012078,
      "cumulativeWealth": 2.657054004915466,
      "drawdown": -0.03228282435204455,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.034123169084959715,
      "cumulativeWealth": 2.7477211079930655,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.018454789183105946,
      "cumulativeWealth": 2.798429721775048,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.07861174637938406,
      "cumulativeWealth": 3.0184191693237583,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05939822518410587,
      "cumulativeWealth": 3.1977079108432727,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.025710245793602704,
      "cumulativeWealth": 3.279921767207201,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.0029271890054409777,
      "cumulativeWealth": 3.2895227181428766,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06919301318114202,
      "cumulativeWealth": 3.517134706939003,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.05987905113619307,
      "cumulativeWealth": 3.727737395908683,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.02693178670034091,
      "cumulativeWealth": 3.6273427674871863,
      "drawdown": -0.0269317867003408,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.06367073954037705,
      "cumulativeWealth": 3.8582983640595336,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.08058147404462601,
      "cumulativeWealth": 4.16920573353942,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.013069675228768451,
      "cumulativeWealth": 4.2236958984387,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.12497220503163231,
      "cumulativeWealth": 3.6958513086277542,
      "drawdown": -0.12497220503163231,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": 0.00971029793332523,
      "cumulativeWealth": 3.7317391259518,
      "drawdown": -0.11647542444254877,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.012086443917870726,
      "cumulativeWealth": 3.6866356702898595,
      "drawdown": -0.12715409467508443,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "netReturn": -0.036441567936384645,
      "cumulativeWealth": 3.5522888860542925,
      "drawdown": -0.15896196803197749,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.021601858021278897,
      "cumulativeWealth": 1.021601858021279,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.007014724700336483,
      "cumulativeWealth": 1.0287681138086504,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008247759943822874,
      "cumulativeWealth": 1.0372531462492036,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01200630995966856,
      "cumulativeWealth": 1.049706729029713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01207537549057891,
      "cumulativeWealth": 1.0623823319377341,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009607365298092585,
      "cumulativeWealth": 1.0725890270868994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.01048863443074921,
      "cumulativeWealth": 1.061339032887352,
      "drawdown": -0.01048863443074921,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.006976293891756358,
      "cumulativeWealth": 1.0687432458995667,
      "drawdown": -0.003585512335304797,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05505053445465169,
      "cumulativeWealth": 1.1275781327811372,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.03538005909808217,
      "cumulativeWealth": 1.0876843518056354,
      "drawdown": -0.03538005909808217,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014242718653027064,
      "cumulativeWealth": 1.0721927695995677,
      "drawdown": -0.049118869523447684,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00979609933590564,
      "cumulativeWealth": 1.0826960764778049,
      "drawdown": -0.039803943512661144,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014610064682849755,
      "cumulativeWealth": 1.0985143361870133,
      "drawdown": -0.02577541701916375,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015791437043523482,
      "cumulativeWealth": 1.1158614561683184,
      "drawdown": -0.0103910108507691,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.004595400228710522,
      "cumulativeWealth": 1.1209892861592037,
      "drawdown": -0.0058433614756986385,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0257956770019665,
      "cumulativeWealth": 1.1499059637076314,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004828459525722528,
      "cumulativeWealth": 1.1443536893034822,
      "drawdown": -0.004828459525722417,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0255710953507724,
      "cumulativeWealth": 1.1150913119992947,
      "drawdown": -0.030276085877565362,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.005664136584137114,
      "cumulativeWealth": 1.108775282504346,
      "drawdown": -0.03576873457605889,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.01517429493053446,
      "cumulativeWealth": 1.0919503993559383,
      "drawdown": -0.050400264178844245,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016396429263400458,
      "cumulativeWealth": 1.1098544868381197,
      "drawdown": -0.03483021928190899,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.005169019283789877,
      "cumulativeWealth": 1.1155913460827867,
      "drawdown": -0.029841238073246013,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0258333593483846,
      "cumulativeWealth": 1.1444108182120913,
      "drawdown": -0.004778778151408258,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029803026208090833,
      "cumulativeWealth": 1.178517723820089,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.026311037031546025,
      "cumulativeWealth": 1.1475097003463253,
      "drawdown": -0.026311037031546025,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01953752329002323,
      "cumulativeWealth": 1.1699291978423692,
      "drawdown": -0.0072875662403113495,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018525552095869813,
      "cumulativeWealth": 1.191602782145477,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03960180536918201,
      "cumulativeWealth": 1.238792403601378,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010707749712783987,
      "cumulativeWealth": 1.2255277245975162,
      "drawdown": -0.010707749712784098,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.001407898403519292,
      "cumulativeWealth": 1.2272531431244458,
      "drawdown": -0.009314926732990614,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.014532529472490952,
      "cumulativeWealth": 1.245088235597109,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01800301683112271,
      "cumulativeWealth": 1.2675035800587966,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0152445389812359,
      "cumulativeWealth": 1.2868260877938589,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.000856258994512249,
      "cumulativeWealth": 1.2857242313818125,
      "drawdown": -0.0008562589945121379,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.020356618198368093,
      "cumulativeWealth": 1.2595512340951827,
      "drawdown": -0.021195446655450034,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05887435355947934,
      "cumulativeWealth": 1.333706498777581,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0319215221188387,
      "cumulativeWealth": 1.3762804402783486,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.008493906158466347,
      "cumulativeWealth": 1.3879704371858057,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.054595474524140375,
      "cumulativeWealth": 1.4637473418294433,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.04238176112455405,
      "cumulativeWealth": 1.5257835320175597,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.040874678143352106,
      "cumulativeWealth": 1.463417621229915,
      "drawdown": -0.040874678143352106,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.031938033292839396,
      "cumulativeWealth": 1.4166789405217461,
      "drawdown": -0.071507254604815,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.06255478313282103,
      "cumulativeWealth": 1.5052989844149187,
      "drawdown": -0.013425592276221532,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.044248070191437616,
      "cumulativeWealth": 1.5719055595364098,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016737657791398686,
      "cumulativeWealth": 1.5982155768723272,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.016664597336542908,
      "cumulativeWealth": 1.6248491959178952,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.015500600109730867,
      "cumulativeWealth": 1.6500353335424363,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029024123764206156,
      "cumulativeWealth": 1.697926163278485,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.021209058203674136,
      "cumulativeWealth": 1.7339375781009996,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01518355628169954,
      "cumulativeWealth": 1.76026491690705,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01590554926076737,
      "cumulativeWealth": 1.7882628972549155,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.018376880098504245,
      "cumulativeWealth": 1.8211255901023728,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029694193260734192,
      "cumulativeWealth": 1.7670487348778043,
      "drawdown": -0.029694193260734192,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03675162309826829,
      "cumulativeWealth": 1.8319906439783051,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.006634631822746817,
      "cumulativeWealth": 1.8198360605527923,
      "drawdown": -0.006634631822746706,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025456558390590134,
      "cumulativeWealth": 1.866162823489556,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.028283641751940647,
      "cumulativeWealth": 1.8133809427391874,
      "drawdown": -0.028283641751940647,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00106771652200488,
      "cumulativeWealth": 1.811444765945936,
      "drawdown": -0.029321159362344473,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02767568812650345,
      "cumulativeWealth": 1.8615777463466427,
      "drawdown": -0.002456954497860764,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005171520477713631,
      "cumulativeWealth": 1.8625404650902515,
      "drawdown": -0.0019410730691392653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013569411125051611,
      "cumulativeWealth": 1.837266887782397,
      "drawdown": -0.01548414497569195,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.007925536939938804,
      "cumulativeWealth": 1.8227055611947511,
      "drawdown": -0.023286961752642665,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01883461306632861,
      "cumulativeWealth": 1.8570355151736997,
      "drawdown": -0.004890949600415362,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0008270252531840105,
      "cumulativeWealth": 1.8554996999065914,
      "drawdown": -0.0057139299147678235,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00015948476755356378,
      "cumulativeWealth": 1.855203775968256,
      "drawdown": -0.005872503397537199,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.009436387088800569,
      "cumulativeWealth": 1.8727101969268969,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.014005920776672398,
      "cumulativeWealth": 1.8464811662710723,
      "drawdown": -0.014005920776672398,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0444529652723179,
      "cumulativeWealth": 1.7643996031108353,
      "drawdown": -0.05783628133909802,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03224819677449031,
      "cumulativeWealth": 1.8212983087007861,
      "drawdown": -0.02745320034593568,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0027818636746654857,
      "cumulativeWealth": 1.8263649123064905,
      "drawdown": -0.024747707732065916,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01690222266385577,
      "cumulativeWealth": 1.8572345387197482,
      "drawdown": -0.008263776334717532,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025058773405204127,
      "cumulativeWealth": 1.9037745581858452,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00011382752668809282,
      "cumulativeWealth": 1.9039912601351752,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.022372919896763488,
      "cumulativeWealth": 1.9465891040823171,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.003263253570118918,
      "cumulativeWealth": 1.9529413179257684,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0005273801358598451,
      "cumulativeWealth": 1.9539712603833423,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.015271937017579895,
      "cumulativeWealth": 1.9241303343606067,
      "drawdown": -0.015271937017579895,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00575455040416839,
      "cumulativeWealth": 1.9130578293673393,
      "drawdown": -0.020938604290411278,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01301852717905061,
      "cumulativeWealth": 1.9379630247140536,
      "drawdown": -0.008192666900406764,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03994393271025398,
      "cumulativeWealth": 2.015372889368192,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0071237413429998675,
      "cumulativeWealth": 2.0297298845417453,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.025589780394357442,
      "cumulativeWealth": 2.081670226547033,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.033279572939973745,
      "cumulativeWealth": 2.150947322688377,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.021152920235652517,
      "cumulativeWealth": 2.1054485055404593,
      "drawdown": -0.021152920235652517,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.017961430919120724,
      "cumulativeWealth": 2.14326537342649,
      "drawdown": -0.003571426032082159,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.029349928249405632,
      "cumulativeWealth": 2.206170058355993,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0012611044808006344,
      "cumulativeWealth": 2.208952269301994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0032962640424174516,
      "cumulativeWealth": 2.216233559238711,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01925142530985502,
      "cumulativeWealth": 2.258899214073589,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.013132945226528525,
      "cumulativeWealth": 2.288565213724266,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.031088099215076825,
      "cumulativeWealth": 2.3597123561486995,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.003562227399824369,
      "cumulativeWealth": 2.3681181881594764,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.00988156515749683,
      "cumulativeWealth": 2.3915189023364274,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.00040025343237060085,
      "cumulativeWealth": 2.390561688687188,
      "drawdown": -0.00040025343237060085,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.010431899450196958,
      "cumulativeWealth": 2.3656235895213102,
      "drawdown": -0.010827977479006434,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.013849696836316094,
      "cumulativeWealth": 2.332860419977602,
      "drawdown": -0.024527710109887857,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0026903667038111756,
      "cumulativeWealth": 2.3265841699790557,
      "drawdown": -0.027152088279098652,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.03034757652074971,
      "cumulativeWealth": 2.3971903611094603,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.01782494092127629,
      "cumulativeWealth": 2.4399201376732895,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.020811105849307232,
      "cumulativeWealth": 2.4906975739222648,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.0711190841819791,
      "cumulativeWealth": 2.6678337043538933,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05137459841976488,
      "cumulativeWealth": 2.8048925895657884,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.012334711755473071,
      "cumulativeWealth": 2.839490131163145,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.010897599791211743,
      "cumulativeWealth": 2.870433758223656,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07233920276423622,
      "cumulativeWealth": 3.0780786478811057,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.05830125884398596,
      "cumulativeWealth": 3.2575345078733684,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.0502075720622468,
      "cumulativeWealth": 3.0939816093240604,
      "drawdown": -0.05020757206224691,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07408961112525758,
      "cumulativeWealth": 3.3232135035875787,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.07262417229727847,
      "cumulativeWealth": 3.5645591336527653,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.004646296495616653,
      "cumulativeWealth": 3.547997135041656,
      "drawdown": -0.004646296495616653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.08572334825838435,
      "cumulativeWealth": 3.2438509410147303,
      "drawdown": -0.08997134866139556,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": 0.02933129537308976,
      "cumulativeWealth": 3.3389972911119083,
      "drawdown": -0.0632790294910085,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.008810633301604476,
      "cumulativeWealth": 3.309578610384871,
      "drawdown": -0.07153213446808626,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "netReturn": -0.029889700590711055,
      "cumulativeWealth": 3.2106562966390455,
      "drawdown": -0.0992837609769317,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-04",
      "holdingMonth": "2017-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.021601858021278897,
      "cumulativeWealth": 1.021601858021279,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-05",
      "holdingMonth": "2017-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.007014724700336483,
      "cumulativeWealth": 1.0287681138086504,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-06",
      "holdingMonth": "2017-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.008247759943822874,
      "cumulativeWealth": 1.0372531462492036,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-07",
      "holdingMonth": "2017-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01200630995966856,
      "cumulativeWealth": 1.049706729029713,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-08",
      "holdingMonth": "2017-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01207537549057891,
      "cumulativeWealth": 1.0623823319377341,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-09",
      "holdingMonth": "2017-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.009607365298092585,
      "cumulativeWealth": 1.0725890270868994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-10",
      "holdingMonth": "2017-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.01048863443074921,
      "cumulativeWealth": 1.061339032887352,
      "drawdown": -0.01048863443074921,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-11",
      "holdingMonth": "2017-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005501481673324538,
      "cumulativeWealth": 1.0619229266112133,
      "drawdown": -0.009944256566426612,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2017-12",
      "holdingMonth": "2018-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05644796487349946,
      "cumulativeWealth": 1.121866314670927,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-01",
      "holdingMonth": "2018-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.03273158162281431,
      "cumulativeWealth": 1.0851458558223896,
      "drawdown": -0.0327315816228142,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-02",
      "holdingMonth": "2018-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020478046816862272,
      "cumulativeWealth": 1.0629241881837346,
      "drawdown": -0.052539349578814676,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-03",
      "holdingMonth": "2018-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012791762370983228,
      "cumulativeWealth": 1.0765208618173512,
      "drawdown": -0.040419658082769594,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-04",
      "holdingMonth": "2018-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01877636520067072,
      "cumulativeWealth": 1.0967340106649746,
      "drawdown": -0.022402227143547226,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-05",
      "holdingMonth": "2018-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03098742034838975,
      "cumulativeWealth": 1.1307189684638255,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-06",
      "holdingMonth": "2018-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0037572352562944555,
      "cumulativeWealth": 1.1349673456370986,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-07",
      "holdingMonth": "2018-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0257956770019665,
      "cumulativeWealth": 1.1642445966929325,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-08",
      "holdingMonth": "2018-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004828459525722528,
      "cumulativeWealth": 1.1586230887797595,
      "drawdown": -0.004828459525722528,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-09",
      "holdingMonth": "2018-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0255710953507724,
      "cumulativeWealth": 1.128995827300966,
      "drawdown": -0.03027608587756525,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-10",
      "holdingMonth": "2018-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005664136584137114,
      "cumulativeWealth": 1.1226010407322125,
      "drawdown": -0.03576873457605867,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-11",
      "holdingMonth": "2018-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.01517429493053446,
      "cumulativeWealth": 1.1055663614508169,
      "drawdown": -0.05040026417884402,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2018-12",
      "holdingMonth": "2019-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016396429263400458,
      "cumulativeWealth": 1.1236937020923403,
      "drawdown": -0.03483021928190866,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-01",
      "holdingMonth": "2019-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.005169019283789877,
      "cumulativeWealth": 1.1295020965075289,
      "drawdown": -0.02984123807324557,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-02",
      "holdingMonth": "2019-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0258333593483846,
      "cumulativeWealth": 1.1586809300513616,
      "drawdown": -0.004778778151407814,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-03",
      "holdingMonth": "2019-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029803026208090833,
      "cumulativeWealth": 1.1932131281764975,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-04",
      "holdingMonth": "2019-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.026311037031546025,
      "cumulativeWealth": 1.1618184533745188,
      "drawdown": -0.026311037031546025,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-05",
      "holdingMonth": "2019-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01953752329002323,
      "cumulativeWealth": 1.1845175084661022,
      "drawdown": -0.0072875662403113495,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-06",
      "holdingMonth": "2019-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018525552095869813,
      "cumulativeWealth": 1.2064613492776608,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-07",
      "holdingMonth": "2019-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03960180536918201,
      "cumulativeWealth": 1.2542393968171954,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-08",
      "holdingMonth": "2019-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010707749712783987,
      "cumulativeWealth": 1.2408093152761637,
      "drawdown": -0.010707749712784098,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-09",
      "holdingMonth": "2019-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.001407898403519292,
      "cumulativeWealth": 1.2425562487302129,
      "drawdown": -0.009314926732990614,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-10",
      "holdingMonth": "2019-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.014532529472490952,
      "cumulativeWealth": 1.2606137340361125,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-11",
      "holdingMonth": "2019-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01800301683112271,
      "cumulativeWealth": 1.2833085843075092,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2019-12",
      "holdingMonth": "2020-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0152445389812359,
      "cumulativeWealth": 1.3028720320459397,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-01",
      "holdingMonth": "2020-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.000856258994512249,
      "cumulativeWealth": 1.301756436149802,
      "drawdown": -0.000856258994512249,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-02",
      "holdingMonth": "2020-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.020356618198368093,
      "cumulativeWealth": 1.2752570773918321,
      "drawdown": -0.021195446655450034,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-03",
      "holdingMonth": "2020-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05887435355947934,
      "cumulativeWealth": 1.3503370134454271,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-04",
      "holdingMonth": "2020-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0319215221188387,
      "cumulativeWealth": 1.393441826288012,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-05",
      "holdingMonth": "2020-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01648714075715807,
      "cumulativeWealth": 1.4164156978149338,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-06",
      "holdingMonth": "2020-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05378977460123946,
      "cumulativeWealth": 1.4926043789420564,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-07",
      "holdingMonth": "2020-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.04238176112455405,
      "cumulativeWealth": 1.555863581183842,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-08",
      "holdingMonth": "2020-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.040874678143352106,
      "cumulativeWealth": 1.4922681580679893,
      "drawdown": -0.040874678143352106,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-09",
      "holdingMonth": "2020-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.031938033292839396,
      "cumulativeWealth": 1.4446080479537697,
      "drawdown": -0.071507254604815,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-10",
      "holdingMonth": "2020-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.06255478313282103,
      "cumulativeWealth": 1.5349751911054457,
      "drawdown": -0.013425592276221643,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-11",
      "holdingMonth": "2020-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03604776782000774,
      "cumulativeWealth": 1.5903076204038868,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2020-12",
      "holdingMonth": "2021-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.026501738584197687,
      "cumulativeWealth": 1.6324535372282882,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-01",
      "holdingMonth": "2021-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019343738143971834,
      "cumulativeWealth": 1.6640312909846329,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-02",
      "holdingMonth": "2021-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01862404875133361,
      "cumulativeWealth": 1.6950222908716752,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-03",
      "holdingMonth": "2021-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029337653853264367,
      "cumulativeWealth": 1.7447502681148357,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020281347210307388,
      "cumulativeWealth": 1.7801361540977496,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.019799570890127294,
      "cumulativeWealth": 1.8153820860748866,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01690705016686267,
      "cumulativeWealth": 1.8460748420761786,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.018376880098504245,
      "cumulativeWealth": 1.8799999381018777,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029694193260734192,
      "cumulativeWealth": 1.8241748566097122,
      "drawdown": -0.029694193260734192,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03675162309826829,
      "cumulativeWealth": 1.89121624340517,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.006634631822746817,
      "cumulativeWealth": 1.8786687199329783,
      "drawdown": -0.006634631822746817,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025456558390590134,
      "cumulativeWealth": 1.9264931598985275,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.028283641751940647,
      "cumulativeWealth": 1.8720049175263935,
      "drawdown": -0.028283641751940647,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00106771652200488,
      "cumulativeWealth": 1.8700061469466762,
      "drawdown": -0.029321159362344473,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.02767568812650345,
      "cumulativeWealth": 1.9217598538642169,
      "drawdown": -0.002456954497860764,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005171520477713631,
      "cumulativeWealth": 1.9227536959079676,
      "drawdown": -0.0019410730691391542,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005900435482661837,
      "cumulativeWealth": 1.911408611776213,
      "drawdown": -0.0078300553753895,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.009573750878496434,
      "cumulativeWealth": 1.893109261900055,
      "drawdown": -0.017328843254357018,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.016283419700565016,
      "cumulativeWealth": 1.9239355545506003,
      "drawdown": -0.0013275963814280978,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015272718214865866,
      "cumulativeWealth": 1.8945518289623873,
      "drawdown": -0.016580038590857327,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025677940508330943,
      "cumulativeWealth": 1.8459036398083415,
      "drawdown": -0.04183223785462642,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.011624571741776668,
      "cumulativeWealth": 1.8673614790977002,
      "drawdown": -0.030693947962909918,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013415297630790857,
      "cumulativeWealth": 1.8924126891240698,
      "drawdown": -0.0176904187795055,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.025716380983913156,
      "cumulativeWealth": 1.8437466834317635,
      "drawdown": -0.0429518662143199,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029056599055967913,
      "cumulativeWealth": 1.8973196915730108,
      "drawdown": -0.015143302313647133,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0027818636746654857,
      "cumulativeWealth": 1.9025977763022253,
      "drawdown": -0.012403565241602466,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01690222266385577,
      "cumulativeWealth": 1.9347559075570424,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025058773405204127,
      "cumulativeWealth": 1.9832385174388945,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.00011382752668809282,
      "cumulativeWealth": 1.9834642645741671,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.022372919896763488,
      "cumulativeWealth": 2.027840151683578,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003263253570118918,
      "cumulativeWealth": 2.03445750829819,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0005273801358598451,
      "cumulativeWealth": 2.035530440775317,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.015271937017579895,
      "cumulativeWealth": 2.00444394808643,
      "drawdown": -0.015271937017579895,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.00575455040416839,
      "cumulativeWealth": 1.9929092743548364,
      "drawdown": -0.020938604290411278,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01301852717905061,
      "cumulativeWealth": 2.018854017908407,
      "drawdown": -0.008192666900406764,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03994393271025398,
      "cumulativeWealth": 2.0994949869515662,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0071237413429998675,
      "cumulativeWealth": 2.114451246189534,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.025589780394357442,
      "cumulativeWealth": 2.1685595892340994,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.033279572939973745,
      "cumulativeWealth": 2.240728326258695,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.021152920235652517,
      "cumulativeWealth": 2.193330378703578,
      "drawdown": -0.021152920235652406,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.017961430919120724,
      "cumulativeWealth": 2.232725730783471,
      "drawdown": -0.003571426032082159,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.029349928249405632,
      "cumulativeWealth": 2.2982560707825677,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0012611044808006344,
      "cumulativeWealth": 2.3011544118114586,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0032962640424174516,
      "cumulativeWealth": 2.3087396243551632,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01925142530985502,
      "cumulativeWealth": 2.3531861527933393,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.013132945226528525,
      "cumulativeWealth": 2.3840904176457998,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.031088099215076825,
      "cumulativeWealth": 2.4582072570872864,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.003562227399824369,
      "cumulativeWealth": 2.46696395033293,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01850736364076755,
      "cumulativeWealth": 2.512620949250406,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004535445798190874,
      "cumulativeWealth": 2.501225093123682,
      "drawdown": -0.004535445798190874,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.010431899450196958,
      "cumulativeWealth": 2.4751325644499063,
      "drawdown": -0.014920031933859157,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.001448460718325828,
      "cumulativeWealth": 2.4715474321576516,
      "drawdown": -0.016346881572012584,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.005817353371944223,
      "cumulativeWealth": 2.4571695673692693,
      "drawdown": -0.02206913935732313,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.03034757652074971,
      "cumulativeWealth": 2.5317387088394656,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.01782494092127629,
      "cumulativeWealth": 2.5768668017526375,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.020811105849307232,
      "cumulativeWealth": 2.6304942495234775,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.0711190841819791,
      "cumulativeWealth": 2.8175725914955496,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05137459841976488,
      "cumulativeWealth": 2.9623242519021695,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.012334711755473071,
      "cumulativeWealth": 2.9988636676756304,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.010897599791211743,
      "cumulativeWealth": 3.031544083754365,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07233920276423622,
      "cumulativeWealth": 3.2508435659177928,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.05830125884398596,
      "cumulativeWealth": 3.4403718381156723,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.0502075720622468,
      "cumulativeWealth": 3.267639121132555,
      "drawdown": -0.0502075720622468,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07408961112525758,
      "cumulativeWealth": 3.5097372329149445,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.07262417229727847,
      "cumulativeWealth": 3.764628994436333,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.004646296495616653,
      "cumulativeWealth": 3.7471374119321865,
      "drawdown": -0.004646296495616653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.05362582621617029,
      "cumulativeWealth": 3.546194072271801,
      "drawdown": -0.058022961223364256,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": 0.027129890881292695,
      "cumulativeWealth": 3.6424019304964217,
      "drawdown": -0.03246722694867088,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.008810633301604476,
      "cumulativeWealth": 3.6103100627497615,
      "drawdown": -0.040991803419310635,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "netReturn": -0.029889700590711055,
      "cumulativeWealth": 3.5023989759345397,
      "drawdown": -0.06965627127914531,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020281347210307388,
      "cumulativeWealth": 1.0202813472103074,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.019799570890127294,
      "cumulativeWealth": 1.0404824800722725,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01690705016686267,
      "cumulativeWealth": 1.058073969560596,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.018376880098504245,
      "cumulativeWealth": 1.0775180680345595,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029694193260734192,
      "cumulativeWealth": 1.0455220382804085,
      "drawdown": -0.02969419326073408,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03675162309826829,
      "cumulativeWealth": 1.0839466701722233,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.006634631822746817,
      "cumulativeWealth": 1.0767550831001382,
      "drawdown": -0.006634631822746817,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025456558390590134,
      "cumulativeWealth": 1.1041655617454416,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.028283641751940647,
      "cumulativeWealth": 1.0729357385622031,
      "drawdown": -0.028283641751940647,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.00106771652200488,
      "cumulativeWealth": 1.0717901473470908,
      "drawdown": -0.029321159362344584,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.02767568812650345,
      "cumulativeWealth": 1.101452677202128,
      "drawdown": -0.002456954497860875,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005171520477713631,
      "cumulativeWealth": 1.1020222957096664,
      "drawdown": -0.0019410730691393763,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005900435482661837,
      "cumulativeWealth": 1.0955198842533767,
      "drawdown": -0.0078300553753895,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.009573750878496434,
      "cumulativeWealth": 1.0850316497990955,
      "drawdown": -0.01732884325435724,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.016283419700565016,
      "cumulativeWealth": 1.1026996755411707,
      "drawdown": -0.0013275963814282088,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015272718214865866,
      "cumulativeWealth": 1.0858584541210063,
      "drawdown": -0.016580038590857438,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025677940508330943,
      "cumulativeWealth": 1.057975845335619,
      "drawdown": -0.04183223785462653,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.011624571741776668,
      "cumulativeWealth": 1.0702743614507897,
      "drawdown": -0.03069394796291003,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013415297630790857,
      "cumulativeWealth": 1.0846324105562566,
      "drawdown": -0.017690418779505612,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.025716380983913156,
      "cumulativeWealth": 1.0567395902588919,
      "drawdown": -0.04295186621432001,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.029056599055967913,
      "cumulativeWealth": 1.0874448488396122,
      "drawdown": -0.015143302313647244,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0027818636746654857,
      "cumulativeWealth": 1.0904699721628013,
      "drawdown": -0.012403565241602466,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01690222266385577,
      "cumulativeWealth": 1.1089013384405455,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025058773405204127,
      "cumulativeWealth": 1.1366890458092547,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.00011382752668809282,
      "cumulativeWealth": 1.1368184323119526,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.022372919896763488,
      "cumulativeWealth": 1.1622523800352322,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.003263253570118918,
      "cumulativeWealth": 1.1660451042637614,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0005273801358598451,
      "cumulativeWealth": 1.1666600532892668,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.015271937017579895,
      "cumulativeWealth": 1.1488428944345068,
      "drawdown": -0.015271937017579784,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.00575455040416839,
      "cumulativeWealth": 1.1422318200920127,
      "drawdown": -0.020938604290411278,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01301852717905061,
      "cumulativeWealth": 1.157101996086657,
      "drawdown": -0.008192666900406764,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03994393271025398,
      "cumulativeWealth": 1.203321200357243,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0071237413429998675,
      "cumulativeWealth": 1.2118933493411361,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.025589780394357442,
      "cumulativeWealth": 1.2429054340121581,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.033279572939973745,
      "cumulativeWealth": 1.2842687960608554,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.021152920235652517,
      "cumulativeWealth": 1.2571027606566427,
      "drawdown": -0.021152920235652517,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.017961430919120724,
      "cumulativeWealth": 1.279682125050413,
      "drawdown": -0.003571426032082159,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.029349928249405632,
      "cumulativeWealth": 1.3172407036026894,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0012611044808006344,
      "cumulativeWealth": 1.3189018817562956,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0032962640424174516,
      "cumulativeWealth": 1.3232493306046056,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01925142530985502,
      "cumulativeWealth": 1.3487237662590559,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.013132945226528525,
      "cumulativeWealth": 1.3664364816070533,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.031088099215076825,
      "cumulativeWealth": 1.4089163945183538,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.003562227399824369,
      "cumulativeWealth": 1.4139352751029688,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01850736364076755,
      "cumulativeWealth": 1.440103489403808,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004535445798190874,
      "cumulativeWealth": 1.4335719780838316,
      "drawdown": -0.0045354457981907625,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.010431899450196958,
      "cumulativeWealth": 1.4186170993538412,
      "drawdown": -0.014920031933859157,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.001448460718325828,
      "cumulativeWealth": 1.4165622882110818,
      "drawdown": -0.016346881572012695,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.005817353371944223,
      "cumulativeWealth": 1.408321644807188,
      "drawdown": -0.02206913935732313,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.03034757652074971,
      "cumulativeWealth": 1.4510607936888023,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.01782494092127629,
      "cumulativeWealth": 1.4769258666094853,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.020811105849307232,
      "cumulativeWealth": 1.5076623271510752,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.0711190841819791,
      "cumulativeWealth": 1.614885891113731,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.05137459841976488,
      "cumulativeWealth": 1.697850005263443,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.012334711755473071,
      "cumulativeWealth": 1.7187924956823961,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.010897599791211743,
      "cumulativeWealth": 1.737523208424481,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07233920276423622,
      "cumulativeWealth": 1.8632142521062658,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.05830125884398596,
      "cumulativeWealth": 1.9718419885001168,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.0502075720622468,
      "cumulativeWealth": 1.8728405897671332,
      "drawdown": -0.0502075720622468,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07408961112525758,
      "cumulativeWealth": 2.011598620762578,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.07262417229727847,
      "cumulativeWealth": 2.157689305589807,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.004646296495616653,
      "cumulativeWealth": 2.1476640413306156,
      "drawdown": -0.004646296495616764,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.05362582621617029,
      "cumulativeWealth": 2.032493782679502,
      "drawdown": -0.058022961223364145,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": 0.027129890881292695,
      "cumulativeWealth": 2.0876351172205028,
      "drawdown": -0.03246722694867088,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.008810633301604476,
      "cumulativeWealth": 2.0692417297351207,
      "drawdown": -0.040991803419310746,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "netReturn": -0.029889700590711055,
      "cumulativeWealth": 2.007392713983533,
      "drawdown": -0.06965627127914531,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-04",
      "holdingMonth": "2021-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.020281347210307388,
      "cumulativeWealth": 1.0202813472103074,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-05",
      "holdingMonth": "2021-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01979957089012707,
      "cumulativeWealth": 1.0404824800722723,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-06",
      "holdingMonth": "2021-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016907050166862225,
      "cumulativeWealth": 1.0580739695605954,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-07",
      "holdingMonth": "2021-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01837688009850469,
      "cumulativeWealth": 1.0775180680345593,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-08",
      "holdingMonth": "2021-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.029694193260733748,
      "cumulativeWealth": 1.0455220382804087,
      "drawdown": -0.029694193260733748,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-09",
      "holdingMonth": "2021-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03675162309826807,
      "cumulativeWealth": 1.0839466701722233,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-10",
      "holdingMonth": "2021-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.006634631822747372,
      "cumulativeWealth": 1.0767550831001376,
      "drawdown": -0.006634631822747483,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-11",
      "holdingMonth": "2021-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025456558390590134,
      "cumulativeWealth": 1.104165561745441,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2021-12",
      "holdingMonth": "2022-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.02828364175194087,
      "cumulativeWealth": 1.0729357385622023,
      "drawdown": -0.02828364175194087,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-01",
      "holdingMonth": "2022-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.001067716522004436,
      "cumulativeWealth": 1.0717901473470903,
      "drawdown": -0.029321159362344362,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-02",
      "holdingMonth": "2022-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.027675688126502784,
      "cumulativeWealth": 1.101452677202127,
      "drawdown": -0.002456954497861319,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-03",
      "holdingMonth": "2022-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005171520477713631,
      "cumulativeWealth": 1.1020222957096653,
      "drawdown": -0.0019410730691397093,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-04",
      "holdingMonth": "2022-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005900435482661948,
      "cumulativeWealth": 1.0955198842533753,
      "drawdown": -0.007830055375390166,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-05",
      "holdingMonth": "2022-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.009573750878496656,
      "cumulativeWealth": 1.085031649799094,
      "drawdown": -0.017328843254358017,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-06",
      "holdingMonth": "2022-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016283419700565016,
      "cumulativeWealth": 1.102699675541169,
      "drawdown": -0.001327596381428986,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-07",
      "holdingMonth": "2022-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.015272718214865644,
      "cumulativeWealth": 1.085858454121005,
      "drawdown": -0.016580038590858104,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-08",
      "holdingMonth": "2022-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.025677940508331387,
      "cumulativeWealth": 1.0579758453356172,
      "drawdown": -0.04183223785462753,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-09",
      "holdingMonth": "2022-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01162457174177689,
      "cumulativeWealth": 1.0702743614507881,
      "drawdown": -0.030693947962910806,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-10",
      "holdingMonth": "2022-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013415297630789969,
      "cumulativeWealth": 1.0846324105562541,
      "drawdown": -0.017690418779507278,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-11",
      "holdingMonth": "2022-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.025716380983912712,
      "cumulativeWealth": 1.0567395902588899,
      "drawdown": -0.04295186621432123,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2022-12",
      "holdingMonth": "2023-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.029056599055968135,
      "cumulativeWealth": 1.0874448488396105,
      "drawdown": -0.015143302313648244,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-01",
      "holdingMonth": "2023-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0027818636746652636,
      "cumulativeWealth": 1.0904699721627993,
      "drawdown": -0.012403565241603687,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-02",
      "holdingMonth": "2023-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.016902222663856215,
      "cumulativeWealth": 1.108901338440544,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-03",
      "holdingMonth": "2023-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025058773405204127,
      "cumulativeWealth": 1.1366890458092531,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-04",
      "holdingMonth": "2023-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.00011382752668787077,
      "cumulativeWealth": 1.1368184323119508,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-05",
      "holdingMonth": "2023-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.022372919896763932,
      "cumulativeWealth": 1.162252380035231,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-06",
      "holdingMonth": "2023-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.003263253570118696,
      "cumulativeWealth": 1.1660451042637598,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-07",
      "holdingMonth": "2023-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0005273801358602892,
      "cumulativeWealth": 1.1666600532892657,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-08",
      "holdingMonth": "2023-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.015271937017580117,
      "cumulativeWealth": 1.1488428944345053,
      "drawdown": -0.015271937017580228,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-09",
      "holdingMonth": "2023-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005754550404168279,
      "cumulativeWealth": 1.1422318200920114,
      "drawdown": -0.0209386042904115,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-10",
      "holdingMonth": "2023-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.013018527179051498,
      "cumulativeWealth": 1.1571019960866566,
      "drawdown": -0.00819266690040621,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-11",
      "holdingMonth": "2023-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03994393271025376,
      "cumulativeWealth": 1.2033212003572424,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2023-12",
      "holdingMonth": "2024-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0071237413429998675,
      "cumulativeWealth": 1.2118933493411355,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-01",
      "holdingMonth": "2024-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.025589780394356998,
      "cumulativeWealth": 1.2429054340121568,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-02",
      "holdingMonth": "2024-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03327957293997397,
      "cumulativeWealth": 1.2842687960608543,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-03",
      "holdingMonth": "2024-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.021152920235652628,
      "cumulativeWealth": 1.2571027606566414,
      "drawdown": -0.021152920235652628,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-04",
      "holdingMonth": "2024-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017961430919120502,
      "cumulativeWealth": 1.2796821250504113,
      "drawdown": -0.003571426032082492,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-05",
      "holdingMonth": "2024-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.029349928249406076,
      "cumulativeWealth": 1.3172407036026885,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-06",
      "holdingMonth": "2024-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0012611044808015226,
      "cumulativeWealth": 1.318901881756296,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-07",
      "holdingMonth": "2024-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.0032962640424176737,
      "cumulativeWealth": 1.3232493306046063,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-08",
      "holdingMonth": "2024-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.019251425309854797,
      "cumulativeWealth": 1.348723766259056,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-09",
      "holdingMonth": "2024-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.015913589868724376,
      "cumulativeWealth": 1.370186803121504,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-10",
      "holdingMonth": "2024-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.03005417185200976,
      "cumulativeWealth": 1.4113666327718737,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-11",
      "holdingMonth": "2024-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.003562227399824147,
      "cumulativeWealth": 1.4163942416623312,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2024-12",
      "holdingMonth": "2025-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.018507363640767327,
      "cumulativeWealth": 1.442607964951465,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-01",
      "holdingMonth": "2025-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0045354457981906515,
      "cumulativeWealth": 1.4360650947183895,
      "drawdown": -0.0045354457981906515,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-02",
      "holdingMonth": "2025-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.01043189945019718,
      "cumulativeWealth": 1.4210842080463493,
      "drawdown": -0.014920031933859268,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-03",
      "holdingMonth": "2025-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.0014484607183267162,
      "cumulativeWealth": 1.4190258233935598,
      "drawdown": -0.016346881572013583,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-04",
      "holdingMonth": "2025-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.005817353371944334,
      "cumulativeWealth": 1.410770848734965,
      "drawdown": -0.02206913935732424,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-05",
      "holdingMonth": "2025-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.030347576520749486,
      "cumulativeWealth": 1.453584325020192,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-06",
      "holdingMonth": "2025-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.017824940921275845,
      "cumulativeWealth": 1.4794943797377695,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-07",
      "holdingMonth": "2025-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02081110584930701,
      "cumulativeWealth": 1.510284293877947,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-08",
      "holdingMonth": "2025-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07111908418197888,
      "cumulativeWealth": 1.6176943297129733,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-09",
      "holdingMonth": "2025-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05137459841976444,
      "cumulativeWealth": 1.7008027262679073,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-10",
      "holdingMonth": "2025-11",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01233471175547285,
      "cumulativeWealth": 1.7217816376493442,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-11",
      "holdingMonth": "2025-12",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.01089759979121152,
      "cumulativeWealth": 1.7405449248643035,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2025-12",
      "holdingMonth": "2026-01",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07233920276423622,
      "cumulativeWealth": 1.8664545571043245,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-01",
      "holdingMonth": "2026-02",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.05830125884398596,
      "cumulativeWealth": 1.975271207358601,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-02",
      "holdingMonth": "2026-03",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.05020757206224691,
      "cumulativeWealth": 1.8760976358726627,
      "drawdown": -0.05020757206224691,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-03",
      "holdingMonth": "2026-04",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07408961112525758,
      "cumulativeWealth": 2.0150969801474834,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-04",
      "holdingMonth": "2026-05",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.07262417229727891,
      "cumulativeWealth": 2.1614417304294404,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-05",
      "holdingMonth": "2026-06",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.010507355207624247,
      "cumulativeWealth": 2.1841527664516445,
      "drawdown": 0.0,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-06",
      "holdingMonth": "2026-07",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.032125596740693485,
      "cumulativeWealth": 2.1139855554565488,
      "drawdown": -0.032125596740693485,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-07",
      "holdingMonth": "2026-08",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": 0.02268662611219585,
      "cumulativeWealth": 2.161944755359774,
      "drawdown": -0.010167792030385092,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-08",
      "holdingMonth": "2026-09",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.008810633301604698,
      "cumulativeWealth": 2.1428966529019715,
      "drawdown": -0.01888884064492302,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "signalPeriod": "2026-09",
      "holdingMonth": "2026-10",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "netReturn": -0.022109105359480297,
      "cumulativeWealth": 2.0955191250284844,
      "drawdown": -0.040580330636466266,
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
      "cagr": 0.12328574166557349,
      "annVol": 0.10945797232794088,
      "sharpeRf0": 1.1187173370629384,
      "maxDrawdown": -0.13555286535830968,
      "calmar": 0.9095030292402138,
      "cumulativeReturn": 2.0167295948211543,
      "terminalWealth": 3.0167295948211543,
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
      "cagr": 0.14278059232083584,
      "annVol": 0.12823784106000446,
      "sharpeRf0": 1.1067648961299927,
      "maxDrawdown": -0.18000087625956418,
      "calmar": 0.7932216514043182,
      "cumulativeReturn": 2.5522888860542823,
      "terminalWealth": 3.5522888860542823,
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
      "cagr": 0.1306784514733368,
      "annVol": 0.11044639823055073,
      "sharpeRf0": 1.1692082241813406,
      "maxDrawdown": -0.13078954170034274,
      "calmar": 0.9991506184243655,
      "cumulativeReturn": 2.2106562966390446,
      "terminalWealth": 3.2106562966390446,
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
      "cagr": 0.1410800102501455,
      "annVol": 0.11149364440288011,
      "sharpeRf0": 1.2415413050197779,
      "maxDrawdown": -0.12331721621545166,
      "calmar": 1.1440414775797392,
      "cumulativeReturn": 2.5023989759345318,
      "terminalWealth": 3.5023989759345318,
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
      "cagr": 0.13527983249221887,
      "annVol": 0.11533008469500108,
      "sharpeRf0": 1.1597545660397088,
      "maxDrawdown": -0.10553049813227289,
      "calmar": 1.2819027189908447,
      "cumulativeReturn": 1.007392713983533,
      "terminalWealth": 2.007392713983533,
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
      "cagr": 0.14419588773327874,
      "annVol": 0.10819058421313807,
      "sharpeRf0": 1.301299683399057,
      "maxDrawdown": -0.1021225888943923,
      "calmar": 1.4119881731787622,
      "cumulativeReturn": 1.0955191250284835,
      "terminalWealth": 2.0955191250284835,
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
      "annualReturn": 0.10335485045718418,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.002592607458671514,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.14337035005795973,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.2825170134725863,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.13743413686748962,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": -0.08082818347007292,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.1363118435357462,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.0990068738726837,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.22734944458466644,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_USD",
      "displayName": "PDS Core · USD",
      "annualReturn": 0.1605329780653293,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.03851843600824889,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.04647466257777344,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.18439148843823805,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20495716656323015,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2457626581188357,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": -0.02646843975865798,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.15216278867324773,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.2620294840406898,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.20269189799276455,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "UNHEDGED_KRW",
      "displayName": "KRW Unhedged",
      "annualReturn": 0.07987972433270274,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.06874324589956671,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.021714432858790156,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.16077028847318053,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.2401586743159283,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.18719780089074178,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": -0.054530729632922714,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.142242882969857,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.17502731164646557,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.21211592080823638,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "FIXED50_COSTED",
      "displayName": "Fixed 50% Hedge · 5bp",
      "annualReturn": 0.11852652493396443,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2017",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.06192292661121335,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2018",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.04109849570615953,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2019",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.16077028847318053,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2020",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.23922464156354017,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.21139654692043752,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": -0.0429518662143199,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.13871119379793484,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.17502731164646557,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.2288562560248364,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "DYNAMIC_COSTED",
      "displayName": "Dynamic FX · 5bp",
      "annualReturn": 0.15531850409282244,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.10416556174544045,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": -0.04295186621432001,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.1387111937979335,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.17502731164646335,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.22885625602483683,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "CORE_DYNAMIC_ADAPTIVE_COMMON",
      "displayName": "PDS Core + Dynamic FX · common support",
      "annualReturn": 0.15531850409282133,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2021",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.10416556174543912,
      "monthsObserved": 8,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2022",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": -0.042951866214320567,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2023",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.13871119379793595,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2024",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.1770707947652137,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2025",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.22885625602483395,
      "monthsObserved": 12,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    },
    {
      "year": "2026",
      "seriesId": "ADAPTIVE_DYNAMIC_COSTED",
      "displayName": "PDS Adaptive + Dynamic FX",
      "annualReturn": 0.20394429071795273,
      "monthsObserved": 10,
      "layerStatus": "HISTORICAL_DELAYED_NON_CANONICAL_SPOT_SENSITIVITY"
    }
  ],
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
