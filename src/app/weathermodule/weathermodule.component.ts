import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weathermodule',
  templateUrl: './weathermodule.component.html',
  styleUrls: ['./weathermodule.component.css']
})
export class WeathermoduleComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  geoLoc: Position = null;

  ngOnInit(): void {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        loc => this.geoLoc= loc,
        err => console.log(err)
      );
    }
    else {
      console.log("No geoloc");
    }
    /*
          this.weatherService.getPronostico(this.geoLoc.coords.latitude ,this.geoLoc.coords.longitude).subscribe(
            res => console.log(res),
            err => console.log(err),
            ()=> console.log('ok'));
     */


  }



}
