import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tarea, TareaRespuesta } from '../../interfaces/tarea-respuesta';

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
  constructor(private servicioTareas: TasksService) {}

  ngOnInit(): void {
    this.servicioTareas.obtenerTareas().subscribe((data) => {
      this.tareas = data;
    });
  }

  paginaSiguiente() {
    this.paginacion += 5;
    this.pagina += 1;
  }

  paginaAnterior() {
    if (this.paginacion > 0) {
      this.paginacion -= 5;
      this.pagina -= 1;
    }
  }
}
