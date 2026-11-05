import { PHP } from '@php-wasm/universal';
import { loadWebRuntime } from '@php-wasm/web';
let php;
try {
 php = new PHP(await loadWebRuntime('8.3'));
 php.mkdir('/www');
 postMessage({type:'ready'});
} catch (error) {postMessage({type:'error',message:String(error)});}
self.onmessage = async ({data}) => {
 try {
  const files=data.files||{};
  for(const [name,content] of Object.entries(files)) {
   if(!/^[\w.-]+$/.test(name))throw Error('Invalid supporting filename');
   php.writeFile('/www/'+name,content);
  }
  php.writeFile('/www/main.php',data.code);
  const values=JSON.stringify(data.input||{get:{},post:{}});
  const encoded=btoa(String.fromCharCode(...new TextEncoder().encode(values)));
  const boot=`<?php\nini_set('display_errors','1');\nini_set('memory_limit','64M');\nerror_reporting(E_ALL);\n$__input=json_decode(base64_decode('${encoded}'),true);\n$_GET=$__input['get'];\n$_POST=$__input['post'];\n$_REQUEST=array_merge($_GET,$_POST);\n$_SERVER['REQUEST_METHOD']=count($_POST)?'POST':'GET';\nunset($__input);\nrequire '/www/main.php';`;
  php.writeFile('/www/boot.php',boot);
  const response=await php.run({scriptPath:'/www/boot.php'});
  postMessage({type:'result',text:response.text,errors:response.errors,exitCode:response.exitCode});
 }catch(error){postMessage({type:'error',message:String(error)});}
};
