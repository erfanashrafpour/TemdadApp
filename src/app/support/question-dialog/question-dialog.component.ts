import {Component, Input, OnInit} from '@angular/core';
import {SupportService} from "@app/support/service/support.service";
import {RuleMatDialogComponent} from "@app/question/rule-mat-dialog/rule-mat-dialog.component";
import {Params, Route, Router} from "@angular/router";
import {AnswerBottomSheetComponent} from "@app/question/answer-bottom-sheet/answer-bottom-sheet.component";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit{

  @Input()questionId;

  questionItem =undefined;
  ngOnInit(): void {
    this.getQuestionById()
  }

  constructor(private supportService:SupportService , private matDBottomShit:MatBottomSheet , private route:Router , private ref :MatDialogRef<QuestionDialogComponent>) {
   }

  showLawReleated() {
    this.matDBottomShit.open(RuleMatDialogComponent,{

    }).instance.Rules=this.questionItem.laws

    const queryParams: Params = { myParam: 'myNewValue' };

    this.route.navigate([],{queryParams:queryParams})
  }

  showAnswerBottomSheet() {

    const instance = this.matDBottomShit.open(AnswerBottomSheetComponent,);
    instance.afterDismissed().subscribe(res=>{
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 5);
    })
    instance.instance.Answer=this.questionItem.Answer

    const queryParams: Params = { myParam: 'myNewValue' };

    this.route.navigate([],{queryParams:queryParams})
    // window.scrollTo({top:100000000})

  }


  getQuestionById()
  {

    this.supportService.GetTestById(this.questionId).subscribe(res=>{

      if (res.statusCode==200)
      {
          this.questionItem = res.data[0]
      }else {
this.close()
      }

    });

  }

  close() {
    this.ref.close();

  }
}
