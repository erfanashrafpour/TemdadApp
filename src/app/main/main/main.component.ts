import { Component } from '@angular/core';
import {AuthService} from "@app/auth-module/service/auth.service";
import {UserRepository} from "@app/_core/Helper/UserRepository";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showRightSideBar = false;

  constructor(private authService : AuthService) {

    debugger
    const userModel = new UserRepository(authService);



  }


}
