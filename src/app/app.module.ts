import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FloatButtonComponent } from './shared/float-button/float-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { ButtonsPipe } from './pipes/buttons.pipe';

// modulos


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    FloatButtonComponent,
    SearchPipe,
    PaginationPipe,
    ButtonsPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
