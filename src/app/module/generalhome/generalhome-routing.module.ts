import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GeneralhomeComponent } from './generalhome.component';
import { EditpersonalmesComponent } from './components/editpersonalmes/editpersonalmes.component';
import { ApplyComponent } from './components/apply/apply.component';

const routes: Routes = [
  {path:'',component:GeneralhomeComponent,

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
export class GeneralhomeRoutingModule { }
