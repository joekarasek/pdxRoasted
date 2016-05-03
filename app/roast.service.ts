import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import { Flavor } from './flavor.model';


@Injectable()
export class RoastService {
  public flavors: Flavor[];
  public ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');

  getFlavors() {
    return this.ref.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

  // constructor(private _http: Http) {}
  //
  // private _url = 'https://pdxroasted.firebaseio.com/roasts';
  //
  // getRoasts() {
  //   return this._http.get('https://pdxroasted.firebaseio.com/roasts.json')
  //              .map(response => response.json())
  //              .catch(this.handleError);
  // }
  //
  // getAllFlavors() {
  //   return this._http.get('https://pdxroasted.firebaseio.com/flavors.json')
  //              .map(response => response.json())
  //              .catch(this.handleError);
  // }
  //
  // private handleError (error: any) {
  //   let errMsg = error.message || 'Server error';
  //   console.log(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
