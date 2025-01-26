import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';
import {RouterModule, Routes} from "@angular/router";
import {MyLawListComponent} from "@app/law/my-law-list/my-law-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



const routes: Routes = [
  {
    path:'',
    redirectTo:'page',
    pathMatch:'full'

  },
  {
    path:'page',
    component:SettingComponent
  }
];

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingModule { }
