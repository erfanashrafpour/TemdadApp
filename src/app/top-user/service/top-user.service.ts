import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const GET_TODAY_RANK = environment.BASE_URL+'Rank/GetTodayRank';
const GET_TOP_USER = environment.BASE_URL+'Rank/GetTopUser';


@Injectable({
  providedIn: 'root'
})
export class TopUserService {

  constructor(private httpClient : HttpClient) { }


  GetTodayRank()
  {
    return this.httpClient.get<ResponseModel<any>>(GET_TODAY_RANK)
  }

  GetTopUser()
  {
    return this.httpClient.get<ResponseModel<any>>(GET_TOP_USER)
  }


}
