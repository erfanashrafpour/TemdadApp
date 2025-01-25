import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import {NgbCalendar, NgbCalendarPersian, NgbDatepickerI18n, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import {QuestionPageComponent} from "@app/question/question-page/question-page.component";
import {NgbDatepickerI18nPersian} from "@app/_core/_config/persian-datepicker.config";


const routes: Routes = [
    {
      path:'',
      redirectTo:'plan',
      pathMatch:'full'

    },
    {path:'plan',
    component:PlanComponent
  }
];

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)

  ],
  providers:[
    {provide: NgbCalendar, useClass: NgbCalendarPersian},

    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian},
  ]
})
export class PlanningModule { }
