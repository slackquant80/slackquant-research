import fs from "node:fs";
import path from "node:path";

type DailyRow = {
  date: string;
  portfolio_return: number;
  benchmark_return: number;
};

type DashboardPayload = {
  meta?: {
    benchmark?: string;
    version?: string;
    evidenceMode?: string;
    performanceThroughCompletedDate?: string;
  };
  globalFinalDaily?: DailyRow[];
};

export type EquityAlphaEvidence = {
  cumulativePath: { date: string; primary: number; benchmark: number }[];
  recentMonthly: { month: string; primary: number; benchmark: number }[];
  supportStart: string;
  supportEnd: string;
  observations: number;
  portfolio: {
    cumulative: number;
    cagr: number;
    vol: number;
    sharpe: number;
    mdd: number;
  };
  benchmark: {
    cumulative: number;
    cagr: number;
    vol: number;
    sharpe: number;
    mdd: number;
  };
  activeReturn: number;
  trackingError: number;
  informationRatio: number;
  relativeDrawdown: number;
  sourceVersion: string;
  benchmarkLabel: string;
};

function mean(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function stdev(values: number[]) {
  if (values.length < 2) return 0;
  const m = mean(values);
  const variance = values.reduce((sum, value) => sum + (value - m) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance);
}

function maxDrawdown(wealth: number[]) {
  let peak = wealth[0] ?? 1;
  let drawdown = 0;
  for (const value of wealth) {
    peak = Math.max(peak, value);
    drawdown = Math.min(drawdown, value / peak - 1);
  }
  return drawdown;
}

function parseDashboardPayload(text: string): DashboardPayload {
  const marker = "window.EA_HISTORY_DATA";
  const markerIndex = text.indexOf(marker);
  if (markerIndex < 0) throw new Error("Equity Alpha history payload marker is missing");
  const equalsIndex = text.indexOf("=", markerIndex + marker.length);
  if (equalsIndex < 0) throw new Error("Equity Alpha history payload assignment is missing");
  let payload = text.slice(equalsIndex + 1).trim();
  if (payload.endsWith(";")) payload = payload.slice(0, -1).trim();
  return JSON.parse(payload) as DashboardPayload;
}

export function getEquityAlphaEvidence(): EquityAlphaEvidence {
  const sourcePath = path.join(
    process.cwd(),
    "public",
    "dashboards",
    "equity-alpha",
    "data",
    "dashboard_data.js",
  );
  const source = fs.readFileSync(sourcePath, "utf8");
  const payload = parseDashboardPayload(source);
  const rows = Array.isArray(payload.globalFinalDaily) ? payload.globalFinalDaily : [];
  if (rows.length < 3) throw new Error("Equity Alpha completed daily history is unavailable");

  const portfolioReturns = rows.slice(1).map((row) => Number(row.portfolio_return));
  const benchmarkReturns = rows.slice(1).map((row) => Number(row.benchmark_return));
  if (
    portfolioReturns.some((value) => !Number.isFinite(value)) ||
    benchmarkReturns.some((value) => !Number.isFinite(value))
  ) {
    throw new Error("Equity Alpha completed daily history contains non-finite returns");
  }

  const portfolioWealth = [1];
  const benchmarkWealth = [1];
  portfolioReturns.forEach((value, index) => {
    portfolioWealth.push(portfolioWealth[portfolioWealth.length - 1] * (1 + value));
    benchmarkWealth.push(benchmarkWealth[benchmarkWealth.length - 1] * (1 + benchmarkReturns[index]));
  });

  const excessReturns = portfolioReturns.map((value, index) => value - benchmarkReturns[index]);
  const observations = portfolioReturns.length;
  const years = observations / 252;
  const portfolioVol = stdev(portfolioReturns) * Math.sqrt(252);
  const benchmarkVol = stdev(benchmarkReturns) * Math.sqrt(252);
  const trackingError = stdev(excessReturns) * Math.sqrt(252);
  const activeReturn = mean(excessReturns) * 252;
  const portfolioCagr = portfolioWealth[portfolioWealth.length - 1] ** (1 / years) - 1;
  const benchmarkCagr = benchmarkWealth[benchmarkWealth.length - 1] ** (1 / years) - 1;
  const relativeWealth = portfolioWealth.map((value, index) => value / benchmarkWealth[index]);

  const monthly = new Map<string, { date: string; primary: number; benchmark: number }>();
  rows.forEach((row, index) => {
    const month = String(row.date).slice(0, 7);
    monthly.set(month, { date: String(row.date), primary: portfolioWealth[index], benchmark: benchmarkWealth[index] });
  });
  const cumulativePath = Array.from(monthly.values());

  const monthlyReturns = new Map<string, { primary: number; benchmark: number }>();
  rows.slice(1).forEach((row) => {
    const month = String(row.date).slice(0, 7);
    const current = monthlyReturns.get(month) ?? { primary: 1, benchmark: 1 };
    current.primary *= 1 + Number(row.portfolio_return);
    current.benchmark *= 1 + Number(row.benchmark_return);
    monthlyReturns.set(month, current);
  });
  const recentMonthly = Array.from(monthlyReturns.entries()).slice(-12).map(([month, value]) => ({
    month,
    primary: value.primary - 1,
    benchmark: value.benchmark - 1,
  }));

  return {
    cumulativePath,
    recentMonthly,
    supportStart: String(rows[0].date),
    supportEnd: String(rows[rows.length - 1].date),
    observations,
    portfolio: {
      cumulative: portfolioWealth[portfolioWealth.length - 1] - 1,
      cagr: portfolioCagr,
      vol: portfolioVol,
      sharpe: mean(portfolioReturns) / stdev(portfolioReturns) * Math.sqrt(252),
      mdd: maxDrawdown(portfolioWealth),
    },
    benchmark: {
      cumulative: benchmarkWealth[benchmarkWealth.length - 1] - 1,
      cagr: benchmarkCagr,
      vol: benchmarkVol,
      sharpe: mean(benchmarkReturns) / stdev(benchmarkReturns) * Math.sqrt(252),
      mdd: maxDrawdown(benchmarkWealth),
    },
    activeReturn,
    trackingError,
    informationRatio: trackingError > 0 ? activeReturn / trackingError : 0,
    relativeDrawdown: maxDrawdown(relativeWealth),
    sourceVersion: payload.meta?.version ?? "Global Equity Alpha production history",
    benchmarkLabel: payload.meta?.benchmark ?? "ACWI",
  };
}
