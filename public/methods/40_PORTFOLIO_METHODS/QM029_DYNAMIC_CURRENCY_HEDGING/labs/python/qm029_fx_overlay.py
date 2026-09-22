from datetime import date

usd_return = 0.020
fx_return = 0.030  # USD appreciation vs KRW
hedge_ratio = 0.50
hedge_cost = 0.0002

unhedged = (1 + usd_return) * (1 + fx_return) - 1
stylized_hedged = unhedged - hedge_ratio * fx_return - hedge_cost

raw_fx_dates = [date(2026,9,18), date(2026,9,21)]
common_close = date(2026,9,18)
admissible = max(d for d in raw_fx_dates if d <= common_close)
raw_latest = max(raw_fx_dates)

print('Unhedged KRW return:', round(unhedged,6))
print('Stylized 50% hedged return:', round(stylized_hedged,6))
print('Latest raw FX observation:', raw_latest)
print('Latest admissible FX observation:', admissible)
assert raw_latest > admissible
print('QM029_LAB_PASS')
