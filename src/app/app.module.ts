import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';/*se refiere al componente.ts */
import { Componente1 } from './componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { BindingComponent } from './binding/binding.component';
import { Component2componentComponent } from './component2component/component2component.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { CambiarColorDirective } from './cambiar-color.directive';
import { MiPipeResumirPipe } from './mi-pipe-resumir.pipe';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Formu1Component } from './formu1/formu1.component';/*da fallo si no se importa DUh*/

@NgModule({
  /*hay que registrar cada SUB-hijo componente que eeste modulo cargue!!
  (componente1 hijo de AppComponent) */
  declarations: [
    AppComponent, 
    Componente1, 
    /*el componente cli no se autoindenta + crea una carpeta nueva*/
    Componente2Component, 
    BindingComponent, Component2componentComponent, DirectivasComponent, CambiarColorDirective,
    MiPipeResumirPipe,
    FirstComponent,
    SecondComponent,
    Formu1Component
  ],
  /* aki se importan los modulos */
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  /**en providers se injectan servicios a nivel de modulo */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
