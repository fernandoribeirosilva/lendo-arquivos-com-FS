const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
   rootDir = rootDir || path.resolve(__dirname);
   const files = await fs.readdir(rootDir);

   walk(files, rootDir);
}

async function walk(files, rootDir) {
   for (let file of files) {
      const fileFullPath = path.resolve(rootDir, file);
      const stats = await fs.stat(fileFullPath);

      // não vai pegar os arquivos .git e a pasta node_modules
      if (/\.git/g.test(fileFullPath)) continue;
      if (/node_modules/g.test(fileFullPath)) continue;

      if (stats.isDirectory()) {
         readdir(fileFullPath);
         continue;
      }

      // vai pegar apenas os arquivos .html
      if (!/\.html$/g.test(fileFullPath)) continue;
      console.log(fileFullPath);
   }
}
readdir('D:\\Documentos\\#Curso-de-JavaScript-e-TypeScript\\projeos');
