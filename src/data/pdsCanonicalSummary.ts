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
  "generatedAt": "2026-11-13T08:36:45.165198+09:00",
  "systemAsOfKst": "2026-11-13T08:34:24.236031+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-12",
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
  "previewThrough": "2026-11-12",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.18238154984079288,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334695601471823,
      "adaptiveDynamicFx": 0.012334695601472268
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897621928949608,
      "adaptiveDynamicFx": 0.010897621928949164
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723392000074854,
      "adaptiveDynamicFx": 0.07233920000748517
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830127111526173,
      "adaptiveDynamicFx": 0.05830127111526173
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020758201620046,
      "adaptiveDynamicFx": -0.050207582016200236
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408960787087082,
      "adaptiveDynamicFx": 0.07408960787087082
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417803941013,
      "adaptiveDynamicFx": 0.07262417803940968
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646281938950003,
      "adaptiveDynamicFx": 0.010507362227901273
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583084022554,
      "adaptiveDynamicFx": -0.03212559876809673
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988997997612,
      "adaptiveDynamicFx": 0.02268662445663705
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810628840810963,
      "adaptiveDynamicFx": -0.008810628840810963
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590710833,
      "adaptiveDynamicFx": -0.022109105359480297
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.021601929241873,
      "coreWealth": 1.029668756816818
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287681898291852,
      "coreWealth": 1.0247507292600995
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532548135176,
      "coreWealth": 1.0459295663909671
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497067088905268,
      "coreWealth": 1.0564922886756234
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623824328489664,
      "coreWealth": 1.0589611315257454
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725892369921817,
      "coreWealth": 1.0800316021149463
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613391329097939,
      "coreWealth": 1.089747108074749
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619229580740228,
      "coreWealth": 1.103354883147542
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218662878248717,
      "coreWealth": 1.1627011231330449
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459677762336,
      "coreWealth": 1.1182716815454554
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.062924187970048,
      "coreWealth": 1.11152621111318
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765210299981736,
      "coreWealth": 1.1187187543300185
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096733864367011,
      "coreWealth": 1.1297960157542661
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307191788280921,
      "coreWealth": 1.1267499299183805
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.13496753563883,
      "coreWealth": 1.136465456416585
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642449379600193,
      "coreWealth": 1.1643760219761887
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586232354428097,
      "coreWealth": 1.1606691108480873
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289962583342241,
      "coreWealth": 1.1185065015955524
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122601202070215,
      "coreWealth": 1.1226168688955547
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055663201915549,
      "coreWealth": 1.1062153751885537
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236940143910923,
      "coreWealth": 1.1283264610292862
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295024933532876,
      "coreWealth": 1.131335969979883
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586813288609923,
      "coreWealth": 1.1509470706684153
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932137191079781,
      "coreWealth": 1.1706048021800657
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618190581313217,
      "coreWealth": 1.127909475430042
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845181226503794,
      "coreWealth": 1.1664622968665215
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064618506267815,
      "coreWealth": 1.1727843143401446
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542400410247714,
      "coreWealth": 1.2088837310436193
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408097516887846,
      "coreWealth": 1.2007769728303341
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425566890047732,
      "coreWealth": 1.2202161805260117
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606144271124375,
      "coreWealth": 1.2312680204403568
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833089595793152,
      "coreWealth": 1.2648142778346412
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.302872276032769,
      "coreWealth": 1.2675197032941732
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.301756945475801,
      "coreWealth": 1.2539452408463123
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.275257632972226,
      "coreWealth": 1.226018809957165
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503376754249572,
      "coreWealth": 1.3003511600407291
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934424871081408,
      "coreWealth": 1.3284942887840858
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164163644714,
      "coreWealth": 1.3620586551386618
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926052245979076,
      "coreWealth": 1.4421006640773635
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555864305710175,
      "coreWealth": 1.5051932305378306
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.492269041322412,
      "coreWealth": 1.4583271227685224
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446088973961122,
      "coreWealth": 1.4332054407137667
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349761431446867,
      "coreWealth": 1.5404178411896865
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903085262274488,
      "coreWealth": 1.6221462798077637
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324546118314287,
      "coreWealth": 1.6302706272777339
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640323838209508,
      "coreWealth": 1.6527261827812685
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950234405211702,
      "coreWealth": 1.6727361712205993
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447512764420583,
      "coreWealth": 1.7375628562529708
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801373103291402,
      "coreWealth": 1.7664329043342515
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153832010575415,
      "coreWealth": 1.7837907562698199
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460758996432909,
      "coreWealth": 1.8026133692753565
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800011302452597,
      "coreWealth": 1.8231942560925283
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241758038670184,
      "coreWealth": 1.750356571293906
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912173974265174,
      "coreWealth": 1.8277618252978254
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786698411609624,
      "coreWealth": 1.7981656504450767
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264943970479549,
      "coreWealth": 1.845084687574575
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720060958832134,
      "coreWealth": 1.7800099328261163
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700073554797318,
      "coreWealth": 1.7860590552060294
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.921761187890552,
      "coreWealth": 1.8230997866297394
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227546845710048,
      "coreWealth": 1.7820992325933775
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114092563658582,
      "coreWealth": 1.779852676107897
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931104810541273,
      "coreWealth": 1.7341845179180588
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239361619879292,
      "coreWealth": 1.7621976874486516
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.894552950930983,
      "coreWealth": 1.729803651198174
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459045506143603,
      "coreWealth": 1.67521340020558
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673627386950473,
      "coreWealth": 1.6964395373387364
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924135519109135,
      "coreWealth": 1.731678642551939
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437475954902671,
      "coreWealth": 1.695949593776658
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973206016478086,
      "coreWealth": 1.7712363869892267
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025988498942652,
      "coreWealth": 1.7161175945343632
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347567732678144,
      "coreWealth": 1.7600520694758024
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832396858487773,
      "coreWealth": 1.7754131249035194
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.983465458868543,
      "coreWealth": 1.7877942878779167
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278412755536217,
      "coreWealth": 1.827257479260259
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344582543054885,
      "coreWealth": 1.8656794748804273
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355315838546,
      "coreWealth": 1.8338147391813315
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044451405186967,
      "coreWealth": 1.790573504590458
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929104084819682,
      "coreWealth": 1.7805236515847995
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018854883591796,
      "coreWealth": 1.8449845455349314
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.099496151408594,
      "coreWealth": 1.9271277249986396
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.11445251316464,
      "coreWealth": 1.905213185539376
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685606869393514,
      "coreWealth": 1.949420135778451
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407294542226013,
      "coreWealth": 2.002477587299262
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193331332413061,
      "coreWealth": 1.9350711243475165
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327266316287013,
      "coreWealth": 1.9774222658637561
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982572788901185,
      "coreWealth": 2.0275986251080744
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301155629821152,
      "coreWealth": 2.044720536447745
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087410009259846,
      "coreWealth": 2.0785896455913138
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353187474101522,
      "coreWealth": 2.133202484511442
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840919440254615,
      "coreWealth": 2.1112334402303725
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582088952423504,
      "coreWealth": 2.1658965587342704
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669654399666228,
      "coreWealth": 2.117926720797703
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126230855940563,
      "coreWealth": 2.1581579032007205
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012270990192835,
      "coreWealth": 2.1518100859354696
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751345339741184,
      "coreWealth": 2.1138321855721514
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715494569729195,
      "coreWealth": 2.119820361157638
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457171680598332,
      "coreWealth": 2.1549535650923644
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531740691261944,
      "coreWealth": 2.2388628651214937
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768688772268584,
      "coreWealth": 2.2436979293931247
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630496491892551,
      "coreWealth": 2.2968242175839997
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817574911023272,
      "coreWealth": 2.444294450769994
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962326640187871,
      "coreWealth": 2.5515305273174227
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998866037566719,
      "coreWealth": 2.5501894225836748
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031546545859688,
      "coreWealth": 2.599436725980643
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508461977726335,
      "coreWealth": 2.797098690173547
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403746633029937,
      "coreWealth": 2.957218056716822
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267641770228751,
      "coreWealth": 2.741652192334636
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097400676474773,
      "coreWealth": 2.974222460267035
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764632055192359,
      "coreWealth": 3.1681516463819617
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747140513267526,
      "coreWealth": 3.0990506068647092
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546196989968486,
      "coreWealth": 2.956111200463001
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424049241536536,
      "coreWealth": 3.102712850572967
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103130462789936,
      "coreWealth": 3.0873059830070666
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5024018702869775,
      "coreWealth": 3.016732087820584
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502401870286988,
      "cagr": 0.14108010953606454,
      "annVol": 0.11149364091651787,
      "sharpe": 1.2415421226422232,
      "mdd": -0.12331722324902095,
      "calmar": 1.1440422174538756
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167320878206216,
      "cagr": 0.12328583940320548,
      "annVol": 0.1094579828284361,
      "sharpe": 1.1187180372920755,
      "mdd": -0.13555299525542652,
      "calmar": 0.909502878714663
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955195786340965,
      "cagr": 0.14419593283015208,
      "annVol": 0.10819052987981875,
      "sharpe": 1.301300647634922,
      "mdd": -0.10212257378880751,
      "calmar": 1.4119888236302536
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124059949609477,
      "cagr": 0.114353137937238,
      "annVol": 0.10724475208286934,
      "sharpe": 1.0649251958025667,
      "mdd": -0.11135945030778993,
      "calmar": 1.0268831035100634
    }
  ]
} as PdsCanonicalSummary;
