import { PipeTransform, Pipe } from '@angular/core';

// Pipe decorator takes pipe name as argument
@Pipe({ name: 'greet' })
// This pipe will add "Hello" before given value
export class GreetPipe implements PipeTransform {
  // If you implement your class from PipeTransform then you have to create transform function
  transform(value: any, ...args: any[]) {
    return 'Hello ' + value;
  }
}
