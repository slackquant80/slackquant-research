import fs from "node:fs";
import path from "node:path";

export type LiveEvidencePoint = {
  date: string;
  primary: number;
  benchmark?: number;
};

export type LiveEvidenceMonthlyRow = {
  month: string;
  primary: number;
  benchmark?: number;
};

export type LiveEvidenceMetrics = {
  cumulativeReturn: number;
  cagr: number;
  annVol: number;
  sharpe: number;
  mdd: number;
  calmar: number;
};

export type LiveSystemEvidence = {
  schema: "SLACKQUANT_LIVE_EVIDENCE_V1";
  system: string;
  sourceAuthority: string;
  completedThrough: string;
  supportStart: string;
  supportEnd: string;
  primaryLabel: string;
  benchmarkLabel?: string;
  referenceLabel?: string;
  path: LiveEvidencePoint[];
  recentMonthly: LiveEvidenceMonthlyRow[];
  metrics: {
    primary: LiveEvidenceMetrics;
    benchmark?: LiveEvidenceMetrics;
    reference?: LiveEvidenceMetrics;
  };
  boundary: string;
};

export function getLiveSystemEvidence(system: "adaa" | "f2r"): LiveSystemEvidence {
  const sourcePath = path.join(process.cwd(), "public", "data", "systems", system, "live_evidence.json");
  const payload = JSON.parse(fs.readFileSync(sourcePath, "utf8")) as LiveSystemEvidence;
  if (payload.schema !== "SLACKQUANT_LIVE_EVIDENCE_V1") {
    throw new Error(`${system.toUpperCase()} live evidence schema mismatch`);
  }
  if (!Array.isArray(payload.path) || payload.path.length < 2) {
    throw new Error(`${system.toUpperCase()} live evidence path is unavailable`);
  }
  return payload;
}
