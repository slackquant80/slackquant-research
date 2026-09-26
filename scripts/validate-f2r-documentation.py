#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_REL = Path("public/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf")
LEGACY_DOC_REL = Path("public/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf")
DOC_SHA256 = "971337d86361071ba88ce328dbf615e8a862ea199df5cca6b87c710666849cea"
PAGE_REL = Path("src/app/systems/f2r/page.tsx")
METHODS_REL = Path("src/data/methods.ts")


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def require_file(path: Path, label: str) -> None:
    if not path.is_file():
        raise RuntimeError(f"missing {label}: {path.relative_to(ROOT)}")


def main() -> int:
    require_build = "--require-build" in sys.argv[1:]
    page = ROOT / PAGE_REL
    methods = ROOT / METHODS_REL
    doc = ROOT / DOC_REL
    legacy_doc = ROOT / LEGACY_DOC_REL
    require_file(page, "F2R System page")
    require_file(methods, "Methods registry")
    require_file(doc, "F2R System Documentation v2.1 PDF")
    if legacy_doc.exists():
        raise RuntimeError("legacy F2R System Documentation v1.0 remains publicly addressable")

    page_text = page.read_text(encoding="utf-8-sig", errors="strict")
    for token in [
        "/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf",
        "System Documentation ↗",
        "Chronos-2 pretrained time-series intelligence",
        "Heterogeneous forecasts, one common decision space",
        "Public disclosure names the forecasting technologies and the decision architecture.",
        'target="_blank"',
        'rel="noopener noreferrer"',
    ]:
        if token not in page_text:
            raise RuntimeError(f"F2R page missing documentation/current-architecture contract token: {token}")

    for forbidden in (
        "/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf",
        "252-session",
        "C3_REX_SCORE_CHRONOS20",
        "C3_REX",
    ):
        if forbidden in page_text:
            raise RuntimeError(f"F2R page contains retired/recipe-sensitive token: {forbidden}")

    methods_text = methods.read_text(encoding="utf-8-sig", errors="strict")
    current_qm002 = "Chronos-2 sequence expert enters through a separate governed inference path"
    stale_qm002 = "with rolling windows retained as a methodological comparison rather than the live default"
    if current_qm002 not in methods_text:
        raise RuntimeError("F2R QM002 system context is not aligned to the current heterogeneous architecture")
    if stale_qm002 in methods_text:
        raise RuntimeError("stale pre-Chronos F2R QM002 system context remains")

    if doc.read_bytes()[:5] != b"%PDF-":
        raise RuntimeError("F2R System Documentation v2.1 does not have a PDF signature")
    if sha256(doc) != DOC_SHA256:
        raise RuntimeError("F2R System Documentation v2.1 PDF hash mismatch")

    if require_build:
        built = ROOT / "out/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf"
        require_file(built, "built F2R System Documentation v2.1 PDF")
        if built.read_bytes()[:5] != b"%PDF-" or sha256(built) != DOC_SHA256:
            raise RuntimeError("built F2R System Documentation v2.1 PDF mismatch")
        legacy_built = ROOT / "out/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf"
        if legacy_built.exists():
            raise RuntimeError("legacy built F2R System Documentation v1.0 remains")
        built_page = ROOT / "out/systems/f2r/index.html"
        require_file(built_page, "built F2R System page")
        html = built_page.read_text(encoding="utf-8-sig", errors="replace")
        if "/resources/systems/f2r/F2R_System_Documentation_v2.1.pdf" not in html or "System Documentation" not in html:
            raise RuntimeError("built F2R System page is missing the v2.1 documentation link")
        if "/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf" in html:
            raise RuntimeError("built F2R System page still links retired v1.0 documentation")

    print("F2R_DOCUMENTATION_PLATFORM_GATE_PASS")
    print("Architecture=heterogeneous conventional-ML + Chronos-2 / recipe-protected")
    print(f"PDF SHA256={DOC_SHA256}")
    if require_build:
        print("Built F2R page/resource=PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
