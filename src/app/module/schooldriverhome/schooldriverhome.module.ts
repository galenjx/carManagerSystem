import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchooldriverhomeRoutingModule } from './schooldriverhome-routing.module';
import { ApplyComponent } from './components/apply/apply.component';
import { SchooldriverhomeComponent } from './schooldriverhome.component';
import { EditpersonalmesComponent } from './components/editpersonalmes/editpersonalmes.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ApplyComponent, SchooldriverhomeComponent, EditpersonalmesComponent],
  imports: [
    CommonModule,
    SchooldriverhomeRoutingModule,
    FormsModule
  ]
})
export class SchooldriverhomeModule { }
