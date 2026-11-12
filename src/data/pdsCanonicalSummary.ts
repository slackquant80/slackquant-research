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
  "generatedAt": "2026-11-12T12:56:05.195405+09:00",
  "systemAsOfKst": "2026-11-12T12:53:17.018717+09:00",
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
      "coreDynamicFx": 0.012334682736838909,
      "adaptiveDynamicFx": 0.012334682736838687
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897641732372287,
      "adaptiveDynamicFx": 0.010897641732372731
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233920254970627,
      "adaptiveDynamicFx": 0.07233920254970583
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830125952242016,
      "adaptiveDynamicFx": 0.05830125952242038
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.0502075642918175,
      "adaptiveDynamicFx": -0.05020756429181805
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.07408958827203982,
      "adaptiveDynamicFx": 0.07408958827204004
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.072624199470394,
      "adaptiveDynamicFx": 0.072624199470394
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646285545899409,
      "adaptiveDynamicFx": 0.010507282228683357
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625832718960265,
      "adaptiveDynamicFx": -0.03212556419014656
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129878590187007,
      "adaptiveDynamicFx": 0.02268661604308808
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810624074653162,
      "adaptiveDynamicFx": -0.008810624074653162
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFx": -0.029889700590710278,
      "adaptiveDynamicFx": -0.022109105359480075
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216020201757403,
      "coreWealth": 1.0296688484687218
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.028768204447891,
      "coreWealth": 1.0247507438217165
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372532204457732,
      "coreWealth": 1.0459295317357462
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.049706728067255,
      "coreWealth": 1.0564923079763153
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.0623823807870467,
      "coreWealth": 1.0589610796314861
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.0725889793222059,
      "coreWealth": 1.0800313426570782
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613390871049242,
      "coreWealth": 1.0897470610438593
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061922940052211,
      "coreWealth": 1.1033548644225928
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218662324366737,
      "coreWealth": 1.1627010657287713
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851458511596264,
      "coreWealth": 1.1182715613689522
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.062924162111127,
      "coreWealth": 1.1115261840718655
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765209199237702,
      "coreWealth": 1.1187186399408942
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967336657893776,
      "coreWealth": 1.1297958111903097
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307192389545486,
      "coreWealth": 1.1267499898337725
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349676160602165,
      "coreWealth": 1.1364655369441117
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642449268539912,
      "coreWealth": 1.164376010868911
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586232810680321,
      "coreWealth": 1.1606691565538747
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289959842417607,
      "coreWealth": 1.1185062300497444
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.12260075624176,
      "coreWealth": 1.1226164230608793
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055663572852625,
      "coreWealth": 1.106215412304039
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236932669680528,
      "coreWealth": 1.1283257105249835
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.1295020680985755,
      "coreWealth": 1.1313355440348734
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586807643570884,
      "coreWealth": 1.1509465099326075
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932129635506696,
      "coreWealth": 1.1706040609390007
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.161818419491559,
      "coreWealth": 1.127908855430026
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845174082492496,
      "coreWealth": 1.1664615933551437
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.206461206205751,
      "coreWealth": 1.1727836879076803
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542392025970435,
      "coreWealth": 1.2088829229354416
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408090225841097,
      "coreWealth": 1.2007762672490814
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425562446665868,
      "coreWealth": 1.2202157441767938
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606137077646293,
      "coreWealth": 1.231267317838572
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833084781130455,
      "coreWealth": 1.2648138033071301
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.3028718764006464,
      "coreWealth": 1.267519314505807
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017563835820487,
      "coreWealth": 1.2539446995901329
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752569263694233,
      "coreWealth": 1.2260181306369258
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503368299417153,
      "coreWealth": 1.300350345855413
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934417941374835,
      "coreWealth": 1.3284936281127182
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164156736949647,
      "coreWealth": 1.3620579908721109
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.492604415777214,
      "coreWealth": 1.4420998826243518
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558637070513543,
      "coreWealth": 1.5051926513760185
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922683270890915,
      "coreWealth": 1.4583264247805718
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.444608284217391,
      "coreWealth": 1.4332048323753641
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349754148529817,
      "coreWealth": 1.5404171103160977
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.5903077597169852,
      "coreWealth": 1.6221454979518775
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.6324536882346612,
      "coreWealth": 1.6302697049166102
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640314323118748,
      "coreWealth": 1.6527252377371893
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.6950225168469952,
      "coreWealth": 1.6727352596914982
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447505278084356,
      "coreWealth": 1.7375621107037447
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.780136486684917,
      "coreWealth": 1.7664320870308692
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153823849820094,
      "coreWealth": 1.7837899543961566
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460749452070806,
      "coreWealth": 1.8026124373096326
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800001914298337,
      "coreWealth": 1.8231933456447342
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241748524134407,
      "coreWealth": 1.7503556583429658
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912165812709487,
      "coreWealth": 1.8277610365265382
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.878669019835779,
      "coreWealth": 1.798164864315075
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264934480822022,
      "coreWealth": 1.8450837787101781
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720052296952523,
      "coreWealth": 1.7800091092053134
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700061493443632,
      "coreWealth": 1.7860579032164492
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.9217602335013428,
      "coreWealth": 1.8230988812379765
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227537465398288,
      "coreWealth": 1.782098363182089
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.91140848426923,
      "coreWealth": 1.7798519571523759
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931093539856927,
      "coreWealth": 1.734183485466631
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239353169709583,
      "coreWealth": 1.762196913469259
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945519388601237,
      "coreWealth": 1.7298027271364536
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459037465665105,
      "coreWealth": 1.6752126705081951
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.867361435137686,
      "coreWealth": 1.6964383530984206
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924126969925152,
      "coreWealth": 1.7316778602472878
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.843746617103496,
      "coreWealth": 1.6959486938190693
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973195596700974,
      "coreWealth": 1.7712354142549294
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.902597853707843,
      "coreWealth": 1.7161166959881287
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347557233770785,
      "coreWealth": 1.760051114388128
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832380735349227,
      "coreWealth": 1.7754116815463763
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834639874057094,
      "coreWealth": 1.7877929615766073
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.027839482198332,
      "coreWealth": 1.827255863294605
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034456770717215,
      "coreWealth": 1.8656781143707348
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.0355298556428463,
      "coreWealth": 1.8338131822316897
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044437042695997,
      "coreWealth": 1.7905722215872415
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.9929089294052402,
      "coreWealth": 1.7805223301349886
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188534492499017,
      "coreWealth": 1.8449832347232253
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994945901022515,
      "coreWealth": 1.9271262918754004
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.1144509898785597,
      "coreWealth": 1.9052118129927262
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.168559049120658,
      "coreWealth": 1.9494186634670019
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.2407278589554074,
      "coreWealth": 2.002476161653349
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.1933299108118463,
      "coreWealth": 1.9350698701368974
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232725029505537,
      "coreWealth": 1.9774208469376955
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.2982553697161694,
      "coreWealth": 2.027596940771644
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.301153614045493,
      "coreWealth": 2.044718745305146
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.3087388735261736,
      "coreWealth": 2.0785877302655136
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353185394431128,
      "coreWealth": 2.133200599256618
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.38408961765217,
      "coreWealth": 2.1112313801097113
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458206646540924,
      "coreWealth": 2.1658945774320815
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.466963246624075,
      "coreWealth": 2.117924837780333
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126201174018754,
      "coreWealth": 2.158155353742574
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501224307733714,
      "coreWealth": 2.1518076845875793
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.4751317285734733,
      "coreWealth": 2.1138297896837357
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.471546722313811,
      "coreWealth": 2.119818015671075
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.45716892635767,
      "coreWealth": 2.1549511496076184
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317380202873725,
      "coreWealth": 2.2388605031316677
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.57686613109693,
      "coreWealth": 2.2436955383184136
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.630493691653321,
      "coreWealth": 2.2968217725485176
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.8175717659214383,
      "coreWealth": 2.444291722340343
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962323293837962,
      "coreWealth": 2.551527645017477
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.998862611831401,
      "coreWealth": 2.5501865093912124
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.031543142179746,
      "coreWealth": 2.5994338074535905
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.2508425555800593,
      "coreWealth": 2.797095556351946
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.44037077107946,
      "coreWealth": 2.957214711106303
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.267638134402798,
      "coreWealth": 2.7416491417645763
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097360984027177,
      "coreWealth": 2.9742190966513125
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764627872901559,
      "coreWealth": 3.1681481267467775
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.7471363368300064,
      "coreWealth": 3.09904715276654
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.5461930304560227,
      "coreWealth": 2.9561078998118733
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642400816829662,
      "coreWealth": 3.102709351827725
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.610308992503366,
      "coreWealth": 3.087302516480603
    },
    {
      "holdingMonth": "2026-10",
      "coreDynamicFxWealth": 3.5023979376774914,
      "coreWealth": 3.0167287005367616
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.50239793767747,
      "cagr": 0.14107997463445598,
      "annVol": 0.11149366234571916,
      "sharpe": 1.2415408428478167,
      "mdd": -0.12331723971604991,
      "calmar": 1.1440409707459114
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 2.0167287005367664,
      "cagr": 0.12328570660528437,
      "annVol": 0.1094579941878346,
      "sharpe": 1.1187168499466358,
      "mdd": -0.1355530628446837,
      "calmar": 0.9095014455449433
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 1.0955180754322402,
      "cagr": 0.1441957833837706,
      "annVol": 0.10819058843594052,
      "sharpe": 1.3012987919156989,
      "mdd": -0.10212251369956216,
      "calmar": 1.4119881910465433
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-10-30",
      "cumulativeReturn": 0.8124046948480346,
      "cagr": 0.11435299238870056,
      "annVol": 0.10724480143398361,
      "sharpe": 1.0649235344302614,
      "mdd": -0.11135943868121223,
      "calmar": 1.0268819037069499
    }
  ]
} as PdsCanonicalSummary;
