import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  @Input() pagina:number=1;
  @Output() direccionPagina:EventEmitter<String> = new EventEmitter();


  ngOnInit(): void {
  }

}
