import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";


const GET_PRODUCT_CATEGORY = environment.BASE_URL+"Shop/GetProductCategory";
const SET_BASKET = environment.BASE_URL+"Shop/SetBacket";
const GET_BASKET = environment.BASE_URL+"Shop/GetBasket";


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

  SetBasket(Id , Add:boolean)
  {

    const param ={
      ProductCategoryID:Id,
      Add:Add
    };

    return this.httpClient.post<ResponseModel<any>>(SET_BASKET ,param)

  }

  GetBasket()
  {

    return this.httpClient.get<ResponseModel<any>>(GET_BASKET);

const basket = 0;
  }


}
