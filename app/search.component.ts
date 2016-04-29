import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html'
})
export class SearchComponent implements OnInit {
  roasts: string;

  constructor(private _roastService: RoastService) {}

  ngOnInit() {
    this.getRoasts();
    console.log(this.roasts);
  }

   getRoasts() {
      this._roastService.getRoasts()
          .subscribe(
            roasts => this.roasts = JSON.stringify(roasts),
            error => console.log(error));
          }

}
