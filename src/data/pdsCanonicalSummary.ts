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
  "generatedAt": "2026-11-03T09:13:02.060495+09:00",
  "systemAsOfKst": "2026-11-03T09:13:02.060495+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "",
  "markThrough": "2026-10-30",
  "completedThrough": "2026-10-30",
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
  "adaptivePreviewAvailable": false,
  "adaptivePreviewState": null,
  "adaptivePreviewRiskBudget": null,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.1285143179328798,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334674600812168,
      "adaptiveDynamicFx": 0.012334674600811502
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897616355990847,
      "adaptiveDynamicFx": 0.010897616355990625
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920745122968,
      "adaptiveDynamicFx": 0.07233920745122902
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301241336398135,
      "adaptiveDynamicFx": 0.05830124133639791
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207557382411894,
      "adaptiveDynamicFx": -0.05020755738241178
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408959970725792,
      "adaptiveDynamicFx": 0.07408959970725881
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417925009212,
      "adaptiveDynamicFx": 0.07262417925009168
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646295277214274,
      "adaptiveDynamicFx": 0.010507378630549624
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.0536258241538925,
      "adaptiveDynamicFx": -0.03212564255076744
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129891079303636,
      "adaptiveDynamicFx": 0.02268663893077094
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810629819081317,
      "adaptiveDynamicFx": -0.008810629819081761
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889708064899323,
      "adaptiveDynamicFx": -0.022109123094844807
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019366649045,
      "coreWealth": 1.0296687642984637
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682473057609,
      "coreWealth": 1.0247507865122225
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372530219106069,
      "coreWealth": 1.0459293315398934
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706598716159,
      "coreWealth": 1.0564921777890601
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623822831443344,
      "coreWealth": 1.0589609823032238
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.072589046510313,
      "coreWealth": 1.0800314103113837
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.061339105828097,
      "coreWealth": 1.08974708026818
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061922977331787,
      "coreWealth": 1.1033549031566672
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218662759300058,
      "coreWealth": 1.1627011108052192
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085145952559797,
      "coreWealth": 1.1182716658645164
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629240010252152,
      "coreWealth": 1.1115260156203295
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076520912414146,
      "coreWealth": 1.1187186321369071
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967339298902739,
      "coreWealth": 1.1297960832527958
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307192939857287,
      "coreWealth": 1.126750044671774
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349675887973207,
      "coreWealth": 1.1364655096452367
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642450064578036,
      "coreWealth": 1.1643760904816876
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.158623260865679,
      "coreWealth": 1.1606691363158508
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289959812572772,
      "coreWealth": 1.118506227092992
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226010497740229,
      "coreWealth": 1.1226167165972398
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055661829444547,
      "coreWealth": 1.10621523786088
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.123693845349204,
      "coreWealth": 1.1283262912905208
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.129502206745481,
      "coreWealth": 1.1313356829068386
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586810348337748,
      "coreWealth": 1.1509467786038463
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932133326270273,
      "coreWealth": 1.170604423022126
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618186274035924,
      "coreWealth": 1.1279090572738046
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845176329207228,
      "coreWealth": 1.1664618146019037
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064614522727282,
      "coreWealth": 1.1727839271058662
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542395845641183,
      "coreWealth": 1.2088832910896716
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408095837898936,
      "coreWealth": 1.2007768103484369
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425564219849639,
      "coreWealth": 1.220215918307077
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606141496177405,
      "coreWealth": 1.2312677494055835
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283308791805485,
      "coreWealth": 1.2648141124787209
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028721204021574,
      "coreWealth": 1.2675195518864955
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017566833396814,
      "coreWealth": 1.2539449883380855
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752573537094547,
      "coreWealth": 1.226018541476977
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503372702711547,
      "coreWealth": 1.3003507698848262
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934421968363004,
      "coreWealth": 1.3284940120417854
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164160771389778,
      "coreWealth": 1.3620583788331782
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.492605087478509,
      "coreWealth": 1.4421005315976108
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558642085869847,
      "coreWealth": 1.5051931365777325
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922688815464242,
      "coreWealth": 1.4583269666266716
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446087654775486,
      "coreWealth": 1.4332053098365438
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349759869553812,
      "coreWealth": 1.5404176844466702
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903083486281435,
      "coreWealth": 1.6221460986529477
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324542676164493,
      "coreWealth": 1.630270283523266
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640319877932703,
      "coreWealth": 1.6527257894443856
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950231472465587,
      "coreWealth": 1.6727358818021565
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447511668529854,
      "coreWealth": 1.737562747115411
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801371257278877,
      "coreWealth": 1.7664327211541568
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153830334923744,
      "coreWealth": 1.7837905916207302
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460757940678423,
      "coreWealth": 1.8026132661854941
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800009476774209,
      "coreWealth": 1.8231940790412386
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241756421006798,
      "coreWealth": 1.7503564160737997
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912171898661883,
      "coreWealth": 1.8277616247017285
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786695765099524,
      "coreWealth": 1.7981653971348175
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.926494186282535,
      "coreWealth": 1.8450844857156778
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.872005827879543,
      "coreWealth": 1.780009677992981
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.870007353549895,
      "coreWealth": 1.7860590533628338
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217610607718552,
      "coreWealth": 1.8230996660372027
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227546774787307,
      "coreWealth": 1.7820992260199315
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.91140936834154,
      "coreWealth": 1.7798527803766335
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893110499231115,
      "coreWealth": 1.7341845345691012
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239366054557325,
      "coreWealth": 1.7621980936356993
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945530384751872,
      "coreWealth": 1.7298037311295862
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459047608714463,
      "coreWealth": 1.6752135910201564
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.867362230722411,
      "coreWealth": 1.696439075861788
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924139454626698,
      "coreWealth": 1.731679002676805
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437474657949247,
      "coreWealth": 1.6959494744779215
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.897320589881018,
      "coreWealth": 1.771236376004388
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025989815184168,
      "coreWealth": 1.716117713257514
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.934756925708949,
      "coreWealth": 1.760052208151809
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983239615710807,
      "coreWealth": 1.7754130621154127
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834652484256572,
      "coreWealth": 1.787794098195472
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027841144798472,
      "coreWealth": 1.8272573614387542
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.03445819469384,
      "coreWealth": 1.8656794202141727
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035531388891899,
      "coreWealth": 1.8338145635390264
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.004445237000346,
      "coreWealth": 1.79057359077765
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.992910347880823,
      "coreWealth": 1.7805235974419933
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.01885518467267,
      "coreWealth": 1.8449848206857473
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994960917111967,
      "coreWealth": 1.9271276702023985
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114452491663842,
      "coreWealth": 1.9052131661662322
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168560679277665,
      "coreWealth": 1.9494201288910087
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407295606658186,
      "coreWealth": 2.0024776824246104
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933314077122588,
      "coreWealth": 1.9350711907803948
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327268286654247,
      "coreWealth": 1.977422440370035
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982569349058974,
      "coreWealth": 2.027598321633819
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301155357833049,
      "coreWealth": 2.0447202947693315
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087406860126074,
      "coreWealth": 2.078589362070699
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353187232855253,
      "coreWealth": 2.1332022658178045
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840914589006585,
      "coreWealth": 2.111233010627942
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.45820845052044,
      "coreWealth": 2.1658961668954633
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466965156964397,
      "coreWealth": 2.117926477836066
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512622137144869,
      "coreWealth": 2.1581570885528283
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012262689904308,
      "coreWealth": 2.1518093718601867
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475133680204005,
      "coreWealth": 2.1138314564292644
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715486644745455,
      "coreWealth": 2.1198196814406365
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457171013431673,
      "coreWealth": 2.1549529799834053
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531739920416543,
      "coreWealth": 2.238862183449337
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768682222140122,
      "coreWealth": 2.243697359068817
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304958470068156,
      "coreWealth": 2.2968236545004985
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175741203883593,
      "coreWealth": 2.444293764880678
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962325855966497,
      "coreWealth": 2.5515298518467513
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998865181461416,
      "coreWealth": 2.550188694564933
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315456637123215,
      "coreWealth": 2.5994359695725793
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.250845274377483,
      "coreWealth": 2.7970978956643022
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440373589266254,
      "coreWealth": 2.9572171335148028
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676408348662345,
      "coreWealth": 2.7416514075366463
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509739036308564,
      "coreWealth": 2.974221586290246
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646309532024826,
      "coreWealth": 3.1681507189949074
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747139366184163,
      "coreWealth": 3.0990496581761366
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546195929453043,
      "coreWealth": 2.9561103164169142
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424038387649738,
      "coreWealth": 3.1027119260054152
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610311966890015,
      "coreWealth": 3.087305059983493
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.50240079617646,
      "coreWealth": 3.016731162654433
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502400796176436,
      "cagr": 0.14108007269050749,
      "annVol": 0.1114936474325041,
      "sharpe": 1.241541766393682,
      "mdd": -0.12331704582128467,
      "calmar": 1.144043564706907
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167311626544278,
      "cagr": 0.12328580313222615,
      "annVol": 0.10945797617039224,
      "sharpe": 1.1187178029668834,
      "mdd": -0.13555281500347527,
      "calmar": 0.9095038205519035
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955189445212064,
      "cagr": 0.14419586978748056,
      "annVol": 0.10819057287073422,
      "sharpe": 1.3012996635884557,
      "mdd": -0.1021224958474034,
      "calmar": 1.4119892839570365
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124054465194033,
      "cagr": 0.1143530765388392,
      "annVol": 0.10724478590849437,
      "sharpe": 1.064924379384661,
      "mdd": -0.11135936652217238,
      "calmar": 1.0268833247724227
    }
  ]
} as PdsCanonicalSummary;
