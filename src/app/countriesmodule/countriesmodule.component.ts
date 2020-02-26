import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestCountriesService } from '../services/rest-countries.service'
import { ICountry } from './country.json'
import { element } from 'protractor';
import { isNgTemplate } from '@angular/compiler';



@Component({
  selector: 'app-countriesmodule',
  templateUrl: './countriesmodule.component.html',
  styleUrls: ['./countriesmodule.component.css'],

})
export class CountriesmoduleComponent implements OnInit {

  constructor(
    private c: RestCountriesService
    ) { }


  pais: Array<ICountry>;
  first:number;
  cols:Array<String>=["Nombre","Bandera"];
  miArray: any[];
  miArray2: any[];

  ngOnInit(): void {

    this.pais=[];
    this.first=0;
    this.miArray=[];
    this.miArray2=[];


    for(let i=0; i<10; i++){
      this.miArray2.push(
        {
          nombre:'nombre',
          bandera:'bandera'
        }
      );
    }




    //Carga los datos en el array pais
    this.c.restCountries('https://restcountries.eu/rest/v2/all').subscribe(
      (miArray) => {
      //this.miArray=datos;
        miArray.forEach((elemento:any[]) => {
          console.log ('.');
        });
      }).unsubscribe;

    console.log(this.miArray.length);
  }
}
