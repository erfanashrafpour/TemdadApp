import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

  constructor(private authService:AuthService , private topBarService : TopBarService , private matDialog :MatDialog , private cd:ChangeDetectorRef) {
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
                  let count =0;
                  res.data.forEach((item,i)=>{
                    if (item.ConversationQuestionAndAnswer.length==2 && !item.IsVisitedBuUserTicket)
                    {
                      count++;
                    }

                  })

                  this.countMessage = count;
                  this.cd.detectChanges();
/*

                  for (int o = 0; o < list.size(); o++) {
                  if (list.get(o).getConversationQuestionAndAnswer().size() == 2 &&
                    !list.get(o).isVisitedBuUserTicket()) {
                    count++;//.add(list.get(o));
                  }
                }*/

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

    this.matDialog.open(TopUserListDialogComponent,{maxWidth:'97vw'})

  }
}
