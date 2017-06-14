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
}
