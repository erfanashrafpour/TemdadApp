import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LawService} from "@app/law/service/law.service";
import {Route, Router} from "@angular/router";
import {QuestionPageEnum} from "@app/question/question-page/question-page.component";

@Component({
  selector: 'app-my-law-list',
  templateUrl: './my-law-list.component.html',
  styleUrls: ['./my-law-list.component.scss']
})
export class MyLawListComponent implements OnInit{


  lawCategory =[];
   lawList = [];

constructor(private lawService:LawService,private cd:ChangeDetectorRef , private rouet:Router) {
}

  ngOnInit(): void {

  this.getLawCategoryList()
  }


  private deleteLaw(lawId)
  {

    this.lawService.DeleteLaw(lawId).subscribe(res=>{

      if (res.statusCode==200)
      {

        const index = this.lawList.findIndex((x) => x.Id === lawId);

        if (index !== -1) { // اگر آیتم پیدا شد
          this.lawList.splice(index, 1); // حذف آیتم
          this.cd.detectChanges()
        }


      }

    })

  }


  private getLawCategoryList() {

    this.lawService.GetLawCategory().subscribe(res=>{

      if (res.statusCode==200)
      {
        this.lawCategory = res.data;
        this.getLawList(this.lawCategory[0])
      }

    });
  }

  getLawList(lawCategoryTitle)
  {

    this.lawService.GetLawList(lawCategoryTitle).subscribe(res=>{

        if (res.statusCode==200)
        {
          this.lawList = res.data
        }

    })

  }

  changeLesson($event) {
    const categoryTitle = $event.target.value;

    this.getLawList(categoryTitle);
  }

  tasbit(item: any) {
    //this.rouet.navigateByUrl('main/question/questionPage/'+item.Id)
    //this.rouet.navigate([`main/question/questionPage/`+item.Id, { queryParams: { testType: 'law'}}]);
    this.rouet.navigateByUrl('main/question/questionPage/'+item.Title+'/'+QuestionPageEnum.LAW)

  }
}
