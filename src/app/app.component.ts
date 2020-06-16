import { Component } from '@angular/core';

/* decorador */
@Component({
  /* angular selector */
  selector: 'app-root',
  /* si el selector es template a secas puede ser inline*/
  templateUrl: './app.component.html',
  /* styles aunque con templte puede ser inline 
  !!ojo array
  */
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  //propiedad de la clase AppComponent
  title = 'Mi-angular-app';
  miMensaje= "corazón";
}
