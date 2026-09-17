(() => {
const D=window.EA_HISTORY_DATA||{},L=window.EA_LIVE_OVERLAY||{};
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const pct=(x,d=1)=>x==null||!isFinite(Number(x))?'—':`${(100*Number(x)).toFixed(d)}%`;
const num=(x,d=2)=>x==null||!isFinite(Number(x))?'—':Number(x).toFixed(d);
const money=x=>{
 if(x==null||!isFinite(Number(x)))return '—';
 const v=Number(x);
 if(Math.abs(v)>=1e9)return '$'+(v/1e9).toFixed(1)+'B';
 if(Math.abs(v)>=1e6)return '$'+(v/1e6).toFixed(1)+'M';
 if(Math.abs(v)>=1e3)return '$'+(v/1e3).toFixed(0)+'K';
 return '$'+v.toFixed(0);
};
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

const EXPOSURE_OVERRIDES={
 'CANONICAL_RUSSELL_1000':'U.S. Large Cap · Russell 1000',
 'US_SECTOR_NATURAL_RESOURCES':'Natural Resources',
 'US_SECTOR_EXPANDED_TECH':'U.S. Expanded Technology',
 'CANONICAL_S_P_500_GROWTH':'U.S. Large-Cap Growth · S&P 500',
 'US_LARGE_NASDAQ100':'U.S. Large-Cap Growth · Nasdaq-100',
 'US_LARGE_CAP_FACTOR_GROWTH':'U.S. Large-Cap Growth',
 'US_LARGE':'U.S. Large Cap',
 'US_SECTOR_SEMICONDUCTOR':'Semiconductors',
 'US_SECTOR_TECHNOLOGY':'U.S. Technology Sector',
 'CANONICAL_S_P_OIL_GAS_EXPLORATION_PRODUCTION':'U.S. Oil & Gas Exploration & Production'
};
function prettyExposure(x){
 const raw=String(x||'').trim();
 if(!raw)return '';
 if(EXPOSURE_OVERRIDES[raw])return EXPOSURE_OVERRIDES[raw];
 if(!raw.includes('_'))return raw;
 let z=raw.replace(/^CANONICAL_/,'').replace(/^US_/,'U.S. ').replace(/_/g,' ');
 z=z.replace(/\bS P\b/g,'S&P').replace(/\bNASDAQ100\b/gi,'Nasdaq-100').replace(/\bEX US\b/gi,'ex-U.S.');
 z=z.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()).replace(/^U\.s\./,'U.S.');
 return z;
}

function prettyRole(x){
 const raw=String(x||'').trim();
 const map={
  'US_CORE_SIZE_STYLE':'U.S. Core / Size / Style',
  'US_SECTOR_INDUSTRY':'U.S. Sector / Industry',
  'SYSTEMATIC_FACTOR':'Systematic Factor',
  'DM_EX_US':'Developed ex-U.S.',
  'EM':'Emerging Markets',
  'THEME':'Thematic',
  'GLOBAL_SECTOR_INDUSTRY':'Global Sector / Industry',
  'GLOBAL_REGION':'Global Region',
  'Static-74 Anchor':'Static Anchor'
 };
 if(map[raw])return map[raw];
 if(!raw.includes('_'))return raw;
 return raw.replace(/_/g,' ').toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()).replace(/^Us\b/,'U.S.');
}

// Fail-safe display provenance: historical/current Universe data owns the canonical
// mutually-exclusive role_family.  Live/ticker display labels may never redefine it.
const CANONICAL_ROLE_BY_TICKER=new Map();
[...(D.universe?.historicalUnion||[]),...(D.universe?.latest||[])].forEach(x=>{
 const t=String(x.ticker||'').toUpperCase();
 const r=String(x.roleFamily||'');
 if(t&&r)CANONICAL_ROLE_BY_TICKER.set(t,r);
});
function canonicalRoleForTicker(ticker,fallback=''){
 return CANONICAL_ROLE_BY_TICKER.get(String(ticker||'').toUpperCase())||String(fallback||'');
}

const tooltip=document.createElement('div');tooltip.className='chart-tooltip';document.body.appendChild(tooltip);

let alphaWeight=Number(D.profileConfig?.defaultAlphaWeight??1);
let universeEngine='broad';
let universeView='latest';
let historySleeve='broad';
let profileCache=new Map();

function clamp(x,a,b){return Math.min(b,Math.max(a,x))}
function mean(a){const z=a.filter(Number.isFinite);return z.length?z.reduce((s,x)=>s+x,0)/z.length:null}
function stdev(a){
 const z=a.filter(Number.isFinite); if(z.length<2)return null;
 const m=mean(z); return Math.sqrt(z.reduce((s,x)=>s+(x-m)*(x-m),0)/(z.length-1));
}
function mddFromWealth(w){
 if(!w.length)return null; let p=1,m=0;
 w.forEach(x=>{p=Math.max(p,x);m=Math.min(m,x/p-1)}); return m;
}
function rollingMetric(pr,br,w,kind){
 const out=new Array(pr.length).fill(null);
 for(let i=w-1;i<pr.length;i++){
  const ex=[];
  for(let k=i-w+1;k<=i;k++){
   if(Number.isFinite(pr[k])&&Number.isFinite(br[k]))ex.push(pr[k]-br[k]);
  }
  if(ex.length!==w)continue;
  const sd=stdev(ex); if(!(sd>0))continue;
  const ar=mean(ex)*252, te=sd*Math.sqrt(252);
  out[i]=kind==='te'?te:ar/te;
 }
 return out;
}
function profileKey(a){return Number(a).toFixed(4)}
function buildProfile(a){
 a=clamp(Number(a),0,1);
 const key=profileKey(a); if(profileCache.has(key))return profileCache.get(key);
 const auth=D.dailyPerformanceAuthority||{};
 const periods=auth.periods||[];
 if(!periods.length){
  const emptyMetrics={cumulative:null,cagr:null,vol:null,sharpe:null,mdd:null,activeReturn:null,te:null,ir:null,calmar:null,allocationCostDrag:null};
  const empty={alphaWeight:a,coreWeight:1-a,dates:[],portfolioReturn:[],benchmarkReturn:[],portfolioWealth:[],benchmarkWealth:[],relativeWealth:[],portfolioDrawdown:[],benchmarkDrawdown:[],rollingTE12:[],rollingTE24:[],rollingIR12:[],rollingIR24:[],monthly:[],support:{start:'—',end:'—',holdingStart:'—',holdingEnd:'—',dailyObservations:0,completedMonths:0},benchmarkMetrics:{cumulative:null,cagr:null,vol:null,sharpe:null,mdd:null,calmar:null},metrics:emptyMetrics,unavailable:true};
  profileCache.set(key,empty);return empty;
 }
 const rate=Number(D.profileConfig?.allocationCostBpsPerSide??10)/10000;
 let prevAlphaRet=null,prevBmRet=null,wealthStart=1,bwealthStart=1,totalAllocCost=0;
 const navByDate=new Map(),bnavByDate=new Map(),monthly=[];
 navByDate.set(String(auth.baselineDate),1);bnavByDate.set(String(auth.baselineDate),1);
 periods.forEach((r,i)=>{
  let preAlpha=a;
  if(i>0){
   const den=a*(1+prevAlphaRet)+(1-a)*(1+prevBmRet);
   preAlpha=den>0?a*(1+prevAlphaRet)/den:a;
  }
  const ow=Math.abs(a-preAlpha), ac=2*ow*rate; totalAllocCost+=ac;
  const pts=r.points||[];
  pts.forEach(pt=>{
   const af=Number(pt.alphaNetFactor),bf=Number(pt.benchmarkFactor);
   const pf=a*af+(1-a)*bf-ac;
   navByDate.set(String(pt.date),wealthStart*pf);
   bnavByDate.set(String(pt.date),bwealthStart*bf);
  });
  const last=pts[pts.length-1];
  if(!last)return;
  const af=Number(last.alphaNetFactor),bf=Number(last.benchmarkFactor);
  const ret=a*(af-1)+(1-a)*(bf-1)-ac;
  monthly.push({month:r.holdingMonth,holdingMonth:r.holdingMonth,signalMonth:r.signalMonth,portfolio:ret,benchmark:bf-1,active:ret-(bf-1),alphaReturn:af-1});
  wealthStart*=1+ret;bwealthStart*=bf;prevAlphaRet=af-1;prevBmRet=bf-1;
 });
 const dates=[...navByDate.keys()].sort();
 const nw=dates.map(d=>Number(navByDate.get(d))),bw=dates.map(d=>Number(bnavByDate.get(d)));
 const pr=new Array(dates.length).fill(null),br=new Array(dates.length).fill(null);
 for(let i=1;i<dates.length;i++){pr[i]=nw[i]/nw[i-1]-1;br[i]=bw[i]/bw[i-1]-1;}
 const rr=pr.filter(Number.isFinite),bb=br.filter(Number.isFinite),ex=pr.map((x,i)=>Number.isFinite(x)&&Number.isFinite(br[i])?x-br[i]:null).filter(Number.isFinite);
 const n=rr.length, years=n/252, vol=(stdev(rr)||0)*Math.sqrt(252),te=(stdev(ex)||0)*Math.sqrt(252),active=(mean(ex)||0)*252,ir=te>0?active/te:null;
 const cagr=n&&nw.length?Math.pow(nw[nw.length-1]/nw[0],1/years)-1:null;
 const p={
  alphaWeight:a,coreWeight:1-a,dates,portfolioReturn:pr,benchmarkReturn:br,
  portfolioWealth:nw,benchmarkWealth:bw,relativeWealth:nw.map((x,i)=>x/bw[i]-1),
  portfolioDrawdown:(()=>{let pk=1;return nw.map(x=>{pk=Math.max(pk,x);return x/pk-1})})(),
  benchmarkDrawdown:(()=>{let pk=1;return bw.map(x=>{pk=Math.max(pk,x);return x/pk-1})})(),
  rollingTE12:rollingMetric(pr,br,252,'te'),rollingTE24:rollingMetric(pr,br,504,'te'),
  rollingIR12:rollingMetric(pr,br,252,'ir'),rollingIR24:rollingMetric(pr,br,504,'ir'),
  monthly,
  support:{start:dates[0],end:dates[dates.length-1],holdingStart:monthly.length?monthly[0].holdingMonth:null,holdingEnd:monthly.length?monthly[monthly.length-1].holdingMonth:null,dailyObservations:n,completedMonths:monthly.length},
  benchmarkMetrics:{cumulative:bw[bw.length-1]/bw[0]-1,cagr:n?Math.pow(bw[bw.length-1]/bw[0],1/years)-1:null,vol:(stdev(bb)||0)*Math.sqrt(252),sharpe:(stdev(bb)||0)>0?(mean(bb)/(stdev(bb)||1))*Math.sqrt(252):null,mdd:mddFromWealth(bw)},
  metrics:{cumulative:nw[nw.length-1]/nw[0]-1,cagr,vol,sharpe:(stdev(rr)||0)>0?(mean(rr)/(stdev(rr)||1))*Math.sqrt(252):null,mdd:mddFromWealth(nw),activeReturn:active,te,ir,calmar:null,allocationCostDrag:years>0?totalAllocCost/years:null}
 };
 p.metrics.calmar=p.metrics.mdd<0&&p.metrics.cagr!=null?p.metrics.cagr/Math.abs(p.metrics.mdd):null;
 p.benchmarkMetrics.calmar=p.benchmarkMetrics.mdd<0&&p.benchmarkMetrics.cagr!=null?p.benchmarkMetrics.cagr/Math.abs(p.benchmarkMetrics.mdd):null;
 profileCache.set(key,p);return p;
}
function currentProfile(){return buildProfile(alphaWeight)}
function profileLabel(a=alphaWeight){return `ACWI core ${pct(1-a,0)} / Alpha ${pct(a,0)}`}
function alphaBaseHoldings(){
 if(Array.isArray(L.currentHoldings)&&L.currentHoldings.length){
   return L.currentHoldings.map((x,i)=>({rank:x.broadRank??(x.inStatic&&!x.inBroad?'S':i+1),ticker:String(x.ticker),name:String(x.name||''),roleFamily:prettyRole(canonicalRoleForTicker(x.ticker,x.roleFamily||'')),exposureGroup:prettyExposure(x.exposureGroup||''),weight:Number(x.targetWeight||0),currentAlphaWeight:Number(x.currentWeight??x.targetWeight??0),holdingReturn:Number(x.holdingReturn??0),score:x.broadScore==null?null:Number(x.broadScore),inBroad:Boolean(x.inBroad),inStatic:Boolean(x.inStatic),source:'LIVE'}));
 }
 return (D.currentAlphaHoldings||[]).map((x,i)=>({rank:x.broadRank??x.rank??i+1,ticker:String(x.ticker),name:String(x.name||''),roleFamily:prettyRole(canonicalRoleForTicker(x.ticker,x.roleFamily||'')),exposureGroup:prettyExposure(x.exposureGroup||''),weight:Number(x.weight??x.targetWeight??0),currentAlphaWeight:Number(x.weight??x.targetWeight??0),holdingReturn:null,score:x.score==null?null:Number(x.score),inBroad:x.inBroad!==false,inStatic:Boolean(x.inStatic),source:'HISTORICAL_FALLBACK'}));
}

