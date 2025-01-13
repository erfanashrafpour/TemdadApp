import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import {RouterModule, Routes} from "@angular/router";


const routes:Routes =[
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

  },
  {
    path:'list',
    component:ShopListComponent
  }


]


@NgModule({
  declarations: [
    ShopListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ShopModule { }
