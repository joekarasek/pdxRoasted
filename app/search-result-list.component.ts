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

  constructor(
    private _roastService: RoastService)
    {
      this.roasts = [];
    }

  ngOnInit() {

  }


}
