import {ChangeDetectorRef, Component, OnInit} from '@angular/core';


enum SupportTabType {

  SEND_TICKET,
  TICKET_LIST


}


@Component({
  selector: 'app-support-tab',
  templateUrl: './support-tab.component.html',
  styleUrls: ['./support-tab.component.scss']
})
export class SupportTabComponent implements OnInit{


  constructor(private cd:ChangeDetectorRef) {
  }

  TabType :SupportTabType ;
  ngOnInit(): void {

    this.TabType = SupportTabType.SEND_TICKET;

  }


  IsSendTicketType()
  {
    return SupportTabType.SEND_TICKET==this.TabType;
  }

  IsTicketListType()
  {
    return SupportTabType.TICKET_LIST == this.TabType;

  }


  setTicketList() {
    this.TabType = SupportTabType.TICKET_LIST;
    this.cd.detectChanges()
  }

  setSendTicket() {
    this.TabType = SupportTabType.SEND_TICKET;
    this.cd.detectChanges()
  }
}
