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

  constructor(private authService:AuthService) {
  }


  ngOnInit(): void {

    let userJson = localStorage.getItem(environment.USER_PASS);
      if (userJson.length>0) {
        const  userModel = JSON.parse(userJson);



        this.authService.Login(userModel.userName,userModel.password)
          .subscribe(res=>{

          if (res.statusCode==200)
          {
            console.log(res.data)
            this.fullUserName = res.data.FirstName +" "+res.data.LastName;
          }
        })
      }


  }




}
