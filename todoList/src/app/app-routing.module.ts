import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './AddTodo.component';
import {ShowListComponent} from './ShowList.component';

const routes: Routes = [
  {path: 'addTodo', component: AddTodoComponent},
  {path: 'showList', component: ShowListComponent},
  {path: '', redirectTo: '/showList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
