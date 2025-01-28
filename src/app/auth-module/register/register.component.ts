import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@app/auth-module/service/auth.service";
import {environment} from "@environments/environment";
import {ToasterService} from "@app/_core/service/toaster.service";





interface IRegisterForm {
  FirstName:FormControl<string>,
  LastName:FormControl<string>
  Mobile:FormControl<string>
  Password:FormControl<string>
  RepeatPassword:FormControl<string>
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup : FormGroup<IRegisterForm>;

  constructor( private toast:ToasterService ,private fb:FormBuilder , private route:Router ,private authService:AuthService) { }

  ngOnInit(): void {

    window.localStorage.removeItem(environment.TOKEN_KEY)
    this.initForm();



  }


  register()
  {


    const value = this.formGroup.value;

    if (value.Password!=value.RepeatPassword)
    {
        this.toast.error('تکرار رمز عبور به درستی وارد نشده!')
      return;
    }



    this.authService.Register(value.FirstName,value.LastName,value.Mobile,value.Password)
      .subscribe(res=>{
      if (res.statusCode==200)
      {
        localStorage.setItem(environment.USER_PASS,JSON.stringify(res.data))
        localStorage.setItem(environment.TOKEN_KEY,res.data.Token)
        //this.route.navigate(['/'], { replaceUrl: true })
      }
    });

  }

  private initForm() {
    this.formGroup = this.fb.group<IRegisterForm>({
        FirstName: this.fb.control('',Validators.required),
        LastName: this.fb.control('',Validators.required),
        Mobile: this.fb.control('',Validators.required),
        Password: this.fb.control('',Validators.required),
        RepeatPassword: this.fb.control('',Validators.required),
      }

    )
  }
}

