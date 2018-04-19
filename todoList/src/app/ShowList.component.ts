import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IPerson } from  './IPerson';
import { ITodoItem } from './ITodoItem';
import { Options } from 'selenium-webdriver/chrome';

@Component({
  templateUrl: './ShowList.component.html',
  styleUrls: ['./app.component.css']
})

export class ShowListComponent implements OnInit{

  public todos: Observable<ITodoItem[]>;

  constructor(public http: HttpClient) 
  {
    this.todos = http.get<ITodoItem[]>('http://localhost:8080/api/todos');
  }

  ngOnInit() {}

}
