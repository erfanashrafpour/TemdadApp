import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MyLawListComponent} from "@app/law/my-law-list/my-law-list.component";


const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

  },
  {path:'list',
    component:BookmarkListComponent
  }
];
@NgModule({
  declarations: [
    BookmarkListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookmarkModule { }
