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
  "generatedAt": "2026-11-16T11:23:31.342701+09:00",
  "systemAsOfKst": "2026-11-16T11:20:52.003447+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-13",
  "completedThrough": "2026-10-30",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "NORMAL",
  "adaptiveRiskBudget": 1.0,
  "previewAvailable": true,
  "previewSignal": "2026-11",
  "previewHolding": "2026-12",
  "previewThrough": "2026-11-13",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.1942805916807969,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334711755473071,
      "adaptiveDynamicFx": 0.01233471175547285
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897599791211743,
      "adaptiveDynamicFx": 0.01089759979121152
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920276423622,
      "adaptiveDynamicFx": 0.07233920276423622
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830125884398596,
      "adaptiveDynamicFx": 0.05830125884398596
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.0502075720622468,
      "adaptiveDynamicFx": -0.05020757206224691
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961112525758,
      "adaptiveDynamicFx": 0.07408961112525758
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417229727847,
      "adaptiveDynamicFx": 0.07262417229727891
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646296495616653,
      "adaptiveDynamicFx": 0.010507355207624247
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362582621617029,
      "adaptiveDynamicFx": -0.032125596740693485
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129890881292695,
      "adaptiveDynamicFx": 0.02268662611219585
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810633301604476,
      "adaptiveDynamicFx": -0.008810633301604698
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590711055,
      "adaptiveDynamicFx": -0.022109105359480297
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.021601858021279,
      "coreWealth": 1.029668685033848
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287681138086504,
      "coreWealth": 1.0247506535364337
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372531462492036,
      "coreWealth": 1.045929456918546
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706729029713,
      "coreWealth": 1.056492308944997
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623823319377341,
      "coreWealth": 1.05896103093949
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890270868994,
      "coreWealth": 1.0800313907531982
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.061339032887352,
      "coreWealth": 1.0897470053750926
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619229266112133,
      "coreWealth": 1.1033548504571842
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.121866314670927,
      "coreWealth": 1.1627011509562717
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851458558223896,
      "coreWealth": 1.1182715661740534
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629241881837346,
      "coreWealth": 1.111526211336639
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765208618173512,
      "coreWealth": 1.1187185795568069
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967340106649746,
      "coreWealth": 1.1297961664625311
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307189684638255,
      "coreWealth": 1.1267497202925738
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349673456370986,
      "coreWealth": 1.1364652661640926
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642445966929325,
      "coreWealth": 1.164375680670679
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586230887797595,
      "coreWealth": 1.1606689639260637
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.128995827300966,
      "coreWealth": 1.1185060745671216
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226010407322125,
      "coreWealth": 1.1226167075553029
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055663614508169,
      "coreWealth": 1.1062154164720408
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236937020923403,
      "coreWealth": 1.128326147443079
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295020965075289,
      "coreWealth": 1.131335572489942
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586809300513616,
      "coreWealth": 1.150946674520862
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932131281764975,
      "coreWealth": 1.1706042224455107
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618184533745188,
      "coreWealth": 1.1279088883240553
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845175084661022,
      "coreWealth": 1.1664616920443693
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064613492776608,
      "coreWealth": 1.1727838269858346
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542393968171954,
      "coreWealth": 1.2088831101321267
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408093152761637,
      "coreWealth": 1.2007765504978831
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425562487302129,
      "coreWealth": 1.2202157481673557
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606137340361125,
      "coreWealth": 1.2312673434984684
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833085843075092,
      "coreWealth": 1.2648139079711496
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028720320459397,
      "coreWealth": 1.267519465927769
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.301756436149802,
      "coreWealth": 1.2539447502271461
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752570773918321,
      "coreWealth": 1.226018275828225
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503370134454271,
      "coreWealth": 1.3003505225662222
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393441826288012,
      "coreWealth": 1.3284936587647134
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164156978149338,
      "coreWealth": 1.362058014066428
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926043789420564,
      "coreWealth": 1.4420998470355664
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863581183842,
      "coreWealth": 1.5051925296077322
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922681580679893,
      "coreWealth": 1.4583262596038813
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446080479537697,
      "coreWealth": 1.4332045979767594
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349751911054457,
      "coreWealth": 1.5404168857753437
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903076204038868,
      "coreWealth": 1.622145355849749
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324535372282882,
      "coreWealth": 1.630269554112263
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640312909846329,
      "coreWealth": 1.6527250973701926
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950222908716752,
      "coreWealth": 1.6727350366874525
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447502681148357,
      "coreWealth": 1.7375618520800935
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801361540977496,
      "coreWealth": 1.7664317570041324
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153820860748866,
      "coreWealth": 1.783789660690809
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460748420761786,
      "coreWealth": 1.802612336606767
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8799999381018777,
      "coreWealth": 1.8231930999714447
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241748566097122,
      "coreWealth": 1.7503556623694347
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.89121624340517,
      "coreWealth": 1.8277607099971003
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786687199329783,
      "coreWealth": 1.7981645772636283
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264931598985275,
      "coreWealth": 1.8450835027045658
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720049175263935,
      "coreWealth": 1.7800088123774056
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700061469466762,
      "coreWealth": 1.786057900926409
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217598538642169,
      "coreWealth": 1.8230985210910688
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227536959079676,
      "coreWealth": 1.7820983162541126
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.911408611776213,
      "coreWealth": 1.7798520758834397
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893109261900055,
      "coreWealth": 1.7341834011115551
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239355545506003,
      "coreWealth": 1.7621971310764317
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945518289623873,
      "coreWealth": 1.7298026267953712
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459036398083415,
      "coreWealth": 1.6752125736219818
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673614790977002,
      "coreWealth": 1.6964383930347011
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924126891240698,
      "coreWealth": 1.7316778530471686
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437466834317635,
      "coreWealth": 1.6959487548303562
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973196915730108,
      "coreWealth": 1.771235537392397
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025977763022253,
      "coreWealth": 1.71611662616935
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347559075570424,
      "coreWealth": 1.7600512819370129
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832385174388945,
      "coreWealth": 1.7754120789330152
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834642645741671,
      "coreWealth": 1.787793211402083
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027840151683578,
      "coreWealth": 1.8272564665577669
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.03445750829819,
      "coreWealth": 1.865678790761955
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035530440775317,
      "coreWealth": 1.8338137093787867
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.00444394808643,
      "coreWealth": 1.7905724393891473
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929092743548364,
      "coreWealth": 1.7805226383229176
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018854017908407,
      "coreWealth": 1.8449837544070211
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994949869515662,
      "coreWealth": 1.927126656143435
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451246189534,
      "coreWealth": 1.9052120439400133
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685595892340994,
      "coreWealth": 1.9494191490001238
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240728326258695,
      "coreWealth": 2.0024765792693118
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193330378703578,
      "coreWealth": 1.9350702829353608
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232725730783471,
      "coreWealth": 1.9774214680269977
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982560707825677,
      "coreWealth": 2.0275975592756303
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011544118114586,
      "coreWealth": 2.0447194541700555
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087396243551632,
      "coreWealth": 2.078588406246658
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531861527933393,
      "coreWealth": 2.1332012867242285
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840904176457998,
      "coreWealth": 2.111232088544351
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582072570872864,
      "coreWealth": 2.165895115376714
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.46696395033293,
      "coreWealth": 2.1179254419249154
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512620949250406,
      "coreWealth": 2.158156068239111
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501225093123682,
      "coreWealth": 2.1518083602599574
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751325644499063,
      "coreWealth": 2.113830503544938
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715474321576516,
      "coreWealth": 2.119818624496211
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571695673692693,
      "coreWealth": 2.154951711778447
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317387088394656,
      "coreWealth": 2.2388611120304067
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768668017526375,
      "coreWealth": 2.2436961222630747
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304942495234775,
      "coreWealth": 2.296822259654162
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175725914955496,
      "coreWealth": 2.4442924385400127
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623242519021695,
      "coreWealth": 2.5515284702235967
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988636676756304,
      "coreWealth": 2.5501874072648576
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031544083754365,
      "coreWealth": 2.5994346148182785
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508435659177928,
      "coreWealth": 2.797096425668478
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403718381156723,
      "coreWealth": 2.9572156282909257
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267639121132555,
      "coreWealth": 2.741649969661259
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097372329149445,
      "coreWealth": 2.9742200580591844
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764628994436333,
      "coreWealth": 3.1681490705819706
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471374119321865,
      "coreWealth": 3.0990480419234934
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194072271801,
      "coreWealth": 2.9561087682699063
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424019304964217,
      "coreWealth": 3.1027103004834116
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103100627497615,
      "coreWealth": 3.087303431686028
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023989759345397,
      "coreWealth": 3.0167295948211583
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.5023989759345318,
      "cagr": 0.1410800102501455,
      "annVol": 0.1114936444028801,
      "sharpe": 1.2415413050197788,
      "mdd": -0.12331721621545166,
      "calmar": 1.1440414775797392
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167295948211543,
      "cagr": 0.12328574166557349,
      "annVol": 0.10945797232794088,
      "sharpe": 1.1187173370629384,
      "mdd": -0.13555286535830968,
      "calmar": 0.9095030292402138
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955191250284835,
      "cagr": 0.14419588773327874,
      "annVol": 0.10819058421313803,
      "sharpe": 1.3012996833990575,
      "mdd": -0.1021225888943923,
      "calmar": 1.4119881731787622
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124056026393789,
      "cagr": 0.11435309401657667,
      "annVol": 0.10724480647429106,
      "sharpe": 1.0649243417009624,
      "mdd": -0.11135949956924551,
      "calmar": 1.0268822548494814
    }
  ]
} as PdsCanonicalSummary;
