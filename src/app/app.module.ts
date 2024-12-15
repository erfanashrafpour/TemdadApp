import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "@app/_core/service/interceptor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SummeryModule} from "@app/summery/summery.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SummeryModule,

  ],
  //m
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//farar maliati = 1-5 sal habs;

