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
  "generatedAt": "2026-11-08T17:30:15.079082+09:00",
  "systemAsOfKst": "2026-11-08T12:39:22.004013+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-06",
  "completedThrough": "2026-10-31",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "NORMAL",
  "adaptiveRiskBudget": 1.0,
  "previewAvailable": true,
  "previewSignal": "2026-11",
  "previewHolding": "2026-12",
  "previewThrough": "2026-11-06",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.07153915404014644,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334710449532382,
      "adaptiveDynamicFx": 0.012334710449533048
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897607012076316,
      "adaptiveDynamicFx": 0.010897607012076316
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918908725312,
      "adaptiveDynamicFx": 0.0723391890872529
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301262487720384,
      "adaptiveDynamicFx": 0.05830126248772016
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020757258273434,
      "adaptiveDynamicFx": -0.05020757258273412
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961808192949,
      "adaptiveDynamicFx": 0.07408961808192882
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262416712590714,
      "adaptiveDynamicFx": 0.07262416712590714
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646292041025957,
      "adaptiveDynamicFx": 0.01050733676642146
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625828531359776,
      "adaptiveDynamicFx": -0.03212553949378871
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988856442977,
      "adaptiveDynamicFx": 0.022686597128055874
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810627392206172,
      "adaptiveDynamicFx": -0.008810627392205728
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889708064899767,
      "adaptiveDynamicFx": -0.02210912309484503
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216020204019356,
      "coreWealth": 1.0296688486967032
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682931730238,
      "coreWealth": 1.0247508322003676
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532903403635,
      "coreWealth": 1.0459296022149844
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706851002166,
      "coreWealth": 1.0564924317059115
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623825865828966,
      "coreWealth": 1.0589612847645917
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.07258923799916,
      "coreWealth": 1.0800316031289134
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613393245490699,
      "coreWealth": 1.0897473048434745
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619231896350887,
      "coreWealth": 1.1033551237431833
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.121866601201667,
      "coreWealth": 1.162701447916451
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851461165564504,
      "coreWealth": 1.1182718348674154
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629244053640565,
      "coreWealth": 1.1115264384474959
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076521234677767,
      "coreWealth": 1.1187189670326954
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967342145427585,
      "coreWealth": 1.1297963764864196
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307194598868977,
      "coreWealth": 1.1267502099905706
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349678815189717,
      "coreWealth": 1.1364658027532215
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.164245118579061,
      "coreWealth": 1.1643762026155713
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586235025113343,
      "coreWealth": 1.160669378388202
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289963477511702,
      "coreWealth": 1.1185065901817108
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226012538604189,
      "coreWealth": 1.1226169206864876
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055666364603554,
      "coreWealth": 1.1062156916430337
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236935096193565,
      "coreWealth": 1.1283259541766257
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.129502365899296,
      "coreWealth": 1.1313358423190067
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586810417283138,
      "coreWealth": 1.1509467854523692
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932133548225536,
      "coreWealth": 1.1706044447971002
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818664574252,
      "coreWealth": 1.1279090933595846
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.184517565952078,
      "coreWealth": 1.1664617486540816
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.206461602482919,
      "coreWealth": 1.1727840731230528
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542397834740355,
      "coreWealth": 1.2088834828065393
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408095260484666,
      "coreWealth": 1.2007767544699535
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425566320137968,
      "coreWealth": 1.2202161245597096
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606142367864823,
      "coreWealth": 1.2312678345450914
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833090364895696,
      "coreWealth": 1.2648143536364944
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028722367345755,
      "coreWealth": 1.2675196650623173
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017567016996494,
      "coreWealth": 1.2539450060237245
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752574641157677,
      "coreWealth": 1.2260186476204118
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503373323410688,
      "coreWealth": 1.3003508296570576
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934421404287218,
      "coreWealth": 1.3284939582633664
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164161530498056,
      "coreWealth": 1.362058451830791
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.492604865403452,
      "coreWealth": 1.44210031703681
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558641739826142,
      "coreWealth": 1.5051931031003603
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.492268803677528,
      "coreWealth": 1.4583268905289253
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446088091517253,
      "coreWealth": 1.433205353165974
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349757660782994,
      "coreWealth": 1.5404174627865599
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903082607338332,
      "coreWealth": 1.6221460089990163
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324542349027635,
      "coreWealth": 1.6302702508533573
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640319742135807,
      "coreWealth": 1.6527257759569725
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950231444972121,
      "coreWealth": 1.6727358790889708
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447510343698198,
      "coreWealth": 1.7375626151780932
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801370013132782,
      "coreWealth": 1.76643259769737
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153829465967328,
      "coreWealth": 1.783790506237316
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.846075691786119,
      "coreWealth": 1.8026131663118228
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800007683092144,
      "coreWealth": 1.8231939050929056
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241755285543466,
      "coreWealth": 1.7503563071223756
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912171178068249,
      "coreWealth": 1.8277615550601662
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786694929616494,
      "coreWealth": 1.7981653171667131
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264938558221,
      "coreWealth": 1.8450841692198352
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720057015702543,
      "coreWealth": 1.7800095578909316
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700068820479805,
      "coreWealth": 1.7860586030275767
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.921760951133931,
      "coreWealth": 1.8230995620279986
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227544631705884,
      "coreWealth": 1.7820990273891044
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114090522472367,
      "coreWealth": 1.7798524860381664
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931104210659782,
      "coreWealth": 1.7341844629659116
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239364712092168,
      "coreWealth": 1.762197970674822
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945524932776376,
      "coreWealth": 1.7298032333421316
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459044471530648,
      "coreWealth": 1.675213306311386
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673620073124646,
      "coreWealth": 1.6964388729009832
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924137689380522,
      "coreWealth": 1.7316788411455752
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437472108124189,
      "coreWealth": 1.6959492399352674
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973204091405798,
      "coreWealth": 1.7712362072748562
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025984198810237,
      "coreWealth": 1.7161172066684398
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347563951569764,
      "coreWealth": 1.7600517255076402
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832390009333258,
      "coreWealth": 1.7754125117613662
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.983464871747161,
      "coreWealth": 1.787793758676757
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278406353464247,
      "coreWealth": 1.8272569023791354
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344578739570407,
      "coreWealth": 1.865679126085727
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035531206379399,
      "coreWealth": 1.8338143991131362
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044446628252315,
      "coreWealth": 1.7905730778662676
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929098641181588,
      "coreWealth": 1.7805231652344833
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018854510175466,
      "coreWealth": 1.8449842042784435
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994954643008366,
      "coreWealth": 1.9271270943023757
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451890927613,
      "coreWealth": 1.9052126248769108
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685601126948924,
      "coreWealth": 1.949419619563393
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407289562487356,
      "coreWealth": 2.0024771422738836
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933309490066955,
      "coreWealth": 1.9350707860864678
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232726278544457,
      "coreWealth": 1.977421953153456
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982566920355896,
      "coreWealth": 2.027598107365603
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301155048219213,
      "coreWealth": 2.0447200196581017
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087403073071693,
      "coreWealth": 2.0785890211172586
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186833184216,
      "coreWealth": 2.133201903509557
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384091097014845,
      "coreWealth": 2.1112326901598424
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458208088086069,
      "coreWealth": 2.165895847559161
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466964767216216,
      "coreWealth": 2.117926143231431
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126218989528097,
      "coreWealth": 2.1581568839634264
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012259393750114,
      "coreWealth": 2.151809088291468
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751333719725266,
      "coreWealth": 2.1138311931912113
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715482566567215,
      "coreWealth": 2.119819331659855
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571704310769698,
      "coreWealth": 2.154952469255022
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531739688788345,
      "coreWealth": 2.2388619786164554
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768677648719205,
      "coreWealth": 2.2436969608578394
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304954156635465,
      "coreWealth": 2.2968232778721185
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817573631806078,
      "coreWealth": 2.444293341027204
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962325321676219,
      "coreWealth": 2.5515293916483746
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998864746776413,
      "coreWealth": 2.550188324915526
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031545196269152,
      "coreWealth": 2.599435568757723
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.25084471744862,
      "coreWealth": 2.797097416470627
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440373068627411,
      "coreWealth": 2.9572166859930453
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676402880726156,
      "coreWealth": 2.7416509487599603
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097385090450417,
      "coreWealth": 2.9742211394768314
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646303450941607,
      "coreWealth": 3.168150207237241
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747138773084345,
      "coreWealth": 3.099049167656423
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461953517557143,
      "coreWealth": 2.9561098348482107
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424032364765457,
      "coreWealth": 3.102711412957574
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610311378747785,
      "coreWealth": 3.0873045570423536
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.502400225613628,
      "coreWealth": 3.0167306712102175
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502400225613628,
      "cagr": 0.14108005311830518,
      "annVol": 0.11149366202676772,
      "sharpe": 1.2415414640757256,
      "mdd": -0.12331721726863754,
      "calmar": 1.1440418154341954
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.01673067121021,
      "cagr": 0.12328578386523725,
      "annVol": 0.10945801618872235,
      "sharpe": 1.1187172766117248,
      "mdd": -0.13555296601374445,
      "calmar": 0.909502665199791
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.095518771875538,
      "cagr": 0.14419585262327206,
      "annVol": 0.10819058515614746,
      "sharpe": 1.301299388644727,
      "mdd": -0.10212252859956783,
      "calmar": 1.4119886630371026
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124052971988935,
      "cagr": 0.11435305982230526,
      "annVol": 0.10724481136580764,
      "sharpe": 1.064924011160422,
      "mdd": -0.1113594943868429,
      "calmar": 1.0268819955760866
    }
  ]
} as PdsCanonicalSummary;
