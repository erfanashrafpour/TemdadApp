import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const  GET_QUESTION_BY_LESSON_CATEGORY_ID = environment.BASE_URL+"Testing/GetTestsForWeb";
const  SEND_TEST_RESULT = environment.BASE_URL+"Testing/Testing";
const SET_BOOKMARK = environment.BASE_URL+"BookMark/SetBookmark"
const GET_QUESTION_BY_LAW = environment.BASE_URL+"Testing/GetTestsByLawForWeb"
const GET_QUESTION_RANDOM = environment.BASE_URL+"Testing/GetTestsByLessonForWeb"
const GET_QUESTION_BY_BOOKMARK = environment.BASE_URL+"Testing/GetTestsProductByBookmarkForWeb"
const GET_QUESTION_BY_BOOKMARK_RANDOM = environment.BASE_URL+"Testing/GetTestsLessonByBookmarkForWeb"


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


  GetTestByLaw(LawTitle , pageNuber)
  {


    const param = {
      LawTitle:LawTitle,
      PageNumber:pageNuber
    }
    return this.httpClient.get<ResponseModel<any>>(GET_QUESTION_BY_LAW,{params:param})

  }

  GetTestRandom(lessonId , pageNuber)
  {


    const param = {
      LessonId:lessonId,
      PageNumber:pageNuber
    }
    return this.httpClient.get<ResponseModel<any>>(GET_QUESTION_RANDOM,{params:param})

  }

  GetTestByBookMarkLessonCategoryId(lessonCategoryId , pageNumber)
  {


    const param = {
      ProductId:lessonCategoryId,
      PageNumber:pageNumber
    }
    return this.httpClient.get<ResponseModel<any>>(GET_QUESTION_BY_BOOKMARK,{params:param})

  }

  GetTestByBookMarkRandom(LessonId , pageNumber)
  {


    const param = {
      LessonId:LessonId,
      PageNumber:pageNumber
    }
    return this.httpClient.get<ResponseModel<any>>(GET_QUESTION_BY_BOOKMARK_RANDOM,{params:param})

  }
  sendAnswerResult(questionId , choice)
  {


    const questionResult  = {QuestionID:questionId,Choice:choice}

    return this.httpClient.post<ResponseModel<any>>(SEND_TEST_RESULT,questionResult)

  }

  SetBookMark(questionId , bookMark)
  {

    return this.httpClient.post<ResponseModel<any>>(SET_BOOKMARK,{QuestionID:questionId,Bookmark:bookMark})

  }

}
