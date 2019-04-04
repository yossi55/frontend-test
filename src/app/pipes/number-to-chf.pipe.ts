import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToChf'
})
export class NumberToChfPipe implements PipeTransform {

  transform(value: number): string {
    const stringValue = value.toString();
    let formattedValue = '';
    let counter = 0;
    for (let i = stringValue.length - 1; i >= 0; i--) {
      counter++;
      formattedValue += stringValue[i];
      if (counter === 3 && i !== 0) {
        formattedValue += '\'';
        counter = 0;
      }
    }
    return `CHF ${((formattedValue.split('')).reverse()).join('')}`;
  }

}
