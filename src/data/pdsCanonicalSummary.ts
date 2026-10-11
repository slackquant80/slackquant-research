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
  "generatedAt": "2026-10-11T15:45:31.062417+09:00",
  "systemAsOfKst": "2026-10-11T15:42:36.564207+09:00",
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
      "coreDynamicFx": 0.05137456621462233,
      "adaptiveDynamicFx": 0.05056188258075478
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334689652957476,
      "adaptiveDynamicFx": 0.01166435727626114
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897621615731712,
      "adaptiveDynamicFx": 0.011720341181219895
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920974011454,
      "adaptiveDynamicFx": 0.0713181150931792
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830126396823343,
      "adaptiveDynamicFx": 0.05355638658824402
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756728382214,
      "adaptiveDynamicFx": -0.05253882427676693
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961693245164,
      "adaptiveDynamicFx": 0.08283400411024577
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262415074639317,
      "adaptiveDynamicFx": 0.07552313740518635
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646292480847136,
      "adaptiveDynamicFx": 0.009813966985873002
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583564606327,
      "adaptiveDynamicFx": -0.034479595843748934
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129895950279037,
      "adaptiveDynamicFx": 0.02998425520883341
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810629819081539,
      "adaptiveDynamicFx": -0.008144829752565808
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019204710385,
      "coreWealth": 1.0296687479767268
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287681706010459,
      "coreWealth": 1.0247507101070477
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372531414292665,
      "coreWealth": 1.0459294520582902
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066348524073,
      "coreWealth": 1.056492214158902
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623822854101774,
      "coreWealth": 1.0589609845617682
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.072589004669005,
      "coreWealth": 1.0800313681797502
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613390982379869,
      "coreWealth": 1.0897470724749103
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061922949174145,
      "coreWealth": 1.1033548739004273
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.121866336013232,
      "coreWealth": 1.1627011730754147
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851457575510906,
      "coreWealth": 1.1182714649028738
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.062923855441608,
      "coreWealth": 1.1115258633799359
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765207561031864,
      "coreWealth": 1.1187184696988322
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096734048227312,
      "coreWealth": 1.1297962051572221
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307189581330517,
      "coreWealth": 1.1267497099980646
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134967350824725,
      "coreWealth": 1.136465271358566
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642446184275177,
      "coreWealth": 1.1643757024077117
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.158623023625058,
      "coreWealth": 1.1606688986563134
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289958484224543,
      "coreWealth": 1.1185060954923653
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226005986322858,
      "coreWealth": 1.1226162654492056
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055658789783775,
      "coreWealth": 1.1062149337163507
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236935221185618,
      "coreWealth": 1.1283259667273562
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295019702611158,
      "coreWealth": 1.1313354460385991
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.158680722800184,
      "coreWealth": 1.1509464686530972
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932130529746927,
      "coreWealth": 1.1706041486686225
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618183389083474,
      "coreWealth": 1.1279087771987648
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845174250998376,
      "coreWealth": 1.1664616099488716
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064611857349348,
      "coreWealth": 1.1727836680082895
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542392230083939,
      "coreWealth": 1.2088829426086656
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408091542628765,
      "coreWealth": 1.200776394679436
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425561352606336,
      "coreWealth": 1.220215636737899
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606137027323598,
      "coreWealth": 1.2312673129234484
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283308384839468,
      "coreWealth": 1.264813711377781
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028715909337254,
      "coreWealth": 1.2675190367848368
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017563849741123,
      "coreWealth": 1.253944700931063
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752569693188291,
      "coreWealth": 1.226018171928011
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503370513034842,
      "coreWealth": 1.3003505590228523
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393441633856171,
      "coreWealth": 1.3284934753020932
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164157052135014,
      "coreWealth": 1.3620580211810553
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926045526801446,
      "coreWealth": 1.4421000148949563
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558636919477666,
      "coreWealth": 1.5051926367643136
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922682526989137,
      "coreWealth": 1.4583263520824041
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446081489963802,
      "coreWealth": 1.4332046982217554
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349751656789206,
      "coreWealth": 1.540416860258674
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903078265019515,
      "coreWealth": 1.622145566073863
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.632453611071956,
      "coreWealth": 1.6302696278571336
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640313969855036,
      "coreWealth": 1.6527252026508397
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.695022515793243,
      "coreWealth": 1.6727352586516004
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.744750540538326,
      "coreWealth": 1.7375621233811844
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801365634639843,
      "coreWealth": 1.7664321632188498
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.815382344204996,
      "coreWealth": 1.783789914328766
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460750078623758,
      "coreWealth": 1.802612498489817
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800001449981556,
      "coreWealth": 1.8231933006160514
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241748743983293,
      "coreWealth": 1.7503556794381878
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912164462184728,
      "coreWealth": 1.8277609060054467
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786690936259554,
      "coreWealth": 1.798164934943218
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264933174850007,
      "coreWealth": 1.8450836536317472
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720051423778306,
      "coreWealth": 1.7800090261789399
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700065576743625,
      "coreWealth": 1.7860582932157152
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217602026430018,
      "coreWealth": 1.8230988519638731
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227537350992234,
      "coreWealth": 1.782098352578399
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114082634126603,
      "coreWealth": 1.7798517514967018
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931097351164368,
      "coreWealth": 1.7341838346015828
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239354279453211,
      "coreWealth": 1.7621970151144026
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945519484186042,
      "coreWealth": 1.7298027358637356
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459036195661098,
      "coreWealth": 1.6752125552515469
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673609628203667,
      "coreWealth": 1.6964379240131886
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924125848042588,
      "coreWealth": 1.7316777575879039
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437465248322353,
      "coreWealth": 1.6959486089444318
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973198133405171,
      "coreWealth": 1.7712356510679763
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025975333987986,
      "coreWealth": 1.716116407073842
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347554795051192,
      "coreWealth": 1.7600508925373204
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832377960858998,
      "coreWealth": 1.7754114331716373
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834634574693566,
      "coreWealth": 1.7877924839190895
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278394997252835,
      "coreWealth": 1.8272558790878792
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034456542748568,
      "coreWealth": 1.865677905314379
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355298173427516,
      "coreWealth": 1.8338131477270527
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044433331808786,
      "coreWealth": 1.7905718900931937
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929086185352527,
      "coreWealth": 1.7805220523947733
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188531046074027,
      "coreWealth": 1.844982919762457
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994943058756608,
      "coreWealth": 1.9271260309837834
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144506617804706,
      "coreWealth": 1.9052115173621542
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168558799599125,
      "coreWealth": 1.9494184391604794
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407276737951567,
      "coreWealth": 2.0024759961807796
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933296896463883,
      "coreWealth": 1.9350696750132095
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232724912241401,
      "coreWealth": 1.9774207430822934
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982553373836945,
      "coreWealth": 2.027596912246862
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301153701649875,
      "coreWealth": 2.044718823147111
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087389024093756,
      "coreWealth": 2.078587756269435
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531854804948473,
      "coreWealth": 2.1332006772747674
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840896588316984,
      "coreWealth": 2.111231416576252
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582066008255823,
      "coreWealth": 2.16589453715287
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669631394405527,
      "coreWealth": 2.1179247457616723
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512620434792972,
      "coreWealth": 2.158155626358109
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501224533819521,
      "coreWealth": 2.1518078790895907
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751320938548305,
      "coreWealth": 2.113830101643939
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471546818993242,
      "coreWealth": 2.1198180985919377
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571691861894482,
      "coreWealth": 2.154951377481563
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317382668696746,
      "coreWealth": 2.2388607211887335
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768662929688753,
      "coreWealth": 2.243695679261454
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630493857530561,
      "coreWealth": 2.296821917384615
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175719875427623,
      "coreWealth": 2.4442919146006266
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962323526181243,
      "coreWealth": 2.5515278451409
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988628675283433,
      "coreWealth": 2.5501867268319387
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315433403361354,
      "coreWealth": 2.599433977365205
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508427898689587,
      "coreWealth": 2.797095757939194
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403710334803375,
      "coreWealth": 2.957214936656319
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676383733355605,
      "coreWealth": 2.7416493422365162
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097364486897717,
      "coreWealth": 2.9742193934914103
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646280776195282,
      "coreWealth": 3.1681482990285623
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471365144892985,
      "coreWealth": 3.0990472996986047
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546193187619933,
      "coreWealth": 2.9561080308237564
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424010398196502,
      "coreWealth": 3.102709541777462
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103091926051616,
      "coreWealth": 3.0873026875946934
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.6103091926051607,
      "cagr": 0.146082251184823,
      "annVol": 0.11164409423563769,
      "sharpe": 1.2799629548434022,
      "mdd": -0.12331717284511745,
      "calmar": 1.1846059053615976
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087302687594715,
      "cagr": 0.12719051795244396,
      "annVol": 0.10964340027406072,
      "sharpe": 1.1493353351902773,
      "mdd": -0.13555286821414203,
      "calmar": 0.9383093078599598
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341261235122922,
      "cagr": 0.16019276571931385,
      "annVol": 0.116949848570775,
      "sharpe": 1.3324599931836385,
      "mdd": -0.11040268656307883,
      "calmar": 1.4509861191447306
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183838126625186,
      "cagr": 0.12797293737852078,
      "annVol": 0.11668645614583875,
      "sharpe": 1.0931228924838925,
      "mdd": -0.1195326143679587,
      "calmar": 1.0706110466602874
    }
  ]
} as PdsCanonicalSummary;
