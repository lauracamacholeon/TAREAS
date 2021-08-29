import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './pages/tasks/tasks.component';


// mis modulos
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from './shared/shared.module';

// modulos


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // mis modulos 
    ComponentsModule,
    PipesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
