#!/usr/bin/env node
/** Public-site Chromium QA: no model execution, user screenshots, or release. */
import {spawn, execFileSync} from 'node:child_process';
import {mkdtemp,readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const argv=process.argv.slice(2);
const flag=(name,def)=>{const n=argv.indexOf(name);return n<0?def:argv[n+1]};
const base=flag('--base','https://research.slackquant.com').replace(/\/$/,'');
const selftest=argv.includes('--self-test'),capture=argv.includes('--capture');
const out=flag('--out',path.resolve('browser-qa-results'));
const routes=selftest?['/']:['/','/systems/','/research/','/systems/pds/','/systems/adaa/','/systems/f2r/','/systems/equity-alpha/','/systems/pds/dashboard/','/systems/adaa/dashboard/','/systems/f2r/dashboard/','/dashboards/equity-alpha/'];
const viewports=[{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844}];
const pause=ms=>new Promise(r=>setTimeout(r,ms));
function need(cond,message){if(!cond)throw Error(message)}
class CDP{
 constructor(url){this.ws=new WebSocket(url);this.seq=0;this.waiting=new Map();this.errors=[];
  this.ws.addEventListener('message',e=>{let v;try{v=JSON.parse(e.data)}catch{return}
   if(v.id){const p=this.waiting.get(v.id);if(p){this.waiting.delete(v.id);v.error?p.reject(Error(v.error.message)):p.resolve(v.result||{})}}
   else if(v.method==='Runtime.exceptionThrown')this.errors.push('JS_EXCEPTION '+(v.params.exceptionDetails?.text||'unknown'));
   else if(v.method==='Log.entryAdded'&&v.params.entry?.level==='error')this.errors.push('CONSOLE '+(v.params.entry.url||'UNKNOWN_URL')+' '+v.params.entry.text);
   else if(v.method==='Network.responseReceived'&&v.params.response?.status>=400)this.errors.push('HTTP_RESOURCE_'+v.params.response.status+' '+v.params.response.url);
  });
 }
 async ready(){if(this.ws.readyState===1)return;await new Promise((yes,no)=>{this.ws.addEventListener('open',yes,{once:true});this.ws.addEventListener('error',no,{once:true});setTimeout(()=>no(Error('CDP_OPEN_TIMEOUT')),12000)})}
 send(method,params={}){const id=++this.seq;return new Promise((yes,no)=>{this.waiting.set(id,{resolve:yes,reject:no});this.ws.send(JSON.stringify({id,method,params}));setTimeout(()=>{if(this.waiting.delete(id))no(Error('CDP_TIMEOUT_'+method))},20000)})}
 async eval(expr){const r=await this.send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error('JS_EVALUATION_'+r.exceptionDetails.text);return r.result?.value}
 close(){this.ws.close()}
}
function collect(){
 const visible=e=>!!e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
 const b=document.body,txt=b?.innerText||'';
 return {title:document.title,h1:document.querySelector('h1')?.innerText||'',bodyChars:txt.trim().length,
  bodyText:txt.slice(0,16000),width:document.documentElement.scrollWidth,viewport:innerWidth,css:document.styleSheets.length,
  font:getComputedStyle(b).fontFamily,fontsReady:document.fonts.status,
  loading:txt.includes('Loading verified public snapshot'),
  brokenImages:[...document.images].filter(x=>x.complete&&x.naturalWidth===0).map(x=>x.src).slice(0,8),
  buttons:[...document.querySelectorAll('button')].filter(visible).map(x=>({page:x.dataset.page||'',label:x.innerText.trim().slice(0,80)})).slice(0,40),
  links:[...document.querySelectorAll('a[href]')].filter(visible).map(x=>x.href).slice(0,150),
  chartCount:document.querySelectorAll('canvas,svg').length,tableHeaders:document.querySelectorAll('table th').length};
}
async function browser(){
 const bin=process.env.CHROME_BIN||['/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
 need(bin,'CHROMIUM_BINARY_MISSING');const dir=await mkdtemp(path.join(os.tmpdir(),'slackquant-public-qa-'));
 const child=spawn(bin,['--headless=new','--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--disable-background-networking','--remote-debugging-port=0','--user-data-dir='+dir,'about:blank'],{stdio:'ignore'});
 let port;for(let i=0;i<100;i++){try{port=+(await readFile(path.join(dir,'DevToolsActivePort'),'utf8')).split('\n')[0];if(port)break}catch{}await pause(100)}
 need(port,'CHROMIUM_START_FAILED');return {port,async cleanup(){child.kill('SIGTERM');await pause(500);try{await rm(dir,{recursive:true,force:true,maxRetries:8,retryDelay:250})}catch(e){console.warn('CHROMIUM_TEMP_CLEANUP_WARNING '+e.code)}}};
}
async function tab(port){
 const response=await fetch('http://127.0.0.1:'+port+'/json/new?about:blank',{method:'PUT'});need(response.ok,'CDP_TAB_NOT_CREATED');
 const info=await response.json(),c=new CDP(info.webSocketDebuggerUrl);await c.ready();
 for(const n of ['Page.enable','Runtime.enable','Log.enable','Network.enable'])await c.send(n);return c;
}
async function run(){
 await mkdir(out,{recursive:true});const chrom=await browser(),results=[];let failed=0;
 try{for(const mode of viewports){const c=await tab(chrom.port);
  await c.send('Emulation.setDeviceMetricsOverride',{width:mode.width,height:mode.height,deviceScaleFactor:1,mobile:mode.name==='mobile'});
  for(const route of routes){const result={route,viewport:mode.name,status:'PASS',errors:[],checks:[]};c.errors=[];
   try{
    if(!selftest){const http=await fetch(base+route,{signal:AbortSignal.timeout(20000)});need(http.ok,'HTTP_'+http.status);result.http=http.status;
      await c.send('Page.navigate',{url:base+route});
    }else{
      const tree=await c.send('Page.getFrameTree');
      await c.send('Page.setDocumentContent',{frameId:tree.frameTree.frame.id,html:'<!doctype html><html><head><title>Browser fixture</title><style>body{font-family:sans-serif}</style></head><body><h1>Browser QA selftest</h1><p>A deterministic fixture for desktop and mobile. No external network.</p><a href="https://research.slackquant.com/systems/">Systems</a></body></html>'});
    }
    for(let i=0;i<70;i++){await pause(140);if(await c.eval('document.readyState')==='complete')break}
    await pause(route.includes('dashboard')?2400:650);
    let s=await c.eval('('+collect.toString()+')()');
    Object.assign(result,{title:s.title,h1:s.h1,bodyChars:s.bodyChars,font:s.font,fontsReady:s.fontsReady,charts:s.chartCount,tableHeaders:s.tableHeaders,buttons:s.buttons.length,overflow:s.width>s.viewport+16});
    need(s.bodyChars>=35,'RENDERED_CONTENT_MISSING');need(s.css>0,'CSS_MISSING');need(!s.brokenImages.length,'BROKEN_IMAGES '+s.brokenImages.join(','));
    result.checks.push('DOM','CSS','IMAGES');if(result.overflow)result.errors.push('HORIZONTAL_VIEWPORT_OVERFLOW_'+s.width+'_'+s.viewport);
    if(route==='/')need(s.links.some(x=>x.includes('/systems/')),'HOME_SYSTEMS_LINK_MISSING');
    if(route==='/systems/')for(const name of ['pds','adaa','f2r','equity-alpha'])need(s.links.some(x=>x.includes('/systems/'+name+'/')),'SYSTEM_LINK_MISSING_'+name);
    if(route.startsWith('/systems/')&&route!='/systems/'&&!route.endsWith('/dashboard/'))need(s.links.some(x=>x.includes('dashboard')),'DASHBOARD_LINK_MISSING');
    if(route==='/dashboards/equity-alpha/'){
      const pages=s.buttons.filter(x=>x.page);need(pages.length>=6,'EQUITY_NAV_SECTIONS_MISSING');
      for(const item of pages){const key=JSON.stringify(item.page);
        await c.eval('document.querySelector("button[data-page="+'+key+'+"]").click()');await pause(180);
        const active=await c.eval('(()=>{const a=document.querySelector("button[data-page="+'+key+'+"]");return !!a&&(a.classList.contains("active")||a.classList.contains("is-active")||a.getAttribute("aria-selected")==="true")})()');
        need(active,'EQUITY_NAV_NOT_ACTIVATED_'+item.page);result.checks.push('NAV_'+item.page+'_active');
      }
      const excel=await c.eval('(()=>{const a=[...document.querySelectorAll("a[href]")].find(x=>/\\.xlsx(?:$|\\?)/i.test(x.href));return a?.href||null})()');
      need(excel,'EQUITY_EXCEL_EXPORT_LINK_MISSING');
      const head=await fetch(excel,{method:'HEAD',signal:AbortSignal.timeout(20000)});
      need(head.ok,'EQUITY_EXCEL_EXPORT_HTTP_'+head.status);result.checks.push('EQUITY_EXCEL_EXPORT_HTTP_200');
    }
    if(route==='/systems/f2r/dashboard/'&&s.loading){await pause(5000);s=await c.eval('('+collect.toString()+')()');if(s.loading)result.errors.push('F2R_RUNTIME_DATA_STILL_LOADING')}
    const critical=c.errors.filter(e=>!/favicon\.ico|apple-touch-icon|robots\.txt/i.test(e));
    for(const message of critical){
      if(/CONSOLE UNKNOWN_URL Failed to load resource.*status of 404/.test(message)){
        (result.warnings ||= []).push('UNLOCATED_404_CONSOLE_MESSAGE_REVIEWED_SEPARATELY');
      }else{result.errors.push(message)}
    }
    if(capture||result.errors.length){const img=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
      const file=mode.name+'_'+(route==='/'?'home':route.replace(/^\/|\/$/g,'').replace(/\//g,'_'))+'.png';
      await writeFile(path.join(out,file),Buffer.from(img.data,'base64'));result.screenshot=file;
    }
   }catch(error){result.errors.push(String(error.message||error))}
   if(result.errors.length){result.status='FAIL';failed++}
   results.push(result);console.log(result.status+' '+mode.name+' '+route+' '+result.errors.join(' | '));
  }c.close()}
 }finally{await chrom.cleanup()}
 const report={schema:'SLACKQUANT_BROWSER_QA_V1',base,checked:results.length,failed,results};
 await writeFile(path.join(out,'qa-summary.json'),JSON.stringify(report,null,2));
 console.log('BROWSER_QA_SUMMARY '+JSON.stringify({checked:results.length,failed}));
 if(failed)process.exitCode=1;
}
await run().catch(e=>{console.error('BROWSER_QA_FATAL',e.stack);process.exitCode=2});
