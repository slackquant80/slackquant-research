import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  pdsPublicSnapshot,
  type PdsPublicPerformancePoint,
  type PdsPublicPerformanceSummary,
  type PdsPublicFxPerformancePoint,
  type PdsPublicFxPerformanceSummary,
  type PdsPublicFxHedgePoint,
  type PdsPublicCalendarReturn,
  type PdsPublicFxCalendarReturn,
} from "@/data/pdsPublicSnapshot";

export const metadata: Metadata = {
  title: "PDS Public Dashboard — Portfolio Decision System",
  description:
    "Delayed public performance, risk, portfolio history, and historical FX sensitivity for SlackQuant's Portfolio Decision System.",
};

const CORE_IDS = ["PDS_ACTIVE_CORE", "ADAA", "F2R", "SPY_AGG_60_40"] as const;
const FX_SERIES = ["CORE_USD", "UNHEDGED_KRW", "FIXED50_COSTED", "DYNAMIC_COSTED"] as const;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

const CORE_LABELS: Record<string, string> = {
  PDS_ACTIVE_CORE: "PDS Core",
  ADAA: "ADAA",
  F2R: "F2R",
  SPY_AGG_60_40: "60/40",
};

function pct(v: number | null | undefined, digits = 1) {
  return typeof v === "number" && Number.isFinite(v) ? `${(v * 100).toFixed(digits)}%` : "—";
}

function ratio(v: number | null | undefined, digits = 2) {
  return typeof v === "number" && Number.isFinite(v) ? v.toFixed(digits) : "—";
}

function multiple(v: number | null | undefined) {
  return typeof v === "number" && Number.isFinite(v) ? `${v.toFixed(2)}×` : "—";
}

function summaryById<T extends { seriesId: string }>(rows: T[], id: string) {
  return rows.find((row) => row.seriesId === id);
}

function sortedSeries(rows: PdsPublicPerformancePoint[], id: string) {
  return rows.filter((r) => r.seriesId === id).sort((a, b) => a.holdingMonth.localeCompare(b.holdingMonth));
}

