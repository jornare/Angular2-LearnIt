/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/http.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
      selector: 'my-app'
    })
@View({
      template: `<md-list *ng-for="#item of list">
                    <md-list-item class="md-2-line">
                        <div class="md-list-item-text">
                            <h3>{{item}}</h3>
                            <p>...</p>
                        </div>
                    </md-list-item>
                 </md-list>`,
      directives: [NgFor]
    })
export class App {
    list: Array<string>
    constructor(http: Http) {
        this.list = [];
        http.get('list.json')
            .map(res => res.json())
            .subscribe(list => this.list = list);
    }
}

bootstrap(App, HTTP_PROVIDERS);