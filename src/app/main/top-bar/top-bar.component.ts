import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/auth-module/service/auth.service";
import {environment} from "@environments/environment";
import {TopBarService} from "@app/main/service/top-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {TopUserListDialogComponent} from "@app/top-user/top-user-list-dialog/top-user-list-dialog.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{

  fullUserName ='';
  showRightSideBar = false;
  showLeftSideBar = false;
   countMessage = undefined;

  constructor(private authService:AuthService , private topBarService : TopBarService , private matDialog :MatDialog) {
  }


  ngOnInit(): void {


    this.getCountMessageNotView()

    let userJson = localStorage.getItem(environment.USER_PASS);

      if (userJson?.length>0) {

        const  userModel = JSON.parse(userJson);
        this.fullUserName = userModel.FirstName+' '+userModel.LastName
      }


  }

  getCountMessageNotView()
  {
    this.topBarService.GetMessageNotViewCount().subscribe(res=>{

                if (res.statusCode == 200)
                {
                  this.countMessage = res.data
                }


    });
  }
  openRightSideBar($event: MouseEvent) {
    this.showRightSideBar = true;
    $event.stopPropagation();
  }

  openLeftSideBar($event: MouseEvent) {
    this.showLeftSideBar = true;
    $event.stopPropagation();
  }

  async  openTopUserDialog() {

    //const { TopUserListDialogComponent } = await import('../../top-user/top-user.module');

    this.matDialog.open(TopUserListDialogComponent)

  }
}
