import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';
import {RouterModule, Routes} from "@angular/router";
import {LessonCategoryListComponent} from "@app/lesson-category/lesson-category-list/lesson-category-list.component";

const routes: Routes = [
   {
      path:'',
      redirectTo:'list',
      pathMatch:'full'

    },
  {path:'list',
    component:SubjectListComponent
  }
];

@NgModule({
  declarations: [
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubjectModule {}
