import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private sub: Subscription;
  private id: number;
  private news = [];

  constructor( private aRoute: ActivatedRoute,
               private _serv: NewsService) { }

  ngOnInit() {
    /* this method used to change the data of news. if we use the regular method, it will not work
    // simply becuse the component initilazed and it will not call the getNews.. again. by this method we use observer in the router params
    // and subscribe news whenever it change */
    this.sub = this.aRoute.params.subscribe( 
      (params) => {
        this.id = +params['id'];
        this.getNewsByCategory();        
      }
    );
  }

  getNewsByCategory()
  {
    this._serv.getNewsByCategory(this.id).subscribe(
      (data) => this.news = data
    )
  }

}
