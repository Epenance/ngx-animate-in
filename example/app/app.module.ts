import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnimateInModule } from '../../src';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateInModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
