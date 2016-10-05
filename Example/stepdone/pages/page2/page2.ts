import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {FormGroup, FormControl} from '@angular/forms';
import {GlobalSearchService} from '../../services/globalSearchService'

@Component({
      selector: 'page2',
      templateUrl: './pages/page2/page2.html'
    })
   
export class Page2 {
    formGroup: FormGroup;
    items: Object[];
    search: GlobalSearchService;
    constructor(http: Http) {
        this.search = GlobalSearchService.getInstance();
        this.items = [];
        this.formGroup = new FormGroup({
            title: new FormControl(''),
            count: new FormControl(0)
        });
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
                title: this.formGroup.get('title').value,
                count: this.formGroup.get('count').value
            }
        )
    }
}
