import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { CardataComponent } from './components/cardata/cardata.component';
import { MancarComponent } from './components/mancar/mancar.component';
import { SettingComponent } from './components/setting/setting.component';
import { UncarComponent } from './components/uncar/uncar.component';

import { EditcarComponent } from './components/editcar/editcar.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  
  {path:'',component:HomeComponent,

  children:[
    {path:'addcar',component:AddcarComponent},
    {path:'cardata',component:CardataComponent},
    {path:'mancar',component:MancarComponent},
    {path:'setting',component:SettingComponent},
    {path:'uncar',component:UncarComponent},
    {path:'editcar',component:EditcarComponent},
    {path:'search',component:SearchComponent},
    {path:'**',component:CardataComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
