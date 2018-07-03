import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';

function mkdir(dir) {
  // making directory without exception if exists
  try {
    fs.mkdirSync(dir);
  } catch (e) {
    if (e.code != "EEXIST") {
      throw e;
    }
  }
};

function copyDir(src, dest) {
  try {
    mkdir(dest);
    let files = fs.readdirSync(src);
    for (let i = 0; i < files.length; i++) {
      let current = fs.lstatSync(path.join(src, files[i]));
      if (current.isDirectory()) {
        copyDir(path.join(src, files[i]), path.join(dest, files[i]));
      } else if (current.isSymbolicLink()) {
        let symlink = fs.readlinkSync(path.join(src, files[i]));
        fs.symlinkSync(symlink, path.join(dest, files[i]));
      } else {
        copy(path.join(src, files[i]), path.join(dest, files[i]));
      }
    }
  } catch (error) {
    console.log(error);
  }
};

function copy(src, dest) {
  var oldFile = fs.createReadStream(src);
  var newFile = fs.createWriteStream(dest);
  console.log(`Copying from ${src} to ${dest}.`);
  oldFile.pipe(newFile);
};

async function cleanDirectory(path: string) {
  return new Promise((resolve, reject) => {

    rimraf(path, () => {
      resolve();
    });
  });
}

async function cleanDirectories(paths: string[]) {
  const promises: any[] = [];

  for (const path of paths) {
    promises.push(cleanDirectory(`${path}/amd`));
    promises.push(cleanDirectory(`${path}/commonjs`));
    promises.push(cleanDirectory(`${path}/es2015`));
    promises.push(cleanDirectory(`${path}/native-modules`));
    promises.push(cleanDirectory(`${path}/system`));
  }

  return Promise.all(promises);
}

export default async function updateUX() {
  await cleanDirectories([
    './node_modules/@aurelia-ux/button/dist/',
    './node_modules/@aurelia-ux/card/dist/',
    './node_modules/@aurelia-ux/checkbox/dist/',
    './node_modules/@aurelia-ux/chip-input/dist/',
    './node_modules/@aurelia-ux/components/dist/',
    './node_modules/@aurelia-ux/dist/dist/',
    './node_modules/@aurelia-ux/core/dist/',
    './node_modules/@aurelia-ux/datepicker/dist/',
    './node_modules/@aurelia-ux/form/dist/',
    './node_modules/@aurelia-ux/grid/dist/',
    './node_modules/@aurelia-ux/icons/dist/',
    './node_modules/@aurelia-ux/input/dist/',
    './node_modules/@aurelia-ux/input-info/dist/',
    './node_modules/@aurelia-ux/list/dist/',
    './node_modules/@aurelia-ux/radio/dist/',
    './node_modules/@aurelia-ux/select/dist/',
    './node_modules/@aurelia-ux/switch/dist/',
    './node_modules/@aurelia-ux/textarea/dist/'
  ]);

  copyDir('../ux/packages/button/dist', './node_modules/@aurelia-ux/button/dist/');
  copyDir('../ux/packages/card/dist', './node_modules/@aurelia-ux/card/dist/');
  copyDir('../ux/packages/checkbox/dist', './node_modules/@aurelia-ux/checkbox/dist/');
  copyDir('../ux/packages/chip-input/dist', './node_modules/@aurelia-ux/chip-input/dist/');
  copyDir('../ux/packages/components/dist', './node_modules/@aurelia-ux/components/dist/');
  copyDir('../ux/packages/core/dist', './node_modules/@aurelia-ux/core/dist/');
  copyDir('../ux/packages/datepicker/dist', './node_modules/@aurelia-ux/datepicker/dist/');
  copyDir('../ux/packages/form/dist', './node_modules/@aurelia-ux/form/dist/');
  copyDir('../ux/packages/grid/dist', './node_modules/@aurelia-ux/grid/dist/');
  copyDir('../ux/packages/icons/dist', './node_modules/@aurelia-ux/icons/dist/');
  copyDir('../ux/packages/input/dist', './node_modules/@aurelia-ux/input/dist/');
  copyDir('../ux/packages/input-info/dist', './node_modules/@aurelia-ux/input-info/dist/');
  copyDir('../ux/packages/list/dist', './node_modules/@aurelia-ux/list/dist/');
  copyDir('../ux/packages/radio/dist', './node_modules/@aurelia-ux/radio/dist/');
  copyDir('../ux/packages/select/dist', './node_modules/@aurelia-ux/select/dist/');
  copyDir('../ux/packages/switch/dist', './node_modules/@aurelia-ux/switch/dist/');
  copyDir('../ux/packages/textarea/dist', './node_modules/@aurelia-ux/textarea/dist/');
}
