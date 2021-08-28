import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
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
