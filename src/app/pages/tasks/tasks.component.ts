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
  busqueda = '';
  pagina: number = 1;
  paginacion = 0;

  // Banderas
  tareaCreada = false;

  tareaFormulario = {
    title: '',
    state: '',
  };

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
    });
  }

  guardarTarea(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }
    this.tareaCreada = true;
    // this.servicioTareas.crearTarea(formulario.value).subscribe();
  }

  limpiarFormulario() {
    this.tareaCreada = false;
    this.tareaFormulario = {
      title: '',
      state: '',
    };

    // this.tareaCreada =fas
  }

  paginaSiguiente() {
    if (this.paginacion < this.tareas.length) {
      this.paginacion += 5;
      this.pagina += 1;
    }
  }

  paginaAnterior() {
    if (this.paginacion > 0) {
      this.paginacion -= 5;
      this.pagina -= 1;
    }
  }
}
