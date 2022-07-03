const fs = require('fs').promises;
const path = require('path');


async function readdir(rootDir) {
   rootDir = rootDir || path.resolve(__dirname);
   const files = await fs.readdir(rootDir);

   walk(files, rootDir);
}

async function walk(files, rootDir) {
   for (let file of files) {

      console.log(fileFullPath);
   }
}

readdir('D:\\Documentos\\#Curso-de-JavaScript-e-TypeScript\\projeos\\');