import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogresRoutingModule } from './logres-routing.module';
import { LogresComponent } from './logres.component';


import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LogresComponent],
  imports: [
    CommonModule,
    LogresRoutingModule,
    FormsModule
  ]
})
export class LogresModule { }
