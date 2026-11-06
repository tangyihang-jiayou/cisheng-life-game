const fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),dist=root+'/dist';
const D=JSON.parse(fs.readFileSync(dist+'/life-data.json','utf8'));
const V=JSON.parse(fs.readFileSync(__dirname+'/verdicts.json','utf8')).years;
const T=JSON.parse(fs.readFileSync(__dirname+'/trend-signals.json','utf8'));
const years={};
for(const y of D.years){
 const v=V[y.year],t=T.years[y.year];assert.ok(v&&t,'Missing '+y.year);
 for(const k of ['headline','verdict','upside','price','pitfall','watch'])assert.ok(typeof v[k]==='string'&&v[k].length>5,`${y.year}.${k}`);
 assert.ok(v.claimBasis.length>=2);
 const {opportunity,pressure,balance,raw,ledger,drivers,stance}=t;
 years[y.year]={...v,trend:{opportunity,pressure,balance,raw,ledger,drivers,stance}};
}
const S={version:3,title:'逐年主星判断与双账本年势',nature:'依据已核验命盘的传统象义解读与编辑曲线；不表示已知真实经历或经验证的未来概率。',years,trendMetadata:T.metadata,downloads:{annual:'sharp-data.json',ledger:'trend-audit.json'}};
fs.writeFileSync(dist+'/sharp-data.js','window.SHARP_DATA = '+JSON.stringify(S)+';\n');
fs.writeFileSync(dist+'/sharp-data.json',JSON.stringify(S,null,2));
fs.writeFileSync(dist+'/trend-audit.json',JSON.stringify(T,null,2));
console.log(JSON.stringify({years:Object.keys(years).length,sample:years[2026].headline,curve:'dual-ledger/tanh',display:years[2026].trend.balance}));
