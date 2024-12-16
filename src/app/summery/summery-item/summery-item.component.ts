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
    this.summeryList.map(item=>{

      item.Summary = this.extractAndMarkSummary(item.Summary).Summary
      item.titleSummary = this.extractAndMarkSummary(item.Summary).title


    })
  }


});
  }



  extractAndMarkSummary(input: string): { Summary: string, title: string | null } {
    const regex = /<a\s+title='(.*?)'.*?>(.*?)<\/a>/g;
    let match;
    let Summary = input;
    let title = null;

    // پیدا کردن تگ a و استخراج اطلاعات
    while ((match = regex.exec(input)) !== null) {
      const linkTitle = match[1];  // عنوان داخل تگ a
      const linkText = match[2];   // متن داخل تگ a

      // جایگزینی تگ a با تگ mark
      Summary = Summary.replace(match[0],
        `<mark class="mark-item" style='background: #3066be;color: white;border-radius: 2px;padding: 0 5px;font-weight: 700;'>${linkText}</mark>`);


      // گرفتن اولین عنوان تگ a (در صورت وجود)
      if (!title) {
        title = linkTitle;
      }
    }

    return { Summary, title };
  }


  clickLaw($event , title) {
    if ($event.target.tagName == 'MARK')
    {
      this.openLawDialog(title);
    }

  }

  private openLawDialog(title: any) {
    this.matDialog.open(SummaryLawDialogComponent)
  }
}
