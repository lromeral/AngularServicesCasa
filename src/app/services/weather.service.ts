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
      let sToken: string='8a74115ead76512425ee50d4249fae0e';
      let stringUrl: string= 'pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + lat + '&lon=' + long  + '&appid=' + sToken;

      return this.http.get<any[]>(stringUrl);
  }
}
