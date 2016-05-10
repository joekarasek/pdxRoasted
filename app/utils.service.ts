import { Injectable } from 'angular2/core';

@Injectable()
export class UtilsService  {

  filterUnique(a) {
    let seen = {};
    let out = [];
    let len = a.length;
    let j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
  }

  formatFlavor(flavor) {
    var flav_no_space = flavor.replace(/\s+/g, ''); // remove all whitespace
    var flav_lwr = flav_no_space.toLowerCase();
    return flav_lwr;
  }

}
