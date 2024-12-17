import {Component, Input} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-summary-law-dialog',
  templateUrl: './summary-law-dialog.component.html',
  styleUrls: ['./summary-law-dialog.component.scss']
})
export class SummaryLawDialogComponent {

  constructor(private matDialogRef:MatDialogRef<SummaryLawDialogComponent>) {
  }

  @Input()lawTitle;
  @Input()description;


  closeDialog() {

    this.matDialogRef.close();
  }
}
