import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CrudReadListComponent } from './crud-read-list/crud-read-list.component';
import { CrudReadGetComponent } from './crud-read-get/crud-read-get.component';
import { CrudCreateComponent } from './crud-create/crud-create.component';
import { CrudUpdateComponent } from './crud-update/crud-update.component';
import { CrudDeleteComponent } from './crud-delete/crud-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudReadListComponent,
    CrudReadGetComponent,
    CrudCreateComponent,
    CrudUpdateComponent,
    CrudDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
