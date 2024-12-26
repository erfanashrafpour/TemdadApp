import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {ResponseModel} from "@app/_core/model/ResponseModel";
import {HttpClient} from "@angular/common/http";

const GET_SUBJECT_CATEGORY = environment.BASE_URL+"Subject/GetMyCategoriesSubject";
const GET_SUBJECT_BY_CATEGORY_ID = environment.BASE_URL+"Subject/GetMySubjects";



@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient : HttpClient) { }


  GetSubjectCategory()
  {

    return this.httpClient.get<ResponseModel<any>>(GET_SUBJECT_CATEGORY)

  }

  GetSubjectByCategoryId(CategoryID,pageNumber=0)
  {

    const param = {
      CategoryID:CategoryID,
      PageNumber:pageNumber
    }

    return this.httpClient.get<ResponseModel<any>>(GET_SUBJECT_BY_CATEGORY_ID,{params:param})

  }


}
