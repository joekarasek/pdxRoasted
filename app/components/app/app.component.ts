import { Component, EventEmitter } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { Roast } from './../../models/Roast.model.ts';


@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
      <h1>Hello pdxRoast!</h1>
      <button (click)="addMeal(newName, newCalories, newNotes)" class="btn-success btn-lg add-button">Debugger (open console to play with firebase, yay)</button>
  `
})
@RouteConfig([

])

export class AppComponent {
  roasts: Observable<Roast[]>;
  constructor(af: AngularFire) {

  }
}
