import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendTicketComponent } from './send-ticket/send-ticket.component';
import {RouterModule, Routes} from "@angular/router";
import {LessonListComponent} from "@app/Lesson/lesson-list/lesson-list.component";
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { SupportTabComponent } from './support-tab/support-tab.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'TicketList',
    pathMatch:'full'

  },
  {path:'sendTicket',
    component:SupportTabComponent
  },
  {path:'TicketList',
    component:SupportTabComponent
  }
];

@NgModule({
  declarations: [
    SendTicketComponent,
    TicketListComponent,
    SupportTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SupportModule { }
