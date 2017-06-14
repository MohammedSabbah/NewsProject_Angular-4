import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from './../news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

  private id: number;
  private snews = [];

  constructor( 
    private aRoute: ActivatedRoute,
    private _serv: NewsService
    ) { }

  ngOnInit() {
    this.aRoute.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    this.getSingleNews();
  }

  getSingleNews(){
    this._serv.getSingleNews(this.id).subscribe(
      (data) => {
        this.snews = data[0];
        console.log(this.snews)
      }
    )
  }  

}
