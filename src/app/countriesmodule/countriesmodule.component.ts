import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestCountriesService } from '../services/rest-countries.service'
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-countriesmodule',
  templateUrl: './countriesmodule.component.html',
  styleUrls: ['./countriesmodule.component.css']
})
export class CountriesmoduleComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }



  showCountries(){
    
    console.log ("showCountries");
  }
}
