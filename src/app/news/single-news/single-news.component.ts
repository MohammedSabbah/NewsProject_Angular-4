import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


import { NewsService } from './../news.service';
import { universal } from './../../universal';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

  private sub: Subscription;
  private universal = universal;
  private id: number;
  private snews = [];
  private relatedNews = [];
  private sideNews = [];
  private latest_is_active = 'active';
  private most_is_active = '';
  private yesterday_is_active = '';

  constructor( 
    private aRoute: ActivatedRoute,
    private _serv: NewsService
    ) {  }

  ngOnInit() {
    this.sub = this.aRoute.params.subscribe(
      params => {
        this.id = +params['id'];
        this.getSingleNews();
        this.getRelatedNews();
        this.getLatestNews();
      }
    )
    this.latest_is_active = 'active';
    this.yesterday_is_active = '';       
    this.most_is_active = '';
  }

  getSingleNews(){
    this._serv.getSingleNews(this.id).subscribe(
      (data) => {
        this.snews = data;
      }
    )
  }  

  getRelatedNews()
  {
    this._serv.getRelatedNews(this.id, 3).subscribe(
      data => {
        this.relatedNews = data;
      }
    )
  }

  getLatestNews()
  {
    this._serv.getLatestNews(5).subscribe(
      (data) => {
        this.sideNews = data;
      }
    )
  }

  getMostWatched()
  {
    this._serv.getMostWatchedNews(5).subscribe(
      (data) => {
        this.sideNews = data;
      }
    )
  }

  getYesterdayNews()
  {
    this._serv.getYesterdayNews(5).subscribe(
      (data) => {
        this.sideNews = data;
      }
    )
  }

  toogle(which)
  {
    if(which === 1){
      this.getLatestNews()
      this.latest_is_active = 'active';
      this.yesterday_is_active = '';       
      this.most_is_active = '';              
    }else if(which === 2){
      this.getMostWatched()
      this.most_is_active = 'active';
      this.latest_is_active = '';       
      this.yesterday_is_active = '';         
    }else if(which === 3){
      this.getYesterdayNews()
      this.yesterday_is_active = 'active';
      this.most_is_active = '';
      this.latest_is_active = '';    
      
    }
  }

}
