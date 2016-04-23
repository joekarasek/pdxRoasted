import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {

  constructor(private _http: Http) {}

  getRoats() {
    return this._http.get('https://pdxroasted.firebaseio.com/roasts')
      .map(response => response.json());
  }

}
