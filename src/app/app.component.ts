import { Component } from '@angular/core';
import { Appservice } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  todo = null;

  constructor(private appService: Appservice) {
    this.appService.getTodoData(2).subscribe((data) => (this.todo = data));
    this.appService
      .puttododata({ id: 3, userId: 3, title: 'test' })
      .subscribe((data) => console.log(data));
    const postData = {
      userId: 1,
      title: 'redmi',
      completed: true,
    };
    this.appService
      .postododata(postData)
      .subscribe((data) => console.log(data));
    this.appService.deletetododata(3).subscribe((data) => console.log(data));
  }
}
