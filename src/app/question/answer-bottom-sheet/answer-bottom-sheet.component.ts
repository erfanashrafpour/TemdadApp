import {Component, Input} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-answer-bottom-sheet',
  templateUrl: './answer-bottom-sheet.component.html',
  styleUrls: ['./answer-bottom-sheet.component.scss']
})
export class AnswerBottomSheetComponent {
  @Input()Answer:string;
  constructor(private matRef:MatBottomSheetRef) {
  }

  closeBottomSheet() {

    this.matRef.dismiss()

  }
}
