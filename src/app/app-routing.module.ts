import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:"full"
  }
  ,
  {path:'login',
    loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  {path:'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
