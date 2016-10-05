import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>Routing</h1>
        <a routerLink="Page1">Page 1</a>&nbsp;
        <a routerLink="Page2">Page 2</a>&nbsp;
        <button (click)="navigateTo('Page2')">Page 2 (by code)</button>
        <router-outlet></router-outlet>
        <footer></footer>`
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(link) {
    this.router.navigate([link]);
  }
}
