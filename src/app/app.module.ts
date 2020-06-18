import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';/*se refiere al componente.ts */
import { Componente1 } from './componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { BindingComponent } from './binding/binding.component';
import { Component2componentComponent } from './component2component/component2component.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { CambiarColorDirective } from './cambiar-color.directive';
import { MiPipeResumirPipe } from './mi-pipe-resumir.pipe';/*da fallo si no se importa DUh*/

@NgModule({
  /*hay que registrar cada SUB-hijo componente que eeste modulo cargue!!
  (componente1 hijo de AppComponent) */
  declarations: [
    AppComponent, 
    Componente1, 
    /*el componente cli no se autoindenta + crea una carpeta nueva*/
    Componente2Component, 
    BindingComponent, Component2componentComponent, DirectivasComponent, CambiarColorDirective,
    MiPipeResumirPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
