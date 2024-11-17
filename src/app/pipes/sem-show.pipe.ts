import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semShow'
})
export class SemShowPipe implements PipeTransform {

  transform(texto: string): string {
    if(texto == ''){
      return "Sem Show de TV";
    }else{
    return texto;
    }
  }

}
