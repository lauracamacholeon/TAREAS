import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../interfaces/tarea-respuesta';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(tareas: Tarea[], page:number = 0): Tarea[] {
   
    return tareas.slice(page,page+5);

  }

}
