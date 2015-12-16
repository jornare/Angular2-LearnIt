/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Page1} from 'page1';
import {Page2} from 'page2';

@Component({
      selector: 'my-app',
      template: `<h1>Hello World!</h1>
        <a [routerLink]="['Page1']">Page 1</a>&nbsp;
        <a [routerLink]="['Page2']">Page 2</a>
        <router-outlet></router-outlet>
        <footer></footer>`,
      directives: [ROUTER_DIRECTIVES]
    })
@RouteConfig([
	{ path: '/Page1', name: 'Page1', component: Page1, useAsDefault: true},
	{ path: '/Page2', name: 'Page2', component: Page2}
])

export class App {
    constructor() { }
}

bootstrap(App, [provide(LocationStrategy, {useClass:HashLocationStrategy}), ROUTER_PROVIDERS]);