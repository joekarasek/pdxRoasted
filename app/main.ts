import {bootstrap}    from 'angular2/platform/browser';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {provide } from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  Location,
  LocationStrategy,
  HashLocationStrategy
 } from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
