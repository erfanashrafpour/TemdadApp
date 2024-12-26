import {Component, OnInit} from '@angular/core';
import {SubjectService} from "@app/subject/services/subject.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent  implements OnInit{

  categoryList =[];
   subjectList =[];


  constructor(private subjectService:SubjectService) {
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


}
