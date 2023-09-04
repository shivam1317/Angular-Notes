import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  Postname: string = 'This is coming from postparent';
  toParent: string = 'This is a message to parent from postComponent';
  eventMsg: string = 'This is a message from postComponent on eventEmitter';
  @Input() fromParent: string = '';
  @Output() msgEvent = new EventEmitter<string>();
  // This will trigger on button click
  ShowMsg() {
    this.msgEvent.emit(this.eventMsg);
  }
}
