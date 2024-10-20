import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";



const  GET_LESSON_API = environment.BASE_URL+"MyTest/GetLessons";



@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient:HttpClient) { }



  GetLesson()
  {

    return this.httpClient.get(GET_LESSON_API)

  }



}
