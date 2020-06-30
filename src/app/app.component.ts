import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from './servicio1.service';
import { fakePostsCrudService } from './fake-posts-crud.service';
import { FakePost } from './models/fake-post';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Form2Validator } from './form2.validators';

/* decorador */
@Component({
  /* angular selector */
  selector: 'app-root',
  /* si el selector es template a secas puede ser inline*/
  templateUrl: './app.component.html',
  /* styles aunque con templte puede ser inline 
  !!ojo array
  */
  styleUrls: ['./app.component.sass'],
/**aki los servicios injectados solo en este componente */
  providers:[
    
  ]

})

export class AppComponent implements OnInit{
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
/**Injection de Dependencias(1 servicio pej) */
  resultadosServicio1: any = [];/*declaracion */
  listaFakePosts: FakePost[]= [];
  /**lo mismo ke
   * listaFakePosts: Array<FakePost >= [];
  */
  constructor(
    private servicio1: Servicio1Service,
    private sFakePosts: fakePostsCrudService, 
    private _fb: FormBuilder
    ){
    this.resultadosServicio1 = servicio1.getDatosFakeUsuario()
  }
  ngOnInit() {
    /**el observable shay que consumirlo con .subscribe arrow function */
    this.sFakePosts.getPosts().subscribe(response =>{
      /*disponemos de los datos al iniciar  el componente y consumir*/
      this.listaFakePosts= response;
      this.listaActualizadaFP=  this.listaFakePosts.slice(this.listaFakePosts.length-5,this.listaFakePosts.length);

    });
  }
  /**paginacion lista posts  sabemos ke solo hay 100*/
  sliceRange= {
    min: 0,
    max: 10
  };
  paginarListaAtras(){
    this.sliceRange.min -=10;
    this.sliceRange.max -=10;

  }
  paginarListaAlante(){
    if (this.sliceRange.max < this.listaFakePosts.length) {
      this.sliceRange.min +=10;
      this.sliceRange.max +=10;
    }else{alert("Superas el limite de la lista: "+this.listaFakePosts.length);}
  }
  listaActualizadaFP:Array<FakePost> =[];

  crearPost(name:HTMLInputElement, body:HTMLInputElement){
    let articulo: FakePost={
      title: name.value,
      body: body.value
    }
    this.sFakePosts.createPost(articulo).subscribe(
      response =>{
      /**la API nos devuelve un id, si todo ha ido bien
       * completaremos el objeto, luego la lista y mostramos en pantalla
       */
      articulo.id= response.id;/**o tambien articulo['id']= response['id'] */
      },
      error =>{
        //podriamos loguearlo + mensage puede se HttpResponseError o cualkier tipo
       /* console.log("error happened!!");
        console.log(error);
*/
      }
    );
    //cons .splice  o unshift agregamos al principio de la lista
    this.listaActualizadaFP.splice(0,0, articulo);
    /**actualizamos campos de foprmulario por si keremos meter
    mas y para ello teniamos ke haberle pasado los elmentos del DOM*/
    body.value="";
  }
  /*borrar post*/
  borrarPost(id: number){
    this.sFakePosts.deletePost(id).subscribe(resp =>{
      /**el server nos devuelve un obj vacio pero deberia de haber borrado el item
       * para no volver a consultar hacemos la logica solo para la vista
       */
      /**se podria hacer con array.splice si le pasamos todo el post a la func
       * principal, pero aki no lo hemos hecho y 
       * podemos usar filter(que parece mas lenta)
       */
      this.listaActualizadaFP= this.listaActualizadaFP.filter((element) =>{
        /**retornamos todos los elementos del array menos el que borramos por el id */
        return element.id !== id;
      });

    });
  }
  /***
   * FORMULARIO*************************/
  form1Usuario={
    nombre: "pepito",
    telefono: "123456",
    mail:"algo@ejemplo.org", 
    comentario:"sin Coments"
  };
  onSubmit(miform1){
    console.log(miform1);
  }
  /**Form2
   * da problemas si no declaramos del lado del componente 
   * el nombre del fomrulario  bindeado?¿?
   * hay que importar import { FormGroup } from "@angular/forms"; + incializarlo con 1 obj
   */
  miFormulario2= new FormGroup({
    /*primero los controles: campos; se usa el mismo nombre que 
    le hemos dado con fomrControlName 
    se puede inicializar a algun valor*/
    /**para valios validadores se usa un array */
    nombreF2: new FormControl('', Validators.required),
    passF2: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Form2Validator.sinBlackSpaces
    ])
  });
  get passF2(){
    return this.miFormulario2.get('passF2');
  }
  mostrarElement(){
    console.log(this.miFormulario2.get('passF2'));
  }
  /**from3 con formBuilder */
  miFormulario3= this._fb.group({
    /*primero los controles: campos; se usa el mismo nombre que 
    le hemos dado con fomrControlName 
    se puede inicializar a algun valor*/
    /**para valios validadores se usa un array */
    nombreF3: ['', Validators.required],
    passF3: ['', [
      Validators.required,
      Validators.minLength(3),
      Form2Validator.sinBlackSpaces
    ]]
  });
  get passF3(){
    return this.miFormulario3.get('passF3');
  }
}
