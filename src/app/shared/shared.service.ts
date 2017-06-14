import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/map';

import { universal } from './../universal';


@Injectable()
export class SharedService {

    private universal = universal

  constructor(private _http: Http) { }

  getWeatherData()
  {
    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=281132&APPID=68d53862b226c57ec72824a3e116cf59`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getCurrency()
  {
    return this._http.get(`${this.universal.server}/api/currency`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getPray()
  {
    return this._http.get(`${this.universal.server}/api/pray`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }
  
}
