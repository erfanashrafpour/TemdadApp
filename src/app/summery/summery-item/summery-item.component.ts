import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SummeryService} from "@app/summery/services/summery.service";

@Component({
  selector: 'app-summery-item',
  templateUrl: './summery-item.component.html',
  styleUrls: ['./summery-item.component.scss']
})
export class SummeryItemComponent implements OnInit{
  private productId:number;
  summeryList =[];
  constructor(private activeRoute:ActivatedRoute , private summeryService:SummeryService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.productId = params['productId'];
      this.getMySummeryNote()

    });
  }

  private getMySummeryNote() {
this.summeryService.GetMySummeryNote(this.productId).subscribe(res=>{

  if (res.statusCode==200)
  {
    this.summeryList = res.data;
  }


});
  }
}
