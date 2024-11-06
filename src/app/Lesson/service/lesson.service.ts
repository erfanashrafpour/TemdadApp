import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "@app/_core/model/ResponseModel";



const  GET_LESSON_API = environment.BASE_URL+"MyTest/GetLessons";
const  SET_RANDOM = environment.BASE_URL+"Random/SetRandom";
const  SET_PLAN = environment.BASE_URL+"Plan/SetPlan";




@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient:HttpClient) { }



  GetLesson()
  {

    return this.httpClient.get<ResponseModel<any>>(GET_LESSON_API)

  }



  SetPlan(plan)
  {

    const model ={
      ActivePlan : plan

    };



    return this.httpClient.post<ResponseModel<any>>(SET_PLAN,model)

  }


  SetRandom(random)
  {

    const model ={
      ActiveRandom : random

    };



    return this.httpClient.post<ResponseModel<any>>(SET_RANDOM,model)

  }



}
