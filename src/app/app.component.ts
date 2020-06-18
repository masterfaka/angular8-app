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
  datoEnPadre={
    uno:"dato1" ,
    dos:"dato2"
  };
  /*Eventos y directiva @OUtput */
  mensaje="";/*se inicializa vacio para que no pete */
  getMessagePadre(e){
    alert(e);
    /*podemos disponer de esta info y mostrarla con string interpolation
    en cuanto valga algo, si esta puesto en el html, se mostrara(nada mas termine el evento)
    */
   this.mensaje=e;
  }
  /*para pipes */
  unTexto= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia. ";
}
