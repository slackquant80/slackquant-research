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
  "generatedAt": "2026-10-03T23:20:25.487476+09:00",
  "systemAsOfKst": "2026-10-03T23:18:12.672298+09:00",
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
  "previewFxZscore": -0.04429125009410503,
  "recentMonthlyReturns": [
    {
      "holdingMonth": "2025-10",
      "coreDynamicFx": 0.05137456949676311,
      "adaptiveDynamicFx": 0.05056187742579876
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFx": 0.012334697999394795,
      "adaptiveDynamicFx": 0.011664373653155424
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFx": 0.010897624240306047,
      "adaptiveDynamicFx": 0.011720340480802394
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFx": 0.07233918998135747,
      "adaptiveDynamicFx": 0.0713180987456854
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFx": 0.05830126117661005,
      "adaptiveDynamicFx": 0.05355638437720267
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFx": -0.05020755290302881,
      "adaptiveDynamicFx": -0.05253881228955981
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFx": 0.0740896033778089,
      "adaptiveDynamicFx": 0.08283399558571247
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFx": 0.07262417047143144,
      "adaptiveDynamicFx": 0.07552315377152397
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFx": -0.004646288261653142,
      "adaptiveDynamicFx": 0.009813938363848473
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFx": -0.053625835646062936,
      "adaptiveDynamicFx": -0.03447952332636839
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFx": 0.027129898267317154,
      "adaptiveDynamicFx": 0.02998425532639737
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFx": -0.008810631844592742,
      "adaptiveDynamicFx": -0.008144831435128341
    }
  ],
  "cumulativePath": [
    {
      "holdingMonth": "2017-05",
      "coreDynamicFxWealth": 1.0216018918543974,
      "coreWealth": 1.029668719134121
    },
    {
      "holdingMonth": "2017-06",
      "coreDynamicFxWealth": 1.0287682565815346,
      "coreWealth": 1.0247507957517727
    },
    {
      "holdingMonth": "2017-07",
      "coreDynamicFxWealth": 1.0372530825927324,
      "coreWealth": 1.0459293927296072
    },
    {
      "holdingMonth": "2017-08",
      "coreDynamicFxWealth": 1.0497066155429493,
      "coreWealth": 1.0564921947246244
    },
    {
      "holdingMonth": "2017-09",
      "coreDynamicFxWealth": 1.062382213502209,
      "coreWealth": 1.0589609128853754
    },
    {
      "holdingMonth": "2017-10",
      "coreDynamicFxWealth": 1.072588947577031,
      "coreWealth": 1.0800313106916353
    },
    {
      "holdingMonth": "2017-11",
      "coreDynamicFxWealth": 1.0613389021776738,
      "coreWealth": 1.0897468711668177
    },
    {
      "holdingMonth": "2017-12",
      "coreDynamicFxWealth": 1.061922818824643,
      "coreWealth": 1.103354738465219
    },
    {
      "holdingMonth": "2018-01",
      "coreDynamicFxWealth": 1.1218661749755323,
      "coreWealth": 1.1627010061761023
    },
    {
      "holdingMonth": "2018-02",
      "coreDynamicFxWealth": 1.0851456765186451,
      "coreWealth": 1.1182713813967933
    },
    {
      "holdingMonth": "2018-03",
      "coreDynamicFxWealth": 1.0629240633863797,
      "coreWealth": 1.1115260808329483
    },
    {
      "holdingMonth": "2018-04",
      "coreDynamicFxWealth": 1.0765207719576333,
      "coreWealth": 1.118718486174747
    },
    {
      "holdingMonth": "2018-05",
      "coreDynamicFxWealth": 1.0967338846869,
      "coreWealth": 1.1297960366867212
    },
    {
      "holdingMonth": "2018-06",
      "coreDynamicFxWealth": 1.1307190233679507,
      "coreWealth": 1.1267497750039668
    },
    {
      "holdingMonth": "2018-07",
      "coreDynamicFxWealth": 1.1349673024692621,
      "coreWealth": 1.1364652229392849
    },
    {
      "holdingMonth": "2018-08",
      "coreDynamicFxWealth": 1.1642448003408676,
      "coreWealth": 1.164375884341546
    },
    {
      "holdingMonth": "2018-09",
      "coreDynamicFxWealth": 1.1586230306702001,
      "coreWealth": 1.1606689057138981
    },
    {
      "holdingMonth": "2018-10",
      "coreDynamicFxWealth": 1.1289956002983061,
      "coreWealth": 1.1185058496735978
    },
    {
      "holdingMonth": "2018-11",
      "coreDynamicFxWealth": 1.122600744040946,
      "coreWealth": 1.1226164108598986
    },
    {
      "holdingMonth": "2018-12",
      "coreDynamicFxWealth": 1.1055658294081456,
      "coreWealth": 1.1062148841170207
    },
    {
      "holdingMonth": "2019-01",
      "coreDynamicFxWealth": 1.1236933171487227,
      "coreWealth": 1.1283257609125288
    },
    {
      "holdingMonth": "2019-02",
      "coreDynamicFxWealth": 1.129501926136411,
      "coreWealth": 1.1313354018422725
    },
    {
      "holdingMonth": "2019-03",
      "coreDynamicFxWealth": 1.1586804603533685,
      "coreWealth": 1.1509462079581323
    },
    {
      "holdingMonth": "2019-04",
      "coreDynamicFxWealth": 1.1932128294320652,
      "coreWealth": 1.1706039293616677
    },
    {
      "holdingMonth": "2019-05",
      "coreDynamicFxWealth": 1.1618181958875957,
      "coreWealth": 1.1279086383523125
    },
    {
      "holdingMonth": "2019-06",
      "coreDynamicFxWealth": 1.1845172884224735,
      "coreWealth": 1.166461475354912
    },
    {
      "holdingMonth": "2019-07",
      "coreDynamicFxWealth": 1.2064610648104683,
      "coreWealth": 1.1727835504593522
    },
    {
      "holdingMonth": "2019-08",
      "coreDynamicFxWealth": 1.2542392007191796,
      "coreWealth": 1.2088829211254901
    },
    {
      "holdingMonth": "2019-09",
      "coreDynamicFxWealth": 1.2408092507878605,
      "coreWealth": 1.2007764880902003
    },
    {
      "holdingMonth": "2019-10",
      "coreDynamicFxWealth": 1.2425561578710893,
      "coreWealth": 1.2202156589418385
    },
    {
      "holdingMonth": "2019-11",
      "coreDynamicFxWealth": 1.2606137370179769,
      "coreWealth": 1.2312673464109238
    },
    {
      "holdingMonth": "2019-12",
      "coreDynamicFxWealth": 1.2833084167785502,
      "coreWealth": 1.2648137428565762
    },
    {
      "holdingMonth": "2020-01",
      "coreDynamicFxWealth": 1.302871880877413,
      "coreWealth": 1.2675193188611062
    },
    {
      "holdingMonth": "2020-02",
      "coreDynamicFxWealth": 1.3017563924863405,
      "coreWealth": 1.2539447081673893
    },
    {
      "holdingMonth": "2020-03",
      "coreDynamicFxWealth": 1.2752569889678047,
      "coreWealth": 1.2260181908183343
    },
    {
      "holdingMonth": "2020-04",
      "coreDynamicFxWealth": 1.3503370256559717,
      "coreWealth": 1.300350534324766
    },
    {
      "holdingMonth": "2020-05",
      "coreDynamicFxWealth": 1.3934419260792001,
      "coreWealth": 1.3284937539046524
    },
    {
      "holdingMonth": "2020-06",
      "coreDynamicFxWealth": 1.4164157961909356,
      "coreWealth": 1.3620581086670682
    },
    {
      "holdingMonth": "2020-07",
      "coreDynamicFxWealth": 1.4926044792282813,
      "coreWealth": 1.4420999439284619
    },
    {
      "holdingMonth": "2020-08",
      "coreDynamicFxWealth": 1.5558635763597604,
      "coreWealth": 1.5051925249407678
    },
    {
      "holdingMonth": "2020-09",
      "coreDynamicFxWealth": 1.4922683307499303,
      "coreWealth": 1.4583264283581492
    },
    {
      "holdingMonth": "2020-10",
      "coreDynamicFxWealth": 1.4446082401038327,
      "coreWealth": 1.433204788610035
    },
    {
      "holdingMonth": "2020-11",
      "coreDynamicFxWealth": 1.5349753838380573,
      "coreWealth": 1.5404170791912255
    },
    {
      "holdingMonth": "2020-12",
      "coreDynamicFxWealth": 1.590307755156819,
      "coreWealth": 1.6221454933004231
    },
    {
      "holdingMonth": "2021-01",
      "coreDynamicFxWealth": 1.632453632334172,
      "coreWealth": 1.6302696490909148
    },
    {
      "holdingMonth": "2021-02",
      "coreDynamicFxWealth": 1.6640315093368234,
      "coreWealth": 1.6527253142388019
    },
    {
      "holdingMonth": "2021-03",
      "coreDynamicFxWealth": 1.695022585793083,
      "coreWealth": 1.672735327731046
    },
    {
      "holdingMonth": "2021-04",
      "coreDynamicFxWealth": 1.7447505597683237,
      "coreWealth": 1.737562142531965
    },
    {
      "holdingMonth": "2021-05",
      "coreDynamicFxWealth": 1.7801363646332853,
      "coreWealth": 1.7664319659188616
    },
    {
      "holdingMonth": "2021-06",
      "coreDynamicFxWealth": 1.8153823098012136,
      "coreWealth": 1.7837898805237113
    },
    {
      "holdingMonth": "2021-07",
      "coreDynamicFxWealth": 1.8460749703457733,
      "coreWealth": 1.8026124618564872
    },
    {
      "holdingMonth": "2021-08",
      "coreDynamicFxWealth": 1.8800001647911162,
      "coreWealth": 1.8231933198109511
    },
    {
      "holdingMonth": "2021-09",
      "coreDynamicFxWealth": 1.8241750195260067,
      "coreWealth": 1.7503558186929684
    },
    {
      "holdingMonth": "2021-10",
      "coreDynamicFxWealth": 1.8912165206945064,
      "coreWealth": 1.8277609779826136
    },
    {
      "holdingMonth": "2021-11",
      "coreDynamicFxWealth": 1.8786688842181154,
      "coreWealth": 1.7981647345088698
    },
    {
      "holdingMonth": "2021-12",
      "coreDynamicFxWealth": 1.9264931798819227,
      "coreWealth": 1.8450835218435035
    },
    {
      "holdingMonth": "2022-01",
      "coreDynamicFxWealth": 1.8720050279938183,
      "coreWealth": 1.78000891741612
    },
    {
      "holdingMonth": "2022-02",
      "coreDynamicFxWealth": 1.8700062525453178,
      "coreWealth": 1.786058001784522
    },
    {
      "holdingMonth": "2022-03",
      "coreDynamicFxWealth": 1.921760006724325,
      "coreWealth": 1.823098666103486
    },
    {
      "holdingMonth": "2022-04",
      "coreDynamicFxWealth": 1.9227539360916033,
      "coreWealth": 1.7820985388675739
    },
    {
      "holdingMonth": "2022-05",
      "coreDynamicFxWealth": 1.911408385916321,
      "coreWealth": 1.7798518655688116
    },
    {
      "holdingMonth": "2022-06",
      "coreDynamicFxWealth": 1.8931092414797113,
      "coreWealth": 1.7341833824054962
    },
    {
      "holdingMonth": "2022-07",
      "coreDynamicFxWealth": 1.9239354827219501,
      "coreWealth": 1.762197065286164
    },
    {
      "holdingMonth": "2022-08",
      "coreDynamicFxWealth": 1.8945517814184791,
      "coreWealth": 1.7298025833858595
    },
    {
      "holdingMonth": "2022-09",
      "coreDynamicFxWealth": 1.8459041539823142,
      "coreWealth": 1.6752130402501895
    },
    {
      "holdingMonth": "2022-10",
      "coreDynamicFxWealth": 1.8673617394821824,
      "coreWealth": 1.6964386295857048
    },
    {
      "holdingMonth": "2022-11",
      "coreDynamicFxWealth": 1.8924129633151217,
      "coreWealth": 1.7316781039494025
    },
    {
      "holdingMonth": "2022-12",
      "coreDynamicFxWealth": 1.8437466808907308,
      "coreWealth": 1.695948752493016
    },
    {
      "holdingMonth": "2023-01",
      "coreDynamicFxWealth": 1.8973198924117345,
      "coreWealth": 1.7712357248846162
    },
    {
      "holdingMonth": "2023-02",
      "coreDynamicFxWealth": 1.9025980229414048,
      "coreWealth": 1.7161168486344442
    },
    {
      "holdingMonth": "2023-03",
      "coreDynamicFxWealth": 1.9347558873202617,
      "coreWealth": 1.7600512635275716
    },
    {
      "holdingMonth": "2023-04",
      "coreDynamicFxWealth": 1.9832385617732184,
      "coreWealth": 1.7754121186214804
    },
    {
      "holdingMonth": "2023-05",
      "coreDynamicFxWealth": 1.9834643658206397,
      "coreWealth": 1.7877933026604718
    },
    {
      "holdingMonth": "2023-06",
      "coreDynamicFxWealth": 2.0278398598316834,
      "coreWealth": 1.8272562035743842
    },
    {
      "holdingMonth": "2023-07",
      "coreDynamicFxWealth": 2.034457159419338,
      "coreWealth": 1.8656784708261134
    },
    {
      "holdingMonth": "2023-08",
      "coreDynamicFxWealth": 2.035530607441184,
      "coreWealth": 1.8338138595284215
    },
    {
      "holdingMonth": "2023-09",
      "coreDynamicFxWealth": 2.0044442769513497,
      "coreWealth": 1.790572733164617
    },
    {
      "holdingMonth": "2023-10",
      "coreDynamicFxWealth": 1.992909479170933,
      "coreWealth": 1.780522821311525
    },
    {
      "holdingMonth": "2023-11",
      "coreDynamicFxWealth": 2.0188538422107487,
      "coreWealth": 1.844983593841015
    },
    {
      "holdingMonth": "2023-12",
      "coreDynamicFxWealth": 2.0994949912182865,
      "coreWealth": 1.9271266600598544
    },
    {
      "holdingMonth": "2024-01",
      "coreDynamicFxWealth": 2.114451225098175,
      "coreWealth": 1.905212024935782
    },
    {
      "holdingMonth": "2024-02",
      "coreDynamicFxWealth": 2.1685594578609946,
      "coreWealth": 1.9494190309027204
    },
    {
      "holdingMonth": "2024-03",
      "coreDynamicFxWealth": 2.240728181467034,
      "coreWealth": 2.0024764498730265
    },
    {
      "holdingMonth": "2024-04",
      "coreDynamicFxWealth": 2.193330183332248,
      "coreWealth": 1.9350701105685955
    },
    {
      "holdingMonth": "2024-05",
      "coreDynamicFxWealth": 2.232725628310625,
      "coreWealth": 1.9774213772715536
    },
    {
      "holdingMonth": "2024-06",
      "coreDynamicFxWealth": 2.29825611520449,
      "coreWealth": 2.027597598466116
    },
    {
      "holdingMonth": "2024-07",
      "coreDynamicFxWealth": 2.3011544311831957,
      "coreWealth": 2.0447194713830488
    },
    {
      "holdingMonth": "2024-08",
      "coreDynamicFxWealth": 2.308739724226604,
      "coreWealth": 2.078588496162215
    },
    {
      "holdingMonth": "2024-09",
      "coreDynamicFxWealth": 2.353186213264189,
      "coreWealth": 2.1332013415420286
    },
    {
      "holdingMonth": "2024-10",
      "coreDynamicFxWealth": 2.384090395285034,
      "coreWealth": 2.1112320687427633
    },
    {
      "holdingMonth": "2024-11",
      "coreDynamicFxWealth": 2.458207604005933,
      "coreWealth": 2.1658954210423116
    },
    {
      "holdingMonth": "2024-12",
      "coreDynamicFxWealth": 2.4669642817902573,
      "coreWealth": 2.117925726485985
    },
    {
      "holdingMonth": "2025-01",
      "coreDynamicFxWealth": 2.5126211435228387,
      "coreWealth": 2.1581562351048005
    },
    {
      "holdingMonth": "2025-02",
      "coreDynamicFxWealth": 2.501225578507414,
      "coreWealth": 2.1518087778364365
    },
    {
      "holdingMonth": "2025-03",
      "coreDynamicFxWealth": 2.475132941324542,
      "coreWealth": 2.113830825406122
    },
    {
      "holdingMonth": "2025-04",
      "coreDynamicFxWealth": 2.4715479164258434,
      "coreWealth": 2.1198190398476293
    },
    {
      "holdingMonth": "2025-05",
      "coreDynamicFxWealth": 2.457170200397042,
      "coreWealth": 2.1549522669474093
    },
    {
      "holdingMonth": "2025-06",
      "coreDynamicFxWealth": 2.5317393137191884,
      "coreWealth": 2.2388616469361953
    },
    {
      "holdingMonth": "2025-07",
      "coreDynamicFxWealth": 2.5768673137370866,
      "coreWealth": 2.2436965680515515
    },
    {
      "holdingMonth": "2025-08",
      "coreDynamicFxWealth": 2.6304948709588984,
      "coreWealth": 2.296822802261965
    },
    {
      "holdingMonth": "2025-09",
      "coreDynamicFxWealth": 2.817573226392235,
      "coreWealth": 2.4442929893237526
    },
    {
      "holdingMonth": "2025-10",
      "coreDynamicFxWealth": 2.962324837923742,
      "coreWealth": 2.551528974979526
    },
    {
      "holdingMonth": "2025-11",
      "coreDynamicFxWealth": 2.9988642201756375,
      "coreWealth": 2.550187877102345
    },
    {
      "holdingMonth": "2025-12",
      "coreDynamicFxWealth": 3.03154471559481,
      "coreWealth": 2.5994351565976137
    },
    {
      "holdingMonth": "2026-01",
      "coreDynamicFxWealth": 3.250844204713203,
      "coreWealth": 2.7970969753019306
    },
    {
      "holdingMonth": "2026-02",
      "coreDynamicFxWealth": 3.440372521736657,
      "coreWealth": 2.9572162159060933
    },
    {
      "holdingMonth": "2026-03",
      "coreDynamicFxWealth": 3.2676398363454373,
      "coreWealth": 2.7416505697469225
    },
    {
      "holdingMonth": "2026-04",
      "coreDynamicFxWealth": 3.5097379758017992,
      "coreWealth": 2.9742206875960573
    },
    {
      "holdingMonth": "2026-05",
      "coreDynamicFxWealth": 3.764629784866486,
      "coreWealth": 3.168149735773832
    },
    {
      "holdingMonth": "2026-06",
      "coreDynamicFxWealth": 3.747138229687591,
      "coreWealth": 3.0990487182433153
    },
    {
      "holdingMonth": "2026-07",
      "coreDynamicFxWealth": 3.546194810839285,
      "coreWealth": 2.9561093839400576
    },
    {
      "holdingMonth": "2026-08",
      "coreDynamicFxWealth": 3.642402715293443,
      "coreWealth": 3.1027109689977284
    },
    {
      "holdingMonth": "2026-09",
      "coreDynamicFxWealth": 3.6103108459392472,
      "coreWealth": 3.0873041014189826
    }
  ],
  "performance": [
    {
      "label": "PDS Core + Dynamic FX",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.610310845939234,
      "cagr": 0.14608230692777524,
      "annVol": 0.11164411194010028,
      "sharpe": 1.2799632061475026,
      "mdd": -0.1233172286752019,
      "calmar": 1.1846058210773853
    },
    {
      "label": "PDS Core",
      "supportStart": "2017-05-01",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 2.0873041014189844,
      "cagr": 0.12719057277654344,
      "annVol": 0.10964344861881717,
      "sharpe": 1.1493353211943684,
      "mdd": -0.1355528470344396,
      "calmar": 0.9383098589159727
    },
    {
      "label": "PDS Adaptive + Dynamic FX",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 1.2341272108520167,
      "cagr": 0.16019287009297556,
      "annVol": 0.1169498436725727,
      "sharpe": 1.3324608155345794,
      "mdd": -0.11040266418877709,
      "calmar": 1.4509873585936512
    },
    {
      "label": "PDS Adaptive",
      "supportStart": "2021-05-03",
      "supportEnd": "2026-09-30",
      "cumulativeReturn": 0.9183847463317882,
      "cagr": 0.12797303885361,
      "annVol": 0.11668645824760308,
      "sharpe": 1.09312364788534,
      "mdd": -0.11953263017980298,
      "calmar": 1.0706117539713702
    }
  ]
} as PdsCanonicalSummary;
