import {Component, OnInit} from '@angular/core';
import {LessonService} from "@app/Lesson/service/lesson.service";
import {LessonCategoryService} from "@app/lesson-category/service/lesson-category.service";
import {Route, Router} from "@angular/router";
import {QuestionPageEnum} from "@app/question/question-page/question-page.component";
import {UserRepository} from "@app/_core/Helper/UserRepository";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit{
   lessonList = [];
     isRandom = UserRepository.GetRandomActive();
     isPlanActive = UserRepository.GetPlanActive();
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
            UserRepository.GetNewUserModel();

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
        UserRepository.GetNewUserModel();

      }

    });

  }


  getColorTop(index)
  {
const color = ['#6770E5', '#F2A365', '#6BCB77', '#4AA96C', '#FFD460', '#FF6B6B', '#4D96FF', '#8854D0', '#E63946', '#264653', '#F4A261', '#E9C46A', '#2A9D8F', '#A8DADC', '#1D3557', '#F76C6C']
return color[index]

  }


  clickOnLesson(lesson: any) {
    if (!this.isRandom) {
      this.rote.navigateByUrl('main/lessonCategory/list/' + lesson.Id + '/' + lesson.Name)
    }
    else {
      this.rote.navigateByUrl('main/question/questionPage/'+lesson.Id+'/'+QuestionPageEnum.LEITNER_RANDOM)

    }
  }

  getPlanActive() {

    UserRepository.GetPlanActive();


  }

  getRandomActive()
  {
    UserRepository.GetRandomActive();
  }

}
