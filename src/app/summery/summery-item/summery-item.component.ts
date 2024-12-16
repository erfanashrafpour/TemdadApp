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

     // if (index==0)
      {
      const extra = this.extractAndMarkSummary(item.Summary);

      item.Summary = extra.Summary
      item.lawText = extra.lawText
      item.lawTitle = extra.lawTitle
      }

    })
    console.log(this.summeryList)
  }


});
  }


  extractAndMarkSummary(input: string ): { Summary: string, lawText: string | null ,  lawTitle: string | null } {
    const regex1 = /<a\s+title='(.*?)'.*?>(.*?)<\/a>/g;
    const regex2 = /<a\s+title=["'](.*?)["'].*?>(.*?)<\/a>/g;
    const regex3= /<a\s+title=['"](.*?)['"].*?>(.*?)<\/a>/g;
    const regex4 = /<a\s+title=['"](.*?)['"][\s\S]*?>(.*?)<\/a>/g;
    const regex = /<a\s+title=['"](.*?)['"][\s\S]*?>(.*?)<\/a>/gs;

    let match;
    let Summary = input;
    let lawText = null;
    let lawTitle = null;
    console.log(input)
    //console.log(regex.exec(input))

    // پیدا کردن تگ a و استخراج اطلاعات
    while ((match = regex.exec(input)) !== null) {
      const linkText = match[1];  // عنوان داخل تگ a
      const linkTitle = match[2];   // متن داخل تگ a
      console.log(match)
      // جایگزینی تگ a با تگ mark
      Summary = Summary.replace(match[0],
        `<mark class="mark-item" style='background: #3066be;color: white;border-radius: 2px;padding: 0 5px;font-weight: 700;'>${linkTitle}</mark>`);


      // گرفتن اولین عنوان تگ a (در صورت وجود)
      if (!lawText) {
        lawText = linkText;
      }
      if (!lawTitle) {
        lawTitle = linkTitle;
      }
    }

    return { Summary, lawText ,lawTitle};
  }


  clickLaw($event , item) {
    if ($event.target.tagName == 'MARK')
    {
      this.openLawDialog(item);
    }

  }

  private openLawDialog(item) {
    const dialog = this.matDialog.open(SummaryLawDialogComponent);
    debugger
    dialog.componentInstance.lawTitle = item.lawTitle;
    dialog.componentInstance.description = item.lawText
  }
}
