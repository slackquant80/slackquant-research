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
    "Delayed public performance, portfolio history, and historical FX sensitivity for SlackQuant's Portfolio Decision System.",
};

const FX_SERIES = ["CORE_USD", "UNHEDGED_KRW", "FIXED50_COSTED", "DYNAMIC_COSTED"] as const;

function pct(v: number | null | undefined, digits = 1) {
  return typeof v === "number" && Number.isFinite(v) ? `${(v * 100).toFixed(digits)}%` : "—";
}
function ratio(v: number | null | undefined) {
  return typeof v === "number" && Number.isFinite(v) ? v.toFixed(2) : "—";
}
function summaryById<T extends { seriesId: string }>(rows: T[], id: string) {
  return rows.find((row) => row.seriesId === id);
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

function MetricStrip({ s }: { s: PdsPublicPerformanceSummary }) {
  return (
    <div className="pds-kpi-strip">
      <div><span>CAGR</span><strong>{pct(s.cagr)}</strong></div>
      <div><span>Ann. Vol</span><strong>{pct(s.annVol)}</strong></div>
      <div><span>Sharpe · rf=0</span><strong>{ratio(s.sharpeRf0)}</strong></div>
      <div><span>Max Drawdown</span><strong className="negative">{pct(s.maxDrawdown)}</strong></div>
      <div><span>Calmar</span><strong>{ratio(s.calmar)}</strong></div>
    </div>
  );
}

function PdsWealthChart({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const s = rows.filter((r) => r.seriesId === "PDS_ACTIVE_CORE").sort((a, b) => a.holdingMonth.localeCompare(b.holdingMonth));
  if (!s.length) return null;
  const min = Math.min(...s.map((r) => r.cumulativeWealth));
  const max = Math.max(...s.map((r) => r.cumulativeWealth));
  return (
    <div className="pds-panel">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">PDS Active Core</span><h3>Cumulative wealth</h3></div>
        <span className="pds-panel-period">{s[0].holdingMonth} → {s.at(-1)?.holdingMonth}</span>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label="PDS Active Core cumulative wealth">
        <line x1="14" y1="238" x2="706" y2="238" className="pds-axis" />
        <polyline points={linePoints(s, (r) => r.cumulativeWealth, 720, 250, min, max)} className="pds-line pds-line-primary" />
      </svg>
      <div className="pds-axis-labels"><span>{s[0].holdingMonth}</span><span>{s.at(-1)?.holdingMonth}</span></div>
    </div>
  );
}

function PdsDrawdownChart({ rows }: { rows: PdsPublicPerformancePoint[] }) {
  const s = rows.filter((r) => r.seriesId === "PDS_ACTIVE_CORE").sort((a, b) => a.holdingMonth.localeCompare(b.holdingMonth));
  if (!s.length) return null;
  const min = Math.min(...s.map((r) => r.drawdown), -0.01);
  return (
    <div className="pds-panel">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">Risk path</span><h3>Drawdown</h3></div>
        <strong className="pds-panel-stat negative">{pct(min)}</strong>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label="PDS Active Core drawdown">
        <line x1="14" y1="12" x2="706" y2="12" className="pds-axis" />
        <polyline points={linePoints(s, (r) => r.drawdown, 720, 250, min, 0)} className="pds-line pds-line-dark" />
      </svg>
      <div className="pds-axis-labels"><span>{s[0].holdingMonth}</span><span>{s.at(-1)?.holdingMonth}</span></div>
    </div>
  );
}

function ProviderContext({ summaries }: { summaries: PdsPublicPerformanceSummary[] }) {
  const ids = ["ADAA", "F2R", "SPY_AGG_60_40"] as const;
  return (
    <div className="pds-provider-context">
      <div className="pds-provider-context-copy">
        <span className="pds-panel-kicker">Provider context</span>
        <h3>Source histories are shown on their own evidence windows.</h3>
        <p>
          ADAA, F2R, and 60/40 do not share the same inception date as PDS Active Core.
          Their metrics are therefore presented with explicit sample windows rather than as directly comparable terminal-wealth levels.
        </p>
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
                <span><b>{pct(s.cagr)}</b>CAGR</span>
                <span><b>{ratio(s.sharpeRf0)}</b>Sharpe</span>
                <span><b>{pct(s.maxDrawdown)}</b>MDD</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FxWealthChart({ rows }: { rows: PdsPublicFxPerformancePoint[] }) {
  const selected = FX_SERIES.map((id) => ({
    id,
    rows: rows.filter((r) => r.seriesId === id).sort((a, b) => a.holdingMonth.localeCompare(b.holdingMonth)),
  })).filter((x) => x.rows.length);
  if (!selected.length) return null;
  const all = selected.flatMap((x) => x.rows);
  const min = Math.min(...all.map((r) => r.cumulativeWealth));
  const max = Math.max(...all.map((r) => r.cumulativeWealth));
  const dates = all.map((r) => r.holdingMonth).sort();
  return (
    <div className="pds-panel pds-panel-wide">
      <div className="pds-panel-head">
        <div><span className="pds-panel-kicker">Historical FX sensitivity</span><h3>Currency-layer wealth paths</h3></div>
        <div className="pds-legend">
          <span className="usd">USD</span><span className="krw">KRW unhedged</span><span className="fixed">Fixed 50%</span><span className="dynamic">Dynamic</span>
        </div>
      </div>
      <svg className="pds-chart" viewBox="0 0 720 250" role="img" aria-label="Historical FX sensitivity cumulative wealth">
        <line x1="14" y1="238" x2="706" y2="238" className="pds-axis" />
        {selected.map(({ id, rows: srows }) => (
          <polyline
            key={id}
            points={linePoints(srows, (r) => r.cumulativeWealth, 720, 250, min, max)}
            className={`pds-line pds-fx-${id.toLowerCase().replaceAll("_", "-")}`}
          />
        ))}
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
        return (
          <div key={id}>
            <span>{s.displayName.replace("PDS Active Core · ", "")}</span>
            <strong>{pct(s.cagr)}</strong>
            <small>MDD {pct(s.maxDrawdown)} · Calmar {ratio(s.calmar)}</small>
          </div>
        );
      })}
    </div>
  );
}


const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] as const;

