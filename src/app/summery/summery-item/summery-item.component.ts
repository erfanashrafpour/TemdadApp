import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SummeryService} from "@app/summery/services/summery.service";
import {MatDialog} from "@angular/material/dialog";
import {SummaryLawDialogComponent} from "@app/summery/summery-item/summary-law-dialog/summary-law-dialog.component";

@Component({
  selector: 'app-summery-item',
  templateUrl: './summery-item.component.html',
  styleUrls: ['./summery-item.component.scss']
})
export class SummeryItemComponent implements OnInit{
  private productId:number;
  summeryList =[];
  constructor(private activeRoute:ActivatedRoute , private summeryService:SummeryService , private matDialog:MatDialog) {
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
    this.summeryList.map((item,index)=>{


      {
      const extra = this.extractAndMarkSummary(item.Summary);
      if (extra.lawTexts.length>2)
console.log(item.Id)
      item.Summary = extra.Summary
      item.lawText = extra.lawTexts
      item.lawTitle = extra.lawTitle
      }

    })
  }


});
  }


  extractAndMarkSummary(input: string ): { Summary: string, lawTexts: any[]  ,  lawTitle: any[]  } {
    const regex1 = /<a\s+title='(.*?)'.*?>(.*?)<\/a>/g;
    const regex2 = /<a\s+title=["'](.*?)["'].*?>(.*?)<\/a>/g;
    const regex3= /<a\s+title=['"](.*?)['"].*?>(.*?)<\/a>/g;
    const regex4 = /<a\s+title=['"](.*?)['"][\s\S]*?>(.*?)<\/a>/g;
    const regex = /<a\s+title=['"](.*?)['"][\s\S]*?>(.*?)<\/a>/gs;

    let match;
    let Summary = input;
    let lawTexts = [];
    let lawTitle = [];
    //console.log(regex.exec(input))
let counter = 0;
    // پیدا کردن تگ a و استخراج اطلاعات
    while ((match = regex.exec(input)) !== null) {
      const linkText = match[1];  // عنوان داخل تگ a
      const linkTitle = match[2];   // متن داخل تگ a
      // جایگزینی تگ a با تگ mark
      Summary = Summary.replace(match[0],
        `<mark  class="mark-item ${counter}"  >${linkTitle}</mark>`);

      counter++;

      // گرفتن اولین عنوان تگ a (در صورت وجود)
      if (linkText) {
        lawTexts.push(linkText);
      }
      if (linkTitle) {
        lawTitle.push(linkTitle);
      }
    }

    return { Summary, lawTexts ,lawTitle};
  }


  clickLaw($event , item) {
    debugger


    if ($event.target.tagName == 'MARK')
    {

      const id = Number($event.srcElement.className.replace('mark-item','').trim());
      this.openLawDialog(item.lawTitle[id],  item.lawText[id]);
    }

  }

  private openLawDialog(lawTitle ,  lawText) {
    const dialog = this.matDialog.open(SummaryLawDialogComponent);

    dialog.componentInstance.lawTitle = lawTitle;
    dialog.componentInstance.description = lawText
  }
}
