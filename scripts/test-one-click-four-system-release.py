#!/usr/bin/env python3
"""Offline negative fixtures for the one-Pages release coordinator."""
import importlib.util
import json
from pathlib import Path
from types import SimpleNamespace
import unittest
from unittest.mock import patch

SOURCE=Path(__file__).with_name("one-click-four-system-release.py")
spec=importlib.util.spec_from_file_location("oneclick_release",SOURCE)
mod=importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

class ReleaseSafety(unittest.TestCase):
    def test_unmerged_f2r_cannot_stage(self):
        args=SimpleNamespace(pds_adaa_pr=75,f2r_pr=15)
        def api(path,method="GET",data=None):
            if path=="repos/slackquant80/slackquant-research/git/ref/heads/main":
                return {"object":{"sha":"a"*40}}
            raise AssertionError("unexpected request "+path)
        def pull(repo,num):
            if repo==mod.HOST:
                return {"state":"open","base":{"sha":"a"*40,"ref":"main"},
                        "head":{"sha":"b"*40},"number":75}
            return {"state":"open","merged":False}
        with patch.object(mod,"gh",side_effect=api),\
             patch.object(mod,"pull",side_effect=pull),\
             patch.object(mod,"files",return_value=[
                "public/assets/systems/adaa/snapshot.js",
                "public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"]),\
             patch.object(mod,"tree",return_value={}):
            with self.assertRaisesRegex(mod.Hold,"F2R_SOURCE_REVIEW_NOT_APPROVED"):
                mod.source_inputs(args)

    def test_absent_equity_never_stages(self):
        args=SimpleNamespace(pds_adaa_pr=75,f2r_pr=15,stage=True)
        with patch.object(mod,"source_inputs",side_effect=mod.Hold("EQUITY_MISSING")),\
             patch.object(mod,"gh",side_effect=AssertionError("no mutations")):
            with self.assertRaisesRegex(mod.Hold,"EQUITY_MISSING"):
                mod.stage(args)

    def test_publish_requires_exact_approved_head(self):
        args=SimpleNamespace(approved_head="c"*40,wait_seconds=60)
        candidate={"head":{"sha":"d"*40},"number":99,"state":"open","draft":True}
        with patch.object(mod,"gh",side_effect=AssertionError("no github requests")):
            with self.assertRaisesRegex(mod.Hold,"NO_EXACT_HEAD"):
                mod.publish(args,candidate)

    def test_allowlist_exact(self):
        self.assertEqual(len(mod.EQUITY_PATHS),7)
        self.assertIn("public/dashboards/equity-alpha/data/live_overlay.js",mod.EQUITY_PATHS)
        self.assertNotIn("private/rights.json",mod.EQUITY_PATHS)

    def test_assemble_preserves_advanced_main_and_overlays_only_reviewed_paths(self):
        args=SimpleNamespace(pds_adaa_pr=75,f2r_pr=15,stage=True)
        pds_path="public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"
        equity_path="public/dashboards/equity-alpha/data/live_overlay.js"
        main="a"*40
        source=(main,{"head":{"sha":"b"*40},"number":75},
                {pds_path},{pds_path:"c"*40},
                {equity_path},{equity_path:"d"*40},b'{"ok":true}',
                {"platform_main":main})
        staged={}
        def fake_gh(path,method="GET",data=None):
            if path.endswith("/git/blobs") and method=="POST":
                return {"sha":"e"*40}
            if path.endswith("/git/commits/"+main) and method=="GET":
                return {"tree":{"sha":"f"*40}}
            if path.endswith("/git/trees") and method=="POST":
                staged.update(data)
                return {"sha":"1"*40}
            if path.endswith("/git/commits") and method=="POST":
                self.assertEqual(data["parents"],[main])
                return {"sha":"2"*40}
            if path.endswith("/git/refs") and method=="POST":
                return {"ref":data["ref"]}
            if path.endswith("/pulls") and method=="POST":
                return {"number":80,"head":{"sha":"2"*40},"base":{"sha":main}}
            raise AssertionError("unexpected request: "+path)
        with patch.object(mod,"source_inputs",return_value=source),\
             patch.object(mod,"open_pulls",return_value=[]),\
             patch.object(mod,"gh",side_effect=fake_gh):
            result,_,created=mod.stage(args)
        self.assertTrue(created)
        self.assertEqual(result["number"],80)
        self.assertEqual(staged["base_tree"],"f"*40)
        blobs={x["path"]:x["sha"] for x in staged["tree"]}
        self.assertEqual(blobs[pds_path],"c"*40)
        self.assertEqual(blobs[equity_path],"d"*40)
        self.assertEqual(blobs[mod.F2R_TARGET],"e"*40)
        self.assertEqual(len(blobs),3)

    def test_source_only_main_advancement_accepted(self):
        delta={"status":"ahead","behind_by":0,
               "files":[{"filename":".github/workflows/deploy-pages.yml"},
                        {"filename":"scripts/one-click-four-system-release.py"}]}
        with patch.object(mod,"gh",return_value=delta):
            self.assertTrue(mod.source_base_compatible("a"*40,"b"*40,
                            {"public/assets/systems/adaa/snapshot.js"}))

    def test_material_market_change_since_review_refused(self):
        delta={"status":"ahead","behind_by":0,
               "files":[{"filename":"public/assets/systems/adaa/snapshot.js"}]}
        with patch.object(mod,"gh",return_value=delta):
            with self.assertRaisesRegex(mod.Hold,"MATERIAL_MAIN_CHANGE"):
                mod.source_base_compatible("a"*40,"b"*40,
                           {"public/assets/systems/adaa/snapshot.js"})

    def test_source_only_main_advance_includes_latest_readiness_test(self):
        delta={"status":"ahead","behind_by":0,"files":[
           {"filename":".github/workflows/deploy-pages.yml"},
           {"filename":"scripts/four-system-release-readiness.py"},
           {"filename":"scripts/one-click-four-system-release.py"},
           {"filename":"scripts/test-one-click-four-system-release.py"},
           {"filename":"scripts/test-four-system-release-readiness.py"}]}
        with patch.object(mod,"gh",return_value=delta):
            self.assertTrue(mod.source_base_compatible("a"*40,"b"*40,
                            {"public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"}))

    @staticmethod
    def f2r_fixture(weights=(.25,.25,.25,.25)):
        holdings=[{"asset":x,"target_weight":w} for x,w in
                  zip(("EWY","QQQ","SPY","DBC"),weights)]
        state={"schema_version":"2.0","system":{"short_name":"F2R"},
               "completed_performance":{"support_end":"2026-10-30",
                 "as_of_date":"2026-10-30",
                 "growth_series":[{}]*100,"drawdown_series":[{}]*100},
               "live_state":{"official":{"signal_period":"2026-10",
                 "holding_month":"2026-11","holdings":holdings},
                 "current_mtd":{"available":True,"as_of_date":"2026-11-10"},
                 "preview":{"available":True,"market_cutoff_date":"2026-11-10"}},
               "issued_at_utc":"2026-11-11T01:03:39Z"}
        return json.dumps(state, separators=(",",":")).encode()

    def test_canonical_f2r_sync_preserves_approved_exact_bytes(self):
        raw=self.f2r_fixture()
        legacy=self.f2r_fixture()
        canon=SOURCE.with_name("sync-f2r-static-state.py").read_bytes()
        payloads={
          "scripts/sync-f2r-static-state.py":canon,
          mod.F2R_TARGET:legacy,
          "public/data/systems/f2r/live_evidence.json":
             b'{"completedThrough":"2026-10-30"}',
        }
        with patch.object(mod,"pinned_public_file",
             side_effect=lambda repo,path,commit:payloads[path]) as get:
            self.assertEqual(mod.validated_f2r_bytes(raw,"a"*40),raw)
        self.assertEqual(get.call_count,3)

    def test_invalid_f2r_weights_hold_before_public_staging(self):
        raw=self.f2r_fixture((.8,.25,.25,.25))
        canon=SOURCE.with_name("sync-f2r-static-state.py").read_bytes()
        payloads={
          "scripts/sync-f2r-static-state.py":canon,
          mod.F2R_TARGET:self.f2r_fixture(),
          "public/data/systems/f2r/live_evidence.json":
             b'{"completedThrough":"2026-10-30"}',
        }
        with patch.object(mod,"pinned_public_file",
             side_effect=lambda repo,path,commit:payloads[path]):
            with self.assertRaisesRegex(mod.Hold,"F2R_OFFICIAL_CHECK_HOLD"):
                mod.validated_f2r_bytes(raw,"a"*40)

    def test_source_clocks_pass_at_exact_market_close(self):
        pds_path="public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"
        eq_path="public/dashboards/equity-alpha/data/live_overlay.js"
        mark_path="public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json"
        pds={pds_path:"a"*40,mark_path:"c"*40}
        eq={eq_path:"b"*40}
        payloads={
          "a"*40:b'{"status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS","public_as_of_date":"2026-11-11"}',
          "c"*40:b'{"status":"PASS","official_mark_through":"2026-11-10"}',
          "b"*40:b'window.EA_LIVE_OVERLAY = {"meta":{"marketDataThrough":"2026-11-10","benchmark":"ACWI"}};',
        }
        with patch.object(mod,"pinned_git_blob_bytes",
                          side_effect=lambda repo,blob:payloads[blob]):
            clocks=mod.assert_common_market_clock(pds,eq,self.f2r_fixture())
        self.assertEqual(set(clocks),{"PDS","PDS_PUBLIC_AS_OF","F2R_MTD","F2R_PREVIEW","EQUITY"})
        self.assertEqual(clocks["PDS"],"2026-11-10")
        self.assertEqual(clocks["PDS_PUBLIC_AS_OF"],"2026-11-11")

    def test_stale_equity_holds_before_any_pr(self):
        pds={"public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json":"a"*40,
             "public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json":"c"*40}
        eq={"public/dashboards/equity-alpha/data/live_overlay.js":"b"*40}
        payloads={
          "a"*40:b'{"status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS","public_as_of_date":"2026-11-11"}',
          "c"*40:b'{"status":"PASS","official_mark_through":"2026-11-10"}',
          "b"*40:b'window.EA_LIVE_OVERLAY = {"meta":{"marketDataThrough":"2026-11-06","benchmark":"ACWI"}};',
        }
        with patch.object(mod,"pinned_git_blob_bytes",
                          side_effect=lambda repo,blob:payloads[blob]):
            with self.assertRaisesRegex(mod.Hold,"PUBLIC_SOURCE_STALE_EQUITY"):
                mod.assert_common_market_clock(pds,eq,self.f2r_fixture())

    def test_stale_f2r_mtd_holds_before_any_pr(self):
        pds={"public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json":"a"*40,
             "public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json":"c"*40}
        eq={"public/dashboards/equity-alpha/data/live_overlay.js":"b"*40}
        payloads={
          "a"*40:b'{"status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS","public_as_of_date":"2026-11-11"}',
          "c"*40:b'{"status":"PASS","official_mark_through":"2026-11-10"}',
          "b"*40:b'window.EA_LIVE_OVERLAY = {"meta":{"marketDataThrough":"2026-11-10","benchmark":"ACWI"}};',
        }
        d=json.loads(self.f2r_fixture())
        d["live_state"]["current_mtd"]["as_of_date"]="2026-11-09"
        with patch.object(mod,"pinned_git_blob_bytes",
                          side_effect=lambda repo,blob:payloads[blob]):
            with self.assertRaisesRegex(mod.Hold,"PUBLIC_SOURCE_STALE_F2R_MTD"):
                mod.assert_common_market_clock(pds,eq,json.dumps(d).encode())

    def test_future_pds_publication_date_does_not_advance_market_floor(self):
        paths={"public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json":"a"*40,
               "public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json":"c"*40}
        eq={"public/dashboards/equity-alpha/data/live_overlay.js":"b"*40}
        payloads={
          "a"*40:b'{"status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS","public_as_of_date":"2026-11-12"}',
          "c"*40:b'{"status":"PASS","official_mark_through":"2026-11-10"}',
          "b"*40:b'window.EA_LIVE_OVERLAY = {"meta":{"marketDataThrough":"2026-11-10","benchmark":"ACWI"}};',
        }
        with patch.object(mod,"pinned_git_blob_bytes",
                          side_effect=lambda repo,blob:payloads[blob]):
            clocks=mod.assert_common_market_clock(paths,eq,self.f2r_fixture())
        self.assertEqual(clocks["PDS"],"2026-11-10")

    def test_pds_publication_preceding_market_mark_holds(self):
        pds={"public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json":"a"*40,
             "public/assets/systems/pds/PDS_PUBLIC_DASHBOARD_RECEIPT.json":"c"*40}
        eq={"public/dashboards/equity-alpha/data/live_overlay.js":"b"*40}
        payloads={
          "a"*40:b'{"status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS","public_as_of_date":"2026-11-09"}',
          "c"*40:b'{"status":"PASS","official_mark_through":"2026-11-10"}',
          "b"*40:b'window.EA_LIVE_OVERLAY = {"meta":{"marketDataThrough":"2026-11-10","benchmark":"ACWI"}};',
        }
        with patch.object(mod,"pinned_git_blob_bytes",
                          side_effect=lambda repo,blob:payloads[blob]):
            with self.assertRaisesRegex(mod.Hold,"PDS_PUBLICATION_DATE_PRECEDES"):
                mod.assert_common_market_clock(pds,eq,self.f2r_fixture())

    def test_standing_operator_one_confirmation_keeps_policy_bound(self):
        raw=SOURCE.with_name("equity-standing-publication-policy.json").read_bytes()
        with patch.object(mod,"gh",return_value={"object":{"sha":"a"*40}}),\
             patch.object(mod,"pinned_public_file",return_value=raw):
            self.assertTrue(mod.assert_standing_operator_authority())

    def test_revoked_standing_requires_manual_authorization(self):
        policy=json.loads(SOURCE.with_name("equity-standing-publication-policy.json").read_bytes())
        policy["status"]="REVOKED"
        with patch.object(mod,"gh",return_value={"object":{"sha":"a"*40}}),\
             patch.object(mod,"pinned_public_file",
                          return_value=json.dumps(policy).encode()):
            with self.assertRaisesRegex(mod.Hold,"NOT_ACTIVE"):
                mod.assert_standing_operator_authority()

    def test_last_reviewed_pds_adaa_accepts_only_source_only_main_changes(self):
        paths={
            ".github/workflows/deploy-pages.yml",
            "scripts/one-click-four-system-release.py",
            "scripts/equity-standing-publication-policy.json",
            "scripts/test-equity-standing-policy.py",
            "scripts/verify_equity_intake_release.py",
        }
        self.assertTrue(paths.issubset(mod.SOURCE_ONLY_MAIN_CHANGES))
        delta={"status":"ahead","behind_by":0,"files":[{"filename":p} for p in paths]}
        with patch.object(mod,"gh",return_value=delta):
            self.assertTrue(mod.source_base_compatible("a"*40,"b"*40,
                            {"public/assets/systems/adaa/snapshot.js"}))

    def test_existing_equity_review_does_not_dispatch_or_wait(self):
        p={"title":"Review Equity Alpha seven-file hosted candidate: pinned", "number":82}
        with patch.object(mod,"open_pulls",return_value=[p]),\
             patch.object(mod.time,"sleep",side_effect=AssertionError("never wait")):
            self.assertEqual(mod.await_equity_draft_review(60)["number"],82)

    def test_one_dispatched_equity_review_appears_in_same_run(self):
        p={"title":"Review Equity Alpha seven-file hosted candidate: pinned", "number":83}
        with patch.object(mod,"open_pulls",side_effect=[[],[p]]) as r,\
             patch.object(mod.time,"sleep",return_value=None):
            self.assertEqual(mod.await_equity_draft_review(60)["number"],83)
            self.assertEqual(r.call_count,2)

    def test_absent_equity_review_fails_closed_without_any_publication(self):
        with patch.object(mod,"open_pulls",return_value=[]),\
             patch.object(mod.time,"sleep",side_effect=AssertionError("should not wait")):
            with self.assertRaisesRegex(mod.Hold,"DRAFT_NOT_YET_STAGED"):
                mod.await_equity_draft_review(0)

    def test_multiple_equity_reviews_never_choose_newest_arbitrarily(self):
        prs=[{"title":"Review Equity Alpha seven-file hosted candidate: "+str(i),
              "number":i} for i in (92,93)]
        with patch.object(mod,"open_pulls",return_value=prs):
            with self.assertRaisesRegex(mod.Hold,"MULTIPLE_SOURCE_OWNED"):
                mod.await_equity_draft_review(60)

    def test_gh_utf8_bytes_survive_windows_cp949_for_non_ascii_fields(self):
        # This is the exact failure path from the Windows operator traceback:
        # a github PR JSON payload contains UTF-8, not console CP949.
        payload={"number":75,"title":"ADAA · 금융 시장", "draft":True}
        response=SimpleNamespace(returncode=0,
                stdout=json.dumps(payload,ensure_ascii=False).encode("utf-8"),
                stderr=b"")
        with patch.object(mod.subprocess,"run",return_value=response) as run:
            got=mod.gh("repos/slackquant80/slackquant-research/pulls/75")
        self.assertEqual(got,payload)
        self.assertFalse(run.call_args.kwargs["text"])
        self.assertEqual(run.call_args.kwargs["capture_output"],True)

    def test_gh_post_utf8_stdin_is_bytes_not_locale_text(self):
        response=SimpleNamespace(returncode=0,stdout=b'{"sha":"done"}',stderr=b"")
        with patch.object(mod.subprocess,"run",return_value=response) as run:
            self.assertEqual(mod.gh("repos/example/release","POST",
                       {"title":"서울"}),{"sha":"done"})
        self.assertIsInstance(run.call_args.kwargs["input"],bytes)
        self.assertIn("서울".encode("utf-8"),run.call_args.kwargs["input"])

    def test_gh_reader_thread_stdout_none_holds_without_attribute_error(self):
        response=SimpleNamespace(returncode=0,stdout=None,stderr=None)
        with patch.object(mod.subprocess,"run",return_value=response):
            with self.assertRaisesRegex(mod.Hold,"GITHUB_API_OUTPUT_NOT_BYTES"):
                mod.gh("repos/sample/pulls/75")

    def test_gh_invalid_utf8_fails_closed(self):
        response=SimpleNamespace(returncode=0,stdout=b"\x82\xff",stderr=b"")
        with patch.object(mod.subprocess,"run",return_value=response):
            with self.assertRaisesRegex(mod.Hold,"GITHUB_API_UTF8_DECODE_HOLD"):
                mod.gh("repos/sample/pulls/75")

    def test_gh_invalid_json_holds(self):
        response=SimpleNamespace(returncode=0,stdout=b"not-json",stderr=b"")
        with patch.object(mod.subprocess,"run",return_value=response):
            with self.assertRaisesRegex(mod.Hold,"GITHUB_API_INVALID_JSON_HOLD"):
                mod.gh("repos/sample/pulls/75")

    def test_gh_cli_nonzero_stderr_is_best_effort_utf8(self):
        response=SimpleNamespace(returncode=1,stdout=b"",
                                 stderr=b"API \x82 invalid console encoding")
        with patch.object(mod.subprocess,"run",return_value=response):
            with self.assertRaisesRegex(mod.Hold,"GITHUB_API_HOLD"):
                mod.gh("repos/sample/pulls/75")

    def test_no_commands_triggered_by_import(self):
        self.assertEqual(mod.MARKER,"SLACKQUANT_ONE_PAGES_FOUR_SYSTEM_V1")

if __name__=="__main__":
    unittest.main()