function returnClass(v: number | null | undefined) {
  if (typeof v !== "number" || !Number.isFinite(v)) return "";
  if (v > 0.000001) return "positive";
  if (v < -0.000001) return "negative";
  return "flat";
}

function CoreAnnualTable({ rows }: { rows: PdsPublicCalendarReturn[] }) {
  const ids = ["PDS_ACTIVE_CORE","ADAA","F2R","SPY_AGG_60_40"] as const;
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
          <thead><tr><th>Year</th><th>PDS Active Core</th><th>ADAA · PDS basis</th><th>F2R · PDS basis</th><th>60/40</th></tr></thead>
          <tbody>{years.map((year) => (
            <tr key={year}>
              <th scope="row">{year}</th>
              {ids.map((id) => {
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
  const years = [...new Set(s.map((r) => r.holdingMonth.slice(0,4)))].sort().reverse();
  const byMonth = new Map(s.map((r) => [r.holdingMonth, r.netReturn]));
  return (
    <div className="pds-history-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">PDS Active Core</span><h3>Monthly returns</h3></div>
        <small>Realized holding-month returns.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-month-grid">
          <thead><tr><th>Year</th>{MONTHS.map((m) => <th key={m}>{m}</th>)}</tr></thead>
          <tbody>{years.map((year) => (
            <tr key={year}>
              <th scope="row">{year}</th>
              {MONTHS.map((_,i) => {
                const key = `${year}-${String(i+1).padStart(2,"0")}`;
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

function FxAnnualTable({ rows }: { rows: PdsPublicFxCalendarReturn[] }) {
  const years = [...new Set(rows.map((r) => r.year))].sort().reverse();
  const byKey = new Map(rows.map((r) => [`${r.year}|${r.seriesId}`, r]));
  return (
    <div className="pds-history-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">FX calendar returns</span><h3>Annual performance by currency treatment</h3></div>
        <small>Delayed · non-canonical Operational Spot Sensitivity.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-history-table">
          <thead><tr><th>Year</th><th>USD</th><th>KRW Unhedged</th><th>Fixed 50%</th><th>Dynamic</th></tr></thead>
          <tbody>{years.map((year) => (
            <tr key={year}>
              <th scope="row">{year}</th>
              {FX_SERIES.map((id) => {
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

function FxRecentMonthlyTable({ rows }: { rows: PdsPublicFxPerformancePoint[] }) {
  const months = [...new Set(rows.map((r) => r.holdingMonth))].sort().reverse().slice(0,24);
  const byKey = new Map(rows.map((r) => [`${r.holdingMonth}|${r.seriesId}`, r]));
  return (
    <div className="pds-history-card">
      <div className="pds-history-head">
        <div><span className="pds-panel-kicker">FX monthly history</span><h3>Recent 24 completed holding months</h3></div>
        <small>Current FX state is not included.</small>
      </div>
      <div className="evidence-table-wrap">
        <table className="evidence-table pds-history-table">
          <thead><tr><th>Holding month</th><th>USD</th><th>KRW Unhedged</th><th>Fixed 50%</th><th>Dynamic</th></tr></thead>
          <tbody>{months.map((month) => (
            <tr key={month}>
              <th scope="row">{month}</th>
              {FX_SERIES.map((id) => {
                const r = byKey.get(`${month}|${id}`);
                return <td className={returnClass(r?.netReturn)} key={id}>{r ? pct(r.netReturn) : "—"}</td>;
              })}
            </tr>
          ))}</tbody>
        </table>
      </div>
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
    <main className="pds-dashboard-page">
      <section className="pds-dashboard-top">
        <div className="shell">
          <div className="pds-dashboard-title-row">
            <div>
              <div className="paper-track-row">
                <div className="eyebrow">SlackQuant Systems</div>
                <span className="track-chip">PDS Public Dashboard</span>
              </div>
              <h1>Portfolio Decision System</h1>
              <p className="pds-dashboard-subtitle">Delayed portfolio evidence, with current decisions protected.</p>
              <p className="pds-dashboard-summary">
                Source-owned historical PDS evidence is released only after the applicable holding period closes.
                Current targets, provider weights, Preview, Forward Shadow, current marks, and current FX state remain private.
              </p>
            </div>
            <div className="pds-dashboard-actions">
              <Link href="/systems/pds/" className="btn soft">System Architecture</Link>
              <a href="#boundary" className="btn soft">Disclosure</a>
            </div>
          </div>

          <div className="pds-state-grid">
            <div><span>Latest released signal</span><strong>{snapshot.latestReleasedSignalPeriod}</strong></div>
            <div><span>Completed holding month</span><strong>{snapshot.completedHoldingMonthCutoff}</strong></div>
            <div><span>Public snapshot</span><strong>{snapshot.publicAsOfDate}</strong></div>
            <div className="protected"><span>Current state</span><strong>Protected</strong></div>
          </div>
        </div>
      </section>

      <div className="shell pds-dashboard-body">
        <section className="pds-dashboard-section" id="performance">
          <div className="pds-section-heading">
            <div><span className="pds-section-kicker">Core Performance</span><h2>Historical portfolio evidence</h2></div>
            {pdsSummary ? <span className="pds-section-period">{pdsSummary.startHoldingMonth} → {pdsSummary.endHoldingMonth}</span> : null}
          </div>
          <p className="pds-section-note">
            Performance is indexed by realized holding month; the originating signal period remains available as provenance.
          </p>
          {pdsSummary ? <MetricStrip s={pdsSummary} /> : null}
          <div className="pds-two-col">
            <PdsWealthChart rows={core} />
            <PdsDrawdownChart rows={core} />
          </div>
          <ProviderContext summaries={coreSummary} />
          <div className="pds-history-grid">
            <CoreAnnualTable rows={coreCalendar} />
            <PdsMonthlyMatrix rows={core} />
          </div>
        </section>

        <section className="pds-dashboard-section" id="fx">
          <div className="pds-section-heading">
            <div><span className="pds-section-kicker">FX Overlay Evidence</span><h2>Historical Operational Spot Sensitivity</h2></div>
            <span className="track-chip">Delayed · non-canonical</span>
          </div>
          <p className="pds-section-note">
            Historical USD, KRW-unhedged, fixed-hedge, and dynamic-hedge sensitivity is shown under the source-owned PDS diagnostic contract.
            This is not an executable forward/NDF replication and does not expose the current FX state.
          </p>
          <FxCards rows={fxSummary} />
          <div className="pds-two-col pds-fx-grid">
            <FxWealthChart rows={fx} />
            <HedgeChart rows={hedge} />
          </div>
          <div className="pds-history-grid">
            <FxAnnualTable rows={fxCalendar} />
            <FxRecentMonthlyTable rows={fx} />
          </div>
        </section>

        <section className="pds-dashboard-section pds-bottom-grid">
          <div className="pds-bottom-main">
            <div className="pds-section-heading compact">
              <div><span className="pds-section-kicker">Released Portfolio State</span><h2>Latest historical configuration</h2></div>
              <Link href="/systems/pds/#portfolio" className="section-link strong-link">Decision architecture →</Link>
            </div>
            <p className="pds-section-note">
              One delayed configuration produced by PDS after the holding month completed; it is not the permanent definition of the system.
            </p>
            {snapshot.latestStrategyWeights ? (
              <div className="pds-allocation-strip">
                <div><span>ADAA</span><strong>{pct(snapshot.latestStrategyWeights.adaaWeight)}</strong></div>
                <div><span>F2R</span><strong>{pct(snapshot.latestStrategyWeights.f2rWeight)}</strong></div>
                <div><span>Signal</span><strong>{snapshot.latestStrategyWeights.signalPeriod}</strong></div>
                <div><span>Holding</span><strong>{snapshot.latestStrategyWeights.holdingMonth}</strong></div>
              </div>
            ) : null}
            <div className="evidence-table-wrap pds-asset-table" role="region" aria-label="Latest released PDS asset targets" tabIndex={0}>
              <table className="evidence-table pds-public-table">
                <thead><tr><th>Asset</th><th>Target</th><th>Asset</th><th>Target</th></tr></thead>
                <tbody>
                  {Array.from({ length: Math.ceil(snapshot.latestAssetTargets.length / 2) }).map((_, i) => {
                    const a = snapshot.latestAssetTargets[i];
                    const b = snapshot.latestAssetTargets[i + Math.ceil(snapshot.latestAssetTargets.length / 2)];
                    return (
                      <tr key={a?.ticker ?? i}>
                        <th scope="row">{a?.ticker ?? ""}</th><td>{a ? pct(a.targetWeight) : ""}</td>
                        <th scope="row">{b?.ticker ?? ""}</th><td>{b ? pct(b.targetWeight) : ""}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="pds-boundary-card" id="boundary">
            <span className="pds-section-kicker">Disclosure Boundary</span>
            <h2>Public history is not a live portfolio feed.</h2>
            <div className="pds-boundary-block public">
              <span>Public / delayed</span>
              <p>Architecture, released historical targets, historical Core performance, and delayed historical FX sensitivity.</p>
            </div>
            <div className="pds-boundary-block private">
              <span>Protected</span>
              <p>Current target, provider weights, intramonth Preview, Forward Shadow, current mark, current FX state, and operator diagnostics.</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
