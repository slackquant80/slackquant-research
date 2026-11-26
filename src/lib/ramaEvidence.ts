import fs from "node:fs";
import path from "node:path";
import type { LiveEvidenceMetrics, LiveEvidenceMonthlyRow, LiveEvidencePoint } from "@/lib/liveSystemEvidence";

type Policy = {
  wealth: number;
  rows: [string, string, string, number, Record<string, number>, number, string][];
  daily: [string, number, number][];
  dailyMetrics: { cagrPct: number; volPct: number; sharpe: number; mddPct: number; calmar: number; observations: number };
};
type Snapshot = {
  schema: string;
  through: string;
  signal: string;
  execution: string;
  dailyReady: boolean;
  costPolicy: string;
  policies: Record<"GMV" | "EW" | "STATIC60_40", Policy>;
};
function need(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error("RAMA public evidence: " + message);
}
function metrics(p: Policy): LiveEvidenceMetrics {
  const m = p.dailyMetrics;
  const v = [p.wealth, m.cagrPct, m.volPct, m.sharpe, m.mddPct, m.calmar];
  need(v.every(Number.isFinite) && p.wealth > 0 && m.mddPct <= 0, "invalid metrics");
  return { cumulativeReturn: p.wealth - 1, cagr: m.cagrPct / 100, annVol: m.volPct / 100,
    sharpe: m.sharpe, mdd: m.mddPct / 100, calmar: m.calmar };
}
// The accepted dashboard is the single source of truth. No second mutable
// evidence snapshot, price fetch, signal evaluation or performance simulation.
export function getRamaEvidence() {
  const html = fs.readFileSync(path.join(process.cwd(), "public/assets/systems/rama/index.html"), "utf8");
  const marker = "<script>const D=";
  const suffix = ",K=['GMV','EW','STATIC60_40']";
  const parts = html.split(marker);
  need(parts.length === 2 && parts[1].includes(suffix), "embedded state boundary");
  const d = JSON.parse(parts[1].split(suffix)[0]) as Snapshot;
  need(d.schema === "RAMA_PUBLIC_WORKSPACE_V1" && d.dailyReady === true &&
    d.costPolicy === "SLACKQUANT_LIVE_BILATERAL_10BP_PER_SIDE_V1", "schema / cost");
  need(d.signal < d.execution && d.execution <= d.through, "decision clock");
  const primary = d.policies.GMV, benchmark = d.policies.EW, reference = d.policies.STATIC60_40;
  for (const p of [primary, benchmark, reference]) {
    need(p.daily.length === primary.daily.length && p.rows.length === primary.rows.length &&
      p.rows.length >= 215, "common support");
    need(p.daily[0][0] === primary.rows[0][1] && p.daily[p.daily.length - 1][0] === d.execution &&
      p.rows[p.rows.length - 1][2] === d.execution &&
      Math.abs(p.daily[p.daily.length - 1][1] - p.wealth) < 1e-8, "completed boundary");
    need(p.daily.every((r, i) => r[0] === primary.daily[i][0] && Number.isFinite(r[1]) && r[1] > 0) &&
      p.rows.every((r, i) => r[0] === primary.rows[i][0] && r[1] === primary.rows[i][1] &&
        r[2] === primary.rows[i][2] && Number.isFinite(r[3])), "path / row parity");
  }
  // Show month-end observations from the completed daily wealth path, including
  // the actual first/last execution closes. Daily risk metrics remain source-owned.
  const points: LiveEvidencePoint[] = primary.daily.flatMap((r, i) =>
    i === 0 || i === primary.daily.length - 1 || r[0].slice(0, 7) !== primary.daily[i + 1][0].slice(0, 7)
      ? [{ date: r[0], primary: r[1], benchmark: benchmark.daily[i][1] }] : []);
  // Holding labels are execution-to-execution intervals, NOT calendar months.
  const recentMonthly: LiveEvidenceMonthlyRow[] = primary.rows.slice(-12).map((r, i) =>
    ({ month: r[0], primary: r[3], benchmark: benchmark.rows[benchmark.rows.length - 12 + i][3] }));
  return { through: d.through, signal: d.signal, completedThrough: d.execution,
    start: primary.daily[0][0], periods: primary.rows.length, points, recentMonthly,
    rows: [
      { label: "RAMA", ...metrics(primary) },
      { label: "Matched equal weight", ...metrics(benchmark) },
      { label: "60/40 SPY / IEF", ...metrics(reference) },
    ] };
}
