import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const GET_PRODUCT_CATEGORY = environment.BASE_URL+"Shop/GetProductCategory";


@Injectable({
  providedIn: 'root'
})
export class ShopService {



  constructor(private httpClient : HttpClient) {}


  GetProductCategory(parentId)
  {


    const param ={
      ParentId:parentId
    }

    return this.httpClient.get<ResponseModel<any>>(GET_PRODUCT_CATEGORY ,{params:param})

  }

}
