#!/usr/bin/env python3
"""Full-byte, read-only PDS current-vs-candidate HTML static/embedded-data audit.

This is NOT a browser visual inspection and NEVER authorizes a release.
The two Git blob files must be supplied by a CI runner or another verified
read-only checkout. No external service, private data, writes or model refresh.
"""
from __future__ import annotations

from collections import Counter
import hashlib
from html.parser import HTMLParser
import json
import math
from pathlib import Path
import re
import sys

MARKER = b"window.PDL_DATA="
END = b";</script>"


def sha(data):
    return hashlib.sha256(data).hexdigest()


def load(path):
    raw = path.read_bytes()
    if not 1000 < len(raw) <= 100_000_000:
        raise ValueError("unexpected canonical dashboard size")
    if raw.count(MARKER) != 1:
        raise ValueError("dashboard must have precisely one PDL_DATA marker")
    start = raw.index(MARKER) + len(MARKER)
    stop = raw.find(END, start)
    if stop < start:
        raise ValueError("canonical payload terminator missing")
    try:
        obj = json.loads(raw[start:stop])
    except (ValueError, UnicodeDecodeError) as exc:
        raise ValueError("unparseable public payload") from exc
    if not isinstance(obj, dict):
        raise ValueError("canonical payload is not an object")
    shell = raw[:start] + b'"__PUBLIC_DATA_PLACEHOLDER__"' + raw[stop:]
    return raw, shell, obj


class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.text = []
        self.style = []
        self.script = []
        self.active = None

    def handle_starttag(self, tag, attrs):
        self.tags.append(("start", tag, tuple(sorted(attrs))))
        if tag in ("script", "style"):
            self.active = tag

    def handle_startendtag(self, tag, attrs):
        self.tags.append(("empty", tag, tuple(sorted(attrs))))

    def handle_endtag(self, tag):
        self.tags.append(("end", tag))
        if self.active == tag:
            self.active = None

    def handle_data(self, data):
        if self.active == "script":
            self.script.append(data)
        elif self.active == "style":
            self.style.append(data)
        elif data.strip():
            self.text.append(re.sub(r"\s+", " ", data.strip()))


def payload_delta(old, new):
    queue = [("$", old, new)]
    numeric = Counter()
    nonnumeric = []
    text_kinds = Counter()
    all_text_changed = 0
    max_return_string_delta_bp = 0.0
    schema_drift = []
    peak = (0.0, "")
    count = 0
    while queue:
        path, a, b = queue.pop()
        count += 1
        if count > 8_000_000:
            raise ValueError("too many payload nodes")
        if type(a) is not type(b):
            if len(schema_drift) < 25:
                schema_drift.append({"path":path[:180], "type_before":type(a).__name__, "type_after":type(b).__name__})
        elif isinstance(a, dict):
            ka, kb = set(a), set(b)
            if ka != kb and len(schema_drift) < 25:
                schema_drift.append({"path":path[:180],"added_keys":sorted(kb-ka)[:12],"removed_keys":sorted(ka-kb)[:12]})
            queue.extend((path+"."+str(k),a[k],b[k]) for k in ka & kb)
        elif isinstance(a, list):
            if len(a) != len(b) and len(schema_drift) < 25:
                schema_drift.append({"path":path[:180],"old_length":len(a),"new_length":len(b)})
            queue.extend((path+f"[{i}]",a[i],b[i]) for i in range(min(len(a),len(b))))
        elif a != b:
            if isinstance(a, (int,float)) and not isinstance(a, bool):
                bucket=path.split(".",2)[1].split("[",1)[0] if "." in path else "root"
                numeric[bucket]+=1
                delta=abs(a-b)
                if delta>peak[0]:
                    peak=(delta,path[:180])
            else:
                all_text_changed += 1
                classification = "OTHER_TEXT"
                if isinstance(a, str) and isinstance(b, str):
                    try:
                        x, y = float(a), float(b)
                        if math.isfinite(x) and math.isfinite(y) and re.fullmatch(
                                r"[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?", a
                            ) and re.fullmatch(
                                r"[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?", b):
                            classification = "NUMERIC_STRING"
                            if path.endswith(".net_return"):
                                max_return_string_delta_bp = max(
                                    max_return_string_delta_bp, abs(y-x)*1e4)
                    except (ValueError,OverflowError):
                        pass
                    if (re.fullmatch(r"[0-9a-f]{64}",a) and
                            re.fullmatch(r"[0-9a-f]{64}",b)):
                        classification = "HASH_PROVENANCE"
                    elif (re.match(r"^20\d{2}-\d{2}-\d{2}T",a) and
                          re.match(r"^20\d{2}-\d{2}-\d{2}T",b)):
                        classification = "TIMESTAMP"
                text_kinds[classification] += 1
                if len(nonnumeric) < 18 or classification == "OTHER_TEXT":
                    if len(nonnumeric) < 60:
                        nonnumeric.append({"path":path[:180],
                                           "classification":classification,
                                           "before":str(a)[:150],
                                           "after":str(b)[:150]})
    return {"numeric_changed_by_group":dict(sorted(numeric.items())),
            "numeric_changed_total":sum(numeric.values()),
            "max_unscaled_numeric_difference":peak[0],
            "max_numeric_path":peak[1],
            "non_numeric_examples":sorted(nonnumeric,key=lambda x:x["path"]),
            "non_numeric_total":all_text_changed,
            "non_numeric_class_counts":dict(sorted(text_kinds.items())),
            "max_net_return_numeric_string_delta_bp":round(max_return_string_delta_bp,10),
            "schema":sorted(schema_drift,key=lambda x:x["path"]),
            "compared_nodes":count}


