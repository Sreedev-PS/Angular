import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataToken } from './tokenfolder/tokenFile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  {provide:DataToken,useValue:{
    name:'My Name is Developer.',
    age:25
  }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
