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
  "generatedAt": "2026-11-24T13:18:23.479369+09:00",
  "systemAsOfKst": "2026-11-24T13:15:19.568133+09:00",
  "officialSignal": "2026-10",
  "holdingMonth": "2026-11",
  "executionClose": "2026-11-02",
  "markThrough": "2026-11-23",
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
  "previewThrough": "2026-11-23",
  "adaptivePreviewAvailable": true,
  "adaptivePreviewState": "NORMAL",
  "adaptivePreviewRiskBudget": 1.0,
  "officialFxHedge": 0.5,
  "officialFxZscore": -0.1285143179328798,
  "previewFxAvailable": true,
  "previewFxHedge": 0.5,
  "previewFxZscore": -0.08353951995329886,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334716070387497,
      "adaptiveDynamicFx": 0.012334716070387497
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897639092405154,
      "adaptiveDynamicFx": 0.010897639092404932
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.0723391831116631,
      "adaptiveDynamicFx": 0.07233918311166287
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.058301260800955435,
      "adaptiveDynamicFx": 0.05830126080095499
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020756058362219,
      "adaptiveDynamicFx": -0.05020756058362208
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408962650525841,
      "adaptiveDynamicFx": 0.07408962650525908
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262415695945723,
      "adaptiveDynamicFx": 0.07262415695945745
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646295272757173,
      "adaptiveDynamicFx": 0.010507310574354056
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.05362583294615264,
      "adaptiveDynamicFx": -0.032125563545218894
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988931889182,
      "adaptiveDynamicFx": 0.022686658624800238
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810633055183703,
      "adaptiveDynamicFx": -0.008810633055183481
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590709944,
      "adaptiveDynamicFx": -0.022109105359480297
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216019042163973,
      "coreWealth": 1.0296687315937345
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287683156177578,
      "coreWealth": 1.0247508545574529
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532045514296,
      "coreWealth": 1.0459295157084523
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066531428962,
      "coreWealth": 1.0564922325676263
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623823556304808,
      "coreWealth": 1.0589610545559347
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.07258914527083,
      "coreWealth": 1.0800315097571687
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.061339017791106,
      "coreWealth": 1.0897469898747754
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619228415367221,
      "coreWealth": 1.1033547620634294
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218663227434111,
      "coreWealth": 1.1627011593225856
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851459418079277,
      "coreWealth": 1.1182716547844287
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.062924336859876,
      "coreWealth": 1.1115263668109707
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765208753179076,
      "coreWealth": 1.1187185935865616
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967339347421685,
      "coreWealth": 1.129796088250955
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307192397479757,
      "coreWealth": 1.1267499906244154
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349675889501738,
      "coreWealth": 1.1364655097982912
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642448267868855,
      "coreWealth": 1.1643759107905407
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586232090062532,
      "coreWealth": 1.1606690843648528
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289960064263522,
      "coreWealth": 1.1185062520282154
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.1226009439593974,
      "coreWealth": 1.1226166107811377
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055663772087094,
      "coreWealth": 1.1062154322391842
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236930725697387,
      "coreWealth": 1.128325515325261
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295018897472016,
      "coreWealth": 1.1313353653939893
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586805908867763,
      "coreWealth": 1.1509463376202178
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.193212980417499,
      "coreWealth": 1.1706040774862376
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618182659891836,
      "coreWealth": 1.127908706407867
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.184517343234606,
      "coreWealth": 1.166461529331529
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064610299892837,
      "coreWealth": 1.1727835166101708
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542392260657333,
      "coreWealth": 1.208882945555445
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408090653333317,
      "coreWealth": 1.2007763086190641
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.242555878963258,
      "coreWealth": 1.220215385048614
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606136877725211,
      "coreWealth": 1.2312672983118669
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833083790466928,
      "coreWealth": 1.264813705668492
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028715204802648,
      "coreWealth": 1.2675189682430863
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.301756167806984,
      "coreWealth": 1.2539444917401823
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752568447903445,
      "coreWealth": 1.2260180522076853
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503368459096323,
      "coreWealth": 1.300350361232231
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.39344181148201,
      "coreWealth": 1.328493644648817
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164155401304888,
      "coreWealth": 1.3620578624334272
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926043915717175,
      "coreWealth": 1.4420998592378829
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.555863691495174,
      "coreWealth": 1.5051926363264667
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922682409254935,
      "coreWealth": 1.458326340576778
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446080804684607,
      "coreWealth": 1.4332046302347856
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349752953217646,
      "coreWealth": 1.5404169903611231
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903079148900956,
      "coreWealth": 1.6221456562315304
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324537144320077,
      "coreWealth": 1.6302697310789083
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640314194259351,
      "coreWealth": 1.6527252249388031
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950225727507424,
      "coreWealth": 1.672735314860188
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.744750598573261,
      "coreWealth": 1.7375621811770185
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801364852771764,
      "coreWealth": 1.7664320856339675
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153823575978247,
      "coreWealth": 1.7837899274885307
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460751042084698,
      "coreWealth": 1.802612592567622
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800002365835458,
      "coreWealth": 1.8231933894340664
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241748575505434,
      "coreWealth": 1.7503556632721877
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912165597796085,
      "coreWealth": 1.8277610157562958
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786689514474757,
      "coreWealth": 1.7981647988573304
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264933719497586,
      "coreWealth": 1.8450837057949392
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720051401318192,
      "coreWealth": 1.7800090240433064
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700064312387392,
      "coreWealth": 1.7860581724560363
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217600406686752,
      "coreWealth": 1.8230986983051565
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227539722349274,
      "coreWealth": 1.7820985723668954
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114083506021504,
      "coreWealth": 1.7798518326852026
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893109378171123,
      "coreWealth": 1.7341835076217056
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.923935851539454,
      "coreWealth": 1.7621974030984853
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945519929025345,
      "coreWealth": 1.7298027764793695
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.845903795176391,
      "coreWealth": 1.6752127146231148
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.867361498532702,
      "coreWealth": 1.6964384106907764
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924130569630997,
      "coreWealth": 1.731678189643248
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437466843846209,
      "coreWealth": 1.695948755706826
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973198853103173,
      "coreWealth": 1.7712357182551126
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025980076566817,
      "coreWealth": 1.716116834847834
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347564570796716,
      "coreWealth": 1.7600517818388317
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832385666402992,
      "coreWealth": 1.7754121229785278
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834642977392973,
      "coreWealth": 1.787793241295428
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278406539734464,
      "coreWealth": 1.827256919163657
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034457422946058,
      "coreWealth": 1.8656787124906353
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035530883581725,
      "coreWealth": 1.8338141083040176
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044443666211524,
      "coreWealth": 1.7905728132667642
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929096847452499,
      "coreWealth": 1.7805230049775447
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188543112916717,
      "coreWealth": 1.8449840225231617
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994952515645298,
      "coreWealth": 1.9271268990316945
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451627082677,
      "coreWealth": 1.9052123871412052
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685598424225145,
      "coreWealth": 1.949419376602968
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407286396868193,
      "coreWealth": 2.0024768593712983
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933306650977817,
      "coreWealth": 1.9350705356072329
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232725781049126,
      "coreWealth": 1.9774215125449441
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.298256143427916,
      "coreWealth": 2.027597623365753
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301154488576508,
      "coreWealth": 2.0447195223805905
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308739882993394,
      "coreWealth": 2.078588639102025
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531863865621885,
      "coreWealth": 2.1332014986394636
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384090588889348,
      "coreWealth": 2.11123224018913
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582075240126215,
      "coreWealth": 2.1658953505612217
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669642967953855,
      "coreWealth": 2.117925739368108
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512621311857522,
      "coreWealth": 2.158156379691871
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501225690859188,
      "coreWealth": 2.15180887449286
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751331381546584,
      "coreWealth": 2.113830993504387
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715480702233044,
      "coreWealth": 2.119819171757986
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457170310370011,
      "coreWealth": 2.1549523633943224
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317394152677712,
      "coreWealth": 2.238861736737386
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576867560190245,
      "coreWealth": 2.243696782640049
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304951420062865,
      "coreWealth": 2.296823038927626
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817573403546616,
      "coreWealth": 2.4442931430082027
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.9623249704388237,
      "coreWealth": 2.551529089118273
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998864407857406,
      "coreWealth": 2.5501880367040157
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031544949861295,
      "coreWealth": 2.59943535747227
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508444351005488,
      "coreWealth": 2.797097173532197
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403727643346804,
      "coreWealth": 2.957216424434318
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676400403391033,
      "coreWealth": 2.7416507409038884
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509738270481455,
      "coreWealth": 2.974220937313359
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764630053523514,
      "coreWealth": 3.168149961863967
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747138470702148,
      "coreWealth": 3.099048917572981
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546195049046173,
      "coreWealth": 2.9561095825094
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642402928229998,
      "coreWealth": 3.1027111503836373
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610311052590237,
      "coreWealth": 3.087304278133512
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023999361889837,
      "coreWealth": 3.0167304219193807
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.502399936188989,
      "cagr": 0.14108004319007628,
      "annVol": 0.11149366934412973,
      "sharpe": 1.2415413117142002,
      "mdd": -0.12331712872587741,
      "calmar": 1.144042556356337
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.016730421919384,
      "cagr": 0.12328577409183072,
      "annVol": 0.10945800641592683,
      "sharpe": 1.1187172871979925,
      "mdd": -0.13555289664945447,
      "calmar": 0.9095030585045553
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.095519123739661,
      "cagr": 0.14419588760514568,
      "annVol": 0.10819059086878778,
      "sharpe": 1.3012996091216125,
      "mdd": -0.10212252185244286,
      "calmar": 1.4119890988737505
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.812405601524689,
      "cagr": 0.1143530938917865,
      "annVol": 0.1072447976370542,
      "sharpe": 1.064924419876688,
      "mdd": -0.11135942346527505,
      "calmar": 1.0268829555088794
    }
  ]
} as PdsCanonicalSummary;
