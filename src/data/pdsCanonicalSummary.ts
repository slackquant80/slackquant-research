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
  "generatedAt": "2026-10-15T16:00:46.201743+09:00",
  "systemAsOfKst": "2026-10-15T15:56:00.048230+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "2026-10-01",
  "markThrough": "2026-10-14",
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
  "previewThrough": "2026-10-14",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.11451948526415265,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.08233847123798152,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.051374595612786234,
      "adaptiveDynamicFx": 0.05056191130521093
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334686858879396,
      "adaptiveDynamicFx": 0.011664349491237402
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.0108976242411436,
      "adaptiveDynamicFx": 0.011720347554937671
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723392046296123,
      "adaptiveDynamicFx": 0.07131811086049278
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301257522772376,
      "adaptiveDynamicFx": 0.053556381326176794
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756918776681,
      "adaptiveDynamicFx": -0.05253882588370584
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408958516926711,
      "adaptiveDynamicFx": 0.08283398049694779
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418132367321,
      "adaptiveDynamicFx": 0.0755231628537596
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646299633217499,
      "adaptiveDynamicFx": 0.009813933009227283
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362582398650484,
      "adaptiveDynamicFx": -0.03447951719964493
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988111382475,
      "adaptiveDynamicFx": 0.02998424472483152
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810620202306163,
      "adaptiveDynamicFx": -0.008144821786949197
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019782240047,
      "coreWealth": 1.0296688061857246
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.028768340526168,
      "coreWealth": 1.0247508793685924
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372533002009554,
      "coreWealth": 1.0459296121580566
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497067145436711,
      "coreWealth": 1.0564922943653117
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.062382459312389,
      "coreWealth": 1.0589611579039448
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890861668557,
      "coreWealth": 1.0800314502430899
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.061339274715667,
      "coreWealth": 1.089747253676221
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619232158127385,
      "coreWealth": 1.103355150942178
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218665234861165,
      "coreWealth": 1.1627013673721298
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085146170305875,
      "coreWealth": 1.1182718902576205
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629241803730354,
      "coreWealth": 1.1115262031687965
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765210845399347,
      "coreWealth": 1.1187188110097215
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096734155472486,
      "coreWealth": 1.129796315635411
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.130719299947669,
      "coreWealth": 1.1267500506127848
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349675925080531,
      "coreWealth": 1.1364655133608648
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642449998976652,
      "coreWealth": 1.164376083920809
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586232609544038,
      "coreWealth": 1.1606691364047306
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.128996079333865,
      "coreWealth": 1.1185063242583269
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226009728225763,
      "coreWealth": 1.1226166396447181
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055662240326454,
      "coreWealth": 1.106215278973192
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236932152168975,
      "coreWealth": 1.1283256585604844
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295018109385364,
      "coreWealth": 1.1313352864573971
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586806973900579,
      "coreWealth": 1.150946443412584
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932129188884604,
      "coreWealth": 1.1706040171230452
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618182024684094,
      "coreWealth": 1.1279086447410482
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.184517200655109,
      "coreWealth": 1.1664613889253965
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064610538635074,
      "coreWealth": 1.1727835398179611
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542392429350744,
      "coreWealth": 1.2088829618147512
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408090467476391,
      "coreWealth": 1.20077629063301
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425560071623587,
      "coreWealth": 1.2202155109427635
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606136361153575,
      "coreWealth": 1.2312672478572537
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833083462663029,
      "coreWealth": 1.2648136733605226
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028717023799041,
      "coreWealth": 1.2675191452070005
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017562468594348,
      "coreWealth": 1.2539445678891474
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.275256711253985,
      "coreWealth": 1.2260179238272821
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.350336906709863,
      "coreWealth": 1.300350419781772
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393441557777368,
      "coreWealth": 1.32849340276932
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164155440040394,
      "coreWealth": 1.3620578661583225
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926042672258253,
      "coreWealth": 1.442099739099422
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558633533342467,
      "coreWealth": 1.5051923091786952
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922680156075743,
      "coreWealth": 1.4583261203837532
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.444607921387548,
      "coreWealth": 1.433204472409626
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349750776404711,
      "coreWealth": 1.5404167719081203
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903074179934964,
      "coreWealth": 1.6221451493871308
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324531957555277,
      "coreWealth": 1.6302692130963412
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640309304113805,
      "coreWealth": 1.6527247392468372
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950221167846657,
      "coreWealth": 1.67273486488945
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.744750056202498,
      "coreWealth": 1.7375616410408368
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801359892438902,
      "coreWealth": 1.7664315934193977
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.815381865908467,
      "coreWealth": 1.7837894443558604
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460745701011192,
      "coreWealth": 1.8026120710348663
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8799998244053189,
      "coreWealth": 1.8231929897103818
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241744429460809,
      "coreWealth": 1.750355265445594
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.891216018027756,
      "coreWealth": 1.8277604921817145
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786683873985532,
      "coreWealth": 1.7981642589788622
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264928988748926,
      "coreWealth": 1.8450832527112497
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720046451874366,
      "coreWealth": 1.7800085534220216
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700062669405937,
      "coreWealth": 1.786058015533559
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217600031279483,
      "coreWealth": 1.8230986626917374
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227536486991235,
      "coreWealth": 1.782098272498738
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114082363727711,
      "coreWealth": 1.779851726317893
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893109414865219,
      "coreWealth": 1.734183541235347
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239354725564322,
      "coreWealth": 1.7621970559752207
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945514148109235,
      "coreWealth": 1.7298022486582945
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459034582636056,
      "coreWealth": 1.675212408864721
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673609977157688,
      "coreWealth": 1.6964379557145557
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924127180137302,
      "coreWealth": 1.731677879483042
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437464297157509,
      "coreWealth": 1.6959485214526577
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973197269905986,
      "coreWealth": 1.7712355704563476
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025974547089044,
      "coreWealth": 1.716116336096663
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347556322806319,
      "coreWealth": 1.7600510315175142
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832381587238797,
      "coreWealth": 1.775411757808264
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834638815075756,
      "coreWealth": 1.7877928661254512
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278399139368726,
      "coreWealth": 1.8272562523277593
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344568081493972,
      "coreWealth": 1.8656781486975444
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355301218206288,
      "coreWealth": 1.8338134220318247
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044436912323054,
      "coreWealth": 1.7905722099410124
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929087944772768,
      "coreWealth": 1.7805222095864561
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188538426765774,
      "coreWealth": 1.8449835942667228
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.099494787614407,
      "coreWealth": 1.9271264731718338
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144510471548372,
      "coreWealth": 1.9052118646011367
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.16855919296489,
      "coreWealth": 1.9494187927752835
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407279972316316,
      "coreWealth": 2.0024762852269715
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193329802303635,
      "coreWealth": 1.9350697744053078
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327251087171205,
      "coreWealth": 1.977420917091722
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982554501990906,
      "coreWealth": 2.0275970117763458
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301153730604957,
      "coreWealth": 2.044718848875517
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308739116031671,
      "coreWealth": 2.078587948596381
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531855622763667,
      "coreWealth": 2.1332007514110436
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840898537835176,
      "coreWealth": 2.1112315892159104
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458206776511721,
      "coreWealth": 2.165894691947698
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466963367988857,
      "coreWealth": 2.1179249419738153
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512620750158402,
      "coreWealth": 2.158155897233759
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012248099355383,
      "coreWealth": 2.1518081166326923
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751322022900997,
      "coreWealth": 2.1138301942506126
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715469096479454,
      "coreWealth": 2.1198181763454684
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571691555652766,
      "coreWealth": 2.154951350623992
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531738299485189,
      "coreWealth": 2.238860750031207
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768663578385103,
      "coreWealth": 2.2436957357439042
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630493909495157,
      "coreWealth": 2.296821962757626
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175720427399384,
      "coreWealth": 2.444291962485124
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962323667045595,
      "coreWealth": 2.551527966471107
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988630018532496,
      "coreWealth": 2.5501868410597686
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031543483998114,
      "coreWealth": 2.599434100549928
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508429284306213,
      "coreWealth": 2.7970958771606584
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403711591671384,
      "coreWealth": 2.957215044692018
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267638486161657,
      "coreWealth": 2.741649436901089
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097364660845063,
      "coreWealth": 2.974219408232048
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646282035957355,
      "coreWealth": 3.168148405044691
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471366129541686,
      "coreWealth": 3.099047381133396
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461933244945003,
      "coreWealth": 2.9561081449224482
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642401127794675,
      "coreWealth": 3.102709616717301
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103093148332244,
      "coreWealth": 3.0873027921162195
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.610309314833236,
      "cagr": 0.14608225530580188,
      "annVol": 0.11164411024059545,
      "sharpe": 1.279962819905909,
      "mdd": -0.12331725073007482,
      "calmar": 1.1846051906035162
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087302792116214,
      "cagr": 0.1271905220054923,
      "annVol": 0.109643433711171,
      "sharpe": 1.1493350512723306,
      "mdd": -0.13555291573837713,
      "calmar": 0.9383090087931077
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341268463511956,
      "cagr": 0.1601928351045725,
      "annVol": 0.11694984706991951,
      "sharpe": 1.3324605216553218,
      "mdd": -0.11040271695861492,
      "calmar": 1.4509863481405234
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183844333447873,
      "cagr": 0.12797300483687546,
      "annVol": 0.11668645310285188,
      "sharpe": 1.093123431878449,
      "mdd": -0.11953265913528632,
      "calmar": 1.0706112100462553
    }
  ]
} as PdsCanonicalSummary;
