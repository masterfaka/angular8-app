import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    usuario = {
      nombre : 'Henry',
      phone : '123456789',
      mensaje: 'Este es un mensaje...'
    }


    onSubmit(usuarioForm){
      console.log(usuarioForm.value);

      if(usuarioForm.valid){
         //this.service.enviarDatos(usuarioForm.value).subscribe(res => console.log(res));
      }
    }
}
