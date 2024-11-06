import {Component, OnInit} from '@angular/core';
import {LessonService} from "@app/Lesson/service/lesson.service";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit{

    lessonList = [];

  
  constructor(private lessonService:LessonService) {
  }


  ngOnInit() {
    this.getLessonList()
  }

  getLessonList()
  {

      this.lessonService.GetLesson().subscribe(res=>{

            if (res.statusCode==200)
            {
              this.lessonList = res.data;

            }
      });


  }


}
