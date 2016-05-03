import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RoastService {

  constructor(private _http: Http) {}

  private _url = 'https://pdxroasted.firebaseio.com/roasts';

  getRoasts() {
    return this._http.get('https://pdxroasted.firebaseio.com/roasts.json')
               .map(response => response.json())
               .catch(this.handleError);
  }

  getAllFlavors() {
    return this._http.get('https://pdxroasted.firebaseio.com/flavors.json')
               .map(response => response.json())
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
