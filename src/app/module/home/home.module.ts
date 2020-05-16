import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { CardataComponent } from './components/cardata/cardata.component';
import { MancarComponent } from './components/mancar/mancar.component';
import { SettingComponent } from './components/setting/setting.component';
import { UncarComponent } from './components/uncar/uncar.component';
import { EditcarComponent } from './components/editcar/editcar.component';
//storage服务
import { StorageService } from './services/storage.service';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [HomeComponent, AddcarComponent, CardataComponent, MancarComponent, SettingComponent, UncarComponent, EditcarComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
})
export class HomeModule { }
