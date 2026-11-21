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
  "generatedAt": "2026-11-21T22:03:56.686426+09:00",
  "systemAsOfKst": "2026-11-21T21:56:13.814750+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-20",
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
  "previewThrough": "2026-11-20",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.19193574699976357,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334682673214914,
      "adaptiveDynamicFx": 0.012334682673215136
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897632850419559,
      "adaptiveDynamicFx": 0.01089763285041867
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723391916543199,
      "adaptiveDynamicFx": 0.07233919165432057
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301248176471754,
      "adaptiveDynamicFx": 0.05830124817647131
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756012910266,
      "adaptiveDynamicFx": -0.050207560129102324
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408962002883368,
      "adaptiveDynamicFx": 0.07408962002883412
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418622503097,
      "adaptiveDynamicFx": 0.07262418622503075
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646299046705327,
      "adaptiveDynamicFx": 0.010507307816189915
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583446543989,
      "adaptiveDynamicFx": -0.03212556441879222
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129901069550266,
      "adaptiveDynamicFx": 0.022686632354128378
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810637754171458,
      "adaptiveDynamicFx": -0.008810637754171013
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590710278,
      "adaptiveDynamicFx": -0.02210910535947941
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019611003682,
      "coreWealth": 1.0296687889268745
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682075609874,
      "coreWealth": 1.0247507469226544
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532618453054,
      "coreWealth": 1.0459295734815723
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497067213442297,
      "coreWealth": 1.0564923012098295
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623825297617728,
      "coreWealth": 1.0589612281264527
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890298617926,
      "coreWealth": 1.080031393547342
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613391052230845,
      "coreWealth": 1.0897470796469713
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619230333765024,
      "coreWealth": 1.1033549613880176
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.121866468273169,
      "coreWealth": 1.1627013101494836
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085145990283285,
      "coreWealth": 1.1182717047395683
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629240712663088,
      "coreWealth": 1.111526089073183
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076521139470061,
      "coreWealth": 1.1187188680930118
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096734166049882,
      "coreWealth": 1.1297963265316728
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.130719274868455,
      "coreWealth": 1.1267500256216074
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349675466498967,
      "coreWealth": 1.1364654674421844
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642449647899407,
      "coreWealth": 1.1643760488091308
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586232116645803,
      "coreWealth": 1.1606690870278717
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289961782572042,
      "coreWealth": 1.118506422262547
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226011656615644,
      "coreWealth": 1.1226168324863974
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055658571850493,
      "coreWealth": 1.1062149119102278
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236934599026525,
      "coreWealth": 1.12832590425496
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295021557488232,
      "coreWealth": 1.1313356318273993
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586808757489662,
      "coreWealth": 1.1509466205809362
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932132062354364,
      "coreWealth": 1.1706042990253926
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618184478888083,
      "coreWealth": 1.1279088829984525
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845175314664154,
      "coreWealth": 1.1664617146940837
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064613658622565,
      "coreWealth": 1.1727838431074837
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542397001883827,
      "coreWealth": 1.2088834025326893
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408095335369906,
      "coreWealth": 1.2007767617168676
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425564800102988,
      "coreWealth": 1.2202159752891495
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606140617295871,
      "coreWealth": 1.2312676635634205
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833087269025347,
      "coreWealth": 1.2648140485111365
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.302872097029257,
      "coreWealth": 1.2675195291478079
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017565914069957,
      "coreWealth": 1.253944899781962
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.275257146020272,
      "coreWealth": 1.2260183418068604
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503372040363828,
      "coreWealth": 1.300350706101922
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934419371618931,
      "coreWealth": 1.3284937644707755
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164159893818684,
      "coreWealth": 1.3620582944439201
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926047697801912,
      "coreWealth": 1.4421002246491008
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558638651387293,
      "coreWealth": 1.5051928043148344
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922683734676145,
      "coreWealth": 1.458326470104206
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446084056369939,
      "coreWealth": 1.4332049528365047
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349755578943667,
      "coreWealth": 1.5404172538645817
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903079888468,
      "coreWealth": 1.6221457316688397
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324539712561605,
      "coreWealth": 1.6302699875594717
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640317434492602,
      "coreWealth": 1.6527255467605697
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950227219122438,
      "coreWealth": 1.6727354620604233
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447508172290251,
      "coreWealth": 1.7375623989319222
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.780136771858553,
      "coreWealth": 1.766432370009102
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153826146206378,
      "coreWealth": 1.7837901800384774
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460752381741472,
      "coreWealth": 1.8026127233793285
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800003237476486,
      "coreWealth": 1.8231934739643918
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.824174962780988,
      "coreWealth": 1.750355764244263
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912165997416037,
      "coreWealth": 1.8277610543774665
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786689565722283,
      "coreWealth": 1.7981648037624889
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264932422884007,
      "coreWealth": 1.8450835816128153
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720050537421087,
      "coreWealth": 1.7800089418990637
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700064802991578,
      "coreWealth": 1.7860582193140482
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217603734205608,
      "coreWealth": 1.823099013973888
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227540312732765,
      "coreWealth": 1.7820986270864185
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114087770201993,
      "coreWealth": 1.7798522297541848
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931101068044884,
      "coreWealth": 1.7341841750865652
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239357075187455,
      "coreWealth": 1.7621972711850973
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945522272780275,
      "coreWealth": 1.7298029904737067
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459041942067114,
      "coreWealth": 1.6752130767550342
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673616895431249,
      "coreWealth": 1.696438584217669
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924135585391724,
      "coreWealth": 1.7316786486172349
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.843747132502042,
      "coreWealth": 1.6959491679023877
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973200678373392,
      "coreWealth": 1.7712358886525252
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025982172936031,
      "coreWealth": 1.7161170239374184
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347560826930752,
      "coreWealth": 1.7600514412586121
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983238673609026,
      "coreWealth": 1.7754122187378563
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834644184401997,
      "coreWealth": 1.7877933500890562
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278404088949267,
      "coreWealth": 1.8272566983270742
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034457258791033,
      "coreWealth": 1.86567856195393
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355306156598476,
      "coreWealth": 1.833813866932636
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044442684041126,
      "coreWealth": 1.7905727255293618
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929094981343398,
      "coreWealth": 1.780522838253984
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188540812585574,
      "coreWealth": 1.8449838123012556
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.099494953364305,
      "coreWealth": 1.927126625313688
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144512555884236,
      "coreWealth": 1.905212052408821
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168559526208753,
      "coreWealth": 1.94941909234371
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407282244962987,
      "coreWealth": 2.002476488327092
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933301390795927,
      "coreWealth": 1.9350700715266065
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327257914753758,
      "coreWealth": 1.9774215217790045
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.29825576179287,
      "coreWealth": 2.0275972866747014
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301154253505215,
      "coreWealth": 2.044719313505076
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087395390475685,
      "coreWealth": 2.0785883294431255
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186114552118,
      "coreWealth": 2.1332012520579533
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840903937005953,
      "coreWealth": 2.111232067339677
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582073422471806,
      "coreWealth": 2.1658951904100237
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.46696393023868,
      "coreWealth": 2.1179254246737114
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126213553451997,
      "coreWealth": 2.1581564170445944
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012254517227914,
      "coreWealth": 2.151808668763412
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751328399881323,
      "coreWealth": 2.1138307388620827
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715476728732306,
      "coreWealth": 2.119818830955284
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571699179152002,
      "coreWealth": 2.1549520192092357
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317390154108086,
      "coreWealth": 2.2388613831368547
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768670972916388,
      "coreWealth": 2.243696379590986
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304946026830374,
      "coreWealth": 2.2968225680162817
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817572963983483,
      "coreWealth": 2.4442927616796877
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623245738415727,
      "coreWealth": 2.5515287475185637
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998863907434975,
      "coreWealth": 2.550187611152524
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031544425266576,
      "coreWealth": 2.5994349076521273
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.25084389845452,
      "coreWealth": 2.797096711790323
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403721553612856,
      "coreWealth": 2.9572159009834733
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676394635044934,
      "coreWealth": 2.741650256921893
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509737629746763,
      "coreWealth": 2.974220394342264
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646294689704907,
      "coreWealth": 3.168149469929437
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471378746576143,
      "coreWealth": 3.0990484246178744
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194479272045,
      "coreWealth": 2.9561091075454944
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642402384668081,
      "coreWealth": 3.1027106873608683
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103104967018402,
      "coreWealth": 3.0873038027737794
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023993969159237,
      "coreWealth": 3.0167299574260755
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.50239939691592,
      "cagr": 0.14108002469121228,
      "annVol": 0.11149364385131293,
      "sharpe": 1.2415414243715552,
      "mdd": -0.12331726778871044,
      "calmar": 1.1440411162282336
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.016729957426064,
      "cagr": 0.12328575588144353,
      "annVol": 0.10945798361055101,
      "sharpe": 1.1187173492348974,
      "mdd": -0.13555297000644573,
      "calmar": 0.9095024319687065
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955185961210505,
      "cagr": 0.14419583514998768,
      "annVol": 0.10819055127555965,
      "sharpe": 1.3012996207817125,
      "mdd": -0.10212254980753876,
      "calmar": 1.4119881987057772
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.812405145189594,
      "cagr": 0.11435304280475855,
      "annVol": 0.10724477209061381,
      "sharpe": 1.0649242194611777,
      "mdd": -0.11135946169732425,
      "calmar": 1.0268821442004712
    }
  ]
} as PdsCanonicalSummary;
