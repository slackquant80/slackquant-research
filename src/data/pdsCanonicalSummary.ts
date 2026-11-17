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
  "generatedAt": "2026-11-17T18:58:48.678668+09:00",
  "systemAsOfKst": "2026-11-17T18:55:55.950963+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-16",
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
  "previewThrough": "2026-11-16",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.20227957344740188,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334716262847989,
      "adaptiveDynamicFx": 0.012334716262848211
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897610001881608,
      "adaptiveDynamicFx": 0.01089761000188183
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920307342445,
      "adaptiveDynamicFx": 0.07233920307342467
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.0583012359925521,
      "adaptiveDynamicFx": 0.05830123599255188
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755213697781,
      "adaptiveDynamicFx": -0.05020755213697725
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.0740896038152501,
      "adaptiveDynamicFx": 0.07408960381525054
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417201811888,
      "adaptiveDynamicFx": 0.07262417201811933
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646293504119381,
      "adaptiveDynamicFx": 0.01050731240446856
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583238980345,
      "adaptiveDynamicFx": -0.032125600005506016
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129888084765463,
      "adaptiveDynamicFx": 0.02268662326941029
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.00881062606577665,
      "adaptiveDynamicFx": -0.008810626065776872
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590710055,
      "adaptiveDynamicFx": -0.022109105359480075
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216020627676645,
      "coreWealth": 1.029668891396962
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682533055698,
      "coreWealth": 1.0247507924886008
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372534368270296,
      "coreWealth": 1.0459297499269669
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706744483231,
      "coreWealth": 1.0564923244984077
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623826053019358,
      "coreWealth": 1.058961303423346
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725893320830548,
      "coreWealth": 1.0800316978656244
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613394506070528,
      "coreWealth": 1.0897474342755429
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061923387448563,
      "coreWealth": 1.103355329274533
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218666654459728,
      "coreWealth": 1.162701514499184
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085146237097955,
      "coreWealth": 1.1182719590886276
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629245868949184,
      "coreWealth": 1.111526628278821
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765213332139305,
      "coreWealth": 1.1187190694312992
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967346342904145,
      "coreWealth": 1.1297968088877899
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307200173047498,
      "coreWealth": 1.1267507654516729
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349684669564275,
      "coreWealth": 1.1364663889633293
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642456866694484,
      "coreWealth": 1.1643767707699177
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586239962796854,
      "coreWealth": 1.1606698730284362
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289966701730674,
      "coreWealth": 1.11850690960791
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122601658536871,
      "coreWealth": 1.1226173253685827
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055667639906963,
      "coreWealth": 1.1062158192482412
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236941275025973,
      "coreWealth": 1.1283265746070956
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295029923475859,
      "coreWealth": 1.1313364697841801
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586817838595016,
      "coreWealth": 1.150947522629787
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932140453219258,
      "coreWealth": 1.1706051222129392
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618192914596013,
      "coreWealth": 1.1279097019482565
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845183295240485,
      "coreWealth": 1.166462500586778
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064620979256386,
      "coreWealth": 1.1727845547358284
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542402049133452,
      "coreWealth": 1.2088838890055915
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408099929043903,
      "coreWealth": 1.200777206263496
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425570842567926,
      "coreWealth": 1.2202165686716089
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606146611300477,
      "coreWealth": 1.2312682490101665
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833093657233379,
      "coreWealth": 1.2648146781254328
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028727965028664,
      "coreWealth": 1.2675202096416613
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017571817084777,
      "coreWealth": 1.2539454684024949
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752576867273682,
      "coreWealth": 1.2260188616367744
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.35033782051483,
      "coreWealth": 1.300351299759696
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934426225524568,
      "coreWealth": 1.3284944179153577
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164165226193648,
      "coreWealth": 1.3620588072173945
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926055341000362,
      "coreWealth": 1.4421009631070192
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558647364477733,
      "coreWealth": 1.5051936472472551
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922691820128846,
      "coreWealth": 1.4583272602589679
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446093317482944,
      "coreWealth": 1.4332058716372593
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349762778461191,
      "coreWealth": 1.5404179763686554
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903089626840536,
      "coreWealth": 1.6221467250021713
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324547781025796,
      "coreWealth": 1.630270793326441
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640326446968328,
      "coreWealth": 1.6527264418846432
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950236650292478,
      "coreWealth": 1.672736392776701
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447517099577436,
      "coreWealth": 1.7375632879825649
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801376978917829,
      "coreWealth": 1.7664332889132444
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153836801079763,
      "coreWealth": 1.7837912269835208
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.846076398438638,
      "coreWealth": 1.8026138563274692
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800014868416006,
      "coreWealth": 1.8231946019138132
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241761652907973,
      "coreWealth": 1.7503569180918903
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.891217878141293,
      "coreWealth": 1.8277622898832968
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.878670399597232,
      "coreWealth": 1.7981661849514083
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264948905315198,
      "coreWealth": 1.8450851602045386
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720065549925275,
      "coreWealth": 1.7800103693733833
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.870008033841972,
      "coreWealth": 1.7860597031152607
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217616000511921,
      "coreWealth": 1.8231001776304467
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227556260234338,
      "coreWealth": 1.7821001051756529
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114101507503847,
      "coreWealth": 1.779853508934616
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931107593952325,
      "coreWealth": 1.734184772892529
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239369923378535,
      "coreWealth": 1.7621984479940127
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945537984374323,
      "coreWealth": 1.7298044250059232
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459053989411986,
      "coreWealth": 1.6752141700874748
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673631424312498,
      "coreWealth": 1.6964399041202118
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924145658666855,
      "coreWealth": 1.731679570385899
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437483069290217,
      "coreWealth": 1.6959502481852518
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973213481486642,
      "coreWealth": 1.771237083882248
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025995380621996,
      "coreWealth": 1.7161182152522376
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.934757518724325,
      "coreWealth": 1.7600527476190753
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832398351616243,
      "coreWealth": 1.7754132585696647
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834656485509592,
      "coreWealth": 1.7877944588479506
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278414985337285,
      "coreWealth": 1.8272576801843112
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034458621684444,
      "coreWealth": 1.8656798117816122
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355319402684176,
      "coreWealth": 1.8338150602753103
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044454820260516,
      "coreWealth": 1.7905738096594421
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.992910551158743,
      "coreWealth": 1.780523779056356
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.01885531153292,
      "coreWealth": 1.844984936620386
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994963930705572,
      "coreWealth": 1.9271279468201896
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144528382413994,
      "coreWealth": 1.9052134784476085
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685611239928178,
      "coreWealth": 1.9494205286661628
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407299686863817,
      "coreWealth": 2.0024780470612416
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193331831607456,
      "coreWealth": 1.9350715647628163
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327271907348134,
      "coreWealth": 1.9774227610380772
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982574851051183,
      "coreWealth": 2.0275988070377804
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011558742615827,
      "coreWealth": 2.044720753648346
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087411618774536,
      "coreWealth": 2.0785897904980284
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531876651030172,
      "coreWealth": 2.133202657657392
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384091975203507,
      "coreWealth": 2.111233467840109
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582089542130574,
      "coreWealth": 2.1658966106926165
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466965625850237,
      "coreWealth": 2.117926880381573
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126228595340616,
      "coreWealth": 2.1581577090318653
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501227107486135,
      "coreWealth": 2.1518100932195217
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751344807358753,
      "coreWealth": 2.1138321401052487
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715493017089187,
      "coreWealth": 2.119820227989444
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457171497389567,
      "coreWealth": 2.15495340441724
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531740819876416,
      "coreWealth": 2.2388629788575445
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768689132151654,
      "coreWealth": 2.2436979607284075
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304964968025657,
      "coreWealth": 2.296824221871199
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817574910554579,
      "coreWealth": 2.444294450363406
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962326638377854,
      "coreWealth": 2.551530525758418
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988660969401213,
      "coreWealth": 2.550189473073912
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315465701124396,
      "coreWealth": 2.5994367467764756
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508462330743466,
      "coreWealth": 2.7970987205479223
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440374586484313,
      "coreWealth": 2.9572179906863574
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676418000626684,
      "coreWealth": 2.7416522173662248
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509740086439462,
      "coreWealth": 2.974222476191744
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764632054215929,
      "coreWealth": 3.168151645560253
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471404687570256,
      "coreWealth": 3.0990505700525732
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546196942038412,
      "coreWealth": 2.9561111605084847
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424048682024517,
      "coreWealth": 3.1027128029120186
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103130009285556,
      "coreWealth": 3.0873059442263178
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5024018262920533,
      "coreWealth": 3.0167320499263406
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502401826292041,
      "cagr": 0.14108010802689197,
      "annVol": 0.11149364390372858,
      "sharpe": 1.2415420805471347,
      "mdd": -0.12331732507033188,
      "calmar": 1.1440412605968333
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167320499263277,
      "cagr": 0.12328583791756631,
      "annVol": 0.10945797636978807,
      "sharpe": 1.1187180845465385,
      "mdd": -0.1355530699089279,
      "calmar": 0.9095023668618984
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955191925646925,
      "cagr": 0.14419589444764047,
      "annVol": 0.10819058265298047,
      "sharpe": 1.3012997553004155,
      "mdd": -0.10212252135346411,
      "calmar": 1.4119891727756404
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.812405661051163,
      "cagr": 0.11435310055581538,
      "annVol": 0.10724479908997457,
      "sharpe": 1.0649244628638872,
      "mdd": -0.11135951243922226,
      "calmar": 1.0268821948931122
    }
  ]
} as PdsCanonicalSummary;
