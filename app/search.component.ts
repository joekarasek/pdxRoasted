import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html'
})
export class SearchComponent implements OnInit {
  roasts: string;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
    this.getRoasts();
    console.log(this.roasts);
  }

   getRoasts() {
      this._firebaseService.getRoasts()
          .subscribe(
            roasts => this.roasts = JSON.stringify(roasts),
            error => console.log(error));
          }

}
