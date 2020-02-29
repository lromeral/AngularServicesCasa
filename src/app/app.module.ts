import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { CountriesmoduleComponent } from './countriesmodule/countriesmodule.component';
import { PersonasComponent } from './personas/personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    CountriesmoduleComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
