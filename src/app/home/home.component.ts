import { Component, OnInit } from '@angular/core';

import { universal } from '../universal';
import {HomeService} from './home.service';

 



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  universal = universal;  

  
  
  private mainNews = [];
  private fiveNews = [];
  private restNews = [];  
  private localNews = [];
  private internatinalNews = [];
  
  

  constructor(private _serv: HomeService) {

   }

  ngOnInit() {
    this.getMainNews();
    this.getFiveNews();
    this.getRestNews();
    this.getLocalNews();
    this.getInternationalNews();
  }

  getMainNews()
  {
    this._serv.getMainNews().subscribe(
      (data) => {
        this.mainNews = data;
      }
    )
  }

  getFiveNews()
  {
    this._serv.getFiveNews().subscribe(
      (data) => {
        this.fiveNews = data;
      }
    )
  }

  getRestNews()
  {
    this._serv.getRestNews().subscribe(
      (data) => {
        this.restNews = data;
      }
    )
  }

  getLocalNews()
  {
    this._serv.getRestNews().subscribe(
      (data) => {
        this.localNews = data;
      }
    )
  }

  getInternationalNews()
  {
    this._serv.getInternationalNews().subscribe(
      (data) => {
        this.internatinalNews = data;
      }
    )
  }

}
