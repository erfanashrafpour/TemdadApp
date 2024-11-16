import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@app/auth-module/service/auth.service";
import {environment} from "@environments/environment";



interface ILoginForm {
  username:FormControl<string>,
  password:FormControl<string>

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup : FormGroup<ILoginForm>;

  constructor( private fb:FormBuilder , private route:Router ,private authService:AuthService) { }

  ngOnInit(): void {

    window.localStorage.removeItem(environment.TOKEN_KEY)
    this.initForm();



  }


  login()
  {


    const value = this.formGroup.value;



    this.authService.Login(value.username , value.password).subscribe(res=>{


      if (res.statusCode==200)
      {



        localStorage.setItem(environment.USER_PASS,JSON.stringify(res.data))
        localStorage.setItem(environment.TOKEN_KEY,res.data.Token)
        this.route.navigate(['/'], { replaceUrl: true })


      }


    });
/*
    this.authService.isAuthenticated().then(res=>{

      if (res)
      {
        this.route.navigate(['/'], { replaceUrl: true })
      }
    });*/

  }

  private initForm() {

    this.formGroup = this.fb.group<ILoginForm>({
        username: this.fb.control('',Validators.required),
        password: this.fb.control('',Validators.required),

      }

    )
  }
}



