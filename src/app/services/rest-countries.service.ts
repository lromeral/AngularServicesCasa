import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  urlCountries : string;

  constructor(private http: HttpClient) { }

  public restCountries(url:string):Observable<any[]>{
    //this.urlCountries = 'https://restcountries.eu/rest/v2/all';
    console.log ("servicio");

    return this.http.get<any[]>(url);
  };


}

