//        (>'-')>  ng2 Core  <('-'<)
import { Component, OnInit } from 'angular2/core';
//        (>'-')>  ng2 Http  <('-'<)
import { HTTP_PROVIDERS } from 'angular2/http';
//        (>'-')>  ng2 Router  <('-'<)
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
//        (>'-')>  Firebase Service DI  <('-'<)
import { RoastService } from './roast.service';
//        (>'-')>  Components  <('-'<)
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SearchComponent } from './search.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    RoastService
  ]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/find_coffee',
    name: 'Search',
    component: SearchComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent
  }
])
export class AppComponent {

}
