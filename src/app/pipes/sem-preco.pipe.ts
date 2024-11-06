import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semPreco'
})
export class SemPrecoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
