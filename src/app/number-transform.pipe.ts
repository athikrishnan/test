import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTransform'
})
export class NumberTransformPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value > 999999) {
      return value / 1000000 + 'M';
    }

    if (value > 999) {
      return value / 1000 + 'K';
    }

    return value.toString();
  }

  log10(n: number): number {
    return Math.log(n) / Math.log(10);
  };
}
