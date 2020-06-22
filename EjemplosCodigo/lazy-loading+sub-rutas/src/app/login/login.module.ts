import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent, UsuariosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    /** OJO */
  ]
})
export class LoginModule { }
