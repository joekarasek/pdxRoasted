//        (>'-')>  ng2 Core  <('-'<)
import { Component, OnInit } from 'angular2/core';
//        (>'-')>  ng2 Http  <('-'<)
import { HTTP_PROVIDERS } from 'angular2/http';
//        (>'-')>  ng2 Router  <('-'<)
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
//        (>'-')>  Firebase Service DI  <('-'<)
import { FirebaseService } from './firebase.service';
//        (>'-')>  Components  <('-'<)
import { SearchComponent } from './search.component';
import { AboutUsComponent } from './about-us.component';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello, pdxRoasted!</h1>
      <nav>
        <ul>
          <li>
            <a [routerLink]="['AboutUs']">About Us</a>
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    FirebaseService
  ]
})
@RouteConfig([
  {
    path: '/search',
    name: 'Search',
    component: SearchComponent,
    useAsDefault: true
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUsComponent
  }
])
export class AppComponent {



}
