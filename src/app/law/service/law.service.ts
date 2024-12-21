import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const  GET_LAW_CATEGORY_API = environment.BASE_URL+"Law/GetMyCategoriesLaw";
const  GET_MY_LAW_API = environment.BASE_URL+"Law/GetMyLaws";
const  SET_LAW_API = environment.BASE_URL+"Law/SetLaw";


@Injectable({
  providedIn: 'root'
})
export class LawService {

  constructor(private httpClient : HttpClient) { }



  GetLawCategory()
  {

    return this.httpClient.get<ResponseModel<any>>(GET_LAW_CATEGORY_API)

  }

  GetLawList(lawCategoryTitle )
  {
      //?CategoryTitle={CategoryTitle}&PageNumber={PageNumber}
    const queryParam  ={
      CategoryTitle:lawCategoryTitle,
      PageNumber:0


    }

    return this.httpClient.get<ResponseModel<any>>(GET_MY_LAW_API,{params:queryParam})

  }


  DeleteLaw(lawId)
  {
    const param ={

      LawId:lawId,
      LawPublish:false

    };
   return  this.httpClient.post<ResponseModel<any>>(SET_LAW_API,param)
  }


}
