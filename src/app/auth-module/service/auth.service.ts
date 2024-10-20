import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "@app/_core/model/ResponseModel";



const  LOGIN_API = environment.BASE_URL+"Account/Login";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }


  public Login(userName , password)
  {
    const model =
      {username:userName,
        password:password,
        "clientOs":1,
        "DeviceName":"string",
        "DeviceID":"string",
        "ClientOsVersion":"string",
        "AppVersionCode":"string"}

      return  this.httpClient.post<ResponseModel<any>>(LOGIN_API,model)


  }



}
