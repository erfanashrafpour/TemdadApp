import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const  GET_LESSON_CATEGORY_API = environment.BASE_URL+"MyTest/GetProducts";


//GET MyTest/GetProducts?LessonID={LessonID}&PageNumber={PageNumber}
@Injectable({
  providedIn: 'root'
})
export class LessonCategoryService {

  constructor(private httpClient:HttpClient) { }

  GetLessonCategory(lessonId)
  {

    const param={
      lessonID:lessonId,
      PageNumber:0
    }


    return this.httpClient.get<ResponseModel<any>>(GET_LESSON_CATEGORY_API,{params:param})

  }

}
