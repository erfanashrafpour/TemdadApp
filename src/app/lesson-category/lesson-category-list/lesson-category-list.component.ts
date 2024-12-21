import {Component, OnInit} from '@angular/core';
import {LessonCategoryService} from "@app/lesson-category/service/lesson-category.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {QuestionPageEnum} from "@app/question/question-page/question-page.component";

@Component({
  selector: 'app-lesson-category-list',
  templateUrl: './lesson-category-list.component.html',
  styleUrls: ['./lesson-category-list.component.scss']
})
export class LessonCategoryListComponent implements OnInit{

  lessonCategoryList =[];
  lessonId = undefined;
   lessonName;

  constructor(private lessonCategoryService:LessonCategoryService , private activeRoute:ActivatedRoute , private route:Router) {
  }


  ngOnInit() {
  this.activeRoute.params.subscribe(params => {
      this.lessonId = params['lessonId'];
      this.lessonName = params['lessonName'];
    this.getLessonCategoryList()

  });


  }


  private getLessonCategoryList() {
    this.lessonCategoryService.GetLessonCategory(this.lessonId).subscribe(res=>{

      if (res.statusCode==200)
      {
        this.lessonCategoryList = res.data;
      }
    });

  }

  goToLessonList() {
    this.route.navigateByUrl('main/lesson')
  }

  goToTestingPage(lessonCategory) {
    this.route.navigateByUrl('main/question/questionPage/'+lessonCategory.Id+'/'+QuestionPageEnum.LEITNER)
  }
}
