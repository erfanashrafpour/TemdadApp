import {Component, OnInit} from '@angular/core';
import {QuestionService} from "@app/question/service/question.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit{


  lessonCategoryId;

  questionList =[];
  questionItem:any
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


  }
}
