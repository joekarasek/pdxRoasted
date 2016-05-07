import { Injectable } from 'angular2/core';


@Injectable()
export class FlavorService  {
  public ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');

  flavors: any[];

  construtor() {
    this.flavors = [];
  }

  getFlavors() {
    return this.ref.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

}
