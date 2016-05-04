import { Injectable } from 'angular2/core';

@Injectable()
export class RoastService {
  public flavors = new Firebase('https://pdxroasted.firebaseio.com/flavors');
  public roasts = new Firebase('https://pdxroasted.firebaseio.com/roasts');


  getFlavors() {
    return this.flavors.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

  getRoasts() {
    return this.roasts.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }
}
