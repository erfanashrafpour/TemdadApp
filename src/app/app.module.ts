import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "@app/_core/service/interceptor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SummeryModule} from "@app/summery/summery.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {NgbCalendar, NgbCalendarPersian, NgbDatepickerI18n, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbDatepickerI18nPersian} from "@app/_core/_config/persian-datepicker.config";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {InitService} from "@app/_core/service/init.service";
import { LoadingScreenComponent } from './_core/component/loading-screen/loading-screen.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';


// تابعی برای مقداردهی اولیه
export function initializeApp(initService: InitService): () => Promise<void> {
  return () => initService.loadAppSettings();
}



@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SummeryModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  //m
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true

    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitService], // وابستگی به سرویس InitService
      multi: true, // اجازه می‌دهد چند APP_INITIALIZER وجود داشته باشد
    },

    {provide: LocationStrategy, useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//farar maliati = 1-5 sal habs;

