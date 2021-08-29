import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tarea, TareaRespuesta } from '../../interfaces/tarea-respuesta';
import { NgForm } from '@angular/forms';

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

  // recibir numero por output
  paginacion = 0;

  // Banderas
  tareaCreada = false;
  tareaActualizada = false;

  tareaFormulario: Tarea = {  title: '',  state: '' };

  constructor(private servicioTareas: TasksService) {}

  ngOnInit(): void {
    this.obtenerTareas();
    // visualizacion en tiempo real
    this.servicioTareas.refrescar$.subscribe(() => {
      this.obtenerTareas();
    });
  }

  obtenerTareas() {
    this.servicioTareas.obtenerTareas().subscribe((data) => {
      this.tareas = data;
      this.tamanoDataTareas = this.tareas.length;
    });
  }

  crearTarea() {
    this.tareaCreada = true;
    this.servicioTareas.crearTarea(this.tareaFormulario).subscribe();
  }

  guardarTarea(formulario: NgForm) {
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
    this.tareaActualizada = true;
    this.servicioTareas.actualizarTarea(informacion).subscribe();
  }

  datosElementoAmodificar(tarea: Tarea) {
    if (tarea.title) {
      this.tareaFormulario.title = tarea.title;
      this.tareaFormulario.state = tarea.state;
      this.tareaFormulario.id = tarea.id;
    }
  }

  eliminarTarea(id: string) {
    this.servicioTareas.eliminarTarea(id).subscribe();
  }

  limpiarFormulario() {
    this.tareaCreada = false;
    this.tareaActualizada = false;
    this.tareaFormulario = { title: '', state: '' };
  }
}
