import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const routes : Routes = [
  {
    path: 'login' , 
    loadChildren: './login/login.module#LoginModule'
    /*esto le dice a angular que tiene subrutas y haga lazyloading*/
  },
  {
    path: 'home' , component : HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
