import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderDirective,
    DynamicComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    Component1Component,
    Component2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }