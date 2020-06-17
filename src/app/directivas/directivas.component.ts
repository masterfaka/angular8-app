import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.sass']
})
export class DirectivasComponent implements OnInit {
  isValid =true;
  tuFruta={
    nombre:"",
    precio:0,
    peso:0};
  frutas = [
    {nombre:"manzana", peso:3, precio:2},
    {nombre:"pera", peso:3, precio:1},
    {nombre:"limon", peso:3, precio:5},
    {nombre:"melon", peso:3, precio:55},
    ];
  constructor() { }

  ngOnInit(): void {
  }
  agregarFrutaRandom(){
    this.frutas.push({nombre:"sandia", peso:30, precio:111});
  }
  /* le puedo pasar directamente el objeto exacto porque sabemos cual es */
  quitarFrutaElegida(fruta){
    /**Lo podemos usar con objetos */
      let indice= this.frutas.indexOf(fruta);
      this.frutas.splice(indice, 1);
  }

}
