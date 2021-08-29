import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { TareaRespuesta, Tarea } from '../interfaces/tarea-respuesta';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = environment.apiUrl;
  private _refrescar$ = new Subject<void>();

  constructor(private http: HttpClient) {
    console.log('servicio inyectado');
  }

  get refrescar$() {
    return this._refrescar$;
  }

  obtenerTareas() {
    return this.http.get<TareaRespuesta[]>(`${this.apiUrl}`);
  }

  crearTarea(tarea: Tarea) {
    return this.http.post(`${this.apiUrl}`, tarea).pipe(
      tap(() => {
        this._refrescar$.next();
      })
    );
  }

  actualizarTarea(informacion: any) {
    const id = informacion.id;
    const nuevaInformacion = { ...informacion };
    delete nuevaInformacion.id;
    // console.log(nuevaInformacion);
    return this.http.put(`${this.apiUrl}/${id}`, informacion).pipe(
      tap(() => {
        this._refrescar$.next();
      })
    );
  }

  eliminarTarea(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this._refrescar$.next();
      })
    );
  }
}
