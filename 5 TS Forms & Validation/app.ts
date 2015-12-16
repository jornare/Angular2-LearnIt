/// <reference path="../typings/angular2/angular2.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators} from 'angular2/common';
import {CustomValidators} from 'validators';

@Component({
      selector: 'my-app',
      templateUrl: 'myApp.html'
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