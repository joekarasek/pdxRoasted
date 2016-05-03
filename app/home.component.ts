import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';

//        (>'-')>  Components  <('-'<)
import { SearchComponent } from './search.component';
import { SearchResultListComponent } from './search-result-list.component';

@Component({
  selector: 'home',
  templateUrl: 'app/home.component.html',
  directives: [SearchComponent, SearchResultListComponent]
})
export class HomeComponent {
  constructor(private _roastService: RoastService) {}

}
