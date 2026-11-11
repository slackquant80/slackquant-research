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
  "generatedAt": "2026-11-11T09:56:49.040379+09:00",
  "systemAsOfKst": "2026-11-11T09:53:46.397306+09:00",
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
      "coreDynamicFx": 0.012334694337630792,
      "adaptiveDynamicFx": 0.012334694337631014
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897604517675186,
      "adaptiveDynamicFx": 0.010897604517675186
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723391907221842,
      "adaptiveDynamicFx": 0.0723391907221842
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301263231922196,
      "adaptiveDynamicFx": 0.058301263231922196
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207560526777995,
      "adaptiveDynamicFx": -0.05020756052677855
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408962529580698,
      "adaptiveDynamicFx": 0.07408962529580654
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417473582583,
      "adaptiveDynamicFx": 0.07262417473582561
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646291910531564,
      "adaptiveDynamicFx": 0.010507375239216854
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835115904574,
      "adaptiveDynamicFx": -0.032125613662903674
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712989341552685,
      "adaptiveDynamicFx": 0.022686639054195323
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.00881062739220595,
      "adaptiveDynamicFx": -0.008810627392206172
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.02988970806490021,
      "adaptiveDynamicFx": -0.022109123094845584
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216018941424332,
      "coreWealth": 1.0296687214402238
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287681672912616,
      "coreWealth": 1.024750706810188
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532928906233,
      "coreWealth": 1.0459296047865758
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497067552077852,
      "coreWealth": 1.0564923352922888
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623826424313993,
      "coreWealth": 1.0589613404332376
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725894424875242,
      "coreWealth": 1.0800318090361563
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613395280857048,
      "coreWealth": 1.0897475138280004
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619234140306595,
      "coreWealth": 1.1033553568937553
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218668237822595,
      "coreWealth": 1.162701678598756
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851462858340701,
      "coreWealth": 1.1182720093124858
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629246097268925,
      "coreWealth": 1.1115266521547835
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765213169591865,
      "coreWealth": 1.1187190525393982
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096734623540457,
      "coreWealth": 1.1297967978137653
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307198635624454,
      "coreWealth": 1.1267506122490634
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134968162818762,
      "coreWealth": 1.1364660844242662
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642454752370224,
      "coreWealth": 1.1643765593136886
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.15862394455664,
      "coreWealth": 1.1606698212140625
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289965682522591,
      "coreWealth": 1.1185068086340755
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226015716319944,
      "coreWealth": 1.1226172384624977
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055670325372182,
      "coreWealth": 1.1062160879524257
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236940182780237,
      "coreWealth": 1.1283264649322466
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295022613918408,
      "coreWealth": 1.131335737641908
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586808787690444,
      "coreWealth": 1.1509466235808605
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932132371123205,
      "coreWealth": 1.1706043293172295
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818535480237,
      "coreWealth": 1.1279089680333876
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845175299115338,
      "coreWealth": 1.1664617131629091
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.206461395728605,
      "coreWealth": 1.1727838721401393
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.254239362795384,
      "coreWealth": 1.2088830773406303
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408094811071793,
      "coreWealth": 1.2007767109786256
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.242556407987444,
      "coreWealth": 1.2202159045612313
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.260613995045929,
      "coreWealth": 1.2312675984321249
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833088150249152,
      "coreWealth": 1.2648141353635256
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.302872119732787,
      "coreWealth": 1.2675195512352955
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017563434587487,
      "coreWealth": 1.2539446609405096
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752571239588177,
      "coreWealth": 1.2260183205972224
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.350337091205044,
      "coreWealth": 1.3003505974473557
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934420719771796,
      "coreWealth": 1.328493893002343
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164159355463195,
      "coreWealth": 1.3620582426744199
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926046424208905,
      "coreWealth": 1.4421001015992003
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863811530621,
      "coreWealth": 1.5051927524526296
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922684800309842,
      "coreWealth": 1.4583265742437788
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.444608515679608,
      "coreWealth": 1.4332050620104682
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349755476127604,
      "coreWealth": 1.5404172435465313
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903079324432174,
      "coreWealth": 1.622145674136071
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324539097484403,
      "coreWealth": 1.6302699261340445
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640315443368239,
      "coreWealth": 1.6527253490009985
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950226437955047,
      "coreWealth": 1.672735384970817
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447506505293395,
      "coreWealth": 1.7375622329190452
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801365667411184,
      "coreWealth": 1.7664321664707683
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.815382434146035,
      "coreWealth": 1.783790002704611
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.846075091851356,
      "coreWealth": 1.8026125805014475
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800002548343715,
      "coreWealth": 1.8231934071334313
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.824174864475335,
      "coreWealth": 1.7503556699167677
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912166242917565,
      "coreWealth": 1.8277610781039004
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786689464586306,
      "coreWealth": 1.7981647940822822
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264935295622325,
      "coreWealth": 1.8450838567470491
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720053129599779,
      "coreWealth": 1.780009188378173
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700061878183245,
      "coreWealth": 1.7860579399632603
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217601756005245,
      "coreWealth": 1.8230988263097505
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.922753851850465,
      "coreWealth": 1.7820984607889465
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114085109767,
      "coreWealth": 1.7798519820216705
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931094994441244,
      "coreWealth": 1.734183618713898
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239356925404856,
      "coreWealth": 1.7621972574660116
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945520845751644,
      "coreWealth": 1.7298028601802122
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459037051430591,
      "coreWealth": 1.6752126329151962
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673617236341142,
      "coreWealth": 1.6964386151882496
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924130443342024,
      "coreWealth": 1.7316781780870198
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437463875241986,
      "coreWealth": 1.6959484826432645
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973196039536517,
      "coreWealth": 1.7712354555956902
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025978850876442,
      "coreWealth": 1.7161167242922883
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.934755847795474,
      "coreWealth": 1.7600512275718065
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832382107819877,
      "coreWealth": 1.7754118044111418
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834640010916769,
      "coreWealth": 1.7877929739124572
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027839640497465,
      "coreWealth": 1.827256005935608
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034456782984504,
      "coreWealth": 1.8656781256203463
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355301084778907,
      "coreWealth": 1.8338134100113377
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044434657836967,
      "coreWealth": 1.7905720085474848
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929087651465722,
      "coreWealth": 1.780522183381572
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018853502970591,
      "coreWealth": 1.844983283817332
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994943363663032,
      "coreWealth": 1.9271260589711678
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114450597890186,
      "coreWealth": 1.9052114597942633
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685587148048464,
      "coreWealth": 1.949418362934979
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407274110194573,
      "coreWealth": 2.0024757613454733
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933295235067716,
      "coreWealth": 1.935069528436213
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327247330008397,
      "coreWealth": 1.97742058433728
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.298255136754857,
      "coreWealth": 2.027596735245489
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011534018977917,
      "coreWealth": 2.044718556798684
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.30873883083828,
      "coreWealth": 2.0785876918330684
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353185239631706,
      "coreWealth": 2.133200458928464
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840895254187466,
      "coreWealth": 2.1112312984323958
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582063658512423,
      "coreWealth": 2.165894330120001
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466963113821193,
      "coreWealth": 2.117924723767098
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512620321961806,
      "coreWealth": 2.1581555294444903
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012242250115104,
      "coreWealth": 2.151807613421544
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475131656126337,
      "coreWealth": 2.113829727811935
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715466590904605,
      "coreWealth": 2.119817961445139
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571688242445178,
      "coreWealth": 2.1549510600538273
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531737811766424,
      "coreWealth": 2.238860318732949
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768659731870334,
      "coreWealth": 2.2436954008251786
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304934131766666,
      "coreWealth": 2.2968215293960004
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175717200733903,
      "coreWealth": 2.4442916825664094
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962323361897847,
      "coreWealth": 2.5515277036392967
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988627150960796,
      "coreWealth": 2.5501865972059377
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031543134967998,
      "coreWealth": 2.599433801269824
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508425119909763,
      "coreWealth": 2.7970955188469904
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403707370080854,
      "coreWealth": 2.957214681819855
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676381149951963,
      "coreWealth": 2.741649125481033
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097361985374875,
      "coreWealth": 2.974219181507518
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764627893496727,
      "coreWealth": 3.168148144078822
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471363333690118,
      "coreWealth": 3.0990471499041847
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.54619301819895,
      "coreWealth": 2.9561078895944086
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642400856813573,
      "coreWealth": 3.102709385887295
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103090200511367,
      "coreWealth": 3.087302540037717
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.502397937417732,
      "coreWealth": 3.0167287003130663
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502397937417745,
      "cagr": 0.14107997462554667,
      "annVol": 0.11149363238041604,
      "sharpe": 1.2415411462637378,
      "mdd": -0.12331729840595218,
      "calmar": 1.1440404261948796
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.016728700313061,
      "cagr": 0.12328570659651383,
      "annVol": 0.1094579673219993,
      "sharpe": 1.11871709737699,
      "mdd": -0.1355529062580333,
      "calmar": 0.9095024961090241
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955183549235965,
      "cagr": 0.144195811170446,
      "annVol": 0.10819057760910399,
      "sharpe": 1.3012991362824857,
      "mdd": -0.1021225525681363,
      "calmar": 1.4119879257252053
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124049365789452,
      "cagr": 0.11435301945064924,
      "annVol": 0.10724477692515887,
      "sharpe": 1.064923980262486,
      "mdd": -0.11135949560285063,
      "calmar": 1.0268816218284127
    }
  ]
} as PdsCanonicalSummary;
