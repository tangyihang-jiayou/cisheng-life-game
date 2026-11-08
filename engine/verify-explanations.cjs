const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const dist=path.resolve(__dirname,'../dist'),c={};c.window=c;vm.createContext(c);
for(const file of ['data.js','ziwei-readings.js','ziwei-context.js'])vm.runInContext(fs.readFileSync(path.join(dist,file),'utf8'),c,{filename:file});
const originalData=JSON.stringify(c.LIFE_DATA),originalReadings=JSON.stringify(c.TANG_ZIWEI_READINGS),originalApi=c.TANG_ZIWEI;
const oldContexts=Array.from({length:101},(_,i)=>c.TANG_ZIWEI.getYearContext(i+2000));
vm.runInContext(fs.readFileSync(path.join(dist,'ziwei-explanations.js'),'utf8'),c,{filename:'ziwei-explanations.js'});
const X=c.TANG_ZIWEI_EXPLANATIONS,all=X.getAll(),huaIds={禄:'lu',权:'quan',科:'ke',忌:'ji'};
assert.equal(all.length,101);assert.equal(X.years.length,101);
assert.deepEqual(Array.from(X.years),Array.from({length:101},(_,i)=>i+2000));
const sourceAt=source=>source.replace(/\[(\d+)\]/g,'.$1').split('.').reduce((o,key)=>o?.[key],c);
let sections=0,annualHua=0,overlaps=0,emptyAnnual=0,child=0;
for(const reading of all){
 const {year}=reading,raw=c.LIFE_DATA.years[year-2000],ctx=oldContexts[year-2000],ids=reading.sections.map(s=>s.id),known=new Set(ctx.evidence.map(e=>e.id));
 assert.equal(reading.year,raw.year);assert.equal(reading.startDate,raw.startDate);assert.equal(reading.endBefore,raw.endBefore);
 assert.equal(new Set(ids).size,ids.length,'Duplicate section ID '+year);
 assert.ok(reading.headline&&reading.summary&&reading.methodNote&&reading.references.length);
 if(year>=2026){assert.equal(reading.headline,c.TANG_ZIWEI_READINGS[year].title);assert.equal(reading.summary,c.TANG_ZIWEI_READINGS[year].conflict);}
 for(const id of ['boundary','annual-palace','decade','layers','annual-network'])assert.ok(ids.includes(id),year+' missing '+id);
 for(const s of reading.sections){
  assert.ok(s.title&&s.reading.length>35,year+' incomplete '+s.id);
  assert.ok(Array.isArray(s.basis)&&s.basis.length&&s.basis.every(b=>typeof b==='string'&&b.length>4));
  assert.ok(Array.isArray(s.examples)&&Array.isArray(s.evidenceIds)&&Array.isArray(s.sourcePaths));
  assert.ok(s.evidenceIds.every(id=>known.has(id)),year+' evidence not found '+s.id);
  assert.ok(s.sourcePaths.every(source=>sourceAt(source)!==undefined),year+' source not found '+s.id);
  assert.ok(!/undefined|NaN|\[object Object\]/.test(JSON.stringify(s)),year+' unresolved content '+s.id);
  sections++;
 }
 const annualSection=reading.sections.find(s=>s.id==='annual-palace');
 assert.ok(annualSection.basis[0].includes('本命'+ctx.frames.annual.center.natal));
 for(const star of ctx.frames.annual.center.stars)assert.ok(annualSection.basis[0].includes(star.name+(star.brightness?'（'+star.brightness+'）':'')),year+' lost original brightness');
 if(ctx.frames.annual.empty){assert.ok(annualSection.basis.some(b=>b.includes('空宫')&&b.includes('仅作参照')));emptyAnnual++;}
 for(const m of ctx.mutations.filter(m=>m.layer==='annual')){
  const s=reading.sections.find(s=>s.id==='annual-hua-'+huaIds[m.type]);
  assert.ok(s.title.includes(m.star+'化'+m.type));
  assert.ok(s.evidenceIds.includes(m.id));
  assert.ok(s.basis[0].includes('本命'+m.placements.natal)&&s.basis[0].includes('流年'+m.placements.annual)&&s.basis[0].includes(ctx.frames.decadal.label+m.placements.decadal));
  annualHua++;
 }
 assert.equal(ids.filter(id=>id.startsWith('annual-hua-')).length,4);
 assert.equal(ids.filter(id=>id.startsWith('overlap-')).length,ctx.overlaps.length);
 for(const o of ctx.overlaps){
  const s=reading.sections.find(s=>s.id===o.id);assert.ok(s&&s.reading);
  for(const m of o.mutations)assert.ok(s.basis.some(b=>b.includes(m.label+m.star+'化'+m.type)));
  if(new Set(o.mutations.map(m=>m.type)).size>2&&!(o.star==='太阴'&&o.mutations.some(m=>m.layer==='annual'&&m.type==='禄')&&o.mutations.some(m=>m.layer==='decadal'&&m.type==='忌'))){
   for(const type of new Set(o.mutations.map(m=>m.type)))assert.ok(s.reading.includes('化'+type),year+' missing interpretation of '+o.star+type);
  }
  overlaps++;
 }
 if(raw.scopeName==='童限'){
  const s=reading.sections.find(s=>s.id==='decade');
  assert.ok(s.title.includes('童限'));
  assert.ok(s.reading.includes('不能把这一宫说成持续十年'));
  assert.ok(!s.title.startsWith('十年大限'));child++;
 }
}
const getSection=(year,id)=>X.get(year).sections.find(s=>s.id===id),moon27=getSection(2027,'overlap-太阴'),moon87=getSection(2087,'overlap-太阴');
assert.ok(moon27.basis.some(b=>b.includes('大限太阴化忌'))&&moon27.reading.includes('外界认可与内在不满意'));
assert.ok(!moon87.basis.some(b=>b.includes('大限太阴化忌'))&&moon87.reading.includes('没有化忌叠入'));
assert.ok(getSection(2027,'overlap-天机').reading.includes('流年天机科'));
assert.ok(!X.get(2087).sections.some(s=>s.id==='overlap-天机'));
assert.ok(getSection(2027,'annual-hua-ji').basis[0].includes('本命福德／大限命宫／流年福德'));
assert.ok(getSection(2087,'annual-hua-ji').basis[0].includes('本命福德／大限迁移／流年福德'));
assert.ok(getSection(2032,'layers').reading.includes('换大限'));
assert.ok(getSection(2032,'decade').basis[0].includes('2032—2041'));
assert.ok(getSection(2033,'annual-palace').basis.some(b=>b.includes('无十四主星')));
assert.ok(getSection(2087,'decade').basis.some(b=>b.includes('空宫')&&b.includes('仅作参照')));
assert.ok(getSection(2000,'boundary').reading.includes('出生后'));
assert.ok(getSection(2000,'decade').basis.some(b=>b.includes('本命命宫')));
assert.ok(getSection(2001,'decade').basis.some(b=>b.includes('本命财帛')));
assert.ok(getSection(2001,'annual-hua-ke').basis[0].includes('文曲化科')&&getSection(2001,'annual-hua-ke').basis[0].includes('该星原盘亮度：旺'));
assert.ok(!getSection(2001,'annual-hua-ke').basis[0].includes('该星原盘亮度：陷'));
assert.ok(getSection(2027,'annual-palace').basis[0].includes('太阳（得）、太阴（不）'));
assert.ok(getSection(2027,'decade').basis.some(b=>b.includes('本命身宫')));
assert.ok(getSection(2012,'overlap-武曲').reading.includes('武曲化忌'));
assert.equal(JSON.stringify(c.LIFE_DATA),originalData,'Display module mutated LIFE_DATA');
assert.equal(JSON.stringify(c.TANG_ZIWEI_READINGS),originalReadings,'Display module mutated authored readings');
assert.equal(c.TANG_ZIWEI,originalApi,'Display module replaced existing context API');
assert.equal(JSON.stringify(Array.from({length:101},(_,i)=>c.TANG_ZIWEI.getYearContext(i+2000))),JSON.stringify(oldContexts),'Display module changed existing year contexts');
const clean=JSON.stringify(X.get(2027)),returned=X.get(2027);returned.sections[0].basis.push('changed');returned.summary='changed';
assert.equal(JSON.stringify(X.get(2027)),clean,'Caller can mutate cached explanation');
for(const invalid of [1999,2101,2027.5,'2027',null])assert.throws(()=>X.get(invalid));
console.log(JSON.stringify({explanations:'passed',years:all.length,sections,annualHua,overlaps,emptyAnnual,childReferences:child,authoredFutureYears:75,originalDataAndContexts:'unchanged',dates:'original',moon2027And2087:'distinguished',decade2032:'changed',minorStarBrightness:'original'}));
