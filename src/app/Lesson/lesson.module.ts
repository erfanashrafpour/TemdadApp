import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

  },
  {path:'list',
    component:LessonListComponent
  }
];

@NgModule({
  declarations: [
    LessonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LessonModule { }
