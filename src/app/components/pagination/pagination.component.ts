import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }
 
  pagina:number=1;
  paginacion = 0;
  @Output() mostrarPaginas:EventEmitter<number> = new EventEmitter();
  @Input() tamanoData:number = 0;
  

  ngOnInit(): void {
  }

  direccionPagina(direccion: any) {
    if (direccion === 'anterior') this.paginaAnterior();
    if (direccion === 'siguiente') this.paginaSiguiente();
  }

  paginaSiguiente() {
    if (this.paginacion < this.tamanoData) {
      this.paginacion += 5;
      this.pagina += 1;
      this.mostrarPaginas.emit(this.paginacion);
    }
  }

  paginaAnterior() {
    if (this.paginacion > 0) {
      this.paginacion -= 5;
      this.pagina -= 1;
      this.mostrarPaginas.emit(this.paginacion);
    }
  }



}
