import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IPerson } from  './IPerson';
import { ITodoItem } from './ITodoItem';
import { Options } from 'selenium-webdriver/chrome';

@Component({
  templateUrl: './AddTodo.component.html',
  styleUrls: ['./app.component.css']
})


export class AddTodoComponent implements OnInit{

  public people: Observable<IPerson[]>;

  public newTodo: ITodoItem;

  constructor(public http: HttpClient) 
  {
    this.people = http.get<IPerson[]>('http://localhost:8080/api/people');

    function addTodoFunction() {

      http.post(
        'http://localhost:8080/api/todos',
        null
      ).subscribe(data => {

      });
    }

  }

  ngOnInit() {}

}
