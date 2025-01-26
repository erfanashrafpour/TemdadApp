import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";
import {IRequestPlan} from "@app/planning/plan/plan.component";


const GET_TREE_PLAN_API = environment.BASE_URL+'Plan/GetTreePlan';
const GET_EDIT_PLAN_API = environment.BASE_URL+'Plan/PlanEdit';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient : HttpClient) { }


  GetTreePlan()
  {
    return this.httpClient.get<ResponseModel<any>>(GET_TREE_PLAN_API)
  }


  SetEditPlan(req:IRequestPlan)
  {



    return this.httpClient.post<ResponseModel<any>>(GET_EDIT_PLAN_API,req)
  }

}
