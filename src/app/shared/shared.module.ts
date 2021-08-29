import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button/float-button.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    FloatButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FloatButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
