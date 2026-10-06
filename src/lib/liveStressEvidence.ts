import fs from "node:fs";
import path from "node:path";

export type StressFamilyShare = {
  key: string;
  label: string;
  current: number;
  historical: number;
  gap: number;
};

export type StressDistributionMetrics = {
  median_return: number;
  q05_return: number;
  es05: number;
  q05_mdd: number;
  share_le_minus5: number;
};

export type LiveStressEvidence = {
  schema: "SLACKQUANT_STRESS_LIVE_EVIDENCE_V1";
  system: "SCENARIO_STRESS_LAB";
  sourceAuthority: string;
  canonicalVersion: string;
  dataAsOf: string;
  horizonTradingDays: number;
  scenarioCount: number;
  currentModel: string;
  historicalComparator: string;
  portfolioLabel: string;
  dominantFamily: {
    key: string;
    label: string;
    currentShare: number;
    historicalShare: number;
  };
  familyShares: StressFamilyShare[];
  distributionMetrics: {
    current: StressDistributionMetrics;
    historical: StressDistributionMetrics;
  };
  boundary: string;
};

export function getLiveStressEvidence(): LiveStressEvidence {
  const sourcePath = path.join(
    process.cwd(),
    "public",
    "data",
    "systems",
    "scenario-stress-lab",
    "live_evidence.json",
  );

  const payload = JSON.parse(
    fs.readFileSync(sourcePath, "utf8"),
  ) as LiveStressEvidence;

  if (payload.schema !== "SLACKQUANT_STRESS_LIVE_EVIDENCE_V1") {
    throw new Error("Scenario Stress Lab live evidence schema mismatch");
  }

  if (
    !Array.isArray(payload.familyShares) ||
    payload.familyShares.length !== 6
  ) {
    throw new Error("Scenario Stress Lab family-share evidence is incomplete");
  }

  return payload;
}
