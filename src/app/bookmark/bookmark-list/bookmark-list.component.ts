import {Component, OnInit} from '@angular/core';
import {BookmarkService} from "@app/bookmark/service/bookmark.service";
import {Route, Router} from "@angular/router";
import {QuestionPageEnum} from "@app/question/question-page/question-page.component";

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent  implements OnInit{
  categoryList =[];
  bookmarkList = [];
  private lessonId;
  constructor(private bookmarkService:BookmarkService , private route:Router) {
  }



  ngOnInit() {

    this.getCategory()


  }


  changeCategoryItem($event) {

    this.lessonId = $event.target.value;
    this.getData()
  }

  private getCategory() {
    this.bookmarkService.GetBookmarkCategory().subscribe(res=>{

      if (res.statusCode==200)
      {
        this.categoryList = res.data
        this.lessonId = this.categoryList[0].Id;
        this.getData()

      }

    })
  }

  private getData()
  {
    this.bookmarkService.GetProductBookmark(this.lessonId).subscribe(res=>{

      if (res.statusCode==200)
      {
        this.bookmarkList = res.data

      }

    })
  }


  goToQuestion(product: any) {

    this.route.navigateByUrl('main/question/questionPage/'+product.Id+'/'+QuestionPageEnum.BOOKMARK)

  }

  goToQuestionRandom() {
    this.route.navigateByUrl('main/question/questionPage/'+this.lessonId+'/'+QuestionPageEnum.BOOKMARK_RANDOM)
  }
}
