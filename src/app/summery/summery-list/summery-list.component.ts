import {Component, OnInit} from '@angular/core';
import {SummeryService} from "@app/summery/services/summery.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-summery-list',
  templateUrl: './summery-list.component.html',
  styleUrls: ['./summery-list.component.scss']
})
export class SummeryListComponent implements OnInit{


  categoryList =[];
  productList = [];

  constructor(private summearyService:SummeryService , private route:Router) {
  }

  ngOnInit(): void {
this.getSummeryCategory()
  }


  getSummeryCategory()
  {

    this.summearyService.GetSummeryCategory().subscribe(res=>{

      if (res.statusCode==200)
      {
      this.categoryList = res.data
        if (this.categoryList.length>0)
        {
          this.getProductList(this.categoryList[0].Id)
        }
      }

    })




  }

  getProductList(lessonId)
  {
    this.summearyService.GetSummeryProduct(lessonId).subscribe(res=>{

      if (res.statusCode==200)
      {
        this.productList = res.data
      }


    })

  }

  changeCategoryItem($event) {
    const itemCategoryId =$event.target.value
    this.getProductList(itemCategoryId)
    //getDataSummry()

  }

  goToSummeryItem(i: any) {
    this.route.navigateByUrl('main/summery/summeryItem/'+i)
  }
}
