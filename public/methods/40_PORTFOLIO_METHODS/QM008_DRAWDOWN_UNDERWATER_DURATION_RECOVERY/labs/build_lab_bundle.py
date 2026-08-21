from __future__ import annotations
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "qm008_hands_on_lab_bundle.zip"
FILES = [
    ROOT / "README.md",
    ROOT / "index.qmd",
    ROOT / "data/qm008_wealth_path.csv",
    ROOT / "python/qm008_hands_on.py",
    ROOT / "python/requirements.txt",
    ROOT / "r/qm008_hands_on.R",
]


def canonical_text_bytes(path: Path) -> bytes:
    text = path.read_text(encoding="utf-8-sig")
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    return text.encode("utf-8")


def build(output: Path = OUTPUT) -> Path:
    with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for src in sorted(FILES, key=lambda x: x.as_posix()):
            rel = src.relative_to(ROOT).as_posix()
            zi = zipfile.ZipInfo("qm008_hands_on_lab/" + rel, date_time=(2026, 8, 20, 0, 0, 0))
            zi.compress_type = zipfile.ZIP_DEFLATED
            zi.create_system = 3  # Canonicalize ZIP host metadata across operating systems.
            zi.external_attr = 0o100644 << 16
            z.writestr(zi, canonical_text_bytes(src), compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    return output


if __name__ == "__main__":
    build()
    print("QM008_LAB_BUNDLE_BUILD_PASS")
