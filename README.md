# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---------------------------------------------------------------------------------
My readme
------------------------------------------------------------------------------
# Angular 8
_REQ: node + npm (`-v`check versions)_
```
npm install -g @angular/cli
ng v
ng new my-app-name
ng serve
ng g c componentName
ng generate component componentName
```
------------------------
## https://angular.io/tutorial
## https://angular.io/cli

# _Estructura_
/e2e/== tessting
/node_modules/=== librerias dependencias
/src/== src code
/app/ == our app duh
_convencion:_
app.components.TS == logica
app.module.TS == declaracion componentes totales/ importa librerias y dependencias
app.......HTLM == estructura
app........CSS == estilos
/assests/ ==cosas
environsments= prod / developoment(implicito)
polYfills.ts == importa cosas JS para todos los navs
styles.css == doc global de estilos()
test.ts == para test
.angular-cli.json == paths para docs externos o cualkier otro doc
karma.conf.js== doc para testing
package.json == librerias + nombre app
protractor.conf == testing
tsconfig.json== conf compilador typescript
tslint.json == revisar nuestro codigo errores
---------------------------
## -) string interpolation:
- angular se encarga de procesar los strings y propiedades de la clase del copmponente
- _String Interpolation is a special syntax which is converted to property binding by Angular. It's a convenient alternative to property binding._
## -) prperty binding: componente Binding
- enlazar un valor con una propiedad del DOM
## -) class binding:
- aplicar una clase en funcion de una condicion
``` 
[class.activo]="isActive"
.activo
    background:red
```
_dependiendo del isActive(bool) se aplicara o no la clase_
## -) style binding:
```
              [style.backgroundColor]="isActive ? 'green':'grey' " >Style binding condicional Boton</button>
```
el resto de props de el obj styl del DOM : https://www.w3schools.com/jsref/dom_obj_style.asp
## -) event binding binding:
- en elemento 
```
(click/mouseover/mousein/mouseout) = funcAejecutar($event)
```
## -) event filtering binding:
-  
```
<input type="text" (keyup) = "oneKeyUp($event)" > Event filtering Boton</input>
```
## -) event filtering2 binding:
- no hace falta pasar el evento
```
<input type="text" (keyup.enter) = "oneKeyUp2()" > Event filtering2 Boton</input>
```
## -) template variable (#idNombre):
- guardamos en 1var el elemento del DOM
- no hace falta pasar el evento
```
                <input type="text"
                size="50" 
                placeholder="template variable| Muestra el valor del elemnto cuando Enter"
                (keyup.enter) = "oneKeyUp3(nombre.value)"   
                #nombre/>
```
## -) Two way data Binding:
- hay que importar en el`module.ts` FORms module + agregarlo a los imports del module
- `import {FormsModule } from '@angular/forms';`
- `[(ngModel)] = "persona.nombre"  `
```
imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ]
```

--------------------------------------

# comunicacion entre componentes con Decorators
- _property de componente.padre a c.hijo_ === property binding
- AppComponent va a acer de padre(en su html se inserta el selector.hijo)
- `<app-component2component [datoEnHijo]="datoEnPadre"></app-component2component>|
   @Input() datoEnHijo;`
### alias
```
   @Input(datoEnHijo) elAliasNombreNuevo
   + en el html  
```
- **de hijo a padre** `@output`\ se hace con evento
- `@Output() enviar = new EventEmitter<string>();`
- `  (enviar)="getDato($event)"` en selector hijo invocado en la vista(html padre)
- `<button (click) ="ejecutarEvento()">EmitirEvento</button>`
- `ejecutarEvento es en el hijo y hace un EventEmmiter.emit(dato) que se recoge con getDato($event)`
### tambien tiene alias
-------------------------------------------------------------
# instalar boostrap `npm install boostrap jquery --save`
- se importa en style.css` @import "Ñ/bootstrap/dist/css/bootstrap"`
- en angular.json
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.sass"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
- Stop /ng serve
--------------------------------------------------------------
# Directivas ng
- Estructurales / If StitchCase For
- De Atributo _ngClass, ngStyle_ para cambiar apariencia o fucnionalidad de 1 elemento
- de Componente : simplemente es una clase usando @Component
## ngIf
- evalua si verdadero y pinta el html con la directiva
```html
<div *ngIf="frutas.length then siFrutas else noFrutas">
</div>
<ng-template #siFrutas >
    Hay frutas: se mostrarar si hay frutas
</ng-template>
<ng-template #noFrutas>
    no frutas Se muestra si array vacio
</ng-template>
```
## *ngFor
```html
<ul class="d-flex">
    <li class="flex-row"
     *ngFor="let fruta of frutas"> {{ fruta }} </li>
</ul>
```
- stringyfica los Object cuando iteramos sobre ellos(remember acceder al objeto con .propiedad)

*es Reactivo!! si se modifica el objeto, angular automagicamente recarga componente con el contenido actualizado*
## *ngSwitch
- mirar docu o ejemplo

## [ngStyle]
- se puede usar con ternario + objeto style
- `[style.backgroundColor]="isActive ? 'green': 'red'"`
- shorthand `ngStyle`
- `*ngStyle=" { 'backgrundColor': 'yellow', 'color': 'red', 'font-size.px':'40' } "`
- `*ngStyle=" { 'backgrundColor': 'isActive' ? 'purple' : 'indigo' } "` con ternario
- *con func* en base al algun valor del obj
```html
<ul *ngFor="let fruta of frutas"  >
    <li [ngStyle]="{ 'color': getColor(fruta.precio) }"
    > {{ fruta.nombre }} </li>
</ul> 
```
```javascript
  getColor(peso) {
    switch (peso) {
      case 5:
        return 'yellow';
        break;
      default:
        return 'blue';
        break;
    }
  }
```

