import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserRepository} from "@app/_core/Helper/UserRepository";
import {MatDialog} from "@angular/material/dialog";
import {TopUserListDialogComponent} from "@app/top-user/top-user-list-dialog/top-user-list-dialog.component";

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {
@Input()showSideBar=false;
  @Output() showSideBarChange = new EventEmitter<any>();

  constructor(private matDialog:MatDialog) {
  }
  changeShowSideBar() {
    this.showSideBar = false
    this.showSideBarChange.emit(this.showSideBar);
  }

  getFullName() {
    return UserRepository.GetFullName()

  }

  openTopUser() {
    this.matDialog.open(TopUserListDialogComponent,{maxWidth:'97vw'})
  }
}
