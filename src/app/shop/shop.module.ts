import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import {RouterModule, Routes} from "@angular/router";
import { BasketListBottomSheetComponent } from './basket-list-bottom-sheet/basket-list-bottom-sheet.component';


const routes:Routes =[
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

  },
  {
    path:'list/:name',
    component:ShopListComponent
  },
  {
    path:'list',
    component:ShopListComponent
  }
,


]


@NgModule({
  declarations: [
    ShopListComponent,
    BasketListBottomSheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ShopModule { }
