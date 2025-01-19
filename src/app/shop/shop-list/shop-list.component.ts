import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ShopService} from "@app/shop/service/shop.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BasketListBottomSheetComponent} from "@app/shop/basket-list-bottom-sheet/basket-list-bottom-sheet.component";
import {ActivatedRoute, NavigationStart, Params, Route, Router} from "@angular/router";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit{


  shopList = [];
  currentId = 0;
  backStackList =[];
  basketSize = 0;
  constructor(private shopService:ShopService , private cd :ChangeDetectorRef , private bottomSheet:MatBottomSheet , private router:Router , private activeRoute:ActivatedRoute) {
  }


  ngOnInit() {
/*    const navigationState = history.state.stack;
    if (navigationState) {
      this.backStackList = navigationState;
      this.currentId = this.backStackList[this.backStackList.length - 1] || this.currentId;
    }*/

/*
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // چک می‌کنیم که آیا کاربر دکمه برگشت زده یا خیر
        if (event.navigationTrigger === 'popstate') {
          console.log('کاربر دکمه برگشت مرورگر را زده است');
          this.goBack();
        }
      }
    });*/


    this.activeRoute.paramMap.subscribe(res=>{
      debugger
      const navigationState = history.state.stack;
      if (navigationState) {
        this.backStackList = navigationState;
        this.currentId = this.backStackList[this.backStackList.length - 1] || this.currentId;
      }
      this.getData()

    })



    this.getBasket()
  }


  private getData()
  {

    this.shopService.GetProductCategory(this.currentId).subscribe(res=>{

      if (res.statusCode==200)
      {
            this.shopList = res.data
      }


    })


  }


  setCurrentId(currentId)
  {


   this.currentId = currentId;
    this.backStackList.push( this.currentId)
   //this.getData();
    this.router.navigate([`main/shop/list/${currentId}`], { state: { stack: this.backStackList } }); // تغییر مسیر با state
   // this.router.navigate([`main/shop/list`], { state: { stack: this.backStackList } }); // تغییر مسیر با state

  }


  addToBasket(item: any) {

    this.shopService.SetBasket(item.Id , !item.AddedToBasket).subscribe(res=>{
      if (res.statusCode==200)
      {
        item.AddedToBasket = !item.AddedToBasket
        this.cd.detectChanges()
        this.getBasket()
      }
    })
  }

  getBasket()
  {
    this.shopService.GetBasket().subscribe(res=>{

      if (res.statusCode==200)
      {

        this.basketSize = res.data.length;

      }

    })
  }


  openBasket()
  {
    this.bottomSheet.open(BasketListBottomSheetComponent)
  }
  /*goBack() {
    if (this.backStackList.length > 0) {
      this.currentId = this.backStackList.pop()!;
      this.router.navigate(['/'], { state: { stack: this.backStackList } }); // برگشت به صفحه قبلی
    }
  }*/

}
