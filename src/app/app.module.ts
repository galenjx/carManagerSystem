import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { LogresComponent } from './components/logres/logres.component';
// import { CardataComponent } from './module/cardata/cardata.component';
// import { AddcarComponent } from './module/addcar/addcar.component';
// import { AddcarformComponent } from './module/addcar/components/addcarform/addcarform.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // LogresComponent,
    // CardataComponent,
    // AddcarComponent,
    // AddcarformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
