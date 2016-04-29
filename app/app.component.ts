//        (>'-')>  ng2 Core  <('-'<)
import { Component, OnInit } from 'angular2/core';
//        (>'-')>  ng2 Http  <('-'<)
import { HTTP_PROVIDERS } from 'angular2/http';
//        (>'-')>  ng2 Router  <('-'<)
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
//        (>'-')>  Firebase Service DI  <('-'<)
import { FirebaseService } from './firebase.service';
import { SearchComponent } from './search.component';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello, pdxRoasted!</h1>
  `,
  providers: [
    HTTP_PROVIDERS,
    FirebaseService
  ]
})
export class AppComponent {



}
