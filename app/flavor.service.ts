import { Injectable, OnInit } from 'angular2/core';


@Injectable()
export class RoastService implements OnInit {
  public ref = new Firebase('https://pdxroasted.firebaseio.com/flavors');

  flavors: any[];

  construtor() {
    this.flavors = [];
  }

  ngOnInit() {
    // if(this.flavors.length === 0) {
    //   this.flavors = this.getFlavors();
    // }
  }

  getFlavors() {
    return this.ref.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

  getAllFlavors() {
    console.log("getAllFlavors on Search Component called!");
    let that = this;
    this.getFlavors().then(function(data){
      that.flavors = Object.keys(data).map(key => {return data[key].name});
    });
  }


}
