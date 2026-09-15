from __future__ import annotations
from datetime import date
from typing import NamedTuple

class TimedValue(NamedTuple):
    name: str
    period: date
    available_at: date


def audit_request(forecast_origin: date, context: list[TimedValue], future_covariates: list[TimedValue]):
    problems = []
    for item in context:
        if item.available_at > forecast_origin:
            problems.append(f"context unavailable: {item.name}")
    for item in future_covariates:
        if item.available_at > forecast_origin:
            problems.append(f"future covariate unavailable: {item.name}")
    return problems


def run_demo():
    origin = date(2026, 8, 31)
    context = [
        TimedValue("price_history", date(2026, 8, 31), date(2026, 8, 31)),
        TimedValue("calendar_month", date(2026, 9, 30), date(2020, 1, 1)),
    ]
    future = [
        TimedValue("calendar_month", date(2026, 9, 30), date(2020, 1, 1)),
        TimedValue("future_realized_macro", date(2026, 9, 30), date(2026, 10, 5)),
    ]
    return audit_request(origin, context, future)


if __name__ == "__main__":
    problems = run_demo()
    print("audit issues:", problems)