function linePoints<T>(
  rows: T[],
  getValue: (row: T) => number,
  width = 720,
  height = 250,
  minOverride?: number,
  maxOverride?: number,
) {
  if (!rows.length) return "";
  const values = rows.map(getValue).filter(Number.isFinite);
  if (!values.length) return "";
  let min = minOverride ?? Math.min(...values);
  let max = maxOverride ?? Math.max(...values);
  if (max <= min) max = min + 1;
  const px = 14;
  const py = 12;
  const innerW = width - px * 2;
  const innerH = height - py * 2;
  return rows.map((row, i) => {
    const x = px + (rows.length === 1 ? innerW / 2 : (i / (rows.length - 1)) * innerW);
    const y = py + (1 - (getValue(row) - min) / (max - min)) * innerH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function mean(values: number[]) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function sampleStdev(values: number[]) {
  if (values.length < 2) return 0;
  const m = mean(values);
  const variance = values.reduce((acc, v) => acc + (v - m) ** 2, 0) / (values.length - 1);
  return Math.sqrt(Math.max(0, variance));
}

function compoundedReturn(values: number[]) {
  return values.reduce((w, r) => w * (1 + r), 1) - 1;
}

function annualizedReturn(values: number[]) {
  if (!values.length) return null;
  const wealth = 1 + compoundedReturn(values);
  return wealth > 0 ? wealth ** (12 / values.length) - 1 : null;
}

function trailingReturn(rows: PdsPublicPerformancePoint[], months: number, annualize = false) {
  if (rows.length < months) return null;
  const values = rows.slice(-months).map((r) => r.netReturn);
  return annualize ? annualizedReturn(values) : compoundedReturn(values);
}

function commonMonths(rows: PdsPublicPerformancePoint[], ids: readonly string[]) {
  const sets = ids.map((id) => new Set(rows.filter((r) => r.seriesId === id).map((r) => r.holdingMonth)));
  if (!sets.length) return [] as string[];
  return [...sets[0]].filter((month) => sets.every((s) => s.has(month))).sort();
}

function alignedRows(rows: PdsPublicPerformancePoint[], id: string, months: string[]) {
  const monthSet = new Set(months);
  return sortedSeries(rows, id).filter((r) => monthSet.has(r.holdingMonth));
}

type DerivedSummary = {
  seriesId: string;
  label: string;
  months: number;
  cagr: number | null;
  annVol: number | null;
  sharpe: number | null;
  maxDrawdown: number | null;
  calmar: number | null;
  positiveShare: number | null;
  terminalWealth: number | null;
};

function deriveSummary(id: string, rows: PdsPublicPerformancePoint[]): DerivedSummary {
  const returns = rows.map((r) => r.netReturn);
  let wealth = 1;
  let peak = 1;
  let maxDrawdown = 0;
  for (const r of returns) {
    wealth *= 1 + r;
    peak = Math.max(peak, wealth);
    maxDrawdown = Math.min(maxDrawdown, wealth / peak - 1);
  }
  const cagr = annualizedReturn(returns);
  const sd = sampleStdev(returns);
  const annVol = returns.length > 1 ? sd * Math.sqrt(12) : null;
  const sharpe = sd > 0 ? mean(returns) / sd * Math.sqrt(12) : null;
  const calmar = cagr !== null && maxDrawdown < 0 ? cagr / Math.abs(maxDrawdown) : null;
  return {
    seriesId: id,
    label: CORE_LABELS[id] ?? id,
    months: returns.length,
    cagr,
    annVol,
    sharpe,
    maxDrawdown,
    calmar,
    positiveShare: returns.length ? returns.filter((r) => r > 0).length / returns.length : null,
    terminalWealth: returns.length ? wealth : null,
  };
}

function correlation(a: PdsPublicPerformancePoint[], b: PdsPublicPerformancePoint[]) {
  const bm = new Map(b.map((r) => [r.holdingMonth, r.netReturn]));
  const pairs = a.map((r) => [r.netReturn, bm.get(r.holdingMonth)] as const).filter((x): x is readonly [number, number] => typeof x[1] === "number");
  if (pairs.length < 2) return null;
  const xs = pairs.map((x) => x[0]);
  const ys = pairs.map((x) => x[1]);
  const mx = mean(xs);
  const my = mean(ys);
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < pairs.length; i += 1) {
    const ax = xs[i] - mx;
    const ay = ys[i] - my;
    num += ax * ay;
    dx += ax * ax;
    dy += ay * ay;
  }
  return dx > 0 && dy > 0 ? num / Math.sqrt(dx * dy) : null;
}

type PathPoint = { holdingMonth: string; wealth: number; drawdown: number };

function wealthPath(rows: PdsPublicPerformancePoint[]): PathPoint[] {
  let wealth = 1;
  let peak = 1;
  return rows.map((r) => {
    wealth *= 1 + r.netReturn;
    peak = Math.max(peak, wealth);
    return { holdingMonth: r.holdingMonth, wealth, drawdown: wealth / peak - 1 };
  });
}

type RollingPoint = { holdingMonth: string; value: number };

function rollingTotalReturn(rows: PdsPublicPerformancePoint[], window: number): RollingPoint[] {
  const out: RollingPoint[] = [];
  for (let i = window - 1; i < rows.length; i += 1) {
    const values = rows.slice(i - window + 1, i + 1).map((r) => r.netReturn);
    out.push({ holdingMonth: rows[i].holdingMonth, value: compoundedReturn(values) });
  }
  return out;
}

function rollingSharpe(rows: PdsPublicPerformancePoint[], window: number): RollingPoint[] {
  const out: RollingPoint[] = [];
  for (let i = window - 1; i < rows.length; i += 1) {
    const values = rows.slice(i - window + 1, i + 1).map((r) => r.netReturn);
    const sd = sampleStdev(values);
    out.push({ holdingMonth: rows[i].holdingMonth, value: sd > 0 ? mean(values) / sd * Math.sqrt(12) : 0 });
  }
  return out;
}

function returnClass(v: number | null | undefined) {
  if (typeof v !== "number" || !Number.isFinite(v)) return "";
  if (v > 0.000001) return "positive";
  if (v < -0.000001) return "negative";
  return "flat";
}

function MetricStrip({ s }: { s: PdsPublicPerformanceSummary }) {
  return (
    <div className="pds-kpi-strip pds-kpi-strip-v2">
      <div><span>CAGR</span><strong>{pct(s.cagr)}</strong><small>annualized return</small></div>
      <div><span>Ann. Vol</span><strong>{pct(s.annVol)}</strong><small>realized monthly path</small></div>
      <div><span>Sharpe · rf=0</span><strong>{ratio(s.sharpeRf0)}</strong><small>risk-adjusted return</small></div>
      <div><span>Max Drawdown</span><strong className="negative">{pct(s.maxDrawdown)}</strong><small>peak-to-trough</small></div>
      <div><span>Calmar</span><strong>{ratio(s.calmar)}</strong><small>CAGR / |MDD|</small></div>
    </div>
  );
}

function PerformanceReadout({ core, summary }: { core: PdsPublicPerformancePoint[]; summary: PdsPublicPerformanceSummary }) {
  const pds = sortedSeries(core, "PDS_ACTIVE_CORE");
  const bench = sortedSeries(core, "SPY_AGG_60_40");
  const benchMap = new Map(bench.map((r) => [r.holdingMonth, r.netReturn]));
  const aligned = pds.filter((r) => benchMap.has(r.holdingMonth));
  const beat = aligned.length ? aligned.filter((r) => r.netReturn > (benchMap.get(r.holdingMonth) ?? Number.POSITIVE_INFINITY)).length / aligned.length : null;
  const positive = pds.length ? pds.filter((r) => r.netReturn > 0).length / pds.length : null;
  const best = pds.reduce<PdsPublicPerformancePoint | null>((a, r) => !a || r.netReturn > a.netReturn ? r : a, null);
  const worst = pds.reduce<PdsPublicPerformancePoint | null>((a, r) => !a || r.netReturn < a.netReturn ? r : a, null);
  const t12 = trailingReturn(pds, 12, false);
  const t36 = trailingReturn(pds, 36, true);
  return (
    <div className="pds-performance-readout">
      <div><span>Growth of 1</span><strong>{multiple(summary.terminalWealth)}</strong><small>since {summary.startHoldingMonth}</small></div>
      <div><span>Trailing 12M</span><strong className={returnClass(t12)}>{pct(t12)}</strong><small>completed holding months</small></div>
      <div><span>Trailing 36M CAGR</span><strong className={returnClass(t36)}>{pct(t36)}</strong><small>annualized</small></div>
      <div><span>Positive months</span><strong>{pct(positive, 0)}</strong><small>{pds.length} released months</small></div>
      <div><span>Beat 60/40 months</span><strong>{pct(beat, 0)}</strong><small>same holding months</small></div>
      <div className="pds-readout-extremes"><span>Best / worst month</span><strong><b className="positive">{pct(best?.netReturn)}</b> <i>/</i> <b className="negative">{pct(worst?.netReturn)}</b></strong><small>{best?.holdingMonth ?? "—"} / {worst?.holdingMonth ?? "—"}</small></div>
    </div>
  );
}

function CommonWealthChart({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const months = commonMonths(rows, CORE_IDS);
  if (!months.length) return null;
  const paths = CORE_IDS.map((id) => ({ id, path: wealthPath(alignedRows(rows, id, months)) }));
  const all = paths.flatMap((p) => p.path.map((r) => r.wealth));
  const min = Math.min(...all);
  const max = Math.max(...all);
  return (
    <div className="pds-panel pds-panel-wide pds-performance-chart-main">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">Common-support comparison</span><h3>Growth of 1</h3><small className="pds-panel-subnote">All series rebased to 1 on the same released holding-month support.</small></div>
        <div className="pds-legend pds-core-legend"><span className="pds-core">PDS</span><span className="adaa">ADAA</span><span className="f2r">F2R</span><span className="ref">60/40</span></div>
      </div>
      <svg className="pds-chart pds-chart-tall" viewBox="0 0 720 290" role="img" aria-label="PDS common-support cumulative wealth comparison">
        <line x1="14" y1="278" x2="706" y2="278" className="pds-axis" />
        {paths.map(({ id, path }) => (
          <polyline key={id} points={linePoints(path, (r) => r.wealth, 720, 290, min, max)} className={`pds-line pds-compare-${id.toLowerCase().replaceAll("_", "-")}`} />
        ))}
      </svg>
      <div className="pds-axis-labels"><span>{months[0]}</span><span>{months.at(-1)}</span></div>
    </div>
  );
}

function DrawdownCompareChart({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const months = commonMonths(rows, ["PDS_ACTIVE_CORE", "SPY_AGG_60_40"]);
  if (!months.length) return null;
  const pds = wealthPath(alignedRows(rows, "PDS_ACTIVE_CORE", months));
  const ref = wealthPath(alignedRows(rows, "SPY_AGG_60_40", months));
  const min = Math.min(...pds.map((r) => r.drawdown), ...ref.map((r) => r.drawdown), -0.01);
  return (
    <div className="pds-panel">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">Path risk</span><h3>Drawdown vs 60/40</h3><small className="pds-panel-subnote">Peak-normalized drawdown on aligned released months.</small></div>
        <strong className="pds-panel-stat negative">{pct(Math.min(...pds.map((r) => r.drawdown)))}</strong>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label="PDS and 60/40 drawdown comparison">
        <line x1="14" y1="12" x2="706" y2="12" className="pds-axis" />
        <polyline points={linePoints(ref, (r) => r.drawdown, 720, 250, min, 0)} className="pds-line pds-compare-spy-agg-60-40" />
        <polyline points={linePoints(pds, (r) => r.drawdown, 720, 250, min, 0)} className="pds-line pds-compare-pds-active-core" />
      </svg>
      <div className="pds-axis-labels"><span>{months[0]}</span><span>{months.at(-1)}</span></div>
    </div>
  );
}

function RollingChart({ rows, metric, title, kicker }: { rows: PdsPublicPerformancePoint[]; metric: "return12" | "sharpe36"; title: string; kicker: string }) {
  const months = commonMonths(rows, ["PDS_ACTIVE_CORE", "SPY_AGG_60_40"]);
  const pdsBase = alignedRows(rows, "PDS_ACTIVE_CORE", months);
  const refBase = alignedRows(rows, "SPY_AGG_60_40", months);
  const pds = metric === "return12" ? rollingTotalReturn(pdsBase, 12) : rollingSharpe(pdsBase, 36);
  const ref = metric === "return12" ? rollingTotalReturn(refBase, 12) : rollingSharpe(refBase, 36);
  if (!pds.length || !ref.length) return null;
  const min = Math.min(...pds.map((r) => r.value), ...ref.map((r) => r.value), metric === "return12" ? 0 : Number.POSITIVE_INFINITY);
  const max = Math.max(...pds.map((r) => r.value), ...ref.map((r) => r.value), metric === "return12" ? 0 : Number.NEGATIVE_INFINITY);
  const last = pds.at(-1)?.value;
  return (
    <div className="pds-panel">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">{kicker}</span><h3>{title}</h3><small className="pds-panel-subnote">PDS Core versus 60/40 reference.</small></div>
        <strong className={`pds-panel-stat ${metric === "return12" ? returnClass(last) : ""}`}>{metric === "return12" ? pct(last) : ratio(last)}</strong>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label={title}>
        {min < 0 && max > 0 ? <line x1="14" y1={(12 + (1 - (0 - min) / (max - min)) * 226).toFixed(1)} x2="706" y2={(12 + (1 - (0 - min) / (max - min)) * 226).toFixed(1)} className="pds-axis" /> : null}
        <polyline points={linePoints(ref, (r) => r.value, 720, 250, min, max)} className="pds-line pds-compare-spy-agg-60-40" />
        <polyline points={linePoints(pds, (r) => r.value, 720, 250, min, max)} className="pds-line pds-compare-pds-active-core" />
      </svg>
      <div className="pds-axis-labels"><span>{pds[0].holdingMonth}</span><span>{pds.at(-1)?.holdingMonth}</span></div>
    </div>
  );
}

function CommonSupportTable({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const months = commonMonths(rows, CORE_IDS);
  if (!months.length) return null;
  const pdsRows = alignedRows(rows, "PDS_ACTIVE_CORE", months);
  const summaries = CORE_IDS.map((id) => {
    const srows = alignedRows(rows, id, months);
    return { ...deriveSummary(id, srows), corr: id === "PDS_ACTIVE_CORE" ? 1 : correlation(pdsRows, srows) };
  });
  return (
    <div className="pds-history-card pds-common-support-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">Apples-to-apples</span><h3>Common-support risk / return scorecard</h3></div>
        <small>{months[0]} → {months.at(-1)} · {months.length} completed holding months · rf=0 Sharpe.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-performance-table">
          <thead><tr><th>Series</th><th>CAGR</th><th>Ann. Vol</th><th>Sharpe</th><th>Max DD</th><th>Calmar</th><th>Positive months</th><th>Corr. to PDS</th></tr></thead>
          <tbody>{summaries.map((s) => (
            <tr key={s.seriesId} className={s.seriesId === "PDS_ACTIVE_CORE" ? "pds-primary-row" : ""}>
              <th scope="row">{s.label}</th><td>{pct(s.cagr)}</td><td>{pct(s.annVol)}</td><td>{ratio(s.sharpe)}</td><td className="negative">{pct(s.maxDrawdown)}</td><td>{ratio(s.calmar)}</td><td>{pct(s.positiveShare, 0)}</td><td>{ratio(s.corr)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p className="pds-table-footnote">Dashboard-derived statistics use only the released monthly return rows on the strict intersection of all four series. Provider native-history statistics are shown separately below.</p>
    </div>
  );
}

type DrawdownEpisode = { peak: string; trough: string; recovery: string | null; depth: number; duration: number };

function monthDistance(a: string, b: string) {
  const [ay, am] = a.split("-").map(Number);
  const [by, bm] = b.split("-").map(Number);
  return Math.max(0, (by - ay) * 12 + (bm - am));
}

function drawdownEpisodes(rows: PdsPublicPerformancePoint[]): DrawdownEpisode[] {
  const s = sortedSeries(rows, "PDS_ACTIVE_CORE");
  if (!s.length) return [];
  const episodes: DrawdownEpisode[] = [];
  let lastPeakMonth = s[0].holdingMonth;
  let current: DrawdownEpisode | null = null;
  for (const r of s) {
    if (r.drawdown >= -1e-10) {
      if (current) {
        current.recovery = r.holdingMonth;
        current.duration = monthDistance(current.peak, r.holdingMonth);
        episodes.push(current);
        current = null;
      }
      lastPeakMonth = r.holdingMonth;
      continue;
    }
    if (!current) {
      current = { peak: lastPeakMonth, trough: r.holdingMonth, recovery: null, depth: r.drawdown, duration: 0 };
    }
    if (r.drawdown < current.depth) {
      current.depth = r.drawdown;
      current.trough = r.holdingMonth;
    }
  }
  if (current) {
    current.duration = monthDistance(current.peak, s.at(-1)?.holdingMonth ?? current.trough);
    episodes.push(current);
  }
  return episodes.sort((a, b) => a.depth - b.depth).slice(0, 5);
}

function DrawdownEpisodeTable({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const episodes = drawdownEpisodes(rows);
  if (!episodes.length) return null;
  return (
    <div className="pds-history-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">Path-risk anatomy</span><h3>Largest drawdown episodes</h3></div>
        <small>Peak → trough → recovery, using released PDS Core holding-month wealth.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-drawdown-table">
          <thead><tr><th>Peak</th><th>Trough</th><th>Depth</th><th>Recovery</th><th>Peak-to-recovery / age</th></tr></thead>
          <tbody>{episodes.map((e) => (
            <tr key={`${e.peak}-${e.trough}`}><td>{e.peak}</td><td>{e.trough}</td><td className="negative">{pct(e.depth)}</td><td>{e.recovery ?? "Open at cutoff"}</td><td>{e.duration} mo</td></tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function RecentComparisonTable({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const pds = sortedSeries(rows, "PDS_ACTIVE_CORE");
  const ref = new Map(sortedSeries(rows, "SPY_AGG_60_40").map((r) => [r.holdingMonth, r.netReturn]));
  const recent = pds.filter((r) => ref.has(r.holdingMonth)).slice(-12).reverse();
  return (
    <div className="pds-history-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">Recent tape</span><h3>Last 12 completed months</h3></div>
        <small>PDS Core versus 60/40 on the same realized holding month.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-recent-table">
          <thead><tr><th>Holding month</th><th>PDS Core</th><th>60/40</th><th>Excess</th></tr></thead>
          <tbody>{recent.map((r) => {
            const b = ref.get(r.holdingMonth) ?? 0;
            const excess = r.netReturn - b;
            return <tr key={r.holdingMonth}><th scope="row">{r.holdingMonth}</th><td className={returnClass(r.netReturn)}>{pct(r.netReturn)}</td><td className={returnClass(b)}>{pct(b)}</td><td className={returnClass(excess)}>{pct(excess)}</td></tr>;
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

function ProviderContext({ summaries }: { summaries: PdsPublicPerformanceSummary[] }) {
  const ids = ["ADAA", "F2R", "SPY_AGG_60_40"] as const;
  return (
    <div className="pds-provider-context pds-provider-context-v2">
      <div className="pds-provider-context-copy">
        <span className="pds-panel-kicker">Native evidence windows</span>
        <h3>Provider histories remain visible without forcing unequal samples into one comparison.</h3>
        <p>ADAA, F2R, and 60/40 retain their source evidence windows. The scorecard above is the strict common-support view; these cards preserve native-history context.</p>
      </div>
      <div className="pds-provider-cards">
        {ids.map((id) => {
          const s = summaryById(summaries, id);
          if (!s) return null;
          return (
            <div className="pds-provider-card" key={id}>
              <div className="pds-provider-name">{s.displayName}</div>
              <div className="pds-provider-period">{s.startHoldingMonth} → {s.endHoldingMonth}</div>
              <div className="pds-provider-stats">
                <span><b>{pct(s.cagr)}</b>CAGR</span><span><b>{ratio(s.sharpeRf0)}</b>Sharpe</span><span><b>{pct(s.maxDrawdown)}</b>MDD</span><span><b>{ratio(s.calmar)}</b>Calmar</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CoreAnnualTable({ rows }: { rows: PdsPublicCalendarReturn[] }) {
  const years = [...new Set(rows.map((r) => r.year))].sort().reverse();
  const byKey = new Map(rows.map((r) => [`${r.year}|${r.seriesId}`, r]));
  return (
    <div className="pds-history-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">Calendar returns</span><h3>Annual performance</h3></div>
        <small>Returns are attributed to realized holding months; source signal/origin month is retained as provenance.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-history-table">
          <thead><tr><th>Year</th><th>PDS Core</th><th>ADAA · PDS basis</th><th>F2R · PDS basis</th><th>60/40</th></tr></thead>
          <tbody>{years.map((year) => (
            <tr key={year}>
              <th scope="row">{year}</th>
              {CORE_IDS.map((id) => {
                const r = byKey.get(`${year}|${id}`);
                return <td className={returnClass(r?.annualReturn)} key={id}>{r ? pct(r.annualReturn) : "—"}</td>;
              })}
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function PdsMonthlyMatrix({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const s = rows.filter((r) => r.seriesId === "PDS_ACTIVE_CORE");
  const years = [...new Set(s.map((r) => r.holdingMonth.slice(0, 4)))].sort().reverse();
  const byMonth = new Map(s.map((r) => [r.holdingMonth, r.netReturn]));
  return (
    <div className="pds-history-card pds-month-matrix-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">Monthly returns</span><h3>PDS Core monthly return matrix</h3></div>
        <small>Every released realized holding-month return.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-month-grid">
          <thead><tr><th>Year</th>{MONTHS.map((m) => <th key={m}>{m}</th>)}</tr></thead>
          <tbody>{years.map((year) => (
            <tr key={year}>
              <th scope="row">{year}</th>
              {MONTHS.map((_, i) => {
                const key = `${year}-${String(i + 1).padStart(2, "0")}`;
                const v = byMonth.get(key);
                return <td className={returnClass(v)} key={key}>{typeof v === "number" ? pct(v) : "—"}</td>;
              })}
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function FxWealthChart({ rows }: { rows: PdsPublicFxPerformancePoint[] }) {
  const selected = FX_SERIES.map((id) => ({ id, rows: rows.filter((r) => r.seriesId === id).sort((a, b) => a.holdingMonth.localeCompare(b.holdingMonth)) })).filter((x) => x.rows.length);
  if (!selected.length) return null;
  const all = selected.flatMap((x) => x.rows);
  const min = Math.min(...all.map((r) => r.cumulativeWealth));
  const max = Math.max(...all.map((r) => r.cumulativeWealth));
  const dates = all.map((r) => r.holdingMonth).sort();
  return (
    <div className="pds-panel pds-panel-wide">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">Historical FX sensitivity</span><h3>Currency-layer wealth paths</h3></div>
        <div className="pds-legend"><span className="usd">USD</span><span className="krw">KRW unhedged</span><span className="fixed">Fixed 50%</span><span className="dynamic">Dynamic</span></div>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label="Historical FX sensitivity cumulative wealth">
        <line x1="14" y1="238" x2="706" y2="238" className="pds-axis" />
        {selected.map(({ id, rows: srows }) => <polyline key={id} points={linePoints(srows, (r) => r.cumulativeWealth, 720, 250, min, max)} className={`pds-line pds-fx-${id.toLowerCase().replaceAll("_", "-")}`} />)}
      </svg>
      <div className="pds-axis-labels"><span>{dates[0]}</span><span>{dates.at(-1)}</span></div>
    </div>
  );
}

function HedgeChart({ rows }: { rows: PdsPublicFxHedgePoint[] }) {
  const s = [...rows].sort((a, b) => a.holdingMonth.localeCompare(b.holdingMonth));
  if (!s.length) return null;
  return (
    <div className="pds-panel">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">Latest released hedge state</span><h3>Historical Dynamic Hedge Ratio</h3><small className="pds-panel-subnote">Holding {s.at(-1)?.holdingMonth} · Signal {s.at(-1)?.signalPeriod}</small></div>
        <div className="pds-released-hedge"><strong>{pct(s.at(-1)?.dynamicHedgeRatio, 0)}</strong><span>Historical delayed state</span></div>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label="Historical dynamic hedge ratio">
        <line x1="14" y1="125" x2="706" y2="125" className="pds-axis" />
        <polyline points={linePoints(s, (r) => r.dynamicHedgeRatio, 720, 250, 0, 1)} className="pds-line pds-line-accent" />
      </svg>
      <div className="pds-axis-labels"><span>{s[0].holdingMonth}</span><span>{s.at(-1)?.holdingMonth}</span></div>
    </div>
  );
}

function FxCards({ rows }: { rows: PdsPublicFxPerformanceSummary[] }) {
  return (
    <div className="pds-fx-kpis">
      {FX_SERIES.map((id) => {
        const s = summaryById(rows, id);
        if (!s) return null;
        return <div key={id}><span>{s.displayName.replace("PDS Active Core · ", "")}</span><strong>{pct(s.cagr)}</strong><small>Sharpe {ratio(s.sharpeRf0)} · MDD {pct(s.maxDrawdown)} · Calmar {ratio(s.calmar)}</small></div>;
      })}
    </div>
  );
}

function FxSummaryTable({ rows }: { rows: PdsPublicFxPerformanceSummary[] }) {
  return (
    <div className="pds-history-card">
      <div className="pds-history-head"><div><span className="pds-panel-kicker">Risk / return</span><h3>FX sensitivity scorecard</h3></div><small>Non-canonical spot sensitivity only.</small></div>
      <div className="evidence-table-wrap"><table className="evidence-table pds-performance-table"><thead><tr><th>Currency treatment</th><th>CAGR</th><th>Ann. Vol</th><th>Sharpe</th><th>Max DD</th><th>Calmar</th></tr></thead><tbody>
        {FX_SERIES.map((id) => { const s = summaryById(rows, id); return s ? <tr key={id}><th scope="row">{s.displayName.replace("PDS Active Core · ", "")}</th><td>{pct(s.cagr)}</td><td>{pct(s.annVol)}</td><td>{ratio(s.sharpeRf0)}</td><td className="negative">{pct(s.maxDrawdown)}</td><td>{ratio(s.calmar)}</td></tr> : null; })}
      </tbody></table></div>
    </div>
  );
}

function FxAnnualTable({ rows }: { rows: PdsPublicFxCalendarReturn[] }) {
  const years = [...new Set(rows.map((r) => r.year))].sort().reverse();
  const byKey = new Map(rows.map((r) => [`${r.year}|${r.seriesId}`, r]));
  return (
    <div className="pds-history-card">
      <div className="pds-history-head"><div><span className="pds-panel-kicker">FX calendar returns</span><h3>Annual performance by currency treatment</h3></div><small>Delayed · non-canonical Operational Spot Sensitivity.</small></div>
      <div className="evidence-table-wrap"><table className="evidence-table pds-history-table"><thead><tr><th>Year</th><th>USD</th><th>KRW Unhedged</th><th>Fixed 50%</th><th>Dynamic</th></tr></thead><tbody>{years.map((year) => <tr key={year}><th scope="row">{year}</th>{FX_SERIES.map((id) => { const r = byKey.get(`${year}|${id}`); return <td className={returnClass(r?.annualReturn)} key={id}>{r ? pct(r.annualReturn) : "—"}</td>; })}</tr>)}</tbody></table></div>
    </div>
  );
}

function FxRecentMonthlyTable({ rows }: { rows: PdsPublicFxPerformancePoint[] }) {
  const months = [...new Set(rows.map((r) => r.holdingMonth))].sort().reverse().slice(0, 24);
  const byKey = new Map(rows.map((r) => [`${r.holdingMonth}|${r.seriesId}`, r]));
  return (
    <div className="pds-history-card">
      <div className="pds-history-head"><div><span className="pds-panel-kicker">FX monthly history</span><h3>Recent 24 completed holding months</h3></div><small>Current FX state is not included.</small></div>
      <div className="evidence-table-wrap"><table className="evidence-table pds-history-table"><thead><tr><th>Holding month</th><th>USD</th><th>KRW Unhedged</th><th>Fixed 50%</th><th>Dynamic</th></tr></thead><tbody>{months.map((month) => <tr key={month}><th scope="row">{month}</th>{FX_SERIES.map((id) => { const r = byKey.get(`${month}|${id}`); return <td className={returnClass(r?.netReturn)} key={id}>{r ? pct(r.netReturn) : "—"}</td>; })}</tr>)}</tbody></table></div>
    </div>
  );
}

export default function PdsPublicDashboardPage() {
  const snapshot = pdsPublicSnapshot;
  if (!snapshot) notFound();

  const core = snapshot.corePerformance ?? [];
  const coreSummary = snapshot.corePerformanceSummary ?? [];
  const fx = snapshot.fxPerformance ?? [];
  const fxSummary = snapshot.fxPerformanceSummary ?? [];
  const hedge = snapshot.fxHedgeHistory ?? [];
  const coreCalendar = snapshot.coreCalendarReturns ?? [];
  const fxCalendar = snapshot.fxCalendarReturns ?? [];
  const pdsSummary = summaryById(coreSummary, "PDS_ACTIVE_CORE");

  return (
    <main className="pds-dashboard-page pds-dashboard-performance-v2">
      <section className="pds-dashboard-top">
        <div className="shell">
          <div className="pds-dashboard-title-row">
            <div>
              <div className="paper-track-row"><div className="eyebrow">SlackQuant Systems</div><span className="track-chip">PDS Public Dashboard</span></div>
              <h1>Portfolio Decision System</h1>
              <p className="pds-dashboard-subtitle">Delayed portfolio evidence, with current decisions protected.</p>
              <p className="pds-dashboard-summary">The public read model emphasizes completed historical evidence: performance, drawdowns, rolling diagnostics, return consistency, delayed portfolio state, and historical FX sensitivity. Live decision state remains outside the public surface.</p>
            </div>
            <div className="pds-dashboard-actions"><Link href="/systems/pds/" className="btn soft">System Architecture</Link><a href="#boundary" className="btn soft">Disclosure</a></div>
          </div>
          <div className="pds-state-grid">
            <div><span>Latest released signal</span><strong>{snapshot.latestReleasedSignalPeriod}</strong></div>
            <div><span>Completed holding month</span><strong>{snapshot.completedHoldingMonthCutoff}</strong></div>
            <div><span>Public snapshot</span><strong>{snapshot.publicAsOfDate}</strong></div>
            <div className="protected"><span>Current state</span><strong>Protected</strong></div>
          </div>
          <nav className="pds-dashboard-nav" aria-label="PDS public dashboard sections"><a href="#performance">Performance</a><a href="#rolling">Rolling diagnostics</a><a href="#history">Return history</a><a href="#fx">FX sensitivity</a><a href="#portfolio">Released portfolio</a></nav>
        </div>
      </section>

      <div className="shell pds-dashboard-body">
        <section className="pds-dashboard-section" id="performance">
          <div className="pds-section-heading"><div><span className="pds-section-kicker">Core Performance</span><h2>Performance, risk, and consistency at a glance</h2></div>{pdsSummary ? <span className="pds-section-period">{pdsSummary.startHoldingMonth} → {pdsSummary.endHoldingMonth}</span> : null}</div>
          <p className="pds-section-note">Performance is indexed by realized holding month. All public statistics stop at the completed holding-month cutoff; originating signal periods remain available as provenance.</p>
          {pdsSummary ? <MetricStrip s={pdsSummary} /> : null}
          {pdsSummary ? <PerformanceReadout core={core} summary={pdsSummary} /> : null}
          <div className="pds-performance-chart-grid"><CommonWealthChart rows={core} /><DrawdownCompareChart rows={core} /></div>
          <CommonSupportTable rows={core} />
          <ProviderContext summaries={coreSummary} />
        </section>

        <section className="pds-dashboard-section" id="rolling">
          <div className="pds-section-heading"><div><span className="pds-section-kicker">Rolling Diagnostics</span><h2>How the historical edge behaved through time</h2></div><span className="track-chip">Completed months only</span></div>
          <p className="pds-section-note">Rolling views reduce dependence on one terminal endpoint. They remain descriptive historical evidence rather than independent trial statistics.</p>
          <div className="pds-two-col"><RollingChart rows={core} metric="return12" kicker="Return persistence" title="Rolling 12M return" /><RollingChart rows={core} metric="sharpe36" kicker="Risk-adjusted persistence" title="Rolling 36M Sharpe" /></div>
          <div className="pds-history-grid"><DrawdownEpisodeTable rows={core} /><RecentComparisonTable rows={core} /></div>
        </section>

        <section className="pds-dashboard-section" id="history">
          <div className="pds-section-heading"><div><span className="pds-section-kicker">Return History</span><h2>Calendar and monthly evidence</h2></div><span className="pds-section-period">Full released path</span></div>
          <p className="pds-section-note">Annual and monthly tables expose the realized path rather than only terminal summary statistics.</p>
          <CoreAnnualTable rows={coreCalendar} />
          <PdsMonthlyMatrix rows={core} />
        </section>

        <section className="pds-dashboard-section" id="fx">
          <div className="pds-section-heading"><div><span className="pds-section-kicker">FX Overlay Evidence</span><h2>Historical Operational Spot Sensitivity</h2></div><span className="track-chip">Delayed · non-canonical</span></div>
          <p className="pds-section-note">Historical USD, KRW-unhedged, fixed-hedge, and dynamic-hedge sensitivity is shown under the source-owned PDS diagnostic contract. This is not an executable forward/NDF replication and does not expose the current FX state.</p>
          <FxCards rows={fxSummary} />
          <FxSummaryTable rows={fxSummary} />
          <div className="pds-two-col pds-fx-grid"><FxWealthChart rows={fx} /><HedgeChart rows={hedge} /></div>
          <div className="pds-history-grid"><FxAnnualTable rows={fxCalendar} /><FxRecentMonthlyTable rows={fx} /></div>
        </section>

        <section className="pds-dashboard-section pds-bottom-grid" id="portfolio">
          <div className="pds-bottom-main">
            <div className="pds-section-heading compact"><div><span className="pds-section-kicker">Released Portfolio State</span><h2>Latest historical configuration</h2></div><Link href="/systems/pds/#portfolio" className="section-link strong-link">Decision architecture →</Link></div>
            <p className="pds-section-note">One delayed configuration produced by PDS after the holding month completed; it is not the permanent definition of the system.</p>
            {snapshot.latestStrategyWeights ? <div className="pds-allocation-strip"><div><span>ADAA</span><strong>{pct(snapshot.latestStrategyWeights.adaaWeight)}</strong></div><div><span>F2R</span><strong>{pct(snapshot.latestStrategyWeights.f2rWeight)}</strong></div><div><span>Signal</span><strong>{snapshot.latestStrategyWeights.signalPeriod}</strong></div><div><span>Holding</span><strong>{snapshot.latestStrategyWeights.holdingMonth}</strong></div></div> : null}
            <div className="evidence-table-wrap pds-asset-table" role="region" aria-label="Latest released PDS asset targets" tabIndex={0}>
              <table className="evidence-table pds-public-table"><thead><tr><th>Asset</th><th>Target</th><th>Asset</th><th>Target</th></tr></thead><tbody>{Array.from({ length: Math.ceil(snapshot.latestAssetTargets.length / 2) }).map((_, i) => { const a = snapshot.latestAssetTargets[i]; const b = snapshot.latestAssetTargets[i + Math.ceil(snapshot.latestAssetTargets.length / 2)]; return <tr key={a?.ticker ?? i}><th scope="row">{a?.ticker ?? ""}</th><td>{a ? pct(a.targetWeight) : ""}</td><th scope="row">{b?.ticker ?? ""}</th><td>{b ? pct(b.targetWeight) : ""}</td></tr>; })}</tbody></table>
            </div>
          </div>
          <aside className="pds-boundary-card" id="boundary">
            <span className="pds-section-kicker">Disclosure Boundary</span><h2>Public history is not a live portfolio feed.</h2>
            <div className="pds-boundary-block public"><span>Public / delayed</span><p>Architecture, released historical targets, historical Core performance, rolling diagnostics, and delayed historical FX sensitivity.</p></div>
            <div className="pds-boundary-block private"><span>Protected</span><p>Current target, provider weights, intramonth Preview, Forward Shadow, current mark, current FX state, and operator diagnostics.</p></div>
          </aside>
        </section>
      </div>
    </main>
  );
}
