import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TareaRespuesta, Tarea } from '../interfaces/tarea-respuesta';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {
    console.log('servicio inyectado');
  }

  obtenerTareas() 
  {
    return this.http.get<TareaRespuesta[]>('https://608adc0d737e470017b7410f.mockapi.io/api/v1/todos')

  }
}
