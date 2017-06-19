import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/map';

import { universal } from '../universal';

@Injectable()
export class NewsService {

  private universal = universal;


  constructor(private _http: Http) { }

  getSingleNews(id)
  {
    return this._http.get(`${this.universal.server}/api/getSingleNews/${id}`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getNewsByCategory(id)
  {
    return this._http.get(`${this.universal.server}/api/getNewsByCategory/${id}`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getRelatedNews(id, num)
  {
    return this._http.get(`${this.universal.server}/api/getRelatedNews/${id}/${num}`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getLatestNews(num)
  {
    return this._http.get(`${this.universal.server}/api/getLatestNews/${num}`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getMostWatchedNews(num)
  {
    return this._http.get(`${this.universal.server}/api/getMostWatchedNews/${num}`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }

  getYesterdayNews(num)
  {
    return this._http.get(`${this.universal.server}/api/getYesterdayNews/${num}`)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
  }
}