function previewBaseHoldings(){
 const rows=Array.isArray(L.preview?.holdings)?L.preview.holdings:[];
 return rows.filter(x=>Number(x.targetWeight||0)>1e-12).map((x,i)=>({
   rank:x.rank??(x.inStatic&&!x.inBroad?'S':i+1),
   ticker:String(x.ticker),name:String(x.name||''),
   roleFamily:prettyRole(canonicalRoleForTicker(x.ticker,x.roleFamily||'')),
   exposureGroup:prettyExposure(x.exposureGroup||''),
   weight:Number(x.targetWeight||0),
   score:x.score==null?null:Number(x.score),
   rex2Rank:x.rex2Rank??null,chronosRank:x.chronosRank??null,
   staticRank:x.staticRank??null,staticScore:x.staticScore==null?null:Number(x.staticScore),
   inBroad:Boolean(x.inBroad),inStatic:Boolean(x.inStatic),
   previewStatus:String(x.previewStatus||''),
   officialWeight:Number(x.officialWeight||0),
   weightChange:Number(x.weightChange||0)
 }));
}
function previewInvestorHoldings(){
 const core=1-alphaWeight,rows=[];
 if(core>1e-10)rows.push({
   rank:'CORE',ticker:'ACWI',name:'iShares MSCI ACWI ETF',
   roleFamily:'Benchmark Core',exposureGroup:'Global Equity',
   targetWeight:core,officialWeight:core,weightChange:0,
   status:'CORE',previewStatus:'UNCHANGED'
 });
 previewBaseHoldings().forEach(x=>rows.push({
   ...x,targetWeight:alphaWeight*Number(x.weight||0),
   officialWeight:alphaWeight*Number(x.officialWeight||0),
   weightChange:alphaWeight*Number(x.weightChange||0),
   status:'ALPHA'
 }));
 return rows;
}

