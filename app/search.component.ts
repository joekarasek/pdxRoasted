import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';
import { PaletteService } from './palette.service';
import { FlavorService } from './flavor.service';

import { Roast } from './roast.model';
import { Flavor } from './flavor.model';

import { SearchResultListComponent } from './search-result-list.component';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html',
  directives: [SearchResultListComponent]
})
export class SearchComponent implements OnInit, OnDestroy {
  flavors: string[];
  flavor: string;
  roasts: any[];
  palette: string[];
  flavor_list: any[];

  constructor(
    private _roastService: RoastService,
    private _paletteService: PaletteService,
    private _flavorService: FlavorService) {
      this.flavors = [];
      this.palette = [];
      this.roasts = [];
      this.flavor = "Choose a flavor!";
    }

  ngOnInit() {
    // this.getAllFlavors();
    this.injectFlavors();
    if(!this._paletteService.isPaletteEmpty()) {
      this.palette = this._paletteService.getPalette();
    }
  }

  ngOnDestroy() {
    this._paletteService.updatePalette(this.palette);
  }

  injectFlavors() {
    this.flavors = this._flavorService.injectFlavors();
  }

  getAllFlavors() {
    console.log("getAllFlavors on Search Component called!");
    let that = this;
    that._roastService.getFlavors().then(function(data){
      that.flavors = Object.keys(data).map(key => {return data[key].name});
    });
  }

  getRoasts() {
    console.log("getRoasts on Search Component called!");
    if(this.palette.length === 0) {
      this.roasts = [];
      this.getAllFlavors();
      return;
    }
    let that = this;
      this._roastService.getRoasts(this.palette).then(function(data) {
        that.roasts = data;
        that.updateFlavorList();
    });
  }

  updateFlavorList() {
    console.log("updateFlavorList on Search Component called!");
    let that = this;
    let roast_flavors = [];
    let flavor_list = [];
    if(this.roasts.length === 0) {
      this.getAllFlavors();
      return;
    }
    for (let roast of this.roasts) {
      for (let flavor in roast.flavors) {
          roast_flavors.push(flavor);
      }
    }
    this._roastService.getFlavors().then(function(flavor_data){
      roast_flavors.forEach(function(flavor) {
        if(flavor_list.indexOf(flavor_data[flavor]) === -1) {
          flavor_list.push(flavor_data[flavor].name);
        }
      })
      return flavor_list;
    }).then(function(flavor_list) {
      let unique = that.filterUnique(flavor_list);
      let no_pal = that.stripPaletteFlavors(unique);
      that.flavors = no_pal;
      that.flavor = "";
    });
  }

  filterUnique(a) {
    console.log("filterUnique on Search Component called!");
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

  stripPaletteFlavors(a) {
    console.log("stripPaletteFlavors on Search Component called!");
    let that = this;
    let stripped = [];
    a.forEach(function(flavor) {
      if(that.palette.indexOf(flavor.toLowerCase()) === -1 ) {
        stripped.push(flavor)
      }
    });
    return stripped;
  }

  removeFromPalette(flavToRemove) {
    console.log("removeFromPalette on Search Component called!");
    let i = this.palette.indexOf(flavToRemove);
    this.palette.splice(i, 1);
    this.getRoasts();
  }

  addToPalette() {
    console.log("addToPalette on Search Component called!");
    let flavor = this.flavor.toLowerCase();
    console.log(flavor);
    this.palette.push(flavor);
    this.getRoasts();
  }

}
