import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { TareaRespuesta, Tarea } from '../interfaces/tarea-respuesta';
import { environment } from 'src/environments/environment';
import { Subject, throwError as observableThrowError } from 'rxjs';


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
    return this.http.get<TareaRespuesta[]>(`${this.apiUrl}`).pipe( catchError( this.errorHandler ) )
  }


  crearTarea(tarea: Tarea) {
    return this.http.post(`${this.apiUrl}`, tarea).pipe(
      tap(() => {
        this._refrescar$.next();
      }),catchError( this.errorHandler)
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
      }),catchError( this.errorHandler)
    );
  }

  eliminarTarea(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this._refrescar$.next();
      }), catchError( this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message)
  }
}
