"use client";

import { useEffect, useState } from "react";

type Holding = { asset: string; rank: number; target_weight: number };
type History = { month: string; holding_month: string; execution_date: string; rank1: string; rank2: string; rank3: string; rank4: string; changes: number };
type Point = { date: string; growth?: number; drawdown?: number };
type State = {
  schema_version: string; issued_at_display: string;
  system: { universe: string[]; architecture_note: string; execution_note: string };
  live_state: {
    official: { signal_period: string; holding_month: string; holdings: Holding[] };
    preview: { available: boolean; signal_period: string | null; prospective_holding_month: string | null; market_cutoff_date: string | null; holdings: Holding[]; state_note: string };
    current_mtd: { available: boolean; as_of_date: string | null; mtd_return: number | null; state_note: string };
  };
  completed_performance: {
    as_of_date: string; support_start: string; support_end: string;
    metrics: { cagr: number; ann_vol: number; sharpe_rf0: number; max_drawdown: number; terminal_wealth: number; months: number };
    growth_series: Point[]; drawdown_series: Point[];
    monthly_returns: { month: string; return: number }[];
    annual_returns: { period: string; return: number }[];
    performance_note: string;
  };
  historical_targets: { full_history: History[]; history_note: string };
  benchmark_comparison: { summary: { series: string; cagr: number; ann_vol: number; sharpe_rf0: number; max_drawdown: number; cumulative_return: number }[] };
};

const percent = (v: number | null | undefined, digits = 2) => v == null || !Number.isFinite(v) ? "—" : (100 * v).toFixed(digits) + "%";
const number = (v: number | null | undefined, digits = 2) => v == null || !Number.isFinite(v) ? "—" : v.toFixed(digits);
const tabs = ["Current Portfolio", "Performance", "Portfolio History", "System"] as const;

function LineChart({ points, field, label, percentAxis = false }: { points: Point[]; field: "growth" | "drawdown"; label: string; percentAxis?: boolean }) {
  const vals = points.map(p => p[field]).filter((v): v is number => typeof v === "number" && Number.isFinite(v));
  if (vals.length < 2) return <p>No completed chart evidence available.</p>;
  const lo = Math.min(...vals), hi = Math.max(...vals);
  const range = hi - lo || 1, w = 900, h = 244, pad = 24;
  const line = vals.map((v, i) => `${i === 0 ? "M" : "L"}${(pad + i * (w - 2 * pad) / (vals.length - 1)).toFixed(1)},${(h - pad - (v - lo) * (h - 2 * pad) / range).toFixed(1)}`).join(" ");
  const fmt = (v: number) => percentAxis ? percent(v, 1) : number(v, 2) + "×";
  return <div className="f2r-chart"><div className="f2r-panel-title">{label}</div><svg viewBox="0 0 900 244" role="img" aria-label={label} preserveAspectRatio="none">
    {[0, 0.25, 0.5, 0.75, 1].map(t => <line key={t} x1={pad} x2={w-pad} y1={pad+t*(h-2*pad)} y2={pad+t*(h-2*pad)} stroke="#243543" strokeWidth="1" />)}
    <path d={line} fill="none" stroke={field === "growth" ? "#52bddf" : "#e0aa58"} strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
  </svg><div className="f2r-chart-axis"><span>{points[0]?.date} · {fmt(lo)}</span><span>{points[points.length-1]?.date} · {fmt(hi)}</span></div></div>;
}

function Holdings({ title, holdings, preview, note }: { title: string; holdings: Holding[]; preview?: boolean; note: string }) {
  return <div className={`f2r-panel ${preview ? "f2r-preview" : "f2r-official"}`}><div className="f2r-panel-title">{title}</div>
    {holdings.length ? <div className="f2r-holdings">{holdings.map(h => <div className="f2r-holding" key={h.asset}><span>RANK {h.rank}</span><strong>{h.asset}</strong><span>{percent(h.target_weight, 0)} target</span></div>)}</div> : <p className="f2r-muted">Not available in the published snapshot.</p>}
    <p className="f2r-muted">{note}</p></div>;
}

