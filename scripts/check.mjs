import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const book=JSON.parse(fs.readFileSync('source/content.json','utf8'));
const fail=s=>{throw Error(s)};
if(book.chapters.length!==10||book.practicals.length!==25)fail('Book structure mismatch');
const ids=new Set();let examples=0,practice=0,quiz=0;
for(const c of book.chapters){
 if(c.examples.length!==4||c.practice.length!==6||c.quiz.length!==5)fail('Incomplete chapter '+c.n);
 if(!fs.existsSync(`site/chapters/chapter-${c.n}.html`))fail('Missing chapter page');
 for(const e of c.examples){if(ids.has(e.id))fail('Duplicate example id');ids.add(e.id);examples++;for(const key of ['title','code','output','why','change'])if(!e[key])fail(`Missing ${key} in ${e.id}`);if(!fs.existsSync(`site/downloads/example-${e.id}.zip`))fail('Missing example download');}
 practice+=c.practice.length;quiz+=c.quiz.length;
 for(const q of c.quiz)if(!Number.isInteger(q.answer)||!q.options[q.answer]||!q.explanation)fail('Invalid quiz answer');
}
for(const p of book.practicals)if(p.example!=='project'&&!ids.has(p.example))fail('Broken practical mapping');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
let links=0;
for(const file of walk('site').filter(p=>p.endsWith('.html'))){const raw=fs.readFileSync(file,'utf8');for(const match of raw.matchAll(/(?:href|src)="([^"]+)"/g)){const href=match[1];if(/^(https?:|data:|mailto:|#)/.test(href))continue;const target=path.resolve(path.dirname(file),href.split(/[?#]/)[0]);if(!fs.existsSync(target))fail(`Broken local link ${file} → ${href}`);links++;}}
for(const p of ['all-examples.zip','student-register.zip','practice-bank.html','practice-bank.md','qr-codes.zip'])if(!fs.existsSync('site/downloads/'+p))fail('Missing '+p);
const qr=JSON.parse(fs.readFileSync('site/qr/destinations.json','utf8'));if(qr.length!==12)fail('Expected 12 QR destinations');
for(const d of qr)for(const kind of ['png','svg'])if(!fs.existsSync('site/qr/'+d[kind]))fail('Missing QR artwork');
const app=fs.readFileSync('site/assets/content.js','utf8');const expected='window.BOOK = '+JSON.stringify(book,null,2)+';\n';if(app!==expected)fail('Rebuild content.js from source/content.json');
console.log(`PASS: 10 chapters, ${examples} examples, ${practice} practice questions, ${quiz} quiz questions, 25 mapped practicals, 12 QR destinations, ${links} static links checked.`);
