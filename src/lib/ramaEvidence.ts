import fs from "node:fs";
import path from "node:path";
import type { LiveEvidenceMetrics, LiveEvidenceMonthlyRow, LiveEvidencePoint } from "@/lib/liveSystemEvidence";

type Policy = {
  wealth: number;
  rows: [string, string, string, number, Record<string, number>, number, string][];
  daily: [string, number, number][];
  currentDaily: [string, number][];
  calendarMonths: Record<string, number>;
  dailyMetrics: { cagrPct: number; volPct: number; sharpe: number; mddPct: number; calmar: number; observations: number };
};
type Snapshot = {
  schema: string;
  through: string;
  signal: string;
  execution: string;
  ready: { signalClose: string } | null;
  dailyReady: boolean;
  costPolicy: string;
  policies: Record<"GMV" | "EW" | "STATIC60_40", Policy>;
};
function need(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error("RAMA public evidence: " + message);
}
function calendarPerformance(p: Policy, cutoff: string) {
  // The holding-period path ends at the next execution close. The current
  // path begins at that close AFTER the new execution fee. Use the actual
  // post-cost mark at that boundary, never reprice or change the portfolio.
  const marks = new Map<string, number>(p.daily.map(r => [r[0], r[1]]));
  for (const r of p.currentDaily) marks.set(r[0], r[1]);
  const daily = [...marks.entries()].filter(([d]) => d <= cutoff).sort((a,b) => a[0].localeCompare(b[0]));
  need(daily.length > 2 && daily[daily.length - 1][0] === cutoff &&
    daily.every(r => Number.isFinite(r[1]) && r[1] > 0) && Math.abs(daily[0][1]-1)<1e-8,
    "calendar mark coverage");
  const initial = daily[0][1], wealth = daily[daily.length - 1][1] / initial;
  const years = (Date.parse(cutoff)-Date.parse(daily[0][0]))/86400000/365.2425;
  need(years > 0, "calendar duration");
  const returns = daily.slice(1).map((r,i) => r[1]/daily[i][1]-1);
  const mean = returns.reduce((a,b)=>a+b,0)/returns.length;
  const sd = Math.sqrt(returns.reduce((a,b)=>a+(b-mean)**2,0)/(returns.length-1));
  let peak=initial, mdd=0;
  for (const [,w] of daily) {peak=Math.max(peak,w);mdd=Math.min(mdd,w/peak-1);}
  const cagr=wealth**(1/years)-1;
  need(sd>0 && mdd<0 && Number.isFinite(cagr),"calendar risk metrics");
  const months=daily.filter((r,i)=>i===daily.length-1 || r[0].slice(0,7)!==daily[i+1][0].slice(0,7));
  const monthly=months.map((r,i)=>({month:r[0].slice(0,7),ret:r[1]/(i?months[i-1][1]:initial)-1}));
  // On already completed source months, cross-check against the native
  // calendar aggregates. The final holding endpoint can be a partial month.
  for (const r of monthly) {
    if (r.month < p.daily[p.daily.length-1][0].slice(0,7)) {
      need(Number.isFinite(p.calendarMonths[r.month]) && Math.abs(r.ret-p.calendarMonths[r.month])<1e-8,
        "calendar month native parity");
    }
  }
  const metrics: LiveEvidenceMetrics = {cumulativeReturn:wealth-1,cagr,annVol:sd*Math.sqrt(252),
    sharpe:mean/sd*Math.sqrt(252),mdd,calmar:cagr/(-mdd)};
  return {daily,months,monthly,metrics};
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
  const completedThrough = d.ready ? d.ready.signalClose : d.signal;
  need(completedThrough >= d.signal && completedThrough <= d.through &&
    (!d.ready || completedThrough === d.through), "calendar decision cutoff");
  const primary = d.policies.GMV, benchmark = d.policies.EW, reference = d.policies.STATIC60_40;
  for (const p of [primary, benchmark, reference]) {
    need(p.daily.length === primary.daily.length && p.rows.length === primary.rows.length &&
      Array.isArray(p.currentDaily) && p.currentDaily[0]?.[0] === d.execution &&
      p.currentDaily[p.currentDaily.length-1]?.[0] === d.through &&
      p.currentDaily.length === primary.currentDaily.length &&
      p.currentDaily.every((r,i)=>r[0]===primary.currentDaily[i][0] && Number.isFinite(r[1]) && r[1]>0) &&
      p.rows.length >= 215, "common support");
    need(p.daily[0][0] === primary.rows[0][1] && p.daily[p.daily.length - 1][0] === d.execution &&
      p.rows[p.rows.length - 1][2] === d.execution &&
      Math.abs(p.daily[p.daily.length - 1][1] - p.wealth) < 1e-8, "completed boundary");
    need(p.daily.every((r, i) => r[0] === primary.daily[i][0] && Number.isFinite(r[1]) && r[1] > 0) &&
      p.rows.every((r, i) => r[0] === primary.rows[i][0] && r[1] === primary.rows[i][1] &&
        r[2] === primary.rows[i][2] && Number.isFinite(r[3])), "path / row parity");
  }
  const cal = calendarPerformance(primary,completedThrough);
  const equal = calendarPerformance(benchmark,completedThrough);
  const staticRef = calendarPerformance(reference,completedThrough);
  need(cal.daily.length===equal.daily.length && cal.daily.length===staticRef.daily.length &&
    cal.daily.every((r,i)=>r[0]===equal.daily[i][0] && r[0]===staticRef.daily[i][0]),"calendar common support");
  const points: LiveEvidencePoint[] = [{date:cal.daily[0][0],primary:cal.daily[0][1],benchmark:equal.daily[0][1]},
    ...cal.months.filter(r=>r[0]!==cal.daily[0][0]).map(r=>({date:r[0],primary:r[1],
      benchmark:equal.months.find(q=>q[0]===r[0])![1]}))];
  const recentMonthly: LiveEvidenceMonthlyRow[] = cal.monthly.slice(-12).map(r=>({month:r.month,primary:r.ret,
    benchmark:equal.monthly.find(q=>q.month===r.month)!.ret}));
  return {through:d.through,signal:d.signal,completedThrough,holdingCompletedThrough:d.execution,
    start:cal.daily[0][0],periods:primary.rows.length,points,recentMonthly,
    rows:[{label:"RAMA",...cal.metrics},{label:"Matched equal weight",...equal.metrics},
      {label:"60/40 SPY / IEF",...staticRef.metrics}]};

}
