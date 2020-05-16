import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogresComponent } from './logres.component';
const routes: Routes = [
  {path:'',component:LogresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogresRoutingModule { }
