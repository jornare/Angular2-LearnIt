import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
      selector: 'my-app',
      template: `<ul><li *ngFor="let item of list">{{item}}</li></ul>`
    })
export class AppComponent {
    list: string[] = [];
    constructor(http: Http) {
        http.get('list.json')
            .subscribe(res => {
                this.list = res.json();
            });
    }
}
