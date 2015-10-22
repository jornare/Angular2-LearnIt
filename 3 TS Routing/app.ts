/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Page1} from 'page1';
import {Page2} from 'page2';

@Component({
      selector: 'my-app'
    })
@View({
      template: `<h1>Routing</h1>
        <a [router-link]="['/Page1']">Page 1</a>&nbsp;
        <a [router-link]="['/Page2']">Page 2</a>
        <router-outlet></router-outlet>
        <footer></footer>`,
      directives: [ROUTER_DIRECTIVES]
    })
@RouteConfig([
	{ path: '/', redirectTo: '/Page1'},
	{ path: '/Page1', component: Page1, as: 'Page1'},
	{ path: '/Page2', component: Page2, as: 'Page2'}
])

export class App {
    constructor() { }
}

bootstrap(App, [ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);