import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "@app/_core/model/ResponseModel";

const  GET_PRODUCT_SUMURRY_LIST_API = environment.BASE_URL+"MyTest/GetProducts";
const GET_SUMMUERY_CATEGORY_LIST_API = environment.BASE_URL+"SummaryNote/GetMyCategoriesSummary";
const GET_MY_SUMMEERY_NOTE_API = environment.BASE_URL+"SummaryNote/GetMySummaries";

@Injectable({
  providedIn: 'root'
})
export class SummeryService {

  constructor(private httpClient:HttpClient) { }


  GetSummeryCategory()
  {
    return this.httpClient.get<ResponseModel<any>>(GET_SUMMUERY_CATEGORY_LIST_API);
  }

  GetSummeryProduct(lessonId)
  {

    const queryPArem = {

      LessonID :lessonId ,
      PageNumber:0

    }
    return this.httpClient.get<ResponseModel<any>>(GET_PRODUCT_SUMURRY_LIST_API,{params:queryPArem});

  }


  GetMySummeryNote(productId)
  {


    const queryPArem = {

      ProductID :productId ,
      PageNumber:0

    }
    return this.httpClient.get<ResponseModel<any>>(GET_MY_SUMMEERY_NOTE_API,{params:queryPArem});
  }

}