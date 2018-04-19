import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IPerson } from  './IPerson';
import { ITodoItem } from './ITodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sidebar = false;

  public people: Observable<IPerson[]>;

  constructor(private http: HttpClient) 
  {
    this.people = http.get<IPerson[]>('http://localhost:8080/api/people');
  }
}
