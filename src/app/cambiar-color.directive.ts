import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]'
})
export class CambiarColorDirective {


  /**dependency injection + servicios
   * para usar la instancia de un obj en una clase para
   * realizar una operacion
   */
  constructor(private element: ElementRef) { }
/**el evento es el que cambia el color(mouseIn-out)pero podemos en vez de calcular el valor o 
 * a pincho cojerlo desde el usuario pej un radiobutton y cojer su valor con @ input
 */
//con el input recojemos el valor de la variable de la vista y le damos alias
//OJO no recuperamos color!!! recuperamos el valor del elemento directiva
  @Input('appCambiarColor') nuevoColor: string;//ojo syntax Typescript
  @HostListener('mouseenter') onMouseEnter() {
      console.log("estas aciendo hover");
      console.log(this.nuevoColor);
      this.cambiarColor(this.nuevoColor);
      this.element.nativeElement.style.color = "white";

  }
  @HostListener('mouseleave') onMouseLeave() {
        console.log("estas dejando de hacer hover");
        console.log(this.nuevoColor);
      this.element.nativeElement.style.backgroundColor = null;
      this.cambiarColor('black');
  }
  cambiarColor(color){
    this.element.nativeElement.style.backgroundColor=color;
  }


}
