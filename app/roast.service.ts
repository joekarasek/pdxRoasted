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

  getAllRoasts() {
    return this.roasts.once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }

  getRoasts(flavors: string[]) {
    var that = this;
    var flav1 = flavors[0];
    var flav2 = flavors[1];
    var flav3 = flavors[2];
    var allRoasts = [];

    switch (flavors.length) {
      case 1:
        return this.roasts.orderByChild("flavors/"+flav1).equalTo(true).once('value').then(function(roasts) {
          console.log("One Flavor");
          roasts.forEach(function(roast) {
            allRoasts.push(roast.val());
          })
          return allRoasts;
        })
      case 2:
        return this.roasts.orderByChild("flavors/"+flav1).equalTo(true).once('value').then(function(roasts) {
          console.log("Two Flavor");
          roasts.forEach(function(roast) {
            if (roast.child("flavors").child(flav2).exists()) {
                allRoasts.push(roast.val());
            }
          });
          return allRoasts;
        });
      case 3:
        return this.roasts.orderByChild("flavors/"+flav1).equalTo(true).once('value').then(function(roasts) {
          console.log("Three Flavor");
          roasts.forEach(function(roast) {
            if (roast.child("flavors").child(flav2).exists() && roast.child("flavors").child(flav3).exists()) {
                allRoasts.push(roast.val());
            }
          })
          return allRoasts;
        })
    }
  }

}
