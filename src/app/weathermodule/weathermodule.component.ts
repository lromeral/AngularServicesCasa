import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {  IWeather } from './weather.json';

@Component({
  selector: 'app-weathermodule',
  templateUrl: './weathermodule.component.html',
  styleUrls: ['./weathermodule.component.css']
})
export class WeathermoduleComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  geoLoc: Position = null;
  weatherData: any[] = [];
  weatherDataPerDay: any[]=[];
  weatherCols: any[] = [
    {id:'0', nombre:'Hora'},
    {id:'1', nombre:'Temperatura'},
    {id:'2', nombre:'Humedad'},
    {id:'3', nombre:'Presión'},
    {id:'4', nombre:'icono'},
    {id:'5', nombre:'Descripcion'},
    {id:'6', nombre:'Nubes'}
  ];
  
  weekDays: string[]=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

  utcHourMilliseconds: number=1 * 60 * 60 * 1000;

  

  ngOnInit(): void {


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        loc => this.getWeather(loc),
        err => console.log(err)
      );
    }
    else {
      console.log("No geoloc");
    }


  }

  getWeather(loc: Position) {
    this.weatherService.getPronostico(loc.coords.latitude, loc.coords.longitude).subscribe(
      res => {
        this.weatherData = res['list'];
        
        //console.log(this.weatherData);
      }
      ,
      err => console.log(err),
      () => {
        this.weatherDataPerDay=this.getWeatherPerDay(this.weatherData);
        });
  }

  getWeatherPerDay(data: any[]):any[]{
    console.log('eeee');
    var res: any[]=[];

    data.forEach((element,indice) =>{
      console.log(this.weekDays[new Date(element.dt*1000).getDay()-1]);
      //console.log(new Date(element.dt * 1000) + " " + indice) ;
      
    } );
    
      
    
    return this.weekDays;

  }

}
