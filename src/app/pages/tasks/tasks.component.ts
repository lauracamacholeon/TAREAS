import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tarea, TareaRespuesta } from '../../interfaces/tarea-respuesta';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tareas: TareaRespuesta[] = [];
  tamanoDataTareas: number = 0;
  busqueda = '';
  pagina: number = 1;
  tareaFormulario: Tarea = { title: '', state: '' };
 

  // recibir numero por output
  paginacion = 0;

  // Banderas
  tareaCreada = false;
  tareaActualizada = false;
  tareaEliminada = false;

  constructor(private servicioTareas: TasksService) {}

  ngOnInit(): void {
    this.obtenerTareas();
    // visualizacion en tiempo real
    this.servicioTareas.refrescar$.subscribe(() => {
      this.obtenerTareas();
    });
  }

  obtenerTareas() {
    this.servicioTareas.obtenerTareas().subscribe(
      (data) => {
        this.tareas = data;
        this.tamanoDataTareas = this.tareas.length;
      },
      (error) => this.alertaError()
    );
  }

  crearTarea() {
    this.servicioTareas.crearTarea(this.tareaFormulario).subscribe(
      (resp) => {
        this.tareaCreada = true;
        this.tareaActualizada = false;
        this.tareaEliminada = false;
      
      },
      (error) => this.alertaError()
    );
  }

  guardarTarea(formulario: NgForm) {
    // evitar que se envie informacion vacia
    if (formulario.invalid) {
      return;
    }
    if (!this.tareaFormulario.id) {
      this.crearTarea();
    } else {
      this.actualizarTarea(this.tareaFormulario);
    }
  }

  actualizarCheck(event: any, tarea: Tarea) {
    let nuevaInformacion = {
      title: tarea.title,
      state: event.checked,
      id: tarea.id,
    };
    this.actualizarTarea(nuevaInformacion);
  }

  actualizarTarea(informacion: Tarea) {
    this.servicioTareas.actualizarTarea(informacion).subscribe(
      (data) => {
        this.tareaActualizada = true;
        this.tareaCreada = false;
        this.tareaEliminada = false;
      },
      (error) => this.alertaError()
    );
  }

  datosElementoAmodificar(tarea: Tarea) {
    if (tarea.title) {
      this.tareaFormulario.title = tarea.title;
      this.tareaFormulario.state = tarea.state;
      this.tareaFormulario.id = tarea.id;
    }
  }

  confirmacionEliminar(id: string) {
    Swal.fire({
      icon: 'warning',
      text: '??Est?? seguro que desea eliminar el elemento?',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonColor: '#d9534f',
      confirmButtonColor: '#11806A',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      // si la respuesta es OK, se eliminar?? el elemento (evitar accidentes)
    }).then((resp) => {
      if (resp.value) this.eliminarTarea(id);
      else return;
    });
  }

  eliminarTarea(id: string) {
    this.servicioTareas.eliminarTarea(id).subscribe(
      (resp) => {
        this.tareaEliminada = true;
        this.tareaCreada = false;
        this.tareaActualizada = false;
        
      },
      (error) => this.alertaError()
    );
  }

  limpiarFormulario() {
    this.tareaCreada = false;
    this.tareaActualizada = false;
    this.tareaEliminada = false;
    this.tareaFormulario = { title: '', state: '' };
  }

  alertaError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ha ocurrido un error',
    });
  }
}
