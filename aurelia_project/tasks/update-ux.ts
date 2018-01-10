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
  copyDir('../ux/packages/button/dist/native-modules', './node_modules/@aurelia-ux/button/dist/native-modules/');
  copyDir('../ux/packages/checkbox/dist/native-modules', './node_modules/@aurelia-ux/checkbox/dist/native-modules/');
  copyDir('../ux/packages/chip-input/dist/native-modules', './node_modules/@aurelia-ux/chip-input/dist/native-modules/');
  copyDir('../ux/packages/components/dist/native-modules', './node_modules/@aurelia-ux/components/dist/native-modules/');
  copyDir('../ux/packages/core/dist/native-modules', './node_modules/@aurelia-ux/core/dist/native-modules/');
  copyDir('../ux/packages/datepicker/dist/native-modules', './node_modules/@aurelia-ux/datepicker/dist/native-modules/');
  copyDir('../ux/packages/form/dist/native-modules', './node_modules/@aurelia-ux/form/dist/native-modules/');
  copyDir('../ux/packages/grid/dist/native-modules', './node_modules/@aurelia-ux/grid/dist/native-modules/');
  copyDir('../ux/packages/icons/dist/native-modules', './node_modules/@aurelia-ux/icons/dist/native-modules/');
  copyDir('../ux/packages/input/dist/native-modules', './node_modules/@aurelia-ux/input/dist/native-modules/');
  copyDir('../ux/packages/input-info/dist/native-modules', './node_modules/@aurelia-ux/input-info/dist/native-modules/');
  copyDir('../ux/packages/list/dist/native-modules', './node_modules/@aurelia-ux/list/dist/native-modules/');
  copyDir('../ux/packages/radio/dist/native-modules', './node_modules/@aurelia-ux/radio/dist/native-modules/');
  copyDir('../ux/packages/switch/dist/native-modules', './node_modules/@aurelia-ux/switch/dist/native-modules/');
  copyDir('../ux/packages/textarea/dist/native-modules', './node_modules/@aurelia-ux/textarea/dist/native-modules/');
}