import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  zero;
  one;
  two;
  three;
  title = 'korona';
  results: string[];
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8080/data').subscribe(data => {
      retry(3);
      this.zero = data[0];
      this.one = data[1];
      this.two = data[2];
      this.three = data[3];
    });
  }

  doSomethingOnComplete(): void {

  };
}

