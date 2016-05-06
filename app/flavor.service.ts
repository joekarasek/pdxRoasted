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


}
