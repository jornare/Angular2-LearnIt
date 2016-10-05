import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
      selector: 'my-app',
      templateUrl: 'app.component.html'
    })
export class AppComponent {
    @ViewChild('myForm')
    myForm: NgForm;

    person = {
        first: '',
        last: '',
        email: ''
    };
    submitted: boolean = false;

    constructor() {
        
    }

    onMyFormSubmit() {
        this.submitted = true;
        this.myForm.resetForm();
    }
}
