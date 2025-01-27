import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ShopService} from "@app/shop/service/shop.service";
import {UserRepository} from "@app/_core/Helper/UserRepository";

@Component({
  selector: 'app-basket-list-bottom-sheet',
  templateUrl: './basket-list-bottom-sheet.component.html',
  styleUrls: ['./basket-list-bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BasketListBottomSheetComponent  implements OnInit{
  basketList = [];
  meta = undefined;


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
        this.meta = res.meta
      }


    })

  }

  orderBasket()
  {

    this.shopService.OrderBasket().subscribe(res=>{

      if (res.statusCode==200)
      {
        const numberic = res.data
      const x =   String(UserRepository.GetPayUrl()).replace('$orderid$',numberic);
      // const url =  `https://pay2.temdad.com?token=7916fcfb-3fb7-4f4b-a2d6-2d440a93a02a&pID=${x}&type=mobile`
        window.open(x)
      }

    })


  }


}
