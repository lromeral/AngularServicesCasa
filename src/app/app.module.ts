import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { CountriesmoduleComponent } from './countriesmodule/countriesmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesmoduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
