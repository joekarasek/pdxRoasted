import { Component } from 'angular2/core';
import { Location } from 'angular2/router';

@Component({
  selector: 'about',
  templateUrl: 'app/about.component.html'
})
export class AboutComponent {
  constructor(location: Location) {
    location.go('/about');
  }
}
