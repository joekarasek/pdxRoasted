import { Component } from 'angular2/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello, Angular2!</h1>
  `,
  providers: [FirebaseService]
})
export class AppComponent {
  response: string;

  constructor(private _firebaseService: FirebaseService) {}

   displayRoasts() {
      this._firebaseService.getRoasts()
        .subscribe(
          roast => this.response = JSON.stringify(roast),
          error => console.log(error)
        );
   }

}
