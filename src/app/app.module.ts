/*
* File: app.module.ts
* Author: Balogh Csenge
* Copyright: 2022, Balogh Csenge
* Group: Szoft_II_N
* Date: 2022-11-29
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
