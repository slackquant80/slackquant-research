import type { LiveEvidencePoint } from "@/lib/liveSystemEvidence";

type Props = {
  points: LiveEvidencePoint[];
  primaryLabel: string;
  benchmarkLabel?: string;
  title?: string;
  subtitle?: string;
};

function fmtDate(value: string) {
  const [y, m] = value.split("-");
  return y && m ? `${y}-${m}` : value;
}

export function LivePerformanceChart({ points, primaryLabel, benchmarkLabel, title = "Cumulative Performance", subtitle }: Props) {
  if (points.length < 2) return null;
  const width = 860;
  const height = 330;
  const left = 58;
  const right = 24;
  const top = 26;
  const bottom = 44;
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const all = points.flatMap((p) => [p.primary, ...(typeof p.benchmark === "number" ? [p.benchmark] : [])]);
  const min = Math.min(...all, 1);
  const max = Math.max(...all, 1);
  const pad = Math.max((max - min) * 0.08, 0.05);
  const yMin = Math.max(0, min - pad);
  const yMax = max + pad;
  const x = (i: number) => left + (i / Math.max(1, points.length - 1)) * plotW;
  const y = (v: number) => top + (1 - (v - yMin) / Math.max(1e-9, yMax - yMin)) * plotH;
  const pathFor = (key: "primary" | "benchmark") => {
    const rows = points.filter((p) => typeof p[key] === "number");
    return rows.map((p, idx) => {
      const originalIndex = points.indexOf(p);
      return `${idx === 0 ? "M" : "L"}${x(originalIndex).toFixed(2)},${y(Number(p[key])).toFixed(2)}`;
    }).join(" ");
  };
  const ticks = Array.from({ length: 5 }, (_, i) => yMin + ((yMax - yMin) * i) / 4);
  const dateTicks = [0, Math.floor((points.length - 1) / 2), points.length - 1];

  return (
    <figure className="live-performance-figure">
      <figcaption className="live-performance-head">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <div className="live-performance-legend" aria-label="Chart legend">
          <span><i className="live-series-swatch primary" />{primaryLabel}</span>
          {benchmarkLabel && points.some((p) => typeof p.benchmark === "number") ? <span><i className="live-series-swatch benchmark" />{benchmarkLabel}</span> : null}
        </div>
      </figcaption>
      <div className="live-performance-scroll" role="region" aria-label={`${title} chart`} tabIndex={0}>
        <svg className="live-performance-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${primaryLabel} cumulative wealth chart`}>
          {ticks.map((tick) => (
            <g key={tick}>
              <line className="live-chart-grid" x1={left} x2={width - right} y1={y(tick)} y2={y(tick)} />
              <text className="live-chart-axis" x={left - 8} y={y(tick) + 4} textAnchor="end">{tick.toFixed(tick >= 10 ? 0 : 1)}x</text>
            </g>
          ))}
          <path className="live-chart-line primary" d={pathFor("primary")} />
          {points.some((p) => typeof p.benchmark === "number") ? <path className="live-chart-line benchmark" d={pathFor("benchmark")} /> : null}
          {dateTicks.map((idx) => <text key={idx} className="live-chart-date" x={x(idx)} y={height - 15} textAnchor={idx === 0 ? "start" : idx === points.length - 1 ? "end" : "middle"}>{fmtDate(points[idx].date)}</text>)}
        </svg>
      </div>
    </figure>
  );
}
