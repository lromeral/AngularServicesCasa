import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  urlCountries : string;

  constructor(private http: HttpClient) { }

  public getCountries():Observable<any>{
    this.urlCountries = 'https://restcountries.eu/rest/v2/all';
    console.log ("servicio");

    return this.http.get(this.urlCountries);
  };


}

