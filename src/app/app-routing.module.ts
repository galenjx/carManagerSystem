import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ManerauthGuard } from './auth/manerauth.guard';
import { SchoolcardriverauthGuard } from './auth/schoolcardriverauth.guard';
const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(mod => mod.HomeModule),
    canActivate: [ManerauthGuard]
  },

  {
    path: 'generalhome',
    loadChildren: () => import('./module/generalhome/generalhome.module').then(mod => mod.GeneralhomeModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'schooldriverhome',
    loadChildren: () => import('./module/schooldriverhome/schooldriverhome.module').then(mod => mod.SchooldriverhomeModule),
    canActivate: [SchoolcardriverauthGuard]
  },

  {
    path: 'logres',
    loadChildren: () => import('./module/logres/logres.module').then(mod => mod.LogresModule)
  },

  

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
