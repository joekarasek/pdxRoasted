import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search',
  template: `
    <label>Search</label>
    <input type="text" name="keyword">
  `
})

export class SearchComponent {

}
