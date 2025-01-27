import {Component, OnInit} from '@angular/core';
import {SubjectService} from "@app/subject/services/subject.service";
import {QuestionPageEnum} from "@app/question/question-page/question-page.component";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent  implements OnInit{

  categoryList =[];
   subjectList =[];


  constructor(private subjectService:SubjectService , private route:Router) {
  }


  ngOnInit(): void {

    this.getSubjectCategory()


  }


  changeLesson($event) {
    const value = $event.target.value;
    this.getSubjectListByCategoryId(value)

  }

  private getSubjectCategory() {
    this.subjectService.GetSubjectCategory().subscribe(res=>{

      if (res.statusCode==200)
      {
        this.categoryList = res.data
        this.getSubjectListByCategoryId(this.categoryList[0].Id)
      }

    })
  }


  private getSubjectListByCategoryId(categoryId) {
    this.subjectService.GetSubjectByCategoryId(categoryId).subscribe(res=>{

      if (res.statusCode==200)
      {
        this.subjectList = res.data
      }

    })
  }


  routeToQuestionList(item: any) {
    this.route.navigateByUrl('main/question/questionPage/'+item.Title+'/'+QuestionPageEnum.SUBJECT)

  }
}
