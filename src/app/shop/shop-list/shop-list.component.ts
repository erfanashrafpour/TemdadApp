import {Component, OnInit} from '@angular/core';
import {ShopService} from "@app/shop/service/shop.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit{


  shopList = [];
  currentId = 0;
  constructor(private shopService:ShopService) {
  }


  ngOnInit() {
this.getData()
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



}
