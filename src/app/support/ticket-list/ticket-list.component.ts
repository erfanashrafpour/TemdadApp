import {Component, OnInit} from '@angular/core';
import {SupportService} from "@app/support/service/support.service";
import {MatDialog} from "@angular/material/dialog";
import {QuestionDialogComponent} from "@app/support/question-dialog/question-dialog.component";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit{


  ticketList=[];

  constructor(private supportService : SupportService , private matDialog :MatDialog) {
  }



  ngOnInit(): void {
    this.getTicketList()
  }


  setRegex(item:string):{packageNumber:any,title:any,testNumber:any,questionText}
  {

   // item= 'پرسش 1 : حقوق مدنی-بسته 1-تست شماره: 21247  سلام ممنونم';
   // const text = "پرسش ۱ : بسته ۲-حقوق تجارت-تست شماره:۲۷۲۷۲ هر متنی ممکن است";
    const pattern = /بسته\s*(\d+)-([^-\n]+)-تست\s*شماره:\s*(\d+).*/;
    const patterntext = /بسته\s*\d+-[^-\n]+-تست\s*شماره:\s*\d+/;

    const matches = item.match(pattern);

    if (matches) {
      const packageNumber = matches[1]; // شماره بسته
      const title = matches[2];        // عنوان
      const testNumber = matches[3];   // شماره تست
      //const x = matches[4];
     // const y= matches[0];
   //   const updatedText = item.replace(patterntext, "").replace(/\s{2,}/g, " ").trim();
//debugger
      return {
        packageNumber:packageNumber,
        title:title,
        testNumber:testNumber,
        questionText:item.replace(patterntext, "").trim()
      };

    } else {
      return {
        packageNumber:'',
        title:'',
        testNumber:'',
        questionText:item
      };    }


  }


  getTicketList()
  {
        this.supportService.GetTicketApi().subscribe(res=>{

          if (res.statusCode==200)
          {
            this.ticketList = res.data;

            const templateList = [];

            this.ticketList.forEach(item=>{
              const value ={
                question:undefined,
                answer:undefined,
                time:undefined,
                id:undefined,
                questionId:undefined,
                isVisited:undefined,
                hasAnswer:false,
                //////////
                packageNumber :undefined,
                packageTitle:undefined,
                testNumber:undefined
              }

              //value.question = item.ConversationQuestionAndAnswer[0].ConversationText;
              value.time = item.ConversationQuestionAndAnswer[0].CreationOn;
              value.questionId = item.ConversationQuestionAndAnswer[0].QuestionId;;
              value.id = item.TicketId;
              value.isVisited = item.IsVisitedBuUserTicket;

              if (item.ConversationQuestionAndAnswer.length==2) {
                value.answer = item.ConversationQuestionAndAnswer[1].ConversationText;
                value.hasAnswer = true;
              }

              const regexGet = this.setRegex(item.ConversationQuestionAndAnswer[0].ConversationText)
              value.packageNumber = regexGet.packageNumber
              value.packageTitle = regexGet.title
              value.testNumber = regexGet.testNumber
              value.question = regexGet.questionText

              templateList.push(value)

            });

                this.ticketList = templateList;

          }


        });



  }




  closeOpenAnswer(itemQuestionAnswer: HTMLDivElement) {



    itemQuestionAnswer.classList.toggle('close')



  }

  showQuestion(questionId: any) {
   // item.questionId
   const matDialog = this.matDialog.open(QuestionDialogComponent,{width:'99vw',maxWidth:'99vw'})
    matDialog.componentInstance.questionId = questionId;
  }
}
