import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  constructor(private questionService:QuestionService , private activeRoute:ActivatedRoute , private cd :ChangeDetectorRef) {
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
choiceElement.forEach(item=>{
  item.nativeElement.children.item(1).classList.remove(...['checkedOption__true','checkedOption__false','unchecked__true'])
  item.nativeElement.children.item(0).checked = false
})


    this.finishQuestion = false
    this.changeRandomQuestion();
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

    this.timer =  20;//userResponce.Timer;
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval)
        this.showCorrectAnswer()
       // this.startTimer()
      }
    },1000)
  }

  stopTimer()
  {
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

  private showCorrectAnswer() {

    const choiceElement = [this.choiceAElement , this.choiceBElement , this.choiceCElement , this.choiceDElement];
    const choicesItem = [this.questionItem.ChoiceA , this.questionItem.ChoiceB , this.questionItem.ChoiceC , this.questionItem.ChoiceD];

    // const correctItem =  choicesItem.find((item)=>item.isCorrect==true);
    const correctIndex =  choicesItem.findIndex(
      item=>item.isCorrect==true);
    choiceElement[correctIndex].nativeElement.children.item(1)
      .classList.add('unchecked__true');
    this.finishQuestion = true;
    this.cd.detectChanges()
  }
}
