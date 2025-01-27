import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {SettingRequest} from "@app/setting/setting/setting.component";
import {ResponseModel} from "@app/_core/model/ResponseModel";

const EDIT_USER_API = environment.BASE_URL+'Account/EditUser';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private  httpClient :HttpClient) { }


  EditUser(request:SettingRequest)
  {


   return  this.httpClient.post<ResponseModel<any>>(EDIT_USER_API,request);

  }


}
