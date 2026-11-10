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
  "generatedAt": "2026-11-10T18:53:56.195600+09:00",
  "systemAsOfKst": "2026-11-10T18:51:04.138444+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-09",
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
  "previewThrough": "2026-11-09",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": 0.14235132602947256,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334699170633234,
      "adaptiveDynamicFx": 0.01233469917063279
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897622443222899,
      "adaptiveDynamicFx": 0.01089762244322312
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918624778557,
      "adaptiveDynamicFx": 0.07233918624778535
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830126115631318,
      "adaptiveDynamicFx": 0.05830126115631318
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756265405435,
      "adaptiveDynamicFx": -0.05020756265405457
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.0740896381512628,
      "adaptiveDynamicFx": 0.07408963815126324
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262414659699101,
      "adaptiveDynamicFx": 0.07262414659699079
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.0046462966148775875,
      "adaptiveDynamicFx": 0.010507334501262733
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583553713374,
      "adaptiveDynamicFx": -0.0321256139358681
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129888499673793,
      "adaptiveDynamicFx": 0.02268663414266414
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810622629181308,
      "adaptiveDynamicFx": -0.008810622629181308
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889708064899212,
      "adaptiveDynamicFx": -0.02210912309484503
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019341514064,
      "coreWealth": 1.0296687617651177
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682152499127,
      "coreWealth": 1.0247507545815557
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372530798389616,
      "coreWealth": 1.0459293899528013
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497067785742573,
      "coreWealth": 1.0564923588098079
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623824264913462,
      "coreWealth": 1.058961125188599
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890440627281,
      "coreWealth": 1.0800314078468138
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613392239566941,
      "coreWealth": 1.089747201558624
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619230995900166,
      "coreWealth": 1.1033550301849147
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218665709170796,
      "coreWealth": 1.1627014165295302
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459948843742,
      "coreWealth": 1.1182717094811119
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.06292409434857,
      "coreWealth": 1.1115261132108765
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765211253743578,
      "coreWealth": 1.1187188534447812
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967340977944957,
      "coreWealth": 1.129796256218657
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.13071952127727,
      "coreWealth": 1.1267502711654322
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349677681806558,
      "coreWealth": 1.136465689265316
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642451461472465,
      "coreWealth": 1.1643762301868532
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586234493973289,
      "coreWealth": 1.1606693251804012
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.128996343210649,
      "coreWealth": 1.1185065856833696
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226012150961198,
      "coreWealth": 1.122616881921639
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.105566487706807,
      "coreWealth": 1.1062155428021487
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236940967699525,
      "coreWealth": 1.1283265437477519
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295024895187906,
      "coreWealth": 1.13133596613916
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586811604633864,
      "coreWealth": 1.1509469033948705
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932134767231801,
      "coreWealth": 1.1706045643879541
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618188083643142,
      "coreWealth": 1.1279092329528906
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845179154669,
      "coreWealth": 1.166462092841176
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064617079846265,
      "coreWealth": 1.1727841756797441
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542399395792785,
      "coreWealth": 1.2088836332666348
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408097032141547,
      "coreWealth": 1.2007769259196592
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425567575907552,
      "coreWealth": 1.2202162478788512
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606142368434528,
      "coreWealth": 1.231267834600726
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283309097061882,
      "coreWealth": 1.2648144133358459
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028723952029881,
      "coreWealth": 1.267519819230786
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017570078699205,
      "coreWealth": 1.2539453009487822
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752575306127252,
      "coreWealth": 1.2260187115498538
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503374669699792,
      "coreWealth": 1.3003509593022922
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934423992032747,
      "coreWealth": 1.3284942049764545
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164163310569022,
      "coreWealth": 1.3620586230065097
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.492605293450067,
      "coreWealth": 1.4421007305998064
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558642449680482,
      "coreWealth": 1.5051931717739413
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922689824741608,
      "coreWealth": 1.4583270652587856
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446089961582136,
      "coreWealth": 1.4332055386962592
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975920951907,
      "coreWealth": 1.5404176182092038
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903084819114268,
      "coreWealth": 1.6221462346045439
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.632454352273412,
      "coreWealth": 1.63027036806697
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640321063980066,
      "coreWealth": 1.6527259072432654
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950231799184436,
      "coreWealth": 1.6727359140444495
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447511192669054,
      "coreWealth": 1.7375626997253861
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801370599569566,
      "coreWealth": 1.7664326558895642
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.815382978152377,
      "coreWealth": 1.7837905372437937
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460757267437284,
      "coreWealth": 1.8026132004464037
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800009879849962,
      "coreWealth": 1.8231941181308602
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241757081163477,
      "coreWealth": 1.750356479417995
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912172229451518,
      "coreWealth": 1.8277616566707942
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.878669523126188,
      "coreWealth": 1.7981653460386329
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264941952292072,
      "coreWealth": 1.8450844942842761
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720057758156785,
      "coreWealth": 1.780009628487691
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700068465837967,
      "coreWealth": 1.7860585691554338
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217606695389513,
      "coreWealth": 1.8230992948898217
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227544832121093,
      "coreWealth": 1.7820990459645085
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114089262209522,
      "coreWealth": 1.7798523686858774
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931101639892733,
      "coreWealth": 1.73418422747069
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239353778850743,
      "coreWealth": 1.7621969692625383
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.894552275557456,
      "coreWealth": 1.7298030345547648
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459041170448045,
      "coreWealth": 1.6752130067282864
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673620578108123,
      "coreWealth": 1.6964389187771083
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.892413151896421,
      "coreWealth": 1.7316782765132612
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.843746916277847,
      "coreWealth": 1.6959489690110823
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.897319840728538,
      "coreWealth": 1.7712356766359563
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025980022438396,
      "coreWealth": 1.7161168299655196
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347558350811767,
      "coreWealth": 1.7600512160055628
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832386281753678,
      "coreWealth": 1.7754121780652417
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834643602209783,
      "coreWealth": 1.7877932976132136
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278401784638005,
      "coreWealth": 1.827256490689015
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344573542674205,
      "coreWealth": 1.865678649509576
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355303427784257,
      "coreWealth": 1.8338136210931688
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044443391332605,
      "coreWealth": 1.7905727887117908
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.992909716482492,
      "coreWealth": 1.7805230333325104
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188539855153755,
      "coreWealth": 1.844983724803774
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994951060144253,
      "coreWealth": 1.9271267654312343
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144514802267858,
      "coreWealth": 1.9052122548176897
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685595759034655,
      "coreWealth": 1.949419137016586
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240728511292949,
      "coreWealth": 2.0024767446292673
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933303129076114,
      "coreWealth": 1.9350702248867238
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327259944575193,
      "coreWealth": 1.9774217015508457
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982562710214274,
      "coreWealth": 2.0275977359329707
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011545696233897,
      "coreWealth": 2.0447195943958087
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308740081589691,
      "coreWealth": 2.0785888179008634
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531864358087606,
      "coreWealth": 2.133201543282279
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384090722677111,
      "coreWealth": 2.11123235866493
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458207654987038,
      "coreWealth": 2.165895465961114
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669643841907694,
      "coreWealth": 2.1179258143983537
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126214633994666,
      "coreWealth": 2.158156509855226
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501225653792578,
      "coreWealth": 2.151808842604394
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751332657478677,
      "coreWealth": 2.1138311024724605
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715481509524233,
      "coreWealth": 2.1198192409984555
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457170354571643,
      "coreWealth": 2.1549524021594118
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531739334181057,
      "coreWealth": 2.2388616650309854
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576867442758569,
      "coreWealth": 2.243696680391466
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304950408843846,
      "coreWealth": 2.2968229506328073
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817573168796257,
      "coreWealth": 2.4442929393582578
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623248350077582,
      "coreWealth": 2.5515289724679153
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988642206932745,
      "coreWealth": 2.5501878775425366
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315447107288795,
      "coreWealth": 2.5994351524252637
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.250844188176785,
      "coreWealth": 2.797096961073638
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440372504170163,
      "coreWealth": 2.957216200806589
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676397861137536,
      "coreWealth": 2.7416505276009926
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097380354755914,
      "coreWealth": 2.974220738164796
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764629765081006,
      "coreWealth": 3.1681497191232286
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471381785472424,
      "coreWealth": 3.099048675947991
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194762849553,
      "coreWealth": 2.9561093439357995
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424026313637885,
      "coreWealth": 3.1027108975038615
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103107963153054,
      "coreWealth": 3.0873040589837983
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023996605898873,
      "coreWealth": 3.016730184536976
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.5023996605898877,
      "cagr": 0.14108003373610867,
      "annVol": 0.11149361660047226,
      "sharpe": 1.2415417715545936,
      "mdd": -0.12331734255719795,
      "calmar": 1.14404049593164
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167301845369794,
      "cagr": 0.12328576478529141,
      "annVol": 0.1094579470697042,
      "sharpe": 1.1187177580896135,
      "mdd": -0.13555288119363196,
      "calmar": 0.9095030935504982
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.095518472850705,
      "cagr": 0.14419582289460808,
      "annVol": 0.10819054344261889,
      "sharpe": 1.3012996082969466,
      "mdd": -0.10212250004685297,
      "calmar": 1.4119887667110795
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124050385735906,
      "cagr": 0.11435303086902193,
      "annVol": 0.1072447603594571,
      "sharpe": 1.064924224283414,
      "mdd": -0.11135947098034416,
      "calmar": 1.026881951416653
    }
  ]
} as PdsCanonicalSummary;
