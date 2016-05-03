import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RoastService } from './roast.service';
import { Observable } from 'rxjs/Observable';

import { Roast } from './roast.model';
import { Flavor } from './flavor.model';

@Component({
  selector: 'search',
  templateUrl: 'app/search.component.html'
})
export class SearchComponent implements OnInit {
  roasts: Roast[];
  flavors: string[] = ["hello", "world"];

  constructor(private _roastService: RoastService) {}

  ngOnInit() {
    this.getFlavors();
  }

    getFlavors() {
      var that = this;

      that._roastService.getFlavors().then(function(data){
        data.forEach(function (element, index) {
          that.flavors.push(element.name);
        })
      });
      
    }


  // getRoasts() {
  //   this._roastService.getRoasts()
  //                     .subscribe(
  //                     roasts => this.roasts = roasts,
  //                     error => console.log(error));
  // }
  //
  // getFlavors() {
  //   this._roastService.getAllFlavors()
  //                     .subscribe(
  //                       flavors => this.flavors = flavors,
  //                       error => console.log(error));
  //
  // }


}
