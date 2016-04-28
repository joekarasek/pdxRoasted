import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FirebaseService {

  constructor(private _http: Http) {}

  private _url = 'https://pdxroasted.firebaseio.com/roasts';

  getRoasts() {
    return this._http.get('https://pdxroasted.firebaseio.com/Roasts.json')
               .map(response => response.json())
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
