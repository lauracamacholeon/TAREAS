import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    AlertComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
