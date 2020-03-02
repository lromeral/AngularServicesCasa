import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient ) {
  }

  getPronostico (lat: number, long: number): Observable<any[]>{
      let sToken: string='df79bb0a6882db362aa79d760f43183a';
      let stringUrl: string= 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long  + '&appid=' + sToken;

      return this.http.get<any[]>(stringUrl);
  }
}
