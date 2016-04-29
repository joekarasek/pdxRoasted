import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/Observable';
import { Roast } from './roast.model';
import { SearchResultListComponent } from './search-result-list.component';

@Component({
  selector: 'search',
  inputs: ['roast'],
  template: `
    <label>Search</label>
    <input type="text" name="keyword">
  `
})

export class SearchComponent {
  public roast: Roast;
}
