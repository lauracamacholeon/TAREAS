import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pagination.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    PaginationPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationPipe,
    SearchPipe
  ]
})
export class PipesModule { }
