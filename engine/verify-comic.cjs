const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('node:assert/strict');
const dist=path.resolve(__dirname,'../dist');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(dist,'comic-data.js'),'utf8'),ctx);
const c=ctx.window.COMIC_DATA,d=JSON.parse(fs.readFileSync(path.join(dist,'life-data.json'),'utf8'));
assert.equal(Object.keys(c.years).length,101);assert.equal(c.chapters.length,11);
const types=new Set();let panelCount=0;
for(const y of d.years){
const a=c.years[y.year];assert.ok(a,'Missing '+y.year);assert.equal(a.year,y.year);
assert.equal(a.image,`assets/years/${y.year}.jpg`);assert.ok(fs.existsSync(path.join(dist,a.image)),`Missing annual art ${y.year}`);
assert.equal(a.dialogue.length,3);assert.ok(a.dialogue.every(s=>typeof s==='string'&&s.length>8&&s.length<90));panelCount+=a.dialogue.length;
assert.equal(c.chapters[a.chapterIndex].id,y.decadeId);assert.ok(a.interaction.title&&a.interaction.instruction&&a.interaction.completeText);
assert.equal(a.interaction.items.length,3);assert.equal(new Set(a.interaction.items.map(i=>i.id)).size,3);
assert.ok(a.memory.name&&a.memory.description&&a.memory.kind);types.add(a.interaction.type);
assert.ok(a.evidenceSummary.includes(y.annualPalace));
}
assert.deepEqual([...types].sort(),['choose','collect','connect','hold','order','reveal']);
for(const asset of [c.art.cover,c.art.portrait,...c.chapters.map(c=>c.image)]){assert.ok(!asset.startsWith('/'));assert.ok(fs.existsSync(path.join(dist,asset)),asset);assert.ok(fs.statSync(path.join(dist,asset)).size>30000);}
for(const name of ['index.html','storybook.html','style.css','app.js','archive.html','archive.css','archive.js','data.js','comic-data.js','life-data.json','natal-chart.json','LICENSE-iztro.txt'])assert.ok(fs.existsSync(path.join(dist,name)),name);
for(const name of ['data.js','life-data.json']){const text=fs.readFileSync(path.join(dist,name),'utf8');assert.ok(!/(?:\/Users\/|\/home\/)[^"\s]+|gh[op]_[A-Za-z0-9]{20}|sk-proj-[A-Za-z0-9]{20}/.test(text),'Unnecessary private context or credential in '+name);}
assert.ok(c.nature.includes('创作'));assert.ok(c.years[2100].dialogue.join('').includes('阅读范围'));
console.log(JSON.stringify({result:'passed',years:Object.keys(c.years).length,panels:panelCount,chapters:c.chapters.length,artworkAssets:c.chapters.length+2,interactions:[...types]}));
