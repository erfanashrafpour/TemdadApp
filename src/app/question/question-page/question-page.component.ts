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

  constructor(private questionService:QuestionService , private activeRoute:ActivatedRoute) {
  }


  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      this.lessonCategoryId = params['lessonCategoryId'];
      debugger
      this.getData()

    });
  }


  getData()
  {

    this.questionService.GetTestByLessonId(this.lessonCategoryId,0).subscribe(res=>{

    })


  }


}
