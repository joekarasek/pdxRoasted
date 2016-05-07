import { Injectable, OnInit } from 'angular2/core';


@Injectable()
export class FlavorService implements OnInit {
  public ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');

  flavors: any[];

  construtor() {
    this.flavors = [];
  }

  ngOnInit() {
    this.getAllFlavors();
  }

  getFlavors() {
    return this.ref.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

  getAllFlavors() {
    console.log("getAllFlavors on Flavor Service called!");
    let that = this;
    this.getFlavors().then(function(data){
      that.flavors = Object.keys(data).map(key => {return data[key].name});
    });
  }

  injectFlavors() {
    return this.flavors;
  }


}
