import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desocupado'
})
export class DesocupadoPipe implements PipeTransform {

  transform(texto: string): string {
    if(texto == '-'){
      return "Desocupado";
    }else{
    return texto;
    }
  }

}
