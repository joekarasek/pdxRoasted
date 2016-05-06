import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';
import { PaletteService } from './palette.service';

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

  constructor(private _roastService: RoastService, private _paletteService: PaletteService) {
      this.flavors = [];
      this.palette = [];
      this.roasts = [];
      this.flavor = "";
    }

  ngOnInit() {
    this.getFlavors();
    if(!this._paletteService.isPaletteEmpty()) {
      this.palette = this._paletteService.getPalette();
    }
  }

  ngOnDestroy() {
    this._paletteService.updatePalette(this.palette);
  }

  getFlavors() {
    var that = this;
    that._roastService.getFlavors().then(function(data){
      that.flavors = Object.keys(data).map(key => {return data[key]});
    });
  }

  getRoasts() {
    if(this.palette.length === 0) {
      this.roasts = [];
      return;
    }
    var that = this;
      this._roastService.getRoasts(this.palette).then(function(data) {
        that.roasts = data;
    });
  }

  removeFromPalette(flavToRemove) {
    var i = this.palette.indexOf(flavToRemove);
    this.palette.splice(i, 1);
    this.getRoasts();
  }

  addToPalette() {
    var flavor = this.flavor.toLowerCase();
    this.palette.push(flavor);
  }

}
