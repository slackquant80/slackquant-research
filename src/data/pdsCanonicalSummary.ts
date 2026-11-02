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
  "generatedAt": "2026-11-02T14:46:55.701049+09:00",
  "systemAsOfKst": "2026-11-02T12:00:42.460322+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "",
  "markThrough": "2026-10-31",
  "completedThrough": "2026-10-31",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "NORMAL",
  "adaptiveRiskBudget": 1.0,
  "previewAvailable": false,
  "previewSignal": null,
  "previewHolding": null,
  "previewThrough": null,
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.1285143179328798,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334706390353611,
      "adaptiveDynamicFx": 0.01233470639035339
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.01089762980234954,
      "adaptiveDynamicFx": 0.01089762980234954
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918987861476,
      "adaptiveDynamicFx": 0.0723391898786152
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830125080625037,
      "adaptiveDynamicFx": 0.058301250806250815
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755717509917,
      "adaptiveDynamicFx": -0.05020755717509939
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408956830705482,
      "adaptiveDynamicFx": 0.07408956830705482
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418448351649,
      "adaptiveDynamicFx": 0.07262418448351649
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646291965855753,
      "adaptiveDynamicFx": 0.010507333317075318
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835621536,
      "adaptiveDynamicFx": -0.03212561397308167
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129890783870625,
      "adaptiveDynamicFx": 0.022686634255504545
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810624654692623,
      "adaptiveDynamicFx": -0.008810624654692623
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.0298897080648991,
      "adaptiveDynamicFx": -0.02210912309484525
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.021601937927324,
      "coreWealth": 1.0296687655708514
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.028768158585129,
      "coreWealth": 1.0247506981380552
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.037253204653296,
      "coreWealth": 1.0459295158111714
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497065476930407,
      "coreWealth": 1.0564921264361167
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623823322955543,
      "coreWealth": 1.0589610312961582
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725891284366385,
      "coreWealth": 1.0800314928061714
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613389761852567,
      "coreWealth": 1.0897469471552987
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619227550278518,
      "coreWealth": 1.103354672179334
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218660028419964,
      "coreWealth": 1.1627008277770727
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085145684739569,
      "coreWealth": 1.1182713898686714
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629237217756082,
      "coreWealth": 1.111525723602082
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076520687868569,
      "coreWealth": 1.1187183987895384
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967336249459323,
      "coreWealth": 1.1297957691155969
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307188815380567,
      "coreWealth": 1.126749633671945
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134967188860465,
      "coreWealth": 1.136465109180544
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642444927182984,
      "coreWealth": 1.1643755766843364
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586228512176127,
      "coreWealth": 1.160668725944432
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289957347957473,
      "coreWealth": 1.1185059829213888
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226005856010561,
      "coreWealth": 1.1226162524177932
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.105566149205834,
      "coreWealth": 1.1062152041024502
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236934927787974,
      "coreWealth": 1.1283259372666352
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295021541398895,
      "coreWealth": 1.131335630215853
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.158680699900068,
      "coreWealth": 1.1509464459058376
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.193213059973193,
      "coreWealth": 1.170604155534514
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618184532787283,
      "coreWealth": 1.1279088882310584
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845174421943465,
      "coreWealth": 1.1664616267828043
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064613921772571,
      "coreWealth": 1.1727838686879177
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542394232166962,
      "coreWealth": 1.208883135576956
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408093727410567,
      "coreWealth": 1.2007766061087584
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425565142219763,
      "coreWealth": 1.220216008885715
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.260613963105001,
      "coreWealth": 1.2312675672347555
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833086644658536,
      "coreWealth": 1.2648139869742707
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028719680106122,
      "coreWealth": 1.2675194036299944
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017564726047075,
      "coreWealth": 1.253944785343111
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752573054789982,
      "coreWealth": 1.2260184951087407
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.350337123595038,
      "coreWealth": 1.3003506286383337
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393441960484936,
      "coreWealth": 1.3284937867067301
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164158490068812,
      "coreWealth": 1.3620581594560892
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926047933181545,
      "coreWealth": 1.4421002473906175
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863820189548,
      "coreWealth": 1.5051927608295457
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922684493538079,
      "coreWealth": 1.4583265442643516
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446085202327699,
      "coreWealth": 1.4332050665276803
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975554983191,
      "coreWealth": 1.5404172509430825
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903079467124943,
      "coreWealth": 1.622145688691006
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.632453959649763,
      "coreWealth": 1.6302699759685952
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640317316204807,
      "coreWealth": 1.6527255350121532
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950229430075385,
      "coreWealth": 1.6727356802486066
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447509324349917,
      "coreWealth": 1.7375625136632287
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801368471425933,
      "coreWealth": 1.7664324447135593
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.815382804084995,
      "coreWealth": 1.7837903662056485
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460753751948837,
      "coreWealth": 1.8026128571741509
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800006153596667,
      "coreWealth": 1.8231937567649352
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241753637786353,
      "coreWealth": 1.7503561490146624
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.89121687681176,
      "coreWealth": 1.827761322151142
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.878669304303125,
      "coreWealth": 1.7981651365925169
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264936878690053,
      "coreWealth": 1.8450840083640865
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720054087472378,
      "coreWealth": 1.7800092794581364
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700062619762159,
      "coreWealth": 1.7860580107920458
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217600396693584,
      "coreWealth": 1.8230986973571506
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227540654460318,
      "coreWealth": 1.782098658759325
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114087690784718,
      "coreWealth": 1.7798522223590578
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931094621021596,
      "coreWealth": 1.734183584506767
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239355935513507,
      "coreWealth": 1.7621971667985319
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945516806306526,
      "coreWealth": 1.729802491362488
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459037595354157,
      "coreWealth": 1.675212682277873
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673611602619626,
      "coreWealth": 1.696438103382596
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924133100499465,
      "coreWealth": 1.7316784212338006
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437467827908018,
      "coreWealth": 1.6959488462246042
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973196815092381,
      "coreWealth": 1.7712355279974012
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.902598035662283,
      "coreWealth": 1.7161168601085022
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347558336570077,
      "coreWealth": 1.760051214710008
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832384307789126,
      "coreWealth": 1.7754120013542614
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834640945370867,
      "coreWealth": 1.7877930581393608
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027839987425889,
      "coreWealth": 1.827256318547621
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344571752115286,
      "coreWealth": 1.8656784853081891
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355305185067496,
      "coreWealth": 1.8338137794072042
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044439493418906,
      "coreWealth": 1.790572440510656
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929092033853453,
      "coreWealth": 1.7805225749167306
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.01885380732588,
      "coreWealth": 1.8449835619605506
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994949496180593,
      "coreWealth": 1.9271266218750085
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451178213654,
      "coreWealth": 1.9052119826908078
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168559396833827,
      "coreWealth": 1.9494189760425684
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407282609273196,
      "coreWealth": 2.00247652088448
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193330232083123,
      "coreWealth": 1.9350701535791612
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327252150705763,
      "coreWealth": 1.977421011284045
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.298255846586508,
      "coreWealth": 2.0275973614824516
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011541680845884,
      "coreWealth": 2.0447192376035077
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308739539813882,
      "coreWealth": 2.078588330133041
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531859037704894,
      "coreWealth": 2.133201060980993
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384090268994941,
      "coreWealth": 2.1112319569065363
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582071179484664,
      "coreWealth": 2.1658949927832736
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669638344750004,
      "coreWealth": 2.117925342459153
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126210686817885,
      "coreWealth": 2.1581561708218633
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012251469310014,
      "coreWealth": 2.1518084065504928
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751324867470035,
      "coreWealth": 2.1138304371845504
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471547482098802,
      "coreWealth": 2.1198186673301826
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457169728553133,
      "coreWealth": 2.1549518531376157
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531738665695733,
      "coreWealth": 2.23886107387765
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768667131698813,
      "coreWealth": 2.243696045133451
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630494306512469,
      "coreWealth": 2.2968223094142424
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175725561077356,
      "coreWealth": 2.4442924078404884
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962324149722105,
      "coreWealth": 2.5515283822132067
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998863548341981,
      "coreWealth": 2.5501873057853737
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315440531195725,
      "coreWealth": 2.599434588550115
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508434940035746,
      "coreWealth": 2.7970963637919373
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403717358793444,
      "coreWealth": 2.9572155404123976
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267639075246587,
      "coreWealth": 2.7416499311615348
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097370437148707,
      "coreWealth": 2.974219897727355
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646288342662513,
      "coreWealth": 3.1681489357897687
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747137269559171,
      "coreWealth": 3.0990479241747413
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461939022904594,
      "coreWealth": 2.9561086265734104
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424017555580277,
      "coreWealth": 3.1027101514655127
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103099208482123,
      "coreWealth": 3.0873033103410275
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023988112902504,
      "coreWealth": 3.016729453007718
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502398811290232,
      "cagr": 0.14108000460229597,
      "annVol": 0.11149364276416131,
      "sharpe": 1.2415412768434149,
      "mdd": -0.12331715097316065,
      "calmar": 1.1440420370480446
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167294530077142,
      "cagr": 0.12328573610579885,
      "annVol": 0.10945797850556466,
      "sharpe": 1.1187172344719891,
      "mdd": -0.13555294811604468,
      "calmar": 0.9095024329552459
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955179685336631,
      "cagr": 0.14419577275604922,
      "annVol": 0.10819058142909238,
      "sharpe": 1.30129878358925,
      "mdd": -0.10212252086396112,
      "calmar": 1.41198798792026
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124046023919269,
      "cagr": 0.11435298203817235,
      "annVol": 0.10724478247746472,
      "sharpe": 1.0649236173188232,
      "mdd": -0.1113595322642621,
      "calmar": 1.0268809478007381
    }
  ]
} as PdsCanonicalSummary;