## [ngClass]
- Asignar clases dinamicamente a un elemento
- Syntax: `[ngClass]= { 'clase1': isActive, 'clase2': frutas.length > 5 }` 

## Generear directiva propia
```html
<input type="radio" name="colores" (click)="color='pink'">pink|
<div [appCambiarColor]= "color" > /div
```
- `ng g d NombreDirectiva`  
- se usa para modificar un elemento del dom
- se importa como si fuera un componente =
- _suscriptor a eventos del DOM_ `@HostListener('nombreevento')`
- en el elemento div se invoca sin ` [] `| para pasarle valor si se usa []
**!!ojo la directiva actua como un hijo del componente padre y se usa input y property binding
para intercambiar valores**
-----------------------------------
## Safe navigation Operator(operador de seguridad transversal)
_*Cannot reaD property x of undefined*_
- Que hacer? no mostrar si no existe(null| undefined) ; 
opcion `*ngIf="pers.trabajo"> {{ pers.trabajo.tel }} `
- *safeOperatoR*: ` {{ pers.trabajo?.tel }}`
```
 {{ pers.trabajo?.tel }}
```

-------------------------------------------
# Pipes

- Nos permite manipulaR / transformar datos(como los filtros de twig)
-  ` {{ pers.trabajo?.tel | number:'1.2-2' }}` significa 1digito.min2-max2 digitos
- `{{ dinero | currency:'USD' }}` / / `{{ dinero | date:'shortDate' }}` angular iO datePipe
- `ng g pipe NombrePipe` **crear pipe**
- se invoca en el html con el nombrePipe: parametros de la func `transform(valor:any , any?: any)`,; `{{ textoXej | nombrePipe: otrovalor }}`
```javascript
/*parametro opcional + ternario + default value */
    cualquierFunc(a: any, b: any, opcional? : any ){
      let opcionalDefault= (opcional) ? opcional : b ;
    }
```
- *se puede aplicar el pipe slice para controlar un bucle ngfor o directamente sobre la variable*; pej para lista grande con  _ver + _(paginacion). `<li *ngFor="let post of listaFakePosts.slice(0,10)>"`
```html
      <ul class="list-group"
        <li *ngFor="let post of listaFakePosts | slice :0:10" class="list-group-item">
          {{ post.title }}
        </li>
      </ul>
```


-------------------------------------------
# Dependency Injection
- en el _constructor()_
```javascript
  resultadosServicio1: any = [];/*declaracion */
  constructor(private servicio1: Servicio1Service){
    this.resultadosServicio1 = servicio1.getDatosFakeUsuario();
  }
```
-------------------------------------------
# Servicios
- `ng g s nombreServicio`
- Una clase normal a la que se le activa el "autowiring" de angular y se injecta en otros servicios/clases
- `@Injectable({
  providedIn: 'root'_(lvl aplicacion)_ | 'platform'_(lvl singleton)_ | 'any'_(lazyloading dnd se requiera)_
})`


-------------------------------------------
# Models + Observable<any>
- `ng g i nombreInterfaz`
- se usa para _Typear_ pej las interfaces en typeScript
- `Observable<Post[]>` === un observable con un array de objetos Post 


-------------------------------------------
# Consumiendo API (crud)
- *JSONPlaceholder/resources /post users etc*: https://jsonplaceholder.typicode.com/posts
- `HttpClient | HttpClientModule`https://angular.io/guide/http
```javascript
  /*Ojo JSONSTRINGYFY pra el body de post()*/
  createPost(p: FakePost):Observable<FakePost>{
      return this.http.post(this.defaultUrl, JSON.stringify(p));
  }
     this.listaActualizadaFP.splice(0,0, articulo);/*para pintarla*/
```
- chekear proyecto anfular8 Area servicios API POST
- PUT(envia el objeto entero a actualizar) / PATCH (se usa con atributos no el objeto entero)
```javascript
      this.listaActualizadaFP= this.listaActualizadaFP.filter((element) =>{
        /**retornamos todos los elementos del array menos el que borramos por el id */
        return element.id !== id;
      });
```

-----------------------------------------------
### lifecycle Hooks cuando el componente se inicialice
- class XXX implements OnInit
```javascript
export class Componente2Component implements OnInit {

  constructor() { console.log("componente creado"); }
  ngOnInit(): void {
    console.log("componente inicializado");
  }
```
------------------------------------------------------
# Error Handling
- el Observable puede dar error; en `.subscribe()` el 2ndo parametro es error
```javascript
      Observable.subscribe(
      response =>{
          console.log(response);
      },
      error =>{
        //podriamos loguearlo + mensage puede se HttpResponseError o cualkier tipo
        console.log("error happened!!"+error);
      });
```
- o implementarlo en el servicio declanrando un handler y referenciando con `.pipe()`
- necesitamos operador `catchError` desde `rxjs/operators` and `catchError` de `rxjs`
```javascript
import { catchError } from 'rxjs/operators';
...
  deletePost(id: number):Observable<any>{
      return this.http.delete(this.defaultUrl+'/'+id).pipe(
        catchError(this.miErrorHandler)
      );
  }
  private miErrorHandler(error:HttpErrorResponse){
    console.log("Error desde el servicio");
    return throwError(error);
  }
```
-----------------------------------------------------
