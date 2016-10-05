import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
      selector: 'my-app',
      templateUrl: 'app.component.html'
    })
export class AppComponent {
    myForm: FormGroup;
    submitted: boolean = false;

    constructor() {
        
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            first: new FormControl('', Validators.required),
            last: new FormControl('', Validators.minLength(3)),
            email: new FormControl('', Validators.pattern('[a-z0-9\.]+@computas\.com$'))
        });
    }
    
    onMyFormSubmit() {
        this.submitted = true;
        this.myForm.reset();
    }
}
