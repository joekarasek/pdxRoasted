import { Injectable } from 'angular2/core';


@Injectable()
export class RoastService {
  public ref = new Firebase('https://pdxroasted.firebaseio.com/roasts');
  roasts: any[];

  constructor() {
    this.roasts = [];
  }

  getAllRoasts() {
    return this.ref.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

  isRoastsEmpty() {
    console.log("isRoastsEmpty called on Roast Service!");
    var answer;
    this.roasts.length === 0 ? answer =  true : answer =  false;
    console.log("The answer is: " + answer);
    return answer;
  }

  updateRoasts(roasts) {
    console.log("updateRoasts on Roast Service called!");
    this.roasts = roasts;
    console.log(this.roasts);
  }

  getRoasts() {
    console.log("getRoasts on Roast Service called!")
    return this.roasts;
  }


  filterRoasts(flavors: string[]) {
    var that = this;
    var flav1 = flavors[0];
    var flav2 = flavors[1];
    var flav3 = flavors[2];
    var allRoasts = [];

    switch (flavors.length) {
      case 1:
        return this.ref.orderByChild("flavors/"+flav1).equalTo(true).once('value').then(function(roasts) {
          roasts.forEach(function(roast) {
            allRoasts.push(roast.val());
          })
          return allRoasts;
        })
      case 2:
        return this.ref.orderByChild("flavors/"+flav1).equalTo(true).once('value').then(function(roasts) {
          roasts.forEach(function(roast) {
            if (roast.child("flavors").child(flav2).exists()) {
                allRoasts.push(roast.val());
            }
          });
          return allRoasts;
        });
      case 3:
        return this.ref.orderByChild("flavors/"+flav1).equalTo(true).once('value').then(function(roasts) {
          roasts.forEach(function(roast) {
            if (roast.child("flavors").child(flav2).exists() && roast.child("flavors").child(flav3).exists()) {
                allRoasts.push(roast.val());
            }
          })
          return allRoasts;
        });
    }
  }

}
