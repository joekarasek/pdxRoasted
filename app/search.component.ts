import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';

import { Roast } from './roast.model';
import { Flavor } from './flavor.model';

import { SearchResultListComponent } from './search-result-list.component';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html',

})
export class SearchComponent implements OnInit {
  flavors: any[];
  palette: string[];

  constructor(private _roastService: RoastService) {
      this.flavors = [];
      this.palette = [];
    }

  ngOnInit() {
    this.getFlavors();
    this._roastService.getRoasts(["honey", "cinnamon", "tangerine"]);
  }

  getFlavors() {
    var that = this;
    that._roastService.getFlavors().then(function(data){
      that.flavors = Object.keys(data).map(key => {return data[key]});
    });
  }

}
