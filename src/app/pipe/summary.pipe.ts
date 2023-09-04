import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, length?: number): unknown {
    // Default value for length
    if (!length) {
      length = 20;
    }
    return value.substring(0, length);
  }
}
