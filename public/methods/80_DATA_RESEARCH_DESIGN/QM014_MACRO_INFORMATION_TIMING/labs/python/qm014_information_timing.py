from __future__ import annotations
from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass(frozen=True)
class MacroObservation:
    reference_period: str
    release_time: Optional[datetime]
    vintage_label: str
    actual_available_time: Optional[datetime]
    revision_state: str

def exact_admissibility(obs: MacroObservation, cutoff: datetime):
    if obs.actual_available_time is None:
        return 'UNRESOLVED'
    return 'ADMISSIBLE' if obs.actual_available_time <= cutoff else 'NOT_ADMISSIBLE'

if __name__=='__main__':
    cutoff=datetime(2020,6,30,16,0)
    proven=MacroObservation('2020-05',datetime(2020,6,15,8,30),'2020-06',datetime(2020,6,15,9,0),'initial')
    uncertain=MacroObservation('2020-05',datetime(2020,6,30,8,30),'2020-06',None,'initial')
    late=MacroObservation('2020-06',datetime(2020,7,15,8,30),'2020-06',datetime(2020,7,15,9,0),'initial')
    for x in [proven,uncertain,late]: print(x.reference_period, exact_admissibility(x,cutoff))
