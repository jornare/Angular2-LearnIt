import {Component, View, Inject,  Injectable, CORE_DIRECTIVES, FORM_DIRECTIVES, Control, ControlGroup} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {GlobalSearchService} from 'services/globalSearchService.ts'

@Component({
      selector: 'page2',
      providers: [GlobalSearchService]
    })
@View({
      templateUrl: 'views/page2/page2.html',
      directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
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
            .map(res => {
                let result = res.json();
                result.forEach(item => {item.date = new Date(item.date)})
                return result;
            })
            .subscribe(items => this.items = items);
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
