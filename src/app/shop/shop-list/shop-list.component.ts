import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ShopService} from "@app/shop/service/shop.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BasketListBottomSheetComponent} from "@app/shop/basket-list-bottom-sheet/basket-list-bottom-sheet.component";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit{


  shopList = [];
  currentId = 0;

  basketSize = 0;
  constructor(private shopService:ShopService , private cd :ChangeDetectorRef , private bottomSheet:MatBottomSheet) {
  }


  ngOnInit() {
this.getData()
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
   this.getData();

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

}
