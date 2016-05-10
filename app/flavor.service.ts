import { Injectable } from 'angular2/core';

@Injectable()
export class FlavorService  {
  public ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');
  flavors: any[];

  constructor() {
    this.flavors = [];
  }

  isFlavorsEmpty() {
    console.log("isFlavorsEmpty called on Flavor Service!");
    var answer;
    this.flavors.length === 0 ? answer = true : answer = false;
    console.log("The answer is: "+answer);
    return answer;
  }

  updateFlavors(flavors) {
    console.log("updateFlavors on Flavor Service called!");
    this.flavors = flavors;
    console.log(this.flavors);
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
