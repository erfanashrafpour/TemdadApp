import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path:'',
    component:MainComponent,
    children:[

      {path:'lesson',
        loadChildren: () => import('../Lesson/lesson.module').then(m => m.LessonModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    TopBarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
