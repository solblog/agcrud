import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudReadListComponent} from './crud-read-list/crud-read-list.component';
import {CrudReadGetComponent} from './crud-read-get/crud-read-get.component';
import {CrudCreateComponent} from './crud-create/crud-create.component';
import {CrudUpdateComponent} from './crud-update/crud-update.component';
import {CrudDeleteComponent} from './crud-delete/crud-delete.component';



const routes: Routes = [
  { path: 'crud-read-list', component: CrudReadListComponent },
  { path: 'crud-read-get', component: CrudReadGetComponent  },
  { path: 'crud-create', component: CrudCreateComponent },
  { path: 'crud-update', component: CrudUpdateComponent },
  { path: 'crud-delete', component: CrudDeleteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
