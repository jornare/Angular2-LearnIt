/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Page1} from 'page1';
import {Page2} from 'page2';
import {GlobalSearchService} from 'services/globalSearchService';

@Component({
      selector: 'my-app',
      templateUrl: 'app.html',
      directives: [ROUTER_DIRECTIVES]
    })
@RouteConfig([
	{ path: '/Page1', name: 'Page1', component: Page1, useAsDefault: true},
	{ path: '/Page2', name: 'Page2', component: Page2}
])

export class App {
    search: GlobalSearchService
    
    constructor() {
        this.search = GlobalSearchService.getInstance();
    }
}

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);