def review(base, candidate):
    a, shell_a, d_a=load(base)
    b, shell_b, d_b=load(candidate)
    old, new=Document(),Document()
    old.feed(shell_a.decode("utf-8-sig"))
    new.feed(shell_b.decode("utf-8-sig"))
    delta=payload_delta(d_a,d_b)
    shell_exact=(shell_a==shell_b)
    tags_same=(old.tags==new.tags)
    text_same=(old.text==new.text)
    styles_same=(old.style==new.style)
    scripts_same=(old.script==new.script)
    findings={"audit":"PDS_CANONICAL_HTML_STATIC_COMPARISON_V1",
              "base_sha256":sha(a),"candidate_sha256":sha(b),
              "base_bytes":len(a),"candidate_bytes":len(b),
              "shell_exact_without_PDL_DATA":shell_exact,
              "tag_and_attribute_identity":tags_same,
              "static_visible_text_identity":text_same,
              "style_block_identity":styles_same,
              "script_shell_identity":scripts_same,
              "tag_counts":[len(old.tags),len(new.tags)],
              "static_text_counts":[len(old.text),len(new.text)],
              "inline_script_counts":[len(old.script),len(new.script)],
              "style_block_counts":[len(old.style),len(new.style)],
              "payload":delta,
              "browser_visual_E2E":"NOT_RUN",
              "release_authorized":False}
    if not shell_exact:
        at=next((i for i in range(min(len(shell_a),len(shell_b))) if shell_a[i]!=shell_b[i]),min(len(shell_a),len(shell_b)))
        findings["shell_first_diff_byte"]=at
        findings["shell_old_near"]=shell_a[max(0,at-40):at+80].decode("utf-8","replace")[:120]
        findings["shell_new_near"]=shell_b[max(0,at-40):at+80].decode("utf-8","replace")[:120]
    if not text_same:
        z=next((i for i in range(min(len(old.text),len(new.text))) if old.text[i]!=new.text[i]),None)
        if z is not None:
            findings["first_visible_text_difference"]={"index":z,"before":old.text[z][:100],"after":new.text[z][:100]}
    findings["static_review"]=(
        "SHELL_IDENTICAL_STRUCTURE_IDENTICAL_NUMERIC_CHANGE__VISUAL_E2E_PENDING"
        if shell_exact and not delta["schema"] and not delta["non_numeric_total"]
        else ("HTML_UI_SHELL_UNCHANGED__NUMERIC_STRING_AND_PROVENANCE_ONLY__VISUAL_E2E_PENDING"
              if shell_exact and not delta["schema"] and
                 set(delta["non_numeric_class_counts"]).issubset(
                     {"NUMERIC_STRING", "HASH_PROVENANCE", "TIMESTAMP"})
              else "STATIC_UI_OR_PAYLOAD_NONNUMERIC_CHANGE__MANUAL_REVIEW_HOLD"))
    return findings


def selftest():
    import tempfile
    with tempfile.TemporaryDirectory() as tmp:
        x,y=Path(tmp)/"a.html",Path(tmp)/"b.html"
        def html(value, heading="FX", color="black", length=2):
            obj={"assetWeights":[0.5]*length, "monthlyReturns":[value]}
            raw=("<html><head><style>h2{color:"+color+"}</style></head><body><h2>"+heading+
                 "</h2><script>window.PDS_PUBLIC_SURFACE=true;window.PDL_DATA="+
                 json.dumps(obj,separators=(",",":"))+
                 ";</script><script>const fx=1;</script></body></html>")
            return (raw+" "*1200).encode()
        x.write_bytes(html(0.01))
        y.write_bytes(html(0.010001))
        a=review(x,y)
        assert a["shell_exact_without_PDL_DATA"] and a["tag_and_attribute_identity"]
        assert a["payload"]["numeric_changed_total"]==1
        assert a["static_review"].startswith("SHELL_IDENTICAL")
        y.write_bytes(html(0.010001,heading="FX Technical"))
        assert not review(x,y)["static_visible_text_identity"]
        y.write_bytes(html(0.010001,color="red"))
        assert not review(x,y)["style_block_identity"]
        y.write_bytes(html(0.010001,length=1))
        assert review(x,y)["payload"]["schema"]
    print("PDS_CANONICAL_HTML_FULL_BYTE_STATIC_AUDIT_NEGATIVE_FIXTURES_PASS")


def main():
    if len(sys.argv)==2 and sys.argv[1]=="--selftest":
        selftest()
    elif len(sys.argv)==3:
        print(json.dumps(review(Path(sys.argv[1]),Path(sys.argv[2])),
                         sort_keys=True,indent=2,ensure_ascii=False))
    else:
        raise SystemExit("Usage: audit.py --selftest | BASE.html CANDIDATE.html")


if __name__=="__main__":
    try:
        main()
    except (ValueError, OSError, UnicodeError) as exc:
        print("PDS_CANONICAL_HTML_STATIC_AUDIT_HOLD",str(exc),file=sys.stderr)
        raise SystemExit(2)
