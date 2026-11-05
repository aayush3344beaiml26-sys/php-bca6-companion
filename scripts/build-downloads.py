from pathlib import Path
import json, zipfile, html, shutil
root=Path(__file__).resolve().parents[1]
site=root/'site'; dest=site/'downloads'; dest.mkdir(exist_ok=True)
b=json.loads((root/'source/content.json').read_text())
source=root/'source'/'examples'
if source.exists(): shutil.rmtree(source)
source.mkdir()
escape=html.escape
blocks=['# PHP Companion — practice and quiz bank\n\nBCA Semester VI · Website Development Using PHP\n\nNew companion exercises aligned to the supplied ten-chapter edition.\n']
printable=['<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PHP Companion Practice Bank</title><style>body{max-width:900px;margin:40px auto;padding:0 24px;font:15px/1.8 system-ui;color:#1d3039;background:#f6f4ef}h1,h2{font-family:Georgia,serif;font-weight:400}h1{font-size:38px}h2{font-size:29px;border-top:1px solid #ccd3c5;padding-top:25px;margin-top:40px}h3{font-size:18px}article{border-bottom:1px solid #d9dfd2;padding:14px 0}summary{cursor:pointer;font-size:13px}details{margin:10px 0;background:#eaece2;padding:13px}button{padding:10px 16px;background:#1d3039;color:white;border:0;cursor:pointer}li{margin:5px 0}@media print{body{background:white;font-size:11pt;margin:0}button,.print-note{display:none}article{break-inside:avoid}h2{break-before:page}details>*{display:block!important}summary{font-weight:bold}}</style><h1>PHP Companion Practice Bank</h1><p>BCA Semester VI · Website Development Using PHP</p><p class="print-note">60 practice questions and 50 quiz questions. Expand an answer to check it. Printed pages include the answer text. Use your browser’s Print command to print or save a PDF.</p>']
for c in b['chapters']:
    chsource=source/('chapter-'+str(c['n'])); chsource.mkdir()
    chapter_readme=f"# Chapter {c['n']} — {c['title']}\n\n"+c['description']+'\n\nEach example is in its own folder. Read its README before running.\n'
    (chsource/'README.md').write_text(chapter_readme)
    schema=next(e['code'] for ch in b['chapters'] for e in ch['examples'] if e['id']=='8-2')
    if c['n'] in (8,10): (chsource/'schema.sql').write_text(schema+'\n')
    for e in c['examples']:
        folder=chsource/('example-'+e['id']); folder.mkdir()
        filename={'php':'main.php','html':'form.html','sql':'schema.sql'}[e['language']]
        (folder/filename).write_text(e['code']+'\n')
        for name,contents in e.get('files',{}).items(): (folder/name).write_text(contents+'\n')
        if e['mode']=='local' and (c['n']==8 or e['id']=='10-4') and e['language']!='sql':(folder/'schema.sql').write_text(schema+'\n')
        setup='For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/'+('form.html' if 'form.html' in e.get('files',{}) or e['language']=='html' else 'main.php')+'.\n'
        if e['language']=='sql': setup='Import schema.sql in phpMyAdmin or a MySQL client with permission to create the practice database.\n'
        if e['mode']=='local' and (c['n']==8 or e['id']=='10-4'):setup+='Start MySQL/MariaDB and import schema.sql first. Configure the host/user/password for your installation. Default credentials are for a private local teaching setup.\n'
        if e.get('input'):setup+='\nThe online lab uses these request test values. For a local GET request, append a query string; for POST, use the supplied form or submit the fields with an HTTP client.\n\n```json\n'+json.dumps(e['input'],indent=2)+'\n```\n'
        text=f"# Example {e['id'].replace('-','.')} — {e['title']}\n\n"+setup+'\n## Explanation\n\n'+e['why']+'\n\n## Reference result\n\n```text\n'+e['output']+'\n```\n\n## Try this\n\n'+e['change']+'\n'
        (folder/'README.md').write_text(text)
        with zipfile.ZipFile(dest/('example-'+e['id']+'.zip'),'w',zipfile.ZIP_DEFLATED) as z:
            for f in folder.iterdir():z.write(f,folder.name+'/'+f.name)
    with zipfile.ZipFile(dest/('chapter-'+str(c['n'])+'.zip'),'w',zipfile.ZIP_DEFLATED) as z:
        for f in chsource.rglob('*'):
            if f.is_file():z.write(f,f.relative_to(source))
    blocks.append(f"\n## Chapter {c['n']} — {c['title']}\n\n### Practice questions\n")
    printable.append(f"<section><h2>Chapter {c['n']} · {escape(c['title'])}</h2><h3>Practice questions</h3>")
    for i,p in enumerate(c['practice'],1):
        blocks.append(f"\n{i}. [{p['type']}] {p['prompt']}\n\n   Hint: {p['hint']}\n\n   Suggested answer: {p['answer']}\n")
        printable.append(f"<article><strong>{i}. [{escape(p['type'])}] {escape(p['prompt'])}</strong><details><summary>Hint and suggested answer</summary><p><b>Hint:</b> {escape(p['hint'])}</p><p>{escape(p['answer'])}</p></details></article>")
    blocks.append('\n### Quick quiz\n')
    printable.append('<h3>Quick quiz</h3>')
    for i,q in enumerate(c['quiz'],1):
        blocks.append(f"\n{i}. {q['question']}\n"+'\n'.join('   '+chr(65+j)+'. '+o for j,o in enumerate(q['options']))+f"\n\n   Answer: {chr(65+q['answer'])}. {q['explanation']}\n")
        printable.append(f"<article><strong>{i}. {escape(q['question'])}</strong><ol type=\"A\">"+''.join('<li>'+escape(o)+'</li>' for o in q['options'])+f"</ol><details><summary>Answer and explanation</summary><p><b>{chr(65+q['answer'])}.</b> {escape(q['explanation'])}</p></details></article>")
    printable.append('</section>')
(dest/'practice-bank.md').write_text('\n'.join(blocks))
(dest/'practice-bank.html').write_text('\n'.join(printable)+'</html>')
with zipfile.ZipFile(dest/'all-examples.zip','w',zipfile.ZIP_DEFLATED) as z:
    for f in source.rglob('*'):
        if f.is_file():z.write(f,f.relative_to(source))
with zipfile.ZipFile(dest/'student-register.zip','w',zipfile.ZIP_DEFLATED) as z:
    for f in (root/'source/student-register').rglob('*'):
        if f.is_file():z.write(f,'student-register/'+str(f.relative_to(root/'source/student-register')))
print('Built 40 example downloads, 10 chapter archives, the source collection, project and practice bank.')
