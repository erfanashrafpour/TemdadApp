import {Component, OnInit} from '@angular/core';
import {LessonService} from "@app/Lesson/service/lesson.service";
import {LessonCategoryService} from "@app/lesson-category/service/lesson-category.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit{
   lessonList = [];
    private isRandom = false;
    private isPlanActive = false;
  constructor(private lessonService:LessonService,private lc:LessonCategoryService,private rote:Router) {
  }


  ngOnInit() {
    this.getLessonList()
    this.lc.GetLessonCategory(1).subscribe(res=>{})

  }

  getLessonList()
  {
        this.lessonList =[];
      this.lessonService.GetLesson().subscribe(res=>{

        if (res.statusCode==200)
        {
          this.lessonList = res.data
        }


      })


  }

  setRandom(isRandom)
  {
    this.lessonService.SetRandom(isRandom).subscribe(res=>
    {
          if (res.statusCode==200)
          {
            this.getLessonList()
          }

    });
  }


  changeRandom($event) {

    this.isRandom = $event.target.checked;
    this.setRandom(this.isRandom)

  }

  changePlanActive($event) {
    this.isPlanActive = $event.target.checked;
    this.setPlan(this.isPlanActive);

  }

  private setPlan(isPlanActive) {

    this.lessonService.SetPlan(isPlanActive).subscribe(res=>
    {
      if (res.statusCode==200)
      {
        this.getLessonList()
      }

    });

  }


  getColorTop(index)
  {

    if (index==0)
    {
      return 'purple'
    }

    if (index%2==0)
    {
      return 'green'
    }

    if (index%2==1)
    {
      return 'blue'
    }
    if (index%2==3)
    {
      return 'purple'
    }

  }


  clickOnLesson(lesson: any) {
        this.rote.navigateByUrl('main/lessonCategory/list/'+lesson.Id+'/'+lesson.Name)
  }
}
