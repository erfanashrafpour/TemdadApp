import {Component, OnInit} from '@angular/core';
import {LessonCategoryService} from "@app/lesson-category/service/lesson-category.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-lesson-category-list',
  templateUrl: './lesson-category-list.component.html',
  styleUrls: ['./lesson-category-list.component.scss']
})
export class LessonCategoryListComponent implements OnInit{

  lessonCategoryList =[];
  lessonId = undefined;

  constructor(private lessonCategoryService:LessonCategoryService , private route:ActivatedRoute) {
  }


  ngOnInit() {
  this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];
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
}
