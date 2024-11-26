import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuestionService} from "@app/question/service/question.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "@environments/environment";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit{

  @ViewChild('choiceA') choiceAElement : ElementRef;
  @ViewChild('choiceB') choiceBElement: ElementRef;
  @ViewChild('choiceC') choiceCElement: ElementRef;
  @ViewChild('choiceD') choiceDElement: ElementRef;


  finishQuestion:boolean = false;
  lessonCategoryId;
timer;
  questionList =[];
  questionItem:any;
  private interval;
  constructor(private questionService:QuestionService , private activeRoute:ActivatedRoute) {
  }


  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      this.lessonCategoryId = params['lessonCategoryId'];

      this.getData()

    });
  }


  getData()
  {

    this.questionService.GetTestByLessonCategoryId(this.lessonCategoryId,0).subscribe(res=>{

        if (res.statusCode==200)
        {

            this.questionList = res.data;
            this.questionItem = this.questionList[0];

            this.questionItem.ChoiceA = {text:this.questionItem.ChoiceA,isCorrect:true}
            this.questionItem.ChoiceB = {text:this.questionItem.ChoiceB,isCorrect:false}
            this.questionItem.ChoiceC = {text:this.questionItem.ChoiceC,isCorrect:false}
            this.questionItem.ChoiceD = {text:this.questionItem.ChoiceD,isCorrect:false}


            this.startTimer()




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
    }

    this.setQuestion();

  }


  setQuestion()
  {
    this.changeRandomQuestion();
    this.startTimer();



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

    const userResponce = JSON.parse(localStorage.getItem(environment.USER_PASS));
    this.timer =  20;//userResponce.Timer;
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.timer)

       // this.startTimer()
      }
    },1000)
  }

  clickChoice(Choice: any) {

    console.log("kir")

this.setAnswer(Choice)
   // debugger;



  }


  setAnswer(clickChoiceText)
  {
   const choiceElement = [this.choiceAElement , this.choiceBElement , this.choiceCElement , this.choiceDElement];
   const choicesItem = [this.questionItem.ChoiceA , this.questionItem.ChoiceB , this.questionItem.ChoiceC , this.questionItem.ChoiceD];

        // const correctItem =  choicesItem.find((item)=>item.isCorrect==true);
         const correctIndex =  choicesItem.findIndex((item)=>item.isCorrect==true);


            choiceElement[correctIndex].nativeElement.children.item(1)
            .classList.add('unchecked__true');

            this.finishQuestion = true;


      //item.children.item(1).classList.add('unchecked__true')



    if (clickChoiceText == this.questionItem.correctAnswer)
    {


    }


  }

}
