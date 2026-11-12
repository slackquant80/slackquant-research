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
  "generatedAt": "2026-11-12T10:50:39.291854+09:00",
  "systemAsOfKst": "2026-11-12T10:48:08.280627+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-11",
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
  "previewThrough": "2026-11-11",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.0976132129075418,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334719149020845,
      "adaptiveDynamicFx": 0.012334719149021067
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897602748501045,
      "adaptiveDynamicFx": 0.010897602748501045
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723391991573723,
      "adaptiveDynamicFx": 0.07233919915737252
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301244379081574,
      "adaptiveDynamicFx": 0.05830124437908091
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.0502075571012085,
      "adaptiveDynamicFx": -0.050207557101208944
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408959542737947,
      "adaptiveDynamicFx": 0.0740895954273797
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262415261876143,
      "adaptiveDynamicFx": 0.07262415261876143
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646288221208161,
      "adaptiveDynamicFx": 0.01050729780614379
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625837450817726,
      "adaptiveDynamicFx": -0.032125579789345715
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129890796832257,
      "adaptiveDynamicFx": 0.022686634258649363
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810624654692512,
      "adaptiveDynamicFx": -0.008810624654692067
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.02988970806489899,
      "adaptiveDynamicFx": -0.022109123094844807
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019587692429,
      "coreWealth": 1.0296687865773428
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.028768301191587,
      "coreWealth": 1.024750840187618
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372531587095888,
      "coreWealth": 1.0459294694831591
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497067708896297,
      "coreWealth": 1.0564923510755067
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623824383044023,
      "coreWealth": 1.0589611369636154
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725891391608413,
      "coreWealth": 1.0800315036047885
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613391180111338,
      "coreWealth": 1.0897470927773123
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619230117173784,
      "coreWealth": 1.103354938883848
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218664435214165,
      "coreWealth": 1.1627012844967959
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459875666203,
      "coreWealth": 1.1182717019399784
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.062924119361237,
      "coreWealth": 1.1115261393672484
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076520866442461,
      "coreWealth": 1.1187185843632164
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096733930919274,
      "coreWealth": 1.1297960843128203
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.13071920114392,
      "coreWealth": 1.12674995215588
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349675441157219,
      "coreWealth": 1.1364654649046724
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642448811862294,
      "coreWealth": 1.1643759651960146
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.158623324185503,
      "coreWealth": 1.1606691997474892
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.128996159402609,
      "coreWealth": 1.1185064035831407
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122600690217148,
      "coreWealth": 1.122616357035352
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055665385430267,
      "coreWealth": 1.1062155936682219
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236934563854832,
      "coreWealth": 1.1283259007232962
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295022380760664,
      "coreWealth": 1.1313357142882874
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586809029814549,
      "coreWealth": 1.150946647631653
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.193213200938861,
      "coreWealth": 1.1706042938291832
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618185155523353,
      "coreWealth": 1.127908948687115
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.18451752496465,
      "coreWealth": 1.1664617082914315
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064613141917235,
      "coreWealth": 1.1727837928793012
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542395114840945,
      "coreWealth": 1.208883220652402
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408092380795406,
      "coreWealth": 1.2007764757918917
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425562775101315,
      "coreWealth": 1.2202157764298311
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606139818848299,
      "coreWealth": 1.2312675855774082
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833086584799518,
      "coreWealth": 1.2648139810746417
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028719551919161,
      "coreWealth": 1.2675193911591305
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017565025632685,
      "coreWealth": 1.2539448142013423
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752572240237903,
      "coreWealth": 1.2260184167985964
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503371024190807,
      "coreWealth": 1.3003506082462708
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.393442028767377,
      "coreWealth": 1.3284938518065408
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164160347688233,
      "coreWealth": 1.3620583380890656
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.492604807220941,
      "coreWealth": 1.4421002608229885
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863967840791,
      "coreWealth": 1.5051929036721174
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922684742613856,
      "coreWealth": 1.4583265686054063
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446085344148947,
      "coreWealth": 1.4332050805978587
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349757458805517,
      "coreWealth": 1.5404174425172048
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903083113383163,
      "coreWealth": 1.6221460606165923
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324541489749906,
      "coreWealth": 1.6302701650405407
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640318761321653,
      "coreWealth": 1.6527256785419666
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.69502300442777,
      "coreWealth": 1.6727357408612535
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447508736954878,
      "coreWealth": 1.7375624551657418
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801368048002928,
      "coreWealth": 1.7664324026972413
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153828857342575,
      "coreWealth": 1.7837904464340089
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.846075669096621,
      "coreWealth": 1.8026131441565099
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800005747772326,
      "coreWealth": 1.8231937174087662
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241752272417011,
      "coreWealth": 1.7503560180030018
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912169879008356,
      "coreWealth": 1.8277614295128841
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.878669323410807,
      "coreWealth": 1.798165154881414
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264937007866905,
      "coreWealth": 1.8450840207359063
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720053946720177,
      "coreWealth": 1.7800092660746252
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700068619198347,
      "coreWealth": 1.7860585838030256
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.921760753003003,
      "coreWealth": 1.8230993740689279
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227542936185684,
      "coreWealth": 1.7820988702403404
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114087981117898,
      "coreWealth": 1.7798522493941038
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893109809315588,
      "coreWealth": 1.7341839025717536
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239360936662782,
      "coreWealth": 1.7621976248705777
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945523364548833,
      "coreWealth": 1.7298030901566008
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459044664864894,
      "coreWealth": 1.6752133238570466
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673618764619437,
      "coreWealth": 1.6964387540274555
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924132692985252,
      "coreWealth": 1.7316783839436607
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437469593693805,
      "coreWealth": 1.6959490086483384
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973200516230309,
      "coreWealth": 1.771235873515717
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025982876511391,
      "coreWealth": 1.7161170873989315
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347563063782418,
      "coreWealth": 1.760051644745451
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983239065129743,
      "coreWealth": 1.775412569230549
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834648263602725,
      "coreWealth": 1.7877937177673393
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278407377380354,
      "coreWealth": 1.8272569946426889
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034457467008875,
      "coreWealth": 1.86567875289801
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355308748007275,
      "coreWealth": 1.8338141003932087
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044444418884266,
      "coreWealth": 1.7905728805031318
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929098318576004,
      "coreWealth": 1.780523136411975
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188546627879256,
      "coreWealth": 1.844984343747429
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994956859778693,
      "coreWealth": 1.9271272977797544
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451866695925,
      "coreWealth": 1.905212603043121
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168560164655756,
      "coreWealth": 1.9494196662734404
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407289419103154,
      "coreWealth": 2.002477129460047
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933307469955223,
      "coreWealth": 1.935070607861702
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327260900839536,
      "coreWealth": 1.9774217862427539
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982564485298256,
      "coreWealth": 2.0275978925367713
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011547234595846,
      "coreWealth": 2.0447197310888936
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087401669858862,
      "coreWealth": 2.078588894784189
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186635793915,
      "coreWealth": 2.1332017245720714
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384090802071446,
      "coreWealth": 2.1112324289726274
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582079287199194,
      "coreWealth": 2.1658957071436893
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466964597762045,
      "coreWealth": 2.1179259977525065
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512621750544646,
      "coreWealth": 2.1581567564917767
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012257029747476,
      "coreWealth": 2.151808884915919
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751331742615146,
      "coreWealth": 2.113831024340644
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471548022357367,
      "coreWealth": 2.119819130703927
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571702672438045,
      "coreWealth": 2.1549523255724137
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317393733630205,
      "coreWealth": 2.2388616996802995
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576867455056462,
      "coreWealth": 2.2436966910993443
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630494970225342,
      "coreWealth": 2.2968228889367115
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817573388209091,
      "coreWealth": 2.4442931297026598
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962325023140022,
      "coreWealth": 2.5515291345112368
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998864470328571,
      "coreWealth": 2.550188089828556
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315449040228057,
      "coreWealth": 2.5994353181675223
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508444345894287,
      "coreWealth": 2.797097173092444
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440372710408804,
      "coreWealth": 2.9572163780816685
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676400011015145,
      "coreWealth": 2.741650707982367
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097381267854475,
      "coreWealth": 2.974220815542575
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764629884157,
      "coreWealth": 3.1681498193324553
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747138328669033,
      "coreWealth": 3.099048800105354
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461948977500986,
      "coreWealth": 2.9561094563889645
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424027780703425,
      "coreWealth": 3.102711022473047
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103109343515554,
      "coreWealth": 3.0873041770234813
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023997945002745,
      "coreWealth": 3.0167302998783443
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502399794500271,
      "cagr": 0.1410800383296813,
      "annVol": 0.11149365499031472,
      "sharpe": 1.2415414192066314,
      "mdd": -0.12331714402137262,
      "calmar": 1.1440423750425985
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167302998783105,
      "cagr": 0.12328576930723001,
      "annVol": 0.10945798354579894,
      "sharpe": 1.1187174593591533,
      "mdd": -0.13555279024482603,
      "calmar": 0.9095037371385704
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955187704492801,
      "cagr": 0.14419585248147548,
      "annVol": 0.10819056396038298,
      "sharpe": 1.3012996216281598,
      "mdd": -0.10212254299719836,
      "calmar": 1.411988462580993
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124052959653378,
      "cagr": 0.11435305968420795,
      "annVol": 0.10724478609372566,
      "sharpe": 1.0649242361951985,
      "mdd": -0.11135950382619453,
      "calmar": 1.0268819072926694
    }
  ]
} as PdsCanonicalSummary;
