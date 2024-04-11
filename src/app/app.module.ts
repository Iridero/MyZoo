import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AddHabitatComponent } from './components/add-habitat/add-habitat.component';
import { CommonModule } from '@angular/common';
import { HabitatListComponent } from './components/habitat-list/habitat-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AddHabitatComponent,
    HabitatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
