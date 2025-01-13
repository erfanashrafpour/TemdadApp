import {Component, OnInit} from '@angular/core';
import {ShopService} from "@app/shop/service/shop.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit{


  shopList = [];

  constructor(private shopService:ShopService) {
  }


  ngOnInit() {

  }


  private getData()
  {


    const currentId = 0;

    this.shopService.GetProductCategory(currentId).subscribe(res=>{

      if (res.statusCode==200)
      {
            this.shopList = res.data
      }


    })


  }


}
