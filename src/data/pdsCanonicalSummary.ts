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
  "generatedAt": "2026-11-26T14:20:16.938057+09:00",
  "systemAsOfKst": "2026-11-26T14:17:12.727433+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-25",
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
  "previewThrough": "2026-11-25",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.10615610880561809,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334677626751889,
      "adaptiveDynamicFx": 0.012334677626751667
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897613566756892,
      "adaptiveDynamicFx": 0.010897613566756226
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918779781323,
      "adaptiveDynamicFx": 0.07233918779781345
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301259677406625,
      "adaptiveDynamicFx": 0.05830125967740707
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207552740545225,
      "adaptiveDynamicFx": -0.050207552740545336
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408957383307668,
      "adaptiveDynamicFx": 0.07408957383307646
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262419660611741,
      "adaptiveDynamicFx": 0.07262419660611741
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646288131409881,
      "adaptiveDynamicFx": 0.010507356174478621
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583732985815,
      "adaptiveDynamicFx": -0.032125601068262455
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712987598238792,
      "adaptiveDynamicFx": 0.022686611219387087
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810621680379827,
      "adaptiveDynamicFx": -0.008810621680379604
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590710055,
      "adaptiveDynamicFx": -0.02210910535947974
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019844032231,
      "coreWealth": 1.029668812413735
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682952516823,
      "coreWealth": 1.0247508342709086
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.03725333790547,
      "coreWealth": 1.0459296501779582
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066207919064,
      "coreWealth": 1.0564922000075108
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623824168199314,
      "coreWealth": 1.0589611155483314
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890282832966,
      "coreWealth": 1.0800313919578959
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613392243671445,
      "coreWealth": 1.0897472019800625
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619231223282914,
      "coreWealth": 1.1033550538103458
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218665509004788,
      "coreWealth": 1.162701395784346
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085146087018289,
      "coreWealth": 1.1182718044275535
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.062924174483304,
      "coreWealth": 1.111526197009756
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076520978955543,
      "coreWealth": 1.118718701286606
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967342272806138,
      "coreWealth": 1.1297963896082637
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307193783815621,
      "coreWealth": 1.1267501287713424
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349676081621287,
      "coreWealth": 1.136465529035598
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642449827216705,
      "coreWealth": 1.1643760667428777
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586234484367144,
      "coreWealth": 1.1606693242180912
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289962031711998,
      "coreWealth": 1.1185064469450579
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226010177227388,
      "coreWealth": 1.1226166845455032
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.105566284344122,
      "coreWealth": 1.1062153393200722
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236935739869605,
      "coreWealth": 1.1283260188095772
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.129501939965929,
      "coreWealth": 1.131335415694229
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586806410661976,
      "coreWealth": 1.1509463874646828
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932131012498493,
      "coreWealth": 1.1706041960290594
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818345615184,
      "coreWealth": 1.1279087837098465
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.184517315290842,
      "coreWealth": 1.1664615018137099
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064612230537948,
      "coreWealth": 1.1727837042854146
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542394240570034,
      "coreWealth": 1.2088831363868724
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408091862189716,
      "coreWealth": 1.2007764256045117
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425561831374428,
      "coreWealth": 1.2202156837539022
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606137044541588,
      "coreWealth": 1.2312673146051583
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283308499835707,
      "coreWealth": 1.2648138247167215
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028718470241296,
      "coreWealth": 1.267519285926392
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017564208562906,
      "coreWealth": 1.253944735495335
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752569696623455,
      "coreWealth": 1.2260181722582604
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503368852170543,
      "coreWealth": 1.300350399084571
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934418341751476,
      "coreWealth": 1.3284936662842213
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.416415697689317,
      "coreWealth": 1.362058013945622
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926046829210298,
      "coreWealth": 1.442100140728939
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558638914073244,
      "coreWealth": 1.5051928297279071
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922683770821734,
      "coreWealth": 1.4583264736365393
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446082473380462,
      "coreWealth": 1.433204795787125
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975413982502,
      "coreWealth": 1.540417109442518
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903078697465196,
      "coreWealth": 1.6221456101841742
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324537007988258,
      "coreWealth": 1.6302697174639538
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640314909541123,
      "coreWealth": 1.6527252959809744
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950225860097288,
      "coreWealth": 1.6727353279448263
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447504941881928,
      "coreWealth": 1.737562077222008
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801363350556716,
      "coreWealth": 1.766431936568933
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153823512607656,
      "coreWealth": 1.7837899212617396
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.846075136372337,
      "coreWealth": 1.8026126239742357
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800003354160826,
      "coreWealth": 1.8231934852802243
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241750769990988,
      "coreWealth": 1.7503558738402678
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912167197187002,
      "coreWealth": 1.827761170328975
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786691705064438,
      "coreWealth": 1.7981650085292358
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264936978442,
      "coreWealth": 1.8450840179177324
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720055131825086,
      "coreWealth": 1.780009378761117
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700064350964012,
      "coreWealth": 1.7860581761405048
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217602394092563,
      "coreWealth": 1.8230988868425686
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227542367397965,
      "coreWealth": 1.7820988175223975
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114089467622972,
      "coreWealth": 1.7798523878134123
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931096253617978,
      "coreWealth": 1.7341837340607926
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239354842369287,
      "coreWealth": 1.762197066673759
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945517038622066,
      "coreWealth": 1.7298025125738146
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459039480636705,
      "coreWealth": 1.67521285337286
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673616655277885,
      "coreWealth": 1.6964385624004725
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.892413005560478,
      "coreWealth": 1.731678142606566
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437466239689493,
      "coreWealth": 1.6959487001341615
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.89731974387041,
      "coreWealth": 1.77123558621441
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025980698241673,
      "coreWealth": 1.7161168909220215
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347561321667006,
      "coreWealth": 1.7600514862648418
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832382898345318,
      "coreWealth": 1.775411875179623
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.983464038330869,
      "coreWealth": 1.7877930074779287
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278400699622123,
      "coreWealth": 1.8272563929198464
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034456964087338,
      "coreWealth": 1.8656782916988468
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035530161040853,
      "coreWealth": 1.8338134573653913
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.004443993594378,
      "coreWealth": 1.7905724800414369
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929090398206928,
      "coreWealth": 1.780522428783325
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018853760439958,
      "coreWealth": 1.8449835191125696
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.099494962958778,
      "coreWealth": 1.9271266341204285
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451289932614,
      "coreWealth": 1.9052120833543968
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685594721488655,
      "coreWealth": 1.9494190437467338
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240728278231184,
      "coreWealth": 2.0024765363484365
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933302118472353,
      "coreWealth": 1.935070135725982
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327253482020897,
      "coreWealth": 1.9774211291924157
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982555178601713,
      "coreWealth": 2.027597071469173
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301153922156503,
      "coreWealth": 2.0447190190810143
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308739266553768,
      "coreWealth": 2.0785880841133713
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531858288336576,
      "coreWealth": 2.133200993049518
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840899357332224,
      "coreWealth": 2.111231661786481
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458206772516335,
      "coreWealth": 2.165894688427394
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466963512606833,
      "coreWealth": 2.117925066130492
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512620810903359,
      "coreWealth": 2.158155949409177
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.50122496695899,
      "coreWealth": 2.1518082517202264
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475132346043762,
      "coreWealth": 2.113830317020131
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471547316770576,
      "coreWealth": 2.1198185255299853
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457169488881312,
      "coreWealth": 2.1549516429440394
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317386450113633,
      "coreWealth": 2.238861055586072
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576866864093902,
      "coreWealth": 2.2436961765440357
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304944145634805,
      "coreWealth": 2.296822403759209
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817572603477374,
      "coreWealth": 2.4442924489344295
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623242318489926,
      "coreWealth": 2.5515284529512394
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988635462747655,
      "coreWealth": 2.55018730402741
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031544002341502,
      "coreWealth": 2.5994345450097986
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.250843433244218,
      "coreWealth": 2.7970963115132252
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440371700416381,
      "coreWealth": 2.9572155099297097
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676390568206464,
      "coreWealth": 2.7416499157015606
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097370419808045,
      "coreWealth": 2.974219896257829
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646288749533916,
      "coreWealth": 3.1681489700302605
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747137324492533,
      "coreWealth": 3.099047969607012
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461939478766564,
      "coreWealth": 2.9561086645740384
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642401749892045,
      "coreWealth": 3.102710146639007
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103099260657925,
      "coreWealth": 3.0873033148027194
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023988433360174,
      "coreWealth": 3.0167294806097305
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.5023988433360036,
      "cagr": 0.14108000570157309,
      "annVol": 0.11149368665412689,
      "sharpe": 1.2415408415926354,
      "mdd": -0.12331724135510169,
      "calmar": 1.1440412074684847
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167294806097353,
      "cagr": 0.1232857371879319,
      "annVol": 0.10945801252819744,
      "sharpe": 1.1187169305226634,
      "mdd": -0.13555290624837346,
      "calmar": 0.9095027218526437
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955188196358328,
      "cagr": 0.14419585737153873,
      "annVol": 0.10819060524438431,
      "sharpe": 1.3012992060050301,
      "mdd": -0.10212252128989407,
      "calmar": 1.4119888105994909
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124053385065764,
      "cagr": 0.11435306444672899,
      "annVol": 0.10724481485945599,
      "sharpe": 1.0649240193137355,
      "mdd": -0.11135950545280282,
      "calmar": 1.0268819350602714
    }
  ]
} as PdsCanonicalSummary;
