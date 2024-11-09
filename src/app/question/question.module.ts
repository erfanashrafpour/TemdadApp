import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPageComponent } from './question-page/question-page.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {LessonCategoryListComponent} from "@app/lesson-category/lesson-category-list/lesson-category-list.component";


const routes: Routes = [
  /*  {
      path:'',
      redirectTo:'list',
      pathMatch:'full'

    },*/
  {path:'questionPage/:lessonCategoryId',
    component:QuestionPageComponent
  }
];
@NgModule({
  declarations: [
    QuestionPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionModule { }
