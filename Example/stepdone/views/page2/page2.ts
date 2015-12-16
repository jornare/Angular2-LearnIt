import {Component} from 'angular2/core';
import {Control, ControlGroup} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GlobalSearchService} from 'services/globalSearchService.ts'

@Component({
      selector: 'page2',
      providers: [GlobalSearchService, HTTP_PROVIDERS],
      templateUrl: 'views/page2/page2.html'
    })
   
export class Page2 {
    title: Control = new Control('')
    count: Control = new Control(0)
    formGroup: ControlGroup = new ControlGroup({
        title: this.title,
        count: this.count
    })
    items: Array<Object>
    search: GlobalSearchService
    constructor(http: Http) {
        this.search = GlobalSearchService.getInstance();
        this.items = [];
        http.get('data/data.json')
            .subscribe(res => {
                let result = res.json();
                result.forEach(item => {item.date = new Date(item.date)})
                this.items = result;
            });
    }
    addTitle() {
        this.items.push(
            {
                id: 0,
                title: this.title.value,
                count: this.count.value
            }
        )
    }
}
