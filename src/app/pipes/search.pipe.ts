import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../interfaces/tarea-respuesta';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Tarea[], arg: string): Tarea[] {
    const argumento = arg.toLowerCase();
    const resultados = [];
    for (const valores of value) {
      if(valores.title){
        if(valores.title.toLowerCase().includes(arg.toLowerCase()) ){
          resultados.push(valores);
         } 
      }
    }
    return resultados;
  }

}
