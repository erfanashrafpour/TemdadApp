import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";

const  SET_LAW = environment.BASE_URL+"Law/SetLaw";

@Injectable({
  providedIn: 'root'
})
export class LawDialogService {

  constructor(private httpClient : HttpClient) { }

  SetLaw(lawId , lawPublish)
  {

    return this.httpClient.post<ResponseModel<any>>(SET_LAW,{LawId:lawId,LawPublish:lawPublish})

  }

}
