import {Component, OnInit} from '@angular/core';
import {TopUserService} from "@app/top-user/service/top-user.service";
import {CommonModule, NgFor} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-top-user-list-dialog',
  templateUrl: './top-user-list-dialog.component.html',
  styleUrls: ['./top-user-list-dialog.component.scss'],
  //imports:[CommonModule,BrowserModule],
  //standalone:true
})
export class TopUserListDialogComponent implements OnInit{

   topUserList = [];
   testCount = undefined;


  constructor(private topUserService:TopUserService) {
  }

  ngOnInit() {
    this.getTodayRank();
    this.getTopUser()
  }



  getTopUser()
  {
    this.topUserService.GetTopUser().subscribe(res=>{

        if (res.statusCode==200)
        {
          this.topUserList =res.data;
          this.topUserList.forEach(item=>{
            item.fullName = item.FirstName+" "+item.LastName
            item.ActivePlan = item.ActivePlan? 'فعال' :'غیر فعال'
          });
        }

    })
  }

  getTodayRank()
  {
    this.topUserService.GetTodayRank().subscribe(res=>{

      if (res.statusCode==200)
      {

        this.testCount = res.data.TestCount

      }

    })
  }









}
