import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/Observable';

import { SearchComponent } from './search.component';

@Component({
  selector: 'home',
  templateUrl: 'app/home.component.html',
  directives: [SearchComponent]
})
export class HomeComponent {

}
