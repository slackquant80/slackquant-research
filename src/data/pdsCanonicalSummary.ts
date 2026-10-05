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
  "generatedAt": "2026-10-06T00:35:31.171836+09:00",
  "systemAsOfKst": "2026-10-06T00:32:53.833204+09:00",
  "officialSignal": "2026-09",
  "holdingMonth": "2026-10",
  "executionClose": "2026-10-01",
  "markThrough": "2026-10-02",
  "completedThrough": "2026-09-30",
  "coreProviders": [
    "ADAA",
    "F2R"
  ],
  "adaptiveState": "DEFENSIVE",
  "adaptiveRiskBudget": 0.7122377157211304,
  "previewAvailable": false,
  "previewSignal": null,
  "previewHolding": null,
  "previewThrough": null,
  "adaptivePreviewAvailable": false,
  "adaptivePreviewState": null,
  "adaptivePreviewRiskBudget": null,
  "officialFxHedge": 0.5,
  "officialFxZscore": 0.11451948526415265,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.15220392653981515,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137457081143748,
      "adaptiveDynamicFx": 0.0505618866621842
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334704105288363,
      "adaptiveDynamicFx": 0.011664370940242641
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897609968765432,
      "adaptiveDynamicFx": 0.01172032585867333
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920205475797,
      "adaptiveDynamicFx": 0.07131810876696454
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830123841564627,
      "adaptiveDynamicFx": 0.05355636537013231
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756543182048,
      "adaptiveDynamicFx": -0.05253882613445038
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408963655254741,
      "adaptiveDynamicFx": 0.08283403216673513
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.0726241828326033,
      "adaptiveDynamicFx": 0.07552315991004077
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.0046462995054596945,
      "adaptiveDynamicFx": 0.009813959969005692
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625831176049354,
      "adaptiveDynamicFx": -0.034479595272974284
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129893331584443,
      "adaptiveDynamicFx": 0.02998425122949966
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810627081569211,
      "adaptiveDynamicFx": -0.008144827489894757
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019251034627,
      "coreWealth": 1.029668752645729
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682895352555,
      "coreWealth": 1.0247508285768046
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372533304374876,
      "coreWealth": 1.0459296426475089
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066963930426,
      "coreWealth": 1.0564922760973532
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.062382463125419,
      "coreWealth": 1.0589611617046957
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725891964410392,
      "coreWealth": 1.0800315612824318
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613392566960818,
      "coreWealth": 1.0897472351743207
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061923156284645,
      "coreWealth": 1.1033550890915385
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218664372346152,
      "coreWealth": 1.1627012779811565
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459017332157,
      "coreWealth": 1.118271613486375
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629241410240062,
      "coreWealth": 1.111526162020539
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765211745490186,
      "coreWealth": 1.1187189045470023
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096734349896296,
      "coreWealth": 1.1297965159203225
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307195971859811,
      "coreWealth": 1.1267503468076776
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349679494633715,
      "coreWealth": 1.1364658707872894
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642451652080694,
      "coreWealth": 1.1643762492498253
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586236382199144,
      "coreWealth": 1.160669514336409
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289965035759337,
      "coreWealth": 1.118506744558667
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226015281428687,
      "coreWealth": 1.12261719497276
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055665309110845,
      "coreWealth": 1.1062155860317928
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236938510475734,
      "coreWealth": 1.1283262970123815
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.129502413490199,
      "coreWealth": 1.1313358899871568
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586809082842455,
      "coreWealth": 1.1509466528990424
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.19321330769784,
      "coreWealth": 1.1706043985652972
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618185719758745,
      "coreWealth": 1.127909003463838
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845174959554177,
      "coreWealth": 1.1664616797243892
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.206461424262969,
      "coreWealth": 1.1727838998779836
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.254239392414693,
      "coreWealth": 1.2088831058888332
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.240809371642873,
      "coreWealth": 1.2007766050460122
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425563505353354,
      "coreWealth": 1.2202158481420797
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606140000861379,
      "coreWealth": 1.2312676033549985
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833087199694468,
      "coreWealth": 1.2648140416779667
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028720010275543,
      "coreWealth": 1.267519435751047
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017565913656057,
      "coreWealth": 1.2539448997420937
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752572004194964,
      "coreWealth": 1.2260183941056841
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503370601751594,
      "coreWealth": 1.3003505675661258
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934419762081398,
      "coreWealth": 1.3284938016970838
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164159980858486,
      "coreWealth": 1.3620583028138693
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926047594303007,
      "coreWealth": 1.4421002146494137
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863803679339,
      "coreWealth": 1.505192744857041
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922684099909092,
      "coreWealth": 1.4583265057967714
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.444608467579675,
      "coreWealth": 1.4332050142902206
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349753531455708,
      "coreWealth": 1.5404170483899238
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903079777458606,
      "coreWealth": 1.6221457203456595
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324538094890684,
      "coreWealth": 1.6302698260087982
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640315645156125,
      "coreWealth": 1.6527253690426758
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950226996115125,
      "coreWealth": 1.6727354400529115
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447507139247278,
      "coreWealth": 1.7375622960532353
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801366002611665,
      "coreWealth": 1.7664321997327537
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153824608944533,
      "coreWealth": 1.7837900289875248
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460752331334267,
      "coreWealth": 1.802612718457274
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800003616252814,
      "coreWealth": 1.8231935106974915
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241750955678102,
      "coreWealth": 1.7503558916575708
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912167515275695,
      "coreWealth": 1.8277612010705862
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786691999594805,
      "coreWealth": 1.7981650367201776
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.926493692526301,
      "coreWealth": 1.8450840128245753
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720052764073896,
      "coreWealth": 1.7800091536218776
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700066564960993,
      "coreWealth": 1.7860583876011564
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217605041460986,
      "coreWealth": 1.8230991379880928
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227543269837077,
      "coreWealth": 1.7820989011647095
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114084923547692,
      "coreWealth": 1.7798519646814184
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931094770307657,
      "coreWealth": 1.734183598182121
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.923935662383383,
      "coreWealth": 1.7621972298440978
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945521182579257,
      "coreWealth": 1.7298028909339294
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459034547968816,
      "coreWealth": 1.675212405718569
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.867361578978158,
      "coreWealth": 1.6964384837729158
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924126997965436,
      "coreWealth": 1.7316778628131626
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437465615928599,
      "coreWealth": 1.695948642758273
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973195548559891,
      "coreWealth": 1.7712354097607474
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025977147716622,
      "coreWealth": 1.716116570669644
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.934756159611167,
      "coreWealth": 1.7600515112311517
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983238195199809,
      "coreWealth": 1.7754117904618336
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834638927708983,
      "coreWealth": 1.7877928762776407
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.02783970218936,
      "coreWealth": 1.8272560615252447
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034456855135844,
      "coreWealth": 1.8656781917859984
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355298432143716,
      "coreWealth": 1.8338131710348602
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044436108147603,
      "coreWealth": 1.790572138103919
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929089717209256,
      "coreWealth": 1.7805223679410507
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188536817087166,
      "coreWealth": 1.8449834471619408
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.099494481261822,
      "coreWealth": 1.9271261919707676
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114450758182173,
      "coreWealth": 1.9052116042242675
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685589521149957,
      "coreWealth": 1.9494185762641056
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240727685610756,
      "coreWealth": 2.0024760067400647
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933296758498657,
      "coreWealth": 1.9350696628412103
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232725027790559,
      "coreWealth": 1.9774208454188285
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982553468192712,
      "coreWealth": 2.0275969205712516
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011535175850715,
      "coreWealth": 2.0447186595940448
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087390074913183,
      "coreWealth": 2.0785878508760893
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353185453081758,
      "coreWealth": 2.1332006524243705
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840897393251956,
      "coreWealth": 2.111231487857309
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582064353208066,
      "coreWealth": 2.1658943913287336
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466963205988046,
      "coreWealth": 2.1179248028937034
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126204791662836,
      "coreWealth": 2.1581556644715234
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501224648894776,
      "coreWealth": 2.1518079780890464
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475132087145112,
      "coreWealth": 2.113830095913668
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471547005524801,
      "coreWealth": 2.1198182585779834
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457169211048097,
      "coreWealth": 2.154951399282749
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317382354727505,
      "coreWealth": 2.238860693423889
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768663395814597,
      "coreWealth": 2.243695719847369
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630493809920766,
      "coreWealth": 2.2968218758140186
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175721289022126,
      "coreWealth": 2.4442920372323775
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623236877548322,
      "coreWealth": 2.5515279843085277
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998863073907375,
      "coreWealth": 2.550186902333493
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315435140365503,
      "coreWealth": 2.5994341263067597
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508429528362313,
      "coreWealth": 2.7970958981597835
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.44037112288136,
      "coreWealth": 2.9572150135021236
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676384646195484,
      "coreWealth": 2.7416494188266065
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097366108483348,
      "coreWealth": 2.9742195309077615
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764628364168866,
      "coreWealth": 3.1681485401761096
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471367732621883,
      "coreWealth": 3.099047513715216
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546193449265664,
      "coreWealth": 2.9561082489317503
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642401299277405,
      "coreWealth": 3.1027097627915934
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103094597480485,
      "coreWealth": 3.0873029160380097
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.6103094597480547,
      "cagr": 0.14608226019167536,
      "annVol": 0.11164406006288066,
      "sharpe": 1.2799633830880917,
      "mdd": -0.12331725016252226,
      "calmar": 1.1846052356758736
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.087302916038032,
      "cagr": 0.12719052681082998,
      "annVol": 0.10964337988912783,
      "sharpe": 1.149335600486178,
      "mdd": -0.13555295753754015,
      "calmar": 0.9383087549056666
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341259346167694,
      "cagr": 0.16019274758724222,
      "annVol": 0.11694984633257263,
      "sharpe": 1.3324598824659415,
      "mdd": -0.11040270387917595,
      "calmar": 1.4509857273292528
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183836504630245,
      "cagr": 0.12797291974999592,
      "annVol": 0.11668646077691641,
      "sharpe": 1.0931227194854691,
      "mdd": -0.11953264960264409,
      "calmar": 1.0706105835971123
    }
  ]
} as PdsCanonicalSummary;
