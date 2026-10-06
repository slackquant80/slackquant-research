type MonthlyReturnRow = {
  month: string;
  primary: number;
  benchmark?: number;
};

type Props = {
  rows: MonthlyReturnRow[];
  primaryLabel: string;
  benchmarkLabel?: string;
  title?: string;
  subtitle?: string;
};

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function compactMonth(period: string) {
  const [year, month] = period.split("-");
  const index = Number(month) - 1;
  if (!year || index < 0 || index >= MONTH_LABELS.length) return period;
  return `${MONTH_LABELS[index]} '${year.slice(-2)}`;
}

export function LiveMonthlyReturnsChart({ rows, primaryLabel, benchmarkLabel, title = "Recent Completed Monthly Returns", subtitle }: Props) {
  if (!rows.length) return null;
  const width = 820;
  const height = 310;
  const left = 52;
  const right = 18;
  const top = 24;
  const bottom = 48;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const zeroY = top + plotHeight / 2;
  const halfHeight = plotHeight / 2;
  const values = rows.flatMap((row) => [Math.abs(row.primary * 100), ...(typeof row.benchmark === "number" ? [Math.abs(row.benchmark * 100)] : [])]);
  const maxObservedPct = Math.max(...values, 0);
  const axisMaxPct = Math.max(5, Math.ceil(maxObservedPct / 5) * 5);
  const groupWidth = plotWidth / rows.length;
  const hasBenchmark = Boolean(benchmarkLabel && rows.some((row) => typeof row.benchmark === "number"));
  const barWidth = Math.min(17, groupWidth * (hasBenchmark ? 0.28 : 0.42));
  const gap = 3;
  const ticks = [axisMaxPct, axisMaxPct / 2, 0, -axisMaxPct / 2, -axisMaxPct];
  const yForTick = (tick: number) => zeroY - (tick / axisMaxPct) * halfHeight;
  const barGeometry = (value: number) => {
    const pctValue = value * 100;
    const h = Math.max(1, (Math.abs(pctValue) / axisMaxPct) * halfHeight);
    return { pctValue, height: h, y: pctValue >= 0 ? zeroY - h : zeroY };
  };

  return (
    <figure className="live-monthly-figure">
      <figcaption className="live-monthly-head">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <div className="live-monthly-legend" aria-label="Chart legend">
          <span><i className="live-monthly-swatch primary" />{primaryLabel}</span>
          {hasBenchmark ? <span><i className="live-monthly-swatch benchmark" />{benchmarkLabel}</span> : null}
        </div>
      </figcaption>
      <div className="live-monthly-scroll" role="region" aria-label={`${title} chart`} tabIndex={0}>
        <svg className="live-monthly-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${title}: ${primaryLabel}${hasBenchmark ? ` and ${benchmarkLabel}` : ""}`}>
          {ticks.map((tick) => (
            <g key={tick}>
              <line className={tick === 0 ? "live-monthly-zero" : "live-monthly-grid"} x1={left} x2={width - right} y1={yForTick(tick)} y2={yForTick(tick)} />
              <text className="live-monthly-axis" x={left - 8} y={yForTick(tick) + 4} textAnchor="end">{tick.toFixed(tick % 1 ? 1 : 0)}%</text>
            </g>
          ))}
          {rows.map((row, index) => {
            const center = left + groupWidth * (index + 0.5);
            const primary = barGeometry(row.primary);
            const benchmark = typeof row.benchmark === "number" ? barGeometry(row.benchmark) : null;
            const primaryX = hasBenchmark ? center - barWidth - gap / 2 : center - barWidth / 2;
            return (
              <g key={row.month}>
                <rect className="live-monthly-bar primary" x={primaryX} y={primary.y} width={barWidth} height={primary.height} rx={1.5}>
                  <title>{`${row.month} · ${primaryLabel}: ${primary.pctValue.toFixed(2)}%`}</title>
                </rect>
                {hasBenchmark && benchmark ? (
                  <rect className="live-monthly-bar benchmark" x={center + gap / 2} y={benchmark.y} width={barWidth} height={benchmark.height} rx={1.5}>
                    <title>{`${row.month} · ${benchmarkLabel}: ${benchmark.pctValue.toFixed(2)}%`}</title>
                  </rect>
                ) : null}
                <text className="live-monthly-month" x={center} y={height - 18} textAnchor="middle">{compactMonth(row.month)}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
