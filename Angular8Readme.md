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
# Rutas

- nuervo modulo maybe?? aunque ya lo tengo en el project 
- docs: https://angular.io/guide/router \\ project 'EjemplosCodigo/rutas1'
```javascript
/*desde cli defaults; se podria importar a nivel de app el routing module; y hacer todo desde ahi aun asi parece que angular necesita un primer componente y para el routing 2*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, 
  // redirect to `first-component` or home
  { path: '**', component: PageNotFoundComponent }, 
];

// configures NgModule imports and exports
// puede ir en el import a nivel de app aki lo estamos usando en el componente AppComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```
```html
<h1>Angular Router App</h1>
<!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet></router-outlet>
```
- 'AppRoutingModule' no tiene vista como tal; es mas un entrypoint para los componentes_rutas
*_specific routes should be placed above less specific routes. List routes with a static path first, followed by an empty path route, which matches the default route. The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first."_*
- `pathMatch: "full"|| "prefix"` usado por el algoritmo de path matching; default es prefix.
!!ojo Wildcards
- `{ path: "**", component:"NotFound404" }` al final; ultima ruta
- `routerLink` *NO* recarga lapagina sino solo el componente y la ruta en el explorer para links
- si keremos *pasar paramentros* `[routerLink]="["/usuarios", 123]"`
-  varios parametros `[routerLink]="["/usuarios", 123, 2ndoparam]"` para la ruta path:"usuarios/:id/:2ndoparam"
- `routerLinkActive="active"` angular se encargara de activar la clase active de boostrap en el link-ruta que estemos __dinamicamente__
- 'ActivatedRoute' se injecta en el componente-ruta.ts  
```javascript
import { ActivatedRoute } from '@angular/router';
  paramID: number;
  constructor(private route: ActivatedRoute) { }
  /**route.paramMap devuelve un Observable; .subscribe*/
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      console.log(params);
      /** en params. keys son los parametros de la ruta pej :id del path*/
      /*para su valor hacemos y ya lo podriamos mostrar en la vista
      */
      this.paramID=params.get('id');
    });
  }
```
- Otra manera de pasar varios parametros por *GET*:
 `a href="#" [queryParams]="{ first:"test", second: usr.id }"` produciria un url:`#/?first=test&second=123`
 - se recuperan injectando route+ `this.route.queryParams.subscribe(params =>{
      console.log(params);
    });`
- con `.snapshot`: `this.route.snapshot.queryParamsMap.get("first");` asumiendo que sabemos los id de lo que viene por *GET* _DUH_

--------------------------------------------------------------------------------
```
ng g c --flat
/*da igual si componente o modulo solo creara el .ts
se suele usar para comvertir un compotne en subrutas
- recordar.forChild
*/
```
-----------------------------------------------------------------------
# lazy Loading + subrutas
- para no cargar modulo/componente al incio de la app ; solo cuando es invocado
- *+Performance* usando en combo con las rutas/sub-rutas ejemplo en"ejemploCodigo/lazy-loading+subrutas"
- `loadChildren:"./login/login.module#LoginModule"` y ahi se vuelve a declarar coinst routes="subrutas"
- `{ path:" ", children:[{path:" ", component: sub-rutaIndex }, { path:"subruta2",sub-ruta2 }] }`
- para _registrar las rutas_ desde login.module ojo forchild solo app-routing module lleva for root porke esta en el componente principal de la app
```javascript
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
```
- *hay que `ng serve` otra vez para ver los cambios en las sub rutas*

--------------------------------------------------
# Formularios TDF(templateDriven Forms)
- validaciones del lado de la vista vs ``REACTIVEForms`` qu ese validan desde el lado del componente
- necesitamos los labels y los id+ name + importar FromsModule + templateVariable(#)= directiva
- `#formulario1="ngForm"` tal cual en el tag del form
```html
        <form #miform1="ngForm">
          /*OJO este pipe de JSON :D
          Como esta con 2waydatabinding segun escribimos muestra
          */
          {{ miform1.value | json }}
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input ngModel class="form-control"type="text" name="nombre" id="nombre"/>
          </div>
          <hr>
        </form >
```
- para mostrar info en el formulario al cargarlo pero ya tenemos el data binding hecho ya pero nos faltaria bindear con el objeto el el lado de TS: 
```html
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input [(ngModel)]="usuario.nombre" class="form-control"type="text" name="nombre" id="nombre"/>
          </div>
```
- /*se agregan clases agregadas por defecto en cada campo del los forms(pares)*/
- `ng-touched`: valor que hay en el campo ha sido *tocado(click)* por el usuario; no: `ng-untouched`
- `ng-dirty`: cambio valor -- `ng-pristine`: valor intacto
- `ng-valid` : default; valida field -- `ng-invalid` pej con html `required`
- *Listar clases de un elemento html(#elementName name="elementName"):* `{{ elementName.className }}`; si bindeamos a ``ngModel`` es decir`#nombreElemento="ngModel"` `{{ elementName.pristine/.valid }}` devolvera booleando porque ya estariamos usando las props de la directiva.
## Mensajes de error con class Binding
- `[class.is-invalid]="mail.invalid"` se bindea la clase de bootstap ya predefinida `is-invalid`
- `minlength="9"` tamaño minimo
- para mostrar mensajes de error:misma condicion + tag small danger
```html
/***mostramos un elemento con la directiva *ngIf*/
            <input  
            [class.is-invalid]="mail.invalid&&mail.touched"
            #mail="ngModel"
            required
            [(ngModel)]="form1Usuario.mail" class="form-control"type="text" 
            name="mail" id="mail"/>
            <small class="text-danger"
              *ngIf="mail.invalid&&mail.touched"
              >Nombre-Invalido!!!!!</small>
```
```html
            <div *ngIf="mail.errors &&(mail.touched || mail.invalid)">errores aki
              <small class="text-danger"
              *ngIf="mail.errors.required"
              >Requerido!!! no puede ir vacio!!!</small>
              <small class="text-danger"
              *ngIf="mail.errors.minlength"
              >Demasiado corto!!!!Minimo5!</small>
            </div>
```
## Enviar datos (ngSubmit)
```html
  <form #miform1="ngForm" (ngSubmit)="miform1">
    <button 
            [disabled]="!miform1.valid"
            type="submit" class="btn btn-success w-50 ">Enviar</button>
```
```javascript
  onSubmit(formulario){
    console.log(formulario);
        /**aqui tenemos los datos en json y podemos usar 
     * un servicio para hacerle post al server */
  }
```