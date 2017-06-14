import { Component, OnInit } from '@angular/core';

import { SharedService } from './../shared.service'

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {

  private arabicDays = [ "الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"];  
  private weatherData = [];
  private degrees = [];
  private currency = [];
  private prays = [];

  constructor( private _serv: SharedService) { }

  ngOnInit() {
    this.getCurrency();
    this.getPray();
    this.getWeatherData();
  }

  

  getCurrency()
  {
    this._serv.getCurrency().subscribe(
      (data) => {
        this.currency = data[0];
      }
    )
  }

  getPray()
  {
    this._serv.getPray().subscribe(
      (data) => {
        this.prays = data[0];
      }
    )
  }


    getWeatherData()
  {
    this._serv.getWeatherData().subscribe(
      (data) => {
        this.weatherData = data.list;
        this.weatherData.forEach(element => {
          if(element.dt_txt.includes("12:00:00")){
            let dat = new Date(element.dt_txt);
            let day = dat.getDay();
            this.degrees.push([day ,Math.floor(element.main.temp-272.15), element.weather[0].icon])
          }
        });
      }
    )
  }

  // addDays(date, days, q) 
  // {
  //   var result = new Date(date);
    
  //   if(q==='n'){
  //     result.setDate(result.getDate() + days);
  //     var str = '';
  //     return str += result.getDate() + "/" + (result.getMonth() + 1);
  //   }else{
  //     result.setDate(result.getDate()+days);
  //     return result.getDay();
  //   }
  // }

}
