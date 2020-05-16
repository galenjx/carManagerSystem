import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyComponent } from './components/apply/apply.component';
import { SchooldriverhomeComponent } from './schooldriverhome.component';
import { EditpersonalmesComponent } from './components/editpersonalmes/editpersonalmes.component';
const routes: Routes = [
  {path:'',component:SchooldriverhomeComponent,

  children:[
    {path:'editpersonalmes',component:EditpersonalmesComponent},
    {path:'apply',component:ApplyComponent},
    
    {path:'**',component:EditpersonalmesComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchooldriverhomeRoutingModule { }
