export type QuantitativeMethod = {
  id: string;
  title: string;
  category: string;
  level: string;
  href: string;
  researchContext: string;
};

export const quantitativeMethods: QuantitativeMethod[] = [
  {
    id: "QM001",
    title: "Out-of-Sample Forecast Evaluation",
    category: "Forecast Evaluation",
    level: "Foundation",
    href: "/methods/10_FORECAST_EVALUATION/QM001_OUT_OF_SAMPLE_EVALUATION/article.html",
    researchContext:
      "Explains the information boundary behind the paper's repeated pseudo-out-of-sample evaluation.",
  },
  {
    id: "QM002",
    title: "Rolling vs Expanding Windows",
    category: "Forecast Evaluation",
    level: "Foundation",
    href: "/methods/10_FORECAST_EVALUATION/QM002_ROLLING_VS_EXPANDING_WINDOWS/article.html",
    researchContext:
      "Clarifies the fixed-length rolling estimation window used in the paper and the trade-off that window choice creates.",
  },
  {
    id: "QM003",
    title: "Look-Ahead Bias and Data Leakage",
    category: "Data & Research Design",
    level: "Foundation",
    href: "/methods/80_DATA_RESEARCH_DESIGN/QM003_LOOK_AHEAD_BIAS_DATA_LEAKAGE/article.html",
    researchContext:
      "Explains how timing, data construction, and model-development choices can let future information enter a historical forecasting exercise.",
  },
  {
    id: "QM004",
    title: "Diebold–Mariano Test",
    category: "Forecast Evaluation",
    level: "Intermediate",
    href: "/methods/10_FORECAST_EVALUATION/QM004_DIEBOLD_MARIANO_TEST/article.html",
    researchContext:
      "Explains the pairwise loss-differential test used to assess whether forecast-accuracy differences are statistically distinguishable.",
  },
  {
    id: "QM005",
    title: "Model Confidence Set",
    category: "Forecast Evaluation",
    level: "Advanced",
    href: "/methods/10_FORECAST_EVALUATION/QM005_MODEL_CONFIDENCE_SET/article.html",
    researchContext:
      "Explains the set-valued comparison used when the available loss data do not sharply separate many forecasting approaches.",
  },
  {
    id: "QM006",
    title: "Block Bootstrap",
    category: "Statistical Inference",
    level: "Intermediate",
    href: "/methods/20_STATISTICAL_INFERENCE/QM006_BLOCK_BOOTSTRAP/article.html",
    researchContext:
      "Explains dependence-aware resampling for time-series inference when IID resampling would break serial structure.",
  },
];

const researchMethodIds: Record<string, string[]> = {
  "beyond-average-accuracy": ["QM001", "QM002", "QM003", "QM004", "QM005"],
};

export function getMethodsForResearch(slug: string) {
  const ids = researchMethodIds[slug] ?? [];
  const byId = new Map(quantitativeMethods.map((method) => [method.id, method]));
  return ids.flatMap((id) => {
    const method = byId.get(id);
    return method ? [method] : [];
  });
}
