import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2component',
  templateUrl: './component2component.component.html',
  styleUrls: ['./component2component.component.sass']
})
export class Component2componentComponent implements OnInit {
  /* dato es el alias */
  @Input('datoEnHijo') dato;
  /*en las llaves del event emmiter es el tipo de dato que enviamos
  -con alias */
  @Output('enviar') nombreEvento = new EventEmitter<string>();
  mensage= "Soy un string desde el HIjo";
  constructor() { }

  ngOnInit(): void {
  }
  ejecutarEvento(){
    /*emitimos el evento enviar con el string*/
    this.nombreEvento.emit(this.mensage);
  }
}
