import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap, throwError} from "rxjs";
import {environment} from "@environments/environment";
import {LoaderService} from "@app/_core/service/loader.service";
import {ToasterService} from "@app/_core/service/toaster.service";

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(  private  router : Router , private loader:LoaderService,private tosat:ToasterService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loader.showLoading()


const isInRegister = request.url.includes('Register');


    const tokenString = window.localStorage.getItem(environment.TOKEN_KEY)??''
    if (tokenString.length==0 && !isInRegister)
    {

      this.router.navigateByUrl("/Auth")

    }
    let headers: { token: any };
  headers = {token: tokenString};

  request = request.clone({
    setHeaders: {
      ...headers
    },
  });

  return next.handle(request).pipe(tap
    (
      (event) => {



        if ( (event instanceof HttpResponse) )
        {



          this.loader.hideLoading()

          if (event?.status==401)
          {
            this.router.navigateByUrl("/Auth")

          }

          if ( event?.body?.statusCode!=200)
          {
            if (event?.body?.statusCode==401)
            {
              this.router.navigateByUrl("/Auth")
            }
            this.tosat.error(event.body.message)
          }
        }

      },
      (error) => {

        this.loader.hideLoading()
        if (error instanceof HttpErrorResponse)
        {
          if (error.status==401)
            this.router.navigateByUrl("/Auth")

        }
        return throwError(error);

      }
    )
  );

}
}
