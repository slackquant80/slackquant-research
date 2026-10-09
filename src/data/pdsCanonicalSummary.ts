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
  "generatedAt": "2026-10-09T21:21:21.865348+09:00",
  "systemAsOfKst": "2026-10-09T21:21:16.624907+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "2026-10-01",
  "markThrough": "2026-10-08",
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
  "previewThrough": "2026-10-08",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.11451948526415265,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.08869427609394272,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374580749393495,
      "adaptiveDynamicFx": 0.050561894905936766
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334674665700485,
      "adaptiveDynamicFx": 0.011664335183187324
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897624283097596,
      "adaptiveDynamicFx": 0.011720347486556149
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920212387757,
      "adaptiveDynamicFx": 0.07131811296512991
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301246958073705,
      "adaptiveDynamicFx": 0.05355636470466241
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755895794715,
      "adaptiveDynamicFx": -0.052538817457289944
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961643461942,
      "adaptiveDynamicFx": 0.08283401240377875
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.0726241505440881,
      "adaptiveDynamicFx": 0.07552313300793068
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646288921554276,
      "adaptiveDynamicFx": 0.009813963054760677
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583541495314,
      "adaptiveDynamicFx": -0.0344795593566638
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712989595027926,
      "adaptiveDynamicFx": 0.02998425520883341
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.00881062981908165,
      "adaptiveDynamicFx": -0.008144829752566252
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019180121958,
      "coreWealth": 1.0296687454984679
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287681484392035,
      "coreWealth": 1.0247506880317494
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372531458202574,
      "coreWealth": 1.04592945648601
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497065390897178,
      "coreWealth": 1.056492117777177
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623822113038321,
      "coreWealth": 1.0589609106940756
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890199984904,
      "coreWealth": 1.0800313836156015
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.061339133724612,
      "coreWealth": 1.089747108911376
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619229213829546,
      "coreWealth": 1.103354845024936
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218663582736543,
      "coreWealth": 1.1627011961460927
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459400457875,
      "coreWealth": 1.1182716529684955
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629243177930645,
      "coreWealth": 1.1115263468723315
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765210227056123,
      "coreWealth": 1.1187187467516022
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096733894986841,
      "coreWealth": 1.1297960472971618
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307190999552328,
      "coreWealth": 1.1267498513223957
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134967471153789,
      "coreWealth": 1.1364653918464378
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642447280790713,
      "coreWealth": 1.164375812071611
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586229992783774,
      "coreWealth": 1.1606688742666411
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289959407743262,
      "coreWealth": 1.1185061869861757
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226010171071221,
      "coreWealth": 1.122616683929882
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055662567152424,
      "coreWealth": 1.1062153116749767
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.123693402529756,
      "coreWealth": 1.1283258466455421
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295020833563731,
      "coreWealth": 1.1313355593174375
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586807534660333,
      "coreWealth": 1.1509464991142482
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.193213126544795,
      "coreWealth": 1.1706042208447236
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818386143727,
      "coreWealth": 1.127908823055502
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845174154194165,
      "coreWealth": 1.1664616004160109
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064612330896702,
      "coreWealth": 1.1727837140411517
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542393115675237,
      "coreWealth": 1.2088830279652878
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.240809166850577,
      "coreWealth": 1.200776406861016
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425562632726224,
      "coreWealth": 1.2202157624483023
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.260613752411982,
      "coreWealth": 1.231267361446558
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833085018355361,
      "coreWealth": 1.2648138266877376
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028717373649281,
      "coreWealth": 1.2675191792427285
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.301756356196435,
      "coreWealth": 1.2539446732103523
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752569325774044,
      "coreWealth": 1.226018136605208
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503368505939257,
      "coreWealth": 1.3003503657431223
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934417388507683,
      "coreWealth": 1.3284935754029092
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164157681591536,
      "coreWealth": 1.3620580817110517
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926046464856744,
      "coreWealth": 1.442100105526438
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558636743653425,
      "coreWealth": 1.5051926197545134
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.492268339982968,
      "coreWealth": 1.4583264373811706
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446082464750878,
      "coreWealth": 1.4332047949309887
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975362623378,
      "coreWealth": 1.540417057901329
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903078909650574,
      "coreWealth": 1.6221456318275147
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324537356045803,
      "coreWealth": 1.630269752223155
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.664031546515997,
      "coreWealth": 1.652725351165356
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950225370854033,
      "coreWealth": 1.6727352796638002
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.744750577137281,
      "coreWealth": 1.737562159829357
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801363466861673,
      "coreWealth": 1.7664319481099044
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153823190906964,
      "coreWealth": 1.7837898896515292
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460750110552426,
      "coreWealth": 1.8026125016075216
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800001035305363,
      "coreWealth": 1.8231932604014423
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241749335578739,
      "coreWealth": 1.7503557362037194
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912165775761602,
      "coreWealth": 1.8277610329557274
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.87866894231034,
      "coreWealth": 1.7981647901117404
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264935923770508,
      "coreWealth": 1.8450839169074282
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720053130285201,
      "coreWealth": 1.7800091884433333
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700067710803197,
      "coreWealth": 1.7860584970414664
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217603974719284,
      "coreWealth": 1.8230990367904745
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227543328632717,
      "coreWealth": 1.7820989066141675
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114090989871693,
      "coreWealth": 1.7798525295611263
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931100288237848,
      "coreWealth": 1.7341841036523105
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239355777500617,
      "coreWealth": 1.762197152325599
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945523613815818,
      "coreWealth": 1.7298031129156826
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.845903928978025,
      "coreWealth": 1.6752128360520895
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673618320212493,
      "coreWealth": 1.6964387136544972
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924132893116103,
      "coreWealth": 1.7316784022569027
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437468901471583,
      "coreWealth": 1.6959489449750864
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973201583387271,
      "coreWealth": 1.7712359731397427
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.902598405124936,
      "coreWealth": 1.7161171933586516
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347563263221317,
      "coreWealth": 1.760051662888441
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832383341423874,
      "coreWealth": 1.7754119148444127
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.983464072921452,
      "coreWealth": 1.7877930386561287
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278399114720047,
      "coreWealth": 1.827256250106705
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344570788837615,
      "coreWealth": 1.8656783969717716
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355304151434406,
      "coreWealth": 1.8338136862869732
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044438808694798,
      "coreWealth": 1.7905723793441548
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.992909316339905,
      "coreWealth": 1.780522675833586
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018854059071235,
      "coreWealth": 1.8449837920247707
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994946907790344,
      "coreWealth": 1.9271263842866342
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114450880038234,
      "coreWealth": 1.9052117140218459
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685590756055113,
      "coreWealth": 1.9494186872754715
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240727910883,
      "coreWealth": 2.002476208059597
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933299001544246,
      "coreWealth": 1.9350698607343673
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327252580001735,
      "coreWealth": 1.9774210493047846
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982558085745346,
      "coreWealth": 2.0275973279470207
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011539966639707,
      "coreWealth": 2.044719085285571
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087394650598703,
      "coreWealth": 2.0785882628310213
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186030640453,
      "coreWealth": 2.1332011759906586
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384090272798272,
      "coreWealth": 2.1112319602745697
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582071657680227,
      "coreWealth": 2.1658950349164687
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466963870429635,
      "coreWealth": 2.1179253733267376
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126209265766795,
      "coreWealth": 2.1581560487640483
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501225248053311,
      "coreWealth": 2.1518084935461874
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475132726343618,
      "coreWealth": 2.113830641806567
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471547693103007,
      "coreWealth": 2.1198188483061244
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571698824817636,
      "coreWealth": 2.154951988133896
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317388954466944,
      "coreWealth": 2.2388612770504617
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576867055975106,
      "coreWealth": 2.2436963436163713
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630494600102267,
      "coreWealth": 2.2968225657628576
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175729573785846,
      "coreWealth": 2.4442927559498067
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623245867947383,
      "coreWealth": 2.551528758675452
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998863896827057,
      "coreWealth": 2.5501876021316985
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315443888508242,
      "coreWealth": 2.5994348764269786
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508438911434108,
      "coreWealth": 2.797096705499667
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440372143663108,
      "coreWealth": 2.957215890928136
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676394564228635,
      "coreWealth": 2.7416502509801686
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097376103958617,
      "coreWealth": 2.9742203779439076
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764629322983499,
      "coreWealth": 3.1681493470730704
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471377674663624,
      "coreWealth": 3.0990483359659557
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194374271056,
      "coreWealth": 2.95610902001661
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424022586644957,
      "coreWealth": 3.1027105800271046
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610310400711216,
      "coreWealth": 3.087303720688789
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.610310400711206,
      "cagr": 0.14608229191670064,
      "annVol": 0.11164406968902232,
      "sharpe": 1.2799635304910624,
      "mdd": -0.12331708017698473,
      "calmar": 1.184607125850233
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087303720688764,
      "cagr": 0.12719055801290646,
      "annVol": 0.10964340862508952,
      "sharpe": 1.1493355807577563,
      "mdd": -0.13555280023666427,
      "calmar": 0.9383100739405014
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341268926767062,
      "cagr": 0.16019283955135477,
      "annVol": 0.1169498622939889,
      "sharpe": 1.3324603958600674,
      "mdd": -0.11040269928991764,
      "calmar": 1.450986620632238
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183844731232362,
      "cagr": 0.12797300916016363,
      "annVol": 0.1166864817341448,
      "sharpe": 1.0931232249119673,
      "mdd": -0.11953262704027423,
      "calmar": 1.0706115336781277
    }
  ]
} as PdsCanonicalSummary;
