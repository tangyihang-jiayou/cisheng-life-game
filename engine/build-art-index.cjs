const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
const read=f=>JSON.parse(fs.readFileSync(path.join(dist,f),'utf8'));
const d=read('life-data.json'),c=read('comic-data.json');
function jpegSize(b){let o=2;while(o<b.length){if(b[o++]!==255)throw Error('Invalid JPEG');let m=b[o++];while(m===255)m=b[o++];if(m===0xD9||m===0xDA)break;if(m===0xD8||m===1||(m>=0xD0&&m<=0xD7))continue;const n=b.readUInt16BE(o);if([0xC0,0xC1,0xC2].includes(m))return{width:b.readUInt16BE(o+5),height:b.readUInt16BE(o+3)};o+=n;}throw Error('JPEG dimensions missing');}
const years=d.years.map(y=>{const image=c.years[y.year].image,b=fs.readFileSync(path.join(dist,image));return{year:y.year,age:y.age,title:y.title,image,sha256:crypto.createHash('sha256').update(b).digest('hex'),bytes:b.length,...jpegSize(b),basis:{storyBeats:c.years[y.year].dialogue,annualLifePalace:y.annualPalace,decadalLifePalace:y.decadalPalace,annualTransformations:y.annualMutations,decadalTransformations:y.decadalMutations}};});
fs.writeFileSync(path.join(dist,'art-index.json'),JSON.stringify({nature:'每年独立生成的命盘主题虚构情境；不是实际经历还原或未来事实。',generator:'OpenAI image generation',years},null,2)+'\n');
console.log(JSON.stringify({result:'indexed',annualImages:years.length}));
