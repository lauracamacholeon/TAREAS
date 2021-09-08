import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button/float-button.component';


@NgModule({
  declarations: [
    FloatButtonComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FloatButtonComponent,
    
  ]
})
export class SharedModule { }
