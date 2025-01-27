import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private  subject = new BehaviorSubject<any>(false)
  private  progress = new BehaviorSubject<number>(undefined)
  constructor() { }


  showLoading()
  {

    this.subject.next(true)
  }
  hideLoading()
  {
    this.subject.next(false)
  }

  getLoading()
  {
    return this.subject;
  }

  setProgress(num)
  {
    this.progress.next(num)
  }
  getProgress()
  {
    return this.progress
  }

}
