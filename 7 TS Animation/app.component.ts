import {Component,
    trigger,
    state,
    style,
    transition,
    animate} from '@angular/core';

@Component({
      selector: 'my-app',
      template: '<div>{{myState}}</div><div class="box" [@boxState]="myState"></div>',
      styles: ['.box {width: 100px; height: 100px; transform-origin: center center;}'],
      animations: [
          trigger('boxState', [
              state('one', style({
                  backgroundColor: 'green',
                  transform: 'scale(1)'
              })),
              state('two', style({
                  backgroundColor: 'blue',
                  transform: 'rotate(-20deg) translate3D(100px, 100px, 0)'
              })),
              state('three', style({
                  backgroundColor: 'red',
                  transform: 'scale(0.5) rotate(180deg)'
              })),
              transition('* <=> *', animate('1000ms ease-in'))
          ])
      ]
    })
export class AppComponent {
    myState: string = 'one';
    states: string[] =  ['one', 'two', 'three'];
    constructor() { }
    ngOnInit() {
        setInterval( () => {
            this.myState = this.states[Math.floor(Math.random() * 3)];
        }, 1000);
    }
}
