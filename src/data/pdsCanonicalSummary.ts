export type PdsCanonicalMonthlyReturnRow = {
  holdingMonth: string;
  coreDynamicFx: number;
  adaptiveDynamicFx: number;
};

export type PdsCanonicalCumulativeRow = {
  holdingMonth: string;
  coreDynamicFxWealth: number;
  coreWealth: number;
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
  adaptiveState: string | null;
  adaptiveRiskBudget: number | null;
  previewAvailable: boolean;
  previewSignal: string | null;
  previewHolding: string | null;
  previewThrough: string | null;
  adaptivePreviewAvailable: boolean;
  adaptivePreviewState: string | null;
  adaptivePreviewRiskBudget: number | null;
  officialFxHedge: number;
  officialFxZscore: number;
  previewFxAvailable: boolean;
  previewFxHedge: number | null;
  previewFxZscore: number | null;
  recentMonthlyReturns: PdsCanonicalMonthlyReturnRow[];
  cumulativePath: PdsCanonicalCumulativeRow[];
  performance: PdsCanonicalPerformanceRow[];
};

// Generated from the current PDS public dashboard.
// PREVIEW_UNAVAILABLE_IS_VALID_AT_MONTH_END: empty Preview arrays bind as explicit null state.
// MONTH_END_UNAVAILABLE_IS_VALID: current Adaptive/Preview states bind as explicit nulls until their execution clocks open.
// Do not hand-edit numerical values; refresh through the PDS publication workflow.
export const pdsCanonicalSummary: PdsCanonicalSummary = {
  "contract": "PDS_CANONICAL_PLATFORM_SUMMARY_V1",
  "generatedAt": "2026-10-11T22:39:26.489296+09:00",
  "systemAsOfKst": "2026-10-11T22:36:51.695590+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "2026-10-01",
  "markThrough": "2026-10-09",
  "completedThrough": "2026-09-30",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "DEFENSIVE",
  "adaptiveRiskBudget": 0.7122377157211304,
  "previewAvailable": true,
  "previewSignal": "2026-10",
  "previewHolding": "2026-11",
  "previewThrough": "2026-10-09",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.11451948526415265,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.047578289629143254,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137458600928735,
      "adaptiveDynamicFx": 0.05056190324670573
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334695444689459,
      "adaptiveDynamicFx": 0.011664354050749282
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897622420391606,
      "adaptiveDynamicFx": 0.011720345995524406
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723391856466229,
      "adaptiveDynamicFx": 0.07131809510481246
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301263680034854,
      "adaptiveDynamicFx": 0.053556386174050674
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755350718997,
      "adaptiveDynamicFx": -0.05253881277002248
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960113147267,
      "adaptiveDynamicFx": 0.08283399802368918
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418701623563,
      "adaptiveDynamicFx": 0.0755231633427127
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.00464628923241972,
      "adaptiveDynamicFx": 0.009813969033323655
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835409014,
      "adaptiveDynamicFx": -0.03447952137024779
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712990078219013,
      "adaptiveDynamicFx": 0.02998421775159632
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810634271467555,
      "adaptiveDynamicFx": -0.008144833445320354
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216017487760534,
      "coreWealth": 1.0296685749259942
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287681669010122,
      "coreWealth": 1.0247507064214634
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372530526874217,
      "coreWealth": 1.045929362574148
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706398645124,
      "coreWealth": 1.0564919764247136
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623821700654137,
      "coreWealth": 1.0589608695884631
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.072588967181753,
      "coreWealth": 1.0800313304323876
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613390347508573,
      "coreWealth": 1.0897470072884754
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061922954990024,
      "coreWealth": 1.103354879943219
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218663663619843,
      "coreWealth": 1.1627012045288323
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459588144607,
      "coreWealth": 1.118271672310112
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629240509806237,
      "coreWealth": 1.11152606785994
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765210829430425,
      "coreWealth": 1.1187188093502347
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967344132281227,
      "coreWealth": 1.1297965811613524
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307197600749674,
      "coreWealth": 1.126750509124863
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134968011214196,
      "coreWealth": 1.1364659326196125
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642454528695463,
      "coreWealth": 1.1643765369436903
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586237885471433,
      "coreWealth": 1.1606696649290829
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289967351654184,
      "coreWealth": 1.1185069739964018
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122601618767038,
      "coreWealth": 1.1226172855981928
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055667178766613,
      "coreWealth": 1.106215773107132
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236937327278227,
      "coreWealth": 1.1283261782048535
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295024136050047,
      "coreWealth": 1.1313358901021462
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586811356924023,
      "coreWealth": 1.1509468787892347
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932134380486257,
      "coreWealth": 1.170604526446203
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618187929303248,
      "coreWealth": 1.1279092179693686
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.184517844240567,
      "coreWealth": 1.1664620227005602
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.206461647913077,
      "coreWealth": 1.172784117285051
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542398538919441,
      "coreWealth": 1.2088835506779614
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.240809644337024,
      "coreWealth": 1.2007768689421103
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425566553263598,
      "coreWealth": 1.22021614745312
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606142046175621,
      "coreWealth": 1.2312678031250404
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833089444918764,
      "coreWealth": 1.2648142629646402
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028723832722202,
      "coreWealth": 1.2675198076237548
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017567668000662,
      "coreWealth": 1.253945068733088
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752573688988118,
      "coreWealth": 1.226018556079859
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503373939270893,
      "coreWealth": 1.3003508889632913
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393442328919852,
      "coreWealth": 1.3284941379689363
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164162704621195,
      "coreWealth": 1.362058564737171
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926051682275254,
      "coreWealth": 1.4421006096143607
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555864265239933,
      "coreWealth": 1.5051931913856182
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922687616971106,
      "coreWealth": 1.4583268495033497
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446086626389623,
      "coreWealth": 1.4332052078097453
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975888183318,
      "coreWealth": 1.5404175853244475
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903083612990145,
      "coreWealth": 1.62214611157749
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.632454250915418,
      "coreWealth": 1.6302702668445788
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640321499891155,
      "coreWealth": 1.6527259505381968
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.695023241787351,
      "coreWealth": 1.6727359750998638
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447512506036504,
      "coreWealth": 1.7375628305210218
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801370809435517,
      "coreWealth": 1.766432676714594
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153830219603553,
      "coreWealth": 1.7837905802893994
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460757842465536,
      "coreWealth": 1.8026132565954294
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800008342836405,
      "coreWealth": 1.823193969073808
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241755103124662,
      "coreWealth": 1.7503562896186784
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912172008189303,
      "coreWealth": 1.8277616352869726
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786695526808561,
      "coreWealth": 1.798165374326837
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264940636009205,
      "coreWealth": 1.845084368218335
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720057717422411,
      "coreWealth": 1.7800096246144395
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700070820488257,
      "coreWealth": 1.7860587940499801
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217608929629675,
      "coreWealth": 1.8230995068434652
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227546736096295,
      "coreWealth": 1.7820992224338676
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114094409777636,
      "coreWealth": 1.779852848013524
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931104198244166,
      "coreWealth": 1.7341844618285687
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239361185808002,
      "coreWealth": 1.7621976476906143
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945529117763367,
      "coreWealth": 1.7298036154484033
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.845904274475423,
      "coreWealth": 1.6752131496012728
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673623066538654,
      "coreWealth": 1.6964391448430998
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924133854898821,
      "coreWealth": 1.7316784902661275
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437472890607216,
      "coreWealth": 1.6959493119110423
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973204161136306,
      "coreWealth": 1.7712362137845143
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.902598689149452,
      "coreWealth": 1.7161174495447964
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347564694831976,
      "coreWealth": 1.7600517931223445
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832388977196767,
      "coreWealth": 1.775412419363619
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834645346300779,
      "coreWealth": 1.787793454816659
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027840546937026,
      "coreWealth": 1.8272568227147394
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034457464167501,
      "coreWealth": 1.8656787502923458
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355305543437883,
      "coreWealth": 1.8338138116928584
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044445017617236,
      "coreWealth": 1.7905729339880159
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929096235053454,
      "coreWealth": 1.7805229502640476
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188541221651146,
      "coreWealth": 1.8449838496847966
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994952025923026,
      "coreWealth": 1.9271268540800819
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451494582153,
      "coreWealth": 1.905212267752501
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685598488881106,
      "coreWealth": 1.9494193824151937
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.24072865162211,
      "coreWealth": 2.002476870037539
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933306286336043,
      "coreWealth": 1.935070503436639
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327258824525202,
      "coreWealth": 1.9774216023532254
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.29825642270392,
      "coreWealth": 2.0275978697522916
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011548920288996,
      "coreWealth": 2.0447198808732496
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.30874022690741,
      "coreWealth": 2.0785889487323055
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186669382508,
      "coreWealth": 2.13320175502066
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840910797565176,
      "coreWealth": 2.111232674876724
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582080447320838,
      "coreWealth": 2.1658958093605136
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669646287871134,
      "coreWealth": 2.1179260243879736
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126219974505055,
      "coreWealth": 2.158156968565679
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012261665390287,
      "coreWealth": 2.1518092837210703
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751336079980963,
      "coreWealth": 2.113831394763461
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471548543912435,
      "coreWealth": 2.1198195780358677
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571707342555302,
      "coreWealth": 2.154952735144342
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531739870820219,
      "coreWealth": 2.2388621395904416
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768678845116666,
      "coreWealth": 2.243697065029006
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304954798724953,
      "coreWealth": 2.2968233339363056
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175738081400152,
      "coreWealth": 2.4442934939999037
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623254960838197,
      "coreWealth": 2.551529541870259
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998864878886052,
      "coreWealth": 2.5501884372595156
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031545376025926,
      "coreWealth": 2.59943572289236
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508448997784267,
      "coreWealth": 2.7970975733511394
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403732654633052,
      "coreWealth": 2.95721685518584
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676405406528506,
      "coreWealth": 2.741651160682551
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.50973872495085,
      "coreWealth": 2.9742213224396252
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764630646489805,
      "coreWealth": 3.168150460878774
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747139083652982,
      "coreWealth": 3.099049424510382
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461956198983238,
      "coreWealth": 2.9561100583719817
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424035552204024,
      "coreWealth": 3.1027116844734093
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103116696262623,
      "coreWealth": 3.0873048057827814
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.6103116696262596,
      "cagr": 0.1460823346987703,
      "annVol": 0.11164410593081696,
      "sharpe": 1.2799634868185408,
      "mdd": -0.12331726234297868,
      "calmar": 1.1846057228587819
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.0873048057827757,
      "cagr": 0.12719060008976735,
      "annVol": 0.10964342748504978,
      "sharpe": 1.1493357434013047,
      "mdd": -0.13555302850269613,
      "calmar": 0.9383088042716622
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341270813167506,
      "cagr": 0.1601928576588969,
      "annVol": 0.11694983880315049,
      "sharpe": 1.3324607741272636,
      "mdd": -0.11040268619693772,
      "calmar": 1.4509869567226186
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183846351033591,
      "cagr": 0.12797302676484024,
      "annVol": 0.11668644835872623,
      "sharpe": 1.0931236384496885,
      "mdd": -0.11953265475793484,
      "calmar": 1.07061143270011
    }
  ]
} as PdsCanonicalSummary;
