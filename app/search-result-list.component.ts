import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';

import { Roast } from './roast.model';

@Component({
  selector: 'search-result-list',
  templateUrl: 'app/search-result-list.component.html'
})

export class SearchResultListComponent implements OnInit {
  roasts: any[];
  flavors: string[];

  constructor(
    private _roastService: RoastService)
    {
      this.roasts = [];
      this.flavors = ["honey"];
    }

  ngOnInit() {
    this.getRoasts();
  }

  getRoasts() {
    var that = this;
      this._roastService.getRoasts(this.flavors).then(function(data) {
        that.roasts = data;
        console.log(that.roasts);
    });
  }

}
