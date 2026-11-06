const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dist=path.resolve(__dirname,'../dist');let count=0;
for(const name of ['index.html','archive.html']){const file=path.join(dist,name),s=fs.readFileSync(file,'utf8');const out=s.replace(/\b(src|href)="([A-Za-z0-9._/-]+\.(?:js|css))(?:\?v=[a-f0-9]+)?"/g,(_,attr,asset)=>{const hash=crypto.createHash('sha256').update(fs.readFileSync(path.join(dist,asset))).digest('hex').slice(0,12);count++;return`${attr}="${asset}?v=${hash}"`;});fs.writeFileSync(file,out);}
console.log(JSON.stringify({result:'versioned',assetReferences:count}));
