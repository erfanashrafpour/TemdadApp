import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummeryListComponent } from './summery-list/summery-list.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {LessonCategoryListComponent} from "@app/lesson-category/lesson-category-list/lesson-category-list.component";
import { SummeryItemComponent } from './summery-item/summery-item.component';
import { SummaryLawDialogComponent } from './summery-item/summary-law-dialog/summary-law-dialog.component';




const routes: Routes = [
    {
      path:'',
      redirectTo:'productList',
      pathMatch:'full'

    },
  {path:'productList',
    component:SummeryListComponent
  },
  {path:'summeryItem/:productId',
    component:SummeryItemComponent
  }
];


@NgModule({
  declarations: [
    SummeryListComponent,
    SummeryItemComponent,
    SummaryLawDialogComponent
  ],
  exports: [
    SummeryListComponent
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SummeryModule { }
