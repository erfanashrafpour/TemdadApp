import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPageComponent } from './question-page/question-page.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {LessonCategoryListComponent} from "@app/lesson-category/lesson-category-list/lesson-category-list.component";
import {MatDialogModule} from "@angular/material/dialog";
import { RuleMatDialogComponent } from './rule-mat-dialog/rule-mat-dialog.component';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { AnswerBottomSheetComponent } from './answer-bottom-sheet/answer-bottom-sheet.component';
import { SendTicketBottomSheetComponent } from './send-ticket-bottom-sheet/send-ticket-bottom-sheet.component';
import { TicketListDialogComponent } from './ticket-list-dialog/ticket-list-dialog.component';


const routes: Routes = [
  /*  {
      path:'',
      redirectTo:'list',
      pathMatch:'full'

    },*/
  {path:'questionPage/:lessonCategoryId/:questionType',
    component:QuestionPageComponent
  }
];
@NgModule({
  declarations: [
    QuestionPageComponent,
    RuleMatDialogComponent,
    AnswerBottomSheetComponent,
    SendTicketBottomSheetComponent,
    TicketListDialogComponent
  ],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        RouterModule.forChild(routes),
    ]
})
export class QuestionModule { }
