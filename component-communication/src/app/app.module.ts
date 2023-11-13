import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/chil_to_parent_communication/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './components/chil_to_parent_communication/child/child.component';
import { Parent2Component } from './components/child_to_child_communication/parent2/parent2.component';
import { Childa2Component } from './components/child_to_child_communication/childa2/childa2.component';
import { Childb2Component } from './components/child_to_child_communication/childb2/childb2.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    Parent2Component,
    Childa2Component,
    Childb2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
