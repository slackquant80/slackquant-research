(() => {
const L=window.EA_LIVE_OVERLAY||{};
const $=s=>document.querySelector(s);
const pctText=v=>`${(100*v).toFixed(2)}%`;
const parsePct=s=>{const n=Number(String(s||'').replace(/[% ,]/g,''));return Number.isFinite(n)?n/100:0};
let mode='official';

function injectStyle(){
 if(document.getElementById('holdings-view-style'))return;
 const st=document.createElement('style');st.id='holdings-view-style';st.textContent=`
 .holdings-view-switch{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 14px;margin-bottom:15px;border:1px solid var(--border);border-radius:12px;background:#0c1a22}
 .holdings-view-switch>div:first-child{display:flex;align-items:baseline;gap:12px;min-width:0}.holdings-view-switch b{font-size:13px}.holdings-view-switch span{color:var(--muted);font-size:11px}
 .holdings-mode-tabs{margin:0!important;flex-wrap:nowrap!important}.holdings-mode-tabs button{white-space:nowrap}.holdings-mode-tabs button:disabled{opacity:.45;cursor:not-allowed}
 .holdings-mode-hidden{display:none!important}.holdings-chart-scroll{max-height:600px;overflow:auto;padding-right:4px}
 @media(max-width:900px){.holdings-view-switch{align-items:flex-start;flex-direction:column}.holdings-mode-tabs{width:100%}.holdings-mode-tabs button{flex:1}.holdings-chart-scroll{max-height:none}}
 `;document.head.appendChild(st);
}
function ensureStructure(){
 const page=$('#page-holdings');if(!page)return null;
 injectStyle();
 const grid=page.querySelector('.grid.cols2');
 const offBody=$('#holdingDetailBody'),preBody=$('#previewHoldingDetailBody');
 if(!grid||!offBody||!preBody)return null;
 const offSec=offBody.closest('section'),preSec=preBody.closest('section');
 offSec.id='officialHoldingsSection';preSec.id='previewHoldingsSection';
 const left=grid.querySelectorAll('section')[0],right=grid.querySelectorAll('section')[1];
 const lh=left?.querySelector('.panel-title h3'),rh=right?.querySelector('.panel-title h3'),rp=right?.querySelector('.panel-title p');
 if(lh)lh.id='holdingsWeightsTitle';if(rh)rh.id='holdingsCompositionTitle';if(rp)rp.id='holdingsCompositionNote';
 const hb=$('#holdingBars'),rb=$('#roleBars');if(hb)hb.classList.add('holdings-chart-scroll');if(rb)rb.classList.add('holdings-chart-scroll');
 let bar=$('#holdingsViewSwitch');
 if(!bar){
   bar=document.createElement('div');bar.id='holdingsViewSwitch';bar.className='holdings-view-switch';
   bar.innerHTML='<div><b>Portfolio view</b><span id="holdingsViewContext"></span></div><div class="profile-tabs compact holdings-mode-tabs" id="holdingsModeTabs"></div>';
   page.insertBefore(bar,grid);
 }
 return {offBody,preBody,offSec,preSec,lh,rh,rp};
}

/*
 Exposure display policy:
 1) use an explicit ETF mandate/exposure whenever it is informative;
 2) merge only genuinely similar mandates into an investment-exposure bucket;
 3) use role family only as a fallback when no useful exposure is available.
 This is a portfolio-level ETF classification, not constituent look-through.
*/
const ETF_EXPOSURE_LABEL={
 QQQ:'U.S. Large-Cap Growth · Nasdaq-100', SPY:'U.S. Large Cap · S&P 500', OEF:'U.S. Large Cap · S&P 100',
 SMH:'Semiconductors', SOXX:'Semiconductors', IGM:'U.S. Expanded Technology', XLK:'U.S. Technology Sector',
 IVW:'U.S. Large-Cap Growth · S&P 500', SCHG:'U.S. Large-Cap Growth', VONG:'U.S. Large-Cap Growth',
 IWB:'U.S. Large Cap · Russell 1000', SCHX:'U.S. Large Cap', IWV:'Total U.S. Equity · Russell 3000', VTI:'Total U.S. Equity Market',
 IVE:'U.S. Large-Cap Value · S&P 500', IWD:'U.S. Large-Cap Value · Russell 1000', IWS:'U.S. Mid-Cap Value', VTV:'U.S. Large-Cap Value', VLUE:'U.S. Value Factor',
 VIG:'U.S. Dividend Growth', VYM:'U.S. High Dividend Yield', VYMI:'International High Dividend', FNDF:'Developed ex-U.S. Fundamental',
 VEA:'Developed ex-U.S.', EEM:'Emerging Markets', DXJ:'Japan Equity', EWG:'Germany Equity', EWP:'Spain Equity', EWT:'Taiwan Equity',
 GUNR:'Global Natural Resources', XOP:'U.S. Oil & Gas Exploration & Production', COPX:'Copper Miners', SIL:'Silver Miners', SILJ:'Silver Miners',
 XBI:'Biotechnology', ARKG:'Genomics / Biotechnology', LIT:'Lithium / Battery', PAVE:'Infrastructure', VPU:'Utilities', XLU:'Utilities'
};
function tableRows(body,preview){
 return [...body.querySelectorAll('tr')].map(tr=>{
   const cells=[...tr.children];
   const c=cells.map(td=>td.textContent.trim());
   const ticker=String(c[2]||'').toUpperCase(),role=c[3]||'';
   let exposure=c[4]||'';
   if(ETF_EXPOSURE_LABEL[ticker])exposure=ETF_EXPOSURE_LABEL[ticker];
   else if(!exposure||/^exposure$/i.test(exposure))exposure=role||ticker;
   if(cells[4]&&exposure&&cells[4].textContent.trim()!==exposure)cells[4].textContent=exposure;
   return preview
     ?{ticker,role,exposure,weight:parsePct(c[6]),status:c[5]}
     :{ticker,role,exposure,weight:parsePct(c[5]),status:'OFFICIAL'};
 }).filter(r=>r.ticker&&r.weight>1e-12);
}
function norm(s){return String(s||'').trim().toLowerCase()}
function informativeExposure(r){
 const t=String(r.ticker||'').toUpperCase();
 if(ETF_EXPOSURE_LABEL[t])return ETF_EXPOSURE_LABEL[t];
 const e=String(r.exposure||'').trim();
 if(e&&!/^exposure$/i.test(e))return e;
 const role=String(r.role||'').trim();
 if(role)return role;
 return r.ticker;
}
function investmentExposure(r){
 const t=String(r.ticker||'').toUpperCase();
 if(t==='ACWI')return 'Benchmark core';
 const explicit=informativeExposure(r), e=norm(explicit), role=norm(r.role);
 // Preserve geography when the ETF mandate is explicitly country-specific.
 if(/japan/.test(e)||t==='DXJ')return 'Japan';
 if(/germany/.test(e)||t==='EWG')return 'Germany';
 if(/spain/.test(e)||t==='EWP')return 'Spain';
 if(/taiwan/.test(e)||t==='EWT')return 'Taiwan';
 // Preserve economically distinct sector/theme mandates rather than collapsing by role family.
 if(/semiconductor/.test(e)||['SMH','SOXX'].includes(t))return 'Semiconductors';
 if(/expanded technology|technology sector|software/.test(e)||['IGM','XLK'].includes(t))return 'U.S. Technology';
 if(/biotech|genomic/.test(e)||['XBI','ARKG'].includes(t))return 'Biotech / Genomics';
 if(/oil.*gas/.test(e)||t==='XOP')return 'Oil & Gas';
 if(/natural resource/.test(e)||t==='GUNR')return 'Natural Resources';
 if(/copper/.test(e)||t==='COPX')return 'Copper / Mining';
 if(/silver/.test(e)||['SIL','SILJ'].includes(t))return 'Silver Miners';
 if(/lithium|battery/.test(e)||t==='LIT')return 'Lithium / Battery';
 if(/infrastructure|smartgrid/.test(e)||t==='PAVE')return 'Infrastructure';
 if(/utilities/.test(e)||['VPU','XLU'].includes(t))return 'Utilities';
 // Use explicit style/index mandate when it carries more information than the role family.
 if(/nasdaq-100/.test(e)||t==='QQQ')return 'U.S. Large-Cap Growth / Nasdaq-100';
 if(/large-cap growth|s&p 500 growth/.test(e)||['IVW','SCHG','VONG'].includes(t))return 'U.S. Large-Cap Growth';
 if(/mid-cap value/.test(e)||t==='IWS')return 'U.S. Mid-Cap Value';
 if(/large-cap value|value factor/.test(e)||['IVE','IWD','VTV','VLUE'].includes(t))return 'U.S. Large-Cap Value';
 if(/dividend growth|high dividend yield/.test(e)||['VIG','VYM'].includes(t))return 'U.S. Dividend Equity';
 if(/international high dividend/.test(e)||t==='VYMI')return 'International Dividend';
 if(/developed ex-u\.s.*fundamental|fundamental/.test(e)||t==='FNDF')return 'Developed ex-U.S. Fundamental';
 if(/s&p 500|s&p 100|russell 1000/.test(e)||['SPY','OEF','IWB','SCHX'].includes(t))return 'U.S. Broad / Large Cap';
 if(/russell 3000|total u\.s\. equity|total u\.s\. market/.test(e)||['IWV','VTI'].includes(t))return 'Total U.S. Market';
 // Broad regional products retain the broad region only when no more specific geography exists.
 if(/developed ex-u\.s/.test(e)||t==='VEA')return 'Developed ex-U.S.';
 if(/emerging market/.test(e)||t==='EEM')return 'Emerging Markets';
 // Role family is deliberately the last fallback, not the primary grouping key.
 const fallback=String(r.role||'').trim();
 return fallback||explicit||'Other equity';
}
function clusterRows(rows){
 const m=new Map();
 rows.forEach(r=>{
   const label=investmentExposure(r);
   if(!m.has(label))m.set(label,{label,weight:0,members:[]});
   const z=m.get(label);z.weight+=r.weight;z.members.push(`${r.ticker} ${pctText(r.weight)}`);
 });
 return [...m.values()].sort((a,b)=>b.weight-a.weight||a.label.localeCompare(b.label));
}
function drawBars(el,rows){
 if(!el)return;const max=Math.max(...rows.map(r=>r.weight),1e-9);
 el.innerHTML=rows.map(r=>{
   const title=(r.title||r.members?.join(' · ')||r.label).replace(/"/g,'&quot;');
   return `<div class="bar-row" title="${title}"><span class="bar-label" title="${title}">${r.label}</span><div class="bar-track"><div class="bar-fill ${r.label.startsWith('Benchmark core')||r.label.startsWith('ACWI core')?'core':''}" style="width:${Math.min(100,r.weight/max*100)}%"></div></div><b class="bar-value">${pctText(r.weight)}</b></div>`;
 }).join('');
}
function previewAvailable(){return L.preview?.meta?.status==='PREVIEW'&&$('#previewHoldingDetailBody')?.querySelectorAll('tr').length>0}
function renderTabs(ok){
 const el=$('#holdingsModeTabs');if(!el)return;
 if(mode==='preview'&&!ok)mode='official';
 el.innerHTML=`<button data-hmode="official" class="${mode==='official'?'active':''}">Official</button><button data-hmode="preview" class="${mode==='preview'?'active':''}" ${ok?'':'disabled'}>Preview · not executed</button>`;
 el.querySelectorAll('button[data-hmode]').forEach(b=>b.onclick=()=>{if(b.disabled)return;mode=b.dataset.hmode;refresh()});
}
function refresh(){
 const x=ensureStructure();if(!x)return;
 const ok=previewAvailable();renderTabs(ok);const isPreview=mode==='preview';
 const rows=tableRows(isPreview?x.preBody:x.offBody,isPreview);
 const etfRows=rows.map(r=>({label:`${r.ticker} · ${informativeExposure(r)}`,weight:r.weight})).sort((a,b)=>b.weight-a.weight||a.label.localeCompare(b.label));
 drawBars($('#holdingBars'),etfRows);drawBars($('#roleBars'),clusterRows(rows));
 if(x.lh)x.lh.textContent=isPreview?'Preview ETF target weights':'Official ETF target weights';
 if(x.rh)x.rh.textContent=isPreview?'Preview investment exposures':'Official investment exposures';
 if(x.rp)x.rp.textContent='Similar ETF mandates are combined, while specific country, sector, style and thematic exposures are retained when informative. Role family is used only when no clearer exposure is available; this is not constituent look-through.';
 x.offSec.classList.toggle('holdings-mode-hidden',isPreview);x.preSec.classList.toggle('holdings-mode-hidden',!isPreview);
 const ctx=$('#holdingsViewContext');if(ctx){const pm=L.preview?.meta||{};ctx.textContent=isPreview?`As of ${pm.previewAsOf||'—'} · Signal ${pm.prospectiveSignalMonth||'—'} → proposed holding ${pm.prospectiveHoldingMonth||'—'} · not executed`:'Current Official target with live holding-month weights shown in the detail table.'}
 const hp=$('#holdingProfileContext');if(hp){const pm=L.preview?.meta||{};hp.textContent=isPreview?`As of ${pm.previewAsOf||'—'} · proposed holding ${pm.prospectiveHoldingMonth||'—'} · not executed`:`Signal ${L.meta?.signalMonth||'—'} → Holding ${L.meta?.holdingMonth||'—'} · official target`}
}
function observeBaseRenders(){
 ['#holdingDetailBody','#previewHoldingDetailBody'].forEach(sel=>{const n=$(sel);if(n)new MutationObserver(()=>queueMicrotask(refresh)).observe(n,{childList:true})});
 document.addEventListener('change',()=>setTimeout(refresh,0),true);
 document.addEventListener('input',e=>{if(e.target?.matches('input[type="range"]'))setTimeout(refresh,0)},true);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{refresh();observeBaseRenders()});else{refresh();observeBaseRenders()}
})();
