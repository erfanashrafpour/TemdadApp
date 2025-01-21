import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "@app/question/service/question.service";

@Component({
  selector: 'app-send-ticket-bottom-sheet',
  templateUrl: './send-ticket-bottom-sheet.component.html',
  styleUrls: ['./send-ticket-bottom-sheet.component.scss']
})
export class SendTicketBottomSheetComponent implements OnInit{

  @Input()testNumber;
  @Input()productTitle;
  @Input()CategoryTitle;

  constructor(private questionService:QuestionService) {
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

}
