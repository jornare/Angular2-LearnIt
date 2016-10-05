import {Component} from '@angular/core';
import {GlobalSearchService} from './services/globalSearchService';

@Component({
      selector: 'my-app',
      templateUrl: 'app.component.html'
    })
export class AppComponent {
    search: GlobalSearchService
    
    constructor() {
        this.search = GlobalSearchService.getInstance();
    }
}
