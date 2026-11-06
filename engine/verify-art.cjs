const fs=require('fs'),path=require('path'),crypto=require('crypto'),assert=require('node:assert/strict');
const dist=path.resolve(__dirname,'../dist'),read=f=>JSON.parse(fs.readFileSync(path.join(dist,f),'utf8'));
const index=read('art-index.json'),d=read('life-data.json'),c=read('comic-data.json');
assert.equal(index.years.length,101);assert.equal(new Set(index.years.map(y=>y.sha256)).size,101);
assert.deepEqual(index.years.map(y=>y.year),d.years.map(y=>y.year));
for(const a of index.years){const y=d.years.find(y=>y.year===a.year),b=fs.readFileSync(path.join(dist,a.image));assert.equal(a.image,`assets/years/${a.year}.jpg`);assert.equal(c.years[a.year].image,a.image);assert.equal(b[0],255);assert.equal(b[1],216);assert.equal(b.length,a.bytes);assert.ok(a.bytes>50000&&a.bytes<2500000);assert.equal(a.sha256,crypto.createHash('sha256').update(b).digest('hex'));assert.equal(a.width,1536);assert.equal(a.height,1024);assert.equal(a.title,y.title);assert.deepEqual(a.basis.storyBeats,c.years[a.year].dialogue);assert.deepEqual(a.basis.annualTransformations,y.annualMutations);assert.deepEqual(a.basis.decadalTransformations,y.decadalMutations);}
console.log(JSON.stringify({result:'passed',annualImages:101,uniqueHashes:101,dimensions:'1536×1024',basis:'yearly chart and story',totalBytes:index.years.reduce((n,y)=>n+y.bytes,0)}));
