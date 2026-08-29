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
  rawDataBaseHref: "/data/systems/pds";
};

// This file is intentionally source-controlled as an empty binding point.
// `scripts/sync-pds-public.ps1` replaces the value below only after the
// source-owned PDS public exporter has produced and validated a governed
// delayed snapshot. No private/operator PDS state is copied into this module.
// PDS_PUBLIC_BINDING_START
export const pdsPublicSnapshot: PdsPublicSnapshot | null = {
  "exportStatus": "BOUND_PUBLIC_SAFE_EXPORT",
  "publicAsOfDate": "2026-08-29",
  "completedHoldingMonthCutoff": "2026-07",
  "latestEligibleSignalPeriod": "2026-06",
  "latestReleasedSignalPeriod": "2026-06",
  "sourceProgramVersion": "v0.3.117",
  "sourceRs03Version": "v0.20.74",
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
  "rawDataBaseHref": "/data/systems/pds"
} as PdsPublicSnapshot;
// PDS_PUBLIC_BINDING_END
