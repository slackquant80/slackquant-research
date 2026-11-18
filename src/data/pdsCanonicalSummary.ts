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
  "generatedAt": "2026-11-18T13:03:30.068056+09:00",
  "systemAsOfKst": "2026-11-18T13:00:26.577643+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-17",
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
  "previewThrough": "2026-11-17",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.1763950046575476,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334715854954048,
      "adaptiveDynamicFx": 0.012334715854954492
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897610028237636,
      "adaptiveDynamicFx": 0.010897610028237859
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919763861718,
      "adaptiveDynamicFx": 0.07233919763861651
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830125521959917,
      "adaptiveDynamicFx": 0.05830125521959961
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756825037376,
      "adaptiveDynamicFx": -0.05020756825037331
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961012134019,
      "adaptiveDynamicFx": 0.07408961012133997
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417743986394,
      "adaptiveDynamicFx": 0.07262417743986371
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646291076058184,
      "adaptiveDynamicFx": 0.010507281541215274
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362582835600094,
      "adaptiveDynamicFx": -0.0321255604646381
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129889979977007,
      "adaptiveDynamicFx": 0.02268662445663705
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810631295517846,
      "adaptiveDynamicFx": -0.00881063129551829
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590709944,
      "adaptiveDynamicFx": -0.022109105359480297
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.021601890983368,
      "coreWealth": 1.0296687182562134
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682121551003,
      "coreWealth": 1.0247507514988285
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532581166545,
      "coreWealth": 1.0459295697217337
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497065967393018,
      "coreWealth": 1.0564921757994234
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.062382433402061,
      "coreWealth": 1.058961132077059
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725891087222943,
      "coreWealth": 1.0800314729550347
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613392065944802,
      "coreWealth": 1.0897471837316925
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619230308619325,
      "coreWealth": 1.1033549587753422
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218665510952353,
      "coreWealth": 1.1627013959861943
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085145952131732,
      "coreWealth": 1.1182716654233844
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629243034082987,
      "coreWealth": 1.1115263318298276
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765209607928077,
      "coreWealth": 1.118718682411927
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096733850478859,
      "coreWealth": 1.1297960014474449
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307192073383672,
      "coreWealth": 1.1267499583285785
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134967433799964,
      "coreWealth": 1.136465354443316
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642448195343298,
      "coreWealth": 1.164375903537168
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.158623294302003,
      "coreWealth": 1.1606691698112164
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289961615104434,
      "coreWealth": 1.118506405671387
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226010172722518,
      "coreWealth": 1.1226166840950171
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.10556645254671,
      "coreWealth": 1.1062155076214157
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236937769116724,
      "coreWealth": 1.1283262225708568
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295025736481563,
      "coreWealth": 1.1313360504050958
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586813673631318,
      "coreWealth": 1.1509471089135552
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932135930078354,
      "coreWealth": 1.1706046784692636
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618189769508445,
      "coreWealth": 1.1279093966189544
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845180720994197,
      "coreWealth": 1.1664622470861237
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064618095208373,
      "coreWealth": 1.1727842743816486
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542400500634083,
      "coreWealth": 1.2088837397554015
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.240809750817645,
      "coreWealth": 1.2007769719873038
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425568339350963,
      "coreWealth": 1.2202163228505682
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606143541283927,
      "coreWealth": 1.2312679491553444
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833091735949158,
      "coreWealth": 1.264814488765915
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028725140866806,
      "coreWealth": 1.267519934888656
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017568010312404,
      "coreWealth": 1.253945101707004
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752575938015487,
      "coreWealth": 1.226018772298909
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.35033749391686,
      "coreWealth": 1.3003509852516677
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393442572105006,
      "coreWealth": 1.3284943698192642
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164162801700657,
      "coreWealth": 1.3620585740725628
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926052164872954,
      "coreWealth": 1.4421006562411962
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558644006174764,
      "coreWealth": 1.5051933223542222
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922690201214717,
      "coreWealth": 1.4583271020498136
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.444608837764498,
      "coreWealth": 1.4332053815528838
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349758238365518,
      "coreWealth": 1.540417520749574
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903083837988756,
      "coreWealth": 1.6221461345278063
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324541423817527,
      "coreWealth": 1.6302701584561279
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.664032041565484,
      "coreWealth": 1.6527258428512577
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950231439426038,
      "coreWealth": 1.6727358785416562
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.744751153308245,
      "coreWealth": 1.7375627336264885
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801369386927535,
      "coreWealth": 1.766432535558929
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153828877547933,
      "coreWealth": 1.7837904484193827
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.84607562906996,
      "coreWealth": 1.8026131050722043
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800007362260394,
      "coreWealth": 1.8231938739791693
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241753975327193,
      "coreWealth": 1.7503561814028221
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912170660246093,
      "coreWealth": 1.8277615050153884
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786694408992848,
      "coreWealth": 1.7981652673353103
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.926493826794531,
      "coreWealth": 1.8450841414189147
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720057792099016,
      "coreWealth": 1.7800096317151306
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700072375595551,
      "coreWealth": 1.786058942579542
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217609737896082,
      "coreWealth": 1.823099583520558
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227546517039402,
      "coreWealth": 1.7820992021306608
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114095680940022,
      "coreWealth": 1.7798529663807456
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931104301086066,
      "coreWealth": 1.734184471249417
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239365935054198,
      "coreWealth": 1.7621980826900212
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.894553165101119,
      "coreWealth": 1.7298038467442105
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459049679925255,
      "coreWealth": 1.6752137789887256
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673628112762832,
      "coreWealth": 1.6964396032764963
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924142750080408,
      "coreWealth": 1.7316793042317755
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437477304718326,
      "coreWealth": 1.6959497179378868
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973204555146355,
      "coreWealth": 1.7712362505671848
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025988783966346,
      "coreWealth": 1.7161176202431254
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.93475673213905,
      "coreWealth": 1.7600520320609065
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832394489417786,
      "coreWealth": 1.7754129128223695
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.983465337682487,
      "coreWealth": 1.7877941786470273
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027841214458606,
      "coreWealth": 1.8272574242084756
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344583802578504,
      "coreWealth": 1.8656795903837964
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355314949872234,
      "coreWealth": 1.833814659120546
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.004445056218754,
      "coreWealth": 1.7905734292852309
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929104164551472,
      "coreWealth": 1.7805236587082893
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188550280722306,
      "coreWealth": 1.8449846775722636
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994963533059092,
      "coreWealth": 1.927127910320227
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144525556955056,
      "coreWealth": 1.9052132238615471
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685608501228275,
      "coreWealth": 1.9494202824716937
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240729598357135,
      "coreWealth": 2.0024777161083085
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933314026745094,
      "coreWealth": 1.9350711863358474
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232726981745894,
      "coreWealth": 1.9774225759463138
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982571219923926,
      "coreWealth": 2.0275984866877317
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011555411161817,
      "coreWealth": 2.044720457627858
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087408811208108,
      "coreWealth": 2.078589537729174
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353187333207049,
      "coreWealth": 2.1332023567883467
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384091682598001,
      "coreWealth": 2.111233208723215
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458208702574249,
      "coreWealth": 2.16589638897688
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669653203977173,
      "coreWealth": 2.11792661814603
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126226328450074,
      "coreWealth": 2.158157514322701
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501226910646143,
      "coreWealth": 2.1518099238777433
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751342498281823,
      "coreWealth": 2.1138319429038144
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715491095709767,
      "coreWealth": 2.1198200631948896
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571713067378287,
      "coreWealth": 2.1549532372145923
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317406011134236,
      "coreWealth": 2.2388627854015906
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.57686874726761,
      "coreWealth": 2.2436978162367107
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.63049634787995,
      "coreWealth": 2.296824091839075
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175746550102923,
      "coreWealth": 2.4442942286743725
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623263441532535,
      "coreWealth": 2.551530272334973
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998865797878029,
      "coreWealth": 2.5501892187561293
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315462678703233,
      "coreWealth": 2.599436487615276
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.250845892492407,
      "coreWealth": 2.797098427503828
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403742885501924,
      "coreWealth": 2.9572177345932777
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676414616509777,
      "coreWealth": 2.741651933428386
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509739743561025,
      "coreWealth": 2.974222185629844
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646317054651433,
      "coreWealth": 3.1681513520666664
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747140130767395,
      "coreWealth": 3.099050290520231
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.54619663728898,
      "coreWealth": 2.9561109064692404
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424045619059946,
      "coreWealth": 3.1027125419992503
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610312678281929,
      "coreWealth": 3.0873056683198135
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5024015132892377,
      "coreWealth": 3.0167317803268885
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502401513289228,
      "cagr": 0.1410800972898576,
      "annVol": 0.11149365357944196,
      "sharpe": 1.2415418975036172,
      "mdd": -0.12331714955845585,
      "calmar": 1.1440428017919893
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.016731780326874,
      "cagr": 0.12328582734796778,
      "annVol": 0.10945798829519739,
      "sharpe": 1.1187178882012216,
      "mdd": -0.1355529850041879,
      "calmar": 0.9095028585623466
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955192837742094,
      "cagr": 0.14419590351557088,
      "annVol": 0.10819057345990732,
      "sharpe": 1.3012999295963645,
      "mdd": -0.1021225766654903,
      "calmar": 1.4119884968031577
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124057399378881,
      "cagr": 0.1143531093872372,
      "annVol": 0.10724477440364455,
      "sharpe": 1.064924756877907,
      "mdd": -0.1113595014100498,
      "calmar": 1.0268823759022079
    }
  ]
} as PdsCanonicalSummary;
