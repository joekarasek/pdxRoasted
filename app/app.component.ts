import { Component, OnInit } from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';

import { FirebaseService } from './firebase.service';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello, Angular2!</h1>
      <p>{{response}}<p>
  `,
  providers: [
    HTTP_PROVIDERS,
    FirebaseService
  ]
})
export class AppComponent implements OnInit {
  response: string;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
      this.getRoasts();
      console.log(this.response);
  }

   getRoasts() {
      this._firebaseService.getRoasts()
          .subscribe(
            roasts => this.response = JSON.stringify(roasts),
            error => console.log(error));
   }


}