function investorHoldings(){
 const core=1-alphaWeight,rows=[];
 const alphaRows=alphaBaseHoldings();
 const alphaMtd=Number(L.currentPerformance?.alphaMtd??0);
 const bmMtd=Number(L.currentPerformance?.benchmarkMtd??0);
 const alphaValue=alphaWeight*(1+alphaMtd);
 const coreValue=core*(1+bmMtd);
 const totalValue=alphaValue+coreValue;
 if(core>1e-10)rows.push({
   rank:'CORE',ticker:'ACWI',roleFamily:'Benchmark Core',
   exposureGroup:'Global Equity',targetWeight:core,
   currentWeight:totalValue>0?coreValue/totalValue:core,
   holdingReturn:bmMtd,score:null,status:'CORE',inBroad:false,inStatic:false
 });
 alphaRows.forEach(x=>rows.push({
   ...x,
   targetWeight:alphaWeight*Number(x.weight||0),
   currentWeight:totalValue>0?(alphaValue*Number(x.currentAlphaWeight||0))/totalValue:alphaWeight*Number(x.currentAlphaWeight||0),
   status:'ALPHA'
 }));
 return rows;
}
function setAlphaWeight(a){
 alphaWeight=clamp(Number(a),0,1);
 renderGlobalProfileControl();renderCockpit();renderPerformance();renderHoldings();renderHistory();renderRisk();
}
function renderGlobalProfileControl(){
 const sel=$('#globalProfileSelect');if(!sel)return;
 const presets=D.profileConfig?.presetAlphaWeights||[.25,.5,.75,1];
 const preset=presets.some(x=>Math.abs(Number(x)-alphaWeight)<1e-9);
 sel.innerHTML=presets.map(a=>`<option value="${a}" ${Math.abs(a-alphaWeight)<1e-9?'selected':''}>Core ${pct(1-a,0)} / Alpha ${pct(a,0)}</option>`).join('')
   +(preset?'':`<option value="${alphaWeight}" selected>Custom · Core ${pct(1-alphaWeight,0)} / Alpha ${pct(alphaWeight,0)}</option>`);
 sel.onchange=()=>setAlphaWeight(Number(sel.value));
 const ctx=$('#globalProfileContext');if(ctx)ctx.textContent=`${profileLabel()} · TE ${pct(currentProfile().metrics.te,2)}`;
}
function showTip(e,html){tooltip.innerHTML=html;tooltip.style.display='block';tooltip.style.left=(e.clientX+13)+'px';tooltip.style.top=(e.clientY+13)+'px'}
function hideTip(){tooltip.style.display='none'}
function svgLine(el,series,opts={}){
 if(!el)return;
 const w=900,h=270,p={l:48,r:18,t:15,b:32};
 const vals=series.flatMap(s=>s.values.filter(v=>v!=null&&isFinite(v)));
 if(!vals.length){el.innerHTML='<div class="muted">No chart data.</div>';return}
 let ymin=opts.includeZero?Math.min(0,...vals):Math.min(...vals),ymax=opts.includeZero?Math.max(0,...vals):Math.max(...vals);
 if(ymin===ymax){ymin-=1;ymax+=1}const pad=(ymax-ymin)*.08;ymin-=pad;ymax+=pad;
 const n=Math.max(...series.map(s=>s.values.length)),x=i=>p.l+(w-p.l-p.r)*(i/Math.max(1,n-1)),y=v=>p.t+(h-p.t-p.b)*(1-(v-ymin)/(ymax-ymin));
 let g='';for(let k=0;k<5;k++){const yy=p.t+(h-p.t-p.b)*k/4,v=ymax-(ymax-ymin)*k/4;g+=`<line x1="${p.l}" y1="${yy}" x2="${w-p.r}" y2="${yy}" stroke="#17303d"/><text x="${p.l-8}" y="${yy+3}" fill="#67818f" font-size="9" text-anchor="end">${opts.format?opts.format(v):v.toFixed(2)}</text>`}
 const colors=['#52d3a7','#68a8ff','#ffcf70','#f29fbc'];let lines='';
 series.forEach((s,j)=>{let d='',started=false;s.values.forEach((v,i)=>{if(v==null||!isFinite(v)){started=false;return}d+=(started?'L':'M')+x(i)+','+y(v);started=true});lines+=`<path d="${d}" fill="none" stroke="${colors[j%colors.length]}" stroke-width="${j===0?2.3:1.8}" vector-effect="non-scaling-stroke"/>`});
 const labels=opts.labels||[];let ticks='';[0,Math.floor((n-1)/2),n-1].filter((v,i,a)=>a.indexOf(v)===i&&v>=0).forEach(i=>ticks+=`<text x="${x(i)}" y="${h-8}" fill="#67818f" font-size="9" text-anchor="${i===0?'start':i===n-1?'end':'middle'}">${esc(labels[i]||'')}</text>`);
 let hover='';for(let i=0;i<n;i++)hover+=`<rect data-i="${i}" x="${Math.max(p.l,x(i)-(w-p.l-p.r)/Math.max(1,n-1)/2)}" y="${p.t}" width="${Math.max(4,(w-p.l-p.r)/Math.max(1,n-1))}" height="${h-p.t-p.b}" fill="transparent"/>`;
 el.innerHTML=`<svg class="svgchart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">${g}${lines}${ticks}${hover}</svg>`;
 el.querySelectorAll('rect[data-i]').forEach(r=>{r.addEventListener('mousemove',e=>{const i=Number(r.dataset.i);showTip(e,`<b>${esc(labels[i]||'')}</b><br>`+series.map(s=>`${esc(s.name)}: <b>${opts.format?opts.format(s.values[i]):num(s.values[i])}</b>`).join('<br>'))});r.addEventListener('mouseleave',hideTip)});
}
function bars(el,rows,valueKey,labelKey,format=pct,coreKey=null){
 if(!el)return;
 const max=Math.max(...rows.map(r=>Math.abs(Number(r[valueKey]||0))),1e-9);
 el.innerHTML=rows.map(r=>`<div class="bar-row"><span class="bar-label" title="${esc(r[labelKey])}">${esc(r[labelKey])}</span><div class="bar-track"><div class="bar-fill ${coreKey&&r[coreKey]?'core':''}" style="width:${Math.min(100,Math.abs(Number(r[valueKey]||0))/max*100)}%"></div></div><b class="bar-value">${format(r[valueKey])}</b></div>`).join('');
}
function groupedReturnBars(el,rows,labelKey){
 if(!el||!rows.length){if(el)el.innerHTML='<div class="muted">No return data.</div>';return}
 const series=[{key:'portfolio',color:'#52d3a7'},{key:'benchmark',color:'#68a8ff'},{key:'active',color:'#ffcf70'}];
 const w=920,h=300,p={l:50,r:18,t:26,b:54},vals=rows.flatMap(r=>series.map(s=>Number(r[s.key])).filter(Number.isFinite));
 const ymax=Math.max(0,...vals),ymin=Math.min(0,...vals),span=Math.max(1e-9,ymax-ymin),pad=span*.12,yhi=ymax+pad,ylo=ymin-pad;
 const y=v=>p.t+(h-p.t-p.b)*(1-(v-ylo)/(yhi-ylo)),y0=y(0),groupW=(w-p.l-p.r)/rows.length,barW=Math.max(2,Math.min(16,groupW*.22));
 let svg='';for(let k=0;k<5;k++){const yy=p.t+(h-p.t-p.b)*k/4,v=yhi-(yhi-ylo)*k/4;svg+=`<line x1="${p.l}" y1="${yy}" x2="${w-p.r}" y2="${yy}" stroke="#17303d"/><text x="${p.l-8}" y="${yy+3}" fill="#67818f" font-size="9" text-anchor="end">${pct(v,0)}</text>`}
 svg+=`<line x1="${p.l}" y1="${y0}" x2="${w-p.r}" y2="${y0}" stroke="#49606d"/>`;
 rows.forEach((r,i)=>{const cx=p.l+groupW*(i+.5);series.forEach((s,j)=>{const v=Number(r[s.key]);if(!Number.isFinite(v))return;const bx=cx+(j-1)*barW*1.15-barW/2,yy=y(v),bh=Math.max(1,Math.abs(y0-yy)),by=Math.min(y0,yy);svg+=`<rect x="${bx}" y="${by}" width="${barW}" height="${bh}" fill="${s.color}" rx="1"><title>${esc(r[labelKey])}: ${pct(v,2)}</title></rect>`});if(rows.length<=14||i%Math.ceil(rows.length/12)===0||i===rows.length-1)svg+=`<text x="${cx}" y="${h-18}" fill="#67818f" font-size="9" text-anchor="middle">${esc(r[labelKey])}</text>`});
 el.innerHTML=`<div class="legend"><span class="a"><i></i>Portfolio</span><span class="b"><i></i>ACWI ETF</span><span class="c"><i></i>Excess</span></div><svg class="svgchart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">${svg}</svg>`;
}
function annualRows(P){
 const groups={};P.monthly.forEach(r=>{const y=String(r.month).slice(0,4);if(!groups[y])groups[y]=[];groups[y].push(r)});
 return Object.keys(groups).sort().map(y=>{const rr=groups[y],pr=rr.reduce((w,r)=>w*(1+r.portfolio),1)-1,br=rr.reduce((w,r)=>w*(1+r.benchmark),1)-1;return{year:Number(y),portfolio:pr,benchmark:br,active:pr-br}});
}
function metricCards(m){
 return `<div class="mini"><span>Active return vs ACWI</span><b>${pct(m.activeReturn,2)}</b></div><div class="mini"><span>Tracking error</span><b>${pct(m.te,2)}</b></div><div class="mini"><span>Information ratio</span><b>${num(m.ir,2)}</b></div><div class="mini"><span>CAGR</span><b>${pct(m.cagr,2)}</b></div><div class="mini"><span>Volatility</span><b>${pct(m.vol,2)}</b></div><div class="mini"><span>Max drawdown</span><b>${pct(m.mdd,2)}</b></div>`;
}

function liveProfile(a){
 const cur=L.currentPerformance||{};if(cur.alphaMtd==null||cur.benchmarkMtd==null)return null;a=clamp(Number(a),0,1);
 const rows=D.performanceRows||[],last=rows.length?rows[rows.length-1]:null,rate=Number(D.profileConfig?.allocationCostBpsPerSide??10)/10000;let cost=0;
 if(last){const pa=Number(last.alphaNetReturn),pb=Number(last.benchmarkReturn),den=a*(1+pa)+(1-a)*(1+pb),pre=den>0?a*(1+pa)/den:a;cost=2*Math.abs(a-pre)*rate}
 const mtd=a*Number(cur.alphaMtd)+(1-a)*Number(cur.benchmarkMtd)-cost,bm=Number(cur.benchmarkMtd),yr=Number(String(L.meta?.holdingMonth||'').slice(0,4));let fy=1,fb=1;
 currentProfile().monthly.forEach(r=>{const src=(D.performanceRows||[]).find(x=>x.signalMonth===r.signalMonth);if(src&&Number(String(src.holdingMonth).slice(0,4))===yr){fy*=1+r.portfolio;fb*=1+r.benchmark}});fy*=1+mtd;fb*=1+bm;
 return {mtd,benchmarkMtd:bm,activeMtd:mtd-bm,ytd:fy-1,benchmarkYtd:fb-1,activeYtd:fy-fb,allocationCost:cost};
}







function rankBandLabel(zone){
 const z=String(zone||'');
 const map={
  'TOP10_ENTRY':'Entry zone · ranks 1–10',
  'HOLD_ZONE_11_TO_15':'Hold buffer · ranks 11–15',
  'NEAR_MISS_TOP20':'Watchlist · ranks 16–20',
  'OUTSIDE_TOP20':'Outside Top 20',
  'UNSCORED':'Not scored'
 };
 return map[z]||z.replaceAll('_',' ');
}
function rankDecisionLabel(status,unscored=''){
 const s=String(status||'');
 const map={
  'SELECTED_TOP10':'HELD · rank 1–10',
  'SELECTED_HOLD_ZONE':'HELD · buffer 11–15',
  'TOP10_NOT_SELECTED_CAPACITY':'WAIT · top-10, no slot',
  'HOLD_ZONE_NOT_CURRENT':'NOT HELD · buffer 11–15',
  'NEAR_MISS':'WATCH · rank 16–20',
  'NOT_SELECTED':'OUTSIDE · not held'
 };
 if(map[s])return map[s];
 if(unscored)return `Not scored · ${String(unscored).replaceAll('_',' ')}`;
 return s?s.replaceAll('_',' '):'—';
}
function rankDecisionClass(status){
 const s=String(status||'');
 if(s.startsWith('SELECTED'))return 'good';
 if(s==='TOP10_NOT_SELECTED_CAPACITY')return 'warn';
 return 'muted';
}

