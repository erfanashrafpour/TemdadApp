import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const GET_TREE_PLAN_API = environment.BASE_URL+'Plan/GetTreePlan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient : HttpClient) { }


  GetTreePlan()
  {
    return this.httpClient.get<ResponseModel<any>>(GET_TREE_PLAN_API)
  }


}
