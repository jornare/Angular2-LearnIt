import {Component} from '@angular/core';
import {Validators} from '@angular/forms';
//import {CustomValidators} from 'validators';

@Component({
      selector: 'my-app',
      templateUrl: 'app.component.html'
    })
export class AppComponent {
    person = {
        first: '',
        last: '',
        email: ''
    };
    // public ctrlFirst: Control = new Control('', Validators.required);
    // public ctrlLast: Control = new Control('', Validators.required);
    // public ctrlEmail: Control = new Control('', CustomValidators.atComputas);
    
    // public formGroup: ControlGroup = new ControlGroup({
    //         name: new ControlGroup({
    //             first: this.ctrlFirst,
    //             last: this.ctrlLast
    //         }),
    //         email: this.ctrlEmail
    //     });
    
    constructor() {
        
    }
}
