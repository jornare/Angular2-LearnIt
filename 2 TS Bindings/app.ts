/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
      selector: 'my-app'
    })
@View({
      templateUrl: 'app.html',
      directives: [CORE_DIRECTIVES]
    })
export class App {
    ticker: Number = 0;
    items: Array<string> = [];
    constructor() {
        setInterval(() => { // Arrow functions makes this refer to the class
           this.ticker++; 
        }, 1000);
    }
    resetTicker() {
        this.ticker = 0;
    }
}

bootstrap(App);