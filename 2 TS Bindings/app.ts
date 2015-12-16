/// <reference path="../typings/angular2/angular2.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
      selector: 'my-app',
      templateUrl: 'app.html'
    })
export class App {
    ticker: number = 0;
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