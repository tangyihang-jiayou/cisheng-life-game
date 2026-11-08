const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const dir=path.resolve(__dirname,'../dist');const context={console};context.window=context;vm.createContext(context);
for(const f of ['data.js','sharp-data.js','biography-data.js','ziwei-readings.js','ziwei-context.js','sim-events.js','sim-engine.js'])vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),context,{filename:f});
const E=context.TANG_SIM,plain=x=>JSON.parse(JSON.stringify(x)),focuses=['craft','freedom','connection','energy','reserve','joy'];
const sourceIds=new Set(context.BIOGRAPHY_DATA.sources.map(s=>s.id));
for(const item of [...context.SIM_EVENT_CATALOG.events,...context.SIM_EVENT_CATALOG.decisions])for(const id of item.sourceIds||[])assert.ok(sourceIds.has(id),'Unknown source '+id);
for(const card of context.SIM_EVENT_CATALOG.decisions)for(const option of card.options){
 for(const field of ['action','time','people','cost'])assert.ok(typeof option[field]==='string'&&option[field].length>5,card.id+': missing concrete '+field);
 assert.ok(!/容器|拓展自主|积攒余量/.test(option.label),card.id+': abstract option label');
}
let thematic=E.createRun({seed:'v2-theme-review'});
for(const year of [2027,2028,2029,2030,2031,2032]){
 const axis=E.getYearContext(year).yearContext,pool=E.previewWeights(thematic,year).filter(e=>e.weight>0);
 assert.ok(pool.length>0);
 assert.ok(pool.every(e=>e.astroThemes.includes(axis.primaryThemeId)),year+': annual primary theme did not constrain first event');
 thematic=E.advance(thematic,{autoChoose:true});
}
function finish(seed,focus){let r=E.createRun({seed,focus});while(r.year<2100)r=E.advance(r,{autoChoose:true});if(r.pending)r=E.decide(r,r.pending.options[0].id);return r;}
const runs=focuses.map(f=>finish('tang-trajectory-'+f,f));
for(const r of runs){assert.equal(r.year,2100);assert.equal(r.timeline.length,101);assert.ok(r.ended);assert.equal(r.timeline.filter(x=>x.kind==='simulation').length,74);for(const rec of r.timeline.filter(x=>x.year>2026)){
 assert.ok(!/[{}]/.test(rec.paragraphs.join('')),'Unexpanded template '+rec.year);
 assert.ok(!/\b(?:active|paused|closed|completed|dormant)\b/.test(rec.paragraphs.join('')),'Technical status in prose '+rec.year);
 for(const k of focuses)assert.ok(Number.isFinite(rec.stats[k])&&rec.stats[k]>=0&&rec.stats[k]<=100);
 for(const a of rec.selectionAudit){const sum=a.pool.reduce((n,p)=>n+p.probability,0);assert.ok(Math.abs(sum-1)<1e-10,'Probability pool does not sum to one');const chosen=a.pool.find(p=>p.id===a.selectedId);assert.ok(chosen.eligible&&chosen.weight>0);}
 }
 const exported=E.exportRun(r);assert.ok(Buffer.byteLength(exported)<1500000);const restored=E.importRun(exported);assert.deepEqual(plain(restored.timeline.map(x=>({year:x.year,title:x.title,stats:x.stats}))),plain(r.timeline.map(x=>({year:x.year,title:x.title,stats:x.stats}))));
}
const a=finish('tang-reproduce','craft'),b=finish('tang-reproduce','craft');assert.deepEqual(plain(a),plain(b),'Same seed did not reproduce');
const fork=E.fork(a,2040,{seed:'tang-reproduce-alternative'});assert.deepEqual(plain(fork.timeline),plain(a.timeline.filter(r=>r.year<=2040)),'Fork rewrote past');let later=fork;while(later.year<2050)later=E.advance(later,{autoChoose:true});assert.notDeepEqual(plain(later.timeline.slice(-10).map(r=>r.events.map(e=>e.id))),plain(a.timeline.filter(r=>r.year>2040&&r.year<=2050).map(r=>r.events.map(e=>e.id))),'Fork did not differ');
const summaries=runs.map(r=>({focus:r.focus,decisions:r.timeline.filter(x=>x.decision).length,uniqueEvents:new Set(r.timeline.filter(x=>x.year>2026).flatMap(x=>x.events.map(e=>e.id))).size,saveBytes:Buffer.byteLength(E.exportRun(r)),finalStats:r.stats,locations:[...new Set(r.timeline.map(x=>x.location))]}));
console.log(JSON.stringify({trajectories:'passed',fullLives:runs.length+2,yearsPerLife:101,sameSeedReproduces:true,forkPreservesPast:true,focusSummaries:summaries}));
