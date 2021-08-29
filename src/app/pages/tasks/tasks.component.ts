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

  tareaFormulario: Tarea = {
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
    if (!this.tareaFormulario.id) {
      this.crearTarea();
    } else {
      this.actualizarTarea(this.tareaFormulario);
    }

  }

  crearTarea(){
    this.tareaCreada = true;
    this.servicioTareas.crearTarea(this.tareaFormulario).subscribe();
  }

  actualizarTarea(informacion:Tarea){
    this.servicioTareas.actualizarTarea(informacion).subscribe();
  }

  mostrarFormulario(tarea: Tarea) {
    if (tarea.title) {
      this.tareaFormulario.title = tarea.title;
      this.tareaFormulario.state = tarea.state;
      this.tareaFormulario.id = tarea.id;
    }
  }


  actualizarCheck(event:any, tarea:Tarea){
    const nuevaInformacion = {
      title: tarea.title,
      state: event.checked,
      id: tarea.id
    }
    this.actualizarTarea(nuevaInformacion);
  }



  limpiarFormulario() {
    this.tareaCreada = false;
    this.tareaFormulario = {
      title: '',
      state: '',
    };
  }

  cambiarPagina(direccion: any) {
    if (direccion === 'anterior') this.paginaAnterior();
    if (direccion === 'siguiente') this.paginaSiguiente();
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
