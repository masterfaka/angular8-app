import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  template: `<h2>Componente2 con cli</h2>
            `,
  styleUrls: ['./componente2.component.sass']
})
export class Componente2Component implements OnInit {

  /**decorador import para pasasr "props "de padre a hijo */

  constructor() { }

  ngOnInit(): void {
  }

}
