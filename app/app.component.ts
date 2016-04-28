import { Component, OnInit } from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';

import { FirebaseService } from './firebase.service';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello, pdxRoasted!</h1>
      <p>{{roasts}}<p>
  `,
  providers: [
    HTTP_PROVIDERS,
    FirebaseService
  ]
})
export class AppComponent implements OnInit {
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
