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
  "generatedAt": "2026-11-11T17:32:03.275383+09:00",
  "systemAsOfKst": "2026-11-11T17:29:14.445369+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-10",
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
  "previewThrough": "2026-11-10",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.07390964456133894,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334695517282723,
      "adaptiveDynamicFx": 0.012334695517282945
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897614435324554,
      "adaptiveDynamicFx": 0.01089761443532522
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920997818633,
      "adaptiveDynamicFx": 0.0723392099781861
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.0583012327044381,
      "adaptiveDynamicFx": 0.05830123270443788
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755167062574,
      "adaptiveDynamicFx": -0.05020755167062607
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.0740896226231682,
      "adaptiveDynamicFx": 0.07408962262316798
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262415187414017,
      "adaptiveDynamicFx": 0.07262415187413995
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646297821371714,
      "adaptiveDynamicFx": 0.010507331201033976
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625831167138704,
      "adaptiveDynamicFx": -0.03212561399210634
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129893331584665,
      "adaptiveDynamicFx": 0.02268663676549454
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810627081568434,
      "adaptiveDynamicFx": -0.008810627081568434
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889708064899434,
      "adaptiveDynamicFx": -0.02210912309484514
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.021602005803699,
      "coreWealth": 1.029668833983195
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.028768254891944,
      "coreWealth": 1.0247507940687801
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.037253248961729,
      "coreWealth": 1.0459295604902303
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706822378812,
      "coreWealth": 1.056492402897527
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623824038441627,
      "coreWealth": 1.0589611026143493
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725892345016532,
      "coreWealth": 1.0800315996071368
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613392875470387,
      "coreWealth": 1.0897472668510395
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619230206846753,
      "coreWealth": 1.1033549482010085
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218665272100683,
      "coreWealth": 1.162701371231629
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851460411213765,
      "coreWealth": 1.1182717571295708
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629242815328952,
      "coreWealth": 1.1115263089541736
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076521180787871,
      "coreWealth": 1.1187189110304088
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967340795835294,
      "coreWealth": 1.1297962374587063
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307192459381157,
      "coreWealth": 1.1267499967928263
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134967616032796,
      "coreWealth": 1.1364655369166563
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642449644264126,
      "coreWealth": 1.164376048445563
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586233853429118,
      "coreWealth": 1.1606692610128815
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289961709944976,
      "coreWealth": 1.1185064150673205
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122600996829638,
      "coreWealth": 1.1226166636521149
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055663574234817,
      "coreWealth": 1.1062154124423391
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236938681011281,
      "coreWealth": 1.1283263141362396
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295024017999824,
      "coreWealth": 1.1313358782779641
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586810029345944,
      "coreWealth": 1.1509467469175942
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.193213530539218,
      "coreWealth": 1.1706046171842925
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618187770066681,
      "coreWealth": 1.1279092025104707
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845178656675535,
      "coreWealth": 1.1664620438009328
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064616073998526,
      "coreWealth": 1.1727840779027263
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.254239626688933,
      "coreWealth": 1.2088833316911523
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408096564140059,
      "coreWealth": 1.2007768806294457
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425566847261982,
      "coreWealth": 1.2202161763243624
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.260614205301362,
      "coreWealth": 1.2312678037929201
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833089010929053,
      "coreWealth": 1.2648142201911197
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028721958390015,
      "coreWealth": 1.2675196252764074
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017568914504507,
      "coreWealth": 1.2539451888052355
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752573809328005,
      "coreWealth": 1.2260185676492026
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503375666461523,
      "coreWealth": 1.300351055288673
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934425624395235,
      "coreWealth": 1.3284943606042798
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.416416311076903,
      "coreWealth": 1.3620586037932807
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926050692902941,
      "coreWealth": 1.4421005140248178
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555864261984747,
      "coreWealth": 1.5051931882364438
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922688975681917,
      "coreWealth": 1.4583269822840166
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446087590895007,
      "coreWealth": 1.433205303498918
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349758489476004,
      "coreWealth": 1.540417545949628
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.590308379040687,
      "coreWealth": 1.6221461296743411
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.632454322047475,
      "coreWealth": 1.6302703378814656
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.664032167546917,
      "coreWealth": 1.6527259679766981
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950233043077392,
      "coreWealth": 1.6727360367981887
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447512539919892,
      "coreWealth": 1.7375628338953932
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801371888475401,
      "coreWealth": 1.766432783787877
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.815383085121651,
      "coreWealth": 1.7837906423515164
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.84607580567638,
      "coreWealth": 1.8026132775207244
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800008940683242,
      "coreWealth": 1.823194027052007
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241757651392283,
      "coreWealth": 1.7503565341333156
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912173588708998,
      "coreWealth": 1.8277617880358525
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786698009785487,
      "coreWealth": 1.798165611984542
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264944460598226,
      "coreWealth": 1.8450847345152976
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720061499487703,
      "coreWealth": 1.7800099842347217
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700072661593155,
      "coreWealth": 1.786058969895378
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217612819404433,
      "coreWealth": 1.8230998758511956
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227552456025674,
      "coreWealth": 1.7820997525837428
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114092355252625,
      "coreWealth": 1.7798526567016932
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931105665156753,
      "coreWealth": 1.7341845962051365
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239368018966265,
      "coreWealth": 1.7621982735624964
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.894552965272137,
      "coreWealth": 1.7298036642922265
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459047688069563,
      "coreWealth": 1.675213598221862
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673626468583457,
      "coreWealth": 1.6964394539080168
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924138180960353,
      "coreWealth": 1.7316788861282353
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437475229373548,
      "coreWealth": 1.6959495270397098
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973205275967722,
      "coreWealth": 1.7712363178591632
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025987477553754,
      "coreWealth": 1.7161175024065098
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347565175023722,
      "coreWealth": 1.7600518368054705
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983239629290083,
      "coreWealth": 1.7754130742716898
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.983465315828247,
      "coreWealth": 1.7877941589487103
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027841228870905,
      "coreWealth": 1.8272574371951589
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344581762751224,
      "coreWealth": 1.8656794033234656
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355312529557685,
      "coreWealth": 1.8338144410738715
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.00444513942743,
      "coreWealth": 1.7905735036156298
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929102490301989,
      "coreWealth": 1.7805235091259888
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188550182904703,
      "coreWealth": 1.8449846686329177
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.09949602739699,
      "coreWealth": 1.9271276111683737
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144523354670834,
      "coreWealth": 1.9052130254261885
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168560580426767,
      "coreWealth": 1.9494200400293278
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.24072942603522,
      "coreWealth": 2.002477562108981
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193331276730195,
      "coreWealth": 1.9350710752211882
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232726354237491,
      "coreWealth": 1.9774220201912416
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982570328209313,
      "coreWealth": 2.0275984080176896
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011553850186557,
      "coreWealth": 2.044720318925426
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308740907688401,
      "coreWealth": 2.0785895616482954
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531872661148876,
      "coreWealth": 2.1332022959681898
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384091588052124,
      "coreWealth": 2.1112331249980563
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458208560660873,
      "coreWealth": 2.165896263938786
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669651691727648,
      "coreWealth": 2.1179264883171234
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126222159864313,
      "coreWealth": 2.158157156271909
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501226565051106,
      "coreWealth": 2.1518096265617017
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475134056335211,
      "coreWealth": 2.1138317776555353
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715488807088537,
      "coreWealth": 2.119819866902384
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571710493659666,
      "coreWealth": 2.154953011497982
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317402312289445,
      "coreWealth": 2.238862458306212
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768682863444594,
      "coreWealth": 2.243697414907646
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304959939477772,
      "coreWealth": 2.296823782802342
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175742920387794,
      "coreWealth": 2.444293913790353
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623259946786686,
      "coreWealth": 2.551529971323219
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988653838459616,
      "coreWealth": 2.5501888666696235
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315458625425564,
      "coreWealth": 2.599436140061995
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.250845495251524,
      "coreWealth": 2.797098085709119
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403737949563578,
      "coreWealth": 2.9572173103183563
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676410498798196,
      "coreWealth": 2.7416515879396655
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097393421333885,
      "coreWealth": 2.974221845452183
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646311851551286,
      "coreWealth": 3.1681509141962194
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471395874812745,
      "coreWealth": 3.0990498411986067
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546196112603302,
      "coreWealth": 2.9561104690910334
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424040348711095,
      "coreWealth": 3.1027120930546643
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.61031217123946,
      "coreWealth": 3.087305234729904
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5024009944179593,
      "coreWealth": 3.0167313334062467
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.5024009944179375,
      "cagr": 0.14108007949084977,
      "annVol": 0.11149364764468242,
      "sharpe": 1.2415418172353085,
      "mdd": -0.123317251398672,
      "calmar": 1.144041712661535
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.016731333406267,
      "cagr": 0.12328580982652304,
      "annVol": 0.10945798659959093,
      "sharpe": 1.118717760867024,
      "mdd": -0.13555293511009348,
      "calmar": 0.9095030640715577
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.095518924312986,
      "cagr": 0.14419586777840565,
      "annVol": 0.1081905599506832,
      "sharpe": 1.30129978929156,
      "mdd": -0.10212250023464031,
      "calmar": 1.4119892036240405
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124054290413993,
      "cagr": 0.1143530745821646,
      "annVol": 0.10724478090884747,
      "sharpe": 1.0649244071152744,
      "mdd": -0.11135945348981502,
      "calmar": 1.026882505243467
    }
  ]
} as PdsCanonicalSummary;
