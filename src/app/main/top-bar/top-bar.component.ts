import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/auth-module/service/auth.service";
import {environment} from "@environments/environment";
import {TopBarService} from "@app/main/service/top-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {TopUserListDialogComponent} from "@app/top-user/top-user-list-dialog/top-user-list-dialog.component";
import {UserRepository} from "@app/_core/Helper/UserRepository";

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

    this.fullUserName = UserRepository.GetFullName();

    this.getCountMessageNotView();




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
