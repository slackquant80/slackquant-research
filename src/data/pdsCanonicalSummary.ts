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
  "generatedAt": "2026-11-11T15:37:22.240691+09:00",
  "systemAsOfKst": "2026-11-11T15:34:44.273515+09:00",
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
      "coreDynamicFx": 0.012334710151162831,
      "adaptiveDynamicFx": 0.012334710151163053
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897608103793921,
      "adaptiveDynamicFx": 0.010897608103793699
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920432437113,
      "adaptiveDynamicFx": 0.07233920432437202
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830124145862303,
      "adaptiveDynamicFx": 0.058301241458623476
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207551213532375,
      "adaptiveDynamicFx": -0.05020755121353193
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408961737496966,
      "adaptiveDynamicFx": 0.07408961737497011
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418033406859,
      "adaptiveDynamicFx": 0.07262418033406881
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646292261782148,
      "adaptiveDynamicFx": 0.010507337916432435
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583550962308,
      "adaptiveDynamicFx": -0.0321256145229174
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988598479993,
      "adaptiveDynamicFx": 0.022686631638670463
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.00881062020230583,
      "adaptiveDynamicFx": -0.008810620202306052
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
      "coreDynamicFxWealth": 1.0216020068281388,
      "coreWealth": 1.0296688350157244
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682240861498,
      "coreWealth": 1.0247507633832873
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532232407676,
      "coreWealth": 1.0459295345541215
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066063807103,
      "coreWealth": 1.0564921855031586
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623823192806492,
      "coreWealth": 1.0589610183231655
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725891701413743,
      "coreWealth": 1.0800315348002825
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613391311439908,
      "coreWealth": 1.0897471062616828
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619229849060934,
      "coreWealth": 1.1033549110264913
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218663149933765,
      "coreWealth": 1.1627011512904566
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851458512239962,
      "coreWealth": 1.1182715614352856
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629242274477428,
      "coreWealth": 1.111526252395986
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765209290374689,
      "coreWealth": 1.1187186494118337
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967338368573618,
      "coreWealth": 1.1297959874153116
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.130719109088484,
      "coreWealth": 1.1267498604235868
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349673695694542,
      "coreWealth": 1.136465290128033
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642447808483336,
      "coreWealth": 1.164375864846815
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586229240282877,
      "coreWealth": 1.1606687988836766
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289957914927031,
      "coreWealth": 1.1185060390915613
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122600679429516,
      "coreWealth": 1.1226163462475631
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.10556589178197,
      "coreWealth": 1.106214946527459
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236928980764231,
      "coreWealth": 1.1283253401125917
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295016314111244,
      "coreWealth": 1.1313351066385635
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.158680309463186,
      "coreWealth": 1.1509460580751432
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932125874572934,
      "coreWealth": 1.1706036919718081
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161817909498199,
      "coreWealth": 1.1279083603216504
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845170483652323,
      "coreWealth": 1.1664612389569002
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064607720371043,
      "coreWealth": 1.1727832658585429
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542389983543645,
      "coreWealth": 1.2088827260786605
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408088046984624,
      "coreWealth": 1.200776056393168
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425558447346166,
      "coreWealth": 1.2202153514353828
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.260613446556194,
      "coreWealth": 1.2312670627109192
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283308116814683,
      "coreWealth": 1.264813447215691
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028713573244535,
      "coreWealth": 1.2675188095143959
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017557154081865,
      "coreWealth": 1.253944055957354
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752563152790795,
      "coreWealth": 1.2260175431413145
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503364737188526,
      "coreWealth": 1.3003500028191284
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934411995626923,
      "coreWealth": 1.3284930612509864
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164152453382435,
      "coreWealth": 1.3620575789543992
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926039136128404,
      "coreWealth": 1.4420993974514649
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558630188172093,
      "coreWealth": 1.505191985556137
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922676650245734,
      "coreWealth": 1.4583257777748193
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446077096597956,
      "coreWealth": 1.4332042623532064
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349746864313747,
      "coreWealth": 1.5404163793121306
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.590307250578811,
      "coreWealth": 1.6221449786208229
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324529816916782,
      "coreWealth": 1.6302689993188733
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640308374389252,
      "coreWealth": 1.6527246469060768
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950218645622792,
      "coreWealth": 1.6727346159834438
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447497819672848,
      "coreWealth": 1.7375613679354756
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801356442860081,
      "coreWealth": 1.7664312511171734
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153816766633413,
      "coreWealth": 1.7837892584040929
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460742639995387,
      "coreWealth": 1.8026117721398902
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8799994081437768,
      "coreWealth": 1.8231925860267613
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241741395301516,
      "coreWealth": 1.7503549743080438
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912156535665308,
      "coreWealth": 1.8277601399491663
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786680468628771,
      "coreWealth": 1.7981639330357115
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.926492342419064,
      "coreWealth": 1.8450827197700994
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.872004361843612,
      "coreWealth": 1.7800082840025817
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700055066786483,
      "coreWealth": 1.7860572894012594
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217594394106292,
      "coreWealth": 1.8230981279151262
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227527591839042,
      "coreWealth": 1.7820974480543017
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114075666460952,
      "coreWealth": 1.7798511026864936
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931081794349789,
      "coreWealth": 1.7341824095190372
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239341644871084,
      "coreWealth": 1.762195857870627
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945509401264249,
      "coreWealth": 1.729801815252095
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459025666474265,
      "coreWealth": 1.675211599696455
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673605952554253,
      "coreWealth": 1.6964375900921507
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924120367181234,
      "coreWealth": 1.731677256054263
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437458219497243,
      "coreWealth": 1.6959479624061988
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973188727718078,
      "coreWealth": 1.7712347730036548
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025969008389487,
      "coreWealth": 1.7161158365136882
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347552193382491,
      "coreWealth": 1.7600506558630011
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983237397784962,
      "coreWealth": 1.7754110766092301
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834630335714623,
      "coreWealth": 1.7877921018392129
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278386467750256,
      "coreWealth": 1.827255110507141
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344556396498814,
      "coreWealth": 1.865677077136811
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355288494469823,
      "coreWealth": 1.8338122757476882
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.004442615617496,
      "coreWealth": 1.7905712490928674
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929079465829047,
      "coreWealth": 1.7805214520531556
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018852257140721,
      "coreWealth": 1.8449821452823532
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994932668317143,
      "coreWealth": 1.927125077245239
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144495421504055,
      "coreWealth": 1.905210508527027
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168557729964481,
      "coreWealth": 1.94941747761611
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407265535059553,
      "coreWealth": 2.00247499500948
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933285762416106,
      "coreWealth": 1.9350686927095295
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232723871578586,
      "coreWealth": 1.9774198214155754
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.29825408530051,
      "coreWealth": 2.0275958076176392
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011524547289275,
      "coreWealth": 2.044717715179944
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308737825331973,
      "coreWealth": 2.0785867865625893
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531842314852867,
      "coreWealth": 2.1331995450274035
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840885451999294,
      "coreWealth": 2.111230430399251
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458205403919054,
      "coreWealth": 2.1658934825737632
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466961959154759,
      "coreWealth": 2.117923732468664
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126192667349616,
      "coreWealth": 2.1581546230824293
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012234328467255,
      "coreWealth": 2.151806931920749
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475130953032422,
      "coreWealth": 2.113829127350584
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471545920652751,
      "coreWealth": 2.1198173280953303
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571680977251256,
      "coreWealth": 2.154950422892148
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531737114700984,
      "coreWealth": 2.238859702305672
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576865149687465,
      "coreWealth": 2.243694683798251
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304926278672043,
      "coreWealth": 2.296820843701151
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817570770035511,
      "coreWealth": 2.4442908583922502
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623222408527403,
      "coreWealth": 2.5515267380533593
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998861627068002,
      "coreWealth": 2.5501856719635962
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315420458372953,
      "coreWealth": 2.599432867381313
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508413853090414,
      "coreWealth": 2.7970945494253283
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403694738576283,
      "coreWealth": 2.957213596062669
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267636947305448,
      "coreWealth": 2.741648145753286
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509734918451622,
      "coreWealth": 2.9742180967376384
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.76462654009403,
      "coreWealth": 3.168147005113548
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471349849322917,
      "coreWealth": 3.099046034687445
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546191740597959,
      "coreWealth": 2.9561068245856728
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642399518200621,
      "coreWealth": 3.102708245615445
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103077194206934,
      "coreWealth": 3.0873014278227124
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023966756627547,
      "coreWealth": 3.0167276135226153
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502396675662764,
      "cagr": 0.14107993134311836,
      "annVol": 0.11149368383151877,
      "sharpe": 1.2415402837613925,
      "mdd": -0.12331714189134457,
      "calmar": 1.1440415272308588
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167276135226118,
      "cagr": 0.12328566398904006,
      "annVol": 0.10945801866661678,
      "sharpe": 1.1187162768280527,
      "mdd": -0.1355528378843497,
      "calmar": 0.9095026405439356
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955185620082664,
      "cagr": 0.14419583175853856,
      "annVol": 0.10819062112796905,
      "sharpe": 1.3012988229766829,
      "mdd": -0.10212258518910966,
      "calmar": 1.4119876762962673
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.812405115685574,
      "cagr": 0.11435303950176268,
      "annVol": 0.10724482547604419,
      "sharpe": 1.0649237148136397,
      "mdd": -0.11135952010901817,
      "calmar": 1.0268815759067023
    }
  ]
} as PdsCanonicalSummary;
