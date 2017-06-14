import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/map';

import { universal } from '../universal';


@Injectable()
export class HomeService {

  private universal = universal;

  constructor(private _http: Http) { }

  getMainNews()
  {
    return this._http.get(`${this.universal.server}/api/getMainNews`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getFiveNews()
  {
    return this._http.get(`${this.universal.server}/api/getFiveNews`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getRestNews()
  {
    return this._http.get(`${this.universal.server}/api/getRestNews`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getLocalNews()
  {
    return this._http.get(`${this.universal.server}/api/getLocalNews`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getInternationalNews()
  {
    return this._http.get(`${this.universal.server}/api/getInternationalNews`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

}
