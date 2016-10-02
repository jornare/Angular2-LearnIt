import {Component} from '@angular/core';
import {Http, HttpModule} from '@angular/http';

@Component({
      selector: 'my-app',
      template: `<div *ngFor="let item of list">
                    <div>
                        <div>
                            <h3>{{item}}</h3>
                            <p></p>
                        </div>
                    </div>
                 </div>`
    })
export class AppComponent {
    list: Array<string>
    constructor(http: Http) {
        this.list = [];
        http.get('list.json')
            .subscribe(res => {
                this.list = res.json();
            });
    }
}
