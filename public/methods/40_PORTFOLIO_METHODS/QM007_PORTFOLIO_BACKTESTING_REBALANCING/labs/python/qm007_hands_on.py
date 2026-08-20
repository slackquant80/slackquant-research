from pathlib import Path
import csv


def simulate(rows, rebalance_every):
    target = [0.5, 0.5]
    weights = target.copy()
    wealth = 1.0
    output = []
    for period, r_a, r_b in rows:
        rp = weights[0] * r_a + weights[1] * r_b
        gross = 1 + rp
        wealth *= gross
        drift = [weights[0] * (1 + r_a) / gross,
                 weights[1] * (1 + r_b) / gross]
        is_rebalance = rebalance_every > 0 and period % rebalance_every == 0
        if is_rebalance:
            turnover_one_way = 0.5 * sum(abs(t - d) for t, d in zip(target, drift))
            weights = target.copy()
        else:
            turnover_one_way = 0.0
            weights = drift
        output.append((period, rp, wealth, weights[0], turnover_one_way))
    return output


root = Path(__file__).resolve().parents[1]
rows = []
with (root / 'data/qm007_two_asset_returns.csv').open(newline='', encoding='utf-8') as f:
    for row in csv.DictReader(f):
        rows.append((int(row['period']), float(row['asset_a_return']), float(row['asset_b_return'])))

for frequency in (1, 2, 0):
    label = 'every period' if frequency == 1 else ('every 2 periods' if frequency == 2 else 'buy-and-hold')
    path = simulate(rows, frequency)
    total_one_way = sum(x[4] for x in path)
    print(f'{label:>15}: terminal wealth={path[-1][2]:.6f}, cumulative one-way turnover={total_one_way:.6f}')
