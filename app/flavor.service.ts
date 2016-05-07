import { Injectable } from 'angular2/core';

@Injectable()
export class FlavorService  {
  public ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');
  flavors: any[];

  constructor() {
    this.flavors = [];
  }

  isFlavorsEmpty() {
    this.flavors.length === 0 ? true : false;
  }

  updateFlavors(flavors) {
    this.flavors = flavors;
  }

  getFlavors() {
    return this.flavors;
  }

  getAllFlavors() {
    return this.ref.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

}
