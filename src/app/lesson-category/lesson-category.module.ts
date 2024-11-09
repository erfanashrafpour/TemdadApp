import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LessonListComponent} from "@app/Lesson/lesson-list/lesson-list.component";
import { LessonCategoryListComponent } from './lesson-category-list/lesson-category-list.component';


const routes: Routes = [
/*  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

  },*/
  {path:'list/:lessonId/:lessonName',
    component:LessonCategoryListComponent
  }
];

@NgModule({
  declarations: [
    LessonCategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LessonCategoryModule { }
