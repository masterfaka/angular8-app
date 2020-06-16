import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `<h3>Property binding image:</h3>
                ojo con la propiedad va entre corchetes por cojerla del dom
                <img [src]="imgeUrl" alt="imgeUrl es una propiedad de esta clase"/>
                <button type="button" 
                class="btn btn-info" 
                [disabled]="btnStatus"
                [class.activo]="isActive" >Property / Class binding Boton</button>
                <button type="button" 
                class="btn btn-primary" 
                [style.backgroundColor]="isActive ? 'green':'grey' " >Style binding condicional Boton</button>
                <button type="button" 
                class="btn btn-info" 
                (click) = mostrar($event) > Event binding Boton</button>
                <hr>
                <input type="text" 
                (keyup) = "oneKeyUp($event)"  Event filtering Boton />
                <input type="text" 
                placeholder="version con event filtering2"
                (keyup.enter) = "oneKeyUp2()"  />
                <hr>
                Template Variable
                <input type="text"
                size="50" 
                placeholder="template variable| Muestra el valor del elemnto cuando Enter"
                (keyup.enter) = "oneKeyUp3(nombre.value)"   
                #nombre/>
                <hr>
                2way DATABINDING
                <p> {{persona.nombre}}        </p>
                <input type="text"
                size="50" 
                placeholder="cambia elemento de forma dinamica con valor de la prop"
                [(ngModel)] = "persona.nombre"   
                #nombre/>
                <hr>
                `,
                /*OJO $event es un obj predefinido tiene ubicacion(pageY-Y), tipos.. 
                otros props */
  styleUrls: ['./binding.component.sass']
})
export class BindingComponent implements OnInit {
  constructor() { }
  imgeUrl="https://via.placeholder.com/100/FF0000/008000?Text=Image src property selected frommDOM";
  btnStatus = false;/*si true se dshabilita*/
  isActive= false;
  /*da=  como se llama al parametro el evento lo pasamos desde el DOM cuando click */
  mostrar(e){
      console.log(e);
  }
  oneKeyUp(e){
    if(e.keyCode ===13){
      console.log("presionaste ENter");
    }
      console.log(e);
  }
  oneKeyUp2(){
    alert("presionaste Enter");
  }
  oneKeyUp3(valor){
      console.log(valor);
  }
  /**2way databinding */
  persona ={
    nombre: "luis",
    edad: 20
  }
   ngOnInit(): void {
  }


}
