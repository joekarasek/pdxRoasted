import { Component, OnInit } from 'angular2/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search-result-item',
  templateUrl: 'app/search-result-item.component.html'
})

export class SearchResultItemComponent implements OnInit{
  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
    
  }

}
