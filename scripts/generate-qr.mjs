import {fileURLToPath} from 'node:url';
import QRCode from 'qrcode';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const raw=process.argv[2]||JSON.parse(fs.readFileSync('publication.json','utf8')).url;
const home=new URL(raw);if(!['http:','https:'].includes(home.protocol))throw Error('Supply an HTTP(S) site URL.');
home.search='';home.hash='';if(home.pathname.endsWith('/index.html'))home.pathname=home.pathname.slice(0,-10);if(!home.pathname.endsWith('/'))home.pathname+='/';
const out='site/qr';fs.mkdirSync(out,{recursive:true});
const links=[['00-companion-home','Companion home',''],...Array.from({length:10},(_,i)=>[`${String(i+1).padStart(2,'0')}-chapter-${i+1}`,`Chapter ${i+1}`,`chapters/chapter-${i+1}.html`]),['11-practical-checklist','Practical checklist','practicals.html']];
const index=[];
for(const [file,label,path] of links){const target=new URL(path,home).href;await QRCode.toFile(`${out}/${file}.png`,target,{width:1200,margin:4,errorCorrectionLevel:'M'});fs.writeFileSync(`${out}/${file}.svg`,await QRCode.toString(target,{type:'svg',margin:4,errorCorrectionLevel:'M'}));index.push({label,url:target,png:file+'.png',svg:file+'.svg'});}
fs.writeFileSync(out+'/destinations.json',JSON.stringify(index,null,2));
fs.writeFileSync(out+'/README.md','# PHP Companion QR codes\n\nPNG files: 1200 × 1200 pixels, black on white, with a four-module quiet zone. SVG files are scalable. Keep the full white margin, do not stretch or place artwork over a code, and test at its final print size. Choose size based on the actual print process and scanning distance.\n\n'+index.map(i=>`- ${i.label}: ${i.url}`).join('\n')+'\n');
execFileSync('python3',['-c',`import pathlib,zipfile\np=pathlib.Path('site/qr')\nwith zipfile.ZipFile('site/downloads/qr-codes.zip','w',zipfile.ZIP_DEFLATED) as z:\n for f in sorted(p.iterdir()):\n  if f.is_file():z.write(f,'qr-codes/'+f.name)`]);
console.log('Generated 12 QR destinations with PNG and SVG artwork.');
