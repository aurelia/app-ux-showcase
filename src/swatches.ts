import {swatches} from 'aurelia-ux';

export class Swatches {
  swatches = makeSwatches();
}

function makeSwatches() {
  return Object.keys(swatches).map(key => {
    let value = swatches[key];

    if (typeof value === 'string') {
      return {
        name: key,
        color: value
      };
    } else {
      return {
        name: key,
        colors: makeSwatch(value)
      };
    }
  });
}

function makeSwatch(swatch): string | any[] {
  return Object.keys(swatch).map(key => {
    return {
      name: key,
      hex: swatch[key]
    };
  }).sort(sortColors);
}

function sortColors(a, b) {
  if (a.name.startsWith('p')) {
    if (b.name.startsWith('p')) {
      let aNum = parseInt(a.name.substring(1));
      let bNum = parseInt(b.name.substring(1));

      return aNum > bNum ? 1 : -1;
    } else {
      return -1;
    }
  } else {
    if (b.name.startsWith('p')) {
      return 1;
    } else {
      let aNum = parseInt(a.name.substring(1));
      let bNum = parseInt(b.name.substring(1));

      return aNum > bNum ? 1 : -1;
    }
  }
}