function staticDecisionLabel(status){
 const s=String(status||'');
 const map={
  'SELECTED':'HELD · Static-v1',
  'ENTRY_BAND_NOT_SELECTED':'WAIT · rank 1–10, no slot',
  'HOLD_BUFFER_NOT_HELD':'NOT HELD · buffer 11–15',
  'OUTSIDE_HOLD':'OUTSIDE · rank >15',
  'UNSCORED':'NOT SCORED'
 };
 return map[s]||s.replaceAll('_',' ')||'—';
}
function staticDecisionClass(status){
 const s=String(status||'');
 if(s==='SELECTED')return 'good';
 if(s==='ENTRY_BAND_NOT_SELECTED')return 'warn';
 return 'muted';
}

function holdingSourceLabel(x){
 if(x.inBroad&&x.inStatic)return 'B+S';
 if(x.inBroad)return 'BROAD';
 if(x.inStatic)return 'STATIC';
 return '—';
}
function holdingRankLabel(x){
 if(!x.inBroad)return '—';
 return x.rank==null?'—':`#${x.rank}`;
}
function holdingReasonLabel(x){
 if(x.inBroad&&x.inStatic){
  if(Number(x.rank)<=10)return `Broad #${x.rank} + Static anchor`;
  return `Broad hold #${x.rank} + Static anchor`;
 }
 if(x.inBroad){
  return Number(x.rank)<=10?`Broad #${x.rank} · entry zone`:`Broad #${x.rank} · hold buffer`;
 }
 if(x.inStatic)return 'Static anchor only';
 return '—';
}
function holdingCard(x){
 const src=holdingSourceLabel(x);
 const sourceClass=src==='STATIC'?'muted':'good';
 const staticBadge=x.inStatic?'<span class="pill muted">STATIC</span>':'';
 const broadBadge=x.inBroad?`<span class="pill good">BROAD ${holdingRankLabel(x)}</span>`:'';
 return `<div class="holding-card">
   <div class="holding-card-top">
    <div class="holding-ticker"><b>${esc(x.ticker)}</b><span>${esc(x.exposureGroup)}</span></div>
    <div class="holding-weight">${pct(x.targetWeight,2)}</div>
   </div>
   <div class="holding-card-bottom">
    <div class="holding-badges">${broadBadge}${staticBadge}</div>
    <div class="holding-reason">${esc(holdingReasonLabel(x))}</div>
   </div>
  </div>`;
}

