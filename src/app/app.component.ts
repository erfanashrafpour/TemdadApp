import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoaderService} from "@app/_core/service/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit , AfterViewInit{
  title = 'TemdadApp';
  showLoading =false;
  isLoading =false;

  constructor(private  loaderService : LoaderService , private cd:ChangeDetectorRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }


  ngAfterViewInit() {

    this.setLoader()
  }

  private setLoader() {
    this.loaderService.getLoading().subscribe(res=>{
      this.showLoading=res;
      this.cd.detectChanges()
    })
  }
}
