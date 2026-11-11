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
  "generatedAt": "2026-11-12T00:01:29.937628+09:00",
  "systemAsOfKst": "2026-11-11T23:58:29.807874+09:00",
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
      "coreDynamicFx": 0.012334694683671987,
      "adaptiveDynamicFx": 0.012334694683671765
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897612415017521,
      "adaptiveDynamicFx": 0.0108976124150173
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723391828929465,
      "adaptiveDynamicFx": 0.0723391828929465
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830124983831797,
      "adaptiveDynamicFx": 0.05830124983831797
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756668656723,
      "adaptiveDynamicFx": -0.05020756668656656
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408962130762409,
      "adaptiveDynamicFx": 0.07408962130762453
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417665450216,
      "adaptiveDynamicFx": 0.07262417665450216
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646285481969548,
      "adaptiveDynamicFx": 0.01050734815775023
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583567701229,
      "adaptiveDynamicFx": -0.03212561470790276
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712989595027948,
      "adaptiveDynamicFx": 0.022686641561039833
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810629819080984,
      "adaptiveDynamicFx": -0.008810629819080984
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
      "coreDynamicFxWealth": 1.021601885028818,
      "coreWealth": 1.0296687122546446
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682226282948,
      "coreWealth": 1.0247507619311242
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372530749798905,
      "coreWealth": 1.0459293850530855
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066049139934,
      "coreWealth": 1.0564921840269592
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.062382332888104,
      "coreWealth": 1.0589610318867984
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725890636115119,
      "coreWealth": 1.0800314275312424
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613390579618895,
      "coreWealth": 1.089747031120778
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619228529413611,
      "coreWealth": 1.1033547739130314
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218663642112285,
      "coreWealth": 1.1627012022997916
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459121072424,
      "coreWealth": 1.1182716241770863
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629239928728715,
      "coreWealth": 1.1115260070952206
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765208884956878,
      "coreWealth": 1.118718607280887
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967341054006956,
      "coreWealth": 1.1297962640541561
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307191430307106,
      "coreWealth": 1.1267498942466643
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.134967482519939,
      "coreWealth": 1.1364654032275896
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642448698578791,
      "coreWealth": 1.1643759538663818
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.158623067437919,
      "coreWealth": 1.1606689425465382
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289959198063881,
      "coreWealth": 1.1185061662130555
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122600441787189,
      "coreWealth": 1.12261610860192
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055660018339717,
      "coreWealth": 1.1062150566440703
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236934329244335,
      "coreWealth": 1.128325877165522
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295018063985292,
      "coreWealth": 1.1313352819100193
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586805550487596,
      "coreWealth": 1.1509463020214208
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932129166436987,
      "coreWealth": 1.1706040149208161
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818043116245,
      "coreWealth": 1.1279084900398362
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845172219619968,
      "coreWealth": 1.1664614099074986
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064611750741254,
      "coreWealth": 1.1727836576450703
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.254239348272592,
      "coreWealth": 1.2088830633430125
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408092534923263,
      "coreWealth": 1.2007764907074043
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425562537831518,
      "coreWealth": 1.2202157531294457
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.260613734073782,
      "coreWealth": 1.2312673435352597
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283308594119102,
      "coreWealth": 1.2648139176413378
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028717426266647,
      "coreWealth": 1.2675191843616898
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017563419071871,
      "coreWealth": 1.2539446594459274
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752569369875106,
      "coreWealth": 1.2260181408450355
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503368208236157,
      "coreWealth": 1.3003503370748413
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934418321195898,
      "coreWealth": 1.32849366432448
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164157507810373,
      "coreWealth": 1.3620580649998526
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926045403819082,
      "coreWealth": 1.4421000030128517
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863737930868,
      "coreWealth": 1.5051926812498486
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922683295661305,
      "coreWealth": 1.4583264272012653
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.444608221638141,
      "coreWealth": 1.4332047702900974
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349753537597275,
      "coreWealth": 1.5404170490062532
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903077839819855,
      "coreWealth": 1.6221455227026542
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324537309619473,
      "coreWealth": 1.63026974758673
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640314669921947,
      "coreWealth": 1.6527252721818722
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.695022647593016,
      "coreWealth": 1.6727353887183842
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447506587201065,
      "coreWealth": 1.7375622410760565
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801366489219752,
      "coreWealth": 1.7664322480189434
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153825680771944,
      "coreWealth": 1.7837901343050035
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460753400053507,
      "coreWealth": 1.8026128228130884
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800003650767136,
      "coreWealth": 1.8231935140446294
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241751005518154,
      "coreWealth": 1.7503558964398833
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912167335967458,
      "coreWealth": 1.827761183741387
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786692613052276,
      "coreWealth": 1.7981650954371515
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264935985432678,
      "coreWealth": 1.84508392281307
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720054499307592,
      "coreWealth": 1.7800093186177706
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700068786717816,
      "coreWealth": 1.7860585998029344
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.921760670657423,
      "coreWealth": 1.8230992959508812
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227542437789311,
      "coreWealth": 1.782098824046618
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114088348256117,
      "coreWealth": 1.779852283581015
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931100993400198,
      "coreWealth": 1.7341841682487285
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239359612191316,
      "coreWealth": 1.7621975035577842
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945525450226524,
      "coreWealth": 1.7298032805874226
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459044750878124,
      "coreWealth": 1.6752133316629967
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673619026608919,
      "coreWealth": 1.6964387778283587
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924131828884447,
      "coreWealth": 1.731678304872941
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437469487246356,
      "coreWealth": 1.6959489988568888
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.897320354664228,
      "coreWealth": 1.7712361564186612
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025983607225272,
      "coreWealth": 1.7161171533082973
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.934756361791296,
      "coreWealth": 1.7600516951548104
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.983238389274458,
      "coreWealth": 1.775411964199113
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834640365448752,
      "coreWealth": 1.7877930058681413
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278398295329527,
      "coreWealth": 1.8272561762726467
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034457178714086,
      "coreWealth": 1.8656784885201623
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035530264934103,
      "coreWealth": 1.833813550963057
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.004443939905164,
      "coreWealth": 1.7905724320808063
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929091821723217,
      "coreWealth": 1.7805225559643927
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188538455851606,
      "coreWealth": 1.8449835969248076
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994947492988123,
      "coreWealth": 1.9271264380019428
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144510053161207,
      "coreWealth": 1.9052118269026395
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685591840045255,
      "coreWealth": 1.94941878472039
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407280708068265,
      "coreWealth": 2.002476350979071
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933300690114517,
      "coreWealth": 1.9350700097088291
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232725581181533,
      "coreWealth": 1.9774213355315002
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982559030963605,
      "coreWealth": 2.0275974113372985
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011542495946453,
      "coreWealth": 2.044719310030271
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087395407144706,
      "coreWealth": 2.0785883309438407
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186050491152,
      "coreWealth": 2.1332011939856317
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840903939552396,
      "coreWealth": 2.111232067565158
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458207358993273,
      "coreWealth": 2.1658952051647713
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669639268254757,
      "coreWealth": 2.1179254217434034
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512620999037165,
      "coreWealth": 2.158156111002254
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012253908641866,
      "coreWealth": 2.151808616406628
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.47513288946287,
      "coreWealth": 2.113830781114836
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715478449943014,
      "coreWealth": 2.119818978581586
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457169964887517,
      "coreWealth": 2.154952060404207
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317390243452103,
      "coreWealth": 2.2388613910376836
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768671837774764,
      "coreWealth": 2.2436964548947933
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630494763508859,
      "coreWealth": 2.296822708441703
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175729846801336,
      "coreWealth": 2.44429277963436
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623246324581487,
      "coreWealth": 2.551528798006551
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988640023534407,
      "coreWealth": 2.5501876918696995
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.0315444599364367,
      "coreWealth": 2.599434937380201
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508439090718775,
      "coreWealth": 2.797096720925701
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440372172000051,
      "coreWealth": 2.9572159152855093
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676394567477485,
      "coreWealth": 2.7416502512527496
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097376266680396,
      "coreWealth": 2.974220391733265
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646294320781326,
      "coreWealth": 3.168149438882391
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471378890028726,
      "coreWealth": 3.0990484364820072
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194488308098,
      "coreWealth": 2.9561091150779255
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642402375795351,
      "coreWealth": 3.1027106798027724
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610310516810077,
      "coreWealth": 3.0873038199690113
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023993894389864,
      "coreWealth": 3.0167299509859187
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502399389439008,
      "cagr": 0.14108002443472922,
      "annVol": 0.11149364638902436,
      "sharpe": 1.241541396066672,
      "mdd": -0.12331721418533492,
      "calmar": 1.1440416114387595
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167299509859307,
      "cagr": 0.12328575562895905,
      "annVol": 0.10945799042866651,
      "sharpe": 1.1187172837000805,
      "mdd": -0.13555289224365952,
      "calmar": 0.9095029518614033
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955188967463707,
      "cagr": 0.1441958650377686,
      "annVol": 0.10819056026811025,
      "sharpe": 1.301299763917618,
      "mdd": -0.10212256803201836,
      "calmar": 1.4119882393924823
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124054051991416,
      "cagr": 0.1143530719130077,
      "annVol": 0.1072447792266638,
      "sharpe": 1.0649244001788032,
      "mdd": -0.1113594950121648,
      "calmar": 1.0268820983834013
    }
  ]
} as PdsCanonicalSummary;
