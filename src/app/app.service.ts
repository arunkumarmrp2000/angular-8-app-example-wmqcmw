import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Appservice {
  constructor(private http: HttpClient) {}
  getTodoData(todoId: number = 1) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
  }
  puttododata(data: any) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/todos/${data.id}`,
      data
    );
  }
  postododata(data: any) {
    return this.http.post(`https://jsonplaceholder.typicode.com/todos/`, data);
  }
  deletetododata(todoId: any) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/todos/,${todoId}`
    );
  }
}
