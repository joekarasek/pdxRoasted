//        (>'-')>  ng2 Core  <('-'<)
import { Component, OnInit, provide } from 'angular2/core';
//        (>'-')>  ng2 Router  <('-'<)
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  Location
 } from 'angular2/router';
//        (>'-')>  Firebase Service DI  <('-'<)
import { RoastService } from './roast.service';
import { PaletteService } from './palette.service';
import { FlavorService } from './flavor.service';
import { UtilsService } from './utils.service';
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
    RoastService,
    PaletteService,
    FlavorService,
    UtilsService
  ]
})
@RouteConfig([
  {
    path: '/',
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
  site_id: string =  "PDX Roasted";
  tag_line: string = "Find the best Portland roasted coffee for you";
  constructor(location: Location) {
    location.go('/');
  }
}
