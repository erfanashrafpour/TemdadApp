import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserRepository} from "@app/_core/Helper/UserRepository";

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {
@Input()showSideBar=false;
  @Output() showSideBarChange = new EventEmitter<any>();
  changeShowSideBar() {
    this.showSideBar = false
    this.showSideBarChange.emit(this.showSideBar);
  }

  getFullName() {
    return UserRepository.GetFullName()
  }
}
