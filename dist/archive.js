(() => {
  'use strict';
  const D = window.LIFE_DATA;
  if (!D || !Array.isArray(D.years) || !D.years.length) {
    document.querySelector('main').innerHTML = '<p style="padding:80px 0">人生星图的数据未能加载。请确认 data.js 与页面在同一目录，再刷新页面。</p>';
    return;
  }
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arr = v => Array.isArray(v) ? v : v == null ? [] : [v];
  const fmt = v => Array.isArray(v) ? v.map(fmt).join('、') : typeof v === 'object' && v !== null ? Object.entries(v).map(([k,x]) => `${k}：${fmt(x)}`).join('；') : String(v ?? '');
  const minYear = D.years[0].year, maxYear = D.years[D.years.length - 1].year;
  const dims = D.dimensions || [];
  const labels = Object.fromEntries(dims.map(d => [d.key, d.label]));
  const chartDims = [{key:'overall',label:'综合',color:'#486957'}, ...dims];
  const storageKey = 'tang-life-atlas-v1';
  let persisted = {};
  try { persisted = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch (_) {}
  function validateProgress(raw, strict=false) {
    const fail = text => { if(strict) throw new Error(text); };
    if(!raw || typeof raw !== 'object' || Array.isArray(raw)) { fail('存档应当是 JSON 对象。'); return {choices:{},quests:{},lastYear:null}; }
    const clean={choices:{},quests:{},lastYear:null};
    const validYear = key => /^\d{4}$/.test(String(key)) && D.years.some(y=>y.year===Number(key));
    for(const field of ['choices','quests']) {
      const values=raw[field];
      if(values===undefined && !strict) continue;
      if(!values || typeof values!=='object' || Array.isArray(values)) { fail(`${field} 字段应当是对象。`); continue; }
      for(const [key,value] of Object.entries(values)) {
        if(!validYear(key)) { fail(`存档含无效年份：${key.slice(0,16)}`); continue; }
        if(field==='choices') {
          if(typeof value!=='string' || !yearData(Number(key)).choices.some(c=>c.id===value)) { fail(`${key} 年的选择编号无效。`); continue; }
        } else if(typeof value!=='boolean') { fail(`${key} 年的任务状态必须为 true 或 false。`); continue; }
        clean[field][key]=value;
      }
    }
    if(raw.lastYear!==undefined && raw.lastYear!==null) {
      if(typeof raw.lastYear==='number' && Number.isInteger(raw.lastYear) && validYear(raw.lastYear)) clean.lastYear=raw.lastYear;
      else fail('lastYear 必须是 2000—2100 范围内的整数年份。');
    }
    if(clean.lastYear===null) { const years=[...Object.keys(clean.choices),...Object.keys(clean.quests).filter(k=>clean.quests[k])].map(Number); if(years.length) clean.lastYear=Math.max(...years); }
    return clean;
  }
  const yearData = year => D.years.find(y => y.year === year) || D.years[0];
  const cleanPersisted=validateProgress(persisted);
  const state = {year: D.meta.currentYear || 2026,lastYear:cleanPersisted.lastYear,range:'all',visible: new Set(['overall','career','mobility']),mode:'read',palace:null,choices:cleanPersisted.choices,quests:cleanPersisted.quests,timer:null,hoverYear:null};
  let toastTimer, resetTimer, resetArmed = false;
  const current = () => yearData(state.year);
  const decadeFor = y => D.decades.find(d => d.id === y.decadeId);
  function save() { try { localStorage.setItem(storageKey, JSON.stringify({choices:state.choices,quests:state.quests,lastYear:state.lastYear})); } catch (_) { toast('浏览器未允许保存，当前页面仍可继续探索。'); } renderContinue(); }
  function renderContinue() { const hasProgress=state.lastYear!==null || Object.keys(state.choices).length>0 || Object.values(state.quests).some(Boolean); $('#continue-journey').hidden=!hasProgress; $('#continue-journey').innerHTML=`继续旅程 <span>${state.lastYear ?? minYear} →</span>`; $('#begin-journey').className=hasProgress?'text-button':'primary'; $('#begin-journey').innerHTML=hasProgress?'重访序章 <span>↗</span>':'进入人生旅程 <span>↗</span>'; }
  function toast(message) { clearTimeout(toastTimer); $('#toast').textContent=message; $('#toast').hidden=false; toastTimer=setTimeout(()=>{$('#toast').hidden=true;},3200); }
  function openDialog(id) { const dialog=$(`#${id}`); if (id==='chart-dialog') renderNatal(); if (id==='method-dialog') renderMethod(); if (typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open',''); }
  function closeDialog(id) { const d=$(`#${id}`);if(typeof d.close==='function') d.close();else d.removeAttribute('open'); }
  const starName = s => typeof s === 'string' ? s : s.name;
  const starText = (stars,empty='无十四主星') => arr(stars).length ? arr(stars).map(s=>typeof s==='string'?esc(s):`${esc(s.name)}${s.brightness?`<small class="star-brightness">${esc(s.brightness)}</small>`:''}${s.mutagen?`<small class="star-mutagen">${esc(s.mutagen)}</small>`:''}`).join(' · ') : `<span class="star-brightness">${empty}</span>`;
  function setYear(value, options={}) {
    const year=Math.max(minYear,Math.min(maxYear,Number(value)));
    if (!D.years.some(y=>y.year===year)) return;
    state.year=year;
    if(state.mode==='journey'){state.lastYear=year;save();}
    $('#year-slider').value=year;
    $('#scrubber-year').textContent=year;
    $('#previous-year').disabled=year===minYear;
    $('#next-year').disabled=year===maxYear;
    renderChart();renderDecades();renderYear();renderChoices();if(state.mode==='journey')renderLog();
    if ($('#chart-dialog').open) renderNatal();
    if (options.scroll) $('#chapter').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  }
  function initHero() {
    const m=D.meta;
    const natal=D.palaces.find(p=>p.name==='命宫');
    $('#natal-title').textContent=natal ? arr(natal.major).map(starName).join(' · ') : '太阳 · 太阴';
    $('#natal-subtitle').textContent=`${m.fiveElements || ''} · ${m.soulPalace || ''}`;
    $('#birth-facts').innerHTML=`<span>${esc(m.birth)} · ${esc(m.gender)}</span><span>${esc(m.city)} · ${esc(m.time)}</span><span>${esc(m.lunarDate)}</span><span>身宫 ${esc(m.bodyPalace)}</span>`;
    $('#chart-intro').textContent=`${m.calendar}${m.birth} · ${m.gender} · ${m.city} · ${m.time}（${m.timeBasis}）。${m.lunarDate}，${m.fiveElements}。引擎 ${m.engine} ${m.engineVersion}。点击宫位可核对三方四正、叠宫和流曜。`;
    $('#year-slider').min=minYear;$('#year-slider').max=maxYear;
    $('#return-now').querySelector('span').textContent=m.currentYear || 2026;
  }
  function renderLegend() {
    $('#chart-legend').innerHTML=chartDims.map(d=>`<button class="legend-button ${state.visible.has(d.key)?'active':''}" data-dimension="${esc(d.key)}" aria-pressed="${state.visible.has(d.key)}"><i style="background:${esc(d.color)}"></i>${esc(d.label)}</button>`).join('');
    $$('#chart-legend button').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.dimension;if(state.visible.has(key)){if(state.visible.size===1){toast('至少保留一条曲线。');return;}state.visible.delete(key);}else state.visible.add(key);renderLegend();renderChart();}));
  }
  function chartRange() {if(state.range==='near'){let start=Math.max(minYear,state.year-10);let end=Math.min(maxYear,start+20);start=Math.max(minYear,end-20);return [start,end];}return [minYear,maxYear];}
  function renderChart() {
    const [from,to]=chartRange();const list=D.years.filter(y=>y.year>=from && y.year<=to);const w=1120,h=288,left=29,right=15,top=18,bottom=32;
    const X=yr=>left+(yr-from)/(to-from||1)*(w-left-right);const Y=val=>top+(100-Number(val??50))/100*(h-top-bottom);
    let html='';
    for(const n of [20,40,60,80])html+=`<line x1="${left}" y1="${Y(n)}" x2="${w-right}" y2="${Y(n)}" class="chart-grid"/><text x="0" y="${Y(n)+3}" class="chart-axis">${n}</text>`;
    const every=state.range==='all'?10:5;
    for(let yr=Math.ceil(from/every)*every;yr<=to;yr+=every)html+=`<text x="${X(yr)}" y="${h-8}" text-anchor="${yr===from?'start':yr===to?'end':'middle'}" class="chart-axis">${yr}</text>`;
    for(const d of D.decades){if(d.startYear>from && d.startYear<to)html+=`<line x1="${X(d.startYear)}" y1="${top}" x2="${X(d.startYear)}" y2="${h-bottom}" stroke="#e8ebdf" stroke-width="1"/>`;}
    const now=D.meta.currentYear||2026;
    if(now>=from&&now<=to)html+=`<line x1="${X(now)}" y1="${top}" x2="${X(now)}" y2="${h-bottom}" class="chart-current"/><text x="${X(now)+5}" y="12" class="chart-axis" style="fill:#8b9a7c;font-size:8px">当下</text>`;
    for(const d of chartDims.filter(d=>state.visible.has(d.key))){const path=list.map((y,i)=>`${i?'L':'M'} ${X(y.year).toFixed(2)} ${Y(y.scores[d.key]).toFixed(2)}`).join(' ');if(d.key==='overall'){html+=`<path d="${path} L ${X(to)} ${h-bottom} L ${X(from)} ${h-bottom} Z" fill="url(#chart-fill)"/>`;}html+=`<path d="${path}" stroke="${esc(d.color)}" class="chart-line" opacity="${d.key==='overall'?1:.65}" style="stroke-width:${d.key==='overall'?2.8:1.8}"/>`;}
    html=`<defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b9b7b" stop-opacity=".12"/><stop offset="1" stop-color="#8b9b7b" stop-opacity="0"/></linearGradient></defs>`+html;
    html+=`<line x1="${X(state.year)}" y1="${top}" x2="${X(state.year)}" y2="${h-bottom}" class="chart-selection"/>`;
    for(const d of chartDims.filter(d=>state.visible.has(d.key)))html+=`<circle cx="${X(state.year)}" cy="${Y(current().scores[d.key])}" r="${d.key==='overall'?4.5:3.5}" fill="${esc(d.color)}" class="chart-selection-dot"/>`;
    html+=`<rect x="${X(state.year)-20}" y="${h-25}" width="40" height="21" fill="#e3e9d6"/><text x="${X(state.year)}" y="${h-10}" text-anchor="middle" class="chart-axis" style="fill:#5c7549;font-weight:600">${state.year}</text>`;
    $('#trend-chart').innerHTML=html;
    $('#trend-chart').setAttribute('aria-label',`${from}至${to}年叙事展开度，当前${state.year}年。使用下方滑杆或左右方向键选择年份。`);
  }
  function chartYear(event) {const r=$('#trend-chart').getBoundingClientRect();const [from,to]=chartRange();const x=(event.clientX-r.left)/r.width*1120;return Math.max(from,Math.min(to,Math.round(from+(x-29)/(1120-44)*(to-from))));}
  function showChartTooltip(event){const yr=chartYear(event), y=yearData(yr);state.hoverYear=yr;const tip=$('#chart-tooltip');tip.innerHTML=`<strong>${yr}</strong> <span>${esc(y.stem)}${esc(y.branch)} · 虚岁${y.nominalAge}</span>${chartDims.filter(d=>state.visible.has(d.key)).map(d=>`<div><span style="color:${esc(d.color)};filter:brightness(1.7)">${esc(d.label)}</span><span>${esc(y.scores[d.key])}</span></div>`).join('')}`;const r=$('#chart-wrap').getBoundingClientRect();tip.style.left=`${Math.max(0,Math.min(r.width-155,event.clientX-r.left+13))}px`;tip.hidden=false;}
  function renderDecades(){const y=current();$('#decade-list').innerHTML=D.decades.map((d,i)=>{const shownEnd=Math.min(d.endYear,maxYear), shownAgeEnd=Math.min(d.end,yearData(shownEnd).nominalAge);return `<button class="decade-card ${d.id===y.decadeId?'active':''}" data-decade="${esc(d.id)}" aria-pressed="${d.id===y.decadeId}" title="${esc(d.summary)}${d.endYear>maxYear?`；完整大限至${d.endYear}年、虚岁${d.end}`:''}"><span>${String(i).padStart(2,'0')} / ${d.startYear}—${shownEnd}</span><strong>${esc(d.title)}</strong><small>虚岁 ${d.start}—${shownAgeEnd} · ${esc(d.palace)}</small>${d.endYear>maxYear?`<em class="decade-full-range">完整大限至 ${d.endYear} · 虚岁${d.end}</em>`:''}</button>`;}).join('');$$('.decade-card').forEach(b=>b.addEventListener('click',()=>{const d=D.decades.find(x=>x.id===b.dataset.decade);setYear(Math.max(minYear,d.startYear));}));}
  function renderYear(){const y=current(),d=decadeFor(y);$('#year-number').textContent=y.year;$('#year-ganzhi').textContent=`${y.stem}${y.branch}`;$('#year-age').textContent=`当年生日满 ${y.age} 周岁 · 虚岁 ${y.nominalAge}`;$('#year-decade').textContent=`${y.scopeName || '大限'}：${y.decadalStem || ''}${y.decadalBranch || ''} ${y.decadalPalace} · ${d?`虚岁 ${d.start}—${Math.min(d.end,yearData(Math.min(d.endYear,maxYear)).nominalAge)}${d.endYear>maxYear?`（完整大限至${d.endYear}年、虚岁${d.end}）`:''}`:''}`;const period=$('#period-tag');period.className=`period-tag ${y.period}`;period.textContent=y.period==='past'?'回顾假说':y.period==='present'?'此刻 · 2026':'未来叙事';$('#year-subtitle').textContent=y.subtitle || '';$('#year-title').textContent=y.title || `${y.year}，新的风景`;$('#year-story').innerHTML=arr(y.story).map(p=>`<p>${esc(p)}</p>`).join('');$('#year-opportunity').textContent=y.opportunity || '';$('#year-friction').textContent=y.friction || '';$('#year-quest').textContent=y.quest || '';renderQuest();$('#aspect-list').innerHTML=dims.map(dim=>{const detail=y.scoreDetails?.[dim.key];const e=arr(y.evidence).find(e=>e.dimension===dim.key);return `<div class="aspect"><div class="aspect-top"><span>${esc(dim.label)}</span><div class="aspect-score"><span class="mini-bar"><i style="width:${Math.max(0,Math.min(100,y.scores[dim.key]??50))}%;background:${esc(dim.color)}"></i></span><b>${esc(y.scores[dim.key])}</b></div></div><p>${esc(y.aspects?.[dim.key] || '')}</p><details class="score-audit"><summary>宫位依据与计分明细 <span>↗</span></summary>${e?`<p>${esc(e.text)}</p>`:''}${detail?`<p>起点 50 → 原始值 ${Number(detail.raw).toFixed(3)} → 显示值 ${esc(detail.value)}</p><ul>${arr(detail.trace).map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:'<p>该维度暂未提供逐项贡献。</p>'}</details></div>`;}).join('');$('#year-evidence').innerHTML=`<span class="evidence-tag">年界与叠宫</span><p>${esc(y.startDate || '')} 至 ${esc(y.endBefore || '')} 前一日（农历年）。流年命宫叠本命${esc(y.annualPalace)}，主星${arr(y.annualStars).length?esc(y.annualStars.join('、')):'空宫'}。${y.scopeName || '大限'}命宫叠本命${esc(y.decadalPalace)}。</p><span class="evidence-tag">流年四化</span><ul>${arr(y.annualMutations).map(m=>`<li>${esc(m.star)}化${esc(m.type)} → 本命${esc(m.natalPalace)} / 流年${esc(m.annualPalace)} / ${esc(y.scopeName || '大限')}${esc(m.decadalPalace)}</li>`).join('')}</ul><span class="evidence-tag">${y.scopeName || '大限'}四化</span><ul>${arr(y.decadalMutations).map(m=>`<li>${esc(m.star)}化${esc(m.type)} → 本命${esc(m.natalPalace)} / 流年${esc(m.annualPalace)} / ${esc(y.scopeName || '大限')}${esc(m.decadalPalace)}</li>`).join('')}</ul><p>${esc(d?.summary || '')}</p><button id="evidence-open-chart">在十二宫盘中核对 ↗</button>`;$('#evidence-open-chart').addEventListener('click',()=>openDialog('chart-dialog'));}
  function renderQuest(){const done=!!state.quests[state.year];$('#quest-done').textContent=done?'✓ 已完成':'标记完成';$('#quest-done').classList.toggle('done',done);$('#quest-done').setAttribute('aria-pressed',String(done));}
  function setMode(mode){state.mode=mode;if(mode==='journey'){state.lastYear=state.year;save();}document.body.classList.toggle('journey-active',mode==='journey');$('#read-mode').classList.toggle('active',mode==='read');$('#journey-mode').classList.toggle('active',mode==='journey');$('#read-mode').setAttribute('aria-pressed',String(mode==='read'));$('#journey-mode').setAttribute('aria-pressed',String(mode==='journey'));renderChoices();renderLog();}
  function selectedChoice(year){const y=yearData(Number(year));return arr(y.choices).find(c=>c.id===state.choices[year]);}
  function routeFor(beforeYear=Infinity) {
    const priorYears=Object.keys(state.choices).map(Number).filter(year=>year<beforeYear).sort((a,b)=>a-b);
    const bag=Object.fromEntries(dims.map(d=>[d.key,0])), counts={explore:0,deepen:0,connect:0};
    for(const year of priorYears){const c=selectedChoice(year);if(!c)continue;if(Object.hasOwn(counts,c.id))counts[c.id]++;for(const [key,value] of Object.entries(c.effect || {}))if(Object.hasOwn(bag,key))bag[key]+=Number(value);}
    const max=Math.max(...Object.values(counts)), tied=Object.keys(counts).filter(k=>counts[k]===max);
    const latest=priorYears.slice().reverse().map(year=>state.choices[year]).find(id=>tied.includes(id));
    const id=max?latest || tied[0]:null;
    return {priorYears,bag,counts,id,name:{explore:'探路者',deepen:'筑造者',connect:'连接者'}[id] || '尚未落笔'};
  }
  function renderRouteMemory(){const y=current(),d=decadeFor(y),route=routeFor(y.year);const n=route.priorYears.length;
    const approach={explore:'先走进新环境，用一次小试验找到下一条路',deepen:'先沉淀一件作品，让已有经验长出可重复的结构',connect:'先找到可以并肩的人，把信任放进具体的相处'}[route.id];
    const strongest=dims.slice().sort((a,b)=>route.bag[b.key]-route.bag[a.key])[0];
    const memory=n?`此前 ${n} 个年度的选择，把模拟中的你带向“${route.name}”。来到${y.year}年、虚岁${y.nominalAge}的“${y.title}”，在“${d?.title || y.decadeLabel}”这一章，你更习惯${approach}。此前行囊中“${strongest.label}”积累为 ${route.bag[strongest.key]>=0?'+':''}${route.bag[strongest.key]}；这会成为本章故事的承接。`:`你正走进${y.year}年、虚岁${y.nominalAge}的“${y.title}”，属于“${d?.title || y.decadeLabel}”一章。更早年份还没有留下选择；从这一关起，开拓、深耕和关系会慢慢写出不同的模拟走向。`;
    $('#route-memory').innerHTML=`<div class="route-memory-top"><span class="small-caps">STORY MEMORY / 创作模拟</span><strong>${esc(route.name)}<i>✧</i></strong></div><p>${esc(memory)}</p><div class="route-memory-stats"><span>此前开拓 ${route.counts.explore}</span><span>深耕 ${route.counts.deepen}</span><span>关系 ${route.counts.connect}</span><span>只计算当前年之前的选择</span></div>`;
    return route;
  }
  function choiceAftermath(y,choice,prior){
    if(choice.outcome)return fmt(choice.outcome);
    const chapter=decadeFor(y)?.title || y.decadeLabel;
    const actions={explore:`你把“${y.title}”里尚未看清的部分，变成一次边界清楚的小探索。新的线索先进入笔记，再决定是否继续投入`,deepen:`你为“${y.title}”留出一段完整的注意力，把零散尝试整理为一个可以重用的小成果。其他支线暂时收起，让这一件事有机会完成`,connect:`你在“${y.title}”里为共同体验留出位置。一次具体的陪伴、交流或协作，为故事带来另一双眼睛，也让你听见自己的需求`};
    const carry=prior.priorYears.length?`此前“${prior.name}”的路线仍在行囊里，这次选择给它添了一次新的转向。`:'这是这条模拟支线的第一笔，后面的章节会记得这次选择。';
    return `在“${chapter}”这一章，${actions[choice.id] || choice.story}。${carry}`;
  }
  function renderChoices(){const y=current(),selected=selectedChoice(state.year),prior=renderRouteMemory();const selectedCount=Object.keys(state.choices).length,questCount=Object.values(state.quests).filter(Boolean).length;
    $('#saved-count').textContent=`已选 ${selectedCount} / ${D.years.length} · 任务 ${questCount}`;
    $('#choice-cards').innerHTML=arr(y.choices).map((c,i)=>`<button class="choice-card ${selected?.id===c.id?'selected':''}" data-choice="${esc(c.id)}" aria-pressed="${selected?.id===c.id}"><span class="choice-number">${String(i+1).padStart(2,'0')}</span><span class="choose-label">${selected?.id===c.id?'✓ 已选择':'选择此路 ↗'}</span><strong>${esc(c.label)}</strong><p>${esc(c.story)}</p><div class="choice-effects">${Object.entries(c.effect || {}).map(([key,n])=>`<span>${esc(labels[key] || key)} ${n>=0?'+':''}${esc(n)}</span>`).join('')}</div></button>`).join('');
    $$('.choice-card').forEach(b=>b.addEventListener('click',()=>{stopTour();setMode('journey');state.choices[state.year]=b.dataset.choice;state.lastYear=state.year;save();renderChoices();renderLog();toast(`${state.year} · 已留下你的选择`);}));
    const result=$('#choice-result');result.hidden=!selected;
    if(selected){const allRoute=routeFor();const outlook=state.year===maxYear?`远景回望：你已在 ${selectedCount} 个年度留下选择，模拟路线更常走向“${allRoute.name}”。2100 是当前星图的展示边界，可以重访、改写此前的支线。`:'这一页已写下，下一年的故事会带着此前选择继续展开。';
      result.innerHTML=`<span class="small-caps">BRANCH UNFOLDED / 创作后续</span><h4>${y.year} · ${esc(y.title)}</h4><p>${esc(choiceAftermath(y,selected,prior))}</p><span class="branch-note">你可以随时改选。以上为游戏创作，不改变原始命盘与曲线。</span><div class="branch-next"><span>${esc(outlook)}</span><button class="primary" id="branch-next-year">${state.year===maxYear?'重访序章':'走向 '+(state.year+1)} <span>→</span></button></div>`;
      $('#branch-next-year').addEventListener('click',()=>{stopTour();setYear(state.year===maxYear?minYear:state.year+1,{scroll:true});});}
    const bag=routeFor().bag;
    $('#backpack').innerHTML=`<strong>模拟行囊 / 全部已选年度累计</strong>${dims.map(d=>`<span>${esc(d.label)}<b>${bag[d.key]>=0?'+':''}${bag[d.key]}</b></span>`).join('')}`;
  }
  function renderLog(){const years=[...new Set([...Object.keys(state.choices),...Object.keys(state.quests).filter(y=>state.quests[y])])].map(Number).sort((a,b)=>a-b),count=Object.keys(state.choices).length,quests=Object.values(state.quests).filter(Boolean).length;
    const milestones=[{n:1,label:'第一笔'},{n:10,label:'十次选择'},{n:25,label:'四分之一图'},{n:51,label:'走过半张图'},{n:D.years.length,label:'全图留痕'}];
    $('#journey-progress').innerHTML=`<div class="journey-progress-heading"><span><strong>${count}</strong> / ${D.years.length} 年度已留下选择</span><span>完成任务 <b>${quests}</b><i>·</i>最近停留 ${state.lastYear ?? '尚未启程'}</span></div><div class="journey-progress-track"><i style="width:${count/D.years.length*100}%"></i></div><div class="journey-milestones">${milestones.map(m=>`<span class="${count>=m.n?'reached':''}"><i>${count>=m.n?'✦':'◇'}</i>${m.label}<small>${m.n}</small></span>`).join('')}</div>`;
    $('#journey-log').innerHTML=years.length?years.map(yr=>{const y=yearData(yr),choice=selectedChoice(yr);return `<div class="log-row"><span class="log-year">${yr}</span><span class="log-title">${esc(choice?.label || y.title)}</span><span class="log-status">${state.quests[yr]?'任务 ✓':''}</span><button data-log-year="${yr}">重访 ↗</button></div>`;}).join(''):'<div class="empty-log">尚未留下足迹。走进某一年，选一条路，或完成它的小任务。</div>';
    $$('[data-log-year]').forEach(b=>b.addEventListener('click',()=>setYear(b.dataset.logYear,{scroll:true})));
  }
  function stopTour(){if(state.timer)clearInterval(state.timer);state.timer=null;$('#play-tour').classList.remove('playing');$('#play-tour').setAttribute('aria-pressed','false');$('#play-tour').innerHTML='<span class="play-icon">▷</span> 自动巡游';}
  function toggleTour(){if(state.timer){stopTour();return;}$('#play-tour').classList.add('playing');$('#play-tour').setAttribute('aria-pressed','true');$('#play-tour').innerHTML='<span class="play-icon">Ⅱ</span> 暂停巡游';state.timer=setInterval(()=>{if(state.year>=maxYear){stopTour();toast('已抵达本图的远景边界，仍可自由重访。');return;}setYear(state.year+1);},6500);}
  const palacePositions={巳:[1,1],午:[1,2],未:[1,3],申:[1,4],酉:[2,4],戌:[3,4],亥:[4,4],子:[4,3],丑:[4,2],寅:[4,1],卯:[3,1],辰:[2,1]};
  function renderNatal(){const y=current();if(state.palace===null)state.palace=D.palaces.find(p=>p.name==='命宫')?.index ?? 0;const selected=D.palaces.find(p=>p.index===state.palace) || D.palaces[0];const related=new Set([selected.index,(selected.index+4)%12,(selected.index+8)%12,(selected.index+6)%12]);$('#natal-grid').innerHTML=`<div class="natal-center"><span class="small-caps">TANG / NATAL BLUEPRINT</span><div class="center-title">日月同宫</div><p>${esc(D.meta.lunarDate)}<br>${esc(D.meta.fiveElements)} · 命主${esc(D.meta.soul)} · 身主${esc(D.meta.body)}</p><span class="center-rule"></span><p>${y.year} ${esc(y.stem)}${esc(y.branch)}<br>流年命叠本命${esc(y.annualPalace)}<br>${esc(y.scopeName || '大限')}命叠本命${esc(y.decadalPalace)}</p><p style="margin-top:9px;font-size:8px">深色：所选宫 · 浅色：三方四正</p></div>`+D.palaces.map(p=>{const [row,col]=palacePositions[p.branch] || [1,p.index+1];const overlay=arr(y.annualPalaces).find(a=>a.index===p.index);return `<button class="palace-cell ${p.name==='命宫'?'soul-palace':''} ${p.index===state.palace?'selected':''} ${related.has(p.index)&&p.index!==state.palace?'related-palace':''}" data-palace="${p.index}" style="grid-row:${row};grid-column:${col}" aria-pressed="${p.index===state.palace}"><span class="palace-head"><strong>${esc(p.name)}${p.isBody?' · 身':''}</strong><span>${esc(p.stem)}${esc(p.branch)}</span></span><span class="palace-stars">${starText(p.major)}</span><span class="palace-minor">${arr(p.minor).map(s=>esc(starName(s))).join(' ')}</span><span class="palace-overlay">年 ${esc(overlay?.annual || '—')} · 限 ${esc(overlay?.decadal || '—')}</span><span class="palace-range">虚岁 ${arr(p.decadal?.range).join('—')}</span></button>`;}).join('');$$('[data-palace]').forEach(b=>b.addEventListener('click',()=>{state.palace=Number(b.dataset.palace);renderNatal();}));const overlay=arr(y.annualPalaces).find(a=>a.index===selected.index);const trines=[selected.index,(selected.index+4)%12,(selected.index+8)%12,(selected.index+6)%12].map(i=>D.palaces.find(p=>p.index===i));const mutations=arr(y.annualMutations).filter(m=>m.natalPalace===selected.name);const annualTransit=arr(y.annualTransitStars?.[selected.index]).map(starName),decadalTransit=arr(y.decadalTransitStars?.[selected.index]).map(starName);$('#palace-detail').innerHTML=`<h3>${esc(selected.stem)}${esc(selected.branch)} · 本命${esc(selected.name)}${selected.isBody?' · 身宫':''}</h3><p><strong>叠宫：</strong>${y.year}流年${esc(overlay?.annual || '')} / ${esc(y.decadalStem || '')}${esc(y.decadalBranch || '')}${esc(y.scopeName || '大限')}${esc(overlay?.decadal || '')}</p><p><strong>本命主星：</strong>${starText(selected.major)}。<strong>辅星：</strong>${starText(selected.minor,'无')}。</p><p><strong>杂曜：</strong>${esc(arr(selected.adjective).map(starName).join('、') || '无')}。</p><p><strong>三方四正：</strong>${trines.map(p=>`${esc(p.branch)}·${esc(p.name)}〔${arr(p.major).length?esc(arr(p.major).map(starName).join('/')):'无十四主星'}〕`).join('；')}。</p><p><strong>本年四化入此宫：</strong>${mutations.length?mutations.map(m=>`${esc(m.star)}化${esc(m.type)}`).join('、'):'无直接入宫'}。</p><p><strong>流曜：</strong>${esc(annualTransit.join('、') || '无')}。<strong>运曜：</strong>${esc(decadalTransit.join('、') || '无')}。</p><p><strong>小限虚岁表（不参与本页曲线）：</strong>${esc(arr(selected.ages).join('、'))}</p>`;$('#mutation-year-title').textContent=`${y.year} · 三层四化对照`;$('#mutation-tables').innerHTML=mutationTable('生年四化 · 庚',y.natalMutations,false)+mutationTable(`${y.scopeName || '大限'}四化 · ${y.decadalStem || ''}`,y.decadalMutations,true)+mutationTable(`流年四化 · ${y.stem}`,y.annualMutations,true);}
  function mutationTable(title,mutations,overlay){const sorted=arr(mutations).slice().sort((a,b)=>'禄权科忌'.indexOf(a.type)-'禄权科忌'.indexOf(b.type));return `<div class="mutation-table-wrap"><table class="mutation-table"><caption>${esc(title)}</caption><thead><tr><th>四化</th><th>星曜</th><th>落本命宫</th>${overlay?`<th>叠流年宫</th><th>叠${esc(current().scopeName || '大限')}宫</th>`:''}</tr></thead><tbody>${sorted.map(m=>`<tr><td>化${esc(m.type)}</td><td>${esc(m.star)}</td><td>${esc(m.natalPalace)} · ${esc(m.branch)}</td>${overlay?`<td>${esc(m.annualPalace)}</td><td>${esc(m.decadalPalace)}</td>`:''}</tr>`).join('')}</tbody></table></div>`;}
  function renderMethod(){const m=D.method || {};const headings={intro:'阅读边界',school:'采用的技法与流派',calendar:'出生输入与排盘',yearBoundary:'流年年界与年龄',limits:'过去与未来的叙事边界',score:'曲线的完整编辑公式',scoreDomains:'六个切面的取宫规则',game:'选择分支与模拟行囊',knownContext:'已知背景如何进入故事',reproduce:'可复现代码',notes:'需要特别留意的口径'};let html=`<h3>本命底色的四条线索</h3>${arr(D.meta.natalReading).map(p=>`<p>${esc(p)}</p>`).join('')}`;for(const [key,value] of Object.entries(m)){if(key==='title')continue;const heading=headings[key] || key;if(key==='reproduce')html+=`<h3>${esc(heading)}</h3><pre><code>${esc(value)}</code></pre>`;else if(Array.isArray(value))html+=`<h3>${esc(heading)}</h3><ul>${value.map(v=>`<li>${esc(fmt(v))}</li>`).join('')}</ul>`;else html+=`<h3>${esc(heading)}</h3><p>${esc(fmt(value))}</p>`;}html+='<h3>下载原始数据</h3><p><a href="life-data.json" download="tang-life-atlas.json">年度完整数据 JSON ↗</a>　<a href="natal-chart.json" download="tang-natal-chart.json">原始命盘 JSON ↗</a></p>';$('#method-content').innerHTML=html;$('#source-list').innerHTML=arr(D.sources).map(s=>`<div class="source"><a href="${esc(/^https?:\/\//.test(s.url)?s.url:'#')}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a><p>${esc(s.note || '')}</p></div>`).join('');}
  function exportProgress(){const blob=new Blob([JSON.stringify({formatVersion:1,title:'此生 · Tang 的模拟旅程',exportedAt:new Date().toISOString(),lastYear:state.lastYear,choices:state.choices,quests:state.quests},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='tang-life-journey.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('旅程进度已导出。');}
  async function importProgress(file){if(!file)return;if(file.size>131072){toast('存档过大，请选择本页导出的 JSON 文件（最多128KB）。');$('#import-progress-file').value='';return;}
    try{const clean=validateProgress(JSON.parse(await file.text()),true);stopTour();state.choices=clean.choices;state.quests=clean.quests;state.lastYear=clean.lastYear;state.mode='read';save();setYear(clean.lastYear ?? D.meta.currentYear ?? minYear);renderLog();setMode('read');toast(`存档已导入：${Object.keys(clean.choices).length} 次选择、${Object.values(clean.quests).filter(Boolean).length} 个任务。`);}
    catch(error){toast(`未导入：${error instanceof SyntaxError?'文件不是有效的 JSON。':error.message}`);}
    finally{$('#import-progress-file').value='';}
  }
  ['#open-chart','#open-chart-hero','#open-chart-footer'].forEach(s=>$(s).addEventListener('click',()=>openDialog('chart-dialog')));
  ['#open-method','#open-method-footer'].forEach(s=>$(s).addEventListener('click',()=>openDialog('method-dialog')));
  $$('[data-close]').forEach(b=>b.addEventListener('click',()=>closeDialog(b.dataset.close)));
  $$('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom)closeDialog(dialog.id);}}));
  $('#return-now').addEventListener('click',()=>{stopTour();setYear(D.meta.currentYear||2026,{scroll:true});});
  $('#begin-journey').addEventListener('click',()=>{stopTour();setMode('journey');setYear(minYear);renderLog();});
  $('#continue-journey').addEventListener('click',()=>{const resume=state.lastYear ?? minYear;stopTour();setMode('journey');setYear(resume,{scroll:true});renderLog();});
  $('#read-mode').addEventListener('click',()=>setMode('read'));
  $('#journey-mode').addEventListener('click',()=>{setMode('journey');$('#choice-section').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});});
  $('#previous-year').addEventListener('click',()=>{stopTour();setYear(state.year-1);});
  $('#next-year').addEventListener('click',()=>{stopTour();setYear(state.year+1);});
  $('#year-slider').addEventListener('input',e=>{stopTour();setYear(e.target.value);});
  $('#trend-chart').addEventListener('mousemove',showChartTooltip);
  $('#trend-chart').addEventListener('mouseleave',()=>{$('#chart-tooltip').hidden=true;state.hoverYear=null;});
  $('#trend-chart').addEventListener('click',e=>{stopTour();setYear(chartYear(e));});
  $$('[data-range]').forEach(b=>b.addEventListener('click',()=>{state.range=b.dataset.range;$$('[data-range]').forEach(c=>c.classList.toggle('active',c===b));renderChart();}));
  document.addEventListener('keydown',e=>{if($$('dialog').some(d=>d.open)||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.metaKey||e.ctrlKey||e.altKey)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();stopTour();setYear(state.year+(e.key==='ArrowRight'?1:-1));}});
  $('#toggle-evidence').addEventListener('click',()=>{const open=$('#year-evidence').hidden;$('#year-evidence').hidden=!open;$('#toggle-evidence').setAttribute('aria-expanded',String(open));$('#toggle-evidence span').textContent=open?'−':'＋';});
  $('#quest-done').addEventListener('click',()=>{state.quests[state.year]=!state.quests[state.year];state.lastYear=state.year;save();renderQuest();renderChoices();renderLog();});
  $('#play-tour').addEventListener('click',toggleTour);
  $('#reset-progress').addEventListener('click',()=>{if(!resetArmed){resetArmed=true;$('#reset-progress').innerHTML='再点一次，清空进度 <span>↺</span>';resetTimer=setTimeout(()=>{resetArmed=false;$('#reset-progress').innerHTML='重置旅程 <span>↺</span>';},5000);return;}clearTimeout(resetTimer);resetArmed=false;state.choices={};state.quests={};state.lastYear=null;save();renderQuest();renderChoices();renderLog();$('#reset-progress').innerHTML='重置旅程 <span>↺</span>';toast('模拟选择和任务记录已清空。');});
  const exportBtn=document.createElement('button');exportBtn.className='text-button';exportBtn.id='export-progress';exportBtn.innerHTML='导出进度 <span>↗</span>';exportBtn.addEventListener('click',exportProgress);$('#reset-progress').before(exportBtn);
  const importBtn=document.createElement('button');importBtn.className='text-button';importBtn.id='import-progress';importBtn.innerHTML='导入存档 <span>↙</span>';importBtn.addEventListener('click',()=>$('#import-progress-file').click());$('#reset-progress').before(importBtn);
  $('#import-progress-file').addEventListener('change',event=>importProgress(event.target.files?.[0]));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTour();});
  const linkedYear=Number(new URLSearchParams(location.search).get('year'));if(D.years.some(y=>y.year===linkedYear))state.year=linkedYear;
  initHero();renderLegend();setYear(state.year);renderLog();setMode('read');renderContinue();
})();
