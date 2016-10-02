import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import {Page1} from './page1';
import {Page2} from './page2';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [AppComponent, Page1, Page2],
  bootstrap: [AppComponent]
})
export class AppModule { }