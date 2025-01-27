import { Injectable } from '@angular/core';
import {ResponseModel} from "@app/_core/model/ResponseModel";
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";

const GET_TICKET_API = environment.BASE_URL+"Ticketing/GetTicketConversationQuestionForUser";
const GET_TEST_BY_ID = environment.BASE_URL + 'Testing/GetTestsByIdForWeb';
const SET_VISIBILITY_USER = environment.BASE_URL+'Ticketing/SetVisibilityByUser'
//Ticketing/GetTicketConversationQuestionForUser
@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(private httpClient : HttpClient) { }

  GetTicketApi()
  {
    return this.httpClient.get<ResponseModel<any>>(GET_TICKET_API);

  }

  GetTestById(questionId)
  {

    const param={
      id:questionId
    }

    return this.httpClient.get<ResponseModel<any>>(GET_TEST_BY_ID,{params:param})
  }


  SetVisibility(ticketId)
  {

    const param={
      TicketId:ticketId
    }

    return this.httpClient.get<ResponseModel<any>>(SET_VISIBILITY_USER,{params:param})

  }

}