export function F2RStaticDashboard() {
  const [state, setState] = useState<State | null>(null);
  const [dataSource, setDataSource] = useState<"source" | "backup" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<(typeof tabs)[number]>("Current Portfolio");
  useEffect(() => {
    let active = true;
    const remoteController = new AbortController();
    const timeout = setTimeout(() => remoteController.abort(), 6000);
    // F2R's already-reviewed PUBLIC main is the source-owned data authority.
    // The bundled SlackQuant file is a visible FALLBACK, not a competing source.
    const source = "https://raw.githubusercontent.com/slackquant80/f2r-forecast-to-rank-allocation/main/src/dashboard/public_data/f2r_public_state.json";
    const backup = "/data/systems/f2r/public_state.json";
    const check = (d: State): State => {
      if (d.schema_version !== "2.0" || !d.live_state?.official?.holdings || !d.completed_performance?.growth_series || !d.issued_at_display) throw Error("Unexpected public snapshot schema");
      const holdings = d.live_state.official.holdings;
      const sum = holdings.reduce((a, h) => a + h.target_weight, 0);
      if (holdings.length !== 4 || new Set(holdings.map(h => h.asset)).size !== 4 || !Number.isFinite(sum) || Math.abs(sum - 1) > 1e-6) throw Error("Invalid public portfolio weights");
      return d;
    };
    const load = async (url: string, signal?: AbortSignal): Promise<State> => {
      const response = await fetch(url, { signal, cache: "no-store" });
      if (!response.ok) throw Error("Public snapshot unavailable");
      return check(await response.json() as State);
    };
    (async () => {
      try {
        const current = await load(source, remoteController.signal);
        if (active) { setState(current); setDataSource("source"); }
      } catch {
        if (!active) return;
        try {
          const bundled = await load(backup);
          if (active) { setState(bundled); setDataSource("backup"); }
        } catch (error) {
          if (active) setError(error instanceof Error ? error.message : "Public snapshot unavailable");
        }
      } finally {
        clearTimeout(timeout);
      }
    })();
    return () => { active = false; remoteController.abort(); clearTimeout(timeout); };
  }, []);
  const officialSignal = () => state?.live_state.official.signal_period || "";
  const exportCsv = () => {
    if (!state) return;
    const escape = (x: string) => '"' + x.replace(/"/g, '""') + '"';
    const u = state.system.universe;
    const rows = state.historical_targets.full_history.map(r => [r.month, r.holding_month, r.execution_date, "HISTORY", ...u.map(t => [r.rank1,r.rank2,r.rank3,r.rank4].includes(t) ? "0.25" : "0")].map(escape).join(","));
    rows.push([officialSignal(), state.live_state.official.holding_month, "", "OFFICIAL", ...u.map(t => state.live_state.official.holdings.some(h => h.asset === t) ? "0.25" : "0")].map(escape).join(","));
    if (state.live_state.preview.available) rows.push([state.live_state.preview.signal_period || "", state.live_state.preview.prospective_holding_month || "", "", "PREVIEW", ...u.map(t => state.live_state.preview.holdings.some(h => h.asset === t) ? "0.25" : "0")].map(escape).join(","));
    const csv = [["Signal Month","Holding Month","Execution Date","Status",...u].map(escape).join(","), ...rows].join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a"); a.href=url; a.download="F2R_Target_History_11ETF.csv"; a.click(); URL.revokeObjectURL(url);
  };
  if (error) return <main className="f2r-static"><div className="f2r-wrap"><h1>F2R · Forecast-to-Rank Allocation</h1><p role="alert">The validated public snapshot could not be displayed: {error}.</p><a href="/systems/f2r/">Return to system overview</a></div><style>{styles}</style></main>;
  if (!state) return <main className="f2r-static"><div className="f2r-wrap"><h1>F2R · Forecast-to-Rank Allocation</h1><p>Loading verified public snapshot…</p></div><style>{styles}</style></main>;
  const { official, preview, current_mtd: mtd } = state.live_state;
  const perf = state.completed_performance;
  // Each open-month field can be published independently by the source.
  const metrics = [["CAGR", percent(perf.metrics.cagr)], ["Annualized Volatility", percent(perf.metrics.ann_vol)], ["Sharpe (Rf=0)", number(perf.metrics.sharpe_rf0)], ["Maximum Drawdown", percent(perf.metrics.max_drawdown)], ["Terminal Wealth", number(perf.metrics.terminal_wealth)+"×"], ["Completed Months", String(perf.metrics.months)]];
  return <main className="f2r-static"><style>{styles}</style><div className="f2r-wrap">
    <header className="f2r-head"><a className="f2r-back" href="/systems/f2r/">← SlackQuant Research / F2R</a><span className="f2r-status">CURRENT MODEL · PUBLIC</span></header>
    <section className="f2r-hero"><div className="f2r-kicker">PORTFOLIO STRATEGY SYSTEM</div><h1>Forecast-to-Rank Allocation</h1><p>Independent machine-learning and pretrained time-series forecasts combined through a rank-based monthly Top-4 portfolio decision.</p><div className="f2r-issued">{dataSource === "backup" ? "Bundled backup snapshot · source feed unavailable" : "F2R public source snapshot"} · {state.issued_at_display}</div></section>
    {(!mtd.available || !preview.available) && <div className="f2r-freshness" role="status"><strong>Open-month data not fully published.</strong><span> Latest source release: {state.issued_at_display}. Official targets for holding {official.holding_month} are available. {!mtd.available ? "Current MTD is not published. " : ""}{!preview.available ? "Preview is not published. " : ""}Unavailable fields are not zero values. The viewer displays only validated source-owned data.</span></div>}
    <section className="f2r-summary">
      <div><small>OFFICIAL SIGNAL</small><strong>{official.signal_period}</strong></div>
      <div><small>CURRENT HOLDING</small><strong>{official.holding_month}</strong></div>
      <div className={!mtd.available ? "f2r-pending" : ""}><small>CURRENT MTD</small><strong>{mtd.available ? percent(mtd.mtd_return) : "Pending source"}</strong></div>
      <div className={!preview.available ? "f2r-pending" : ""}><small>PREVIEW SIGNAL</small><strong>{preview.available ? preview.signal_period : "Pending source"}</strong></div>
      <div><small>COMPLETED THROUGH</small><strong>{perf.as_of_date}</strong></div>
    </section>
    <nav className="f2r-tabs" aria-label="Dashboard sections">{tabs.map(t => <button type="button" key={t} aria-current={active === t ? "page" : undefined} onClick={() => setActive(t)}>{t}</button>)}</nav>
    {active === "Current Portfolio" && <section className="f2r-current-section">
      <div className="f2r-section-heading"><div><div className="f2r-kicker">OFFICIAL MONTHLY DECISION</div><h2>Current model portfolio</h2><p className="f2r-muted">Signal {official.signal_period} → holding {official.holding_month} · Four equally weighted ETFs</p></div><span className="f2r-decision-label">OFFICIAL · 100% TARGET</span></div>
      <div className="f2r-primary-holdings"><Holdings title="Official portfolio" holdings={official.holdings} note="Approved target for the current holding month. The weights shown are targets, not live investment-account holdings." /></div>
      <div className="f2r-secondary-status">
        <section className="f2r-status-item"><div className="f2r-status-top"><strong>Current MTD</strong><span>{mtd.available ? "MARKED" : "SOURCE NOT PUBLISHED"}</span></div>
          {mtd.available ? <p className="f2r-status-value">{percent(mtd.mtd_return)} <small>through {mtd.as_of_date}</small></p> : <p className="f2r-muted">No open-month return is included in the latest approved F2R public state. This does not represent a zero return.</p>}
        </section>
        <section className="f2r-status-item f2r-status-preview"><div className="f2r-status-top"><strong>Intramonth Preview</strong><span>{preview.available ? "PROVISIONAL" : "SOURCE NOT PUBLISHED"}</span></div>
          {preview.available ? <Holdings title={`Signal ${preview.signal_period} · prospective holding ${preview.prospective_holding_month}`} holdings={preview.holdings} preview note="Provisional only · not executed and excluded from completed performance." /> : <p className="f2r-muted">No provisional target was included in this release. Preview must come from the source-owned F2R calculation, not a viewer-side approximation.</p>}
        </section>
      </div>
      <p className="f2r-boundary">Completed performance ends {perf.as_of_date}; current Official, open-month MTD, and Preview use separate clocks. The static viewer never computes or substitutes these values.</p>
    </section>}
    {active === "Performance" && <section><h2>Completed current-model performance</h2><p className="f2r-muted">{perf.support_start} → {perf.support_end}. Current MTD and Preview excluded.</p><div className="f2r-metrics">{metrics.map(([label,value]) => <div className="f2r-metric" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div><LineChart points={perf.growth_series} field="growth" label="Daily cumulative wealth · net" /><LineChart points={perf.drawdown_series} field="drawdown" label="Daily drawdown" percentAxis /><div className="f2r-panel"><div className="f2r-panel-title">Reference portfolio comparison</div><div className="f2r-table"><table><thead><tr><th>Portfolio</th><th>CAGR</th><th>Volatility</th><th>Sharpe</th><th>MDD</th></tr></thead><tbody>{(state.benchmark_comparison?.summary || []).map(r=><tr key={r.series}><td>{r.series}</td><td>{percent(r.cagr)}</td><td>{percent(r.ann_vol)}</td><td>{number(r.sharpe_rf0)}</td><td>{percent(r.max_drawdown)}</td></tr>)}</tbody></table></div></div><div className="f2r-panel"><div className="f2r-panel-title">Recent completed monthly returns</div><div className="f2r-table"><table><thead><tr><th>Month</th><th>Net Return</th></tr></thead><tbody>{perf.monthly_returns.slice(-24).reverse().map(r => <tr key={r.month}><td>{r.month}</td><td>{percent(r.return)}</td></tr>)}</tbody></table></div></div><p className="f2r-muted">{perf.performance_note}</p></section>}
    {active === "Portfolio History" && <section><div className="f2r-title-row"><div><h2>Completed target history</h2><p className="f2r-muted">Historical rank order · 25% target per selected asset</p></div><button className="f2r-export" onClick={exportCsv}>Export CSV</button></div><div className="f2r-table"><table><thead><tr><th>Signal</th><th>Holding</th><th>Execution</th><th>Rank 1</th><th>Rank 2</th><th>Rank 3</th><th>Rank 4</th></tr></thead><tbody>{[...state.historical_targets.full_history].reverse().map((r,i)=><tr key={r.month+i}><td>{r.month}</td><td>{r.holding_month}</td><td>{r.execution_date}</td><td>{r.rank1}</td><td>{r.rank2}</td><td>{r.rank3}</td><td>{r.rank4}</td></tr>)}</tbody></table></div><p className="f2r-muted">CSV includes the 11-ETF target matrix for completed history and current Official/available Preview, with 0.25 target weights per selected ETF. Current rows are excluded from completed performance.</p><p className="f2r-muted">{state.historical_targets.history_note}</p></section>}
    {active === "System" && <section><h2>Architecture & operating boundary</h2><div className="f2r-split"><div className="f2r-panel"><div className="f2r-panel-title">Forecast → Rank → Allocate</div><p>{state.system.architecture_note}</p><p>Monthly Top-4, equal-weight portfolio. Public universe: {state.system.universe.join(", ")}.</p></div><div className="f2r-panel"><div className="f2r-panel-title">Timing & accounting</div><p>{state.system.execution_note}</p><p>Completed history and provisional current views are explicitly separated.</p></div></div><a href="/systems/f2r/">System documentation and related research →</a></section>}
    <footer className="f2r-footer">F2R is a model portfolio, not a brokerage-account record. The source-owned F2R calculation and release process remain independent of this static viewer.</footer>
  </div></main>;
}

const styles = `
.f2r-static{min-height:100vh;background:#0a121a;color:#eef4f6;font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;padding:0 20px 50px}
.f2r-static *{box-sizing:border-box}.f2r-static a{color:#79cde7;text-decoration:none}.f2r-wrap{max-width:1380px;margin:auto}
.f2r-head{padding:20px 0;display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid #24313d}.f2r-back{font-size:13px}.f2r-status{font-size:11px;border:1px solid #315941;color:#9bd6ac;border-radius:20px;padding:6px 10px;white-space:nowrap}
.f2r-hero{padding:36px 0 24px}.f2r-kicker{letter-spacing:.15em;font-size:11px;color:#8ba2b3;font-weight:700}.f2r-hero h1{font:700 clamp(28px,4vw,54px)/1.12 Georgia,serif;margin:10px 0}.f2r-hero p{max-width:850px;line-height:1.7;color:#abbac5}.f2r-issued,.f2r-muted,.f2r-footer{color:#91a1ad;font-size:13px;line-height:1.65}
.f2r-summary{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.f2r-summary>div,.f2r-metric,.f2r-panel,.f2r-chart{background:#101d28;border:1px solid #273b4a;border-radius:10px;padding:18px}.f2r-summary small,.f2r-metric small{display:block;font-size:10px;letter-spacing:.09em;color:#91a6b6}.f2r-summary strong,.f2r-metric strong{display:block;font-size:20px;margin-top:9px;overflow-wrap:anywhere}
.f2r-tabs{display:flex;gap:10px;overflow:auto;border-bottom:1px solid #293b49;margin:30px 0 25px}.f2r-tabs button{background:transparent;color:#adbdc9;padding:14px;border:0;border-bottom:3px solid transparent;white-space:nowrap;cursor:pointer}.f2r-tabs button[aria-current=page]{color:#6bc6e6;border-bottom-color:#6bc6e6}
.f2r-static h2{font-size:23px;font-weight:650;margin:12px 0}/* Standalone successive result cards; grids retain their own gap. */
.f2r-static section > .f2r-panel + .f2r-panel{margin-top:14px}
@media(max-width:560px){.f2r-static section > .f2r-panel + .f2r-panel{margin-top:12px}}
.f2r-panel-title{font-size:16px;font-weight:700;margin:0 0 16px}.f2r-split{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:22px 0}.f2r-official{border-top:3px solid #48badf}.f2r-preview{border-top:3px solid #d8a54b}.f2r-holdings{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}.f2r-holding{padding:15px 10px;border:1px solid #324656;border-radius:8px;text-align:center}.f2r-holding span{display:block;font-size:11px;color:#a3b5c1}.f2r-holding strong{display:block;font-size:22px;margin:8px 0}.f2r-panel p{line-height:1.7}
.f2r-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.f2r-chart{margin:15px 0}.f2r-chart svg{display:block;width:100%;height:250px}.f2r-chart-axis{display:flex;justify-content:space-between;font-size:12px;color:#92a5b4}.f2r-table{overflow:auto;max-height:580px;border:1px solid #324656;border-radius:8px;margin:15px 0}.f2r-table table{width:100%;border-collapse:collapse;font-size:13px}.f2r-table th,.f2r-table td{padding:12px 14px;white-space:nowrap;text-align:left;border-bottom:1px solid #263b49}.f2r-table th{position:sticky;top:0;background:#183041;color:#c5d8e5}.f2r-title-row{display:flex;justify-content:space-between;gap:20px;align-items:center}.f2r-export{color:#deeff6;border:1px solid #51778b;background:#173242;padding:11px 16px;border-radius:7px;cursor:pointer}.f2r-footer{border-top:1px solid #273a49;margin-top:48px;padding-top:20px}
@media(max-width:950px){.f2r-summary{grid-template-columns:repeat(2,minmax(0,1fr))}.f2r-split{grid-template-columns:1fr}.f2r-holdings{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.f2r-static{padding:0 12px 35px}.f2r-summary{grid-template-columns:1fr 1fr}.f2r-metrics{grid-template-columns:repeat(2,1fr)}.f2r-summary strong{font-size:15px}.f2r-head{align-items:center}.f2r-status{font-size:9px}.f2r-hero{padding-top:22px}}
/* F2R public-state readability: compact shell, authoritative targets first, 
   missing source states never rendered as empty full-height portfolios. */
.f2r-static{padding-bottom:36px;background:#0a1219}
.f2r-wrap{max-width:1200px}
.f2r-head{padding:17px 0;border-color:#213440}
.f2r-hero{padding:23px 0 19px}
.f2r-hero h1{font-size:clamp(29px,3vw,43px);margin:8px 0 9px;letter-spacing:-.035em}
.f2r-hero p{max-width:900px;margin:0 0 8px;font-size:14px;line-height:1.55}
.f2r-issued{font-size:12px}
.f2r-summary{gap:9px;margin-top:14px}
.f2r-summary>div{padding:13px 14px;border-radius:9px;background:#101f2b}
.f2r-summary strong{font-size:17px;margin-top:6px}
.f2r-summary .f2r-pending{background:#1c2228;border-color:#594b32}
.f2r-summary .f2r-pending strong{font-size:13px;color:#e4c996}
.f2r-freshness{margin:10px 0 10px;padding:11px 15px;background:#241e19;border:1px solid #645036;border-radius:8px;color:#c8b7a0;font-size:12px;line-height:1.55}
.f2r-freshness strong{color:#f1d7ad;margin-right:5px}
.f2r-tabs{margin:22px 0 21px;gap:5px}
.f2r-tabs button{padding:11px 15px;font-size:13px}
.f2r-current-section h2{margin:5px 0 4px;font-size:24px}
.f2r-section-heading{display:flex;justify-content:space-between;align-items:center;gap:16px}
.f2r-decision-label{font-size:10px;border:1px solid #275a70;color:#8bd6f0;background:#0b2935;padding:8px 11px;border-radius:999px;white-space:nowrap}
.f2r-primary-holdings{margin:17px 0}
.f2r-primary-holdings>.f2r-panel{padding:19px 20px;background:#0f2130}
.f2r-primary-holdings .f2r-holdings{gap:12px}
.f2r-primary-holdings .f2r-holding{padding:15px;border:1px solid #375063;background:#0c1925}
.f2r-primary-holdings .f2r-holding strong{font-size:25px}
.f2r-secondary-status{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin:15px 0}
.f2r-status-item{border:1px solid #30414b;background:#101c26;border-radius:9px;padding:17px 19px;min-height:115px}
.f2r-status-top{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px}
.f2r-status-top span{font-size:9px;letter-spacing:.06em;color:#e0bd85}
.f2r-status-preview{border-left:3px solid #bd9148}
.f2r-status-value{font-size:23px;font-weight:700;margin:12px 0}.f2r-status-value small{font-size:12px;color:#99acbb;font-weight:400}
.f2r-boundary{border-top:1px solid #293c48;margin-top:20px;padding-top:14px;color:#8ea1ae;font-size:12px;line-height:1.65}
.f2r-secondary-status .f2r-panel{margin-top:12px;padding:10px}
.f2r-secondary-status .f2r-holdings{grid-template-columns:repeat(4,minmax(0,1fr))}
@media(max-width:850px){.f2r-summary{grid-template-columns:repeat(3,minmax(0,1fr))}.f2r-secondary-status{grid-template-columns:1fr}.f2r-section-heading{align-items:flex-start;flex-direction:column;gap:6px}}
@media(max-width:550px){.f2r-summary{grid-template-columns:repeat(2,minmax(0,1fr))}.f2r-summary>div{padding:12px}.f2r-section-heading h2{font-size:22px}.f2r-primary-holdings .f2r-holdings{grid-template-columns:repeat(2,minmax(0,1fr))}.f2r-freshness{font-size:11px}.f2r-hero h1{font-size:29px}.f2r-static{padding-inline:12px}}

`;
