import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../interfaces/tarea-respuesta';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(tareas: Tarea[], page: number = 0): Tarea[] {
    const nuevoArreglo = new Array();

    for (let index = 0; index < tareas.length; index++) {
      if (tareas[index]['title']) {
        if (tareas[index]['title'] != null || tareas[index]['title'] != '') {
          nuevoArreglo.push(tareas[index]);
        }
      }
    }

    return nuevoArreglo.slice(page, page + 5);
  }
}
