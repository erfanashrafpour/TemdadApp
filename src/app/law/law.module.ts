import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLawListComponent } from './my-law-list/my-law-list.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {LessonListComponent} from "@app/Lesson/lesson-list/lesson-list.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

  },
  {path:'list',
    component:MyLawListComponent
  }
];

@NgModule({
  declarations: [
    MyLawListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LawModule { }
