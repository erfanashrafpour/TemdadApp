import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent {
  @Input()showSideBar =false;
  @Output() showSideBarChange = new EventEmitter<any>();

  changeShowSideBar() {

    this.showSideBar = false
    this.showSideBarChange.emit(this.showSideBar);
  }
}
