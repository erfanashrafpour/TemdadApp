import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";

const  GET_MY_BOOKMARK_CATEGORY = environment.BASE_URL+"Bookmark/GetMyCategoriesBookmark";
const  GET_PRODUCT_OF_MY_BOOKMARK = environment.BASE_URL+"MyTest/GetProductsForBookmarks";



@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private httpClient : HttpClient) { }



  GetBookmarkCategory()
  {

    return this.httpClient.get<ResponseModel<any>>(GET_MY_BOOKMARK_CATEGORY)

  }

  GetProductBookmark(lessonId , pageNumber = 0)
  {
    const queryParam  ={
      LessonId:lessonId,
      PageNumber:pageNumber


    }

    return this.httpClient.get<ResponseModel<any>>(GET_PRODUCT_OF_MY_BOOKMARK,{params:queryParam})

  }


}
