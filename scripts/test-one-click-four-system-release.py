#!/usr/bin/env python3
"""Offline negative fixtures for the one-Pages release coordinator."""
import base64
import hashlib
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
    def test_unmerged_f2r_does_not_authorize_new_source_blob(self):
        with patch.object(mod,"gh",return_value=[
                {"number":15,"merged_at":None},
                {"number":16,"merged_at":None}]):
            with self.assertRaisesRegex(mod.Hold,"F2R_LATEST_SOURCE_PUBLIC_STATE_NOT_APPROVED"):
                mod.latest_merged_f2r_source("a"*40)


    def test_f2r_stale_without_standing_consent_is_read_only(self):
        args=SimpleNamespace(stage=True,publish=False,expected_market_close="2026-11-11")
        with patch.object(mod,"gh",return_value={"object":{"sha":"a"*40}}) as gh,\
             patch.object(mod,"pinned_public_file",return_value=self.f2r_fixture()),\
             patch.object(mod,"assert_standing_operator_authority",
                          side_effect=AssertionError("no authorization")):
            self.assertEqual(mod.ready_f2r_source(args,"b"*40,"2026-11-11",0),"a"*40)
        self.assertEqual(gh.call_count,1)

    def test_f2r_exact_ci_ignores_unrelated_head_and_duplicate_pr_event(self):
        good={"head_sha":"a"*40,"head_branch":"release/f2r-reviewed-123-1",
              "event":"workflow_dispatch","path":".github/workflows/f2r-public-review.yml",
              "actor":{"login":"github-actions[bot]"},"id":9,
              "status":"completed","conclusion":"success"}
        job={"name":"frozen-release","head_sha":"a"*40,"conclusion":"success",
             "steps":[{"name":"If release files change, require exact live-identity and accounting contract",
                       "conclusion":"success"}]}
        with patch.object(mod,"gh",side_effect=[
                {"workflow_runs":[{**good,"event":"pull_request","conclusion":"action_required"},
                                  {**good,"head_sha":"b"*40},good]},
                {"jobs":[job]}]):
            self.assertTrue(mod.f2r_exact_independent_ci("a"*40,good["head_branch"]))
        with patch.object(mod,"gh",return_value={"workflow_runs":[
                {**good,"conclusion":"failure"}]}):
            with self.assertRaisesRegex(mod.Hold,"F2R_INDEPENDENT_CI_FAILED"):
                mod.f2r_exact_independent_ci("a"*40,good["head_branch"])
        with patch.object(mod,"gh",return_value={"workflow_runs":[
                {**good,"status":"in_progress"}]}):
            self.assertFalse(mod.f2r_exact_independent_ci("a"*40,good["head_branch"]))

    def test_f2r_standing_promotes_only_exact_review_after_ci(self):
        old,head,new,platform=("a"*40,"b"*40,"c"*40,"d"*40)
        fresh=json.loads(self.f2r_fixture())
        fresh["live_state"]["current_mtd"]["as_of_date"]="2026-11-11"
        fresh["live_state"]["preview"]["market_cutoff_date"]="2026-11-11"
        fresh=json.dumps(fresh).encode()
        args=SimpleNamespace(stage=True,publish=True,standing_operator_consent=True,
                             expected_market_close="2026-11-11")
        pr={"number":30,"title":"Review F2R frozen public intake: test",
            "state":"open","draft":True,"mergeable":True,
            "user":{"login":"github-actions[bot]"},
            "base":{"ref":"main","sha":old},
            "head":{"sha":head,"ref":"release/f2r-reviewed-123-1",
                    "repo":{"full_name":mod.F2R}},
            "body":"Private candidate ZIP SHA256: "+"e"*64}
        writes=[]
        def fake_gh(path,method="GET",data=None):
            if path.endswith("/git/ref/heads/main"):
                return {"object":{"sha":new if writes else old}}
            if "pulls?state=open" in path:
                return [pr]
            if "/files?" in path:
                return [{"filename":p,"status":"modified"} for p in mod.F2R_REVIEW_FILES]
            if path.endswith("/merge") and method=="PUT":
                self.assertEqual(data["sha"],head)
                self.assertEqual(data["merge_method"],"squash")
                writes.append(path)
                return {"merged":True,"sha":new}
            raise AssertionError(path)
        def file(repo,path,ref):
            return self.f2r_fixture() if ref==old else fresh
        with patch.object(mod,"gh",side_effect=fake_gh),\
             patch.object(mod,"pull",side_effect=[pr,{**pr,"draft":False}]),\
             patch.object(mod,"pinned_public_file",side_effect=file),\
             patch.object(mod,"f2r_exact_independent_ci",return_value=True),\
             patch.object(mod,"assert_standing_operator_authority",return_value=True),\
             patch.object(mod,"validated_f2r_bytes",return_value=fresh) as validate,\
             patch.object(mod.subprocess,"run",return_value=SimpleNamespace(returncode=0)):
            self.assertEqual(mod.ready_f2r_source(args,platform,"2026-11-11",0),new)
        validate.assert_called_once_with(fresh,platform)
        self.assertEqual(len(writes),1)

    def test_f2r_pending_ci_never_merges(self):
        old,head="a"*40,"b"*40
        fresh=json.loads(self.f2r_fixture())
        fresh["live_state"]["current_mtd"]["as_of_date"]="2026-11-11"
        fresh["live_state"]["preview"]["market_cutoff_date"]="2026-11-11"
        pr={"number":30,"title":"Review F2R frozen public intake: test",
            "state":"open","draft":True,"user":{"login":"github-actions[bot]"},
            "base":{"ref":"main","sha":old},
            "head":{"sha":head,"ref":"release/f2r-reviewed-123-1",
                    "repo":{"full_name":mod.F2R}},
            "body":"Private candidate ZIP SHA256: "+"e"*64}
        args=SimpleNamespace(stage=True,publish=True,standing_operator_consent=True,
                             expected_market_close="2026-11-11")
        with patch.object(mod,"gh",side_effect=[
                {"object":{"sha":old}},[pr],
                [{"filename":p,"status":"modified"} for p in mod.F2R_REVIEW_FILES]]) as gh,\
             patch.object(mod,"pull",return_value=pr),\
             patch.object(mod,"pinned_public_file",side_effect=[
                 self.f2r_fixture(),json.dumps(fresh).encode()]),\
             patch.object(mod,"f2r_exact_independent_ci",return_value=False),\
             patch.object(mod,"assert_standing_operator_authority",return_value=True),\
             patch.object(mod.subprocess,"run",side_effect=AssertionError("no mutation")):
            with self.assertRaisesRegex(mod.Hold,"F2R_CURRENT_REVIEW_NOT_READY"):
                mod.ready_f2r_source(args,"c"*40,"2026-11-11",0)
        self.assertEqual(gh.call_count,3)

    def test_absent_equity_never_stages(self):
        args=SimpleNamespace(pds_adaa_pr=75,f2r_pr=15,stage=True)
        with patch.object(mod,"source_inputs",side_effect=mod.Hold("EQUITY_MISSING")),\
             patch.object(mod,"gh",side_effect=AssertionError("no mutations")):
            with self.assertRaisesRegex(mod.Hold,"EQUITY_MISSING"):
                mod.stage(args)

    def test_release_ci_accepts_one_success_and_a_superseded_skipped_build(self):
        checks=[{"name":"build","status":"completed","conclusion":"success"},
                {"name":"build","status":"completed","conclusion":"skipped"}]
        self.assertTrue(mod._release_build_checks_satisfied(checks))

    def test_release_ci_requires_real_success_not_only_skipped(self):
        checks=[{"name":"build","status":"completed","conclusion":"skipped"}]
        self.assertFalse(mod._release_build_checks_satisfied(checks))

    def test_release_ci_rejects_pending_duplicate(self):
        checks=[{"name":"build","status":"completed","conclusion":"success"},
                {"name":"build","status":"in_progress","conclusion":None}]
        self.assertFalse(mod._release_build_checks_satisfied(checks))

    def test_release_ci_rejects_cancelled_or_failed_build_even_with_success(self):
        passed={"name":"build","status":"completed","conclusion":"success"}
        for bad in ("cancelled","failure","timed_out","action_required"):
            with self.subTest(bad=bad):
                self.assertFalse(mod._release_build_checks_satisfied(
                    [passed,{"name":"build","status":"completed","conclusion":bad}]))

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

    def test_assemble_preserves_current_main_and_overlays_only_changed_files(self):
        args=SimpleNamespace(stage=True)
        pds_path="public/data/systems/pds/PDS_PUBLIC_BINDING_RECEIPT.json"
        eq_path="public/dashboards/equity-alpha/data/live_overlay.js"
        main="a"*40
        updates={pds_path:"c"*40,eq_path:"d"*40}
        source=(main,{pds_path:"f"*40,eq_path:"f"*40},updates,
                {"platform_main":main,"source_review":"approved"})
        staged={}
        def fake_gh(path,method="GET",data=None):
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
        self.assertEqual(blobs,updates)
        self.assertEqual(len(blobs),2)

    def test_imports_approved_f2r_blob_into_platform_before_tree(self):
        # A Git blob SHA may be valid in F2R but absent from platform storage.
        raw=b'{"schema_version":"2.0","approved":true}\n'
        expected=hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\x00"+raw).hexdigest()
        main="a"*40
        source=(main,{mod.F2R_TARGET:"f"*40},
                {mod.F2R_TARGET:expected},{"f2r":{"review":19,
                "source_main":"b"*40,"blob":expected}})
        calls=[]
        def fake_gh(path,method="GET",data=None):
            if path==f"repos/{mod.HOST}/git/blobs" and method=="POST":
                self.assertEqual(data["encoding"],"base64")
                self.assertEqual(base64.b64decode(data["content"]),raw)
                calls.append("import")
                return {"sha":expected}
            if path==f"repos/{mod.HOST}/git/commits/{main}":
                return {"tree":{"sha":"e"*40}}
            if path==f"repos/{mod.HOST}/git/trees" and method=="POST":
                self.assertEqual(calls,["import"])
                self.assertEqual(data["tree"][0]["sha"],expected)
                calls.append("tree")
                return {"sha":"1"*40}
            if path==f"repos/{mod.HOST}/git/commits" and method=="POST":
                return {"sha":"2"*40}
            if path==f"repos/{mod.HOST}/git/refs" and method=="POST":
                return {"ref":data["ref"]}
            if path==f"repos/{mod.HOST}/pulls" and method=="POST":
                return {"number":100,"head":{"sha":"2"*40},"base":{"sha":main}}
            raise AssertionError("Unexpected request "+path)
        with patch.object(mod,"source_inputs",return_value=source),\
             patch.object(mod,"pinned_public_file",return_value=raw),\
             patch.object(mod,"open_pulls",return_value=[]),\
             patch.object(mod,"gh",side_effect=fake_gh):
            candidate,_,created=mod.stage(SimpleNamespace(stage=True))
        self.assertTrue(created)
        self.assertEqual(candidate["number"],100)
        self.assertEqual(calls,["import","tree"])

    def test_rejects_wrong_platform_f2r_blob_import(self):
        raw=b'approved F2R source data'
        expected=hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\x00"+raw).hexdigest()
        source=("a"*40,{mod.F2R_TARGET:"f"*40},
                {mod.F2R_TARGET:expected},{"f2r":{"review":19,
                "source_main":"b"*40,"blob":expected}})
        with patch.object(mod,"source_inputs",return_value=source),\
             patch.object(mod,"pinned_public_file",return_value=raw),\
             patch.object(mod,"open_pulls",return_value=[]),\
             patch.object(mod,"gh",return_value={"sha":"0"*40}):
            with self.assertRaisesRegex(mod.Hold,
                    "F2R_PLATFORM_GIT_BLOB_IMPORT_PARITY_HOLD"):
                mod.stage(SimpleNamespace(stage=True))

    def test_no_delta_has_no_pr_no_actions_no_deploy(self):
        source=("a"*40,{"a":"c"*40},{},{"platform_main":"a"*40})
        with patch.object(mod,"source_inputs",return_value=source),\
             patch.object(mod,"gh",side_effect=AssertionError("no actions")),\
             patch.object(mod,"open_pulls",side_effect=AssertionError("no PR census")):
            result,identity,created=mod.stage(SimpleNamespace(stage=True))
        self.assertIsNone(result)
        self.assertFalse(created)

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

    def test_old_published_equity_pr_is_inert(self):
        overlay=mod.EQUITY_OVERLAY
        item={"number":85,"title":"Review Equity Alpha seven-file hosted candidate: old"}
        pr={"state":"open","number":85,"base":{"ref":"main","sha":"a"*40},
            "head":{"sha":"b"*40},"user":{"login":"github-actions[bot]"},
            "body":"Exact source prerelease: x. ZIP SHA256: "+"c"*64}
        current={overlay:"d"*40}
        with patch.object(mod,"pull",return_value=pr),\
             patch.object(mod,"gh",return_value=[
                {"filename":overlay,"status":"modified"}]),\
             patch.object(mod,"tree",return_value={overlay:"d"*40}):
            diff,reviews=mod.reviewed_overlay("equity",current,[item])
        self.assertEqual(diff,{})
        self.assertEqual(reviews,[])

    def test_superseded_equity_review_does_not_block_new_clock(self):
        overlay=mod.EQUITY_OVERLAY
        item={"number":85,"title":"Review Equity Alpha seven-file hosted candidate: old"}
        pr={"state":"open","number":85,"base":{"ref":"main","sha":"a"*40},
            "head":{"sha":"b"*40},"user":{"login":"github-actions[bot]"},
            "body":"Exact source prerelease: x. ZIP SHA256: "+"c"*64}
        current={overlay:"d"*40}
        with patch.object(mod,"pull",return_value=pr),\
             patch.object(mod,"gh",return_value=[
                {"filename":overlay,"status":"modified"}]),\
             patch.object(mod,"tree",return_value={overlay:"e"*40}),\
             patch.object(mod,"_market_clock_from_blob",side_effect=[
                "2026-11-10","2026-11-11"]):
            diff,reviews=mod.reviewed_overlay("equity",current,[item])
        self.assertEqual(diff,{})
        self.assertEqual(reviews,[])

    def test_two_different_current_equity_reviews_hold(self):
        overlay=mod.EQUITY_OVERLAY
        items=[{"number":n,"title":"Review Equity Alpha seven-file hosted candidate: "+str(n)}
               for n in (92,93)]
        pr={"state":"open","base":{"ref":"main","sha":"a"*40},
            "head":{"sha":"b"*40},"user":{"login":"github-actions[bot]"},
            "body":"Exact source prerelease: x. ZIP SHA256: "+"c"*64}
        def fake_pull(repo,n):
            return dict(pr,number=n)
        def fake_tree(repo,sha):
            if sha=="a"*40:
                return {overlay:"f"*40}
            return {overlay:("c"*40 if fake_tree.n==0 else "d"*40)}
        fake_tree.n=0
        with patch.object(mod,"pull",side_effect=fake_pull),\
             patch.object(mod,"gh",return_value=[
                {"filename":overlay,"status":"modified"}]),\
             patch.object(mod,"tree",side_effect=[
                {overlay:"c"*40},{overlay:"e"*40},
                {overlay:"d"*40},{overlay:"e"*40}]),\
             patch.object(mod,"_market_clock_from_blob",
                          side_effect=["2026-11-11","2026-11-10"]*2):
            with self.assertRaisesRegex(mod.Hold,"CONFLICTING_CURRENT_REVIEW_CANDIDATES"):
                mod.reviewed_overlay("equity",{overlay:"e"*40},items)

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

    def test_old_open_pds_draft_at_already_published_clock_is_inert(self):
        paths=[mod.PDS_MARK, mod.PDS_BINDING]
        pr={"number":83,"state":"open","base":{"ref":"main","sha":"a"*40},
            "head":{"sha":"b"*40},"user":{"login":"github-actions[bot]"}}
        current={paths[0]:"c"*40,paths[1]:"d"*40}
        proposed={paths[0]:"e"*40,paths[1]:"f"*40}
        historic={paths[0]:"g"*40,paths[1]:"h"*40}
        with patch.object(mod,"gh",return_value=[
                 {"filename":p,"status":"modified"} for p in paths]),\
             patch.object(mod,"tree",side_effect=[proposed,historic]),\
             patch.object(mod,"_market_clock_from_blob",
                          side_effect=["2026-11-10","2026-11-10"]):
            # Previously this would stop EVERY future one-click release by
            # SOURCE_REVIEW_TARGET_CHANGED_SINCE_BASE on PR #83.
            self.assertIsNone(mod._review_public_snapshot("pds",pr,current))

    def test_newer_pds_clock_keeps_real_source_base_drift_hold(self):
        paths=[mod.PDS_MARK, mod.PDS_BINDING]
        pr={"number":91,"state":"open","base":{"ref":"main","sha":"a"*40},
            "head":{"sha":"b"*40},"user":{"login":"github-actions[bot]"}}
        current={paths[0]:"c"*40,paths[1]:"d"*40}
        proposed={paths[0]:"e"*40,paths[1]:"f"*40}
        old_base={paths[0]:"g"*40,paths[1]:"h"*40}
        with patch.object(mod,"gh",return_value=[
                 {"filename":p,"status":"modified"} for p in paths]),\
             patch.object(mod,"tree",side_effect=[proposed,old_base]),\
             patch.object(mod,"_market_clock_from_blob",
                          side_effect=["2026-11-11","2026-11-10"]):
            with self.assertRaisesRegex(mod.Hold,"SOURCE_REVIEW_TARGET_CHANGED"):
                mod._review_public_snapshot("pds",pr,current)


    def test_rama_real_published_artifact_exact_refresh_receiver(self):
        import tempfile
        import runpy
        root=SOURCE.parent.parent
        ns=runpy.run_path(str(SOURCE.parent/"sync-rama-public-candidate.py"))
        html=(root/mod.RAMA_TARGET).read_bytes()
        body=html.decode("utf-8").split("<script>const D=",1)[1]
        d,end=json.JSONDecoder().raw_decode(body)
        state=body[:end].encode("utf-8")
        artifacts={"index.html":hashlib.sha256(html).hexdigest(),
                   "public_state.json":hashlib.sha256(state).hexdigest()}
        receipt={"schema":"RAMA_PUBLIC_WORKSPACE_V1","status":"HOLD_PUBLIC_APPROVAL",
                 "candidate":"a"*64,"marketThrough":d["through"],
                 "completedThrough":d["execution"],"artifacts":artifacts}
        approval={"schema":receipt["schema"],"status":"APPROVED_PUBLIC_RELEASE",
                  "candidate":receipt["candidate"],"artifacts":artifacts,
                  "rights":"APPROVED","ssrnId":"7757240",
                  "venue":"NOT_APPLICABLE_TO_EXISTING_MODEL_REFRESH",
                  "basis":"OPERATOR_CONFIRMED_THIS_RUN","scope":"RAMA_DERIVED_WORKSPACE_ONLY"}
        with tempfile.TemporaryDirectory() as tmp:
            p=Path(tmp); (p/"index.html").write_bytes(html)
            (p/"public_state.json").write_bytes(state)
            (p/"PRIVATE_REVIEW_RECEIPT.json").write_text(json.dumps(receipt),encoding="utf-8")
            ap=p/"approval.json"
            def write(a):
                raw=json.dumps(a).encode("utf-8");ap.write_bytes(raw)
                return hashlib.sha256(raw).hexdigest()
            h=write(approval)
            actual,parsed=ns["approved"](p,ap,h,existing_model_refresh=True)
            self.assertEqual(actual,html)
            self.assertEqual(parsed,d)
            with self.assertRaises(Exception):
                ns["approved"](p,ap,h)
            with self.assertRaises(Exception):
                ns["approved"](p,ap,"0"*64,existing_model_refresh=True)
            for changes in ({"rights":"PENDING"},{"basis":"STANDING"},
                            {"scope":"RAW_PRICES"},{"venue":"VERIFIED"}):
                bad=write({**approval,**changes})
                with self.assertRaises(Exception):
                    ns["approved"](p,ap,bad,existing_model_refresh=True)
            original=write({**approval,"venue":"VERIFIED"})
            self.assertEqual(ns["approved"](p,ap,original)[0],html)
            h=write(approval)
            (p/"index.html").write_bytes(html+b" ")
            with self.assertRaises(Exception):
                ns["approved"](p,ap,h,existing_model_refresh=True)

    def test_rama_requires_complete_per_run_approval(self):
        args=SimpleNamespace(rama_candidate=Path("candidate"),rama_approval=Path("approval"),
                             rama_approval_sha256="a"*64)
        with self.assertRaisesRegex(mod.Hold,"RAMA_PER_RUN_OPERATOR_CONSENT_REQUIRED"):
            mod.rama_options(args)
        args.rama_operator_consent=True
        self.assertEqual(mod.rama_options(args)[2],"a"*64)
        args.rama_approval=None
        with self.assertRaisesRegex(mod.Hold,"RAMA_EXACT_APPROVAL_ARGUMENTS_REQUIRED"):
            mod.rama_options(args)

    def test_rama_standalone_does_not_invoke_incumbent_sources(self):
        args=SimpleNamespace(rama_only=True,rama_operator_consent=True,
            rama_candidate=Path("candidate"),rama_approval=Path("approval"),
            rama_approval_sha256="a"*64,expected_market_close="2026-11-25")
        old="b"*40; new="c"*40; main="d"*40
        base={mod.PDS_MARK:"e"*40,mod.RAMA_TARGET:old,"src/app/page.tsx":"f"*40}
        approved={"blob":new,"marketThrough":"2026-11-25"}
        with patch.object(mod,"gh",return_value={"object":{"sha":main}}),\
             patch.object(mod,"tree",return_value=base),\
             patch.object(mod,"validated_rama_bytes",return_value=(b"data",approved)),\
             patch.object(mod,"_market_clock_from_blob",return_value="2026-11-25"),\
             patch.object(mod,"choose_current_inputs",side_effect=AssertionError("incumbent refresh")):
            actual,_,updates,identity=mod.source_inputs(args)
        self.assertEqual(actual,main)
        self.assertEqual(updates,{mod.RAMA_TARGET:new})
        self.assertEqual(identity["rama"],approved)

    def test_rama_stale_fails_and_equal_blob_is_no_change(self):
        args=SimpleNamespace(rama_only=True,rama_operator_consent=True,
            rama_candidate=Path("candidate"),rama_approval=Path("approval"),
            rama_approval_sha256="a"*64,expected_market_close="")
        main="b"*40; blob="c"*40
        base={mod.PDS_MARK:"d"*40,mod.RAMA_TARGET:blob}
        approved={"blob":blob,"marketThrough":"2026-11-25"}
        with patch.object(mod,"gh",return_value={"object":{"sha":main}}),\
             patch.object(mod,"tree",return_value=base),\
             patch.object(mod,"validated_rama_bytes",return_value=(b"data",approved)),\
             patch.object(mod,"_market_clock_from_blob",return_value="2026-11-25"):
            self.assertEqual(mod.stage(args)[0],None)
        with patch.object(mod,"gh",return_value={"object":{"sha":main}}),\
             patch.object(mod,"tree",return_value=base),\
             patch.object(mod,"validated_rama_bytes",return_value=(b"data",approved)),\
             patch.object(mod,"_market_clock_from_blob",return_value="2026-11-26"):
            with self.assertRaisesRegex(mod.Hold,"RAMA_BELOW_PDS_MARK"):
                mod.source_inputs(args)

    def test_rama_combined_requires_exact_base(self):
        args=SimpleNamespace(rama_operator_consent=True,rama_candidate=Path("candidate"),
            rama_approval=Path("approval"),rama_approval_sha256="a"*64)
        with patch.object(mod,"gh",return_value={"object":{"sha":"b"*40}}),\
             patch.object(mod,"validated_rama_bytes",return_value=(b"data",{"blob":"c"*40})),\
             patch.object(mod,"choose_current_inputs",return_value=("d"*40,{}, {}, {})):
            with self.assertRaisesRegex(mod.Hold,"RAMA_PLATFORM_BASE_CHANGED"):
                mod.source_inputs(args)

    def test_missing_pages_push_fallback_once_and_exact_deploy(self):
        commit="a"*40
        now=[0];calls=[];dispatched=[False]
        run={"head_sha":commit,"event":"workflow_dispatch","status":"completed","conclusion":"success","id":17}
        def api(path,method="GET",data=None):
            calls.append((path,method,data))
            if "/git/ref/heads/main" in path:return {"object":{"sha":commit}}
            if path.endswith("/dispatches"):
                dispatched[0]=True
                self.assertEqual(data,{"ref":"main","inputs":{"audit_only":"false"}})
                return {}
            if "/jobs?" in path:return {"jobs":[{"name":"build","status":"completed","conclusion":"success"},
                {"name":"deploy","status":"completed","conclusion":"success","steps":[{"name":x,"conclusion":"success"} for x in mod.PAGES_REQUIRED_DEPLOY_STEPS]}]}
            if "/runs?" in path:return {"workflow_runs":[run] if dispatched[0] else []}
            raise AssertionError(path)
        with patch.object(mod,"gh",side_effect=api):
            out=mod.wait_for_pages(commit,180,clock=lambda:now[0],pause=lambda n:now.__setitem__(0,now[0]+n))
        self.assertEqual(out["event"],"workflow_dispatch")
        self.assertEqual(sum(m=="POST" for _,m,_ in calls),1)
        self.assertGreaterEqual(now[0],mod.PAGES_TRIGGER_GRACE_SECONDS)

    def test_pages_existing_push_no_fallback(self):
        commit="a"*40
        run={"head_sha":commit,"event":"push","status":"completed","conclusion":"success","id":18}
        with patch.object(mod,"gh",return_value={"object":{"sha":commit}}) as api,\
             patch.object(mod,"pages_runs",return_value=[run]),\
             patch.object(mod,"pages_certified",return_value={"status":"PASS","run":18}):
            self.assertEqual(mod.wait_for_pages(commit,180)["run"],18)
            self.assertTrue(all(x.args[0].endswith("/main") for x in api.call_args_list))

    def test_pages_pending_or_failed_never_dispatch(self):
        commit="a"*40
        for status,conclusion in [("in_progress",None),("completed","failure")]:
            now=[0]
            run={"head_sha":commit,"event":"push","status":status,"conclusion":conclusion,"id":18}
            with patch.object(mod,"gh",return_value={"object":{"sha":commit}}) as api,\
                 patch.object(mod,"pages_runs",return_value=[run]):
                with self.assertRaises(mod.Hold):
                    mod.wait_for_pages(commit,180,clock=lambda:now[0],pause=lambda n:now.__setitem__(0,now[0]+n))
                self.assertTrue(all(x.args[0].endswith("/main") for x in api.call_args_list))

    def test_pages_main_movement_or_ambiguous_runs_hold(self):
        commit="a"*40
        with patch.object(mod,"gh",return_value={"object":{"sha":"b"*40}}),\
             patch.object(mod,"pages_runs") as runs:
            with self.assertRaisesRegex(mod.Hold,"PAGES_MAIN_CHANGED"):
                mod.wait_for_pages(commit,180)
            runs.assert_not_called()
        with patch.object(mod,"gh",return_value={"object":{"sha":commit}}),\
             patch.object(mod,"pages_runs",return_value=[{},{}]):
            with self.assertRaisesRegex(mod.Hold,"PAGES_MULTIPLE"):
                mod.wait_for_pages(commit,180)

    def test_pages_audit_only_success_is_not_deployment(self):
        commit="a"*40
        run={"head_sha":commit,"event":"workflow_dispatch","status":"completed","conclusion":"success","id":19}
        with patch.object(mod,"gh",return_value={"jobs":[{"name":"build","status":"completed","conclusion":"skipped"},{"name":"deploy","status":"completed","conclusion":"skipped"}]}):
            with self.assertRaisesRegex(mod.Hold,"PAGES_REQUIRED_JOB"):
                mod.pages_certified(run,commit)
        with patch.object(mod,"gh",return_value={"jobs":[{"name":"build","status":"completed","conclusion":"success"},{"name":"deploy","status":"completed","conclusion":"success","steps":[]}]}):
            with self.assertRaisesRegex(mod.Hold,"PAGES_REQUIRED_DEPLOY_STEPS"):
                mod.pages_certified(run,commit)

    def test_no_commands_triggered_by_import(self):
        self.assertEqual(mod.MARKER,"SLACKQUANT_ONE_PAGES_FOUR_SYSTEM_V1")

if __name__=="__main__":
    unittest.main()
