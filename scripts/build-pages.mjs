import fs from 'node:fs';
import vm from 'node:vm';
const root='site';const ctx={window:{}};vm.runInNewContext(fs.readFileSync(root+'/assets/content.js','utf8'),ctx);const {chapters}=ctx.window.BOOK;
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
function shell(page,title,base='.',chapter=''){
const href=p=>base+'/'+p;
return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f6f4ef"><meta name="description" content="Chapter-wise practice, worked examples and a PHP code lab for Website Development Using PHP, BCA Semester VI, Panjab University."><title>${esc(title)} · PHP Companion</title><link rel="icon" href="${href('assets/favicon.svg')}" type="image/svg+xml"><link rel="stylesheet" href="${href('assets/style.css')}"></head>
<body data-page="${page}" data-base="${base}" data-chapter="${chapter}"><a href="#main" class="skip">Skip to content</a>
<header class="topbar"><a class="brand" href="${href('index.html')}" aria-label="PHP Companion home"><span class="brand-symbol">&lt;?&gt;</span><span>PHP <strong>Companion</strong><small>WEBSITE DEVELOPMENT USING PHP</small></span></a><div class="top-actions"><span class="edition">BCA / SEMESTER VI</span><a href="${href('index.html#chapter-search')}" class="search-link">Search material <span aria-hidden="true">↗</span></a><button class="menu-button" aria-label="Open navigation" aria-expanded="false" aria-controls="sidebar">Menu</button></div></header>
<div class="layout"><aside class="sidebar" id="sidebar"><nav aria-label="Main navigation"><a class="nav-home ${page==='home'?'active':''}" href="${href('index.html')}">Overview <span>⌂</span></a><p class="nav-label">THE CHAPTERS <span>01—10</span></p>${chapters.map(c=>`<a class="chapter-nav ${chapter==c.n?'active':''}" href="${href('chapters/chapter-'+c.n+'.html')}"><span class="nav-num">${String(c.n).padStart(2,'0')}</span><span>${c.short}</span><i class="chapter-dot" data-progress="${c.n}"></i></a>`).join('')}<p class="nav-label desk">PRACTICE DESK</p><a class="desk-link ${page==='practicals'?'active':''}" href="${href('practicals.html')}">Practical checklist <span>25</span></a><a class="desk-link ${page==='saved'?'active':''}" href="${href('saved.html')}">Saved material <span id="saved-count">0</span></a><a class="desk-link ${page==='resources'?'active':''}" href="${href('resources.html')}">Downloads & QR codes <span>↗</span></a><div class="sidebar-note"><span class="tiny-label">YOUR STUDY RECORD</span><div class="progress-track"><span id="overall-bar"></span></div><p id="overall-label">0 of 10 chapter quizzes passed</p><small>Saved in this browser. No account needed.</small></div></nav></aside>
<main id="main" tabindex="-1"><div id="page-content"></div><footer><span>Website Development Using PHP <span class="footer-dot">/</span> BCA Semester VI</span><a href="${href('resources.html#about')}">About this companion</a><span>Practice. Test. Revisit.</span></footer></main></div><div class="toast" role="status" aria-live="polite"></div><script src="${href('assets/content.js')}"></script><script src="${href('assets/vendor/qrcode.js')}" defer></script><script src="${href('assets/app.js')}" defer></script></body></html>`;
}
fs.mkdirSync(root+'/chapters',{recursive:true});
fs.writeFileSync(root+'/index.html',shell('home','Chapter-wise practice'));
for(const c of chapters)fs.writeFileSync(root+'/chapters/chapter-'+c.n+'.html',shell('chapter',c.title,'..',c.n));
for(const [p,t] of [['practicals','Practical checklist'],['saved','Saved material'],['resources','Downloads and QR codes']])fs.writeFileSync(root+'/'+p+'.html',shell(p,t));
fs.writeFileSync(root+'/lab.html',shell('lab','PHP code lab'));
fs.writeFileSync(root+'/404.html',shell('404','Page not found'));
fs.writeFileSync(root+'/.nojekyll','');
fs.writeFileSync(root+'/assets/favicon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="13" fill="#172c36"/><text x="32" y="43" text-anchor="middle" font-family="monospace" font-size="34" fill="#f6f4ef">?</text></svg>');
