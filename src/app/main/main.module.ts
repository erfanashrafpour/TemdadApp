import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path:'',
    component:MainComponent,
    children:[
      {path:'',redirectTo:'lesson',pathMatch:"full"}
      ,
      {
        path:'lesson',
        loadChildren: () => import('../Lesson/lesson.module').then(m => m.LessonModule)
      },
      {
        path:'lessonCategory',
        loadChildren: () => import('../lesson-category/lesson-category.module').then(m => m.LessonCategoryModule)
      }
      ,
      {
        path:'question',
        loadChildren: () => import('../question/question.module').then(m => m.QuestionModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    TopBarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
