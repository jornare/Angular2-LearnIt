/// <reference path="../typings/angular2/angular2.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
      selector: 'my-app',
      template: '<h1>Hello World!</h1>'
    })
export class App {
    constructor() { }
}

bootstrap(App);