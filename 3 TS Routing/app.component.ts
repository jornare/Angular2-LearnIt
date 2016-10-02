import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Routing</h1>
        <a routerLink="Page1">Page 1</a>&nbsp;
        <a routerLink="Page2">Page 2</a>
        <router-outlet></router-outlet>
        <footer></footer>`
})

export class AppComponent {
  constructor() { }
}


