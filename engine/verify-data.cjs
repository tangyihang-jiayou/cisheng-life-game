const fs=require('fs'),assert=require('node:assert/strict');
const {astro}=require('iztro');
const d=JSON.parse(fs.readFileSync(__dirname+'/../dist/life-data.json','utf8'));
assert.equal(d.years.length,101);assert.equal(d.palaces.length,12);
for(const y of d.years.filter(y=>y.year<2002)){assert.equal(y.scopeName,'童限');assert.ok(y.evidence.find(e=>e.dimension==='layers').text.includes('童限四化'));assert.ok(!Object.values(y.scoreDetails).some(s=>s.trace.some(t=>t.startsWith('大限'))));}
assert.equal(new Set(d.years.map(y=>y.year)).size,101);
assert.deepEqual(d.years.map(y=>y.year),Array.from({length:101},(_,i)=>2000+i));
const original=astro.bySolar('2000-3-2',7,'男',true,'zh-CN');
assert.equal(original.fiveElementsClass,'木三局');
assert.equal(original.earthlyBranchOfSoulPalace,'未');assert.equal(original.earthlyBranchOfBodyPalace,'酉');
assert.deepEqual(original.palace('命宫').majorStars.map(s=>[s.name,s.brightness,s.mutagen]),[['太阳','得','禄'],['太阴','不','科']]);
const expected2026=[['天同','禄','夫妻'],['天机','权','福德'],['文昌','科','财帛'],['廉贞','忌','疾厄']];
assert.deepEqual(d.years.find(y=>y.year===2026).annualMutations.map(m=>[m.star,m.type,m.natalPalace]),expected2026);
assert.equal(original.horoscope('2026-2-16',7).age.nominalAge,26);
assert.equal(original.horoscope('2026-2-17',7).age.nominalAge,27);
assert.equal(original.horoscope('2026-2-16',7).yearly.heavenlyStem,'乙');
assert.equal(original.horoscope('2026-2-17',7).yearly.heavenlyStem,'丙');
const switches={2002:['命宫','癸'],2012:['父母','甲'],2022:['福德','乙'],2032:['田宅','丙'],2042:['官禄','丁'],2052:['仆役','戊'],2062:['迁移','己'],2072:['疾厄','戊'],2082:['财帛','己'],2092:['子女','庚']};
for(const [year,[palace,stem]]of Object.entries(switches)){const y=d.years.find(y=>y.year===+year);assert.equal(y.decadalPalace,palace);assert.equal(y.decadalStem,stem);}
const storyYears=[];
for(const segment of ['early','middle','late']){const items=JSON.parse(fs.readFileSync(`${__dirname}/stories-${segment}.json`,'utf8'));for(const s of items){storyYears.push(s.year);const y=d.years.find(y=>y.year===s.year);assert.equal(y.title,s.title);assert.deepEqual(y.story,s.story);assert.equal(s.story.length,3);assert.ok(s.story.join('').length>140);}}
assert.deepEqual(storyYears,d.years.map(y=>y.year));
let mutationCount=0;
for(const y of d.years){
assert.equal(y.nominalAge,y.year-1999);assert.equal(y.age,y.year-2000);
assert.ok(y.startDate<y.endBefore);assert.equal(y.annualPalaces.length,12);
assert.equal(new Set(y.annualPalaces.map(p=>p.annual)).size,12);
const h=original.horoscope(`${y.year}-7-1`,7);
for(const [scope,key]of [['yearly','annualMutations'],['decadal','decadalMutations']])for(const m of y[key]){
const p=original.palaces.find(p=>[...p.majorStars,...p.minorStars].some(s=>s.name===m.star));
assert.ok(p);assert.equal(m.natalPalace,p.name);assert.equal(m.annualPalace,h.yearly.palaceNames[p.index]);assert.equal(m.decadalPalace,h.decadal.palaceNames[p.index]);
assert.equal(h[scope].mutagen[['禄','权','科','忌'].indexOf(m.type)],m.star);mutationCount++;
}
for(const dim of d.dimensions){const s=y.scoreDetails[dim.key];assert.equal(y.scores[dim.key],s.value);assert.equal(s.value,Math.round(Math.max(15,Math.min(85,s.raw))));assert.ok(y.aspects[dim.key].length>35);}
assert.equal(y.scores.overall,Math.round(d.dimensions.reduce((s,k)=>s+y.scores[k.key],0)/6));
assert.equal(y.choices.length,3);assert.equal(new Set(y.choices.map(c=>c.id)).size,3);assert.ok(y.choices.every(c=>c.outcome&&c.story));
}
assert.ok(d.method.yearBoundary.includes('当年3月2日前'));
assert.ok(!d.method.yearBoundary.includes('1月出生日前'));
console.log(JSON.stringify({result:'passed',years:d.years.length,chapters:d.decades.length,mutationsVerified:mutationCount,storyCharacters:d.years.reduce((n,y)=>n+y.story.join('').length,0),dimensions:d.dimensions.length,engine:d.meta.engineVersion}));
