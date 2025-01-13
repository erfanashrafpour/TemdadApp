import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/auth-module/service/auth.service";
import {environment} from "@environments/environment";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{

  fullUserName ='';
  showRightSideBar = false;
  showLeftSideBar = false;

  constructor(private authService:AuthService) {
  }


  ngOnInit(): void {

    let userJson = localStorage.getItem(environment.USER_PASS);

      if (userJson?.length>0) {

        const  userModel = JSON.parse(userJson);

        return;
        this.authService.Login(userModel.Mobile,userModel.Password)
          .subscribe(res=>{

          if (res.statusCode==200)
          {
            localStorage.setItem(environment.USER_PASS,JSON.stringify(res.data));

            console.log(res.data)
            this.fullUserName = res.data.FirstName +" "+res.data.LastName;
          }
        })
      }


  }


  openRightSideBar($event: MouseEvent) {
    this.showRightSideBar = true;
    $event.stopPropagation();
  }

  openLeftSideBar($event: MouseEvent) {
    this.showLeftSideBar = true;
    $event.stopPropagation();
  }
}
