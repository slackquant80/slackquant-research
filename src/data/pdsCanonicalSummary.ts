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
  "generatedAt": "2026-11-13T11:24:52.012023+09:00",
  "systemAsOfKst": "2026-11-13T11:22:04.905716+09:00",
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
  "previewFxZscore": -0.1639798179170576,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334693858955914,
      "adaptiveDynamicFx": 0.012334693858956136
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897627332583149,
      "adaptiveDynamicFx": 0.010897627332582926
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233919299945213,
      "adaptiveDynamicFx": 0.07233919299945213
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.0583012473070601,
      "adaptiveDynamicFx": 0.05830124730706032
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207563025996826,
      "adaptiveDynamicFx": -0.05020756302599694
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.0740896129313331,
      "adaptiveDynamicFx": 0.0740896129313331
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.0726241573274935,
      "adaptiveDynamicFx": 0.0726241573274935
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646291427456761,
      "adaptiveDynamicFx": 0.010507316062938532
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362582557096773,
      "adaptiveDynamicFx": -0.03212555883012147
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129886098854028,
      "adaptiveDynamicFx": 0.022686623492479185
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810628834075573,
      "adaptiveDynamicFx": -0.008810628834075351
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590709944,
      "adaptiveDynamicFx": -0.022109105359480075
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216020578166491,
      "coreWealth": 1.029668886406853
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287683683898152,
      "coreWealth": 1.0247509071234289
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532330651727,
      "coreWealth": 1.0459295444607026
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497068101714742,
      "coreWealth": 1.0564923906112773
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623825641050126,
      "coreWealth": 1.0589612623590943
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725892988204988,
      "coreWealth": 1.080031664372271
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613393367485513,
      "coreWealth": 1.089747317369487
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619231811664198,
      "coreWealth": 1.103355114944098
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218666091031526,
      "coreWealth": 1.1627014561055398
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.085146162059208,
      "coreWealth": 1.118271881759209
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629242313561689,
      "coreWealth": 1.111526256483124
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.076521279217524,
      "coreWealth": 1.1187190133183296
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967342618660545,
      "coreWealth": 1.1297964252363213
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307195632705662,
      "coreWealth": 1.1267503130113197
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.13496777812232,
      "coreWealth": 1.136465699220105
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.164245172352574,
      "coreWealth": 1.1643762563951356
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.158623602201058,
      "coreWealth": 1.1606694782539535
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289964497717622,
      "coreWealth": 1.1185066912544042
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226012886709813,
      "coreWealth": 1.1226169554975327
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.105566668063293,
      "coreWealth": 1.1062157232645227
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236937111806373,
      "coreWealth": 1.1283261565688445
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295023869760477,
      "coreWealth": 1.131335863429969
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586811134831898,
      "coreWealth": 1.150946856728275
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932133543018133,
      "coreWealth": 1.1706044442862238
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818810934012,
      "coreWealth": 1.1279092354475926
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845176799235748,
      "coreWealth": 1.166461860888286
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064615487177188,
      "coreWealth": 1.1727840208586648
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.254239668986844,
      "coreWealth": 1.2088833724594725
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.240809456497782,
      "coreWealth": 1.2007766871632082
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425564929322845,
      "coreWealth": 1.2202159879788046
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606142007723737,
      "coreWealth": 1.231267799369367
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833087580678135,
      "coreWealth": 1.2648140792272693
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028721698052848,
      "coreWealth": 1.267519599949106
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017565891134175,
      "coreWealth": 1.2539448975726228
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752573525662843,
      "coreWealth": 1.2260185403779476
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503371529697128,
      "coreWealth": 1.3003506569256262
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934421553243355,
      "coreWealth": 1.3284939724646891
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164161788669516,
      "coreWealth": 1.3620584766571469
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926048849079547,
      "coreWealth": 1.4421003358813407
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558639526392672,
      "coreWealth": 1.5051928889656714
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.492268535059206,
      "coreWealth": 1.4583266280203664
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446086250255428,
      "coreWealth": 1.4332051704932403
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975744288754,
      "coreWealth": 1.54041744091976
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903080467786792,
      "coreWealth": 1.6221457907605041
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324538998248788,
      "coreWealth": 1.6302699162237522
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640318573105115,
      "coreWealth": 1.6527256598481916
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950229302774915,
      "coreWealth": 1.6727356676859457
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447508985777862,
      "coreWealth": 1.73756247994552
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801368072704025,
      "coreWealth": 1.7664324051483293
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153826497435734,
      "coreWealth": 1.7837902145501794
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460754592838433,
      "coreWealth": 1.802612939283392
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800005956419241,
      "coreWealth": 1.823193737642997
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241753171264241,
      "coreWealth": 1.7503561042503388
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912167860024276,
      "coreWealth": 1.82776123438872
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.878669414913866,
      "coreWealth": 1.7981652424634063
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264938447293887,
      "coreWealth": 1.8450841585958773
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720054985636276,
      "coreWealth": 1.7800093648606758
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.870006530399624,
      "coreWealth": 1.7860582671654024
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217603925963949,
      "coreWealth": 1.8230990321652478
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227541648071929,
      "coreWealth": 1.7820987508519106
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114084286664947,
      "coreWealth": 1.7798519053766182
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893109543661654,
      "coreWealth": 1.734183659219371
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239352888461367,
      "coreWealth": 1.762196887708802
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.894551842907194,
      "coreWealth": 1.7298026395275503
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459037842322592,
      "coreWealth": 1.675212704690996
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673615022271262,
      "coreWealth": 1.6964384140470492
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.892413086422527,
      "coreWealth": 1.731678216600502
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.843746714474788,
      "coreWealth": 1.6959487833849203
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.897319825885308,
      "coreWealth": 1.771235662779129
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025981885072039,
      "coreWealth": 1.716116997972485
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347559085202908,
      "coreWealth": 1.7600512828132828
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832384359683297,
      "coreWealth": 1.7754120059998706
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834641134545312,
      "coreWealth": 1.787793075190575
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278400270853223,
      "coreWealth": 1.8272563542841425
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344571123874116,
      "coreWealth": 1.8656784276959593
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355301413654026,
      "coreWealth": 1.8338134396397587
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044440973023665,
      "coreWealth": 1.790572572683942
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929092909893402,
      "coreWealth": 1.7805226531846616
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018853779923236,
      "coreWealth": 1.8449835369179037
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994948597420446,
      "coreWealth": 1.9271265393777994
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451232714285,
      "coreWealth": 1.9052120317982275
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685593233552165,
      "coreWealth": 1.9494189099892183
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240728218245303,
      "coreWealth": 2.002476482740745
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933302747689924,
      "coreWealth": 1.9350701912388544
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327254887930064,
      "coreWealth": 1.9774212537072804
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.298255869610803,
      "coreWealth": 2.027597381795239
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301154163234751,
      "coreWealth": 2.0447192332941175
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087396083321265,
      "coreWealth": 2.0785883918209067
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531859901177787,
      "coreWealth": 2.1332011392562023
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.3840902732993237,
      "coreWealth": 2.1112319607182797
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582072729377913,
      "coreWealth": 2.1658951293423923
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669639359442943,
      "coreWealth": 2.1179254295720575
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126211137751953,
      "coreWealth": 2.1581562095537743
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501225220477239,
      "coreWealth": 2.1518084698224516
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475132632358354,
      "coreWealth": 2.113830561540604
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715475628622534,
      "coreWealth": 2.1198187366000933
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571697435609337,
      "coreWealth": 2.1549518662995446
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317389156096763,
      "coreWealth": 2.2388612948809476
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768669641010895,
      "coreWealth": 2.2436962636210236
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304945904333086,
      "coreWealth": 2.2968225573203926
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175728161156104,
      "coreWealth": 2.444292633401767
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623244234943966,
      "coreWealth": 2.5515286180205443
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988637883691083,
      "coreWealth": 2.5501875099007405
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031544288355933,
      "coreWealth": 2.599434790256413
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508437557176997,
      "coreWealth": 2.7970965889764545
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440372001476409,
      "coreWealth": 2.957215768709752
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676393073794077,
      "coreWealth": 2.741650125928125
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097374388623575,
      "coreWealth": 2.9742202325830704
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.7646291628004915,
      "coreWealth": 3.1681492122699892
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747137598593818,
      "coreWealth": 3.0990481963009184
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194251341211,
      "coreWealth": 2.956108917542253
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424020974645086,
      "coreWealth": 3.1027104427119974
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103102445192903,
      "coreWealth": 3.0873035871235794
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.502399152271036,
      "coreWealth": 3.0167297467055048
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.5023991522710163,
      "cagr": 0.14108001629907574,
      "annVol": 0.11149362016156196,
      "sharpe": 1.2415415982605449,
      "mdd": -0.1233171633681458,
      "calmar": 1.144042016908072
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167297467054666,
      "cagr": 0.12328574762017497,
      "annVol": 0.10945797045607261,
      "sharpe": 1.1187174026850546,
      "mdd": -0.13555293636582466,
      "calmar": 0.9095025967379746
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955183196862648,
      "cagr": 0.14419580766719542,
      "annVol": 0.10819055664530199,
      "sharpe": 1.3012993394138235,
      "mdd": -0.10212253806506066,
      "calmar": 1.4119880919462708
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124049061023211,
      "cagr": 0.11435301603876957,
      "annVol": 0.10724478890762829,
      "sharpe": 1.0649238450457548,
      "mdd": -0.11135947916489042,
      "calmar": 1.0268817427697072
    }
  ]
} as PdsCanonicalSummary;
