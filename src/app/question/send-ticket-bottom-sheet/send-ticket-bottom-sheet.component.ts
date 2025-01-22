import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "@app/question/service/question.service";
import {MatDialog} from "@angular/material/dialog";
import {TicketListComponent} from "@app/support/ticket-list/ticket-list.component";
import {TicketListDialogComponent} from "@app/question/ticket-list-dialog/ticket-list-dialog.component";
import {Location} from "@angular/common";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-send-ticket-bottom-sheet',
  templateUrl: './send-ticket-bottom-sheet.component.html',
  styleUrls: ['./send-ticket-bottom-sheet.component.scss']
})
export class SendTicketBottomSheetComponent implements OnInit{

  @Input()testNumber;
  @Input()productTitle;
  @Input()CategoryTitle;

  constructor(private questionService:QuestionService , private matDialog:MatDialog , private location:Location , private bottomShhet:MatBottomSheetRef<SendTicketBottomSheetComponent>) {
  }

  ngOnInit(): void {





  }


  sendTicket(value: string) {

      this.questionService.SendMessage(this.getDefaultString(),value).subscribe(res=>{

        if (res.statusCode==200){




        }

      });

  }


  getDefaultString()
  {
   return  this.productTitle+'-'+this.CategoryTitle+'-'+'تست شماره:'+this.testNumber;
  }

  openTicketingList() {
    this.matDialog.open(TicketListDialogComponent,{maxWidth:'97vw',height:'90vh',panelClass:'custom-container'})
  }
}
