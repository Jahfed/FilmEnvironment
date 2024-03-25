import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eightsPages',
  standalone: true
})
export class EightsPagesPipe implements PipeTransform {

  transform(value: number): string {
    let positiveValue = Math.sqrt(value ** 2);
    let divisibleByEight = positiveValue - (positiveValue % 8);
    let numberOfWholePages = divisibleByEight !== 0 ? `${(divisibleByEight / 8)} ` : "";
    let remainder = `${positiveValue % 8}/8`;
    return `${numberOfWholePages}${remainder}`;
  }

}
