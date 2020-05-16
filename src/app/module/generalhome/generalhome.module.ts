import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralhomeRoutingModule } from './generalhome-routing.module';
import { GeneralhomeComponent } from './generalhome.component';
import { EditpersonalmesComponent } from './components/editpersonalmes/editpersonalmes.component';
import { ApplyComponent } from './components/apply/apply.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GeneralhomeComponent, EditpersonalmesComponent, ApplyComponent],
  imports: [
    CommonModule,
    GeneralhomeRoutingModule,
    FormsModule
  ]
})
export class GeneralhomeModule { }
