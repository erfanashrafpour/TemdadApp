import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {Route, RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "@app/auth-module/service/auth.service";
import { RegisterComponent } from './register/register.component';



const routes:Routes=[
  {redirectTo:'login',path:'',pathMatch:'full'},
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'}
]


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    AuthService
  ]

})
export class AuthModuleModule { }
