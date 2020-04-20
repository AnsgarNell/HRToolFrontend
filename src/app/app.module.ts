import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DepartmentsDetailComponent } from './departments/departments-detail/departments-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    DepartmentsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
