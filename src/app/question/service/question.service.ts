import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const  GET_QUESTION_BY_LESSON_CATEGORY_ID = environment.BASE_URL+"Testing/GetTestsForWeb";



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }


  GetTestByLessonCategoryId(ProductId , pageNuber)
  {


    const param = {
      ProductId:ProductId,
      PageNumber:pageNuber
  }
  return this.httpClient.get<ResponseModel<any>>(GET_QUESTION_BY_LESSON_CATEGORY_ID,{params:param})

  }


}
