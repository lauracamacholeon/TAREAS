import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [
  ]
})
export class AlertComponent implements OnInit {

  @Input() color: string = '';
  @Output() alertaCerrada:EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


}
