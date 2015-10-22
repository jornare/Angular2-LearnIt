/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
      selector: 'my-app'
    })
@View({
      template: '<h1>Hello World!</h1>'
    })
export class App {
    constructor() { }
}

bootstrap(App);