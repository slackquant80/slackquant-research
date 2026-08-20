from pathlib import Path
import csv

TOL = 1e-12
root = Path(__file__).resolve().parents[1]
with (root / 'data/qm008_wealth_path.csv').open(newline='', encoding='utf-8') as f:
    rows = [(int(r['t']), float(r['wealth'])) for r in csv.DictReader(f)]

high = -float('inf')
last_high = rows[0][0]
states = []
for t, wealth in rows:
    if wealth >= high - TOL:
        if wealth > high + TOL:
            high = wealth
        last_high = t
        dd = 0.0
        age = 0
    else:
        dd = 1.0 - wealth / high
        age = t - last_high
    states.append((t, wealth, high, dd, -dd, age))

print('t wealth hwm drawdown underwater age')
for row in states:
    print(f'{row[0]:2d} {row[1]:6.1f} {row[2]:6.1f} {row[3]:8.4f} {row[4]:10.4f} {row[5]:3d}')
print(f'maximum drawdown={max(x[3] for x in states):.6f}')
print(f'terminal censored={str(states[-1][3] > TOL).lower()}')
