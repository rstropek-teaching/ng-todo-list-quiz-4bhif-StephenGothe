import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './AddTodo.component';
import { ShowListComponent } from './ShowList.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ShowListComponent
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
