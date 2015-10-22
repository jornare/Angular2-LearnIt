/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Control, ControlGroup, Validators, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {CustomValidators} from 'validators';

@Component({
      selector: 'my-app'
    })
@View({
      templateUrl: 'myApp.html',
      directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
    })
export class App {
    public ctrlFirst: Control = new Control('', Validators.required);
    public ctrlLast: Control = new Control('', Validators.required);
    public ctrlEmail: Control = new Control('', CustomValidators.atComputas);
    
    public formGroup: ControlGroup = new ControlGroup({
            name: new ControlGroup({
                first: this.ctrlFirst,
                last: this.ctrlLast
            }),
            email: this.ctrlEmail
        });
    
    constructor() {
        
    }
}

bootstrap(App);