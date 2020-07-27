import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Hal1Component } from './hal1/hal1.component';
import { Hal2Component } from './hal2/hal2.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    Hal1Component,
    Hal2Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
