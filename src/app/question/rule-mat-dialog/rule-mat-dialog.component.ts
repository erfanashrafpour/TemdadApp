import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {LawDialogService} from "@app/question/rule-mat-dialog/service/law-dialog.service";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-rule-mat-dialog',
  templateUrl: './rule-mat-dialog.component.html',
  styleUrls: ['./rule-mat-dialog.component.scss']
})
export class RuleMatDialogComponent {
  @Input()Rules:{
    Description:string,
    Id:number,
    My:boolean,
    Title:string
  }[];
  constructor(private lawService :LawDialogService , private cd:ChangeDetectorRef ,private matRef:MatBottomSheetRef) {
  }


  setLaw(Id: any, publish: boolean) {
    this.lawService.SetLaw(Id,publish).subscribe(res=>{

      if (res.statusCode==200)
      {
        this.Rules.find(item=>item.Id==Id).My = publish;
        this.cd.detectChanges()
      }

    })
  }

  closeBottomSheet() {

    this.matRef.dismiss()

  }
}
