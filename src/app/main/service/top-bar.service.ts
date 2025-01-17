import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";
import {HttpClient} from "@angular/common/http";


const GET_MESSAGE_NOT_VIEW_COUNT = environment.BASE_URL + 'Message/GetCountMessageNotView';

@Injectable({
  providedIn: 'root'
})
export class TopBarService {

  constructor(private httpClient:HttpClient) { }



  GetMessageNotViewCount()
  {

    return this.httpClient.get<ResponseModel<any>>(GET_MESSAGE_NOT_VIEW_COUNT);

  }

}
