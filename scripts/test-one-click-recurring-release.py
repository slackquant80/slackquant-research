#!/usr/bin/env python3
"""Repeated market-clock release acceptance, using synthetic GitHub source trees.

No production data, GitHub mutations, vendor calls, market compute or Actions.
"""
import importlib.util
import json
from pathlib import Path
from types import SimpleNamespace
import unittest
from unittest.mock import patch

SCRIPT=Path(__file__).with_name("one-click-four-system-release.py")
spec=importlib.util.spec_from_file_location("oneclick_cycle", SCRIPT)
m=importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)


class SequentialMarketRelease(unittest.TestCase):
    def setUp(self):
        self.asset={
            "pds_mark":m.PDS_MARK, "pds_binding":m.PDS_BINDING,
            "adaa":m.ADAA_SNAPSHOT,"eq":m.EQUITY_OVERLAY,
            "f2r":m.F2R_TARGET
        }
        self.blobs=[
            dict(zip(self.asset.values(),[x*40 for x in "abcde"])),
            dict(zip(self.asset.values(),[x*40 for x in "12345"])),
            dict(zip(self.asset.values(),[x*40 for x in "6789f"]))
        ]
        self.clocks=["2026-11-10","2026-11-11","2026-11-12"]
        self.shas=["0"*39+str(i) for i in (1,2,3)]
        self.source_main=["b"*39+str(i) for i in (1,2,3)]
        self.prs={}
        self.heads={}
        self.contents={}
        for epoch in (1,2):
            base=self.shas[epoch-1]
            for kind,number in (("pds",epoch*100+1),
                                ("adaa",epoch*100+2),
                                ("equity",epoch*100+3)):
                path_group={"pds":("pds_mark","pds_binding"),
                            "adaa":("adaa",),
                            "equity":("eq",)}[kind]
                changed={self.asset[k]:self.blobs[epoch][self.asset[k]]
                         for k in path_group}
                head="a"*36+f"{number:04d}"
                title={"pds":"Review PDS hosted intake: ",
                       "adaa":"ADAA 7-file Thin source candidate ",
                       "equity":"Review Equity Alpha seven-file hosted candidate: "}[kind]+str(number)
                self.prs[number]={"number":number,"title":title,"state":"open",
                  "base":{"ref":"main","sha":base},
                  "head":{"sha":head},"user":{"login":"github-actions[bot]"},
                  "body":"Exact source prerelease: src. ZIP SHA256: "+"c"*64,
                  "changed":changed}
                self.heads[head]=changed
        for i in range(3):
            f2r_json={
             "schema_version":"2.0",
             "completed_performance":{"as_of_date":"2026-10-30",
                                      "support_end":"2026-10-30"},
             "live_state":{"official":{"holdings":[
                 {"asset":x,"target_weight":.25}
                 for x in ("EWY","QQQ","SPY","DBC")]},
                 "current_mtd":{"available":True,"as_of_date":self.clocks[i]},
                 "preview":{"available":True,
                            "market_cutoff_date":self.clocks[i]}}
            }
            self.contents[self.blobs[i][m.F2R_TARGET]]=json.dumps(f2r_json).encode()
            self.contents[self.blobs[i][m.PDS_MARK]]=json.dumps({
                "status":"PASS","official_mark_through":self.clocks[i]}).encode()
            self.contents[self.blobs[i][m.PDS_BINDING]]=json.dumps({
                "status":"PDS_SLACKQUANT_PUBLIC_BINDING_PASS",
                "public_as_of_date":self.clocks[i]}).encode()
            self.contents[self.blobs[i][m.EQUITY_OVERLAY]]=(
                'window.EA_LIVE_OVERLAY = '+
                json.dumps({"meta":{"benchmark":"ACWI",
                                    "marketDataThrough":self.clocks[i]}})+
                ';').encode()
        self.source_tree={k:{m.F2R_SOURCE:self.blobs[i][m.F2R_TARGET]}
                          for i,k in enumerate(self.source_main)}

    def run_at(self, i, pr_eras, source_epoch=None, expected=None, stage=True):
        source_epoch=i if source_epoch is None else source_epoch
        now=self.shas[i]
        pr_list=[self.prs[n] for e in pr_eras for n in
                 (e*100+1,e*100+2,e*100+3)]
        current=self.blobs[i]
        def fake_gh(path,method="GET",data=None):
            if path==f"repos/{m.HOST}/git/ref/heads/main":
                return {"object":{"sha":now}}
            if path==f"repos/{m.F2R}/git/ref/heads/main":
                return {"object":{"sha":self.source_main[source_epoch]}}
            for n,pr in self.prs.items():
                if path.startswith(f"repos/{m.HOST}/pulls/{n}/files?"):
                    return [{"filename":path,"status":"modified"}
                            for path in pr["changed"]]
            raise AssertionError("unexpected gh "+path)
        def fake_tree(repo, commit):
            if repo==m.F2R:
                return self.source_tree[commit]
            if commit in self.shas:
                return self.blobs[self.shas.index(commit)]
            if commit in self.heads:
                return self.heads[commit]
            raise AssertionError("unknown synthetic SHA "+commit)
        def fake_public(repo,path,commit):
            if repo==m.F2R:
                blob=self.source_tree[commit][m.F2R_SOURCE]
            elif repo==m.HOST:
                blob=self.blobs[self.shas.index(commit)][path]
            else:
                raise AssertionError(repo)
            return self.contents[blob]
        with patch.object(m,"gh",side_effect=fake_gh),\
             patch.object(m,"tree",side_effect=fake_tree),\
             patch.object(m,"open_pulls",return_value=pr_list),\
             patch.object(m,"pull",side_effect=lambda repo,n:self.prs[n]),\
             patch.object(m,"pinned_public_file",side_effect=fake_public),\
             patch.object(m,"pinned_git_blob_bytes",
                          side_effect=lambda repo,sha:self.contents[sha]),\
             patch.object(m,"latest_merged_f2r_source",return_value=15+source_epoch),\
             patch.object(m,"validated_f2r_bytes",side_effect=lambda raw,main:raw):
            return m.choose_current_inputs(SimpleNamespace(
                stage=stage,wait_seconds=60,expected_market_close=expected or ""))

    def test_nov10_published_then_nov11_then_nochange_then_nov12(self):
        # Start at Nov 10 published; incoming reviewed Nov 11 candidates
        # must be overlaid, WITHOUT loading hard-coded PR #75 / #85.
        main0,current0,changes1,identity1=self.run_at(0,(1,),source_epoch=1)
        self.assertEqual(main0,self.shas[0])
        self.assertEqual(changes1,{
            path:self.blobs[1][path] for path in self.asset.values()})
        self.assertEqual(identity1["f2r"]["review"],16)
        self.assertEqual(len(identity1["equity"]),1)
        # After that SAME reviewed bytes have been published to main,
        # source PRs stay OPEN but must be ignored, including old bot drafts.
        main1,current1,none,identityNoop=self.run_at(1,(1,))
        self.assertEqual(main1,self.shas[1])
        self.assertEqual(none,{})
        self.assertEqual(identityNoop["equity"],[])
        self.assertIsNone(identityNoop["f2r"]["review"])
        # Next market date / next source-owned PRs, while previous reviews
        # are still OPEN. Only the newest two-clock-dated candidates count.
        main2,current2,changes2,identity2=self.run_at(1,(1,2),source_epoch=2)
        self.assertEqual(changes2,{
            path:self.blobs[2][path] for path in self.asset.values()})
        self.assertEqual(identity2["equity"][0]["pr"],203)
        self.assertEqual(identity2["pds"][0]["pr"],201)
        self.assertEqual(identity2["adaa"][0]["pr"],202)
        self.assertEqual(identity2["f2r"]["review"],17)
        main3,current3,none2,identityNoop2=self.run_at(2,(1,2))
        self.assertEqual(none2,{})
        self.assertIsNone(identityNoop2["f2r"]["review"])

    def test_explicit_new_close_never_returns_false_no_change(self):
        # Source-owned Windows PDS already approved Nov 11, but current
        # hosted PRs still show Nov 10. The release must HOLD, not claim PASS.
        with self.assertRaisesRegex(m.Hold,
                "CURRENT_SOURCE_OWNED_REVIEW_NOT_READY_FOR_MARKET_CLOSE"):
            self.run_at(0,(),source_epoch=0,
                        expected="2026-11-11",stage=False)

    def test_explicit_current_close_allows_genuine_no_change(self):
        _,_,updates,_=self.run_at(1,(1,),
                   expected="2026-11-11",stage=False)
        self.assertEqual(updates,{})

    def test_old_untrusted_pds_title_is_not_a_source_receipt(self):
        review={"number":700,"title":"Review PDS hosted intake: forged"}
        pr={"number":700,"state":"open","base":{"ref":"main","sha":"a"*40},
            "head":{"sha":"b"*40},"user":{"login":"random-user"}}
        with patch.object(m,"pull",return_value=pr),\
             patch.object(m,"gh",side_effect=AssertionError("never fetch files")):
            change,records=m.reviewed_overlay("pds",{},[review])
        self.assertEqual(change,{})
        self.assertEqual(records,[])


if __name__=="__main__":
    unittest.main()
