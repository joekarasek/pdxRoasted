import { Injectable } from 'angular2/core';

@Injectable()
export class UtilsService  {
  see_all: boolean;
  filter_by: boolean;

  setSeeAll(val) {
    this.see_all = val;
  }

  getSeeAll() {
    return this.see_all;
  }

  setFilterBy(val) {
    this.filter_by = val;
  }

  getFilterBy() {
    return this.filter_by;
  }

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
