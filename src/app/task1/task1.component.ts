import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component {
  title: string = '';
  description: string = '';
  imgUrl: string = '';
  isBackground: boolean = false;
  // Getting query param values
  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe((value) => {
      console.log(value.get('page'));
    });
  }
}