function previewStatusLabel(s){
 const x=String(s||'').toUpperCase();
 if(x==='NEW')return 'NEW';
 if(x==='WEIGHT_CHANGE')return 'WEIGHT CHANGE';
 if(x==='UNCHANGED')return 'UNCHANGED';
 if(x==='CORE')return 'CORE';
 return x||'—';
}
function previewStatusClass(s){
 const x=String(s||'').toUpperCase();
 if(x==='NEW')return 'good';
 if(x==='WEIGHT_CHANGE')return 'warn';
 return 'muted';
}
function previewReasonLabel(x){
 const broad=x.inBroad&&x.rank!=null?`Broad #${x.rank}`:null;
 const stat=x.inStatic?(x.staticRank!=null?`Static #${x.staticRank}`:'Static anchor'):null;
 const status=previewStatusLabel(x.previewStatus);
 if(broad&&stat)return `${broad} + ${stat} · ${status}`;
 if(broad)return `${broad} · ${status}`;
 if(stat)return `${stat} · ${status}`;
 return status;
}
function previewHoldingCard(x){
 const staticBadge=x.inStatic?`<span class="pill muted">STATIC${x.staticRank!=null?' #'+x.staticRank:''}</span>`:'';
 const broadBadge=x.inBroad?`<span class="pill good">BROAD ${holdingRankLabel(x)}</span>`:'';
 const statusBadge=`<span class="pill ${previewStatusClass(x.previewStatus)}">${esc(previewStatusLabel(x.previewStatus))}</span>`;
 return `<div class="holding-card preview-card ${String(x.previewStatus||'').toLowerCase()}">
   <div class="holding-card-top">
    <div class="holding-ticker"><b>${esc(x.ticker)}</b><span>${esc(x.exposureGroup)}</span></div>
    <div class="holding-weight">${pct(x.targetWeight,2)}</div>
   </div>
   <div class="holding-card-bottom">
    <div class="holding-badges">${broadBadge}${staticBadge}${statusBadge}</div>
    <div class="holding-reason">${esc(previewReasonLabel(x))}</div>
   </div>
  </div>`;
}
function renderCockpit(){
 const P=currentProfile(),m=P.metrics,h=investorHoldings(),LP=liveProfile(alphaWeight),lm=L.meta||{};
 $('#liveKpis').innerHTML=[
  ['Current MTD · Portfolio',LP?pct(LP.mtd,2):'—','current investor profile'],
  ['Current MTD · ACWI',LP?pct(LP.benchmarkMtd,2):'—','benchmark'],
  ['Current MTD · Excess',LP?pct(LP.activeMtd,2):'—','portfolio − ACWI'],
  ['Current YTD · Portfolio',LP?pct(LP.ytd,2):'—','including current MTD'],
  ['Current YTD · ACWI',LP?pct(LP.benchmarkYtd,2):'—','benchmark'],
  ['Current YTD · Excess',LP?pct(LP.activeYtd,2):'—','portfolio − ACWI']
 ].map((x,i)=>`<div class="kpi ${i===2||i===5?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${x[2]}</div></div>`).join('');
 $('#mtdPanelPortfolio').textContent=LP?pct(LP.mtd,2):'—';
 $('#mtdPanelAcwi').textContent=LP?pct(LP.benchmarkMtd,2):'—';
 $('#mtdPanelExcess').textContent=LP?pct(LP.activeMtd,2):'—';
 $('#mtdPanelAsOf').textContent=(L.meta?.marketDataThrough||'—')+' · separate from completed history';
 $('#cockpitKpis').innerHTML=[
  ['Information ratio',num(m.ir,2),profileLabel()],
  ['Active return',pct(m.activeReturn,2),'annualized vs ACWI'],
  ['Tracking error',pct(m.te,2),'profile realized TE'],
  ['CAGR',pct(m.cagr,2),'historical net profile']
 ].map((x,i)=>`<div class="kpi ${i===0?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${x[2]}</div></div>`).join('');
 const ah=alphaBaseHoldings(),broadN=ah.filter(x=>x.inBroad).length,staticN=ah.filter(x=>x.inStatic).length,overlapN=ah.filter(x=>x.inBroad&&x.inStatic).length;
 $('#cockpitProfileContext').textContent=`OFFICIAL PORTFOLIO · Signal ${L.meta?.signalMonth||'—'} → Holding ${L.meta?.holdingMonth||'—'} · ${ah.length} unique alpha names`;
 $('#officialPortfolioLegend').innerHTML=`<span><b>Broad 90%</b> · ${broadN} positions</span><span><b>Static anchor 10%</b> · ${staticN} positions</span><span><b>Overlap merged</b> · ${overlapN}</span>`;
 $('#latestHoldings').innerHTML=h.filter(x=>x.status!=='CORE').map(holdingCard).join('');
 const ph=previewInvestorHoldings(),pm=L.preview?.meta||{};
 const previewOk=pm.status==='PREVIEW';
 const pha=ph.filter(x=>x.status!=='CORE');
 const pBroadN=pha.filter(x=>x.inBroad).length,pStaticN=pha.filter(x=>x.inStatic).length,pOverlapN=pha.filter(x=>x.inBroad&&x.inStatic).length;
 const pNewN=pha.filter(x=>String(x.previewStatus).toUpperCase()==='NEW').length,pChangeN=pha.filter(x=>String(x.previewStatus).toUpperCase()==='WEIGHT_CHANGE').length;
 $('#previewProfileContext').textContent=previewOk?`PREVIEW — NOT EXECUTED · As-of ${pm.previewAsOf} · Candidate Signal ${pm.prospectiveSignalMonth} → Holding ${pm.prospectiveHoldingMonth}`:`Preview unavailable${pm.reason?' · '+pm.reason:''}`;
 const staticPreviewActive=String(pm.staticPreviewStatus||'').startsWith('ACTIVE');
 $('#previewPortfolioLegend').innerHTML=previewOk?`<span><b>Broad 90%</b> · ${pBroadN} positions</span><span><b>Static 10%</b> · ${pStaticN} positions · ${staticPreviewActive?(pm.staticPreviewStatus==='ACTIVE'?'intramonth candidate':'candidate · reduced source coverage'):'Official carry fallback'}</span><span><b>Overlap merged</b> · ${pOverlapN}</span><span><b>Changes</b> · ${pNewN} new / ${pChangeN} weight</span>`:'<span><b>Preview unavailable</b></span>';
 $('#previewHoldings').innerHTML=previewOk?pha.map(previewHoldingCard).join(''):'<div class="preview-unavailable">No executable Preview portfolio is available for this refresh.</div>';
 $('#previewSummary').innerHTML=previewOk?[
   ['Status',pm.executionStatus||'NOT_EXECUTED'],
   ['Preview as-of',pm.previewAsOf||'—'],
   ['Candidate signal',pm.prospectiveSignalMonth||'—'],
   ['Candidate holding',pm.prospectiveHoldingMonth||'—'],
   ['Static 10%',staticPreviewActive?`Intramonth candidate · Static-v1${pm.staticPreviewStatus==='ACTIVE_DEGRADED_SOURCE_COVERAGE'?' · reduced source coverage':''}`:'Preview unavailable · current Official carried']
 ].map(x=>`<div class="status-row"><span>${esc(x[0])}</span><b>${esc(x[1])}</b></div>`).join(''):'<div class="status-row"><span>Status</span><b>Unavailable</b></div>';
 const core=1-alphaWeight,donut=$('#allocationDonut');if(donut)donut.style.background=`conic-gradient(var(--accent2) 0 ${core*100}%,var(--accent) ${core*100}% 100%)`;
 $('#donutTE').textContent=pct(m.te,2);
 $('#allocationSummary').innerHTML=`<div class="status-row"><span>ACWI core</span><b>${pct(core,0)}</b></div><div class="status-row"><span>Alpha sleeve</span><b>${pct(alphaWeight,0)}</b></div><div class="status-row"><span>Profile IR</span><b>${num(m.ir,2)}</b></div><div class="status-row"><span>Allocation cost drag</span><b>${pct(m.allocationCostDrag,3)}</b></div>`;
 svgLine($('#cockpitWealthChart'),[{name:'Investor portfolio',values:P.portfolioWealth},{name:'ACWI ETF',values:P.benchmarkWealth}],{labels:P.dates,format:v=>num(v,2)});
 const dm=D.model?.developmentMetrics||{},bm=D.model?.temporalBridgeMetrics||{},fm=D.model||{};
 const modelCombined=Number(fm.combinedIR??fm.combined_ir??fm.ir);
 const modelDev=Number(fm.developmentIR??fm.development_ir??dm.ir);
 const modelBridge=Number(fm.temporalBridgeIR??fm.temporal_bridge_ir??bm.ir);
 const rw=(Array.isArray(L.rankWatch)&&L.rankWatch.length)?L.rankWatch:(D.rankWatchlist||[]);
 $('#rankWatchBody').innerHTML=rw.map(r=>`<tr class="${String(r.status).startsWith('SELECTED')?'selected-row':''}"><td class="num"><b>${r.rank}</b></td><td><b>${esc(r.ticker)}</b></td><td class="num">${r.rex2Rank??'—'}</td><td class="num">${r.chronosRank??'—'}</td><td><span class="pill ${rankDecisionClass(r.status)}">${esc(rankDecisionLabel(r.status))}</span></td></tr>`).join('');
 const sw=Number(D.model?.legacyStaticWeight||0);
 $('#regularizationSummary').innerHTML=[
  ['Broad engine',`${pct(D.model?.legacyBroadWeight??1,0)} · ${D.model?.selected_lane_id||D.model?.selectedLaneId||'—'}`],
  ['Static-74 anchor',pct(sw,0)],
  ['Broad robust-floor IR',num(D.model?.robust_floor_ir,2)],
  ['Selection objective','Maximize weaker of Development / Bridge IR'],
  ['Static mix search','Only 0% / 10% / 20%; smallest passing risk gate']
 ].map(x=>`<div class="status-row"><span>${esc(x[0])}</span><b>${esc(x[1])}</b></div>`).join('');
 $('#evidenceMap').innerHTML=[
  ['Selected lane',D.model?.selectedLaneId||D.model?.selected_lane_id||'—'],
  ['Broad combined IR',num(modelCombined,2)],
  ['Development IR',num(modelDev,2)],
  ['Temporal-bridge IR',num(modelBridge,2)],
  ['Current official signal',L.meta?.signalMonth||D.meta?.latestSignalMonth||'—'],
  ['Current holding month',L.meta?.holdingMonth||'—'],
  ['Market data through',L.meta?.marketDataThrough||'—'],
  ['Last completed holding',D.meta?.performanceThroughHoldingMonth||'—'],
  ['Last completed signal',D.meta?.performanceThroughSignalMonth||'—'],
  ['Preview candidate signal',L.preview?.meta?.prospectiveSignalMonth||'—'],
  ['Preview candidate holding',L.preview?.meta?.prospectiveHoldingMonth||'—']
 ].map(x=>`<div class="status-row"><span>${esc(x[0])}</span><b>${esc(x[1])}</b></div>`).join('');
}
function renderPerformance(){
 const P=currentProfile();
 $('#profileTabs').innerHTML=(D.profileConfig?.presetAlphaWeights||[]).map(a=>`<button data-a="${a}" class="${Math.abs(a-alphaWeight)<1e-9?'active':''}">Core ${pct(1-a,0)} / Alpha ${pct(a,0)}</button>`).join('');
 $('#profileTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>setAlphaWeight(Number(b.dataset.a)));
 const slider=$('#alphaWeightSlider');slider.value=String(Math.round(alphaWeight*100));slider.oninput=()=>setAlphaWeight(Number(slider.value)/100);
 $('#alphaWeightLabel').textContent=pct(alphaWeight,0);$('#coreWeightLabel').textContent=`ACWI core ${pct(1-alphaWeight,0)}`;$('#sliderTE').textContent=pct(P.metrics.te,2);
 $('#profileMetrics').innerHTML=metricCards(P.metrics);
 const bm=P.benchmarkMetrics||{};
 $('#performanceSummaryPeriod').textContent=P.unavailable?'Daily performance authority not built yet · run [1] Refresh local':`Holding ${P.support.holdingStart} – ${P.support.holdingEnd} · ${P.support.completedMonths} completed months · daily path ${P.support.start} – ${P.support.end} · ${P.support.dailyObservations} observations · 252D`;
 $('#performanceSummaryBody').innerHTML=[
  {name:`Investor portfolio · ${profileLabel()}`,cum:P.metrics.cumulative,cagr:P.metrics.cagr,vol:P.metrics.vol,sh:P.metrics.sharpe,mdd:P.metrics.mdd,cal:P.metrics.calmar,active:P.metrics.activeReturn,te:P.metrics.te,ir:P.metrics.ir,primary:true},
  {name:'ACWI ETF · benchmark',cum:bm.cumulative,cagr:bm.cagr,vol:bm.vol,sh:bm.sharpe,mdd:bm.mdd,cal:bm.calmar,active:null,te:null,ir:null,primary:false}
 ].map(r=>`<tr class="${r.primary?'selected-row':''}"><td><b>${esc(r.name)}</b></td><td class="num">${pct(r.cum,2)}</td><td class="num">${pct(r.cagr,2)}</td><td class="num">${pct(r.vol,2)}</td><td class="num">${num(r.sh,2)}</td><td class="num">${pct(r.mdd,2)}</td><td class="num">${num(r.cal,2)}</td><td class="num">${r.active==null?'—':pct(r.active,2)}</td><td class="num">${r.te==null?'—':pct(r.te,2)}</td><td class="num">${r.ir==null?'—':num(r.ir,2)}</td></tr>`).join('');
 svgLine($('#wealthChart'),[{name:'Investor portfolio',values:P.portfolioWealth},{name:'ACWI ETF',values:P.benchmarkWealth}],{labels:P.dates,format:v=>num(v,2)});
 svgLine($('#relativeChart'),[{name:'Relative wealth',values:P.relativeWealth}],{labels:P.dates,includeZero:true,format:v=>pct(v,0)});
 svgLine($('#drawdownChart'),[{name:'Portfolio',values:P.portfolioDrawdown},{name:'ACWI ETF',values:P.benchmarkDrawdown}],{labels:P.dates,includeZero:true,format:v=>pct(v,0)});
 svgLine($('#teChart'),[{name:'Rolling 1Y TE',values:P.rollingTE12},{name:'Rolling 2Y TE',values:P.rollingTE24}],{labels:P.dates,includeZero:true,format:v=>pct(v,1)});
 svgLine($('#irChart'),[{name:'Rolling 1Y IR',values:P.rollingIR12},{name:'Rolling 2Y IR',values:P.rollingIR24}],{labels:P.dates,includeZero:true,format:v=>num(v,2)});
 const monthlyRows=P.monthly.slice(-12);
 const groups={};P.monthly.forEach(r=>{const y=String(r.holdingMonth).slice(0,4);(groups[y]??=[]).push(r)});
 const annualRows=Object.keys(groups).sort().map(y=>{const z=groups[y];const pr=z.reduce((w,r)=>w*(1+r.portfolio),1)-1,br=z.reduce((w,r)=>w*(1+r.benchmark),1)-1;return {year:Number(y),portfolio:pr,benchmark:br,active:pr-br}});
 groupedReturnBars($('#monthlyReturnBars'),monthlyRows,'holdingMonth');
 groupedReturnBars($('#annualReturnBars'),annualRows,'year');
 $('#recentMonthlyBody').innerHTML=monthlyRows.map(r=>`<tr><td>${esc(r.holdingMonth)}</td><td class="num">${pct(r.portfolio,2)}</td><td class="num">${pct(r.benchmark,2)}</td><td class="num ${r.active>=0?'up':'down'}">${pct(r.active,2)}</td></tr>`).join('');
 $('#annualBody').innerHTML=annualRows.slice().reverse().map(r=>`<tr><td>${r.year}</td><td class="num">${pct(r.portfolio,1)}</td><td class="num">${pct(r.benchmark,1)}</td><td class="num ${r.active>=0?'up':'down'}">${pct(r.active,1)}</td></tr>`).join('');
}
function renderHoldings(){
 const h=investorHoldings(),ph=previewInvestorHoldings(),pm=L.preview?.meta||{};
 $('#holdingProfileContext').textContent=`OFFICIAL PORTFOLIO · ${profileLabel()}`;
 $('#holdingsSignalContext').textContent=`Month-end finalized Official portfolio · Signal ${L.meta?.signalMonth||D.meta?.latestSignalMonth||'—'} → Holding ${L.meta?.holdingMonth||'—'} · MTD through ${L.meta?.marketDataThrough||'—'}`;
 const barRows=h.map(x=>({label:`${x.ticker} · ${x.roleFamily}`,weight:x.targetWeight,isCore:x.status==='CORE'}));
 bars($('#holdingBars'),barRows,'weight','label',v=>pct(v,2),'isCore');
 const roles={};h.forEach(x=>roles[x.roleFamily]=(roles[x.roleFamily]||0)+Number(x.targetWeight||0));
 bars($('#roleBars'),Object.entries(roles).map(([role,weight])=>({role,weight})),'weight','role',v=>pct(v,2));
 $('#holdingDetailBody').innerHTML=h.map(x=>`<tr><td><span class="pill ${x.inBroad?'good':'muted'}">${esc(holdingSourceLabel(x))}</span></td><td class="num">${x.inBroad?(x.rank??'—'):'—'}</td><td title="${esc(x.name||'')}"><b>${esc(x.ticker)}</b></td><td>${esc(x.roleFamily)}</td><td>${esc(x.exposureGroup)}</td><td class="num">${pct(x.targetWeight,2)}</td><td class="num">${x.currentWeight==null?'—':pct(x.currentWeight,2)}</td><td class="num">${x.holdingReturn==null?'—':pct(x.holdingReturn,2)}</td></tr>`).join('');
 $('#previewHoldingsContext').textContent=pm.status==='PREVIEW'?`PREVIEW — NOT EXECUTED · As-of ${pm.previewAsOf} · Candidate Signal ${pm.prospectiveSignalMonth} · Holding ${pm.prospectiveHoldingMonth}`:`Preview unavailable${pm.reason?' · '+pm.reason:''}`;
 $('#previewHoldingDetailBody').innerHTML=ph.map(x=>`<tr class="${x.previewStatus==='NEW'?'selected-row':''}"><td>${x.rank}</td><td title="${esc(x.name||'')}"><b>${esc(x.ticker)}</b></td><td>${esc(x.roleFamily)}</td><td>${esc(x.exposureGroup)}</td><td>${esc(x.previewStatus||'')}</td><td class="num">${pct(x.targetWeight,2)}</td><td class="num">${pct(x.officialWeight??0,2)}</td><td class="num">${pct(x.weightChange??0,2)}</td></tr>`).join('');
}
function effectiveLatestUniverse(){
 const base=(D.universe?.latest||[]),live=(L.currentUniverseRanks||[]); if(!live.length)return base;
 const meta=new Map(base.map(x=>[String(x.ticker),x]));
 return live.map(r=>({...(meta.get(String(r.ticker))||{}),ticker:String(r.ticker),roleFamily:canonicalRoleForTicker(r.ticker,r.roleFamily||meta.get(String(r.ticker))?.roleFamily||''),exposure:prettyExposure(r.exposure||meta.get(String(r.ticker))?.exposure||''),representativeMonths:r.representativeMonths??meta.get(String(r.ticker))?.representativeMonths??null,firstRepMonth:r.firstRepMonth??meta.get(String(r.ticker))?.firstRepMonth??'',lastRepMonth:r.lastRepMonth??meta.get(String(r.ticker))?.lastRepMonth??'',medianDollarVolume252:r.medianDollarVolume252??meta.get(String(r.ticker))?.medianDollarVolume252??null,modelReadyProxy:Boolean(r.modelReadyProxy??meta.get(String(r.ticker))?.modelReadyProxy),isScored:Boolean(r.isScored),finalRank:r.finalRank,finalScore:r.finalScore,rex2Rank:r.rex2Rank,chronosRank:r.chronosRank,rankGapTop10:r.rankGapTop10,rankZone:String(r.rankZone||''),portfolioStatus:String(r.portfolioStatus||''),unscoredReason:String(r.unscoredReason||''),selectedBroad:Boolean(r.selectedBroad),selectedComposite:alphaBaseHoldings().some(h=>String(h.ticker)===String(r.ticker))}));
}
function effectiveStaticUniverse(){
 const rows=Array.isArray(L.currentStaticUniverse?.rows)?L.currentStaticUniverse.rows:[];
 const all=[...(D.universe?.latest||[]),...(D.universe?.historicalUnion||[])];
 const meta=new Map();
 all.forEach(x=>{const t=String(x.ticker||'');if(!meta.has(t)||(!meta.get(t)?.name&&x.name))meta.set(t,x)});
 return rows.map(r=>{const m=meta.get(String(r.ticker))||{};return {...r,name:String(r.name||m.name||''),roleFamily:canonicalRoleForTicker(r.ticker,r.roleFamily||m.roleFamily||''),exposure:prettyExposure(r.exposure||m.exposure||'')};});
}
function renderUniverse(){
 const U=D.universe||{},latest=effectiveLatestUniverse(),union=U.historicalUnion||[],S=L.currentStaticUniverse||{},staticRows=effectiveStaticUniverse();
 const selected=new Set(alphaBaseHoldings().map(x=>x.ticker)),isStatic=universeEngine==='static';
 if(isStatic){
  $('#universeKpis').innerHTML=[
   ['Static-74 canonical',S.canonicalCount??74,'fixed Static-v1 opportunity set'],
   ['Official scored',S.scoredCount??staticRows.filter(x=>x.isScored).length,S.signalMonth?`signal ${S.signalMonth}`:'run [23] to publish'],
   ['Static selected',S.selectedCount??staticRows.filter(x=>x.selectedStatic).length,'10% structural sleeve'],
   ['Static evidence',S.status||'UNAVAILABLE',S.originDate?`origin ${S.originDate}`:(S.reason||'source-owned scores not published')]
  ].map((x,i)=>`<div class="kpi ${i===0?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${esc(x[2])}</div></div>`).join('');
 }else{
  $('#universeKpis').innerHTML=[
   ['Latest PIT universe',latest.length||U.latestCount||'—',L.meta?.signalMonth?`signal ${L.meta.signalMonth}`:(U.latestMonth||'current')],
   ['Historical rep union',U.historicalUnionCount??'—','unique PIT representatives'],
   ['Scored latest',latest.filter(x=>x.isScored).length||U.scoredCount||'—','frozen live model score available'],
   ['Selected now',selected.size,'current 90/10 alpha sleeve']
  ].map((x,i)=>`<div class="kpi ${i===0?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${x[2]}</div></div>`).join('');
 }
 const roleRows=isStatic?staticRows:latest,roleCounts={};roleRows.forEach(x=>{const k=prettyRole(x.roleFamily||'Unclassified')||'Unclassified';roleCounts[k]=(roleCounts[k]||0)+1});
 $('#universeRoleTitle').textContent=isStatic?'Static-74 canonical role-family breadth':'Canonical role-family breadth';
 $('#universeRoleNote').textContent=isStatic?'Mutually exclusive canonical role_family · fixed Static-v1 opportunity set · Exposure is shown separately below':'Mutually exclusive canonical role_family · current Broad Dynamic PIT universe · counts sum to the current universe';
 $('#universeRoleBadge').textContent=isStatic?'STATIC-74':'CURRENT PIT';
 const rc=$('#universeRoleCounts');
 const roleHtml=Object.entries(roleCounts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<div class="status-row"><span>${esc(k)}</span><b>${v}</b></div>`).join('');
 rc.innerHTML=roleHtml+`<div class="status-row"><span><b>Total universe</b></span><b>${roleRows.length}</b></div>`;
 svgLine($('#breadthChart'),[{name:'PIT representatives',values:(U.breadth||[]).map(x=>x.count)}],{labels:(U.breadth||[]).map(x=>x.month),format:v=>num(v,0)});
 const engines=[['broad','Broad 90%'],['static','Static-v1 10%']];
 $('#universeEngineTabs').innerHTML=engines.map(([k,l])=>`<button data-e="${k}" class="${universeEngine===k?'active':''}">${l}</button>`).join('');
 $('#universeEngineTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{universeEngine=b.dataset.e;renderUniverse()});
 if(isStatic){
  $('#universeViewTabs').innerHTML=`<button class="active">Official Static-74 (${S.canonicalCount??staticRows.length??0})</button>`;
 }else{
  const views=[['latest',`Latest PIT (${U.latestCount??0})`],['union',`Historical union (${U.historicalUnionCount??0})`]];
  $('#universeViewTabs').innerHTML=views.map(([k,l])=>`<button data-v="${k}" class="${universeView===k?'active':''}">${l}</button>`).join('');
  $('#universeViewTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{universeView=b.dataset.v;renderUniverse()});
 }
 const sourceRows=isStatic?staticRows:(universeView==='latest'?latest:union);
 const roles=[...new Set(sourceRows.map(x=>x.roleFamily).filter(Boolean))].sort();
 const sel=$('#universeRoleFilter'),old=sel.value;sel.innerHTML='<option value="">All roles</option>'+roles.map(r=>`<option value="${esc(r)}">${esc(prettyRole(r))}</option>`).join('');if(roles.includes(old))sel.value=old;
 sel.onchange=renderUniverseTable;$('#universeSearch').oninput=renderUniverseTable;
 renderUniverseTable();
}
function renderUniverseTable(){
 const U=D.universe||{},isStatic=universeEngine==='static',rows=isStatic?effectiveStaticUniverse():((universeView==='latest'?effectiveLatestUniverse():U.historicalUnion)||[]),q=String($('#universeSearch')?.value||'').trim().toUpperCase(),role=$('#universeRoleFilter')?.value||'';
 const filtered=rows.filter(r=>(!role||r.roleFamily===role)&&(!q||[r.ticker,r.name,r.roleFamily,r.exposure].some(x=>String(x||'').toUpperCase().includes(q))));
 if(isStatic){
  $('#universeInventoryTitle').textContent='Static-v1 10% universe ranking';
  $('#universeInventoryNote').innerHTML='<b>Static rank</b> is the Official Static-v1 cross-sectional rank for the 10% sleeve. <b>Static blend strength</b> is a normalized decision diagnostic, not an expected return or probability. Component ranks are shown separately; no Broad rank is mixed into this table.';
  $('#universeTableHead').innerHTML='<tr><th class="num">Static rank</th><th>ETF</th><th>Name</th><th class="num">Static blend strength</th><th class="num">REX2 rank</th><th class="num">Chronos-2 rank</th><th class="num">Multi-signal rank</th><th>Current Static state</th><th>Role family</th><th>Exposure</th></tr>';
  if(!filtered.length){
   const reason=L.currentStaticUniverse?.reason||'Run [23] once after installing this version to publish source-owned Official Static-v1 ranks.';
   $('#universeBody').innerHTML=`<tr><td colspan="10" class="muted">${esc(reason)}</td></tr>`;return;
  }
  $('#universeBody').innerHTML=filtered.map(r=>`<tr class="${r.selectedStatic?'selected-row':''}"><td class="num"><b>${r.staticRank??'—'}</b></td><td><b>${esc(r.ticker)}</b></td><td>${esc(r.name||'')}</td><td class="num">${r.staticScore==null?'—':num(r.staticScore,4)}</td><td class="num">${r.rex2Rank??'—'}</td><td class="num">${r.chronosRank??'—'}</td><td class="num">${r.multiSignalRank??'—'}</td><td><span class="pill ${staticDecisionClass(r.staticState)}">${esc(staticDecisionLabel(r.staticState))}</span></td><td>${esc(prettyRole(r.roleFamily))}</td><td>${esc(prettyExposure(r.exposure))}</td></tr>`).join('');
 }else{
  $('#universeInventoryTitle').textContent='Broad 90% universe ranking';
  $('#universeInventoryNote').innerHTML='<b>Broad rank</b> is the 90% Broad-engine rank. <b>Blend strength</b> is an internal normalized ranking diagnostic, not an expected return or probability. Lower rank is stronger.';
  $('#universeTableHead').innerHTML='<tr><th class="num">Broad rank</th><th>ETF</th><th>Name</th><th class="num">Blend strength</th><th class="num">REX2 rank</th><th class="num">Chronos-2 rank</th><th>Rank band</th><th>Current broad state</th><th>Role family</th><th>Exposure</th><th class="num">Rep months</th><th>60M ready</th></tr>';
  $('#universeBody').innerHTML=filtered.map(r=>`<tr class="${r.selectedComposite?'selected-row':''}"><td class="num"><b>${r.finalRank??'—'}</b></td><td><b>${esc(r.ticker)}</b></td><td>${esc(r.name||'')}</td><td class="num">${r.finalScore==null?'—':num(r.finalScore,4)}</td><td class="num">${r.rex2Rank??'—'}</td><td class="num">${r.chronosRank??'—'}</td><td>${r.rankZone?`<span class="pill ${String(r.rankZone).includes('TOP10')?'good':'muted'}">${esc(rankBandLabel(r.rankZone))}</span>`:'—'}</td><td><span class="pill ${rankDecisionClass(r.portfolioStatus)}">${esc(rankDecisionLabel(r.portfolioStatus,r.unscoredReason))}</span></td><td>${esc(prettyRole(r.roleFamily))}</td><td>${esc(prettyExposure(r.exposure))}</td><td class="num">${r.representativeMonths??'—'}</td><td>${r.modelReadyProxy?'<span class="pill good">YES</span>':'<span class="pill muted">NO</span>'}</td></tr>`).join('');
 }
}

function staticHistoryMap(){
 const out=new Map();
 (D.performanceRows||[]).forEach(r=>{if(Array.isArray(r.staticSelectedTickers)&&r.staticSelectedTickers.length)out.set(String(r.signalMonth),{selectedTickers:r.staticSelectedTickers,source:'V142_SELECTED_ALPHA_PATH'})});
 (L.staticDecisionHistory||[]).forEach(r=>{if(Array.isArray(r.selectedTickers)&&r.selectedTickers.length)out.set(String(r.signalMonth),r)});
 return out;
}
function renderHistory(){
 const sh=staticHistoryMap();
 const completed=(D.performanceRows||[]).map(r=>({...r,staticSelectedTickers:(Array.isArray(r.staticSelectedTickers)&&r.staticSelectedTickers.length)?r.staticSelectedTickers:(sh.get(String(r.signalMonth))?.selectedTickers||[]),_state:'COMPLETED'}));
 const officialSignal=String(L.meta?.signalMonth||'');
 const officialHolding=String(L.meta?.holdingMonth||'');
 const officialBroad=alphaBaseHoldings().filter(x=>x.inBroad).map(x=>x.ticker);
 const officialStatic=alphaBaseHoldings().filter(x=>x.inStatic).map(x=>x.ticker);
 const rows=completed.slice();
 if(officialSignal && !rows.some(r=>String(r.signalMonth)===officialSignal)){
   rows.push({
    signalMonth:officialSignal,
    holdingMonth:officialHolding,
    selectedTickers:officialBroad,
    staticSelectedTickers:officialStatic,
    alphaTurnover:null,
    _state:'OFFICIAL_OPEN'
   });
 }
 rows.sort((a,b)=>String(a.signalMonth).localeCompare(String(b.signalMonth)));

 const sleeveField=historySleeve==='static'?'staticSelectedTickers':'selectedTickers';
 const months=rows.slice(-36),tickers=[...new Set(months.flatMap(m=>m[sleeveField]||[]))].sort();
 let head='<tr><th>Ticker</th>'+months.map(m=>`<th title="${m._state==='OFFICIAL_OPEN'?'Current Official open holding month':'Completed decision'}">${esc(String(m.signalMonth).slice(2))}${m._state==='OFFICIAL_OPEN'?'*':''}</th>`).join('')+'</tr>';
 let body=tickers.map(t=>`<tr><td>${esc(t)}</td>`+months.map((m,i)=>{const on=(m[sleeveField]||[]).includes(t),prev=i?(months[i-1][sleeveField]||[]).includes(t):false;return `<td class="cell ${on?(prev?'on':'new'):''} ${m._state==='OFFICIAL_OPEN'?'open-decision':''}" title="${esc(m.signalMonth)} · ${esc(t)} · ${historySleeve==='static'?'Static-v1 10%':'Broad 90%'} · ${m._state==='OFFICIAL_OPEN'?'Official open':'Completed'}"></td>`}).join('')+'</tr>').join('');
 $('#historyHeatmap').innerHTML=tickers.length?`<table class="heatgrid">${head}${body}</table>`:'<div class="muted">Static-v1 decision history is not yet published for this local snapshot. Run [23] once to refresh source-owned history.</div>';
 $('#historySleeveTabs').innerHTML=[['broad','Broad 90%'],['static','Static-v1 10%']].map(([k,l])=>`<button data-h="${k}" class="${historySleeve===k?'active':''}">${l}</button>`).join('');
 $('#historySleeveTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{historySleeve=b.dataset.h;renderHistory()});
 $('#historyHeatmapTitle').textContent=historySleeve==='static'?'Static-v1 10% selection heatmap':'Broad 90% selection heatmap';
 $('#historyHeatmapNote').textContent=`Last 36 ${historySleeve==='static'?'Static-v1':'Broad'} decisions · completed history plus the current Official open holding month`;

 const P=currentProfile(),LP=liveProfile(alphaWeight);
 $('#historyProfileContext').textContent=`${profileLabel()} · completed through ${D.meta?.performanceThroughHoldingMonth||'—'}; current Official ${officialSignal||'—'} → ${officialHolding||'—'} shown separately`;
 const pmap=new Map(P.monthly.map(x=>[x.signalMonth,x]));
 $('#historyBody').innerHTML=rows.slice().reverse().map(r=>{
   const open=r._state==='OFFICIAL_OPEN';
   const pr=pmap.get(r.signalMonth);
   const ret=open?(LP?LP.mtd:null):pr?.portfolio;
   const active=open?(LP?LP.activeMtd:null):pr?.active;
   const state=open?'<span class="pill warn">OPEN · OFFICIAL</span>':'<span class="pill muted">COMPLETED</span>';
   const broad=(r.selectedTickers||[]).join(', ')||'—';
   const stat=(r.staticSelectedTickers||[]).join(', ')||'—';
   return `<tr class="${open?'history-open-row':''}"><td>${state}</td><td>${esc(r.signalMonth)}</td><td>${esc(r.holdingMonth)}</td><td>${pct(1-alphaWeight,0)} / ${pct(alphaWeight,0)}</td><td>${esc(broad)}</td><td>${esc(stat)}</td><td class="num">${r.alphaTurnover==null?'—':pct(r.alphaTurnover,1)}</td><td class="num">${ret==null?'—':pct(ret,2)}${open?' <small>MTD</small>':''}</td><td class="num ${active!=null&&active>=0?'goodtext':'badtext'}">${active==null?'—':pct(active,2)}${open?' <small>MTD</small>':''}</td></tr>`;
 }).join('');
}

function renderRisk(){
 const ladder=(D.profileConfig?.presetAlphaWeights||[.25,.5,.75,1]).map(a=>({a,p:buildProfile(a)}));
 const P=currentProfile();
 $('#riskKpis').innerHTML=[
  ['Selected TE',pct(P.metrics.te,2),profileLabel()],
  ['Full-alpha TE',pct(buildProfile(1).metrics.te,2),'Alpha 100%'],
  ['Selected IR',num(P.metrics.ir,2),'after profile translation'],
  ['Allocation cost drag',pct(P.metrics.allocationCostDrag,3),'core/sleeve rebalancing']
 ].map((x,i)=>`<div class="kpi ${i===0?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${x[2]}</div></div>`).join('');
 $('#riskProfileBody').innerHTML=ladder.map(({a,p})=>`<tr><td>Core ${pct(1-a,0)} / Alpha ${pct(a,0)}</td><td class="num">${pct(1-a,0)}</td><td class="num">${pct(a,0)}</td><td class="num">${pct(p.metrics.te,2)}</td><td class="num">${pct(p.metrics.activeReturn,2)}</td><td class="num">${num(p.metrics.ir,2)}</td><td class="num">${pct(p.metrics.cagr,2)}</td><td class="num">${pct(p.metrics.mdd,2)}</td></tr>`).join('');
 const frontier=[];for(let i=0;i<=20;i++){const a=i/20,p=buildProfile(a);frontier.push({label:`Alpha ${pct(a,0)}`,te:p.metrics.te})}
 bars($('#riskBars'),frontier,'te','label',v=>pct(v,2));
}
function renderRobustness(){
 const c=D.robustness?.costStress||[],p=D.robustness?.robustBroadSet||[],m=D.model||{};
 const combined=Number(m.combinedIR??m.combined_ir);
 const dev=Number(m.developmentIR??m.development_ir);
 const bridge=Number(m.temporalBridgeIR??m.temporal_bridge_ir);
 const floor=Number(m.robustFloorIR??m.robust_floor_ir);
 $('#robustKpis').innerHTML=[
  ['Broad combined IR',num(combined,2),`${p.length} lanes in near-optimal plateau`],
  ['Development IR',num(dev,2),'selected Broad lane'],
  ['Temporal-bridge IR',num(bridge,2),'selected Broad lane'],
  ['Robust floor IR',num(floor,2),'min(Development, Bridge)']
 ].map((x,i)=>`<div class="kpi ${i===0?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${x[2]}</div></div>`).join('');
 $('#costBody').innerHTML=c.map(x=>`<tr><td>${x.cost_bps_per_side} bp</td><td class="num">${num(x.ir,2)}</td><td class="num">${pct(x.active_return,2)}</td><td class="num">${pct(x.te,2)}</td><td class="num">${pct(x.cagr,2)}</td><td class="num">${pct(x.mdd,2)}</td></tr>`).join('');
 $('#plateauBody').innerHTML=p.map(x=>`<tr><td>${esc(x.lane_id)}</td><td class="num">${pct(x.rex2_weight,1)}</td><td class="num">${pct(x.chronos_weight,1)}</td><td class="num">${x.hold_rank}</td><td class="num">${num(x.ir__COMBINED,2)}</td><td class="num">${num(x.ir__DEVELOPMENT,2)}</td><td class="num">${num(x.ir__TEMPORAL_BRIDGE,2)}</td><td class="num">${pct(x.avg_one_way_turnover__COMBINED,1)}</td></tr>`).join('');
}
function renderMethod(){
 const m=D.model||{},U=D.universe||{},pm=L.preview?.meta||{};
 const broadW=Number(m.legacyBroadWeight??0.90),staticW=Number(m.legacyStaticWeight??0.10);
 const rex=Number(m.rex2_weight??0.80),chr=Number(m.chronos2_weight??0.20);
 $('#architectureKpis').innerHTML=[
  ['Broad sleeve',pct(broadW,0),`${pct(rex,0)} REX2 + ${pct(chr,0)} Chronos-2 rank strength`],
  ['Static anchor',pct(staticW,0),'Static-v1 · model-risk regularizer'],
  ['Portfolio mapping',`Top ${m.entry_k} / Hold ${m.hold_rank}`,'applied within the Broad engine'],
  ['Broad universe',String(U.latestCount??'—'),'latest PIT exposure representatives']
 ].map((x,i)=>`<div class="kpi ${i===0?'accent':''}"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="note">${x[2]}</div></div>`).join('');

 $('#blendDescription').textContent=`Broad engine: ${pct(rex,0)} REX2 + ${pct(chr,0)} Chronos-2 normalized rank strength. The Static 10% sleeve is a separate Static-v1 architecture.`;

 const staticPreview=String(pm.staticPreviewStatus||'UNAVAILABLE');
 $('#contractRows').innerHTML=[
  ['Broad selected lane',(m.selectedLaneId||m.selected_lane_id)],
  ['Broad blend',`${pct(rex,0)} REX2 + ${pct(chr,0)} Chronos-2 normalized rank strength`],
  ['Broad mapping',`Entry Top ${m.entry_k} / Hold through ${m.hold_rank}`],
  ['Static sleeve',`${pct(staticW,0)} · ${m.staticArchitecture||'Static-v1 separate architecture'}`],
  ['Final alpha merge',`${pct(broadW,0)} Broad + ${pct(staticW,0)} Static; overlaps merged by weight`],
  ['Benchmark',D.meta?.benchmark],
  ['Evidence mode',D.meta?.evidenceMode],
  ['Completed performance through',D.meta?.performanceThroughHoldingMonth||'—'],
  ['Current Official',`Signal ${L.meta?.signalMonth||'—'} → Holding ${L.meta?.holdingMonth||'—'}`],
  ['Market data through',L.meta?.marketDataThrough||'—'],
  ['Preview',pm.status==='PREVIEW'?`Signal ${pm.prospectiveSignalMonth} → Holding ${pm.prospectiveHoldingMonth} · NOT EXECUTED`:'Unavailable'],
  ['Static Preview state',staticPreview],
  ['Historical model contract',D.meta?.historicalModelVersion||D.meta?.version],
  ['Claim boundary',D.meta?.claimBoundary]
 ].map(x=>`<div class="status-row"><span>${esc(x[0])}</span><b style="max-width:68%;text-align:right">${esc(x[1]||'—')}</b></div>`).join('');
}

function nav(page){$$('.page').forEach(x=>x.classList.toggle('active',x.id==='page-'+page));$$('.nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===page));window.scrollTo(0,0)}
$$('.nav button').forEach(b=>b.onclick=()=>nav(b.dataset.page));

$('#statusTrack').textContent=D.meta?.track||'Global / ACWI';
$('#statusSignal').textContent=`Official Signal ${L.meta?.signalMonth||D.meta?.latestSignalMonth||'—'} · Holding ${L.meta?.holdingMonth||'—'} · Market through ${L.meta?.marketDataThrough||'—'}`;
$('#evidenceThrough').textContent=`COMPLETED PERFORMANCE: through ${D.meta?.performanceThroughHoldingMonth||'—'} month-end only. CURRENT MTD/YTD: separate through ${L.meta?.marketDataThrough||'—'}. OFFICIAL PORTFOLIO: Signal ${L.meta?.signalMonth||'—'} → Holding ${L.meta?.holdingMonth||'—'}. PREVIEW: ${L.preview?.meta?.status==='PREVIEW'?`Candidate Signal ${L.preview.meta.prospectiveSignalMonth} → Holding ${L.preview.meta.prospectiveHoldingMonth} · NOT EXECUTED`:'Unavailable'}.`;
$('#footerModel').textContent=`${D.model?.selectedLaneId||D.model?.selected_lane_id||'—'} · Operating ${D.meta?.version||'—'} · Historical model ${D.meta?.historicalModelVersion||'—'}`;

renderGlobalProfileControl();
renderCockpit();renderPerformance();renderHoldings();renderUniverse();renderHistory();renderRisk();renderRobustness();renderMethod();nav('cockpit');
})();
