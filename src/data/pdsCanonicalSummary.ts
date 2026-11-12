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
  "generatedAt": "2026-11-12T13:31:19.729546+09:00",
  "systemAsOfKst": "2026-11-12T13:28:20.705304+09:00",
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
      "coreDynamicFx": 0.012334699131591798,
      "adaptiveDynamicFx": 0.012334699131591353
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897626545368855,
      "adaptiveDynamicFx": 0.010897626545369965
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920258264837,
      "adaptiveDynamicFx": 0.07233920258264881
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830124336915765,
      "adaptiveDynamicFx": 0.05830124336915765
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.050207558426821675,
      "adaptiveDynamicFx": -0.050207558426821786
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408957327348187,
      "adaptiveDynamicFx": 0.07408957327348231
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262418778830804,
      "adaptiveDynamicFx": 0.07262418778830804
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646290899053218,
      "adaptiveDynamicFx": 0.010507316591755966
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625828671793774,
      "adaptiveDynamicFx": -0.03212555947531259
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.02712988184353393,
      "adaptiveDynamicFx": 0.022686657022256584
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810621619945946,
      "adaptiveDynamicFx": -0.008810621619945946
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590710166,
      "adaptiveDynamicFx": -0.02210910535947963
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.021601903416788,
      "coreWealth": 1.0296687307878118
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.028768085861517,
      "coreWealth": 1.0247506256984376
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532407683488,
      "coreWealth": 1.045929552228316
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497065609706633,
      "coreWealth": 1.0564921397995695
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623822739556728,
      "coreWealth": 1.0589609731441543
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.072588950208243,
      "coreWealth": 1.0800313133411035
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613391592883605,
      "coreWealth": 1.0897471351593688
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.0619229668959458,
      "coreWealth": 1.103354892313661
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.121866351769014,
      "coreWealth": 1.1627011894046921
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851460407060363,
      "coreWealth": 1.1182717567015514
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.06292415328186,
      "coreWealth": 1.111526174838882
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765210260810785,
      "coreWealth": 1.1187187502593827
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.096734081663123,
      "coreWealth": 1.1297962396009908
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307193583974369,
      "coreWealth": 1.1267501088573721
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349676044601589,
      "coreWealth": 1.1364655253287455
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642447604816384,
      "coreWealth": 1.164375844477826
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586233569623914,
      "coreWealth": 1.1606692325822474
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289960855836068,
      "coreWealth": 1.1185063304500011
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122600828975631,
      "coreWealth": 1.1226164957957665
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.105566475091672,
      "coreWealth": 1.1062155301796117
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236933660246717,
      "coreWealth": 1.1283258099899662
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295022134418016,
      "coreWealth": 1.131335689614031
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586809379384344,
      "coreWealth": 1.1509466823552894
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932132825497117,
      "coreWealth": 1.1706043738936736
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618184994285778,
      "coreWealth": 1.127908933033952
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845176154200086,
      "coreWealth": 1.16646179736796
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.206461357272302,
      "coreWealth": 1.1727838347573143
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.254239521226677,
      "coreWealth": 1.2088832300426673
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408092411422735,
      "coreWealth": 1.2007764787558086
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425563025744206,
      "coreWealth": 1.220215801043476
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606139306212871,
      "coreWealth": 1.231267535507251
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.283308667599768,
      "coreWealth": 1.2648139900630255
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028720633451971,
      "coreWealth": 1.2675194963777443
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017564433206679,
      "coreWealth": 1.2539447571346398
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752572967774471,
      "coreWealth": 1.2260184867431696
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.350337194234013,
      "coreWealth": 1.3003506966624165
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934420934943446,
      "coreWealth": 1.3284939135165916
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164159768968552,
      "coreWealth": 1.362058282438046
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926047293455862,
      "coreWealth": 1.4421001855826654
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558639391687346,
      "coreWealth": 1.5051928759338484
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922684694230628,
      "coreWealth": 1.4583265638771348
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446084976632496,
      "coreWealth": 1.4332050441363267
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.534975523373333,
      "coreWealth": 1.5404172192211705
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903080808129686,
      "coreWealth": 1.62214582547616
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324540597543453,
      "coreWealth": 1.6302700759392594
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640318106246494,
      "coreWealth": 1.6527256134795387
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.695022873429751,
      "coreWealth": 1.6727356115856793
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447508337229867,
      "coreWealth": 1.737562415357926
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801367526697327,
      "coreWealth": 1.766432350968005
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153826417993213,
      "coreWealth": 1.783790206744178
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460753379697883,
      "coreWealth": 1.8026128208254557
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.880000473527336,
      "coreWealth": 1.8231936192182716
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.824175146889118,
      "coreWealth": 1.750355940902054
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912169859292067,
      "coreWealth": 1.8277614276074021
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786693216163326,
      "coreWealth": 1.7981651531638299
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.926493820370657,
      "coreWealth": 1.845084135266495
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720056578690476,
      "coreWealth": 1.7800095163373344
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700068833483665,
      "coreWealth": 1.786058604269583
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217605757854204,
      "coreWealth": 1.823099205949524
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227544056952244,
      "coreWealth": 1.7820989741182394
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.9114088604996022,
      "coreWealth": 1.7798523074879469
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.893109996348892,
      "coreWealth": 1.7341840739036751
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239357499036316,
      "coreWealth": 1.7621973100068336
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945524270455287,
      "coreWealth": 1.7298031728695324
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459041394947657,
      "coreWealth": 1.6752130271023102
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673619332858664,
      "coreWealth": 1.6964388056501793
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.892413608108306,
      "coreWealth": 1.7316786939761397
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.843747106069341,
      "coreWealth": 1.695949143588577
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.897320149662448,
      "coreWealth": 1.7712359650400415
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025981374626315,
      "coreWealth": 1.7161169519309973
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347559518118491,
      "coreWealth": 1.7600513221957033
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832388625260042,
      "coreWealth": 1.7754123878579517
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834647061797983,
      "coreWealth": 1.787793609442811
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027840668530244,
      "coreWealth": 1.8272569322805832
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.0344577322822537,
      "coreWealth": 1.8656789961642948
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355309888361153,
      "coreWealth": 1.8338142031279345
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.004444775781546,
      "coreWealth": 1.7905731787703008
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929100427285122,
      "coreWealth": 1.7805233248101315
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.018854422712078,
      "coreWealth": 1.8449841243476923
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.099495447792608,
      "coreWealth": 1.9271270791494803
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144519227635055,
      "coreWealth": 1.905212653562435
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168559986258808,
      "coreWealth": 1.9494195059041182
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240728804379158,
      "coreWealth": 2.0024770065522737
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193330806347786,
      "coreWealth": 1.935070660225356
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.2327261892578654,
      "coreWealth": 1.9774218740764768
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.298255956002126,
      "coreWealth": 2.027597458012531
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301154261377735,
      "coreWealth": 2.0447193205002967
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087397623690156,
      "coreWealth": 2.0785885305023326
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.3531861375106855,
      "coreWealth": 2.1332012728702607
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.38409030653952,
      "coreWealth": 2.111231990154152
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.4582073265767397,
      "coreWealth": 2.1658951766029895
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669639254715485,
      "coreWealth": 2.1179254205810487
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.512621058362203,
      "coreWealth": 2.158156161958099
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.5012253126740314,
      "coreWealth": 2.1518085491395134
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475132726600049,
      "coreWealth": 2.113830642025571
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471547631874871,
      "coreWealth": 2.1198187957914407
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.4571697781471573,
      "coreWealth": 2.1549518966318573
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.531738910514849,
      "coreWealth": 2.238861290375502
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.576866954334014,
      "coreWealth": 2.2436962551167605
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630494469576598,
      "coreWealth": 2.296822451794067
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175728545908085,
      "coreWealth": 2.444292666779657
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962324452905295,
      "coreWealth": 2.551528643352927
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998863833762039,
      "coreWealth": 2.550187548502183
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031544331882791,
      "coreWealth": 2.599434827579045
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508438314451396,
      "coreWealth": 2.7970966541339815
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.4403720688173474,
      "coreWealth": 2.957215826593507
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267639387162195,
      "coreWealth": 2.7416501928683354
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.509737394968664,
      "coreWealth": 2.974220195386688
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764629222628515,
      "coreWealth": 3.1681492626186567
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471376601331063,
      "coreWealth": 3.0990482471966203
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461942979611822,
      "coreWealth": 2.9561089564046745
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.6424021302590828,
      "coreWealth": 3.102710470647421
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610310303301685,
      "coreWealth": 3.087303637390472
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023992092964416,
      "coreWealth": 3.0167297958233283
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.5023992092964527,
      "cagr": 0.14108001825523853,
      "annVol": 0.11149363908447267,
      "sharpe": 1.2415414220019556,
      "mdd": -0.12331708433779665,
      "calmar": 1.1440427659543484
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.016729795823321,
      "cagr": 0.12328574954583282,
      "annVol": 0.10945797455921744,
      "sharpe": 1.1187173807222641,
      "mdd": -0.135552833871303,
      "calmar": 0.9095032986391355
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.095518629805155,
      "cagr": 0.144195838498818,
      "annVol": 0.10819057096769569,
      "sharpe": 1.3012994311448074,
      "mdd": -0.10212254678301713,
      "calmar": 1.4119882733163254
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124051743228156,
      "cagr": 0.11435304606624297,
      "annVol": 0.10724477305942229,
      "sharpe": 1.0649242384353033,
      "mdd": -0.11135944575131462,
      "calmar": 1.0268823205317812
    }
  ]
} as PdsCanonicalSummary;
