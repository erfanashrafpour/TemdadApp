import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";


const  GET_QUESTION_BY_LESSON_ID = environment.BASE_URL+"Testing/GetTestsByLesson";



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }


  GetTestByLessonId(lessonId , pageNumber)
  {


    const param = {
      LessonID:lessonId,
      PageNumber:pageNumber
                  };

    return this.httpClient.get(GET_QUESTION_BY_LESSON_ID,{params:param})

  }


}
