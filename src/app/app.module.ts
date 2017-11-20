import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductListComponent } from './products/produc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> d968d01d6448752570b52430ead942483fcee1a1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
