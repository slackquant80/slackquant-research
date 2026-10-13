(function(){
  'use strict';
  const S = window.ADAA_SNAPSHOT;
  const $ = (sel) => document.querySelector(sel);
  const esc = (x) => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const finite = (x) => x !== null && x !== '' && Number.isFinite(Number(x));
  const pct = (x,d=1,signed=false) => finite(x) ? `${signed && Number(x)>0?'+':''}${(100*Number(x)).toFixed(d)}%` : '—';
  const pctAlready = (x,d=2) => finite(x) ? `${Number(x).toFixed(d)}%` : '—';
  const num = (x,d=2) => finite(x) ? Number(x).toFixed(d) : '—';
  const date = (x) => x || '—';
  const monthStart = (x) => /^\d{4}-\d{2}-\d{2}$/.test(String(x||'')) ? `${String(x).slice(0,7)}-01` : '—';
  const clsReturn = (x) => !finite(x) ? '' : Number(x)>0 ? 'positive' : Number(x)<0 ? 'negative' : '';

  if(!S){ document.body.innerHTML='<main><article class="card"><h2>Dashboard data unavailable</h2><p>The ADAA dashboard data could not be loaded.</p></article></main>'; return; }

  function bindTabs(){
    document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); $('#tab-'+b.dataset.tab).classList.add('active');
      if(b.dataset.tab==='overview') requestAnimationFrame(renderChart);
      window.scrollTo({top:0,behavior:'instant'});
    }));
  }
  function kpi(label,value,sub='',klass=''){
    return `<div class="kpi ${klass}"><div class="kpi-label">${esc(label)}</div><div class="kpi-value">${esc(value)}</div>${sub?`<div class="kpi-sub">${esc(sub)}</div>`:''}</div>`;
  }
  function renderKpis(){
    const d=S.decision_monitor, c=S.decision_clock, o=S.strategy_overview;
    $('#kpi-primary').innerHTML=[
      kpi('Official Signal',d.official_decision,'Completed month-end decision'),
      kpi('Current MTD · ADAA Core',pct(d.current_mtd_core,2,true),`${date(c.current_mtd_baseline_date)} → ${date(c.current_mtd_market_through||d.market_data_through)} · ADAA daily portfolio returns · execution date included`,'good'),
      kpi('Current MTD · Dynamic FX',pct(d.current_mtd_dynamic_fx,2,true),`${date(c.current_mtd_baseline_date)} → ${date(c.current_mtd_market_through||d.market_data_through)} · same daily dates as ADAA Core`,'good'),
      kpi('Next Portfolio Preview',d.intramonth_preview_active ? d.intramonth_preview_month : 'PENDING','','warn'),
      kpi('Preview Target Change',pct(d.preview_target_change_one_way,1),'one-way change vs Official Target')
    ].join('');
    $('#clock-meta').innerHTML=[
      `<div class="clock-meta-item"><span class="clock-meta-label">Latest common market close</span><strong class="clock-meta-value">${esc(date(c.market_data_through||d.market_data_through))}</strong></div>`,
      `<div class="clock-meta-item"><span class="clock-meta-label">Official execution close</span><strong class="clock-meta-value">${esc(date(c.executable_common_close))}</strong></div>`,
      `<div class="clock-meta-item"><span class="clock-meta-label">Latest raw FX observation</span><strong class="clock-meta-value">${esc(date(c.latest_fx_observation))}</strong></div>`
    ].join('');
    $('#kpi-secondary').innerHTML=[
      kpi('ADAA Core CAGR · net of transaction costs',pct(d.core_sleeve_cagr,2),`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`,'good'),
      kpi('ADAA Core Annualized Volatility',pct(d.core_sleeve_volatility,2),`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`),
      kpi('ADAA Core Max Drawdown',pct(d.core_sleeve_max_drawdown,2,true),`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`,'warn')
    ].join('');
    $('#overview-kpis').innerHTML=[
      kpi('Official Dynamic FX Hedge',pct(o.official_dynamic_fx_hedge,0)),
      kpi('Official USD/KRW Z-Score',num(o.official_usdkrw_zscore,2)),
      kpi('ADAA + Dynamic FX CAGR',pctAlready(o.dynamic_hedged_cagr_pct,2),`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`,'good'),
      kpi('ADAA + Dynamic FX Volatility',pctAlready(o.dynamic_hedged_volatility_pct,2),`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`),
      kpi('ADAA + Dynamic FX Max Drawdown',pctAlready(o.dynamic_hedged_max_drawdown_pct,2),`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`,'warn')
    ].join('');
    const perfThrough=date(c.canonical_performance_support_end);
    const perfAsOf=$('#performance-asof');
    if(perfAsOf) perfAsOf.textContent=`Completed performance summary · ${date(c.canonical_performance_support_start)} → ${perfThrough} · ${c.canonical_performance_completed_months} completed months`;
    const viewOk=String(S.snapshot_meta.validation_status||'').toUpperCase().startsWith('PASS'); $('#snapshot-status').textContent=viewOk?'CURRENT DATA':'DATA UNAVAILABLE';
    $('#footer-meta').textContent=`Signal ${c.official_signal_month} · Performance ${perfThrough} · Market ${c.market_data_through} · Generated ${S.snapshot_meta.generated_at}`;
  }

  function table(rows, opts={}){
    if(!rows || !rows.length) return '<div class="muted">No data</div>';
    const cols=opts.columns || Object.keys(rows[0]);
    const header='<thead><tr>'+cols.map((c,i)=>`<th class="${opts.highlight===i?'highlight':''}">${esc(opts.labels?.[c]||c)}</th>`).join('')+'</tr></thead>';
    const body='<tbody>'+rows.map(r=>'<tr>'+cols.map((c,i)=>{
      let v=r[c], text=v;
      if(opts.format) text=opts.format(c,v,r);
      const rc=opts.returnColor && i>0 ? clsReturn(v) : '';
      return `<td class="${opts.highlight===i?'highlight ':''}${rc}">${esc(text ?? '—')}</td>`;
    }).join('')+'</tr>').join('')+'</tbody>';
    return `<div class="table-wrap"><table>${header}${body}</table></div>`;
  }

  function renderPortfolio(){
    const rows=S.portfolio_state.map(r=>({
      Asset:r.Asset,
      'Official Target':r.Official_Target,
      'Current Weight':r.Current_Drift,
      'Preview Target':r.Preview_Target,
      'Preview Δ':r.Preview_Delta
    }));
    $('#portfolio-state').innerHTML=table(rows,{format:(c,v)=>c==='Asset'?v:pct(v,1,c==='Preview Δ')});
  }

  function row(label,value){ return `<div class="contract-row"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`; }
  function renderClock(){
    const c=S.decision_clock;
    $('#decision-clock').innerHTML=`
      <div class="status-row"><span class="badge">OFFICIAL</span><span class="badge preview">${esc(c.preview_status==='ACTIVE_PROVISIONAL'?'ACTIVE · PROVISIONAL':'PENDING')}</span></div>
      <div class="contract-grid">
        ${row('Official signal month',date(c.official_signal_month))}
        ${row('Official execution close',date(c.executable_common_close))}
        ${row('Latest common market close',date(c.market_data_through))}
        ${row('Completed performance period',`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)} (${c.canonical_performance_completed_months}m)`)}
        ${row('Latest raw FX observation',date(c.latest_fx_observation))}${row('Current performance through',date(c.current_mtd_market_through||c.market_data_through))}
        ${row('Official FX hedge',pct(c.official_fx_hedge,0))}
        ${row('Official FX z-score',num(c.official_fx_zscore,2))}
        ${row('Preview signal month',date(c.preview_signal_month))}
        ${row('Preview FX hedge',pct(c.preview_fx_hedge,0))}
        ${row('Preview FX z-score',num(c.preview_fx_zscore,2))}
      </div><div class="preview-reason">${esc(c.preview_status==='ACTIVE_PROVISIONAL' ? `For the provisional Preview, prices through ${date(c.market_data_through)} are used because the ${date(c.preview_signal_month)} month-end close is not yet available.` : (c.preview_reason||''))}</div>
      <ul class="contract-rules">
        <li><strong>Official Decision:</strong> completed month-end target. The first eligible U.S. ETF close after month-end is the execution close.</li>
        <li><strong>Current MTD:</strong> ADAA Core and Dynamic FX are compounded from the same daily portfolio path. The current incomplete month remains separate from completed performance.</li>
        <li><strong>FX timing:</strong> The latest raw FX observation is shown for freshness only. FX z-scores and hedge decisions use the ETF-aligned decision dates and the latest common market close.</li>
        <li><strong>Preview Target Change:</strong> one-way difference between the Official Target and Preview Target; it is not realized turnover or an execution-cost input.</li>
        <li><strong>Portfolio Preview:</strong> The latest partial-month market close is used only to estimate the next target. The Preview can change before month-end and does not authorize execution.</li>
      </ul>`;
  }

  function renderChart(){
    const host=$('#performance-chart');
    const rows=S.performance.performance_path || [];
    if(!rows.length){ host.innerHTML='<div class="muted">No performance path</div>'; return; }
    const keys=[['ADAA_DH_Wealth','ADAA + Dynamic FX','line-dynamic'],['ADAA_UH_Wealth','ADAA Core (Unhedged)','line-unhedged'],['ADAA_H_Wealth','ADAA Fully Hedged','line-hedged'],['60/40_Wealth','SPY/IEF 60/40','line-6040'],['US Equity_Wealth','US Equity','line-us'],['KR Equity_Wealth','KR Equity','line-kr']];
    const legend='<div class="legend">'+keys.map(k=>`<span><i class="legend-dot ${k[2]}" style="background:currentColor"></i>${k[1]}</span>`).join('')+'</div>';
    host.innerHTML=legend+'<div class="chart-canvas"></div>';
    const canvas=host.querySelector('.chart-canvas');
    const rect=canvas.getBoundingClientRect();
    const W=Math.max(320,Math.round(rect.width||host.clientWidth||1000));
    const H=Math.max(220,Math.round(rect.height||300));
    const mobile=W<520;
    const pad={l:mobile?42:54,r:mobile?10:18,t:18,b:mobile?28:30};
    const vals=[]; rows.forEach(r=>keys.forEach(k=>{if(finite(r[k[0]])) vals.push(Number(r[k[0]]));}));
    const min=Math.min(...vals), max=Math.max(...vals), span=Math.max(max-min,1e-9);
    const x=i=>pad.l+(W-pad.l-pad.r)*(i/(rows.length-1||1));
    const y=v=>pad.t+(H-pad.t-pad.b)*(1-(v-min)/span);
    const ticks=5; let grid='';
    for(let i=0;i<=ticks;i++){ const v=min+span*i/ticks, yy=y(v); grid+=`<line class="chart-grid" x1="${pad.l}" x2="${W-pad.r}" y1="${yy}" y2="${yy}"/><text class="chart-label" x="4" y="${yy+4}">${v.toFixed(1)}x</text>`; }
    const paths=keys.map(k=>{ const pts=rows.map((r,i)=>finite(r[k[0]])?`${x(i).toFixed(2)},${y(Number(r[k[0]])).toFixed(2)}`:null).filter(Boolean).join(' '); return `<polyline class="chart-line ${k[2]}" points="${pts}"/>`; }).join('');
    const years=[]; let last=''; rows.forEach((r,i)=>{const yr=String(r.Date).slice(0,4); if(yr!==last){years.push([i,yr]);last=yr;}});
    const targetLabels=mobile?5:9;
    const labelStep=Math.max(1,Math.ceil(years.length/targetLabels));
    const xlabels=years.filter((_,i)=>i%labelStep===0 || i===years.length-1).map(([i,yr])=>`<text class="chart-label" x="${x(i)}" y="${H-7}" text-anchor="middle">${yr}</text>`).join('');
    canvas.innerHTML=`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="ADAA cumulative wealth"><line class="chart-axis" x1="${pad.l}" x2="${pad.l}" y1="${pad.t}" y2="${H-pad.b}"/>${grid}${paths}${xlabels}</svg>`;
  }


  const perfMap={summary:'performance_summary',annual:'annual_returns',dynamic:'monthly_dynamic',unhedged:'monthly_unhedged',hedged:'monthly_hedged'};
  function renderPerformanceTable(key='summary'){
    const rows=S.performance[perfMap[key]]||[];
    const c=S.decision_clock, full=`${date(c.canonical_performance_support_start)} → ${date(c.canonical_performance_support_end)}`;
    const y=String(c.canonical_performance_support_end||'').slice(0,4);
    const label=key==='annual'?`Annual returns · performance period ${full} · ${y} YTD = ${y}-01-01 → ${date(c.canonical_performance_support_end)}`:key==='summary'?`Risk & return summary · performance period ${full}`:`Monthly returns · available history ${full}`;
    const perfAsOf=$('#performance-asof'); if(perfAsOf) perfAsOf.textContent=label;
    const labels={'ADAA Dynamic':'ADAA + Dynamic FX','ADAA Unhedged':'ADAA Core (Unhedged)','ADAA Fully Hedged':'ADAA Fully Hedged','60/40 SPY/IEF':'SPY/IEF 60/40'};
    $('#performance-table').innerHTML=table(rows,{labels,highlight:key==='summary'?1:null,returnColor:key!=='summary',format:(c,v)=>{
      if(c==='Metric'||c==='Year') return v;
      if(v===null||v==='') return '—';
      return finite(v)?Number(v).toFixed(key==='summary'?2:(key==='annual'?2:1)):v;
    }});
  }
  function bindSubtabs(){ document.querySelectorAll('.subtab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.subtab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderPerformanceTable(b.dataset.subtab);})); }

  let allocPage=0;
  function orderedAllocationRows(){
    const direction=$('#allocation-date-order')?.value === 'asc' ? 1 : -1;
    const src=(S.portfolio_history_display&&S.portfolio_history_display.length)?S.portfolio_history_display:(S.allocation_history||[]).map(r=>({Status:'HISTORY','Signal Month':r.Month,'Holding Month':'',...r})); const preview=src.filter(r=>String(r.Status||'')==='PREVIEW'); const history=src.filter(r=>String(r.Status||'')!=='PREVIEW').sort((a,b)=>direction*String(a['Signal Month']??a.Month??'').localeCompare(String(b['Signal Month']??b.Month??''))); return [...preview,...history];
  }
  function renderAlloc(){
    const all=orderedAllocationRows(); const sel=$('#allocation-page-size').value; const size=sel==='all'?all.length:Number(sel); const pages=Math.max(1,Math.ceil(all.length/Math.max(size,1))); allocPage=Math.min(allocPage,pages-1);
    const start=allocPage*size, rows=sel==='all'?all:all.slice(start,start+size);
    const allocationColumns=['Status','Signal Month','Holding Month','QQQ','SPY','IWM','EEM','EFA','EWY','VGK','AGG','TIP','DBC','IEF','TLT','LQD','VNQ','GLD','HYG','SHY','BIL'];
    $('#allocation-history').innerHTML=table(rows,{columns:allocationColumns,format:(c,v)=>['Status','Signal Month','Holding Month'].includes(c)?v:(finite(v)?(100*Number(v)).toFixed(1):'—')});
    const renderedRows=$('#allocation-history').querySelectorAll('tbody tr');
    renderedRows.forEach((tr,i)=>{
      if(String(rows[i]?.Status||'').toUpperCase()==='PREVIEW'){
        tr.classList.add('adaa-preview-row');
        const statusCell=tr.querySelector('td:first-child');
        if(statusCell) statusCell.innerHTML='<span class="adaa-preview-badge">PREVIEW</span>';
      }
    });
    $('#allocation-page-label').textContent=sel==='all'?`${all.length} rows`:`Page ${allocPage+1} / ${pages}`;
    $('#allocation-prev').disabled=allocPage<=0; $('#allocation-next').disabled=allocPage>=pages-1;
  }
  function bindAlloc(){
    $('#allocation-date-order').addEventListener('change',()=>{allocPage=0;renderAlloc();});
    $('#allocation-page-size').addEventListener('change',()=>{allocPage=0;renderAlloc();});
    $('#allocation-prev').addEventListener('click',()=>{allocPage=Math.max(0,allocPage-1);renderAlloc();});
    $('#allocation-next').addEventListener('click',()=>{allocPage++;renderAlloc();});
    $('#allocation-download').addEventListener('click',()=>{
      const a=document.createElement('a'); a.href='ADAA_Portfolio_Target_History.xlsx'; a.download=`ADAA_Portfolio_Target_History_${new Date().toISOString().slice(0,10).replaceAll('-','')}.xlsx`; document.body.appendChild(a); a.click(); a.remove();
    });
  }

  let chartResizeTimer=null;
  window.addEventListener('resize',()=>{
    clearTimeout(chartResizeTimer);
    chartResizeTimer=setTimeout(()=>{
      if($('#tab-overview')?.classList.contains('active')) renderChart();
    },100);
  },{passive:true});

  bindTabs(); renderKpis(); renderPortfolio(); renderClock(); renderChart(); renderPerformanceTable(); bindSubtabs(); renderAlloc(); bindAlloc();
})();
