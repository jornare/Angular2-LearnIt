/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
import {Component, View, Inject, Injectable, bootstrap, bind, FORM_DIRECTIVES} from 'angular2/angular2';
import {Router, RouteConfig, RouterLink, RouterOutlet,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Page1} from 'page1';
import {Page2} from 'page2';
import {GlobalSearchService} from 'services/globalSearchService';

@Component({
      selector: 'my-app'
    })
@View({
      templateUrl: 'app.html',
      directives: [RouterLink, RouterOutlet, FORM_DIRECTIVES]
    })
@RouteConfig([
	{ path: '/', redirectTo: '/Page1'},
	{ path: '/Page1', component: Page1, as: 'Page1'},
	{ path: '/Page2', component: Page2, as: 'Page2'}
])

export class App {
    search: GlobalSearchService
    
    constructor() {
        this.search = GlobalSearchService.getInstance();
    }
}

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);