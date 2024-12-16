import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-summary-law-dialog',
  templateUrl: './summary-law-dialog.component.html',
  styleUrls: ['./summary-law-dialog.component.scss']
})
export class SummaryLawDialogComponent {


  @Input()lawTitle;
  @Input()description;


}
