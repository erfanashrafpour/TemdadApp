import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuestionService} from "@app/question/service/question.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {environment} from "@environments/environment";
import {MatDialog} from "@angular/material/dialog";
import {RuleMatDialogComponent} from "@app/question/rule-mat-dialog/rule-mat-dialog.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {AnswerBottomSheetComponent} from "@app/question/answer-bottom-sheet/answer-bottom-sheet.component";


export enum QuestionPageEnum {
  LEITNER ,
  LAW,
  LEITNER_RANDOM,



}

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit , AfterViewInit{

  @ViewChild('choiceA') choiceAElement : ElementRef;
  @ViewChild('choiceB') choiceBElement: ElementRef;
  @ViewChild('choiceC') choiceCElement: ElementRef;
  @ViewChild('choiceD') choiceDElement: ElementRef;


  finishQuestion:boolean = false;
  lessonCategoryId;
  questionType:QuestionPageEnum = QuestionPageEnum.LEITNER;
  timer;
  paging = 0;
  allCountTest = undefined;
  questionList =[];
  questionItem:any;
  private interval;


  configForLitner = false;

  constructor(private questionService:QuestionService , private activeRoute:ActivatedRoute
              , private cd :ChangeDetectorRef,private matDBottomShit:MatBottomSheet
              , private route:Router) {
  }



  ngAfterViewInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params)
      this.lessonCategoryId = params['lessonCategoryId'];
      this.questionType = Number(params['questionType']);

      this.getData()
      this.setConfig()

    });

  }

  ngOnInit(): void {


  }


  getData()
  {

    let selectedService ;

    switch(this.questionType)
    {

      case QuestionPageEnum.LEITNER: {
        selectedService = this.questionService.GetTestByLessonCategoryId(this.lessonCategoryId,this.paging);
        break;
      }
      case QuestionPageEnum.LAW:{
        selectedService = this.questionService.GetTestByLaw(this.lessonCategoryId,this.paging);
        break;
      }
      case QuestionPageEnum.LEITNER_RANDOM:{
        selectedService = this.questionService.GetTestRandom(this.lessonCategoryId,this.paging);
        break;
      }


    }


    selectedService.subscribe(res=>{

        if (res.statusCode==200)
        {
            this.questionList = res.data;
            this.questionItem = this.questionList[0];
            this.allCountTest = res.meta.Count
          this.setQuestion();
        }

    })


  }


  findIndexList() {
     return this.questionList.findIndex(item=>item.Id==this.questionItem.Id)
  }

  nextQuestion() {
    console.log("x")
    if (this.findIndexList()==this.questionList.length-1)
    {

      return;
    }else {

      this.questionItem = this.questionList[this.findIndexList()+1];
      this.cd.detectChanges()
    }

    this.setQuestion();

  }


  setQuestion()
  {

    this.questionItem.ChoiceA = {text:this.questionItem.ChoiceA,isCorrect:true,choiceString:'a'}
    this.questionItem.ChoiceB = {text:this.questionItem.ChoiceB,isCorrect:false,choiceString:'b'}
    this.questionItem.ChoiceC = {text:this.questionItem.ChoiceC,isCorrect:false,choiceString:'c'}
    this.questionItem.ChoiceD = {text:this.questionItem.ChoiceD,isCorrect:false,choiceString:'d'}
   // const t : HTMLInputElement;
    const choiceElement = [this.choiceAElement , this.choiceBElement , this.choiceCElement , this.choiceDElement];

    if (this.findIndexList()!=0)
    choiceElement.forEach(item=>{


  item?.nativeElement?.children.item(1).classList.remove(...['checkedOption__true','checkedOption__false','unchecked__true'])
  item.nativeElement.children.item(0).checked = false

});


    this.finishQuestion = false
    this.changeRandomQuestion();
    if (this.configForLitner)
    this.startTimer();
    this.cd.detectChanges()



  }

  changeRandomQuestion()
  {


    let keysToShuffle = ['ChoiceA','ChoiceB','ChoiceC','ChoiceD'];
    this.questionItem.correctAnswer = this.questionItem.ChoiceA;

    let values = keysToShuffle.map(key=>this.questionItem[key]);

    for (let i = values.length-1 ;i>0;i--)
    {
      let j = Math.floor(Math.random()*(i+1));
      [values[i],values[j]] =[values[j],values[i]];
    }
    keysToShuffle.forEach((key,index)=>{
      this.questionItem[key] = values[index];
    })
  }


  startTimer() {

    this.stopTimer()
    this.timer =  20;//userResponce.Timer;

    this.interval = setInterval(() => {
      if(this.timer > 0) {

        this.timer--;
      } else {
       // clearInterval(this.interval)
        this.timer=0
        this.showCorrectAnswer()
       // this.startTimer()
      }
    },1000)
  }

  stopTimer()
  {
    if (this.interval)
    clearInterval(this.interval)
  }

  clickChoice(Choice: any, choiceElement: ElementRef) {


    this.setAnswer(Choice,choiceElement)
    this.stopTimer()
    this.sendAnswer(Choice.choiceString)
   // debugger;



  }


  sendAnswer(choice:'a'|'b'|'c'|'d'|'0')
  {

    this.questionService.sendAnswerResult(this.questionItem.Id,choice).subscribe(res=>{
      if (res.statusCode==200 && choice=='a')
      {
        this.allCountTest--;
      }

    })
  }


  setAnswer(choiceClicked, choiceClickElement: ElementRef)
  {
    const choiceElement = [this.choiceAElement , this.choiceBElement , this.choiceCElement , this.choiceDElement];
    const choicesItem = [this.questionItem.ChoiceA , this.questionItem.ChoiceB , this.questionItem.ChoiceC , this.questionItem.ChoiceD];

    // const correctItem =  choicesItem.find((item)=>item.isCorrect==true);
    const correctIndex =  choicesItem.findIndex(
      item=>item.isCorrect==true);



         //اگر جواب کاربر درست بود
         if (choiceClicked.isCorrect) {
           choiceElement[correctIndex].nativeElement.children.item(1)
             .classList.add('checkedOption__true');
         }else {

           choiceClickElement.nativeElement.children.item(1)
             .classList.add('checkedOption__false');

           choiceElement[correctIndex].nativeElement.children.item(1)
             .classList.add('unchecked__true');
         }



            this.finishQuestion = true;
            this.cd.detectChanges()

      //item.children.item(1).classList.add('unchecked__true')



 /*   if (clickChoiceText == this.questionItem.correctAnswer)
    {


    }
*/

  }


  setBookMark(Id: any, Favorite: any)
  {
    return this.questionService.SetBookMark(Id,Favorite).subscribe(res=>{
      if (res.statusCode==200)
      {
        this.questionItem.Favorite = Favorite
      }
    })
  }

  private showCorrectAnswer() {

    const choiceElement = [this.choiceAElement , this.choiceBElement , this.choiceCElement , this.choiceDElement];
    const choicesItem = [this.questionItem.ChoiceA , this.questionItem.ChoiceB , this.questionItem.ChoiceC , this.questionItem.ChoiceD];

    // const correctItem =  choicesItem.find((item)=>item.isCorrect==true);
    const correctIndex =  choicesItem.findIndex(item=>item.isCorrect==true);
    choiceElement[correctIndex].nativeElement.children.item(1)
      .classList.add('unchecked__true');
    this.finishQuestion = true;
    this.cd.detectChanges()
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

  private setConfig() {

    switch (this.questionType)
    {
      case QuestionPageEnum.LAW:this.configForLitner = false;break;
      case QuestionPageEnum.LEITNER:this.configForLitner = true;break;
      case QuestionPageEnum.LEITNER_RANDOM:this.configForLitner = true;break;


    }



  }
}
