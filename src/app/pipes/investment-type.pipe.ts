import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentType'
})
export class InvestmentTypePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'co_ownership':
        return 'Co-Ownership';
      case 'mezzanie_debt':
        return 'Mezzanie Debt';
    }
  }

}
