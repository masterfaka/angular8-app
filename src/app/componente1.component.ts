import { Component } from '@angular/core';

/* decorador */
@Component({
  /* angular selector */
  selector: 'componenteAMano',
  /* si el selector es template a secas puede ser inline*/
  template: `<h2>Componente a mano</h2>
    asi guarda el formato
    <strong >Ojo que no son strings</strong>
    <p>Un parrafo sin br ;)</p>
  `,
  /* styles aunque con templte puede ser inline 
  !!ojo array
  */
  styles: ['h2{ color:indigo; }']
})

export class Componente1 {

}
