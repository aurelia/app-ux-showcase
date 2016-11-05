import * as fs from 'fs';
import * as path from 'path';

function mkdir(dir) {
  // making directory without exception if exists
  try {
    fs.mkdirSync(dir);
  } catch(e) {
    if(e.code != "EEXIST") {
      throw e;
    }
  }
};

function copyDir(src, dest) {
  try{
    mkdir(dest);
    let files = fs.readdirSync(src);
    for(let i = 0; i < files.length; i++) {
      let current = fs.lstatSync(path.join(src, files[i]));
      if(current.isDirectory()) {
        copyDir(path.join(src, files[i]), path.join(dest, files[i]));
      } else if(current.isSymbolicLink()) {
        let symlink = fs.readlinkSync(path.join(src, files[i]));
        fs.symlinkSync(symlink, path.join(dest, files[i]));
      } else {
        copy(path.join(src, files[i]), path.join(dest, files[i]));
      }
    }
  } catch(error){
    console.log(error);
  }
};

function copy(src, dest) {
  var oldFile = fs.createReadStream(src);
  var newFile = fs.createWriteStream(dest);
  console.log(`Copying from ${src} to ${dest}.`);
  oldFile.pipe(newFile);
};

export default function updateUX() {
  copyDir('../ux/dist/amd', './node_modules/aurelia-ux/dist/amd/')
}
