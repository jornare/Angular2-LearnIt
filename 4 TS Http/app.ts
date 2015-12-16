/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/http.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
      selector: 'my-app',
      template: `<md-list *ngFor="#item of list">
                    <md-list-item class="md-2-line">
                        <div class="md-list-item-text">
                            <h3>{{item}}</h3>
                            <p>...</p>
                        </div>
                    </md-list-item>
                 </md-list>`,
      viewProviders: [HTTP_PROVIDERS]
    })
export class App {
    list: Array<string>
    constructor(http: Http) {
        this.list = [];
        http.get('list.json')
            .subscribe(res => {
                this.list = res.json();
            });
    }
}

bootstrap(App);