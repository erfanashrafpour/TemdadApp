import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
option={
  horizontalPosition: "end",
  verticalPosition: 'bottom',
}
  constructor(private snackBar : MatSnackBar) { }


  error(message:string)
  {

    this.snackBar.open(message, 'X', {
      duration: 5000,
      verticalPosition:"top",
      horizontalPosition:"start",
      panelClass: ['red-snackbar']
    });

  }

  succses(message:string)
  {

    this.snackBar.open(message, 'X', {
      verticalPosition:"top",
      horizontalPosition:"start",
      duration: 5000,
      panelClass: ['green-snackbar']
    });

  }
}
