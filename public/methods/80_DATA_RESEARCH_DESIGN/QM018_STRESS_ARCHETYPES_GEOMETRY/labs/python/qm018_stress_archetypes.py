from pathlib import Path
import runpy

source = Path(__file__).resolve().parents[2] / 'code' / 'python' / 'qm018_stress_archetypes.py'
runpy.run_path(str(source), run_name='__main__')
