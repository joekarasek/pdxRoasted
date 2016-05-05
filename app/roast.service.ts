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

  getRoasts(flavors) {
    var that = this;
    var flav1 = flavors[0];
    var flav2 = flavors[1];
    var flav3 = flavors[2];

    switch (flavors.length) {
      case 1:
        this.roasts.orderByChild("flavors/"+flav1).equalTo(true).once('value', function(roasts) {
          console.log(roasts.val());
        })
        break;
      case 2:
        this.roasts.orderByChild("flavors/"+flav1).equalTo(true).once('value', function(roasts) {
          roasts.forEach(function(roast) {
            if (roast.child("flavors").child(flav2).exists()) {
                console.log(roast.val());
            }
          })
        })
        break;
      case 3:
        this.roasts.orderByChild("flavors/"+flav1).equalTo(true).once('value', function(roasts) {
          roasts.forEach(function(roast) {
            if (roast.child("flavors").child(flav2).exists() && roast.child("flavors").child(flav3).exists()) {
                console.log(roast.val());
            }
          })
        })
        break;
    }
  }

}
