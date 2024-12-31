import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "@environments/environment";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit , AfterViewInit{


  fontBetweenSpace;
  fontSize;
  timer;

  @ViewChild('fontSizeInput') fontSizeInput: ElementRef;
  @ViewChild('fontLineSpaceInput') fontLineSpaceInput: ElementRef;
  constructor(private cd:ChangeDetectorRef) {
  }


  ngOnInit(): void {

   // this.getConfigData()

  }

  ngAfterViewInit(): void {

    this.getConfigData()
  }

  private getConfigData() {

    this.fontSize = localStorage.getItem(environment.FONT_SIZE)??14;
    this.fontBetweenSpace = localStorage.getItem(environment.FONT_BETWWENSPACE)??2;
    this.timer = localStorage.getItem(environment.TIMER)??20;

    this.fontLineSpaceInput.nativeElement.value = this.fontBetweenSpace*4;
    this.fontSizeInput.nativeElement.value = this.fontSize*4;
    this.cd.detectChanges()

  }

  changeFontSize($event) {
    this.fontSize = $event.target.value/4;
    localStorage.setItem(environment.FONT_SIZE,this.fontSize)

    this.cd.detectChanges()
  }

  changeLineSpace($event)
  {
    this.fontBetweenSpace = $event.target.value/4
    localStorage.setItem(environment.FONT_BETWWENSPACE,this.fontBetweenSpace)

  }

  changeTimer($event) {

    localStorage.setItem(environment.TIMER,this.timer);


  }
}
