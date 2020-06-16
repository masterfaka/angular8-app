import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';/*se refiere al componente.ts */
import { Componente1 } from './componente1.component';
import { Componente2Component } from './componente2/componente2.component';/*da fallo si no se importa DUh*/

@NgModule({
  /*hay que registrar cada SUB-hijo componente que eeste modulo cargue!!
  (componente1 hijo de AppComponent) */
  declarations: [
    AppComponent, 
    Componente1, Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
