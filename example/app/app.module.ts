import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnimateInModule } from '../../src';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateInModule.forRoot()
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
