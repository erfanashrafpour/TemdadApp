import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ShopService} from "@app/shop/service/shop.service";

@Component({
  selector: 'app-basket-list-bottom-sheet',
  templateUrl: './basket-list-bottom-sheet.component.html',
  styleUrls: ['./basket-list-bottom-sheet.component.scss']
})
export class BasketListBottomSheetComponent  implements OnInit{
  basketList = [];


  constructor(private shopService:ShopService , private cd:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getBasket()
  }




  getBasket()
  {

    this.shopService.GetBasket().subscribe(res=>{

      if (res.statusCode==200)
      {
        this.basketList = res.data;
      }


    })

  }


}
