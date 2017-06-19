import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ScandHeadComponent } from './home/scand-head/scand-head.component';
import {HomeService} from './home/home.service';

// news related
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';
import { NewsService } from './news/news.service';
//end news related

//video related
import { VideosComponent } from './videos/videos.component';

//end video related

import { RightSideComponent } from './shared/right-side/right-side.component'
import { SharedService } from './shared/shared.service';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ScandHeadComponent,
    NewsComponent,
    SingleNewsComponent,
    VideosComponent,
    RightSideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HomeService, SharedService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
