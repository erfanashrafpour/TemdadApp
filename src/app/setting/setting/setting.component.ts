import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "@environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRepository} from "@app/_core/Helper/UserRepository";

export interface SettingRequest {
  /// پست الکترونیک
  /// </summary>f
  Mail;

  /// <summary>
  /// کدملی
  /// </summary>
   NationalCode;

  /// <summary>
  /// کلمه عبور
  /// </summary>
   NewPassword;


  /// <summary>
  /// شماره همراه
  /// </summary>
   Mob;


  /// <summary>
  /// شماره کارت بانکی
  /// </summary>
   CartNumber;

  /// <summary>
  /// زمان پاسخ به سوال
  /// </summary>
   Timer;

  /// <summary>
  /// تکرار لایتنر
  /// </summary>
   LeitnerCounter;

  /// <summary>
  /// زمان لایتنر
  /// </summary>
   LeitnerTimer;

}

interface IEditUser {

  Fname: FormControl<string>;
  Lname: FormControl<string>;



  Mail: FormControl<string>;

  NationalCode: FormControl<string>;

  password: FormControl<string>;

  NewPassword: FormControl<string>;

  CartNumber: FormControl<string>;

  Timer: FormControl<number>;

  LeitnerCounter: FormControl<number>;

  LeitnerTimer: FormControl<number>;

  Mob:FormControl<string>;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit , AfterViewInit{


  fontBetweenSpace;
  fontSize;
  timer;
  formGroup:FormGroup<IEditUser>

  @ViewChild('fontSizeInput') fontSizeInput: ElementRef;
  @ViewChild('fontLineSpaceInput') fontLineSpaceInput: ElementRef;
  constructor(private cd:ChangeDetectorRef , private fb:FormBuilder) {
  }


  ngOnInit(): void {

    this.initForm();

   // this.getConfigData()

  }

  ngAfterViewInit(): void {

    //this.getConfigData()
  }

  private getConfigData() {

    this.fontSize = localStorage.getItem(environment.FONT_SIZE)??14;
    this.fontBetweenSpace = localStorage.getItem(environment.FONT_BETWWENSPACE)??2;
    this.timer = localStorage.getItem(environment.TIMER)??20;

    this.fontLineSpaceInput.nativeElement.value = this.fontBetweenSpace*4;
    this.fontSizeInput.nativeElement.value = this.fontSize*4;
    this.cd.detectChanges()

  }

  changeFontSize($event) {
    this.fontSize = $event.target.value/4;
    localStorage.setItem(environment.FONT_SIZE,this.fontSize)

    this.cd.detectChanges()
  }

  changeLineSpace($event)
  {
    this.fontBetweenSpace = $event.target.value/4
    localStorage.setItem(environment.FONT_BETWWENSPACE,this.fontBetweenSpace)

  }

  changeTimer($event) {

    localStorage.setItem(environment.TIMER,this.timer);


  }

  save() {

    const value = this.formGroup.value;
    //if (this.formGroup.controls.password.value.length>0 && value.password!=value.NewPassword)
    {
        console.log('ridi')
    }

    this.s
    //this.

  }

  private initForm() {

    this.formGroup = this.fb.group<IEditUser>({
      Fname: this.fb.control(UserRepository.GetFirstName(),Validators.required),
      Lname: this.fb.control(UserRepository.GetLastName(),Validators.required),
      CartNumber: this.fb.control(UserRepository.GetCartNumber()),
      LeitnerCounter: this.fb.control(UserRepository.GetLeitnerCounter(),Validators.required),
      LeitnerTimer: this.fb.control(UserRepository.GetLeitnerTimer(),Validators.required),
      Mail: this.fb.control(UserRepository.GetMail()),
      NationalCode: this.fb.control(UserRepository.GetNationalCode()),
      NewPassword: this.fb.control(''),
      password: this.fb.control(''),
      Timer: this.fb.control(Number(UserRepository.GetTimer()),Validators.required),
      Mob: this.fb.control((UserRepository.GetMobile()),Validators.required)

    })


  }
}
