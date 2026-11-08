const fs=require('fs'),path=require('path'),assert=require('node:assert/strict'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const D=read('dist/life-data.json'),S=read('dist/sharp-data.json'),T=read('dist/trend-audit.json');
assert.equal(Object.keys(S.years).length,101);assert.equal(Object.keys(T.years).length,101);
assert.equal(new Set(Object.values(S.years).map(y=>y.headline)).size,101);
const transform=v=>Math.round((50+50*Math.tanh(3*(v-50)/50))*10)/10;
let factClaims=0;
for(const y of D.years){const s=S.years[y.year],t=T.years[y.year];
 for(const k of ['headline','verdict','upside','price','pitfall','watch'])assert.ok(typeof s[k]==='string'&&s[k].length>5,`${y.year}.${k}`);
 assert.ok(s.claimBasis.length>=2);const basis=s.claimBasis.join(' ');
 for(const m of [...y.annualMutations,...y.decadalMutations]){assert.ok(basis.includes(`${m.star}化${m.type}→本命${m.natalPalace}／流年${m.annualPalace}`),`${y.year} ${m.star}${m.type}`);factClaims++;}
 for(const k of ['opportunity','pressure','balance']){assert.ok(Number.isFinite(t.raw[k]));assert.equal(t[k],transform(t.raw[k]));assert.equal(s.trend[k],t[k]);assert.equal(s.trend.raw[k],t.raw[k]);assert.ok(t[k]>0&&t[k]<100);}
 for(const [axis,field]of [['opportunity','opportunitySum'],['pressure','pressureSum']]){const sum=t.contributions.filter(c=>c.axis===axis).reduce((n,c)=>n+c.points,0);assert.ok(Math.abs(sum-t.ledger[field])<0.0001,`${y.year} ${axis} ledger`);}
 assert.equal(s.trend.drivers.length,5);assert.equal(s.trend.ledger.opportunitySum,t.ledger.opportunitySum);
}
const src=T.metadata.source.find(s=>s.file==='dist/life-data.json');assert.equal(src.sha256,crypto.createHash('sha256').update(fs.readFileSync(root+'/dist/life-data.json')).digest('hex'));
for(const key of ['opportunity','pressure','balance'])assert.ok(new Set(Object.values(T.years).map(t=>t.raw[key])).size>40);
const source=fs.readFileSync(root+'/dist/app.js','utf8');
assert.ok(!/(?<!\$)\$\('\[[^']*\]'\)\.forEach/.test(source),'Single-element selector used as a collection');
assert.ok(fs.readFileSync(root+'/dist/storybook.html','utf8').includes('sharp-data.js'));
console.log(JSON.stringify({result:'passed',verdicts:101,verifiedTransformationClaims:factClaims,curves:3,randomCurveInputs:false,hardClippedPeaks:0}));
