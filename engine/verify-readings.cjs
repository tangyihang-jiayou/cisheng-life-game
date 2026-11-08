const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const dist=path.resolve(__dirname,'../dist'),c={};c.window=c;vm.createContext(c);
for(const f of ['data.js','ziwei-readings.js','ziwei-context.js'])vm.runInContext(fs.readFileSync(path.join(dist,f),'utf8'),c,{filename:f});
const readings=c.TANG_ZIWEI_READINGS;
assert.equal(Object.keys(readings).length,75);
assert.equal(new Set(Object.values(readings).map(r=>r.title)).size,75,'Annual headlines must be independently written');
const stars=['太阳','太阴','天机','巨门','武曲','天同','廉贞','贪狼','文昌','文曲','天梁','紫微','左辅','右弼','破军'];
let claims=0,frames=0;
for(let year=2026;year<=2100;year++){
 const reading=readings[year],raw=c.LIFE_DATA.years.find(r=>r.year===year),ctx=c.TANG_ZIWEI.getYearContext(year);
 assert.equal(ctx.title,reading.title,'Authored annual reading not used: '+year);
 assert.equal(ctx.primaryThemeId,reading.primaryThemeId);
 assert.ok(c.TANG_ZIWEI.themeIds.includes(reading.primaryThemeId));
 for(const star of stars)for(const type of ['禄','权','科','忌'])if(reading.conflict.includes(star+'年'+type)){
  assert.ok(raw.annualMutations.some(m=>m.star===star&&m.type===type),year+': unsupported annual transformation '+star+type);claims++;
 }
 assert.equal(ctx.startDate,raw.startDate);assert.equal(ctx.endBefore,raw.endBefore);
 for(const frame of Object.values(ctx.frames)){
  const center=frame.center.index;
  assert.deepEqual(Array.from(frame.trines,p=>p.index).sort((a,b)=>a-b),[(center+4)%12,(center+8)%12].sort((a,b)=>a-b));
  assert.equal(frame.opposite.index,(center+6)%12);
  assert.equal(frame.empty,frame.center.ownStars.length===0);
  if(frame.empty)assert.deepEqual(Array.from(frame.borrowedStars),Array.from(frame.opposite.ownStars));
  else assert.equal(frame.borrowedStars.length,0);
  frames++;
 }
 for(const overlap of ctx.overlaps){
  assert.ok(new Set(overlap.mutations.map(m=>m.layer)).size>1);
  assert.ok(overlap.mutations.every(m=>m.star===overlap.star&&m.placements.index===overlap.placements.index));
 }
}
const y27=c.TANG_ZIWEI.getYearContext(2027),moon=y27.overlaps.find(x=>x.star==='太阴');
assert.deepEqual(Array.from(moon.mutations,m=>m.layer+':'+m.type).sort(),['annual:禄','decadal:忌','natal:科'].sort());
assert.ok(y27.starBasis.join('').includes('巨门化忌'));
assert.ok(!c.TANG_ZIWEI.getYearContext(2087).overlaps.find(x=>x.star==='太阴').mutations.some(m=>m.layer==='decadal'&&m.type==='忌'),'2087 must not reuse 2027 decade');
for(const year of [2032,2042,2052,2062,2072,2082,2092])assert.ok(c.TANG_ZIWEI.getYearContext(year).decade.changed);
console.log(JSON.stringify({yearReadings:'passed',years:75,distinctHeadlines:75,explicitAnnualClaims:claims,palaceFrames:frames,decadeBoundaries:7,moon2027And2087:'distinguished'}));
