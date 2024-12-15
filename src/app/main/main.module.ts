import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TopBarComponent} from './top-bar/top-bar.component';
import {MainComponent} from './main/main.component';
import {RightSideBarComponent} from './right-side-bar/right-side-bar.component';
import {LeftSideBarComponent} from './left-side-bar/left-side-bar.component';
import {NgClickOutsideDirective} from "ng-click-outside2";

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'lesson', pathMatch: "full"}
      ,
      {
        path: 'lesson',
        loadChildren: () => import('../Lesson/lesson.module').then(m => m.LessonModule)
      },
      {
        path: 'lessonCategory',
        loadChildren: () => import('../lesson-category/lesson-category.module').then(m => m.LessonCategoryModule)
      }
      ,
      {
        path: 'summery',
        loadChildren: () => import('../summery/summery.module').then(m => m.SummeryModule)
      }
      ,
      {
        path: 'question',
        loadChildren: () => import('../question/question.module').then(m => m.QuestionModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    TopBarComponent,
    MainComponent,
    RightSideBarComponent,
    LeftSideBarComponent
  ],
  imports: [
    CommonModule,
    NgClickOutsideDirective,
    RouterModule.forChild(routes),
  ]
})
export class MainModule {
}
