import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    // mis modulos
    ComponentsModule,
    PipesModule,
  ],
  exports: [TasksComponent],
})
export class PagesModule {}
