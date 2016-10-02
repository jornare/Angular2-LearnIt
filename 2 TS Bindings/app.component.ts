import {Component} from '@angular/core';

@Component({
      selector: 'my-app',
      templateUrl: 'app.component.html'
    })
export class AppComponent {
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
