import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import {Page1} from './pages/page1/page1';
import {Page2} from './pages/page2/page2';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    routing,
  ],
  declarations: [AppComponent, Page1, Page2],
  bootstrap: [AppComponent]
})
export class AppModule { }