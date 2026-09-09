#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_REL = Path("public/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf")
DOC_SHA256 = "1bf685f26d8db8a0401d13224f041caa7bbd4f83fcbacf0358da88b1187b6995"
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
    require_file(page, "F2R System page")
    require_file(methods, "Methods registry")
    require_file(doc, "F2R System Documentation PDF")

    page_text = page.read_text(encoding="utf-8-sig", errors="strict")
    for token in [
        "/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf",
        "System Documentation ↗",
        'target="_blank"',
        'rel="noopener noreferrer"',
    ]:
        if token not in page_text:
            raise RuntimeError(f"F2R page missing documentation contract token: {token}")

    methods_text = methods.read_text(encoding="utf-8-sig", errors="strict")
    correct = "Explains expanding estimation-sample design for the forecast models that feed F2R's cross-asset ranking step, with rolling windows retained as a methodological comparison rather than the live default."
    stale = "Explains rolling estimation-window design for the forecast models that feed F2R's cross-asset ranking step."
    if correct not in methods_text:
        raise RuntimeError("F2R QM002 system context is not aligned to the expanding live training sample")
    if stale in methods_text:
        raise RuntimeError("stale rolling-window F2R QM002 system context remains")

    if doc.read_bytes()[:5] != b"%PDF-":
        raise RuntimeError("F2R System Documentation does not have a PDF signature")
    if sha256(doc) != DOC_SHA256:
        raise RuntimeError("F2R System Documentation PDF hash mismatch")

    if require_build:
        built = ROOT / "out/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf"
        require_file(built, "built F2R System Documentation PDF")
        if built.read_bytes()[:5] != b"%PDF-" or sha256(built) != DOC_SHA256:
            raise RuntimeError("built F2R System Documentation PDF mismatch")
        built_page = ROOT / "out/systems/f2r/index.html"
        require_file(built_page, "built F2R System page")
        html = built_page.read_text(encoding="utf-8-sig", errors="replace")
        if "/resources/systems/f2r/F2R_System_Documentation_v1.0.pdf" not in html or "System Documentation" not in html:
            raise RuntimeError("built F2R System page is missing the documentation link")

    print("F2R_DOCUMENTATION_PLATFORM_GATE_PASS")
    print(f"PDF SHA256={DOC_SHA256}")
    if require_build:
        print("Built F2R page/resource=PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())