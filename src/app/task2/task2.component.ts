import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component {
  username: string = '';
  email: string = '';
  userData: any = [];
  addData() {
    this.userData.push({
      username: this.username,
      email: this.email,
    });
    this.email = '';
    this.username = '';
  }
  deleteData(index: number) {
    this.userData.splice(index, 1);
  }
}
